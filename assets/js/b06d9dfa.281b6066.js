"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43123],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=l,y=p["".concat(s,".").concat(f)]||p[f]||g[f]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},54701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),l=(t(96540),t(15680));const i={title:"BIT_LENGTH",language:"en"},o=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/bit-length",id:"sql-manual/sql-functions/string-functions/bit-length",title:"BIT_LENGTH",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/bit-length.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/bit-length",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/bit-length",draft:!1,tags:[],version:"current",frontMatter:{title:"BIT_LENGTH",language:"en"},sidebar:"docs",previous:{title:"LENGTH",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/length"},next:{title:"CHAR_LENGTH",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/char-length"}},s={},c=[{value:"bit_length",id:"bit_length",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"bit_length"},"bit_length"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"INT bit_length (VARCHAR str)")),(0,l.yg)("p",null,"Return length of argument in bits."),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select bit_length(\"abc\");\n+-------------------+\n| bit_length('abc') |\n+-------------------+\n|                24 |\n+-------------------+\n\nmysql> select bit_length(\"\u4e2d\u56fd\");\n+----------------------+\n| bit_length('\u4e2d\u56fd')    |\n+----------------------+\n|                   48 |\n+----------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"BIT_LENGTH\n")))}g.isMDXComponent=!0}}]);