"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29651],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,y=m["".concat(s,".").concat(u)]||m[u]||g[u]||l;return t?r.createElement(y,o(o({ref:a},c),{},{components:t})):r.createElement(y,o({ref:a},c))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52036:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const l={title:"SHOW-DATABASES",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",id:"sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",title:"SHOW-DATABASES",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-DATABASES",language:"en"},sidebar:"docs",previous:{title:"SHOW-COLLATION",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION"},next:{title:"SHOW DATA SKEW",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW"}},s={},p=[{value:"SHOW-DATABASES",id:"show-databases",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"show-databases"},"SHOW-DATABASES"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"SHOW DATABASES"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to display the currently visible db"),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES [FROM catalog] [filter expr];\n")),(0,n.yg)("p",null,"illustrate:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES")," will get all database names from current catalog."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES FROM catalog")," will all database names from the catalog named 'catalog'."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES filter_expr")," will get filtered database names from current catalog."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES FROM catalog filter_expr")," is not support yet.")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Display all the database names from current catalog."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES;\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"+--------------------+\n| Database           |\n+--------------------+\n| test               |\n| information_schema |\n+--------------------+\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Display all database names from the catalog named 'hms_catalog'."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES from hms_catalog;\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"+---------------+\n| Database      |\n+---------------+\n| default       |\n| tpch          |\n+---------------+\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Display the filtered database names from current catalog with the expr 'like'."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES like 'infor%';\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n+--------------------+\n")))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"SHOW, DATABASES\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);