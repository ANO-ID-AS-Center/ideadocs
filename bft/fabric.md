# Разворачивание Fabric

На данном этапе мы имеем уже настроенное окружение, у нас установлен go, git, make, gcc и docker. Теперь можно продолжать с тем, чтобы получить из репозитория исходники фабрики с замененным на BFT консенсусом. 

## Установка и компиляция фабрики

```bash
# Получаем go package SmartBFT-Go/fabric - это форк фабрики с измененным 
# протоколом консенсуса. Эта операция может занять длительное время, так 
# как объемы немаленькие - запаситесь терпением.
go get github.com/SmartBFT-Go/fabric

# Переименовывыем каталог на hyperledger (мы же форк, поменяли только часть
# системы, а не вносили измнения в импорты в каждом файле)
mv ~/go/src/github.com/SmartBFT-Go ~/go/src/github.com/hyperledger

# Соберем фабрику, на новый машине инструкции make dist-clean docker-clean 
# могут быть лишними (это чистка после предыдущей компиляции), но мы не будем
# опускать. Нам же важно запустить make native docker - так мы создадим 
# нужные нам бинарники и докер образы.
cd ~/go/src/github.com/hyperledger/fabric/
make dist-clean docker-clean native docker docker-thirdparty
```
После компиляции, если все прошло успешно, должна появиться папка `.build` с артефактами: банарниками, некоторыми настройками - она нам еще понадобится, поэтому добавим их в PATH, чтобы иметь доступ к программам без указания пути

Добавьте в конец `.bashrc` файла, находящийся в корне домашней директории, следующую строчку:

```bash
export PATH=$PATH:/home/${USER}/go/src/github.com/hyperledger/fabric/.build/bin/
```

::: tip Замечание
(Опционально) В случае, если патч, корректирующий работу BFT, еще не замережен в главную ветки и мы хотим использовать сразу пропатченную 
версию, то вместо команды `go get github.com/SmartBFT-Go/fabric` выполните `go get github.com/ANO-ID-AS-Center/fabric-bft-test` и после переименуйте `src/github.com/ANO-ID-AS-Center/fabric-bft-test`
в `src/github.com/hyperledger/fabric`. Далее все как обычно.
:::


## Получение материалов и запуск
Для наших целей мы воспользуемся уже сгенерированными криптоматериалами, если необходимо, что-то изменить или узнать как это делается вручную, то ниже приведена инструкция.

```
git clone https://github.com/ANO-ID-AS-Center/fabric-bft-samples
```

В данном репозитории содержатся уже сгенерированные криптоматериалы, блоки, транзакции. А также уже настроенные docker-compose файлы и скрипты.

Осталось только запустить сеть:
```bash
# chmod +x ./up.sh
./up.sh
```

Данный скрипт:
1. запускает контейнеры с фабрикой, прометеусом и графаной  
    контейнеры фабрики представляют собой - 2 пира и CLI 
3. копирует внутрь cli скрипты по запуску канала и установке чейнкода

- __Prometheus__ - сервис сбора метрик
- __Grafana__ - инструмент визуализации, собранных с помощью Premetheus метрик. В нем мы будем работать с дашбордами, мониторить работу сервисов.

После успешной работы, можем зайти на `http://<ip-of-server>:3000`, ввести данные: пользователь `admin`, пароль `admin` и мы увидим визуализацию метрик работающей сети

- TODO: Изображение Graphana

С разворачиванием фабрики мы заканчиваем, следующим логическим шагом - будет нагрузка на сеть.

## (Опционально) Генерация криптоматериалов и блоков
В нашей рабочей папке, мы имеем `crypto-config.yaml` и `configtx.yaml`, они нам как раз и понадобятся.
Так как мы прописали в PATH пути к скомпилированным программам, то `cryptogen` и `configtxgen` должны нам быть доступны из любой директории.

Выполняем:
```bash
# Генерируем криптоматериалы
cryptogen generate --config=./crypto-config.yaml

# Добавляем переменную для работы с configtxgen
export FABRIC_CFG_PATH=$PWD

# Создаем папку channel-artifacts, если ее нет, может выйти ошибка
mkdir channel-artifacts

# Создаем orderer genesis block 
configtxgen -profile SampleMultiNodeSmartBFT -channelID byfn-sys-channel -outputBlock ./channel-artifacts/genesis.block

# Создаем транзакцию инициализации канала
export CHANNEL_NAME=mychannel
configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID $CHANNEL_NAME

configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID $CHANNEL_NAME -asOrg Org1MSP
configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID $CHANNEL_NAME -asOrg Org2MSP
```

В репозитории есть файл с уже описанными инструкциями, которые заново создаем криптоматериалы, блоки и транзакции `generate-materials.sh`
