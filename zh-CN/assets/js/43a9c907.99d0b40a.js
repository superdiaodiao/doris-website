"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45657],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,h=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},18630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"JSON_SET",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json_set",id:"version-2.0/sql-manual/sql-functions/json-functions/json_set",title:"JSON_SET",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/json-functions/json_set.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_set",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json_set",draft:!1,tags:[],version:"2.0",frontMatter:{title:"JSON_SET",language:"en"}},l={},p=[{value:"json_set",id:"json_set",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"json_set"},"json_set"),(0,a.kt)("version",{since:"dev"}),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR json_set(VARCHAR json_str, VARCHAR path, VARCHAR val[, VARCHAR path, VARCHAR val] ...)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"json_set")," function inserts or updates data in a JSON and returns the result.Returns NULL if ",(0,a.kt)("inlineCode",{parentName:"p"},"json_str")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is NULL. Otherwise, an error occurs if the ",(0,a.kt)("inlineCode",{parentName:"p"},"json_str")," argument is not a valid JSON or any path argument is not a valid path expression or contains a * wildcard."),(0,a.kt)("p",null,"The path-value pairs are evaluated left to right."),(0,a.kt)("p",null,"A path-value pair for an existing path in the json overwrites the existing json value with the new value. A path-value pair for a nonexisting path in the json adds the value to the json if the path identifies one of these types of values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A member not present in an existing object. The member is added to the object and associated with the new value.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A position past the end of an existing array. The array is extended with the new value. If the existing value is not an array, it is autowrapped as an array, then extended with the new value."))),(0,a.kt)("p",null,"Otherwise, a path-value pair for a nonexisting path in the json is ignored and has no effect."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL> select json_set(null, null, null);\n+------------------------------+\n| json_set(NULL, NULL, 'NULL') |\n+------------------------------+\n| NULL                         |\n+------------------------------+\n\nMySQL> select json_set('{\"k\": 1}', \"$.k\", 2);\n+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.k', '2') |\n+------------------------------------+\n| {\"k\":2}                            |\n+------------------------------------+\n\nMySQL> select json_set('{\"k\": 1}', \"$.j\", 2);\n+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.j', '2') |\n+------------------------------------+\n| {\"k\":1,\"j\":2}                      |\n+------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"JSON, json_set"))}d.isMDXComponent=!0}}]);