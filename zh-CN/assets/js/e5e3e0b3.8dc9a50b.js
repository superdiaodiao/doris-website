"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),E=n,d=u["".concat(i,".").concat(E)]||u[E]||m[E]||l;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=E;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}E.displayName="MDXCreateElement"},97492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",id:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",title:"ALTER-SYSTEM-MODIFY-BACKEND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND.md",sourceDirName:"sql-manual/sql-reference/Cluster-Management-Statements",slug:"/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-BROKER",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER"},next:{title:"ALTER-SYSTEM-DECOMMISSION-BACKEND",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"}},i={},p=[{value:"ALTER-SYSTEM-MODIFY-BACKEND",id:"alter-system-modify-backend",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"alter-system-modify-backend"},"ALTER-SYSTEM-MODIFY-BACKEND"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"ALTER SYSTEM MKDIFY BACKEND"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"\u4fee\u6539 BE \u8282\u70b9\u5c5e\u6027\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\uff09"),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 host \u548c port \u67e5\u627e backend")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host:heartbeat_port" SET ("key" = "value"[, ...]);\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 backend_id \u67e5\u627e backend")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("key" = "value"[, ...]);\n')),(0,n.kt)("p",null," \u8bf4\u660e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"host \u53ef\u4ee5\u662f\u4e3b\u673a\u540d\u6216\u8005ip\u5730\u5740"),(0,n.kt)("li",{parentName:"ol"},"heartbeat_port \u4e3a\u8be5\u8282\u70b9\u7684\u5fc3\u8df3\u7aef\u53e3"),(0,n.kt)("li",{parentName:"ol"},"\u4fee\u6539 BE \u8282\u70b9\u5c5e\u6027\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tag.xxx\uff1a\u8d44\u6e90\u6807\u7b7e"),(0,n.kt)("li",{parentName:"ul"},"disable_query: \u67e5\u8be2\u7981\u7528\u5c5e\u6027"),(0,n.kt)("li",{parentName:"ul"},"disable_load: \u5bfc\u5165\u7981\u7528\u5c5e\u6027        ")),(0,n.kt)("p",null,"\u6ce8\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'\u53ef\u4ee5\u7ed9\u4e00\u4e2a Backend \u8bbe\u7f6e\u591a\u79cd\u8d44\u6e90\u6807\u7b7e\u3002\u4f46\u5fc5\u987b\u5305\u542b "tag.location"\u3002')),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u8d44\u6e90\u6807\u7b7e"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n')),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "id1" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u67e5\u8be2\u7981\u7528\u5c5e\u6027"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_query" = "true");\n')),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("disable_query" = "true");\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u5bfc\u5165\u7981\u7528\u5c5e\u6027"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_load" = "true");\n')),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("disable_load" = "true");\n')))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, BACKEND, ALTER SYSTEM\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);