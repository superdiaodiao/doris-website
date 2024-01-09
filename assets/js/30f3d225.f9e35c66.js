"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),m=o,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,s(s({ref:t},u),{},{components:r})):n.createElement(k,s({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"Deploy Doris on Kubernetes",language:"en"},s=void 0,l={unversionedId:"install/k8s-deploy/operator-deploy",id:"install/k8s-deploy/operator-deploy",title:"Deploy Doris on Kubernetes",description:"\x3c!--",source:"@site/docs/install/k8s-deploy/operator-deploy.md",sourceDirName:"install/k8s-deploy",slug:"/install/k8s-deploy/operator-deploy",permalink:"/docs/dev/install/k8s-deploy/operator-deploy",draft:!1,tags:[],version:"current",frontMatter:{title:"Deploy Doris on Kubernetes",language:"en"},sidebar:"docs",previous:{title:"Deploy Docker Cluster",permalink:"/docs/dev/install/construct-docker/run-docker-cluster"},next:{title:"Deploy Doris on Helm Chart",permalink:"/docs/dev/install/k8s-deploy/helm-chart-deploy"}},p={},i=[{value:"Deploy Doris on Kubernetes",id:"deploy-doris-on-kubernetes",level:2},{value:"Start Kubernetes",id:"start-kubernetes",level:3},{value:"Deploy Doris-Operator on Kubernetes",id:"deploy-doris-operator-on-kubernetes",level:3},{value:"Start Doris on Kubernetes",id:"start-doris-on-kubernetes",level:3},{value:"Use Doris Cluster",id:"use-doris-cluster",level:3}],u={toc:i},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Doris-Operator is software extension to Kubernetes that make use of custom resource to manage Doris and it components. It provides ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/config/crd/bases/doris.selectdb.com_dorisclusters.yaml"},"DorisCluster")," a Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubernetes-api/extend-resources/custom-resource-definition-v1/"},"CustomResourceDefinition")," for user to custom resource."),(0,o.kt)("h2",{id:"deploy-doris-on-kubernetes"},"Deploy Doris on Kubernetes"),(0,o.kt)("h3",{id:"start-kubernetes"},"Start Kubernetes"),(0,o.kt)("p",null,"Having a Kubernetes environment is the premise to deploy Doris on Kubernetes. If you already have it, please ignore this step.\nHosted Kubernetes on cloud platform or set-up by yourself are all good choice.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hosted EKS"),"  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check that the following ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"},"command-line")," tools are installed in your environment:  ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install and configure AWS command-line tool AWS CLI."),(0,o.kt)("li",{parentName:"ul"},"Install EKS cluster command-line tool eksctl."),(0,o.kt)("li",{parentName:"ul"},"Install Kubernetes cluster command-line tool kubectl. ")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use one of the following methods to create an EKS cluster:  ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html"},"Use eksctl to quickly create an EKS cluster"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html"},"Manually create an EKS cluster with the AWS console and AWS CLI"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hosted GKE"),(0,o.kt)("br",{parentName:"p"}),"\n","Complete all the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster#before-you-begin"},"prerequisites")," when ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster#create_cluster"},"create a GKE cluster"),".  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create as Kubernetes recommend"),(0,o.kt)("br",{parentName:"p"}),"\n","Kubernetes official documents recommends some ways to set up Kubernetes, as ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),",",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kops/"},"kOps"),"."),(0,o.kt)("h3",{id:"deploy-doris-operator-on-kubernetes"},"Deploy Doris-Operator on Kubernetes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Apply the ",(0,o.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions"},"Custom Resource Definition(CRD)")),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/selectdb/doris-operator/master/config/crd/bases/doris.selectdb.com_dorisclusters.yaml    \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Install Doris-Operator"),(0,o.kt)("br",{parentName:"p"}),"\n","If you want to use the defaults operator resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/selectdb/doris-operator/master/config/operator/operator.yaml\n")),(0,o.kt)("p",null,"The user defined deployment in github repo are simply:",(0,o.kt)("br",{parentName:"p"}),"\n","Instead of using the command below, apply your local version of the Operator manifest to the cluster when you custom operator resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f operator.yaml  \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Validate The Operator is Running"),(0,o.kt)("br",{parentName:"p"}),"\n","Using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl -n {namespace} get pods")," get the status of deployed operator. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"}," kubectl -n doris get pods\n NAME                              READY   STATUS    RESTARTS        AGE\n doris-operator-5b9f7f57bf-tsvjz   1/1     Running   66 (164m ago)   6d22h\n")),(0,o.kt)("p",null,"Expected result, the Pod ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Running")," and all containers in Pod are all ",(0,o.kt)("inlineCode",{parentName:"p"},"READY"),"."),(0,o.kt)("h3",{id:"start-doris-on-kubernetes"},"Start Doris on Kubernetes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Initialize Doris Cluster"),(0,o.kt)("br",{parentName:"p"}),"\n","User can directly deploy Doris by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/tree/master/doc/examples"},"examples")," provided by Doris-Operator. Below is the command:    "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/selectdb/doris-operator/master/doc/examples/doriscluster-sample.yaml  \n")),(0,o.kt)("p",null,"Or download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/tree/master/doc/examples/doriscluster-sample.yaml"},"doriscluster-sample")," a custom resource that tells the Operator how to configure the Kubernetes cluster, and custom resource as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/doc/api.md"},"api.md")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/tree/master/doc/how_to_use.md"},"how_to_use")," docs. Instead of using the command below, apply the customized resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubeectl apply -f doriscluster-sample.yaml  \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Validate Doris Cluster Status"),(0,o.kt)("br",{parentName:"p"}),"\n","Using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl -n {namespace} get pods")," check pods status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods\n  NAME                       READY   STATUS    RESTARTS   AGE\n  doriscluster-sample-fe-0   1/1     Running   0          20m\n  doriscluster-sample-be-0   1/1     Running   0          19m\n")),(0,o.kt)("p",null,"All Pods created by DorisCluster resource should be in ",(0,o.kt)("inlineCode",{parentName:"p"},"Running")," STATUS, and each pod's containers should be ",(0,o.kt)("inlineCode",{parentName:"p"},"RREADY"),"."),(0,o.kt)("h3",{id:"use-doris-cluster"},"Use Doris Cluster"),(0,o.kt)("p",null,"On kubernetes Doris-Operator provide ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," a resource build in kubernetes for access to Doris.  "),(0,o.kt)("p",null,"The command ",(0,o.kt)("inlineCode",{parentName:"p"},'kubectl -n {namespace} get svc -l "app.doris.ownerreference/name={dorisCluster.Name}"')," used to get ",(0,o.kt)("inlineCode",{parentName:"p"},"service")," created by Doris-Operator. ",(0,o.kt)("inlineCode",{parentName:"p"},"dorisCluster.Nmae")," is the name of DorisCluster resource deployed by step 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n default get svc -l "app.doris.ownerreference/name=doriscluster-sample"\nNAME                              TYPE        CLUSTER-IP       EXTERNAL-IP                                           PORT(S)                               AGE\ndoriscluster-sample-fe-internal   ClusterIP   None             <none>                                                9030/TCP                              30m\ndoriscluster-sample-fe-service    ClusterIP   10.152.183.37    a7509284bf3784983a596c6eec7fc212-618xxxxxx.com        8030/TCP,9020/TCP,9030/TCP,9010/TCP   30m\ndoriscluster-sample-be-internal   ClusterIP   None             <none>                                                9050/TCP                              29m\ndoriscluster-sample-be-service    ClusterIP   10.152.183.141   <none>                                                9060/TCP,8040/TCP,9050/TCP,8060/TCP   29m\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use SQL Client for Access"),(0,o.kt)("br",{parentName:"p"}),"\n","Service created by Doris-Operator have two types, suffix is ",(0,o.kt)("inlineCode",{parentName:"p"},"-internal")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-service"),". Service have the ",(0,o.kt)("inlineCode",{parentName:"p"},"-internal")," suffix for communicating in Doris components, Service have ",(0,o.kt)("inlineCode",{parentName:"p"},"-service")," suffix for user to access.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Kubernetes",(0,o.kt)("br",{parentName:"p"}),"\n","In kubernetes, Using ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER-IP"),"  is recommended. For example, the fe service's ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER-IP"),"  is ",(0,o.kt)("inlineCode",{parentName:"p"},"10.152.183.37")," that displayed by above command. Using below command to access fe service."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h 10.152.183.37 -uroot -P9030\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Out Kubernetes",(0,o.kt)("br",{parentName:"p"}),"\n","Using ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," to access fe from Kubernetes external. In default, Doris-Operator not provided ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," mode. If you want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),", should custom resource ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," field, reference the doc ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/doc/api.md"},"api.md")," to deploy."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If the doc not cover your requirements, Pleaser reference the docs ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/tree/master/doc/how_to_use.md"},"how_to_use.md")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/doc/api.md"},"api.md")," to custom ",(0,o.kt)("inlineCode",{parentName:"p"},"DorisCluster")," resource to deploy.")))}d.isMDXComponent=!0}}]);