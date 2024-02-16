"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68363],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||l;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58420:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const l={title:"DATE",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/DATE",id:"sql-manual/sql-reference/Data-Types/DATE",title:"DATE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Types/DATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATE",draft:!1,tags:[],version:"current",frontMatter:{title:"DATE",language:"en"},sidebar:"docs",previous:{title:"DECIMAL",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DECIMAL"},next:{title:"DATETIME",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATETIME"}},s={},c=[{value:"DATE",id:"date",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date"},"DATE"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"DATE")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"date\nDate type, the current range of values is ","['0000-01-01','9999-12-31']",", and the default print form is 'yyyy-MM-dd'."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT DATE('2003-12-31 01:02:03');\n+-----------------------------+\n| DATE('2003-12-31 01:02:03') |\n+-----------------------------+\n| 2003-12-31                  |\n+-----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"DATE"))}y.isMDXComponent=!0}}]);