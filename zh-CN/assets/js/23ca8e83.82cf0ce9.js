"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[82112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"APPROX_COUNT_DISTINCT",language:"zh-CN"},c=void 0,a={unversionedId:"sql-reference/sql-functions/aggregate-functions/approx_count_distinct",id:"version-0.15/sql-reference/sql-functions/aggregate-functions/approx_count_distinct",title:"APPROX_COUNT_DISTINCT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/aggregate-functions/approx_count_distinct.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/approx_count_distinct",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/aggregate-functions/approx_count_distinct",draft:!1,tags:[],version:"0.15",frontMatter:{title:"APPROX_COUNT_DISTINCT",language:"zh-CN"},sidebar:"docs",previous:{title:"not regexp",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/regexp/not_regexp"},next:{title:"AVG",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/aggregate-functions/avg"}},l={},s=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"approx_count_distinct"},"APPROX_COUNT_DISTINCT"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT(expr)")),(0,o.kt)("p",null,"\u8fd4\u56de\u7c7b\u4f3c\u4e8e COUNT(DISTINCT col) \u7ed3\u679c\u7684\u8fd1\u4f3c\u503c\u805a\u5408\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u5b83\u6bd4 COUNT \u548c DISTINCT \u7ec4\u5408\u7684\u901f\u5ea6\u66f4\u5feb\uff0c\u5e76\u4f7f\u7528\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u56e0\u6b64\u5bf9\u4e8e\u9ad8\u57fa\u6570\u7684\u5217\u53ef\u4ee5\u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\u3002"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL > select approx_count_distinct(query_id) from log_statis group by datetime;\n+-----------------+\n| approx_count_distinct(`query_id`) |\n+-----------------+\n| 17721           |\n+-----------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"APPROX_COUNT_DISTINCT"))}u.isMDXComponent=!0}}]);