"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Cluster management",language:"en"},o=void 0,s={unversionedId:"ecosystem/doris-manager/cluster-managenent",id:"ecosystem/doris-manager/cluster-managenent",title:"Cluster management",description:"\x3c!--",source:"@site/docs/ecosystem/doris-manager/cluster-managenent.md",sourceDirName:"ecosystem/doris-manager",slug:"/ecosystem/doris-manager/cluster-managenent",permalink:"/docs/ecosystem/doris-manager/cluster-managenent",draft:!1,tags:[],version:"current",frontMatter:{title:"Cluster management",language:"en"},sidebar:"docs",previous:{title:"Initialize",permalink:"/docs/ecosystem/doris-manager/initializing"},next:{title:"Space list",permalink:"/docs/ecosystem/doris-manager/space-list"}},l={},c=[{value:"Cluster overview",id:"cluster-overview",level:2},{value:"View basic cluster information",id:"view-basic-cluster-information",level:3},{value:"View cluster resource usage",id:"view-cluster-resource-usage",level:3},{value:"Node list",id:"node-list",level:2},{value:"Parameter configuration",id:"parameter-configuration",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster-management"},"Cluster management"),(0,a.kt)("p",null,"The super administrator and space administrator can mainly perform the following operations under the cluster module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"View cluster overview"),(0,a.kt)("li",{parentName:"ul"},"View node list"),(0,a.kt)("li",{parentName:"ul"},"Edit parameter configuration")),(0,a.kt)("h2",{id:"cluster-overview"},"Cluster overview"),(0,a.kt)("h3",{id:"view-basic-cluster-information"},"View basic cluster information"),(0,a.kt)("p",null,"Cluster function, showing a cluster-based monitoring panel."),(0,a.kt)("p",null,'On the home page, click "Cluster" in the navigation bar to enter the cluster function.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(81498).Z,width:"2860",height:"1354"})),(0,a.kt)("p",null,"The operation and maintenance monitoring panel provides various performance monitoring indicators of the cluster for users to gain insight into the cluster status. Users can control the start and stop operations of the cluster through buttons in the upper right corner."),(0,a.kt)("h3",{id:"view-cluster-resource-usage"},"View cluster resource usage"),(0,a.kt)("p",null,"Users can view disk usage through pie charts, and view the number of databases, etc."),(0,a.kt)("h2",{id:"node-list"},"Node list"),(0,a.kt)("p",null,"Displays information about FE nodes, BE nodes, and brokers in the cluster.\nProvides fields including Node ID, Node Type, Host IP, and Node Status."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(54275).Z,width:"2674",height:"662"})),(0,a.kt)("h2",{id:"parameter-configuration"},"Parameter configuration"),(0,a.kt)("p",null,"Parameter configuration provides parameter name, parameter type, parameter value type, thermal effect and operation fields."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(55512).Z,width:"2656",height:"1376"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Operation"),': Click the "Edit" button, you can edit and modify the corresponding configuration value, you can choose the corresponding effective method; click the "View current value" button, you can view the current value corresponding to the host IP')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(94004).Z,width:"1592",height:"706"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56050).Z,width:"2358",height:"688"})))}p.isMDXComponent=!0},81498:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clustermanagenent-1-6ebb70cc3d0d2761b9a393721ae9ac18.png"},54275:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clustermanagenent-2-ea72b11ed7ec082239a9ac5de515c142.png"},55512:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clustermanagenent-3-ac350136b66230bed9e1cf44690ebe70.png"},94004:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clustermanagenent-4-35fa0a278b86a392d51ec04b4bc2752f.png"},56050:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clustermanagenent-5-a246e7bf3fb457d2f2f6002859ac2e95.png"}}]);