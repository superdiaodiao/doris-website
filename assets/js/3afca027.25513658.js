"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52180],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return t?n.createElement(g,l(l({ref:r},p),{},{components:t})):n.createElement(g,l({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65029:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const o={title:"HLL (HyperLogLog)",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/HLL",id:"version-1.2/sql-manual/sql-reference/Data-Types/HLL",title:"HLL (HyperLogLog)",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Types/HLL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/HLL",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/HLL",draft:!1,tags:[],version:"1.2",frontMatter:{title:"HLL (HyperLogLog)",language:"en"},sidebar:"docs",previous:{title:"STRING",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/STRING"},next:{title:"BITMAP",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/BITMAP"}},s={},c=[{value:"HLL (HyperLogLog)",id:"hll-hyperloglog",level:2},{value:"Description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"hll-hyperloglog"},"HLL (HyperLogLog)"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"HLL"),(0,a.yg)("p",null,"HLL cannot be used as a key column, and the aggregation type is HLL_UNION when create table.\nThe user does not need to specify the length and default value.\nThe length is controlled within the system according to the degree of data aggregation.\nAnd HLL columns can only be queried or used through the matching hll_union_agg, hll_raw_agg, hll_cardinality, and hll_hash."),(0,a.yg)("p",null,"HLL is approximate count of distinct elements, and its performance is better than Count Distinct when the amount of data is large.\nThe error of HLL is usually around 1%, sometimes up to 2%."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select hour, HLL_UNION_AGG(pv) over(order by hour) uv from(\n   select hour, HLL_RAW_AGG(device_id) as pv\n   from metric_table -- Query the accumulated UV per hour\n   where datekey=20200922\ngroup by hour order by 1\n) final;\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"HLL,HYPERLOGLOG"))}y.isMDXComponent=!0}}]);