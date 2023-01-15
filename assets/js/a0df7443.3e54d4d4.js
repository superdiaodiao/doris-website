"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23944],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const l={title:"abs",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/math-functions/abs",id:"sql-manual/sql-functions/math-functions/abs",title:"abs",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/math-functions/abs.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/abs",permalink:"/docs/sql-manual/sql-functions/math-functions/abs",draft:!1,tags:[],version:"current",frontMatter:{title:"abs",language:"en"},sidebar:"docs",previous:{title:"truncate",permalink:"/docs/sql-manual/sql-functions/math-functions/truncate"},next:{title:"sqrt",permalink:"/docs/sql-manual/sql-functions/math-functions/sqrt"}},i={},c=[{value:"abs",id:"abs",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"abs"},"abs"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DOUBLE abs(DOUBLE x)"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"SMALLINT abs(TINYINT x)"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"INT abs(SMALLINT x)"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BIGINT abs(INT x)"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"LARGEINT abs(BIGINT x)"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"LARGEINT abs(LARGEINT x)"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DOUBLE abs(DOUBLE x)"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"FLOAT abs(FLOAT x)"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"DECIMAL abs(DECIMAL x)"),"  "),(0,a.kt)("p",null,"Returns the absolute value of ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select abs(-2);\n+---------+\n| abs(-2) |\n+---------+\n|       2 |\n+---------+\nmysql> select abs(3.254655654);\n+------------------+\n| abs(3.254655654) |\n+------------------+\n|      3.254655654 |\n+------------------+\nmysql> select abs(-3254654236547654354654767);\n+---------------------------------+\n| abs(-3254654236547654354654767) |\n+---------------------------------+\n| 3254654236547654354654767       |\n+---------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ABS\n")))}u.isMDXComponent=!0}}]);