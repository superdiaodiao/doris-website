"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34717],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),i=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(r),y=a,u=c["".concat(p,".").concat(y)]||c[y]||d[y]||l;return r?t.createElement(u,o(o({ref:n},m),{},{components:r})):t.createElement(u,o({ref:n},m))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},93425:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const l={title:"explode_json_array",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/explode-json-array",id:"version-dev/sql-manual/sql-functions/table-functions/explode-json-array",title:"explode_json_array",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/table-functions/explode-json-array.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode-json-array",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-array.md",tags:[],version:"dev",frontMatter:{title:"explode_json_array",language:"zh-CN"},sidebar:"docs",previous:{title:"SM3SUM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm3sum"},next:{title:"explode",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode"}},p={},i=[{value:"explode_json_array",id:"explode_json_array",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:i};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explode_json_array"},"explode_json_array"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u8868\u51fd\u6570\uff0c\u9700\u914d\u5408 Lateral View \u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5c55\u5f00\u4e00\u4e2a json \u6570\u7ec4\u3002\u6839\u636e\u6570\u7ec4\u5143\u7d20\u7c7b\u578b\uff0c\u6709\u4e09\u79cd\u51fd\u6570\u540d\u79f0\u3002\u5206\u522b\u5bf9\u5e94\u6574\u578b\u3001\u6d6e\u70b9\u548c\u5b57\u7b26\u4e32\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"explode_json_array_int(json_str)\nexplode_json_array_double(json_str)\nexplode_json_array_string(json_str)\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("p",null,"\u539f\u8868\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select k1 from example1 order by k1;\n+------+\n| k1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n|    5 |\n|    6 |\n+------+\n")),(0,a.kt)("p",null,"Lateral View:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select k1, e1 from example1 lateral view explode_json_array_int('[]') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int('[1,2,3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    2 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    2 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int('[1,\"b\",3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int('[\"a\",\"b\",\"c\"]') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int('{\"a\": 3}') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[]') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[1,2,3]') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[1,\"b\",3]') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[1.0,2.0,3.0]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    2 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    2 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[1,\"b\",3]') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('[\"a\",\"b\",\"c\"]') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double('{\"a\": 3}') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('[]') tmp1 as e1 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('[1.0,2.0,3.0]') tmp1 as e1 order by k1, e1;\n+------+----------+\n| k1   | e1       |\n+------+----------+\n|    1 | 1.000000 |\n|    1 | 2.000000 |\n|    1 | 3.000000 |\n|    2 | 1.000000 |\n|    2 | 2.000000 |\n|    2 | 3.000000 |\n|    3 | 1.000000 |\n|    3 | 2.000000 |\n|    3 | 3.000000 |\n+------+----------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('[1,\"b\",3]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | 1    |\n|    1 | 3    |\n|    1 | b    |\n|    2 | 1    |\n|    2 | 3    |\n|    2 | b    |\n|    3 | 1    |\n|    3 | 3    |\n|    3 | b    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('[\"a\",\"b\",\"c\"]') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | a    |\n|    1 | b    |\n|    1 | c    |\n|    2 | a    |\n|    2 | b    |\n|    2 | c    |\n|    3 | a    |\n|    3 | b    |\n|    3 | c    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string('{\"a\": 3}') tmp1 as e1 order by k1, e1;\nEmpty set\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"explode,json,array,json_array,explode_json,explode_json_array"))}c.isMDXComponent=!0}}]);