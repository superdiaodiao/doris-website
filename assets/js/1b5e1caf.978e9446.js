"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[96469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,g=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"System settings",language:"en"},s=void 0,l={unversionedId:"ecosystem/doris-manager/system-settings",id:"ecosystem/doris-manager/system-settings",title:"System settings",description:"\x3c!--",source:"@site/docs/ecosystem/doris-manager/system-settings.md",sourceDirName:"ecosystem/doris-manager",slug:"/ecosystem/doris-manager/system-settings",permalink:"/docs/ecosystem/doris-manager/system-settings",draft:!1,tags:[],version:"current",frontMatter:{title:"System settings",language:"en"},sidebar:"docs",previous:{title:"Space management",permalink:"/docs/ecosystem/doris-manager/space-management"},next:{title:"Seatunnel Connector Flink Doris",permalink:"/docs/ecosystem/seatunnel/flink-sink"}},o={},d=[{value:"users",id:"users",level:2},{value:"User management under local authentication",id:"user-management-under-local-authentication",level:3},{value:"Edit User",id:"edit-user",level:3},{value:"Edit user information",id:"edit-user-information",level:4},{value:"reset user password",id:"reset-user-password",level:4},{value:"Deactivate/Activate User",id:"deactivateactivate-user",level:4},{value:"User permission description",id:"user-permission-description",level:2},{value:"Super administrator privileges",id:"super-administrator-privileges",level:3},{value:"Space administrator permissions",id:"space-administrator-permissions",level:3}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-settings"},"System settings"),(0,n.kt)("p",null,"The super administrator can mainly perform the following operations under the platform module:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Perform relevant operations on platform users"),(0,n.kt)("li",{parentName:"ul"},"Have the highest level of authority on the platform")),(0,n.kt)("p",null,"User permission description"),(0,n.kt)("h2",{id:"users"},"users"),(0,n.kt)("h3",{id:"user-management-under-local-authentication"},"User management under local authentication"),(0,n.kt)("p",null,"Click the Add User button to create a new user with username and email information."),(0,n.kt)("p",null,' Doris Manger will assign a temporary password to the new user. The new user needs to log in with the set username/email and temporary password. After logging in, you can create a new password in "Account Settings".'),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(47558).Z,width:"2646",height:"930"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5026).Z,width:"2628",height:"672"})),(0,n.kt)("h3",{id:"edit-user"},"Edit User"),(0,n.kt)("p",null,"Super administrators can manage users, including editing user information, resetting user passwords, and deactivating users."),(0,n.kt)("h4",{id:"edit-user-information"},"Edit user information"),(0,n.kt)("p",null,'Click to select and select "Edit" to modify the user name and email address. If the user mailbox is updated, the user needs to log in with the updated mailbox, and the password will not be updated.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(69733).Z,width:"2634",height:"658"})),(0,n.kt)("h4",{id:"reset-user-password"},"reset user password"),(0,n.kt)("p",null,'Click to select "Reset Password", and after confirming this operation, Doris Manger will reassign a temporary password for the user. The user needs to log in with the set email address and the new temporary password. After logging in, you can go to "Account Settings" Create a new password.'),(0,n.kt)("h4",{id:"deactivateactivate-user"},"Deactivate/Activate User"),(0,n.kt)("p",null,"Click Opt-out user, and after confirming to deactivate the user, the user's status will be changed from active to inactive. Deactivated users will not be able to log in to Doris Manger."),(0,n.kt)("p",null,"Click Activate User on the right side of the user to reactivate the user. The user's status will be changed back to enabled and will be able to log in to Doris Manger again."),(0,n.kt)("p",null,"Note that super administrators cannot deactivate their own user accounts, and there must be at least one non-deactivated super administrator user in the system."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(40575).Z,width:"2648",height:"906"})),(0,n.kt)("h2",{id:"user-permission-description"},"User permission description"),(0,n.kt)("h3",{id:"super-administrator-privileges"},"Super administrator privileges"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Create"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Edit"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Delete"),(0,n.kt)("th",{parentName:"tr",align:"left"},"View"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Roles"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Space"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713")))),(0,n.kt)("h3",{id:"space-administrator-permissions"},"Space administrator permissions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Create"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Edit"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Delete"),(0,n.kt)("th",{parentName:"tr",align:"left"},"View"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Roles"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Space"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2713")))))}m.isMDXComponent=!0},47558:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/systemsettings-1-a721344ca09032d28e2cf27db5367ab0.png"},5026:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/systemsettings-2-dd439f5627b03373190d5096e2139e1b.png"},69733:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/systemsettings-3-e99db0e2da144f4b55a3dc13d94417c2.png"},40575:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/systemsettings-4-7cab84c26ca48288b50142eb3a61d6ac.png"}}]);