"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[50316],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},k=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,u=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return a?r.createElement(u,o(o({ref:t},k),{},{components:a})):r.createElement(u,o({ref:t},k))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u6784\u5efa Docker Image",language:"zh-CN"},o=void 0,i={unversionedId:"install/construct-docker/construct-docker-image",id:"version-dev/install/construct-docker/construct-docker-image",title:"\u6784\u5efa Docker Image",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/install/construct-docker/construct-docker-image.md",sourceDirName:"install/construct-docker",slug:"/install/construct-docker/construct-docker-image",permalink:"/zh-CN/docs/dev/install/construct-docker/construct-docker-image",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/install/construct-docker/construct-docker-image.md",tags:[],version:"dev",frontMatter:{title:"\u6784\u5efa Docker Image",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5728macOS\u5e73\u53f0\u4e0a\u7f16\u8bd1",permalink:"/zh-CN/docs/dev/install/source-install/compilation-mac"},next:{title:"\u6784\u5efa Docker Compose",permalink:"/zh-CN/docs/dev/install/construct-docker/construct-docker-compose"}},p={},c=[{value:"\u8f6f\u786c\u4ef6\u8981\u6c42",id:"\u8f6f\u786c\u4ef6\u8981\u6c42",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:3},{value:"\u8f6f\u4ef6\u8981\u6c42",id:"\u8f6f\u4ef6\u8981\u6c42",level:3},{value:"Docker Image \u6784\u5efa",id:"docker-image-\u6784\u5efa",level:2},{value:"\u811a\u672c\u524d\u671f\u51c6\u5907",id:"\u811a\u672c\u524d\u671f\u51c6\u5907",level:3},{value:"\u51c6\u5907\u4e8c\u8fdb\u5236\u5305",id:"\u51c6\u5907\u4e8c\u8fdb\u5236\u5305",level:3},{value:"\u6784\u5efa\u6b65\u9aa4",id:"\u6784\u5efa\u6b65\u9aa4",level:3},{value:"\u6784\u5efa FE",id:"\u6784\u5efa-fe",level:4},{value:"\u6784\u5efa BE",id:"\u6784\u5efa-be",level:4},{value:"\u6784\u5efa Broker",id:"\u6784\u5efa-broker",level:4},{value:"\u63a8\u9001\u955c\u50cf\u81f3 DockerHub \u6216\u79c1\u6709\u4ed3\u5e93",id:"\u63a8\u9001\u955c\u50cf\u81f3-dockerhub-\u6216\u79c1\u6709\u4ed3\u5e93",level:2}],k={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6784\u5efa-docker-image"},"\u6784\u5efa Docker Image"),(0,n.kt)("p",null,"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Dockerfile \u6765\u5236\u4f5c Apache Doris \u7684\u8fd0\u884c\u955c\u50cf\uff0c\u4ee5\u4fbf\u4e8e\u5728\u5bb9\u5668\u5316\u7f16\u6392\u5de5\u5177\u6216\u8005\u5feb\u901f\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u53ef\u8fc5\u901f\u62c9\u53d6\u4e00\u4e2a Apache Doris Image \u6765\u5b8c\u6210\u96c6\u7fa4\u7684\u521b\u5efa\u3002"),(0,n.kt)("h2",{id:"\u8f6f\u786c\u4ef6\u8981\u6c42"},"\u8f6f\u786c\u4ef6\u8981\u6c42"),(0,n.kt)("h3",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("p",null,"Docker \u955c\u50cf\u5728\u5236\u4f5c\u524d\u8981\u63d0\u524d\u51c6\u5907\u597d\u5236\u4f5c\u673a\u5668\uff0c\u8be5\u673a\u5668\u7684\u5e73\u53f0\u67b6\u6784\u51b3\u5b9a\u4e86\u5236\u4f5c\u4ee5\u540e\u7684 Docker Image \u9002\u7528\u7684\u5e73\u53f0\u67b6\u6784\uff0c\u5982 X86_64 \u673a\u5668\uff0c\u9700\u8981\u4e0b\u8f7d X86_64 \u7684 Doris \u4e8c\u8fdb\u5236\u7a0b\u5e8f\uff0c\u5236\u4f5c\u4ee5\u540e\u7684 Image \u4ec5\u53ef\u5728 X86_64 \u5e73\u53f0\u4e0a\u8fd0\u884c\u3002ARM \u5e73\u53f0\uff08M1 \u89c6\u540c\u4e3a ARM\uff09\u540c\u7406\u3002"),(0,n.kt)("h3",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,n.kt)("p",null,"\u6700\u4f4e\u914d\u7f6e\uff1a2C 4G"),(0,n.kt)("p",null,"\u63a8\u8350\u914d\u7f6e\uff1a4C 16G"),(0,n.kt)("h3",{id:"\u8f6f\u4ef6\u8981\u6c42"},"\u8f6f\u4ef6\u8981\u6c42"),(0,n.kt)("p",null,"Docker Version\uff1a20.10 \u53ca\u4ee5\u540e\u7248\u672c"),(0,n.kt)("h2",{id:"docker-image-\u6784\u5efa"},"Docker Image \u6784\u5efa"),(0,n.kt)("p",null,"Dockerfile \u811a\u672c\u7f16\u5199\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\u57fa\u7840\u7236\u955c\u50cf\u9009\u7528\u7ecf\u8fc7 Docker-Hub \u8ba4\u8bc1\u7684 OpenJDK \u5b98\u65b9\u955c\u50cf\uff0c\u7248\u672c\u7528 JDK 1.8 \u7248\u672c"),(0,n.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7a0b\u5e8f\u9ed8\u8ba4\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684\u4e8c\u8fdb\u5236\u5305\u8fdb\u884c\u4e0b\u8f7d\uff0c\u52ff\u4f7f\u7528\u6765\u6e90\u4e0d\u660e\u7684\u4e8c\u8fdb\u5236\u5305"),(0,n.kt)("li",{parentName:"ol"},"\u9700\u8981\u5185\u5d4c\u811a\u672c\u6765\u5b8c\u6210 FE \u7684\u542f\u52a8\u3001\u591a FE \u6ce8\u518c\u3001\u72b6\u6001\u68c0\u67e5\u548c BE \u7684\u542f\u52a8\u3001\u6ce8\u518c BE \u81f3 FE \u3001\u72b6\u6001\u68c0\u67e5\u7b49\u4efb\u52a1\u6d41\u7a0b"),(0,n.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7a0b\u5e8f\u5728 Docker \u5185\u542f\u52a8\u65f6\u4e0d\u5e94\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"--daemon")," \u7684\u65b9\u5f0f\u542f\u52a8\uff0c\u5426\u5219\u5728 K8S \u7b49\u7f16\u6392\u5de5\u5177\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u5f02\u5e38"))),(0,n.kt)("p",null,"\u7531\u4e8e Apache Doris 1.2 \u7248\u672c\u5f00\u59cb\uff0c\u5f00\u59cb\u652f\u6301 JavaUDF \u80fd\u529b\uff0c\u6545\u800c BE \u4e5f\u9700\u8981\u6709 JDK \u73af\u5883\uff0c\u63a8\u8350\u7684\u955c\u50cf\u5982\u4e0b\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Doris \u7a0b\u5e8f"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63a8\u8350\u57fa\u7840\u7236\u955c\u50cf"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,n.kt)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Backend"),(0,n.kt)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Broker"),(0,n.kt)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")))),(0,n.kt)("h3",{id:"\u811a\u672c\u524d\u671f\u51c6\u5907"},"\u811a\u672c\u524d\u671f\u51c6\u5907"),(0,n.kt)("p",null,"\u7f16\u8bd1 Docker Image \u7684 Dockerfile \u811a\u672c\u4e2d\uff0c\u5173\u4e8e Apache Doris \u7a0b\u5e8f\u4e8c\u8fdb\u5236\u5305\u7684\u52a0\u8f7d\u65b9\u5f0f\uff0c\u6709\u4e24\u79cd\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7 wget / curl \u5728\u7f16\u8bd1\u65f6\u6267\u884c\u4e0b\u8f7d\u547d\u4ee4\uff0c\u968f\u540e\u5b8c\u6210 docker build \u5236\u4f5c\u8fc7\u7a0b"),(0,n.kt)("li",{parentName:"ol"},"\u63d0\u524d\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305\u81f3\u7f16\u8bd1\u76ee\u5f55\uff0c\u7136\u540e\u901a\u8fc7 ADD \u6216\u8005 COPY \u547d\u4ee4\u52a0\u8f7d\u81f3 docker build \u8fc7\u7a0b\u4e2d")),(0,n.kt)("p",null,"\u4f7f\u7528\u524d\u8005\u4f1a\u8ba9 Docker Image Size \u66f4\u5c0f\uff0c\u4f46\u662f\u5982\u679c\u6784\u5efa\u5931\u8d25\u7684\u8bdd\u53ef\u80fd\u4e0b\u8f7d\u64cd\u4f5c\u4f1a\u91cd\u590d\u8fdb\u884c\uff0c\u5bfc\u81f4\u6784\u5efa\u65f6\u95f4\u8fc7\u957f\uff0c\u800c\u540e\u8005\u66f4\u9002\u7528\u4e8e\u7f51\u7edc\u73af\u5883\u4e0d\u662f\u5f88\u597d\u7684\u6784\u5efa\u73af\u5883\u3002\u540e\u8005\u6784\u5efa\u7684\u955c\u50cf\u8981\u7565\u5927\u4e8e\u524d\u8005\uff0c\u4f46\u662f\u4e0d\u4f1a\u5927\u5f88\u591a\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7efc\u4e0a\uff0c\u672c\u6587\u6863\u7684\u793a\u4f8b\u4ee5\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u4e3a\u51c6\uff0c\u82e5\u6709\u7b2c\u4e00\u79cd\u8bc9\u6c42\uff0c\u53ef\u6839\u636e\u81ea\u5df1\u9700\u6c42\u5b9a\u5236\u4fee\u6539\u5373\u53ef\u3002")),(0,n.kt)("h3",{id:"\u51c6\u5907\u4e8c\u8fdb\u5236\u5305"},"\u51c6\u5907\u4e8c\u8fdb\u5236\u5305"),(0,n.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u6709\u5b9a\u5236\u5316\u5f00\u53d1\u9700\u6c42\uff0c\u5219\u9700\u8981\u81ea\u5df1\u4fee\u6539\u6e90\u7801\u540e\u8fdb\u884c",(0,n.kt)("a",{parentName:"p",href:"../source-install/compilation"},"\u7f16\u8bd1"),"\u6253\u5305\uff0c\u7136\u540e\u653e\u7f6e\u81f3\u6784\u5efa\u76ee\u5f55\u5373\u53ef\u3002"),(0,n.kt)("p",null,"\u82e5\u65e0\u7279\u6b8a\u9700\u6c42\uff0c\u76f4\u63a5",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/download"},"\u4e0b\u8f7d"),"\u5b98\u7f51\u63d0\u4f9b\u7684\u4e8c\u8fdb\u5236\u5305\u5373\u53ef\u3002"),(0,n.kt)("h3",{id:"\u6784\u5efa\u6b65\u9aa4"},"\u6784\u5efa\u6b65\u9aa4"),(0,n.kt)("h4",{id:"\u6784\u5efa-fe"},"\u6784\u5efa FE"),(0,n.kt)("p",null,"\u6784\u5efa\u73af\u5883\u76ee\u5f55\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                                // \u6784\u5efa\u6839\u76ee\u5f55 \n    \u2514\u2500\u2500 fe                                                      // FE \u6784\u5efa\u76ee\u5f55\n        \u251c\u2500\u2500 dockerfile                                          // dockerfile \u811a\u672c\n        \u2514\u2500\u2500 resource                                            // \u8d44\u6e90\u76ee\u5f55\n            \u251c\u2500\u2500 init_fe.sh                                      // \u542f\u52a8\u53ca\u6ce8\u518c\u811a\u672c\n            \u2514\u2500\u2500 apache-doris-x.x.x-bin-fe.tar.gz                // \u4e8c\u8fdb\u5236\u7a0b\u5e8f\u5305\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u6784\u5efa\u73af\u5883\u76ee\u5f55"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/fe/resource\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e0b\u8f7d",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/download"},"\u5b98\u65b9\u4e8c\u8fdb\u5236\u5305"),"/\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u5305"),(0,n.kt)("p",{parentName:"li"},"\u62f7\u8d1d\u4e8c\u8fdb\u5236\u5305\u81f3 ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/fe/resource")," \u76ee\u5f55\u4e0b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199 FE \u7684 Dockerfile \u811a\u672c"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'# \u9009\u62e9\u57fa\u7840\u955c\u50cf\nFROM openjdk:8u342-jdk\n\n# \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/fe/bin:$PATH"\n\n# \u4e0b\u8f7d\u8f6f\u4ef6\u81f3\u955c\u50cf\u5185\uff0c\u53ef\u6839\u636e\u9700\u8981\u66ff\u6362\nADD ./resource/apache-doris-fe-${x.x.x}-bin.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-fe-${x.x.x}-bin /opt/apache-doris/fe\n\nADD ./resource/init_fe.sh /opt/apache-doris/fe/bin\nRUN chmod 755 /opt/apache-doris/fe/bin/init_fe.sh\n\nENTRYPOINT ["/opt/apache-doris/fe/bin/init_fe.sh"]\n')),(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199\u540e\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u5e76\u4fdd\u5b58\u81f3 ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/fe")," \u76ee\u5f55\u4e0b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199 FE \u7684\u6267\u884c\u811a\u672c"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u53c2\u8003\u590d\u5236 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/fe/resource/init_fe.sh"},"init_fe.sh")," \u7684\u5185\u5bb9"),(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199\u540e\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"init_fe.sh")," \u5e76\u4fdd\u5b58\u81f3 ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/fe/resouce")," \u76ee\u5f55\u4e0b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u6784\u5efa"),(0,n.kt)("p",{parentName:"li"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"${tagName}")," \u9700\u66ff\u6362\u4e3a\u4f60\u60f3\u8981\u6253\u5305\u547d\u540d\u7684 tag \u540d\u79f0\uff0c\u5982\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-fe")),(0,n.kt)("p",{parentName:"li"},"\u6784\u5efa FE\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/fe\ndocker build . -t ${fe-tagName}\n")))),(0,n.kt)("h4",{id:"\u6784\u5efa-be"},"\u6784\u5efa BE"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6784\u5efa\u73af\u5883\u76ee\u5f55")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/be/resource\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6784\u5efa\u73af\u5883\u76ee\u5f55\u5982\u4e0b\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                                // \u6784\u5efa\u6839\u76ee\u5f55 \n    \u2514\u2500\u2500 be                                                      // BE \u6784\u5efa\u76ee\u5f55\n        \u251c\u2500\u2500 dockerfile                                          // dockerfile \u811a\u672c\n        \u2514\u2500\u2500 resource                                            // \u8d44\u6e90\u76ee\u5f55\n            \u251c\u2500\u2500 init_be.sh                                      // \u542f\u52a8\u53ca\u6ce8\u518c\u811a\u672c\n            \u2514\u2500\u2500 apache-doris-x.x.x-bin-x86_64/arm-be.tar.gz     // \u4e8c\u8fdb\u5236\u7a0b\u5e8f\u5305\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199 BE \u7684 Dockerfile \u811a\u672c"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'# \u9009\u62e9\u57fa\u7840\u955c\u50cf\nFROM openjdk:8u342-jdk\n\n# \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/be/bin:$PATH"\n\n# \u4e0b\u8f7d\u8f6f\u4ef6\u81f3\u955c\u50cf\u5185\uff0c\u53ef\u6839\u636e\u9700\u8981\u66ff\u6362\nADD ./resource/apache-doris-be-${x.x.x}-bin-x86_64.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-be-${x.x.x}-bin-x86_64 /opt/apache-doris/be\n\nADD ./resource/init_be.sh /opt/apache-doris/be/bin\nRUN chmod 755 /opt/apache-doris/be/bin/init_be.sh\n\nENTRYPOINT ["/opt/apache-doris/be/bin/init_be.sh"]\n')),(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199\u540e\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u5e76\u4fdd\u5b58\u81f3 ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/be")," \u76ee\u5f55\u4e0b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199 BE \u7684\u6267\u884c\u811a\u672c"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u53c2\u8003\u590d\u5236 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/be/resource/init_be.sh"},"init_be.sh")," \u7684\u5185\u5bb9"),(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199\u540e\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"init_be.sh")," \u5e76\u4fdd\u5b58\u81f3 ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/be/resouce")," \u76ee\u5f55\u4e0b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u6784\u5efa"),(0,n.kt)("p",{parentName:"li"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"${tagName}")," \u9700\u66ff\u6362\u4e3a\u4f60\u60f3\u8981\u6253\u5305\u547d\u540d\u7684 tag \u540d\u79f0\uff0c\u5982\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-be")),(0,n.kt)("p",{parentName:"li"},"\u6784\u5efa BE\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/be\ndocker build . -t ${be-tagName}\n")),(0,n.kt)("p",{parentName:"li"},"\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u4f1a\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"Success")," \u5b57\u6837\u63d0\u793a\uff0c\u8fd9\u65f6\u5019\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u67e5\u770b\u521a\u6784\u5efa\u5b8c\u6210\u7684 Image \u955c\u50cf"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker images\n")))),(0,n.kt)("h4",{id:"\u6784\u5efa-broker"},"\u6784\u5efa Broker"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6784\u5efa\u73af\u5883\u76ee\u5f55")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/broker/resource\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6784\u5efa\u73af\u5883\u76ee\u5f55\u5982\u4e0b\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                                // \u6784\u5efa\u6839\u76ee\u5f55 \n    \u2514\u2500\u2500 broker                                                  // BROKER \u6784\u5efa\u76ee\u5f55\n        \u251c\u2500\u2500 dockerfile                                          // dockerfile \u811a\u672c\n        \u2514\u2500\u2500 resource                                            // \u8d44\u6e90\u76ee\u5f55\n            \u251c\u2500\u2500 init_broker.sh                                  // \u542f\u52a8\u53ca\u6ce8\u518c\u811a\u672c\n            \u2514\u2500\u2500 apache-doris-x.x.x-bin-broker.tar.gz            // \u4e8c\u8fdb\u5236\u7a0b\u5e8f\u5305\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199 Broker \u7684 Dockerfile \u811a\u672c"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'# \u9009\u62e9\u57fa\u7840\u955c\u50cf\nFROM openjdk:8u342-jdk\n\n# \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/broker/bin:$PATH"\n\n# \u4e0b\u8f7d\u8f6f\u4ef6\u81f3\u955c\u50cf\u5185\uff0c\u6b64\u5904 broker \u76ee\u5f55\u88ab\u540c\u6b65\u538b\u7f29\u81f3 FE \u7684\u4e8c\u8fdb\u5236\u5305\uff0c\u9700\u8981\u81ea\u884c\u89e3\u538b\u91cd\u65b0\u6253\u5305\uff0c\u53ef\u6839\u636e\u9700\u8981\u66ff\u6362\nADD ./resource/apache_hdfs_broker.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache_hdfs_broker /opt/apache-doris/broker\n\nADD ./resource/init_broker.sh /opt/apache-doris/broker/bin\nRUN chmod 755 /opt/apache-doris/broker/bin/init_broker.sh\n\nENTRYPOINT ["/opt/apache-doris/broker/bin/init_broker.sh"]\n')),(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199\u540e\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u5e76\u4fdd\u5b58\u81f3 ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/broker")," \u76ee\u5f55\u4e0b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199 BE \u7684\u6267\u884c\u811a\u672c"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u53c2\u8003\u590d\u5236 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/broker/resource/init_broker.sh"},"init_broker.sh")," \u7684\u5185\u5bb9"),(0,n.kt)("p",{parentName:"li"},"\u7f16\u5199\u540e\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"init_broker.sh")," \u5e76\u4fdd\u5b58\u81f3 ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/broker/resouce")," \u76ee\u5f55\u4e0b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u6784\u5efa"),(0,n.kt)("p",{parentName:"li"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"${tagName}")," \u9700\u66ff\u6362\u4e3a\u4f60\u60f3\u8981\u6253\u5305\u547d\u540d\u7684 tag \u540d\u79f0\uff0c\u5982\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-broker")),(0,n.kt)("p",{parentName:"li"},"\u6784\u5efa Broker\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/broker\ndocker build . -t ${broker-tagName}\n")),(0,n.kt)("p",{parentName:"li"},"\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u4f1a\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"Success")," \u5b57\u6837\u63d0\u793a\uff0c\u8fd9\u65f6\u5019\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u67e5\u770b\u521a\u6784\u5efa\u5b8c\u6210\u7684 Image \u955c\u50cf"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker images\n")))),(0,n.kt)("h2",{id:"\u63a8\u9001\u955c\u50cf\u81f3-dockerhub-\u6216\u79c1\u6709\u4ed3\u5e93"},"\u63a8\u9001\u955c\u50cf\u81f3 DockerHub \u6216\u79c1\u6709\u4ed3\u5e93"),(0,n.kt)("p",null,"\u767b\u5f55 DockerHub \u8d26\u53f7"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker login\n")),(0,n.kt)("p",null,"\u767b\u5f55\u6210\u529f\u4f1a\u63d0\u793a ",(0,n.kt)("inlineCode",{parentName:"p"},"Success")," \u76f8\u5173\u63d0\u793a\uff0c\u968f\u540e\u63a8\u9001\u81f3\u4ed3\u5e93\u5373\u53ef"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker push ${tagName}\n")))}d.isMDXComponent=!0}}]);