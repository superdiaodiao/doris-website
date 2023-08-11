"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54370],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>f});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},u="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return t?r.createElement(f,i(i({ref:e},s),{},{components:t})):r.createElement(f,i({ref:e},s))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[u]="string"==typeof n?n:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75874:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"BITMAP_AGG",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/bitmap_agg",id:"sql-manual/sql-functions/aggregate-functions/bitmap_agg",title:"BITMAP_AGG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/bitmap_agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/bitmap_agg",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/bitmap_agg",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_AGG",language:"zh-CN"}},c={},p=[{value:"BITMAP_AGG",id:"bitmap_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function g(n){let{components:e,...t}=n;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bitmap_agg"},"BITMAP_AGG"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BITMAP_AGG(expr)")),(0,a.kt)("p",null,"\u805a\u5408 expr \u7684\u503c\uff08\u4e0d\u5305\u62ec\u4efb\u4f55\u7a7a\u503c\uff09\u5f97\u5230 bitmap\u3002\nexpr \u7684\u7c7b\u578b\u9700\u8981\u4e3a TINYINT,SMALLINT,INT \u548c BIGINT \u7c7b\u578b\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL > select `n_nationkey`, `n_name`, `n_regionkey` from `nation`;\n+-------------+----------------+-------------+\n| n_nationkey | n_name         | n_regionkey |\n+-------------+----------------+-------------+\n|           0 | ALGERIA        |           0 |\n|           1 | ARGENTINA      |           1 |\n|           2 | BRAZIL         |           1 |\n|           3 | CANADA         |           1 |\n|           4 | EGYPT          |           4 |\n|           5 | ETHIOPIA       |           0 |\n|           6 | FRANCE         |           3 |\n|           7 | GERMANY        |           3 |\n|           8 | INDIA          |           2 |\n|           9 | INDONESIA      |           2 |\n|          10 | IRAN           |           4 |\n|          11 | IRAQ           |           4 |\n|          12 | JAPAN          |           2 |\n|          13 | JORDAN         |           4 |\n|          14 | KENYA          |           0 |\n|          15 | MOROCCO        |           0 |\n|          16 | MOZAMBIQUE     |           0 |\n|          17 | PERU           |           1 |\n|          18 | CHINA          |           2 |\n|          19 | ROMANIA        |           3 |\n|          20 | SAUDI ARABIA   |           4 |\n|          21 | VIETNAM        |           2 |\n|          22 | RUSSIA         |           3 |\n|          23 | UNITED KINGDOM |           3 |\n|          24 | UNITED STATES  |           1 |\n+-------------+----------------+-------------+\n\nMySQL > select n_regionkey, bitmap_to_string(bitmap_agg(n_nationkey)) from nation group by n_regionkey;\n+-------------+---------------------------------------------+\n| n_regionkey | bitmap_to_string(bitmap_agg(`n_nationkey`)) |\n+-------------+---------------------------------------------+\n|           4 | 4,10,11,13,20                               |\n|           2 | 8,9,12,18,21                                |\n|           1 | 1,2,3,17,24                                 |\n|           0 | 0,5,14,15,16                                |\n|           3 | 6,7,19,22,23                                |\n+-------------+---------------------------------------------+\n\nMySQL > select bitmap_count(bitmap_agg(n_nationkey))  from nation;\n+-----------------------------------------+\n| bitmap_count(bitmap_agg(`n_nationkey`)) |\n+-----------------------------------------+\n|                                      25 |\n+-----------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"BITMAP_AGG"))}g.isMDXComponent=!0}}]);