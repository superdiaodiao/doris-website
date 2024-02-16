"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96758],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,y=p["".concat(a,".").concat(m)]||p[m]||f[m]||i;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const i={title:"SQRT",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/sqrt",id:"version-2.0/sql-manual/sql-functions/numeric-functions/sqrt",title:"SQRT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/sqrt.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/sqrt",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/sqrt",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SQRT",language:"zh-CN"},sidebar:"docs",previous:{title:"ABS",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/abs"},next:{title:"CBRT",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/cbrt"}},a={},c=[{value:"sqrt",id:"sqrt",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"sqrt"},"sqrt"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE sqrt(DOUBLE x)"),"\n\u8fd4\u56de",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5e73\u65b9\u6839\uff0c\u8981\u6c42x\u5927\u4e8e\u6216\u7b49\u4e8e0."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select sqrt(9);\n+-----------+\n| sqrt(9.0) |\n+-----------+\n|         3 |\n+-----------+\nmysql> select sqrt(2);\n+--------------------+\n| sqrt(2.0)          |\n+--------------------+\n| 1.4142135623730951 |\n+--------------------+\nmysql> select sqrt(100.0);\n+-------------+\n| sqrt(100.0) |\n+-------------+\n|          10 |\n+-------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SQRT\n")))}f.isMDXComponent=!0}}]);