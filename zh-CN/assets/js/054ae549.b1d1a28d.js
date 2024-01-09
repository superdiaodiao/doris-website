"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u57fa\u4e8e Doris-Operator \u90e8\u7f72",language:"zh-CN"},l=void 0,p={unversionedId:"install/k8s-deploy/operator-deploy",id:"install/k8s-deploy/operator-deploy",title:"\u57fa\u4e8e Doris-Operator \u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/k8s-deploy/operator-deploy.md",sourceDirName:"install/k8s-deploy",slug:"/install/k8s-deploy/operator-deploy",permalink:"/zh-CN/docs/dev/install/k8s-deploy/operator-deploy",draft:!1,tags:[],version:"current",frontMatter:{title:"\u57fa\u4e8e Doris-Operator \u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"\u90e8\u7f72 Docker \u96c6\u7fa4",permalink:"/zh-CN/docs/dev/install/construct-docker/run-docker-cluster"},next:{title:"\u57fa\u4e8e Helm Chart \u90e8\u7f72",permalink:"/zh-CN/docs/dev/install/k8s-deploy/helm-chart-deploy"}},s={},i=[{value:"Kubernetes \u4e0a\u90e8\u7f72 Doris \u96c6\u7fa4",id:"kubernetes-\u4e0a\u90e8\u7f72-doris-\u96c6\u7fa4",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u90e8\u7f72 Doris-Operator",id:"\u90e8\u7f72-doris-operator",level:3},{value:"\u90e8\u7f72 Doris \u96c6\u7fa4",id:"\u90e8\u7f72-doris-\u96c6\u7fa4",level:3},{value:"\u8bbf\u95ee\u96c6\u7fa4",id:"\u8bbf\u95ee\u96c6\u7fa4",level:3},{value:"\u540e\u8bb0",id:"\u540e\u8bb0",level:3}],c={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Doris-Operator \u662f\u6309\u7167 Kubernetes \u539f\u5219\u6784\u5efa\u7684\u5728 Kubernetes \u5e73\u53f0\u4e4b\u4e0a\u7ba1\u7406\u8fd0\u7ef4 Doris \u96c6\u7fa4\u7684\u7ba1\u7406\u8f6f\u4ef6\uff0c\u5141\u8bb8\u7528\u6237\u6309\u7167\u8d44\u6e90\u5b9a\u4e49\u7684\u65b9\u5f0f\u5728 Kubernetes \u5e73\u53f0\u4e4b\u4e0a\u90e8\u7f72\u7ba1\u7406 Doris \u670d\u52a1\u3002Doris-Operator \u80fd\u591f\u7ba1\u7406 Doris \u7684\u6240\u6709\u90e8\u7f72\u5f62\u6001\uff0c\u80fd\u591f\u5b9e\u73b0 Doris \u5927\u89c4\u6a21\u5f62\u6001\u4e0b\u667a\u80fd\u5316\u548c\u5e76\u884c\u5316\u7ba1\u7406\u3002"),(0,n.kt)("h2",{id:"kubernetes-\u4e0a\u90e8\u7f72-doris-\u96c6\u7fa4"},"Kubernetes \u4e0a\u90e8\u7f72 Doris \u96c6\u7fa4"),(0,n.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,n.kt)("p",null,"\u4f7f\u7528 Doris-Operator \u90e8\u7f72 Doris \u524d\u63d0\u9700\u8981\u4e00\u4e2a Kubernetes (\u7b80\u79f0 K8S)\u96c6\u7fa4\uff0c\u5982\u679c\u5df2\u62e5\u6709\u53ef\u76f4\u63a5\u8df3\u8fc7\u73af\u5883\u51c6\u5907\u9636\u6bb5\u3002  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa K8S \u96c6\u7fa4"),"  "),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u5728\u559c\u6b22\u7684\u4e91\u5e73\u53f0\u4e0a\u7533\u8bf7\u4e91\u6258\u7ba1\u7684 K8S \u96c6\u7fa4\u670d\u52a1\uff0c\u4f8b\u5982\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/kubernetes"},"\u963f\u91cc\u4e91\u7684 ACK "),"\u6216\u8005",(0,n.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/product/tke"}," \u817e\u8baf\u7684 TKE "),"\u7b49\u7b49\uff0c\u4e5f\u53ef\u4ee5\u6309\u7167 ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/"},"Kubernetes")," \u5b98\u65b9\u63a8\u8350\u7684\u65b9\u5f0f\u624b\u52a8\u642d\u5efa K8S \u96c6\u7fa4\u3002 "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa ACK \u96c6\u7fa4",(0,n.kt)("br",{parentName:"li"}),"\u60a8\u53ef\u6309\u7167\u963f\u91cc\u4e91\u5b98\u65b9\u6587\u6863\u5728\u963f\u91cc\u4e91\u5e73\u53f0\u521b\u5efa ",(0,n.kt)("a",{parentName:"li",href:"https://help.aliyun.com/zh/ack/ack-managed-and-ack-dedicated/getting-started/getting-started/"},"ACK \u96c6\u7fa4"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa TKE \u96c6\u7fa4",(0,n.kt)("br",{parentName:"li"}),"\u5982\u679c\u4f60\u4f7f\u7528\u817e\u8baf\u4e91\u53ef\u4ee5\u6309\u7167\u817e\u8baf\u4e91TKE\u76f8\u5173\u6587\u6863\u521b\u5efa ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/457/54231"},"TKE \u96c6\u7fa4"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u79c1\u6709\u96c6\u7fa4",(0,n.kt)("br",{parentName:"li"}),"\u79c1\u6709\u96c6\u7fa4\u642d\u5efa\uff0c\u6211\u4eec\u5efa\u8bae\u6309\u7167\u5b98\u65b9\u63a8\u8350\u7684\u65b9\u5f0f\u642d\u5efa\uff0c\u6bd4\u5982\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kops/"},"kOps"),"\u3002")),(0,n.kt)("h3",{id:"\u90e8\u7f72-doris-operator"},"\u90e8\u7f72 Doris-Operator"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. \u6dfb\u52a0 DorisCluster ",(0,n.kt)("a",{parentName:"strong",href:"https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"\u8d44\u6e90\u5b9a\u4e49"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/selectdb/doris-operator/master/config/crd/bases/doris.selectdb.com_dorisclusters.yaml    \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. \u90e8\u7f72 Doris-Operator"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e00\uff1a\u9ed8\u8ba4\u90e8\u7f72\u6a21\u5f0f"),(0,n.kt)("br",{parentName:"p"}),"\n","\u76f4\u63a5\u901a\u8fc7\u4ed3\u5e93\u4e2d Operator \u7684\u5b9a\u4e49\u8fdb\u884c\u90e8\u7f72   "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/selectdb/doris-operator/master/config/operator/operator.yaml\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e8c\uff1a\u81ea\u5b9a\u4e49\u90e8\u7f72"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/config/operator/operator.yaml"},"operator.yaml")," \u4e2d\u5404\u4e2a\u914d\u7f6e\u662f\u90e8\u7f72 Operator \u670d\u52a1\u7684\u6700\u4f4e\u8981\u6c42\u3002\u4e3a\u63d0\u9ad8\u7ba1\u7406\u6548\u7387\u6216\u8005\u6709\u5b9a\u5236\u5316\u7684\u9700\u6c42\uff0c\u4e0b\u8f7d operator.yaml \u8fdb\u884c\u81ea\u5b9a\u4e49\u90e8\u7f72\u3002  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d Operator \u7684\u90e8\u7f72\u8303\u4f8b ",(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/selectdb/doris-operator/master/config/operator/operator.yaml"},"operator.yaml"),"\uff0c\u53ef\u76f4\u63a5\u901a\u8fc7 wget \u8fdb\u884c\u4e0b\u8f7d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6309\u671f\u671b\u66f4\u65b0 operator.yaml \u4e2d\u5404\u79cd\u914d\u7f6e\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u90e8\u7f72 Doris-Operator \u670d\u52a1\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f operator.yaml\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. \u68c0\u67e5 Doris-Operator \u670d\u52a1\u90e8\u7f72\u72b6\u6001"),(0,n.kt)("br",{parentName:"p"}),"\n","Operator \u670d\u52a1\u90e8\u7f72\u540e\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u670d\u52a1\u7684\u72b6\u6001\u3002\u5f53",(0,n.kt)("inlineCode",{parentName:"p"},"STATUS"),"\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"Running"),"\u72b6\u6001\uff0c\u4e14 pod \u4e2d\u6240\u6709\u5bb9\u5668\u90fd\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"Ready"),"\u72b6\u6001\u65f6\u670d\u52a1\u90e8\u7f72\u6210\u529f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," kubectl -n doris get pods\n NAME                              READY   STATUS    RESTARTS        AGE\n doris-operator-5b9f7f57bf-tsvjz   1/1     Running   66 (164m ago)   6d22h\n")),(0,n.kt)("p",null,"operator.yaml \u4e2d namespace \u9ed8\u8ba4\u4e3a Doris\uff0c\u5982\u679c\u66f4\u6539\u4e86 namespace\uff0c\u5728\u67e5\u8be2\u670d\u52a1\u72b6\u6001\u7684\u65f6\u5019\u8bf7\u66ff\u6362\u6b63\u786e\u7684 namespace \u540d\u79f0\u3002"),(0,n.kt)("h3",{id:"\u90e8\u7f72-doris-\u96c6\u7fa4"},"\u90e8\u7f72 Doris \u96c6\u7fa4"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. \u90e8\u7f72\u96c6\u7fa4"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"Doris-Operator"),"\u4ed3\u5e93\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/tree/master/doc/examples"},"doc/examples")," \u76ee\u5f55\u63d0\u4f9b\u4f17\u591a\u573a\u666f\u7684\u4f7f\u7528\u8303\u4f8b\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u8303\u4f8b\u8fdb\u884c\u90e8\u7f72\u3002\u4ee5\u6700\u57fa\u7840\u7684\u8303\u4f8b\u4e3a\u4f8b\uff1a  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/selectdb/doris-operator/master/doc/examples/doriscluster-sample.yaml\n")),(0,n.kt)("p",null,"\u5728 Doris-Operator \u4ed3\u5e93\u4e2d\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/tree/master/doc/how_to_use_cn.md"},"how_to_use.md")," \u68b3\u7406\u4e86 Operator \u7ba1\u7406\u8fd0\u7ef4 Doris \u96c6\u7fa4\u7684\u4e3b\u8981\u80fd\u529b\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/api/doris/v1/types.go"},"DorisCluster")," \u5c55\u793a\u4e86\u8d44\u6e90\u5b9a\u4e49\u548c\u4ece\u5c5e\u7ed3\u6784\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/tree/master/doc/api.md"},"api.md")," \u53ef\u8bfb\u6027\u5c55\u793a\u4e86\u8d44\u6e90\u5b9a\u4e49\u548c\u4ece\u5c5e\u7ed3\u6784\u3002\u53ef\u6839\u636e\u76f8\u5173\u6587\u6863\u89c4\u5212\u90e8\u7f72 Doris \u96c6\u7fa4\u3002  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. \u68c0\u6d4b\u96c6\u7fa4\u72b6\u6001")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u6240\u6709 pod \u7684\u72b6\u6001",(0,n.kt)("br",{parentName:"li"}),"\u96c6\u7fa4\u90e8\u7f72\u8d44\u6e90\u4e0b\u53d1\u540e\uff0c\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001\u3002\u5f53\u6240\u6709 pod \u7684",(0,n.kt)("inlineCode",{parentName:"li"},"STATUS"),"\u90fd\u662f",(0,n.kt)("inlineCode",{parentName:"li"},"Running"),"\u72b6\u6001\uff0c \u4e14\u6240\u6709\u7ec4\u4ef6\u7684 pod \u4e2d\u6240\u6709\u5bb9\u5668\u90fd",(0,n.kt)("inlineCode",{parentName:"li"},"READY"),"\u8868\u793a\u6574\u4e2a\u96c6\u7fa4\u90e8\u7f72\u6b63\u5e38\u3002",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods\nNAME                       READY   STATUS    RESTARTS   AGE\ndoriscluster-sample-fe-0   1/1     Running   0          20m\ndoriscluster-sample-be-0   1/1     Running   0          19m\n"))),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001",(0,n.kt)("br",{parentName:"li"}),"Doris-Operator \u4f1a\u6536\u96c6\u96c6\u7fa4\u670d\u52a1\u7684\u72b6\u6001\u663e\u793a\u5230\u4e0b\u53d1\u7684\u8d44\u6e90\u4e2d\u3002Doris-Operator \u5b9a\u4e49\u4e86",(0,n.kt)("inlineCode",{parentName:"li"},"DorisCluster"),"\u7c7b\u578b\u8d44\u6e90\u540d\u79f0\u7684\u7b80\u5199",(0,n.kt)("inlineCode",{parentName:"li"},"dcr"),"\uff0c\u5728\u4f7f\u7528\u8d44\u6e90\u7c7b\u578b\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\u65f6\u53ef\u7528\u7b80\u5199\u66ff\u4ee3\u3002\u5f53\u914d\u7f6e\u7684\u76f8\u5173\u670d\u52a1\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"STATUS"),"\u90fd\u4e3a",(0,n.kt)("inlineCode",{parentName:"li"},"available"),"\u65f6\uff0c\u96c6\u7fa4\u90e8\u7f72\u6210\u529f\u3002",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get dcr\nNAME                  FESTATUS    BESTATUS    CNSTATUS   BROKERSTATUS\ndoriscluster-sample   available   available\n")))),(0,n.kt)("h3",{id:"\u8bbf\u95ee\u96c6\u7fa4"},"\u8bbf\u95ee\u96c6\u7fa4"),(0,n.kt)("p",null,"Doris-Operator \u4e3a\u6bcf\u4e2a\u7ec4\u4ef6\u63d0\u4f9b K8S \u7684 Service \u4f5c\u4e3a\u8bbf\u95ee\u5165\u53e3\uff0c\u53ef\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},'kubectl -n {namespace} get svc -l "app.doris.ownerreference/name={dorisCluster.Name}"'),"\u6765\u67e5\u770b Doris \u96c6\u7fa4\u6709\u5173\u7684 Service\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"dorisCluster.Name"),"\u4e3a\u90e8\u7f72",(0,n.kt)("inlineCode",{parentName:"p"},"DorisCluster"),"\u8d44\u6e90\u5b9a\u4e49\u7684\u540d\u79f0\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n default get svc -l "app.doris.ownerreference/name=doriscluster-sample"\nNAME                              TYPE        CLUSTER-IP       EXTERNAL-IP                                           PORT(S)                               AGE\ndoriscluster-sample-fe-internal   ClusterIP   None             <none>                                                9030/TCP                              30m\ndoriscluster-sample-fe-service    ClusterIP   10.152.183.37    a7509284bf3784983a596c6eec7fc212-618xxxxxx.com        8030/TCP,9020/TCP,9030/TCP,9010/TCP   30m\ndoriscluster-sample-be-internal   ClusterIP   None             <none>                                                9050/TCP                              29m\ndoriscluster-sample-be-service    ClusterIP   10.152.183.141   <none>                                                9060/TCP,8040/TCP,9050/TCP,8060/TCP   29m\n')),(0,n.kt)("p",null,"Doris-Operator \u90e8\u7f72\u7684 Service \u5206\u4e3a\u4e24\u7c7b\uff0c\u540e\u7f00",(0,n.kt)("inlineCode",{parentName:"p"},"-internal"),"\u4e3a\u96c6\u7fa4\u5185\u90e8\u7ec4\u4ef6\u901a\u4fe1\u4f7f\u7528\u7684 Service\uff0c\u540e\u7f00",(0,n.kt)("inlineCode",{parentName:"p"},"-service"),"\u4e3a\u7528\u6237\u53ef\u4f7f\u7528\u7684 Service\u3002 "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u5185\u90e8\u8bbf\u95ee"),"  "),(0,n.kt)("p",null,"\u5728 K8S \u5185\u90e8\u53ef\u901a\u8fc7 Service \u7684",(0,n.kt)("inlineCode",{parentName:"p"},"CLUSTER-IP"),"\u8bbf\u95ee\u5bf9\u5e94\u7684\u7ec4\u4ef6\u3002\u5982\u4e0a\u56fe\u53ef\u4f7f\u7528\u8bbf\u95ee FE \u7684 Service",(0,n.kt)("inlineCode",{parentName:"p"},"doriscluster-sample-fe-service"),"\u5bf9\u5e94\u7684 CLUSTER-IP \u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"10.152.183.37"),"\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fde\u63a5 FE \u670d\u52a1\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h 10.152.183.37 -uroot -P9030\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee"),"  "),(0,n.kt)("p",null,"Doris \u96c6\u7fa4\u90e8\u7f72\u9ed8\u8ba4\u4e0d\u63d0\u4f9b K8S \u5916\u90e8\u8bbf\u95ee\uff0c\u5982\u679c\u96c6\u7fa4\u9700\u8981\u88ab\u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee\uff0c\u9700\u8981\u96c6\u7fa4\u80fd\u591f\u7533\u8bf7 lb \u8d44\u6e90\u3002\u5177\u5907\u524d\u63d0\u540e\uff0c\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/doc/api.md"},"api.md")," \u6587\u6863\u914d\u7f6e\u76f8\u5173\u7ec4\u4ef6",(0,n.kt)("inlineCode",{parentName:"p"},"service"),"\u5b57\u6bb5\uff0c\u90e8\u7f72\u540e\u901a\u8fc7\u5bf9\u5e94 Service \u7684",(0,n.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),"\u8fdb\u884c\u8bbf\u95ee\u3002\u4ee5\u4e0a\u56fe\u4e2d FE \u4e3a\u4f8b\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fde\u63a5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h a7509284bf3784983a596c6eec7fc212-618xxxxxx.com -uroot -P9030\n")),(0,n.kt)("h3",{id:"\u540e\u8bb0"},"\u540e\u8bb0"),(0,n.kt)("p",null,"\u672c\u6587\u7b80\u8ff0 Doris \u5728 Kubernetes \u7684\u90e8\u7f72\u4f7f\u7528\uff0cDoris-Operator \u63d0\u4f9b\u7684\u5176\u4ed6\u80fd\u529b\u8bf7\u53c2\u770b",(0,n.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/tree/master/doc/how_to_use_cn.md"},"\u4e3b\u8981\u80fd\u529b\u4ecb\u7ecd"),"\uff0cDorisCluster \u8d44\u6e90\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/doc/api.md"},"api")," \u53ef\u8bfb\u6027\u6587\u6863\u5b9a\u5236\u5316\u90e8\u7f72 Doris \u96c6\u7fa4\u3002"))}u.isMDXComponent=!0}}]);