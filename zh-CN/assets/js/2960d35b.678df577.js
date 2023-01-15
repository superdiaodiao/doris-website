"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[79534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"DROP-RESOURCE",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",title:"DROP-RESOURCE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE.md",tags:[],version:"dev",frontMatter:{title:"DROP-RESOURCE",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-INDEX",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX"},next:{title:"DROP-FILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE"}},c={},s=[{value:"DROP-RESOURCE",id:"drop-resource",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"drop-resource"},"DROP-RESOURCE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"DROP RESOURCE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u4e00\u4e2a\u5df2\u6709\u7684\u8d44\u6e90\u3002\u4ec5 root \u6216 admin \u7528\u6237\u53ef\u4ee5\u5220\u9664\u8d44\u6e90\u3002\n\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP RESOURCE 'resource_name'\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u6b63\u5728\u4f7f\u7528\u7684 ODBC/S3 \u8d44\u6e90\u65e0\u6cd5\u5220\u9664\u3002"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5220\u9664\u540d\u4e3a spark0 \u7684 Spark \u8d44\u6e90\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP RESOURCE 'spark0';\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP, RESOURCE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);