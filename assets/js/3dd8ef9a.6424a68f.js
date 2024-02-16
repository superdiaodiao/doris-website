"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65277],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const o={title:"HLL_UNION_AGG",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/hll_union_agg",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/hll_union_agg",title:"HLL_UNION_AGG",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/aggregate-functions/hll_union_agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/hll_union_agg",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/hll_union_agg",draft:!1,tags:[],version:"1.2",frontMatter:{title:"HLL_UNION_AGG",language:"en"},sidebar:"docs",previous:{title:"PERCENTILE_ARRAY",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/percentile_array"},next:{title:"TOPN",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/topn"}},s={},u=[{value:"HLL_UNION_AGG",id:"hll_union_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"hll_union_agg"},"HLL_UNION_AGG"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"HLL_UNION_AGG(hll)")),(0,a.yg)("p",null,"HLL is an engineering implementation based on HyperLog algorithm, which is used to save the intermediate results of HyperLog calculation process."),(0,a.yg)("p",null,"It can only be used as the value column type of the table and reduce the amount of data through aggregation to achieve the purpose of speeding up the query."),(0,a.yg)("p",null,"Based on this, we get an estimate with an error of about 1%. The HLL column is generated by other columns or data imported into the data."),(0,a.yg)("p",null,"When importing, hll_hash function is used to specify which column in data is used to generate HLL column. It is often used to replace count distinct, and to calculate UV quickly in business by combining rollup."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL > select HLL_UNION_AGG(uv_set) from test_uv;;\n+-------------------------+\nTHE COURT OF JUSTICE OF THE EUROPEAN COMMUNITIES,\n+-------------------------+\n| 17721                   |\n+-------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"HLL_UNION_AGG,HLL,UNION,AGG"))}g.isMDXComponent=!0}}]);