"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78393],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>s});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),d=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},y=function(e){var a=d(e.components);return r.createElement(i.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),g=d(t),u=n,s=g["".concat(i,".").concat(u)]||g[u]||m[u]||l;return t?r.createElement(s,o(o({ref:a},y),{},{components:t})):r.createElement(s,o({ref:a},y))}));function s(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[g]="string"==typeof e?e:n,o[1]=p;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},654186:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=t(58168),n=(t(296540),t(15680));const l={title:"\u5bfc\u5165\u6982\u89c8",language:"zh-CN"},o=void 0,p={unversionedId:"data-operate/import/load-manual",id:"version-2.0/data-operate/import/load-manual",title:"\u5bfc\u5165\u6982\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-operate/import/load-manual.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-manual",permalink:"/zh-CN/docs/2.0/data-operate/import/load-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u5bfc\u5165\u6982\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5e93\u5efa\u8868\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/2.0/table-design/best-practice"},next:{title:"Stream Load",permalink:"/zh-CN/docs/2.0/data-operate/import/stream-load-manual"}},i={},d=[{value:"\u652f\u6301\u7684\u6570\u636e\u6e90",id:"\u652f\u6301\u7684\u6570\u636e\u6e90",level:2},{value:"\u6309\u573a\u666f\u5212\u5206",id:"\u6309\u573a\u666f\u5212\u5206",level:3},{value:"\u6309\u5bfc\u5165\u65b9\u5f0f\u5212\u5206",id:"\u6309\u5bfc\u5165\u65b9\u5f0f\u5212\u5206",level:3},{value:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f",id:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f",level:2},{value:"\u5bfc\u5165\u8bf4\u660e",id:"\u5bfc\u5165\u8bf4\u660e",level:2},{value:"\u5bfc\u5165\u7684\u539f\u5b50\u6027\u4fdd\u8bc1",id:"\u5bfc\u5165\u7684\u539f\u5b50\u6027\u4fdd\u8bc1",level:2},{value:"\u540c\u6b65\u53ca\u5f02\u6b65\u5bfc\u5165",id:"\u540c\u6b65\u53ca\u5f02\u6b65\u5bfc\u5165",level:2},{value:"\u5bfc\u5165 Array \u7c7b\u578b",id:"\u5bfc\u5165-array-\u7c7b\u578b",level:2},{value:"\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce",id:"\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce",level:2}],y={toc:d},g="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90"},"\u652f\u6301\u7684\u6570\u636e\u6e90"),(0,n.yg)("p",null,"Doris \u63d0\u4f9b\u591a\u79cd\u6570\u636e\u5bfc\u5165\u65b9\u6848\uff0c\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684\u6570\u636e\u6e90\u8fdb\u884c\u9009\u62e9\u4e0d\u540c\u7684\u6570\u636e\u5bfc\u5165\u65b9\u5f0f\u3002"),(0,n.yg)("h3",{id:"\u6309\u573a\u666f\u5212\u5206"},"\u6309\u573a\u666f\u5212\u5206"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,n.yg)("th",{parentName:"tr",align:null},"\u5bfc\u5165\u65b9\u5f0f"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b58\u50a8\uff08s3\uff09,HDFS"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"../import/broker-load-manual"},"\u4f7f\u7528 Broker \u5bfc\u5165\u6570\u636e"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u672c\u5730\u6587\u4ef6"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"../import/stream-load-manual."},"Stream Load"),", ",(0,n.yg)("a",{parentName:"td",href:"../import/mysql-load-manual"},"MySQL Load"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/import-scenes/kafka-load"},"\u8ba2\u9605 Kafka \u6570\u636e"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Mysql\u3001PostgreSQL\uff0cOracle\uff0cSQLServer"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/import-scenes/external-table-load"},"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u901a\u8fc7 JDBC \u5bfc\u5165"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"../import-scenes/jdbc-load"},"\u4f7f\u7528 JDBC \u540c\u6b65\u6570\u636e"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165 JSON \u683c\u5f0f\u6570\u636e"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"../import/load-json-format"},"JSON \u683c\u5f0f\u6570\u636e\u5bfc\u5165"))))),(0,n.yg)("h3",{id:"\u6309\u5bfc\u5165\u65b9\u5f0f\u5212\u5206"},"\u6309\u5bfc\u5165\u65b9\u5f0f\u5212\u5206"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u5bfc\u5165\u65b9\u5f0f\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u65b9\u5f0f"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Spark Load"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/import-way/spark-load-manual"},"\u901a\u8fc7 Spark \u5bfc\u5165\u5916\u90e8\u6570\u636e"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Broker Load"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"../import/broker-load-manual"},"\u901a\u8fc7 Broker \u5bfc\u5165\u5916\u90e8\u5b58\u50a8\u6570\u636e"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Stream Load"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"../import/stream-load-manual"},"\u6d41\u5f0f\u5bfc\u5165\u6570\u636e (\u672c\u5730\u6587\u4ef6\u53ca\u5185\u5b58\u6570\u636e)"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Routine Load"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/import-scenes/kafka-load"},"\u5bfc\u5165 Kafka \u6570\u636e"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Insert Into"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"../import/insert-into-manual"},"\u5916\u90e8\u8868\u901a\u8fc7 INSERT \u65b9\u5f0f\u5bfc\u5165\u6570\u636e"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"S3 Load"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/import-way/s3-load-manual"},"S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u6570\u636e\u5bfc\u5165"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"MySQL Load"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"../import/mysql-load-manual"},"MySQL \u5ba2\u6237\u7aef\u5bfc\u5165\u672c\u5730\u6570\u636e"))))),(0,n.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f"},"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f"),(0,n.yg)("p",null,"\u4e0d\u540c\u7684\u5bfc\u5165\u65b9\u5f0f\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u7565\u6709\u4e0d\u540c\u3002"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u5bfc\u5165\u65b9\u5f0f"),(0,n.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u683c\u5f0f"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Broker Load"),(0,n.yg)("td",{parentName:"tr",align:null},"parquet\u3001orc\u3001csv\u3001gzip")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Stream Load"),(0,n.yg)("td",{parentName:"tr",align:null},"csv\u3001json\u3001parquet\u3001orc")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Routine Load"),(0,n.yg)("td",{parentName:"tr",align:null},"csv\u3001json")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"MySQL Load"),(0,n.yg)("td",{parentName:"tr",align:null},"csv")))),(0,n.yg)("h2",{id:"\u5bfc\u5165\u8bf4\u660e"},"\u5bfc\u5165\u8bf4\u660e"),(0,n.yg)("p",null,"Apache Doris \u7684\u6570\u636e\u5bfc\u5165\u5b9e\u73b0\u6709\u4ee5\u4e0b\u5171\u6027\u7279\u5f81\uff0c\u8fd9\u91cc\u5206\u522b\u4ecb\u7ecd\uff0c\u4ee5\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u7684\u4f7f\u7528\u6570\u636e\u5bfc\u5165\u529f\u80fd"),(0,n.yg)("h2",{id:"\u5bfc\u5165\u7684\u539f\u5b50\u6027\u4fdd\u8bc1"},"\u5bfc\u5165\u7684\u539f\u5b50\u6027\u4fdd\u8bc1"),(0,n.yg)("p",null,"Doris \u7684\u6bcf\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u4e0d\u8bba\u662f\u4f7f\u7528 Broker Load \u8fdb\u884c\u6279\u91cf\u5bfc\u5165\uff0c\u8fd8\u662f\u4f7f\u7528 INSERT \u8bed\u53e5\u8fdb\u884c\u5355\u6761\u5bfc\u5165\uff0c\u90fd\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u4e8b\u52a1\u64cd\u4f5c\u3002\u5bfc\u5165\u4e8b\u52a1\u53ef\u4ee5\u4fdd\u8bc1\u4e00\u6279\u6b21\u5185\u7684\u6570\u636e\u539f\u5b50\u751f\u6548\uff0c\u4e0d\u4f1a\u51fa\u73b0\u90e8\u5206\u6570\u636e\u5199\u5165\u7684\u60c5\u51b5\u3002"),(0,n.yg)("p",null,"\u540c\u65f6\uff0c\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u90fd\u4f1a\u6709\u4e00\u4e2a Label\u3002\u8fd9\u4e2a Label \u662f\u5728\u4e00\u4e2a\u6570\u636e\u5e93\uff08Database\uff09\u4e0b\u552f\u4e00\u7684\uff0c\u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u3002Label \u53ef\u4ee5\u7531\u7528\u6237\u6307\u5b9a\uff0c\u90e8\u5206\u5bfc\u5165\u529f\u80fd\u4e5f\u4f1a\u7531\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\u3002"),(0,n.yg)("p",null,"Label \u662f\u7528\u4e8e\u4fdd\u8bc1\u5bf9\u5e94\u7684\u5bfc\u5165\u4f5c\u4e1a\uff0c\u4ec5\u80fd\u6210\u529f\u5bfc\u5165\u4e00\u6b21\u3002\u4e00\u4e2a\u88ab\u6210\u529f\u5bfc\u5165\u7684 Label\uff0c\u518d\u6b21\u4f7f\u7528\u65f6\uff0c\u4f1a\u88ab\u62d2\u7edd\u5e76\u62a5\u9519 ",(0,n.yg)("inlineCode",{parentName:"p"},"Label already used"),"\u3002\u901a\u8fc7\u8fd9\u4e2a\u673a\u5236\uff0c\u53ef\u4ee5\u5728 Doris \u4fa7\u505a\u5230 ",(0,n.yg)("inlineCode",{parentName:"p"},"At-Most-Once")," \u8bed\u4e49\u3002\u5982\u679c\u7ed3\u5408\u4e0a\u6e38\u7cfb\u7edf\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"At-Least-Once")," \u8bed\u4e49\uff0c\u5219\u53ef\u4ee5\u5b9e\u73b0\u5bfc\u5165\u6570\u636e\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"Exactly-Once")," \u8bed\u4e49\u3002"),(0,n.yg)("p",null,"\u5173\u4e8e\u539f\u5b50\u6027\u4fdd\u8bc1\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u53ef\u4ee5\u53c2\u9605 \u5bfc\u5165\u4e8b\u52a1\u548c\u539f\u5b50\u6027\u3002"),(0,n.yg)("h2",{id:"\u540c\u6b65\u53ca\u5f02\u6b65\u5bfc\u5165"},"\u540c\u6b65\u53ca\u5f02\u6b65\u5bfc\u5165"),(0,n.yg)("p",null,"\u5bfc\u5165\u65b9\u5f0f\u5206\u4e3a\u540c\u6b65\u548c\u5f02\u6b65\u3002\u5bf9\u4e8e\u540c\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u8fd4\u56de\u7ed3\u679c\u5373\u8868\u793a\u5bfc\u5165\u6210\u529f\u8fd8\u662f\u5931\u8d25\u3002\u800c\u5bf9\u4e8e\u5f02\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u8fd4\u56de\u6210\u529f\u4ec5\u4ee3\u8868\u4f5c\u4e1a\u63d0\u4ea4\u6210\u529f\uff0c\u4e0d\u4ee3\u8868\u6570\u636e\u5bfc\u5165\u6210\u529f\uff0c\u9700\u8981\u4f7f\u7528\u5bf9\u5e94\u7684\u547d\u4ee4\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7684\u8fd0\u884c\u72b6\u6001\u3002"),(0,n.yg)("h2",{id:"\u5bfc\u5165-array-\u7c7b\u578b"},"\u5bfc\u5165 Array \u7c7b\u578b"),(0,n.yg)("p",null,"\u5411\u91cf\u5316\u573a\u666f\u624d\u80fd\u652f\u6301 array \u51fd\u6570\uff0c\u975e\u5411\u91cf\u5316\u573a\u666f\u4e0d\u652f\u6301\u3002"),(0,n.yg)("p",null,"\u5982\u679c\u60f3\u8981\u5e94\u7528 array \u51fd\u6570\u5bfc\u5165\u6570\u636e\uff0c\u5219\u5e94\u5148\u542f\u7528\u5411\u91cf\u5316\u529f\u80fd\uff1b\u7136\u540e\u9700\u8981\u6839\u636e array \u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\u5c06\u8f93\u5165\u53c2\u6570\u5217\u8f6c\u6362\u4e3a array \u7c7b\u578b\uff1b\u6700\u540e\uff0c\u5c31\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 array \u51fd\u6570\u4e86\u3002"),(0,n.yg)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u5bfc\u5165\uff0c\u9700\u8981\u5148\u5c06\u5217 b14 \u548c\u5217 a13 \u5148 cast \u6210",(0,n.yg)("inlineCode",{parentName:"p"},"array<string>"),"\u7c7b\u578b\uff0c\u518d\u8fd0\u7528",(0,n.yg)("inlineCode",{parentName:"p"},"array_union"),"\u51fd\u6570\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL label_03_14_49_34_898986_19090452100 ( \n  DATA INFILE("hdfs://test.hdfs.com:9000/user/test/data/sys/load/array_test.data") \n  INTO TABLE `test_array_table` \n  COLUMNS TERMINATED BY "|" (`k1`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `a10`, `a11`, `a12`, `a13`, `b14`) \n  SET(a14=array_union(cast(b14 as array<string>), cast(a13 as array<string>))) WHERE size(a2) > 270) \n  WITH BROKER "hdfs" ("username"="test_array", "password"="") \n  PROPERTIES( "max_filter_ratio"="0.8" );\n')),(0,n.yg)("h2",{id:"\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce"},"\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce"),(0,n.yg)("p",null,"\u5bfc\u5165\u65f6\u9ed8\u8ba4\u5173\u95ed Pipeline \u5f15\u64ce\uff0c\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u53d8\u91cf\u5f00\u542f\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"../../admin-manual/config/fe-config"},"FE CONFIG")," \u4e2d\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"enable_pipeline_load"),"\uff0c\u5f00\u542f\u540e Streamload \u7b49\u5bfc\u5165\u4efb\u52a1\u5c06\u5c1d\u8bd5\u4f7f\u7528 Pipeline \u5f15\u64ce\u6267\u884c\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Session Variable \u4e2d\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"enable_nereids_dml_with_pipeline"),"\uff0c\u5f00\u542f\u540e insert into \u5c06\u5c1d\u8bd5\u4f7f\u7528 Pipeline \u5f15\u64ce\u6267\u884c\u3002"))),(0,n.yg)("p",null,"\u4ee5\u4e0a\u53d8\u91cf\u5f00\u542f\u540e\uff0c\u5177\u4f53\u662f\u5426\u4f7f\u7528 Pipeline \u5f15\u64ce\uff0c\u4ecd\u7136\u53d6\u51b3\u4e8e Session Variables ",(0,n.yg)("inlineCode",{parentName:"p"},"enable_pipeline_engine"),"\u3002\u5982\u679c\u8be5\u503c\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5373\u4f7f\u4ee5\u4e0a\u53d8\u91cf\u88ab\u8bbe\u7f6e\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5bfc\u5165\u4f9d\u7136\u4e0d\u4f1a\u4f7f\u7528 Pipeline \u5f15\u64ce\u6267\u884c\u3002"))}m.isMDXComponent=!0}}]);