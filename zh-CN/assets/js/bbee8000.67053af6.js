"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[89848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(n),k=o,d=s["".concat(u,".").concat(k)]||s[k]||f[k]||l;return n?i.createElement(d,r(r({ref:t},p),{},{components:n})):i.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=k;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[s]="string"==typeof e?e:o,r[1]=a;for(var c=2;c<l;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const l={title:"Bucket Shuffle Join",language:"zh-CN"},r=void 0,a={unversionedId:"administrator-guide/bucket-shuffle-join",id:"version-0.15/administrator-guide/bucket-shuffle-join",title:"Bucket Shuffle Join",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/bucket-shuffle-join.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/bucket-shuffle-join",permalink:"/zh-CN/docs/0.15/administrator-guide/bucket-shuffle-join",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Bucket Shuffle Join",language:"zh-CN"},sidebar:"docs",previous:{title:"Colocation Join",permalink:"/zh-CN/docs/0.15/administrator-guide/colocation-join"},next:{title:"\u52a8\u6001\u5206\u533a",permalink:"/zh-CN/docs/0.15/administrator-guide/dynamic-partition"}},u={},c=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u8bbe\u7f6eSession\u53d8\u91cf",id:"\u8bbe\u7f6esession\u53d8\u91cf",level:3},{value:"\u67e5\u770bJoin\u7684\u7c7b\u578b",id:"\u67e5\u770bjoin\u7684\u7c7b\u578b",level:3},{value:"Bucket Shuffle Join\u7684\u89c4\u5212\u89c4\u5219",id:"bucket-shuffle-join\u7684\u89c4\u5212\u89c4\u5219",level:2}],p={toc:c};function s(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bucket-shuffle-join"},"Bucket Shuffle Join"),(0,o.kt)("p",null,"Bucket Shuffle Join \u662f\u5728 Doris 0.14 \u7248\u672c\u4e2d\u6b63\u5f0f\u52a0\u5165\u7684\u65b0\u529f\u80fd\u3002\u65e8\u5728\u4e3a\u67d0\u4e9b Join \u67e5\u8be2\u63d0\u4f9b\u672c\u5730\u6027\u4f18\u5316\uff0c\u6765\u51cf\u5c11\u6570\u636e\u5728\u8282\u70b9\u95f4\u7684\u4f20\u8f93\u8017\u65f6\uff0c\u6765\u52a0\u901f\u67e5\u8be2\u3002"),(0,o.kt)("p",null,"\u5b83\u7684\u8bbe\u8ba1\u3001\u5b9e\u73b0\u548c\u6548\u679c\u53ef\u4ee5\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/4394"},"ISSUE 4394"),"\u3002"),(0,o.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"FE\uff1aFrontend\uff0cDoris \u7684\u524d\u7aef\u8282\u70b9\u3002\u8d1f\u8d23\u5143\u6570\u636e\u7ba1\u7406\u548c\u8bf7\u6c42\u63a5\u5165\u3002"),(0,o.kt)("li",{parentName:"ul"},"BE\uff1aBackend\uff0cDoris \u7684\u540e\u7aef\u8282\u70b9\u3002\u8d1f\u8d23\u67e5\u8be2\u6267\u884c\u548c\u6570\u636e\u5b58\u50a8\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5de6\u8868\uff1aJoin\u67e5\u8be2\u65f6\uff0c\u5de6\u8fb9\u7684\u8868\u3002\u8fdb\u884cProbe\u64cd\u4f5c\u3002\u53ef\u88abJoin Reorder\u8c03\u6574\u987a\u5e8f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53f3\u8868\uff1aJoin\u67e5\u8be2\u65f6\uff0c\u53f3\u8fb9\u7684\u8868\u3002\u8fdb\u884cBuild\u64cd\u4f5c\u3002\u53ef\u88abJoin Reorder\u8c03\u6574\u987a\u5e8f\u3002")),(0,o.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,o.kt)("p",null,"Doris\u652f\u6301\u7684\u5e38\u89c4\u5206\u5e03\u5f0fJoin\u65b9\u5f0f\u5305\u62ec\u4e86shuffle join \u548cbroadcast join\u3002\u8fd9\u4e24\u79cdjoin\u90fd\u4f1a\u5bfc\u81f4\u4e0d\u5c0f\u7684\u7f51\u7edc\u5f00\u9500:"),(0,o.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5f53\u524d\u5b58\u5728A\u8868\u4e0eB\u8868\u7684Join\u67e5\u8be2\uff0c\u5b83\u7684Join\u65b9\u5f0f\u4e3aHashJoin\uff0c\u4e0d\u540cJoin\u7c7b\u578b\u7684\u5f00\u9500\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Broadcast Join"),": \u5982\u679c\u6839\u636e\u6570\u636e\u5206\u5e03\uff0c\u67e5\u8be2\u89c4\u5212\u51faA\u8868\u67093\u4e2a\u6267\u884c\u7684HashJoinNode\uff0c\u90a3\u4e48\u9700\u8981\u5c06B\u8868\u5168\u91cf\u7684\u53d1\u9001\u52303\u4e2aHashJoinNode\uff0c\u90a3\u4e48\u5b83\u7684\u7f51\u7edc\u5f00\u9500\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"3B"),"\uff0c\u5b83\u7684\u5185\u5b58\u5f00\u9500\u4e5f\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"3B"),"\u3002 "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shuffle Join"),": Shuffle Join\u4f1a\u5c06A\uff0cB\u4e24\u5f20\u8868\u7684\u6570\u636e\u6839\u636e\u54c8\u5e0c\u8ba1\u7b97\u5206\u6563\u5230\u96c6\u7fa4\u7684\u8282\u70b9\u4e4b\u4e2d\uff0c\u6240\u4ee5\u5b83\u7684\u7f51\u7edc\u5f00\u9500\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"A + B"),"\uff0c\u5185\u5b58\u5f00\u9500\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"B"),"\u3002")),(0,o.kt)("p",null,"\u5728FE\u4e4b\u4e2d\u4fdd\u5b58\u4e86Doris\u6bcf\u4e2a\u8868\u7684\u6570\u636e\u5206\u5e03\u4fe1\u606f\uff0c\u5982\u679cjoin\u8bed\u53e5\u547d\u4e2d\u4e86\u8868\u7684\u6570\u636e\u5206\u5e03\u5217\uff0c\u6211\u4eec\u5e94\u8be5\u4f7f\u7528\u6570\u636e\u5206\u5e03\u4fe1\u606f\u6765\u51cf\u5c11join\u8bed\u53e5\u7684\u7f51\u7edc\u4e0e\u5185\u5b58\u5f00\u9500\uff0c\u8fd9\u5c31\u662fBucket Shuffle Join\u7684\u601d\u8def\u6765\u6e90\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:n(90063).Z,width:"551",height:"444"})),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u56fe\u7247\u5c55\u793a\u4e86Bucket Shuffle Join\u7684\u5de5\u4f5c\u539f\u7406\u3002SQL\u8bed\u53e5\u4e3a A\u8868 join B\u8868\uff0c\u5e76\u4e14join\u7684\u7b49\u503c\u8868\u8fbe\u5f0f\u547d\u4e2d\u4e86A\u7684\u6570\u636e\u5206\u5e03\u5217\u3002\u800cBucket Shuffle Join\u4f1a\u6839\u636eA\u8868\u7684\u6570\u636e\u5206\u5e03\u4fe1\u606f\uff0c\u5c06B\u8868\u7684\u6570\u636e\u53d1\u9001\u5230\u5bf9\u5e94\u7684A\u8868\u7684\u6570\u636e\u5b58\u50a8\u8ba1\u7b97\u8282\u70b9\u3002Bucket Shuffle Join\u5f00\u9500\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7f51\u7edc\u5f00\u9500\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"B < min(3B, A + B)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5185\u5b58\u5f00\u9500\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"B <= min(3B, B)")))),(0,o.kt)("p",null,"\u53ef\u89c1\uff0c\u76f8\u6bd4\u4e8eBroadcast Join\u4e0eShuffle Join\uff0c Bucket Shuffle Join\u6709\u7740\u8f83\u4e3a\u660e\u663e\u7684\u6027\u80fd\u4f18\u52bf\u3002\u51cf\u5c11\u6570\u636e\u5728\u8282\u70b9\u95f4\u7684\u4f20\u8f93\u8017\u65f6\u548cJoin\u65f6\u7684\u5185\u5b58\u5f00\u9500\u3002\u76f8\u5bf9\u4e8eDoris\u539f\u6709\u7684Join\u65b9\u5f0f\uff0c\u5b83\u6709\u7740\u4e0b\u9762\u7684\u4f18\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0cBucket-Shuffle-Join\u964d\u4f4e\u4e86\u7f51\u7edc\u4e0e\u5185\u5b58\u5f00\u9500\uff0c\u4f7f\u4e00\u4e9bJoin\u67e5\u8be2\u5177\u6709\u4e86\u66f4\u597d\u7684\u6027\u80fd\u3002\u5c24\u5176\u662f\u5f53FE\u80fd\u591f\u6267\u884c\u5de6\u8868\u7684\u5206\u533a\u88c1\u526a\u4e0e\u6876\u88c1\u526a\u65f6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5176\u6b21\uff0c\u540c\u65f6\u4e0eColocate Join\u4e0d\u540c\uff0c\u5b83\u5bf9\u4e8e\u8868\u7684\u6570\u636e\u5206\u5e03\u65b9\u5f0f\u5e76\u6ca1\u6709\u4fb5\u5165\u6027\uff0c\u8fd9\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\u662f\u900f\u660e\u7684\u3002\u5bf9\u4e8e\u8868\u7684\u6570\u636e\u5206\u5e03\u6ca1\u6709\u5f3a\u5236\u6027\u7684\u8981\u6c42\uff0c\u4e0d\u5bb9\u6613\u5bfc\u81f4\u6570\u636e\u503e\u659c\u7684\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u5b83\u53ef\u4ee5\u4e3aJoin Reorder\u63d0\u4f9b\u66f4\u591a\u53ef\u80fd\u7684\u4f18\u5316\u7a7a\u95f4\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("h3",{id:"\u8bbe\u7f6esession\u53d8\u91cf"},"\u8bbe\u7f6eSession\u53d8\u91cf"),(0,o.kt)("p",null,"\u5c06session\u53d8\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"enable_bucket_shuffle_join"),"\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219FE\u5728\u8fdb\u884c\u67e5\u8be2\u89c4\u5212\u65f6\u5c31\u4f1a\u9ed8\u8ba4\u5c06\u80fd\u591f\u8f6c\u6362\u4e3aBucket Shuffle Join\u7684\u67e5\u8be2\u81ea\u52a8\u89c4\u5212\u4e3aBucket Shuffle Join\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set enable_bucket_shuffle_join = true;\n")),(0,o.kt)("p",null,"\u5728FE\u8fdb\u884c\u5206\u5e03\u5f0f\u67e5\u8be2\u89c4\u5212\u65f6\uff0c\u4f18\u5148\u9009\u62e9\u7684\u987a\u5e8f\u4e3a Colocate Join -> Bucket Shuffle Join -> Broadcast Join -> Shuffle Join\u3002\u4f46\u662f\u5982\u679c\u7528\u6237\u663e\u5f0fhint\u4e86Join\u7684\u7c7b\u578b\uff0c\u5982\uff1a    "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"select * from test join [shuffle] baseall on test.k1 = baseall.k1;\n")),(0,o.kt)("p",null,"\u5219\u4e0a\u8ff0\u7684\u9009\u62e9\u4f18\u5148\u987a\u5e8f\u5219\u4e0d\u751f\u6548\u3002"),(0,o.kt)("p",null,"\u8be5session\u53d8\u91cf\u57280.14\u7248\u672c\u9ed8\u8ba4\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", \u800c0.13\u7248\u672c\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,o.kt)("h3",{id:"\u67e5\u770bjoin\u7684\u7c7b\u578b"},"\u67e5\u770bJoin\u7684\u7c7b\u578b"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"explain"),"\u547d\u4ee4\u6765\u67e5\u770bJoin\u662f\u5426\u4e3aBucket Shuffle Join\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"|   2:HASH JOIN                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |\n|   |  join op: INNER JOIN (BUCKET_SHUFFLE)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |\n|   |  hash predicates:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |\n|   |  colocate: false, reason: table not in the same group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |\n|   |  equal join conjunct: `test`.`k1` = `baseall`.`k1`                                         \n")),(0,o.kt)("p",null,"\u5728Join\u7c7b\u578b\u4e4b\u4e2d\u4f1a\u6307\u660e\u4f7f\u7528\u7684Join\u65b9\u5f0f\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"BUCKET_SHUFFLE"),"\u3002"),(0,o.kt)("h2",{id:"bucket-shuffle-join\u7684\u89c4\u5212\u89c4\u5219"},"Bucket Shuffle Join\u7684\u89c4\u5212\u89c4\u5219"),(0,o.kt)("p",null,"\u5728\u7edd\u5927\u591a\u6570\u573a\u666f\u4e4b\u4e2d\uff0c\u7528\u6237\u53ea\u9700\u8981\u9ed8\u8ba4\u6253\u5f00seesion\u53d8\u91cf\u7684\u5f00\u5173\u5c31\u53ef\u4ee5\u900f\u660e\u7684\u4f7f\u7528\u8fd9\u79cdJoin\u65b9\u5f0f\u5e26\u6765\u7684\u6027\u80fd\u63d0\u5347\uff0c\u4f46\u662f\u5982\u679c\u4e86\u89e3Bucket Shuffle Join\u7684\u89c4\u5212\u89c4\u5219\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5229\u7528\u5b83\u5199\u51fa\u66f4\u52a0\u9ad8\u6548\u7684SQL\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bucket Shuffle Join\u53ea\u751f\u6548\u4e8eJoin\u6761\u4ef6\u4e3a\u7b49\u503c\u7684\u573a\u666f\uff0c\u539f\u56e0\u4e0eColocate Join\u7c7b\u4f3c\uff0c\u5b83\u4eec\u90fd\u4f9d\u8d56hash\u6765\u8ba1\u7b97\u786e\u5b9a\u7684\u6570\u636e\u5206\u5e03\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u7b49\u503cJoin\u6761\u4ef6\u4e4b\u4e2d\u5305\u542b\u4e24\u5f20\u8868\u7684\u5206\u6876\u5217\uff0c\u5f53\u5de6\u8868\u7684\u5206\u6876\u5217\u4e3a\u7b49\u503c\u7684Join\u6761\u4ef6\u65f6\uff0c\u5b83\u6709\u5f88\u5927\u6982\u7387\u4f1a\u88ab\u89c4\u5212\u4e3aBucket Shuffle Join\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u7684hash\u503c\u8ba1\u7b97\u7ed3\u679c\u4e0d\u540c\uff0c\u6240\u4ee5Bucket Shuffle Join\u8981\u6c42\u5de6\u8868\u7684\u5206\u6876\u5217\u7684\u7c7b\u578b\u4e0e\u53f3\u8868\u7b49\u503cjoin\u5217\u7684\u7c7b\u578b\u9700\u8981\u4fdd\u6301\u4e00\u81f4\uff0c\u5426\u5219\u65e0\u6cd5\u8fdb\u884c\u5bf9\u5e94\u7684\u89c4\u5212\u3002"),(0,o.kt)("li",{parentName:"ul"},"Bucket Shuffle Join\u53ea\u4f5c\u7528\u4e8eDoris\u539f\u751f\u7684OLAP\u8868\uff0c\u5bf9\u4e8eODBC\uff0cMySQL\uff0cES\u7b49\u5916\u8868\uff0c\u5f53\u5176\u4f5c\u4e3a\u5de6\u8868\u65f6\u662f\u65e0\u6cd5\u89c4\u5212\u751f\u6548\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u7531\u4e8e\u6bcf\u4e00\u4e2a\u5206\u533a\u7684\u6570\u636e\u5206\u5e03\u89c4\u5219\u53ef\u80fd\u4e0d\u540c\uff0c\u6240\u4ee5Bucket Shuffle Join\u53ea\u80fd\u4fdd\u8bc1\u5de6\u8868\u4e3a\u5355\u5206\u533a\u65f6\u751f\u6548\u3002\u6240\u4ee5\u5728SQL\u6267\u884c\u4e4b\u4e2d\uff0c\u9700\u8981\u5c3d\u91cf\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"where"),"\u6761\u4ef6\u4f7f\u5206\u533a\u88c1\u526a\u7684\u7b56\u7565\u80fd\u591f\u751f\u6548\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5047\u5982\u5de6\u8868\u4e3aColocate\u7684\u8868\uff0c\u90a3\u4e48\u5b83\u6bcf\u4e2a\u5206\u533a\u7684\u6570\u636e\u5206\u5e03\u89c4\u5219\u662f\u786e\u5b9a\u7684\uff0cBucket Shuffle Join\u80fd\u5728Colocate\u8868\u4e0a\u8868\u73b0\u66f4\u597d\u3002")))}s.isMDXComponent=!0},90063:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bucket_shuffle_join-86cfc2fda814d3b3502d9afa5812e17b.png"}}]);