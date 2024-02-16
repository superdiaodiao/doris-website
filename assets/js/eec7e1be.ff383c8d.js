"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64162],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>E});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,E=m["".concat(o,".").concat(u)]||m[u]||d[u]||s;return t?n.createElement(E,l(l({ref:a},c),{},{components:t})):n.createElement(E,l({ref:a},c))}));function E(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62177:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const s={title:"CREATE-USER",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",title:"CREATE-USER",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-USER",language:"en"},sidebar:"docs",previous:{title:"DROP-ROLE",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE"},next:{title:"DROP-USER",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-USER"}},o={},p=[{value:"CREATE-USER",id:"create-user",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-user"},"CREATE-USER"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE USER"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"The CREATE USER command is used to create a Doris user."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER [IF EXISTS] user_identity [IDENTIFIED BY 'password']\n[DEFAULT ROLE 'role_name']\n[password_policy]\n\nuser_identity:\n    'user_name'@'host'\n    \npassword_policy:\n\n    1. PASSWORD_HISTORY [n|DEFAULT]\n    2. PASSWORD_EXPIRE [DEFAULT|NEVER|INTERVAL n DAY/HOUR/SECOND]\n    3. FAILED_LOGIN_ATTEMPTS n\n    4. PASSWORD_LOCK_TIME [n DAY/HOUR/SECOND|UNBOUNDED]\n")),(0,r.yg)("p",null,"In Doris, a user_identity uniquely identifies a user. user_identity consists of two parts, user_name and host, where username is the username. host Identifies the host address where the client connects. The host part can use % for fuzzy matching. If no host is specified, it defaults to '%', which means the user can connect to Doris from any host."),(0,r.yg)("p",null,"The host part can also be specified as a domain, the syntax is: 'user_name'@","['domain']",", even if it is surrounded by square brackets, Doris will think this is a domain and try to resolve its ip address. ."),(0,r.yg)("p",null,"If a role (ROLE) is specified, the newly created user will be automatically granted the permissions of the role. If not specified, the user has no permissions by default. The specified ROLE must already exist."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"password_policy")," is a clause used to specify policies related to password authentication login. Currently, the following policies are supported:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY")),(0,r.yg)("p",{parentName:"li"},"Whether to allow the current user to use historical passwords when resetting their passwords. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY 10")," means that it is forbidden to use the password set in the past 10 times as a new password. If set to ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY DEFAULT"),", the value in the global variable ",(0,r.yg)("inlineCode",{parentName:"p"},"password_history")," will be used. ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," means do not enable this feature. Default is 0.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE")),(0,r.yg)("p",{parentName:"li"},"Set the expiration time of the current user's password. For example ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE INTERVAL 10 DAY")," means the password will expire in 10 days. ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE NEVER")," means that the password does not expire. If set to ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE DEFAULT"),", the value in the global variable ",(0,r.yg)("inlineCode",{parentName:"p"},"default_password_lifetime")," is used. Defaults to NEVER (or 0), which means it will not expire.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_LOCK_TIME")),(0,r.yg)("p",{parentName:"li"},"When the current user logs in, if the user logs in with the wrong password for n times, the account will be locked, and the lock time is set. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY")," means that if you log in wrongly for 3 times, the account will be locked for one day."),(0,r.yg)("p",{parentName:"li"},"A locked account can be actively unlocked through the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER USER")," statement."))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a passwordless user (if host is not specified, it is equivalent to jack@'%')"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a user with a password to allow login from '172.10.1.10'"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In order to avoid passing plaintext, use case 2 can also be created in the following way"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\nThe encrypted content can be obtained through PASSWORD(), for example:\nSELECT PASSWORD('123456');\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a user that is allowed to log in from the '192.168' subnet, and specify its role as example_role"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a user that is allowed to log in from the domain 'example_domain'"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '12345';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a user and assign a role"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a user, set the password to expire after 10 days, and set the account to be locked for one day if you log in failed for 3 times."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack' IDENTIFIED BY '12345' PASSWORD_EXPIRE INTERVAL 10 DAY FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a user and restrict non-resetable passwords to the last 8 passwords used."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack' IDENTIFIED BY '12345' PASSWORD_HISTORY 8;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, USER\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);