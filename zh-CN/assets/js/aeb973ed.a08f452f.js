"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34595],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,y=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={title:"\u6570\u636e\u5220\u9664\u6062\u590d",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/data-admin/delete-recover",id:"version-1.2/admin-manual/data-admin/delete-recover",title:"\u6570\u636e\u5220\u9664\u6062\u590d",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/data-admin/delete-recover.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/delete-recover",permalink:"/zh-CN/docs/1.2/admin-manual/data-admin/delete-recover",draft:!1,tags:[],version:"1.2",frontMatter:{title:"\u6570\u636e\u5220\u9664\u6062\u590d",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u6062\u590d",permalink:"/zh-CN/docs/1.2/admin-manual/data-admin/restore"},next:{title:"SQL\u62e6\u622a",permalink:"/zh-CN/docs/1.2/admin-manual/sql-interception"}},c={},p=[{value:"\u5f00\u59cb\u6570\u636e\u6062\u590d",id:"\u5f00\u59cb\u6570\u636e\u6062\u590d",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6570\u636e\u5220\u9664\u6062\u590d"},"\u6570\u636e\u5220\u9664\u6062\u590d"),(0,a.yg)("p",null,"Doris\u4e3a\u4e86\u907f\u514d\u8bef\u64cd\u4f5c\u9020\u6210\u7684\u707e\u96be\uff0c\u652f\u6301\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u5e93/\u8868/\u5206\u533a\u8fdb\u884c\u6570\u636e\u6062\u590d\uff0c\u5728drop table\u6216\u8005 drop database\u4e4b\u540e\uff0cDoris\u4e0d\u4f1a\u7acb\u523b\u5bf9\u6570\u636e\u8fdb\u884c\u7269\u7406\u5220\u9664\uff0c\u800c\u662f\u5728 Trash \u4e2d\u4fdd\u7559\u4e00\u6bb5\u65f6\u95f4\uff08\u9ed8\u8ba41\u5929\uff0c\u53ef\u901a\u8fc7fe.conf\u4e2d",(0,a.yg)("inlineCode",{parentName:"p"},"catalog_trash_expire_second"),"\u53c2\u6570\u914d\u7f6e\uff09\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7RECOVER\u547d\u4ee4\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u8fdb\u884c\u6062\u590d\u3002"),(0,a.yg)("h2",{id:"\u5f00\u59cb\u6570\u636e\u6062\u590d"},"\u5f00\u59cb\u6570\u636e\u6062\u590d"),(0,a.yg)("p",null,"1.\u6062\u590d\u540d\u4e3a example_db \u7684 database"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db;\n")),(0,a.yg)("p",null,"2.\u6062\u590d\u540d\u4e3a example_tbl \u7684 table"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl;\n")),(0,a.yg)("p",null,"3.\u6062\u590d\u8868 example_tbl \u4e2d\u540d\u4e3a p1 \u7684 partition"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 FROM example_tbl;\n")),(0,a.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,a.yg)("p",null,"\u5173\u4e8e RECOVER \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/RECOVER"},"RECOVER")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"HELP RECOVER")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}u.isMDXComponent=!0}}]);