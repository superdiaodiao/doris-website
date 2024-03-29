"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4138],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>d});var o=a(296540);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,o,s=function(e,n){if(null==e)return{};var a,o,s={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=o.createContext({}),p=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var a=e.components,s=e.mdxType,t=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),g=s,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||t;return a?o.createElement(d,r(r({ref:n},c),{},{components:a})):o.createElement(d,r({ref:n},c))}));function d(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var t=a.length,r=new Array(t);r[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<t;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},654346:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>p});var o=a(58168),s=(a(296540),a(15680));const t={title:"\u6301\u4e45\u5316\u5b58\u50a8 \u4e0e ConfigMap",language:"zh-CN"},r=void 0,i={unversionedId:"install/k8s-deploy/persistent-volume",id:"install/k8s-deploy/persistent-volume",title:"\u6301\u4e45\u5316\u5b58\u50a8 \u4e0e ConfigMap",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/k8s-deploy/persistent-volume.md",sourceDirName:"install/k8s-deploy",slug:"/install/k8s-deploy/persistent-volume",permalink:"/zh-CN/docs/dev/install/k8s-deploy/persistent-volume",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6301\u4e45\u5316\u5b58\u50a8 \u4e0e ConfigMap",language:"zh-CN"}},l={},p=[{value:"StorageClass",id:"storageclass",level:2},{value:"\u5b9a\u5236\u5316 ConfigMap",id:"\u5b9a\u5236\u5316-configmap",level:2},{value:"\u4e3a conf \u76ee\u5f55\u6dfb\u52a0\u7279\u6b8a\u914d\u7f6e\u6587\u4ef6",id:"\u4e3a-conf-\u76ee\u5f55\u6dfb\u52a0\u7279\u6b8a\u914d\u7f6e\u6587\u4ef6",level:2},{value:"BE \u591a\u76d8\u914d\u7f6e",id:"be-\u591a\u76d8\u914d\u7f6e",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,s.yg)(m,(0,o.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Doris-Operator \u652f\u6301 Doris \u5404\u4e2a\u7ec4\u4ef6\u7684 pod \u6302\u8f7d PV\uff08Persistent Volume\uff09\u3002"),(0,s.yg)("p",null,"PV \u4e00\u822c\u7531 kubernetes \u7cfb\u7edf\u7ba1\u7406\u5458\u521b\u5efa\uff0cDoris-Operator \u90e8\u7f72 Doris \u670d\u52a1\u7684\u65f6\u5019\u4e0d\u76f4\u63a5\u4f7f\u7528 PV\uff0c\u800c\u662f\u901a\u8fc7 PVC \u58f0\u660e\u4e00\u7ec4\u8d44\u6e90\u6765\u5411 kubernetes \u96c6\u7fa4\u7533\u8bf7 PV\u3002\n\u5f53 PVC \u88ab\u521b\u5efa\u65f6\uff0cKubernetes \u5c06\u5c1d\u8bd5\u5c06\u5176\u4e0e\u7b26\u5408\u8981\u6c42\u7684\u53ef\u7528 PV \u8fdb\u884c\u7ed1\u5b9a\u3002\nStorageClass \u5c4f\u853d\u4e86\u7ba1\u7406\u5458\u624b\u52a8\u521b\u5efa PV \u7684\u8fc7\u7a0b\uff0c\u5bf9\u4e8e\u6ca1\u6709\u73b0\u6210\u7684 PV \u6ee1\u8db3 PVC \u9700\u6c42\u65f6\uff0c\u53ef\u4ee5\u6839\u636e StorageClass \u52a8\u6001\u5206\u914d PV\u3002\nPV \u63d0\u4f9b\u591a\u79cd\u5b58\u50a8\u7c7b\u578b\uff0c\u4e3b\u8981\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a\u7f51\u7edc\u5b58\u50a8\u3001\u672c\u5730\u5b58\u50a8\u3002\u4e24\u8005\u57fa\u4e8e\u5404\u81ea\u539f\u7406\u548c\u5b9e\u73b0\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e0d\u540c\u7684\u6027\u80fd\u548c\u4f7f\u7528\u65b9\u5f0f\u7684\u4f53\u9a8c\uff0c\u7528\u6237\u53ef\u4ee5\u4f9d\u636e\u81ea\u5df1\u7684\u5bb9\u5668\u5316\u7684\u670d\u52a1\u7c7b\u578b\u548c\u81ea\u8eab\u9700\u6c42\u9009\u62e9\u3002"),(0,s.yg)("p",null,"\u5982\u679c\u90e8\u7f72\u65f6\u672a\u5bf9 PVC \u8fdb\u884c\u914d\u7f6e\uff0cDoris-Operator \u9ed8\u8ba4 \u4f7f\u7528 ",(0,s.yg)("inlineCode",{parentName:"p"},"emptyDir")," \u6a21\u5f0f\u6765\u5b58\u50a8 \u5143\u6570\u636e \u6570\u636e\u6587\u4ef6 \u548c \u8fd0\u884c\u65e5\u5fd7\u3002\u5f53 pod \u91cd\u65b0\u542f\u52a8\u65f6\uff0c\u76f8\u5173\u6570\u636e\u5c06\u4f1a\u4e22\u5931\u3002"),(0,s.yg)("p",null,"\u5efa\u8bae\u6301\u4e45\u5316\u5b58\u50a8\u7684\u8282\u70b9\u76ee\u5f55\u7c7b\u578b\uff1a"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"FE\uff1adoris-meta\u3001log"),(0,s.yg)("li",{parentName:"ul"},"BE\uff1astorage\u3001log"),(0,s.yg)("li",{parentName:"ul"},"CN\uff1astorage\u3001log"),(0,s.yg)("li",{parentName:"ul"},"BROKER\uff1alog")),(0,s.yg)("p",null,"Doris-Operator \u540c\u65f6\u5c06\u65e5\u5fd7\u8f93\u51fa\u5230 console \u548c \u6307\u5b9a\u76ee\u5f55\u4e0b\u3002\u5982\u679c\u7528\u6237\u7684 Kubernetes \u7cfb\u7edf\u6709\u5b8c\u6574\u7684\u65e5\u5fd7\u6536\u96c6\u80fd\u529b\uff0c\u53ef\u901a\u8fc7 console \u8f93\u51fa\u6765\u6536\u96c6 Doris INFO \u7ea7\u522b\uff08\u9ed8\u8ba4\uff09\u7684\u65e5\u5fd7\u4fe1\u606f\u3002\n\u4f46\u662f\u8fd9\u91cc\u4ecd\u7136\u63a8\u8350\u914d\u7f6e PVC \u6765\u6301\u4e45\u5316\u65e5\u5fd7\u6587\u4ef6\uff0c\u56e0\u4e3a\u9664\u4e86 INFO \u7ea7\u522b\u65e5\u5fd7\u8fd8\u4f1a\u6709\u8bf8\u5982 fe.out\u3001be.out\u3001audit.log \u4ee5\u53ca \u5783\u573e\u56de\u6536\u65e5\u5fd7\uff0c\u4fbf\u4e8e\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u548c\u5ba1\u8ba1\u65e5\u5fd7\u56de\u6eaf\u3002"),(0,s.yg)("p",null,"ConfigMap \u662f Kubernetes \u4e2d\u7528\u4e8e\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6\u7684\u8d44\u6e90\u5bf9\u8c61\uff0c\u5b83\u5141\u8bb8\u52a8\u6001\u6302\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u5c06\u914d\u7f6e\u6587\u4ef6\u4e0e\u5e94\u7528\u7a0b\u5e8f\u89e3\u8026\uff0c\u4f7f\u5f97\u914d\u7f6e\u7684\u7ba1\u7406\u66f4\u52a0\u7075\u6d3b\u548c\u53ef\u7ef4\u62a4\u3002\n\u50cf PVC \u4e00\u6837 ConfigMap \u53ef\u4ee5\u88ab Pod \u5f15\u7528\uff0c\u4ee5\u4fbf\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u914d\u7f6e\u6570\u636e\u3002"),(0,s.yg)("h2",{id:"storageclass"},"StorageClass"),(0,s.yg)("p",null,"Doris-Operator \u63d0\u4f9b\u4e86\u4f7f\u7528 Kubernetes \u9ed8\u8ba4 ",(0,s.yg)("inlineCode",{parentName:"p"},"StorageClass")," \u6a21\u5f0f\u6765\u652f\u6301 FE \u548c BE \u6570\u636e\u5b58\u50a8\uff0c\u5176\u4e2d\u5b58\u50a8\u8def\u5f84\uff08mountPath\uff09\u4f7f\u7528\u955c\u50cf\u91cc\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002\n\u5982\u679c\u7528\u6237\u9700\u8981\u81ea\u5df1\u6307\u5b9a StorageClass \u5219\u9700\u8981\u5728 ",(0,s.yg)("inlineCode",{parentName:"p"},"spec.feSpec.persistentVolumes")," \u5185\u4fee\u6539 ",(0,s.yg)("inlineCode",{parentName:"p"},"persistentVolumeClaimSpec.storageClassName"),"\uff0c\u53c2\u8003\u5982\u4e0b\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n  name: doriscluster-sample-storageclass1\nspec:\n  feSpec:\n    replicas: 3\n    image: selectdb/doris.fe-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/fe/doris-meta\n      name: storage0\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          # notice: if the storage size less 5G, fe will not start normal.\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/fe/log\n      name: storage1\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n  beSpec:\n    replicas: 3\n    image: selectdb/doris.be-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/be/storage\n      name: storage2\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/be/log\n      name: storage3\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n")),(0,s.yg)("h2",{id:"\u5b9a\u5236\u5316-configmap"},"\u5b9a\u5236\u5316 ConfigMap"),(0,s.yg)("p",null,"Doris \u5728 Kubernetes \u4f7f\u7528 ",(0,s.yg)("inlineCode",{parentName:"p"},"ConfigMap")," \u5b9e\u73b0\u914d\u7f6e\u6587\u4ef6\u548c\u670d\u52a1\u89e3\u8026\u3002 \u5728\u90e8\u7f72 ",(0,s.yg)("inlineCode",{parentName:"p"},"doriscluster")," \u4e4b\u524d\u9700\u8981\u63d0\u524d\u5728\u540c ",(0,s.yg)("inlineCode",{parentName:"p"},"namespace")," \u4e0b\u90e8\u7f72\u60f3\u8981\u4f7f\u7528\u7684 ",(0,s.yg)("inlineCode",{parentName:"p"},"ConfigMap"),"\uff0c\u4ee5\u4e0b\u6837\u4f8b\u5c55\u793a\u4e86 FE \u4f7f\u7528\u540d\u79f0\u4e3a fe-configmap \u7684 ",(0,s.yg)("inlineCode",{parentName:"p"},"ConfigMap"),"\uff0c BE \u4f7f\u7528\u540d\u79f0\u4e3a be-configmap \u7684 ",(0,s.yg)("inlineCode",{parentName:"p"},"ConfigMap")," \u7684\u96c6\u7fa4\u76f8\u5173 yaml:  "),(0,s.yg)("p",null,"FE \u7684 ConfigMap \u6837\u4f8b"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: fe-configmap\n  labels:\n    app.kubernetes.io/component: fe\ndata:\n  fe.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    # the output dir of stderr and stdout\n    LOG_DIR = ${DORIS_HOME}/log\n\n    JAVA_OPTS="-Djavax.security.auth.useSubjectCredsOnly=false -Xss4m -Xmx8192m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$CUR_DATE"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Djavax.security.auth.useSubjectCredsOnly=false -Xss4m -Xmx8192m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$CUR_DATE:time"\n\n    # INFO, WARN, ERROR, FATAL\n    sys_log_level = INFO\n\n    # NORMAL, BRIEF, ASYNC\n    sys_log_mode = NORMAL\n\n    # Default dirs to put jdbc drivers,default value is ${DORIS_HOME}/jdbc_drivers\n    # jdbc_drivers_dir = ${DORIS_HOME}/jdbc_drivers\n\n    http_port = 8030\n    rpc_port = 9020\n    query_port = 9030\n    edit_log_port = 9010\n    \n    enable_fqdn_mode = true\n')),(0,s.yg)("p",null,"\u6ce8\u610f\uff0c\u4f7f\u7528 FE \u7684 ConfigMap \uff0c\u5fc5\u987b\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u6dfb\u52a0 ",(0,s.yg)("inlineCode",{parentName:"p"},"enable_fqdn_mode = true"),"\uff0c\u5177\u4f53\u539f\u56e0\u53ef\u53c2\u8003 ",(0,s.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/admin-manual/cluster-management/fqdn"},"\u6b64\u5904\u6587\u6863")),(0,s.yg)("p",null,"BE \u7684 ConfigMap \u6837\u4f8b"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    PPROF_TMPDIR="$DORIS_HOME/log/"\n\n    JAVA_OPTS="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xloggc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xlog:gc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # since 1.2, the JAVA_HOME need to be set to run BE process.\n    # JAVA_HOME=/path/to/jdk/\n\n    # https://github.com/apache/doris/blob/master/docs/zh-CN/community/developer-guide/debug-tool.md#jemalloc-heap-profile\n    # https://jemalloc.net/jemalloc.3.html\n    JEMALLOC_CONF="percpu_arena:percpu,background_thread:true,metadata_thp:auto,muzzy_decay_ms:15000,dirty_decay_ms:15000,oversize_threshold:0,prof:false,lg_prof_interval:32,lg_prof_sample:19,prof_gdump:false,prof_accum:false,prof_leak:false,prof_final:false"\n    JEMALLOC_PROF_PRFIX=""\n\n    # INFO, WARNING, ERROR, FATAL\n    sys_log_level = INFO\n\n    # ports for admin, web, heartbeat service\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n')),(0,s.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0a\u4e24\u4e2a ",(0,s.yg)("inlineCode",{parentName:"p"},"ConfigMap")," \u7684 ",(0,s.yg)("inlineCode",{parentName:"p"},"doriscluster")," \u90e8\u7f72\u6837\u4f8b:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n  name: doriscluster-sample-configmap\nspec:\n  feSpec:\n    replicas: 3\n    image: selectdb/doris.fe-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    configMapInfo:\n      # use kubectl create configmap fe-configmap --from-file=fe.conf\n      configMapName: fe-configmap\n      resolveKey: fe.conf\n  beSpec:\n    replicas: 3\n    image: selectdb/doris.be-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    configMapInfo:\n      # use kubectl create configmap be-configmap --from-file=be.conf\n      configMapName: be-configmap\n      resolveKey: be.conf\n  brokerSpec:\n    replicas: 3\n    image: selectdb/doris.broker-ubuntu:2.0.2\n    limits:\n      cpu: 2\n      memory: 4Gi\n    requests:\n      cpu: 2\n      memory: 4Gi\n    configMapInfo:\n      # use kubectl create configmap broker-configmap --from-file=apache_hdfs_broker.conf\n      configMapName: broker-configmap\n      resolveKey: apache_hdfs_broker.conf\n\n")),(0,s.yg)("p",null,"\u8fd9\u91cc\u7684 ",(0,s.yg)("inlineCode",{parentName:"p"},"resolveKey")," \u662f\u4f20\u5165\u914d\u7f6e\u6587\u4ef6\u540d\uff08\u5fc5\u987b\u662f",(0,s.yg)("inlineCode",{parentName:"p"},"fe.conf"),"\uff0c",(0,s.yg)("inlineCode",{parentName:"p"},"be.conf")," \u6216 ",(0,s.yg)("inlineCode",{parentName:"p"},"apache_hdfs_broker.conf"),"\uff0ccn \u8282\u70b9\u4e5f\u662f ",(0,s.yg)("inlineCode",{parentName:"p"},"be.conf"),"\uff09 \u7528\u4ee5\u89e3\u6790\u4f20\u5165\u7684 Doris \u96c6\u7fa4\u914d\u7f6e\u7684\u6587\u4ef6\uff0cdoris-operator \u4f1a\u53bb\u89e3\u6790\u8be5\u6587\u4ef6\u53bb\u6307\u5bfc doriscluster \u7684\u5b9a\u5236\u5316\u90e8\u7f72\u3002"),(0,s.yg)("h2",{id:"\u4e3a-conf-\u76ee\u5f55\u6dfb\u52a0\u7279\u6b8a\u914d\u7f6e\u6587\u4ef6"},"\u4e3a conf \u76ee\u5f55\u6dfb\u52a0\u7279\u6b8a\u914d\u7f6e\u6587\u4ef6"),(0,s.yg)("p",null,"\u672c\u6bb5\u843d\u7528\u6765\u4f9b\u53c2\u8003 \u9700\u8981\u5728 Doris \u8282\u70b9\u7684 conf \u76ee\u5f55\u653e\u7f6e\u914d\u7f6e\u5176\u4ed6\u6587\u4ef6\u7684\u5bb9\u5668\u5316\u90e8\u7f72\u65b9\u6848\u3002\u6bd4\u5982\u5e38\u89c1\u7684 ",(0,s.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"\u6570\u636e\u6e56\u8054\u90a6\u67e5\u8be2")," \u7684 hdfs \u914d\u7f6e\u6587\u4ef6\u6620\u5c04\u3002"),(0,s.yg)("p",null,"\u8fd9\u91cc\u4ee5 BE \u7684 ConfigMap \u548c \u9700\u8981\u6dfb\u52a0\u7684 core-site.xml \u6587\u4ef6\u4e3a\u4f8b\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n  core-site.xml: |\n    <?xml version="1.0" encoding="UTF-8"?>\n    <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n    <configuration>\n      <property>\n      <name>hadoop.security.authentication</name>\n        <value>kerberos</value>\n      </property>\n    </configuration>\n    ...\n')),(0,s.yg)("p",null,"\u6ce8\u610f\uff0c",(0,s.yg)("inlineCode",{parentName:"p"},"data")," \u5185\u6570\u636e\u7ed3\u6784\u5982\u4e0b\u952e\u503c\u5bf9\u6620\u5c04\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"data:\n \u6587\u4ef6\u540d_1:\n   \u6587\u4ef6\u6587\u672c\u5185\u5bb9_1\n \u6587\u4ef6\u540d_2:\n   \u6587\u4ef6\u6587\u672c\u5185\u5bb9_2\n \u6587\u4ef6\u540d_3:\n   \u6587\u4ef6\u6587\u672c\u5185\u5bb9_3\n")),(0,s.yg)("h2",{id:"be-\u591a\u76d8\u914d\u7f6e"},"BE \u591a\u76d8\u914d\u7f6e"),(0,s.yg)("p",null,"Doris \u7684 BE \u670d\u52a1\u652f\u6301\u591a\u76d8\u6302\u8f7d\uff0c\u5728\u670d\u52a1\u5668\u65f6\u4ee3\u80fd\u591f\u5f88\u597d\u6ee1\u8db3\u4e00\u4e2a\u8ba1\u7b97\u8d44\u6e90\u548c\u5b58\u50a8\u8d44\u6e90\u4e0d\u5339\u914d\u7684\u95ee\u9898\uff0c\u540c\u65f6\u4f7f\u7528\u591a\u76d8\u4e5f\u80fd\u591f\u5f88\u597d\u63d0\u9ad8 Doris \u7684\u5b58\u50a8\u6548\u7387\u3002\u5728 Kubernetes \u4e0a Doris \u540c\u6837\u53ef\u4ee5\u6302\u8f7d\u591a\u76d8\u6765\u5b9e\u73b0\u5b58\u50a8\u6548\u76ca\u6700\u5927\u5316\u3002\u5728 Kubernetes \u4e0a\u4f7f\u7528\u591a\u76d8\u9700\u8981\u914d\u5408\u914d\u7f6e\u6587\u4ef6\u4e00\u8d77\u4f7f\u7528\u3002\n\u4e3a\u5b9e\u73b0\u670d\u52a1\u548c\u914d\u7f6e\u89e3\u8026\uff0cDoris \u91c7\u7528 ",(0,s.yg)("inlineCode",{parentName:"p"},"ConfigMap")," \u6765\u4f5c\u4e3a\u914d\u7f6e\u7684\u627f\u8f7d\uff0c\u5b9e\u73b0\u914d\u7f6e\u6587\u4ef6\u52a8\u6001\u6302\u8f7d\u7ed9\u670d\u52a1\u4f7f\u7528\u3002\n\u4ee5\u4e0b\u4e3a BE \u670d\u52a1\u4f7f\u7528 ",(0,s.yg)("inlineCode",{parentName:"p"},"ConfigMap")," \u6765\u627f\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u6302\u8f7d\u4e24\u5757\u76d8\u4f9bBE\u4f7f\u7528\u7684 doriscluster \u914d\u7f6e\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n  name: doriscluster-sample-storageclass1\nspec:\n  feSpec:\n    replicas: 3\n    image: selectdb/doris.fe-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/fe/doris-meta\n      name: storage0\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          # notice: if the storage size less 5G, fe will not start normal.\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/fe/log\n      name: storage1\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n  beSpec:\n    replicas: 3\n    image: selectdb/doris.be-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    configMapInfo:\n      configMapName: be-configmap\n      resolveKey: be.conf\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/be/storage\n      name: storage2\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/be/storage1\n      name: storage3\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/be/log\n      name: storage4\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n")),(0,s.yg)("p",null,"\u4e0e\u9ed8\u8ba4\u6837\u4f8b\u76f8\u6bd4\u589e\u52a0\u4e86 ",(0,s.yg)("inlineCode",{parentName:"p"},"configMapInfo")," \u7684\u914d\u7f6e\uff0c\u540c\u65f6\u4e5f\u589e\u52a0\u4e86\u4e00\u4e2a ",(0,s.yg)("inlineCode",{parentName:"p"},"persistentVolumeClaimSpec")," \u7684\u914d\u7f6e\uff0c",(0,s.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#PersistentVolumeClaimSpec"},(0,s.yg)("inlineCode",{parentName:"a"},"persistentVolumeClaimSpec"))," \u5b8c\u5168\u9075\u5faa Kubernetes \u539f\u751f\u8d44\u6e90 PVC spec \u7684\u5b9a\u4e49\u683c\u5f0f\u3002\n\u6837\u4f8b\u4e2d ",(0,s.yg)("inlineCode",{parentName:"p"},"configMapInfo")," \u6807\u8bc6 BE \u90e8\u7f72\u540e\u4f7f\u7528\u540c ",(0,s.yg)("inlineCode",{parentName:"p"},"namespace")," \u4e0b\u54ea\u4e00\u4e2a ConfigMap \u4ee5\u53ca \u54ea\u4e00\u4e2a key \u5bf9\u5e94\u7684\u5185\u5bb9\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\uff0c\u5176\u4e2d key \u4e3a\u5fc5\u987b\u4e3a be.conf\u3002\u4ee5\u4e0b\u4e3a\u9700\u8981\u9884\u5148\u90e8\u7f72\u7684\u914d\u5408\u4e0a\u8ff0 ",(0,s.yg)("inlineCode",{parentName:"p"},"doriscluster")," ConfigMap \u6837\u4f8b\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    PPROF_TMPDIR="$DORIS_HOME/log/"\n\n    JAVA_OPTS="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xloggc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xlog:gc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # since 1.2, the JAVA_HOME need to be set to run BE process.\n    # JAVA_HOME=/path/to/jdk/\n\n    # https://github.com/apache/doris/blob/master/docs/zh-CN/community/developer-guide/debug-tool.md#jemalloc-heap-profile\n    # https://jemalloc.net/jemalloc.3.html\n    JEMALLOC_CONF="percpu_arena:percpu,background_thread:true,metadata_thp:auto,muzzy_decay_ms:15000,dirty_decay_ms:15000,oversize_threshold:0,prof:false,lg_prof_interval:32,lg_prof_sample:19,prof_gdump:false,prof_accum:false,prof_leak:false,prof_final:false"\n    JEMALLOC_PROF_PRFIX=""\n\n    # INFO, WARNING, ERROR, FATAL\n    sys_log_level = INFO\n\n    # ports for admin, web, heartbeat service\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n    \n    storage_root_path = /opt/apache-doris/be/storage,medium:ssd;/opt/apache-doris/be/storage1,medium:ssd\n')),(0,s.yg)("p",null,"\u5728\u4f7f\u7528\u591a\u76d8\u65f6\uff0c",(0,s.yg)("inlineCode",{parentName:"p"},"ConfigMap")," \u4e2d ",(0,s.yg)("inlineCode",{parentName:"p"},"storage_root_path")," \u5bf9\u5e94\u503c\u4e2d\u7684\u8def\u5f84\u8981\u4e0e ",(0,s.yg)("inlineCode",{parentName:"p"},"doriscluster")," \u4e2d ",(0,s.yg)("inlineCode",{parentName:"p"},"persistentVolume")," \u5404\u4e2a\u6302\u8f7d\u8def\u5f84\u5bf9\u5e94\u3002",(0,s.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/admin-manual/config/be-config/#storage_root_path"},(0,s.yg)("inlineCode",{parentName:"a"},"storage_root_path"))," \u5bf9\u5e94\u7684\u4e66\u5199\u89c4\u5219\u8bf7\u53c2\u8003\u94fe\u63a5\u4e2d\u6587\u6863\u3002\n\u5728\u4f7f\u7528\u4e91\u76d8\u7684\u60c5\u5f62\u4e0b\uff0c\u4ecb\u8d28\u7edf\u4e00\u4f7f\u7528 ",(0,s.yg)("inlineCode",{parentName:"p"},"SSD"),"\u3002"))}u.isMDXComponent=!0}}]);