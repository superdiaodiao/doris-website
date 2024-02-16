"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70205],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=l,y=p["".concat(u,".").concat(f)]||p[f]||g[f]||a;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(58168),l=(t(96540),t(15680));const a={title:"HLL_UNION_AGG",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/hll_union_agg",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/hll_union_agg",title:"HLL_UNION_AGG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/hll_union_agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/hll_union_agg",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/hll_union_agg",draft:!1,tags:[],version:"1.2",frontMatter:{title:"HLL_UNION_AGG",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE_ARRAY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/percentile_array"},next:{title:"TOPN",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/topn"}},u={},s=[{value:"HLL_UNION_AGG",id:"hll_union_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function g(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"hll_union_agg"},"HLL_UNION_AGG"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"HLL_UNION_AGG(hll)")),(0,l.yg)("p",null,"HLL\u662f\u57fa\u4e8eHyperLogLog\u7b97\u6cd5\u7684\u5de5\u7a0b\u5b9e\u73b0\uff0c\u7528\u4e8e\u4fdd\u5b58HyperLogLog\u8ba1\u7b97\u8fc7\u7a0b\u7684\u4e2d\u95f4\u7ed3\u679c"),(0,l.yg)("p",null,"\u5b83\u53ea\u80fd\u4f5c\u4e3a\u8868\u7684value\u5217\u7c7b\u578b\u3001\u901a\u8fc7\u805a\u5408\u6765\u4e0d\u65ad\u7684\u51cf\u5c11\u6570\u636e\u91cf\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u52a0\u5feb\u67e5\u8be2\u7684\u76ee\u7684"),(0,l.yg)("p",null,"\u57fa\u4e8e\u5b83\u5f97\u5230\u7684\u662f\u4e00\u4e2a\u4f30\u7b97\u7ed3\u679c\uff0c\u8bef\u5dee\u5927\u6982\u57281%\u5de6\u53f3\uff0chll\u5217\u662f\u901a\u8fc7\u5176\u5b83\u5217\u6216\u8005\u5bfc\u5165\u6570\u636e\u91cc\u9762\u7684\u6570\u636e\u751f\u6210\u7684"),(0,l.yg)("p",null,"\u5bfc\u5165\u7684\u65f6\u5019\u901a\u8fc7hll_hash\u51fd\u6570\u6765\u6307\u5b9a\u6570\u636e\u4e2d\u54ea\u4e00\u5217\u7528\u4e8e\u751f\u6210hll\u5217\uff0c\u5b83\u5e38\u7528\u4e8e\u66ff\u4ee3count distinct\uff0c\u901a\u8fc7\u7ed3\u5408rollup\u5728\u4e1a\u52a1\u4e0a\u7528\u4e8e\u5feb\u901f\u8ba1\u7b97uv\u7b49"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"MySQL > select HLL_UNION_AGG(uv_set) from test_uv;;\n+-------------------------+\n| HLL_UNION_AGG(`uv_set`) |\n+-------------------------+\n| 17721                   |\n+-------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"HLL_UNION_AGG,HLL,UNION,AGG"))}g.isMDXComponent=!0}}]);