"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96033],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return t?n.createElement(y,o(o({ref:a},c),{},{components:t})):n.createElement(y,o({ref:a},c))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53581:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const l={title:"CANCEL-LOAD",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",title:"CANCEL-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CANCEL-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-ROUTINE-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD"},next:{title:"RESUME-ROUTINE-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"}},p={},s=[{value:"CANCEL-LOAD",id:"cancel-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"cancel-load"},"CANCEL-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CANCEL LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u64a4\u9500\u6307\u5b9a label \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002\u6216\u8005\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u6279\u91cf\u64a4\u9500\u5bfc\u5165\u4f5c\u4e1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\n[FROM db_name]\nWHERE [LABEL = "load_label" | LABEL like "label_pattern" | STATE = "PENDING/ETL/LOADING"]\n')),(0,r.yg)("p",null,"\u6ce8\uff1a1.2.0 \u7248\u672c\u4e4b\u540e\u652f\u6301\u6839\u636e State \u53d6\u6d88\u4f5c\u4e1a\u3002"),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example_db \u4e0a\uff0c label \u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"example_db_test_load_label")," \u7684\u5bfc\u5165\u4f5c\u4e1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE LABEL = "example_db_test_load_label";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example",(0,r.yg)("em",{parentName:"p"},"db \u4e0a\uff0c \u6240\u6709\u5305\u542b example")," \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE LABEL like "example_";\n')))),(0,r.yg)("version",{since:"1.2.0"},(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u53d6\u6d88\u72b6\u6001\u4e3a LOADING \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE STATE = "loading";\n'))))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CANCEL, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u53ea\u80fd\u53d6\u6d88\u5904\u4e8e PENDING\u3001ETL\u3001LOADING \u72b6\u6001\u7684\u672a\u5b8c\u6210\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5f53\u6267\u884c\u6279\u91cf\u64a4\u9500\u65f6\uff0cDoris \u4e0d\u4f1a\u4fdd\u8bc1\u6240\u6709\u5bf9\u5e94\u7684\u5bfc\u5165\u4f5c\u4e1a\u539f\u5b50\u7684\u64a4\u9500\u3002\u5373\u6709\u53ef\u80fd\u4ec5\u6709\u90e8\u5206\u5bfc\u5165\u4f5c\u4e1a\u64a4\u9500\u6210\u529f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\uff0c\u5e76\u5c1d\u8bd5\u91cd\u590d\u6267\u884c CANCEL LOAD \u8bed\u53e5\u3002")))}u.isMDXComponent=!0}}]);