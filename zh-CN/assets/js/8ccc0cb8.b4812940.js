"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22927],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>m});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),u=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(a),y=t,m=g["".concat(p,".").concat(y)]||g[y]||c[y]||l;return a?r.createElement(m,i(i({ref:n},s),{},{components:a})):r.createElement(m,i({ref:n},s))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:t,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},44603:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(58168),t=(a(96540),a(15680));const l={title:"Release 2.0.5",language:"zh-CN"},i=void 0,o={unversionedId:"releasenotes/release-2.0.5",id:"version-2.0/releasenotes/release-2.0.5",title:"Release 2.0.5",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/release-2.0.5.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0.5",permalink:"/zh-CN/docs/releasenotes/release-2.0.5",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0.5",language:"zh-CN"},sidebar:"docs",previous:{title:"TPC-H Benchmark",permalink:"/zh-CN/docs/benchmark/tpch"},next:{title:"Release 2.0.4",permalink:"/zh-CN/docs/releasenotes/release-2.0.4"}},p={},u=[{value:"\u884c\u4e3a\u53d8\u66f4",id:"\u884c\u4e3a\u53d8\u66f4",level:2},{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",level:2},{value:"\u6539\u8fdb\u548c\u4f18\u5316",id:"\u6539\u8fdb\u548c\u4f18\u5316",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],s={toc:u},g="wrapper";function c(e){let{components:n,...a}=e;return(0,t.yg)(g,(0,r.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0c",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Apache Doris 2.0.5")," \u7248\u672c\u5df2\u4e8e 2024 \u5e74 2 \u6708 27 \u65e5\u6b63\u5f0f\u4e0e\u5927\u5bb6\u89c1\u9762\u3002\u8fd9\u6b21\u66f4\u65b0\u5e26\u6765\u4e00\u7cfb\u5217\u884c\u4e3a\u53d8\u66f4\u548c\u529f\u80fd\u66f4\u65b0\uff0c\u5e76\u8fdb\u884c\u4e86\u82e5\u5e72\u7684\u6539\u8fdb\u4e0e\u4f18\u5316\uff0c\u65e8\u5728\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u4e3a\u7a33\u5b9a\u9ad8\u6548\u7684\u6570\u636e\u67e5\u8be2\u4e0e\u5206\u6790\u4f53\u9a8c\u3002\u65b0\u7248\u672c\u5df2\u7ecf\u4e0a\u7ebf\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\uff01"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u5b98\u7f51\u4e0b\u8f7d\uff1a")," ",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"GitHub \u4e0b\u8f7d\uff1a")," ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,t.yg)("h2",{id:"\u884c\u4e3a\u53d8\u66f4"},"\u884c\u4e3a\u53d8\u66f4"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"select char(0) = '\\0'"),"  \u8fd4\u56de true\uff0c\u8ddf MySQL \u7684\u884c\u4e3a\u4fdd\u6301\u4e00\u81f4",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/30034"},"https://github.com/apache/doris/pull/30034")))),(0,t.yg)("li",{parentName:"ul"},"Export \u5bfc\u51fa\u6570\u636e\u652f\u6301\u7a7a\u8868",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/30703"},"https://github.com/apache/doris/pull/30703"))))),(0,t.yg)("h2",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5229\u7528\u8fc7\u6ee4\u6761\u4ef6\u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"is null")," \u8c13\u8bcd\uff0c\u5c06 OUTER JOIN \u8f6c\u6362\u4e3a ANTI JOIN"),(0,t.yg)("li",{parentName:"ul"},"\u589e\u52a0 ",(0,t.yg)("inlineCode",{parentName:"li"},"SHOW TABLETS BELONG")," \u8bed\u6cd5\u7528\u4e8e\u83b7\u53d6 tablet \u5c5e\u4e8e\u54ea\u4e2a table"),(0,t.yg)("li",{parentName:"ul"},"InferPredicates \u652f\u6301 ",(0,t.yg)("inlineCode",{parentName:"li"},"IN"),"\uff0c\u4f8b\u5982\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"a = b & a in [1, 2] -> b in [1, 2]")),(0,t.yg)("li",{parentName:"ul"},"\u652f\u6301\u5bf9\u7269\u5316\u89c6\u56fe\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SHOW PROCESSLIST")," \u652f\u6301\u8f93\u51fa\u8fde\u63a5\u5bf9\u5e94\u7684 FE"),(0,t.yg)("li",{parentName:"ul"},"Export \u5bfc\u51fa CSV \u6587\u4ef6\u652f\u6301\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"with_bom")," \u53c2\u6570\u63a7\u5236\u662f\u5426\u5e26\u6709 Windows BOM")),(0,t.yg)("h2",{id:"\u6539\u8fdb\u548c\u4f18\u5316"},"\u6539\u8fdb\u548c\u4f18\u5316"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5728\u65e0\u7edf\u8ba1\u4fe1\u606f\u65f6\u4f18\u5316 Query Plan"),(0,t.yg)("li",{parentName:"ul"},"\u57fa\u4e8e Rollup \u7684\u7edf\u8ba1\u4fe1\u606f\u4f18\u5316 Query Plan"),(0,t.yg)("li",{parentName:"ul"},"\u7528\u6237\u505c\u6b62 Auto Analyze \u540e\u5c3d\u5feb\u505c\u6b62\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4efb\u52a1"),(0,t.yg)("li",{parentName:"ul"},"\u7f13\u5b58\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u5f02\u5e38\uff0c\u907f\u514d\u5927\u7ea6\u592a\u591a\u5f02\u5e38\u6808"),(0,t.yg)("li",{parentName:"ul"},"\u652f\u6301\u5728 SQL \u4e2d\u81ea\u5b9a\u4f7f\u7528\u67d0\u4e2a\u7269\u5316\u89c6\u56fe"),(0,t.yg)("li",{parentName:"ul"},"JDBC Catalog \u8c13\u8bcd\u4e0b\u63a8\u5217\u540d\u5b57\u7b26\u8f6c\u4e49"),(0,t.yg)("li",{parentName:"ul"},"\u4fee\u590d MySQL Catalog \u4e2d ",(0,t.yg)("inlineCode",{parentName:"li"},"to_date")," \u51fd\u6570\u4e0b\u63a8\u7684\u95ee\u9898"),(0,t.yg)("li",{parentName:"ul"},"\u4f18\u5316 JDBC \u5ba2\u6237\u7aef\u8fde\u63a5\u5173\u95ed\u7684\u903b\u8f91\uff0c\u5728\u5f02\u5e38\u65f6\u6b63\u5e38\u53d6\u6d88\u67e5\u8be2"),(0,t.yg)("li",{parentName:"ul"},"\u4f18\u5316 JDBC \u8fde\u63a5\u6c60\u7684\u53c2\u6570"),(0,t.yg)("li",{parentName:"ul"},"\u901a\u8fc7 HMS API \u83b7\u53d6 Hudi \u5916\u8868\u7684\u5206\u533a\u4fe1\u606f"),(0,t.yg)("li",{parentName:"ul"},"\u4f18\u5316 Routine Load \u7684\u5185\u5b58\u5360\u7528\u548c\u9519\u8bef\u4fe1\u606f"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c ",(0,t.yg)("inlineCode",{parentName:"li"},"max_backup_restore_job_num_per_db")," \u53c2\u6570\u4e3a 0\uff0c\u8df3\u8fc7\u6240\u6709\u5907\u4efd\u6062\u590d\u4efb\u52a1")),(0,t.yg)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,t.yg)("p",null,"\u6700\u540e\uff0c\u8877\u5fc3\u611f\u8c22 59 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache Doris 2.0.5 \u7248\u672c\u505a\u51fa\u4e86\u91cd\u8981\u8d21\u732e:"),(0,t.yg)("p",null,"airborne12, alexxing662, amorynan, AshinGau, BePPPower, bingquanzhao, BiteTheDDDDt, ByteYue, caiconghui, cambyzju, catpineapple, dataroaring, eldenmoon, Emor-nj, englefly, felixwluo, GoGoWen, HappenLee, hello-stephen, HHoflittlefish777, HowardQin, JackDrogon, jacktengg, jackwener, Jibing-Li, KassieZ, LemonLiTree, liaoxin01, liugddx, LuGuangming, morningman, morrySnow, mrhhsg, Mryange, mymeiyi, nextdreamblue, qidaye, ryanzryu, seawinde,starocean999, TangSiyang2001, vinlee19, w41ter, wangbo, wsjz, wuwenchi, xiaokang, XieJiann, xingyingone, xy720,xzj7019, yujun777, zclllyybb, zhangstar333, zhannngchen, zhiqiang-hhhh, zxealous, zy-kkk, zzzxl1993"))}c.isMDXComponent=!0}}]);