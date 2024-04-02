"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74943],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},401558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(296540),n(15680));const a={title:"How to enter the container when the service crashes",language:"en"},i=void 0,s={unversionedId:"install/k8s-deploy/debug-crash",id:"install/k8s-deploy/debug-crash",title:"How to enter the container when the service crashes",description:"\x3c!--",source:"@site/docs/install/k8s-deploy/debug-crash.md",sourceDirName:"install/k8s-deploy",slug:"/install/k8s-deploy/debug-crash",permalink:"/docs/dev/install/k8s-deploy/debug-crash",draft:!1,tags:[],version:"current",frontMatter:{title:"How to enter the container when the service crashes",language:"en"},sidebar:"docs",previous:{title:"Service expansion and contraction",permalink:"/docs/dev/install/k8s-deploy/expansion-and-contraction"},next:{title:"Doris on AWS",permalink:"/docs/dev/install/doris-on-aws"}},l={},p=[{value:"Start Debug mode",id:"start-debug-mode",level:2},{value:"Exit Debug mode",id:"exit-debug-mode",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In the k8s environment, the service will enter the ",(0,o.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," state due to some unexpected things. You can view the pod status and pod_name under the specified namespace through the ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl get pod --namespace ${namespace}")," command."),(0,o.yg)("p",null,"In this state, the cause of the service problem cannot be determined simply by using the describe and logs commands. When the service enters the ",(0,o.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," state, there needs to be a mechanism that allows the pod deploying the service to enter the ",(0,o.yg)("inlineCode",{parentName:"p"},"running")," state so that users can enter the container for debugging through exec."),(0,o.yg)("p",null,"doris-operator provides a ",(0,o.yg)("inlineCode",{parentName:"p"},"debug")," running mode. In essence, the debug process occupies the active detection port of the corresponding node, bypasses the k8s active detection mechanism, and creates a smoothly running container environment to facilitate users to enter and locate problems."),(0,o.yg)("p",null,"The following describes how to enter debug mode for manual debugging when the service enters ",(0,o.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff"),", and how to return to normal startup state after solving the problem."),(0,o.yg)("h2",{id:"start-debug-mode"},"Start Debug mode"),(0,o.yg)("p",null,"When a pod of the service enters CrashLoopBackOff or cannot be started normally during normal operation, take the following steps to put the service into ",(0,o.yg)("inlineCode",{parentName:"p"},"debug")," mode and manually start the service to find the problem."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1.Use the following command to add annotation to the pod with problems.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl annotate pod ${pod_name} --namespace ${namespace} selectdb.com.doris/runmode=debug\n")),(0,o.yg)("p",null,"When the service is restarted next time, the service will detect the annotation that identifies the ",(0,o.yg)("inlineCode",{parentName:"p"},"debug")," mode startup, and will enter the ",(0,o.yg)("inlineCode",{parentName:"p"},"debug")," mode to start, and the pod status will be ",(0,o.yg)("inlineCode",{parentName:"p"},"running"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2.When the service enters ",(0,o.yg)("inlineCode",{parentName:"strong"},"debug")," mode, the pod of the service is displayed in a normal state. Users can enter the inside of the pod through the following command")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl --namespace ${namespace} exec -ti ${pod_name} bash\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"3. Manually start the service under ",(0,o.yg)("inlineCode",{parentName:"strong"},"debug"),". When the user enters the pod, manually execute the ",(0,o.yg)("inlineCode",{parentName:"strong"},"start_xx.sh")," script by modifying the port of the corresponding configuration file. The script directory is under ",(0,o.yg)("inlineCode",{parentName:"strong"},"/opt/apache-doris/xx/bin"),".")),(0,o.yg)("p",null,"FE needs to modify ",(0,o.yg)("inlineCode",{parentName:"p"},"query_port"),", BE needs to modify ",(0,o.yg)("inlineCode",{parentName:"p"},"heartbeat_service_port"),"\nThe main purpose is to avoid misleading the flow by accessing the crashed node through service in ",(0,o.yg)("inlineCode",{parentName:"p"},"debug")," mode."),(0,o.yg)("h2",{id:"exit-debug-mode"},"Exit Debug mode"),(0,o.yg)("p",null,"When the service locates the problem, it needs to exit the ",(0,o.yg)("inlineCode",{parentName:"p"},"debug")," operation. At this time, you only need to delete the corresponding pod according to the following command, and the service will start in the normal mode."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl delete pod ${pod_name} --namespace ${namespace}\n")),(0,o.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"After entering the pod, you need to modify the port information of the configuration file before you can manually start the corresponding Doris component.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"FE needs to modify the ",(0,o.yg)("inlineCode",{parentName:"li"},"query_port=9030")," configuration with the default path: ",(0,o.yg)("inlineCode",{parentName:"li"},"/opt/apache-doris/fe/conf/fe.conf"),"."),(0,o.yg)("li",{parentName:"ul"},"BE needs to modify the ",(0,o.yg)("inlineCode",{parentName:"li"},"heartbeat_service_port=9050")," configuration with the default path: ",(0,o.yg)("inlineCode",{parentName:"li"},"/opt/apache-doris/be/conf/be.conf"),".")))}u.isMDXComponent=!0}}]);