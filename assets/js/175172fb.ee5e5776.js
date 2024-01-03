"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[6205],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?i.createElement(g,o(o({ref:n},p),{},{components:t})):i.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const a={title:"Pipeline Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},o=void 0,l={unversionedId:"query-acceleration/pipeline-execution-engine",id:"query-acceleration/pipeline-execution-engine",title:"Pipeline Execution Engine",description:"\x3c!--",source:"@site/docs/query-acceleration/pipeline-execution-engine.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/pipeline-execution-engine",permalink:"/docs/dev/query-acceleration/pipeline-execution-engine",draft:!1,tags:[],version:"current",frontMatter:{title:"Pipeline Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Row to Column",permalink:"/docs/dev/advanced/lateral-view"},next:{title:"Nereids-the Brand New Planner",permalink:"/docs/dev/query-acceleration/nereids"}},s={},c=[{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Set session variable",id:"set-session-variable",level:3},{value:"enable_pipeline_engine",id:"enable_pipeline_engine",level:4},{value:"parallel_pipeline_task_num",id:"parallel_pipeline_task_num",level:4}],p={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pipeline-execution-engine"},"Pipeline Execution Engine"),(0,r.kt)("version",{since:"2.0.0"}),(0,r.kt)("p",null,"Pipeline execution engine is an experimental feature added by Doris in version 2.0. The goal is to replace the current execution engine of Doris's volcano model, fully release the computing power of multi-core CPUs, and limit the number of Doris's query threads to solve the problem of Doris's execution thread bloat."),(0,r.kt)("p",null,"Its specific design, implementation and effects can be found in ","[DSIP-027]","(",(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-027%3A+Support+Pipeline+Exec+Engine"},"DSIP-027: Support Pipeline Exec Engine - DORIS - Apache Software Foundation"),")."),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"The current Doris SQL execution engine is designed based on the traditional volcano model, which has the following problems in a single multi-core scenario\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inability to take full advantage of multi-core computing power to improve query performance,",(0,r.kt)("strong",{parentName:"p"},"most scenarios require manual setting of parallelism")," for performance tuning, which is almost difficult to set in production environments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each instance of a standalone query corresponds to one thread of the thread pool, which introduces two additional problems."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Once the thread pool is hit full. ",(0,r.kt)("strong",{parentName:"li"},"Doris' query engine will enter a pseudo-deadlock")," and will not respond to subsequent queries. ",(0,r.kt)("strong",{parentName:"li"},"At the same time there is a certain probability of entering a logical deadlock")," situation: for example, all threads are executing an instance's probe task."),(0,r.kt)("li",{parentName:"ul"},"Blocking arithmetic will take up thread resources,",(0,r.kt)("strong",{parentName:"li"},"blocking thread resources can not be yielded to instances that can be scheduled"),", the overall resource utilization does not go up."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blocking arithmetic relies on the OS thread scheduling mechanism, ",(0,r.kt)("strong",{parentName:"p"},"thread switching overhead (especially in the scenario of system mixing)\uff09")))),(0,r.kt)("p",null,"The resulting set of problems drove Doris to implement an execution engine adapted to the architecture of modern multi-core CPUs."),(0,r.kt)("p",null,"And as shown in the figure below (quoted from","[Push versus pull-based loop fusion in query engines]","(",(0,r.kt)("a",{parentName:"p",href:"https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D67AE4899E87F4B5102F859B0FC02045/S0956796818000102a.pdf/div-class-title-push-versus-pull-based-loop-fusion-in-query-engines-div.pdf"},"jfp_1800010a (cambridge.org)"),")\uff09\uff0cThe resulting set of problems drove Doris to implement an execution engine adapted to the architecture of modern multi-core CPUs.\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:t(32879).Z,width:"854",height:"302"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Transformation of the traditional pull pull logic-driven execution process into a data-driven execution engine for the push model"),(0,r.kt)("li",{parentName:"ol"},"Blocking operations are asynchronous, reducing the execution overhead caused by thread switching and thread blocking and making more efficient use of the CPU"),(0,r.kt)("li",{parentName:"ol"},"Controls the number of threads to be executed and reduces the resource congestion of large queries on small queries in mixed load scenarios by controlling time slice switching")),(0,r.kt)("p",null,"This improves the efficiency of CPU execution on mixed-load SQL and enhances the performance of SQL queries."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"set-session-variable"},"Set session variable"),(0,r.kt)("h4",{id:"enable_pipeline_engine"},"enable_pipeline_engine"),(0,r.kt)("p",null,"This improves the efficiency of CPU execution on mixed-load SQL and enhances the performance of SQL queries"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set enable_pipeline_engine = true;\n")),(0,r.kt)("h4",{id:"parallel_pipeline_task_num"},"parallel_pipeline_task_num"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parallel_pipeline_task_num")," represents the concurrency of pipeline tasks of a query. Default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," (e.g. half number of CPU cores). Users can adjust this value according to their own workloads."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set parallel_pipeline_task_num = 0;\n")),(0,r.kt)("p",null,'You can limit the automatically configured concurrency by setting "max_instance_num."\uff08The default value is 64)'))}d.isMDXComponent=!0},32879:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/pipeline-execution-engine-2067b3a862de84a561eabefd41d48a56.png"}}]);