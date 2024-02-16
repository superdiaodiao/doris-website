"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12738],{15680:(e,n,t)=>{t.d(n,{xA:()=>f,yg:()=>p});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,p=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(p,a(a({ref:n},f),{},{components:t})):r.createElement(p,a({ref:n},f))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),i=(t(96540),t(15680));const o={title:"Config Dir",language:"en"},a=void 0,l={unversionedId:"admin-manual/config/config-dir",id:"version-1.2/admin-manual/config/config-dir",title:"Config Dir",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/config/config-dir.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/config-dir",permalink:"/docs/1.2/admin-manual/config/config-dir",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Config Dir",language:"en"},sidebar:"docs",previous:{title:"BE OOM Analysis",permalink:"/docs/1.2/admin-manual/maint-monitor/memory-management/be-oom-analysis"},next:{title:"FE Configuration",permalink:"/docs/1.2/admin-manual/config/fe-config"}},c={},s=[{value:"hdfs-site.xml and hive-site.xml",id:"hdfs-sitexml-and-hive-sitexml",level:2}],f={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"config-dir"},"Config Dir"),(0,i.yg)("p",null,"The configuration file directory for FE and BE is ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/"),". In addition to storing the default fe.conf, be.conf and other files, this directory is also used for the common configuration file storage directory."),(0,i.yg)("p",null,"Users can store some configuration files in it, and the system will automatically read them."),(0,i.yg)("version",{since:"1.2.0"},(0,i.yg)("h2",{id:"hdfs-sitexml-and-hive-sitexml"},"hdfs-site.xml and hive-site.xml"),(0,i.yg)("p",null,"In some functions of Doris, you need to access data on HDFS, or access Hive metastore."),(0,i.yg)("p",null,"We can manually fill in various HDFS/Hive parameters in the corresponding statement of the function."),(0,i.yg)("p",null,"But these parameters are very many, if all are filled in manually, it is very troublesome."),(0,i.yg)("p",null,"Therefore, users can place the HDFS or Hive configuration file hdfs-site.xml/hive-site.xml directly in the ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/")," directory. Doris will automatically read these configuration files."),(0,i.yg)("p",null,"The configuration that the user fills in the command will overwrite the configuration items in the configuration file."),(0,i.yg)("p",null,"In this way, users only need to fill in a small amount of configuration to complete the access to HDFS/Hive.")))}m.isMDXComponent=!0}}]);