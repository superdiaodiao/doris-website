"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17988],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,f=p["".concat(s,".").concat(d)]||p[d]||y[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(58168),l=(t(96540),t(15680));const o={title:"HEX",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/hex",id:"sql-manual/sql-functions/string-functions/hex",title:"HEX",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/hex.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/hex",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/hex",draft:!1,tags:[],version:"current",frontMatter:{title:"HEX",language:"zh-CN"},sidebar:"docs",previous:{title:"NOT_NULL_OR_EMPTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/not-null-or-empty"},next:{title:"UNHEX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/unhex"}},s={},c=[{value:"hex",id:"hex",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"hex"},"hex"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR hex(VARCHAR str)")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR hex(BIGINT num)")),(0,l.yg)("p",null,"\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f\u6570\u5b57\uff0c\u8fd4\u56de\u5341\u516d\u8fdb\u5236\u503c\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\uff1b"),(0,l.yg)("p",null,"\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f\u5b57\u7b26\u4e32\uff0c\u5219\u5c06\u6bcf\u4e2a\u5b57\u7b26\u8f6c\u5316\u4e3a\u4e24\u4e2a\u5341\u516d\u8fdb\u5236\u7684\u5b57\u7b26\uff0c\u5c06\u8f6c\u5316\u540e\u7684\u6240\u6709\u5b57\u7b26\u62fc\u63a5\u4e3a\u5b57\u7b26\u4e32\u8f93\u51fa"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u8f93\u5165\u5b57\u7b26\u4e32\n\nmysql> select hex('1');\n+----------+\n| hex('1') |\n+----------+\n| 31       |\n+----------+\n\nmysql> select hex('@');\n+----------+\n| hex('@') |\n+----------+\n| 40       |\n+----------+\n\nmysql> select hex('12');\n+-----------+\n| hex('12') |\n+-----------+\n| 3132      |\n+-----------+\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u8f93\u5165\u6570\u5b57\n\nmysql> select hex(12);\n+---------+\n| hex(12) |\n+---------+\n| C       |\n+---------+\n\nmysql> select hex(-1);\n+------------------+\n| hex(-1)          |\n+------------------+\n| FFFFFFFFFFFFFFFF |\n+------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"HEX\n")))}y.isMDXComponent=!0}}]);