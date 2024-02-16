"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19602],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={title:"BITMAP_INTERSECT",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-intersect",id:"sql-manual/sql-functions/bitmap-functions/bitmap-intersect",title:"BITMAP_INTERSECT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap-intersect.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-intersect",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-intersect",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_INTERSECT",language:"en"},sidebar:"docs",previous:{title:"INTERSECT_COUNT",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/intersect-count"},next:{title:"ORTHOGONAL_BITMAP_INTERSECT",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect"}},l={},c=[{value:"bitmap_intersect",id:"bitmap_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_intersect"},"bitmap_intersect"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Aggregation function, used to calculate the bitmap intersection after grouping. Common usage scenarios such as: calculating user retention rate."),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_INTERSECT(BITMAP value)")),(0,a.yg)("p",null,"Enter a set of bitmap values, find the intersection of the set of bitmap values, and return."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"Table schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Find the retention of users between 2020-05-18 and 2020-05-19 under different tags.\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")),(0,a.yg)("p",null,"Used in combination with the bitmap_to_string function to obtain the specific data of the intersection"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Who are the users retained under different tags between 2020-05-18 and 2020-05-19?\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_INTERSECT, BITMAP\n")))}m.isMDXComponent=!0}}]);