import{_ as n,c as s,o as a,a as t}from"./app.2c9d185c.js";const d='{"title":"\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433","description":"","frontmatter":{},"headers":[{"level":2,"title":"Docker Compose","slug":"docker-compose"},{"level":3,"title":"prometheus.yaml","slug":"prometheus-yaml"},{"level":3,"title":"datasource.yaml","slug":"datasource-yaml"},{"level":2,"title":"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u0444\u0430\u0431\u0440\u0438\u043A\u0438","slug":"\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F-\u0432-\u0437\u0430\u043F\u0443\u0441\u043A\u0435-\u0444\u0430\u0431\u0440\u0438\u043A\u0438"}],"relativePath":"bft/monitoring.md","lastUpdated":1637070759904}',e={},p=t(`__VP_STATIC_START__<h1 id="\u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433" tabindex="-1">\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433 <a class="header-anchor" href="#\u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433" aria-hidden="true">#</a></h1><p>\u0414\u043B\u044F \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0444\u0430\u0431\u0440\u0438\u043A\u0438 \u043C\u044B \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438\u0441\u044C Prometheus \u0438 Grafana, \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0435\u043A\u0446\u0438\u0438 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C, \u043A\u0430\u043A \u0435\u0433\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0432 \u043D\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435.</p><h2 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a></h2><p>\u041D\u0438\u0436\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D \u043F\u0440\u0438\u043C\u0435\u0440 \u0434\u043E\u043A\u0435\u0440-\u043A\u043E\u043C\u043F\u043E\u0443\u0437 \u0444\u0430\u0439\u043B\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0432 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u043C \u0441\u0442\u0435\u043D\u0434\u0435</p><div class="language-yaml"><pre><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">prometheus</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/prometheus<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./prometheus.yml<span class="token punctuation">:</span>/etc/prometheus/prometheus.yml
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9090<span class="token punctuation">:</span><span class="token number">9090</span>
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;orderer.example.com:188.166.61.6&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;orderer2.example.com:104.248.203.58&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;orderer3.example.com:134.209.84.187&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;orderer4.example.com:142.93.226.97&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;peer0.org1.example.com:188.166.61.6&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;peer1.org1.example.com:188.166.61.6&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;peer0.org2.example.com:188.166.61.6&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;peer1.org2.example.com:188.166.61.6&quot;</span>

  <span class="token key atrule">grafana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/grafana<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grafana
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> grafana
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> GF_AUTH_PROXY_ENABLED=true
      <span class="token punctuation">-</span> GF_PATHS_PROVISIONING=/var/lib/grafana/provisioning/
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./provisioning/<span class="token punctuation">:</span>/var/lib/grafana/provisioning/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">3000</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> prometheus
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;orderer.example.com:188.166.61.6&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;orderer2.example.com:104.248.203.58&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;orderer3.example.com:134.209.84.187&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;orderer4.example.com:142.93.226.97&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;peer0.org1.example.com:188.166.61.6&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;peer1.org1.example.com:188.166.61.6&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;peer0.org2.example.com:188.166.61.6&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;peer1.org2.example.com:188.166.61.6&quot;</span>
</code></pre></div><p>\u0422.\u0435. \u043C\u044B \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0434\u0432\u0430 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u0438 \u043F\u0440\u043E\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u043C \u043F\u043E\u0440\u0442\u044B <code>3000</code> \u0438 <code>9000</code> \u0434\u043B\u044F \u0433\u0440\u0430\u0444\u0430\u043D\u044B \u0438 \u043F\u0440\u043E\u043C\u0435\u0442\u0435\u0443\u0441\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E.</p><h3 id="prometheus-yaml" tabindex="-1">prometheus.yaml <a class="header-anchor" href="#prometheus-yaml" aria-hidden="true">#</a></h3><p>\u0414\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u043C\u0435\u0442\u0440\u0438\u043A, \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0444\u0430\u0439\u043B \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u0433\u0434\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0430 \u043A\u0430\u043A\u0438\u0435 IP \u0430\u0434\u0440\u0435\u0441\u0430 \u0445\u043E\u0434\u0438\u0442\u044C \u0438 \u0441 \u043A\u0430\u043A\u0438\u043C \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043C\u0435\u0442\u0440\u0438\u043A\u0438</p><div class="language-yaml"><pre><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 15s <span class="token comment"># Set the scrape interval to every 15 seconds. Default is every 1 minute.</span>
  <span class="token key atrule">evaluation_interval</span><span class="token punctuation">:</span> 15s <span class="token comment"># Evaluate rules every 15 seconds. The default is every 1 minute.</span>

<span class="token key atrule">alerting</span><span class="token punctuation">:</span>
  <span class="token key atrule">alertmanagers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
          <span class="token comment"># - alertmanager:9093</span>

<span class="token comment"># Load rules once and periodically evaluate them according to the global &#39;evaluation_interval&#39;.</span>
<span class="token key atrule">rule_files</span><span class="token punctuation">:</span>
<span class="token comment"># - &quot;first_rules.yml&quot;</span>
<span class="token comment"># - &quot;second_rules.yml&quot;</span>

<span class="token comment"># A scrape configuration containing exactly one endpoint to scrape:</span>
<span class="token comment"># Here it&#39;s Prometheus itself.</span>
<span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
  <span class="token comment"># The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries scraped from this config.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;prometheus&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9090&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;orderer&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;orderer.example.com:9445&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;orderer2&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;orderer2.example.com:9445&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;orderer3&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;orderer3.example.com:9445&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;orderer4&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;orderer4.example.com:9445&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;peer0_org1&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;peer0.org1.example.com:9441&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;peer0_org2&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;peer0.org2.example.com:9443&quot;</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="datasource-yaml" tabindex="-1">datasource.yaml <a class="header-anchor" href="#datasource-yaml" aria-hidden="true">#</a></h3><p>\u041F\u043E\u043C\u0438\u043C\u043E \u0444\u0430\u0439\u043B\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Prometheus, \u043D\u0430\u043C \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u044F\u0442\u0441\u044F \u0434\u0430\u0448\u0431\u043E\u0440\u0434\u044B \u0433\u0440\u0430\u0444\u0430\u043D\u044B (\u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0438) \u0438 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u0434\u0430\u043D\u043D\u044B\u0445, \u0447\u0442\u043E\u0431\u044B \u043C\u044B \u043C\u043E\u0433\u043B\u0438 \u0441\u0440\u0430\u0437\u0443 \u0432\u0438\u0434\u0435\u0442\u044C, \u043A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u0435\u0442\u044C. \u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0434\u0430\u0448\u0431\u043E\u0440\u0434\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 (TODO: \u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0434\u0430\u0448\u0431\u043E\u0440\u0434), \u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0438\u0436\u0435:</p><div class="language-yaml"><pre><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">deleteDatasources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;Prometheus&quot;</span>
    <span class="token key atrule">orgId</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">datasources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;Prometheus&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;prometheus&quot;</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> <span class="token string">&quot;proxy&quot;</span>
    <span class="token key atrule">orgId</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;http://prometheus:9090&quot;</span>
    <span class="token key atrule">isDefault</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">editable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre></div><h2 id="\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F-\u0432-\u0437\u0430\u043F\u0443\u0441\u043A\u0435-\u0444\u0430\u0431\u0440\u0438\u043A\u0438" tabindex="-1">\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u0444\u0430\u0431\u0440\u0438\u043A\u0438 <a class="header-anchor" href="#\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F-\u0432-\u0437\u0430\u043F\u0443\u0441\u043A\u0435-\u0444\u0430\u0431\u0440\u0438\u043A\u0438" aria-hidden="true">#</a></h2><p>\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0444\u0430\u0431\u0440\u0438\u043A\u0430 \u043E\u0442\u0434\u0430\u0432\u0430\u043B\u0430 \u043C\u0435\u0442\u0440\u0438\u043A\u0438, \u043D\u0443\u0436\u043D\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0432 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B:</p><ul><li>\u0414\u043B\u044F \u043E\u0440\u0434\u0435\u0440\u0435\u0440\u0430:</li></ul><div class="language-bash"><pre><code><span class="token assign-left variable">ORDERER_METRICS_PROVIDER</span><span class="token operator">=</span>prometheus
<span class="token assign-left variable">CORE_OPERATIONS_LISTENADDRESS</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0:9443 <span class="token comment"># \u0438\u043B\u0438 \u043B\u044E\u0431\u043E\u0439 \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u043E\u0440\u0442</span>
</code></pre></div><ul><li>\u0414\u043B\u044F \u043F\u0438\u0440\u0430:</li></ul><div class="language-bash"><pre><code><span class="token assign-left variable">CORE_METRICS_PROVIDER</span><span class="token operator">=</span>prometheus
<span class="token assign-left variable">CORE_OPERATIONS_LISTENADDRESS</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0:9441 <span class="token comment"># \u0438\u043B\u0438 \u043B\u044E\u0431\u043E\u0439 \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u043E\u0440\u0442</span>
</code></pre></div>__VP_STATIC_END__`,18),o=[p];function c(u,l,r,k,i,m){return a(),s("div",null,o)}var y=n(e,[["render",c]]);export{d as __pageData,y as default};
