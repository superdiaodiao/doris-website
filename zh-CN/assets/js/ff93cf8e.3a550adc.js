"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[39481],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={title:"mod",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/mod",id:"version-1.2/sql-manual/sql-functions/math-functions/mod",title:"mod",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/math-functions/mod.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/mod",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/mod",draft:!1,tags:[],version:"1.2",frontMatter:{title:"mod",language:"zh-CN"},sidebar:"docs",previous:{title:"random",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/random"},next:{title:"AES",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/aes"}},s={},c=[{value:"mod",id:"mod",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"mod"},"mod"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"mod(col_a, col_b)"),"  "),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"column"),"\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\uff1a",(0,o.yg)("inlineCode",{parentName:"p"},"TINYINT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"SMALLINT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"INT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"BIGINT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"LARGEINT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"FLOAT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE")," ",(0,o.yg)("inlineCode",{parentName:"p"},"DECIMAL")),(0,o.yg)("p",null,"\u6c42a / b\u7684\u4f59\u6570\u3002\u6d6e\u70b9\u7c7b\u578b\u8bf7\u4f7f\u7528fmod\u51fd\u6570\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select mod(10, 3);\n+------------+\n| mod(10, 3) |\n+------------+\n|          1 |\n+------------+\n\nmysql> select fmod(10.1, 3.2);\n+-----------------+\n| fmod(10.1, 3.2) |\n+-----------------+\n|      0.50000024 |\n+-----------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MOD\uff0cFMOD\n")))}m.isMDXComponent=!0}}]);