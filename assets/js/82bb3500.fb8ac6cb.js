"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90369],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const a={title:"like",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/like/like",id:"version-1.2/sql-manual/sql-functions/string-functions/like/like",title:"like",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/like/like.md",sourceDirName:"sql-manual/sql-functions/string-functions/like",slug:"/sql-manual/sql-functions/string-functions/like/",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/like/",draft:!1,tags:[],version:"1.2",frontMatter:{title:"like",language:"en"},sidebar:"docs",previous:{title:"multi_match_any",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/search/multi_match_any"},next:{title:"not like",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/like/not_like"}},o={},c=[{value:"like",id:"like",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"like"},"like"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BOOLEAN like(VARCHAR str, VARCHAR pattern)")),(0,i.yg)("p",null,"Perform fuzzy matching on the string str, return true if it matches, and false if it doesn't match."),(0,i.yg)("p",null,"like match/fuzzy match, will be used in combination with % and _."),(0,i.yg)("p",null,"the percent sign ('%') represents zero, one, or more characters."),(0,i.yg)("p",null,"the underscore ('_') represents a single character."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"'a'   // Precise matching, the same effect as `=`\n'%a'  // data ending with a\n'a%'  // data starting with a\n'%a%' // data containing a\n'_a_' // three digits and the middle letter is a\n'_a'  // two digits and the ending letter is a\n'a_'  // two digits and the initial letter is a\n'a__b'  // four digits, starting letter is a and ending letter is b\n")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// Return the data containing a in the k1 string\nmysql> select k1 from test where k1 like '%a%';\n+-------+\n| k1    |\n+-------+\n| a     |\n| bab   |\n+-------+\n\n// Return the data equal to a in the k1 string\nmysql> select k1 from test where k1 like 'a';\n+-------+\n| k1    |\n+-------+\n| a     |\n+-------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"LIKE\n")))}d.isMDXComponent=!0}}]);