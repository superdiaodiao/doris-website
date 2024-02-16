"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31424],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=i,d=p["".concat(a,".").concat(g)]||p[g]||f[g]||s;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=g;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},48641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(58168),i=(r(96540),r(15680));const s={title:"strright",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/strright",id:"version-1.2/sql-manual/sql-functions/string-functions/strright",title:"strright",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/strright.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/strright",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/strright",draft:!1,tags:[],version:"1.2",frontMatter:{title:"strright",language:"en"},sidebar:"docs",previous:{title:"strleft",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/strleft"},next:{title:"split_part",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/split_part"}},a={},c=[{value:"strright",id:"strright",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"strright"},"strright"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR strright (VARCHAR str, INT len)")),(0,i.yg)("p",null,"It returns the right part of a string of specified length, length is char length not the byte size. Another alias for this function is ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-functions/string-functions/right"},"right"),"."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select strright(\"Hello doris\",5);\n+-------------------------+\n| strright('Hello doris', 5) |\n+-------------------------+\n| doris                   |\n+-------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"STRRIGHT\n")))}f.isMDXComponent=!0}}]);