"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14192],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),y=s,d=u["".concat(l,".").concat(y)]||u[y]||f[y]||a;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},77341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),s=(t(96540),t(15680));const a={title:"SPACE",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/space",id:"sql-manual/sql-functions/string-functions/space",title:"SPACE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/space.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/space",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/space",draft:!1,tags:[],version:"current",frontMatter:{title:"SPACE",language:"en"},sidebar:"docs",previous:{title:"UUID",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/uuid"},next:{title:"SLEEP",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/sleep"}},l={},c=[{value:"space",id:"space",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,s.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"space"},"space"),(0,s.yg)("h3",{id:"description"},"Description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"VARCHAR space(Int num)")),(0,s.yg)("p",null,"Returns a string consisting of num spaces."),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select length(space(10));\n+-------------------+\n| length(space(10)) |\n+-------------------+\n|                10 |\n+-------------------+\n1 row in set (0.01 sec)\n\nmysql> select length(space(-10));\n+--------------------+\n| length(space(-10)) |\n+--------------------+\n|                  0 |\n+--------------------+\n1 row in set (0.02 sec)\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"space\n")))}f.isMDXComponent=!0}}]);