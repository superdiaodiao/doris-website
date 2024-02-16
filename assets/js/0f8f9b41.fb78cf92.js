"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54035],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(58168),a=(n(96540),n(15680));const l={title:"NAMED_STRUCT",language:"en"},s=void 0,c={unversionedId:"sql-manual/sql-functions/struct-functions/named-struct",id:"sql-manual/sql-functions/struct-functions/named-struct",title:"NAMED_STRUCT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/struct-functions/named-struct.md",sourceDirName:"sql-manual/sql-functions/struct-functions",slug:"/sql-manual/sql-functions/struct-functions/named-struct",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/named-struct",draft:!1,tags:[],version:"current",frontMatter:{title:"NAMED_STRUCT",language:"en"},sidebar:"docs",previous:{title:"STRUCT",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/struct"},next:{title:"STRUCT_ELEMENT",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/struct-element"}},o={},i=[{value:"named_struct",id:"named_struct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"named_struct"},"named_struct"),(0,a.yg)("version",{since:"2.0.0"},(0,a.yg)("p",null,"named_struct")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"STRUCT<T1, T2, T3, ...> named_struct({VARCHAR, T1}, {VARCHAR, T2}, ...)")),(0,a.yg)("p",null,"Construct a struct with the given field names and values. "),(0,a.yg)("p",null,"The number of parameters must be non zero and even. With odd digits being the name of the field and could be string literal, with even digits being the value of the field and could be column or literal."),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select named_struct('f1', 1, 'f2', 'a', 'f3', \"abc\");\n+-----------------------------------------------+\n| named_struct('f1', 1, 'f2', 'a', 'f3', 'abc') |\n+-----------------------------------------------+\n| {1, 'a', 'abc'}                               |\n+-----------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('a', null, 'b', \"v\");\n+-----------------------------------+\n| named_struct('a', NULL, 'b', 'v') |\n+-----------------------------------+\n| {NULL, 'v'}                       |\n+-----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('f1', k1, 'f2', k2, 'f3', null) from test_tb;\n+--------------------------------------------------+\n| named_struct('f1', `k1`, 'f2', `k2`, 'f3', NULL) |\n+--------------------------------------------------+\n| {1, 'a', NULL}                                   |\n+--------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"NAMED, STRUCT, NAMED_STRUCT"))}p.isMDXComponent=!0}}]);