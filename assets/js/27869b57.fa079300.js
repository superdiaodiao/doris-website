"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[33345],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),u=a,g=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return t?r.createElement(g,l(l({ref:n},d),{},{components:t})):r.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={title:"Deploy Docker cluster",language:"en"},l=void 0,i={unversionedId:"install/construct-docker/run-docker-cluster",id:"version-1.2/install/construct-docker/run-docker-cluster",title:"Deploy Docker cluster",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/install/construct-docker/run-docker-cluster.md",sourceDirName:"install/construct-docker",slug:"/install/construct-docker/run-docker-cluster",permalink:"/docs/1.2/install/construct-docker/run-docker-cluster",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Deploy Docker cluster",language:"en"},sidebar:"docs",previous:{title:"Build Docker Image",permalink:"/docs/1.2/install/construct-docker/construct-docker-image"},next:{title:"Kubernetes Deployment",permalink:"/docs/1.2/install/k8s-deploy"}},p={},c=[{value:"Background description",id:"background-description",level:2},{value:"Applicable scene",id:"applicable-scene",level:2},{value:"Software Environment",id:"software-environment",level:2},{value:"Hardware environment",id:"hardware-environment",level:2},{value:"Pre-environment preparation",id:"pre-environment-preparation",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Network Mode Description",id:"network-mode-description",level:3},{value:"Interface Description",id:"interface-description",level:3},{value:"Script Template",id:"script-template",level:3},{value:"Docker Run command",id:"docker-run-command",level:4},{value:"Docker Compose script",id:"docker-compose-script",level:4},{value:"Deploy Doris Docker",id:"deploy-doris-docker",level:2},{value:"Special case description",id:"special-case-description",level:3},{value:"Unfinished business",id:"unfinished-business",level:2}],d={toc:c},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"deploy-the-docker-cluster"},"Deploy the Docker cluster"),(0,a.yg)("h2",{id:"background-description"},"Background description"),(0,a.yg)("p",null,"This article will briefly describe how to quickly build a complete Doris test cluster through ",(0,a.yg)("inlineCode",{parentName:"p"},"docker run")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose up")," commands."),(0,a.yg)("h2",{id:"applicable-scene"},"Applicable scene"),(0,a.yg)("p",null,"It is recommended to use Doris Docker in SIT or DEV environment to simplify the deployment process."),(0,a.yg)("p",null,"If you want to test a certain function point in the new version, you can use Doris Docker to deploy a Playground environment. Or when you want to reproduce a certain problem during debugging, you can also use the docker environment to simulate."),(0,a.yg)("p",null,"In the production environment, currently try to avoid using containerized solutions for Doris deployment."),(0,a.yg)("h2",{id:"software-environment"},"Software Environment"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Software"),(0,a.yg)("th",{parentName:"tr",align:null},"Version"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Docker"),(0,a.yg)("td",{parentName:"tr",align:null},"20.0 and above")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"docker-compose"),(0,a.yg)("td",{parentName:"tr",align:null},"2.10 and above")))),(0,a.yg)("h2",{id:"hardware-environment"},"Hardware environment"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Configuration Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Hardware Information"),(0,a.yg)("th",{parentName:"tr",align:null},"Maximum Running Cluster Size"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Minimum configuration"),(0,a.yg)("td",{parentName:"tr",align:null},"2C 4G"),(0,a.yg)("td",{parentName:"tr",align:null},"1FE 1BE")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Recommended configuration"),(0,a.yg)("td",{parentName:"tr",align:null},"4C 16G"),(0,a.yg)("td",{parentName:"tr",align:null},"3FE 3BE")))),(0,a.yg)("h2",{id:"pre-environment-preparation"},"Pre-environment preparation"),(0,a.yg)("p",null,"The following command needs to be executed on the host machine"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sysctl -w vm.max_map_count=2000000\n")),(0,a.yg)("h2",{id:"docker-compose"},"Docker Compose"),(0,a.yg)("p",null,"Different platforms need to use different Image images. This article takes the ",(0,a.yg)("inlineCode",{parentName:"p"},"X86_64")," platform as an example."),(0,a.yg)("h3",{id:"network-mode-description"},"Network Mode Description"),(0,a.yg)("p",null,"There are two network modes applicable to Doris Docker."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"HOST mode suitable for deployment across multiple nodes, this mode is suitable for deploying 1FE 1BE on each node."),(0,a.yg)("li",{parentName:"ol"},"The subnet bridge mode is suitable for deploying multiple Doris processes on a single node. This mode is suitable for single-node deployment (recommended). If you want to deploy multiple nodes, you need to deploy more components (not recommended).")),(0,a.yg)("p",null,"For the sake of presentation, this chapter only demonstrates scripts written in subnet bridge mode."),(0,a.yg)("h3",{id:"interface-description"},"Interface Description"),(0,a.yg)("p",null,"From the version of ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache Doris 1.2.1 Docker Image"),", the interface list of each process image is as follows:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"process name"),(0,a.yg)("th",{parentName:"tr",align:null},"interface name"),(0,a.yg)("th",{parentName:"tr",align:null},"interface definition"),(0,a.yg)("th",{parentName:"tr",align:null},"interface example"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"FE\\BE\\BROKER"),(0,a.yg)("td",{parentName:"tr",align:null},"FE_SERVERS"),(0,a.yg)("td",{parentName:"tr",align:null},"FE node main information"),(0,a.yg)("td",{parentName:"tr",align:null},"fe1:172.20.80.2:9010,fe2:172.20.80.3:9010,fe3:172.20.80.4:9010")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"FE"),(0,a.yg)("td",{parentName:"tr",align:null},"FE_ID"),(0,a.yg)("td",{parentName:"tr",align:null},"FE node ID"),(0,a.yg)("td",{parentName:"tr",align:null},"1")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"BE"),(0,a.yg)("td",{parentName:"tr",align:null},"BE_ADDR"),(0,a.yg)("td",{parentName:"tr",align:null},"BE node main information"),(0,a.yg)("td",{parentName:"tr",align:null},"172.20.80.5:9050")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"BE"),(0,a.yg)("td",{parentName:"tr",align:null},"NODE_ROLE"),(0,a.yg)("td",{parentName:"tr",align:null},"BE node type"),(0,a.yg)("td",{parentName:"tr",align:null},"computation")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"BROKER"),(0,a.yg)("td",{parentName:"tr",align:null},"BROKER_ADDR"),(0,a.yg)("td",{parentName:"tr",align:null},"Main information of BROKER node"),(0,a.yg)("td",{parentName:"tr",align:null},"172.20.80.6:8000")))),(0,a.yg)("p",null,"Note that the above interface must fill in the information, otherwise the process cannot be started."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"FE_SERVERS interface rules are: ",(0,a.yg)("inlineCode",{parentName:"p"},"FE_NAME:FE_HOST:FE_EDIT_LOG_PORT[,FE_NAME:FE_HOST:FE_EDIT_LOG_PORT]")),(0,a.yg)("p",{parentName:"blockquote"},"The FE_ID interface rule is: an integer of ",(0,a.yg)("inlineCode",{parentName:"p"},"1-9"),", where the FE number ",(0,a.yg)("inlineCode",{parentName:"p"},"1")," is the Master node."),(0,a.yg)("p",{parentName:"blockquote"},"BE_ADDR interface rule is: ",(0,a.yg)("inlineCode",{parentName:"p"},"BE_HOST:BE_HEARTBEAT_SERVICE_PORT")),(0,a.yg)("p",{parentName:"blockquote"},"The NODE_ROLE interface rule is: ",(0,a.yg)("inlineCode",{parentName:"p"},"computation")," or empty, where empty or other values indicate that the node type is ",(0,a.yg)("inlineCode",{parentName:"p"},"mix")," type"),(0,a.yg)("p",{parentName:"blockquote"},"BROKER_ADDR interface rule is: ",(0,a.yg)("inlineCode",{parentName:"p"},"BROKER_HOST:BROKER_IPC_PORT"))),(0,a.yg)("h3",{id:"script-template"},"Script Template"),(0,a.yg)("h4",{id:"docker-run-command"},"Docker Run command"),(0,a.yg)("p",null,"Create a subnet bridge"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"docker network create --driver bridge --subnet=172.20.80.0/24 doris-network\n")),(0,a.yg)("p",null,"1FE & 1BE Command Templates"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'docker run -itd \\\n--name=fe \\\n--env FE_SERVERS="fe1:172.20.80.2:9010" \\\n--env FE_ID=1 \\\n-p 8030:8030 \\\n-p 9030:9030 \\\n-v /data/fe/doris-meta:/opt/apache-doris/fe/doris-meta \\\n-v /data/fe/conf:/opt/apache-doris/fe/conf \\\n-v /data/fe/log:/opt/apache-doris/fe/log \\\n--network=doris-network \\\n--ip=172.20.80.2 \\\napache/doris:1.2.1-fe-x86_64\n\ndocker run -itd \\\n--name=be \\\n--env FE_SERVERS="fe1:172.20.80.2:9010" \\\n--env BE_ADDR="172.20.80.3:9050" \\\n-p 8040:8040 \\\n-v /data/be/storage:/opt/apache-doris/be/storage \\\n-v /data/be/conf:/opt/apache-doris/be/conf \\\n-v /data/be/log:/opt/apache-doris/be/log \\\n--network=doris-network \\\n--ip=172.20.80.3 \\\napache/doris:1.2.1-be-x86_64  # if CPU does not support AVX2, use\n                              # apache/doris:1.2.1-be-x86_64-noavx2\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note: if you CPU does not support AVX2, the backend will fail to start.\nIf this is the case, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"apache/doris:X.X.X-be-x86_64-noavx2")," backend image.\nUse ",(0,a.yg)("inlineCode",{parentName:"p"},"docker logs -f be")," to check the backend for error messages.")),(0,a.yg)("p",null,"3FE & 3BE run command template can be downloaded ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/docker-compose-demo/build-cluster/rum-command/3fe_3be.sh"},"here"),"."),(0,a.yg)("h4",{id:"docker-compose-script"},"Docker Compose script"),(0,a.yg)("p",null,"1FE & 1BE template"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nservices:\n   docker-fe:\n     image: "apache/doris:1.2.1-fe-x86_64"\n     container_name: "doris-fe"\n     hostname: "fe"\n     environment:\n       - FE_SERVERS=fe1:172.20.80.2:9010\n       - FE_ID=1\n     ports:\n       - 8030:8030\n       - 9030:9030\n     volumes:\n       - /data/fe/doris-meta:/opt/apache-doris/fe/doris-meta\n       - /data/fe/conf:/opt/apache-doris/fe/conf\n       - /data/fe/log:/opt/apache-doris/fe/log\n     networks:\n       doris_net:\n         ipv4_address: 172.20.80.2\n   docker-be:\n     image: "apache/doris:1.2.1-be-x86_64"  # use apache/doris:1.2.1-be-x86_64-noavx2, if CPU does not support AVX2\n     container_name: "doris-be"\n     hostname: "be"\n     depends_on:\n       - docker-fe\n     environment:\n       - FE_SERVERS=fe1:172.20.80.2:9010\n       - BE_ADDR=172.20.80.3:9050\n     ports:\n       - 8040:8040\n     volumes:\n       - /data/be/storage:/opt/apache-doris/be/storage\n       - /data/be/conf:/opt/apache-doris/be/conf\n       - /data/be/script:/docker-entrypoint-initdb.d\n       - /data/be/log:/opt/apache-doris/be/log\n     networks:\n       doris_net:\n         ipv4_address: 172.20.80.3\nnetworks:\n   doris_net:\n     ipam:\n       config:\n         - subnet: 172.20.80.0/16\n')),(0,a.yg)("p",null,"3FE & 3BE Docker Compose file can be downloaded ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/docker-compose-demo/build-cluster/docker-compose/3fe_3be/docker-compose.yaml"},"here"),"."),(0,a.yg)("h2",{id:"deploy-doris-docker"},"Deploy Doris Docker"),(0,a.yg)("p",null,"You can choose one of the two deployment methods:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Execute the ",(0,a.yg)("inlineCode",{parentName:"li"},"docker run")," command to create a cluster"),(0,a.yg)("li",{parentName:"ol"},"Save the ",(0,a.yg)("inlineCode",{parentName:"li"},"docker-compose.yaml")," script and execute the ",(0,a.yg)("inlineCode",{parentName:"li"},"docker-compose up -d")," command in the same directory to create a cluster")),(0,a.yg)("h3",{id:"special-case-description"},"Special case description"),(0,a.yg)("p",null,"Due to the different ways of implementing containers internally on MacOS, it may not be possible to directly modify the value of ",(0,a.yg)("inlineCode",{parentName:"p"},"max_map_count")," on the host during deployment. You need to create the following containers first:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shel"},"docker run -it --privileged --pid=host --name=change_count debian nsenter -t 1 -m -u -n -i sh\n")),(0,a.yg)("p",null,"The container was created successfully executing the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sysctl -w vm.max_map_count=2000000\n")),(0,a.yg)("p",null,"Then ",(0,a.yg)("inlineCode",{parentName:"p"},"exit")," exits and creates the Doris Docker cluster."),(0,a.yg)("h2",{id:"unfinished-business"},"Unfinished business"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Compose Demo List")))}m.isMDXComponent=!0}}]);