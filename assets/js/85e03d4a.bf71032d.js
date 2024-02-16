"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[80665],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,y=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return t?r.createElement(y,i(i({ref:n},m),{},{components:t})):r.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={title:"money_format",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/money_format",id:"version-1.2/sql-manual/sql-functions/string-functions/money_format",title:"money_format",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/money_format.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/money_format",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/money_format",draft:!1,tags:[],version:"1.2",frontMatter:{title:"money_format",language:"en"},sidebar:"docs",previous:{title:"substring_index",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/substring_index"},next:{title:"parse_url",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/parse_url"}},l={},c=[{value:"money_format",id:"money_format",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"money_format"},"money_format"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR money format (Number)")),(0,o.yg)("p",null,"The number is output in currency format, the integer part is separated by commas every three bits, and the decimal part is reserved for two bits."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select money_format(17014116);\n+------------------------+\n| money_format(17014116) |\n+------------------------+\n| 17,014,116.00          |\n+------------------------+\n\nmysql> select money_format(1123.456);\n+------------------------+\n| money_format(1123.456) |\n+------------------------+\n| 1,123.46               |\n+------------------------+\n\nmysql> select money_format(1123.4);\n+----------------------+\n| money_format(1123.4) |\n+----------------------+\n| 1,123.40             |\n+----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MONEY_FORMAT,MONEY,FORMAT\n")))}f.isMDXComponent=!0}}]);