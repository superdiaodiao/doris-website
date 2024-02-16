"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[6059],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),g=r,m=s["".concat(d,".").concat(g)]||s[g]||c[g]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},12855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={title:"FE development and debugging environment - Visual Studio Code (VSCode)",language:"en"},i=void 0,l={unversionedId:"developer-guide/fe-vscode-dev",id:"developer-guide/fe-vscode-dev",title:"FE development and debugging environment - Visual Studio Code (VSCode)",description:"\x3c!--",source:"@site/community/developer-guide/fe-vscode-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/fe-vscode-dev",permalink:"/community/developer-guide/fe-vscode-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"FE development and debugging environment - Visual Studio Code (VSCode)",language:"en"},sidebar:"community",previous:{title:"Setting Up dev env for FE - IntelliJ IDEA",permalink:"/community/developer-guide/fe-idea-dev"},next:{title:"BE development and debugging environment under Linux",permalink:"/community/developer-guide/be-vscode-dev"}},d={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Download code for compilation",id:"download-code-for-compilation",level:2},{value:"Setting for VSCode",id:"setting-for-vscode",level:2},{value:"Build",id:"build",level:2}],u={toc:p},s="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"apache-doris-be-development-and-debugging-in-vs-code"},"Apache Doris Be development and debugging in VS Code"),(0,r.yg)("p",null,"Some developers are building FE development environment on a development machine/WSL/docker, but this kind of development environment is not supported for local development, some developers are used to use VSCode to configure remote develop and debug."),(0,r.yg)("h2",{id:"preparation"},"Preparation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JDK11+ (Java Extension Pack need JDK11+) (author is creating a ",(0,r.yg)("inlineCode",{parentName:"li"},"lib")," directory under ",(0,r.yg)("inlineCode",{parentName:"li"},"home"),", and install ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/adoptium/temurin11-binaries/releases/"},"JDK11")," and JDK8 in it, and use them for ",(0,r.yg)("inlineCode",{parentName:"li"},"Extensions")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"Compilation"),")"),(0,r.yg)("li",{parentName:"ul"},"VSCode",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Extension Pack for Java"),(0,r.yg)("li",{parentName:"ul"},"Remote Extensions")))),(0,r.yg)("h2",{id:"download-code-for-compilation"},"Download code for compilation"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris.git"},"https://github.com/apache/doris.git")," Download the doris source code")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"use VSCode to open the code ",(0,r.yg)("inlineCode",{parentName:"p"},"/fe")," directory"))),(0,r.yg)("h2",{id:"setting-for-vscode"},"Setting for VSCode"),(0,r.yg)("p",null,"Create ",(0,r.yg)("inlineCode",{parentName:"p"},"settings.json")," in ",(0,r.yg)("inlineCode",{parentName:"p"},".vscode/")," , and set settings:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"java.configuration.runtimes"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"java.jdt.ls.java.home"')," -- must set it to the directory of JDK11+, used for vscode-java plugin"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"maven.executable.path"')," -- maven path\uff0cfor maven-language-server plugin")),(0,r.yg)("p",null,"example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "java.configuration.runtimes": [\n        {\n            "name": "JavaSE-1.8",\n            "path": "/!!!path!!!/jdk-1.8.0_191"\n        },\n        {\n            "name": "JavaSE-11",\n            "path": "/!!!path!!!/jdk-11.0.14.1+1",\n            "default": true\n        },\n    ],\n    "java.jdt.ls.java.home": "/!!!path!!!/jdk-11.0.14.1+1",\n    "maven.executable.path": "/!!!path!!!/maven/bin/mvn"\n}\n')),(0,r.yg)("h2",{id:"build"},"Build"),(0,r.yg)("p",null,"Other articles have already explained:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/install/source-install/compilation-with-ldb-toolchain"},"Build with LDB toolchain ")),(0,r.yg)("li",{parentName:"ul"},"......")),(0,r.yg)("p",null,"In order to debug, you need to add debugging parameters when fe starts, such as "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005\n")),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"doris/output/fe/bin/start_fe.sh")," , after ",(0,r.yg)("inlineCode",{parentName:"p"},"$JAVA $final_java_opt")," add this param."))}c.isMDXComponent=!0}}]);