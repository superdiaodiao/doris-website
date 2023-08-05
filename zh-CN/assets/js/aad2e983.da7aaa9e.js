"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"Java UDF",language:"zh-CN"},i=void 0,o={unversionedId:"ecosystem/udf/java-user-defined-function",id:"ecosystem/udf/java-user-defined-function",title:"Java UDF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/udf/java-user-defined-function.md",sourceDirName:"ecosystem/udf",slug:"/ecosystem/udf/java-user-defined-function",permalink:"/zh-CN/docs/dev/ecosystem/udf/java-user-defined-function",draft:!1,tags:[],version:"current",frontMatter:{title:"Java UDF",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8fdc\u7a0b UDF",permalink:"/zh-CN/docs/dev/ecosystem/udf/remote-user-defined-function"},next:{title:"\u8fdc\u7a0b UDAF",permalink:"/zh-CN/docs/dev/ecosystem/udaf/remote-user-defined-aggregation-function"}},u={},d=[{value:"\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb",id:"\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb",level:3},{value:"\u7f16\u5199 UDF \u51fd\u6570",id:"\u7f16\u5199-udf-\u51fd\u6570",level:2},{value:"\u521b\u5efa UDF",id:"\u521b\u5efa-udf",level:2},{value:"\u7f16\u5199 UDAF \u51fd\u6570",id:"\u7f16\u5199-udaf-\u51fd\u6570",level:2},{value:"\u4f7f\u7528 UDF",id:"\u4f7f\u7528-udf",level:2},{value:"\u5220\u9664 UDF",id:"\u5220\u9664-udf",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2}],s={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java-udf"},"Java UDF"),(0,r.kt)("version",{since:"1.2.0"},(0,r.kt)("p",null,"Java UDF \u4e3a\u7528\u6237\u63d0\u4f9bUDF\u7f16\u5199\u7684Java\u63a5\u53e3\uff0c\u4ee5\u65b9\u4fbf\u7528\u6237\u4f7f\u7528Java\u8bed\u8a00\u8fdb\u884c\u81ea\u5b9a\u4e49\u51fd\u6570\u7684\u6267\u884c\u3002\u76f8\u6bd4\u4e8e Native \u7684 UDF \u5b9e\u73b0\uff0cJava UDF \u6709\u5982\u4e0b\u4f18\u52bf\u548c\u9650\u5236\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f18\u52bf")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6027\uff1a\u4f7f\u7528Java UDF\u53ef\u4ee5\u517c\u5bb9\u4e0d\u540c\u7684Doris\u7248\u672c\uff0c\u6240\u4ee5\u5728\u8fdb\u884cDoris\u7248\u672c\u5347\u7ea7\u65f6\uff0cJava UDF\u4e0d\u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u8fc1\u79fb\u64cd\u4f5c\u3002\u4e0e\u6b64\u540c\u65f6\uff0cJava UDF\u540c\u6837\u9075\u5faa\u4e86\u548cHive/Spark\u7b49\u5f15\u64ce\u540c\u6837\u7684\u7f16\u7a0b\u89c4\u8303\uff0c\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u5c06Hive/Spark\u7684UDF jar\u5305\u8fc1\u79fb\u81f3Doris\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168\uff1aJava UDF \u6267\u884c\u5931\u8d25\u6216\u5d29\u6e83\u4ec5\u4f1a\u5bfc\u81f4JVM\u62a5\u9519\uff0c\u800c\u4e0d\u4f1a\u5bfc\u81f4 Doris \u8fdb\u7a0b\u5d29\u6e83\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7075\u6d3b\uff1aJava UDF \u4e2d\u7528\u6237\u901a\u8fc7\u628a\u7b2c\u4e09\u65b9\u4f9d\u8d56\u6253\u8fdb\u7528\u6237jar\u5305\uff0c\u800c\u4e0d\u9700\u8981\u989d\u5916\u5904\u7406\u5f15\u5165\u7684\u4e09\u65b9\u5e93\u3002")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u9650\u5236")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\uff1a\u76f8\u6bd4\u4e8e Native UDF\uff0cJava UDF\u4f1a\u5e26\u6765\u989d\u5916\u7684JNI\u5f00\u9500\uff0c\u4e0d\u8fc7\u901a\u8fc7\u6279\u5f0f\u6267\u884c\u7684\u65b9\u5f0f\uff0c\u6211\u4eec\u5df2\u7ecf\u5c3d\u53ef\u80fd\u7684\u5c06JNI\u5f00\u9500\u964d\u5230\u6700\u4f4e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5411\u91cf\u5316\u5f15\u64ce\uff1aJava UDF\u5f53\u524d\u53ea\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u3002"))),(0,r.kt)("h3",{id:"\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb"},"\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"UDF Argument Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TinyInt"),(0,r.kt)("td",{parentName:"tr",align:null},"Byte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SmallInt"),(0,r.kt)("td",{parentName:"tr",align:null},"Short")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"Long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LargeInt"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInteger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null},"Double")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"LocalDate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"LocalDateTime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"BigDecimal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array<Type>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ArrayList<Type>"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"array\u7c7b\u578b\u53ef\u4ee5\u5d4c\u5957\u57fa\u672c\u7c7b\u578b\uff0c\u4f8b\u5982Doris: ",(0,r.kt)("inlineCode",{parentName:"li"},"array<int>"),"\u5bf9\u5e94JAVA UDF Argument Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList<Integer>"),", \u5176\u4ed6\u4f9d\u6b64\u7c7b\u63a8")),(0,r.kt)("h2",{id:"\u7f16\u5199-udf-\u51fd\u6570"},"\u7f16\u5199 UDF \u51fd\u6570"),(0,r.kt)("p",null,"\u672c\u5c0f\u8282\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a Java UDF\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/java-udf-demo/")," \u4e0b\u63d0\u4f9b\u4e86\u793a\u4f8b\uff0c\u53ef\u4f9b\u53c2\u8003\uff0c\u67e5\u770b\u70b9\u51fb",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/doris-demo/java-udf-demo"},"\u8fd9\u91cc")),(0,r.kt)("p",null,"\u4f7f\u7528Java\u4ee3\u7801\u7f16\u5199UDF\uff0cUDF\u7684\u4e3b\u5165\u53e3\u5fc5\u987b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluate")," \u51fd\u6570\u3002\u8fd9\u4e00\u70b9\u4e0eHive\u7b49\u5176\u4ed6\u5f15\u64ce\u4fdd\u6301\u4e00\u81f4\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u7f16\u5199\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"AddOne")," UDF\u6765\u5b8c\u6210\u5bf9\u6574\u578b\u8f93\u5165\u8fdb\u884c\u52a0\u4e00\u7684\u64cd\u4f5c\u3002\n\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u672c\u4f8b\u4e0d\u53ea\u662fDoris\u652f\u6301\u7684Java UDF\uff0c\u540c\u65f6\u8fd8\u662fHive\u652f\u6301\u7684UDF\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bf9\u4e8e\u7528\u6237\u6765\u8bb2\uff0cHive UDF\u662f\u53ef\u4ee5\u76f4\u63a5\u8fc1\u79fb\u81f3Doris\u7684\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-udf"},"\u521b\u5efa UDF"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION \nname ([,...])\n[RETURNS] rettype\nPROPERTIES (["key"="value"][,...])  \n')),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"symbol"),"\u8868\u793a\u7684\u662f\u5305\u542bUDF\u7c7b\u7684\u7c7b\u540d\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u8bbe\u5b9a\u7684\u3002"),(0,r.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"file"),"\u8868\u793a\u7684\u5305\u542b\u7528\u6237UDF\u7684jar\u5305\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u8bbe\u5b9a\u7684\u3002"),(0,r.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"type"),"\u8868\u793a\u7684 UDF \u8c03\u7528\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a Native\uff0c\u4f7f\u7528 Java UDF\u65f6\u4f20 JAVA_UDF\u3002"),(0,r.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"always_nullable"),"\u8868\u793a\u7684 UDF \u8fd4\u56de\u7ed3\u679c\u4e2d\u662f\u5426\u6709\u53ef\u80fd\u51fa\u73b0NULL\u503c\uff0c\u662f\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3atrue\u3002"),(0,r.kt)("li",{parentName:"ol"},"name: \u4e00\u4e2afunction\u662f\u8981\u5f52\u5c5e\u4e8e\u67d0\u4e2aDB\u7684\uff0cname\u7684\u5f62\u5f0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"dbName"),".",(0,r.kt)("inlineCode",{parentName:"li"},"funcName"),"\u3002\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"dbName"),"\u6ca1\u6709\u660e\u786e\u6307\u5b9a\u7684\u65f6\u5019\uff0c\u5c31\u662f\u4f7f\u7528\u5f53\u524dsession\u6240\u5728\u7684db\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"dbName"),"\u3002")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"file"="http://IP:port/udf-code.jar", \u5f53\u5728\u591a\u673a\u73af\u5883\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528http\u7684\u65b9\u5f0f\u4e0b\u8f7djar\u5305'),(0,r.kt)("li",{parentName:"ul"},'"always_nullable"\u53ef\u9009\u5c5e\u6027, \u5982\u679c\u5728\u8ba1\u7b97\u4e2d\u5bf9\u51fa\u73b0\u7684NULL\u503c\u6709\u7279\u6b8a\u5904\u7406\uff0c\u786e\u5b9a\u7ed3\u679c\u4e2d\u4e0d\u4f1a\u8fd4\u56deNULL\uff0c\u53ef\u4ee5\u8bbe\u4e3afalse\uff0c\u8fd9\u6837\u5728\u6574\u4e2a\u67e5\u8be2\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u6027\u80fd\u53ef\u80fd\u66f4\u597d\u4e9b\u3002'),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u662f",(0,r.kt)("strong",{parentName:"li"},"\u672c\u5730\u8def\u5f84"),"\u65b9\u5f0f\uff0c\u8fd9\u91cc\u6570\u636e\u5e93\u9a71\u52a8\u4f9d\u8d56\u7684jar\u5305\uff0c",(0,r.kt)("strong",{parentName:"li"},"FE\u3001BE\u8282\u70b9\u90fd\u8981\u653e\u7f6e"))),(0,r.kt)("h2",{id:"\u7f16\u5199-udaf-\u51fd\u6570"},"\u7f16\u5199 UDAF \u51fd\u6570"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5728\u4f7f\u7528Java\u4ee3\u7801\u7f16\u5199UDAF\u65f6\uff0c\u6709\u4e00\u4e9b\u5fc5\u987b\u5b9e\u73b0\u7684\u51fd\u6570(\u6807\u8bb0required)\u548c\u4e00\u4e2a\u5185\u90e8\u7c7bState\uff0c\u4e0b\u9762\u5c06\u4ee5\u4e00\u4e2a\u5177\u4f53\u7684\u5b9e\u4f8b\u6765\u8bf4\u660e\n\u4e0b\u9762\u7684SimpleDemo\u5c06\u5b9e\u73b0\u4e00\u4e2a\u7c7b\u4f3c\u7684sum\u7684\u7b80\u5355\u51fd\u6570,\u8f93\u5165\u53c2\u6570INT\uff0c\u8f93\u51fa\u53c2\u6570\u662fINT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JAVA"},'package org.apache.doris.udf.demo;\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.IOException;\nimport java.util.logging.Logger;\n\npublic class SimpleDemo  {\n\n    Logger log = Logger.getLogger("SimpleDemo");\n\n    //Need an inner class to store data\n    /*required*/\n    public static class State {\n        /*some variables if you need */\n        public int sum = 0;\n    }\n\n    /*required*/\n    public State create() {\n        /* here could do some init work if needed */\n        return new State();\n    }\n\n    /*required*/\n    public void destroy(State state) {\n        /* here could do some destroy work if needed */\n    }\n\n    /*Not Required*/\n    public void reset(State state) {\n        /*if you want this udaf function can work with window function.*/\n        /*Must impl this, it will be reset to init state after calculate every window frame*/\n        state.sum = 0;\n    }\n\n    /*required*/\n    //first argument is State, then other types your input\n    public void add(State state, Integer val) throws Exception {\n        /* here doing update work when input data*/\n        if (val != null) {\n            state.sum += val;\n        }\n    }\n\n    /*required*/\n    public void serialize(State state, DataOutputStream out)  {\n        /* serialize some data into buffer */\n        try {\n            out.writeInt(state.sum);\n        } catch (Exception e) {\n            /* Do not throw exceptions */\n            log.info(e.getMessage());\n        }\n    }\n\n    /*required*/\n    public void deserialize(State state, DataInputStream in)  {\n        /* deserialize get data from buffer before you put */\n        int val = 0;\n        try {\n            val = in.readInt();\n        } catch (Exception e) {\n            /* Do not throw exceptions */\n            log.info(e.getMessage());\n        }\n        state.sum = val;\n    }\n\n    /*required*/\n    public void merge(State state, State rhs) throws Exception {\n        /* merge data from state */\n        state.sum += rhs.sum;\n    }\n\n    /*required*/\n    //return Type you defined\n    public Integer getValue(State state) throws Exception {\n        /* return finally result */\n        return state.sum;\n    }\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION simple_sum(INT) RETURNS INT PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.SimpleDemo",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JAVA"},'package org.apache.doris.udf.demo;\n\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.math.BigDecimal;\nimport java.util.Arrays;\nimport java.util.logging.Logger;\n\n/*UDAF\u8ba1\u7b97\u4e2d\u4f4d\u6570*/\npublic class MedianUDAF {\n    Logger log = Logger.getLogger("MedianUDAF");\n\n    //\u72b6\u6001\u5b58\u50a8\n    public static class State {\n        //\u8fd4\u56de\u7ed3\u679c\u7684\u7cbe\u5ea6\n        int scale = 0;\n        //\u662f\u5426\u662f\u67d0\u4e00\u4e2atablet\u4e0b\u7684\u67d0\u4e2a\u805a\u5408\u6761\u4ef6\u4e0b\u7684\u6570\u636e\u7b2c\u4e00\u6b21\u6267\u884cadd\u65b9\u6cd5\n        boolean isFirst = true;\n        //\u6570\u636e\u5b58\u50a8\n        public StringBuilder stringBuilder;\n    }\n\n    //\u72b6\u6001\u521d\u59cb\u5316\n    public State create() {\n        State state = new State();\n        //\u6839\u636e\u6bcf\u4e2atablet\u4e0b\u7684\u805a\u5408\u6761\u4ef6\u9700\u8981\u805a\u5408\u7684\u6570\u636e\u91cf\u5927\u5c0f\uff0c\u9884\u5148\u521d\u59cb\u5316\uff0c\u589e\u52a0\u6027\u80fd\n        state.stringBuilder = new StringBuilder(1000);\n        return state;\n    }\n\n\n    //\u5904\u7406\u6267\u884c\u5355\u4f4d\u5904\u7406\u5404\u81eatablet\u4e0b\u7684\u5404\u81ea\u805a\u5408\u6761\u4ef6\u4e0b\u7684\u6bcf\u4e2a\u6570\u636e\n    public void add(State state, Double val, int scale) {\n        try {\n            if (val != null && state.isFirst) {\n                state.stringBuilder.append(scale).append(",").append(val).append(",");\n                state.isFirst = false;\n            } else if (val != null) {\n                state.stringBuilder.append(val).append(",");\n            }\n        } catch (Exception e) {\n            //\u5982\u679c\u4e0d\u80fd\u4fdd\u8bc1\u4e00\u5b9a\u4e0d\u4f1a\u5f02\u5e38\uff0c\u5efa\u8bae\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u6700\u5927\u5316\u6355\u83b7\u5f02\u5e38\uff0c\u56e0\u4e3a\u76ee\u524d\u4e0d\u652f\u6301\u5904\u7406java\u629b\u51fa\u7684\u5f02\u5e38\n            log.info("\u83b7\u53d6\u6570\u636e\u5f02\u5e38: " + e.getMessage());\n        }\n    }\n\n    //\u5904\u7406\u6570\u636e\u5b8c\u9700\u8981\u8f93\u51fa\u7b49\u5f85\u805a\u5408\n    public void serialize(State state, DataOutputStream out) {\n        try {\n            //\u76ee\u524d\u6682\u65f6\u53ea\u63d0\u4f9bDataOutputStream,\u5982\u679c\u9700\u8981\u5e8f\u5217\u5316\u5bf9\u8c61\u53ef\u4ee5\u8003\u8651\u62fc\u63a5\u5b57\u7b26\u4e32,\u8f6c\u6362json,\u5e8f\u5217\u5316\u6210\u5b57\u8282\u6570\u7ec4\u7b49\u65b9\u5f0f\n            //\u5982\u679c\u8981\u5e8f\u5217\u5316State\u5bf9\u8c61\uff0c\u53ef\u80fd\u9700\u8981\u81ea\u5df1\u5c06State\u5185\u90e8\u7c7b\u5b9e\u73b0\u5e8f\u5217\u5316\u63a5\u53e3\n            //\u6700\u7ec8\u90fd\u662f\u8981\u901a\u8fc7DataOutputStream\u4f20\u8f93\n            out.writeUTF(state.stringBuilder.toString());\n        } catch (Exception e) {\n            log.info("\u5e8f\u5217\u5316\u5f02\u5e38: " + e.getMessage());\n        }\n    }\n\n    //\u83b7\u53d6\u5904\u7406\u6570\u636e\u6267\u884c\u5355\u4f4d\u8f93\u51fa\u7684\u6570\u636e\n    public void deserialize(State state, DataInputStream in) {\n        try {\n            String string = in.readUTF();\n            state.scale = Integer.parseInt(String.valueOf(string.charAt(0)));\n            StringBuilder stringBuilder = new StringBuilder(string.substring(2));\n            state.stringBuilder = stringBuilder;\n        } catch (Exception e) {\n            log.info("\u53cd\u5e8f\u5217\u5316\u5f02\u5e38: " + e.getMessage());\n        }\n    }\n\n    //\u805a\u5408\u6267\u884c\u5355\u4f4d\u6309\u7167\u805a\u5408\u6761\u4ef6\u5408\u5e76\u67d0\u4e00\u4e2a\u952e\u4e0b\u6570\u636e\u7684\u5904\u7406\u7ed3\u679c ,\u6bcf\u4e2a\u952e\u7b2c\u4e00\u6b21\u5408\u5e76\u65f6,state1\u53c2\u6570\u662f\u521d\u59cb\u5316\u7684\u5b9e\u4f8b\n    public void merge(State state1, State state2) {\n        try {\n            state1.scale = state2.scale;\n            state1.stringBuilder.append(state2.stringBuilder.toString());\n        } catch (Exception e) {\n            log.info("\u5408\u5e76\u7ed3\u679c\u5f02\u5e38: " + e.getMessage());\n        }\n    }\n\n    //\u5bf9\u6bcf\u4e2a\u952e\u5408\u5e76\u540e\u7684\u6570\u636e\u8fdb\u884c\u5e76\u8f93\u51fa\u6700\u7ec8\u7ed3\u679c\n    public Double getValue(State state) {\n        try {\n            String[] strings = state.stringBuilder.toString().split(",");\n            double[] doubles = new double[strings.length + 1];\n            doubles = Arrays.stream(strings).mapToDouble(Double::parseDouble).toArray();\n\n            Arrays.sort(doubles);\n            double n = doubles.length - 1;\n            double index = n * 0.5;\n\n            int low = (int) Math.floor(index);\n            int high = (int) Math.ceil(index);\n\n            double value = low == high ? (doubles[low] + doubles[high]) * 0.5 : doubles[high];\n\n            BigDecimal decimal = new BigDecimal(value);\n            return decimal.setScale(state.scale, BigDecimal.ROUND_HALF_UP).doubleValue();\n        } catch (Exception e) {\n            log.info("\u8ba1\u7b97\u5f02\u5e38\uff1a" + e.getMessage());\n        }\n        return 0.0;\n    }\n\n    //\u6bcf\u4e2a\u6267\u884c\u5355\u4f4d\u6267\u884c\u5b8c\u90fd\u4f1a\u6267\u884c\n    public void destroy(State state) {\n    }\n\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION middle_quantiles(DOUBLE,INT) RETURNS DOUBLE PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.MiddleNumberUDAF",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u5b9e\u73b0\u7684jar\u5305\u53ef\u4ee5\u653e\u5728\u672c\u5730\u4e5f\u53ef\u4ee5\u5b58\u653e\u5728\u8fdc\u7a0b\u670d\u52a1\u7aef\u901a\u8fc7http\u4e0b\u8f7d\uff0c\u4f46\u5fc5\u987b\u8ba9\u6bcf\u4e2aBE\u8282\u70b9\u90fd\u80fd\u83b7\u53d6\u5230jar\u5305;\n\u5426\u5219\u5c06\u4f1a\u8fd4\u56de\u9519\u8bef\u72b6\u6001\u4fe1\u606f"Couldn\'t open file ......".')),(0,r.kt)("p",null,"\u76ee\u524d\u8fd8\u6682\u4e0d\u652f\u6301UDTF"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u4f7f\u7528-udf"},"\u4f7f\u7528 UDF"),(0,r.kt)("p",null,"\u7528\u6237\u4f7f\u7528 UDF \u5fc5\u987b\u62e5\u6709\u5bf9\u5e94\u6570\u636e\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u6743\u9650\u3002"),(0,r.kt)("p",null,"UDF \u7684\u4f7f\u7528\u4e0e\u666e\u901a\u7684\u51fd\u6570\u65b9\u5f0f\u4e00\u81f4\uff0c\u552f\u4e00\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5185\u7f6e\u51fd\u6570\u7684\u4f5c\u7528\u57df\u662f\u5168\u5c40\u7684\uff0c\u800c UDF \u7684\u4f5c\u7528\u57df\u662f DB\u5185\u90e8\u3002\u5f53\u94fe\u63a5 session \u4f4d\u4e8e\u6570\u636e\u5185\u90e8\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528 UDF \u540d\u5b57\u4f1a\u5728\u5f53\u524dDB\u5185\u90e8\u67e5\u627e\u5bf9\u5e94\u7684 UDF\u3002\u5426\u5219\u7528\u6237\u9700\u8981\u663e\u793a\u7684\u6307\u5b9a UDF \u7684\u6570\u636e\u5e93\u540d\u5b57\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"dbName"),".",(0,r.kt)("inlineCode",{parentName:"p"},"funcName"),"\u3002"),(0,r.kt)("h2",{id:"\u5220\u9664-udf"},"\u5220\u9664 UDF"),(0,r.kt)("p",null,"\u5f53\u4f60\u4e0d\u518d\u9700\u8981 UDF \u51fd\u6570\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u6765\u5220\u9664\u4e00\u4e2a UDF \u51fd\u6570, \u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP FUNCTION"),"\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/java-udf-demo/")," \u76ee\u5f55\u4e2d\u63d0\u4f9b\u4e86\u5177\u4f53\u793a\u4f8b\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u89c1\u6bcf\u4e2a\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"README.md"),"\uff0c\u67e5\u770b\u70b9\u51fb",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/doris-demo/java-udf-demo"},"\u8fd9\u91cc")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u590d\u6742\u6570\u636e\u7c7b\u578b\uff08HLL\uff0cBitmap\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u524d\u5141\u8bb8\u7528\u6237\u81ea\u5df1\u6307\u5b9aJVM\u6700\u5927\u5806\u5927\u5c0f\uff0c\u914d\u7f6e\u9879\u662fjvm_max_heap_size\u3002\u914d\u7f6e\u9879\u5728BE\u5b89\u88c5\u76ee\u5f55\u4e0b\u7684be.conf\u5168\u5c40\u914d\u7f6e\u4e2d\uff0c\u9ed8\u8ba4512M\uff0c\u5982\u679c\u9700\u8981\u805a\u5408\u6570\u636e\uff0c\u5efa\u8bae\u8c03\u5927\u4e00\u4e9b\uff0c\u589e\u52a0\u6027\u80fd\uff0c\u51cf\u5c11\u5185\u5b58\u6ea2\u51fa\u98ce\u9669\u3002"),(0,r.kt)("li",{parentName:"ol"},"char\u7c7b\u578b\u7684udf\u5728create function\u65f6\u9700\u8981\u4f7f\u7528String\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8ejvm\u52a0\u8f7d\u540c\u540d\u7c7b\u7684\u95ee\u9898\uff0c\u4e0d\u8981\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u540c\u540d\u7c7b\u4f5c\u4e3audf\u5b9e\u73b0\uff0c\u5982\u679c\u60f3\u66f4\u65b0\u67d0\u4e2a\u540c\u540d\u7c7b\u7684udf\uff0c\u9700\u8981\u91cd\u542fbe\u91cd\u65b0\u52a0\u8f7dclasspath\u3002")))}m.isMDXComponent=!0}}]);