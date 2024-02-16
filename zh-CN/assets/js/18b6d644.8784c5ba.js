"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[966],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>E});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,E=u["".concat(i,".").concat(g)]||u[g]||m[g]||l;return r?a.createElement(E,o(o({ref:t},c),{},{components:r})):a.createElement(E,o({ref:t},c))}));function E(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const l={title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",id:"version-1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",title:"ALTER-SYSTEM-MODIFY-BACKEND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND.md",sourceDirName:"sql-manual/sql-reference/Cluster-Management-Statements",slug:"/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-OBSERVER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER"},next:{title:"ALTER-SYSTEM-ADD-FOLLOWER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER"}},i={},p=[{value:"ALTER-SYSTEM-MODIFY-BACKEND",id:"alter-system-modify-backend",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"alter-system-modify-backend"},"ALTER-SYSTEM-MODIFY-BACKEND"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"ALTER SYSTEM MKDIFY BACKEND"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"\u4fee\u6539 BE \u8282\u70b9\u5c5e\u6027\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\uff09"),(0,n.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host:heartbeat_port" SET ("key" = "value"[, ...]);\n')),(0,n.yg)("p",null," \u8bf4\u660e\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"host \u53ef\u4ee5\u662f\u4e3b\u673a\u540d\u6216\u8005ip\u5730\u5740"),(0,n.yg)("li",{parentName:"ol"},"heartbeat_port \u4e3a\u8be5\u8282\u70b9\u7684\u5fc3\u8df3\u7aef\u53e3"),(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539 BE \u8282\u70b9\u5c5e\u6027\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"tag.xxx\uff1a\u8d44\u6e90\u6807\u7b7e"),(0,n.yg)("li",{parentName:"ul"},"disable_query: \u67e5\u8be2\u7981\u7528\u5c5e\u6027"),(0,n.yg)("li",{parentName:"ul"},"disable_load: \u5bfc\u5165\u7981\u7528\u5c5e\u6027        ")),(0,n.yg)("p",null,"\u6ce8\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},'\u53ef\u4ee5\u7ed9\u4e00\u4e2a Backend \u8bbe\u7f6e\u591a\u79cd\u8d44\u6e90\u6807\u7b7e\u3002\u4f46\u5fc5\u987b\u5305\u542b "tag.location"\u3002')),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u8d44\u6e90\u6807\u7b7e"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u67e5\u8be2\u7981\u7528\u5c5e\u6027"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_query" = "true");\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u5bfc\u5165\u7981\u7528\u5c5e\u6027"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_load" = "true");\n')))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, BACKEND, ALTER SYSTEM\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);