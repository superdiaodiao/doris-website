"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93133],{15680:(e,a,r)=>{r.d(a,{xA:()=>d,yg:()=>m});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),s=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},d=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=s(r),y=t,m=g["".concat(i,".").concat(y)]||g[y]||u[y]||l;return r?n.createElement(m,o(o({ref:a},d),{},{components:r})):n.createElement(m,o({ref:a},d))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=y;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[g]="string"==typeof e?e:t,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},30663:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(58168),t=(r(96540),r(15680));const l={title:"Doris\u652f\u6301spark\u5bfc\u5165\u8bbe\u8ba1\u6587\u6863",language:"zh-CN"},o=void 0,p={unversionedId:"design/spark_load",id:"design/spark_load",title:"Doris\u652f\u6301spark\u5bfc\u5165\u8bbe\u8ba1\u6587\u6863",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/design/spark_load.md",sourceDirName:"design",slug:"/design/spark_load",permalink:"/zh-CN/community/design/spark_load",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris\u652f\u6301spark\u5bfc\u5165\u8bbe\u8ba1\u6587\u6863",language:"zh-CN"},sidebar:"community",previous:{title:"\u5143\u6570\u636e\u8bbe\u8ba1\u6587\u6863",permalink:"/zh-CN/community/design/metadata-design"},next:{title:"\u8c03\u8bd5\u5de5\u5177",permalink:"/zh-CN/community/developer-guide/debug-tool"}},i={},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u5b9e\u73b0\u65b9\u6848",id:"\u5b9e\u73b0\u65b9\u6848",level:3},{value:"\u65b9\u68481",id:"\u65b9\u68481",level:4},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:5},{value:"SparkLoadJob",id:"sparkloadjob",level:5},{value:"SparkLoadPendingTask",id:"sparkloadpendingtask",level:5},{value:"LoadLoadingTask",id:"loadloadingtask",level:5},{value:"BE\u5bfc\u5165\u4efb\u52a1\u6267\u884c",id:"be\u5bfc\u5165\u4efb\u52a1\u6267\u884c",level:5},{value:"\u65b9\u68482",id:"\u65b9\u68482",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],d={toc:s},g="wrapper";function u(e){let{components:a,...r}=e;return(0,t.yg)(g,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"doris\u652f\u6301spark\u5bfc\u5165\u8bbe\u8ba1\u6587\u6863"},"Doris\u652f\u6301spark\u5bfc\u5165\u8bbe\u8ba1\u6587\u6863"),(0,t.yg)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,t.yg)("p",null,"Doris\u73b0\u5728\u652f\u6301Broker load/routine load/stream load/mini batch load\u7b49\u591a\u79cd\u5bfc\u5165\u65b9\u5f0f\u3002\nspark load\u4e3b\u8981\u7528\u4e8e\u89e3\u51b3\u521d\u6b21\u8fc1\u79fb\uff0c\u5927\u91cf\u6570\u636e\u8fc1\u79fbdoris\u7684\u573a\u666f\uff0c\u7528\u4e8e\u63d0\u5347\u6570\u636e\u5bfc\u5165\u7684\u901f\u5ea6\u3002"),(0,t.yg)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"FE\uff1aFrontend\uff0c\u5373 Palo \u7684\u524d\u7aef\u8282\u70b9\u3002\u4e3b\u8981\u8d1f\u8d23\u63a5\u6536\u548c\u8fd4\u56de\u5ba2\u6237\u7aef\u8bf7\u6c42\u3001\u5143\u6570\u636e\u4ee5\u53ca\u96c6\u7fa4\u7ba1\u7406\u3001\u67e5\u8be2\u8ba1\u5212\u751f\u6210\u7b49\u5de5\u4f5c\u3002"),(0,t.yg)("li",{parentName:"ul"},"BE\uff1aBackend\uff0c\u5373 Palo \u7684\u540e\u7aef\u8282\u70b9\u3002\u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u5b58\u50a8\u4e0e\u7ba1\u7406\u3001\u67e5\u8be2\u8ba1\u5212\u6267\u884c\u7b49\u5de5\u4f5c\u3002"),(0,t.yg)("li",{parentName:"ul"},"Tablet\uff1a \u4e00\u4e2apalo table\u7684\u6c34\u5e73\u5206\u7247\u79f0\u4e3atablet\u3002"),(0,t.yg)("li",{parentName:"ul"},"Dpp\uff1aData preprocessing\uff0c\u6570\u636e\u9884\u5904\u7406\u6a21\u5757\uff0c\u901a\u8fc7\u5916\u90e8\u8ba1\u7b97\u8d44\u6e90\uff08Hadoop\u3001Spark\uff09\u5b8c\u6210\u5bf9\u5bfc\u5165\u6570\u636e\u9884\u5904\u7406\uff0c\u5305\u62ec\u8f6c\u5316\u3001\u6e05\u6d17\u3001\u5206\u533a\u3001\u6392\u5e8f\u548c\u805a\u5408\u7b49\u3002")),(0,t.yg)("h2",{id:"\u8bbe\u8ba1"},"\u8bbe\u8ba1"),(0,t.yg)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,t.yg)("p",null,"Doris\u4e2d\u73b0\u6709\u7684\u5bfc\u5165\u65b9\u5f0f\u4e2d\uff0c\u9488\u5bf9\u767eG\u7ea7\u522b\u4ee5\u4e0a\u7684\u6570\u636e\u7684\u6279\u91cf\u5bfc\u5165\u652f\u6301\u4e0d\u662f\u5f88\u597d\uff0c\u529f\u80fd\u4e0a\u9700\u8981\u4fee\u6539\u5f88\u591a\u914d\u7f6e\uff0c\u800c\u4e14\u53ef\u80fd\u65e0\u6cd5\u5b8c\u6210\u5bfc\u5165\uff0c\u6027\u80fd\u4e0a\u4f1a\u6bd4\u8f83\u6162\uff0c\u5e76\u4e14\u7531\u4e8e\u6ca1\u6709\u8bfb\u5199\u5206\u79bb\uff0c\u9700\u8981\u5360\u7528\u8f83\u591a\u7684cpu\u7b49\u8d44\u6e90\u3002\u800c\u8fd9\u79cd\u5927\u6570\u636e\u91cf\u5bfc\u5165\u4f1a\u5728\u7528\u6237\u8fc1\u79fb\u7684\u65f6\u5019\u9047\u5230\uff0c\u6240\u4ee5\u9700\u8981\u5b9e\u73b0\u57fa\u4e8espark\u96c6\u7fa4\u7684\u5bfc\u5165\u529f\u80fd\uff0c\u5229\u7528spark\u96c6\u7fa4\u7684\u5e76\u53d1\u80fd\u529b\uff0c\u5b8c\u6210\u5bfc\u5165\u65f6\u7684ETL\u8ba1\u7b97\uff0c\u6392\u5e8f\u3001\u805a\u5408\u7b49\u7b49\uff0c\u6ee1\u8db3\u7528\u6237\u5927\u6570\u636e\u91cf\u5bfc\u5165\u9700\u6c42\uff0c\u964d\u4f4e\u7528\u6237\u5bfc\u5165\u65f6\u95f4\u548c\u8fc1\u79fb\u6210\u672c\u3002"),(0,t.yg)("p",null,"\u5728Spark\u5bfc\u5165\u4e2d\uff0c\u9700\u8981\u8003\u8651\u652f\u6301\u591a\u79cdspark\u90e8\u7f72\u6a21\u5f0f\uff0c\u8bbe\u8ba1\u4e0a\u9700\u8981\u517c\u5bb9\u591a\u79cd\u90e8\u7f72\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8003\u8651\u5148\u5b9e\u73b0yarn\u96c6\u7fa4\u7684\u90e8\u7f72\u6a21\u5f0f\uff1b\u540c\u65f6\uff0c\u7531\u4e8e\u7528\u6237\u6570\u636e\u683c\u5f0f\u591a\u79cd\u591a\u6837\uff0c\u9700\u8981\u652f\u6301\u5305\u62eccsv\u3001parquet\u3001orc\u7b49\u591a\u79cd\u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6\u3002"),(0,t.yg)("h3",{id:"\u5b9e\u73b0\u65b9\u6848"},"\u5b9e\u73b0\u65b9\u6848"),(0,t.yg)("p",null,"\u5728\u5c06spark\u5bfc\u5165\u7684\u8bbe\u8ba1\u5b9e\u73b0\u7684\u65f6\u5019\uff0c\u6709\u5fc5\u8981\u8bb2\u4e00\u4e0b\u73b0\u6709\u7684\u5bfc\u5165\u6846\u67b6\u3002\u73b0\u5728\u6709\u7684\u5bfc\u5165\u6846\u67b6\uff0c\u53ef\u4ee5\u53c2\u8003\u300aDoris Broker\u5bfc\u5165\u5b9e\u73b0\u89e3\u6790\u300b\u3002"),(0,t.yg)("h4",{id:"\u65b9\u68481"},"\u65b9\u68481"),(0,t.yg)("p",null,"\u53c2\u8003\u73b0\u6709\u7684\u5bfc\u5165\u6846\u67b6\u548c\u539f\u6709\u9002\u7528\u4e8e\u767e\u5ea6\u5185\u90e8hadoop\u96c6\u7fa4\u7684hadoop\u5bfc\u5165\u65b9\u5f0f\u7684\u5b9e\u73b0\uff0c\u4e3a\u4e86\u6700\u5927\u7a0b\u5ea6\u590d\u7528\u73b0\u6709\u7684\u5bfc\u5165\u6846\u67b6\uff0c\u964d\u4f4e\u5f00\u53d1\u7684\u96be\u5ea6\uff0c\u6574\u4f53\u7684\u65b9\u6848\u5982\u4e0b\uff1a"),(0,t.yg)("p",null,"\u7528\u6237\u7684\u5bfc\u5165\u8bed\u53e5\u7ecf\u8fc7\u8bed\u6cd5\u548c\u8bed\u610f\u5206\u6790\u4e4b\u540e\uff0c\u751f\u6210LoadStmt\uff0cLoadStmt\u4e2d\u589e\u52a0\u4e00\u4e2aisSparkLoad\u6807\u8bc6\u5b57\u6bb5\uff0c\u5982\u679c\u4e3atrue\uff0c\u5c31\u4f1a\u521b\u5efa\u51faSparkLoadJob\uff0c\u8ddfBrokerLoadJob\u7c7b\u4f3c\uff0c\u4f1a\u901a\u8fc7\u72b6\u6001\u673a\u673a\u5236\uff0c\u5b9e\u73b0Job\u7684\u6267\u884c\uff0c\u5728PENDING\uff0c\u4f1a\u521b\u5efaSparkLoadPendingTask\uff0c\u7136\u540e\u5728LOADING\u9636\u6bb5\u8fd8\u662f\u521b\u5efaLoadLoadingTask\uff0c\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u3002\u5728BE\u4e2d\uff0c\u590d\u7528\u73b0\u6709\u7684\u8ba1\u5212\u6267\u884c\u6846\u67b6\uff0c\u6267\u884c\u5bfc\u5165\u8ba1\u5212\u3002"),(0,t.yg)("p",null,"\u5b9e\u73b0Spark\u5bfc\u5165\u4e3b\u8981\u9700\u8981\u8003\u8651\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,t.yg)("h5",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\u8fd9\u5757\u4e3b\u8981\u8003\u8651\u7528\u6237\u4e60\u60ef\uff0c\u5bfc\u5165\u8bed\u53e5\u683c\u5f0f\u4e0a\u5c3d\u91cf\u4fdd\u6301\u8ddfbroker\u5bfc\u5165\u8bed\u53e5\u76f8\u4f3c\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u65b9\u6848\uff1a\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'        LOAD LABEL example_db.label1\n        (\n        DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n        NEGATIVE\n        INTO TABLE `my_table`\n        PARTITION (p1, p2)\n        COLUMNS TERMINATED BY ","\n        columns(k1,k2,k3,v1,v2)\n        set (\n            v3 = v1 + v2,\n            k4 = hll_hash(k2)\n        )\n        where k1 > 20\n        )\n        with spark.cluster_name\n        PROPERTIES\n        (\n        "spark.master" = "yarn",\n        "spark.executor.cores" = "5",\n        "spark.executor.memory" = "10g",\n        "yarn.resourcemanager.address" = "xxx.tc:8032",\n        "max_filter_ratio" = "0.1",\n        );\n')),(0,t.yg)("p",null,"\u5176\u4e2dspark.cluster_name\u4e3a\u7528\u6237\u5bfc\u5165\u4f7f\u7528\u7684Spark\u96c6\u7fa4\u540d\uff0c\u53ef\u4ee5\u901a\u8fc7SET PROPERTY\u6765\u8bbe\u7f6e\uff0c\u53ef\u53c2\u8003\u539f\u6765Hadoop\u96c6\u7fa4\u7684\u8bbe\u7f6e\u3002\nproperty\u4e2d\u7684Spark\u96c6\u7fa4\u8bbe\u7f6e\u4f1a\u8986\u76d6spark.cluster_name\u4e2d\u5bf9\u5e94\u7684\u5185\u5bb9\u3002\n\u5404\u4e2aproperty\u7684\u542b\u4e49\u5982\u4e0b:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"spark.master\u662f\u8868\u793aspark\u96c6\u7fa4\u90e8\u7f72\u6a21\u5f0f\uff0c\u652f\u6301\u5305\u62ecyarn/standalone/local/k8s\uff0c\u9884\u8ba1\u5148\u5b9e\u73b0yarn\u7684\u652f\u6301\uff0c\u5e76\u4e14\u4f7f\u7528yarn-cluster\u6a21\u5f0f\uff08yarn-client\u6a21\u5f0f\u4e00\u822c\u7528\u4e8e\u4ea4\u4e92\u5f0f\u7684\u573a\u666f\uff09\u3002"),(0,t.yg)("li",{parentName:"ul"},"spark.executor.cores: executor\u7684cpu\u4e2a\u6570"),(0,t.yg)("li",{parentName:"ul"},"spark.executor.memory: executor\u7684\u5185\u5b58\u5927\u5c0f"),(0,t.yg)("li",{parentName:"ul"},"yarn.resourcemanager.address\uff1a\u6307\u5b9ayarn\u7684resourcemanager\u5730\u5740"),(0,t.yg)("li",{parentName:"ul"},"max_filter_ratio\uff1a\u6307\u5b9a\u6700\u5927\u8fc7\u6ee4\u6bd4\u4f8b\u9608\u503c")),(0,t.yg)("h5",{id:"sparkloadjob"},"SparkLoadJob"),(0,t.yg)("p",null,"\u7528\u6237\u53d1\u9001spark load\u8bed\u53e5\uff0c\u7ecf\u8fc7parse\u4e4b\u540e\uff0c\u4f1a\u521b\u5efaSparkLoadJob\uff0c"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"SparkLoadJob:\n         +-------+-------+\n         |    PENDING    |-----------------|\n         +-------+-------+                 |\n                 | SparkLoadPendingTask    |\n                 v                         |\n         +-------+-------+                 |\n         |    LOADING    |-----------------|\n         +-------+-------+                 |\n                 | LoadLoadingTask         |\n                 v                         |\n         +-------+-------+                 |\n         |  COMMITTED    |-----------------|\n         +-------+-------+                 |\n                 |                         |\n                 v                         v  \n         +-------+-------+         +-------+-------+     \n         |   FINISHED    |         |   CANCELLED   |\n         +-------+-------+         +-------+-------+\n                 |                         \u039b\n                 +-------------------------+\n")),(0,t.yg)("p",null,"\u4e0a\u56fe\u4e3aSparkLoadJob\u7684\u6267\u884c\u6d41\u7a0b\u3002"),(0,t.yg)("h5",{id:"sparkloadpendingtask"},"SparkLoadPendingTask"),(0,t.yg)("p",null,"SparkLoadPendingTask\u4e3b\u8981\u7528\u6765\u63d0\u4ea4spark etl\u4f5c\u4e1a\u5230spark\u96c6\u7fa4\u4e2d\u3002\u7531\u4e8espark\u652f\u6301\u4e0d\u540c\u90e8\u7f72\u6a21\u578b\uff08localhost, standalone, yarn, k8s\uff09\uff0c\u6240\u4ee5\u9700\u8981\u62bd\u8c61\u4e00\u4e2a\u901a\u7528\u7684\u63a5\u53e3SparkEtlJob\uff0c\u5b9e\u73b0SparkEtl\u7684\u529f\u80fd\uff0c\u4e3b\u8981\u63a5\u53e3\u5305\u62ec\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u63d0\u4ea4spark etl\u4efb\u52a1"),(0,t.yg)("li",{parentName:"ul"},"\u53d6\u6d88spark etl\u7684\u4efb\u52a1"),(0,t.yg)("li",{parentName:"ul"},"\u83b7\u53d6spark etl\u4efb\u52a1\u72b6\u6001\u7684\u63a5\u53e3")),(0,t.yg)("p",null,"\u5927\u4f53\u63a5\u53e3\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"class SparkEtlJob {\n    // \u63d0\u4ea4spark etl\u4f5c\u4e1a\n    // \u8fd4\u56deJobId\n    String submitJob(TBrokerScanRangeParams params);\n\n    // \u53d6\u6d88\u4f5c\u4e1a\uff0c\u7528\u4e8e\u652f\u6301\u7528\u6237cancel\u5bfc\u5165\u4f5c\u4e1a\n    bool cancelJob(String jobId);\n\n    // \u83b7\u53d6\u4f5c\u4e1a\u72b6\u6001\uff0c\u7528\u4e8e\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u5b8c\u6210\n    JobStatus getJobStatus(String jobId);\nprivate:\n    std::list<DataDescription> data_descriptions;\n};\n")),(0,t.yg)("p",null,"\u53ef\u4ee5\u5b9e\u73b0\u4e0d\u540c\u7684\u5b50\u7c7b\uff0c\u6765\u5b9e\u73b0\u5bf9\u4e0d\u540c\u96c6\u7fa4\u90e8\u7f72\u6a21\u5f0f\u7684\u652f\u6301\u3002\u53ef\u4ee5\u5b9e\u73b0SparkEtlJobForYarn\u7528\u4e8e\u652f\u6301yarn\u96c6\u7fa4\u7684spark\u5bfc\u5165\u4f5c\u4e1a\u3002\u5177\u4f53\u6765\u8bf4\u4e0a\u8ff0\u63a5\u53e3\u4e2dJobId\u5c31\u662fYarn\u96c6\u7fa4\u7684appid\uff0c\u5982\u4f55\u83b7\u53d6appid\uff1f\u4e00\u4e2a\u65b9\u6848\u662f\u901a\u8fc7spark-submit\u5ba2\u6237\u7aef\u63d0\u4ea4spark job\uff0c\u7136\u540e\u5206\u6790\u6807\u51c6\u9519\u8bef\u4e2d\u7684\u8f93\u51fa\uff0c\u901a\u8fc7\u6587\u672c\u5339\u914d\u83b7\u53d6appid\u3002"),(0,t.yg)("p",null,"\u8fd9\u91cc\u9700\u8981\u53c2\u8003hadoop dpp\u4f5c\u4e1a\u7684\u7ecf\u9a8c\uff0c\u5c31\u662f\u9700\u8981\u8003\u8651\u4efb\u52a1\u8fd0\u884c\u53ef\u80fd\u56e0\u4e3a\u6570\u636e\u91cf\u3001\u96c6\u7fa4\u961f\u5217\u7b49\u539f\u56e0\uff0c\u4f1a\u8fbe\u5230\u5e76\u53d1\u5bfc\u5165\u4f5c\u4e1a\u4e2a\u6570\u9650\u5236\uff0c\u5bfc\u81f4\u540e\u7eed\u4efb\u52a1\u63d0\u4ea4\u5931\u8d25\uff0c\u8fd9\u5757\u9700\u8981\u8003\u8651\u4e00\u4e0b\u4efb\u52a1\u5806\u79ef\u7684\u95ee\u9898\u3002\u4e00\u4e2a\u65b9\u6848\u662f\u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6espark load job\u5e76\u53d1\u6570\u9650\u5236\uff0c\u5e76\u4e14\u9488\u5bf9\u6bcf\u4e2a\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u5e76\u53d1\u6570\u7684\u9650\u5236\uff0c\u8fd9\u6837\u5404\u4e2a\u7528\u6237\u4e4b\u95f4\u7684\u4f5c\u4e1a\u53ef\u4ee5\u4e0d\u7528\u76f8\u4e92\u5e72\u6270\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002"),(0,t.yg)("p",null,"spark\u4efb\u52a1\u6267\u884c\u7684\u4e8b\u60c5\uff0c\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u5173\u952e\u70b9\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u7c7b\u578b\u8f6c\u5316\uff08extraction/Transformation\uff09"),(0,t.yg)("p",{parentName:"li"},"\u5c06\u6e90\u6587\u4ef6\u5b57\u6bb5\u8f6c\u6210\u5177\u4f53\u5217\u7c7b\u578b\uff08\u5224\u65ad\u5b57\u6bb5\u662f\u5426\u5408\u6cd5\uff0c\u8fdb\u884c\u51fd\u6570\u8ba1\u7b97\u7b49\u7b49\uff09")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u51fd\u6570\u8ba1\u7b97\uff08Transformation\uff09\uff0c\u5305\u62ecnegative\u8ba1\u7b97"),(0,t.yg)("p",{parentName:"li"},'\u5b8c\u6210\u7528\u6237\u6307\u5b9a\u7684\u5217\u51fd\u6570\u7684\u8ba1\u7b97\u3002\u51fd\u6570\u5217\u8868\uff1a"strftime","time_format","alignment_timestamp","default_value","md5sum","replace_value","now","hll_hash","substitute"')),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Columns from path\u7684\u63d0\u53d6")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u8fdb\u884cwhere\u6761\u4ef6\u7684\u8fc7\u6ee4")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u8fdb\u884c\u5206\u533a\u548c\u5206\u6876")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6392\u5e8f\u548c\u9884\u805a\u5408"),(0,t.yg)("p",{parentName:"li"},"\u56e0\u4e3a\u5728OlapTableSink\u8fc7\u7a0b\u4e2d\u4f1a\u8fdb\u884c\u6392\u5e8f\u548c\u805a\u5408\uff0c\u903b\u8f91\u4e0a\u53ef\u4ee5\u4e0d\u9700\u8981\u8fdb\u884c\u6392\u5e8f\u548c\u805a\u5408\uff0c\u4f46\u662f\u56e0\u4e3a\u6392\u5e8f\u548c\u9884\u805a\u5408\u53ef\u4ee5\u63d0\u5347\u5728BE\u7aef\u6267\u884c\u5bfc\u5165\u7684\u6548\u7387\u3002",(0,t.yg)("strong",{parentName:"p"},"\u5982\u679c\u5728spark etl\u4f5c\u4e1a\u4e2d\u8fdb\u884c\u6392\u5e8f\u548c\u805a\u5408\uff0c\u90a3\u4e48\u5728BE\u6267\u884c\u5bfc\u5165\u7684\u65f6\u5019\u53ef\u4ee5\u7701\u7565\u8fd9\u4e2a\u6b65\u9aa4\u3002"),"\u8fd9\u5757\u53ef\u4ee5\u4f9d\u636e\u540e\u7eed\u6d4b\u8bd5\u7684\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\u3002\u76ee\u524d\u770b\uff0c\u53ef\u4ee5\u5148\u5728etl\u4f5c\u4e1a\u4e2d\u8fdb\u884c\u6392\u5e8f\u3002\n\u8fd8\u6709\u4e00\u4e2a\u9700\u8981\u8003\u8651\u7684\u5c31\u662f\u5982\u4f55\u652f\u6301bitmap\u7c7b\u578b\u4e2d\u7684\u5168\u5c40\u5b57\u5178\uff0cstring\u7c7b\u578b\u7684bitmap\u5217\u9700\u8981\u4f9d\u8d56\u5168\u5c40\u5b57\u5178\u3002\n\u4e3a\u4e86\u544a\u8bc9\u4e0b\u6e38etl\u4f5c\u4e1a\u662f\u5426\u5df2\u7ecf\u5b8c\u6210\u5df2\u7ecf\u5b8c\u6210\u6392\u5e8f\u548c\u805a\u5408\uff0c\u53ef\u4ee5\u5728\u4f5c\u4e1a\u5b8c\u6210\u7684\u65f6\u5019\u751f\u6210\u4e00\u4e2ajob.json\u7684\u63cf\u8ff0\u6587\u4ef6\uff0c\u91cc\u9762\u5305\u542b\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},'{\n    "is_segment_file" : "false",\n    "is_sort" : "true",\n    "is_agg" : "true",\n}\n')),(0,t.yg)("p",{parentName:"li"},"\u5176\u4e2d\uff1a\nis_sort\u8868\u793a\u662f\u5426\u6392\u5e8f\nis_agg\u8868\u793a\u662f\u5426\u805a\u5408\nis_segment_file\u8868\u793a\u662f\u5426\u751f\u6210\u7684\u662fsegment\u6587\u4ef6")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u73b0\u5728rollup\u6570\u636e\u7684\u8ba1\u7b97\u90fd\u662f\u57fa\u4e8ebase\u8868\uff0c\u9700\u8981\u8003\u8651\u80fd\u591f\u6839\u636eindex\u4e4b\u95f4\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u4f18\u5316rollup\u6570\u636e\u7684\u751f\u6210\u3002"))),(0,t.yg)("p",null,"\u8fd9\u91cc\u9762\u76f8\u5bf9\u6bd4\u8f83\u590d\u6742\u4e00\u70b9\u5c31\u662f\u5217\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7684\u652f\u6301\u3002"),(0,t.yg)("p",null,"\u6700\u540e\uff0cspark load\u4f5c\u4e1a\u5b8c\u6210\u4e4b\u540e\uff0c\u4ea7\u51fa\u7684\u6587\u4ef6\u5b58\u50a8\u683c\u5f0f\u53ef\u4ee5\u652f\u6301csv\u3001parquet\u3001orc\uff0c\u4ece\u5b58\u50a8\u6548\u7387\u4e0a\u6765\u8bf4\uff0c\u5efa\u8bae\u9ed8\u8ba4\u4e3aparquet\u3002"),(0,t.yg)("h5",{id:"loadloadingtask"},"LoadLoadingTask"),(0,t.yg)("p",null,"LoadLoadingTask\u53ef\u4ee5\u590d\u73b0\u73b0\u5728\u7684\u903b\u8f91\uff0c\u4f46\u662f\uff0c\u6709\u4e00\u4e2a\u5730\u65b9\u8ddfBrokerLoadJob\u4e0d\u4e00\u6837\u7684\u5730\u5740\u5c31\u662f\uff0c\u7ecf\u8fc7SparkEtlTask\u5904\u7406\u8fc7\u540e\u7684\u6570\u636e\u6587\u4ef6\u5df2\u7ecf\u5b8c\u6210\u5217\u6620\u5c04\u3001\u51fd\u6570\u8ba1\u7b97\u3001\u8d1f\u5bfc\u5165\u3001\u8fc7\u6ee4\u3001\u805a\u5408\u7b49\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u65f6\u5019LoadLoadingTask\u5c31\u4e0d\u7528\u8fdb\u884c\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u53ea\u9700\u8981\u8fdb\u884c\u7b80\u5355\u7684\u5217\u6620\u5c04\u548c\u7c7b\u578b\u8f6c\u5316\u3002"),(0,t.yg)("h5",{id:"be\u5bfc\u5165\u4efb\u52a1\u6267\u884c"},"BE\u5bfc\u5165\u4efb\u52a1\u6267\u884c"),(0,t.yg)("p",null,"\u8fd9\u5757\u53ef\u4ee5\u5b8c\u5168\u590d\u7528\u73b0\u6709\u7684\u5bfc\u5165\u6846\u67b6\uff0c\u5e94\u8be5\u4e0d\u9700\u8981\u505a\u6539\u52a8\u3002"),(0,t.yg)("h4",{id:"\u65b9\u68482"},"\u65b9\u68482"),(0,t.yg)("p",null,"\u65b9\u68481\u53ef\u4ee5\u6700\u5927\u9650\u5ea6\u7684\u590d\u7528\u73b0\u6709\u7684\u5bfc\u5165\u6846\u67b6\uff0c\u80fd\u591f\u5feb\u901f\u5b9e\u73b0\u652f\u6301\u5927\u6570\u636e\u91cf\u5bfc\u5165\u7684\u529f\u80fd\u3002\u4f46\u662f\u5b58\u5728\u4ee5\u4e0b\u95ee\u9898\uff0c\u5c31\u662f\u7ecf\u8fc7spark etl\u5904\u7406\u4e4b\u540e\u7684\u6570\u636e\u5176\u5b9e\u5df2\u7ecf\u6309\u7167tablet\u5212\u5206\u597d\u4e86\uff0c\u4f46\u662f\u73b0\u6709\u7684Broker\u5bfc\u5165\u6846\u67b6\u8fd8\u662f\u4f1a\u5bf9\u6d41\u5f0f\u8bfb\u53d6\u7684\u6570\u636e\u8fdb\u884c\u5206\u533a\u548cbucket\u8ba1\u7b97\uff0c\u7136\u540e\u7ecf\u8fc7\u5e8f\u5217\u5316\u901a\u8fc7rpc\u53d1\u9001\u5230\u5bf9\u5e94\u7684\u76ee\u6807BE\u7684\u673a\u5668\uff0c\u6709\u4e00\u6b21\u5e8f\u5217\u5316\u548c\u7f51\u7edcIO\u7684\u5f00\u9500\u3002 \u65b9\u68482\u662f\u5728SparkEtlJob\u751f\u6210\u6570\u636e\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u751f\u6210doris\u7684\u5b58\u50a8\u683c\u5f0fSegment\u6587\u4ef6\uff0c\u7136\u540e\u4e09\u4e2a\u526f\u672c\u9700\u8981\u901a\u8fc7\u7c7b\u4f3cclone\u673a\u5236\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7add_rowset\u63a5\u53e3\uff0c\u8fdb\u884c\u6587\u4ef6\u7684\u5bfc\u5165\u3002\u8fd9\u79cd\u65b9\u6848\u5177\u4f53\u4e0d\u4e00\u6837\u7684\u5730\u65b9\u5982\u4e0b\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u9700\u8981\u5728\u751f\u6210\u7684\u6587\u4ef6\u4e2d\u6dfb\u52a0tabletid\u540e\u7f00"),(0,t.yg)("li",{parentName:"ol"},"\u5728SparkLoadPendingTask\u7c7b\u4e2d\u589e\u52a0\u4e00\u4e2a\u63a5\u53e3protected Map<long, Pair<String, Long>> getFilePathMap()\u7528\u4e8e\u8fd4\u56detabletid\u548c\u6587\u4ef6\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\uff0c"),(0,t.yg)("li",{parentName:"ol"},"\u5728BE rpc\u670d\u52a1\u4e2d\u589e\u52a0\u4e00\u4e2aspark_push\u63a5\u53e3\uff0c\u5b9e\u73b0\u62c9\u53d6\u6e90\u7aefetl\u8f6c\u5316\u4e4b\u540e\u7684\u6587\u4ef6\u5230\u672c\u5730\uff08\u53ef\u4ee5\u901a\u8fc7broker\u8bfb\u53d6\uff09\uff0c\u7136\u540e\u901a\u8fc7add_rowset\u63a5\u53e3\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165\uff0c\u7c7b\u4f3c\u514b\u9686\u7684\u903b\u8f91"),(0,t.yg)("li",{parentName:"ol"},"\u751f\u6210\u65b0\u7684\u5bfc\u5165\u4efb\u52a1SparkLoadLoadingTask,\u8be5SparkLoadLoadingTask\u4e3b\u8981\u529f\u80fd\u5c31\u662f\u8bfb\u53d6job.json\u6587\u4ef6\uff0c\u89e3\u6790\u5176\u4e2d\u7684\u5c5e\u6027\u5e76\u4e14\uff0c\u5c06\u5c5e\u6027\u4f5c\u4e3arpc\u53c2\u6570\uff0c\u8c03\u7528spark_push\u63a5\u53e3\uff0c\u5411tablet\u6240\u5728\u7684\u540e\u7aefBE\u53d1\u9001\u5bfc\u5165\u8bf7\u6c42\uff0c\u8fdb\u884c\u6570\u636e\u7684\u5bfc\u5165\u3002BE\u4e2dspark_push\u6839\u636eis_segment_file\u6765\u51b3\u5b9a\u5982\u4f55\u5904\u7406\uff0c\u5982\u679c\u4e3atrue\uff0c\u5219\u76f4\u63a5\u4e0b\u8f7dsegment\u6587\u4ef6\uff0c\u8fdb\u884cadd rowset\uff1b\u5982\u679c\u4e3afalse\uff0c\u5219\u8d70pusher\u903b\u8f91\uff0c\u5b9e\u73b0\u6570\u636e\u5bfc\u5165\u3002")),(0,t.yg)("p",null,"\u8be5\u65b9\u6848\u5c06segment\u6587\u4ef6\u7684\u751f\u6210\u4e5f\u7edf\u4e00\u653e\u5230\u4e86spark\u96c6\u7fa4\u4e2d\u8fdb\u884c\uff0c\u80fd\u591f\u6781\u5927\u7684\u964d\u4f4edoris\u96c6\u7fa4\u7684\u8d1f\u8f7d\uff0c\u6548\u7387\u5e94\u8be5\u4f1a\u6bd4\u8f83\u9ad8\u3002\u4f46\u662f\u65b9\u68482\u9700\u8981\u4f9d\u8d56\u4e8e\u5c06\u5e95\u5c42rowset\u548csegment v2\u7684\u63a5\u53e3\u6253\u5305\u6210\u72ec\u7acb\u7684so\u6587\u4ef6\uff0c\u5e76\u4e14\u901a\u8fc7spark\u8c03\u7528\u8be5\u63a5\u53e3\u6765\u5c06\u6570\u636e\u8f6c\u5316\u6210segment\u6587\u4ef6\u3002"),(0,t.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,t.yg)("p",null,"\u7efc\u5408\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6848\uff0c\u7b2c\u4e00\u79cd\u65b9\u6848\u7684\u6539\u52a8\u91cf\u6bd4\u8f83\u5c0f\uff0c\u4f46\u662fBE\u505a\u4e86\u91cd\u590d\u7684\u5de5\u4f5c\u3002\u7b2c\u4e8c\u79cd\u65b9\u6848\u53ef\u4ee5\u53c2\u8003\u539f\u6709\u7684Hadoop\u5bfc\u5165\u6846\u67b6\u3002\u6240\u4ee5\uff0c\u8ba1\u5212\u5206\u4e24\u6b65\u5b8c\u6210spark load\u7684\u5de5\u4f5c\u3002"),(0,t.yg)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u6309\u7167\u65b9\u68482\uff0c\u5b9e\u73b0\u901a\u8fc7Spark\u5b8c\u6210\u5bfc\u5165\u6570\u636e\u7684\u5206\u533a\u6392\u5e8f\u805a\u5408\uff0c\u751f\u6210parquet\u683c\u5f0f\u6587\u4ef6\u3002\u7136\u540e\u8d70Hadoop pusher\u7684\u6d41\u7a0b\u7531BE\u8f6c\u5316\u683c\u5f0f\u3002"),(0,t.yg)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u5c01\u88c5segment\u5199\u5165\u7684\u5e93\uff0c\u76f4\u63a5\u751f\u6210Doris\u5e95\u5c42\u7684\u683c\u5f0f\uff0c\u5e76\u4e14\u589e\u52a0\u4e00\u4e2arpc\u63a5\u53e3\uff0c\u5b9e\u73b0\u7c7b\u4f3cclone\u7684\u5bfc\u5165\u903b\u8f91\u3002"))}u.isMDXComponent=!0}}]);