"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20572],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,y=p["".concat(a,".").concat(d)]||p[d]||f[d]||s;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const s={title:"FIND_IN_SET",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/find-in-set",id:"version-2.0/sql-manual/sql-functions/string-functions/find-in-set",title:"FIND_IN_SET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/find-in-set.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/find-in-set",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/find-in-set",draft:!1,tags:[],version:"2.0",frontMatter:{title:"FIND_IN_SET",language:"zh-CN"},sidebar:"docs",previous:{title:"FIELD",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/field"},next:{title:"REPLACE",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/replace"}},a={},c=[{value:"find_in_set",id:"find_in_set",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"find_in_set"},"find_in_set"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"INT find_in_set(VARCHAR str, VARCHAR strlist)")),(0,i.yg)("p",null,"\u8fd4\u56de strlist \u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0 str \u7684\u4f4d\u7f6e\uff08\u4ece1\u5f00\u59cb\u8ba1\u6570\uff09\u3002strlist \u662f\u7528\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u8fd4\u56de0\u3002\u4efb\u610f\u53c2\u6570\u4e3a NULL \uff0c\u8fd4\u56de NULL\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select find_in_set(\"b\", \"a,b,c\");\n+---------------------------+\n| find_in_set('b', 'a,b,c') |\n+---------------------------+\n|                         2 |\n+---------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"FIND_IN_SET,FIND,IN,SET\n")))}f.isMDXComponent=!0}}]);