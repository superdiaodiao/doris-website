"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3125],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>f});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,f=m["".concat(i,".").concat(u)]||m[u]||y[u]||l;return t?n.createElement(f,o(o({ref:a},c),{},{components:t})):n.createElement(f,o({ref:a},c))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42784:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const l={title:"\u8ba2\u9605 Kafka \u65e5\u5fd7",language:"zh-CN"},o=void 0,p={unversionedId:"data-operate/import/import-scenes/kafka-load",id:"version-2.0/data-operate/import/import-scenes/kafka-load",title:"\u8ba2\u9605 Kafka \u65e5\u5fd7",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-operate/import/import-scenes/kafka-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/kafka-load",permalink:"/zh-CN/docs/data-operate/import/import-scenes/kafka-load",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u8ba2\u9605 Kafka \u65e5\u5fd7",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5916\u90e8\u5b58\u50a8\u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/data-operate/import/import-scenes/external-storage-load"},next:{title:"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e",permalink:"/zh-CN/docs/data-operate/import/import-scenes/external-table-load"}},i={},s=[{value:"\u8ba2\u9605 Kafka \u6d88\u606f",id:"\u8ba2\u9605-kafka-\u6d88\u606f",level:2},{value:"\u8bbf\u95ee SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4",id:"\u8bbf\u95ee-ssl-\u8ba4\u8bc1\u7684-kafka-\u96c6\u7fa4",level:3},{value:"\u521b\u5efa\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a",id:"\u521b\u5efa\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a",level:3},{value:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u72b6\u6001",id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u72b6\u6001",level:3},{value:"\u4fee\u6539\u4f5c\u4e1a\u5c5e\u6027",id:"\u4fee\u6539\u4f5c\u4e1a\u5c5e\u6027",level:3},{value:"\u4f5c\u4e1a\u63a7\u5236",id:"\u4f5c\u4e1a\u63a7\u5236",level:3},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],c={toc:s},m="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u8ba2\u9605kafka\u65e5\u5fd7"},"\u8ba2\u9605Kafka\u65e5\u5fd7"),(0,r.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff0c\u76f4\u63a5\u8ba2\u9605Kafka\u4e2d\u7684\u6d88\u606f\u6570\u636e\uff0c\u4ee5\u8fd1\u5b9e\u65f6\u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002"),(0,r.yg)("p",null,"Doris \u81ea\u8eab\u80fd\u591f\u4fdd\u8bc1\u4e0d\u4e22\u4e0d\u91cd\u7684\u8ba2\u9605 Kafka \u4e2d\u7684\u6d88\u606f\uff0c\u5373 ",(0,r.yg)("inlineCode",{parentName:"p"},"Exactly-Once")," \u6d88\u8d39\u8bed\u4e49\u3002"),(0,r.yg)("h2",{id:"\u8ba2\u9605-kafka-\u6d88\u606f"},"\u8ba2\u9605 Kafka \u6d88\u606f"),(0,r.yg)("p",null,"\u8ba2\u9605 Kafka \u6d88\u606f\u4f7f\u7528\u4e86 Doris \u4e2d\u7684\u4f8b\u884c\u5bfc\u5165\uff08Routine Load\uff09\u529f\u80fd\u3002"),(0,r.yg)("p",null,"\u7528\u6237\u9996\u5148\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,r.yg)("strong",{parentName:"p"},"\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a"),"\u3002\u4f5c\u4e1a\u4f1a\u901a\u8fc7\u4f8b\u884c\u8c03\u5ea6\uff0c\u4e0d\u65ad\u5730\u53d1\u9001\u4e00\u7cfb\u5217\u7684",(0,r.yg)("strong",{parentName:"p"},"\u4efb\u52a1"),"\uff0c\u6bcf\u4e2a\u4efb\u52a1\u4f1a\u6d88\u8d39\u4e00\u5b9a\u6570\u91cf Kafka \u4e2d\u7684\u6d88\u606f\u3002"),(0,r.yg)("p",null,"\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u4f7f\u7528\u9650\u5236\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301\u65e0\u8ba4\u8bc1\u7684 Kafka \u8bbf\u95ee\uff0c\u4ee5\u53ca\u901a\u8fc7 SSL \u65b9\u5f0f\u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301\u7684\u6d88\u606f\u683c\u5f0f\u5982\u4e0b\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"csv \u6587\u672c\u683c\u5f0f\u3002\u6bcf\u4e00\u4e2a message \u4e3a\u4e00\u884c\uff0c\u4e14\u884c\u5c3e",(0,r.yg)("strong",{parentName:"li"},"\u4e0d\u5305\u542b"),"\u6362\u884c\u7b26\u3002"),(0,r.yg)("li",{parentName:"ul"},"Json \u683c\u5f0f\uff0c\u8be6\u89c1 ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/data-operate/import/import-way/load-json-format"},"\u5bfc\u5165 Json \u683c\u5f0f\u6570\u636e"),"\u3002"))),(0,r.yg)("li",{parentName:"ol"},"\u4ec5\u652f\u6301 Kafka 0.10.0.0(\u542b) \u4ee5\u4e0a\u7248\u672c\u3002")),(0,r.yg)("h3",{id:"\u8bbf\u95ee-ssl-\u8ba4\u8bc1\u7684-kafka-\u96c6\u7fa4"},"\u8bbf\u95ee SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4"),(0,r.yg)("p",null,"\u4f8b\u884c\u5bfc\u5165\u529f\u80fd\u652f\u6301\u65e0\u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4\uff0c\u4ee5\u53ca\u901a\u8fc7 SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4\u3002"),(0,r.yg)("p",null,"\u8bbf\u95ee SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4\u9700\u8981\u7528\u6237\u63d0\u4f9b\u7528\u4e8e\u8ba4\u8bc1 Kafka Broker \u516c\u94a5\u7684\u8bc1\u4e66\u6587\u4ef6\uff08ca.pem\uff09\u3002\u5982\u679c Kafka \u96c6\u7fa4\u540c\u65f6\u5f00\u542f\u4e86\u5ba2\u6237\u7aef\u8ba4\u8bc1\uff0c\u5219\u8fd8\u9700\u63d0\u4f9b\u5ba2\u6237\u7aef\u7684\u516c\u94a5\uff08client.pem\uff09\u3001\u5bc6\u94a5\u6587\u4ef6\uff08client.key\uff09\uff0c\u4ee5\u53ca\u5bc6\u94a5\u5bc6\u7801\u3002\u8fd9\u91cc\u6240\u9700\u7684\u6587\u4ef6\u9700\u8981\u5148\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"CREAE FILE")," \u547d\u4ee4\u4e0a\u4f20\u5230 Doris \u4e2d\uff0c\u5e76\u4e14 catalog \u540d\u79f0\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"kafka"),"\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE FILE")," \u547d\u4ee4\u7684\u5177\u4f53\u5e2e\u52a9\u53ef\u4ee5\u53c2\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE")," \u547d\u4ee4\u624b\u518c\u3002\u8fd9\u91cc\u7ed9\u51fa\u793a\u4f8b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4e0a\u4f20\u6587\u4ef6"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "ca.pem" PROPERTIES("url" = "https://example_url/kafka-key/ca.pem", "catalog" = "kafka");\nCREATE FILE "client.key" PROPERTIES("url" = "https://example_urlkafka-key/client.key", "catalog" = "kafka");\nCREATE FILE "client.pem" PROPERTIES("url" = "https://example_url/kafka-key/client.pem", "catalog" = "kafka");\n')))),(0,r.yg)("p",null,"\u4e0a\u4f20\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-FILE"},"SHOW FILES")," \u547d\u4ee4\u67e5\u770b\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\u3002"),(0,r.yg)("h3",{id:"\u521b\u5efa\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a"},"\u521b\u5efa\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a"),(0,r.yg)("p",null,"\u521b\u5efa\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u7684\u5177\u4f53\u547d\u4ee4\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")," \u547d\u4ee4\u624b\u518c\u3002\u8fd9\u91cc\u7ed9\u51fa\u793a\u4f8b\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bbf\u95ee\u65e0\u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD demo.my_first_routine_load_job ON test_1\nCOLUMNS TERMINATED BY ","\nPROPERTIES\n(\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.group.id" = "xxx",\n    "property.client.id" = "xxx",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n')),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_interval/max_batch_rows/max_batch_size")," \u7528\u4e8e\u63a7\u5236\u4e00\u4e2a\u5b50\u4efb\u52a1\u7684\u8fd0\u884c\u5468\u671f\u3002\u4e00\u4e2a\u5b50\u4efb\u52a1\u7684\u8fd0\u884c\u5468\u671f\u7531\u6700\u957f\u8fd0\u884c\u65f6\u95f4\u3001\u6700\u591a\u6d88\u8d39\u884c\u6570\u548c\u6700\u5927\u6d88\u8d39\u6570\u636e\u91cf\u5171\u540c\u51b3\u5b9a\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bbf\u95ee SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD demo.my_first_routine_load_job ON test_1\nCOLUMNS TERMINATED BY ",",\nPROPERTIES\n(\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n)\nFROM KAFKA\n(\n   "kafka_broker_list"= "broker1:9091,broker2:9091",\n   "kafka_topic" = "my_topic",\n   "property.security.protocol" = "ssl",\n   "property.ssl.ca.location" = "FILE:ca.pem",\n   "property.ssl.certificate.location" = "FILE:client.pem",\n   "property.ssl.key.location" = "FILE:client.key",\n   "property.ssl.key.password" = "abcdefg"\n);\n')))),(0,r.yg)("h3",{id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u72b6\u6001"},"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u72b6\u6001"),(0,r.yg)("p",null,"\u67e5\u770b",(0,r.yg)("strong",{parentName:"p"},"\u4f5c\u4e1a"),"\u72b6\u6001\u7684\u5177\u4f53\u547d\u4ee4\u548c\u793a\u4f8b\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"},"SHOW ROUTINE LOAD")," \u547d\u4ee4\u6587\u6863\u3002"),(0,r.yg)("p",null,"\u67e5\u770b\u67d0\u4e2a\u4f5c\u4e1a\u7684",(0,r.yg)("strong",{parentName:"p"},"\u4efb\u52a1"),"\u8fd0\u884c\u72b6\u6001\u7684\u5177\u4f53\u547d\u4ee4\u548c\u793a\u4f8b\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK"},"SHOW ROUTINE LOAD TASK")," \u547d\u4ee4\u6587\u6863\u3002"),(0,r.yg)("p",null,"\u53ea\u80fd\u67e5\u770b\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u4e2d\u7684\u4efb\u52a1\uff0c\u5df2\u7ed3\u675f\u548c\u672a\u5f00\u59cb\u7684\u4efb\u52a1\u65e0\u6cd5\u67e5\u770b\u3002"),(0,r.yg)("h3",{id:"\u4fee\u6539\u4f5c\u4e1a\u5c5e\u6027"},"\u4fee\u6539\u4f5c\u4e1a\u5c5e\u6027"),(0,r.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u4fee\u6539\u5df2\u7ecf\u521b\u5efa\u7684\u4f5c\u4e1a\u7684\u90e8\u5206\u5c5e\u6027\u3002\u5177\u4f53\u8bf4\u660e\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD"},"ALTER ROUTINE LOAD")," \u547d\u4ee4\u624b\u518c\u3002"),(0,r.yg)("h3",{id:"\u4f5c\u4e1a\u63a7\u5236"},"\u4f5c\u4e1a\u63a7\u5236"),(0,r.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"STOP/PAUSE/RESUME")," \u4e09\u4e2a\u547d\u4ee4\u6765\u63a7\u5236\u4f5c\u4e1a\u7684\u505c\u6b62\uff0c\u6682\u505c\u548c\u91cd\u542f\u3002"),(0,r.yg)("p",null,"\u5177\u4f53\u547d\u4ee4\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD"},"STOP ROUTINE LOAD"),"\uff0c",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD"},"PAUSE ROUTINE LOAD"),"\uff0c",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"},"RESUME ROUTINE LOAD")," \u547d\u4ee4\u6587\u6863\u3002"),(0,r.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,r.yg)("p",null,"\u5173\u4e8e ROUTINE LOAD \u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u548c\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")," \u547d\u4ee4\u624b\u518c\u3002"))}y.isMDXComponent=!0}}]);