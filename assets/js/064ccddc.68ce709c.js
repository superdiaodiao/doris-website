"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74360],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},11515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const l={title:"ALTER-RESOURCE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",title:"ALTER-RESOURCE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-RESOURCE",language:"en"},sidebar:"docs",previous:{title:"ALTER-POLICY",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY"},next:{title:"ALTER-COLOCATE-GROUP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP"}},s={},c=[{value:"ALTER-RESOURCE",id:"alter-resource",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-resource"},"ALTER-RESOURCE"),(0,a.yg)("version",{since:"1.2.0"}),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER RESOURCE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to modify an existing resource. Only the root or admin user can modify resources.\nSyntax:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'resource_name\'\nPROPERTIES ("key"="value", ...);\n')),(0,a.yg)("p",null,"Note: The resource type does not support modification."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Modify the working directory of the Spark resource named spark0:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'spark0\' PROPERTIES ("working_dir" = "hdfs://127.0.0.1:10000/tmp/doris_new");\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Modify the maximum number of connections to the S3 resource named remote_s3:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'remote_s3\' PROPERTIES ("s3.connection.maximum" = "100");\n')),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Modify information related to cold and hot separation S3 resources")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Support",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.access_key"),"  s3 ak"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.secret_key"),"  s3 sk"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.session_token")," s3 token"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.connection.maximum")," default 50"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.connection.timeout")," default 1000ms"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.connection.request.timeout")," default 3000ms"))),(0,a.yg)("li",{parentName:"ul"},"Not Support",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.region")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'s3.bucket"')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.root.path")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.endpoint"))))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'  ALTER RESOURCE "showPolicy_1_resource" PROPERTIES("s3.connection.maximum" = "1111");\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, RESOURCE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);