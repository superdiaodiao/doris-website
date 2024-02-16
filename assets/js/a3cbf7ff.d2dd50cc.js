"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75197],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var t=r(96540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=l,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60824:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(58168),l=(r(96540),r(15680));const a={title:"IN",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Operators/in",id:"version-2.0/sql-manual/sql-reference/Operators/in",title:"IN",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Operators/in.md",sourceDirName:"sql-manual/sql-reference/Operators",slug:"/sql-manual/sql-reference/Operators/in",permalink:"/docs/sql-manual/sql-reference/Operators/in",draft:!1,tags:[],version:"2.0",frontMatter:{title:"IN",language:"en"},sidebar:"docs",previous:{title:"SHOW-QUERY-STATS",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS"},next:{title:"HELP",permalink:"/docs/sql-manual/sql-reference/Utility-Statements/HELP"}},s={},c=[{value:"IN",id:"in",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:n,...r}=e;return(0,l.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"in"},"IN"),(0,l.yg)("version",{since:"1.2.0"},(0,l.yg)("p",null,"IN")),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"expr IN (value, ...)")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"expr IN (subquery)")),(0,l.yg)("p",null,"If expr is equal to any value in the IN list, return true; otherwise, return false."),(0,l.yg)("p",null,"Subquery can only return one column, and the column types returned by subquery must be compatible with expr types."),(0,l.yg)("p",null,"If subquery returns a bitmap data type column, expr must be an integer."),(0,l.yg)("h4",{id:"notice"},"notice"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Currently, bitmap columns are only returned to in subqueries supported in the vectorized engine.")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select id from cost where id in (1, 2);\n+------+\n| id   |\n+------+\n|    2 |\n|    1 |\n+------+\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select id from tbl1 where id in (select id from tbl2);\n+------+\n| id   |\n+------+\n|    1 |\n|    4 |\n|    5 |\n+------+\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select id from tbl1 where id in (select bitmap_col from tbl3);\n+------+\n| id   |\n+------+\n|    1 |\n|    3 |\n+------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"IN\n")))}y.isMDXComponent=!0}}]);