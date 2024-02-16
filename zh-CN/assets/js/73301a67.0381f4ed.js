"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17555],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={title:"TOPN_WEIGHTED",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/topn-weighted",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/topn-weighted",title:"TOPN_WEIGHTED",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/topn-weighted.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/topn-weighted",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/topn-weighted",draft:!1,tags:[],version:"2.0",frontMatter:{title:"TOPN_WEIGHTED",language:"zh-CN"},sidebar:"docs",previous:{title:"TOPN_ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/topn-array"},next:{title:"COUNT",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/count"}},s={},c=[{value:"TOPN_WEIGHTED",id:"topn_weighted",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"topn_weighted"},"TOPN_WEIGHTED"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> topn_weighted(expr, BigInt weight, INT top_num[, INT space_expand_rate])")),(0,a.yg)("p",null,"\u8be5topn_weighted\u51fd\u6570\u4f7f\u7528Space-Saving\u7b97\u6cd5\u8ba1\u7b97\uff0c\u53d6expr\u4e2d\u6743\u91cd\u548c\u4e3a\u524dtop_num\u4e2a\u6570\u7ec4\u6210\u7684\u7ed3\u679c\uff0c\u8be5\u7ed3\u679c\u4e3a\u8fd1\u4f3c\u503c"),(0,a.yg)("p",null,"space_expand_rate\u53c2\u6570\u662f\u53ef\u9009\u9879\uff0c\u8be5\u503c\u7528\u6765\u8bbe\u7f6eSpace-Saving\u7b97\u6cd5\u4e2d\u4f7f\u7528\u7684counter\u4e2a\u6570"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"counter numbers = top_num * space_expand_rate\n")),(0,a.yg)("p",null,"space_expand_rate\u7684\u503c\u8d8a\u5927\uff0c\u7ed3\u679c\u8d8a\u51c6\u786e\uff0c\u9ed8\u8ba4\u503c\u4e3a50"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select topn_weighted(k5,k1,3) from baseall;\n+------------------------------+\n| topn_weighted(`k5`, `k1`, 3) |\n+------------------------------+\n| [0, 243.325, 100.001]        |\n+------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select topn_weighted(k5,k1,3,100) from baseall;\n+-----------------------------------+\n| topn_weighted(`k5`, `k1`, 3, 100) |\n+-----------------------------------+\n| [0, 243.325, 100.001]             |\n+-----------------------------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"TOPN, TOPN_WEIGHTED"))}g.isMDXComponent=!0}}]);