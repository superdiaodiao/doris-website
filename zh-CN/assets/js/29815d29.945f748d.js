"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[30693],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>v});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,v=u["".concat(s,".").concat(d)]||u[d]||y[d]||l;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={title:"IPV4",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Types/IPV4",id:"sql-manual/sql-reference/Data-Types/IPV4",title:"IPV4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/IPV4.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/IPV4",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/IPV4",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV4",language:"zh-CN"},sidebar:"docs",previous:{title:"VARIANT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/VARIANT"},next:{title:"IPV6",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/IPV6"}},s={},p=[{value:"IPV4",id:"ipv4",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"ipv4"},"IPV4"),(0,a.yg)("version",{since:"dev"},(0,a.yg)("p",null,"IPV4")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"IPv4\u7c7b\u578b\uff0c\u4ee5UInt32\u7684\u5f62\u5f0f\u5b58\u50a8\u57284\u4e2a\u5b57\u8282\u4e2d\uff0c\u7528\u4e8e\u8868\u793aIPv4\u5730\u5740\u3002\n\u53d6\u503c\u8303\u56f4\u662f ","['0.0.0.0', '255.255.255.255']","\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u8d85\u51fa\u53d6\u503c\u8303\u56f4\u6216\u8005\u683c\u5f0f\u975e\u6cd5\u7684\u8f93\u5165\u5c06\u8fd4\u56deNULL")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE ipv4_test (\n  `id` int,\n  `ip_v4` ipv4\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,a.yg)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"insert into ipv4_test values(1, '0.0.0.0');\ninsert into ipv4_test values(2, '127.0.0.1');\ninsert into ipv4_test values(3, '59.50.185.152');\ninsert into ipv4_test values(4, '255.255.255.255');\ninsert into ipv4_test values(5, '255.255.255.256'); // invalid data\n")),(0,a.yg)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select * from ipv4_test order by id;\n+------+-----------------+\n| id   | ip_v4           |\n+------+-----------------+\n|    1 | 0.0.0.0         |\n|    2 | 127.0.0.1       |\n|    3 | 59.50.185.152   |\n|    4 | 255.255.255.255 |\n|    5 | NULL            |\n+------+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"IPV4"))}y.isMDXComponent=!0}}]);