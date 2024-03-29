"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[72614],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>c});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),g=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},d=function(e){var a=g(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=g(t),u=r,c=m["".concat(o,".").concat(u)]||m[u]||y[u]||l;return t?n.createElement(c,p(p({ref:a},d),{},{components:t})):n.createElement(c,p({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var g=2;g<l;g++)p[g]=t[g];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},124344:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=t(58168),r=(t(296540),t(15680));const l={title:"\u901a\u7528\u7f16\u8bd1",language:"zh-CN"},p=void 0,i={unversionedId:"install/source-install/compilation-general",id:"version-2.1/install/source-install/compilation-general",title:"\u901a\u7528\u7f16\u8bd1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/install/source-install/compilation-general.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-general",permalink:"/zh-CN/docs/install/source-install/compilation-general",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u901a\u7528\u7f16\u8bd1",language:"zh-CN"},sidebar:"docs",previous:{title:"Doris \u4ecb\u7ecd",permalink:"/zh-CN/docs/get-starting/what-is-apache-doris"},next:{title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1",permalink:"/zh-CN/docs/install/source-install/compilation-with-ldb-toolchain"}},o={},g=[{value:"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\uff08\u63a8\u8350\uff09",id:"\u4f7f\u7528-docker-\u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u63a8\u8350",level:2},{value:"\u4f7f\u7528\u73b0\u6210\u7684\u955c\u50cf",id:"\u4f7f\u7528\u73b0\u6210\u7684\u955c\u50cf",level:3},{value:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf",id:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf",level:3},{value:"\u76f4\u63a5\u7f16\u8bd1\uff08Ubuntu\uff09",id:"\u76f4\u63a5\u7f16\u8bd1ubuntu",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u7279\u522b\u58f0\u660e",id:"\u7279\u522b\u58f0\u660e",level:2}],d={toc:g},m="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,r.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u6e90\u7801\u7f16\u8bd1 Doris\u3002"),(0,r.yg)("h2",{id:"\u4f7f\u7528-docker-\u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u63a8\u8350"},"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\uff08\u63a8\u8350\uff09"),(0,r.yg)("h3",{id:"\u4f7f\u7528\u73b0\u6210\u7684\u955c\u50cf"},"\u4f7f\u7528\u73b0\u6210\u7684\u955c\u50cf"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0b\u8f7d Docker \u955c\u50cf"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"$ docker pull apache/doris:build-env-ldb-toolchain-latest")),(0,r.yg)("p",{parentName:"li"},"\u68c0\u67e5\u955c\u50cf\u4e0b\u8f7d\u5b8c\u6210\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ docker images\nREPOSITORY              TAG                               IMAGE ID            CREATED             SIZE\napache/doris  build-env-ldb-toolchain-latest    49f68cecbc1a        4 days ago          3.76GB\n")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u9488\u5bf9\u4e0d\u540c\u7684 Doris \u7248\u672c\uff0c\u9700\u8981\u4e0b\u8f7d\u5bf9\u5e94\u7684\u955c\u50cf\u7248\u672c\u3002\u4ece Apache Doris 0.15 \u7248\u672c\u8d77\uff0c\u540e\u7eed\u955c\u50cf\u7248\u672c\u53f7\u5c06\u4e0e Doris \u7248\u672c\u53f7\u7edf\u4e00\u3002\u6bd4\u5982\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"apache/doris:build-env-for-0.15.0 "),"  \u6765\u7f16\u8bd1 0.15.0 \u7248\u672c\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u6ce82\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest")," \u7528\u4e8e\u7f16\u8bd1\u6700\u65b0\u4e3b\u5e72\u7248\u672c\u4ee3\u7801\uff0c\u4f1a\u968f\u4e3b\u5e72\u7248\u672c\u4e0d\u65ad\u66f4\u65b0\u3002\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("inlineCode",{parentName:"p"},"docker/README.md")," \u4e2d\u7684\u66f4\u65b0\u65f6\u95f4\u3002")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u955c\u50cf\u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:null},"commit id"),(0,r.yg)("th",{parentName:"tr",align:null},"doris \u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env"),(0,r.yg)("td",{parentName:"tr",align:null},"before ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81"},"ff0dd0d")),(0,r.yg)("td",{parentName:"tr",align:null},"0.8.x, 0.9.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81"},"ff0dd0d")),(0,r.yg)("td",{parentName:"tr",align:null},"0.10.x, 0.11.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/4ef5a8c8560351d7fff7ff8fd51c4c7a75e006a8"},"4ef5a8c")),(0,r.yg)("td",{parentName:"tr",align:null},"0.12.x - 0.14.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.3.1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")),(0,r.yg)("td",{parentName:"tr",align:null},"0.14.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-0.15.0"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/a81f4da4e461a54782a96433b746d07be89e6b54"},"a81f4da")," or later"),(0,r.yg)("td",{parentName:"tr",align:null},"0.15.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-latest"),(0,r.yg)("td",{parentName:"tr",align:null},"before ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/0efef1b332300887ee0473f9df9bdd9d7297d824"},"0efef1b")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.0.0"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.1.0"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1.1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1.1.x, 1.2.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.2-no-avx2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1.1.x, 1.2.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-2.0"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"2.0.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-2.0-no-avx2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"2.0.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-latest"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"master")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-no-avx2-latest"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"master")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u540d\u79f0\u4e2d\u5e26\u6709 no-avx2 \u5b57\u6837\u7684\u955c\u50cf\u4e2d\u7684\u7b2c\u4e09\u65b9\u5e93\uff0c\u53ef\u4ee5\u8fd0\u884c\u5728\u4e0d\u652f\u6301 avx2 \u6307\u4ee4\u7684 CPU \u4e0a\u3002\u53ef\u4ee5\u914d\u5408 USE_AVX2=0 \u9009\u9879\uff0c\u7f16\u8bd1 Doris\u3002"))),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote",start:2},(0,r.yg)("li",{parentName:"ol"},"\u7f16\u8bd1\u955c\u50cf ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/thirdparty/CHANGELOG.md"},"ChangeLog"),"\u3002"))),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote",start:3},(0,r.yg)("li",{parentName:"ol"},"doris 0.14.0 \u7248\u672c\u4ecd\u7136\u4f7f\u7528apache/incubator-doris:build-env-1.2 \u7f16\u8bd1\uff0c0.14.x \u7248\u672c\u7684\u4ee3\u7801\u5c06\u4f7f\u7528apache/incubator-doris:build-env-1.3.1\u3002"))),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote",start:4},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6700\u65b0\u7248\u672c\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest")," \u955c\u50cf\u4e2d\u540c\u65f6\u5305\u542b JDK 8 \u548c JDK 17\u3002"),(0,r.yg)("p",{parentName:"li"},"\u5207\u6362\u5230 JDK 8\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"export JAVA_HOME=/usr/lib/jvm/java-1.8.0\nexport PATH=$JAVA_HOME/bin/:$PATH\n")),(0,r.yg)("p",{parentName:"li"},"\u5207\u6362\u5230 JDK 17\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"export JAVA_HOME=/usr/lib/jvm/jdk-17.0.2/\nexport PATH=$JAVA_HOME/bin/:$PATH\n"))))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8fd0\u884c\u955c\u50cf"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"$ docker run -it apache/doris:build-env-ldb-toolchain-latest")),(0,r.yg)("p",{parentName:"li"},"\u5efa\u8bae\u4ee5\u6302\u8f7d\u672c\u5730 Doris \u6e90\u7801\u76ee\u5f55\u7684\u65b9\u5f0f\u8fd0\u884c\u955c\u50cf\uff0c\u8fd9\u6837\u7f16\u8bd1\u7684\u4ea7\u51fa\u4e8c\u8fdb\u5236\u6587\u4ef6\u4f1a\u5b58\u50a8\u5728\u5bbf\u4e3b\u673a\u4e2d\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u955c\u50cf\u9000\u51fa\u800c\u6d88\u5931\u3002"),(0,r.yg)("p",{parentName:"li"},"\u540c\u65f6\uff0c\u5efa\u8bae\u540c\u65f6\u5c06\u955c\u50cf\u4e2d maven \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},".m2")," \u76ee\u5f55\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a\u76ee\u5f55\uff0c\u4ee5\u9632\u6b62\u6bcf\u6b21\u542f\u52a8\u955c\u50cf\u7f16\u8bd1\u65f6\uff0c\u91cd\u590d\u4e0b\u8f7d maven \u7684\u4f9d\u8d56\u5e93\u3002"),(0,r.yg)("p",{parentName:"li"},"\u6b64\u5916\uff0c\u8fd0\u884c\u955c\u50cf\u7f16\u8bd1\u65f6\u9700\u8981 download \u90e8\u5206\u6587\u4ef6\uff0c\u53ef\u4ee5\u91c7\u7528 host \u6a21\u5f0f\u542f\u52a8\u955c\u50cf\u3002 host \u6a21\u5f0f\u4e0d\u9700\u8981\u52a0 -p \u8fdb\u884c\u7aef\u53e3\u6620\u5c04\uff0c\u56e0\u4e3a\u548c\u5bbf\u4e3b\u673a\u5171\u4eab\u7f51\u7edcIP\u548c\u7aef\u53e3\u3002"),(0,r.yg)("p",{parentName:"li"},"docker run \u90e8\u5206\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6ce8\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"-v"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed9\u5bb9\u5668\u6302\u8f7d\u5b58\u50a8\u5377\uff0c\u6302\u8f7d\u5230\u5bb9\u5668\u7684\u67d0\u4e2a\u76ee\u5f55")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5bb9\u5668\u540d\u5b57\uff0c\u540e\u7eed\u53ef\u4ee5\u901a\u8fc7\u540d\u5b57\u8fdb\u884c\u5bb9\u5668\u7ba1\u7406")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--network"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u7f51\u7edc\u8bbe\u7f6e: bridge \u4f7f\u7528 docker daemon \u6307\u5b9a\u7684\u7f51\u6865\uff0chost \u5bb9\u5668\u4f7f\u7528\u4e3b\u673a\u7684\u7f51\u7edc\uff0c container:NAME_or_ID \u4f7f\u7528\u5176\u4ed6\u5bb9\u5668\u7684\u7f51\u8def\uff0c\u5171\u4eabIP\u548cPORT\u7b49\u7f51\u7edc\u8d44\u6e90\uff0c none \u5bb9\u5668\u4f7f\u7528\u81ea\u5df1\u7684\u7f51\u7edc\uff08\u7c7b\u4f3c--net=bridge\uff09\uff0c\u4f46\u662f\u4e0d\u8fdb\u884c\u914d\u7f6e")))),(0,r.yg)("p",{parentName:"li"}," \u5982\u4e0b\u793a\u4f8b\uff0c\u662f\u6307\u5c06\u5bb9\u5668\u7684 /root/doris-DORIS-x.x.x-release \u6302\u8f7d\u81f3\u5bbf\u4e3b\u673a /your/local/doris-DORIS-x.x.x-release \u76ee\u5f55\uff0c\u4e14\u547d\u540d mydocker \u540e\u7528 host \u6a21\u5f0f \u542f\u52a8\u955c\u50cf\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ docker run -it --network=host --name mydocker -v /your/local/.m2:/root/.m2 -v /your/local/doris-DORIS-x.x.x-release/:/root/doris-DORIS-x.x.x-release/ apache/doris:build-env-ldb-toolchain-latest\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0b\u8f7d\u6e90\u7801"),(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u955c\u50cf\u540e\uff0c\u4f60\u5e94\u8be5\u5df2\u7ecf\u5904\u4e8e\u5bb9\u5668\u5185\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d Doris \u6e90\u7801\uff08\u5df2\u6302\u8f7d\u672c\u5730\u6e90\u7801\u76ee\u5f55\u5219\u4e0d\u7528\uff09\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ git clone https://github.com/apache/doris.git\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7f16\u8bd1 Doris"),(0,r.yg)("p",{parentName:"li"},"\u5148\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7f16\u8bd1\u673a\u5668\u662f\u5426\u652f\u6301avx2\u6307\u4ee4\u96c6"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,r.yg)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ USE_AVX2=0  sh build.sh\n")),(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u652f\u6301\uff0c\u53ef\u4e0d\u52a0 USE_AVX2=0 \uff0c\u76f4\u63a5\u8fdb\u884c\u7f16\u8bd1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ sh build.sh\n")),(0,r.yg)("p",{parentName:"li"},"\u5982\u9700\u7f16\u8bd1Debug\u7248\u672c\u7684BE\uff0c\u589e\u52a0 BUILD_TYPE=Debug"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ BUILD_TYPE=Debug sh build.sh\n")),(0,r.yg)("p",{parentName:"li"},"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e2d\u3002"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f:")),(0,r.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"build-env-for-0.15.0")," \u6216\u4e4b\u540e\u7684\u7248\u672c\uff0c\u7b2c\u4e00\u6b21\u7f16\u8bd1\u7684\u65f6\u5019\u8981\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"sh build.sh --clean --be --fe")),(0,r.yg)("p",{parentName:"blockquote"},"\u8fd9\u662f\u56e0\u4e3a build-env-for-0.15.0 \u7248\u672c\u955c\u50cf\u5347\u7ea7\u4e86 thrift(0.9 -> 0.13)\uff0c\u9700\u8981\u901a\u8fc7 --clean \u547d\u4ee4\u5f3a\u5236\u4f7f\u7528\u65b0\u7248\u672c\u7684 thrift \u751f\u6210\u4ee3\u7801\u6587\u4ef6\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u4e0d\u517c\u5bb9\u7684\u4ee3\u7801\u3002")),(0,r.yg)("p",{parentName:"li"},"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e2d\u3002"))),(0,r.yg)("h3",{id:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf"},"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf"),(0,r.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a Doris \u5f00\u53d1\u73af\u5883\u955c\u50cf\uff0c\u5177\u4f53\u53ef\u53c2\u9605 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker/README.md")," \u6587\u4ef6\u3002"),(0,r.yg)("h2",{id:"\u76f4\u63a5\u7f16\u8bd1ubuntu"},"\u76f4\u63a5\u7f16\u8bd1\uff08Ubuntu\uff09"),(0,r.yg)("p",null,"\u4f60\u53ef\u4ee5\u5728\u81ea\u5df1\u7684 linux \u73af\u5883\u4e2d\u76f4\u63a5\u5c1d\u8bd5\u7f16\u8bd1 Doris\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7cfb\u7edf\u4f9d\u8d56\n\u4e0d\u540c\u7684\u7248\u672c\u4f9d\u8d56\u4e5f\u4e0d\u76f8\u540c"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")," \u4e4b\u524d\u7248\u672c\u4f9d\u8d56\u5982\u4e0b\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"GCC 7.3+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.11+     Bison 3.0+")),(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528Ubuntu 16.04 \u53ca\u4ee5\u4e0a\u7cfb\u7edf \u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u4f9d\u8d56"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"sudo apt-get install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python autopoint pkg-config")),(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u662fCentOS \u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"sudo yum groupinstall 'Development Tools' && sudo yum install maven cmake byacc flex automake libtool bison binutils-devel zip unzip ncurses-devel curl git wget python2 glibc-static libstdc++-static java-1.8.0-openjdk"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")," \u4e4b\u540e\u7248\u672c\u4f9d\u8d56\u5982\u4e0b\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"GCC 10+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.19.2+ Bison 3.0+")),(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528Ubuntu 16.04 \u53ca\u4ee5\u4e0a\u7cfb\u7edf \u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u4f9d\u8d56"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7f16\u8bd1 Doris"),(0,r.yg)("p",{parentName:"li"}," \u4e0e\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u4e00\u6837\uff0c\u7f16\u8bd1\u4e4b\u524d\u5148\u68c0\u67e5\u662f\u5426\u652f\u6301avx2\u6307\u4ee4"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,r.yg)("p",{parentName:"li"}," \u652f\u6301\u5219\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ sh build.sh\n")),(0,r.yg)("p",{parentName:"li"},"\u5982\u4e0d\u652f\u6301\u9700\u8981\u52a0 USE_AVX2=0 "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ USE_AVX2=0 sh build.sh\n")),(0,r.yg)("p",{parentName:"li"},"\u5982\u9700\u7f16\u8bd1Debug\u7248\u672c\u7684BE\uff0c\u589e\u52a0 BUILD_TYPE=Debug"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ BUILD_TYPE=Debug sh build.sh\n")),(0,r.yg)("p",{parentName:"li"},"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e2d\u3002"))),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Could not transfer artifact net.sourceforge.czt.dev:cup-maven-plugin:pom:1.6-cdh from/to xxx")),(0,r.yg)("p",{parentName:"li"},"\u5982\u9047\u5230\u4e0a\u8ff0\u9519\u8bef\uff0c\u8bf7\u53c2\u7167 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/4769/files"},"PR #4769")," \u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe/pom.xml")," \u4e2d cloudera \u76f8\u5173\u7684\u4ed3\u5e93\u914d\u7f6e\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4e0b\u8f7d\u8fde\u63a5\u9519\u8bef\u3001\u5931\u6548\u7b49\u95ee\u9898"),(0,r.yg)("p",{parentName:"li"},"Doris \u6240\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5e93\u7684\u4e0b\u8f7d\u8fde\u63a5\u90fd\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"thirdparty/vars.sh")," \u6587\u4ef6\u5185\u3002\u968f\u7740\u65f6\u95f4\u63a8\u79fb\uff0c\u4e00\u4e9b\u4e0b\u8f7d\u8fde\u63a5\u53ef\u80fd\u4f1a\u5931\u6548\u3002\u5982\u679c\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u3002\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u4e24\u79cd\u65b9\u5f0f\u89e3\u51b3\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u624b\u52a8\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"thirdparty/vars.sh")," \u6587\u4ef6"),(0,r.yg)("p",{parentName:"li"},"\u624b\u52a8\u4fee\u6539\u6709\u95ee\u9898\u7684\u4e0b\u8f7d\u8fde\u63a5\u548c\u5bf9\u5e94\u7684 MD5 \u503c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u4e0b\u8f7d\u4ed3\u5e93\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"export REPOSITORY_URL=https://doris-thirdparty-repo.bj.bcebos.com/thirdparty\nsh build-thirdparty.sh\n")),(0,r.yg)("p",{parentName:"li"},"REPOSITORY_URL \u4e2d\u5305\u542b\u6240\u6709\u7b2c\u4e09\u65b9\u5e93\u6e90\u7801\u5305\u548c\u4ed6\u4eec\u7684\u5386\u53f2\u7248\u672c\u3002")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"fatal error: Killed signal terminated program ...")),(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 Docker \u955c\u50cf\u7f16\u8bd1\u65f6\u5982\u9047\u5230\u4e0a\u8ff0\u62a5\u9519\uff0c\u53ef\u80fd\u662f\u5206\u914d\u7ed9\u955c\u50cf\u7684\u5185\u5b58\u4e0d\u8db3\uff08Docker \u9ed8\u8ba4\u5206\u914d\u7684\u5185\u5b58\u5927\u5c0f\u4e3a 2GB\uff0c\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5185\u5b58\u5360\u7528\u7684\u5cf0\u503c\u5927\u4e8e 2GB\uff09\u3002"),(0,r.yg)("p",{parentName:"li"},"\u5c1d\u8bd5\u9002\u5f53\u8c03\u5927\u955c\u50cf\u7684\u5206\u914d\u5185\u5b58\uff0c\u63a8\u8350 4GB ~ 8GB\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u4f7f\u7528Clang\u7f16\u8bd1Doris\u65f6\u4f1a\u9ed8\u8ba4\u4f7f\u7528PCH\u6587\u4ef6\u6765\u52a0\u901f\u7f16\u8bd1\u8fc7\u7a0b\uff0cccache\u7684\u9ed8\u8ba4\u914d\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4PCH\u6587\u4ef6\u65e0\u6cd5\u88ab\u7f13\u5b58\uff0c\u6216\u8005\u7f13\u5b58\u65e0\u6cd5\u88ab\u547d\u4e2d\uff0c\u8fdb\u800c\u5bfc\u81f4PCH\u88ab\u91cd\u590d\u7f16\u8bd1\uff0c\u62d6\u6162\u7f16\u8bd1\u901f\u5ea6\uff0c\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff1a  "),(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528Clang\u7f16\u8bd1\uff0c\u4f46\u4e0d\u60f3\u4f7f\u7528PCH\u6587\u4ef6\u6765\u52a0\u901f\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u5219\u9700\u8981\u52a0\u4e0a\u53c2\u6570",(0,r.yg)("inlineCode",{parentName:"p"},"ENABLE_PCH=OFF")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"DORIS_TOOLCHAIN=clang ENABLE_PCH=OFF sh build.sh\n")))),(0,r.yg)("h2",{id:"\u7279\u522b\u58f0\u660e"},"\u7279\u522b\u58f0\u660e"),(0,r.yg)("p",null,"\u81ea 0.13 \u7248\u672c\u5f00\u59cb\uff0c\u9ed8\u8ba4\u7684\u7f16\u8bd1\u4ea7\u51fa\u4e2d\u5c06\u53d6\u6d88\u5bf9 ","[1]"," \u548c ","[2]"," \u4e24\u4e2a\u7b2c\u4e09\u65b9\u5e93\u7684\u4f9d\u8d56\u3002\u8fd9\u4e24\u4e2a\u7b2c\u4e09\u65b9\u5e93\u4e3a ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU General Public License V3")," \u534f\u8bae\u3002\u8be5\u534f\u8bae\u4e0e ",(0,r.yg)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License 2.0")," \u534f\u8bae\u4e0d\u517c\u5bb9\uff0c\u56e0\u6b64\u9ed8\u8ba4\u4e0d\u51fa\u73b0\u5728 Apache \u53d1\u5e03\u7248\u672c\u4e2d\u3002"),(0,r.yg)("p",null,"\u79fb\u9664\u4f9d\u8d56\u5e93 ","[1]"," \u4f1a\u5bfc\u81f4\u65e0\u6cd5\u8bbf\u95ee MySQL \u5916\u90e8\u8868\u3002\u8bbf\u95ee MySQL \u5916\u90e8\u8868\u7684\u529f\u80fd\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4e2d\u901a\u8fc7 UnixODBC \u5b9e\u73b0\u3002"),(0,r.yg)("p",null,"\u79fb\u9664\u4f9d\u8d56\u5e93 ","[2]"," \u4f1a\u5bfc\u81f4\u5728\u65e0\u6cd5\u8bfb\u53d6\u90e8\u5206\u65e9\u671f\u7248\u672c\uff080.8\u7248\u672c\u4e4b\u524d\uff09\u5199\u5165\u7684\u90e8\u5206\u6570\u636e\u3002\u56e0\u4e3a\u65e9\u671f\u7248\u672c\u4e2d\u7684\u6570\u636e\u662f\u4f7f\u7528 LZO \u7b97\u6cd5\u538b\u7f29\u7684\uff0c\u5728\u4e4b\u540e\u7684\u7248\u672c\u4e2d\uff0c\u5df2\u7ecf\u66f4\u6539\u4e3a LZ4 \u538b\u7f29\u7b97\u6cd5\u3002\u540e\u7eed\u6211\u4eec\u4f1a\u63d0\u4f9b\u5de5\u5177\u7528\u4e8e\u68c0\u6d4b\u548c\u8f6c\u6362\u8fd9\u90e8\u5206\u6570\u636e\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u6709\u9700\u6c42\uff0c\u7528\u6237\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u8fd9\u4e24\u4e2a\u4f9d\u8d56\u5e93\u3002\u5982\u9700\u4f7f\u7528\uff0c\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u6dfb\u52a0\u5982\u4e0b\u9009\u9879\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"WITH_MYSQL=1 WITH_LZO=1 sh build.sh\n")),(0,r.yg)("p",null,"\u6ce8\u610f\uff0c\u5f53\u7528\u6237\u4f9d\u8d56\u8fd9\u4e24\u4e2a\u7b2c\u4e09\u65b9\u5e93\u65f6\uff0c\u5219\u9ed8\u8ba4\u4e0d\u5728 Apache License 2.0 \u534f\u8bae\u6846\u67b6\u4e0b\u4f7f\u7528 Doris\u3002\u8bf7\u6ce8\u610f GPL \u76f8\u5173\u534f\u8bae\u7ea6\u675f\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[1]"," mysql-5.7.18"),(0,r.yg)("li",{parentName:"ul"},"[2]"," lzo-2.10")))}y.isMDXComponent=!0}}]);