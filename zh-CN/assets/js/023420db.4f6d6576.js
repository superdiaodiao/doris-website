"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67896],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,f=u["".concat(p,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},12702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const l={title:"TRUNCATE-TABLE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE",title:"TRUNCATE-TABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"TRUNCATE-TABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-POLICY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-POLICY"},next:{title:"DROP-TABLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-TABLE"}},p={},c=[{value:"TRUNCATE-TABLE",id:"truncate-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"truncate-table"},"TRUNCATE-TABLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"TRUNCATE TABLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6e05\u7a7a\u6307\u5b9a\u8868\u548c\u5206\u533a\u7684\u6570\u636e\n\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)];\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8be5\u8bed\u53e5\u6e05\u7a7a\u6570\u636e\uff0c\u4f46\u4fdd\u7559\u8868\u6216\u5206\u533a\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u540c\u4e8e DELETE\uff0c\u8be5\u8bed\u53e5\u53ea\u80fd\u6574\u4f53\u6e05\u7a7a\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\uff0c\u4e0d\u80fd\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u540c\u4e8e DELETE\uff0c\u4f7f\u7528\u8be5\u65b9\u5f0f\u6e05\u7a7a\u6570\u636e\u4e0d\u4f1a\u5bf9\u67e5\u8be2\u6027\u80fd\u9020\u6210\u5f71\u54cd\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u8be5\u64cd\u4f5c\u5220\u9664\u7684\u6570\u636e\u4e0d\u53ef\u6062\u590d\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u8be5\u547d\u4ee4\u65f6\uff0c\u8868\u72b6\u6001\u9700\u4e3a NORMAL\uff0c\u5373\u4e0d\u5141\u8bb8\u6b63\u5728\u8fdb\u884c SCHEMA CHANGE \u7b49\u64cd\u4f5c\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6e05\u7a7a example_db \u4e0b\u7684\u8868 tbl"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE example_db.tbl;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6e05\u7a7a\u8868 tbl \u7684 p1 \u548c p2 \u5206\u533a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE tbl PARTITION(p1, p2);\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TRUNCATE, TABLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);