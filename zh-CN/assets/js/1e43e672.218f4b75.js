"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75984],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const i={title:"\u4ee3\u7801\u63d0\u4ea4\u6307\u5357",language:"zh-CN"},o=void 0,l={unversionedId:"how-to-contribute/pull-request",id:"how-to-contribute/pull-request",title:"\u4ee3\u7801\u63d0\u4ea4\u6307\u5357",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-contribute/pull-request.md",sourceDirName:"how-to-contribute",slug:"/how-to-contribute/pull-request",permalink:"/zh-CN/community/how-to-contribute/pull-request",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ee3\u7801\u63d0\u4ea4\u6307\u5357",language:"zh-CN"},sidebar:"community",previous:{title:"Commit \u683c\u5f0f\u89c4\u8303",permalink:"/zh-CN/community/how-to-contribute/commit-format-specification"},next:{title:"\u6587\u6863\u8d21\u732e",permalink:"/zh-CN/community/how-to-contribute/contribute-doc"}},p={},s=[{value:"1. Fork\u4ed3\u5e93",id:"1-fork\u4ed3\u5e93",level:3},{value:"2. \u914d\u7f6egit\u548c\u63d0\u4ea4\u4fee\u6539",id:"2-\u914d\u7f6egit\u548c\u63d0\u4ea4\u4fee\u6539",level:3},{value:"\uff081\uff09\u5c06\u4ee3\u7801\u514b\u9686\u5230\u672c\u5730\uff1a",id:"1\u5c06\u4ee3\u7801\u514b\u9686\u5230\u672c\u5730",level:4},{value:"\uff082\uff09\u5c06 apache/doris \u6dfb\u52a0\u4e3a\u672c\u5730\u4ed3\u5e93\u7684\u8fdc\u7a0b\u5206\u652f upstream\uff1a",id:"2\u5c06-apachedoris-\u6dfb\u52a0\u4e3a\u672c\u5730\u4ed3\u5e93\u7684\u8fdc\u7a0b\u5206\u652f-upstream",level:4},{value:"\uff083\uff09\u68c0\u67e5\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e\uff1a",id:"3\u68c0\u67e5\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e",level:4},{value:"\uff084\uff09\u65b0\u5efa\u5206\u652f\u4ee5\u4fbf\u5728\u5206\u652f\u4e0a\u505a\u4fee\u6539\uff1a",id:"4\u65b0\u5efa\u5206\u652f\u4ee5\u4fbf\u5728\u5206\u652f\u4e0a\u505a\u4fee\u6539",level:4},{value:"\uff085\uff09\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u5206\u652f\uff1a",id:"5\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u5206\u652f",level:4},{value:"3. \u521b\u5efaPR",id:"3-\u521b\u5efapr",level:3},{value:"\uff081\uff09\u65b0\u5efa PR",id:"1\u65b0\u5efa-pr",level:4},{value:"\uff082\uff09\u51c6\u5907\u5206\u652f",id:"2\u51c6\u5907\u5206\u652f",level:4},{value:"\uff083\uff09\u586b\u5199 Commit Message",id:"3\u586b\u5199-commit-message",level:4},{value:"\uff084\uff09\u5b8c\u6210\u521b\u5efa",id:"4\u5b8c\u6210\u521b\u5efa",level:4},{value:"4. \u51b2\u7a81\u89e3\u51b3",id:"4-\u51b2\u7a81\u89e3\u51b3",level:3},{value:"\uff081\uff09\u5207\u6362\u81f3\u4e3b\u5206\u652f",id:"1\u5207\u6362\u81f3\u4e3b\u5206\u652f",level:4},{value:"\uff082\uff09\u540c\u6b65\u8fdc\u7aef\u4e3b\u5206\u652f\u81f3\u672c\u5730",id:"2\u540c\u6b65\u8fdc\u7aef\u4e3b\u5206\u652f\u81f3\u672c\u5730",level:4},{value:"\uff083\uff09\u5207\u6362\u56de\u521a\u624d\u7684\u5206\u652f\uff08\u5047\u8bbe\u5206\u652f\u540d\u4e3afix\uff09",id:"3\u5207\u6362\u56de\u521a\u624d\u7684\u5206\u652f\u5047\u8bbe\u5206\u652f\u540d\u4e3afix",level:4},{value:"\uff084\uff09\u8fdb\u884crebase",id:"4\u8fdb\u884crebase",level:4},{value:"5. \u4e00\u4e2a\u4f8b\u5b50",id:"5-\u4e00\u4e2a\u4f8b\u5b50",level:3},{value:"\uff081\uff09\u5bf9\u4e8e\u5df2\u7ecf\u914d\u7f6e\u597d upstream \u7684\u672c\u5730\u5206\u652f fetch \u5230\u6700\u65b0\u4ee3\u7801",id:"1\u5bf9\u4e8e\u5df2\u7ecf\u914d\u7f6e\u597d-upstream-\u7684\u672c\u5730\u5206\u652f-fetch-\u5230\u6700\u65b0\u4ee3\u7801",level:4},{value:"\uff082\uff09\u8fdb\u884crebase",id:"2\u8fdb\u884crebase",level:4},{value:"\uff083\uff09\u68c0\u67e5\u770b\u662f\u5426\u6709\u522b\u4eba\u63d0\u4ea4\u672a\u540c\u6b65\u5230\u81ea\u5df1 repo \u7684\u63d0\u4ea4",id:"3\u68c0\u67e5\u770b\u662f\u5426\u6709\u522b\u4eba\u63d0\u4ea4\u672a\u540c\u6b65\u5230\u81ea\u5df1-repo-\u7684\u63d0\u4ea4",level:4},{value:"\uff084\uff09\u5408\u5e76\u5176\u4ed6\u4eba\u63d0\u4ea4\u7684\u4ee3\u7801\u5230\u81ea\u5df1\u7684 repo",id:"4\u5408\u5e76\u5176\u4ed6\u4eba\u63d0\u4ea4\u7684\u4ee3\u7801\u5230\u81ea\u5df1\u7684-repo",level:4},{value:"\uff085\uff09\u65b0\u5efa\u5206\u652f\uff0c\u51c6\u5907\u5f00\u53d1",id:"5\u65b0\u5efa\u5206\u652f\u51c6\u5907\u5f00\u53d1",level:4},{value:"\uff086\uff09\u4ee3\u7801\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u51c6\u5907\u63d0\u4ea4",id:"6\u4ee3\u7801\u4fee\u6539\u5b8c\u6210\u540e\u51c6\u5907\u63d0\u4ea4",level:4},{value:"\uff087\uff09\u586b\u5199 message \u5e76\u63d0\u4ea4\u5230\u672c\u5730\u7684\u65b0\u5efa\u5206\u652f\u4e0a",id:"7\u586b\u5199-message-\u5e76\u63d0\u4ea4\u5230\u672c\u5730\u7684\u65b0\u5efa\u5206\u652f\u4e0a",level:4},{value:"\uff088\uff09\u5c06\u5206\u652f\u63a8\u5230 GitHub \u8fdc\u7aef\u81ea\u5df1\u7684 repo \u4e2d",id:"8\u5c06\u5206\u652f\u63a8\u5230-github-\u8fdc\u7aef\u81ea\u5df1\u7684-repo-\u4e2d",level:4}],u={toc:s},g="wrapper";function c(e){let{components:t,...i}=e;return(0,a.yg)(g,(0,n.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4ee3\u7801\u63d0\u4ea4\u6307\u5357"},"\u4ee3\u7801\u63d0\u4ea4\u6307\u5357"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Github")," \u4e0a\u9762\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u63d0\u4ea4 ",(0,a.yg)("a",{parentName:"p",href:"https://help.github.com/articles/about-pull-requests/"},"Pull Request (PR)"),"\uff0c\u4e0b\u9762\u4ecb\u7ecd Doris \u9879\u76ee\u7684 PR \u65b9\u6cd5\u3002"),(0,a.yg)("h3",{id:"1-fork\u4ed3\u5e93"},"1. Fork\u4ed3\u5e93"),(0,a.yg)("p",null,"\u8fdb\u5165 apache/doris \u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"github \u9875\u9762")," \uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u6309\u94ae ",(0,a.yg)("inlineCode",{parentName:"p"},"Fork")," \u8fdb\u884c Fork\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Fork",src:r(88511).A,width:"3022",height:"1642"})),(0,a.yg)("h3",{id:"2-\u914d\u7f6egit\u548c\u63d0\u4ea4\u4fee\u6539"},"2. \u914d\u7f6egit\u548c\u63d0\u4ea4\u4fee\u6539"),(0,a.yg)("h4",{id:"1\u5c06\u4ee3\u7801\u514b\u9686\u5230\u672c\u5730"},"\uff081\uff09\u5c06\u4ee3\u7801\u514b\u9686\u5230\u672c\u5730\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git clone https://github.com/<your_github_name>/doris.git\ncd doris\ngit submodule update --init --recursive\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a\u8bf7\u5c06 \\<your","_","github","_","name",">"," \u66ff\u6362\u4e3a\u60a8\u7684 github \u540d\u5b57\u3002"),(0,a.yg)("p",null,"clone \u5b8c\u6210\u540e\uff0corigin \u4f1a\u9ed8\u8ba4\u6307\u5411 github \u4e0a\u7684\u8fdc\u7a0b fork \u5730\u5740\u3002"),(0,a.yg)("h4",{id:"2\u5c06-apachedoris-\u6dfb\u52a0\u4e3a\u672c\u5730\u4ed3\u5e93\u7684\u8fdc\u7a0b\u5206\u652f-upstream"},"\uff082\uff09\u5c06 apache/doris \u6dfb\u52a0\u4e3a\u672c\u5730\u4ed3\u5e93\u7684\u8fdc\u7a0b\u5206\u652f upstream\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cd  doris\ngit remote add upstream https://github.com/apache/doris.git\n")),(0,a.yg)("h4",{id:"3\u68c0\u67e5\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e"},"\uff083\uff09\u68c0\u67e5\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git remote -v\norigin https://github.com/<your_github_name>/doris.git (fetch)\norigin    https://github.com/<your_github_name>/doris.git (push)\nupstream  https://github.com/apache/doris.git (fetch)\nupstream  https://github.com/apache/doris.git (push)\n")),(0,a.yg)("h4",{id:"4\u65b0\u5efa\u5206\u652f\u4ee5\u4fbf\u5728\u5206\u652f\u4e0a\u505a\u4fee\u6539"},"\uff084\uff09\u65b0\u5efa\u5206\u652f\u4ee5\u4fbf\u5728\u5206\u652f\u4e0a\u505a\u4fee\u6539\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git checkout -b <your_branch_name>\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a \\<your","_","branch","_","name",">"," \u4e3a\u60a8\u81ea\u5b9a\u4e49\u7684\u5206\u652f\u540d\u5b57\u3002"),(0,a.yg)("p",null,"\u521b\u5efa\u5b8c\u6210\u540e\u53ef\u8fdb\u884c\u4ee3\u7801\u66f4\u6539\u3002"),(0,a.yg)("h4",{id:"5\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u5206\u652f"},"\uff085\uff09\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u5206\u652f\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'git commit -a -m "<you_commit_message>"\ngit push origin <your_branch_name>\n')),(0,a.yg)("p",null,"\u66f4\u591a git \u4f7f\u7528\u65b9\u6cd5\u8bf7\u8bbf\u95ee\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository"},"git \u4f7f\u7528"),"\uff0c\u8fd9\u91cc\u4e0d\u8d58\u8ff0\u3002"),(0,a.yg)("h3",{id:"3-\u521b\u5efapr"},"3. \u521b\u5efaPR"),(0,a.yg)("h4",{id:"1\u65b0\u5efa-pr"},"\uff081\uff09\u65b0\u5efa PR"),(0,a.yg)("p",null,"\u5728\u6d4f\u89c8\u5668\u5207\u6362\u5230\u81ea\u5df1\u7684 github \u9875\u9762\uff0c\u5207\u6362\u5206\u652f\u5230\u63d0\u4ea4\u7684\u5206\u652f \\<your","_","branch","_","name",">"," \uff0c\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"Compare & pull request")," \u6309\u94ae\u8fdb\u884c\u521b\u5efa\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"new PR",src:r(88225).A,width:"3022",height:"1486"})),(0,a.yg)("h4",{id:"2\u51c6\u5907\u5206\u652f"},"\uff082\uff09\u51c6\u5907\u5206\u652f"),(0,a.yg)("p",null,"\u8fd9\u65f6\u5019\uff0c\u4f1a\u51fa\u73b0 ",(0,a.yg)("inlineCode",{parentName:"p"},"Create pull request")," \u6309\u94ae\uff0c\u5982\u679c\u6ca1\u6709\u8bf7\u68c0\u67e5\u662f\u5426\u6b63\u786e\u9009\u62e9\u4e86\u5206\u652f\uff0c\u4e5f\u53ef\u4ee5\u70b9\u51fb \u201ccompare across forks\u201d \u91cd\u65b0\u9009\u62e9 repo \u548c\u5206\u652f\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"create PR",src:r(86717).A,width:"2968",height:"1488"})),(0,a.yg)("h4",{id:"3\u586b\u5199-commit-message"},"\uff083\uff09\u586b\u5199 Commit Message"),(0,a.yg)("p",null,"\u8fd9\u91cc\u8bf7\u586b\u5199 comment \u7684\u603b\u7ed3\u548c\u8be6\u7ec6\u5185\u5bb9\uff0c\u7136\u540e\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"Create pull request")," \u8fdb\u884c\u521b\u5efa\u3002"),(0,a.yg)("p",null,"\u5173\u4e8e\u5982\u4f55\u5199 Commit Message\uff0c\u4e0b\u9762\u5217\u51fa\u4e86\u4e00\u4e9b Tips\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8bf7\u7528\u82f1\u6587 \u52a8\u8bcd + \u5bbe\u8bed \u7684\u5f62\u5f0f\uff0c\u52a8\u8bcd\u4e0d\u7528\u8fc7\u53bb\u5f0f\uff0c\u8bed\u53e5\u7528\u7948\u4f7f\u53e5\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u6d88\u606f\u4e3b\u9898\uff08Subject\uff09\u548c\u5177\u4f53\u5185\u5bb9\uff08Body\uff09\u90fd\u8981\u5199\uff0c\u5b83\u4eec\u4e4b\u95f4\u8981\u6709\u7a7a\u884c\u5206\u9694\uff08GitHub PR\u754c\u9762\u4e0a\u5206\u522b\u586b\u5199\u5373\u53ef\uff09;"),(0,a.yg)("li",{parentName:"ul"},"\u6d88\u606f\u4e3b\u9898\u957f\u5ea6\u4e0d\u8981\u8d85\u8fc7",(0,a.yg)("strong",{parentName:"li"},"50"),"\u4e2a\u5b57\u7b26\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u6d88\u606f\u5185\u5bb9\u6bcf\u884c\u4e0d\u8981\u8d85\u8fc7",(0,a.yg)("strong",{parentName:"li"},"72"),"\u4e2a\u5b57\u7b26\uff0c\u8d85\u8fc7\u7684\u9700\u8981\u624b\u52a8\u6362\u884c\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u6d88\u606f\u5185\u5bb9\u7528\u4e8e\u89e3\u91ca\u505a\u4e86\u4ec0\u4e48\u3001\u4e3a\u4ec0\u4e48\u505a\u4ee5\u53ca\u600e\u4e48\u505a\u7684\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u6d88\u606f\u4e3b\u9898\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u8981",(0,a.yg)("strong",{parentName:"li"},"\u5927\u5199"),"\uff0c\u53e5\u5c3e",(0,a.yg)("strong",{parentName:"li"},"\u4e0d\u8981"),"\u6709\u53e5\u53f7\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u6d88\u606f\u5185\u5bb9\u4e2d\u5199\u660e\u5173\u8054\u7684issue(\u5982\u679c\u6709)\uff0c\u4f8b\u5982 #233;")),(0,a.yg)("p",null,"\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://chris.beams.io/posts/git-commit"},"https://chris.beams.io/posts/git-commit")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"create PR",src:r(86717).A,width:"2968",height:"1488"})),(0,a.yg)("h4",{id:"4\u5b8c\u6210\u521b\u5efa"},"\uff084\uff09\u5b8c\u6210\u521b\u5efa"),(0,a.yg)("p",null,"\u521b\u5efa\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u770b\u5230 Doris \u9879\u76ee\u9700\u8981 review\uff0c\u60a8\u53ef\u4ee5\u7b49\u5f85\u6211\u4eec review \u548c\u5408\u5165\uff0c\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8054\u7cfb\u6211\u4eec\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"create PR",src:r(35666).A,width:"2644",height:"1256"})),(0,a.yg)("p",null,"\u81f3\u6b64\uff0c\u60a8\u7684PR\u521b\u5efa\u5b8c\u6210\uff0c\u66f4\u591a\u5173\u4e8e PR \u8bf7\u9605\u8bfb ",(0,a.yg)("a",{parentName:"p",href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/"},"collaborating-with-issues-and-pull-requests")," \u3002"),(0,a.yg)("h3",{id:"4-\u51b2\u7a81\u89e3\u51b3"},"4. \u51b2\u7a81\u89e3\u51b3"),(0,a.yg)("p",null,"\u63d0\u4ea4PR\u65f6\u7684\u4ee3\u7801\u51b2\u7a81\u4e00\u822c\u662f\u7531\u4e8e\u591a\u4eba\u7f16\u8f91\u540c\u4e00\u4e2a\u6587\u4ef6\u5f15\u8d77\u7684\uff0c\u89e3\u51b3\u51b2\u7a81\u4e3b\u8981\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5373\u53ef\uff1a"),(0,a.yg)("h4",{id:"1\u5207\u6362\u81f3\u4e3b\u5206\u652f"},"\uff081\uff09\u5207\u6362\u81f3\u4e3b\u5206\u652f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git checkout master\n")),(0,a.yg)("h4",{id:"2\u540c\u6b65\u8fdc\u7aef\u4e3b\u5206\u652f\u81f3\u672c\u5730"},"\uff082\uff09\u540c\u6b65\u8fdc\u7aef\u4e3b\u5206\u652f\u81f3\u672c\u5730"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git pull upstream master\n")),(0,a.yg)("h4",{id:"3\u5207\u6362\u56de\u521a\u624d\u7684\u5206\u652f\u5047\u8bbe\u5206\u652f\u540d\u4e3afix"},"\uff083\uff09\u5207\u6362\u56de\u521a\u624d\u7684\u5206\u652f\uff08\u5047\u8bbe\u5206\u652f\u540d\u4e3afix\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git checkout fix\n")),(0,a.yg)("h4",{id:"4\u8fdb\u884crebase"},"\uff084\uff09\u8fdb\u884crebase"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git rebase -i master\n")),(0,a.yg)("p",null,"\u6b64\u65f6\u4f1a\u5f39\u51fa\u4fee\u6539\u8bb0\u5f55\u7684\u6587\u4ef6\uff0c\u4e00\u822c\u76f4\u63a5\u4fdd\u5b58\u5373\u53ef\u3002\u7136\u540e\u4f1a\u63d0\u793a\u54ea\u4e9b\u6587\u4ef6\u51fa\u73b0\u4e86\u51b2\u7a81\uff0c\u6b64\u65f6\u53ef\u6253\u5f00\u51b2\u7a81\u6587\u4ef6\u5bf9\u51b2\u7a81\u90e8\u5206\u8fdb\u884c\u4fee\u6539\uff0c\u5c06\u63d0\u793a\u7684\u6240\u6709\u51b2\u7a81\u6587\u4ef6\u7684\u51b2\u7a81\u90fd\u89e3\u51b3\u540e\uff0c\u6267\u884c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git add .\ngit rebase --continue\n")),(0,a.yg)("p",null,"\u4f9d\u6b64\u5f80\u590d\uff0c\u76f4\u81f3\u5c4f\u5e55\u51fa\u73b0\u7c7b\u4f3c ",(0,a.yg)("em",{parentName:"p"},"rebase successful")," \u5b57\u6837\u5373\u53ef\uff0c\u6b64\u65f6\u60a8\u53ef\u4ee5\u8fdb\u884c\u5f80\u63d0\u4ea4PR\u7684\u5206\u652f\u8fdb\u884c\u66f4\u65b0\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git push -f origin fix\n")),(0,a.yg)("h3",{id:"5-\u4e00\u4e2a\u4f8b\u5b50"},"5. \u4e00\u4e2a\u4f8b\u5b50"),(0,a.yg)("h4",{id:"1\u5bf9\u4e8e\u5df2\u7ecf\u914d\u7f6e\u597d-upstream-\u7684\u672c\u5730\u5206\u652f-fetch-\u5230\u6700\u65b0\u4ee3\u7801"},"\uff081\uff09\u5bf9\u4e8e\u5df2\u7ecf\u914d\u7f6e\u597d upstream \u7684\u672c\u5730\u5206\u652f fetch \u5230\u6700\u65b0\u4ee3\u7801"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ git branch\n* master\n\n$ git fetch upstream          \nremote: Counting objects: 195, done.\nremote: Compressing objects: 100% (68/68), done.\nremote: Total 141 (delta 75), reused 108 (delta 48)\nReceiving objects: 100% (141/141), 58.28 KiB, done.\nResolving deltas: 100% (75/75), completed with 43 local objects.\nFrom https://github.com/apache/doris\n   9c36200..0c4edc2  master     -> upstream/master\n")),(0,a.yg)("h4",{id:"2\u8fdb\u884crebase"},"\uff082\uff09\u8fdb\u884crebase"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ git rebase upstream/master  \nFirst, rewinding head to replay your work on top of it...\nFast-forwarded master to upstream/master.\n")),(0,a.yg)("h4",{id:"3\u68c0\u67e5\u770b\u662f\u5426\u6709\u522b\u4eba\u63d0\u4ea4\u672a\u540c\u6b65\u5230\u81ea\u5df1-repo-\u7684\u63d0\u4ea4"},"\uff083\uff09\u68c0\u67e5\u770b\u662f\u5426\u6709\u522b\u4eba\u63d0\u4ea4\u672a\u540c\u6b65\u5230\u81ea\u5df1 repo \u7684\u63d0\u4ea4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'$ git status\n# On branch master\n# Your branch is ahead of \'origin/master\' by 8 commits.\n#\n# Untracked files:\n#   (use "git add <file>..." to include in what will be committed)\n#\n#       custom_env.sh\nnothing added to commit but untracked files present (use "git add" to track)\n')),(0,a.yg)("h4",{id:"4\u5408\u5e76\u5176\u4ed6\u4eba\u63d0\u4ea4\u7684\u4ee3\u7801\u5230\u81ea\u5df1\u7684-repo"},"\uff084\uff09\u5408\u5e76\u5176\u4ed6\u4eba\u63d0\u4ea4\u7684\u4ee3\u7801\u5230\u81ea\u5df1\u7684 repo"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ git push origin master\nCounting objects: 195, done.\nDelta compression using up to 32 threads.\nCompressing objects: 100% (41/41), done.\nWriting objects: 100% (141/141), 56.66 KiB, done.\nTotal 141 (delta 76), reused 140 (delta 75)\nremote: Resolving deltas: 100% (76/76), completed with 44 local objects.\nTo https://lide-reed:xxxx@github.com/lide-reed/doris.git\n   9c36200..0c4edc2  master -> master\n")),(0,a.yg)("h4",{id:"5\u65b0\u5efa\u5206\u652f\u51c6\u5907\u5f00\u53d1"},"\uff085\uff09\u65b0\u5efa\u5206\u652f\uff0c\u51c6\u5907\u5f00\u53d1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ git checkout -b my_branch\nSwitched to a new branch 'my_branch'\n\n$ git branch\n  master\n* my_branch\n")),(0,a.yg)("h4",{id:"6\u4ee3\u7801\u4fee\u6539\u5b8c\u6210\u540e\u51c6\u5907\u63d0\u4ea4"},"\uff086\uff09\u4ee3\u7801\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u51c6\u5907\u63d0\u4ea4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ git add -u\n")),(0,a.yg)("h4",{id:"7\u586b\u5199-message-\u5e76\u63d0\u4ea4\u5230\u672c\u5730\u7684\u65b0\u5efa\u5206\u652f\u4e0a"},"\uff087\uff09\u586b\u5199 message \u5e76\u63d0\u4ea4\u5230\u672c\u5730\u7684\u65b0\u5efa\u5206\u652f\u4e0a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'$ git commit -m "Fix a typo"\n[my_branch 55e0ba2] Fix a typo\n 1 files changed, 2 insertions(+), 2 deletions(-)\n')),(0,a.yg)("h4",{id:"8\u5c06\u5206\u652f\u63a8\u5230-github-\u8fdc\u7aef\u81ea\u5df1\u7684-repo-\u4e2d"},"\uff088\uff09\u5c06\u5206\u652f\u63a8\u5230 GitHub \u8fdc\u7aef\u81ea\u5df1\u7684 repo \u4e2d"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ git push origin my_branch\nCounting objects: 11, done.\nDelta compression using up to 32 threads.\nCompressing objects: 100% (6/6), done.\nWriting objects: 100% (6/6), 534 bytes, done.\nTotal 6 (delta 4), reused 0 (delta 0)\nremote: Resolving deltas: 100% (4/4), completed with 4 local objects.\nremote: \nremote: Create a pull request for 'my_branch' on GitHub by visiting:\nremote:      https://github.com/lide-reed/doris/pull/new/my_branch\nremote: \nTo https://lide-reed:xxxx@github.com/lide-reed/doris.git\n * [new branch]      my_branch -> my_branch\n")),(0,a.yg)("p",null,"\u81f3\u6b64\uff0c\u5c31\u53ef\u4ee5\u6309\u7167\u524d\u9762\u7684\u6d41\u7a0b\u8fdb\u884c\u521b\u5efa PR \u4e86\u3002"))}c.isMDXComponent=!0},86717:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/create-pr-750563ee46e41464eb5e11b2f05e284d.png"},35666:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/create-pr3-f81fd7a2a23de6e13024d39a270375b7.png"},88511:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/fork-repo-83773f6226f8bc5dfa7bab187157ca75.png"},88225:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/new-pr-29388f00a20b015cfa7bd4b6039b67af.png"}}]);