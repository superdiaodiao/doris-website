"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70314],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=l,m=p["".concat(s,".").concat(f)]||p[f]||y[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(58168),l=(t(96540),t(15680));const a={title:"like",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/like/like",id:"version-1.2/sql-manual/sql-functions/string-functions/like/like",title:"like",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/like/like.md",sourceDirName:"sql-manual/sql-functions/string-functions/like",slug:"/sql-manual/sql-functions/string-functions/like/",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/like/",draft:!1,tags:[],version:"1.2",frontMatter:{title:"like",language:"zh-CN"},sidebar:"docs",previous:{title:"multi_match_any",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/search/multi_match_any"},next:{title:"not like",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/like/not_like"}},s={},c=[{value:"like",id:"like",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"like"},"like"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"BOOLEAN like(VARCHAR str, VARCHAR pattern)")),(0,l.yg)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6a21\u7cca\u5339\u914d\uff0c\u5339\u914d\u4e0a\u7684\u5219\u8fd4\u56de true\uff0c\u6ca1\u5339\u914d\u4e0a\u5219\u8fd4\u56de false\u3002"),(0,l.yg)("p",null,"like \u5339\u914d/\u6a21\u7cca\u5339\u914d\uff0c\u4f1a\u4e0e % \u548c _ \u7ed3\u5408\u4f7f\u7528\u3002"),(0,l.yg)("p",null,"\u767e\u5206\u53f7 '%' \u4ee3\u8868\u96f6\u4e2a\u3001\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u3002"),(0,l.yg)("p",null,"\u4e0b\u5212\u7ebf '_' \u4ee3\u8868\u5355\u4e2a\u5b57\u7b26\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"'a'      // \u7cbe\u51c6\u5339\u914d\uff0c\u548c `=` \u6548\u679c\u4e00\u81f4\n'%a'     // \u4ee5a\u7ed3\u5c3e\u7684\u6570\u636e\n'a%'     // \u4ee5a\u5f00\u5934\u7684\u6570\u636e\n'%a%'    // \u542b\u6709a\u7684\u6570\u636e\n'_a_'    // \u4e09\u4f4d\u4e14\u4e2d\u95f4\u5b57\u7b26\u662f a\u7684\u6570\u636e\n'_a'     // \u4e24\u4f4d\u4e14\u7ed3\u5c3e\u5b57\u7b26\u662f a\u7684\u6570\u636e\n'a_'     // \u4e24\u4f4d\u4e14\u5f00\u5934\u5b57\u7b26\u662f a\u7684\u6570\u636e\n'a__b'  // \u56db\u4f4d\u4e14\u4ee5\u5b57\u7b26a\u5f00\u5934\u3001b\u7ed3\u5c3e\u7684\u6570\u636e\n")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// \u8fd4\u56de k1 \u5b57\u7b26\u4e32\u4e2d\u5305\u542b a \u7684\u6570\u636e\nmysql > select k1 from test where k1 like '%a%';\n+-------+\n| k1    |\n+-------+\n| a     |\n| bab   |\n+-------+\n\n// \u8fd4\u56de k1 \u5b57\u7b26\u4e32\u4e2d\u7b49\u4e8e a \u7684\u6570\u636e\nmysql > select k1 from test where k1 like 'a';\n+-------+\n| k1    |\n+-------+\n| a     |\n+-------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"LIKE\n")))}y.isMDXComponent=!0}}]);