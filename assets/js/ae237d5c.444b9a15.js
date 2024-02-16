"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26145],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,y=u["".concat(s,".").concat(g)]||u[g]||f[g]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},28538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={title:"VARIANCE,VAR_POP,VARIANCE_POP",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/variance",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/variance",title:"VARIANCE,VAR_POP,VARIANCE_POP",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/aggregate-functions/variance.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/variance",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/variance",draft:!1,tags:[],version:"2.0",frontMatter:{title:"VARIANCE,VAR_POP,VARIANCE_POP",language:"en"},sidebar:"docs",previous:{title:"APPROX_COUNT_DISTINCT",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/approx-count-distinct"},next:{title:"RETENTION",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/retention"}},s={},c=[{value:"VARIANCE,VAR_POP,VARIANCE_POP",id:"variancevar_popvariance_pop",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"variancevar_popvariance_pop"},"VARIANCE,VAR_POP,VARIANCE_POP"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARIANCE(expr)")),(0,a.yg)("p",null,"Returns the variance of the expr expression"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL > select variance(scan_rows) from log_statis group by datetime;\n+-----------------------+\n| variance(`scan_rows`) |\n+-----------------------+\n|    5.6183332881176211 |\n+-----------------------+\n\nMySQL > select var_pop(scan_rows) from log_statis group by datetime;\n+----------------------+\n| var_pop(`scan_rows`) |\n+----------------------+\n|   5.6230744719006163 |\n+----------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"VARIANCE,VAR_POP,VARIANCE_POP,VAR,POP"))}f.isMDXComponent=!0}}]);