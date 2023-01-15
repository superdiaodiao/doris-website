"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[31992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u7528\u6237\u914d\u7f6e\u9879",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/config/user-property",id:"admin-manual/config/user-property",title:"\u7528\u6237\u914d\u7f6e\u9879",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/config/user-property.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/user-property",permalink:"/zh-CN/docs/admin-manual/config/user-property",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7528\u6237\u914d\u7f6e\u9879",language:"zh-CN"},sidebar:"docs",previous:{title:"BE \u914d\u7f6e\u9879",permalink:"/zh-CN/docs/admin-manual/config/be-config"},next:{title:"\u6743\u9650\u7ba1\u7406",permalink:"/zh-CN/docs/admin-manual/privilege-ldap/user-privilege"}},u={},c=[{value:"\u67e5\u770b\u914d\u7f6e\u9879",id:"\u67e5\u770b\u914d\u7f6e\u9879",level:2},{value:"\u8bbe\u7f6e\u914d\u7f6e\u9879",id:"\u8bbe\u7f6e\u914d\u7f6e\u9879",level:2},{value:"\u5e94\u7528\u4e3e\u4f8b",id:"\u5e94\u7528\u4e3e\u4f8b",level:2},{value:"\u914d\u7f6e\u9879\u5217\u8868",id:"\u914d\u7f6e\u9879\u5217\u8868",level:2},{value:"max_user_connections",id:"max_user_connections",level:3},{value:"max_query_instances",id:"max_query_instances",level:3},{value:"resource",id:"resource",level:3},{value:"quota",id:"quota",level:3},{value:"default_load_cluster",id:"default_load_cluster",level:3},{value:"load_cluster",id:"load_cluster",level:3}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-\u914d\u7f6e\u9879"},"User \u914d\u7f6e\u9879"),(0,a.kt)("p",null,"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86 User \u7ea7\u522b\u7684\u76f8\u5173\u914d\u7f6e\u9879\u3002User \u7ea7\u522b\u7684\u914d\u7f6e\u751f\u6548\u8303\u56f4\u4e3a\u5355\u4e2a\u7528\u6237\u3002\u6bcf\u4e2a\u7528\u6237\u90fd\u53ef\u4ee5\u8bbe\u7f6e\u81ea\u5df1\u7684 User property\u3002\u76f8\u4e92\u4e0d\u5f71\u54cd\u3002"),(0,a.kt)("h2",{id:"\u67e5\u770b\u914d\u7f6e\u9879"},"\u67e5\u770b\u914d\u7f6e\u9879"),(0,a.kt)("p",null,"FE \u542f\u52a8\u540e\uff0c\u5728 MySQL \u5ba2\u6237\u7aef\uff0c\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u67e5\u770b User \u7684\u914d\u7f6e\u9879\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SHOW PROPERTY [FOR user] [LIKE key pattern]")),(0,a.kt)("p",null,"\u5177\u4f53\u8bed\u6cd5\u53ef\u901a\u8fc7\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"help show property;")," \u67e5\u8be2\u3002"),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u914d\u7f6e\u9879"},"\u8bbe\u7f6e\u914d\u7f6e\u9879"),(0,a.kt)("p",null,"FE \u542f\u52a8\u540e\uff0c\u5728MySQL \u5ba2\u6237\u7aef\uff0c\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u4fee\u6539 User \u7684\u914d\u7f6e\u9879\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']")),(0,a.kt)("p",null,"\u5177\u4f53\u8bed\u6cd5\u53ef\u901a\u8fc7\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"help set property;")," \u67e5\u8be2\u3002"),(0,a.kt)("p",null,"User \u7ea7\u522b\u7684\u914d\u7f6e\u9879\u53ea\u4f1a\u5bf9\u6307\u5b9a\u7528\u6237\u751f\u6548\uff0c\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u7528\u6237\u7684\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u5e94\u7528\u4e3e\u4f8b"},"\u5e94\u7528\u4e3e\u4f8b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 Billie \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_user_connections")),(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW PROPERTY FOR 'Billie' LIKE '%max_user_connections%';")," \u67e5\u770b Billie \u7528\u6237\u5f53\u524d\u7684\u6700\u5927\u94fe\u63a5\u6570\u4e3a 100\u3002"),(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"SET PROPERTY FOR 'Billie' 'max_user_connections' = '200';")," \u4fee\u6539 Billie \u7528\u6237\u7684\u5f53\u524d\u6700\u5927\u8fde\u63a5\u6570\u5230 200\u3002"))),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879\u5217\u8868"},"\u914d\u7f6e\u9879\u5217\u8868"),(0,a.kt)("h3",{id:"max_user_connections"},"max_user_connections"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u7528\u6237\u6700\u5927\u7684\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a100\u3002\u4e00\u822c\u60c5\u51b5\u4e0d\u9700\u8981\u66f4\u6539\u8be5\u53c2\u6570\uff0c\u9664\u975e\u67e5\u8be2\u7684\u5e76\u53d1\u6570\u8d85\u8fc7\u4e86\u9ed8\u8ba4\u503c\u3002\n")),(0,a.kt)("h3",{id:"max_query_instances"},"max_query_instances"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u7528\u6237\u540c\u4e00\u65f6\u95f4\u70b9\u53ef\u4f7f\u7528\u7684instance\u4e2a\u6570, \u9ed8\u8ba4\u662f-1\uff0c\u5c0f\u4e8e\u7b49\u4e8e0\u5c06\u4f1a\u4f7f\u7528\u914d\u7f6edefault_max_query_instances.\n")),(0,a.kt)("h3",{id:"resource"},"resource"),(0,a.kt)("h3",{id:"quota"},"quota"),(0,a.kt)("h3",{id:"default_load_cluster"},"default_load_cluster"),(0,a.kt)("h3",{id:"load_cluster"},"load_cluster"))}s.isMDXComponent=!0}}]);