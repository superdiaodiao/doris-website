"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22814],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),y=i,g=c["".concat(m,".").concat(y)]||c[y]||u[y]||r;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=y;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},53895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(58168),i=(a(96540),a(15680));const r={title:"Commit Format Specification",language:"en"},o=void 0,l={unversionedId:"how-to-contribute/commit-format-specification",id:"how-to-contribute/commit-format-specification",title:"Commit Format Specification",description:"\x3c!--",source:"@site/community/how-to-contribute/commit-format-specification.md",sourceDirName:"how-to-contribute",slug:"/how-to-contribute/commit-format-specification",permalink:"/community/how-to-contribute/commit-format-specification",draft:!1,tags:[],version:"current",frontMatter:{title:"Commit Format Specification",language:"en"},sidebar:"community",previous:{title:"How to Become Doris Committer",permalink:"/community/how-to-contribute/how-to-be-a-committer"},next:{title:"Code Submission Guide",permalink:"/community/how-to-contribute/pull-request"}},m={},p=[{value:"Commit Format Specification",id:"commit-format-specification",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(c,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"commit-format-specification"},"Commit Format Specification"),(0,i.yg)("p",null,"Commit is divided into \u2018 title \u2019 and \u2018 content \u2019 , the title should be lowercase and the contents  should be capitalized in principle ."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Title"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"[<type>](<scope>) <subject> (#pr)")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"<type>")),(0,i.yg)("p",{parentName:"li"},"  The types of this pull request are limited to the following types (all lowercase)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"fix: Bug fix")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"feature: New feature")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"feature-wip: Feature works-in-porgress.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"improvement: Optimization and improvement for the original feature. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"style: Code style adjustment")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"typo: Code or Document correction")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"refactor: Code refactoring (no function changes involved)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"performance/optimize: Performance optimization")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"test: Addition or repair of unit test")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"chore: Modification of build tool")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"revert: Revert a previous commit")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"deps: Modification of third-party dependency Library")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"community: Such as modification of Github issue template."),(0,i.yg)("p",{parentName:"li"},"Some tips\uff1a"))),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"If there are multiple types in one commit, multiple types need to be added"),(0,i.yg)("li",{parentName:"ol"},"If code refactoring brings performance improvement,  ","[refactor][optimize]"," can be added at the same time"),(0,i.yg)("li",{parentName:"ol"},"There should be no other types than those listed above. If necessary, you need to add new types to this document."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"<scope>")),(0,i.yg)("p",{parentName:"li"},"  Because there are many functional modules, only part of the module scope of the design submitted this time is listed here, which will be continuously improved according to the needs in the future."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"planner")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"meta")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"storage")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"stream-load")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"broker-load")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"routine-load")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"sync-job")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"export")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"executor")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"spark-connector")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"flink-connector")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"datax")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"log")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"cache")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"config")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"vectorization")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"docs")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"profile"),(0,i.yg)("p",{parentName:"li"},"Some tips\uff1a"))),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Try to use options that already exist in the list. If you need to add, please update this document in time"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"<subject>")),(0,i.yg)("p",{parentName:"li"},"  The title should clearly indicate the main contents of this commit as far as possible.")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Content"),(0,i.yg)("p",{parentName:"li"},"commit message should follow the following format: "),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"issue\uff1a#7777\n\nyour message\n")),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"If there is no issue, it can be left blank. Issue can also appear in message."),(0,i.yg)("li",{parentName:"ol"},"One line should not exceed 100 characters"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"[fix](executor) change DateTimeValue's memory layout to load (#7022)\n\nChange DateTimeValue memory's layout to old to fix compatibility problems.\n")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"[feat](log) extend logger interface, support structured log output(#6600)\n\nSupport structured logging.\n")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"[fix][feat-opt](executor)(load)(config) fix some memory bugs (#6699)\n\n1. Fix a memory leak in `collect_iterator.cpp` (Fix #6700)\n2. Add a new BE config `max_segment_num_per_rowset` to limit the num of segment in new rowset.(Fix #6701)\n3. Make the error msg of stream load more friendly.\n")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"[feat-opt](load) Reduce the number of segments when loading a large volume data in one batch (#6947)\n\n## Case\n\nIn the load process, each tablet will have a memtable to save the incoming data,\nand if the data in a memtable is larger than 100MB, it will be flushed to disk\nas a `segment` file. And then a new memtable will be created to save the following data.\n\nAssume that this is a table with N buckets(tablets). So the max size of all memtables\nwill be `N * 100MB`. If N is large, it will cost too much memory.\n\nSo for memory limit purpose, when the size of all memtables reach a threshold(2GB as default),\nDoris will try to flush all current memtables to disk(even if their size are not reach 100MB).\n\nSo you will see that the memtable will be flushed when it's size reach `2GB/N`, which maybe much\nsmaller than 100MB, resulting in too many small segment files.\n\n## Solution\n\nWhen decide to flush memtable to reduce memory consumption, NOT to flush all memtable,\nbut to flush part of them.\n\nFor example, there are 50 tablets(with 50 memtables). The memory limit is 1GB,\nso when each memtable reach 20MB, the total size reach 1GB, and flush will occur.\n\nIf I only flush 25 of 50 memtables, then next time when the total size reach 1GB,\nthere will be 25 memtables with size 10MB, and other 25 memtables with size 30MB.\nSo I can flush those memtables with size 30MB, which is larger than 20MB.\n\nThe main idea is to introduce some jitter during flush to ensure the small unevenness\nof each memtable, so as to ensure that flush will only be triggered when the memtable\nis large enough.\n\nIn my test, loading a table with 48 buckets, mem limit 2G, in previous version,\nthe average memtable size is 44MB, after modification, the average size is 82MB\n")))))}u.isMDXComponent=!0}}]);