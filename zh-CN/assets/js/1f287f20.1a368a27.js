"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3269],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},92650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={title:"ST_X",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/spatial-functions/st_x",id:"version-1.2/sql-manual/sql-functions/spatial-functions/st_x",title:"ST_X",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_x.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_x",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_x",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ST_X",language:"zh-CN"},sidebar:"docs",previous:{title:"years_sub",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/years_sub"},next:{title:"ST_Y",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_y"}},s={},c=[{value:"ST_X",id:"st_x",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"st_x"},"ST_X"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE ST_X(POINT point)")),(0,a.yg)("p",null,"\u5f53point\u662f\u4e00\u4e2a\u5408\u6cd5\u7684POINT\u7c7b\u578b\u65f6\uff0c\u8fd4\u56de\u5bf9\u5e94\u7684X\u5750\u6807\u503c"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT ST_X(ST_Point(24.7, 56.7));\n+----------------------------+\n| st_x(st_point(24.7, 56.7)) |\n+----------------------------+\n|                       24.7 |\n+----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ST_X,ST,X"))}f.isMDXComponent=!0}}]);