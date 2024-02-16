"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49317],{15680:(e,n,r)=>{r.d(n,{xA:()=>y,yg:()=>f});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},y=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return r?t.createElement(f,l(l({ref:n},y),{},{components:r})):t.createElement(f,l({ref:n},y))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const i={title:"ARRAY_SIZE",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-size",id:"version-2.0/sql-manual/sql-functions/array-functions/array-size",title:"ARRAY_SIZE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-size.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-size",permalink:"/docs/sql-manual/sql-functions/array-functions/array-size",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_SIZE",language:"en"},sidebar:"docs",previous:{title:"ARRAY_SUM",permalink:"/docs/sql-manual/sql-functions/array-functions/array-sum"},next:{title:"ARRAY_REMOVE",permalink:"/docs/sql-manual/sql-functions/array-functions/array-remove"}},o={},c=[{value:"array_size (size, cardinality)",id:"array_size-size-cardinality",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_size-size-cardinality"},"array_size (size, cardinality)"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_size (size, cardinality)")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"BIGINT size(ARRAY<T> arr) \nBIGINT array_size(ARRAY<T> arr) \nBIGINT cardinality(ARRAY<T> arr)\n")),(0,a.yg)("p",null,"Returns the size of the array, returns NULL for NULL input."),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k1,k2,size(k2) from array_test;\n+------+-----------+------------+\n| k1   | k2        | size(`k2`) |\n+------+-----------+------------+\n|    1 | [1, 2, 3] |          3 |\n|    2 | []        |          0 |\n|    3 | NULL      |       NULL |\n+------+-----------+------------+\n\nmysql> select k1,k2,array_size(k2) from array_test;\n+------+-----------+------------------+\n| k1   | k2        | array_size(`k2`) |\n+------+-----------+------------------+\n|    1 | [1, 2, 3] |                3 |\n|    2 | []        |                0 |\n|    3 | NULL      |             NULL |\n+------+-----------+------------------+\n\nmysql> select k1,k2,cardinality(k2) from array_test;\n+------+-----------+-------------------+\n| k1   | k2        | cardinality(`k2`) |\n+------+-----------+-------------------+\n|    1 | [1, 2, 3] |                 3 |\n|    2 | []        |                 0 |\n|    3 | NULL      |              NULL |\n+------+-----------+-------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY_SIZE, SIZE, CARDINALITY"))}p.isMDXComponent=!0}}]);