"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92195],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const o={title:"IS_IPV4_MAPPED",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/is-ipv4-mapped",id:"sql-manual/sql-functions/ip-functions/is-ipv4-mapped",title:"IS_IPV4_MAPPED",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/is-ipv4-mapped.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ipv4-mapped",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-mapped",draft:!1,tags:[],version:"current",frontMatter:{title:"IS_IPV4_MAPPED",language:"zh-CN"},sidebar:"docs",previous:{title:"IS_IPV4_COMPAT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-compat"},next:{title:"IPV4_CIDR_TO_RANGE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range"}},s={},p=[{value:"IS_IPV4_MAPPED",id:"is_ipv4_mapped",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"is_ipv4_mapped"},"IS_IPV4_MAPPED"),(0,i.yg)("version",{since:"dev"},(0,i.yg)("p",null,"IS_IPV4_MAPPED")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR IS_IPV4_MAPPED(INET6_ATON(VARCHAR ipv4_addr))")),(0,i.yg)("p",null,"\u8be5\u51fd\u6570\u91c7\u7528\u4ee5\u6570\u5b57\u5f62\u5f0f\u8868\u793a\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684lPv6\u5730\u5740\uff0c\u7531INET6_ATON\u8fd4\u56de\u3002\n\u5982\u679c\u53c2\u6570\u662f\u6709\u6548\u7684IPv4\u6620\u5c04IPv6\u5730\u5740\uff0c\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\uff0c\u9664\u975eexpr\u4e3a NULL\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u8be5\u51fd\u6570\u8fd4\u56deNULL\u3002\nIPv4\u6620\u5c04\u5730\u5740\u7684\u683c\u5f0f\u4e3a::ffff:ipv4_address"),(0,i.yg)("h3",{id:"notice"},"notice"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"\u5f53\u6e90\u8f93\u5165\u6ca1\u6709'::ffff:'\u524d\u7f00\u65f6\uff0c\u4f46\u5982\u679c\u5b83\u4ecd\u7136\u662f\u6709\u6548\u7684ipv4\u5730\u5740\uff0c\u5219\u8be5\u7ed3\u679c\u4e5f\u5c06\u4e3a1\uff0c\u56e0\u4e3aINET6_ATON()\u4f1a\u81ea\u52a8\u4e3a\u6709\u6548\u7684ipv4\u5730\u5740\u6dfb\u52a0\u524d\u7f00\u3002")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT IS_IPV4_MAPPED(INET6_ATON('::ffff:10.0.5.9')) AS is_result;\n+-----------+\n| is_result |\n+-----------+\n|         1 |\n+-----------+\n1 row in set (0.02 sec)\n\nmysql> SELECT IS_IPV4_MAPPED(INET6_ATON('::10.0.5.9')) AS is_result;\n+-----------+\n| is_result |\n+-----------+\n|         0 |\n+-----------+\n1 row in set (0.03 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IS_IPV4_MAPPED, IP"))}d.isMDXComponent=!0}}]);