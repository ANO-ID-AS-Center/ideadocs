# Мониторинг
Для отслеживания работы фабрики мы воспользовались Prometheus и Grafana, в данной секции подробнее расскажем, как его настроить, например в новом проекте.

## Docker Compose 

Ниже приведен пример докер-компоуз файла, использованного в тестовом стенде
```yaml
services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    hostname: prometheus
    restart: always
    tty: true
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - 9090:9090
    extra_hosts:
      - "orderer.example.com:188.166.61.6"
      - "orderer2.example.com:104.248.203.58"
      - "orderer3.example.com:134.209.84.187"
      - "orderer4.example.com:142.93.226.97"
      - "peer0.org1.example.com:188.166.61.6"
      - "peer1.org1.example.com:188.166.61.6"
      - "peer0.org2.example.com:188.166.61.6"
      - "peer1.org2.example.com:188.166.61.6"

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    hostname: grafana
    environment:
      - GF_AUTH_PROXY_ENABLED=true
      - GF_PATHS_PROVISIONING=/var/lib/grafana/provisioning/
    volumes:
      - ./provisioning/:/var/lib/grafana/provisioning/
    ports:
      - 3000:3000
    depends_on:
      - prometheus
    extra_hosts:
      - "orderer.example.com:188.166.61.6"
      - "orderer2.example.com:104.248.203.58"
      - "orderer3.example.com:134.209.84.187"
      - "orderer4.example.com:142.93.226.97"
      - "peer0.org1.example.com:188.166.61.6"
      - "peer1.org1.example.com:188.166.61.6"
      - "peer0.org2.example.com:188.166.61.6"
      - "peer1.org2.example.com:188.166.61.6"
```

Т.е. мы запускаем два контейнера и пробрасываем порты `3000` и `9000` для графаны и прометеуса соответственно. 

### prometheus.yaml
Для сбора метрик, мы используем файл конфигурации, где описано на какие IP адреса ходить и с каким интервалом получать метрики
```yaml
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
# - "first_rules.yml"
# - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"
    static_configs:
      - targets: ["localhost:9090"]
  - job_name: "orderer"
    static_configs:
      - targets: ["orderer.example.com:9445"]
  - job_name: "orderer2"
    static_configs:
      - targets: ["orderer2.example.com:9445"]
  - job_name: "orderer3"
    static_configs:
      - targets: ["orderer3.example.com:9445"]
  - job_name: "orderer4"
    static_configs:
      - targets: ["orderer4.example.com:9445"]
  - job_name: "peer0_org1"
    static_configs:
      - targets: ["peer0.org1.example.com:9441"]
  - job_name: "peer0_org2"
    static_configs:
      - targets: ["peer0.org2.example.com:9443"]
```

### datasource.yaml
Помимо файла конфигурации Prometheus, нам также понадобятся дашборды графаны (готовые графики) и конфигурация источников данных, чтобы мы могли сразу видеть, как работает сеть.  Конфигурацию дашбордов можно посмотреть по ссылке (TODO: Сделать ссылку на дашборд), а конфигурация источников приведена ниже:
```yaml
apiVersion: 1

deleteDatasources:
  - name: "Prometheus"
    orgId: 1

datasources:
  - name: "Prometheus"
    type: "prometheus"
    access: "proxy"
    orgId: 1
    url: "http://prometheus:9090"
    isDefault: true
    version: 1
    editable: false
```




## Изменения в запуске фабрики
Для того, чтобы фабрика отдавала метрики, нужно дополнительно передать в переменные окружения следующие параметры:

- Для ордерера:
```bash
ORDERER_METRICS_PROVIDER=prometheus
CORE_OPERATIONS_LISTENADDRESS=0.0.0.0:9443 # или любой другой порт
```

- Для пира:
```bash
CORE_METRICS_PROVIDER=prometheus
CORE_OPERATIONS_LISTENADDRESS=0.0.0.0:9441 # или любой другой порт
```