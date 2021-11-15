## Настройка Filebeat
Один из самых обобщенных способов отправить логи в Elastic, это просматривать лог файлы приложения, и отправлять обновления. Для этого мы можем воспользоваться Filebeat - это агент, работающий с текстовыми файлами логов. Он смотрит на обновления файла с логами и отправляет их на сервер. Также можно описать правила, по которым логи будут обработаны перед отправкой, это позволит задать структуру над данными, чтобы впоследствие из можно было проще анализиоровать.

```
# Пример файла конфигурации Filebeat
```

Помимо работы с текстовыми файлами, Filebeat умеет также работать с логами докер контейнеров. 

## Подключение логов, полученных из Filebeat в Kibana

- Изображение 1
- Изображение 2
- Изображение 3
- Изображение 4
