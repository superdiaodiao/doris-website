"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90746],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||g[m]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const l={title:"\u5728 Windows \u5e73\u53f0\u4e0a\u7f16\u8bd1",language:"zh-CN"},i=void 0,o={unversionedId:"install/source-install/compilation-win",id:"install/source-install/compilation-win",title:"\u5728 Windows \u5e73\u53f0\u4e0a\u7f16\u8bd1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/source-install/compilation-win.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-win",permalink:"/zh-CN/docs/dev/install/source-install/compilation-win",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5728 Windows \u5e73\u53f0\u4e0a\u7f16\u8bd1",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5728 Arm \u5e73\u53f0\u4e0a\u7f16\u8bd1",permalink:"/zh-CN/docs/dev/install/source-install/compilation-arm"},next:{title:"\u5728 MacOS \u5e73\u53f0\u4e0a\u7f16\u8bd1",permalink:"/zh-CN/docs/dev/install/source-install/compilation-mac"}},p={},c=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u7f16\u8bd1\u6b65\u9aa4",id:"\u7f16\u8bd1\u6b65\u9aa4",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],s={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u5728-windows-\u5e73\u53f0\u4e0a\u7f16\u8bd1"},"\u5728 Windows \u5e73\u53f0\u4e0a\u7f16\u8bd1"),(0,a.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Windows \u5e73\u53f0\u4e0a\u7f16\u8bd1\u6e90\u7801"),(0,a.yg)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Windows 11 \u6216 Windows 10 \u7248\u672c 1903\u3001\u5185\u90e8\u7248\u672c 18362 \u6216\u66f4\u9ad8\u7248\u672c\u4e2d\u53ef\u7528"),(0,a.yg)("li",{parentName:"ol"},"\u53ef\u6b63\u5e38\u4f7f\u7528 WSL2\uff0cWSL2 \u5f00\u542f\u6b65\u9aa4\u4e0d\u518d\u5728\u6b64\u8d58\u8ff0")),(0,a.yg)("h2",{id:"\u7f16\u8bd1\u6b65\u9aa4"},"\u7f16\u8bd1\u6b65\u9aa4"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u901a\u8fc7 Microsoft Store \u5b89\u88c5 Oracle Linux 7.9 \u53d1\u884c\u7248"),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"\u4e5f\u53ef\u901a\u8fc7 Docker \u955c\u50cf\u6216 Github \u5b89\u88c5\u65b9\u5f0f\u5b89\u88c5\u5176\u4ed6\u60f3\u8981\u7684\u53d1\u884c\u7248"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6253\u5f00 CMD\uff0c\u6307\u5b9a\u8eab\u4efd\u8fd0\u884c WSL2"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"wsl -d OracleLinux_7_9 -u root\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\n# install autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\n# install bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5b89\u88c5 LDB_TOOLCHAIN \u53ca\u5176\u4ed6\u4e3b\u8981\u7f16\u8bd1\u73af\u5883"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u131-linux-x64.tar.gz"},"Java8")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz"},"Apache Maven 3.6.3")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz"},"Node v12.13.0")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/amosbird/ldb_toolchain_gen/releases/download/v0.18/ldb_toolchain_gen.sh"},"LDB_TOOLCHAIN")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u62c9\u53d6 Doris \u6e90\u7801"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"git clone http://github.com/apache/doris.git\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u7f16\u8bd1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"cd doris\nsh build.sh\n")))),(0,a.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.yg)("p",null,"\u9ed8\u8ba4 WSL2 \u7684\u53d1\u884c\u7248\u6570\u636e\u5b58\u50a8\u76d8\u7b26\u4e3a C \u76d8\uff0c\u5982\u6709\u9700\u8981\u63d0\u524d\u5207\u6362\u5b58\u50a8\u76d8\u7b26\uff0c\u4ee5\u9632\u6b62\u7cfb\u7edf\u76d8\u7b26\u5360\u6ee1"))}g.isMDXComponent=!0}}]);