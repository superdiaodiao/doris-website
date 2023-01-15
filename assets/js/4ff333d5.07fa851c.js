"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[41091],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[d]="string"==typeof e?e:s,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const o={title:"case",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/conditional-functions/case",id:"version-dev/sql-manual/sql-functions/conditional-functions/case",title:"case",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/conditional-functions/case.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/case",permalink:"/docs/dev/sql-manual/sql-functions/conditional-functions/case",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/conditional-functions/case.md",tags:[],version:"dev",frontMatter:{title:"case",language:"en"},sidebar:"docs",previous:{title:"bitnot",permalink:"/docs/dev/sql-manual/sql-functions/bitwise-functions/bitnot"},next:{title:"coalesce",permalink:"/docs/dev/sql-manual/sql-functions/conditional-functions/coalesce"}},a={},c=[{value:"case",id:"case",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"case"},"case"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"CASE expression\n    WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n")),(0,s.kt)("p",null,"OR"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"CASE WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n")),(0,s.kt)("p",null,"Compare the expression with multiple possible values, and return the corresponding results when matching"),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mysql> select user_id, case user_id when 1 then 'user_id = 1' when 2 then 'user_id = 2' else 'user_id not exist' end test_case from test;\n+---------+-------------+\n| user_id | test_case   |\n+---------+-------------+\n| 1       | user_id = 1 |\n| 2       | user_id = 2 |\n+---------+-------------+\n \nmysql> select user_id, case when user_id = 1 then 'user_id = 1' when user_id = 2 then 'user_id = 2' else 'user_id not exist' end test_case from test;\n+---------+-------------+\n| user_id | test_case   |\n+---------+-------------+\n| 1       | user_id = 1 |\n| 2       | user_id = 2 |\n+---------+-------------+\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("p",null,"CASE"))}d.isMDXComponent=!0}}]);