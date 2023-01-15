"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[92541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Broker",language:"en"},i=void 0,s={unversionedId:"administrator-guide/broker",id:"version-0.15/administrator-guide/broker",title:"Broker",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/broker.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/broker",permalink:"/docs/0.15/administrator-guide/broker",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Broker",language:"en"},sidebar:"docs",previous:{title:"Backup and Recovery",permalink:"/docs/0.15/administrator-guide/backup-restore"},next:{title:"Colocation Join",permalink:"/docs/0.15/administrator-guide/colocation-join"}},p={},l=[{value:"Supported Storage System",id:"supported-storage-system",level:2},{value:"Function provided by Broker",id:"function-provided-by-broker",level:2},{value:"Broker Information",id:"broker-information",level:2},{value:"Broker Name",id:"broker-name",level:3},{value:"Certification Information",id:"certification-information",level:3},{value:"Community HDFS",id:"community-hdfs",level:4},{value:"Baidu Object Storage BOS",id:"baidu-object-storage-bos",level:4},{value:"Baidu HDFS/AFS",id:"baidu-hdfsafs",level:4}],d={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"broker"},"Broker"),(0,a.kt)("p",null,"Broker is an optional process in the Doris cluster. It is mainly used to support Doris to read and write files or directories on remote storage, such as HDFS, BOS, and AFS."),(0,a.kt)("p",null,"Broker provides services through an RPC service port. It is a stateless JVM process that is responsible for encapsulating some POSIX-like file operations for read and write operations on remote storage, such as open, pred, pwrite, and so on.\nIn addition, the Broker does not record any other information, so the connection information, file information, permission information, and so on stored remotely need to be passed to the Broker process in the RPC call through parameters in order for the Broker to read and write files correctly ."),(0,a.kt)("p",null,"Broker only acts as a data channel and does not participate in any calculations, so it takes up less memory. Usually one or more Broker processes are deployed in a Doris system. And the same type of Broker will form a group and set a ",(0,a.kt)("strong",{parentName:"p"}," Broker name "),"."),(0,a.kt)("p",null,"Broker's position in the Doris system architecture is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+----+   +----+\n| FE |   | BE |\n+-^--+   +--^-+\n  |         |\n  |         |\n+-v---------v-+\n|   Broker    |\n+------^------+\n       |\n       |\n+------v------+\n|HDFS/BOS/AFS |\n+-------------+\n")),(0,a.kt)("p",null,"This document mainly introduces the parameters that Broker needs when accessing different remote storages, such as connection information,\nauthorization information, and so on."),(0,a.kt)("h2",{id:"supported-storage-system"},"Supported Storage System"),(0,a.kt)("p",null,"Different types of brokers support different storage systems."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Community HDFS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support simple authentication access"),(0,a.kt)("li",{parentName:"ul"},"Support kerberos authentication access"),(0,a.kt)("li",{parentName:"ul"},"Support HDFS HA mode access"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Baidu HDFS / AFS (not supported by open source version)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support UGI simple authentication access"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Baidu Object Storage BOS (not supported by open source version)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support AK / SK authentication access")))),(0,a.kt)("h2",{id:"function-provided-by-broker"},"Function provided by Broker"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Broker Load"),(0,a.kt)("p",{parentName:"li"},"The Broker Load function reads the file data on the remote storage through the Broker process and imports it into Doris. Examples are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'LOAD LABEL example_db.label6\n(\n    DATA INFILE("bos://my_bucket/input/file")\n    INTO TABLE `my_table`\n)\nWITH BROKER "broker_name"\n(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyy"\n)\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"WITH BROKER")," and following Property Map are used to provide Broker's related information.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Export"),(0,a.kt)("p",{parentName:"li"},"The Export function export the data stored in Doris to a file stored in remote storage in text format through Broker process. Examples are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'EXPORT TABLE testTbl \nTO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy"\n);\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"WITH BROKER")," and following Property Map are used to provide Broker's related information.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create Repository"),(0,a.kt)("p",{parentName:"li"},' When users need to use the backup and restore function, they need to first create a "repository" with the ',(0,a.kt)("inlineCode",{parentName:"p"},"CREATE REPOSITORY")," command,and the broker metadata and related information are recorded in the warehouse metadata.\nSubsequent backup and restore operations will use Broker to back up data to this warehouse, or read data from this warehouse to restore to Doris. Examples are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'CREATE REPOSITORY `bos_repo`\nWITH BROKER `broker_name`\nON LOCATION "bos://doris_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyy"\n);\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"WITH BROKER")," and following Property Map are used to provide Broker's related information.\n"))),(0,a.kt)("h2",{id:"broker-information"},"Broker Information"),(0,a.kt)("p",null,"Broker information includes two parts: ",(0,a.kt)("strong",{parentName:"p"}," Broker name ")," and ",(0,a.kt)("strong",{parentName:"p"}," Certification information "),". The general syntax is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'WITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy",\n    "other_prop" = "prop_value",\n    ...\n);\n')),(0,a.kt)("h3",{id:"broker-name"},"Broker Name"),(0,a.kt)("p",null,"Usually the user needs to specify an existing Broker Name through the ",(0,a.kt)("inlineCode",{parentName:"p"},'WITH BROKER" broker_name "')," clause in the operation command.\nBroker Name is a name that the user specifies when adding a Broker process through the ALTER SYSTEM ADD BROKER command.\nA name usually corresponds to one or more broker processes. Doris selects available broker processes based on the name.\nYou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW BROKER")," command to view the Brokers that currently exist in the cluster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Broker Name is just a user-defined name and does not represent the type of Broker.")),(0,a.kt)("h3",{id:"certification-information"},"Certification Information"),(0,a.kt)("p",null,"Different broker types and different access methods need to provide different authentication information.\nAuthentication information is usually provided as a Key-Value in the Property Map after ",(0,a.kt)("inlineCode",{parentName:"p"},'WITH BROKER" broker_name "'),"."),(0,a.kt)("h4",{id:"community-hdfs"},"Community HDFS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Simple Authentication"),(0,a.kt)("p",{parentName:"li"},"Simple authentication means that Hadoop configures ",(0,a.kt)("inlineCode",{parentName:"p"},"hadoop.security.authentication")," to",(0,a.kt)("inlineCode",{parentName:"p"}," simple"),"."),(0,a.kt)("p",{parentName:"li"},"Use system users to access HDFS. Or add in the environment variable started by Broker: ",(0,a.kt)("inlineCode",{parentName:"p"},"HADOOP_USER_NAME"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "username" = "user",\n    "password" = ""\n);\n')),(0,a.kt)("p",{parentName:"li"},"Just leave the password blank.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kerberos Authentication"),(0,a.kt)("p",{parentName:"li"},"The authentication method needs to provide the following information::"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hadoop.security.authentication"),": Specify the authentication method as kerberos."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kerberos_principal"),": Specify the principal of kerberos."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kerberos_keytab"),": Specify the path to the keytab file for kerberos. The file must be an absolute path to a file on the server where the broker process is located. And can be accessed by the Broker process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kerberos_keytab_content"),": Specify the content of the keytab file in kerberos after base64 encoding. You can choose one of these with ",(0,a.kt)("inlineCode",{parentName:"li"},"kerberos_keytab")," configuration.")),(0,a.kt)("p",{parentName:"li"},"Examples are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab" = "/home/doris/my.keytab"\n)\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab_content" = "ASDOWHDLAWIDJHWLDKSALDJSDIWALD"\n)\n')),(0,a.kt)("p",{parentName:"li"},"If Kerberos authentication is used, the ",(0,a.kt)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html"},"krb5.conf")," file is required when deploying the Broker process.\nThe krb5.conf file contains Kerberos configuration information, Normally, you should install your krb5.conf file in the directory /etc. You can override the default location by setting the environment variable KRB5_CONFIG.\nAn example of the contents of the krb5.conf file is as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[libdefaults]\n    default_realm = DORIS.HADOOP\n    default_tkt_enctypes = des3-hmac-sha1 des-cbc-crc\n    default_tgs_enctypes = des3-hmac-sha1 des-cbc-crc\n    dns_lookup_kdc = true\n    dns_lookup_realm = false\n\n[realms]\n    DORIS.HADOOP = {\n        kdc = kerberos-doris.hadoop.service:7005\n    }\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"HDFS HA Mode"),(0,a.kt)("p",{parentName:"li"}," This configuration is used to access HDFS clusters deployed in HA mode."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dfs.nameservices"),': Specify the name of the hdfs service, custom, such as "dfs.nameservices" = "my_ha".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dfs.ha.namenodes.xxx"),":  Custom namenode names. Multiple names are separated by commas, where xxx is the custom name in ",(0,a.kt)("inlineCode",{parentName:"p"},"dfs.nameservices"),', such as" dfs.ha.namenodes.my_ha "=" my_nn ".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dfs.namenode.rpc-address.xxx.nn"),": Specify the rpc address information of namenode, Where nn represents the name of the namenode configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"dfs.ha.namenodes.xxx"),', such as: "dfs.namenode.rpc-address.my_ha.my_nn" = "host:port".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dfs.client.failover.proxy.provider"),": Specify the provider for the client to connect to the namenode. The default is: org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider."),(0,a.kt)("p",{parentName:"li"}," Examples are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')),(0,a.kt)("p",{parentName:"li"}," The HA mode can be combined with the previous two authentication methods for cluster access. If you access HA HDFS with simple authentication:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "username"="user",\n    "password"="passwd",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')),(0,a.kt)("p",{parentName:"li"},"The configuration for accessing the HDFS cluster can be written to the hdfs-site.xml file. When users use the Broker process to read data from the HDFS cluster, they only need to fill in the cluster file path and authentication information.\n"))))),(0,a.kt)("h4",{id:"baidu-object-storage-bos"},"Baidu Object Storage BOS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(Open source version is not supported)")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access via AK / SK"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AK/SK: Access Key and Secret Key. You can check the user's AK / SK in Baidu Cloud Security Certification Center."),(0,a.kt)("li",{parentName:"ul"},"Region Endpoint: Endpoint of the BOS region."),(0,a.kt)("li",{parentName:"ul"},"For the regions supported by BOS and corresponding Endpoints, please see ","[Get access domain name]","(",(0,a.kt)("a",{parentName:"li",href:"https://cloud.baidu.com/doc/BOS/s/Ck1rk80hn#%E8%8E%B7%E5%8F%96%E8%AE"},"https://cloud.baidu.com/doc/BOS/s/Ck1rk80hn#%E8%8E%B7%E5%8F%96%E8%AE")," %BF%E9%97%AE%E5%9F%9F%E5%90%8D)")),(0,a.kt)("p",{parentName:"li"},"Examples are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy"\n)\n')))),(0,a.kt)("h4",{id:"baidu-hdfsafs"},"Baidu HDFS/AFS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uff08Open source version is not supported\uff09")),(0,a.kt)("p",null,"Baidu AFS and HDFS only support simple authentication access using UGI. Examples are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'(\n    "username" = "user",\n    "password" = "passwd"\n);\n')),(0,a.kt)("p",null,"User and passwd are UGI configurations for Hadoop."))}m.isMDXComponent=!0}}]);