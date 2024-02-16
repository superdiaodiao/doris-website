"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90711],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,g=d["".concat(s,".").concat(y)]||d[y]||u[y]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},64162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(58168),o=(n(96540),n(15680));const r={title:"Quick Start",language:"en"},i=void 0,l={unversionedId:"get-starting/quick-start",id:"version-2.0/get-starting/quick-start",title:"Quick Start",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/get-starting/quick-start.md",sourceDirName:"get-starting",slug:"/get-starting/quick-start",permalink:"/docs/get-starting/quick-start",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Quick Start",language:"en"},sidebar:"docs",next:{title:"What is Apache Doris",permalink:"/docs/get-starting/what-is-apache-doris"}},s={},c=[{value:"Download Doris",id:"download-doris",level:2},{value:"Configure Doris",id:"configure-doris",level:2},{value:"Configure FE",id:"configure-fe",level:3},{value:"Start FE",id:"start-fe",level:3},{value:"View FE operational status",id:"view-fe-operational-status",level:4},{value:"Connect FE",id:"connect-fe",level:4},{value:"Communicate with the server over an encrypted connection",id:"communicate-with-the-server-over-an-encrypted-connection",level:4},{value:"Stop FE",id:"stop-fe",level:4},{value:"Configure BE",id:"configure-be",level:3},{value:"Start BE",id:"start-be",level:3},{value:"Adding a BE node to a cluster",id:"adding-a-be-node-to-a-cluster",level:4},{value:"View BE operational status",id:"view-be-operational-status",level:4},{value:"Stop BE",id:"stop-be",level:4},{value:"Create table",id:"create-table",level:2},{value:"Query data",id:"query-data",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"quick-start"},"Quick Start"),(0,o.yg)("p",null,"Apache Doris is a high-performance, real-time analytic database based on the MPP architecture and is known for its extreme speed and ease of use. It takes only sub-second response times to return query results under massive amounts of data, and can support not only highly concurrent point query scenarios, but also high-throughput complex analytic scenarios. This brief guide will show you how to download the latest stable version of Doris, install and run it on a single node, including creating databases, data tables, importing data and queries, etc."),(0,o.yg)("h2",{id:"download-doris"},"Download Doris"),(0,o.yg)("p",null,"Doris runs on a Linux environment, CentOS 7.x or Ubuntu 16.04 or higher is recommended, and you need to have a Java runtime environment installed (the JDK version required is 8). To check the version of Java you have installed, run the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"java -version\n")),(0,o.yg)("p",null,"Next, ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/download"},"download the latest binary version of Doris")," and unzip it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"tar xf apache-doris-x.x.x.tar.xz\n")),(0,o.yg)("h2",{id:"configure-doris"},"Configure Doris"),(0,o.yg)("h3",{id:"configure-fe"},"Configure FE"),(0,o.yg)("p",null,"Go to the ",(0,o.yg)("inlineCode",{parentName:"p"},"apache-doris-x.x.x/fe")," directory"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cd apache-doris-x.x.x/fe\n")),(0,o.yg)("p",null,"Modify the FE configuration file ",(0,o.yg)("inlineCode",{parentName:"p"},"conf/fe.conf"),", here we mainly modify two parameters: ",(0,o.yg)("inlineCode",{parentName:"p"},"priority_networks")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"meta_dir"),", if you need more optimized configuration, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/admin-manual/config/fe-config"},"FE parameter configuration")," for instructions on how to adjust them."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"add priority_networks parameter")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"priority_networks=172.23.16.0/24\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: "),(0,o.yg)("p",{parentName:"blockquote"},"This parameter we have to configure during installation, especially when a machine has multiple IP addresses, we have to specify a unique IP address for FE.")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Adding a metadata directory")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"meta_dir=/path/your/doris-meta\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: "),(0,o.yg)("p",{parentName:"blockquote"},"Here you can leave it unconfigured, the default is doris-meta in your Doris FE installation directory."),(0,o.yg)("p",{parentName:"blockquote"},"To configure the metadata directory separately, you need to create the directory you specify in advance")),(0,o.yg)("h3",{id:"start-fe"},"Start FE"),(0,o.yg)("p",null,"Execute the following command in the FE installation directory to complete the FE startup."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./bin/start_fe.sh --daemon\n")),(0,o.yg)("h4",{id:"view-fe-operational-status"},"View FE operational status"),(0,o.yg)("p",null,"You can check if Doris started successfully with the following command"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"curl http://127.0.0.1:8030/api/bootstrap\n")),(0,o.yg)("p",null,"Here the IP and port are the IP and http_port of FE (default 8030), if you are executing in FE node, just run the above command directly."),(0,o.yg)("p",null,"If the return result has the word ",(0,o.yg)("inlineCode",{parentName:"p"},'"msg": "success"'),", then the startup was successful."),(0,o.yg)("p",null,"You can also check this through the web UI provided by Doris FE by entering the address in your browser"),(0,o.yg)("p",null,"http:// fe_ip:8030"),(0,o.yg)("p",null,"You can see the following screen, which indicates that the FE has started successfully"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"image-20220822091951739",src:n(3616).A,width:"3022",height:"1666"})),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: "),(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},"Here we use the Doris built-in default user, root, to log in with an empty password."),(0,o.yg)("li",{parentName:"ol"},"This is an administrative interface for Doris, and only users with administrative privileges can log in."))),(0,o.yg)("h4",{id:"connect-fe"},"Connect FE"),(0,o.yg)("p",null,"We will connect to Doris FE via MySQL client below, download the installation-free ",(0,o.yg)("a",{parentName:"p",href:"https://doris-build-hk.oss-cn-hongkong.aliyuncs.com/mysql-client/mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz"},"MySQL client")),(0,o.yg)("p",null,"Unzip the MySQL client you just downloaded and you can find the ",(0,o.yg)("inlineCode",{parentName:"p"},"mysql")," command line tool in the ",(0,o.yg)("inlineCode",{parentName:"p"},"bin/")," directory. Then execute the following command to connect to Doris."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql -uroot -P9030 -h127.0.0.1\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: "),(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},"The root user used here is the default user built into doris, and is also the super administrator user, see ",(0,o.yg)("a",{parentName:"li",href:"/docs/admin-manual/privilege-ldap/user-privilege"},"Rights Management")),(0,o.yg)("li",{parentName:"ol"},"-P: Here is our query port to connect to Doris, the default port is 9030, which corresponds to ",(0,o.yg)("inlineCode",{parentName:"li"},"query_port")," in fe.conf"),(0,o.yg)("li",{parentName:"ol"},"-h: Here is the IP address of the FE we are connecting to, if your client and FE are installed on the same node you can use 127.0.0.1"))),(0,o.yg)("p",null,"Execute the following command to view the FE running status"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"show frontends\\G;\n")),(0,o.yg)("p",null,"You can then see a result similar to the following."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show frontends\\G;\n*************************** 1. row ***************************\n             Name: 172.21.32.5_9010_1660549353220\n               IP: 172.21.32.5\n      EditLogPort: 9010\n         HttpPort: 8030\n        QueryPort: 9030\n          RpcPort: 9020\nArrowFlightSqlPort: 9040\n             Role: FOLLOWER\n         IsMaster: true\n        ClusterId: 1685821635\n             Join: true\n            Alive: true\nReplayedJournalId: 49292\n    LastHeartbeat: 2022-08-17 13:00:45\n         IsHelper: true\n           ErrMsg:\n          Version: 1.1.2-rc03-ca55ac2\n CurrentConnected: Yes\n1 row in set (0.03 sec)\n")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"If the IsMaster, Join and Alive columns are true, the node is normal.")),(0,o.yg)("h4",{id:"communicate-with-the-server-over-an-encrypted-connection"},"Communicate with the server over an encrypted connection"),(0,o.yg)("p",null,"Doris supports SSL-based encrypted connections. It currently supports TLS1.2 and TLS1.3 protocols. Doris' SSL mode can be enabled through the following configuration:\nModify the FE configuration file ",(0,o.yg)("inlineCode",{parentName:"p"},"conf/fe.conf")," and add ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_ssl = true"),"."),(0,o.yg)("p",null,"Next, connect to Doris through ",(0,o.yg)("inlineCode",{parentName:"p"},"mysql")," client, mysql supports five SSL modes:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"mysql -uroot -P9030 -h127.0.0.1")," is the same as ",(0,o.yg)("inlineCode",{parentName:"p"},"mysql --ssl-mode=PREFERRED -uroot -P9030 -h127.0.0.1"),", both try to establish an SSL encrypted connection at the beginning, if it fails , a normal connection is attempted.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"mysql --ssl-mode=DISABLE -uroot -P9030 -h127.0.0.1"),", do not use SSL encrypted connection, use normal connection directly.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"mysql --ssl-mode=REQUIRED -uroot -P9030 -h127.0.0.1"),", force the use of SSL encrypted connections."))),(0,o.yg)("p",null,"4.",(0,o.yg)("inlineCode",{parentName:"p"},"mysql --ssl-mode=VERIFY_CA --ssl-ca=ca.pem -uroot -P9030 -h127.0.0.1"),", force the use of SSL encrypted connection and verify the validity of the server's identity by specifying the CA certificate\u3002"),(0,o.yg)("p",null,"5.",(0,o.yg)("inlineCode",{parentName:"p"},"mysql --ssl-mode=VERIFY_CA --ssl-ca=ca.pem --ssl-cert=client-cert.pem --ssl-key=client-key.pem -uroot -P9030 -h127.0.0.1"),", force the use of SSL encrypted connection, two-way ssl\u3002"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note:\n",(0,o.yg)("inlineCode",{parentName:"p"},"--ssl-mode")," parameter is introduced by mysql5.7.11 version, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-security.html"},"here")," for mysql client version lower than this version\u3002")),(0,o.yg)("p",null,"Doris needs a key certificate file to verify the SSL encrypted connection. The default key certificate file is located at ",(0,o.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/"),". For the generation of the key certificate file, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/admin-manual/certificate"},"Key Certificate Configuration"),"\u3002"),(0,o.yg)("h4",{id:"stop-fe"},"Stop FE"),(0,o.yg)("p",null,"The stopping of Doris FE can be done with the following command"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./bin/stop_fe.sh\n")),(0,o.yg)("h3",{id:"configure-be"},"Configure BE"),(0,o.yg)("p",null,"Go to the ",(0,o.yg)("inlineCode",{parentName:"p"},"apache-doris-x.x.x/be")," directory"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cd apache-doris-x.x.x/be\n")),(0,o.yg)("p",null,"Modify the BE configuration file ",(0,o.yg)("inlineCode",{parentName:"p"},"conf/be.conf"),", here we mainly modify two parameters: ",(0,o.yg)("inlineCode",{parentName:"p"},"priority_networks'")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"storage_root"),", if you need more optimized configuration, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/admin-manual/config/be-config"},"BE parameter configuration")," instructions to make adjustments."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Add priority_networks parameter")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"priority_networks=172.23.16.0/24\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: "),(0,o.yg)("p",{parentName:"blockquote"},"This parameter we have to configure during installation, especially when a machine has multiple IP addresses, we have to assign a unique IP address to the BE.")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Configure the BE data storage directory")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"storage_root_path=/path/your/data_dir\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Notes."),(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},"The default directory is in the storage directory of the BE installation directory."),(0,o.yg)("li",{parentName:"ol"},"The storage directory for BE configuration must be created first"))),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set JAVA_HOME environment variable"),(0,o.yg)("version",{since:"1.2.0"}),"Java UDF are supported since version 1.2, so BE are dependent on the Java environment. It is necessary to set the `JAVA_HOME` environment variable before starting. You can also add `export JAVA_HOME=your_java_home_path` to the first line of the `start_be.sh` startup script to set the variable."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install Java UDF functions "),(0,o.yg)("version",{since:"1.2.0"},"Install Java UDF functions"),"Because Java UDF functions are supported from version 1.2, you need to download the JAR package of Java UDF functions from the official website and put them in the lib directory of BE, otherwise it may fail to start.")),(0,o.yg)("h3",{id:"start-be"},"Start BE"),(0,o.yg)("p",null,"Execute the following command in the BE installation directory to complete the BE startup."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./bin/start_be.sh --daemon\n")),(0,o.yg)("h4",{id:"adding-a-be-node-to-a-cluster"},"Adding a BE node to a cluster"),(0,o.yg)("p",null,"Connect to FE via MySQL client and execute the following SQL to add the BE to the cluster"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD BACKEND "be_host_ip:heartbeat_service_port";\n')),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"be_host_ip: Here is the IP address of your BE, match with ",(0,o.yg)("inlineCode",{parentName:"li"},"priority_networks")," in ",(0,o.yg)("inlineCode",{parentName:"li"},"be.conf"),"."),(0,o.yg)("li",{parentName:"ol"},"heartbeat_service_port: This is the heartbeat upload port of your BE, match with ",(0,o.yg)("inlineCode",{parentName:"li"},"heartbeat_service_port")," in ",(0,o.yg)("inlineCode",{parentName:"li"},"be.conf"),", default is ",(0,o.yg)("inlineCode",{parentName:"li"},"9050"),".")),(0,o.yg)("h4",{id:"view-be-operational-status"},"View BE operational status"),(0,o.yg)("p",null,"You can check the running status of BE by executing the following command at the MySQL command line."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW BACKENDS\\G\uff1b\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW BACKENDS\\G;\n*************************** 1. row ***************************\n            BackendId: 10003\n              Cluster: default_cluster\n                   IP: 172.21.32.5\n        HeartbeatPort: 9050\n               BePort: 9060\n             HttpPort: 8040\n             BrpcPort: 8060\n        LastStartTime: 2022-08-16 15:31:37\n        LastHeartbeat: 2022-08-17 13:33:17\n                Alive: true\n SystemDecommissioned: false\nClusterDecommissioned: false\n            TabletNum: 170\n     DataUsedCapacity: 985.787 KB\n        AvailCapacity: 782.729 GB\n        TotalCapacity: 984.180 GB\n              UsedPct: 20.47 %\n       MaxDiskUsedPct: 20.47 %\n                  Tag: {"location" : "default"}\n               ErrMsg:\n              Version: 1.1.2-rc03-ca55ac2\n               Status: {"lastSuccessReportTabletsTime":"2022-08-17 13:33:05","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\n1 row in set (0.01 sec)\n')),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Alive : true means the node is running normally")),(0,o.yg)("h4",{id:"stop-be"},"Stop BE"),(0,o.yg)("p",null,"The stopping of Doris BE can be done with the following command"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./bin/stop_be.sh\n")),(0,o.yg)("h2",{id:"create-table"},"Create table"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Create database")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"create database demo;\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Create table")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'use demo;\n\nCREATE TABLE IF NOT EXISTS demo.example_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "user id",\n    `date` DATE NOT NULL COMMENT "",\n    `city` VARCHAR(20) COMMENT "",\n    `age` SMALLINT COMMENT "",\n    `sex` TINYINT COMMENT "",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT ""\n)\nAGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n')),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Example data")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"10000,2017-10-01,beijing,20,0,2017-10-01 06:00:00,20,10,10\n10006,2017-10-01,beijing,20,0,2017-10-01 07:00:00,15,2,2\n10001,2017-10-01,beijing,30,1,2017-10-01 17:05:45,2,22,22\n10002,2017-10-02,shanghai,20,1,2017-10-02 12:59:12,200,5,5\n10003,2017-10-02,guangzhou,32,0,2017-10-02 11:20:00,30,11,11\n10004,2017-10-01,shenzhen,35,0,2017-10-01 10:00:15,100,3,3\n10004,2017-10-03,shenzhen,35,0,2017-10-03 10:20:22,11,6,6\n")),(0,o.yg)("p",null,"Save the above data into ",(0,o.yg)("inlineCode",{parentName:"p"},"test.csv")," file."),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Import data")),(0,o.yg)("p",null,"Here we import the data saved to the file above into the table we just created via Stream load\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'curl  --location-trusted -u root: -T test.csv -H "column_separator:," http://127.0.0.1:8030/api/demo/example_tbl/_stream_load\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"-T test.csv : This is the data file we just saved, if the path is different, please specify the full path"),(0,o.yg)("li",{parentName:"ul"},"-u root: Here is the user name and password, we use the default user root, the password is empty"),(0,o.yg)("li",{parentName:"ul"},"127.0.0.1:8030 : is the ip and http_port of fe, respectively")),(0,o.yg)("p",null,"After successful execution we can see the following return message"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "TxnId": 30303,\n    "Label": "8690a5c7-a493-48fc-b274-1bb7cd656f25",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 7,\n    "NumberLoadedRows": 7,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 399,\n    "LoadTimeMs": 381,\n    "BeginTxnTimeMs": 3,\n    "StreamLoadPutTimeMs": 5,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 191,\n    "CommitAndPublishTimeMs": 175\n}\n')),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"NumberLoadedRows")," indicates the number of data records that have been imported")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"NumberTotalRows")," indicates the total amount of data to be imported")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"Status")," :Success means the import was successful"))),(0,o.yg)("p",null,"Here we have finished importing the data, and we can now query and analyze the data according to our own needs."),(0,o.yg)("h2",{id:"query-data"},"Query data"),(0,o.yg)("p",null,"We have finished building tables and importing data above, so we can experience Doris' ability to quickly query and analyze data."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from example_tbl;\n+---------+------------+-----------+------+------+---------------------+------+----------------+----------------+\n| user_id | date       | city      | age  | sex  | last_visit_date     | cost | max_dwell_time | min_dwell_time |\n+---------+------------+-----------+------+------+---------------------+------+----------------+----------------+\n| 10000   | 2017-10-01 | beijing   |   20 |    0 | 2017-10-01 06:00:00 |   20 |             10 |             10 |\n| 10001   | 2017-10-01 | beijing   |   30 |    1 | 2017-10-01 17:05:45 |    2 |             22 |             22 |\n| 10002   | 2017-10-02 | shanghai  |   20 |    1 | 2017-10-02 12:59:12 |  200 |              5 |              5 |\n| 10003   | 2017-10-02 | guangzhou |   32 |    0 | 2017-10-02 11:20:00 |   30 |             11 |             11 |\n| 10004   | 2017-10-01 | shenzhen  |   35 |    0 | 2017-10-01 10:00:15 |  100 |              3 |              3 |\n| 10004   | 2017-10-03 | shenzhen  |   35 |    0 | 2017-10-03 10:20:22 |   11 |              6 |              6 |\n| 10006   | 2017-10-01 | beijing   |   20 |    0 | 2017-10-01 07:00:00 |   15 |              2 |              2 |\n+---------+------------+-----------+------+------+---------------------+------+----------------+----------------+\n7 rows in set (0.01 sec)\n\nmysql> select * from example_tbl where city='shanghai';\n+---------+------------+----------+------+------+---------------------+------+----------------+----------------+\n| user_id | date       | city     | age  | sex  | last_visit_date     | cost | max_dwell_time | min_dwell_time |\n+---------+------------+----------+------+------+---------------------+------+----------------+----------------+\n| 10002   | 2017-10-02 | shanghai |   20 |    1 | 2017-10-02 12:59:12 |  200 |              5 |              5 |\n+---------+------------+----------+------+------+---------------------+------+----------------+----------------+\n1 row in set (0.00 sec)\n\nmysql> select city, sum(cost) as total_cost from example_tbl group by city;\n+-----------+------------+\n| city      | total_cost |\n+-----------+------------+\n| beijing   |         37 |\n| shenzhen  |        111 |\n| guangzhou |         30 |\n| shanghai  |        200 |\n+-----------+------------+\n4 rows in set (0.00 sec)\n")),(0,o.yg)("p",null,"This is the end of our entire quick start. We have experienced the complete Doris operation process from Doris installation and deployment, start/stop, creation of library tables, data import and query, let's start our Doris usage journey."))}u.isMDXComponent=!0},3616:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/image-20220822091951739-fa716b28e6eb8b251098011657de50db.png"}}]);