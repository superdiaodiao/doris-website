"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53171],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,y=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const l={title:"LOG",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/numeric-functions/log",id:"version-2.0/sql-manual/sql-functions/numeric-functions/log",title:"LOG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/log.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/log",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/log",draft:!1,tags:[],version:"2.0",frontMatter:{title:"LOG",language:"zh-CN"},sidebar:"docs",previous:{title:"EXP",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/exp"},next:{title:"LOG2",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/log2"}},c={},s=[{value:"log",id:"log",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"log"},"log"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE log(DOUBLE b, DOUBLE x)"),"\n\u8fd4\u56de\u57fa\u4e8e\u5e95\u6570",(0,o.yg)("inlineCode",{parentName:"p"},"b"),"\u7684",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5bf9\u6570."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select log(5,1);\n+---------------+\n| log(5.0, 1.0) |\n+---------------+\n|             0 |\n+---------------+\nmysql> select log(3,20);\n+--------------------+\n| log(3.0, 20.0)     |\n+--------------------+\n| 2.7268330278608417 |\n+--------------------+\nmysql> select log(2,65536);\n+-------------------+\n| log(2.0, 65536.0) |\n+-------------------+\n|                16 |\n+-------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"LOG\n")))}m.isMDXComponent=!0}}]);