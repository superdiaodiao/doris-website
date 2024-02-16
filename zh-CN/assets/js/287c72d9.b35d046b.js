"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18293],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,y=u["".concat(a,".").concat(f)]||u[f]||g[f]||o;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const o={title:"regexp",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp",id:"version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp",title:"regexp",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/",draft:!1,tags:[],version:"1.2",frontMatter:{title:"regexp",language:"zh-CN"},sidebar:"docs",previous:{title:"not like",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/like/not_like"},next:{title:"regexp_extract",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_extract"}},a={},c=[{value:"regexp",id:"regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"regexp"},"regexp"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BOOLEAN regexp(VARCHAR str, VARCHAR pattern)")),(0,i.yg)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d\uff0c\u5339\u914d\u4e0a\u7684\u5219\u8fd4\u56de true\uff0c\u6ca1\u5339\u914d\u4e0a\u5219\u8fd4\u56de false\u3002pattern \u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"// \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4ee5 'billie' \u4e3a\u5f00\u5934\u7684\u6240\u6709\u6570\u636e\nmysql > select k1 from test where k1 regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| billie eillish     |\n+--------------------+\n\n// \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4ee5 'ok' \u4e3a\u7ed3\u5c3e\u7684\u6240\u6709\u6570\u636e\uff1a\nmysql > select k1 from test where k1 regexp 'ok$';\n+----------+\n| k1       |\n+----------+\n| It's ok  |\n+----------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"REGEXP\n")))}g.isMDXComponent=!0}}]);