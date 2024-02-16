"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62183],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),y=a,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},70272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const l={title:"DATE_SUB",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/date-sub",id:"sql-manual/sql-functions/date-time-functions/date-sub",title:"DATE_SUB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/date-sub.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date-sub",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/date-sub",draft:!1,tags:[],version:"current",frontMatter:{title:"DATE_SUB",language:"zh-CN"},sidebar:"docs",previous:{title:"DATE_ADD",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/date-add"},next:{title:"DATE_TRUNC",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/date-trunc"}},s={},u=[{value:"date_sub",id:"date_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date_sub"},"date_sub"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_SUB(DATETIME date, INTERVAL expr type)")),(0,a.yg)("p",null,"\u4ece\u65e5\u671f\u51cf\u53bb\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694"),(0,a.yg)("p",null,"date \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,a.yg)("p",null,"expr \u53c2\u6570\u662f\u60a8\u5e0c\u671b\u6dfb\u52a0\u7684\u65f6\u95f4\u95f4\u9694\u3002"),(0,a.yg)("p",null,"type \u53c2\u6570\u53ef\u4ee5\u662f\u4e0b\u5217\u503c\uff1aYEAR, MONTH, DAY, HOUR, MINUTE, SECOND"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-11-28 23:59:59                             |\n+-------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE_SUB,DATE,SUB\n")))}p.isMDXComponent=!0}}]);