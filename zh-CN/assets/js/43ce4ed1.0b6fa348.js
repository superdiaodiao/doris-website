"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[91344],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>E});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,E=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(E,o(o({ref:t},p),{},{components:n})):r.createElement(E,o({ref:t},p))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={title:"CANCEL-RESTORE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE",title:"CANCEL-RESTORE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CANCEL-RESTORE",language:"zh-CN"},sidebar:"docs",previous:{title:"RESTORE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE"},next:{title:"STREAM-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"}},c={},s=[{value:"CANCEL-RESTORE",id:"cancel-restore",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"cancel-restore"},"CANCEL-RESTORE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CANCEL  RESTORE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u53d6\u6d88\u4e00\u4e2a\u6b63\u5728\u8fdb\u884c\u7684 RESTORE \u4efb\u52a1\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL RESTORE FROM db_name;\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5f53\u53d6\u6d88\u5904\u4e8e COMMIT \u6216\u4e4b\u540e\u9636\u6bb5\u7684\u6062\u590d\u5de6\u53f3\u65f6\uff0c\u53ef\u80fd\u5bfc\u81f4\u88ab\u6062\u590d\u7684\u8868\u65e0\u6cd5\u8bbf\u95ee\u3002\u6b64\u65f6\u53ea\u80fd\u901a\u8fc7\u518d\u6b21\u6267\u884c\u6062\u590d\u4f5c\u4e1a\u8fdb\u884c\u6570\u636e\u6062\u590d\u3002 ")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u53d6\u6d88 example_db \u4e0b\u7684 RESTORE \u4efb\u52a1\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL RESTORE FROM example_db;\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CANCEL, RESTORE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);