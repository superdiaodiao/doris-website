"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88946],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(a),y=r,u=g["".concat(d,".").concat(y)]||g[y]||m[y]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},76034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const i={title:"DBT Doris Adapter",language:"en"},l=void 0,o={unversionedId:"ecosystem/dbt-doris-adapter",id:"ecosystem/dbt-doris-adapter",title:"DBT Doris Adapter",description:"\x3c!--",source:"@site/docs/ecosystem/dbt-doris-adapter.md",sourceDirName:"ecosystem",slug:"/ecosystem/dbt-doris-adapter",permalink:"/docs/dev/ecosystem/dbt-doris-adapter",draft:!1,tags:[],version:"current",frontMatter:{title:"DBT Doris Adapter",language:"en"},sidebar:"docs",previous:{title:"Hive Bitmap UDF",permalink:"/docs/dev/ecosystem/hive-bitmap-udf"},next:{title:"Contribute UDF",permalink:"/docs/dev/ecosystem/udf/contribute-udf"}},d={},p=[{value:"version",id:"version",level:2},{value:"dbt-doris adapter Instructions",id:"dbt-doris-adapter-instructions",level:2},{value:"dbt-doris adapter install",id:"dbt-doris-adapter-install",level:3},{value:"dbt-doris adapter project init",id:"dbt-doris-adapter-project-init",level:3},{value:"dbt-doris adapter run",id:"dbt-doris-adapter-run",level:3},{value:"dbt-doris adapter Materialization",id:"dbt-doris-adapter-materialization",level:3},{value:"View",id:"view",level:4},{value:"Table",id:"table",level:4},{value:"Incremental",id:"incremental",level:4},{value:"dbt-doris adapter seed",id:"dbt-doris-adapter-seed",level:3}],s={toc:p},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"dbt-doris-adapter"},"DBT Doris Adapter"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/introduction"},"DBT(Data Build Tool)"),' is a component that focuses on doing T (Transform) in ELT (extraction, loading, transformation) - the "transformation data" link\nThe ',(0,r.yg)("inlineCode",{parentName:"p"},"dbt-doris")," adapter is developed based on ",(0,r.yg)("inlineCode",{parentName:"p"},"dbt-core")," 1.5.0 and relies on the ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql-connector-python")," driver to convert data to doris."),(0,r.yg)("p",null,"git\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/extension/dbt-doris"},"https://github.com/apache/doris/tree/master/extension/dbt-doris")),(0,r.yg)("h2",{id:"version"},"version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"doris"),(0,r.yg)("th",{parentName:"tr",align:null},"python"),(0,r.yg)("th",{parentName:"tr",align:null},"dbt-core"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">=1.2.5"),(0,r.yg)("td",{parentName:"tr",align:null},">=3.8,<=3.10"),(0,r.yg)("td",{parentName:"tr",align:null},">=1.5.0")))),(0,r.yg)("h2",{id:"dbt-doris-adapter-instructions"},"dbt-doris adapter Instructions"),(0,r.yg)("h3",{id:"dbt-doris-adapter-install"},"dbt-doris adapter install"),(0,r.yg)("p",null,"use pip install\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install dbt-doris\n")),(0,r.yg)("p",null,"check version\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"dbt --version\n")),(0,r.yg)("p",null,"if command not found: dbt\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"ln -s /usr/local/python3/bin/dbt /usr/bin/dbt\n")),(0,r.yg)("h3",{id:"dbt-doris-adapter-project-init"},"dbt-doris adapter project init"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"dbt init \n")),(0,r.yg)("p",null,"Users need to prepare the following information to init dbt project"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"default"),(0,r.yg)("th",{parentName:"tr",align:null},"meaning"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"project"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"project name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Enter the corresponding number to select the adapter \uff08\u9009\u62e9doris\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"doris host")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"9030"),(0,r.yg)("td",{parentName:"tr",align:null},"doris MySQL Protocol Port")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"In dbt-doris, it is equivalent to database, Database name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"doris username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"doris password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"threads"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Parallelism in dbt-doris (setting a parallelism that does not match the cluster capability will increase the risk of dbt running failure)")))),(0,r.yg)("h3",{id:"dbt-doris-adapter-run"},"dbt-doris adapter run"),(0,r.yg)("p",null,"For dbt run documentation, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/get-started/run-your-dbt-projects"},"here"),".\nGo to the project directory and execute the default dbt model:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"dbt run \n")),(0,r.yg)("p",null,"model\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"my_first_dbt_model"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"my_second_dbt_model")),(0,r.yg)("p",null,"They are materialized ",(0,r.yg)("inlineCode",{parentName:"p"},"table")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"view")," respectively.\nthen login to doris to view the data results and table creation statements of ",(0,r.yg)("inlineCode",{parentName:"p"},"my_first_dbt_model")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"my_second_dbt_model"),"."),(0,r.yg)("h3",{id:"dbt-doris-adapter-materialization"},"dbt-doris adapter Materialization"),(0,r.yg)("p",null,"dbt-doris Materialization support three:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"view"),(0,r.yg)("li",{parentName:"ol"},"table"),(0,r.yg)("li",{parentName:"ol"},"incremental")),(0,r.yg)("h4",{id:"view"},"View"),(0,r.yg)("p",null,"Using ",(0,r.yg)("inlineCode",{parentName:"p"},"view")," as the materialization, Models will be rebuilt as views each time they are run through the create view as statement. (By default, the materialization method of dbt is view)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Advantages: No extra data is stored, and views on top of the source data will always contain the latest records.\nDisadvantages: View queries that perform large transformations or are nested on top of other views are slow.\nRecommendation: Usually start with the view of the model and only change to another materialization if there are performance issues. Views are best suited for models that do not undergo major transformations, such as renaming, column changes.\n")),(0,r.yg)("p",null,"config\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"models:\n  <resource-path>:\n    +materialized: view\n")),(0,r.yg)("p",null,"Or write in the model file"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jinja"},'{{ config(materialized = "view") }}\n')),(0,r.yg)("h4",{id:"table"},"Table"),(0,r.yg)("p",null,"When using the ",(0,r.yg)("inlineCode",{parentName:"p"},"table")," materialization mode, your model is rebuilt as a table at each run with a ",(0,r.yg)("inlineCode",{parentName:"p"},"create table as select")," statement.\nFor the tablet materialization of dbt, dbt-doris uses the following steps to ensure the atomicity of data changes:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"first create a temporary table: ",(0,r.yg)("inlineCode",{parentName:"li"},"create table this_table_temp as {{ model sql}}"),"."),(0,r.yg)("li",{parentName:"ol"},"Determine whether ",(0,r.yg)("inlineCode",{parentName:"li"},"this_table")," does not exist, that is, it is created for the first time, execute ",(0,r.yg)("inlineCode",{parentName:"li"},"rename"),", and change the temporary table to the final table."),(0,r.yg)("li",{parentName:"ol"},"if already exists, then ",(0,r.yg)("inlineCode",{parentName:"li"},"alter table this_table REPLACE WITH TABLE this_table_temp PROPERTIES('swap' = 'False')"),"\uff0cThis operation can exchange the table name and delete the ",(0,r.yg)("inlineCode",{parentName:"li"},"this_table_temp")," temporary table\uff0c",(0,r.yg)("a",{parentName:"li",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE"},"this")," guarantees the atomicity of this operation through the transaction mechanism of the Doris.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Advantages: table query speed will be faster than view.\nDisadvantages: The table takes a long time to build or rebuild, additional data will be stored, and incremental data synchronization cannot be performed.\nRecommendation: It is recommended to use the table materialization method for models queried by BI tools or models with slow operations such as downstream queries and conversions.\n")),(0,r.yg)("p",null,"config:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"models:\n  <resource-path>:\n    +materialized: table\n    +duplicate_key: [ <column-name>, ... ],\n    +replication_num: int,\n    +partition_by: [ <column-name>, ... ],\n    +partition_type: <engine-type>,\n    +partition_by_init: [<pertition-init>, ... ]\n    +distributed_by: [ <column-name>, ... ],\n    +buckets: int | 'auto',\n    +properties: {<key>:<value>,...}\n")),(0,r.yg)("p",null,"Or write in the model file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jinja"},'{{ config(\n    materialized = "table",\n    duplicate_key = [ "<column-name>", ... ],\n    replication_num = "<int>"\n    partition_by = [ "<column-name>", ... ],\n    partition_type = "<engine-type>",\n    partition_by_init = ["<pertition-init>", ... ]\n    distributed_by = [ "<column-name>", ... ],\n    buckets = "<int>" | "auto",\n    properties = {"<key>":"<value>",...}\n      ...\n    ]\n) }}\n')),(0,r.yg)("p",null,"The details of the above configuration items are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"item"),(0,r.yg)("th",{parentName:"tr",align:null},"description"),(0,r.yg)("th",{parentName:"tr",align:null},"Required?"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"materialized")),(0,r.yg)("td",{parentName:"tr",align:null},"The materialized form of the table (Doris Duplicate table)"),(0,r.yg)("td",{parentName:"tr",align:null},"Required")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"duplicate_key")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Duplicate key"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"replication_num")),(0,r.yg)("td",{parentName:"tr",align:null},"Number of table replicas"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_by")),(0,r.yg)("td",{parentName:"tr",align:null},"Table partition column"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_type")),(0,r.yg)("td",{parentName:"tr",align:null},"Table partition type, ",(0,r.yg)("inlineCode",{parentName:"td"},"range")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"list"),".(default: ",(0,r.yg)("inlineCode",{parentName:"td"},"RANGE"),")"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_by_init")),(0,r.yg)("td",{parentName:"tr",align:null},"Initialized table partitions"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"distributed_by")),(0,r.yg)("td",{parentName:"tr",align:null},"Table distributed column"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buckets")),(0,r.yg)("td",{parentName:"tr",align:null},"Bucket size"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"properties")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris table properties"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")))),(0,r.yg)("h4",{id:"incremental"},"Incremental"),(0,r.yg)("p",null,"Based on the incremental model results of the last run of dbt, records are incrementally inserted or updated into the table.\nThere are two ways to realize the increment of doris. ",(0,r.yg)("inlineCode",{parentName:"p"},"incremental_strategy")," has two incremental strategies:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"insert_overwrite"),": Depends on the doris ",(0,r.yg)("inlineCode",{parentName:"li"},"unique")," model. If there is an incremental requirement, specify the materialization as incremental when initializing the data of the model, and aggregate by specifying the aggregation column to achieve incremental data coverage."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"append"),": Depends on the doris ",(0,r.yg)("inlineCode",{parentName:"li"},"duplicate")," model, it only appends incremental data and does not involve modifying any historical data. So no need to specify unique_key.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Advantages: Significantly reduces build time by only converting new records.\nDisadvantages: incremental mode requires additional configuration, which is an advanced usage of dbt, and requires the support of complex scenarios and the adaptation of corresponding components.\nRecommendation: The incremental model is best for event-based scenarios or when dbt runs become too slow\n")),(0,r.yg)("p",null,"config:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"models:\n  <resource-path>:\n    +materialized: incremental\n    +incremental_strategy: <strategy>\n    +unique_key: [ <column-name>, ... ],\n    +replication_num: int,\n    +partition_by: [ <column-name>, ... ],\n    +partition_type: <engine-type>,\n    +partition_by_init: [<pertition-init>, ... ]\n    +distributed_by: [ <column-name>, ... ],\n    +buckets: int | 'auto',\n    +properties: {<key>:<value>,...}\n")),(0,r.yg)("p",null,"Or write in the model file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jinja"},'{{ config(\n    materialized = "incremental",\n    incremental_strategy = "<strategy>"\n    unique_key = [ "<column-name>", ... ],\n    replication_num = "<int>"\n    partition_by = [ "<column-name>", ... ],\n    partition_type = "<engine-type>",\n    partition_by_init = ["<pertition-init>", ... ]\n    distributed_by = [ "<column-name>", ... ],\n    buckets = "<int>" | "auto",\n    properties = {"<key>":"<value>",...}\n      ...\n    ]\n) }}\n')),(0,r.yg)("p",null,"The details of the above configuration items are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"item"),(0,r.yg)("th",{parentName:"tr",align:null},"description"),(0,r.yg)("th",{parentName:"tr",align:null},"Required?"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"materialized")),(0,r.yg)("td",{parentName:"tr",align:null},"The materialized form of the table (Doris Duplicate/Unique table)"),(0,r.yg)("td",{parentName:"tr",align:null},"Required")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"incremental_strategy")),(0,r.yg)("td",{parentName:"tr",align:null},"Incremental_strategy"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"unique_key")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Unique key"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"replication_num")),(0,r.yg)("td",{parentName:"tr",align:null},"Number of table replicas"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_by")),(0,r.yg)("td",{parentName:"tr",align:null},"Table partition column"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_type")),(0,r.yg)("td",{parentName:"tr",align:null},"Table partition type, ",(0,r.yg)("inlineCode",{parentName:"td"},"range")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"list"),".(default: ",(0,r.yg)("inlineCode",{parentName:"td"},"RANGE"),")"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_by_init")),(0,r.yg)("td",{parentName:"tr",align:null},"Initialized table partitions"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"distributed_by")),(0,r.yg)("td",{parentName:"tr",align:null},"Table distributed column"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buckets")),(0,r.yg)("td",{parentName:"tr",align:null},"Bucket size"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"properties")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris table properties"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")))),(0,r.yg)("h3",{id:"dbt-doris-adapter-seed"},"dbt-doris adapter seed"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.getdbt.com/faqs/seeds/build-one-seed"},(0,r.yg)("inlineCode",{parentName:"a"},"seed"))," is a functional module used to load data files such as csv. It is a way to load files into the library and participate in model building, but there are the following precautions:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Seeds should not be used to load raw data (for example, large CSV exports from a production database)."),(0,r.yg)("li",{parentName:"ol"},"Since seeds are version controlled, they are best suited to files that contain business-specific logic, for example a list of country codes or user IDs of employees. "),(0,r.yg)("li",{parentName:"ol"},"Loading CSVs using dbt's seed functionality is not performant for large files. Consider using ",(0,r.yg)("inlineCode",{parentName:"li"},"streamload")," to load these CSVs into doris.")),(0,r.yg)("p",null,"Users can see the seeds directory under the dbt project directory, upload the csv file and seed configuration file in it and run"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"}," dbt seed --select seed_name\n")),(0,r.yg)("p",null,"Common seed configuration file writing method supports the definition of column types:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seeds:\n  seed_name: \n    config: \n      schema: demo_seed \n      full_refresh: true\n      replication_num: 1\n      column_types:\n        id: bigint\n        phone: varchar(32)\n        ip: varchar(15)\n        name: varchar(20)\n        cost: DecimalV3(19,10)\n")))}m.isMDXComponent=!0}}]);