"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[97749],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>m});var r=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),g=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=g(e.components);return r.createElement(p.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=g(t),y=l,m=s["".concat(p,".").concat(y)]||s[y]||c[y]||n;return t?r.createElement(m,i(i({ref:a},u),{},{components:t})):r.createElement(m,i({ref:a},u))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,i=new Array(n);i[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var g=2;g<n;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},17430:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>g});var r=t(58168),l=(t(96540),t(15680));const n={title:"Release 1.2.3",language:"zh-CN"},i=void 0,o={unversionedId:"releasenotes/release-1.2.3",id:"releasenotes/release-1.2.3",title:"Release 1.2.3",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/release-1.2.3.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.3",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.3",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 1.2.3",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 1.2.4",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.4"},next:{title:"Release 1.2.2",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.2"}},p={},g=[{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Elasticsearch Catalog",id:"elasticsearch-catalog",level:3},{value:"Hive Catalog",id:"hive-catalog",level:3},{value:"\u52a8\u6001\u5206\u533a\u4f18\u5316",id:"\u52a8\u6001\u5206\u533a\u4f18\u5316",level:3},{value:"\u4f18\u5316 BE \u7684\u7ebf\u7a0b\u6a21\u578b",id:"\u4f18\u5316-be-\u7684\u7ebf\u7a0b\u6a21\u578b",level:3}],u={toc:g},s="wrapper";function c(e){let{components:a,...t}=e;return(0,l.yg)(s,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u5728 1.2.3 \u7248\u672c\u4e2d\uff0cDoris \u56e2\u961f\u5df2\u7ecf\u4fee\u590d\u4e86\u81ea 1.2.2 \u7248\u672c\u53d1\u5e03\u4ee5\u6765\u8d85\u8fc7 200 \u4e2a\u95ee\u9898\u6216\u6027\u80fd\u6539\u8fdb\u9879\u3002\u540c\u65f6\uff0c1.2.3 \u7248\u672c\u4e5f\u4f5c\u4e3a 1.2.2 \u7684\u8fed\u4ee3\u7248\u672c\uff0c\u5177\u5907\u66f4\u9ad8\u7684\u7a33\u5b9a\u6027\uff0c\u5efa\u8bae\u6240\u6709\u7528\u6237\u5347\u7ea7\u5230\u8fd9\u4e2a\u7248\u672c\u3002"),(0,l.yg)("h1",{id:"improvement"},"Improvement"),(0,l.yg)("h3",{id:"jdbc-catalog"},"JDBC Catalog"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 JDBC Catalog \u8fde\u63a5\u5230\u53e6\u4e00\u4e2a Doris \u6570\u636e\u5e93\u3002")),(0,l.yg)("p",null,"\u76ee\u524d JDBC Catalog \u8fde\u63a5 Doris \u53ea\u652f\u6301\u7528 5.x \u7248\u672c\u7684 JDBC jar \u5305\u3002\u5982\u679c\u4f7f\u7528 8.x JDBC jar \u5305\u53ef\u80fd\u4f1a\u51fa\u73b0\u5217\u7c7b\u578b\u65e0\u6cd5\u5339\u914d\u95ee\u9898\u3002"),(0,l.yg)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/#doris"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/#doris")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u652f\u6301\u901a\u8fc7\u53c2\u6570 ",(0,l.yg)("inlineCode",{parentName:"p"},"only_specified_database")," \u6765\u540c\u6b65\u6307\u5b9a\u7684\u6570\u636e\u5e93\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u652f\u6301\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"lower_case_table_names")," \u53c2\u6570\u63a7\u5236\u662f\u5426\u4ee5\u5c0f\u5199\u5f62\u5f0f\u540c\u6b65\u8868\u540d\uff0c\u89e3\u51b3\u8868\u540d\u533a\u5206\u5927\u5c0f\u5199\u7684\u95ee\u9898\u3002"))),(0,l.yg)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4f18\u5316 JDBC Catalog \u7684\u8bfb\u53d6\u6027\u80fd\u3002")),(0,l.yg)("h3",{id:"elasticsearch-catalog"},"Elasticsearch Catalog"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u652f\u6301 Array \u7c7b\u578b\u6620\u5c04\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u652f\u6301\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"like_push_down")," \u5c5e\u6027\u4e0b\u63a8 like \u8868\u8fbe\u5f0f\u6765\u63a7\u5236 ES \u96c6\u7fa4\u7684 CPU \u5f00\u9500\u3002"))),(0,l.yg)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es")),(0,l.yg)("h3",{id:"hive-catalog"},"Hive Catalog"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u652f\u6301 Hive \u8868\u9ed8\u8ba4\u5206\u533a ",(0,l.yg)("inlineCode",{parentName:"p"},"__Hive_default_partition__"),"\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Hive Metastore \u5143\u6570\u636e\u81ea\u52a8\u540c\u6b65\u652f\u6301\u538b\u7f29\u683c\u5f0f\u7684\u901a\u77e5\u4e8b\u4ef6\u3002"))),(0,l.yg)("h3",{id:"\u52a8\u6001\u5206\u533a\u4f18\u5316"},"\u52a8\u6001\u5206\u533a\u4f18\u5316"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 storage_medium \u53c2\u6570\u6765\u63a7\u5236\u521b\u5efa\u52a8\u6001\u5206\u533a\u7684\u9ed8\u8ba4\u5b58\u50a8\u4ecb\u8d28\u3002")),(0,l.yg)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition"},"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition")),(0,l.yg)("h3",{id:"\u4f18\u5316-be-\u7684\u7ebf\u7a0b\u6a21\u578b"},"\u4f18\u5316 BE \u7684\u7ebf\u7a0b\u6a21\u578b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4f18\u5316 BE \u7684\u7ebf\u7a0b\u6a21\u578b\uff0c\u4ee5\u907f\u514d\u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u7ebf\u7a0b\u6240\u5e26\u6765\u7684\u7a33\u5b9a\u6027\u95ee\u9898\u3002")),(0,l.yg)("h1",{id:"bug-\u4fee\u590d"},"Bug \u4fee\u590d"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206 Unique Key \u6a21\u578b Merge-on-Write \u8868\u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206 Compaction \u76f8\u5173\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206 Delete \u8bed\u53e5\u5bfc\u81f4\u7684\u6570\u636e\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206 Query \u6267\u884c\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5728\u67d0\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u4f7f\u7528 JDBC Catalog \u5bfc\u81f4 BE \u5b95\u673a\u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206 Multi-Catalog \u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206\u5185\u5b58\u7edf\u8ba1\u548c\u4f18\u5316\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206 DecimalV3 \u548c date/datetimev2 \u7684\u76f8\u5173\u95ee\u9898\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u7684\u7a33\u5b9a\u6027\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206 Light Schema Change \u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"datetime")," \u7c7b\u578b\u521b\u5efa\u6279\u5904\u7406\u5206\u533a\u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 Broker Load \u5927\u6570\u636e\u91cf\u5bfc\u5165\u5931\u8d25\u800c\u5bfc\u81f4\u7684 FE \u5185\u5b58\u4f7f\u7528\u8fc7\u9ad8\u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5220\u9664\u8868\u540e\u65e0\u6cd5\u53d6\u6d88 Stream Load \u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u67e5\u8be2 ",(0,l.yg)("inlineCode",{parentName:"p"},"information_schema")," \u8d85\u65f6\u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"select outfile")," \u5e76\u53d1\u6570\u636e\u5bfc\u51fa\u5bfc\u81f4 BE \u5b95\u673a\u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u4e8b\u52a1\u6027\u63d2\u5165\u64cd\u4f5c\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u90e8\u5206\u67e5\u8be2\u548c\u5bfc\u5165 Profile \u7684\u95ee\u9898\uff0c\u5e76\u652f\u6301\u901a\u8fc7 FE web ui \u76f4\u63a5\u4e0b\u8f7d Profile \u6587\u4ef6\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 BE Tablet GC \u7ebf\u7a0b\u5bfc\u81f4 IO \u8d1f\u8f7d\u8fc7\u9ad8\u7684\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 Kafka Routine Load \u4e2d\u63d0\u4ea4 Offset \u4e0d\u51c6\u786e\u7684\u95ee\u9898\u3002"))))}c.isMDXComponent=!0}}]);