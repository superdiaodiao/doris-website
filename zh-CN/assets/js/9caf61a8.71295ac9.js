"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84918],{15680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>d});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=t.createContext({}),m=function(e){var a=t.useContext(g),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},o=function(e){var a=m(e.components);return t.createElement(g.Provider,{value:a},e.children)},y="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},s=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),y=m(n),s=l,d=y["".concat(g,".").concat(s)]||y[s]||N[s]||r;return n?t.createElement(d,p(p({ref:a},o),{},{components:n})):t.createElement(d,p({ref:a},o))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=s;var i={};for(var g in a)hasOwnProperty.call(a,g)&&(i[g]=a[g]);i.originalType=e,i[y]="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=n[m];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},19396:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>p,default:()=>N,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var t=n(58168),l=(n(96540),n(15680));const r={title:"\u96c6\u7fa4\u5347\u7ea7",language:"zh-CN"},p=void 0,i={unversionedId:"admin-manual/cluster-management/upgrade",id:"version-2.0/admin-manual/cluster-management/upgrade",title:"\u96c6\u7fa4\u5347\u7ea7",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/cluster-management/upgrade.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/upgrade",permalink:"/zh-CN/docs/admin-manual/cluster-management/upgrade",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u96c6\u7fa4\u5347\u7ea7",language:"zh-CN"},sidebar:"docs",previous:{title:"CLEAN-QUERY-STATS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Utility-Statements/CLEAN-QUERY-STATS"},next:{title:"\u5f39\u6027\u6269\u7f29\u5bb9",permalink:"/zh-CN/docs/admin-manual/cluster-management/elastic-expansion"}},g={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Doris \u7248\u672c\u8bf4\u660e",id:"doris-\u7248\u672c\u8bf4\u660e",level:2},{value:"\u5347\u7ea7\u6b65\u9aa4",id:"\u5347\u7ea7\u6b65\u9aa4",level:2},{value:"\u5347\u7ea7\u8bf4\u660e",id:"\u5347\u7ea7\u8bf4\u660e",level:3},{value:"\u5347\u7ea7\u6d41\u7a0b\u6982\u89c8",id:"\u5347\u7ea7\u6d41\u7a0b\u6982\u89c8",level:3},{value:"\u5347\u7ea7\u524d\u7f6e\u5de5\u4f5c",id:"\u5347\u7ea7\u524d\u7f6e\u5de5\u4f5c",level:3},{value:"\u5143\u6570\u636e\u5907\u4efd\uff08\u91cd\u8981\uff09",id:"\u5143\u6570\u636e\u5907\u4efd\u91cd\u8981",level:4},{value:"\u5173\u95ed\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd",id:"\u5173\u95ed\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd",level:4},{value:"\u517c\u5bb9\u6027\u6d4b\u8bd5",id:"\u517c\u5bb9\u6027\u6d4b\u8bd5",level:4},{value:"FE \u517c\u5bb9\u6027\u6d4b\u8bd5",id:"fe-\u517c\u5bb9\u6027\u6d4b\u8bd5",level:5},{value:"BE \u517c\u5bb9\u6027\u6d4b\u8bd5",id:"be-\u517c\u5bb9\u6027\u6d4b\u8bd5",level:5},{value:"\u5347\u7ea7\u6d41\u7a0b",id:"\u5347\u7ea7\u6d41\u7a0b",level:3},{value:"\u5347\u7ea7 BE",id:"\u5347\u7ea7-be",level:4},{value:"\u5347\u7ea7 FE",id:"\u5347\u7ea7-fe",level:4},{value:"\u6253\u5f00\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd",id:"\u6253\u5f00\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd",level:4}],o={toc:m},y="wrapper";function N(e){let{components:a,...n}=e;return(0,l.yg)(y,(0,t.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u96c6\u7fa4\u5347\u7ea7"},"\u96c6\u7fa4\u5347\u7ea7"),(0,l.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.yg)("p",null,"\u5347\u7ea7\u8bf7\u4f7f\u7528\u672c\u7ae0\u8282\u4e2d\u63a8\u8350\u7684\u6b65\u9aa4\u8fdb\u884c\u96c6\u7fa4\u5347\u7ea7\uff0cDoris \u96c6\u7fa4\u5347\u7ea7\u53ef\u4f7f\u7528",(0,l.yg)("strong",{parentName:"p"},"\u6eda\u52a8\u5347\u7ea7"),"\u7684\u65b9\u5f0f\u8fdb\u884c\u5347\u7ea7\uff0c\u65e0\u9700\u96c6\u7fa4\u8282\u70b9\u5168\u90e8\u505c\u673a\u5347\u7ea7\uff0c\u6781\u5927\u7a0b\u5ea6\u4e0a\u964d\u4f4e\u5bf9\u4e0a\u5c42\u5e94\u7528\u7684\u5f71\u54cd\u3002"),(0,l.yg)("h2",{id:"doris-\u7248\u672c\u8bf4\u660e"},"Doris \u7248\u672c\u8bf4\u660e"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Doris \u5347\u7ea7\u8bf7\u9075\u5b88",(0,l.yg)("strong",{parentName:"p"},"\u4e0d\u8981\u8de8\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u5173\u952e\u8282\u70b9\u7248\u672c\u5347\u7ea7"),"\u7684\u539f\u5219\uff0c\u82e5\u8981\u8de8\u591a\u4e2a\u5173\u952e\u8282\u70b9\u7248\u672c\u5347\u7ea7\uff0c\u5148\u5347\u7ea7\u5230\u6700\u8fd1\u7684\u5173\u952e\u8282\u70b9\u7248\u672c\uff0c\u968f\u540e\u518d\u4f9d\u6b21\u5f80\u540e\u5347\u7ea7\uff0c\u82e5\u662f\u975e\u5173\u952e\u8282\u70b9\u7248\u672c\uff0c\u5219\u53ef\u5ffd\u7565\u8df3\u8fc7\u3002"),(0,l.yg)("p",{parentName:"admonition"},"\u5173\u952e\u8282\u70b9\u7248\u672c\uff1a\u5347\u7ea7\u65f6\u5fc5\u987b\u8981\u7ecf\u5386\u7684\u7248\u672c\uff0c\u53ef\u80fd\u662f\u5355\u72ec\u4e00\u4e2a\u7248\u672c\uff0c\u4e5f\u53ef\u80fd\u662f\u4e00\u4e2a\u7248\u672c\u533a\u95f4\uff0c\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"1.1.3 - 1.1.5"),"\uff0c\u5219\u8868\u793a\u5347\u7ea7\u81f3\u8be5\u533a\u95f4\u4efb\u610f\u4e00\u7248\u672c\u5373\u53ef\u7ee7\u7eed\u540e\u7eed\u5347\u7ea7\u3002")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u7248\u672c\u53f7"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5173\u952e\u8282\u70b9\u7248\u672c"),(0,l.yg)("th",{parentName:"tr",align:null},"LTS \u7248\u672c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0.12.x"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0.13.x"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0.14.x"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0.15.x"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.0.0 - 1.1.2"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.1.3 - 1.1.5"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1-LTS")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.2.0 - 1.2.5"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2-LTS")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2.0.0-alpha - 2.0.0-beta"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"2.0-LTS")))),(0,l.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,l.yg)("p",null,"\u5f53\u524d\u7248\u672c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"0.12"),"\uff0c\u5347\u7ea7\u5230 ",(0,l.yg)("inlineCode",{parentName:"p"},"2.0.0-beta")," \u7248\u672c\u7684\u5347\u7ea7\u8def\u7ebf"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"0.12")," -> ",(0,l.yg)("inlineCode",{parentName:"p"},"0.13")," -> ",(0,l.yg)("inlineCode",{parentName:"p"},"0.14")," -> ",(0,l.yg)("inlineCode",{parentName:"p"},"0.15")," -> ",(0,l.yg)("inlineCode",{parentName:"p"},"1.1.3 - 1.1.5")," \u4efb\u610f\u7248\u672c -> ",(0,l.yg)("inlineCode",{parentName:"p"},"1.2.0 - 1.2.5")," \u4efb\u610f\u7248\u672c -> ",(0,l.yg)("inlineCode",{parentName:"p"},"2.0.0-beta")),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"LTS \u7248\u672c\uff1aLong-time Support\uff0cLTS \u7248\u672c\u63d0\u4f9b\u957f\u671f\u652f\u6301\uff0c\u4f1a\u6301\u7eed\u7ef4\u62a4\u516d\u4e2a\u6708\u4ee5\u4e0a\uff0c\u901a\u5e38\u800c\u8a00\uff0c",(0,l.yg)("strong",{parentName:"p"},"\u7248\u672c\u53f7\u7b2c\u4e09\u4f4d\u6570\u8d8a\u5927\u7684\u7248\u672c\uff0c\u7a33\u5b9a\u6027\u8d8a\u597d"),"\u3002"),(0,l.yg)("p",{parentName:"admonition"},"Alpha \u7248\u672c\uff1a\u5185\u90e8\u6d4b\u8bd5\u7248\u672c\uff0c\u529f\u80fd\u8fd8\u672a\u5b8c\u5168\u786e\u5b9a\uff0c\u6216\u8bb8\u5b58\u5728\u91cd\u5927 BUG\uff0c\u53ea\u63a8\u8350\u4e0a\u6d4b\u8bd5\u96c6\u7fa4\u505a\u6d4b\u8bd5\uff0c",(0,l.yg)("strong",{parentName:"p"},"\u4e0d\u63a8\u8350\u4e0a\u751f\u4ea7\u96c6\u7fa4\uff01")),(0,l.yg)("p",{parentName:"admonition"},"Beta \u7248\u672c\uff1a\u516c\u5f00\u6d4b\u8bd5\u7248\u672c\uff0c\u529f\u80fd\u5df2\u57fa\u672c\u786e\u5b9a\uff0c\u6216\u8bb8\u5b58\u5728\u975e\u91cd\u5927 BUG\uff0c\u53ea\u63a8\u8350\u4e0a\u6d4b\u8bd5\u96c6\u7fa4\u505a\u6d4b\u8bd5\uff0c",(0,l.yg)("strong",{parentName:"p"},"\u4e0d\u63a8\u8350\u4e0a\u751f\u4ea7\u96c6\u7fa4\uff01")),(0,l.yg)("p",{parentName:"admonition"},"Release \u7248\u672c\uff1a\u516c\u5f00\u53d1\u884c\u7248\uff0c\u5df2\u5b8c\u6210\u57fa\u672c\u91cd\u8981 BUG \u7684\u4fee\u590d\u548c\u529f\u80fd\u6027\u7f3a\u9677\u4fee\u590d\u9a8c\u8bc1\uff0c\u63a8\u8350\u4e0a\u751f\u4ea7\u96c6\u7fa4\u3002")),(0,l.yg)("h2",{id:"\u5347\u7ea7\u6b65\u9aa4"},"\u5347\u7ea7\u6b65\u9aa4"),(0,l.yg)("h3",{id:"\u5347\u7ea7\u8bf4\u660e"},"\u5347\u7ea7\u8bf4\u660e"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\uff0c\u7531\u4e8e Doris \u7684 RoutineLoad\u3001Flink-Doris-Connector\u3001Spark-Doris-Connector \u90fd\u5df2\u5728\u4ee3\u7801\u4e2d\u5b9e\u73b0\u4e86\u91cd\u8bd5\u673a\u5236\uff0c\u6240\u4ee5\u5728\u591a BE \u8282\u70b9\u7684\u96c6\u7fa4\u4e2d\uff0c\u6eda\u52a8\u5347\u7ea7\u4e0d\u4f1a\u5bfc\u81f4\u4efb\u52a1\u5931\u8d25\u3002"),(0,l.yg)("li",{parentName:"ol"},"StreamLoad \u4efb\u52a1\u9700\u8981\u60a8\u5728\u81ea\u5df1\u7684\u4ee3\u7801\u4e2d\u5b9e\u73b0\u91cd\u8bd5\u673a\u5236\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u4efb\u52a1\u5931\u8d25\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd\u5728\u5355\u6b21\u5347\u7ea7\u4efb\u52a1\u4e2d\u52a1\u5fc5\u8981\u524d\u7f6e\u5173\u95ed\u548c\u7ed3\u675f\u540e\u6253\u5f00\uff0c\u65e0\u8bba\u60a8\u96c6\u7fa4\u8282\u70b9\u662f\u5426\u5168\u90e8\u5347\u7ea7\u5b8c\u6210\u3002")),(0,l.yg)("h3",{id:"\u5347\u7ea7\u6d41\u7a0b\u6982\u89c8"},"\u5347\u7ea7\u6d41\u7a0b\u6982\u89c8"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5143\u6570\u636e\u5907\u4efd"),(0,l.yg)("li",{parentName:"ol"},"\u5173\u95ed\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd"),(0,l.yg)("li",{parentName:"ol"},"\u517c\u5bb9\u6027\u6d4b\u8bd5"),(0,l.yg)("li",{parentName:"ol"},"\u5347\u7ea7 BE"),(0,l.yg)("li",{parentName:"ol"},"\u5347\u7ea7 FE"),(0,l.yg)("li",{parentName:"ol"},"\u6253\u5f00\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd")),(0,l.yg)("h3",{id:"\u5347\u7ea7\u524d\u7f6e\u5de5\u4f5c"},"\u5347\u7ea7\u524d\u7f6e\u5de5\u4f5c"),(0,l.yg)("p",null,"\u8bf7\u6309\u5347\u7ea7\u6d41\u7a0b\u987a\u6b21\u6267\u884c\u5347\u7ea7"),(0,l.yg)("h4",{id:"\u5143\u6570\u636e\u5907\u4efd\u91cd\u8981"},"\u5143\u6570\u636e\u5907\u4efd\uff08\u91cd\u8981\uff09"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5c06 FE-Master \u8282\u70b9\u7684 ",(0,l.yg)("inlineCode",{parentName:"strong"},"doris-meta")," \u76ee\u5f55\u8fdb\u884c\u5b8c\u6574\u5907\u4efd\uff01")),(0,l.yg)("h4",{id:"\u5173\u95ed\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd"},"\u5173\u95ed\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd"),(0,l.yg)("p",null,"\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u8282\u70b9\u91cd\u542f\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u89e6\u53d1\u4e0d\u5fc5\u8981\u7684\u96c6\u7fa4\u5747\u8861\u548c\u526f\u672c\u4fee\u590d\u903b\u8f91\uff0c\u5148\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5173\u95ed\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'admin set frontend config("disable_balance" = "true");\nadmin set frontend config("disable_colocate_balance" = "true");\nadmin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,l.yg)("h4",{id:"\u517c\u5bb9\u6027\u6d4b\u8bd5"},"\u517c\u5bb9\u6027\u6d4b\u8bd5"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},(0,l.yg)("strong",{parentName:"p"},"\u5143\u6570\u636e\u517c\u5bb9\u975e\u5e38\u91cd\u8981\uff0c\u5982\u679c\u56e0\u4e3a\u5143\u6570\u636e\u4e0d\u517c\u5bb9\u5bfc\u81f4\u7684\u5347\u7ea7\u5931\u8d25\uff0c\u90a3\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931\uff01\u5efa\u8bae\u6bcf\u6b21\u5347\u7ea7\u524d\u90fd\u8fdb\u884c\u5143\u6570\u636e\u517c\u5bb9\u6027\u6d4b\u8bd5\uff01"))),(0,l.yg)("h5",{id:"fe-\u517c\u5bb9\u6027\u6d4b\u8bd5"},"FE \u517c\u5bb9\u6027\u6d4b\u8bd5"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},(0,l.yg)("strong",{parentName:"p"},"\u91cd\u8981")),(0,l.yg)("ol",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5efa\u8bae\u5728\u81ea\u5df1\u672c\u5730\u7684\u5f00\u53d1\u673a\uff0c\u6216\u8005 BE \u8282\u70b9\u505a FE \u517c\u5bb9\u6027\u6d4b\u8bd5\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4e0d\u5efa\u8bae\u5728 Follower \u6216\u8005 Observer \u8282\u70b9\u4e0a\u6d4b\u8bd5\uff0c\u907f\u514d\u51fa\u73b0\u94fe\u63a5\u5f02\u5e38")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u4e00\u5b9a\u5728 Follower \u6216\u8005 Observer \u8282\u70b9\u4e0a\uff0c\u9700\u8981\u505c\u6b62\u5df2\u542f\u52a8\u7684 FE \u8fdb\u7a0b")))),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5355\u72ec\u4f7f\u7528\u65b0\u7248\u672c\u90e8\u7f72\u4e00\u4e2a\u6d4b\u8bd5\u7528\u7684 FE \u8fdb\u7a0b"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u6539\u6d4b\u8bd5\u7528\u7684 FE \u7684\u914d\u7f6e\u6587\u4ef6 fe.conf"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"vi ${DORIS_NEW_HOME}/conf/fe.conf\n")),(0,l.yg)("p",{parentName:"li"},"\u4fee\u6539\u4ee5\u4e0b\u7aef\u53e3\u4fe1\u606f\uff0c\u5c06",(0,l.yg)("strong",{parentName:"p"},"\u6240\u6709\u7aef\u53e3"),"\u8bbe\u7f6e\u4e3a",(0,l.yg)("strong",{parentName:"p"},"\u4e0e\u7ebf\u4e0a\u4e0d\u540c")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"...\nhttp_port = 18030\nrpc_port = 19020\nquery_port = 19030\narrow_flight_sql_port = 19040\nedit_log_port = 19010\n...\n")),(0,l.yg)("p",{parentName:"li"},"\u4fdd\u5b58\u5e76\u9000\u51fa")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u6539 fe.conf"))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5728 fe.conf \u6dfb\u52a0 ClusterID \u914d\u7f6e"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'echo "cluster_id=123456" >> ${DORIS_NEW_HOME}/conf/fe.conf\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u6dfb\u52a0\u5143\u6570\u636e\u6545\u969c\u6062\u590d\u914d\u7f6e \uff08",(0,l.yg)("strong",{parentName:"p"},"2.0.2 + \u7248\u672c\u65e0\u9700\u8fdb\u884c\u6b64\u64cd\u4f5c"),"\uff09"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'echo "metadata_failure_recovery=true" >> ${DORIS_NEW_HOME}/conf/fe.conf\n')))),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u62f7\u8d1d\u7ebf\u4e0a\u73af\u5883 Master FE \u7684\u5143\u6570\u636e\u76ee\u5f55 doris-meta \u5230\u6d4b\u8bd5\u73af\u5883"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp ${DORIS_OLD_HOME}/fe/doris-meta/* ${DORIS_NEW_HOME}/fe/doris-meta\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5c06\u62f7\u8d1d\u5230\u6d4b\u8bd5\u73af\u5883\u4e2d\u7684 VERSION \u6587\u4ef6\u4e2d\u7684 cluster_id \u4fee\u6539\u4e3a 123456\uff08\u5373\u4e0e\u7b2c3\u6b65\u4e2d\u76f8\u540c\uff09"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"vi ${DORIS_NEW_HOME}/fe/doris-meta/image/VERSION\nclusterId=123456\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u8fd0\u884c\u542f\u52a8 FE \uff08",(0,l.yg)("strong",{parentName:"p"},"\u8bf7\u6309\u7167\u7248\u672c\u9009\u62e9\u542f\u52a8 FE \u7684\u65b9\u5f0f"),"\uff09"))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"2.0.2(\u5305\u542b2.0.2) + \u7248\u672c",(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon --metadata_failure_recovery\n"))),(0,l.yg)("li",{parentName:"ul"},"2.0.1\uff08\u5305\u542b2.0.1\uff09 \u4ee5\u524d\u7684\u7248\u672c",(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon \n")))),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u901a\u8fc7 FE \u65e5\u5fd7 fe.log \u89c2\u5bdf\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"tail -f ${DORIS_NEW_HOME}/log/fe.log\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u542f\u52a8\u6210\u529f\uff0c\u5219\u4ee3\u8868\u517c\u5bb9\u6027\u6ca1\u6709\u95ee\u9898\uff0c\u505c\u6b62\u6d4b\u8bd5\u73af\u5883\u7684 FE \u8fdb\u7a0b\uff0c\u51c6\u5907\u5347\u7ea7"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"sh ${DORIS_NEW_HOME}/bin/stop_fe.sh\n")))),(0,l.yg)("h5",{id:"be-\u517c\u5bb9\u6027\u6d4b\u8bd5"},"BE \u517c\u5bb9\u6027\u6d4b\u8bd5"),(0,l.yg)("p",null,"\u53ef\u5229\u7528\u7070\u5ea6\u5347\u7ea7\u65b9\u6848\uff0c\u5148\u5347\u7ea7\u5355\u4e2a BE\uff0c\u65e0\u5f02\u5e38\u548c\u62a5\u9519\u60c5\u51b5\u4e0b\u5373\u89c6\u4e3a\u517c\u5bb9\u6027\u6b63\u5e38\uff0c\u53ef\u6267\u884c\u540e\u7eed\u5347\u7ea7\u52a8\u4f5c"),(0,l.yg)("h3",{id:"\u5347\u7ea7\u6d41\u7a0b"},"\u5347\u7ea7\u6d41\u7a0b"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u5148\u5347\u7ea7 BE\uff0c\u540e\u5347\u7ea7FE"),(0,l.yg)("p",{parentName:"admonition"},"\u4e00\u822c\u800c\u8a00\uff0cDoris \u53ea\u9700\u8981\u5347\u7ea7 FE \u76ee\u5f55\u4e0b\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"/bin")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"/lib")," \u4ee5\u53ca BE \u76ee\u5f55\u4e0b\u7684  ",(0,l.yg)("inlineCode",{parentName:"p"},"/bin")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"/lib")),(0,l.yg)("p",{parentName:"admonition"},"\u5728 2.0.2 \u53ca\u4e4b\u540e\u7684\u7248\u672c\uff0cFE \u548c BE \u90e8\u7f72\u8def\u5f84\u4e0b\u65b0\u589e\u4e86 ",(0,l.yg)("inlineCode",{parentName:"p"},"custom_lib/")," \u76ee\u5f55\uff08\u5982\u6ca1\u6709\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\uff09\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"custom_lib/")," \u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u4e00\u4e9b\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u7b2c\u4e09\u65b9 jar \u5305\uff0c\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"hadoop-lzo-*.jar"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"orai18n.jar")," \u7b49\u3002"),(0,l.yg)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u76ee\u5f55\u5728\u5347\u7ea7\u65f6\u4e0d\u9700\u8981\u66ff\u6362\u3002"),(0,l.yg)("p",{parentName:"admonition"},"\u4f46\u662f\u5728\u5927\u7248\u672c\u5347\u7ea7\u65f6\uff0c\u53ef\u80fd\u4f1a\u6709\u65b0\u7684\u7279\u6027\u589e\u52a0\u6216\u8005\u8001\u529f\u80fd\u7684\u91cd\u6784\uff0c\u8fd9\u4e9b\u4fee\u6539\u53ef\u80fd\u4f1a\u9700\u8981\u5347\u7ea7\u65f6",(0,l.yg)("strong",{parentName:"p"},"\u66ff\u6362/\u65b0\u589e"),"\u66f4\u591a\u7684\u76ee\u5f55\u6765\u4fdd\u8bc1\u6240\u6709\u65b0\u529f\u80fd\u7684\u53ef\u7528\u6027\uff0c\u8bf7\u5927\u7248\u672c\u5347\u7ea7\u65f6\u4ed4\u7ec6\u5173\u6ce8\u8be5\u7248\u672c\u7684 Release-Note\uff0c\u4ee5\u514d\u51fa\u73b0\u5347\u7ea7\u6545\u969c")),(0,l.yg)("h4",{id:"\u5347\u7ea7-be"},"\u5347\u7ea7 BE"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u4e3a\u4e86\u4fdd\u8bc1\u60a8\u7684\u6570\u636e\u5b89\u5168\uff0c\u8bf7\u4f7f\u7528 3 \u526f\u672c\u6765\u5b58\u50a8\u60a8\u7684\u6570\u636e\uff0c\u4ee5\u907f\u514d\u5347\u7ea7\u8bef\u64cd\u4f5c\u6216\u5931\u8d25\u5bfc\u81f4\u7684\u6570\u636e\u4e22\u5931\u95ee\u9898")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5728\u591a\u526f\u672c\u7684\u524d\u63d0\u4e0b\uff0c\u9009\u62e9\u4e00\u53f0 BE \u8282\u70b9\u505c\u6b62\u8fd0\u884c\uff0c\u8fdb\u884c\u7070\u5ea6\u5347\u7ea7"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh ${DORIS_OLD_HOME}/be/bin/stop_be.sh\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u91cd\u547d\u540d BE \u76ee\u5f55\u4e0b\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"/bin"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"/lib")," \u76ee\u5f55"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mv ${DORIS_OLD_HOME}/be/bin ${DORIS_OLD_HOME}/be/bin_back\nmv ${DORIS_OLD_HOME}/be/lib ${DORIS_OLD_HOME}/be/lib_back\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u590d\u5236\u65b0\u7248\u672c\u7684  ",(0,l.yg)("inlineCode",{parentName:"p"},"/bin"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"/lib")," \u76ee\u5f55\u5230\u539f BE \u76ee\u5f55\u4e0b"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp ${DORIS_NEW_HOME}/be/bin ${DORIS_OLD_HOME}/be/bin\ncp ${DORIS_NEW_HOME}/be/lib ${DORIS_OLD_HOME}/be/lib\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u542f\u52a8\u8be5 BE \u8282\u70b9"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh ${DORIS_OLD_HOME}/be/bin/start_be.sh --daemon\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u94fe\u63a5\u96c6\u7fa4\uff0c\u67e5\u770b\u8be5\u8282\u70b9\u4fe1\u606f"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-mysql"},"show backends\\G\n")),(0,l.yg)("p",{parentName:"li"},"\u82e5\u8be5 BE \u8282\u70b9 ",(0,l.yg)("inlineCode",{parentName:"p"},"alive")," \u72b6\u6001\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4e14 ",(0,l.yg)("inlineCode",{parentName:"p"},"Version")," \u503c\u4e3a\u65b0\u7248\u672c\uff0c\u5219\u8be5\u8282\u70b9\u5347\u7ea7\u6210\u529f")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4f9d\u6b21\u5b8c\u6210\u5176\u4ed6 BE \u8282\u70b9\u5347\u7ea7"))),(0,l.yg)("h4",{id:"\u5347\u7ea7-fe"},"\u5347\u7ea7 FE"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u5148\u5347\u7ea7\u975e Master \u8282\u70b9\uff0c\u540e\u5347\u7ea7 Master \u8282\u70b9\u3002")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u591a\u4e2a FE \u8282\u70b9\u60c5\u51b5\u4e0b\uff0c\u9009\u62e9\u4e00\u4e2a\u975e Master \u8282\u70b9\u8fdb\u884c\u5347\u7ea7\uff0c\u5148\u505c\u6b62\u8fd0\u884c"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh ${DORIS_OLD_HOME}/fe/bin/stop_fe.sh\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u91cd\u547d\u540d FE \u76ee\u5f55\u4e0b\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"/bin"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"/lib"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"/mysql_ssl_default_certificate")," \u76ee\u5f55"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mv ${DORIS_OLD_HOME}/fe/bin ${DORIS_OLD_HOME}/fe/bin_back\nmv ${DORIS_OLD_HOME}/fe/lib ${DORIS_OLD_HOME}/fe/lib_back\nmv ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate_back\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u590d\u5236\u65b0\u7248\u672c\u7684  ",(0,l.yg)("inlineCode",{parentName:"p"},"/bin"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"/lib"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"/mysql_ssl_default_certificate")," \u76ee\u5f55\u5230\u539f FE \u76ee\u5f55\u4e0b"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp ${DORIS_NEW_HOME}/fe/bin ${DORIS_OLD_HOME}/fe/bin\ncp ${DORIS_NEW_HOME}/fe/lib ${DORIS_OLD_HOME}/fe/lib\ncp -r ${DORIS_NEW_HOME}/fe/mysql_ssl_default_certificate ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u542f\u52a8\u8be5 FE \u8282\u70b9"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh ${DORIS_OLD_HOME}/fe/bin/start_fe.sh --daemon\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u94fe\u63a5\u96c6\u7fa4\uff0c\u67e5\u770b\u8be5\u8282\u70b9\u4fe1\u606f"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-mysql"},"show frontends\\G\n")),(0,l.yg)("p",{parentName:"li"},"\u82e5\u8be5 FE \u8282\u70b9 ",(0,l.yg)("inlineCode",{parentName:"p"},"alive")," \u72b6\u6001\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4e14 ",(0,l.yg)("inlineCode",{parentName:"p"},"Version")," \u503c\u4e3a\u65b0\u7248\u672c\uff0c\u5219\u8be5\u8282\u70b9\u5347\u7ea7\u6210\u529f")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4f9d\u6b21\u5b8c\u6210\u5176\u4ed6 FE \u8282\u70b9\u5347\u7ea7\uff0c",(0,l.yg)("strong",{parentName:"p"},"\u6700\u540e\u5b8c\u6210 Master \u8282\u70b9\u7684\u5347\u7ea7")))),(0,l.yg)("h4",{id:"\u6253\u5f00\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd"},"\u6253\u5f00\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd"),(0,l.yg)("p",null,"\u5347\u7ea7\u5b8c\u6210\uff0c\u5e76\u4e14\u6240\u6709 BE \u8282\u70b9\u72b6\u6001\u53d8\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"Alive")," \u540e\uff0c\u6253\u5f00\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'admin set frontend config("disable_balance" = "false");\nadmin set frontend config("disable_colocate_balance" = "false");\nadmin set frontend config("disable_tablet_scheduler" = "false");\n')))}N.isMDXComponent=!0}}]);