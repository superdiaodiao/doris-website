"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[68895],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u5728macOS\u5e73\u53f0\u4e0a\u7f16\u8bd1",language:"zh-CN"},i=void 0,o={unversionedId:"install/source-install/compilation-mac",id:"version-dev/install/source-install/compilation-mac",title:"\u5728macOS\u5e73\u53f0\u4e0a\u7f16\u8bd1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/install/source-install/compilation-mac.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-mac",permalink:"/zh-CN/docs/dev/install/source-install/compilation-mac",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/install/source-install/compilation-mac.md",tags:[],version:"dev",frontMatter:{title:"\u5728macOS\u5e73\u53f0\u4e0a\u7f16\u8bd1",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5728Windows\u5e73\u53f0\u4e0a\u7f16\u8bd1",permalink:"/zh-CN/docs/dev/install/source-install/compilation-win"},next:{title:"\u6784\u5efa Docker Image",permalink:"/zh-CN/docs/dev/install/construct-docker/construct-docker-image"}},p={},s=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u7f16\u8bd1\u6b65\u9aa4",id:"\u7f16\u8bd1\u6b65\u9aa4",level:2},{value:"\u7b2c\u4e09\u65b9\u5e93",id:"\u7b2c\u4e09\u65b9\u5e93",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u542f\u52a8BE\u5931\u8d25\uff0c\u65e5\u5fd7\u663e\u793a\u9519\u8bef<code>fail to open StorageEngine, res=file descriptors limit is too small</code>",id:"\u542f\u52a8be\u5931\u8d25\u65e5\u5fd7\u663e\u793a\u9519\u8beffail-to-open-storageengine-resfile-descriptors-limit-is-too-small",level:3},{value:"Java\u7248\u672c",id:"java\u7248\u672c",level:3}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5728macos\u5e73\u53f0\u4e0a\u7f16\u8bd1"},"\u5728macOS\u5e73\u53f0\u4e0a\u7f16\u8bd1"),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728macOS\u5e73\u53f0\u4e0a\u7f16\u8bd1\u6e90\u7801\u3002"),(0,n.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"macOS 12 (Monterey) \u53ca\u4ee5\u4e0a\uff08",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("strong",{parentName:"em"},"Intel\u548cApple Silicon\u5747\u652f\u6301")),"\uff09"),(0,n.kt)("li",{parentName:"ol"},"Apple Clang 13\u53ca\u4ee5\u4e0a\uff08\u6700\u597d\u4f7f\u7528\u6700\u65b0\u7248\u672c\uff09"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"))),(0,n.kt)("h2",{id:"\u7f16\u8bd1\u6b65\u9aa4"},"\u7f16\u8bd1\u6b65\u9aa4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),"\u5b89\u88c5\u4f9d\u8d56"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"brew install automake autoconf libtool pkg-config texinfo coreutils gnu-getopt \\\n    python cmake ninja ccache bison byacc gettext wget pcre maven openjdk@11 npm\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u6e90\u7801"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"bash build.sh\n")))),(0,n.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u5e93"},"\u7b2c\u4e09\u65b9\u5e93"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt"),"\u9875\u9762\u6709\u6240\u6709\u7b2c\u4e09\u65b9\u5e93\u7684\u6e90\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-source.tgz"},"doris-thirdparty-source.tgz"),"\u83b7\u5f97\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u5e73\u53f0\u4f7f\u7528\u7684\u662f ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"Intel"))," \u82af\u7247\uff0c\u4e5f\u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt"),"\u9875\u9762\u76f4\u63a5\u4e0b\u8f7d\u9884\u7f16\u8bd1\u597d\u7684\u7b2c\u4e09\u65b9\u5e93",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz"},"doris-thirdparty-prebuilt-darwin-x86_64.tar.xz"),"\uff0c\u7701\u53bb\u7f16\u8bd1\u7b2c\u4e09\u65b9\u5e93\u7684\u8fc7\u7a0b\uff0c\u53c2\u8003\u4e0b\u9762\u7684\u547d\u4ee4\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd thirdparty\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz \\\n    -o doris-thirdparty-prebuilt-darwin-x86_64.tar.xz\ntar -xvf doris-thirdparty-prebuilt-darwin-x86_64.tar.xz\n")))),(0,n.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u547d\u4ee4\u8bbe\u7f6e\u597d",(0,n.kt)("inlineCode",{parentName:"p"},"file descriptors"),"\uff08",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"\u6ce8\u610f\uff1a\u5173\u95ed\u5f53\u524d\u7ec8\u7aef\u4f1a\u8bdd\u540e\u9700\u8981\u91cd\u65b0\u8bbe\u7f6e")),"\uff09\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"ulimit -n 65536\n")),(0,n.kt)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u5c06\u8be5\u914d\u7f6e\u5199\u5230\u5230\u542f\u52a8\u811a\u672c\u4e2d\uff0c\u4ee5\u4fbf\u4e0b\u6b21\u6253\u5f00\u7ec8\u7aef\u4f1a\u8bdd\u65f6\u4e0d\u9700\u8981\u518d\u6b21\u8bbe\u7f6e\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# bash\necho 'ulimit -n 65536' >>~/.bashrc\n\n# zsh\necho 'ulimit -n 65536' >>~/.zshrc\n")),(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b\u8bbe\u7f6e\u662f\u5426\u751f\u6548\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ ulimit -n\n65536\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u542f\u52a8BE"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd output/be/bin\n./start_be.sh --daemon\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u542f\u52a8FE"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd output/fe/bin\n./start_fe.sh --daemon\n")))),(0,n.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.kt)("h3",{id:"\u542f\u52a8be\u5931\u8d25\u65e5\u5fd7\u663e\u793a\u9519\u8beffail-to-open-storageengine-resfile-descriptors-limit-is-too-small"},"\u542f\u52a8BE\u5931\u8d25\uff0c\u65e5\u5fd7\u663e\u793a\u9519\u8bef",(0,n.kt)("inlineCode",{parentName:"h3"},"fail to open StorageEngine, res=file descriptors limit is too small")),(0,n.kt)("p",null,"\u53c2\u8003\u524d\u9762\u63d0\u5230\u7684\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"p"},"file descriptors"),"\u3002"),(0,n.kt)("h3",{id:"java\u7248\u672c"},"Java\u7248\u672c"),(0,n.kt)("p",null,"\u63a8\u8350\u4f7f\u7528Java 11\u3002"))}m.isMDXComponent=!0}}]);