"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68665],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>E});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,E=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(E,o(o({ref:t},p),{},{components:r})):n.createElement(E,o({ref:t},p))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const l={title:"ALTER-SYSTEM-ADD-BROKER",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",id:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",title:"ALTER-SYSTEM-ADD-BROKER",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER.md",sourceDirName:"sql-manual/sql-reference/Cluster-Management-Statements",slug:"/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",permalink:"/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-SYSTEM-ADD-BROKER",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-BACKEND",permalink:"/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BACKEND"},next:{title:"ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND"}},i={},c=[{value:"ALTER-SYSTEM-ADD-BROKER",id:"alter-system-add-broker",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-add-broker"},"ALTER-SYSTEM-ADD-BROKER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM ADD BROKER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to add a BROKER node. (Administrator only!)"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD BROKER broker_name "broker_host1:broker_ipc_port1","broker_host2:broker_ipc_port2",...;\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add two brokers"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER SYSTEM ADD BROKER "host1:port", "host2:port";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"When fe enable fqdn(",(0,a.yg)("a",{parentName:"p",href:"/docs/dev/admin-manual/cluster-management/fqdn"},"fqdn"),"),add one Broker"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER SYSTEM ADD BROKER "broker_fqdn1:port";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, FOLLOWER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);