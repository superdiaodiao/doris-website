"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63555],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?t.createElement(y,l(l({ref:n},c),{},{components:r})):t.createElement(y,l({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54177:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=r(58168),o=(r(96540),r(15680));const a={title:"ROUND_BANKERS",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/numeric-functions/round-bankers",id:"version-2.0/sql-manual/sql-functions/numeric-functions/round-bankers",title:"ROUND_BANKERS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/round-bankers.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/round-bankers",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/round-bankers",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ROUND_BANKERS",language:"zh-CN"},sidebar:"docs",previous:{title:"ROUND",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/round"},next:{title:"TRUNCATE",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/truncate"}},s={},u=[{value:"round_bankers",id:"round_bankers",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"round_bankers"},"round_bankers"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"T round_bankers(T x[, d])"),"\n\u5c06",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u4f7f\u7528\u94f6\u884c\u5bb6\u820d\u5165\u6cd5\u540e\uff0c\u4fdd\u7559d\u4f4d\u5c0f\u6570\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"d"),"\u9ed8\u8ba4\u4e3a0\u3002\u5982\u679c",(0,o.yg)("inlineCode",{parentName:"p"},"d"),"\u4e3a\u8d1f\u6570\uff0c\u5219\u5c0f\u6570\u70b9\u5de6\u8fb9",(0,o.yg)("inlineCode",{parentName:"p"},"d"),"\u4f4d\u4e3a0\u3002\u5982\u679c",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u6216",(0,o.yg)("inlineCode",{parentName:"p"},"d"),"\u4e3anull\uff0c\u8fd4\u56denull\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5982\u679c\u820d\u5165\u6570\u4ecb\u4e8e\u4e24\u4e2a\u6570\u5b57\u4e4b\u95f4\uff0c\u5219\u8be5\u51fd\u6570\u4f7f\u7528\u94f6\u884c\u5bb6\u7684\u820d\u5165"),(0,o.yg)("li",{parentName:"ul"},"\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u8be5\u51fd\u6570\u5c06\u6570\u5b57\u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\u3002")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select round_bankers(0.4);\n+--------------------+\n| round_bankers(0.4) |\n+--------------------+\n|                  0 |\n+--------------------+\nmysql> select round_bankers(-3.5);\n+---------------------+\n| round_bankers(-3.5) |\n+---------------------+\n|                  -4 |\n+---------------------+\nmysql> select round_bankers(-3.4);\n+---------------------+\n| round_bankers(-3.4) |\n+---------------------+\n|                  -3 |\n+---------------------+\nmysql> select round_bankers(10.755, 2);\n+--------------------------+\n| round_bankers(10.755, 2) |\n+--------------------------+\n|                    10.76 |\n+--------------------------+\nmysql> select round_bankers(1667.2725, 2);\n+-----------------------------+\n| round_bankers(1667.2725, 2) |\n+-----------------------------+\n|                     1667.27 |\n+-----------------------------+\nmysql> select round_bankers(1667.2725, -2);\n+------------------------------+\n| round_bankers(1667.2725, -2) |\n+------------------------------+\n|                         1700 |\n+------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"round_bankers\n")))}p.isMDXComponent=!0}}]);