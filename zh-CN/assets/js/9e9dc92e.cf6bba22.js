"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[90548],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,d=p["".concat(c,".").concat(g)]||p[g]||f[g]||l;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},52973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const l={title:"HLL_UNION_AGG",language:"zh-CN"},a=void 0,i={unversionedId:"sql-reference/sql-functions/aggregate-functions/hll_union_agg",id:"version-0.15/sql-reference/sql-functions/aggregate-functions/hll_union_agg",title:"HLL_UNION_AGG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/aggregate-functions/hll_union_agg.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_union_agg",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/aggregate-functions/hll_union_agg",draft:!1,tags:[],version:"0.15",frontMatter:{title:"HLL_UNION_AGG",language:"zh-CN"},sidebar:"docs",previous:{title:"COUNT",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/aggregate-functions/count"},next:{title:"MAX",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/aggregate-functions/max"}},c={},s=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hll_union_agg"},"HLL_UNION_AGG"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"HLL_UNION_AGG(hll)")),(0,o.kt)("p",null,"HLL\u662f\u57fa\u4e8eHyperLogLog\u7b97\u6cd5\u7684\u5de5\u7a0b\u5b9e\u73b0\uff0c\u7528\u4e8e\u4fdd\u5b58HyperLogLog\u8ba1\u7b97\u8fc7\u7a0b\u7684\u4e2d\u95f4\u7ed3\u679c"),(0,o.kt)("p",null,"\u5b83\u53ea\u80fd\u4f5c\u4e3a\u8868\u7684value\u5217\u7c7b\u578b\u3001\u901a\u8fc7\u805a\u5408\u6765\u4e0d\u65ad\u7684\u51cf\u5c11\u6570\u636e\u91cf\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u52a0\u5feb\u67e5\u8be2\u7684\u76ee\u7684"),(0,o.kt)("p",null,"\u57fa\u4e8e\u5b83\u5f97\u5230\u7684\u662f\u4e00\u4e2a\u4f30\u7b97\u7ed3\u679c\uff0c\u8bef\u5dee\u5927\u6982\u57281%\u5de6\u53f3\uff0chll\u5217\u662f\u901a\u8fc7\u5176\u5b83\u5217\u6216\u8005\u5bfc\u5165\u6570\u636e\u91cc\u9762\u7684\u6570\u636e\u751f\u6210\u7684"),(0,o.kt)("p",null,"\u5bfc\u5165\u7684\u65f6\u5019\u901a\u8fc7hll_hash\u51fd\u6570\u6765\u6307\u5b9a\u6570\u636e\u4e2d\u54ea\u4e00\u5217\u7528\u4e8e\u751f\u6210hll\u5217\uff0c\u5b83\u5e38\u7528\u4e8e\u66ff\u4ee3count distinct\uff0c\u901a\u8fc7\u7ed3\u5408rollup\u5728\u4e1a\u52a1\u4e0a\u7528\u4e8e\u5feb\u901f\u8ba1\u7b97uv\u7b49"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL > select HLL_UNION_AGG(uv_set) from test_uv;;\n+-------------------------+\n| HLL_UNION_AGG(`uv_set`) |\n+-------------------------+\n| 17721                   |\n+-------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"HLL_UNION_AGG,HLL,UNION,AGG"))}p.isMDXComponent=!0}}]);