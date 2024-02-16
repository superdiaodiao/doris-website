"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46492],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={title:"Remote User Defined Function Service",language:"en"},o=void 0,l={unversionedId:"ecosystem/udf/remote-user-defined-function",id:"version-2.0/ecosystem/udf/remote-user-defined-function",title:"Remote User Defined Function Service",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/ecosystem/udf/remote-user-defined-function.md",sourceDirName:"ecosystem/udf",slug:"/ecosystem/udf/remote-user-defined-function",permalink:"/docs/ecosystem/udf/remote-user-defined-function",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Remote User Defined Function Service",language:"en"},sidebar:"docs",previous:{title:"Contribute UDF",permalink:"/docs/ecosystem/udf/contribute-udf"},next:{title:"Java UDF",permalink:"/docs/ecosystem/udf/java-user-defined-function"}},s={},c=[{value:"Write UDF functions",id:"write-udf-functions",level:2},{value:"Copy the proto file",id:"copy-the-proto-file",level:3},{value:"Generated interface",id:"generated-interface",level:3},{value:"Implementing an interface",id:"implementing-an-interface",level:3},{value:"Create UDF",id:"create-udf",level:2},{value:"Use UDF",id:"use-udf",level:2},{value:"Delete UDF",id:"delete-udf",level:2},{value:"Example",id:"example",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"user-defined-function-rpc"},"User Defined Function Rpc"),(0,a.yg)("p",null,"Remote UDF Service The Remote UDF Service can be accessed through RPC to implement the execution of user-defined functions. Compared with Native UDF implementations, Remote UDF Service has the following advantages and limitations:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The advantage"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Cross-language: UDF services can be written in all languages supported by Protobuf."),(0,a.yg)("li",{parentName:"ul"},"Security: UDF execution failure or crash only affects the UDF Service and does not cause the Doris process to crash."),(0,a.yg)("li",{parentName:"ul"},"Flexibility: Any other Service or library class can be invoked within a UDF Service to meet a wider variety of business requirements."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Restrictions on use"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Performance: Compared to Native UDFs, UDF services incur extra network overhead and thus have much lower performance than Native UDFs. At the same time, the implementation of the UDF Service also affects the execution efficiency of the function. Users need to deal with problems such as high concurrency and thread safety by themselves."),(0,a.yg)("li",{parentName:"ul"},"Single line mode and batch mode: Doris's original query execution framework based on row memory would execute one UDF RPC call for each row of data, so the execution efficiency was very poor. However, under the new vectorization execution framework, one UDF RPC call would be executed for each batch of data (2048 rows by default), so the performance was significantly improved. In actual tests, the performance of Remote UDF based on vectorization and batch processing is similar to that of Native UDF based on rowmemory, which can be used for reference.")))),(0,a.yg)("h2",{id:"write-udf-functions"},"Write UDF functions"),(0,a.yg)("p",null,"This section describes how to develop a Remote RPC Service. Samples for the Java version are provided under ",(0,a.yg)("inlineCode",{parentName:"p"},"samples/doris-demo/udf-demo/")," for your reference."),(0,a.yg)("h3",{id:"copy-the-proto-file"},"Copy the proto file"),(0,a.yg)("p",null,"Copy gensrc/proto/function_service.proto and gensrc/proto/types.proto to Rpc service"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"function_service.proto",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"PFunctionCallRequest",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"function_name\uff1aThe function name, corresponding to the symbol specified when the function was created"),(0,a.yg)("li",{parentName:"ul"},"args\uff1aThe parameters passed by the method"),(0,a.yg)("li",{parentName:"ul"},"context\uff1aQuerying context Information"))),(0,a.yg)("li",{parentName:"ul"},"PFunctionCallResponse",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"result\uff1aReturn result"),(0,a.yg)("li",{parentName:"ul"},"status\uff1aReturn Status, 0 indicates normal"))),(0,a.yg)("li",{parentName:"ul"},"PCheckFunctionRequest",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"function\uff1aFunction related information"),(0,a.yg)("li",{parentName:"ul"},"match_type\uff1aMatching type"))),(0,a.yg)("li",{parentName:"ul"},"PCheckFunctionResponse",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"status\uff1aReturn status, 0 indicates normal")))))),(0,a.yg)("h3",{id:"generated-interface"},"Generated interface"),(0,a.yg)("p",null,"Use protoc generate code, and specific parameters are viewed using protoc -h"),(0,a.yg)("h3",{id:"implementing-an-interface"},"Implementing an interface"),(0,a.yg)("p",null,"The following three methods need to be implemented"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"fnCall\uff1aUsed to write computational logic"),(0,a.yg)("li",{parentName:"ul"},"checkFn\uff1aUsed to verify function names, parameters, and return values when creating UDFs"),(0,a.yg)("li",{parentName:"ul"},"handShake\uff1aUsed for interface probe")),(0,a.yg)("h2",{id:"create-udf"},"Create UDF"),(0,a.yg)("p",null,"Currently UDTF are not supported"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION \nname ([,...])\n[RETURNS] rettype\nPROPERTIES (["key"="value"][,...])  \n')),(0,a.yg)("p",null,"Instructions:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,a.yg)("inlineCode",{parentName:"li"},"symbol"),"Represents the name of the method passed by the RPC call, which must be set\u3002"),(0,a.yg)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,a.yg)("inlineCode",{parentName:"li"},"object_file"),"Represents the RPC service address. Currently, a single address and a cluster address in BRPC-compatible format are supported. Refer to the cluster connection mode",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-brpc/blob/master/docs/cn/client.md#%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4"},"Format specification"),"\u3002"),(0,a.yg)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,a.yg)("inlineCode",{parentName:"li"},"type"),"Indicates the UDF call type, which is Native by default. Rpc is transmitted when Rpc UDF is used\u3002"),(0,a.yg)("li",{parentName:"ol"},"name: A function belongs to a DB and name is of the form",(0,a.yg)("inlineCode",{parentName:"li"},"dbName"),".",(0,a.yg)("inlineCode",{parentName:"li"},"funcName"),". When ",(0,a.yg)("inlineCode",{parentName:"li"},"dbName")," is not explicitly specified, the db of the current session is used",(0,a.yg)("inlineCode",{parentName:"li"},"dbName"),"\u3002")),(0,a.yg)("p",null,"Sample:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION rpc_add_two(INT,INT) RETURNS INT PROPERTIES (\n  "SYMBOL"="add_int_two",\n  "OBJECT_FILE"="127.0.0.1:9114",\n  "TYPE"="RPC"\n);\nCREATE FUNCTION rpc_add_one(INT) RETURNS INT PROPERTIES (\n  "SYMBOL"="add_int_one",\n  "OBJECT_FILE"="127.0.0.1:9114",\n  "TYPE"="RPC"\n);\nCREATE FUNCTION rpc_add_string(varchar(30)) RETURNS varchar(30) PROPERTIES (\n  "SYMBOL"="add_string",\n  "OBJECT_FILE"="127.0.0.1:9114",\n  "TYPE"="RPC"\n);\n')),(0,a.yg)("h2",{id:"use-udf"},"Use UDF"),(0,a.yg)("p",null,"Users must have the ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT")," permission of the corresponding database to use UDF/UDAF."),(0,a.yg)("p",null,"The use of UDF is consistent with ordinary function methods. The only difference is that the scope of built-in functions is global, and the scope of UDF is internal to DB. When the link session is inside the data, directly using the UDF name will find the corresponding UDF inside the current DB. Otherwise, the user needs to display the specified UDF database name, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"dbName"),".",(0,a.yg)("inlineCode",{parentName:"p"},"funcName"),"."),(0,a.yg)("h2",{id:"delete-udf"},"Delete UDF"),(0,a.yg)("p",null,"When you no longer need UDF functions, you can delete a UDF function by the following command, you can refer to ",(0,a.yg)("inlineCode",{parentName:"p"},"DROP FUNCTION"),"."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"Examples of rpc server implementations and cpp/java/python languages are provided in the ",(0,a.yg)("inlineCode",{parentName:"p"},"samples/doris-demo/")," directory. See the ",(0,a.yg)("inlineCode",{parentName:"p"},"README.md")," in each directory for details on how to use it.\nFor example, rpc_add_string"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql >select rpc_add_string('doris');\n+-------------------------+\n| rpc_add_string('doris') |\n+-------------------------+\n| doris_rpc_test          |\n+-------------------------+\n")),(0,a.yg)("p",null,"The logs will be displayed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'INFO: fnCall request=function_name: "add_string"\nargs {\n  type {\n    id: STRING\n  }\n  has_null: false\n  string_value: "doris"\n}\nINFO: fnCall res=result {\n  type {\n    id: STRING\n  }\n  has_null: false\n  string_value: "doris_rpc_test"\n}\nstatus {\n  status_code: 0\n}\n')))}p.isMDXComponent=!0}}]);