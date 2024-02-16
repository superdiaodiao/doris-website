"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18634],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=l,y=p["".concat(c,".").concat(f)]||p[f]||g[f]||a;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(58168),l=(t(96540),t(15680));const a={title:"CHAR_LENGTH",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/char-length",id:"version-2.0/sql-manual/sql-functions/string-functions/char-length",title:"CHAR_LENGTH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/char-length.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/char-length",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/char-length",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CHAR_LENGTH",language:"zh-CN"},sidebar:"docs",previous:{title:"BIT_LENGTH",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/bit-length"},next:{title:"LPAD",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/lpad"}},c={},s=[{value:"char_length",id:"char_length",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function g(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"char_length"},"char_length"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"INT char_length(VARCHAR str)")),(0,l.yg)("p",null,"\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0c\u5bf9\u4e8e\u591a\u5b57\u8282\u5b57\u7b26\uff0c\u8fd4\u56de\u5b57\u7b26\u6570, \u76ee\u524d\u4ec5\u652f\u6301utf8 \u7f16\u7801\u3002\u8fd9\u4e2a\u51fd\u6570\u8fd8\u6709\u4e00\u4e2a\u522b\u540d ",(0,l.yg)("inlineCode",{parentName:"p"},"character_length"),"\u3002"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select char_length(\"abc\");\n+--------------------+\n| char_length('abc') |\n+--------------------+\n|                  3 |\n+--------------------+\n\nmysql> select char_length(\"\u4e2d\u56fd\");\n+------------------- ---+\n| char_length('\u4e2d\u56fd')   |\n+-----------------------+\n|                     2 |\n+-----------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"CHAR_LENGTH, CHARACTER_LENGTH\n")))}g.isMDXComponent=!0}}]);