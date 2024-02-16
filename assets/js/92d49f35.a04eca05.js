"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7487],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>y});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,y=u["".concat(i,".").concat(f)]||u[f]||g[f]||o;return r?t.createElement(y,l(l({ref:n},s),{},{components:r})):t.createElement(y,l({ref:n},s))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26571:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const o={title:"regexp_replace_one",language:"en"},l=void 0,p={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp_replace_one",id:"version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one",title:"regexp_replace_one",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one",draft:!1,tags:[],version:"1.2",frontMatter:{title:"regexp_replace_one",language:"en"},sidebar:"docs",previous:{title:"regexp_replace",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace"},next:{title:"not regexp",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/regexp/not_regexp"}},i={},c=[{value:"regexp_replace_one",id:"regexp_replace_one",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"regexp_replace_one"},"regexp_replace_one"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR regexp_replace_one(VARCHAR str, VARCHAR pattern, VARCHAR repl)")),(0,a.yg)("p",null,"Regular matching of STR strings, replacing the part hitting pattern with repl, replacing only the first match."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT regexp_replace_one('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace_one('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace_one('a b b','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace_one('a b b', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> b                                |\n+----------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REGEXP_REPLACE_ONE,REGEXP,REPLACE,ONE\n")))}g.isMDXComponent=!0}}]);