"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[53910],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),i=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=i(n.components);return r.createElement(s.Provider,{value:e},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,l=n.originalType,s=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),d=i(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,a(a({ref:e},c),{},{components:t})):r.createElement(f,a({ref:e},c))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var l=t.length,a=new Array(l);a[0]=m;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u[d]="string"==typeof n?n:o,a[1]=u;for(var i=2;i<l;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14686:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=t(87462),o=(t(67294),t(3905));const l={title:"round",language:"zh-CN"},a=void 0,u={unversionedId:"sql-manual/sql-functions/math-functions/round",id:"version-dev/sql-manual/sql-functions/math-functions/round",title:"round",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/math-functions/round.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/round",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/round",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/math-functions/round.md",tags:[],version:"dev",frontMatter:{title:"round",language:"zh-CN"},sidebar:"docs",previous:{title:"pmod",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/pmod"},next:{title:"round_bankers",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/round_bankers"}},s={},i=[{value:"round",id:"round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i};function d(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"round"},"round"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"round(x), round(x, d)"),"\n\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"\u56db\u820d\u4e94\u5165\u540e\u4fdd\u7559d\u4f4d\u5c0f\u6570\uff0cd\u9ed8\u8ba4\u4e3a0\u3002\u5982\u679cd\u4e3a\u8d1f\u6570\uff0c\u5219\u5c0f\u6570\u70b9\u5de6\u8fb9d\u4f4d\u4e3a0\u3002\u5982\u679cx\u6216d\u4e3anull\uff0c\u8fd4\u56denull\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\nmysql> select round(1667.2725, 2);\n+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\nmysql> select round(1667.2725, -2);\n+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ROUND\n")))}d.isMDXComponent=!0}}]);