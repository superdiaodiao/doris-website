"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50671],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),g=r,h=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return t?n.createElement(h,o(o({ref:a},p),{},{components:t})):n.createElement(h,o({ref:a},p))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32081:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(58168),r=(t(96540),t(15680));const i={title:"Apache Doris 2.0.5 just released",summary:"Thanks to our community users and developers, about 217 improvements and bug fixes have been made in Doris 2.0.5 version.",date:"2024-02-28",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/2.0.5.png"},o=void 0,l={permalink:"/blog/release-note-2.0.5",source:"@site/blog/release-note-2.0.5.md",title:"Apache Doris 2.0.5 just released",description:"\x3c!--",date:"2024-02-28T00:00:00.000Z",formattedDate:"February 28, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 2.0.5 just released",summary:"Thanks to our community users and developers, about 217 improvements and bug fixes have been made in Doris 2.0.5 version.",date:"2024-02-28",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/2.0.5.png"},nextItem:{title:"A financial anti-fraud solution based on the Apache Doris data warehouse",permalink:"/blog/a-financial-anti-fraud-solution-based-on-the-apache-doris-data-warehouse"}},s={authorsImageUrls:[void 0]},u=[{value:"Behavior change",id:"behavior-change",level:2},{value:"New features",id:"new-features",level:2},{value:"Improvement and optimizations",id:"improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}],p={toc:u},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Thanks to our community users and developers, about 217 improvements and bug fixes have been made in Doris 2.0.5 version."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Quick Download\uff1a")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,r.yg)("h2",{id:"behavior-change"},"Behavior change"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"change char function behaviour: select char(0) = '\\0' return true as MySQL",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/30034"},"https://github.com/apache/doris/pull/30034")))),(0,r.yg)("li",{parentName:"ul"},"Allow exporting empty data",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/30703"},"https://github.com/apache/doris/pull/30703"))))),(0,r.yg)("h2",{id:"new-features"},"New features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Eliminate left outer join with is null condition"),(0,r.yg)("li",{parentName:"ul"},"Add show-tablets-belong stmt for analyzing a batch of tablet-ids"),(0,r.yg)("li",{parentName:"ul"},"InferPredicates support In, such as a = b & a in ","[1, 2]"," -> b in ","[1, 2]"),(0,r.yg)("li",{parentName:"ul"},"Optimize plan when column stats are unavailable"),(0,r.yg)("li",{parentName:"ul"},"Optimize plan using rollup column stats"),(0,r.yg)("li",{parentName:"ul"},"Support analyze materialized view"),(0,r.yg)("li",{parentName:"ul"},"Support ShowProcessStmt Show all Fe connection")),(0,r.yg)("h2",{id:"improvement-and-optimizations"},"Improvement and optimizations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Optimize query plan when column stats are unaviable"),(0,r.yg)("li",{parentName:"ul"},"Optimize query plan using rollup column stats"),(0,r.yg)("li",{parentName:"ul"},"Stop analyze quickly after user close auto analyze"),(0,r.yg)("li",{parentName:"ul"},"Catch load column stats exception, avoid print too much stack info to fe.out"),(0,r.yg)("li",{parentName:"ul"},"Select materialized view by specify the view name in sql"),(0,r.yg)("li",{parentName:"ul"},"Change auto analyze max table width default value to 100"),(0,r.yg)("li",{parentName:"ul"},"Escape characters for columns in recovery predicate pushdown in jdbc catalog"),(0,r.yg)("li",{parentName:"ul"},"Fix jdbc mysql catalog to_date fun pushdown"),(0,r.yg)("li",{parentName:"ul"},"Optimize the close logic of JDBC client"),(0,r.yg)("li",{parentName:"ul"},"Optimize jdbc connection pool parameter settings"),(0,r.yg)("li",{parentName:"ul"},"Obtain hudi partition information through HMS's API"),(0,r.yg)("li",{parentName:"ul"},"Optimize routine load job error msg and memory"),(0,r.yg)("li",{parentName:"ul"},"Skip all backup/restore jobs if max allowd option is set to 0")),(0,r.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.4-rc06...2.0.5-rc02"},"github"),"."),(0,r.yg)("h2",{id:"credits"},"Credits"),(0,r.yg)("p",null,"Thanks all who contribute to this release:"),(0,r.yg)("p",null,"airborne12, alexxing662, amorynan, AshinGau, BePPPower, bingquanzhao, BiteTheDDDDt, ByteYue, caiconghui, cambyzju, catpineapple, dataroaring, eldenmoon, Emor-nj, englefly, felixwluo, GoGoWen, HappenLee, hello-stephen, HHoflittlefish777, HowardQin, JackDrogon, jacktengg, jackwener, Jibing-Li, KassieZ, LemonLiTree, liaoxin01, liugddx, LuGuangming, morningman, morrySnow, mrhhsg, Mryange, mymeiyi, nextdreamblue, qidaye, ryanzryu, seawinde,starocean999, TangSiyang2001, vinlee19, w41ter, wangbo, wsjz, wuwenchi, xiaokang, XieJiann, xingyingone, xy720,xzj7019, yujun777, zclllyybb, zhangstar333, zhannngchen, zhiqiang-hhhh, zxealous, zy-kkk, zzzxl1993"))}m.isMDXComponent=!0}}]);