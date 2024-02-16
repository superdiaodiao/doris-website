"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11564],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>c});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=t.createContext({}),u=function(e){var r=t.useContext(g),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(g.Provider,{value:r},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=u(n),s=a,c=y["".concat(g,".").concat(s)]||y[s]||d[s]||l;return n?t.createElement(c,i(i({ref:r},p),{},{components:n})):t.createElement(c,i({ref:r},p))}));function c(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var g in r)hasOwnProperty.call(r,g)&&(o[g]=r[g]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},40652:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=n(58168),a=(n(96540),n(15680));const l={title:"\u90e8\u5206\u5217\u66f4\u65b0",language:"zh-CN"},i=void 0,o={unversionedId:"data-operate/update-delete/partial-update",id:"version-2.0/data-operate/update-delete/partial-update",title:"\u90e8\u5206\u5217\u66f4\u65b0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-operate/update-delete/partial-update.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/partial-update",permalink:"/zh-CN/docs/data-operate/update-delete/partial-update",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u90e8\u5206\u5217\u66f4\u65b0",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u66f4\u65b0",permalink:"/zh-CN/docs/data-operate/update-delete/update"},next:{title:"Delete \u64cd\u4f5c",permalink:"/zh-CN/docs/data-operate/update-delete/delete-manual"}},g={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Unique Key\u6a21\u578b",id:"unique-key\u6a21\u578b",level:3},{value:"Aggregate Key\u6a21\u578b",id:"aggregate-key\u6a21\u578b",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"Unique Key \u6a21\u578b",id:"unique-key-\u6a21\u578b",level:3},{value:"Aggregate Key\u6a21\u578b",id:"aggregate-key\u6a21\u578b-1",level:3},{value:"\u5e76\u53d1\u5199\u5165\u548c\u6570\u636e\u53ef\u89c1\u6027",id:"\u5e76\u53d1\u5199\u5165\u548c\u6570\u636e\u53ef\u89c1\u6027",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2},{value:"Unique Key\u6a21\u578bMerge-on-Write\u5b9e\u73b0",id:"unique-key\u6a21\u578bmerge-on-write\u5b9e\u73b0",level:3},{value:"Aggregate Key\u6a21\u578b",id:"aggregate-key\u6a21\u578b-2",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f\u53ca\u793a\u4f8b",id:"\u4f7f\u7528\u65b9\u5f0f\u53ca\u793a\u4f8b",level:2},{value:"Unique Key\u6a21\u578b",id:"unique-key\u6a21\u578b-1",level:3},{value:"\u5efa\u8868",id:"\u5efa\u8868",level:4},{value:"StreamLoad/BrokerLoad/RoutineLoad",id:"streamloadbrokerloadroutineload",level:4},{value:"Flink Connector",id:"flink-connector",level:4},{value:"INSERT INTO",id:"insert-into",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"Aggregate Key\u6a21\u578b",id:"aggregate-key\u6a21\u578b-3",level:3},{value:"\u5efa\u8868",id:"\u5efa\u8868-1",level:4},{value:"\u6570\u636e\u5199\u5165",id:"\u6570\u636e\u5199\u5165",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"Unique Key\u6a21\u578bMerge-on-Write\u5b9e\u73b0",id:"unique-key\u6a21\u578bmerge-on-write\u5b9e\u73b0-1",level:3},{value:"Aggregate Key\u6a21\u578b",id:"aggregate-key\u6a21\u578b-4",level:3}],p={toc:u},y="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u90e8\u5206\u5217\u66f4\u65b0"},"\u90e8\u5206\u5217\u66f4\u65b0"),(0,a.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"\u8981\u5b9e\u73b0\u90e8\u5206\u5217\u66f4\u65b0\uff0c\u5728Doris\u4e2d\u53ef\u4ee5\u4f7f\u7528Unique Key\u6a21\u578b\u6216Aggregate Key\u6a21\u578b"),(0,a.yg)("h3",{id:"unique-key\u6a21\u578b"},"Unique Key\u6a21\u578b"),(0,a.yg)("p",null,"Doris Unique Key\u8868\u9ed8\u8ba4\u7684\u6570\u636e\u5199\u5165\u8bed\u4e49\u662f\u6574\u884cUpsert\uff0c\u57282.0\u7248\u672c\u4e4b\u524d\uff0c\u7528\u6237\u60f3\u8981\u66f4\u65b0\u67d0\u4e9b\u884c\u7684\u4e00\u90e8\u5206\u5b57\u6bb5\uff0c\u53ea\u80fd\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"UPDATE"),"\u547d\u4ee4\uff0c\u4f46\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"UPDATE"),"\u547d\u4ee4\u7531\u4e8e\u8bfb\u5199\u4e8b\u52a1\u7684\u9501\u7c92\u5ea6\u539f\u56e0\uff0c\u5e76\u4e0d\u9002\u5408\u9ad8\u9891\u7684\u6570\u636e\u5199\u5165\u573a\u666f\u3002\u56e0\u6b64\u6211\u4eec\u57282.0\u7248\u672c\u5f15\u5165\u4e86Unique Key\u6a21\u578b\u7684\u90e8\u5206\u5217\u66f4\u65b0\u652f\u6301"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"2.0.0\u7248\u672c\u4ec5\u5728Unique Key\u7684Merge-on-Write\u5b9e\u73b0\u4e2d\u652f\u6301\u4e86\u90e8\u5206\u5217\u66f4\u65b0\u80fd\u529b"),(0,a.yg)("li",{parentName:"ol"},"2.0.2\u7248\u672c\u652f\u6301\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"li"},"INSERT INTO"),"\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0"),(0,a.yg)("li",{parentName:"ol"},"2.1.0\u7248\u672c\u5c06\u652f\u6301\u66f4\u4e3a\u7075\u6d3b\u7684\u5217\u66f4\u65b0\uff0c\u89c1\u4e0b\u6587\u201c\u4f7f\u7528\u9650\u5236\u201d\u90e8\u5206\u7684\u8bf4\u660e"))),(0,a.yg)("h3",{id:"aggregate-key\u6a21\u578b"},"Aggregate Key\u6a21\u578b"),(0,a.yg)("p",null,"Aggregate Key\u8868\u4e3b\u8981\u5728\u9884\u805a\u5408\u573a\u666f\u4f7f\u7528\u800c\u975e\u6570\u636e\u66f4\u65b0\u7684\u573a\u666f\u4f7f\u7528\uff0c\u4f46\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06\u805a\u5408\u51fd\u6570\u8bbe\u7f6e\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),"\u6765\u5b9e\u73b0\u5217\u66f4\u65b0\u6548\u679c"),(0,a.yg)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5b9e\u65f6\u7684\u52a8\u6001\u5217\u66f4\u65b0\uff0c\u9700\u8981\u5728\u8868\u4e2d\u5b9e\u65f6\u7684\u9ad8\u9891\u66f4\u65b0\u67d0\u4e9b\u5b57\u6bb5\u503c\u3002\u4f8b\u5982T+1\u751f\u6210\u7684\u7528\u6237\u6807\u7b7e\u8868\u4e2d\u6709\u4e00\u4e9b\u5173\u4e8e\u7528\u6237\u6700\u65b0\u884c\u4e3a\u4fe1\u606f\u7684\u5b57\u6bb5\u9700\u8981\u5b9e\u65f6\u7684\u66f4\u65b0\uff0c\u4ee5\u5b9e\u73b0\u5e7f\u544a/\u63a8\u8350\u7b49\u7cfb\u7edf\u80fd\u591f\u636e\u5176\u8fdb\u884c\u5b9e\u65f6\u7684\u5206\u6790\u548c\u51b3\u7b56"),(0,a.yg)("li",{parentName:"ul"},"\u5c06\u591a\u5f20\u6e90\u8868\u62fc\u63a5\u6210\u4e00\u5f20\u5927\u5bbd\u8868"),(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u4fee\u6b63")),(0,a.yg)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,a.yg)("p",null,"\u5173\u4e8eUnique Key\u6a21\u578b\u548cAggregate Key\u6a21\u578b\u7684\u539f\u7406\uff0c\u53ef\u4ee5\u4e3b\u8981\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-table/data-model"},"\u6570\u636e\u6a21\u578b"),"\u7684\u4ecb\u7ecd"),(0,a.yg)("h3",{id:"unique-key-\u6a21\u578b"},"Unique Key \u6a21\u578b"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Unique Key\u6a21\u578b\u76ee\u524d\u4ec5\u652f\u6301\u5728Merge-on-Write\u5b9e\u73b0\u4e0a\u8fdb\u884c\u5217\u66f4\u65b0")),(0,a.yg)("p",null,"\u7528\u6237\u901a\u8fc7\u6b63\u5e38\u7684\u5bfc\u5165\u65b9\u5f0f\u5c06\u4e00\u90e8\u5206\u5217\u7684\u6570\u636e\u5199\u5165Doris\u7684Memtable\uff0c\u6b64\u65f6Memtable\u4e2d\u5e76\u6ca1\u6709\u6574\u884c\u6570\u636e\uff0c\u5728Memtable\u4e0b\u5237\u7684\u65f6\u5019\uff0c\u4f1a\u67e5\u627e\u5386\u53f2\u6570\u636e\uff0c\u7528\u5386\u53f2\u6570\u636e\u8865\u9f50\u4e00\u6574\u884c\uff0c\u5e76\u5199\u5165\u6570\u636e\u6587\u4ef6\u4e2d\uff0c\u540c\u65f6\u5c06\u5386\u53f2\u6570\u636e\u6587\u4ef6\u4e2d\u76f8\u540ckey\u7684\u6570\u636e\u884c\u6807\u8bb0\u5220\u9664"),(0,a.yg)("p",null,"\u5f53\u51fa\u73b0\u5e76\u53d1\u5bfc\u5165\u65f6\uff0cDoris\u4f1a\u5229\u7528MVCC\u673a\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u7684\u6b63\u786e\u6027\u3002\u5982\u679c\u4e24\u6279\u6570\u636e\u5bfc\u5165\u90fd\u66f4\u65b0\u4e86\u4e00\u4e2a\u76f8\u540ckey\u7684\u4e0d\u540c\u5217\uff0c\u5219\u5176\u4e2d\u7cfb\u7edf\u7248\u672c\u8f83\u9ad8\u7684\u5bfc\u5165\u4efb\u52a1\u4f1a\u5728\u7248\u672c\u8f83\u4f4e\u7684\u5bfc\u5165\u4efb\u52a1\u6210\u529f\u540e\uff0c\u4f7f\u7528\u7248\u672c\u8f83\u4f4e\u7684\u5bfc\u5165\u4efb\u52a1\u5199\u5165\u7684\u76f8\u540ckey\u7684\u6570\u636e\u884c\u91cd\u65b0\u8fdb\u884c\u8865\u9f50"),(0,a.yg)("h3",{id:"aggregate-key\u6a21\u578b-1"},"Aggregate Key\u6a21\u578b"),(0,a.yg)("p",null,"\u5c06\u805a\u5408\u51fd\u6570\u8bbe\u7f6e\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),"\u5373\u53ef\u5b9e\u73b0\u90e8\u5206\u5217\u66f4\u65b0\u7684\u652f\u6301\uff0c\u8be6\u7ec6\u7528\u6cd5\u53c2\u8003\u4e0b\u6587\u793a\u4f8b"),(0,a.yg)("h2",{id:"\u5e76\u53d1\u5199\u5165\u548c\u6570\u636e\u53ef\u89c1\u6027"},"\u5e76\u53d1\u5199\u5165\u548c\u6570\u636e\u53ef\u89c1\u6027"),(0,a.yg)("p",null,"\u90e8\u5206\u5217\u66f4\u65b0\u652f\u6301\u9ad8\u9891\u7684\u5e76\u53d1\u5199\u5165\uff0c\u5199\u5165\u6210\u529f\u540e\u6570\u636e\u5373\u53ef\u89c1\uff0c\u7cfb\u7edf\u81ea\u52a8\u901a\u8fc7MVCC\u673a\u5236\u6765\u4fdd\u8bc1\u5e76\u53d1\u5199\u5165\u7684\u6570\u636e\u6b63\u786e\u6027"),(0,a.yg)("h2",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,a.yg)("p",null,"\u4f7f\u7528\u5efa\u8bae\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5bf9\u5199\u5165\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\uff0c\u67e5\u8be2\u6027\u80fd\u8981\u6c42\u8f83\u4f4e\u7684\u7528\u6237\uff0c\u5efa\u8bae\u4f7f\u7528Aggregate Key\u6a21\u578b"),(0,a.yg)("li",{parentName:"ol"},"\u5bf9\u67e5\u8be2\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\uff0c\u5bf9\u5199\u5165\u6027\u80fd\u8981\u6c42\u4e0d\u9ad8\uff08\u4f8b\u5982\u6570\u636e\u7684\u5199\u5165\u548c\u66f4\u65b0\u57fa\u672c\u90fd\u5728\u51cc\u6668\u4f4e\u5cf0\u671f\u5b8c\u6210\uff09\uff0c\u6216\u8005\u5199\u5165\u9891\u7387\u4e0d\u9ad8\u7684\u7528\u6237\uff0c\u5efa\u8bae\u4f7f\u7528Unique Key\u6a21\u578bmerge-on-write\u5b9e\u73b0")),(0,a.yg)("h3",{id:"unique-key\u6a21\u578bmerge-on-write\u5b9e\u73b0"},"Unique Key\u6a21\u578bMerge-on-Write\u5b9e\u73b0"),(0,a.yg)("p",null,"\u7531\u4e8eMerge-on-Write\u5b9e\u73b0\u9700\u8981\u5728\u6570\u636e\u5199\u5165\u7684\u65f6\u5019\uff0c\u8fdb\u884c\u6574\u884c\u6570\u636e\u7684\u8865\u9f50\uff0c\u4ee5\u4fdd\u8bc1\u6700\u4f18\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u56e0\u6b64\u4f7f\u7528Merge-on-Write\u5b9e\u73b0\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u4f1a\u6709\u8f83\u4e3a\u660e\u663e\u7684\u5bfc\u5165\u6027\u80fd\u4e0b\u964d\u3002"),(0,a.yg)("p",null,"\u5199\u5165\u6027\u80fd\u4f18\u5316\u5efa\u8bae\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u914d\u5907\u4e86NVMe\u7684SSD\uff0c\u6216\u8005\u6781\u901fSSD\u4e91\u76d8\u3002\u56e0\u4e3a\u8865\u9f50\u6570\u636e\u65f6\u4f1a\u5927\u91cf\u7684\u8bfb\u53d6\u5386\u53f2\u6570\u636e\uff0c\u4ea7\u751f\u8f83\u9ad8\u7684\u8bfbIOPS\uff0c\u4ee5\u53ca\u8bfb\u541e\u5410"),(0,a.yg)("li",{parentName:"ol"},"\u5f00\u542f\u884c\u5b58\u5c06\u80fd\u591f\u5927\u5927\u51cf\u5c11\u8865\u9f50\u6570\u636e\u65f6\u4ea7\u751f\u7684IOPS\uff0c\u5bfc\u5165\u6027\u80fd\u63d0\u5347\u660e\u663e\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u901a\u8fc7\u5982\u4e0bproperty\u6765\u5f00\u542f\u884c\u5b58\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,a.yg)("h3",{id:"aggregate-key\u6a21\u578b-2"},"Aggregate Key\u6a21\u578b"),(0,a.yg)("p",null,"Aggregate Key\u6a21\u578b\u5728\u5199\u5165\u8fc7\u7a0b\u4e2d\u4e0d\u505a\u4efb\u4f55\u989d\u5916\u5904\u7406\uff0c\u6240\u4ee5\u5199\u5165\u6027\u80fd\u4e0d\u53d7\u5f71\u54cd\uff0c\u4e0e\u666e\u901a\u7684\u6570\u636e\u5bfc\u5165\u76f8\u540c\u3002\u4f46\u662f\u5728\u67e5\u8be2\u65f6\u8fdb\u884c\u805a\u5408\u7684\u4ee3\u4ef7\u8f83\u5927\uff0c\u5178\u578b\u7684\u805a\u5408\u67e5\u8be2\u6027\u80fd\u76f8\u6bd4Unique Key\u6a21\u578b\u7684Merge-on-Write\u5b9e\u73b0\u4f1a\u67095-10\u500d\u7684\u4e0b\u964d\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f\u53ca\u793a\u4f8b"},"\u4f7f\u7528\u65b9\u5f0f\u53ca\u793a\u4f8b"),(0,a.yg)("h3",{id:"unique-key\u6a21\u578b-1"},"Unique Key\u6a21\u578b"),(0,a.yg)("h4",{id:"\u5efa\u8868"},"\u5efa\u8868"),(0,a.yg)("p",null,"\u5efa\u8868\u65f6\u9700\u8981\u6307\u5b9a\u5982\u4e0bproperty\uff0c\u4ee5\u5f00\u542fMerge-on-Write\u5b9e\u73b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"enable_unique_key_merge_on_write = true\n")),(0,a.yg)("h4",{id:"streamloadbrokerloadroutineload"},"StreamLoad/BrokerLoad/RoutineLoad"),(0,a.yg)("p",null,"\u5982\u679c\u4f7f\u7528\u7684\u662fStreamLoad/BrokerLoad/RoutineLoad\uff0c\u5728\u5bfc\u5165\u65f6\u6dfb\u52a0\u5982\u4e0bheader"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"partial_columns:true\n")),(0,a.yg)("p",null,"\u540c\u65f6\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"columns"),"\u4e2d\u6307\u5b9a\u8981\u5bfc\u5165\u7684\u5217\uff08\u5fc5\u987b\u5305\u542b\u6240\u6709key\u5217\uff0c\u4e0d\u7136\u65e0\u6cd5\u66f4\u65b0\uff09"),(0,a.yg)("h4",{id:"flink-connector"},"Flink Connector"),(0,a.yg)("p",null,"\u5982\u679c\u4f7f\u7528Flink Connector, \u9700\u8981\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"'sink.properties.partial_columns' = 'true',\n")),(0,a.yg)("p",null,"\u540c\u65f6\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"sink.properties.column"),"\u4e2d\u6307\u5b9a\u8981\u5bfc\u5165\u7684\u5217\uff08\u5fc5\u987b\u5305\u542b\u6240\u6709key\u5217\uff0c\u4e0d\u7136\u65e0\u6cd5\u66f4\u65b0\uff09"),(0,a.yg)("h4",{id:"insert-into"},"INSERT INTO"),(0,a.yg)("p",null,"\u5728\u6240\u6709\u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," \u7ed9\u5b9a\u4e00\u90e8\u5206\u5217\u65f6\u9ed8\u8ba4\u884c\u4e3a\u90fd\u662f\u6574\u884c\u5199\u5165\uff0c\u4e3a\u4e86\u9632\u6b62\u8bef\u7528\uff0c\u5728Merge-on-Write\u5b9e\u73b0\u4e2d\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),"\u9ed8\u8ba4\u4ecd\u7136\u4fdd\u6301\u6574\u884cUPSERT\u7684\u8bed\u610f\uff0c\u5982\u679c\u9700\u8981\u5f00\u542f\u90e8\u5206\u5217\u66f4\u65b0\u7684\u8bed\u610f\uff0c\u9700\u8981\u8bbe\u7f6e\u5982\u4e0b session variable"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set enable_unique_key_partial_update=true\n")),(0,a.yg)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u63a7\u5236insert\u8bed\u53e5\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\u7684\u4f1a\u8bdd\u53d8\u91cf",(0,a.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),"\u7684\u9ed8\u8ba4\u503c\u4e3atrue\uff0c\u5373insert\u8bed\u53e5\u9ed8\u8ba4\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u800c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u4e0d\u5141\u8bb8\u66f4\u65b0\u4e0d\u5b58\u5728\u7684key\u3002\u6240\u4ee5\uff0c\u5728\u4f7f\u7528insert\u8bed\u53e5\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u7684\u65f6\u5019\u5982\u679c\u5e0c\u671b\u80fd\u63d2\u5165\u4e0d\u5b58\u5728\u7684key\uff0c\u9700\u8981\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"enable_unique_key_partial_update"),"\u8bbe\u7f6e\u4e3atrue\u7684\u57fa\u7840\u4e0a\u540c\u65f6\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),"\u8bbe\u7f6e\u4e3afalse\u3002"),(0,a.yg)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("p",null,"\u5047\u8bbe Doris \u4e2d\u5b58\u5728\u4e00\u5f20\u8ba2\u5355\u8868order_tbl\uff0c\u5176\u4e2d \u8ba2\u5355id \u662f Key \u5217\uff0c\u8ba2\u5355\u72b6\u6001\uff0c\u8ba2\u5355\u91d1\u989d\u662f Value \u5217\u3002\u6570\u636e\u72b6\u6001\u5982\u4e0b\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u8ba2\u5355id"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8ba2\u5355\u91d1\u989d"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8ba2\u5355\u72b6\u6001"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"100"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f85\u4ed8\u6b3e")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | \u5f85\u4ed8\u6b3e        |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"\u8fd9\u65f6\u5019\uff0c\u7528\u6237\u70b9\u51fb\u4ed8\u6b3e\u540e\uff0cDoris \u7cfb\u7edf\u9700\u8981\u5c06\u8ba2\u5355id \u4e3a '1' \u7684\u8ba2\u5355\u72b6\u6001\u53d8\u66f4\u4e3a '\u5f85\u53d1\u8d27'\u3002"),(0,a.yg)("p",null,"\u82e5\u4f7f\u7528StreamLoad\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'$cat update.csv\n1,\u5f85\u53d1\u8d27\n\n$ curl  --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:48037/api/db1/order_tbl/_stream_load\n')),(0,a.yg)("p",null,"\u82e5\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"INSRT INTO"),"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) values (1,'\u5f85\u53d1\u8d27');\n")),(0,a.yg)("p",null,"\u66f4\u65b0\u540e\u7ed3\u679c\u5982\u4e0b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | \u5f85\u53d1\u8d27        |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("h3",{id:"aggregate-key\u6a21\u578b-3"},"Aggregate Key\u6a21\u578b"),(0,a.yg)("h4",{id:"\u5efa\u8868-1"},"\u5efa\u8868"),(0,a.yg)("p",null,"\u5c06\u9700\u8981\u8fdb\u884c\u5217\u66f4\u65b0\u7684\u5b57\u6bb5\u5bf9\u5e94\u7684\u805a\u5408\u51fd\u6570\u8bbe\u7f6e\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE `order_tbl` (\n  `order_id` int(11) NULL,\n  `order_amount` int(11) REPLACE_IF_NOT_NULL NULL,\n  `order_status` varchar(100) REPLACE_IF_NOT_NULL NULL\n) ENGINE=OLAP\nAGGREGATE KEY(`order_id`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`order_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,a.yg)("h4",{id:"\u6570\u636e\u5199\u5165"},"\u6570\u636e\u5199\u5165"),(0,a.yg)("p",null,"\u65e0\u8bba\u662f\u5bfc\u5165\u4efb\u52a1\u8fd8\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),", \u76f4\u63a5\u5199\u5165\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\u7684\u6570\u636e\u5373\u53ef"),(0,a.yg)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,a.yg)("p",null,"\u4e0e\u524d\u9762\u4f8b\u5b50\u76f8\u540c\uff0c\u5bf9\u5e94\u7684Stream Load\u547d\u4ee4\u4e3a\uff08\u4e0d\u9700\u8981\u989d\u5916\u7684header\uff09\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl  --location-trusted -u root: -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:48037/api/db1/order_tbl/_stream_load\n')),(0,a.yg)("p",null,"\u5bf9\u5e94\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),"\u8bed\u53e5\u4e3a\uff08\u4e0d\u9700\u8981\u989d\u5916\u8bbe\u7f6esession variable\uff09\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"INSERT INTO order_tbl (order_id, order_status) values (1,'\u5f85\u53d1\u8d27');\n")),(0,a.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.yg)("h3",{id:"unique-key\u6a21\u578bmerge-on-write\u5b9e\u73b0-1"},"Unique Key\u6a21\u578bMerge-on-Write\u5b9e\u73b0"),(0,a.yg)("p",null,"\u57282.0\u7248\u672c\u4e2d\uff0c\u540c\u4e00\u6279\u6b21\u6570\u636e\u5199\u5165\u4efb\u52a1\uff08\u65e0\u8bba\u662f\u5bfc\u5165\u4efb\u52a1\u8fd8\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),"\uff09\u7684\u6240\u6709\u884c\u53ea\u80fd\u66f4\u65b0\u76f8\u540c\u7684\u5217\uff0c\u5982\u679c\u9700\u8981\u66f4\u65b0\u4e0d\u540c\u5217\u7684\u6570\u636e\uff0c\u5219\u9700\u8981\u5206\u4e0d\u540c\u7684\u6279\u6b21\u8fdb\u884c\u5199\u5165"),(0,a.yg)("p",null,"\u57282.1\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06\u652f\u6301\u7075\u6d3b\u7684\u5217\u66f4\u65b0\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u540c\u4e00\u6279\u5bfc\u5165\u4e2d\uff0c\u6bcf\u4e00\u884c\u66f4\u65b0\u4e0d\u540c\u7684\u5217"),(0,a.yg)("h3",{id:"aggregate-key\u6a21\u578b-4"},"Aggregate Key\u6a21\u578b"),(0,a.yg)("p",null,"\u7528\u6237\u65e0\u6cd5\u901a\u8fc7\u5c06\u67d0\u4e2a\u5b57\u6bb5\u7531\u975eNULL\u8bbe\u7f6e\u4e3aNULL\uff0c\u5199\u5165\u7684NULL\u503c\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),"\u805a\u5408\u51fd\u6570\u7684\u5904\u7406\u4e2d\u4f1a\u81ea\u52a8\u5ffd\u7565"))}d.isMDXComponent=!0}}]);