"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12522],{15680:(e,a,n)=>{n.d(a,{xA:()=>N,yg:()=>s});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=t.createContext({}),y=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},N=function(e){var a=y(e.components);return t.createElement(m.Provider,{value:a},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,N=i(e,["components","mdxType","originalType","parentName"]),o=y(n),u=l,s=o["".concat(m,".").concat(u)]||o[u]||g[u]||r;return n?t.createElement(s,p(p({ref:a},N),{},{components:n})):t.createElement(s,p({ref:a},N))}));function s(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=u;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[o]="string"==typeof e?e:l,p[1]=i;for(var y=2;y<r;y++)p[y]=n[y];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},318998:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var t=n(58168),l=(n(296540),n(15680));const r={title:"Job \u8c03\u5ea6",language:"zh-CN"},p=void 0,i={unversionedId:"admin-manual/query-admin/job",id:"version-2.0/admin-manual/query-admin/job",title:"Job \u8c03\u5ea6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/query-admin/job.md",sourceDirName:"admin-manual/query-admin",slug:"/admin-manual/query-admin/job",permalink:"/zh-CN/docs/2.0/admin-manual/query-admin/job",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Job \u8c03\u5ea6",language:"zh-CN"}},m={},y=[{value:"\u6743\u9650",id:"\u6743\u9650",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u4e3e\u4f8b",id:"\u4e3e\u4f8b",level:2},{value:"INSERT JOB",id:"insert-job",level:2},{value:"CONFIG",id:"config",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],N={toc:y},o="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(o,(0,t.A)({},N,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Doris Job \u662f\u6839\u636e\u65e2\u5b9a\u8ba1\u5212\u8fd0\u884c\u7684\u4efb\u52a1\uff0c\u7528\u4e8e\u5728\u7279\u5b9a\u65f6\u95f4\u6216\u6307\u5b9a\u65f6\u95f4\u95f4\u9694\u89e6\u53d1\u9884\u5b9a\u4e49\u7684\u64cd\u4f5c\uff0c\u4ece\u800c\u5e2e\u52a9\u6211\u4eec\u81ea\u52a8\u6267\u884c\u4e00\u4e9b\u4efb\u52a1\u3002\u4ece\u529f\u80fd\u4e0a\u6765\u8bb2\uff0c\u5b83\u7c7b\u4f3c\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684 \u5b9a\u65f6\u4efb\u52a1\uff08\u5982\uff1aLinux \u4e2d\u7684 cron\u3001Windows \u4e2d\u7684\u8ba1\u5212\u4efb\u52a1\uff09\u3002"),(0,l.yg)("p",null,"Job \u6709\u4e24\u79cd\u7c7b\u578b\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"ONE_TIME")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"RECURRING"),"\u3002\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"ONE_TIME")," \u7c7b\u578b\u7684 Job \u4f1a\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u70b9\u89e6\u53d1\uff0c\u5b83\u4e3b\u8981\u7528\u4e8e\u4e00\u6b21\u6027\u4efb\u52a1\uff0c\u800c ",(0,l.yg)("inlineCode",{parentName:"p"},"RECURRING")," \u7c7b\u578b\u7684 Job \u4f1a\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5185\u5faa\u73af\u89e6\u53d1\uff0c\u6b64\u65b9\u5f0f\u4e3b\u8981\u7528\u4e8e\u5468\u671f\u6027\u6267\u884c\u7684\u4efb\u52a1\u3002 ",(0,l.yg)("inlineCode",{parentName:"p"},"RECURRING")," \u7c7b\u578b\u7684 Job \u53ef\u6307\u5b9a\u5f00\u59cb\u65f6\u95f4\uff0c\u7ed3\u675f\u65f6\u95f4\uff0c\u5373 ",(0,l.yg)("inlineCode",{parentName:"p"},"STARTS\\ENDS"),", \u5982\u679c\u4e0d\u6307\u5b9a\u5f00\u59cb\u65f6\u95f4\uff0c\u5219\u9ed8\u8ba4\u9996\u6b21\u6267\u884c\u65f6\u95f4\u4e3a\u5f53\u524d\u65f6\u95f4 + \u4e00\u6b21\u8c03\u5ea6\u5468\u671f\u3002\u5982\u679c\u6307\u5b9a\u7ed3\u675f\u65f6\u95f4\uff0c\u5219 task \u6267\u884c\u5b8c\u6210\u5982\u679c\u8fbe\u5230\u7ed3\u675f\u65f6\u95f4\uff08\u6216\u8d85\u8fc7\uff0c\u6216\u4e0b\u6b21\u6267\u884c\u5468\u671f\u4f1a\u8d85\u8fc7\u7ed3\u675f\u65f6\u95f4\uff09\u5219\u66f4\u65b0\u4e3a FINISHED \u72b6\u6001\uff0c\u6b64\u65f6\u4e0d\u4f1a\u518d\u4ea7\u751f Task\u3002"),(0,l.yg)("p",null,"JOB \u5171 4 \u79cd\u72b6\u6001\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"RUNNING"),",",(0,l.yg)("inlineCode",{parentName:"p"},"STOPPED"),",",(0,l.yg)("inlineCode",{parentName:"p"},"PAUSED"),",",(0,l.yg)("inlineCode",{parentName:"p"},"FINISHED"),",\uff09\uff0c\u521d\u59cb\u72b6\u6001\u4e3a RUNNING\uff0cRUNNING \u72b6\u6001\u7684 JOB \u4f1a\u6839\u636e\u65e2\u5b9a\u7684\u8c03\u5ea6\u5468\u671f\u53bb\u751f\u6210 TASK \u6267\u884c\uff0cJob \u6267\u884c\u5b8c\u6210\u8fbe\u5230\u7ed3\u675f\u65f6\u95f4\u5219\u72b6\u6001\u53d8\u66f4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"FINISHED"),"."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"RUNNING \u72b6\u6001\u7684 JOB \u53ef\u4ee5\u88ab pause\uff0c\u5373\u6682\u505c\uff0c\u6b64\u65f6\u4e0d\u4f1a\u518d\u751f\u6210 Task\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PAUSE \u72b6\u6001\u7684 JOB \u53ef\u4ee5\u901a\u8fc7 RESUME \u64cd\u4f5c\u6765\u6062\u590d\u8fd0\u884c\uff0c\u66f4\u6539\u4e3a RUNNING \u72b6\u6001\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"STOP \u72b6\u6001\u7684 JOB \u7531\u7528\u6237\u4e3b\u52a8\u89e6\u53d1\uff0c\u6b64\u65f6\u4f1a Cancel \u6b63\u5728\u8fd0\u884c\u4e2d\u7684\u4f5c\u4e1a\uff0c\u7136\u540e\u5220\u9664 JOB\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Finished \u72b6\u6001\u7684 JOB \u4f1a\u4fdd\u7559\u5728\u7cfb\u7edf\u4e2d 24 H\uff0c24H \u540e\u4f1a\u88ab\u5220\u9664\u3002"))),(0,l.yg)("p",null,"JOB \u53ea\u63cf\u8ff0\u4f5c\u4e1a\u4fe1\u606f\uff0c\u6267\u884c\u4f1a\u751f\u6210 TASK\uff0cTASK \u72b6\u6001\u5206\u4e3a PENDING\uff0cRUNNING\uff0cSUCCEESS,FAILED,CANCELED\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PENDING \u8868\u793a\u5230\u8fbe\u89e6\u53d1\u65f6\u95f4\u4e86\u4f46\u662f\u7b49\u5f85\u8d44\u6e90")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5206\u914d\u5230\u8d44\u6e90\u540e\u72b6\u6001\u53d8\u66f4\u4e3a RUNNING ")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u6267\u884c\u6210\u529f/\u5931\u8d25\u5373\u53d8\u66f4\u4e3a SUCCESS/FAILED")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"CANCELED \u5373\u53d6\u6d88\u72b6\u6001")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"TASK \u6301\u4e45\u5316\u6700\u7ec8 SUCCESS/FAILED \u8fd9\u4e24\u4e2a\u72b6\u6001\uff0c\u5176\u4ed6\u72b6\u6001\u8fd0\u884c\u4e2d\u53ef\u4ee5\u67e5\u5230\uff0c\u4f46\u662f\u5982\u679c\u91cd\u542f\u5219\u4e0d\u53ef\u89c1")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"TASK \u53ea\u4fdd\u7559\u6700\u65b0\u7684 100 \u6761\u8bb0\u5f55"))),(0,l.yg)("h2",{id:"\u6743\u9650"},"\u6743\u9650"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u76ee\u524d\u4ec5\u652f\u6301 ",(0,l.yg)("em",{parentName:"li"},"ADMIN")," \u6743\u9650\u6267\u884c\u6b64\u64cd\u4f5c\u3002")),(0,l.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE\n    JOB\n    job_name\n    ON SCHEDULE schedule\n    [COMMENT 'string']\n    DO sql_body;\n\nschedule: {\n   AT timestamp \n   | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\n\ninterval:\n    quantity { WEEK | DAY | HOUR | MINUTE }\n")),(0,l.yg)("p",null,"\u4e00\u6761\u6709\u6548\u7684 Job \u8bed\u53e5\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5173\u952e\u5b57 CREATE JOB \u52a0\u4e0a\u4f5c\u4e1a\u540d\u79f0\uff0c\u5b83\u5728\u4e00\u4e2a db \u4e2d\u6807\u8bc6\u552f\u4e00\u4e8b\u4ef6\u3002JOB \u540d\u79f0\u5fc5\u987b\u662f\u5168\u5c40\u552f\u4e00\u7684\uff0c\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u540c\u540d\u7684 JOB\uff0c\u5219\u4f1a\u62a5\u9519\u3002\u6211\u4eec\u4fdd\u7559\u4e86 ",(0,l.yg)("em",{parentName:"p"},"inner_")," \u524d\u7f00\u5728\u7cfb\u7edf\u5185\u90e8\u4f7f\u7528\uff0c\u56e0\u6b64\u7528\u6237\u4e0d\u80fd\u521b\u5efa\u4ee5 ",(0,l.yg)("em",{parentName:"p"},"inner_")," \u5f00\u5934\u7684\u540d\u79f0\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"ON SCHEDULE \u5b50\u53e5\uff0c\u5b83\u6307\u5b9a\u4e86 Job \u4f5c\u4e1a\u7684\u7c7b\u578b\u548c\u89e6\u53d1\u65f6\u95f4\u4ee5\u53ca\u9891\u7387\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"DO \u5b50\u53e5\uff0c\u5b83\u6307\u5b9a\u4e86 Job \u4f5c\u4e1a\u89e6\u53d1\u65f6\u9700\u8981\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u5373\u4e00\u6761 SQL \u8bed\u53e5\u3002"))),(0,l.yg)("h2",{id:"\u4e3e\u4f8b"},"\u4e3e\u4f8b"),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u8868\u793a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a my_job \u7684\u4f5c\u4e1a\uff0c\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,l.yg)("p",null,"SCHEDULE \u8bed\u53e5\u7528\u4e8e\u5b9a\u4e49\u4f5c\u4e1a\u7684\u6267\u884c\u65f6\u95f4\uff0c\u9891\u7387\u4ee5\u53ca\u6301\u7eed\u65f6\u95f4\uff0c\u5b83\u53ef\u4ee5\u6307\u5b9a\u4e00\u6b21\u6027\u4f5c\u4e1a\u6216\u8005\u5468\u671f\u6027\u4f5c\u4e1a\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"AT timestamp")),(0,l.yg)("p",{parentName:"li"},"  \u683c\u5f0f\uff1a'YYYY-MM-DD HH:MM:SS', \u7528\u4e8e\u4e00\u6b21\u6027\u4e8b\u4ef6\uff0c\u5b83\u6307\u5b9a\u4e8b\u4ef6\u4ec5\u5728 \u7ed9\u5b9a\u7684\u65e5\u671f\u548c\u65f6\u95f4\u6267\u884c\u4e00\u6b21 timestamp\uff0c\u5f53\u6267\u884c\u5b8c\u6210\u540e\uff0cJOB \u72b6\u6001\u4f1a\u53d8\u66f4\u4e3a FINISHED\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"EVERY")),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Interval")),(0,l.yg)("p",{parentName:"li"},"\u8868\u793a\u5b9a\u671f\u91cd\u590d\u64cd\u4f5c\uff0c\u5b83\u6307\u5b9a\u4e86\u4f5c\u4e1a\u7684\u6267\u884c\u9891\u7387\uff0c\u5173\u952e\u5b57\u540e\u9762\u8981\u6307\u5b9a\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694\uff0c\u8be5\u65f6\u95f4\u95f4\u9694\u53ef\u4ee5\u662f\u5468\u3001\u5929\u3001\u5c0f\u65f6\u3001\u5206\u949f\u3001\u79d2\u3002\u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"p"}," 1 DAY")," \u8868\u793a\u6bcf\u5929\u6267\u884c\u4e00\u6b21\uff0c",(0,l.yg)("inlineCode",{parentName:"p"}," 1 HOUR")," \u8868\u793a\u6bcf\u5c0f\u65f6\u6267\u884c\u4e00\u6b21\uff0c",(0,l.yg)("inlineCode",{parentName:"p"}," 1 MINUTE")," \u8868\u793a\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21\uff0c",(0,l.yg)("inlineCode",{parentName:"p"}," 1 WEEK")," \u8868\u793a\u6bcf\u5468\u6267\u884c\u4e00\u6b21\u3002"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"STARTS timestamp\uff08\u53ef\u9009\u5b57\u6bb5\uff09"))),(0,l.yg)("p",{parentName:"li"},"\u683c\u5f0f\uff1a'YYYY-MM-DD HH:MM:SS',\u7528\u4e8e\u6307\u5b9a\u4f5c\u4e1a\u7684\u5f00\u59cb\u65f6\u95f4\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4ece\u5f53\u524d\u65f6\u95f4\u7684\u4e0b\u4e00\u4e2a\u65f6\u95f4\u70b9\u5f00\u59cb\u6267\u884c\u3002\u5f00\u59cb\u65f6\u95f4\u5fc5\u987b\u5927\u4e8e\u5f53\u524d\u65f6\u95f4\u3002"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"ENDS timestamp\uff08\u53ef\u9009\u5b57\u6bb5\uff09"))),(0,l.yg)("p",{parentName:"li"},"\u683c\u5f0f\uff1a'YYYY-MM-DD HH:MM:SS', \u7528\u4e8e\u6307\u5b9a\u4f5c\u4e1a\u7684\u7ed3\u675f\u65f6\u95f4\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u8868\u793a\u6c38\u4e45\u6267\u884c\u3002\u8be5\u65e5\u671f\u5fc5\u987b\u5927\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u5f00\u59cb\u65f6\u95f4\uff0c\u5373 ",(0,l.yg)("inlineCode",{parentName:"p"},"STARTS"),"\uff0c\u5219\u7ed3\u675f\u65f6\u95f4\u5fc5\u987b\u5927\u4e8e\u5f00\u59cb\u65f6\u95f4\u3002")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"DO")),(0,l.yg)("p",{parentName:"li"},"  \u7528\u4e8e\u6307\u5b9a\u4f5c\u4e1a\u89e6\u53d1\u65f6\u9700\u8981\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u76ee\u524d\u4ec5\u652f\u6301 ",(0,l.yg)("em",{parentName:"p"},"INSERT \u5185\u8868")," \u64cd\u4f5c\u3002\u540e\u7eed\u6211\u4eec\u4f1a\u652f\u6301\u66f4\u591a\u7684\u64cd\u4f5c\u3002"),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4e00\u6b21\u6027\u7684 Job\uff0c\u5b83\u4f1a\u5728 2020-01-01 00:00:00 \u65f6\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE JOB my_job ON SCHEDULE AT '2020-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5468\u671f\u6027\u7684 Job\uff0c\u5b83\u4f1a\u5728 2020-01-01 00:00:00 \u65f6\u5f00\u59cb\u6267\u884c\uff0c\u6bcf\u5929\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2020-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE  create_time =  days_add(now(),-1);\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5468\u671f\u6027\u7684 Job\uff0c\u5b83\u4f1a\u5728 2020-01-01 00:00:00 \u65f6\u5f00\u59cb\u6267\u884c\uff0c\u6bcf\u5929\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\uff0c\u8be5 Job \u5728 2020-01-01 00:10:00 \u65f6\u7ed3\u675f\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2020-01-01 00:00:00' ENDS '2020-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 create_time =  days_add(now(),-1);\n")))))),(0,l.yg)("h2",{id:"insert-job"},"INSERT JOB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u76ee\u524d\u4ec5\u652f\u6301 ",(0,l.yg)("em",{parentName:"p"},"INSERT \u5185\u8868"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5f53\u4e0b\u4e00\u4e2a\u8ba1\u5212\u4efb\u52a1\u65f6\u95f4\u5230\u671f\uff0c\u5373\u9700\u8981\u8c03\u5ea6\u4efb\u52a1\u6267\u884c\u65f6\uff0c\u5982\u679c\u5f53\u524d JOB \u4ecd\u6709\u5386\u53f2\u4efb\u52a1\u6b63\u5728\u6267\u884c\uff0c\u5219\u4f1a\u8df3\u8fc7\u5f53\u524d\u4efb\u52a1\u8c03\u5ea6\u3002\u56e0\u6b64\u63a7\u5236\u4e00\u4e2a\u5408\u7406\u7684\u6267\u884c\u95f4\u9694\u975e\u5e38\u91cd\u8981\u3002"))),(0,l.yg)("h2",{id:"config"},"CONFIG"),(0,l.yg)("p",null,"fe.conf"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"job_dispatch_timer_job_thread_num, \u7528\u4e8e\u5206\u53d1\u5b9a\u65f6\u4efb\u52a1\u7684\u7ebf\u7a0b\u6570\uff0c\u9ed8\u8ba4\u503c 2\uff0c\u5982\u679c\u542b\u6709\u5927\u91cf\u5468\u671f\u6267\u884c\u4efb\u52a1\uff0c\u53ef\u4ee5\u8c03\u5927\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"job_dispatch_timer_job_queue_size, \u4efb\u52a1\u5806\u79ef\u65f6\u7528\u4e8e\u5b58\u653e\u5b9a\u65f6\u4efb\u52a1\u7684\u961f\u5217\u5927\u5c0f\uff0c\u9ed8\u8ba4\u503c 1024. \u5982\u679c\u6709\u5927\u91cf\u4efb\u52a1\u540c\u4e00\u65f6\u95f4\u89e6\u53d1\uff0c\u53ef\u4ee5\u8c03\u5927\u8fd9\u4e2a\u53c2\u6570\u3002\u5426\u5219\u4f1a\u5bfc\u81f4\u961f\u5217\u6ee1\uff0c\u63d0\u4ea4\u4efb\u52a1\u4f1a\u8fdb\u5165\u963b\u585e\u72b6\u6001\uff0c\u4ece\u800c\u5bfc\u81f4\u540e\u7eed\u4efb\u52a1\u65e0\u6cd5\u63d0\u4ea4\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"finished_job_cleanup_threshold_time_hour, \u7528\u4e8e\u6e05\u7406\u5df2\u5b8c\u6210\u7684\u4efb\u52a1\u7684\u65f6\u95f4\u9608\u503c\uff0c\u5355\u4f4d\u4e3a\u5c0f\u65f6\uff0c\u9ed8\u8ba4\u503c\u4e3a 24 \u5c0f\u65f6\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"job_insert_task_consumer_thread_num = 10;\u7528\u4e8e\u6267\u884c Insert \u4efb\u52a1\u7684\u7ebf\u7a0b\u6570\uff0c\u503c\u5e94\u8be5\u5927\u4e8e 0\uff0c\u5426\u5219\u9ed8\u8ba4\u4e3a 5."))),(0,l.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5408\u7406\u7684\u8fdb\u884c Job \u7684\u7ba1\u7406\uff0c\u907f\u514d\u5927\u91cf\u7684 Job \u540c\u65f6\u89e6\u53d1\uff0c\u5bfc\u81f4\u4efb\u52a1\u5806\u79ef\uff0c\u4ece\u800c\u5f71\u54cd\u7cfb\u7edf\u7684\u6b63\u5e38\u8fd0\u884c\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4efb\u52a1\u7684\u6267\u884c\u95f4\u9694\u5e94\u8be5\u8bbe\u7f6e\u5728\u4e00\u4e2a\u5408\u7406\u7684\u8303\u56f4\uff0c\u81f3\u5c11\u5e94\u8be5\u5927\u4e8e\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u3002"))),(0,l.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,l.yg)("p",null,"\u5176\u4ed6\u76f8\u5173\u64cd\u4f5c\uff0c\u67e5\u770b SQL \u624b\u518c ",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Alter/PAUSE-JOB"},"PAUSE-JOB"),",",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Alter/RESUME-JOB"},"RESUME-JOB"),",",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-JOB"},"DROP-JOB"),", ",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/table-functions/job"},"TVF-JOB"),","),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/table-functions/tasks"},"TVF-TASKS"),"\u3002"))}g.isMDXComponent=!0}}]);