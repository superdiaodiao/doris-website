"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1792],{15680:(e,l,a)=>{a.d(l,{xA:()=>u,yg:()=>m});var n=a(96540);function t(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function r(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?r(Object(a),!0).forEach((function(l){t(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function p(e,l){if(null==e)return{};var a,n,t=function(e,l){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],l.indexOf(a)>=0||(t[a]=e[a]);return t}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=n.createContext({}),g=function(e){var l=n.useContext(o),a=l;return e&&(a="function"==typeof e?e(l):i(i({},l),e)),a},u=function(e){var l=g(e.components);return n.createElement(o.Provider,{value:l},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(e,l){var a=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=g(a),c=t,m=y["".concat(o,".").concat(c)]||y[c]||s[c]||r;return a?n.createElement(m,i(i({ref:l},u),{},{components:a})):n.createElement(m,i({ref:l},u))}));function m(e,l){var a=arguments,t=l&&l.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in l)hasOwnProperty.call(l,o)&&(p[o]=l[o]);p.originalType=e,p[y]="string"==typeof e?e:t,i[1]=p;for(var g=2;g<r;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91531:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var n=a(58168),t=(a(96540),a(15680));const r={title:"Release 1.2.4",language:"zh-CN"},i=void 0,p={unversionedId:"releasenotes/release-1.2.4",id:"version-2.0/releasenotes/release-1.2.4",title:"Release 1.2.4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/release-1.2.4.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.4",permalink:"/zh-CN/docs/releasenotes/release-1.2.4",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 1.2.4",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 1.2.5",permalink:"/zh-CN/docs/releasenotes/release-1.2.5"},next:{title:"Release 1.2.3",permalink:"/zh-CN/docs/releasenotes/release-1.2.3"}},o={},g=[{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Spark Load",id:"spark-load",level:3}],u={toc:g},y="wrapper";function s(e){let{components:l,...a}=e;return(0,t.yg)(y,(0,n.A)({},u,a,{components:l,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u5728 1.2.4 \u7248\u672c\u4e2d\uff0cDoris \u56e2\u961f\u5df2\u7ecf\u4fee\u590d\u4e86\u81ea 1.2.3 \u7248\u672c\u53d1\u5e03\u4ee5\u6765\u8fd1 150 \u4e2a\u95ee\u9898\u6216\u6027\u80fd\u6539\u8fdb\u9879\u3002\u540c\u65f6\uff0c1.2.4 \u7248\u672c\u4e5f\u4f5c\u4e3a 1.2.3 \u7684\u8fed\u4ee3\u7248\u672c\uff0c\u5177\u5907\u66f4\u9ad8\u7684\u7a33\u5b9a\u6027\uff0c\u5efa\u8bae\u6240\u6709\u7528\u6237\u5347\u7ea7\u5230\u8fd9\u4e2a\u7248\u672c\u3002"),(0,t.yg)("h1",{id:"behavior-changed"},"Behavior Changed"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u9488\u5bf9 Date/DatetimeV2 \u548c DecimalV3 \u7c7b\u578b\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"DESCRIBLE")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," \u8bed\u53e5\u7684\u7ed3\u679c\u4e2d\uff0c\u5c06\u4e0d\u518d\u663e\u793a\u4e3a Date/DatetimeV2 \u6216 DecimalV3\uff0c\u800c\u76f4\u63a5\u663e\u793a\u4e3a Date/Datetime \u6216 Decimal\u3002"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u8fd9\u4e2a\u6539\u52a8\u7528\u4e8e\u517c\u5bb9\u90e8\u5206 BI \u7cfb\u7edf\u3002\u5982\u679c\u60f3\u67e5\u770b\u5217\u7684\u5b9e\u9645\u7c7b\u578b\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"DESCRIBE ALL")," \u8bed\u53e5\u67e5\u770b\u3002"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u8be2 ",(0,t.yg)("inlineCode",{parentName:"p"},"information_schema")," \u5e93\u4e2d\u7684\u8868\u65f6\uff0c\u9ed8\u8ba4\u4e0d\u518d\u8fd4\u56de External Catalog \u4e2d\u7684\u5143\u4fe1\u606f\u3002"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u8fd9\u4e2a\u6539\u52a8\u907f\u514d\u4e86\u56e0 External Catalog \u7684\u8fde\u63a5\u95ee\u9898\u5bfc\u81f4\u7684 information_schema \u5e93\u4e0d\u53ef\u67e5\u7684\u95ee\u9898\uff0c\u4ece\u800c\u89e3\u51b3\u90e8\u5206 BI \u7cfb\u7edf\u4e0e Doris \u914d\u5408\u4f7f\u7528\u7684\u95ee\u9898\u3002\u53ef\u4ee5\u901a\u8fc7 FE \u7684\u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"li"},"infodb_support_ext_catalog "),"\u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u4e0d\u8fd4\u56de External Catalog \u4e2d\u7684\u5143\u4fe1\u606f\u3002")))),(0,t.yg)("h1",{id:"improvement"},"Improvement"),(0,t.yg)("h3",{id:"jdbc-catalog"},"JDBC Catalog"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 JDBC Catalog \u8fde\u63a5\u5176\u4ed6 Trino/Presto \u96c6\u7fa4")),(0,t.yg)("p",null,"\u200b        \u53c2\u8003\u6587\u6863\uff1a",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#trino"},"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#trino")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"JDBC Catalog \u8fde\u63a5 Clickhouse \u6570\u636e\u6e90\u652f\u6301 Array \u7c7b\u578b\u6620\u5c04")),(0,t.yg)("p",null,"\u200b        \u53c2\u8003\u6587\u6863\uff1a",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse"},"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse")),(0,t.yg)("h3",{id:"spark-load"},"Spark Load"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Spark Load \u652f\u6301 Resource Manager HA \u76f8\u5173\u914d\u7f6e")),(0,t.yg)("p",null,"\u200b        \u53c2\u8003 PR\uff1a ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15000"},"https://github.com/apache/doris/pull/15000")),(0,t.yg)("h1",{id:"bug-fixes"},"Bug Fixes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d Hive Catalog \u7684\u82e5\u5e72\u8fde\u901a\u6027\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d Hudi Catalog \u7684\u82e5\u5e72\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4f18\u5316 JDBC Catalog \u7684\u8fde\u63a5\u6c60\uff0c\u907f\u514d\u8fc7\u591a\u7684\u8fde\u63a5\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d\u901a\u8fc7 JDBC Catalog \u4ece\u53e6\u4e00\u4e2a Doris \u96c6\u7fa4\u5bfc\u5165\u6570\u636e\u662f\u4f1a\u53d1\u751f OOM \u7684\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d\u82e5\u5e72\u67e5\u8be2\u548c\u5bfc\u5165\u7684\u89c4\u5212\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d Unique Key Merge-On-Write \u8868\u7684\u82e5\u5e72\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d\u82e5\u5e72 BDBJE \u95ee\u9898\uff0c\u89e3\u51b3\u67d0\u4e9b\u60c5\u51b5\u4e0b FE \u5143\u6570\u636e\u5f02\u5e38\u7684\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d ",(0,t.yg)("inlineCode",{parentName:"p"},"CREATE VIEW")," \u8bed\u53e5\u4e0d\u652f\u6301 Table Valued Function \u7684\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d\u82e5\u5e72\u5185\u5b58\u7edf\u8ba1\u7684\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d\u8bfb\u53d6 Parquet/ORC \u8868\u7684\u82e5\u5e72\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d DecimalV3 \u7684\u82e5\u5e72\u95ee\u9898\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u590d ",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW QUERY/LOAD PROFILE")," \u7684\u82e5\u5e72\u95ee\u9898\u3002"))),(0,t.yg)("h1",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,t.yg)("p",null,"\u6709 47 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u5230 1.2.4 \u7684\u5b8c\u5584\u548c\u53d1\u5e03\u4e2d\uff0c\u611f\u8c22\u4ed6\u4eec\u7684\u8f9b\u52b3\u4ed8\u51fa\uff1a"),(0,t.yg)("p",null,"@zy-kkk"),(0,t.yg)("p",null,"@zhannngchen"),(0,t.yg)("p",null,"@zhangstar333"),(0,t.yg)("p",null,"@yixiutt"),(0,t.yg)("p",null,"@yiguolei"),(0,t.yg)("p",null,"@xinyiZzz"),(0,t.yg)("p",null,"@xiaokang"),(0,t.yg)("p",null,"@wsjz"),(0,t.yg)("p",null,"@wangbo"),(0,t.yg)("p",null,"@starocean999"),(0,t.yg)("p",null,"@sohardforaname"),(0,t.yg)("p",null,"@siriume"),(0,t.yg)("p",null,"@pingchunzhang"),(0,t.yg)("p",null,"@nextdreamblue"),(0,t.yg)("p",null,"@mymeiyi"),(0,t.yg)("p",null,"@mrhhsg"),(0,t.yg)("p",null,"@morrySnow"),(0,t.yg)("p",null,"@morningman"),(0,t.yg)("p",null,"@luwei16"),(0,t.yg)("p",null,"@luozenglin"),(0,t.yg)("p",null,"@liujinhui1994"),(0,t.yg)("p",null,"@liaoxin01"),(0,t.yg)("p",null,"@kaka11chen"),(0,t.yg)("p",null,"@jeffreys-cat"),(0,t.yg)("p",null,"@jacktengg"),(0,t.yg)("p",null,"@gavinchou"),(0,t.yg)("p",null,"@dutyu"),(0,t.yg)("p",null,"@dataroaring"),(0,t.yg)("p",null,"@chenlinzhong"),(0,t.yg)("p",null,"@caoliang-web"),(0,t.yg)("p",null,"@cambyzju"),(0,t.yg)("p",null,"@adonis0147"),(0,t.yg)("p",null,"@Yulei-Yang"),(0,t.yg)("p",null,"@Yukang-Lian"),(0,t.yg)("p",null,"@SWJTU-ZhangLei"),(0,t.yg)("p",null,"@Kikyou1997"),(0,t.yg)("p",null,"@Jibing-Li"),(0,t.yg)("p",null,"@JackDrogon"),(0,t.yg)("p",null,"@HappenLee"),(0,t.yg)("p",null,"@GoGoWen"),(0,t.yg)("p",null,"@Gabriel39"),(0,t.yg)("p",null,"@Doris-Extras"),(0,t.yg)("p",null,"@CalvinKirs"),(0,t.yg)("p",null,"@Cai-Yao"),(0,t.yg)("p",null,"@ByteYue"),(0,t.yg)("p",null,"@BiteTheDDDDt"),(0,t.yg)("p",null,"@BePPPower"))}s.isMDXComponent=!0}}]);