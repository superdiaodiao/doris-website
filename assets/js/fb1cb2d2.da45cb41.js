"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50765],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},73744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const l={title:"REVOKE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/REVOKE",id:"version-2.0/sql-manual/sql-reference/Account-Management-Statements/REVOKE",title:"REVOKE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/REVOKE.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/REVOKE",permalink:"/docs/sql-manual/sql-reference/Account-Management-Statements/REVOKE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"REVOKE",language:"en"},sidebar:"docs",previous:{title:"GRANT",permalink:"/docs/sql-manual/sql-reference/Account-Management-Statements/GRANT"},next:{title:"DROP-ROLE",permalink:"/docs/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE"}},i={},c=[{value:"REVOKE",id:"revoke",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"revoke"},"REVOKE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"REVOKE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"The REVOKE command has the following functions:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Revoke the specified permission of a user or a role."),(0,a.yg)("li",{parentName:"ol"},"Revoke the specified role previously granted to a user.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note that."),(0,a.yg)("p",{parentName:"blockquote"},'"Revoke the specified roles previously granted to a user" is supported in versions 2.0 and later')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE privilege_list ON db_name[.tbl_name] FROM user_identity [ROLE role_name]\n\nREVOKE privilege_list ON RESOURCE resource_name FROM user_identity [ROLE role_name]\n\nREVOKE role_list FROM user_identity\n")),(0,a.yg)("p",null,"user_identity:"),(0,a.yg)("p",null,"The user_identity syntax here is the same as CREATE USER. And must be a user_identity created with CREATE USER. The host in user_identity can be a domain name. If it is a domain name, the revocation time of permissions may be delayed by about 1 minute."),(0,a.yg)("p",null,"It is also possible to revoke the permissions of the specified ROLE, the executed ROLE must exist."),(0,a.yg)("p",null,"role_list is the list of roles to be revoked, separated by commas. The specified roles must exist."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Revoke the permission of user jack database testDb"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Revoke user jack resource spark_resource permission"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE USAGE_PRIV ON RESOURCE 'spark_resource' FROM 'jack'@'192.%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Revoke the roles role1 and role2 previously granted to jack"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE 'role1','role2' FROM 'jack'@'192.%';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REVOKE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);