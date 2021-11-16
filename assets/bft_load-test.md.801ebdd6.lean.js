import{_ as t,c as e,o as a,a as o}from"./app.2c9d185c.js";const m='{"title":"\u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0435\u0442\u0438","description":"","frontmatter":{},"relativePath":"bft/load-test.md","lastUpdated":1637070759904}',i={},r=o(`__VP_STATIC_START__<h1 id="\u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430-\u0441\u0435\u0442\u0438" tabindex="-1">\u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0435\u0442\u0438 <a class="header-anchor" href="#\u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430-\u0441\u0435\u0442\u0438" aria-hidden="true">#</a></h1><p>\u0414\u043B\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043D\u0430 \u0441\u0435\u0442\u044C \u043C\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043B\u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0442\u0430\u043A \u043A\u0430\u043A \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 BFT \u043D\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u043D\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0440\u0434\u0435\u0440\u0435\u0440, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0438 \u043C\u043E\u0433\u043B\u0438 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0438\u0439\u0442\u0438 \u043A \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044E.</p><p>\u041E\u0442\u0441\u044E\u0434\u0430 \u043C\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u043C\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u0430\u043A Hyperledger Caliper, \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C Fabric Node SDK, \u0430 SmartBFT (\u043F\u043E\u043A\u0430) \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u043E\u0439 \u043D\u0430 Go.</p><p>\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439 \u0441 \u043A\u043E\u0434\u043E\u043C \u0434\u043B\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 (\u0438\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0431\u0438\u043D\u0430\u0440\u043D\u0438\u043A)</p><div class="language-"><pre><code>git clone https://github.com/ANO-ID-AS-Center/fabric-bft-load-testing
cd fabric-bft-load-testing
go run main.go
</code></pre></div><p>\u0414\u043B\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F yaml \u0444\u0430\u0439\u043B, \u0432 \u043D\u0435\u043C \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F:</p><ol><li>\u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0431 msp, \u043E\u0442 \u0438\u043C\u0435\u043D\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438</li><li>\u043F\u0443\u0442\u044C \u043D\u0430 \u043F\u0430\u043F\u043A\u0443 \u0441 \u043A\u0440\u0438\u043F\u0442\u043E\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C\u0438</li><li>\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043B\u043E\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F</li><li>\u043F\u0440\u043E\u0447\u0438\u0435 (TODO: \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E yaml \u0444\u0430\u0439\u043B\u0430)</li></ol><p>\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u043E\u0440\u0442 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u043C\u0435\u0442\u0440\u0438\u043A, \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043C\u043E\u0436\u043D\u043E &quot;\u0441\u043A\u043E\u0440\u043C\u0438\u0442\u044C&quot; Prometheus \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F\u0445 \u0438 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0432 \u0434\u0430\u0448\u0431\u043E\u0440\u0434\u0435 \u0433\u0440\u0430\u0444\u0430\u043D\u044B.</p>__VP_STATIC_END__`,8),c=[r];function l(s,d,n,p,_,f){return a(),e("div",null,c)}var u=t(i,[["render",l]]);export{m as __pageData,u as default};