"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86442],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=m(t),d=r,u=g["".concat(p,".").concat(d)]||g[d]||y[d]||o;return t?n.createElement(u,i(i({ref:a},s),{},{components:t})):n.createElement(u,i({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56638:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=t(58168),r=(t(96540),t(15680));const o={title:"\u76d1\u63a7\u548c\u62a5\u8b66",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/maint-monitor/monitor-alert",id:"version-2.0/admin-manual/maint-monitor/monitor-alert",title:"\u76d1\u63a7\u548c\u62a5\u8b66",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/maint-monitor/monitor-alert.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/monitor-alert",permalink:"/zh-CN/docs/admin-manual/maint-monitor/monitor-alert",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u76d1\u63a7\u548c\u62a5\u8b66",language:"zh-CN"},sidebar:"docs",previous:{title:"Tablet \u6062\u590d\u5de5\u5177",permalink:"/zh-CN/docs/admin-manual/maint-monitor/tablet-restore-tool"},next:{title:"Tablet \u672c\u5730\u8c03\u8bd5",permalink:"/zh-CN/docs/admin-manual/maint-monitor/tablet-local-debug"}},p={},m=[{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"\u76d1\u63a7\u6570\u636e",id:"\u76d1\u63a7\u6570\u636e",level:2},{value:"\u76d1\u63a7\u67b6\u6784",id:"\u76d1\u63a7\u67b6\u6784",level:2},{value:"\u5f00\u59cb\u642d\u5efa",id:"\u5f00\u59cb\u642d\u5efa",level:2},{value:"Prometheus",id:"prometheus",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Dashboard \u8bf4\u660e",id:"dashboard-\u8bf4\u660e",level:2},{value:"Dashboard \u66f4\u65b0",id:"dashboard-\u66f4\u65b0",level:2}],s={toc:m},g="wrapper";function y(e){let{components:a,...o}=e;return(0,r.yg)(g,(0,n.A)({},s,o,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u76d1\u63a7\u548c\u62a5\u8b66"},"\u76d1\u63a7\u548c\u62a5\u8b66"),(0,r.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Doris \u7684\u76d1\u63a7\u9879\u53ca\u5982\u4f55\u91c7\u96c6\u3001\u5c55\u793a\u76d1\u63a7\u9879\u3002\u4ee5\u53ca\u5982\u4f55\u914d\u7f6e\u62a5\u8b66\uff08TODO\uff09"),(0,r.yg)("p",null,"Dashboard \u6a21\u677f\u70b9\u51fb\u4e0b\u8f7d"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris \u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:null},"Dashboard \u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.2.x"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://grafana.com/api/dashboards/9734/revisions/5/download"},"revision 5"))))),(0,r.yg)("p",null,"Dashboard \u6a21\u677f\u4f1a\u4e0d\u5b9a\u671f\u66f4\u65b0\u3002\u66f4\u65b0\u6a21\u677f\u7684\u65b9\u5f0f\u89c1\u6700\u540e\u4e00\u5c0f\u8282\u3002"),(0,r.yg)("p",null,"\u6b22\u8fce\u63d0\u4f9b\u66f4\u4f18\u7684 dashboard\u3002"),(0,r.yg)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,r.yg)("p",null,"Doris \u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u548c ",(0,r.yg)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," \u8fdb\u884c\u76d1\u63a7\u9879\u7684\u91c7\u96c6\u548c\u5c55\u793a\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(97410).A,width:"1829",height:"982"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Prometheus"),(0,r.yg)("p",{parentName:"li"},"Prometheus \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u7cfb\u7edf\u76d1\u63a7\u548c\u62a5\u8b66\u5957\u4ef6\u3002\u5b83\u53ef\u4ee5\u901a\u8fc7 Pull \u6216 Push \u91c7\u96c6\u88ab\u76d1\u63a7\u7cfb\u7edf\u7684\u76d1\u63a7\u9879\uff0c\u5b58\u5165\u81ea\u8eab\u7684\u65f6\u5e8f\u6570\u636e\u5e93\u4e2d\u3002\u5e76\u4e14\u901a\u8fc7\u4e30\u5bcc\u7684\u591a\u7ef4\u6570\u636e\u67e5\u8be2\u8bed\u8a00\uff0c\u6ee1\u8db3\u7528\u6237\u7684\u4e0d\u540c\u6570\u636e\u5c55\u793a\u9700\u6c42\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grafana"),(0,r.yg)("p",{parentName:"li"},"Grafana \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u6570\u636e\u5206\u6790\u548c\u5c55\u793a\u5e73\u53f0\u3002\u652f\u6301\u5305\u62ec Prometheus \u5728\u5185\u7684\u591a\u4e2a\u4e3b\u6d41\u65f6\u5e8f\u6570\u636e\u5e93\u6e90\u3002\u901a\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u67e5\u8be2\u8bed\u53e5\uff0c\u4ece\u6570\u636e\u6e90\u4e2d\u83b7\u53d6\u5c55\u73b0\u6570\u636e\u3002\u901a\u8fc7\u7075\u6d3b\u53ef\u914d\u7f6e\u7684 Dashboard\uff0c\u5feb\u901f\u7684\u5c06\u8fd9\u4e9b\u6570\u636e\u4ee5\u56fe\u8868\u7684\u5f62\u5f0f\u5c55\u793a\u7ed9\u7528\u6237\u3002"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8: \u672c\u6587\u6863\u4ec5\u63d0\u4f9b\u4e00\u79cd\u4f7f\u7528 Prometheus \u548c Grafana \u8fdb\u884c Doris \u76d1\u63a7\u6570\u636e\u91c7\u96c6\u548c\u5c55\u793a\u7684\u65b9\u5f0f\u3002\u539f\u5219\u4e0a\u4e0d\u5f00\u53d1\u3001\u7ef4\u62a4\u8fd9\u4e9b\u7ec4\u4ef6\u3002\u66f4\u591a\u5173\u4e8e\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u8bf7\u79fb\u6b65\u5bf9\u5e94\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u67e5\u9605\u3002")),(0,r.yg)("h2",{id:"\u76d1\u63a7\u6570\u636e"},"\u76d1\u63a7\u6570\u636e"),(0,r.yg)("p",null,"Doris \u7684\u76d1\u63a7\u6570\u636e\u901a\u8fc7 Frontend \u548c Backend \u7684 http \u63a5\u53e3\u5411\u5916\u66b4\u9732\u3002\u76d1\u63a7\u6570\u636e\u4ee5 Key-Value \u7684\u6587\u672c\u5f62\u5f0f\u5bf9\u5916\u5c55\u73b0\u3002\u6bcf\u4e2a Key \u8fd8\u53ef\u80fd\u6709\u4e0d\u540c\u7684 Label \u52a0\u4ee5\u533a\u5206\u3002\u5f53\u7528\u6237\u642d\u5efa\u597d Doris \u540e\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\uff0c\u901a\u8fc7\u4ee5\u4e0b\u63a5\u53e3\u8bbf\u95ee\u5230\u8282\u70b9\u7684\u76d1\u63a7\u6570\u636e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Frontend: ",(0,r.yg)("inlineCode",{parentName:"li"},"fe_host:fe_http_port/metrics")),(0,r.yg)("li",{parentName:"ul"},"Backend: ",(0,r.yg)("inlineCode",{parentName:"li"},"be_host:be_web_server_port/metrics")),(0,r.yg)("li",{parentName:"ul"},"Broker: \u6682\u4e0d\u63d0\u4f9b")),(0,r.yg)("p",null,"\u7528\u6237\u5c06\u770b\u5230\u5982\u4e0b\u76d1\u63a7\u9879\u7ed3\u679c\uff08\u793a\u4f8b\u4e3a FE \u90e8\u5206\u76d1\u63a7\u9879\uff09\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 8476557312\njvm_heap_size_bytes{type="committed"} 1007550464\njvm_heap_size_bytes{type="used"} 156375280\n# HELP  jvm_non_heap_size_bytes jvm non heap stat\n# TYPE  jvm_non_heap_size_bytes gauge\njvm_non_heap_size_bytes{type="committed"} 194379776\njvm_non_heap_size_bytes{type="used"} 188201864\n# HELP  jvm_young_size_bytes jvm young mem pool stat\n# TYPE  jvm_young_size_bytes gauge\njvm_young_size_bytes{type="used"} 40652376\njvm_young_size_bytes{type="peak_used"} 277938176\njvm_young_size_bytes{type="max"} 907345920\n# HELP  jvm_old_size_bytes jvm old mem pool stat\n# TYPE  jvm_old_size_bytes gauge\njvm_old_size_bytes{type="used"} 114633448\njvm_old_size_bytes{type="peak_used"} 114633448\njvm_old_size_bytes{type="max"} 7455834112\n# HELP  jvm_young_gc jvm young gc stat\n# TYPE  jvm_young_gc gauge\njvm_young_gc{type="count"} 247\njvm_young_gc{type="time"} 860\n# HELP  jvm_old_gc jvm old gc stat\n# TYPE  jvm_old_gc gauge\njvm_old_gc{type="count"} 3\njvm_old_gc{type="time"} 211\n# HELP  jvm_thread jvm thread stat\n# TYPE  jvm_thread gauge\njvm_thread{type="count"} 162\njvm_thread{type="peak_count"} 205\njvm_thread{type="new_count"} 0\njvm_thread{type="runnable_count"} 48\njvm_thread{type="blocked_count"} 1\njvm_thread{type="waiting_count"} 41\njvm_thread{type="timed_waiting_count"} 72\njvm_thread{type="terminated_count"} 0\n...\n')),(0,r.yg)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u4ee5 ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/"},"Prometheus \u683c\u5f0f")," \u5448\u73b0\u7684\u76d1\u63a7\u6570\u636e\u3002\u6211\u4eec\u4ee5\u5176\u4e2d\u4e00\u4e2a\u76d1\u63a7\u9879\u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 8476557312\njvm_heap_size_bytes{type="committed"} 1007550464\njvm_heap_size_bytes{type="used"} 156375280\n')),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'"#" \u5f00\u5934\u7684\u884c\u4e3a\u6ce8\u91ca\u884c\u3002\u5176\u4e2d HELP \u4e3a\u8be5\u76d1\u63a7\u9879\u7684\u63cf\u8ff0\u8bf4\u660e\uff1bTYPE \u8868\u793a\u8be5\u76d1\u63a7\u9879\u7684\u6570\u636e\u7c7b\u578b\uff0c\u793a\u4f8b\u4e2d\u4e3a Gauge\uff0c\u5373\u6807\u91cf\u6570\u636e\u3002\u8fd8\u6709 Counter\u3001Histogram \u7b49\u6570\u636e\u7c7b\u578b\u3002\u5177\u4f53\u53ef\u89c1 ',(0,r.yg)("a",{parentName:"li",href:"https://prometheus.io/docs/practices/instrumentation/#counter-vs.-gauge,-summary-vs.-histogram"},"Prometheus \u5b98\u65b9\u6587\u6863")," \u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"jvm_heap_size_bytes")," \u5373\u76d1\u63a7\u9879\u7684\u540d\u79f0\uff08Key\uff09\uff1b",(0,r.yg)("inlineCode",{parentName:"li"},'type="max"')," \u5373\u4e3a\u4e00\u4e2a\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"type")," \u7684 Label\uff0c\u503c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"max"),"\u3002\u4e00\u4e2a\u76d1\u63a7\u9879\u53ef\u4ee5\u6709\u591a\u4e2a Label\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6700\u540e\u7684\u6570\u5b57\uff0c\u5982 ",(0,r.yg)("inlineCode",{parentName:"li"},"8476557312"),"\uff0c\u5373\u4e3a\u76d1\u63a7\u6570\u503c\u3002")),(0,r.yg)("h2",{id:"\u76d1\u63a7\u67b6\u6784"},"\u76d1\u63a7\u67b6\u6784"),(0,r.yg)("p",null,"\u6574\u4e2a\u76d1\u63a7\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(36689).A,width:"410",height:"373"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u9ec4\u8272\u90e8\u5206\u4e3a Prometheus \u76f8\u5173\u7ec4\u4ef6\u3002Prometheus Server \u4e3a Prometheus \u7684\u4e3b\u8fdb\u7a0b\uff0c\u76ee\u524d Prometheus \u901a\u8fc7 Pull \u7684\u65b9\u5f0f\u8bbf\u95ee Doris \u8282\u70b9\u7684\u76d1\u63a7\u63a5\u53e3\uff0c\u7136\u540e\u5c06\u65f6\u5e8f\u6570\u636e\u5b58\u5165\u65f6\u5e8f\u6570\u636e\u5e93 TSDB \u4e2d\uff08TSDB \u5305\u542b\u5728 Prometheus \u8fdb\u7a0b\u4e2d\uff0c\u65e0\u9700\u5355\u72ec\u90e8\u7f72\uff09\u3002Prometheus \u4e5f\u652f\u6301\u901a\u8fc7\u642d\u5efa ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/prometheus/pushgateway"},"Push Gateway")," \u7684\u65b9\u5f0f\uff0c\u5141\u8bb8\u88ab\u76d1\u63a7\u7cfb\u7edf\u5c06\u76d1\u63a7\u6570\u636e\u901a\u8fc7 Push \u7684\u65b9\u5f0f\u63a8\u5230 Push Gateway, \u518d\u7531 Prometheus Server \u901a\u8fc7 Pull \u7684\u65b9\u5f0f\u4ece Push Gateway \u4e2d\u83b7\u53d6\u6570\u636e\u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/prometheus/alertmanager"},"Alert Manager")," \u4e3a Prometheus \u62a5\u8b66\u7ec4\u4ef6\uff0c\u9700\u5355\u72ec\u90e8\u7f72\uff08\u6682\u4e0d\u63d0\u4f9b\u65b9\u6848\uff0c\u53ef\u53c2\u7167\u5b98\u65b9\u6587\u6863\u81ea\u884c\u642d\u5efa\uff09\u3002\u901a\u8fc7 Alert Manager\uff0c\u7528\u6237\u53ef\u4ee5\u914d\u7f6e\u62a5\u8b66\u7b56\u7565\uff0c\u63a5\u6536\u90ae\u4ef6\u3001\u77ed\u4fe1\u7b49\u62a5\u8b66\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u7eff\u8272\u90e8\u5206\u4e3a Grafana \u76f8\u5173\u7ec4\u4ef6\u3002Grafana Server \u4e3a Grafana \u7684\u4e3b\u8fdb\u7a0b\u3002\u542f\u52a8\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Web \u9875\u9762\u5bf9 Grafana \u8fdb\u884c\u914d\u7f6e\uff0c\u5305\u62ec\u6570\u636e\u6e90\u7684\u8bbe\u7f6e\u3001\u7528\u6237\u8bbe\u7f6e\u3001Dashboard \u7ed8\u5236\u7b49\u3002\u8fd9\u91cc\u4e5f\u662f\u6700\u7ec8\u7528\u6237\u67e5\u770b\u76d1\u63a7\u6570\u636e\u7684\u5730\u65b9\u3002")),(0,r.yg)("h2",{id:"\u5f00\u59cb\u642d\u5efa"},"\u5f00\u59cb\u642d\u5efa"),(0,r.yg)("p",null,"\u8bf7\u5728\u5b8c\u6210 Doris \u7684\u90e8\u7f72\u540e\uff0c\u5f00\u59cb\u642d\u5efa\u76d1\u63a7\u7cfb\u7edf\u3002"),(0,r.yg)("h3",{id:"prometheus"},"Prometheus"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/download/"},"Prometheus \u5b98\u7f51")," \u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 Prometheus \u6216\u8005\u76f4\u63a5",(0,r.yg)("a",{parentName:"p",href:"https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/monitor/prometheus-2.43.0.linux-amd64.tar.gz"},"\u70b9\u51fb\u4e0b\u8f7d"),"\u3002\u8fd9\u91cc\u6211\u4eec\u4ee5 2.43.0-linux-amd64 \u7248\u672c\u4e3a\u4f8b\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u51c6\u5907\u8fd0\u884c\u76d1\u63a7\u670d\u52a1\u7684\u673a\u5668\u4e0a\uff0c\u89e3\u538b\u4e0b\u8f7d\u540e\u7684 tar \u6587\u4ef6\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6253\u5f00\u914d\u7f6e\u6587\u4ef6 prometheus.yml\u3002\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\u5e76\u52a0\u4ee5\u8bf4\u660e\uff08\u914d\u7f6e\u6587\u4ef6\u4e3a yml \u683c\u5f0f\uff0c\u4e00\u5b9a\u6ce8\u610f\u7edf\u4e00\u7684\u7f29\u8fdb\u548c\u7a7a\u683c\uff09\uff1a"),(0,r.yg)("p",{parentName:"li"},"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u6700\u7b80\u5355\u7684\u9759\u6001\u6587\u4ef6\u7684\u65b9\u5f0f\u8fdb\u884c\u76d1\u63a7\u914d\u7f6e\u3002Prometheus \u652f\u6301\u591a\u79cd ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/"},"\u670d\u52a1\u53d1\u73b0")," \u65b9\u5f0f\uff0c\u53ef\u4ee5\u52a8\u6001\u7684\u611f\u77e5\u8282\u70b9\u7684\u52a0\u5165\u548c\u5220\u9664\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"# my global config\nglobal:\n  scrape_interval:     15s # \u5168\u5c40\u7684\u91c7\u96c6\u95f4\u9694\uff0c\u9ed8\u8ba4\u662f 1m\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e3a 15s\n  evaluation_interval: 15s # \u5168\u5c40\u7684\u89c4\u5219\u89e6\u53d1\u95f4\u9694\uff0c\u9ed8\u8ba4\u662f 1m\uff0c\u8fd9\u91cc\u8bbe\u7f6e 15s\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      # - alertmanager:9093\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'DORIS_CLUSTER' # \u6bcf\u4e00\u4e2a Doris \u96c6\u7fa4\uff0c\u6211\u4eec\u79f0\u4e3a\u4e00\u4e2a job\u3002\u8fd9\u91cc\u53ef\u4ee5\u7ed9 job \u53d6\u4e00\u4e2a\u540d\u5b57\uff0c\u4f5c\u4e3a Doris \u96c6\u7fa4\u5728\u76d1\u63a7\u7cfb\u7edf\u4e2d\u7684\u540d\u5b57\u3002\n    metrics_path: '/metrics' # \u8fd9\u91cc\u6307\u5b9a\u83b7\u53d6\u76d1\u63a7\u9879\u7684 restful api\u3002\u914d\u5408\u4e0b\u9762\u7684 targets \u4e2d\u7684 host:port\uff0cPrometheus \u6700\u7ec8\u4f1a\u901a\u8fc7 host:port/metrics_path \u6765\u91c7\u96c6\u76d1\u63a7\u9879\u3002\n    static_configs: # \u8fd9\u91cc\u5f00\u59cb\u5206\u522b\u914d\u7f6e FE \u548c BE \u7684\u76ee\u6807\u5730\u5740\u3002\u6240\u6709\u7684 FE \u548c BE \u90fd\u5206\u522b\u5199\u5165\u5404\u81ea\u7684 group \u4e2d\u3002\n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe # \u8fd9\u91cc\u914d\u7f6e\u4e86 fe \u7684 group\uff0c\u8be5 group \u4e2d\u5305\u542b\u4e86 3 \u4e2a Frontends\n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be # \u8fd9\u91cc\u914d\u7f6e\u4e86 be \u7684 group\uff0c\u8be5 group \u4e2d\u5305\u542b\u4e86 3 \u4e2a Backends\n\n  - job_name: 'DORIS_CLUSTER_2' # \u6211\u4eec\u53ef\u4ee5\u5728\u4e00\u4e2a Prometheus \u4e2d\u76d1\u63a7\u591a\u4e2a Doris \u96c6\u7fa4\uff0c\u8fd9\u91cc\u5f00\u59cb\u53e6\u4e00\u4e2a Doris \u96c6\u7fa4\u7684\u914d\u7f6e\u3002\u914d\u7f6e\u540c\u4e0a\uff0c\u4ee5\u4e0b\u7565\u3002\n    metrics_path: '/metrics'\n    static_configs: \n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe \n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be \n              \n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8 Prometheus"),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 Prometheus\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'nohup ./prometheus --web.listen-address="0.0.0.0:8181" &')),(0,r.yg)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u5c06\u540e\u53f0\u8fd0\u884c Prometheus\uff0c\u5e76\u6307\u5b9a\u5176 web \u7aef\u53e3\u4e3a 8181\u3002\u542f\u52a8\u540e\uff0c\u5373\u5f00\u59cb\u91c7\u96c6\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u5b58\u653e\u5728 data \u76ee\u5f55\u4e2d\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u505c\u6b62 Prometheus"),(0,r.yg)("p",{parentName:"li"},"\u76ee\u524d\u6ca1\u6709\u53d1\u73b0\u6b63\u5f0f\u7684\u8fdb\u7a0b\u505c\u6b62\u65b9\u5f0f\uff0c\u76f4\u63a5 kill -9 \u5373\u53ef\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u5c06 Prometheus \u8bbe\u4e3a\u4e00\u79cd service\uff0c\u4ee5 service \u7684\u65b9\u5f0f\u542f\u505c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bbf\u95ee Prometheus"),(0,r.yg)("p",{parentName:"li"},"Prometheus \u53ef\u4ee5\u901a\u8fc7 web \u9875\u9762\u8fdb\u884c\u7b80\u5355\u7684\u8bbf\u95ee\u3002\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00 8181 \u7aef\u53e3\uff0c\u5373\u53ef\u8bbf\u95ee Prometheus \u7684\u9875\u9762\u3002\u70b9\u51fb\u5bfc\u822a\u680f\u4e2d\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"Status")," -> ",(0,r.yg)("inlineCode",{parentName:"p"},"Targets"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6240\u6709\u5206\u7ec4 Job \u7684\u76d1\u63a7\u4e3b\u673a\u8282\u70b9\u3002\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u8282\u70b9\u90fd\u5e94\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"UP"),"\uff0c\u8868\u793a\u6570\u636e\u91c7\u96c6\u6b63\u5e38\u3002\u70b9\u51fb\u67d0\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"Endpoint"),"\uff0c\u5373\u53ef\u770b\u5230\u5f53\u524d\u7684\u76d1\u63a7\u6570\u503c\u3002\u5982\u679c\u8282\u70b9\u72b6\u6001\u4e0d\u4e3a UP\uff0c\u53ef\u4ee5\u5148\u8bbf\u95ee Doris \u7684 metrics \u63a5\u53e3\uff08\u89c1\u524d\u6587\uff09\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u8bbf\u95ee\uff0c\u6216\u67e5\u8be2 Prometheus \u76f8\u5173\u6587\u6863\u5c1d\u8bd5\u89e3\u51b3\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u81f3\u6b64\uff0c\u4e00\u4e2a\u7b80\u5355\u7684 Prometheus \u5df2\u7ecf\u642d\u5efa\u3001\u914d\u7f6e\u5b8c\u6bd5\u3002\u66f4\u591a\u9ad8\u7ea7\u4f7f\u7528\u65b9\u5f0f\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"\u5b98\u65b9\u6587\u6863")))),(0,r.yg)("h3",{id:"grafana"},"Grafana"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://grafana.com/grafana/download"},"Grafana \u5b98\u7f51")," \u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 Grafana \u6216\u8005\u76f4\u63a5",(0,r.yg)("a",{parentName:"p",href:"https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/monitor/grafana-enterprise-8.5.22.linux-amd64.tar.gz"},"\u70b9\u51fb\u4e0b\u8f7d"),"\u3002\u8fd9\u91cc\u6211\u4eec\u4ee5 8.5.22.linux-amd64 \u7248\u672c\u4e3a\u4f8b\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u51c6\u5907\u8fd0\u884c\u76d1\u63a7\u670d\u52a1\u7684\u673a\u5668\u4e0a\uff0c\u89e3\u538b\u4e0b\u8f7d\u540e\u7684 tar \u6587\u4ef6\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6253\u5f00\u914d\u7f6e\u6587\u4ef6 conf/defaults.ini\u3002\u8fd9\u91cc\u6211\u4eec\u4ec5\u5217\u4e3e\u9700\u8981\u6539\u52a8\u7684\u914d\u7f6e\u9879\uff0c\u5176\u4f59\u914d\u7f6e\u53ef\u4f7f\u7528\u9ed8\u8ba4\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)\ndata = data\n\n# Directory where grafana can store logs\nlogs = data/log\n\n# Protocol (http, https, socket)\nprotocol = http\n\n# The ip address to bind to, empty will bind to all interfaces\nhttp_addr =\n\n# The http port to use\nhttp_port = 8182\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8 Grafana"),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 Grafana"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"nohup ./bin/grafana-server &")),(0,r.yg)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u5c06\u540e\u53f0\u8fd0\u884c Grafana\uff0c\u8bbf\u95ee\u7aef\u53e3\u4e3a\u4e0a\u9762\u914d\u7f6e\u7684 8182")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u505c\u6b62 Grafana"),(0,r.yg)("p",{parentName:"li"},"\u76ee\u524d\u6ca1\u6709\u53d1\u73b0\u6b63\u5f0f\u7684\u8fdb\u7a0b\u505c\u6b62\u65b9\u5f0f\uff0c\u76f4\u63a5 kill -9 \u5373\u53ef\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u5c06 Grafana \u8bbe\u4e3a\u4e00\u79cd service\uff0c\u4ee5 service \u7684\u65b9\u5f0f\u542f\u505c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bbf\u95ee Grafana"),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u6d4f\u89c8\u5668\uff0c\u6253\u5f00 8182 \u7aef\u53e3\uff0c\u53ef\u4ee5\u5f00\u59cb\u8bbf\u95ee Grafana \u9875\u9762\u3002\u9ed8\u8ba4\u7528\u6237\u540d\u5bc6\u7801\u4e3a admin\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u914d\u7f6e Grafana"),(0,r.yg)("p",{parentName:"li"},"\u521d\u6b21\u767b\u9646\uff0c\u9700\u8981\u6839\u636e\u63d0\u793a\u8bbe\u7f6e\u6570\u636e\u6e90\uff08data source\uff09\u3002\u6211\u4eec\u8fd9\u91cc\u7684\u6570\u636e\u6e90\uff0c\u5373\u4e0a\u4e00\u6b65\u914d\u7f6e\u7684 Prometheus\u3002"),(0,r.yg)("p",{parentName:"li"},"\u6570\u636e\u6e90\u914d\u7f6e\u7684 Setting \u9875\u9762\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Name: \u6570\u636e\u6e90\u7684\u540d\u79f0\uff0c\u81ea\u5b9a\u4e49\uff0c\u6bd4\u5982 doris_monitor_data_source"),(0,r.yg)("li",{parentName:"ol"},"Type: \u9009\u62e9 Prometheus"),(0,r.yg)("li",{parentName:"ol"},"URL: \u586b\u5199 Prometheus \u7684 web \u5730\u5740\uff0c\u5982 http://host:8181"),(0,r.yg)("li",{parentName:"ol"},"Access: \u8fd9\u91cc\u6211\u4eec\u9009\u62e9 Server \u65b9\u5f0f\uff0c\u5373\u901a\u8fc7 Grafana \u8fdb\u7a0b\u6240\u5728\u670d\u52a1\u5668\uff0c\u8bbf\u95ee Prometheus\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5176\u4f59\u9009\u9879\u9ed8\u8ba4\u5373\u53ef\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb\u6700\u4e0b\u65b9 ",(0,r.yg)("inlineCode",{parentName:"li"},"Save & Test"),"\uff0c\u5982\u679c\u663e\u793a ",(0,r.yg)("inlineCode",{parentName:"li"},"Data source is working"),"\uff0c\u5373\u8868\u793a\u6570\u636e\u6e90\u53ef\u7528\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u786e\u8ba4\u6570\u636e\u6e90\u53ef\u7528\u540e\uff0c\u70b9\u51fb\u5de6\u8fb9\u5bfc\u822a\u680f\u7684 + \u53f7\uff0c\u5f00\u59cb\u6dfb\u52a0 Dashboard\u3002\u8fd9\u91cc\u6211\u4eec\u5df2\u7ecf\u51c6\u5907\u597d\u4e86 Doris \u7684 Dashboard \u6a21\u677f\uff08\u672c\u6587\u6863\u5f00\u5934\uff09\u3002\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u70b9\u51fb\u4e0a\u65b9\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"New dashboard"),"->",(0,r.yg)("inlineCode",{parentName:"li"},"Import dashboard"),"->",(0,r.yg)("inlineCode",{parentName:"li"},"Upload .json File"),"\uff0c\u5c06\u4e0b\u8f7d\u7684 json \u6587\u4ef6\u5bfc\u5165\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5bfc\u5165\u540e\uff0c\u53ef\u4ee5\u547d\u540d Dashboard\uff0c\u9ed8\u8ba4\u662f ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris Overview"),"\u3002\u540c\u65f6\uff0c\u9700\u8981\u9009\u62e9\u6570\u636e\u6e90\uff0c\u8fd9\u91cc\u9009\u62e9\u4e4b\u524d\u521b\u5efa\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"doris_monitor_data_source")),(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.yg)("inlineCode",{parentName:"li"},"Import"),"\uff0c\u5373\u5b8c\u6210\u5bfc\u5165\u3002\u4e4b\u540e\uff0c\u53ef\u4ee5\u770b\u5230 Doris \u7684 Dashboard \u5c55\u793a\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u81f3\u6b64\uff0c\u4e00\u4e2a\u7b80\u5355\u7684 Grafana \u5df2\u7ecf\u642d\u5efa\u3001\u914d\u7f6e\u5b8c\u6bd5\u3002\u66f4\u591a\u9ad8\u7ea7\u4f7f\u7528\u65b9\u5f0f\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"http://docs.grafana.org/"},"\u5b98\u65b9\u6587\u6863")))),(0,r.yg)("h2",{id:"dashboard-\u8bf4\u660e"},"Dashboard \u8bf4\u660e"),(0,r.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7b80\u8981\u4ecb\u7ecd Doris Dashboard\u3002Dashboard \u7684\u5185\u5bb9\u53ef\u80fd\u4f1a\u968f\u7248\u672c\u5347\u7ea7\uff0c\u4e0d\u65ad\u53d8\u5316\uff0c\u672c\u6587\u6863\u4e0d\u4fdd\u8bc1\u662f\u6700\u65b0\u7684 Dashboard \u8bf4\u660e\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u9876\u680f"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:t(62704).A,width:"1829",height:"117"})),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u5de6\u4e0a\u89d2\u4e3a Dashboard \u540d\u79f0\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u53f3\u4e0a\u89d2\u663e\u793a\u5f53\u524d\u76d1\u63a7\u65f6\u95f4\u8303\u56f4\uff0c\u53ef\u4ee5\u4e0b\u62c9\u9009\u62e9\u4e0d\u540c\u7684\u65f6\u95f4\u8303\u56f4\uff0c\u8fd8\u53ef\u4ee5\u6307\u5b9a\u5b9a\u65f6\u5237\u65b0\u9875\u9762\u95f4\u9694\u3002"),(0,r.yg)("li",{parentName:"ul"},"cluster","_","name: \u5373 Prometheus \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5404\u4e2a job","_","name\uff0c\u4ee3\u8868\u4e00\u4e2a Doris \u96c6\u7fa4\u3002\u9009\u62e9\u4e0d\u540c\u7684 cluster\uff0c\u4e0b\u65b9\u7684\u56fe\u8868\u5c06\u5c55\u793a\u5bf9\u5e94\u96c6\u7fa4\u7684\u76d1\u63a7\u4fe1\u606f\u3002"),(0,r.yg)("li",{parentName:"ul"},"fe_master: \u5bf9\u5e94\u96c6\u7fa4\u7684 Master Frontend \u8282\u70b9\u3002"),(0,r.yg)("li",{parentName:"ul"},"fe_instance: \u5bf9\u5e94\u96c6\u7fa4\u7684\u6240\u6709 Frontend \u8282\u70b9\u3002\u9009\u62e9\u4e0d\u540c\u7684 Frontend\uff0c\u4e0b\u65b9\u7684\u56fe\u8868\u5c06\u5c55\u793a\u5bf9\u5e94 Frontend \u7684\u76d1\u63a7\u4fe1\u606f\u3002"),(0,r.yg)("li",{parentName:"ul"},"be_instance: \u5bf9\u5e94\u96c6\u7fa4\u7684\u6240\u6709 Backend \u8282\u70b9\u3002\u9009\u62e9\u4e0d\u540c\u7684 Backend\uff0c\u4e0b\u65b9\u7684\u56fe\u8868\u5c06\u5c55\u793a\u5bf9\u5e94 Backend \u7684\u76d1\u63a7\u4fe1\u606f\u3002"),(0,r.yg)("li",{parentName:"ul"},"interval: \u6709\u4e9b\u56fe\u8868\u5c55\u793a\u4e86\u901f\u7387\u76f8\u5173\u7684\u76d1\u63a7\u9879\uff0c\u8fd9\u91cc\u53ef\u9009\u62e9\u4ee5\u591a\u5927\u95f4\u9694\u8fdb\u884c\u91c7\u6837\u8ba1\u7b97\u901f\u7387\uff08\u6ce8\uff1a15s \u95f4\u9694\u53ef\u80fd\u5bfc\u81f4\u4e00\u4e9b\u56fe\u8868\u65e0\u6cd5\u663e\u793a\uff09\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Row"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:t(31735).A,width:"280",height:"82"})),(0,r.yg)("p",{parentName:"li"},"Grafana \u4e2d\uff0cRow \u7684\u6982\u5ff5\uff0c\u5373\u4e00\u7ec4\u56fe\u8868\u7684\u96c6\u5408\u3002\u5982\u4e0a\u56fe\u4e2d\u7684 Overview\u3001Cluster Overview \u5373\u4e24\u4e2a\u4e0d\u540c\u7684 Row\u3002\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb Row\uff0c\u5bf9 Row \u8fdb\u884c\u6298\u53e0\u3002\u5f53\u524d Dashboard \u6709\u5982\u4e0b Rows\uff08\u6301\u7eed\u66f4\u65b0\u4e2d\uff09\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Overview: \u6240\u6709 Doris \u96c6\u7fa4\u7684\u6c47\u603b\u5c55\u793a\u3002"),(0,r.yg)("li",{parentName:"ol"},"Cluster Overview: \u9009\u5b9a\u96c6\u7fa4\u7684\u6c47\u603b\u5c55\u793a\u3002"),(0,r.yg)("li",{parentName:"ol"},"Query Statistic: \u9009\u5b9a\u96c6\u7fa4\u7684\u67e5\u8be2\u76f8\u5173\u76d1\u63a7\u3002"),(0,r.yg)("li",{parentName:"ol"},"FE JVM: \u9009\u5b9a Frontend \u7684 JVM \u76d1\u63a7\u3002"),(0,r.yg)("li",{parentName:"ol"},"BE: \u9009\u5b9a\u96c6\u7fa4\u7684 Backends \u7684\u6c47\u603b\u5c55\u793a\u3002"),(0,r.yg)("li",{parentName:"ol"},"BE Task: \u9009\u5b9a\u96c6\u7fa4\u7684 Backends \u4efb\u52a1\u4fe1\u606f\u7684\u5c55\u793a\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u56fe\u8868"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:t(61009).A,width:"606",height:"280"})),(0,r.yg)("p",{parentName:"li"},"\u4e00\u4e2a\u5178\u578b\u7684\u56fe\u6807\u5206\u4e3a\u4ee5\u4e0b\u51e0\u90e8\u5206\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\u9f20\u6807\u60ac\u505c\u5de6\u4e0a\u89d2\u7684 i \u56fe\u6807\uff0c\u53ef\u4ee5\u67e5\u770b\u8be5\u56fe\u8868\u7684\u8bf4\u660e\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb\u4e0b\u65b9\u7684\u56fe\u4f8b\uff0c\u53ef\u4ee5\u5355\u72ec\u67e5\u770b\u67d0\u4e00\u76d1\u63a7\u9879\u3002\u518d\u6b21\u70b9\u51fb\uff0c\u5219\u663e\u793a\u6240\u6709\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5728\u56fe\u8868\u4e2d\u62d6\u62fd\u53ef\u4ee5\u9009\u5b9a\u65f6\u95f4\u8303\u56f4\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6807\u9898\u7684 [] \u4e2d\u663e\u793a\u9009\u5b9a\u7684\u96c6\u7fa4\u540d\u79f0\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4e00\u4e9b\u6570\u503c\u5bf9\u5e94\u5de6\u8fb9\u7684Y\u8f74\uff0c\u4e00\u4e9b\u5bf9\u5e94\u53f3\u8fb9\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u56fe\u4f8b\u672b\u5c3e\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"-right")," \u533a\u5206\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb\u56fe\u8868\u540d\u79f0->",(0,r.yg)("inlineCode",{parentName:"li"},"Edit"),"\uff0c\u53ef\u4ee5\u5bf9\u56fe\u8868\u8fdb\u884c\u7f16\u8f91\u3002")))),(0,r.yg)("h2",{id:"dashboard-\u66f4\u65b0"},"Dashboard \u66f4\u65b0"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb Grafana \u5de6\u8fb9\u680f\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"+"),"\uff0c\u70b9\u51fb ",(0,r.yg)("inlineCode",{parentName:"li"},"Dashboard"),"\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"New dashboard"),"\uff0c\u5728\u70b9\u51fb\u53f3\u4fa7\u51fa\u73b0\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"Import dashboard"),"\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.yg)("inlineCode",{parentName:"li"},"Upload .json File"),"\uff0c\u9009\u62e9\u6700\u65b0\u7684\u6a21\u677f\u6587\u4ef6\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u9009\u62e9\u6570\u636e\u6e90"),(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.yg)("inlineCode",{parentName:"li"},"Import(Overwrite)"),"\uff0c\u5b8c\u6210\u6a21\u677f\u66f4\u65b0\u3002")))}y.isMDXComponent=!0},62704:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dashboard_navibar-c771e898791f510a5cb89bc3ef23bc33.png"},97410:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dashboard_overview-45d556af325e2561e171c7dfdcd12f37.png"},61009:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dashboard_panel-d86986f1ab0e9ce35b25ce0bac21b432.png"},31735:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dashboard_row-f66fca759880441573e4dd3ea53c316b.png"},36689:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/monitor_arch-1c53c13bb72ba1970574ca0428791ad0.png"}}]);