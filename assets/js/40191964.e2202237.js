"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[83709],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[f]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={title:"FROM_BASE64",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/from-base64",id:"sql-manual/sql-functions/string-functions/from-base64",title:"FROM_BASE64",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/from-base64.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/from-base64",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/from-base64",draft:!1,tags:[],version:"current",frontMatter:{title:"FROM_BASE64",language:"en"},sidebar:"docs",previous:{title:"TO_BASE64",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/to-base64"},next:{title:"ASCII",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/ascii"}},l={},c=[{value:"from_base64",id:"from_base64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},f="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(f,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"from_base64"},"from_base64"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR from_base64(VARCHAR str)")),(0,o.yg)("p",null,"Returns the result of Base64 decoding the input string"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select from_base64('MQ==');\n+---------------------+\n| from_base64('MQ==') |\n+---------------------+\n| 1                   |\n+---------------------+\n\nmysql> select from_base64('MjM0');\n+---------------------+\n| from_base64('MjM0') |\n+---------------------+\n| 234                 |\n+---------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"from_base64\n")))}p.isMDXComponent=!0}}]);