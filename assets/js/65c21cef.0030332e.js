"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75685],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4238:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const l={title:"NUMBERS",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/numbers",id:"sql-manual/sql-functions/table-functions/numbers",title:"NUMBERS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/numbers.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/numbers",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/numbers",draft:!1,tags:[],version:"current",frontMatter:{title:"NUMBERS",language:"en"},sidebar:"docs",previous:{title:"EXPLODE_BITMAP",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-bitmap"},next:{title:"EXPLODE_NUMBERS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers"}},s={},u=[{value:"<code>numbers</code>",id:"numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"numbers"},(0,a.kt)("inlineCode",{parentName:"h2"},"numbers")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"Table function that generates a temporary table containing only one column with the column name ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," and all element values are ",(0,a.kt)("inlineCode",{parentName:"p"},"const_value")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"const_value")," is specified, otherwise they are [0,",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") incremented."),(0,a.kt)("h4",{id:"syntax"},"syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'numbers(\n  "number" = "n"\n  <, "const_value" = "x">\n  );\n')),(0,a.kt)("p",null,"parameter\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Line number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"const_value"),": the constant value.")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql> select * from numbers("number" = "5");\n+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n+--------+\n5 rows in set (0.11 sec)\n\nmysql> select * from numbers("number" = "5", "const_value" = "-123");\n+--------+\n| number |\n+--------+\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n+--------+\n5 rows in set (0.12 sec)\n')),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"numbers, const_value\n")))}m.isMDXComponent=!0}}]);