"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69892],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(l,".").concat(f)]||p[f]||y[f]||s;return r?t.createElement(d,a(a({ref:n},u),{},{components:r})):t.createElement(d,a({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58105:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(58168),o=(r(96540),r(15680));const s={title:"ESQUERY",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/esquery",id:"sql-manual/sql-functions/string-functions/esquery",title:"ESQUERY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/esquery.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/esquery",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/esquery",draft:!1,tags:[],version:"current",frontMatter:{title:"ESQUERY",language:"zh-CN"},sidebar:"docs",previous:{title:"SLEEP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/sleep"},next:{title:"MULTI_SEARCH_ALL_POSITIONS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/search/multi-search-all-positions"}},l={},c=[{value:"esquery",id:"esquery",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"esquery"},"esquery"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean esquery(varchar field, varchar QueryDSL)")),(0,o.yg)("p",null,"\u901a\u8fc7esquery(field, QueryDSL)\u51fd\u6570\u5c06\u4e00\u4e9b\u65e0\u6cd5\u7528sql\u8868\u8ff0\u7684query\u5982match_phrase\u3001geoshape\u7b49\u4e0b\u63a8\u7ed9Elasticsearch\u8fdb\u884c\u8fc7\u6ee4\u5904\u7406.\nesquery\u7684\u7b2c\u4e00\u4e2a\u5217\u540d\u53c2\u6570\u7528\u4e8e\u5173\u8054index\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662fES\u7684\u57fa\u672cQuery DSL\u7684json\u8868\u8ff0\uff0c\u4f7f\u7528\u82b1\u62ec\u53f7{}\u5305\u542b\uff0cjson\u7684root key\u6709\u4e14\u53ea\u80fd\u6709\u4e00\u4e2a\uff0c\n\u5982match_phrase\u3001geo_shape\u3001bool\u7b49"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'match_phrase\u67e5\u8be2\uff1a\n\nselect * from es_table where esquery(k4, \'{\n        "match_phrase": {\n           "k4": "doris on es"\n        }\n    }\');\n\n\ngeo\u76f8\u5173\u67e5\u8be2\uff1a\n\nselect * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n')),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"esquery\n")))}y.isMDXComponent=!0}}]);