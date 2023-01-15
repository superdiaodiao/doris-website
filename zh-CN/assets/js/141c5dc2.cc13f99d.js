"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[54622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=u(a),k=n,d=o["".concat(s,".").concat(k)]||o[k]||c[k]||l;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[o]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},16888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u591a\u79df\u6237(\u5f03\u7528)",language:"zh-CN"},i=void 0,p={unversionedId:"administrator-guide/operation/multi-tenant",id:"version-0.15/administrator-guide/operation/multi-tenant",title:"\u591a\u79df\u6237(\u5f03\u7528)",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/operation/multi-tenant.md",sourceDirName:"administrator-guide/operation",slug:"/administrator-guide/operation/multi-tenant",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/multi-tenant",draft:!1,tags:[],version:"0.15",frontMatter:{title:"\u591a\u79df\u6237(\u5f03\u7528)",language:"zh-CN"},sidebar:"docs",previous:{title:"\u76d1\u63a7\u548c\u62a5\u8b66",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/monitor-alert"},next:{title:"Tablet \u5143\u6570\u636e\u7ba1\u7406\u5de5\u5177",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/tablet-meta-tool"}},s={},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u8bbe\u8ba1\u539f\u5219",id:"\u8bbe\u8ba1\u539f\u5219",level:2},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u4e3b\u8981\u601d\u8def",id:"\u4e3b\u8981\u601d\u8def",level:2},{value:"\u8bbe\u8ba1\u65b9\u6848",id:"\u8bbe\u8ba1\u65b9\u6848",level:2},{value:"SQL \u63a5\u53e3",id:"sql-\u63a5\u53e3",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2}],m={toc:u};function o(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u591a\u79df\u6237\u5df2\u5f03\u7528"},"\u591a\u79df\u6237(\u5df2\u5f03\u7528)"),(0,n.kt)("p",null,"\u8be5\u529f\u80fd\u5df2\u5f03\u7528\u3002\u65b0\u65b9\u6848\u8bf7\u53c2\u9605\uff1a",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.15/administrator-guide/multi-tenant"},"\u591a\u79df\u6237\u548c\u8d44\u6e90\u5212\u5206"),"\u3002"),(0,n.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,n.kt)("p",null,"Doris \u4f5c\u4e3a\u4e00\u6b3e PB \u7ea7\u522b\u7684\u5728\u7ebf\u62a5\u8868\u4e0e\u591a\u7ef4\u5206\u6790\u6570\u636e\u5e93\uff0c\u5bf9\u5916\u901a\u8fc7\u5f00\u653e\u4e91\u63d0\u4f9b\u4e91\u7aef\u7684\u6570\u636e\u5e93\u670d\u52a1\uff0c\u5e76\u4e14\u5bf9\u4e8e\u6bcf\u4e2a\u4e91\u4e0a\u7684\u5ba2\u6237\u90fd\u5355\u72ec\u90e8\u7f72\u4e86\u4e00\u5957\u7269\u7406\u96c6\u7fa4\u3002\u5bf9\u5185\uff0c\u4e00\u5957\u7269\u7406\u96c6\u7fa4\u90e8\u7f72\u4e86\u591a\u4e2a\u4e1a\u52a1\uff0c\u5bf9\u4e8e\u9694\u79bb\u6027\u8981\u6c42\u6bd4\u8f83\u9ad8\u7684\u4e1a\u52a1\u5355\u72ec\u642d\u5efa\u4e86\u96c6\u7fa4\u3002\u9488\u5bf9\u4ee5\u4e0a\u5b58\u5728\u51e0\u70b9\u95ee\u9898\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u591a\u5957\u7269\u7406\u96c6\u7fa4\u7ef4\u62a4\u4ee3\u4ef7\u5927\uff08\u5347\u7ea7\u3001\u529f\u80fd\u4e0a\u7ebf\u3001bug\u4fee\u590d\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7528\u6237\u7684\u67e5\u8be2\u6216\u8005\u67e5\u8be2\u5f15\u8d77\u7684bug\u7ecf\u5e38\u4f1a\u5f71\u54cd\u5176\u4ed6\u7528\u6237\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u5355\u673a\u53ea\u80fd\u90e8\u7f72\u4e00\u4e2aBE\u8fdb\u7a0b\u3002\u800c\u591a\u4e2aBE\u53ef\u4ee5\u66f4\u597d\u7684\u89e3\u51b3\u80d6\u8282\u70b9\u95ee\u9898\u3002\u5e76\u4e14\u5bf9\u4e8ejoin\u3001\u805a\u5408\u64cd\u4f5c\u53ef\u4ee5\u63d0\u4f9b\u66f4\u9ad8\u7684\u5e76\u53d1\u5ea6\u3002")),(0,n.kt)("p",null,"\u7efc\u5408\u4ee5\u4e0a\u4e09\u70b9\uff0cDoris\u9700\u8981\u65b0\u7684\u591a\u79df\u6237\u65b9\u6848\uff0c\u65e2\u80fd\u505a\u5230\u8f83\u597d\u7684\u8d44\u6e90\u9694\u79bb\u548c\u6545\u969c\u9694\u79bb\uff0c\u540c\u65f6\u4e5f\u80fd\u51cf\u5c11\u7ef4\u62a4\u7684\u4ee3\u4ef7\uff0c\u6ee1\u8db3\u516c\u6709\u4e91\u548c\u79c1\u6709\u4e91\u7684\u9700\u6c42\u3002"),(0,n.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u5219"},"\u8bbe\u8ba1\u539f\u5219"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7b80\u5355"),(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4ee3\u4ef7\u5c0f"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u73b0\u6709\u96c6\u7fa4\u7684\u8fc1\u79fb")),(0,n.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FE: Frontend\uff0c\u5373 Doris \u4e2d\u7528\u4e8e\u5143\u6570\u636e\u7ba1\u7406\u5373\u67e5\u8be2\u89c4\u5212\u7684\u6a21\u5757\u3002"),(0,n.kt)("li",{parentName:"ul"},"BE: Backend\uff0c\u5373 Doris \u4e2d\u7528\u4e8e\u5b58\u50a8\u548c\u67e5\u8be2\u6570\u636e\u7684\u6a21\u5757\u3002"),(0,n.kt)("li",{parentName:"ul"},"Master: FE \u7684\u4e00\u79cd\u89d2\u8272\u3002\u4e00\u4e2aDoris\u96c6\u7fa4\u53ea\u6709\u4e00\u4e2aMaster\uff0c\u5176\u4ed6\u7684FE\u4e3aObserver\u6216\u8005Follower\u3002"),(0,n.kt)("li",{parentName:"ul"},"instance\uff1a\u4e00\u4e2a BE \u8fdb\u7a0b\u5373\u662f\u4e00\u4e2a instance\u3002"),(0,n.kt)("li",{parentName:"ul"},"host\uff1a\u5355\u4e2a\u7269\u7406\u673a"),(0,n.kt)("li",{parentName:"ul"},"cluster\uff1a\u5373\u4e00\u4e2a\u96c6\u7fa4\uff0c\u7531\u591a\u4e2ainstance\u7ec4\u6210\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u79df\u6237\uff1a\u4e00\u4e2acluster\u5c5e\u4e8e\u4e00\u4e2a\u79df\u6237\u3002cluster\u548c\u79df\u6237\u4e4b\u95f4\u662f\u4e00\u5bf9\u4e00\u5173\u7cfb\u3002"),(0,n.kt)("li",{parentName:"ul"},"database\uff1a\u4e00\u4e2a\u7528\u6237\u521b\u5efa\u7684\u6570\u636e\u5e93")),(0,n.kt)("h2",{id:"\u4e3b\u8981\u601d\u8def"},"\u4e3b\u8981\u601d\u8def"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2ahost\u4e0a\u90e8\u7f72\u591a\u4e2aBE\u7684instance\uff0c\u5728\u8fdb\u7a0b\u7ea7\u522b\u505a\u8d44\u6e90\u9694\u79bb\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u4e2ainstance\u5f62\u6210\u4e00\u4e2acluster\uff0c\u4e00\u4e2acluster\u5206\u914d\u7ed9\u4e00\u4e2a\u4e1a\u52a1\u72ec\u7acb\u7684\u7684\u79df\u6237\u3002"),(0,n.kt)("li",{parentName:"ul"},"FE\u589e\u52a0cluster\u8fd9\u4e00\u7ea7\u5e76\u8d1f\u8d23cluster\u7684\u7ba1\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},"CPU,IO,\u5185\u5b58\u7b49\u8d44\u6e90\u9694\u79bb\u91c7\u7528cgroup\u3002")),(0,n.kt)("h2",{id:"\u8bbe\u8ba1\u65b9\u6848"},"\u8bbe\u8ba1\u65b9\u6848"),(0,n.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u8fbe\u5230\u9694\u79bb\u7684\u76ee\u7684\uff0c\u5f15\u5165\u4e86",(0,n.kt)("strong",{parentName:"p"},"\u865a\u62dfcluster"),"\u7684\u6982\u5ff5\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"cluster\u8868\u793a\u4e00\u4e2a\u865a\u62df\u7684\u96c6\u7fa4\uff0c\u7531\u591a\u4e2aBE\u7684instance\u7ec4\u6210\u3002\u591a\u4e2acluster\u5171\u4eabFE\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2ahost\u4e0a\u53ef\u4ee5\u542f\u52a8\u591a\u4e2ainstance\u3002cluster\u521b\u5efa\u65f6\uff0c\u9009\u53d6\u4efb\u610f\u6307\u5b9a\u6570\u91cf\u7684instance\uff0c\u7ec4\u6210\u4e00\u4e2acluster\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efacluster\u7684\u540c\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3asuperuser\u7684\u8d26\u6237\uff0c\u96b6\u5c5e\u4e8e\u8be5cluster\u3002superuser\u53ef\u4ee5\u5bf9cluster\u8fdb\u884c\u7ba1\u7406\u3001\u521b\u5efa\u6570\u636e\u5e93\u3001\u5206\u914d\u6743\u9650\u7b49\u3002"),(0,n.kt)("li",{parentName:"ol"},"Doris\u542f\u52a8\u540e\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u7684cluster\uff1adefault_cluster\u3002\u5982\u679c\u7528\u6237\u4e0d\u5e0c\u671b\u4f7f\u7528\u591acluster\u7684\u529f\u80fd\uff0c\u5219\u4f1a\u63d0\u4f9b\u8fd9\u4e2a\u9ed8\u8ba4\u7684cluster\uff0c\u5e76\u9690\u85cf\u591acluster\u7684\u5176\u4ed6\u64cd\u4f5c\u7ec6\u8282\u3002")),(0,n.kt)("p",null,"\u5177\u4f53\u67b6\u6784\u5982\u4e0b\u56fe\uff1a\n",(0,n.kt)("img",{src:a(39736).Z,width:"814",height:"484"})),(0,n.kt)("h2",{id:"sql-\u63a5\u53e3"},"SQL \u63a5\u53e3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u767b\u5f55"),(0,n.kt)("p",{parentName:"li"},"  \u9ed8\u8ba4\u96c6\u7fa4\u767b\u5f55\u540d\uff1a user_name@default_cluster \u6216\u8005 user_name"),(0,n.kt)("p",{parentName:"li"},"  \u81ea\u5b9a\u4e49\u96c6\u7fa4\u767b\u5f55\u540d\uff1auser_name@cluster_name"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"mysqlclient -h host -P port -u user_name@cluster_name -p password"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u3001\u5220\u9664\u3001\u4e0b\u7ebf\uff08decommission\uff09\u4ee5\u53ca\u53d6\u6d88\u4e0b\u7ebfBE"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BACKEND "host:port"'),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP BACKEND "host:port"'),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DECOMMISSION BACKEND "host:port"'),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'CANCEL DECOMMISSION BACKEND "host:port"')),(0,n.kt)("p",{parentName:"li"},"  \u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528 DECOMMISSION \u800c\u4e0d\u662f DROP \u6765\u5220\u9664 BACKEND\u3002DECOMMISSION \u64cd\u4f5c\u4f1a\u9996\u5148\u5c06\u9700\u8981\u4e0b\u7ebf\u8282\u70b9\u4e0a\u7684\u6570\u636e\u62f7\u8d1d\u5230\u96c6\u7fa4\u5185\u5176\u4ed6instance\u4e0a\u3002\u4e4b\u540e\uff0c\u624d\u4f1a\u771f\u6b63\u4e0b\u7ebf\u3002\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u96c6\u7fa4\uff0c\u5e76\u6307\u5b9asuperuser\u8d26\u6237\u7684\u5bc6\u7801"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},'CREATE CLUSTER cluster_name PROPERTIES ("instance_num" = "10") identified by "password"'),"\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fdb\u5165\u4e00\u4e2a\u96c6\u7fa4"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"ENTER cluster_name"),"\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u6269\u5bb9\u3001\u7f29\u5bb9"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},'ALTER CLUSTER cluster_name PROPERTIES ("instance_num" = "10")')),(0,n.kt)("p",{parentName:"li"},"  \u5f53\u6307\u5b9a\u7684\u5b9e\u4f8b\u4e2a\u6570\u591a\u4e8ecluster\u73b0\u6709be\u7684\u4e2a\u6570\uff0c\u5219\u4e3a\u6269\u5bb9\uff0c\u5982\u679c\u5c11\u4e8e\u5219\u4e3a\u7f29\u5bb9\u3002\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u94fe\u63a5\u3001\u8fc1\u79fbdb"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"LINK DATABASE src_cluster_name.db_name dest_cluster_name.db_name")),(0,n.kt)("p",{parentName:"li"},"  \u8f6f\u94fe\u4e00\u4e2acluster\u7684db\u5230\u53e6\u5916\u4e00\u4e2acluster\u7684db \uff0c\u5bf9\u4e8e\u9700\u8981\u4e34\u65f6\u8bbf\u95ee\u5176\u4ed6cluster\u7684db\u5374\u4e0d\u9700\u8981\u8fdb\u884c\u5b9e\u9645\u6570\u636e\u8fc1\u79fb\u7684\u7528\u6237\u53ef\u4ee5\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"MIGRATE DATABASE src_cluster_name.db_name dest_cluster_name.db_name")),(0,n.kt)("p",{parentName:"li"},"  \u5982\u679c\u9700\u8981\u5bf9db\u8fdb\u884c\u8de8cluster\u7684\u8fc1\u79fb\uff0c\u5728\u94fe\u63a5\u4e4b\u540e\uff0c\u6267\u884cmigrate\u5bf9\u6570\u636e\u8fdb\u884c\u5b9e\u9645\u7684\u8fc1\u79fb\u3002"),(0,n.kt)("p",{parentName:"li"}," \u8fc1\u79fb\u4e0d\u5f71\u54cd\u5f53\u524d\u4e24\u4e2adb\u7684\u67e5\u8be2\u3001\u5bfc\u5165\u7b49\u64cd\u4f5c\uff0c\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u7684\u64cd\u4f5c\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW MIGRATIONS"),"\u67e5\u770b\u8fc1\u79fb\u7684\u8fdb\u5ea6\u3002\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664\u96c6\u7fa4"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"DROP CLUSTER cluster_name")),(0,n.kt)("p",{parentName:"li"},"  \u5220\u9664\u96c6\u7fa4\uff0c\u8981\u6c42\u5148\u624b\u52a8\u5220\u9664\u7684\u96c6\u7fa4\u5185\u6240\u6709database\u3002\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5176\u4ed6"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW CLUSTERS")),(0,n.kt)("p",{parentName:"li"},"  \u5c55\u793a\u7cfb\u7edf\u5185\u5df2\u7ecf\u521b\u5efa\u7684\u96c6\u7fa4\u3002\u53ea\u6709root\u7528\u6237\u6709\u8be5\u6743\u9650\u3002"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS")),(0,n.kt)("p",{parentName:"li"},"  \u67e5\u770b\u96c6\u7fa4\u5185\u7684BE instance\u3002"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW MIGRATIONS")),(0,n.kt)("p",{parentName:"li"},"  \u5c55\u793a\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684db\u8fc1\u79fb\u4efb\u52a1\u3002\u6267\u884c\u5b8cdb\u7684\u8fc1\u79fb\u540e\u53ef\u4ee5\u901a\u8fc7\u6b64\u547d\u4ee4\u67e5\u770b\u8fc1\u79fb\u7684\u8fdb\u5ea6\u3002"))),(0,n.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u547d\u540d\u7a7a\u95f4\u9694\u79bb"),(0,n.kt)("p",{parentName:"li"}," \u4e3a\u4e86\u5f15\u5165\u591a\u79df\u6237\uff0c\u9700\u8981\u5bf9\u7cfb\u7edf\u5185\u7684cluster\u4e4b\u95f4\u7684\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u9694\u79bb\u3002"),(0,n.kt)("p",{parentName:"li"},"Doris\u73b0\u6709\u7684\u5143\u6570\u636e\u91c7\u7528\u7684\u662fimage + journal \u7684\u65b9\u5f0f(\u5143\u6570\u636e\u7684\u8bbe\u8ba1\u89c1\u76f8\u5173\u6587\u6863)\u3002Doris\u4f1a\u628a\u6d89\u53ca\u5143\u6570\u636e\u7684\u64cd\u4f5c\u7684\u8bb0\u5f55\u4e3a\u4e00\u4e2a journal \uff08\u64cd\u4f5c\u65e5\u5fd7\uff09\uff0c\u7136\u540e\u5b9a\u65f6\u7684\u6309\u7167",(0,n.kt)("strong",{parentName:"p"},"\u56fe1"),"\u7684\u65b9\u5f0f\u5199\u6210image\uff0c\u52a0\u8f7d\u7684\u65f6\u5019\u6309\u7167\u5199\u5165\u7684\u987a\u5e8f\u8bfb\u5373\u53ef\u3002\u4f46\u662f\u8fd9\u6837\u5c31\u5e26\u6765\u4e00\u4e2a\u95ee\u9898\u5df2\u7ecf\u5199\u5165\u7684\u683c\u5f0f\u4e0d\u5bb9\u6613\u4fee\u6539\uff0c\u6bd4\u5982\u8bb0\u5f55\u6570\u636e\u5206\u5e03\u7684\u5143\u6570\u636e\u683c\u5f0f\u4e3a\uff1adatabase+table+tablet+replica \u5d4c\u5957\uff0c\u5982\u679c\u6309\u7167\u4ee5\u5f80\u7684\u65b9\u5f0f\u8981\u505acluster\u4e4b\u95f4\u7684\u547d\u540d\u7a7a\u95f4\u9694\u79bb\uff0c\u5219\u9700\u8981\u5728database\u4e0a\u589e\u52a0\u4e00\u5c42cluster\uff0c\u5185\u90e8\u5143\u6570\u636e\u7684\u5c42\u7ea7\u53d8\u4e3a:cluster+database+table+tablet+replica\uff0c\u5982",(0,n.kt)("strong",{parentName:"p"},"\u56fe2"),"\u6240\u793a\u3002\u4f46\u52a0\u4e00\u5c42\u5e26\u6765\u7684\u95ee\u9898\u6709\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u589e\u52a0\u4e00\u5c42\u5e26\u6765\u7684\u5143\u6570\u636e\u6539\u52a8\uff0c\u4e0d\u517c\u5bb9\uff0c\u9700\u8981\u6309\u7167\u56fe2\u7684\u65b9\u5f0fcluster\uff0bdb\uff0btable\uff0btablet\uff0breplica\u5c42\u7ea7\u5199,\u8fd9\u6837\u5c31\u6539\u53d8\u4e86\u4ee5\u5f80\u7684\u5143\u6570\u636e\u7ec4\u7ec7\u65b9\u5f0f\uff0c\u8001\u7248\u672c\u7684\u5347\u7ea7\u4f1a\u6bd4\u8f83\u9ebb\u70e6\uff0c\u6bd4\u8f83\u7406\u60f3\u7684\u65b9\u5f0f\u662f\u6309\u7167\u56fe3\u5728\u73b0\u6709\u5143\u6570\u636e\u7684\u683c\u5f0f\u4e0b\u987a\u5e8f\u5199\u5165cluster\u7684\u5143\u6570\u636e\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee3\u7801\u91cc\u6240\u6709\u7528\u5230db\u3001user\u7b49\uff0c\u90fd\u9700\u8981\u52a0\u4e00\u5c42cluster\uff0c\u4e00\u5de5\u4f5c\u91cf\u5927\u6539\u52a8\u7684\u5730\u65b9\u591a\uff0c\u5c42\u7ea7\u6df1\uff0c\u591a\u6570\u4ee3\u7801\u90fd\u83b7\u53d6db\uff0c\u73b0\u6709\u529f\u80fd\u51e0\u4e4e\u90fd\u8981\u6539\u4e00\u904d\uff0c\u5e76\u4e14\u9700\u8981\u5728db\u7684\u9501\u7684\u57fa\u7840\u4e0a\u5d4c\u5957\u4e00\u5c42cluster\u7684\u9501\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(85989).Z,width:"584",height:"402"})),(0,n.kt)("p",{parentName:"li"},"\u7efc\u4e0a\u8fd9\u91cc\u91c7\u7528\u4e86\u4e00\u79cd\u901a\u8fc7\u7ed9db\u3001user\u540d\u52a0\u524d\u7f00\u7684\u65b9\u5f0f\u53bb\u9694\u79bb\u5185\u90e8\u56e0\u4e3acluster\u4e4b\u95f4db\u3001user\u540d\u5b57\u51b2\u7a81\u7684\u95ee\u9898\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5982\u4e0b\uff0c\u6240\u6709\u7684sql\u8f93\u5165\u6d89\u53cadb\u540d\u3001user\u540d\u7684\uff0c\u90fd\u9700\u8981\u6839\u636e\u81ea\u5df1\u6240\u5728\u7684cluster\u6765\u62fc\u5199db\u3001user\u7684\u5168\u540d\u3002"))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(83454).Z,width:"681",height:"205"})),(0,n.kt)("p",{parentName:"li"}," \u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u4ee5\u4e0a\u4e24\u4e2a\u95ee\u9898\u4e0d\u518d\u6709\u3002\u5143\u6570\u636e\u7684\u7ec4\u7ec7\u65b9\u5f0f\u4e5f\u6bd4\u8f83\u7b80\u5355\u3002\u5373\u91c7\u7528",(0,n.kt)("strong",{parentName:"p"},"\u56fe3"),"\u6bcf\u4e2acluster\u8bb0\u5f55\u4e0b\u5c5e\u4e8e\u81ea\u5df1cluster\u7684db\u3001user\uff0c\u4ee5\u53ca\u8282\u70b9\u5373\u53ef\u3002\n")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"BE \u8282\u70b9\u7ba1\u7406"),(0,n.kt)("p",{parentName:"li"}," \u6bcf\u4e2acluster\u90fd\u6709\u5c5e\u4e8e\u81ea\u5df1\u7684\u4e00\u7ec4instance\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS"),"\u67e5\u770b\uff0c\u4e3a\u4e86\u533a\u5206\u51fainstance\u5c5e\u4e8e\u54ea\u4e2acluster\u4ee5\u53ca\u4f7f\u7528\u60c5\u51b5\uff0cBE\u5f15\u5165\u4e86\u591a\u4e2a\u72b6\u6001\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"free\uff1a\u5f53\u4e00\u4e2aBE\u8282\u70b9\u88ab\u52a0\u5165\u7cfb\u7edf\u5185\uff0c\u6b64\u65f6be\u4e0d\u5c5e\u4e8e\u4efb\u4f55cluster\u7684\u65f6\u5019\u5904\u4e8e\u7a7a\u95f2\u72b6\u6001")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"using\uff1a\u5f53\u521b\u5efa\u96c6\u7fa4\u3001\u6216\u8005\u6269\u5bb9\u88ab\u9009\u53d6\u5230\u4e00\u4e2acluster\u5185\u5219\u5904\u4e8e\u4f7f\u7528\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cluster decommission\uff1a\u5982\u679c\u6267\u884c\u7f29\u5bb9\u91cf\uff0c\u5219\u6b63\u5728\u6267\u884c\u7f29\u5bb9\u7684be\u5904\u4e8e\u6b64\u72b6\u6001\u3002\u7ed3\u675f\u540e\uff0cbe\u72b6\u6001\u53d8\u4e3afree\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"system decommission\uff1abe\u6b63\u5728\u4e0b\u7ebf\u4e2d\u3002\u4e0b\u7ebf\u5b8c\u6210\u540e\uff0c\u8be5be\u5c06\u4f1a\u88ab\u6c38\u4e45\u5220\u9664\u3002"),(0,n.kt)("p",{parentName:"li"},"\u53ea\u6709root\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},'SHOW PROC "/backends"'),"\u4e2dcluster\u8fd9\u4e00\u9879\u67e5\u770b\u96c6\u7fa4\u5185\u6240\u6709be\u7684\u662f\u5426\u88ab\u4f7f\u7528\u3002\u4e3a\u7a7a\u5219\u4e3a\u7a7a\u95f2\uff0c\u5426\u5219\u4e3a\u4f7f\u7528\u4e2d\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS"),"\u53ea\u80fd\u770b\u5230\u6240\u5728cluster\u7684\u8282\u70b9\u3002\u4ee5\u4e0b\u662fbe\u8282\u70b9\u72b6\u6001\u53d8\u5316\u7684\u793a\u610f\u56fe\u3002 "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(84062).Z,width:"699",height:"272"}))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u96c6\u7fa4"),(0,n.kt)("p",{parentName:"li"},"\u53ea\u6709root\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2acluster\uff0c\u5e76\u6307\u5b9a\u4efb\u610f\u6570\u91cf\u7684BE instance\u3002"),(0,n.kt)("p",{parentName:"li"},"\u652f\u6301\u5728\u76f8\u540c\u673a\u5668\u4e0a\u9009\u53d6\u591a\u4e2ainstance\u3002\u9009\u62e9instance\u7684\u5927\u81f4\u539f\u5219\u662f\uff1a\u5c3d\u53ef\u80fd\u9009\u53d6\u4e0d\u540c\u673a\u5668\u4e0a\u7684be\u5e76\u4e14\u4f7f\u6240\u6709\u673a\u5668\u4e0a\u4f7f\u7528\u7684be\u6570\u5c3d\u53ef\u80fd\u5747\u5300\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u4f7f\u7528\u6765\u8bb2\uff0c\u6bcf\u4e00\u4e2auser\u3001db\u90fd\u5c5e\u4e8e\u4e00\u4e2acluster\uff08root\u9664\u5916\uff09\u3002\u4e3a\u4e86\u521b\u5efauser\u3001db\uff0c\u9996\u5148\u9700\u8981\u8fdb\u5165\u4e00\u4e2acluster\u3002\u5728\u521b\u5efacluster\u7684\u65f6\u5019\u7cfb\u7edf\u4f1a\u9ed8\u8ba4\u751f\u6210\u8fd9\u4e2acluster\u7684\u7ba1\u7406\u5458\uff0c\u5373superuser\u8d26\u6237\u3002superuser\u5177\u6709\u5728\u6240\u5c5ecluster\u5185\u521b\u5efadb\u3001user\uff0c\u4ee5\u53ca\u67e5\u770bbe\u8282\u70b9\u6570\u7684\u6743\u9650\u3002\u6240\u6709\u7684\u975eroot\u7528\u6237\u767b\u5f55\u5fc5\u987b\u6307\u5b9a\u4e00\u4e2acluster\uff0c\u5373",(0,n.kt)("inlineCode",{parentName:"p"},"user_name@cluster_name"),"\u3002"),(0,n.kt)("p",{parentName:"li"},"\u53ea\u6709root\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW CLUSTER"),"\u67e5\u770b\u7cfb\u7edf\u5185\u6240\u6709\u7684cluster\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7@\u4e0d\u540c\u7684\u96c6\u7fa4\u540d\u6765\u8fdb\u5165\u4e0d\u540c\u7684cluster\u3002\u5bf9\u4e8e\u9664\u4e86root\u4e4b\u5916\u7684\u7528\u6237cluster\u90fd\u662f\u4e0d\u53ef\u89c1\u7684\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u517c\u5bb9\u8001\u7248\u672cDoris\u5185\u7f6e\u4e86\u4e00\u4e2a\u540d\u5b57\u53eb\u505adefault_cluster\u7684\u96c6\u7fa4\uff0c\u8fd9\u4e2a\u540d\u5b57\u5728\u521b\u5efa\u96c6\u7fa4\u7684\u65f6\u5019\u4e0d\u80fd\u4f7f\u7528\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(99618).Z,width:"440",height:"255"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u6269\u5bb9"),(0,n.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u6269\u5bb9\u7684\u6d41\u7a0b\u540c\u521b\u5efa\u96c6\u7fa4\u3002\u4f1a\u4f18\u5148\u9009\u53d6\u4e0d\u5728\u96c6\u7fa4\u4e4b\u5916\u7684host\u4e0a\u7684BE instance\u3002\u9009\u53d6\u7684\u539f\u5219\u540c\u521b\u5efa\u96c6\u7fa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u7f29\u5bb9\u3001CLUSTER DECOMMISSION"),(0,n.kt)("p",{parentName:"li"}," \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e cluster \u7684 instance num \u6765\u8fdb\u884c\u96c6\u7fa4\u7f29\u5bb9\u3002"),(0,n.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u7684\u7f29\u5bb9\u4f1a\u4f18\u5148\u5728BE instance \u6570\u91cf\u6700\u591a\u7684 host \u4e0a\u9009\u53d6 instance \u8fdb\u884c\u4e0b\u7ebf\u3002"),(0,n.kt)("p",{parentName:"li"}," \u7528\u6237\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"ALTER CLUSTER DECOMMISSION BACKEND")," \u6765\u6307\u5b9aBE\uff0c\u8fdb\u884c\u96c6\u7fa4\u7f29\u5bb9\u3002\n"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(70113).Z,width:"545",height:"365"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5efa\u8868"),(0,n.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u4fdd\u8bc1\u9ad8\u53ef\u7528\uff0c\u6bcf\u4e2a\u5206\u7247\u7684\u526f\u672c\u5fc5\u9700\u5728\u4e0d\u540c\u7684\u673a\u5668\u4e0a\u3002\u6240\u4ee5\u5efa\u8868\u65f6\uff0c\u9009\u62e9\u526f\u672c\u6240\u5728be\u7684\u7b56\u7565\u4e3a\u5728\u6bcf\u4e2ahost\u4e0a\u968f\u673a\u9009\u53d6\u4e00\u4e2abe\u3002\u7136\u540e\u4ece\u8fd9\u4e9bbe\u4e2d\u968f\u673a\u9009\u53d6\u6240\u9700\u526f\u672c\u6570\u91cf\u7684be\u3002\u603b\u4f53\u4e0a\u505a\u5230\u6bcf\u4e2a\u673a\u5668\u4e0a\u5206\u7247\u5206\u5e03\u5747\u5300\u3002"),(0,n.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u5047\u5982\u9700\u8981\u521b\u5efa\u4e00\u4e2a3\u526f\u672c\u7684\u5206\u7247\uff0c\u5373\u4f7fcluster\u5305\u542b3\u4e2a\u6216\u4ee5\u4e0a\u7684instance\uff0c\u4f46\u662f\u53ea\u67092\u4e2a\u6216\u4ee5\u4e0b\u7684host\uff0c\u4f9d\u7136\u4e0d\u80fd\u521b\u5efa\u8be5\u5206\u7247\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861"),(0,n.kt)("p",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861\u7684\u7c92\u5ea6\u4e3acluster\u7ea7\u522b\uff0ccluster\u4e4b\u95f4\u4e0d\u505a\u8d1f\u8f7d\u5747\u8861\u3002\u4f46\u662f\u5728\u8ba1\u7b97\u8d1f\u8f7d\u662f\u5728host\u4e00\u7ea7\u8fdb\u884c\u7684\uff0c\u800c\u4e00\u4e2ahost\u4e0a\u53ef\u80fd\u5b58\u5728\u591a\u4e2a\u4e0d\u540ccluster\u7684BE instance\u3002 cluster\u5185\uff0c\u4f1a\u901a\u8fc7\u6bcf\u4e2ahost\u4e0a\u6240\u6709\u5206\u7247\u6570\u76ee\u3001\u5b58\u50a8\u4f7f\u7528\u7387\u8ba1\u7b97\u8d1f\u8f7d\uff0c\u7136\u540e\u628a\u8d1f\u8f7d\u9ad8\u7684\u673a\u5668\u4e0a\u7684\u5206\u7247\u5f80\u8d1f\u8f7d\u4f4e\u7684\u673a\u5668\u4e0a\u62f7\u8d1d\uff08\u8be6\u89c1\u8d1f\u8f7d\u5747\u8861\u76f8\u5173\u6587\u6863\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"LINK DATABASE\uff08\u8f6f\u94fe\uff09"),(0,n.kt)("p",{parentName:"li"}," \u591a\u4e2a\u96c6\u7fa4\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7\u8f6f\u94fe\u7684\u65b9\u5f0f\u8bbf\u95ee\u5f7c\u6b64\u7684\u6570\u636e\u3002\u94fe\u63a5\u7684\u7ea7\u522b\u4e3a\u4e0d\u540ccluster\u7684db\u3002"),(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5728\u4e00\u4e2acluster\u5185\uff0c\u6dfb\u52a0\u9700\u8981\u8bbf\u95ee\u7684\u5176\u4ed6cluster\u7684db\u7684\u4fe1\u606f\uff0c\u6765\u8bbf\u95ee\u5176\u4ed6cluster\u4e2d\u7684db\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5f53\u67e5\u8be2\u94fe\u63a5\u7684db\u65f6\uff0c\u6240\u4f7f\u7528\u7684\u8ba1\u7b97\u4ee5\u53ca\u5b58\u50a8\u8d44\u6e90\u4e3a\u6e90db\u6240\u5728cluster\u7684\u8d44\u6e90\u3002"),(0,n.kt)("p",{parentName:"li"},"\u88ab\u8f6f\u94fe\u7684db\u4e0d\u80fd\u5728\u6e90cluster\u4e2d\u5220\u9664\u3002\u53ea\u6709\u94fe\u63a5\u7684db\u88ab\u5220\u9664\u540e\uff0c\u624d\u53ef\u4ee5\u5220\u9664\u6e90db\u3002\u800c\u5220\u9664\u94fe\u63a5db\uff0c\u4e0d\u4f1a\u5220\u9664\u6e90db\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MIGRATE DATABASE"),(0,n.kt)("p",{parentName:"li"}," db\u53ef\u4ee5\u5728cluster\u4e4b\u95f4\u8fdb\u884c\u7269\u7406\u8fc1\u79fb\u3002"),(0,n.kt)("p",{parentName:"li"},"\u8981\u8fc1\u79fbdb\uff0c\u5fc5\u987b\u5148\u94fe\u63a5db\u3002\u6267\u884c\u8fc1\u79fb\u540e\u6570\u636e\u4f1a\u8fc1\u79fb\u5230\u94fe\u63a5\u7684db\u6240\u5728\u7684cluster\uff0c\u5e76\u4e14\u6267\u884c\u8fc1\u79fb\u540e\u6e90db\u88ab\u5220\u9664\uff0c\u94fe\u63a5\u65ad\u5f00\u3002"),(0,n.kt)("p",{parentName:"li"},"\u6570\u636e\u7684\u8fc1\u79fb\uff0c\u590d\u7528\u4e86\u8d1f\u8f7d\u5747\u8861\u4ee5\u53ca\u526f\u672c\u6062\u590d\u4e2d\uff0c\u590d\u5236\u6570\u636e\u7684\u6d41\u7a0b\uff08\u8be6\u89c1\u8d1f\u8f7d\u5747\u8861\u76f8\u5173\u6587\u6863\uff09\u3002\u5177\u4f53\u5b9e\u73b0\u4e0a\uff0c\u5728\u6267\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"MIRAGTE"),"\u547d\u4ee4\u540e\uff0cDoris\u4f1a\u5728\u5143\u6570\u636e\u4e2d\uff0c\u5c06\u6e90db\u7684\u6240\u6709\u526f\u672c\u6240\u5c5e\u7684cluster\uff0c\u4fee\u6539\u4e3a\u76ee\u7684cluster\u3002"),(0,n.kt)("p",{parentName:"li"},"Doris\u4f1a\u5b9a\u671f\u68c0\u67e5\u96c6\u7fa4\u5185\u673a\u5668\u4e4b\u95f4\u662f\u5426\u5747\u8861\u3001\u526f\u672c\u662f\u5426\u9f50\u5168\u3001\u662f\u5426\u6709\u591a\u4f59\u7684\u526f\u672c\u3002db\u7684\u8fc1\u79fb\u5373\u501f\u7528\u4e86\u8fd9\u4e2a\u6d41\u7a0b\uff0c\u5728\u68c0\u67e5\u526f\u672c\u9f50\u5168\u7684\u65f6\u5019\u540c\u65f6\u68c0\u67e5\u526f\u672c\u6240\u5728\u7684be\u662f\u5426\u5c5e\u4e8e\u8be5cluster\uff0c\u5982\u679c\u4e0d\u5c5e\u4e8e\uff0c\u5219\u8bb0\u5165\u8981\u6062\u590d\u7684\u526f\u672c\u3002\u5e76\u4e14\u526f\u672c\u591a\u4f59\u8981\u5220\u9664\u7684\u65f6\u5019\u4f1a\u4f18\u5148\u5220\u9664cluster\u5916\u7684\u526f\u672c\uff0c\u7136\u540e\u518d\u6309\u7167\u73b0\u6709\u7684\u7b56\u7565\u9009\u62e9\uff1a\u5b95\u673a\u7684be\u7684\u526f\u672c->clone\u7684\u526f\u672c->\u7248\u672c\u843d\u540e\u7684\u526f\u672c->\u8d1f\u8f7d\u9ad8\u7684host\u4e0a\u7684\u526f\u672c\uff0c\u76f4\u5230\u526f\u672c\u6ca1\u6709\u591a\u4f59\u3002"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(78602).Z,width:"471",height:"570"})),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"BE\u7684\u8fdb\u7a0b\u9694\u79bb")),(0,n.kt)("p",null,"\u2003\u2003\u4e3a\u4e86\u5b9e\u73b0be\u8fdb\u7a0b\u4e4b\u95f4\u5b9e\u9645cpu\u3001io\u4ee5\u53ca\u5185\u5b58\u7684\u9694\u79bb\uff0c\u9700\u8981\u4f9d\u8d56\u4e8ebe\u7684\u90e8\u7f72\u3002\u90e8\u7f72\u7684\u65f6\u5019\u9700\u8981\u5728\u5916\u56f4\u914d\u7f6ecgroup\uff0c\u628a\u8981\u90e8\u7f72\u7684be\u7684\u8fdb\u7a0b\u90fd\u5199\u5165cgroup\u3002\u5982\u679c\u8981\u5b9e\u73b0io\u7684\u7269\u7406\u9694\u79bb\u5404be\u914d\u7f6e\u7684\u6570\u636e\u5b58\u653e\u8def\u5f84\u9700\u8981\u5728\u4e0d\u540c\u78c1\u76d8\u4e0a\uff0c\u8fd9\u91cc\u4e0d\u505a\u8fc7\u591a\u7684\u4ecb\u7ecd\u3002"))}o.isMDXComponent=!0},84062:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/backend_state-70be6d189e9e31c1838dd997aac9b963.png"},78602:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cluster_link_and_migrate_db-f4f66f983d55aa6aa357f05b25546b46.png"},83454:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cluster_namaspace-892975a5c361629c77d703b859f4ad30.png"},39736:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/multi_tenant_arch-23ef8b3498a5c6d604fa431bcdf7b99d.png"},85989:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/palo_meta-f45c6f04b5899346d6e00a4c1e72797e.png"},70113:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/replica_recover-c0efccae5bab03992423dce5f56d8714.png"},99618:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/user_authority-ab753b5c6fc288427a300d1ebe41c398.png"}}]);