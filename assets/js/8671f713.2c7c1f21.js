"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2420],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},724230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const a={title:"Database Connect",language:"en"},i=void 0,s={unversionedId:"db-connect/database-connect",id:"version-2.0/db-connect/database-connect",title:"Database Connect",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/db-connect/database-connect.md",sourceDirName:"db-connect",slug:"/db-connect/database-connect",permalink:"/docs/2.0/db-connect/database-connect",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Database Connect",language:"en"},sidebar:"docs",previous:{title:"Doris on AWS",permalink:"/docs/2.0/install/cluster-deployment/doris-on-aws"},next:{title:"Data Type",permalink:"/docs/2.0/table-design/data-type"}},l={},c=[{value:"MySQL Client",id:"mysql-client",level:2},{value:"MySQL JDBC Connector",id:"mysql-jdbc-connector",level:2},{value:"DBeaver",id:"dbeaver",level:2},{value:"Built-in Web UI of Doris",id:"built-in-web-ui-of-doris",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Apache Doris adopts the MySQL network connection protocol. It is compatible with command-line tools, JDBC/ODBC drivers, and various visualization tools within the MySQL ecosystem. Additionally, Apache Doris comes with a built-in, easy-to-use Web UI. This guide is about how to connect to Doris using MySQL Client, MySQL JDBC Connector, DBeaver, and the built-in Doris Web UI."),(0,o.yg)("h2",{id:"mysql-client"},"MySQL Client"),(0,o.yg)("p",null,"Download MySQL Client from the MySQL official website or use the pre-installed ",(0,o.yg)("a",{parentName:"p",href:"https://cdn.selectdb.com/download/mysql-client/mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz"},"MySQL client")," for Linux provided by the Apache Doris community. Currently, Doris is primarily compatible with MySQL 5.7 and later clients."),(0,o.yg)("p",null,"Extract the downloaded MySQL client. In the ",(0,o.yg)("inlineCode",{parentName:"p"},"bin/")," directory, find the ",(0,o.yg)("inlineCode",{parentName:"p"},"mysql")," command-line tool. Execute the following command to connect to Doris:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"# FE_IP represents the listening address of the FE node, while FE_QUERY_PORT represents the port of the MySQL protocol service of the FE. This corresponds to the query_port parameter in fe.conf and it defaults to 9030.\nmysql -h FE_IP -P FE_QUERY_PORT -u USER_NAME \n")),(0,o.yg)("p",null,"After login, the following message will be displayed."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"Welcome to the MySQL monitor.  Commands end with ; or \\g.                               \nYour MySQL connection id is 236                                                         \nServer version: 5.7.99 Doris version doris-2.0.3-rc06-37d31a5                           \nCopyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.            \nOracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.                                     Type 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.          mysql> \n")),(0,o.yg)("h2",{id:"mysql-jdbc-connector"},"MySQL JDBC Connector"),(0,o.yg)("p",null,"Download the corresponding JDBC Connector from the official MySQL website."),(0,o.yg)("p",null,"Example of connection code:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Java"},'String user = "user_name";\nString password = "user_password";\nString newUrl = "jdbc:mysql://FE_IP:FE_PORT/demo\uff1fuseUnicode=true&characterEncoding=utf8&useTimezone=true&serverTimezone=Asia/Shanghai&useSSL=false&allowPublicKeyRetrieval=true";\ntry {\n    Connection myCon = DriverManager.getConnection(newUrl, user, password);\n    Statement stmt = myCon.createStatement();\n    ResultSet result = stmt.executeQuery("show databases");\n    ResultSetMetaData metaData = result.getMetaData();\n    int columnCount = metaData.getColumnCount();\n    while (result.next()) {\n        for (int i = 1; i <= columnCount; i++) {\n            System.out.println(result.getObject(i));\n        }\n    }\n} catch (SQLException e) {\n    log.error("get JDBC connection exception.", e);\n}\n')),(0,o.yg)("h2",{id:"dbeaver"},"DBeaver"),(0,o.yg)("p",null,"Create a MySQL connection to Apache Doris:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"database-connect-dbeaver",src:n(801182).A,width:"1280",height:"1083"})),(0,o.yg)("p",null,"Query in DBeaver:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"query-in-dbeaver",src:n(66292).A,width:"1280",height:"946"})),(0,o.yg)("h2",{id:"built-in-web-ui-of-doris"},"Built-in Web UI of Doris"),(0,o.yg)("p",null,"Doris FE has a built-in Web UI. It allows users to perform SQL queries and view other related information without the need to install the MySQL client"),(0,o.yg)("p",null,"To access the Web UI, simply enter the URL in a web browser: http://fe_ip:fe_port, for example, ",(0,o.yg)("a",{parentName:"p",href:"http://172.20.63.118:8030/"},"http://172.20.63.118:8030"),". This will open the built-in Web console of Doris."),(0,o.yg)("p",null,"The built-in Web console is primarily intended for use by the root account of the cluster. By default, the root account password is empty after installation."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"web-login-username-password",src:n(666905).A,width:"1280",height:"724"})),(0,o.yg)("p",null,"For example, you can execute the following command in the Playground to add a BE node."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},'ALTER SYSTEM ADD BACKEND "be_host_ip:heartbeat_service_port";\n')),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Doris-Web-UI-Playground-en",src:n(25747).A,width:"1280",height:"653"})),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"For successful execution of statements that are not related to specific databases/tables in the Playground, it is necessary to randomly select a database from the left-hand database panel. This limitation will be removed later."),(0,o.yg)("p",{parentName:"admonition"},"The current built-in web console cannot execute SET type SQL statements. Therefore, the web console does not support statements like SET PASSWORD FOR 'user' = PASSWORD('user_password'). ")))}u.isMDXComponent=!0},25747:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Doris-Web-UI-Playground-en-ce00cb539e0dc6a110a17e5bd057a10b.png"},801182:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/database-connect-dbeaver-e74120612bdbc9d4a14b79a5819ba6d5.png"},66292:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/query-in-dbeaver-11f3e80e04942de7bd200a685655da3c.png"},666905:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/web-login-username-password-0e96b0a7f82ba3609666352a6f56b26a.png"}}]);