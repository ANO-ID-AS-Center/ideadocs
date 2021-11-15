# Нагрузка сети

Для нагрузки на сеть мы написали собственное приложение, так как при работе с BFT нам необходимо отправлять транзакции на каждый ордерер, чтобы они могли между собой прийти к соглашению. 

Отсюда мы не можем воспользоваться готовыми инструментами, например как Hyperledger Caliper, так как они в основном написаны с использованием Fabric Node SDK, а SmartBFT (пока) поставляется только с библиотекой на Go.

Необходимо скачать репозиторий с кодом для нагрузки (или готовый бинарник)
```
git clone https://github.com/ANO-ID-AS-Center/fabric-bft-load-testing
cd fabric-bft-load-testing
go run main.go
```

Для конфигурации используется yaml файл, в нем указывается:
1. данные об msp, от имени которого будут отправляться транзакции
2. путь на папку с криптоматериалами
3. настройки логирования
4. прочие  (TODO: посмотреть конфигурацию yaml файла)

Программа также открывает порт для сбора метрик, таким образом можно "скормить" Prometheus данные о транзакциях и для удобства вывести информация в дашборде графаны. 
