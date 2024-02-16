"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4765],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(r),f=a,d=y["".concat(i,".").concat(f)]||y[f]||p[f]||o;return r?t.createElement(d,s(s({ref:n},u),{},{components:r})):t.createElement(d,s({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[y]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16592:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const o={title:"JSON_ARRAY",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/json-array",id:"sql-manual/sql-functions/json-functions/json-array",title:"JSON_ARRAY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/json-functions/json-array.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-array",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-array",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_ARRAY",language:"en"},sidebar:"docs",previous:{title:"JSON_TYPE",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-type"},next:{title:"JSON_OBJECT",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-object"}},i={},c=[{value:"json_array",id:"json_array",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_array"},"json_array"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR json_array(VARCHAR,...)")),(0,a.yg)("p",null,"Generate a json array containing the specified values, return empty if no values"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'MySQL> select json_array();\n+--------------+\n| json_array() |\n+--------------+\n| []           |\n+--------------+\n\nMySQL> select json_array(null);\n+--------------------+\n| json_array(\'NULL\') |\n+--------------------+\n| [NULL]             |\n+--------------------+\n\n\nMySQL> SELECT json_array(1, "abc", NULL, TRUE, CURTIME());\n+-----------------------------------------------+\n| json_array(1, \'abc\', \'NULL\', TRUE, curtime()) |\n+-----------------------------------------------+\n| [1, "abc", NULL, TRUE, "10:41:15"]            |\n+-----------------------------------------------+\n\n\nMySQL> select json_array("a", null, "c");\n+------------------------------+\n| json_array(\'a\', \'NULL\', \'c\') |\n+------------------------------+\n| ["a", NULL, "c"]             |\n+------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"json,array,json_array"))}p.isMDXComponent=!0}}]);