"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[32266],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),a=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=a(t),d=i,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||s;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var a=2;a<s;a++)o[a]=t[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=t(87462),i=(t(67294),t(3905));const s={title:"ends_with",language:"en"},o=void 0,l={unversionedId:"sql-reference/sql-functions/string-functions/ends_with",id:"version-0.15/sql-reference/sql-functions/string-functions/ends_with",title:"ends_with",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/string-functions/ends_with.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/ends_with",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/ends_with",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ends_with",language:"en"},sidebar:"docs",previous:{title:"Concat_ws",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/concat_ws"},next:{title:"find_in_set",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/find_in_set"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:a};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ends_with"},"ends_with"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BOOLEAN ENDS_WITH (VARCHAR str, VARCHAR suffix)")),(0,i.kt)("p",null,"It returns true if the string ends with the specified suffix, otherwise it returns false.\nIf any parameter is NULL, it returns NULL."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select ends_with(\"Hello doris\", \"doris\");\n+-----------------------------------+\n| ends_with('Hello doris', 'doris') |\n+-----------------------------------+\n|                                 1 | \n+-----------------------------------+\n\nmysql> select ends_with(\"Hello doris\", \"Hello\");\n+-----------------------------------+\n| ends_with('Hello doris', 'Hello') |\n+-----------------------------------+\n|                                 0 | \n+-----------------------------------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"ENDS_WITH"))}f.isMDXComponent=!0}}]);