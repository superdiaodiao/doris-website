"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68382],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=m(a),s=l,u=y["".concat(o,".").concat(s)]||y[s]||g[s]||r;return a?n.createElement(u,p(p({ref:t},d),{},{components:a})):n.createElement(u,p({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[y]="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},60641:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(58168),l=(a(96540),a(15680));const r={title:"Delete \u64cd\u4f5c",language:"zh-CN"},p=void 0,i={unversionedId:"data-operate/update-delete/delete-manual",id:"version-2.0/data-operate/update-delete/delete-manual",title:"Delete \u64cd\u4f5c",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-operate/update-delete/delete-manual.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/delete-manual",permalink:"/zh-CN/docs/data-operate/update-delete/delete-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Delete \u64cd\u4f5c",language:"zh-CN"},sidebar:"docs",previous:{title:"\u90e8\u5206\u5217\u66f4\u65b0",permalink:"/zh-CN/docs/data-operate/update-delete/partial-update"},next:{title:"Sequence \u5217",permalink:"/zh-CN/docs/data-operate/update-delete/sequence-column-manual"}},o={},m=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:2},{value:"Delete\u64cd\u4f5c\u76f8\u5173FE\u914d\u7f6e",id:"delete\u64cd\u4f5c\u76f8\u5173fe\u914d\u7f6e",level:2},{value:"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55",id:"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],d={toc:m},y="wrapper";function g(e){let{components:t,...a}=e;return(0,l.yg)(y,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"delete-\u64cd\u4f5c"},"Delete \u64cd\u4f5c"),(0,l.yg)("p",null,"Delete\u4e0d\u540c\u4e8e\u5176\u4ed6\u5bfc\u5165\u65b9\u5f0f\uff0c\u5b83\u662f\u4e00\u4e2a\u540c\u6b65\u8fc7\u7a0b\uff0c\u4e0eInsert into\u76f8\u4f3c\uff0c\u6240\u6709\u7684Delete\u64cd\u4f5c\u5728Doris\u4e2d\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bfc\u5165\u4f5c\u4e1a\uff0c\u4e00\u822cDelete\u8bed\u53e5\u9700\u8981\u6307\u5b9a\u8868\u548c\u5206\u533a\u4ee5\u53ca\u5220\u9664\u7684\u6761\u4ef6\u6765\u7b5b\u9009\u8981\u5220\u9664\u7684\u6570\u636e\uff0c\u5e76\u5c06\u4f1a\u540c\u65f6\u5220\u9664base\u8868\u548crollup\u8868\u7684\u6570\u636e\u3002"),(0,l.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.yg)("p",null,"delete\u64cd\u4f5c\u7684\u8bed\u6cd5\u8be6\u89c1\u5b98\u7f51 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},"DELETE")," \u8bed\u6cd5\u3002"),(0,l.yg)("h2",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,l.yg)("p",null,"Delete\u547d\u4ee4\u662f\u4e00\u4e2aSQL\u547d\u4ee4\uff0c\u8fd4\u56de\u7ed3\u679c\u662f\u540c\u6b65\u7684\uff0c\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6267\u884c\u6210\u529f"),(0,l.yg)("p",{parentName:"li"},"\u5982\u679cDelete\u987a\u5229\u6267\u884c\u5b8c\u6210\u5e76\u53ef\u89c1\uff0c\u5c06\u8fd4\u56de\u4e0b\u5217\u7ed3\u679c\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"Query OK"),"\u8868\u793a\u6210\u529f"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u63d0\u4ea4\u6210\u529f\uff0c\u4f46\u672a\u53ef\u89c1"),(0,l.yg)("p",{parentName:"li"},"Doris\u7684\u4e8b\u52a1\u63d0\u4ea4\u5206\u4e3a\u4e24\u6b65\uff1a\u63d0\u4ea4\u548c\u53d1\u5e03\u7248\u672c\uff0c\u53ea\u6709\u5b8c\u6210\u4e86\u53d1\u5e03\u7248\u672c\u6b65\u9aa4\uff0c\u7ed3\u679c\u624d\u5bf9\u7528\u6237\u662f\u53ef\u89c1\u7684\u3002\u82e5\u5df2\u7ecf\u63d0\u4ea4\u6210\u529f\u4e86\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u8ba4\u4e3a\u6700\u7ec8\u4e00\u5b9a\u4f1a\u53d1\u5e03\u6210\u529f\uff0cDoris\u4f1a\u5c1d\u8bd5\u5728\u63d0\u4ea4\u5b8c\u540e\u7b49\u5f85\u53d1\u5e03\u4e00\u6bb5\u65f6\u95f4\uff0c\u5982\u679c\u8d85\u65f6\u540e\u5373\u4f7f\u53d1\u5e03\u7248\u672c\u8fd8\u672a\u5b8c\u6210\u4e5f\u4f1a\u4f18\u5148\u8fd4\u56de\u7ed9\u7528\u6237\uff0c\u63d0\u793a\u7528\u6237\u63d0\u4ea4\u5df2\u7ecf\u5b8c\u6210\u3002\u82e5\u5982\u679cDelete\u5df2\u7ecf\u63d0\u4ea4\u5e76\u6267\u884c\uff0c\u4f46\u662f\u4ecd\u672a\u53d1\u5e03\u7248\u672c\u548c\u53ef\u89c1\uff0c\u5c06\u8fd4\u56de\u4e0b\u5217\u7ed3\u679c"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n")),(0,l.yg)("p",{parentName:"li"},"\u7ed3\u679c\u4f1a\u540c\u65f6\u8fd4\u56de\u4e00\u4e2ajson\u5b57\u7b26\u4e32\uff1a"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"affected rows"),"\uff1a\u8868\u793a\u6b64\u6b21\u5220\u9664\u5f71\u54cd\u7684\u884c\uff0c\u7531\u4e8eDoris\u7684\u5220\u9664\u76ee\u524d\u662f\u903b\u8f91\u5220\u9664\uff0c\u56e0\u6b64\u5bf9\u4e8e\u8fd9\u4e2a\u503c\u662f\u6052\u4e3a0\uff1b"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"label"),"\uff1a\u81ea\u52a8\u751f\u6210\u7684 label\uff0c\u662f\u8be5\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u6bcf\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u90fd\u6709\u4e00\u4e2a\u5728\u5355 database \u5185\u90e8\u552f\u4e00\u7684 Label\uff1b"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"status"),"\uff1a\u8868\u793a\u6570\u636e\u5220\u9664\u662f\u5426\u53ef\u89c1\uff0c\u5982\u679c\u53ef\u89c1\u5219\u663e\u793a",(0,l.yg)("inlineCode",{parentName:"p"},"VISIBLE"),"\uff0c\u5982\u679c\u4e0d\u53ef\u89c1\u5219\u663e\u793a",(0,l.yg)("inlineCode",{parentName:"p"},"COMMITTED"),"\uff1b"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"txnId"),"\uff1a\u8fd9\u4e2aDelete job\u5bf9\u5e94\u7684\u4e8b\u52a1id\uff1b"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"err"),"\uff1a\u5b57\u6bb5\u4f1a\u663e\u793a\u4e00\u4e9b\u672c\u6b21\u5220\u9664\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u63d0\u4ea4\u5931\u8d25\uff0c\u4e8b\u52a1\u53d6\u6d88"),(0,l.yg)("p",{parentName:"li"},"\u5982\u679cDelete\u8bed\u53e5\u6ca1\u6709\u63d0\u4ea4\u6210\u529f\uff0c\u5c06\u4f1a\u88abDoris\u81ea\u52a8\u4e2d\u6b62\uff0c\u8fd4\u56de\u4e0b\u5217\u7ed3\u679c"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {\u9519\u8bef\u539f\u56e0}\n")),(0,l.yg)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,l.yg)("p",{parentName:"li"},"\u6bd4\u5982\u8bf4\u4e00\u4e2a\u8d85\u65f6\u7684\u5220\u9664\uff0c\u5c06\u4f1a\u8fd4\u56detimeout\u65f6\u95f4\u548c\u672a\u5b8c\u6210\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"(tablet=replica)")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"\u7efc\u4e0a\uff0c\u5bf9\u4e8eDelete\u64cd\u4f5c\u8fd4\u56de\u7ed3\u679c\u7684\u6b63\u786e\u5904\u7406\u903b\u8f91\u4e3a\uff1a")),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"ERROR 1064 (HY000)"),"\uff0c\u5219\u8868\u793a\u5220\u9664\u5931\u8d25\uff1b"),(0,l.yg)("li",{parentName:"ol"},"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"Query OK"),"\uff0c\u5219\u8868\u793a\u5220\u9664\u6267\u884c\u6210\u529f\uff1b",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"li"},"status"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"COMMITTED"),"\uff0c\u8868\u793a\u6570\u636e\u4ecd\u4e0d\u53ef\u89c1\uff0c\u7528\u6237\u53ef\u4ee5\u7a0d\u7b49\u4e00\u6bb5\u65f6\u95f4\u518d\u7528",(0,l.yg)("inlineCode",{parentName:"li"},"show delete"),"\u547d\u4ee4\u67e5\u770b\u7ed3\u679c\uff1b"),(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"li"},"status"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"VISIBLE"),"\uff0c\u8868\u793a\u6570\u636e\u5220\u9664\u6210\u529f\u3002")))))),(0,l.yg)("h2",{id:"delete\u64cd\u4f5c\u76f8\u5173fe\u914d\u7f6e"},"Delete\u64cd\u4f5c\u76f8\u5173FE\u914d\u7f6e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"TIMEOUT\u914d\u7f6e")),(0,l.yg)("p",null,"\u603b\u4f53\u6765\u8bf4\uff0cDoris\u7684\u5220\u9664\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\u9650\u5236\u572830\u79d2\u52305\u5206\u949f\u65f6\u95f4\u5185\uff0c\u5177\u4f53\u65f6\u95f4\u53ef\u901a\u8fc7\u4e0b\u9762\u914d\u7f6e\u9879\u8c03\u6574"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"tablet_delete_timeout_second")),(0,l.yg)("p",{parentName:"li"},"delete\u81ea\u8eab\u7684\u8d85\u65f6\u65f6\u95f4\u662f\u53ef\u53d7\u6307\u5b9a\u5206\u533a\u4e0btablet\u7684\u6570\u91cf\u5f39\u6027\u6539\u53d8\u7684\uff0c\u6b64\u9879\u914d\u7f6e\u4e3a\u5e73\u5747\u4e00\u4e2atablet\u6240\u8d21\u732e\u7684timeout\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a2\u3002"),(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u6b64\u6b21\u5220\u9664\u6240\u6307\u5b9a\u5206\u533a\u4e0b\u67095\u4e2atablet\uff0c\u90a3\u4e48\u53ef\u63d0\u4f9b\u7ed9delete\u7684timeout\u65f6\u95f4\u4e3a10\u79d2\uff0c\u7531\u4e8e\u4f4e\u4e8e\u6700\u4f4e\u8d85\u65f6\u65f6\u95f430\u79d2\uff0c\u56e0\u6b64\u6700\u7ec8\u8d85\u65f6\u65f6\u95f4\u4e3a30\u79d2\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"load_straggler_wait_second")),(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u9884\u4f30\u7684\u6570\u636e\u91cf\u786e\u5b9e\u6bd4\u8f83\u5927\uff0c\u4f7f\u5f975\u5206\u949f\u7684\u4e0a\u9650\u4e0d\u8db3\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6b64\u9879\u8c03\u6574timeout\u4e0a\u9650\uff0c\u9ed8\u8ba4\u503c\u4e3a300\u3002"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"TIMEOUT\u7684\u5177\u4f53\u8ba1\u7b97\u89c4\u5219\u4e3a(\u79d2)")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"TIMEOUT = MIN(load_straggler_wait_second, MAX(30, tablet_delete_timeout_second * tablet_num))"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"query_timeout")),(0,l.yg)("p",{parentName:"li"},"\u56e0\u4e3adelete\u672c\u8eab\u662f\u4e00\u4e2aSQL\u547d\u4ee4\uff0c\u56e0\u6b64\u5220\u9664\u8bed\u53e5\u4e5f\u4f1a\u53d7session\u9650\u5236\uff0ctimeout\u8fd8\u53d7Session\u4e2d\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"query_timeout"),"\u503c\u5f71\u54cd\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,l.yg)("inlineCode",{parentName:"p"},"SET query_timeout = xxx"),"\u6765\u589e\u52a0\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"IN\u8c13\u8bcd\u914d\u7f6e")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"max_allowed_in_element_num_of_delete")),(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u5728\u4f7f\u7528in\u8c13\u8bcd\u65f6\u9700\u8981\u5360\u7528\u7684\u5143\u7d20\u6bd4\u8f83\u591a\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6b64\u9879\u8c03\u6574\u5141\u8bb8\u643a\u5e26\u7684\u5143\u7d20\u4e0a\u9650\uff0c\u9ed8\u8ba4\u503c\u4e3a1024\u3002"))),(0,l.yg)("h2",{id:"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55"},"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55"),(0,l.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7show delete\u8bed\u53e5\u67e5\u770b\u5386\u53f2\u4e0a\u5df2\u6267\u884c\u5b8c\u6210\u7684\u5220\u9664\u8bb0\u5f55\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DELETE [FROM db_name]\n")),(0,l.yg)("p",null,"\u4f7f\u7528\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n')),(0,l.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4e0d\u540c\u4e8e Insert into \u547d\u4ee4\uff0cdelete \u4e0d\u80fd\u624b\u52a8\u6307\u5b9a",(0,l.yg)("inlineCode",{parentName:"li"},"label"),"\uff0c\u6709\u5173 label \u7684\u6982\u5ff5\u53ef\u4ee5\u67e5\u770b",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual"},"Insert Into")," \u6587\u6863\u3002")),(0,l.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,l.yg)("p",null,"\u5173\u4e8e ",(0,l.yg)("strong",{parentName:"p"},"delete")," \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},"delete")," \u547d\u4ee4\u624b\u518c\uff0c\u4e5f\u53ef\u4ee5\u5728Mysql\u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,l.yg)("inlineCode",{parentName:"p"},"HELP DELETE")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}g.isMDXComponent=!0}}]);