"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={title:"IN",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Operators/in",id:"version-dev/sql-manual/sql-reference/Operators/in",title:"IN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Operators/in.md",sourceDirName:"sql-manual/sql-reference/Operators",slug:"/sql-manual/sql-reference/Operators/in",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Operators/in",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Operators/in.md",tags:[],version:"dev",frontMatter:{title:"IN",language:"zh-CN"},sidebar:"docs",previous:{title:"JSONB",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/JSONB"},next:{title:"HELP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/HELP"}},s={},c=[{value:"IN",id:"in",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"in"},"IN"),(0,l.kt)("version",{since:"1.2.0"},(0,l.kt)("p",null,"IN")),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"expr IN (value, ...)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"expr IN (subquery)")),(0,l.kt)("p",null,"\u5982\u679c expr \u7b49\u4e8e IN \u5217\u8868\u4e2d\u7684\u4efb\u4f55\u503c\u5219\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002"),(0,l.kt)("p",null,"subquery \u53ea\u80fd\u8fd4\u56de\u4e00\u5217\uff0c\u5e76\u4e14\u5b50\u67e5\u8be2\u8fd4\u56de\u7684\u5217\u7c7b\u578b\u5fc5\u987b expr \u7c7b\u578b\u517c\u5bb9\u3002"),(0,l.kt)("p",null,"\u5982\u679c subquery \u8fd4\u56debitmap\u6570\u636e\u7c7b\u578b\u5217\uff0cexpr\u5fc5\u987b\u662f\u6574\u578b\u3002"),(0,l.kt)("h4",{id:"notice"},"notice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u524d\u4ec5\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u652f\u6301 in \u5b50\u67e5\u8be2\u8fd4\u56debitmap\u5217\u3002")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select id from cost where id in (1, 2);\n+------+\n| id   |\n+------+\n|    2 |\n|    1 |\n+------+\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select id from tbl1 where id in (select id from tbl2);\n+------+\n| id   |\n+------+\n|    1 |\n|    4 |\n|    5 |\n+------+\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select id from tbl1 where id in (select bitmap_col from tbl3);\n+------+\n| id   |\n+------+\n|    1 |\n|    3 |\n+------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"IN\n")))}u.isMDXComponent=!0}}]);