"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[79536],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=l,d=u["".concat(a,".").concat(g)]||u[g]||f[g]||i;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},30777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),l=(t(96540),t(15680));const i={title:"REGEXP",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp",id:"sql-manual/sql-functions/string-functions/regexp/regexp",title:"REGEXP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/regexp/regexp.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/regexp/",draft:!1,tags:[],version:"current",frontMatter:{title:"REGEXP",language:"zh-CN"},sidebar:"docs",previous:{title:"NOT LIKE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/like/not-like"},next:{title:"REGEXP_EXTRACT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp-extract"}},a={},c=[{value:"regexp",id:"regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"regexp"},"regexp"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"BOOLEAN regexp(VARCHAR str, VARCHAR pattern)")),(0,l.yg)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d\uff0c\u5339\u914d\u4e0a\u7684\u5219\u8fd4\u56de true\uff0c\u6ca1\u5339\u914d\u4e0a\u5219\u8fd4\u56de false\u3002pattern \u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"// \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4ee5 'billie' \u4e3a\u5f00\u5934\u7684\u6240\u6709\u6570\u636e\nmysql > select k1 from test where k1 regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| billie eillish     |\n+--------------------+\n\n// \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4ee5 'ok' \u4e3a\u7ed3\u5c3e\u7684\u6240\u6709\u6570\u636e\uff1a\nmysql > select k1 from test where k1 regexp 'ok$';\n+----------+\n| k1       |\n+----------+\n| It's ok  |\n+----------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"REGEXP\n")))}f.isMDXComponent=!0}}]);