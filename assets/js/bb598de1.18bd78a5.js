"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73263],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(t),u=r,m=g["".concat(c,".").concat(u)]||g[u]||s[u]||a;return t?o.createElement(m,i(i({ref:n},p),{},{components:t})):o.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},590560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(58168),r=(t(296540),t(15680));const a={title:"C++ Code Diagnostic",language:"en"},i=void 0,l={unversionedId:"developer-guide/cpp-diagnostic-code",id:"developer-guide/cpp-diagnostic-code",title:"C++ Code Diagnostic",description:"\x3c!--",source:"@site/community/developer-guide/cpp-diagnostic-code.md",sourceDirName:"developer-guide",slug:"/developer-guide/cpp-diagnostic-code",permalink:"/community/developer-guide/cpp-diagnostic-code",draft:!1,tags:[],version:"current",frontMatter:{title:"C++ Code Diagnostic",language:"en"},sidebar:"community",previous:{title:"C++ Format Code",permalink:"/community/developer-guide/cpp-format-code"},next:{title:"Bitmap/HLL data format",permalink:"/community/developer-guide/bitmap-hll-file-format"}},c={},d=[{value:"Clang-Tidy",id:"clang-tidy",level:3},{value:"Enable clangd on VSCODE",id:"enable-clangd-on-vscode",level:3}],p={toc:d},g="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"c-code-diagnostic"},"C++ Code Diagnostic"),(0,r.yg)("p",null,"Doris support to use ",(0,r.yg)("a",{parentName:"p",href:"https://clangd.llvm.org/"},"Clangd")," and ",(0,r.yg)("a",{parentName:"p",href:"https://clang.llvm.org/extra/clang-tidy/"},"Clang-Tidy"),"\nto diagnostic code. Clangd and Clang-Tidy already has in ",(0,r.yg)("a",{parentName:"p",href:"/docs/install/source-install/compilation-with-ldb-toolchain"},"LDB-toolchain"),"\uff0calso can install by self."),(0,r.yg)("h3",{id:"clang-tidy"},"Clang-Tidy"),(0,r.yg)("p",null,"Clang-Tidy can do some diagnostic config, config file ",(0,r.yg)("inlineCode",{parentName:"p"},".clang-tidy")," is in Doris root path. Compared with vscode-cpptools, clangd can provide more powerful and accurate code jumping for vscode, and integrates the analysis and quick-fix functions of clang-tidy."),(0,r.yg)("h3",{id:"enable-clangd-on-vscode"},"Enable clangd on VSCODE"),(0,r.yg)("p",null,"First we should install clangd plugin, then edit ",(0,r.yg)("inlineCode",{parentName:"p"},"settings.json")," or just change config on gui.\nBefore using, compile ",(0,r.yg)("inlineCode",{parentName:"p"},"be(RELEASE)")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"be-ut(ASAN)")," once to generate the corresponding ",(0,r.yg)("inlineCode",{parentName:"p"},"compile_commands.json")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    "clangd.path": "ldb_toolchain/bin/clangd", //clangd path\n    "clangd.arguments": [\n        "--background-index",\n        "--clang-tidy", //enable clang-tidy\n        "--compile-commands-dir=doris/be/build_Release/",\n        "--completion-style=detailed",\n        "-j=5", //clangd diagnostic parallelism\n        "--all-scopes-completion",\n        "--pch-storage=memory",\n        "--pretty",\n        "--query-driver=ldb_toolchain/bin/*" //path of compiler\n    ],\n    "clangd.trace": "output/clangd-server.log"\n')))}s.isMDXComponent=!0}}]);