"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={title:"\u8fdc\u7a0b UDF",language:"zh-CN"},i=void 0,o={unversionedId:"ecosystem/udf/remote-user-defined-function",id:"ecosystem/udf/remote-user-defined-function",title:"\u8fdc\u7a0b UDF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/udf/remote-user-defined-function.md",sourceDirName:"ecosystem/udf",slug:"/ecosystem/udf/remote-user-defined-function",permalink:"/zh-CN/docs/dev/ecosystem/udf/remote-user-defined-function",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8fdc\u7a0b UDF",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8d21\u732e UDF ",permalink:"/zh-CN/docs/dev/ecosystem/udf/contribute-udf"},next:{title:"Java UDF",permalink:"/zh-CN/docs/dev/ecosystem/udf/java-user-defined-function"}},u={},p=[{value:"\u7f16\u5199 UDF \u51fd\u6570",id:"\u7f16\u5199-udf-\u51fd\u6570",level:2},{value:"\u62f7\u8d1d proto \u6587\u4ef6",id:"\u62f7\u8d1d-proto-\u6587\u4ef6",level:3},{value:"\u751f\u6210\u63a5\u53e3",id:"\u751f\u6210\u63a5\u53e3",level:3},{value:"\u5b9e\u73b0\u63a5\u53e3",id:"\u5b9e\u73b0\u63a5\u53e3",level:3},{value:"\u521b\u5efa UDF",id:"\u521b\u5efa-udf",level:2},{value:"\u4f7f\u7528 UDF",id:"\u4f7f\u7528-udf",level:2},{value:"\u5220\u9664 UDF",id:"\u5220\u9664-udf",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8fdc\u7a0budf"},"\u8fdc\u7a0bUDF"),(0,l.kt)("p",null,"Remote UDF Service \u652f\u6301\u901a\u8fc7 RPC \u7684\u65b9\u5f0f\u8bbf\u95ee\u7528\u6237\u63d0\u4f9b\u7684 UDF Service\uff0c\u4ee5\u5b9e\u73b0\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u7684\u6267\u884c\u3002\u76f8\u6bd4\u4e8e Native \u7684 UDF \u5b9e\u73b0\uff0cRemote UDF Service \u6709\u5982\u4e0b\u4f18\u52bf\u548c\u9650\u5236\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f18\u52bf")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8de8\u8bed\u8a00\uff1a\u53ef\u4ee5\u7528 Protobuf \u652f\u6301\u7684\u5404\u7c7b\u8bed\u8a00\u7f16\u5199 UDF Service\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u5168\uff1aUDF \u6267\u884c\u5931\u8d25\u6216\u5d29\u6e83\uff0c\u4ec5\u4f1a\u5f71\u54cd UDF Service \u81ea\u8eab\uff0c\u800c\u4e0d\u4f1a\u5bfc\u81f4 Doris \u8fdb\u7a0b\u5d29\u6e83\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7075\u6d3b\uff1aUDF Service \u4e2d\u53ef\u4ee5\u8c03\u7528\u4efb\u610f\u5176\u4ed6\u670d\u52a1\u6216\u7a0b\u5e8f\u5e93\u7c7b\uff0c\u4ee5\u6ee1\u8db3\u66f4\u591a\u6837\u7684\u4e1a\u52a1\u9700\u6c42\u3002")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u9650\u5236")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6027\u80fd\uff1a\u76f8\u6bd4\u4e8e Native UDF\uff0cUDF Service \u4f1a\u5e26\u6765\u989d\u5916\u7684\u7f51\u7edc\u5f00\u9500\uff0c\u56e0\u6b64\u6027\u80fd\u4f1a\u8fdc\u4f4e\u4e8e Native UDF\u3002\u540c\u65f6\uff0cUDF Service \u81ea\u8eab\u7684\u5b9e\u73b0\u4e5f\u4f1a\u5f71\u54cd\u51fd\u6570\u7684\u6267\u884c\u6548\u7387\uff0c\u7528\u6237\u9700\u8981\u81ea\u884c\u5904\u7406\u9ad8\u5e76\u53d1\u3001\u7ebf\u7a0b\u5b89\u5168\u7b49\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u884c\u6a21\u5f0f\u548c\u6279\u5904\u7406\u6a21\u5f0f\uff1aDoris \u539f\u5148\u7684\u57fa\u4e8e\u884c\u5b58\u7684\u67e5\u8be2\u6267\u884c\u6846\u67b6\u4f1a\u5bf9\u6bcf\u4e00\u884c\u6570\u636e\u6267\u884c\u4e00\u6b21 UDF RPC \u8c03\u7528\uff0c\u56e0\u6b64\u6267\u884c\u6548\u7387\u975e\u5e38\u5dee\uff0c\u800c\u5728\u65b0\u7684\u5411\u91cf\u5316\u6267\u884c\u6846\u67b6\u4e0b\uff0c\u4f1a\u5bf9\u6bcf\u4e00\u6279\u6570\u636e\uff08\u9ed8\u8ba42048\u884c\uff09\u6267\u884c\u4e00\u6b21 UDF RPC \u8c03\u7528\uff0c\u56e0\u6b64\u6027\u80fd\u6709\u660e\u663e\u63d0\u5347\u3002\u5b9e\u9645\u6d4b\u8bd5\u4e2d\uff0c\u57fa\u4e8e\u5411\u91cf\u5316\u548c\u6279\u5904\u7406\u65b9\u5f0f\u7684 Remote UDF \u6027\u80fd\u548c\u57fa\u4e8e\u884c\u5b58\u7684 Native UDF \u6027\u80fd\u76f8\u5f53\uff0c\u53ef\u4f9b\u53c2\u8003\u3002")),(0,l.kt)("h2",{id:"\u7f16\u5199-udf-\u51fd\u6570"},"\u7f16\u5199 UDF \u51fd\u6570"),(0,l.kt)("p",null,"\u672c\u5c0f\u8282\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a Remote RPC service\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/udf-demo/")," \u4e0b\u63d0\u4f9b\u4e86 Java \u7248\u672c\u7684\u793a\u4f8b\uff0c\u53ef\u4f9b\u53c2\u8003\u3002"),(0,l.kt)("h3",{id:"\u62f7\u8d1d-proto-\u6587\u4ef6"},"\u62f7\u8d1d proto \u6587\u4ef6"),(0,l.kt)("p",null,"\u62f7\u8d1d gensrc/proto/function_service.proto \u548c gensrc/proto/types.proto \u5230 Rpc \u670d\u52a1\u4e2d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function_service.proto",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PFunctionCallRequest",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"function_name\uff1a\u51fd\u6570\u540d\u79f0\uff0c\u5bf9\u5e94\u521b\u5efa\u51fd\u6570\u65f6\u6307\u5b9a\u7684symbol"),(0,l.kt)("li",{parentName:"ul"},"args\uff1a\u65b9\u6cd5\u4f20\u9012\u7684\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"context\uff1a\u67e5\u8be2\u4e0a\u4e0b\u6587\u4fe1\u606f"))),(0,l.kt)("li",{parentName:"ul"},"PFunctionCallResponse",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"result\uff1a\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ul"},"status\uff1a\u72b6\u6001\uff0c0\u4ee3\u8868\u6b63\u5e38"))),(0,l.kt)("li",{parentName:"ul"},"PCheckFunctionRequest",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"function\uff1a\u51fd\u6570\u76f8\u5173\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"match_type\uff1a\u5339\u914d\u7c7b\u578b"))),(0,l.kt)("li",{parentName:"ul"},"PCheckFunctionResponse",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"status\uff1a\u72b6\u6001\uff0c0\u4ee3\u8868\u6b63\u5e38")))))),(0,l.kt)("h3",{id:"\u751f\u6210\u63a5\u53e3"},"\u751f\u6210\u63a5\u53e3"),(0,l.kt)("p",null,"\u901a\u8fc7 protoc \u751f\u6210\u4ee3\u7801\uff0c\u5177\u4f53\u53c2\u6570\u901a\u8fc7 protoc -h \u67e5\u770b"),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u63a5\u53e3"},"\u5b9e\u73b0\u63a5\u53e3"),(0,l.kt)("p",null,"\u5171\u9700\u8981\u5b9e\u73b0\u4ee5\u4e0b\u4e09\u4e2a\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fnCall\uff1a\u7528\u4e8e\u7f16\u5199\u8ba1\u7b97\u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},"checkFn\uff1a\u7528\u4e8e\u521b\u5efa UDF \u65f6\u6821\u9a8c\uff0c\u6821\u9a8c\u51fd\u6570\u540d/\u53c2\u6570/\u8fd4\u56de\u503c\u7b49\u662f\u5426\u5408\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"handShake\uff1a\u7528\u4e8e\u63a5\u53e3\u63a2\u6d3b")),(0,l.kt)("h2",{id:"\u521b\u5efa-udf"},"\u521b\u5efa UDF"),(0,l.kt)("p",null,"\u76ee\u524d\u6682\u4e0d\u652f\u6301UDTF"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION \nname ([,...])\n[RETURNS] rettype\nPROPERTIES (["key"="value"][,...])  \n')),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"symbol"),"\u8868\u793a\u7684\u662f rpc \u8c03\u7528\u4f20\u9012\u7684\u65b9\u6cd5\u540d\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u8bbe\u5b9a\u7684\u3002"),(0,l.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"object_file"),"\u8868\u793a\u7684 rpc \u670d\u52a1\u5730\u5740\uff0c\u76ee\u524d\u652f\u6301\u5355\u4e2a\u5730\u5740\u548c brpc \u517c\u5bb9\u683c\u5f0f\u7684\u96c6\u7fa4\u5730\u5740\uff0c\u96c6\u7fa4\u8fde\u63a5\u65b9\u5f0f \u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-brpc/blob/master/docs/cn/client.md#%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4"},"\u683c\u5f0f\u8bf4\u660e"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"type"),"\u8868\u793a\u7684 UDF \u8c03\u7528\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a Native\uff0c\u4f7f\u7528 Rpc UDF\u65f6\u4f20 RPC\u3002"),(0,l.kt)("li",{parentName:"ol"},"name: \u4e00\u4e2afunction\u662f\u8981\u5f52\u5c5e\u4e8e\u67d0\u4e2aDB\u7684\uff0cname\u7684\u5f62\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"dbName"),".",(0,l.kt)("inlineCode",{parentName:"li"},"funcName"),"\u3002\u5f53",(0,l.kt)("inlineCode",{parentName:"li"},"dbName"),"\u6ca1\u6709\u660e\u786e\u6307\u5b9a\u7684\u65f6\u5019\uff0c\u5c31\u662f\u4f7f\u7528\u5f53\u524dsession\u6240\u5728\u7684db\u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"dbName"),"\u3002")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION rpc_add(INT, INT) RETURNS INT PROPERTIES (\n  "SYMBOL"="add_int",\n  "OBJECT_FILE"="127.0.0.1:9090",\n  "TYPE"="RPC"\n);\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528-udf"},"\u4f7f\u7528 UDF"),(0,l.kt)("p",null,"\u7528\u6237\u4f7f\u7528 UDF \u5fc5\u987b\u62e5\u6709\u5bf9\u5e94\u6570\u636e\u5e93\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u6743\u9650\u3002"),(0,l.kt)("p",null,"UDF \u7684\u4f7f\u7528\u4e0e\u666e\u901a\u7684\u51fd\u6570\u65b9\u5f0f\u4e00\u81f4\uff0c\u552f\u4e00\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5185\u7f6e\u51fd\u6570\u7684\u4f5c\u7528\u57df\u662f\u5168\u5c40\u7684\uff0c\u800c UDF \u7684\u4f5c\u7528\u57df\u662f DB\u5185\u90e8\u3002\u5f53\u94fe\u63a5 session \u4f4d\u4e8e\u6570\u636e\u5185\u90e8\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528 UDF \u540d\u5b57\u4f1a\u5728\u5f53\u524dDB\u5185\u90e8\u67e5\u627e\u5bf9\u5e94\u7684 UDF\u3002\u5426\u5219\u7528\u6237\u9700\u8981\u663e\u793a\u7684\u6307\u5b9a UDF \u7684\u6570\u636e\u5e93\u540d\u5b57\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"dbName"),".",(0,l.kt)("inlineCode",{parentName:"p"},"funcName"),"\u3002"),(0,l.kt)("h2",{id:"\u5220\u9664-udf"},"\u5220\u9664 UDF"),(0,l.kt)("p",null,"\u5f53\u4f60\u4e0d\u518d\u9700\u8981 UDF \u51fd\u6570\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u6765\u5220\u9664\u4e00\u4e2a UDF \u51fd\u6570, \u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP FUNCTION"),"\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/")," \u76ee\u5f55\u4e2d\u63d0\u4f9b\u548c cpp/java/python \u8bed\u8a00\u7684rpc server \u5b9e\u73b0\u793a\u4f8b\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u89c1\u6bcf\u4e2a\u76ee\u5f55\u4e0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"README.md")))}s.isMDXComponent=!0}}]);