"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67100],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var s=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?s.createElement(y,a(a({ref:t},p),{},{components:n})):s.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(58168),r=(n(96540),n(15680));const o={title:"jsonb_exists_path",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/jsonb_exists_path",id:"version-1.2/sql-manual/sql-functions/json-functions/jsonb_exists_path",title:"jsonb_exists_path",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/json-functions/jsonb_exists_path.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/jsonb_exists_path",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_exists_path",draft:!1,tags:[],version:"1.2",frontMatter:{title:"jsonb_exists_path",language:"en"},sidebar:"docs",previous:{title:"jsonb_extract",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_extract"},next:{title:"jsonb_type",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_type"}},l={},c=[{value:"jsonb_exists_path",id:"jsonb_exists_path",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,s.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"jsonb_exists_path"},"jsonb_exists_path"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"It is used to judge whether the field specified by json_path exists in the JSONB data. If it exists, it returns TRUE, and if it does not exist, it returns FALSE"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"BOOLEAN jsonb_exists_path(JSONB j, VARCHAR json_path)\n")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"Refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Types/JSONB"},"jsonb tutorial")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"jsonb_exists_path"))}f.isMDXComponent=!0}}]);