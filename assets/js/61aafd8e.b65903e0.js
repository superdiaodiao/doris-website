"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4841],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=t(58168),o=(t(96540),t(15680));const l={title:"TO_IPV4_OR_NULL",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv4-or-null",id:"sql-manual/sql-functions/ip-functions/to-ipv4-or-null",title:"TO_IPV4_OR_NULL",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/to-ipv4-or-null.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv4-or-null",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-null",draft:!1,tags:[],version:"current",frontMatter:{title:"TO_IPV4_OR_NULL",language:"en"},sidebar:"docs",previous:{title:"TO_IPV4_OR_DEFAULT",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-default"},next:{title:"TO_IPV6",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6"}},s={},u=[{value:"TO_IPV4_OR_NULL",id:"to_ipv4_or_null",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"to_ipv4_or_null"},"TO_IPV4_OR_NULL"),(0,o.yg)("version",{since:"dev"},(0,o.yg)("p",null,"TO_IPV4_OR_NULL")),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"IPV4 TO_IPV4_OR_NULL(STRING ipv4_str)")),(0,o.yg)("p",null,"Same as to_ipv4, but if the IPv4 address has an invalid format, it returns NULL."),(0,o.yg)("h3",{id:"notice"},"notice"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"If input is NULL, return NULL.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select to_ipv4_or_null('.');\n+----------------------+\n| to_ipv4_or_null('.') |\n+----------------------+\n| NULL                 |\n+----------------------+\n\nmysql> select to_ipv4_or_null(NULL);\n+-----------------------+\n| to_ipv4_or_null(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"TO_IPV4_OR_NULL, IP"))}d.isMDXComponent=!0}}]);