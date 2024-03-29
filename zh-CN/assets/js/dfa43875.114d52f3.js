"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77015],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=a.createContext({}),i=function(e){var r=a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=i(e.components);return a.createElement(p.Provider,{value:r},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=i(n),d=t,y=g["".concat(p,".").concat(d)]||g[d]||u[d]||l;return n?a.createElement(y,o(o({ref:r},c),{},{components:n})):a.createElement(y,o({ref:r},c))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[g]="string"==typeof e?e:t,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},115565:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(58168),t=(n(296540),n(15680));const l={title:"\u8bbf\u95ee Doris \u96c6\u7fa4 ",language:"zh-CN"},o=void 0,s={unversionedId:"install/k8s-deploy/install-access-cluster",id:"install/k8s-deploy/install-access-cluster",title:"\u8bbf\u95ee Doris \u96c6\u7fa4 ",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/k8s-deploy/install-access-cluster.md",sourceDirName:"install/k8s-deploy",slug:"/install/k8s-deploy/install-access-cluster",permalink:"/zh-CN/docs/dev/install/k8s-deploy/install-access-cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8bbf\u95ee Doris \u96c6\u7fa4 ",language:"zh-CN"},sidebar:"docs",previous:{title:"\u90e8\u7f72 Doris \u96c6\u7fa4",permalink:"/zh-CN/docs/dev/install/k8s-deploy/install-doris-cluster"},next:{title:"\u5347\u7ea7\u57fa\u4e8e Doris-Operator \u90e8\u7f72\u7684 Apache Doris \u96c6\u7fa4",permalink:"/zh-CN/docs/dev/install/k8s-deploy/doris-cluster-upgrade"}},p={},i=[{value:"\u4f7f\u7528 ClusterIP \u6a21\u5f0f\u8bbf\u95ee",id:"\u4f7f\u7528-clusterip-\u6a21\u5f0f\u8bbf\u95ee",level:2},{value:"\u4f7f\u7528 NodePort \u6a21\u5f0f\u8bbf\u95ee",id:"\u4f7f\u7528-nodeport-\u6a21\u5f0f\u8bbf\u95ee",level:2},{value:"Stream Load ErrorURL \u91cd\u5b9a\u5411",id:"stream-load-errorurl-\u91cd\u5b9a\u5411",level:2},{value:"\u5728\u5bb9\u5668\u5185\u90e8\u67e5\u770b ErrorURL",id:"\u5728\u5bb9\u5668\u5185\u90e8\u67e5\u770b-errorurl",level:3},{value:"\u5728\u5bb9\u5668\u5916\u90e8\u67e5\u770b ErrorURL",id:"\u5728\u5bb9\u5668\u5916\u90e8\u67e5\u770b-errorurl",level:3}],c={toc:i},g="wrapper";function u(e){let{components:r,...n}=e;return(0,t.yg)(g,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u4f7f\u7528-clusterip-\u6a21\u5f0f\u8bbf\u95ee"},"\u4f7f\u7528 ClusterIP \u6a21\u5f0f\u8bbf\u95ee"),(0,t.yg)("p",null,"Doris \u5728 Kubernetes \u4e0a\u9ed8\u8ba4\u63d0\u4f9b ClusterIP \u8bbf\u95ee\u6a21\u5f0f\u3002ClusterIP \u8bbf\u95ee\u6a21\u5f0f\u5728 Kubernetes \u96c6\u7fa4\u5185\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u90e8 IP \u5730\u5740\uff0c\u901a\u8fc7\u8fd9\u4e2a\u5185\u90e8 IP \u66b4\u9732\u670d\u52a1\u3002\u4f7f\u7528 ClusterIP \u6a21\u5f0f\uff0c\u53ea\u80fd\u5728\u96c6\u7fa4\u5185\u90e8\u8bbf\u95ee\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u914d\u7f6e\u4f7f\u7528 ClusterIP \u4f5c\u4e3a Service \u7c7b\u578b")),(0,t.yg)("p",null,"Doris \u5728 Kubernetes \u4e0a\u9ed8\u8ba4\u63d0\u4f9b ClusterIP \u8bbf\u95ee\u6a21\u5f0f\u3002\u65e0\u9700\u8fdb\u884c\u4fee\u6539\u5373\u53ef\u4f7f\u7528 ClusterIP \u8bbf\u95ee\u6a21\u5f0f\u3002"),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u83b7\u53d6 Service")),(0,t.yg)("p",null,"\u5728\u90e8\u7f72\u96c6\u7fa4\u540e\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b Doris Operator \u66b4\u9732\u7684 service\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl -n doris get svc\n")),(0,t.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                              TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)                               AGE\ndoriscluster-sample-be-internal   ClusterIP   None          <none>        9050/TCP                              9m\ndoriscluster-sample-be-service    ClusterIP   10.1.68.128   <none>        9060/TCP,8040/TCP,9050/TCP,8060/TCP   9m\ndoriscluster-sample-fe-internal   ClusterIP   None          <none>        9030/TCP                              14m\ndoriscluster-sample-fe-service    ClusterIP   10.1.118.16   <none>        8030/TCP,9020/TCP,9030/TCP,9010/TCP   14m\n")),(0,t.yg)("p",null,"\u5728\u4ee5\u4e0a\u7ed3\u679c\u4e2d\uff0cFE \u4e0e BE \u6709\u4e24\u7c7b Service\uff0c\u540e\u7f00\u5206\u522b\u4e3a internal \u4e0e service\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4ee5 internal \u540e\u7f00\u7684 Service \u670d\u52a1\u53ea\u80fd Doris \u5185\u90e8\u901a\u4fe1\u4f7f\u7528\uff0c\u5982\u5fc3\u8df3\uff0c\u6570\u636e\u4ea4\u6362\u7b49\u64cd\u4f5c\uff0c\u4e0d\u5bf9\u5916\u4f7f\u7528"),(0,t.yg)("li",{parentName:"ul"},"\u4ee5 service \u540e\u7f00\u7684 Service \u670d\u52a1\u53ef\u4ee5\u63d0\u4f9b\u7528\u6237\u4f7f\u7528")),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},"\u5728\u5bb9\u5668\u5185\u90e8\u8bbf\u95ee Doris")),(0,t.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff0c\u53ef\u4ee5\u5728\u5f53\u524d\u7684 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u4e00\u4e2a\u5305\u542b mysql client \u7684 pod\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl run mysql-client --image=mysql:5.7 -it --rm --restart=Never --namespace=doris -- /bin/bash\n")),(0,t.yg)("p",null,"\u5728\u96c6\u7fa4\u5185\u7684\u5bb9\u5668\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5bf9\u5916\u66b4\u9732\u7684\u540e\u7f00\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"service")," \u7684\u670d\u52a1\u540d\u8bbf\u95ee Doris \u96c6\u7fa4\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"## \u4f7f\u7528 service \u7c7b\u578b pod name \u8bbf\u95ee Doris \u96c6\u7fa4\nmysql -uroot -P9030 -hdoriscluster-sample-fe-service\n")),(0,t.yg)("h2",{id:"\u4f7f\u7528-nodeport-\u6a21\u5f0f\u8bbf\u95ee"},"\u4f7f\u7528 NodePort \u6a21\u5f0f\u8bbf\u95ee"),(0,t.yg)("p",null,"\u5982\u679c\u7528\u6237\u9700\u8981\u518d Kubernetes \u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee Doris\uff0c\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 NodePort \u7684\u6a21\u5f0f\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u89c4\u5212 NodePort \u6a21\u5f0f\u7aef\u53e3\u6620\u5c04")),(0,t.yg)("p",null,"\u4f7f\u7528\u4e0e\u7ef4\u62a4 Doris \u96c6\u7fa4\uff0c\u7528\u6237\u9700\u8981\u8bbf\u95ee\u4ee5\u4e0b\u7aef\u53e3\uff1a"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"\u7aef\u53e3\u540d\u79f0"),(0,t.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7aef\u53e3"),(0,t.yg)("th",{parentName:"tr",align:null},"\u7aef\u53e3\u63cf\u8ff0"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"Query Port"),(0,t.yg)("td",{parentName:"tr",align:null},"9030"),(0,t.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u901a\u8fc7 MySQL \u534f\u8bae\u8bbf\u95ee Doris \u96c6\u7fa4")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"HTTP Port"),(0,t.yg)("td",{parentName:"tr",align:null},"8030"),(0,t.yg)("td",{parentName:"tr",align:null},"FE \u4e0a\u7684 http server \u7aef\u53e3\uff0c\u7528\u4e8e\u67e5\u770b FE \u7684\u4fe1\u606f")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"Web Server Port"),(0,t.yg)("td",{parentName:"tr",align:null},"8040"),(0,t.yg)("td",{parentName:"tr",align:null},"BE \u4e0a\u7684 http server \u7aef\u53e3\uff0c\u7528\u4e8e\u67e5\u770b BE \u7684\u4fe1\u606f")))),(0,t.yg)("p",null,"\u4f7f\u7528 NodePort \u6709\u4e24\u79cd\u7aef\u53e3\u5206\u914d\u65b9\u5f0f\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u52a8\u6001\u5206\u914d\uff1a\u5982\u679c\u6ca1\u6709\u663e\u793a\u8bbe\u7f6e\u7aef\u53e3\u6620\u5c04\uff0cKubernetes \u4f1a\u5728\u521b\u5efa pod \u7684\u65f6\u5019\u81ea\u52a8\u5206\u914d\u4e00\u4e2a\u672a\u4f7f\u7528\u7684\u7aef\u53e3\uff08\u9ed8\u8ba4\u8303\u56f4\u4e3a 30000-32767\uff09\uff1b"),(0,t.yg)("li",{parentName:"ul"},"\u9759\u6001\u5206\u914d\uff1a\u5982\u679c\u663e\u793a\u6307\u5b9a\u4e86\u7aef\u53e3\u6620\u5c04\uff0c\u5f53\u7aef\u53e3\u672a\u88ab\u4f7f\u7528\u65e0\u51b2\u7a81\u7684\u65f6\u5019\uff0cKubernetes \u56fa\u5b9a\u5206\u914d\u8be5\u7aef\u53e3\u3002")),(0,t.yg)("p",null,"\u5728 Kubernetes \u4e2d\u9ed8\u8ba4\u4f7f\u7528\u52a8\u6001\u5206\u914d\u7aef\u53e3\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u9700\u8981\u63d0\u524d\u89c4\u5212\u7aef\u53e3\uff0c\u9700\u8981\u5728 Custom Resource \u4e2d\u663e\u793a\u6307\u5b9a\u3002\u5728\u4e0b\u4f8b\u4e2d\uff0c\u5c06 Doris \u7aef\u53e3\u8fdb\u884c\u6620\u5c04\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  feSpec:\n    replicas: 3\n    service:\n      type: NodePort\n      servicePorts:\n        - nodePort: 31001\n          targetPort: 8030\n        - nodePort: 31002\n          targetPort: 8040\n        - nodePort: 31003\n          targetPort: 9030\n...\n  beSpec:\n    replicas: 3\n    service:\n      type: NodePort\n      servicePorts:\n        - nodePort: 31005\n          targetPort: 9060\n        - nodePort: 31006\n          targetPort: 8040\n        - nodePort: 31007\n          targetPort: 9050\n        - nodePort: 31008\n          targetPort: 8060\n...\n")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u914d\u7f6e\u4f7f\u7528 NodePort \u4f5c\u4e3a Service \u7c7b\u578b")),(0,t.yg)("p",null,"\u4f7f\u7528 NodePort \u8bbf\u95ee\u6a21\u5f0f\uff0c\u9700\u8981\u5b9a\u4e49 Doris Cluster \u7684 ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/doc/examples/doriscluster-all-fields-reference.yaml"},"CR")," \u6587\u4ef6\u4e2d\u6307\u5b9a FE \u4e0e BE \u4f7f\u7528 NodePort \u6a21\u5f0f\uff0c\u5177\u4f53\u6539\u52a8\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  feSpec:\n    replicas: 3\n    service:\n      type: NodePort\n...\n   beSpec:\n    replicas: 3\n    service:\n      type: NodePort\n...\n")),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},"\u83b7\u53d6 Service")),(0,t.yg)("p",null,"\u5728\u90e8\u7f72\u96c6\u7fa4\u540e\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b Doris Operator \u66b4\u9732\u7684 service\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get service\n")),(0,t.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                       AGE\nkubernetes                        ClusterIP   10.152.183.1     <none>        443/TCP                                                       169d\ndoriscluster-sample-fe-internal   ClusterIP   None             <none>        9030/TCP                                                      2d\ndoriscluster-sample-fe-service    NodePort    10.152.183.58    <none>        8030:31041/TCP,9020:30783/TCP,9030:31545/TCP,9010:31610/TCP   2d\ndoriscluster-sample-be-internal   ClusterIP   None             <none>        9050/TCP                                                      2d\ndoriscluster-sample-be-service    NodePort    10.152.183.244   <none>        9060:30940/TCP,8040:32713/TCP,9050:30621/TCP,8060:30926/TCP   2d\n")),(0,t.yg)("p",null,"Doris \u7684 Query Port \u7aef\u53e3\u9ed8\u8ba4\u4e3a 9030\uff0c\u5728\u672c\u5730\u4e2d\u88ab\u6620\u5c04\u5230\u672c\u5730\u7aef\u53e3 31545\u3002\u5728\u8bbf\u95ee Doris \u96c6\u7fa4\u65f6\uff0c\u540c\u65f6\u9700\u8981\u83b7\u53d6\u5230\u5bf9\u5e94\u7684 IP \u5730\u5740\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -owide\n")),(0,t.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME   STATUS   ROLES           AGE   VERSION   INTERNAL-IP     EXTERNAL-IP   OS-IMAGE          KERNEL-VERSION          CONTAINER-RUNTIME\nr60    Ready    control-plane   14d   v1.28.2   192.168.88.60   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr61    Ready    <none>          14d   v1.28.2   192.168.88.61   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr62    Ready    <none>          14d   v1.28.2   192.168.88.62   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr63    Ready    <none>          14d   v1.28.2   192.168.88.63   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\n")),(0,t.yg)("p",null,"\u5728 NodePort \u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u6839\u636e\u4efb\u4f55 node \u8282\u70b9\u7684\u5bbf\u4e3b\u673a IP \u4e0e\u7aef\u53e3\u6620\u5c04\u8bbf\u95ee Kubernetes \u96c6\u7fa4\u5185\u7684\u670d\u52a1\u3002\u5728\u672c\u4f8b\u4e2d\u53ef\u4ee5\u4f7f\u7528\u4efb\u4e00\u7684 node \u8282\u70b9 IP\uff0c192.168.88.61\u3001192.168.88.62\u3001192.168.88.63 \u8bbf\u95ee Doris \u670d\u52a1\u3002\u5982\u5728\u4e0b\u4f8b\u4e2d\u4f7f\u7528\u4e86 node \u8282\u70b9 192.168.88.62 \u4e0e\u6620\u5c04\u51fa\u7684 query port \u7aef\u53e3 31545 \u8bbf\u95ee\u96c6\u7fa4\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"mysql -h 192.168.88.62 -P 31545 -uroot\n")),(0,t.yg)("h2",{id:"stream-load-errorurl-\u91cd\u5b9a\u5411"},"Stream Load ErrorURL \u91cd\u5b9a\u5411"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"../../data-operate/import/import-way/stream-load-manual"},"Stream Load")," \u662f Doris \u63d0\u4f9b\u7684\u4e00\u79cd\u540c\u6b65\u5bfc\u5165\u6a21\u5f0f\uff0c\u662f\u4e00\u79cd\u9ad8\u6548\u5bfc\u5165\u672c\u5730\u6587\u4ef6\u5230 Doris \u7684\u65b9\u5f0f\u3002\u5728\u7269\u7406\u673a\u6216\u865a\u673a\u90e8\u7f72\u7684\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u4f7f\u7528 http \u7684\u65b9\u5f0f\u5411 FE \u53d1\u8d77\u5bfc\u5165\u6570\u636e\u8bf7\u6c42\uff0cFE \u901a\u8fc7 301 \u673a\u5236\u5c06\u8bf7\u6c42\u91cd\u5b9a\u5411\u5230 BE \u670d\u52a1\uff0c\u6267\u884c\u5199\u5165\u8bf7\u6c42\u3002\u5728 Kubernetes \u4e0a FE \u548c BE \u4f7f\u7528 ",(0,t.yg)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/service/"},"Service")," \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\u7684\u65b9\u5f0f\u3002\u5728\u4f7f\u7528\u4ee3\u7406\u5c4f\u853d\u5185\u90e8\u771f\u5b9e\u5730\u5740\u6765\u63d0\u4f9b\u670d\u52a1\u53d1\u73b0\u7684\u60c5\u5f62\u4e0b\uff0c\u4f7f\u7528 FE 301 \u8fd4\u56de\u7684 BE \u7684\u5730\u5740(\u670d\u52a1\u5185\u90e8\u901a\u4fe1\u4f7f\u7528\u7684\u771f\u5b9e\u7684\u5730\u5740)\u65e0\u6cd5\u8bbf\u95ee\u3002\u5728 Kubernetes \u4e0a\u9700\u8981\u4f7f\u7528 BE \u7684 Service \u5730\u5740\u5bfc\u5165\u6570\u636e\u3002"),(0,t.yg)("p",null,"\u5982\u5728\u4e0b\u4f8b\u4e2d\uff0cStream Load ErrorUrl \u8fd4\u56de\u7ed3\u679c ",(0,t.yg)("inlineCode",{parentName:"p"},"http://doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e")),(0,t.yg)("h3",{id:"\u5728\u5bb9\u5668\u5185\u90e8\u67e5\u770b-errorurl"},"\u5728\u5bb9\u5668\u5185\u90e8\u67e5\u770b ErrorURL"),(0,t.yg)("p",null,"\u5982\u679c\u5728 Kubernetes \u5185\u90e8\u8fdb\u884c Stream Load \u53ef\u76f4\u63a5\u4f7f\u7528 Stream Load \u8fd4\u56de\u7684\u9519\u8bef\u5730\u5740\u83b7\u53d6\u8be6\u7ec6\u7684\u9519\u8bef\u62a5\u544a\u3002"),(0,t.yg)("p",null,"\u5728\u4e0a\u4f8b\u8fd4\u56de\u7ed3\u679c\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u540c\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u5185\u7684 Pod \u4e2d\u901a\u8fc7 curl \u547d\u4ee4\u83b7\u53d6\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"curl http://doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e\n")),(0,t.yg)("h3",{id:"\u5728\u5bb9\u5668\u5916\u90e8\u67e5\u770b-errorurl"},"\u5728\u5bb9\u5668\u5916\u90e8\u67e5\u770b ErrorURL"),(0,t.yg)("p",null,"\u4ece Kubernetes \u5916\u90e8\u4f7f\u7528 Stream Load \u5bfc\u5165\u6570\u636e\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\uff0c\u8fd4\u56de\u7684\u9519\u8bef\u5730\u5740\u65e0\u6cd5\u76f4\u63a5\u5728 Kubernetes \u5916\u90e8\u8bbf\u95ee\u83b7\u53d6\u8be6\u7ec6\u7684\u9519\u8bef\u62a5\u544a\u3002\u5728 Kubernetes \u73af\u5883\u4e2d\u9700\u8981\u4f7f\u7528\u5b9a\u5236\u7684 Service \u4ee3\u7406\u53d1\u751f\u9519\u8bef\u7684 pod \uff0c\u5c06\u5b9a\u5236\u7684 Service \u914d\u7f6e\u4e3a\u5916\u90e8\u53ef\u8bbf\u95ee\u7684\u6a21\u5f0f\uff0c\u901a\u8fc7\u8bbf\u95ee\u4ee3\u7406 Service \u6765\u83b7\u53d6\u8be6\u7ec6\u7684\u9519\u8bef\u62a5\u544a\u3002"),(0,t.yg)("p",null,"\u5b9a\u5236\u5316 Service \u6a21\u677f\u5982\u4e0b:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.doris.service/role: debug\n    app.kubernetes.io/component: be\n  name: doriscluster-detail-error\nspec:\n  externalTrafficPolicy: Cluster\n  internalTrafficPolicy: Cluster\n  ipFamilies:\n    - IPv4\n  ipFamilyPolicy: SingleStack\n  ports:\n    - name: webserver-port\n      port: 8040\n      protocol: TCP\n      targetPort: 8040\n  selector:\n    app.kubernetes.io/component: be\n    statefulset.kubernetes.io/pod-name: ${podName}\n  sessionAffinity: None\n  type: ${ServiceType}\n")),(0,t.yg)("p",null,"\u5176\u4e2d\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"${podName} \u8868\u793a\u5f53\u524d\u53d1\u751f\u9519\u8bef\u7684 pod \u4e09\u7ea7\u57df\u540d\uff0c\u5982\u4e0a\u4f8b\u4e2d\u9700\u8981\u586b\u5199 pod \u540d\u4e3a doriscluster-sample-be-2"),(0,t.yg)("li",{parentName:"ul"},"${ServiceType} \u4e3a\u90e8\u7f72\u7684 Service \u7c7b\u578b\uff0c\u53ef\u4ee5\u9009\u62e9 NodePort \u6216 LoadBalancer")),(0,t.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u7531\u4e8e\u6bcf\u6b21 stream load \u8fd4\u56de\u7684 pod \u540d\u53ef\u80fd\u4e0d\u540c\uff0c\u83b7\u53d6 Stream Load \u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u540e\uff0c\u8bf7\u5c06\u5b9a\u5236\u5316\u7684 Service \u5220\u9664\u3002")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"NodePort \u6a21\u5f0f")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u90e8\u7f72 NodePort Service")),(0,t.yg)("p",null,"\u6309\u7167\u4e0a\u4f8b\u4e2d\u7684 service \u5c06 CR \u4e2d\u7684 ${podName} \u66ff\u6362\u6210 doriscluster-sample-be-2\uff0c\u5c06 ${ServiceType} \u66ff\u6362\u4e3a NodePort \u3002\u901a\u8fc7 kubectl apply \u547d\u4ee4\uff0c\u5728\u4e8e doris \u96c6\u7fa4\u76f8\u540c\u7684 namespace \u4e2d\u521b\u5efa service \u670d\u52a1\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl -n {namespace} apply -f strem_load_get_error.yaml\n")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u6784\u5efa\u8bbf\u95ee\u547d\u4ee4")),(0,t.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u4e0a\u8ff0\u90e8\u7f72 Service \u5206\u914d\u7684 NodePort \u7aef\u53e3\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n doris doriscluster-detail-error\n")),(0,t.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)            AGE\ndoriscluster-detail-error         NodePort    10.152.183.35    <none>        8040:31201/TCP     32s\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Stream Load")," \u8bbf\u95ee\u7684 BE \u7aef\u53e3\u4e3a 8040\uff0c \u4e0a\u8ff0 Service \u4e2d 8040 \u5bf9\u5e94\u7684\u5bbf\u4e3b\u673a\u7aef\u53e3( NodePort )\u4e3a 31201 \u3002"),(0,t.yg)("p",null,"\u83b7\u53d6 K8s \u7ba1\u63a7\u7684\u5bbf\u4e3b\u673a\u5730\u5740\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get node -owide\n")),(0,t.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME             STATUS   ROLES    AGE    VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE                       KERNEL-VERSION       CONTAINER-RUNTIME\nvm-10-8-centos   Ready    <none>   226d   v1.28.7   10.16.10.8    <none>        TencentOS Server 3.1 (Final)   5.4.119-19-0009.3    containerd://1.6.28\nvm-10-7-centos   Ready    <none>   19d    v1.28.7   10.16.10.7    <none>        TencentOS Server 3.1 (Final)   5.4.119-19.0009.25   containerd://1.6.28\n")),(0,t.yg)("p",null,"\u4f7f\u7528\u4e0a\u8ff0\u5bbf\u4e3b\u673a\u4e2d\u4efb\u4f55\u4e00\u4e2a ",(0,t.yg)("inlineCode",{parentName:"p"},"INTERNAL-IP")," \u548c\u83b7\u5f97\u5bbf\u4e3b\u673a\u7aef\u53e3\u6784\u5efa\u4f7f\u7528 NodePort \u6a21\u5f0f\u83b7\u53d6\u9519\u8bef\u8be6\u60c5\u7684\u8bbf\u95ee\u5730\u5740\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"NodePort")," \u6a21\u5f0f\u4e0b\uff0c\u83b7\u53d6\u9519\u8bef\u8be6\u60c5\u7684\u5730\u5740\u62fc\u63a5\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"\u5bbf\u4e3b\u673a IP:NodePort")," , \u5219\u6848\u4f8b\u53ef\u8bbf\u95ee\u5730\u5740\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"10.16.10.8:31201")," \uff0c \u66ff\u6362\u8fd4\u56de\u9519\u8bef\u5730\u5740\u4fe1\u606f\u4e2d\u7684\u8bbf\u95ee\u5730\u5740\uff0c\u83b7\u5f97\u53ef\u8bbf\u95ee\u9519\u8bef\u4fe1\u606f\u8be6\u60c5\u7684\u53ef\u4f7f\u7528\u5730\u5740 :"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"http://10.16.10.8:31201/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e\n")),(0,t.yg)("p",null,"\u4f7f\u7528\u4e0a\u8ff0\u547d\u4ee4\u83b7\u53d6 Stream Load \u7684\u8be6\u7ec6\u62a5\u9519\u4fe1\u606f\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"LoadBalancer \u6a21\u5f0f")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u90e8\u7f72\u83b7\u53d6\u9519\u8bef\u8be6\u60c5 Service")),(0,t.yg)("p",null,"\u5047\u8bbe Stream Load \u8303\u56f4\u7684\u9519\u8bef\u5730\u5740\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"http://doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e\n")),(0,t.yg)("p",null,"\u4e0a\u8ff0\u5730\u5740\u7684\u57df\u540d\u5730\u5740\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local")," \u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"Kubernetes")," \u4e0a ",(0,t.yg)("inlineCode",{parentName:"p"},"Doris Operator")," \u90e8\u7f72\u7684 pod \u4f7f\u7528\u7684\u57df\u540d\u4e2d\uff0c\u4e09\u7ea7\u57df\u540d\u4e3a  pod \u7684\u540d\u79f0\u3002\u5c06\u4e0a\u8ff0\u6a21\u677f\u4e2d {podName} \u66ff\u6362\u4e3a\u771f\u5b9e\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"pod")," \u540d\u79f0\uff0c\u5c06 {serviceType} \u66ff\u6362\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," \uff0c \u66f4\u6539\u540e\u4fdd\u5b58\u5230\u65b0\u5efa\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"stream_load_get_error.yaml")," \u6587\u4ef6\u4e2d\u3002\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u90e8\u7f72 service \uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl -n {namespace} apply -f strem_load_get_error.yaml\n")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u6784\u5efa\u8bbf\u95ee\u547d\u4ee4")),(0,t.yg)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4e0a\u8ff0\u90e8\u7f72 Service \u5206\u914d\u7684  LoadBalaner \u5730\u5740 EXTERNAL-IP ,\u4ee5\u4e0b\u4e3a\u5728 aws eks \u6d4b\u8bd5\u5b9e\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n doris doriscluster-detail-error\n")),(0,t.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                         TYPE          CLUSTER-IP       EXTERNAL-IP                                                              PORT(S)           AGE\ndoriscluster-detail-error    LoadBalancer  172.20.183.136   ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com  8040:32003/TCP    14s\n")),(0,t.yg)("p",null,"\u4e0a\u8ff0 Service \u83b7\u5f97\u7531 K8s \u96c6\u7fa4\u5206\u914d\u7684 LoadBalancer \u5730\u5740\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"ac4828493dgrftb884g67wg4tb68gyut``-1137856348.us-east-1.elb.amazonaws.com"),"\uff0c\u5728\u4f7f\u7528 LoadBalancer \u6a21\u5f0f\u4e2d\u7aef\u53e3\u4ecd\u7136\u4e3a\u90e8\u7f72\u90e8\u7f72\u76d1\u542c\u7684\u7aef\u53e3\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," \u6a21\u5f0f\u4e0b\uff0c\u83b7\u53d6\u9519\u8bef\u8be6\u60c5\u7684\u5730\u5740\u62fc\u63a5\u4e3a \u201cEXTERNAL-IP:listener-port\u201d\u3002\u4e0a\u4f8b\u4e2d\u53ef\u83b7\u53d6\u9519\u8bef\u8be6\u60c5\u7684\u5730\u5740\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com:8040"),"\uff0c\u83b7\u53d6\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u7684\u5730\u5740\u5982\u4e0b:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"http://ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e\n")))}u.isMDXComponent=!0}}]);