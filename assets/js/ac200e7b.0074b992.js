"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5759],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=o(t),u=l,m=d["".concat(p,".").concat(u)]||d[u]||y[u]||r;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var g={};for(var p in n)hasOwnProperty.call(n,p)&&(g[p]=n[p]);g.originalType=e,g[d]="string"==typeof e?e:l,i[1]=g;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>g,toc:()=>o});var a=t(58168),l=(t(96540),t(15680));const r={title:"Seatunnel Doris Sink",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},i=void 0,g={unversionedId:"ecosystem/seatunnel",id:"version-2.0/ecosystem/seatunnel",title:"Seatunnel Doris Sink",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/ecosystem/seatunnel.md",sourceDirName:"ecosystem",slug:"/ecosystem/seatunnel",permalink:"/docs/ecosystem/seatunnel",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Seatunnel Doris Sink",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"DataX Doriswriter",permalink:"/docs/ecosystem/datax"},next:{title:"Kyuubi",permalink:"/docs/ecosystem/kyuubi"}},p={},o=[{value:"About SeaTunnel",id:"about-seatunnel",level:2},{value:"Connector-V2",id:"connector-v2",level:2},{value:"Plugin Code",id:"plugin-code",level:3},{value:"Options",id:"options",level:3},{value:"Example",id:"example",level:3},{value:"Connector-V1",id:"connector-v1",level:2},{value:"Flink Sink Doris",id:"flink-sink-doris",level:3},{value:"Plugin Code",id:"plugin-code-1",level:4},{value:"Options",id:"options-1",level:4},{value:"Examples",id:"examples",level:4},{value:"Start command",id:"start-command",level:4},{value:"Spark Sink Doris",id:"spark-sink-doris",level:3},{value:"Plugin Code",id:"plugin-code-2",level:4},{value:"Options",id:"options-2",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Start command",id:"start-command-1",level:4}],s={toc:o},d="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(d,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"about-seatunnel"},"About SeaTunnel"),(0,l.yg)("p",null,"SeaTunnel is a very easy-to-use ultra-high-performance distributed data integration platform that supports real-time synchronization of massive data. It can synchronize tens of billions of data stably and efficiently every day."),(0,l.yg)("h2",{id:"connector-v2"},"Connector-V2"),(0,l.yg)("p",null,"The connector-v2 for SeaTunnel supports Doris Sink since version 2.3.1 and supports exactly-once write and CDC data synchronization"),(0,l.yg)("h3",{id:"plugin-code"},"Plugin Code"),(0,l.yg)("p",null,"SeaTunnel Doris Sink ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-connectors-v2/connector-doris"},"Plugin Code")),(0,l.yg)("h3",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table.identifier"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.label-prefix"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-2pc"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"doris.config"),(0,l.yg)("td",{parentName:"tr",align:null},"map"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"fenodes [string]")),(0,l.yg)("p",null,"Doris cluster FE Nodes address, the format is ",(0,l.yg)("inlineCode",{parentName:"p"},'"fe_ip:fe_http_port, ..."')),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"username [string]")),(0,l.yg)("p",null,"Doris user username"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"password [string]")),(0,l.yg)("p",null,"Doris`user password"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table.identifier [string]")),(0,l.yg)("p",null,"The name of Doris table,The format is DBName.TableName"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sink.label-prefix [string]")),(0,l.yg)("p",null,"The label prefix used by stream load imports. In the 2pc scenario, global uniqueness is required to ensure the EOS semantics of SeaTunnel."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sink.enable-2pc [bool]")),(0,l.yg)("p",null,"Whether to enable two-phase commit (2pc), the default is true, to ensure Exactly-Once semantics. For two-phase commit, please refer to ",(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"here"),"."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sink.enable-delete [bool]")),(0,l.yg)("p",null,"Whether to enable deletion. This option requires Doris table to enable batch delete function (0.15+ version is enabled by default), and only supports Unique model. you can get more detail at this link:"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"../data-operate/update-delete/batch-delete-manual"},"batch delete")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"doris.config [map]")),(0,l.yg)("p",null,"The parameter of the stream load ",(0,l.yg)("inlineCode",{parentName:"p"},"data_desc"),", you can get more detail at this link:"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"More Stream Load parameters")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,"Use JSON format to import data"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "doris_fe:8030"\n        username = root\n        password = ""\n        table.identifier = "test.table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_json"\n        doris.config = {\n            format="json"\n            read_json_by_line="true"\n        }\n    }\n}\n\n')),(0,l.yg)("p",null,"Use CSV format to import data"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "doris_fe:8030"\n        username = root\n        password = ""\n        table.identifier = "test.table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_csv"\n        doris.config = {\n          format = "csv"\n          column_separator = ","\n        }\n    }\n}\n')),(0,l.yg)("h2",{id:"connector-v1"},"Connector-V1"),(0,l.yg)("h3",{id:"flink-sink-doris"},"Flink Sink Doris"),(0,l.yg)("h4",{id:"plugin-code-1"},"Plugin Code"),(0,l.yg)("p",null,"Seatunnel Flink Sink Doris ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"plugin code")),(0,l.yg)("h4",{id:"options-1"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"),(0,l.yg)("th",{parentName:"tr",align:null},"engine"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"interval"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"doris.*"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"fenodes [string]")),(0,l.yg)("p",null,"Doris Fe http url, eg: 127.0.0.1:8030"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"database [string]")),(0,l.yg)("p",null,"Doris database"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table [string]")),(0,l.yg)("p",null,"Doris table"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"user [string]")),(0,l.yg)("p",null,"Doris user"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"password [string]")),(0,l.yg)("p",null,"Doris password"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"batch_size [int]")),(0,l.yg)("p",null,"The maximum number of lines to write to Doris at a time, the default value is 100"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"interval [int]")),(0,l.yg)("p",null,"The flush interval (in milliseconds), after which the asynchronous thread writes the data in the cache to Doris. Set to 0 to turn off periodic writes."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"max_retries [int]")),(0,l.yg)("p",null,"Number of retries after writing to Doris fails"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"doris.* [string]")),(0,l.yg)("p",null,"Import parameters for Stream load. For example: 'doris.column_separator' = ', ' etc."),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"../../data-operate/import/import-way/stream-load-manual.md"},"More Stream Load parameter configuration")),(0,l.yg)("h4",{id:"examples"},"Examples"),(0,l.yg)("p",null,"Socket To Doris"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  execution.parallelism = 1\n}\nsource {\n    SocketStream {\n      host = 127.0.0.1\n      port = 9999\n      result_table_name = "socket"\n      field_name = "info"\n    }\n}\ntransform {\n}\nsink {\n  DorisSink {\n      fenodes = "127.0.0.1:8030"\n      user = root\n      password = 123456\n      database = test\n      table = test_tbl\n      batch_size = 5\n      max_retries = 1\n      interval = 5000\n    }\n}\n\n')),(0,l.yg)("h4",{id:"start-command"},"Start command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"sh bin/start-seatunnel-flink.sh --config config/flink.streaming.conf\n")),(0,l.yg)("h3",{id:"spark-sink-doris"},"Spark Sink Doris"),(0,l.yg)("h4",{id:"plugin-code-2"},"Plugin Code"),(0,l.yg)("p",null,"Seatunnel Spark Sink Doris ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"plugin code")),(0,l.yg)("h4",{id:"options-2"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"),(0,l.yg)("th",{parentName:"tr",align:null},"engine"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"doris.*"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"fenodes [string]")),(0,l.yg)("p",null,"Doris FE address:8030"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"database [string]")),(0,l.yg)("p",null,"Doris target database name"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table [string]")),(0,l.yg)("p",null,"Doris target table name"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"user [string]")),(0,l.yg)("p",null,"Doris user name"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"password [string]")),(0,l.yg)("p",null,"Doris user's password"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"batch_size [string]")),(0,l.yg)("p",null,"Doris number of submissions per batch"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"doris. [string]"),"\nDoris stream_load properties,you can use 'doris.' prefix + stream_load properties"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"../../data-operate/import/import-way/stream-load-manual.md"},"More Doris stream_load Configurations")),(0,l.yg)("h4",{id:"examples-1"},"Examples"),(0,l.yg)("p",null,"Hive to Doris"),(0,l.yg)("p",null,"Config properties"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env{\n  spark.app.name = "hive2doris-template"\n}\n\nspark {\n  spark.sql.catalogImplementation = "hive"\n}\n\nsource {\n  hive {\n    preSql = "select * from tmp.test"\n    result_table_name = "test"\n  }\n}\n\ntransform {\n}\n\n\nsink {\n\nConsole {\n\n  }\n\nDoris {\n   fenodes="xxxx:8030"\n   database="gl_mint_dim"\n   table="dim_date"\n   user="root"\n   password="root"\n   batch_size=1000\n   doris.column_separator="\\t"\n   doris.columns="date_key,date_value,day_in_year,day_in_month"\n   }\n}\n')),(0,l.yg)("h4",{id:"start-command-1"},"Start command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"sh bin/start-waterdrop-spark.sh --master local[4] --deploy-mode client --config ./config/spark.conf\n")))}y.isMDXComponent=!0}}]);