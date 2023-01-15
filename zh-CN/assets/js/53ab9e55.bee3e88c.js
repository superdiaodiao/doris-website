"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72240],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u5bfc\u5165\u672c\u5730\u6570\u636e",language:"zh-CN"},o=void 0,i={unversionedId:"data-operate/import/import-scenes/local-file-load",id:"version-dev/data-operate/import/import-scenes/local-file-load",title:"\u5bfc\u5165\u672c\u5730\u6570\u636e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/data-operate/import/import-scenes/local-file-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/local-file-load",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/local-file-load",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/data-operate/import/import-scenes/local-file-load.md",tags:[],version:"dev",frontMatter:{title:"\u5bfc\u5165\u672c\u5730\u6570\u636e",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5bfc\u5165\u603b\u89c8",permalink:"/zh-CN/docs/dev/data-operate/import/load-manual"},next:{title:"\u5916\u90e8\u5b58\u50a8\u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/external-storage-load"}},p={},s=[{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:2},{value:"\u5bfc\u5165\u5efa\u8bae",id:"\u5bfc\u5165\u5efa\u8bae",level:2},{value:"Java \u4ee3\u7801\u793a\u4f8b",id:"java-\u4ee3\u7801\u793a\u4f8b",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5bfc\u5165\u672c\u5730\u6570\u636e"},"\u5bfc\u5165\u672c\u5730\u6570\u636e"),(0,r.kt)("p",null,"Stream Load \u7528\u4e8e\u5c06\u672c\u5730\u6587\u4ef6\u5bfc\u5165\u5230 Doris \u4e2d\u3002"),(0,r.kt)("p",null,"\u4e0d\u540c\u4e8e\u5176\u4ed6\u547d\u4ee4\u7684\u63d0\u4ea4\u65b9\u5f0f\uff0cStream Load \u662f\u901a\u8fc7 HTTP \u534f\u8bae\u4e0e Doris \u8fdb\u884c\u8fde\u63a5\u4ea4\u4e92\u7684\u3002"),(0,r.kt)("p",null,"\u8be5\u65b9\u5f0f\u4e2d\u6d89\u53ca HOST:PORT \u5e94\u4e3a HTTP \u534f\u8bae\u7aef\u53e3\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BE \u7684 HTTP \u534f\u8bae\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a 8040\u3002"),(0,r.kt)("li",{parentName:"ul"},"FE \u7684 HTTP \u534f\u8bae\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a 8030\u3002\u4f46\u987b\u4fdd\u8bc1\u5ba2\u6237\u7aef\u6240\u5728\u673a\u5668\u7f51\u7edc\u80fd\u591f\u8054\u901a BE \u6240\u5728\u673a\u5668\u3002")),(0,r.kt)("p",null,"\u672c\u6587\u6587\u6863\u6211\u4eec\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se/docs/manpage.html"},"curl")," \u547d\u4ee4\u4e3a\u4f8b\u6f14\u793a\u5982\u4f55\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u3002"),(0,r.kt)("p",null,"\u6587\u6863\u6700\u540e\uff0c\u6211\u4eec\u7ed9\u51fa\u4e00\u4e2a\u4f7f\u7528 Java \u5bfc\u5165\u6570\u636e\u7684\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("h2",{id:"\u5bfc\u5165\u6570\u636e"},"\u5bfc\u5165\u6570\u636e"),(0,r.kt)("p",null,"Stream Load \u7684\u8bf7\u6c42\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"PUT /api/{db}/{table}/_stream_load\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u5f20\u8868"),(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," \u547d\u4ee4\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"demo"),"\u521b\u5efa\u4e00\u5f20\u8868\u7528\u4e8e\u5b58\u50a8\u5f85\u5bfc\u5165\u7684\u6570\u636e\u3002\u5177\u4f53\u7684\u5bfc\u5165\u65b9\u5f0f\u8bf7\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")," \u547d\u4ee4\u624b\u518c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS load_local_file_test\n(\n    id INT,\n    age TINYINT,\n    name VARCHAR(50)\n)\nunique key(id)\nDISTRIBUTED BY HASH(id) BUCKETS 3;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e"),(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b curl \u547d\u4ee4\u5bfc\u5165\u672c\u5730\u6587\u4ef6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},' curl -u user:passwd -H "label:load_local_file_test" -T /path/to/local/demo.txt http://host:port/api/demo/load_local_file_test/_stream_load\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"user:passwd \u4e3a\u5728 Doris \u4e2d\u521b\u5efa\u7684\u7528\u6237\u3002\u521d\u59cb\u7528\u6237\u4e3a admin / root\uff0c\u5bc6\u7801\u521d\u59cb\u72b6\u6001\u4e0b\u4e3a\u7a7a\u3002"),(0,r.kt)("li",{parentName:"ul"},"host:port \u4e3a BE \u7684 HTTP \u534f\u8bae\u7aef\u53e3\uff0c\u9ed8\u8ba4\u662f 8040\uff0c\u53ef\u4ee5\u5728 Doris \u96c6\u7fa4 WEB UI\u9875\u9762\u67e5\u770b\u3002"),(0,r.kt)("li",{parentName:"ul"},"label: \u53ef\u4ee5\u5728 Header \u4e2d\u6307\u5b9a Label \u552f\u4e00\u6807\u8bc6\u8fd9\u4e2a\u5bfc\u5165\u4efb\u52a1\u3002")),(0,r.kt)("p",{parentName:"li"},"\u5173\u4e8e Stream Load \u547d\u4ee4\u7684\u66f4\u591a\u9ad8\u7ea7\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"Stream Load")," \u547d\u4ee4\u6587\u6863\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7b49\u5f85\u5bfc\u5165\u7ed3\u679c"),(0,r.kt)("p",{parentName:"li"},"Stream Load \u547d\u4ee4\u662f\u540c\u6b65\u547d\u4ee4\uff0c\u8fd4\u56de\u6210\u529f\u5373\u8868\u793a\u5bfc\u5165\u6210\u529f\u3002\u5982\u679c\u5bfc\u5165\u6570\u636e\u8f83\u5927\uff0c\u53ef\u80fd\u9700\u8981\u8f83\u957f\u7684\u7b49\u5f85\u65f6\u95f4\u3002\u793a\u4f8b\u5982\u4e0b:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TxnId": 1003,\n    "Label": "load_local_file_test",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 1000000,\n    "NumberLoadedRows": 1000000,\n    "NumberFilteredRows": 1,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 40888898,\n    "LoadTimeMs": 2144,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 2,\n    "ReadDataTimeMs": 325,\n    "WriteDataTimeMs": 1933,\n    "CommitAndPublishTimeMs": 106,\n    "ErrorURL": "http://192.168.1.1:8042/api/_load_error_log?file=__shard_0/error_log_insert_stmt_db18266d4d9b4ee5-abb00ddd64bdf005_db18266d4d9b4ee5_abb00ddd64bdf005"\n}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Status")," \u5b57\u6bb5\u72b6\u6001\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Success")," \u5373\u8868\u793a\u5bfc\u5165\u6210\u529f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5b57\u6bb5\u7684\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"Stream Load")," \u547d\u4ee4\u6587\u6863\u3002")))),(0,r.kt)("h2",{id:"\u5bfc\u5165\u5efa\u8bae"},"\u5bfc\u5165\u5efa\u8bae"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stream Load \u53ea\u80fd\u5bfc\u5165\u672c\u5730\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4e00\u4e2a\u5bfc\u5165\u8bf7\u6c42\u7684\u6570\u636e\u91cf\u63a7\u5236\u5728 1 - 2 GB \u4ee5\u5185\u3002\u5982\u679c\u6709\u5927\u91cf\u672c\u5730\u6587\u4ef6\uff0c\u53ef\u4ee5\u5206\u6279\u5e76\u53d1\u63d0\u4ea4\u3002")),(0,r.kt)("h2",{id:"java-\u4ee3\u7801\u793a\u4f8b"},"Java \u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("p",null,"\u8fd9\u91cc\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684 JAVA \u793a\u4f8b\u6765\u6267\u884c Stream Load\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package demo.doris;\n\nimport org.apache.commons.codec.binary.Base64;\nimport org.apache.http.HttpHeaders;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpPut;\nimport org.apache.http.entity.FileEntity;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.DefaultRedirectStrategy;\nimport org.apache.http.impl.client.HttpClientBuilder;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.util.EntityUtils;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.nio.charset.StandardCharsets;\n\n/*\n\u8fd9\u662f\u4e00\u4e2a Doris Stream Load \u793a\u4f8b\uff0c\u9700\u8981\u4f9d\u8d56\n<dependency>\n    <groupId>org.apache.httpcomponents</groupId>\n    <artifactId>httpclient</artifactId>\n    <version>4.5.13</version>\n</dependency>\n */\npublic class DorisStreamLoader {\n    //\u53ef\u4ee5\u9009\u62e9\u586b\u5199 FE \u5730\u5740\u4ee5\u53ca FE \u7684 http_port\uff0c\u4f46\u987b\u4fdd\u8bc1\u5ba2\u6237\u7aef\u548c BE \u8282\u70b9\u7684\u8fde\u901a\u6027\u3002\n    private final static String HOST = "your_host";\n    private final static int PORT = 8040;\n    private final static String DATABASE = "db1";   // \u8981\u5bfc\u5165\u7684\u6570\u636e\u5e93\n    private final static String TABLE = "tbl1";     // \u8981\u5bfc\u5165\u7684\u8868\n    private final static String USER = "root";      // Doris \u7528\u6237\u540d\n    private final static String PASSWD = "";        // Doris \u5bc6\u7801\n    private final static String LOAD_FILE_NAME = "/path/to/1.txt"; // \u8981\u5bfc\u5165\u7684\u672c\u5730\u6587\u4ef6\u8def\u5f84\n\n    private final static String loadUrl = String.format("http://%s:%s/api/%s/%s/_stream_load",\n            HOST, PORT, DATABASE, TABLE);\n\n    private final static HttpClientBuilder httpClientBuilder = HttpClients\n            .custom()\n            .setRedirectStrategy(new DefaultRedirectStrategy() {\n                @Override\n                protected boolean isRedirectable(String method) {\n                    // \u5982\u679c\u8fde\u63a5\u76ee\u6807\u662f FE\uff0c\u5219\u9700\u8981\u5904\u7406 307 redirect\u3002\n                    return true;\n                }\n            });\n\n    public void load(File file) throws Exception {\n        try (CloseableHttpClient client = httpClientBuilder.build()) {\n            HttpPut put = new HttpPut(loadUrl);\n            put.setHeader(HttpHeaders.EXPECT, "100-continue");\n            put.setHeader(HttpHeaders.AUTHORIZATION, basicAuthHeader(USER, PASSWD));\n\n            // \u53ef\u4ee5\u5728 Header \u4e2d\u8bbe\u7f6e stream load \u76f8\u5173\u5c5e\u6027\uff0c\u8fd9\u91cc\u6211\u4eec\u8bbe\u7f6e label \u548c column_separator\u3002\n            put.setHeader("label","label1");\n            put.setHeader("column_separator",",");\n\n            // \u8bbe\u7f6e\u5bfc\u5165\u6587\u4ef6\u3002\n            // \u8fd9\u91cc\u4e5f\u53ef\u4ee5\u4f7f\u7528 StringEntity \u6765\u4f20\u8f93\u4efb\u610f\u6570\u636e\u3002\n            FileEntity entity = new FileEntity(file);\n            put.setEntity(entity);\n\n            try (CloseableHttpResponse response = client.execute(put)) {\n                String loadResult = "";\n                if (response.getEntity() != null) {\n                    loadResult = EntityUtils.toString(response.getEntity());\n                }\n\n                final int statusCode = response.getStatusLine().getStatusCode();\n                if (statusCode != 200) {\n                    throw new IOException(\n                            String.format("Stream load failed. status: %s load result: %s", statusCode, loadResult));\n                }\n\n                System.out.println("Get load result: " + loadResult);\n            }\n        }\n    }\n\n    private String basicAuthHeader(String username, String password) {\n        final String tobeEncode = username + ":" + password;\n        byte[] encoded = Base64.encodeBase64(tobeEncode.getBytes(StandardCharsets.UTF_8));\n        return "Basic " + new String(encoded);\n    }\n\n    public static void main(String[] args) throws Exception{\n        DorisStreamLoader loader = new DorisStreamLoader();\n        File file = new File(LOAD_FILE_NAME);\n        loader.load(file);\n    }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8fd9\u91cc http client \u7684\u7248\u672c\u8981\u662f4.5.13"),(0,r.kt)("dependency",null,(0,r.kt)("groupId",null,"org.apache.httpcomponents"),(0,r.kt)("artifactId",null,"httpclient"),(0,r.kt)("version",null,"4.5.13"))))}c.isMDXComponent=!0}}]);