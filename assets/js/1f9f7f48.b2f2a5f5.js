"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59016],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={title:"CREATE-ROLE",language:"en"},c=void 0,o={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",title:"CREATE-ROLE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-ROLE",language:"en"},sidebar:"docs",previous:{title:"LDAP",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/LDAP"},next:{title:"DROP-ROLE",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE"}},i={},s=[{value:"CREATE-ROLE",id:"create-role",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"create-role"},"CREATE-ROLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CREATE ROLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"The statement user creates a role"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"  CREATE ROLE rol_name;\n")),(0,a.yg)("p",null,"This statement creates an unprivileged role, which can be subsequently granted with the GRANT command."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a character"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE role1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," CREATE, ROLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);