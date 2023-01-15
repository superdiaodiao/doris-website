"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14713],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"pow",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/pow",id:"version-dev/sql-manual/sql-functions/math-functions/pow",title:"pow",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/math-functions/pow.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/pow",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/pow",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/math-functions/pow.md",tags:[],version:"dev",frontMatter:{title:"pow",language:"zh-CN"},sidebar:"docs",previous:{title:"cbrt",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/cbrt"},next:{title:"degrees",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/degrees"}},s={},c=[{value:"pow",id:"pow",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pow"},"pow"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DOUBLE pow(DOUBLE a, DOUBLE b)"),"\n\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"b"),"\u6b21\u65b9."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select pow(2,0);\n+---------------+\n| pow(2.0, 0.0) |\n+---------------+\n|             1 |\n+---------------+\nmysql> select pow(2,3);\n+---------------+\n| pow(2.0, 3.0) |\n+---------------+\n|             8 |\n+---------------+\nmysql> select pow(3,2.4);\n+--------------------+\n| pow(3.0, 2.4)      |\n+--------------------+\n| 13.966610165238235 |\n+--------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POW\n")))}u.isMDXComponent=!0}}]);