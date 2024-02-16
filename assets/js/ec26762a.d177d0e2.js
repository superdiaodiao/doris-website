"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[30207],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=s,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(58168),s=(n(96540),n(15680));const a={title:"weeks_sub",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/weeks_sub",id:"version-1.2/sql-manual/sql-functions/date-time-functions/weeks_sub",title:"weeks_sub",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/weeks_sub.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/weeks_sub",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/weeks_sub",draft:!1,tags:[],version:"1.2",frontMatter:{title:"weeks_sub",language:"en"},sidebar:"docs",previous:{title:"weeks_diff",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/weeks_diff"},next:{title:"months_add",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/months_add"}},l={},u=[{value:"weeks_sub",id:"weeks_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"weeks_sub"},"weeks_sub"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"DATETIME WEEKS_SUB(DATETIME date, INT weeks)")),(0,s.yg)("p",null,"Subtracts a specified number of weeks from a datetime or date"),(0,s.yg)("p",null,"The parameter date can be DATETIME or DATE, and the return type is consistent with that of the parameter date."),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select weeks_sub(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| weeks_sub('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2020-01-26 02:02:02                 |\n+-------------------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"WEEKS_SUB\n")))}d.isMDXComponent=!0}}]);