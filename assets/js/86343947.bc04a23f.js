"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||h[u]||s;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const s={title:"Space list",language:"en"},o=void 0,r={unversionedId:"ecosystem/doris-manager/space-list",id:"version-dev/ecosystem/doris-manager/space-list",title:"Space list",description:"\x3c!--",source:"@site/versioned_docs/version-dev/ecosystem/doris-manager/space-list.md",sourceDirName:"ecosystem/doris-manager",slug:"/ecosystem/doris-manager/space-list",permalink:"/docs/dev/ecosystem/doris-manager/space-list",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/ecosystem/doris-manager/space-list.md",tags:[],version:"dev",frontMatter:{title:"Space list",language:"en"},sidebar:"docs",previous:{title:"Cluster management",permalink:"/docs/dev/ecosystem/doris-manager/cluster-managenent"},next:{title:"Space management",permalink:"/docs/dev/ecosystem/doris-manager/space-management"}},l={},c=[{value:"Completed space",id:"completed-space",level:2},{value:"Unfinished space",id:"unfinished-space",level:2},{value:"New cluster",id:"new-cluster",level:2},{value:"1 Registration space",id:"1-registration-space",level:3},{value:"2 Add host",id:"2-add-host",level:3},{value:"Configure SSH login-free",id:"configure-ssh-login-free",level:4},{value:"Host list",id:"host-list",level:4},{value:"3 Installation options",id:"3-installation-options",level:3},{value:"Get the installation package",id:"get-the-installation-package",level:4},{value:"Specify the installation path",id:"specify-the-installation-path",level:4},{value:"4 Verify the host",id:"4-verify-the-host",level:3},{value:"5 Planning Nodes",id:"5-planning-nodes",level:3},{value:"6 Configuration Parameters",id:"6-configuration-parameters",level:3},{value:"7 Deploy the cluster",id:"7-deploy-the-cluster",level:3},{value:"8 Complete the creation",id:"8-complete-the-creation",level:3},{value:"Cluster hosting",id:"cluster-hosting",level:2},{value:"1 Registration space",id:"1-registration-space-1",level:3},{value:"2 Connect to the cluster",id:"2-connect-to-the-cluster",level:3},{value:"3 Hosting Options",id:"3-hosting-options",level:3},{value:"Configure SSH login-free",id:"configure-ssh-login-free-1",level:4},{value:"Specify the installation path",id:"specify-the-installation-path-1",level:4},{value:"4 Verify the host",id:"4-verify-the-host-1",level:3},{value:"5 Verify the cluster",id:"5-verify-the-cluster",level:3},{value:"6 Complete access",id:"6-complete-access",level:3},{value:"Self-built http service",id:"self-built-http-service",level:2},{value:"1 yum source installation",id:"1-yum-source-installation",level:3},{value:"2 Source installation",id:"2-source-installation",level:3},{value:"3 Configuration",id:"3-configuration",level:3}],p={toc:c};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"space-list"},"Space list"),(0,a.kt)("p",null,"The super administrator can perform the following operations in the space list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Perform new cluster and cluster hosting operations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Recovery and deletion of unfinished spaces")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completed space deletion operation"))),(0,a.kt)("p",null,"The space administrator can mainly perform the following operations in the space list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"View authorized space information")),(0,a.kt)("h2",{id:"completed-space"},"Completed space"),(0,a.kt)("p",null,"The super administrator can operate the completed space through the button to the right of the space name. Space administrators can click to enter the space to manage clusters or data in the space."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(83165).Z,width:"2880",height:"820"})),(0,a.kt)("h2",{id:"unfinished-space"},"Unfinished space"),(0,a.kt)("p",null,"Doris Manger provides a draft save function of the space creation process to record the incomplete space creation process. Super administrators can view the list of unfinished spaces by switching tabs, and perform recovery or deletion operations."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(47234).Z,width:"2876",height:"882"})),(0,a.kt)("h1",{id:"new-space"},"New space"),(0,a.kt)("p",null,"There are two ways to create a new space: new cluster and cluster hosting."),(0,a.kt)("h2",{id:"new-cluster"},"New cluster"),(0,a.kt)("h3",{id:"1-registration-space"},"1 Registration space"),(0,a.kt)("p",null,"Space information includes space name, space introduction, and selection of space administrators."),(0,a.kt)("p",null,"Space name and administrator are required/optional fields."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(77829).Z,width:"2488",height:"1232"})),(0,a.kt)("h3",{id:"2-add-host"},"2 Add host"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(25151).Z,width:"2382",height:"1494"})),(0,a.kt)("h4",{id:"configure-ssh-login-free"},"Configure SSH login-free"),(0,a.kt)("p",null,"Doris Manager needs to distribute the Agent installation package during installation, so it is necessary to configure SSH login-free on the server (agent01) where Doris is to be installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#1. To log in to the server, you need to use the manager and agent accounts to be consistent\nsu - xxx\npwd\n#2. Generate a key pair on the machine where doris manager is deployed\nssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa\n\n#3. Copy the public key to the machine agent01\nscp ~/.ssh/id_rsa.pub root@agent01:~\n\n#4. Log in to agent01 and append the public key to authorized_keys\ncat ~/id_rsa.pub >> .ssh/authorized_keys\n\n#5. After doing this, we can log in to agent01 without password on the doris manger machine\nssh agent01@xx.xxx.xx.xx\n")),(0,a.kt)("p",null,"For details, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/universe_hao/article/details/52296811"},"https://blog.csdn.net/universe_hao/article/details/52296811")),(0,a.kt)("p",null,"In addition, it should be noted that the permissions of the .ssh directory are 700, and the permissions of the authorized_keys and private keys under it are 600. Otherwise, you will not be able to log in without a password due to permission issues. We can see that the known_hosts file will be generated after logging in. At the same time, when starting doris, you need to use a password-free login account."),(0,a.kt)("p",null,"When adding nodes in the second step of the Doris Manager installation cluster, use the private key of the doris manager machine, that is, ~/.ssh/id_rsa (note: including the head and tail of the key file)"),(0,a.kt)("h4",{id:"host-list"},"Host list"),(0,a.kt)("p",null,"Enter the host IP to add a new host, or add it in batches."),(0,a.kt)("h3",{id:"3-installation-options"},"3 Installation options"),(0,a.kt)("h4",{id:"get-the-installation-package"},"Get the installation package"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Code package path"),(0,a.kt)("p",{parentName:"li"},"When deploying a cluster through Doris Manager, you need to provide the compiled Doris installation package. You can compile it yourself from the Doris source code."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Doris Manager will pull the Doris installation package through http. If you need to build your own http service, please refer to the bottom of the document - Self-built http service"),"."),(0,a.kt)("h4",{id:"specify-the-installation-path"},"Specify the installation path"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Doris and Doris Manger Agent will be installed in this directory. Make sure this directory is dedicated to Doirs and related components."),(0,a.kt)("li",{parentName:"ol"},"Specify the Agent startup port, the default is 8001, if there is a conflict, you can customize it.")),(0,a.kt)("h3",{id:"4-verify-the-host"},"4 Verify the host"),(0,a.kt)("p",null,"The system will automatically perform verification according to the host status. When the verification is completed, the Agent will start sending back the heartbeat, and you can click to proceed to the next step."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74018).Z,width:"2342",height:"1008"})),(0,a.kt)("h3",{id:"5-planning-nodes"},"5 Planning Nodes"),(0,a.kt)("p",null,"Click the Assign Node button to plan FE/BE/Broker nodes for the host."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91451).Z,width:"2320",height:"1016"})),(0,a.kt)("h3",{id:"6-configuration-parameters"},"6 Configuration Parameters"),(0,a.kt)("p",null,"Configure parameters for the nodes planned in the previous step. You can use the default values \u200b\u200bor turn on the custom configuration switch to customize the configuration."),(0,a.kt)("h3",{id:"7-deploy-the-cluster"},"7 Deploy the cluster"),(0,a.kt)("p",null,"The system will automatically perform verification according to the status of the host installation progress. When the verification is completed, it will start the node and return the heartbeat. You can click to proceed to the next step."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(93071).Z,width:"2330",height:"994"})),(0,a.kt)("h3",{id:"8-complete-the-creation"},"8 Complete the creation"),(0,a.kt)("p",null,"Complete the above steps to complete the new cluster."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(68181).Z,width:"2334",height:"1018"})),(0,a.kt)("h2",{id:"cluster-hosting"},"Cluster hosting"),(0,a.kt)("h3",{id:"1-registration-space-1"},"1 Registration space"),(0,a.kt)("p",null,"Space information includes space name, space introduction, and selection of space administrators."),(0,a.kt)("p",null,"Space name and administrator are required/optional fields."),(0,a.kt)("h3",{id:"2-connect-to-the-cluster"},"2 Connect to the cluster"),(0,a.kt)("p",null,"Cluster information includes cluster address, HTTP port, JDBC port, cluster username, and cluster password. Users can fill in according to their own cluster information."),(0,a.kt)("p",null,"Click the Link Test button to test it."),(0,a.kt)("h3",{id:"3-hosting-options"},"3 Hosting Options"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5276).Z,width:"2450",height:"1304"})),(0,a.kt)("h4",{id:"configure-ssh-login-free-1"},"Configure SSH login-free"),(0,a.kt)("p",null,"Doris Manager needs to distribute the Agent installation package during installation, so it is necessary to configure SSH login-free on the server (agent01) where Doris is to be installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#1. To log in to the server, you need to use the manger and agent accounts to be consistent\nsu - xxx\npwd\n#2. Generate a key pair on the machine where doris manager is deployed\nssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa\n\n#3. Copy the public key to the machine agent01\nscp ~/.ssh/id_rsa.pub root@agent01:~\n\n#4. Log in to agent01 and append the public key to authorized_keys\ncat ~/id_rsa.pub >> .ssh/authorized_keys\n\n#5. After doing this, we can log in to agent01 without password on the doris manger machine\nssh agent01@xx.xxx.xx.xx\n")),(0,a.kt)("p",null,"In addition, it should be noted that the permissions of the .ssh directory are 700, and the permissions of the authorized_keys and private keys under it are 600. Otherwise, you will not be able to log in without a password due to permission issues. We can see that the known_hosts file will be generated after logging in. At the same time, when starting doris, you need to use a password-free login account."),(0,a.kt)("p",null,"When installing a cluster in Doris Manager, just use the private key of the doris manager machine, ie ~/.ssh/id_rsa"),(0,a.kt)("p",null,"For details, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/universe_hao/article/details/52296811"},"https://blog.csdn.net/universe_hao/article/details/52296811")),(0,a.kt)("h4",{id:"specify-the-installation-path-1"},"Specify the installation path"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Doris and Doris Manger Agent will be installed in this directory. Make sure this directory is dedicated to Doirs and related components."),(0,a.kt)("li",{parentName:"ol"},"Specify the Agent startup port, the default is 8001, if there is a conflict, you can customize it.")),(0,a.kt)("h3",{id:"4-verify-the-host-1"},"4 Verify the host"),(0,a.kt)("p",null,"The system will automatically perform verification according to the host status. When the verification is completed, the Agent will start sending back the heartbeat, and you can click to proceed to the next step."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(49986).Z,width:"2460",height:"844"})),(0,a.kt)("h3",{id:"5-verify-the-cluster"},"5 Verify the cluster"),(0,a.kt)("p",null,"Verify the cluster quantile instance installation verification, instance dependency verification, and instance startup verification. After the verification is successful, click Next to complete the creation."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87179).Z,width:"2460",height:"870"})),(0,a.kt)("h3",{id:"6-complete-access"},"6 Complete access"),(0,a.kt)("p",null,"Complete the above steps to complete cluster hosting."),(0,a.kt)("h2",{id:"self-built-http-service"},"Self-built http service"),(0,a.kt)("h3",{id:"1-yum-source-installation"},"1 yum source installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installation\nyum install -y nginx"),(0,a.kt)("li",{parentName:"ol"},"Start\nsystemctl start nginx")),(0,a.kt)("h3",{id:"2-source-installation"},"2 Source installation"),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://www.runoob.com/linux/nginx-install-setup.html"},"https://www.runoob.com/linux/nginx-install-setup.html")),(0,a.kt)("h3",{id:"3-configuration"},"3 Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Put the doris installation package in the nginx root directory\nmv apache-doris-1.1.1-bin-x86.tar.gz  /usr/share/nginx/html")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify ngixn.conf"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"location /download {\n   alias /home/work/nginx/nginx/html/;\n}\n")),(0,a.kt)("p",null,"Restart ngxin access after modification:\nhttps://host:port/download/apache-doris-1.1.1-bin-x86.tar.gz"))}d.isMDXComponent=!0},83165:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-1-b09e0464b3390bc9c1a4133f9a4330f4.png"},49986:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-10-03a8ae12a971dd5501f9a2e7b41b2436.png"},87179:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-11-5e6b088f1122f632b4a5f1344ece397b.png"},47234:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-2-081ce91da4208467d35cbc8675c46b4c.png"},77829:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-3-e823fe38f20b9a5c1d263322c567ec99.png"},25151:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-4-9535ee6c3b9d6f18b5cff18e37b9514a.png"},74018:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-5-ef8193a21a9d16288cce6dd40f8022de.png"},91451:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-6-37374069ab0d319f5b491cea8c238b99.png"},93071:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-7-a0e767dac8a94ada74a37f1d2b7db19f.png"},68181:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-8-a2eee6aeebb89c38d3b71aaab5c1454d.png"},5276:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spacelist-9-453a2464b745b17cd08f41ea8cdd7a53.png"}}]);