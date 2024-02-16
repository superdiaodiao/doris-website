"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1574],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},54254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={title:"GREATEST",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/greatest",id:"version-2.0/sql-manual/sql-functions/numeric-functions/greatest",title:"GREATEST",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/greatest.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/greatest",permalink:"/docs/sql-manual/sql-functions/numeric-functions/greatest",draft:!1,tags:[],version:"2.0",frontMatter:{title:"GREATEST",language:"en"},sidebar:"docs",previous:{title:"NEGATIVE",permalink:"/docs/sql-manual/sql-functions/numeric-functions/negative"},next:{title:"LEAST",permalink:"/docs/sql-manual/sql-functions/numeric-functions/least"}},s={},c=[{value:"greatest",id:"greatest",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"greatest"},"greatest"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"greatest(col_a, col_b, \u2026, col_n)"),"  "),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"column")," supports the following types: ",(0,a.yg)("inlineCode",{parentName:"p"},"TINYINT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"SMALLINT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"INT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"LARGEINT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"FLOAT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE")," ",(0,a.yg)("inlineCode",{parentName:"p"},"STRING")," ",(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME")," ",(0,a.yg)("inlineCode",{parentName:"p"},"DECIMAL")),(0,a.yg)("p",null,"Compares the size of ",(0,a.yg)("inlineCode",{parentName:"p"},"n columns")," and returns the largest among them. If there is ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"column"),", it returns ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select greatest(-1, 0, 5, 8);\n+-----------------------+\n| greatest(-1, 0, 5, 8) |\n+-----------------------+\n|                     8 |\n+-----------------------+\nmysql> select greatest(-1, 0, 5, NULL);\n+--------------------------+\n| greatest(-1, 0, 5, NULL) |\n+--------------------------+\n| NULL                     |\n+--------------------------+\nmysql> select greatest(6.3, 4.29, 7.6876);\n+-----------------------------+\n| greatest(6.3, 4.29, 7.6876) |\n+-----------------------------+\n|                      7.6876 |\n+-----------------------------+\nmysql> select greatest(\"2022-02-26 20:02:11\",\"2020-01-23 20:02:11\",\"2020-06-22 20:02:11\");\n+-------------------------------------------------------------------------------+\n| greatest('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11') |\n+-------------------------------------------------------------------------------+\n| 2022-02-26 20:02:11                                                           |\n+-------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GREATEST\n")))}m.isMDXComponent=!0}}]);