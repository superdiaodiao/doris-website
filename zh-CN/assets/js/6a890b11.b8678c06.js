"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88401],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(g,o(o({ref:a},u),{},{components:t})):r.createElement(g,o({ref:a},u))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5092:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),n=(t(96540),t(15680));const i={title:"Apache Doris 2.0.4 just released",summary:"Thanks to our community users and developers, 333 improvements and bug fixes have been made in Doris 2.0.4.",date:"2024-01-26",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.4.png"},o=void 0,l={permalink:"/zh-CN/blog/release-note-2.0.4",source:"@site/blog/release-note-2.0.4.md",title:"Apache Doris 2.0.4 just released",description:"\x3c!--",date:"2024-01-26T00:00:00.000Z",formattedDate:"2024\u5e741\u670826\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 2.0.4 just released",summary:"Thanks to our community users and developers, 333 improvements and bug fixes have been made in Doris 2.0.4.",date:"2024-01-26",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.4.png"},prevItem:{title:"A deep dive into inverted index: how it speeds up text searches by 40 times",permalink:"/zh-CN/blog/inverted-index-accelerates-text-searches-by-40-time-apache-doris"},nextItem:{title:"Financial data warehousing: fast, secure, and highly available with Apache Doris",permalink:"/zh-CN/blog/a-fast-secure-high-available-real-time-data-warehouse-based-on-apache-doris"}},p={authorsImageUrls:[void 0]},s=[{value:"Behavior change",id:"behavior-change",level:2},{value:"New features",id:"new-features",level:2},{value:"Three Improvement and optimizations",id:"three-improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}],u={toc:s},m="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Thanks to our community users and developers, about 333 improvements and bug fixes have been made in Doris 2.0.4 version."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Quick Download")," : ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"GitHub")," : ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,n.yg)("h2",{id:"behavior-change"},"Behavior change"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"More reasonable and accurate precision and scale inference for decimal data type"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/28034"},"[improvement](decimal) use new way for decimal arithmetic precision promotion")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support drop policy for user or role"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/29488"},"[fix](polixy)support drop policy for user or role"))))),(0,n.yg)("h2",{id:"new-features"},"New features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Support datev1, datetimev1 and decimalv2 datatypes in new optimizer Nereids."),(0,n.yg)("li",{parentName:"ul"},"Support ODBC table for new optimizer Nereids."),(0,n.yg)("li",{parentName:"ul"},"Add ",(0,n.yg)("inlineCode",{parentName:"li"},"lower_case")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"ignore_above")," option for inverted index"),(0,n.yg)("li",{parentName:"ul"},"Support ",(0,n.yg)("inlineCode",{parentName:"li"},"match_regexp")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"match_phrase_prefix")," optimization by inverted index"),(0,n.yg)("li",{parentName:"ul"},"Support paimon native reader in datalake"),(0,n.yg)("li",{parentName:"ul"},"Support audit-log for ",(0,n.yg)("inlineCode",{parentName:"li"},"insert into")," SQL"),(0,n.yg)("li",{parentName:"ul"},"Support reading parquet file in lzo compressed format")),(0,n.yg)("h2",{id:"three-improvement-and-optimizations"},"Three Improvement and optimizations"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Improve storage management including balance, migration, publish and others."),(0,n.yg)("li",{parentName:"ul"},"Improve storage cooldown policy to use save disk space."),(0,n.yg)("li",{parentName:"ul"},"Performance optimization for substr with ascii string."),(0,n.yg)("li",{parentName:"ul"},"Improve partition prune when date function is used."),(0,n.yg)("li",{parentName:"ul"},"Improve auto analyze visibility and performance.")),(0,n.yg)("p",null,"See the complete list of improvements and bug fixes on github ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues?q=label%3Adev%2F2.0.4-merged+is%3Aclosed"},"dev/2.0.4-merged")),(0,n.yg)("h2",{id:"credits"},"Credits"),(0,n.yg)("p",null,"Last but not least, this release would not have been possible without the following contributors: "),(0,n.yg)("p",null,"airborne12, amorynan, AshinGau, BePPPower, bingquanzhao, BiteTheDDDDt, bobhan1, ByteYue, caiconghui,CalvinKirs, cambyzju, caoliang-web, catpineapple, csun5285, dataroaring, deardeng, dutyu, eldenmoon, englefly, feifeifeimoon, fornaix, Gabriel39, gnehil, HappenLee, hello-stephen, HHoflittlefish777,hubgeter, hust-hhb, ixzc, jacktengg, jackwener, Jibing-Li, kaka11chen, KassieZ, LemonLiTree,liaoxin01, LiBinfeng-01, lihuigang, liugddx, luwei16, morningman, morrySnow, mrhhsg, Mryange, nextdreamblue, Nitin-Kashyap, platoneko, py023, qidaye, shuke987, starocean999, SWJTU-ZhangLei, w41ter, wangbo, wsjz, wuwenchi, Xiaoccer, xiaokang, XieJiann, xingyingone, xinyiZzz, xuwei0912, xy720, xzj7019, yujun777, zclllyybb, zddr, zhangguoqiang666, zhangstar333, zhannngchen, zhiqiang-hhhh, zy-kkk, zzzxl1993"))}c.isMDXComponent=!0}}]);