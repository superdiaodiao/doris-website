"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84499],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>m});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||y[d]||l;return n?t.createElement(m,o(o({ref:r},p),{},{components:n})):t.createElement(m,o({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36130:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(58168),a=(n(96540),n(15680));const l={title:"DATEV2",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/DATEV2",id:"version-1.2/sql-manual/sql-reference/Data-Types/DATEV2",title:"DATEV2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/DATEV2.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATEV2",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DATEV2",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DATEV2",language:"zh-CN"},sidebar:"docs",previous:{title:"DATETIME",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DATETIME"},next:{title:"DATETIMEV2",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DATETIMEV2"}},c={},s=[{value:"DATEV2",id:"datev2",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"datev2"},"DATEV2"),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"DATEV2")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATEV2\u7c7b\u578b\n    \u65e5\u671f\u7c7b\u578b\uff0c\u76ee\u524d\u7684\u53d6\u503c\u8303\u56f4\u662f['0000-01-01', '9999-12-31'], \u9ed8\u8ba4\u7684\u6253\u5370\u5f62\u5f0f\u662f'yyyy-MM-dd'\n")),(0,a.yg)("h3",{id:"note"},"note"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATEV2\u7c7b\u578b\u76f8\u6bd4DATE\u7c7b\u578b\u66f4\u52a0\u9ad8\u6548\uff0c\u5728\u8ba1\u7b97\u65f6\uff0cDATEV2\u76f8\u6bd4DATE\u53ef\u4ee5\u8282\u7701\u4e00\u534a\u7684\u5185\u5b58\u4f7f\u7528\u91cf\u3002\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT CAST('2003-12-31 01:02:03' as DATEV2);\n    -> '2003-12-31'\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATEV2\n")))}y.isMDXComponent=!0}}]);