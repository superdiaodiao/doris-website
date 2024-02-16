"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92370],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>u});var n=a(96540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=n.createContext({}),i=function(e){var r=n.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),y=t,u=d["".concat(p,".").concat(y)]||d[y]||g[y]||o;return a?n.createElement(u,l(l({ref:r},c),{},{components:a})):n.createElement(u,l({ref:r},c))}));function u(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=y;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[d]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},63707:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(58168),t=(a(96540),a(15680));const o={title:"\u5b8c\u6210\u53d1\u5e03",language:"zh-CN"},l=void 0,s={unversionedId:"release-and-verify/release-complete",id:"release-and-verify/release-complete",title:"\u5b8c\u6210\u53d1\u5e03",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/release-and-verify/release-complete.md",sourceDirName:"release-and-verify",slug:"/release-and-verify/release-complete",permalink:"/zh-CN/community/release-and-verify/release-complete",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5b8c\u6210\u53d1\u5e03",language:"zh-CN"},sidebar:"community",previous:{title:"\u53d1\u5e03 Doris SDK",permalink:"/zh-CN/community/release-and-verify/release-doris-sdk"},next:{title:"\u9a8c\u8bc1 Apache \u53d1\u5e03\u7248\u672c",permalink:"/zh-CN/community/release-and-verify/release-verify"}},p={},i=[{value:"\u4e0a\u4f20 package \u5230 release",id:"\u4e0a\u4f20-package-\u5230-release",level:2},{value:"\u5728 Doris \u5b98\u7f51\u548c github \u53d1\u5e03\u94fe\u63a5",id:"\u5728-doris-\u5b98\u7f51\u548c-github-\u53d1\u5e03\u94fe\u63a5",level:2},{value:"\u521b\u5efa\u4e0b\u8f7d\u94fe\u63a5",id:"\u521b\u5efa\u4e0b\u8f7d\u94fe\u63a5",level:3},{value:"Maven",id:"maven",level:3},{value:"\u51c6\u5907 release note",id:"\u51c6\u5907-release-note",level:3},{value:"svn \u4e0a\u6e05\u7406\u65e7\u7248\u672c\u7684\u5305",id:"svn-\u4e0a\u6e05\u7406\u65e7\u7248\u672c\u7684\u5305",level:3},{value:"Announce \u90ae\u4ef6",id:"announce-\u90ae\u4ef6",level:2}],c={toc:i},d="wrapper";function g(e){let{components:r,...a}=e;return(0,t.yg)(d,(0,n.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u5b8c\u6210\u53d1\u5e03"},"\u5b8c\u6210\u53d1\u5e03"),(0,t.yg)("p",null,"\u672c\u6587\u6863\u4e2d\u7684\u6b65\u9aa4\uff0c\u662f\u5728\u5b8c\u6210 dev@doris \u90ae\u4ef6\u7ec4\u4e2d\u7684\u53d1\u7248\u6295\u7968\u5e76\u901a\u8fc7\u540e\uff0c\u8fdb\u884c\u7684\u540e\u7eed\u6b65\u9aa4\u3002"),(0,t.yg)("h2",{id:"\u4e0a\u4f20-package-\u5230-release"},"\u4e0a\u4f20 package \u5230 release"),(0,t.yg)("p",null,"\u5f53\u6b63\u5f0f\u53d1\u5e03\u6295\u7968\u6210\u529f\u540e\uff0c\u5148\u53d1","[Result]","\u90ae\u4ef6\uff0c\u7136\u540e\u5c31\u51c6\u5907 release package\u3002\n\u5c06\u4e4b\u524d\u5728dev\u4e0b\u53d1\u5e03\u7684\u5bf9\u5e94\u6587\u4ef6\u5939\u4e0b\u7684\u6e90\u7801\u5305\u3001\u7b7e\u540d\u6587\u4ef6\u548chash\u6587\u4ef6\u62f7\u8d1d\u5230\u53e6\u4e00\u4e2a\u76ee\u5f55 1.1.0\uff0c\u6ce8\u610f\u6587\u4ef6\u540d\u5b57\u4e2d\u4e0d\u8981rcxx (\u53ef\u4ee5rename\uff0c\u4f46\u4e0d\u8981\u91cd\u65b0\u8ba1\u7b97\u7b7e\u540d\uff0chash\u53ef\u4ee5\u91cd\u65b0\u8ba1\u7b97\uff0c\u7ed3\u679c\u4e0d\u4f1a\u53d8)"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u8fd9\u4e00\u6b65\u4ec5PMC\u6210\u5458\u6709\u6743\u9650\u64cd\u4f5c\u3002")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'From:\nhttps://dist.apache.org/repos/dist/dev/doris/\n\nTo:\nhttps://dist.apache.org/repos/dist/release/doris/\n\nEg:\nsvn mv -m "move doris 1.1.0-rc05 to release" https://dist.apache.org/repos/dist/dev/doris/1.1 https://dist.apache.org/repos/dist/release/doris/1.1\n')),(0,t.yg)("p",null,"\u7b2c\u4e00\u6b21\u53d1\u5e03\u7684\u8bdd KEYS \u6587\u4ef6\u4e5f\u9700\u8981\u62f7\u8d1d\u8fc7\u6765\u3002\u7136\u540eadd\u5230svn release \u4e0b\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"add \u6210\u529f\u540e\u5c31\u53ef\u4ee5\u5728\u4e0b\u9762\u7f51\u5740\u4e0a\u770b\u5230\u4f60\u53d1\u5e03\u7684\u6587\u4ef6\nhttps://dist.apache.org/repos/dist/release/doris/1.xx/\n\n\u7a0d\u7b49\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u80fd\u5728 apache \u5b98\u7f51\u770b\u5230\uff1a\nhttp://www.apache.org/dist/doris/1.xx/\n")),(0,t.yg)("h2",{id:"\u5728-doris-\u5b98\u7f51\u548c-github-\u53d1\u5e03\u94fe\u63a5"},"\u5728 Doris \u5b98\u7f51\u548c github \u53d1\u5e03\u94fe\u63a5"),(0,t.yg)("p",null,"\u6211\u4eec\u4ee5 Doris Core \u4e3a\u4f8b\u3002\u5176\u4ed6\u7ec4\u4ef6\u6ce8\u610f\u66ff\u6362\u5bf9\u5e94\u7684\u540d\u79f0\u3002"),(0,t.yg)("h3",{id:"\u521b\u5efa\u4e0b\u8f7d\u94fe\u63a5"},"\u521b\u5efa\u4e0b\u8f7d\u94fe\u63a5"),(0,t.yg)("p",null,"\u4e0b\u8f7d\u94fe\u63a5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'http://www.apache.org/dyn/closer.cgi?filename=doris/1.xx/apache-doris-1.xx-src.tar.gz&action=download\n\nwget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=doris/1.xx/apache-doris-1.xx-src.tar.gz"\n')),(0,t.yg)("p",null,"\u539f\u59cb\u4f4d\u7f6e:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"https://www.apache.org/dist/doris/1.xx/\n\nhttp://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n")),(0,t.yg)("p",null,"\u6e90\u7801\u5305\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"http://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n\nASC:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.asc\n\nsha512:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.sha512\n")),(0,t.yg)("p",null,"KEYS:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"http://archive.apache.org/dist/doris/KEYS\n")),(0,t.yg)("p",null,"refer to: ",(0,t.yg)("a",{parentName:"p",href:"http://www.apache.org/dev/release-download-pages#closer"},"http://www.apache.org/dev/release-download-pages#closer")),(0,t.yg)("h3",{id:"maven"},"Maven"),(0,t.yg)("p",null,"\u5728 ",(0,t.yg)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories")," \u4e2d\u627e\u5230\u5bf9\u5e94\u7684 Staging Repo\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709 close\uff0c\u5148\u70b9\u51fb ",(0,t.yg)("inlineCode",{parentName:"li"},"close")," \u5173\u95ed\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,t.yg)("inlineCode",{parentName:"li"},"Release")," \u8fdb\u884c\u6b63\u5f0f\u53d1\u5e03\u3002")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u5982\u679c ",(0,t.yg)("inlineCode",{parentName:"p"},"close")," \u9636\u6bb5\u62a5\u9519\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"No public key: Key with id: (xxx) was not able to be located on"),"\u3002")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u6267\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"gpg --keyserver hkp://keyserver.ubuntu.com --send-keys xxx")," \u540e\u518d\u91cd\u65b0close\uff0cxxx \u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"gpg -k")," \u67e5\u770b\u3002")),(0,t.yg)("h3",{id:"\u51c6\u5907-release-note"},"\u51c6\u5907 release note"),(0,t.yg)("p",null,"\u9700\u8981\u4fee\u6539\u5982\u4e0b\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,t.yg)("p",null,"1\u3001Github \u7684 release \u9875\u9762"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"https://github.com/apache/doris/releases/tag/0.9.0-rc01\n")),(0,t.yg)("p",null,"2\u3001Doris \u5b98\u7f51\u4e0b\u8f7d\u9875\u9762"),(0,t.yg)("p",null,"\u4e0b\u8f7d\u9875\u9762\u662f\u4e00\u4e2a markdown \u6587\u4ef6\uff0c\u5730\u5740\u5982\u4e0b\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docs/zh-CN/downloads/downloads.md\ndocs/en/downloads/downloads.md\n")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u9700\u8981\u5c06\u4e0a\u4e00\u6b21\u53d1\u5e03\u7248\u672c\u7684\u4e0b\u8f7d\u5305\u5730\u5740\u6539\u4e3a apache \u7684\u5f52\u6863\u5730\u5740\uff08\u89c1\u540e\uff09\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u589e\u52a0\u65b0\u7248\u672c\u7684\u4e0b\u8f7d\u4fe1\u606f\u3002")),(0,t.yg)("h3",{id:"svn-\u4e0a\u6e05\u7406\u65e7\u7248\u672c\u7684\u5305"},"svn \u4e0a\u6e05\u7406\u65e7\u7248\u672c\u7684\u5305"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"svn \u4e0a\u5220\u9664\u65e7\u7248\u672c\u7684\u5305")),(0,t.yg)("p",null,"\u7531\u4e8e svn \u53ea\u9700\u8981\u4fdd\u5b58\u6700\u65b0\u7248\u672c\u7684\u5305\uff0c\u6240\u4ee5\u5f53\u6709\u65b0\u7248\u672c\u53d1\u5e03\u7684\u65f6\u5019\uff0c\u65e7\u7248\u672c\u7684\u5305\u5c31\u5e94\u8be5\u4ece svn \u4e0a\u6e05\u7406\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"https://dist.apache.org/repos/dist/release/doris/\nhttps://dist.apache.org/repos/dist/dev/doris/\n")),(0,t.yg)("p",null,"\u4fdd\u6301\u8fd9\u4e24\u4e2a\u5730\u5740\u4e2d\uff0c\u53ea\u6709\u6700\u65b0\u7248\u672c\u7684\u5305\u5373\u53ef\u3002"),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u5c06 Doris \u5b98\u7f51\u7684\u4e0b\u8f7d\u9875\u9762\u4e2d\uff0c\u65e7\u7248\u672c\u5305\u7684\u4e0b\u8f7d\u5730\u5740\u6539\u4e3a\u5f52\u6863\u9875\u9762\u7684\u5730\u5740 ")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\u4e0b\u8f7d\u9875\u9762: http://doris.apache.org/downloads.html\n\u5f52\u6863\u9875\u9762: http://archive.apache.org/dist/doris\n")),(0,t.yg)("p",null,"Apache \u4f1a\u6709\u540c\u6b65\u673a\u5236\u53bb\u5c06\u5386\u53f2\u7684\u53d1\u5e03\u7248\u672c\u8fdb\u884c\u4e00\u4e2a\u5f52\u6863\uff0c\u5177\u4f53\u64cd\u4f5c\u89c1\uff1a",(0,t.yg)("a",{parentName:"p",href:"https://www.apache.org/legal/release-policy.html#how-to-archive"},"how to archive"),"\n\u6240\u4ee5\u5373\u4f7f\u65e7\u7684\u5305\u4ece svn \u4e0a\u6e05\u9664\uff0c\u8fd8\u662f\u53ef\u4ee5\u5728\u5f52\u6863\u9875\u9762\u4e2d\u627e\u5230\u3002"),(0,t.yg)("h2",{id:"announce-\u90ae\u4ef6"},"Announce \u90ae\u4ef6"),(0,t.yg)("p",null,"Title:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"[ANNOUNCE] Apache Doris 1.xx release\n")),(0,t.yg)("p",null,"\u53d1\u9001\u90ae\u4ef6\u7ec4\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"dev@doris.apache.org\n")),(0,t.yg)("p",null,"\u90ae\u4ef6\u6b63\u6587\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"Hi All,\n\nWe are pleased to announce the release of Apache Doris 1.xx.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/master/zh-CN/downloads/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n")))}g.isMDXComponent=!0}}]);