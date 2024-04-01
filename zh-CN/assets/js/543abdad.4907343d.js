"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94613],{15680:(n,e,t)=>{t.d(e,{xA:()=>i,yg:()=>m});var a=t(296540);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var d=a.createContext({}),s=function(n){var e=a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},i=function(n){var e=s(n.components);return a.createElement(d.Provider,{value:e},n.children)},y="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,d=n.parentName,i=o(n,["components","mdxType","originalType","parentName"]),y=s(t),c=r,m=y["".concat(d,".").concat(c)]||y[c]||u[c]||l;return t?a.createElement(m,p(p({ref:e},i),{},{components:t})):a.createElement(m,p({ref:e},i))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,p=new Array(l);p[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=n,o[y]="string"==typeof n?n:r,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},405909:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(296540),t(15680));const l={title:"TPC-H Benchmark",language:"zh-CN"},p=void 0,o={unversionedId:"benchmark/tpch",id:"version-2.1/benchmark/tpch",title:"TPC-H Benchmark",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/benchmark/tpch.md",sourceDirName:"benchmark",slug:"/benchmark/tpch",permalink:"/zh-CN/docs/benchmark/tpch",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TPC-H Benchmark",language:"zh-CN"},sidebar:"docs",previous:{title:"Star Schema Benchmark",permalink:"/zh-CN/docs/benchmark/ssb"},next:{title:"Release 2.1.0",permalink:"/zh-CN/docs/releasenotes/release-2.1.0"}},d={},s=[{value:"1. \u786c\u4ef6\u73af\u5883",id:"1-\u786c\u4ef6\u73af\u5883",level:2},{value:"2. \u8f6f\u4ef6\u73af\u5883",id:"2-\u8f6f\u4ef6\u73af\u5883",level:2},{value:"3. \u6d4b\u8bd5\u6570\u636e\u91cf",id:"3-\u6d4b\u8bd5\u6570\u636e\u91cf",level:2},{value:"4. \u6d4b\u8bd5SQL",id:"4-\u6d4b\u8bd5sql",level:2},{value:"5. \u6d4b\u8bd5\u7ed3\u679c",id:"5-\u6d4b\u8bd5\u7ed3\u679c",level:2},{value:"6. \u73af\u5883\u51c6\u5907",id:"6-\u73af\u5883\u51c6\u5907",level:2},{value:"7. \u6570\u636e\u51c6\u5907",id:"7-\u6570\u636e\u51c6\u5907",level:2},{value:"7.1 \u4e0b\u8f7d\u5b89\u88c5 TPC-H \u6570\u636e\u751f\u6210\u5de5\u5177",id:"71-\u4e0b\u8f7d\u5b89\u88c5-tpc-h-\u6570\u636e\u751f\u6210\u5de5\u5177",level:3},{value:"7.2 \u751f\u6210 TPC-H \u6d4b\u8bd5\u96c6",id:"72-\u751f\u6210-tpc-h-\u6d4b\u8bd5\u96c6",level:3},{value:"7.3 \u5efa\u8868",id:"73-\u5efa\u8868",level:3},{value:"7.3.1 \u51c6\u5907 <code>doris-cluster.conf</code> \u6587\u4ef6",id:"731-\u51c6\u5907-doris-clusterconf-\u6587\u4ef6",level:4},{value:"7.3.2 \u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa TPC-H \u8868",id:"732-\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa-tpc-h-\u8868",level:4},{value:"7.4 \u5bfc\u5165\u6570\u636e",id:"74-\u5bfc\u5165\u6570\u636e",level:3},{value:"7.5 \u68c0\u67e5\u5bfc\u5165\u6570\u636e",id:"75-\u68c0\u67e5\u5bfc\u5165\u6570\u636e",level:3},{value:"7.6 \u67e5\u8be2\u6d4b\u8bd5",id:"76-\u67e5\u8be2\u6d4b\u8bd5",level:3},{value:"7.6.1 \u6267\u884c\u67e5\u8be2\u811a\u672c",id:"761-\u6267\u884c\u67e5\u8be2\u811a\u672c",level:3},{value:"7.6.2 \u5355\u4e2a SQL \u6267\u884c",id:"762-\u5355\u4e2a-sql-\u6267\u884c",level:3}],i={toc:s},y="wrapper";function u(n){let{components:e,...l}=n;return(0,r.yg)(y,(0,a.A)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"tpc-h-benchmark"},"TPC-H Benchmark"),(0,r.yg)("p",null,"TPC-H\u662f\u4e00\u4e2a\u51b3\u7b56\u652f\u6301\u57fa\u51c6\uff08Decision Support Benchmark\uff09\uff0c\u5b83\u7531\u4e00\u5957\u9762\u5411\u4e1a\u52a1\u7684\u7279\u522b\u67e5\u8be2\u548c\u5e76\u53d1\u6570\u636e\u4fee\u6539\u7ec4\u6210\u3002\u67e5\u8be2\u548c\u586b\u5145\u6570\u636e\u5e93\u7684\u6570\u636e\u5177\u6709\u5e7f\u6cdb\u7684\u884c\u4e1a\u76f8\u5173\u6027\u3002\u8fd9\u4e2a\u57fa\u51c6\u6d4b\u8bd5\u6f14\u793a\u4e86\u68c0\u67e5\u5927\u91cf\u6570\u636e\u3001\u6267\u884c\u9ad8\u5ea6\u590d\u6742\u7684\u67e5\u8be2\u5e76\u56de\u7b54\u5173\u952e\u4e1a\u52a1\u95ee\u9898\u7684\u51b3\u7b56\u652f\u6301\u7cfb\u7edf\u3002TPC-H\u62a5\u544a\u7684\u6027\u80fd\u6307\u6807\u79f0\u4e3aTPC-H\u6bcf\u5c0f\u65f6\u590d\u5408\u67e5\u8be2\u6027\u80fd\u6307\u6807(QphH@Size)\uff0c\u53cd\u6620\u4e86\u7cfb\u7edf\u5904\u7406\u67e5\u8be2\u80fd\u529b\u7684\u591a\u4e2a\u65b9\u9762\u3002\u8fd9\u4e9b\u65b9\u9762\u5305\u62ec\u6267\u884c\u67e5\u8be2\u65f6\u6240\u9009\u62e9\u7684\u6570\u636e\u5e93\u5927\u5c0f\uff0c\u7531\u5355\u4e2a\u6d41\u63d0\u4ea4\u67e5\u8be2\u65f6\u7684\u67e5\u8be2\u5904\u7406\u80fd\u529b\uff0c\u4ee5\u53ca\u7531\u591a\u4e2a\u5e76\u53d1\u7528\u6237\u63d0\u4ea4\u67e5\u8be2\u65f6\u7684\u67e5\u8be2\u541e\u5410\u91cf\u3002"),(0,r.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Doris \u5728 TPC-H 1000G \u6d4b\u8bd5\u96c6\u4e0a\u7684\u6027\u80fd\u8868\u73b0\u3002"),(0,r.yg)("p",null,"\u5728 TPC-H \u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u4e0a\u7684 22 \u4e2a\u67e5\u8be2\u4e0a\uff0c\u6211\u4eec\u57fa\u4e8e Apache Doris 2.1.1-rc03 \u548c Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u4e86\u5bf9\u6bd4\u6d4b\u8bd5\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"TPCDS_1000G",src:t(241293).A,width:"2282",height:"608"})),(0,r.yg)("h2",{id:"1-\u786c\u4ef6\u73af\u5883"},"1. \u786c\u4ef6\u73af\u5883"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u786c\u4ef6"),(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u673a\u5668\u6570\u91cf"),(0,r.yg)("td",{parentName:"tr",align:null},"4 \u53f0\u817e\u8baf\u4e91\u4e3b\u673a\uff081\u4e2aFE\uff0c3\u4e2aBE\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CPU"),(0,r.yg)("td",{parentName:"tr",align:null},"AMD EPYC\u2122 Milan(2.55GHz/3.5GHz)  48\u6838")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u5b58"),(0,r.yg)("td",{parentName:"tr",align:null},"192G")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u5e26\u5bbd"),(0,r.yg)("td",{parentName:"tr",align:null},"21Gbps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u78c1\u76d8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ad8\u6027\u80fd\u4e91\u786c\u76d8")))),(0,r.yg)("h2",{id:"2-\u8f6f\u4ef6\u73af\u5883"},"2. \u8f6f\u4ef6\u73af\u5883"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Doris\u90e8\u7f72 3BE 1FE"),(0,r.yg)("li",{parentName:"ul"},"\u5185\u6838\u7248\u672c\uff1aLinux version 5.4.0-96-generic (buildd@lgw01-amd64-051)"),(0,r.yg)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff1aUbuntu 20.04 LTS (Focal Fossa)"),(0,r.yg)("li",{parentName:"ul"},"Doris \u8f6f\u4ef6\u7248\u672c\uff1a Apache Doris 2.1.1-rc03\u3001 Apache Doris 2.0.6"),(0,r.yg)("li",{parentName:"ul"},'JDK\uff1aopenjdk version "1.8.0_131"')),(0,r.yg)("h2",{id:"3-\u6d4b\u8bd5\u6570\u636e\u91cf"},"3. \u6d4b\u8bd5\u6570\u636e\u91cf"),(0,r.yg)("p",null,"\u6574\u4e2a\u6d4b\u8bd5\u6a21\u62df\u751f\u6210 TPCH 1000G \u7684\u6570\u636e\u5206\u522b\u5bfc\u5165\u5230 Apache Doris 2.1.1-rc03 \u548c Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4e0b\u9762\u662f\u8868\u7684\u76f8\u5173\u8bf4\u660e\u53ca\u6570\u636e\u91cf\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"TPC-H\u8868\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u884c\u6570"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"REGION"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u533a\u57df\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"NATION"),(0,r.yg)("td",{parentName:"tr",align:"left"},"25"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u56fd\u5bb6\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SUPPLIER"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1000\u4e07"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4f9b\u5e94\u5546\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"PART"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2\u4ebf"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u96f6\u90e8\u4ef6\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"PARTSUPP"),(0,r.yg)("td",{parentName:"tr",align:"left"},"8\u4ebf"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u96f6\u90e8\u4ef6\u4f9b\u5e94\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CUSTOMER"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1.5\u4ebf"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ORDERS"),(0,r.yg)("td",{parentName:"tr",align:"left"},"15\u4ebf"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8ba2\u5355\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"LINEITEM"),(0,r.yg)("td",{parentName:"tr",align:"left"},"60\u4ebf"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8ba2\u5355\u660e\u7ec6\u8868")))),(0,r.yg)("h2",{id:"4-\u6d4b\u8bd5sql"},"4. \u6d4b\u8bd5SQL"),(0,r.yg)("p",null,"TPCH 22 \u4e2a\u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5 \uff1a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/tpch-tools/queries/sf1000"},"TPCH-Query-SQL")),(0,r.yg)("h2",{id:"5-\u6d4b\u8bd5\u7ed3\u679c"},"5. \u6d4b\u8bd5\u7ed3\u679c"),(0,r.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 Apache Doris 2.1.1-rc03 \u548c Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u5bf9\u6bd4\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query"),(0,r.yg)("th",{parentName:"tr",align:null},"Apache Doris 2.1.1-rc03 (ms)"),(0,r.yg)("th",{parentName:"tr",align:null},"Apache Doris 2.0.6 (ms)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q1"),(0,r.yg)("td",{parentName:"tr",align:null},"7240"),(0,r.yg)("td",{parentName:"tr",align:null},"7638")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q2"),(0,r.yg)("td",{parentName:"tr",align:null},"249"),(0,r.yg)("td",{parentName:"tr",align:null},"377")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q3"),(0,r.yg)("td",{parentName:"tr",align:null},"3528"),(0,r.yg)("td",{parentName:"tr",align:null},"4389")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q4"),(0,r.yg)("td",{parentName:"tr",align:null},"1534"),(0,r.yg)("td",{parentName:"tr",align:null},"1903")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q5"),(0,r.yg)("td",{parentName:"tr",align:null},"5457"),(0,r.yg)("td",{parentName:"tr",align:null},"6425")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q6"),(0,r.yg)("td",{parentName:"tr",align:null},"159"),(0,r.yg)("td",{parentName:"tr",align:null},"150")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q7"),(0,r.yg)("td",{parentName:"tr",align:null},"1598"),(0,r.yg)("td",{parentName:"tr",align:null},"3141")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q8"),(0,r.yg)("td",{parentName:"tr",align:null},"2958"),(0,r.yg)("td",{parentName:"tr",align:null},"2792")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q9"),(0,r.yg)("td",{parentName:"tr",align:null},"14803"),(0,r.yg)("td",{parentName:"tr",align:null},"24732")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q10"),(0,r.yg)("td",{parentName:"tr",align:null},"6743"),(0,r.yg)("td",{parentName:"tr",align:null},"7315")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q11"),(0,r.yg)("td",{parentName:"tr",align:null},"414"),(0,r.yg)("td",{parentName:"tr",align:null},"395")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q12"),(0,r.yg)("td",{parentName:"tr",align:null},"371"),(0,r.yg)("td",{parentName:"tr",align:null},"417")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q13"),(0,r.yg)("td",{parentName:"tr",align:null},"6203"),(0,r.yg)("td",{parentName:"tr",align:null},"8095")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q14"),(0,r.yg)("td",{parentName:"tr",align:null},"485"),(0,r.yg)("td",{parentName:"tr",align:null},"681")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q15"),(0,r.yg)("td",{parentName:"tr",align:null},"2246"),(0,r.yg)("td",{parentName:"tr",align:null},"1459")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q16"),(0,r.yg)("td",{parentName:"tr",align:null},"1252"),(0,r.yg)("td",{parentName:"tr",align:null},"1382")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q17"),(0,r.yg)("td",{parentName:"tr",align:null},"1461"),(0,r.yg)("td",{parentName:"tr",align:null},"1204")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q18"),(0,r.yg)("td",{parentName:"tr",align:null},"10428"),(0,r.yg)("td",{parentName:"tr",align:null},"11386")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q19"),(0,r.yg)("td",{parentName:"tr",align:null},"2329"),(0,r.yg)("td",{parentName:"tr",align:null},"2172")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q20"),(0,r.yg)("td",{parentName:"tr",align:null},"569"),(0,r.yg)("td",{parentName:"tr",align:null},"1455")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q21"),(0,r.yg)("td",{parentName:"tr",align:null},"5574"),(0,r.yg)("td",{parentName:"tr",align:null},"6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q22"),(0,r.yg)("td",{parentName:"tr",align:null},"1042"),(0,r.yg)("td",{parentName:"tr",align:null},"1517")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"\u5408\u8ba1")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"76643")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"95595"))))),(0,r.yg)("h2",{id:"6-\u73af\u5883\u51c6\u5907"},"6. \u73af\u5883\u51c6\u5907"),(0,r.yg)("p",null,"\u8bf7\u5148\u53c2\u7167 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/install/standard-deployment"},"\u5b98\u65b9\u6587\u6863")," \u8fdb\u884c Doris \u7684\u5b89\u88c5\u90e8\u7f72\uff0c\u4ee5\u83b7\u5f97\u4e00\u4e2a\u6b63\u5e38\u8fd0\u884c\u4e2d\u7684 Doris \u96c6\u7fa4\uff08\u81f3\u5c11\u5305\u542b 1 FE 1 BE\uff0c\u63a8\u8350 1 FE 3 BE\uff09\u3002"),(0,r.yg)("h2",{id:"7-\u6570\u636e\u51c6\u5907"},"7. \u6570\u636e\u51c6\u5907"),(0,r.yg)("h3",{id:"71-\u4e0b\u8f7d\u5b89\u88c5-tpc-h-\u6570\u636e\u751f\u6210\u5de5\u5177"},"7.1 \u4e0b\u8f7d\u5b89\u88c5 TPC-H \u6570\u636e\u751f\u6210\u5de5\u5177"),(0,r.yg)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u4e0b\u8f7d\u5e76\u7f16\u8bd1  ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/tpch-tools"},"tpch-tools"),"  \u5de5\u5177\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/build-tpch-dbgen.sh\n")),(0,r.yg)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u5c06\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"TPC-H_Tools_v3.0.0/")," \u76ee\u5f55\u4e0b\u751f\u6210 ",(0,r.yg)("inlineCode",{parentName:"p"},"dbgen")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.yg)("h3",{id:"72-\u751f\u6210-tpc-h-\u6d4b\u8bd5\u96c6"},"7.2 \u751f\u6210 TPC-H \u6d4b\u8bd5\u96c6"),(0,r.yg)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210 TPC-H \u6570\u636e\u96c6\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/gen-tpch-data.sh -s 1000\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"sh gen-tpch-data.sh -h")," \u67e5\u770b\u811a\u672c\u5e2e\u52a9\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u6ce82\uff1a\u6570\u636e\u4f1a\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},".tbl")," \u4e3a\u540e\u7f00\u751f\u6210\u5728  ",(0,r.yg)("inlineCode",{parentName:"p"},"tpch-data/")," \u76ee\u5f55\u4e0b\u3002\u6587\u4ef6\u603b\u5927\u5c0f\u7ea61000GB\u3002\u751f\u6210\u65f6\u95f4\u53ef\u80fd\u5728\u6570\u5206\u949f\u52301\u5c0f\u65f6\u4e0d\u7b49\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u6ce83\uff1a\u9ed8\u8ba4\u751f\u6210 100G \u7684\u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6")),(0,r.yg)("h3",{id:"73-\u5efa\u8868"},"7.3 \u5efa\u8868"),(0,r.yg)("h4",{id:"731-\u51c6\u5907-doris-clusterconf-\u6587\u4ef6"},"7.3.1 \u51c6\u5907 ",(0,r.yg)("inlineCode",{parentName:"h4"},"doris-cluster.conf")," \u6587\u4ef6"),(0,r.yg)("p",null,"\u5728\u8c03\u7528\u5bfc\u5165\u811a\u672c\u524d\uff0c\u9700\u8981\u5c06 FE \u7684 ip \u7aef\u53e3\u7b49\u4fe1\u606f\u5199\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"doris-cluster.conf")," \u6587\u4ef6\u4e2d\u3002"),(0,r.yg)("p",null,"\u6587\u4ef6\u4f4d\u7f6e\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/tools/tpch-tools/conf/")," \u76ee\u5f55\u4e0b\u3002"),(0,r.yg)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5305\u62ec FE \u7684 ip\uff0cHTTP \u7aef\u53e3\uff0c\u7528\u6237\u540d\uff0c\u5bc6\u7801\u4ee5\u53ca\u5f85\u5bfc\u5165\u6570\u636e\u7684 DB \u540d\u79f0\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where TPC-H tables located\nexport DB='tpch'\n")),(0,r.yg)("h4",{id:"732-\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa-tpc-h-\u8868"},"7.3.2 \u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa TPC-H \u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/create-tpch-tables.sh -s 1000\n")),(0,r.yg)("p",null,"\u6216\u8005\u590d\u5236 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/tpch-tools/ddl/create-tpch-tables-sf1000.sql"},"create-tpch-tables.sql")," \u4e2d\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u5728 Doris \u4e2d\u6267\u884c\u3002"),(0,r.yg)("h3",{id:"74-\u5bfc\u5165\u6570\u636e"},"7.4 \u5bfc\u5165\u6570\u636e"),(0,r.yg)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u6267\u884c\u6570\u636e\u5bfc\u5165\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/load-tpch-data.sh\n")),(0,r.yg)("h3",{id:"75-\u68c0\u67e5\u5bfc\u5165\u6570\u636e"},"7.5 \u68c0\u67e5\u5bfc\u5165\u6570\u636e"),(0,r.yg)("p",null,"\u6267\u884c\u4e0b\u9762\u7684 SQL \u8bed\u53e5\u68c0\u67e5\u5bfc\u5165\u7684\u6570\u636e\u4e0e\u4e0a\u9762\u7684\u6570\u636e\u91cf\u4e00\u81f4\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select count(*)  from  lineitem;\nselect count(*)  from  orders;\nselect count(*)  from  partsupp;\nselect count(*)  from  part;\nselect count(*)  from  customer;\nselect count(*)  from  supplier;\nselect count(*)  from  nation;\nselect count(*)  from  region;\nselect count(*)  from  revenue0;\n")),(0,r.yg)("h3",{id:"76-\u67e5\u8be2\u6d4b\u8bd5"},"7.6 \u67e5\u8be2\u6d4b\u8bd5"),(0,r.yg)("h3",{id:"761-\u6267\u884c\u67e5\u8be2\u811a\u672c"},"7.6.1 \u6267\u884c\u67e5\u8be2\u811a\u672c"),(0,r.yg)("p",null,"\u6267\u884c\u4e0a\u9762\u7684\u6d4b\u8bd5 SQL \u6216\u8005 \u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/run-tpch-queries.sh -s 1000\n")),(0,r.yg)("h3",{id:"762-\u5355\u4e2a-sql-\u6267\u884c"},"7.6.2 \u5355\u4e2a SQL \u6267\u884c"),(0,r.yg)("p",null,"\u4e0b\u9762\u662f\u6d4b\u8bd5\u65f6\u4f7f\u7528\u7684 SQL \u8bed\u53e5\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4ece\u4ee3\u7801\u5e93\u91cc\u83b7\u53d6\u6700\u65b0\u7684 SQL \u3002\u6700\u65b0\u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5\u5730\u5740\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/tpch-tools/queries/sf1000"},"TPC-H \u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--Q1\nselect\n    l_returnflag,\n    l_linestatus,\n    sum(l_quantity) as sum_qty,\n    sum(l_extendedprice) as sum_base_price,\n    sum(l_extendedprice * (1 - l_discount)) as sum_disc_price,\n    sum(l_extendedprice * (1 - l_discount) * (1 + l_tax)) as sum_charge,\n    avg(l_quantity) as avg_qty,\n    avg(l_extendedprice) as avg_price,\n    avg(l_discount) as avg_disc,\n    count(*) as count_order\nfrom\n    lineitem\nwhere\n    l_shipdate <= date '1998-12-01' - interval '90' day\ngroup by\n    l_returnflag,\n    l_linestatus\norder by\n    l_returnflag,\n    l_linestatus;\n\n--Q2\nselect\n    s_acctbal,\n    s_name,\n    n_name,\n    p_partkey,\n    p_mfgr,\n    s_address,\n    s_phone,\n    s_comment\nfrom\n    part,\n    supplier,\n    partsupp,\n    nation,\n    region\nwhere\n    p_partkey = ps_partkey\n    and s_suppkey = ps_suppkey\n    and p_size = 15\n    and p_type like '%BRASS'\n    and s_nationkey = n_nationkey\n    and n_regionkey = r_regionkey\n    and r_name = 'EUROPE'\n    and ps_supplycost = (\n        select\n            min(ps_supplycost)\n        from\n            partsupp,\n            supplier,\n            nation,\n            region\n        where\n        p_partkey = ps_partkey\n        and s_suppkey = ps_suppkey\n        and s_nationkey = n_nationkey\n        and n_regionkey = r_regionkey\n        and r_name = 'EUROPE'\n)\norder by\n    s_acctbal desc,\n    n_name,\n    s_name,\n    p_partkey\nlimit 100;\n\n--Q3\nselect\n    l_orderkey,\n    sum(l_extendedprice * (1 - l_discount)) as revenue,\n    o_orderdate,\n    o_shippriority\nfrom\n    customer,\n    orders,\n    lineitem\nwhere\n    c_mktsegment = 'BUILDING'\n    and c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and o_orderdate < date '1995-03-15'\n    and l_shipdate > date '1995-03-15'\ngroup by\n    l_orderkey,\n    o_orderdate,\n    o_shippriority\norder by\n    revenue desc,\n    o_orderdate\nlimit 10;\n\n--Q4\nselect\n    o_orderpriority,\n    count(*) as order_count\nfrom\n    orders\nwhere\n    o_orderdate >= date '1993-07-01'\n    and o_orderdate < date '1993-07-01' + interval '3' month\n    and exists (\n        select\n            *\n        from\n            lineitem\n        where\n                l_orderkey = o_orderkey\n          and l_commitdate < l_receiptdate\n    )\ngroup by\n    o_orderpriority\norder by\n    o_orderpriority;\n\n--Q5\nselect\n    n_name,\n    sum(l_extendedprice * (1 - l_discount)) as revenue\nfrom\n    customer,\n    orders,\n    lineitem,\n    supplier,\n    nation,\n    region\nwhere\n    c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and l_suppkey = s_suppkey\n    and c_nationkey = s_nationkey\n    and s_nationkey = n_nationkey\n    and n_regionkey = r_regionkey\n    and r_name = 'ASIA'\n    and o_orderdate >= date '1994-01-01'\n    and o_orderdate < date '1994-01-01' + interval '1' year\ngroup by\n    n_name\norder by\n    revenue desc;\n\n--Q6\nselect\n    sum(l_extendedprice * l_discount) as revenue\nfrom\n    lineitem\nwhere\n    l_shipdate >= date '1994-01-01'\n    and l_shipdate < date '1994-01-01' + interval '1' year\n    and l_discount between .06 - 0.01 and .06 + 0.01\n    and l_quantity < 24;\n\n--Q7\nselect\n    supp_nation,\n    cust_nation,\n    l_year,\n    sum(volume) as revenue\nfrom\n    (\n        select\n            n1.n_name as supp_nation,\n            n2.n_name as cust_nation,\n            extract(year from l_shipdate) as l_year,\n            l_extendedprice * (1 - l_discount) as volume\n        from\n            supplier,\n            lineitem,\n            orders,\n            customer,\n            nation n1,\n            nation n2\n        where\n            s_suppkey = l_suppkey\n            and o_orderkey = l_orderkey\n            and c_custkey = o_custkey\n            and s_nationkey = n1.n_nationkey\n            and c_nationkey = n2.n_nationkey\n            and (\n                (n1.n_name = 'FRANCE' and n2.n_name = 'GERMANY')\n                or (n1.n_name = 'GERMANY' and n2.n_name = 'FRANCE')\n            )\n            and l_shipdate between date '1995-01-01' and date '1996-12-31'\n    ) as shipping\ngroup by\n    supp_nation,\n    cust_nation,\n    l_year\norder by\n    supp_nation,\n    cust_nation,\n    l_year;\n\n--Q8\n\nselect\n    o_year,\n    sum(case\n        when nation = 'BRAZIL' then volume\n        else 0\n    end) / sum(volume) as mkt_share\nfrom\n    (\n        select\n            extract(year from o_orderdate) as o_year,\n            l_extendedprice * (1 - l_discount) as volume,\n            n2.n_name as nation\n        from\n            part,\n            supplier,\n            lineitem,\n            orders,\n            customer,\n            nation n1,\n            nation n2,\n            region\n        where\n            p_partkey = l_partkey\n            and s_suppkey = l_suppkey\n            and l_orderkey = o_orderkey\n            and o_custkey = c_custkey\n            and c_nationkey = n1.n_nationkey\n            and n1.n_regionkey = r_regionkey\n            and r_name = 'AMERICA'\n            and s_nationkey = n2.n_nationkey\n            and o_orderdate between date '1995-01-01' and date '1996-12-31'\n            and p_type = 'ECONOMY ANODIZED STEEL'\n    ) as all_nations\ngroup by\n    o_year\norder by\n    o_year;\n\n--Q9\nselect\n    nation,\n    o_year,\n    sum(amount) as sum_profit\nfrom\n    (\n        select\n            n_name as nation,\n            extract(year from o_orderdate) as o_year,\n            l_extendedprice * (1 - l_discount) - ps_supplycost * l_quantity as amount\n        from\n            part,\n            supplier,\n            lineitem,\n            partsupp,\n            orders,\n            nation\n        where\n            s_suppkey = l_suppkey\n            and ps_suppkey = l_suppkey\n            and ps_partkey = l_partkey\n            and p_partkey = l_partkey\n            and o_orderkey = l_orderkey\n            and s_nationkey = n_nationkey\n            and p_name like '%green%'\n    ) as profit\ngroup by\n    nation,\n    o_year\norder by\n    nation,\n    o_year desc;\n\n--Q10\nselect\n    c_custkey,\n    c_name,\n    sum(l_extendedprice * (1 - l_discount)) as revenue,\n    c_acctbal,\n    n_name,\n    c_address,\n    c_phone,\n    c_comment\nfrom\n    customer,\n    orders,\n    lineitem,\n    nation\nwhere\n    c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and o_orderdate >= date '1993-10-01'\n    and o_orderdate < date '1993-10-01' + interval '3' month\n    and l_returnflag = 'R'\n    and c_nationkey = n_nationkey\ngroup by\n    c_custkey,\n    c_name,\n    c_acctbal,\n    c_phone,\n    n_name,\n    c_address,\n    c_comment\norder by\n    revenue desc\nlimit 20;\n\n\n--Q11\nselect\n    ps_partkey,\n    sum(ps_supplycost * ps_availqty) as value\nfrom\n    partsupp,\n    supplier,\n    nation\nwhere\n    ps_suppkey = s_suppkey\n    and s_nationkey = n_nationkey\n    and n_name = 'GERMANY'\ngroup by\n    ps_partkey having\n    sum(ps_supplycost * ps_availqty) > (\n        select\n        sum(ps_supplycost * ps_availqty) * 0.000002\n        from\n            partsupp,\n            supplier,\n            nation\n        where\n            ps_suppkey = s_suppkey\n            and s_nationkey = n_nationkey\n            and n_name = 'GERMANY'\n    )\norder by\n    value desc;\n\n--Q12\nselect\n    l_shipmode,\n    sum(case\n        when o_orderpriority = '1-URGENT'\n            or o_orderpriority = '2-HIGH'\n            then 1\n        else 0\n    end) as high_line_count,\n    sum(case\n        when o_orderpriority <> '1-URGENT'\n            and o_orderpriority <> '2-HIGH'\n            then 1\n        else 0\n    end) as low_line_count\nfrom\n    orders,\n    lineitem\nwhere\n    o_orderkey = l_orderkey\n    and l_shipmode in ('MAIL', 'SHIP')\n    and l_commitdate < l_receiptdate\n    and l_shipdate < l_commitdate\n    and l_receiptdate >= date '1994-01-01'\n    and l_receiptdate < date '1994-01-01' + interval '1' year\ngroup by\n    l_shipmode\norder by\n    l_shipmode;\n\n--Q13\nselect\n    c_count,\n    count(*) as custdist\nfrom\n    (\n        select\n            c_custkey,\n            count(o_orderkey) as c_count\n        from\n            customer left outer join orders on\n                c_custkey = o_custkey\n                and o_comment not like '%special%requests%'\n        group by\n            c_custkey\n    ) as c_orders\ngroup by\n    c_count\norder by\n    custdist desc,\n    c_count desc;\n\n--Q14\nselect\n    100.00 * sum(case\n        when p_type like 'PROMO%'\n            then l_extendedprice * (1 - l_discount)\n        else 0\n    end) / sum(l_extendedprice * (1 - l_discount)) as promo_revenue\nfrom\n    lineitem,\n    part\nwhere\n    l_partkey = p_partkey\n    and l_shipdate >= date '1995-09-01'\n    and l_shipdate < date '1995-09-01' + interval '1' month;\n\n--Q15\nselect\n    s_suppkey,\n    s_name,\n    s_address,\n    s_phone,\n    total_revenue\nfrom\n    supplier,\n    revenue0\nwhere\n    s_suppkey = supplier_no\n    and total_revenue = (\n        select\n            max(total_revenue)\n        from\n            revenue0\n    )\norder by\n    s_suppkey;\n\n--Q16\nselect\n    p_brand,\n    p_type,\n    p_size,\n    count(distinct ps_suppkey) as supplier_cnt\nfrom\n    partsupp,\n    part\nwhere\n    p_partkey = ps_partkey\n    and p_brand <> 'Brand#45'\n    and p_type not like 'MEDIUM POLISHED%'\n    and p_size in (49, 14, 23, 45, 19, 3, 36, 9)\n    and ps_suppkey not in (\n        select\n            s_suppkey\n        from\n            supplier\n        where\n            s_comment like '%Customer%Complaints%'\n    )\ngroup by\n    p_brand,\n    p_type,\n    p_size\norder by\n    supplier_cnt desc,\n    p_brand,\n    p_type,\n    p_size;\n\n--Q17\nselect\n    sum(l_extendedprice) / 7.0 as avg_yearly\nfrom\n    lineitem,\n    part\nwhere\n    p_partkey = l_partkey\n    and p_brand = 'Brand#23'\n    and p_container = 'MED BOX'\n    and l_quantity < (\n        select\n            0.2 * avg(l_quantity)\n        from\n            lineitem\n        where\n            l_partkey = p_partkey\n    );\n\n--Q18\nselect\n    c_name,\n    c_custkey,\n    o_orderkey,\n    o_orderdate,\n    o_totalprice,\n    sum(l_quantity)\nfrom\n    customer,\n    orders,\n    lineitem\nwhere\n    o_orderkey  in  (\n        select\n            l_orderkey\n        from\n            lineitem\n        group  by\n            l_orderkey  having\n                sum(l_quantity)  >  300\n    )\n    and  c_custkey  =  o_custkey\n    and  o_orderkey  =  l_orderkey\ngroup  by\n    c_name,\n    c_custkey,\n    o_orderkey,\n    o_orderdate,\n    o_totalprice\norder  by\n    o_totalprice  desc,\n    o_orderdate\nlimit  100;\n\n\n--Q19\nselect\n    sum(l_extendedprice* (1 - l_discount)) as revenue\nfrom\n    lineitem,\n    part\nwhere\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#12'\n        and p_container in ('SM CASE', 'SM BOX', 'SM PACK', 'SM PKG')\n        and l_quantity >= 1 and l_quantity <= 1 + 10\n        and p_size between 1 and 5\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    )\n    or\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#23'\n        and p_container in ('MED BAG', 'MED BOX', 'MED PKG', 'MED PACK')\n        and l_quantity >= 10 and l_quantity <= 10 + 10\n        and p_size between 1 and 10\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    )\n    or\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#34'\n        and p_container in ('LG CASE', 'LG BOX', 'LG PACK', 'LG PKG')\n        and l_quantity >= 20 and l_quantity <= 20 + 10\n        and p_size between 1 and 15\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    );\n\n--Q20\nselect\n    s_name,\n    s_address\nfrom\n    supplier,\n    nation\nwhere\n    s_suppkey in (\n        select\n            ps_suppkey\n        from\n            partsupp\n        where\n            ps_partkey in (\n                select\n                    p_partkey\n                from\n                    part\n                where\n                        p_name like 'forest%'\n            )\n            and ps_availqty > (\n                select\n                    0.5 * sum(l_quantity)\n                from\n                    lineitem\n                where\n                    l_partkey = ps_partkey\n                    and l_suppkey = ps_suppkey\n                    and l_shipdate >= date '1994-01-01'\n                    and l_shipdate < date '1994-01-01' + interval '1' year\n            )\n    )\n    and s_nationkey = n_nationkey\n    and n_name = 'CANADA'\norder by\n    s_name;\n\n--Q21\nselect\n    s_name,\n    count(*) as numwait\nfrom\n    supplier,\n    lineitem l1,\n    orders,\n    nation\nwhere\n    s_suppkey = l1.l_suppkey\n    and o_orderkey = l1.l_orderkey\n    and o_orderstatus = 'F'\n    and l1.l_receiptdate > l1.l_commitdate\n    and exists (\n        select\n            *\n        from\n            lineitem l2\n        where\n                l2.l_orderkey = l1.l_orderkey\n          and l2.l_suppkey <> l1.l_suppkey\n    )\n    and not exists (\n        select\n            *\n        from\n            lineitem l3\n        where\n                l3.l_orderkey = l1.l_orderkey\n          and l3.l_suppkey <> l1.l_suppkey\n          and l3.l_receiptdate > l3.l_commitdate\n    )\n    and s_nationkey = n_nationkey\n    and n_name = 'SAUDI ARABIA'\ngroup by\n    s_name\norder by\n    numwait desc,\n    s_name\nlimit 100;\n\n--Q22\nselect\n    cntrycode,\n    count(*) as numcust,\n    sum(c_acctbal) as totacctbal\nfrom\n    (\n        select\n            substring(c_phone, 1, 2) as cntrycode,\n            c_acctbal\n        from\n            customer\n        where\n            substring(c_phone, 1, 2) in\n            ('13', '31', '23', '29', '30', '18', '17')\n            and c_acctbal > (\n                select\n                    avg(c_acctbal)\n                from\n                    customer\n                where\n                    c_acctbal > 0.00\n                    and substring(c_phone, 1, 2) in\n                      ('13', '31', '23', '29', '30', '18', '17')\n            )\n            and not exists (\n                select\n                    *\n                from\n                    orders\n                where\n                    o_custkey = c_custkey\n            )\n    ) as custsale\ngroup by\n    cntrycode\norder by\n    cntrycode;\n\n")))}u.isMDXComponent=!0},241293:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/tpch_2.1-4d123469b2b375a1c8ab400438af5b8c.png"}}]);