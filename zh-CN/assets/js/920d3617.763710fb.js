"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=n,f=d["".concat(p,".").concat(k)]||d[k]||u[k]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},14493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"\u6570\u636e\u64cd\u4f5c\u95ee\u9898",language:"zh-CN"},o=void 0,l={unversionedId:"faq/data-faq",id:"faq/data-faq",title:"\u6570\u636e\u64cd\u4f5c\u95ee\u9898",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/faq/data-faq.md",sourceDirName:"faq",slug:"/faq/data-faq",permalink:"/zh-CN/docs/dev/faq/data-faq",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u64cd\u4f5c\u95ee\u9898",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8fd0\u7ef4\u5e38\u89c1\u95ee\u9898",permalink:"/zh-CN/docs/dev/faq/install-faq"},next:{title:"SQL \u95ee\u9898",permalink:"/zh-CN/docs/dev/faq/sql-faq"}},p={},s=[{value:"Q1. \u4f7f\u7528 Stream Load \u8bbf\u95ee FE \u7684\u516c\u7f51\u5730\u5740\u5bfc\u5165\u6570\u636e\uff0c\u88ab\u91cd\u5b9a\u5411\u5230\u5185\u7f51 IP\uff1f",id:"q1-\u4f7f\u7528-stream-load-\u8bbf\u95ee-fe-\u7684\u516c\u7f51\u5730\u5740\u5bfc\u5165\u6570\u636e\u88ab\u91cd\u5b9a\u5411\u5230\u5185\u7f51-ip",level:3},{value:"Q2. Doris \u662f\u5426\u652f\u6301\u4fee\u6539\u5217\u540d\uff1f",id:"q2-doris-\u662f\u5426\u652f\u6301\u4fee\u6539\u5217\u540d",level:3},{value:"Q3. Unique Key\u6a21\u578b\u7684\u8868\u662f\u5426\u652f\u6301\u521b\u5efa\u7269\u5316\u89c6\u56fe\uff1f",id:"q3-unique-key\u6a21\u578b\u7684\u8868\u662f\u5426\u652f\u6301\u521b\u5efa\u7269\u5316\u89c6\u56fe",level:3},{value:"Q4. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -238",id:"q4-tablet-writer-write-failed-tablet_id27306172-txn_id28573520-err-235-or--238",level:3},{value:"Q5. tablet 110309738 has few replicas: 1, alive backends: 10003",id:"q5-tablet-110309738-has-few-replicas-1-alive-backends-10003",level:3},{value:"Q6. disk xxxxx on backend xxx exceed limit usage",id:"q6-disk-xxxxx-on-backend-xxx-exceed-limit-usage",level:3},{value:"Q7. \u901a\u8fc7 Java \u7a0b\u5e8f\u8c03\u7528 stream load \u5bfc\u5165\u6570\u636e\uff0c\u5728\u4e00\u6279\u6b21\u6570\u636e\u91cf\u8f83\u5927\u65f6\uff0c\u53ef\u80fd\u4f1a\u62a5\u9519 Broken Pipe",id:"q7-\u901a\u8fc7-java-\u7a0b\u5e8f\u8c03\u7528-stream-load-\u5bfc\u5165\u6570\u636e\u5728\u4e00\u6279\u6b21\u6570\u636e\u91cf\u8f83\u5927\u65f6\u53ef\u80fd\u4f1a\u62a5\u9519-broken-pipe",level:3},{value:"Q8. \u6267\u884c\u5bfc\u5165\u3001\u67e5\u8be2\u65f6\u62a5\u9519-214",id:"q8-\u6267\u884c\u5bfc\u5165\u67e5\u8be2\u65f6\u62a5\u9519-214",level:3},{value:"Q9. Not connected to 192.168.100.1:8060 yet, server_id=384",id:"q9-not-connected-to-19216810018060-yet-server_id384",level:3},{value:"Q10.  Broker load  org.apache.thrift.transport.TTransportException: java.net.SocketException: Broken pipe",id:"q10--broker-load--orgapachethrifttransportttransportexception-javanetsocketexception-broken-pipe",level:3},{value:"Q11. Routine load  ReasonOfStateChanged: ErrorReason{code=errCode = 104, msg=&#39;be 10004 abort task with reason: fetch failed due to requested offset not available on the broker: Broker: Offset out of range&#39;}",id:"q11-routine-load--reasonofstatechanged-errorreasoncodeerrcode--104-msgbe-10004-abort-task-with-reason-fetch-failed-due-to-requested-offset-not-available-on-the-broker-broker-offset-out-of-range",level:3},{value:"Q12. ERROR 1105 (HY000): errCode = 2, detailMessage = (192.168.90.91)CANCELLEDerror setting certificate verify locations:  CAfile: /etc/ssl/certs/ca-certificates.crt CApath: none",id:"q12-error-1105-hy000-errcode--2-detailmessage--1921689091cancellederror-setting-certificate-verify-locations--cafile-etcsslcertsca-certificatescrt-capath-none",level:3},{value:"Q13. create partition failed. partition numbers will exceed limit variable max_auto_partition_num",id:"q13-create-partition-failed-partition-numbers-will-exceed-limit-variable-max_auto_partition_num",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6570\u636e\u64cd\u4f5c\u95ee\u9898"},"\u6570\u636e\u64cd\u4f5c\u95ee\u9898"),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u7528\u4e8e\u8bb0\u5f55 Doris \u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e\u64cd\u4f5c\u5e38\u89c1\u95ee\u9898\u3002\u4f1a\u4e0d\u5b9a\u671f\u66f4\u65b0\u3002"),(0,n.kt)("h3",{id:"q1-\u4f7f\u7528-stream-load-\u8bbf\u95ee-fe-\u7684\u516c\u7f51\u5730\u5740\u5bfc\u5165\u6570\u636e\u88ab\u91cd\u5b9a\u5411\u5230\u5185\u7f51-ip"},"Q1. \u4f7f\u7528 Stream Load \u8bbf\u95ee FE \u7684\u516c\u7f51\u5730\u5740\u5bfc\u5165\u6570\u636e\uff0c\u88ab\u91cd\u5b9a\u5411\u5230\u5185\u7f51 IP\uff1f"),(0,n.kt)("p",null,"\u5f53 stream load \u7684\u8fde\u63a5\u76ee\u6807\u4e3aFE\u7684http\u7aef\u53e3\u65f6\uff0cFE\u4ec5\u4f1a\u968f\u673a\u9009\u62e9\u4e00\u53f0BE\u8282\u70b9\u505ahttp 307 redirect \u64cd\u4f5c\uff0c\u56e0\u6b64\u7528\u6237\u7684\u8bf7\u6c42\u5b9e\u9645\u662f\u53d1\u9001\u7ed9FE\u6307\u6d3e\u7684\u67d0\u4e00\u4e2aBE\u7684\u3002\u800credirect\u8fd4\u56de\u7684\u662fBE\u7684ip\uff0c\u4e5f\u5373\u5185\u7f51IP\u3002\u6240\u4ee5\u5982\u679c\u4f60\u662f\u901a\u8fc7FE\u7684\u516c\u7f51IP\u53d1\u9001\u7684\u8bf7\u6c42\uff0c\u5f88\u6709\u53ef\u80fd\u56e0\u4e3aredirect\u5230\u5185\u7f51\u5730\u5740\u800c\u65e0\u6cd5\u8fde\u63a5\u3002"),(0,n.kt)("p",null,"\u901a\u5e38\u7684\u505a\u6cd5\uff0c\u4e00\u79cd\u662f\u786e\u4fdd\u81ea\u5df1\u80fd\u591f\u8bbf\u95ee\u5185\u7f51IP\u5730\u5740\uff0c\u6216\u8005\u662f\u7ed9\u6240\u6709BE\u4e0a\u5c42\u67b6\u8bbe\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\uff0c\u7136\u540e\u76f4\u63a5\u5c06 stream load \u8bf7\u6c42\u53d1\u9001\u5230\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\uff0c\u7531\u8d1f\u8f7d\u5747\u8861\u5c06\u8bf7\u6c42\u900f\u4f20\u5230BE\u8282\u70b9\u3002"),(0,n.kt)("h3",{id:"q2-doris-\u662f\u5426\u652f\u6301\u4fee\u6539\u5217\u540d"},"Q2. Doris \u662f\u5426\u652f\u6301\u4fee\u6539\u5217\u540d\uff1f"),(0,n.kt)("p",null,"\u5728 1.2.0 \u7248\u672c\u4e4b\u540e, \u5f00\u542f ",(0,n.kt)("inlineCode",{parentName:"p"},'"light_schema_change"="true"')," \u9009\u9879\u65f6\uff0c\u53ef\u4ee5\u652f\u6301\u4fee\u6539\u5217\u540d\u3002"),(0,n.kt)("p",null,"\u5728 1.2.0 \u7248\u672c\u4e4b\u524d\u6216\u672a\u5f00\u542f ",(0,n.kt)("inlineCode",{parentName:"p"},'"light_schema_change"="true"')," \u9009\u9879\u65f6\uff0c\u4e0d\u652f\u6301\u4fee\u6539\u5217\u540d, \u539f\u56e0\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,"Doris\u652f\u6301\u4fee\u6539\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u3001\u5206\u533a\u540d\u3001\u7269\u5316\u89c6\u56fe\uff08Rollup\uff09\u540d\u79f0\uff0c\u4ee5\u53ca\u5217\u7684\u7c7b\u578b\u3001\u6ce8\u91ca\u3001\u9ed8\u8ba4\u503c\u7b49\u7b49\u3002\u4f46\u9057\u61be\u7684\u662f\uff0c\u76ee\u524d\u4e0d\u652f\u6301\u4fee\u6539\u5217\u540d\u3002"),(0,n.kt)("p",null,"\u56e0\u4e3a\u4e00\u4e9b\u5386\u53f2\u539f\u56e0\uff0c\u76ee\u524d\u5217\u540d\u79f0\u662f\u76f4\u63a5\u5199\u5165\u5230\u6570\u636e\u6587\u4ef6\u4e2d\u7684\u3002Doris\u5728\u67e5\u8be2\u65f6\uff0c\u4e5f\u662f\u901a\u8fc7\u5217\u540d\u67e5\u627e\u5230\u5bf9\u5e94\u7684\u5217\u7684\u3002\u6240\u4ee5\u4fee\u6539\u5217\u540d\u4e0d\u4ec5\u662f\u7b80\u5355\u7684\u5143\u6570\u636e\u4fee\u6539\uff0c\u8fd8\u4f1a\u6d89\u53ca\u5230\u6570\u636e\u7684\u91cd\u5199\uff0c\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u4e0d\u6392\u9664\u540e\u7eed\u901a\u8fc7\u4e00\u4e9b\u517c\u5bb9\u624b\u6bb5\u6765\u652f\u6301\u8f7b\u91cf\u5316\u7684\u5217\u540d\u4fee\u6539\u64cd\u4f5c\u3002"),(0,n.kt)("h3",{id:"q3-unique-key\u6a21\u578b\u7684\u8868\u662f\u5426\u652f\u6301\u521b\u5efa\u7269\u5316\u89c6\u56fe"},"Q3. Unique Key\u6a21\u578b\u7684\u8868\u662f\u5426\u652f\u6301\u521b\u5efa\u7269\u5316\u89c6\u56fe\uff1f"),(0,n.kt)("p",null,"\u4e0d\u652f\u6301\u3002"),(0,n.kt)("p",null,"Unique Key\u6a21\u578b\u7684\u8868\u662f\u4e00\u4e2a\u5bf9\u4e1a\u52a1\u6bd4\u8f83\u53cb\u597d\u7684\u8868\uff0c\u56e0\u4e3a\u5176\u7279\u6709\u7684\u6309\u7167\u4e3b\u952e\u53bb\u91cd\u7684\u529f\u80fd\uff0c\u80fd\u591f\u5f88\u65b9\u4fbf\u7684\u540c\u6b65\u6570\u636e\u9891\u7e41\u53d8\u66f4\u7684\u4e1a\u52a1\u6570\u636e\u5e93\u3002\u56e0\u6b64\uff0c\u5f88\u591a\u7528\u6237\u5728\u5c06\u6570\u636e\u63a5\u5165\u5230Doris\u65f6\uff0c\u4f1a\u9996\u5148\u8003\u8651\u4f7f\u7528Unique Key\u6a21\u578b\u3002"),(0,n.kt)("p",null,"\u4f46\u9057\u61be\u7684\u662f\uff0cUnique Key\u6a21\u578b\u7684\u8868\u662f\u65e0\u6cd5\u5efa\u7acb\u7269\u5316\u89c6\u56fe\u7684\u3002\u539f\u56e0\u5728\u4e8e\uff0c\u7269\u5316\u89c6\u56fe\u7684\u672c\u8d28\uff0c\u662f\u901a\u8fc7\u9884\u8ba1\u7b97\u6765\u5c06\u6570\u636e\u201c\u9884\u5148\u7b97\u597d\u201d\uff0c\u8fd9\u6837\u5728\u67e5\u8be2\u65f6\u76f4\u63a5\u8fd4\u56de\u5df2\u7ecf\u8ba1\u7b97\u597d\u7684\u6570\u636e\uff0c\u6765\u52a0\u901f\u67e5\u8be2\u3002\u5728\u7269\u5316\u89c6\u56fe\u4e2d\uff0c\u201c\u9884\u8ba1\u7b97\u201d\u7684\u6570\u636e\u901a\u5e38\u662f\u4e00\u4e9b\u805a\u5408\u6307\u6807\uff0c\u6bd4\u5982\u6c42\u548c\u3001\u6c42count\u3002\u8fd9\u65f6\uff0c\u5982\u679c\u6570\u636e\u53d1\u751f\u53d8\u66f4\uff0c\u5982update\u6216delete\uff0c\u56e0\u4e3a\u9884\u8ba1\u7b97\u7684\u6570\u636e\u5df2\u7ecf\u4e22\u5931\u4e86\u660e\u7ec6\u4fe1\u606f\uff0c\u56e0\u6b64\u65e0\u6cd5\u540c\u6b65\u7684\u8fdb\u884c\u66f4\u65b0\u3002\u6bd4\u5982\u4e00\u4e2a\u6c42\u548c\u503c5\uff0c\u53ef\u80fd\u662f 1+4\uff0c\u4e5f\u53ef\u80fd\u662f2+3\u3002\u56e0\u4e3a\u660e\u7ec6\u4fe1\u606f\u7684\u4e22\u5931\uff0c\u6211\u4eec\u65e0\u6cd5\u533a\u5206\u8fd9\u4e2a\u6c42\u548c\u503c\u662f\u5982\u4f55\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u56e0\u6b64\u4e5f\u5c31\u65e0\u6cd5\u6ee1\u8db3\u66f4\u65b0\u7684\u9700\u6c42\u3002"),(0,n.kt)("h3",{id:"q4-tablet-writer-write-failed-tablet_id27306172-txn_id28573520-err-235-or--238"},"Q4. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -238"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u901a\u5e38\u53d1\u751f\u5728\u6570\u636e\u5bfc\u5165\u64cd\u4f5c\u4e2d\u3002\u9519\u8bef\u7801\u4e3a -235\u3002\u8fd9\u4e2a\u9519\u8bef\u7684\u542b\u4e49\u662f\uff0c\u5bf9\u5e94tablet\u7684\u6570\u636e\u7248\u672c\u8d85\u8fc7\u4e86\u6700\u5927\u9650\u5236\uff08\u9ed8\u8ba4500\uff0c\u7531 BE \u53c2\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"max_tablet_version_num")," \u63a7\u5236\uff09\uff0c\u540e\u7eed\u5199\u5165\u5c06\u88ab\u62d2\u7edd\u3002\u6bd4\u5982\u95ee\u9898\u4e2d\u8fd9\u4e2a\u9519\u8bef\uff0c\u5373\u8868\u793a 27306172 \u8fd9\u4e2atablet\u7684\u6570\u636e\u7248\u672c\u8d85\u8fc7\u4e86\u9650\u5236\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u901a\u5e38\u662f\u56e0\u4e3a\u5bfc\u5165\u7684\u9891\u7387\u8fc7\u9ad8\uff0c\u5927\u4e8e\u540e\u53f0\u6570\u636e\u7684compaction\u901f\u5ea6\uff0c\u5bfc\u81f4\u7248\u672c\u5806\u79ef\u5e76\u6700\u7ec8\u8d85\u8fc7\u4e86\u9650\u5236\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u901a\u8fc7show tablet 27306172 \u8bed\u53e5\uff0c\u7136\u540e\u6267\u884c\u7ed3\u679c\u4e2d\u7684 show proc \u8bed\u53e5\uff0c\u67e5\u770btablet\u5404\u4e2a\u526f\u672c\u7684\u60c5\u51b5\u3002\u7ed3\u679c\u4e2d\u7684 versionCount\u5373\u8868\u793a\u7248\u672c\u6570\u91cf\u3002\u5982\u679c\u53d1\u73b0\u67d0\u4e2a\u526f\u672c\u7684\u7248\u672c\u6570\u91cf\u8fc7\u591a\uff0c\u5219\u9700\u8981\u964d\u4f4e\u5bfc\u5165\u9891\u7387\u6216\u505c\u6b62\u5bfc\u5165\uff0c\u5e76\u89c2\u5bdf\u7248\u672c\u6570\u662f\u5426\u6709\u4e0b\u964d\u3002\u5982\u679c\u505c\u6b62\u5bfc\u5165\u540e\uff0c\u7248\u672c\u6570\u4f9d\u7136\u6ca1\u6709\u4e0b\u964d\uff0c\u5219\u9700\u8981\u53bb\u5bf9\u5e94\u7684BE\u8282\u70b9\u67e5\u770bbe.INFO\u65e5\u5fd7\uff0c\u641c\u7d22tablet id\u4ee5\u53ca compaction\u5173\u952e\u8bcd\uff0c\u68c0\u67e5compaction\u662f\u5426\u6b63\u5e38\u8fd0\u884c\u3002\u5173\u4e8ecompaction\u8c03\u4f18\u76f8\u5173\uff0c\u53ef\u4ee5\u53c2\u9605 ApacheDoris \u516c\u4f17\u53f7\u6587\u7ae0\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/cZmXEsNPeRMLHp379kc2aA"},"Doris \u6700\u4f73\u5b9e\u8df5-Compaction\u8c03\u4f18(3)")),(0,n.kt)("p",null,"-238 \u9519\u8bef\u901a\u5e38\u51fa\u73b0\u5728\u540c\u4e00\u6279\u5bfc\u5165\u6570\u636e\u91cf\u8fc7\u5927\u7684\u60c5\u51b5\uff0c\u4ece\u800c\u5bfc\u81f4\u67d0\u4e00\u4e2a tablet \u7684 Segment \u6587\u4ef6\u8fc7\u591a\uff08\u9ed8\u8ba4\u662f 200\uff0c\u7531 BE \u53c2\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"max_segment_num_per_rowset")," \u63a7\u5236\uff09\u3002\u6b64\u65f6\u5efa\u8bae\u51cf\u5c11\u4e00\u6279\u6b21\u5bfc\u5165\u7684\u6570\u636e\u91cf\uff0c\u6216\u8005\u9002\u5f53\u63d0\u9ad8 BE \u914d\u7f6e\u53c2\u6570\u503c\u6765\u89e3\u51b3\u3002\u57282.0\u7248\u672c\u53ca\u4ee5\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6253\u5f00 segment compaction \u529f\u80fd\u6765\u51cf\u5c11 Segment \u6587\u4ef6\u6570\u91cf(BE config \u4e2d ",(0,n.kt)("inlineCode",{parentName:"p"},"enable_segcompaction=true"),")\u3002"),(0,n.kt)("h3",{id:"q5-tablet-110309738-has-few-replicas-1-alive-backends-10003"},"Q5. tablet 110309738 has few replicas: 1, alive backends: ","[10003]"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u53ef\u80fd\u53d1\u751f\u5728\u67e5\u8be2\u6216\u8005\u5bfc\u5165\u64cd\u4f5c\u4e2d\u3002\u901a\u5e38\u610f\u5473\u7740\u5bf9\u5e94tablet\u7684\u526f\u672c\u51fa\u73b0\u4e86\u5f02\u5e38\u3002"),(0,n.kt)("p",null,"\u6b64\u65f6\uff0c\u53ef\u4ee5\u5148\u901a\u8fc7 show backends \u547d\u4ee4\u68c0\u67e5BE\u8282\u70b9\u662f\u5426\u6709\u5b95\u673a\uff0c\u5982 isAlive \u5b57\u6bb5\u4e3afalse\uff0c\u6216\u8005 LastStartTime \u662f\u6700\u8fd1\u7684\u67d0\u4e2a\u65f6\u95f4\uff08\u8868\u793a\u6700\u8fd1\u91cd\u542f\u8fc7\uff09\u3002\u5982\u679cBE\u6709\u5b95\u673a\uff0c\u5219\u9700\u8981\u53bbBE\u5bf9\u5e94\u7684\u8282\u70b9\uff0c\u67e5\u770bbe.out\u65e5\u5fd7\u3002\u5982\u679cBE\u662f\u56e0\u4e3a\u5f02\u5e38\u539f\u56e0\u5b95\u673a\uff0c\u901a\u5e38be.out\u4e2d\u4f1a\u6253\u5370\u5f02\u5e38\u5806\u6808\uff0c\u5e2e\u52a9\u6392\u67e5\u95ee\u9898\u3002\u5982\u679cbe.out\u4e2d\u6ca1\u6709\u9519\u8bef\u5806\u6808\u3002\u5219\u53ef\u4ee5\u901a\u8fc7linux\u547d\u4ee4dmesg -T \u68c0\u67e5\u662f\u5426\u662f\u56e0\u4e3aOOM\u5bfc\u81f4\u8fdb\u7a0b\u88ab\u7cfb\u7edfkill\u6389\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u6ca1\u6709BE\u8282\u70b9\u5b95\u673a\uff0c\u5219\u9700\u8981\u901a\u8fc7show tablet 110309738 \u8bed\u53e5\uff0c\u7136\u540e\u6267\u884c\u7ed3\u679c\u4e2d\u7684 show proc \u8bed\u53e5\uff0c\u67e5\u770btablet\u5404\u4e2a\u526f\u672c\u7684\u60c5\u51b5\uff0c\u8fdb\u4e00\u6b65\u6392\u67e5\u3002"),(0,n.kt)("h3",{id:"q6-disk-xxxxx-on-backend-xxx-exceed-limit-usage"},"Q6. disk xxxxx on backend xxx exceed limit usage"),(0,n.kt)("p",null,"\u901a\u5e38\u51fa\u73b0\u5728\u5bfc\u5165\u3001Alter\u7b49\u64cd\u4f5c\u4e2d\u3002\u8fd9\u4e2a\u9519\u8bef\u610f\u5473\u7740\u5bf9\u5e94BE\u7684\u5bf9\u5e94\u78c1\u76d8\u7684\u4f7f\u7528\u91cf\u8d85\u8fc7\u4e86\u9608\u503c\uff08\u9ed8\u8ba495%\uff09\u6b64\u65f6\u53ef\u4ee5\u5148\u901a\u8fc7 show backends \u547d\u4ee4\uff0c\u5176\u4e2dMaxDiskUsedPct\u5c55\u793a\u7684\u662f\u5bf9\u5e94BE\u4e0a\uff0c\u4f7f\u7528\u7387\u6700\u9ad8\u7684\u90a3\u5757\u78c1\u76d8\u7684\u4f7f\u7528\u7387\uff0c\u5982\u679c\u8d85\u8fc795%\uff0c\u5219\u4f1a\u62a5\u8fd9\u4e2a\u9519\u8bef\u3002"),(0,n.kt)("p",null,"\u6b64\u65f6\u9700\u8981\u524d\u5f80\u5bf9\u5e94BE\u8282\u70b9\uff0c\u67e5\u770b\u6570\u636e\u76ee\u5f55\u4e0b\u7684\u4f7f\u7528\u91cf\u60c5\u51b5\u3002\u5176\u4e2dtrash\u76ee\u5f55\u548csnapshot\u76ee\u5f55\u53ef\u4ee5\u624b\u52a8\u6e05\u7406\u4ee5\u91ca\u653e\u7a7a\u95f4\u3002\u5982\u679c\u662fdata\u76ee\u5f55\u5360\u7528\u8f83\u5927\uff0c\u5219\u9700\u8981\u8003\u8651\u5220\u9664\u90e8\u5206\u6570\u636e\u4ee5\u91ca\u653e\u7a7a\u95f4\u4e86\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/maint-monitor/disk-capacity"},"\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406"),"\u3002"),(0,n.kt)("h3",{id:"q7-\u901a\u8fc7-java-\u7a0b\u5e8f\u8c03\u7528-stream-load-\u5bfc\u5165\u6570\u636e\u5728\u4e00\u6279\u6b21\u6570\u636e\u91cf\u8f83\u5927\u65f6\u53ef\u80fd\u4f1a\u62a5\u9519-broken-pipe"},"Q7. \u901a\u8fc7 Java \u7a0b\u5e8f\u8c03\u7528 stream load \u5bfc\u5165\u6570\u636e\uff0c\u5728\u4e00\u6279\u6b21\u6570\u636e\u91cf\u8f83\u5927\u65f6\uff0c\u53ef\u80fd\u4f1a\u62a5\u9519 Broken Pipe"),(0,n.kt)("p",null,"\u9664\u4e86 Broken Pipe \u5916\uff0c\u8fd8\u53ef\u80fd\u51fa\u73b0\u4e00\u4e9b\u5176\u4ed6\u7684\u5947\u602a\u7684\u9519\u8bef\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u60c5\u51b5\u901a\u5e38\u51fa\u73b0\u5728\u5f00\u542fhttpv2\u540e\u3002\u56e0\u4e3ahttpv2\u662f\u4f7f\u7528spring boot\u5b9e\u73b0\u7684http \u670d\u52a1\uff0c\u5e76\u4e14\u4f7f\u7528tomcat\u4f5c\u4e3a\u9ed8\u8ba4\u5185\u7f6e\u5bb9\u5668\u3002\u4f46\u662ftomcat\u5bf9307\u8f6c\u53d1\u7684\u5904\u7406\u4f3c\u4e4e\u6709\u4e9b\u95ee\u9898\uff0c\u6240\u4ee5\u540e\u9762\u5c06\u5185\u7f6e\u5bb9\u5668\u4fee\u6539\u4e3a\u4e86jetty\u3002\u6b64\u5916\uff0c\u5728java\u7a0b\u5e8f\u4e2d\u7684 apache http client\u7684\u7248\u672c\u9700\u8981\u4f7f\u75284.5.13\u4ee5\u540e\u7684\u7248\u672c\u3002\u4e4b\u524d\u7684\u7248\u672c\uff0c\u5bf9\u8f6c\u53d1\u7684\u5904\u7406\u4e5f\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\u3002"),(0,n.kt)("p",null,"\u6240\u4ee5\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u5f0f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5173\u95edhttpv2"),(0,n.kt)("p",{parentName:"li"},"\u5728fe.conf\u4e2d\u6dfb\u52a0 enable_http_server_v2=false\u540e\u91cd\u542fFE\u3002\u4f46\u662f\u8fd9\u6837\u65e0\u6cd5\u518d\u4f7f\u7528\u65b0\u7248UI\u754c\u9762\uff0c\u5e76\u4e14\u4e4b\u540e\u7684\u4e00\u4e9b\u57fa\u4e8ehttpv2\u7684\u65b0\u63a5\u53e3\u4e5f\u65e0\u6cd5\u4f7f\u7528\u3002\uff08\u6b63\u5e38\u7684\u5bfc\u5165\u67e5\u8be2\u4e0d\u53d7\u5f71\u54cd\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5347\u7ea7"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5347\u7ea7\u5230 Doris 0.15 \u53ca\u4e4b\u540e\u7684\u7248\u672c\uff0c\u5df2\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002"))),(0,n.kt)("h3",{id:"q8-\u6267\u884c\u5bfc\u5165\u67e5\u8be2\u65f6\u62a5\u9519-214"},"Q8. \u6267\u884c\u5bfc\u5165\u3001\u67e5\u8be2\u65f6\u62a5\u9519-214"),(0,n.kt)("p",null,"\u5728\u6267\u884c\u5bfc\u5165\u3001\u67e5\u8be2\u7b49\u64cd\u4f5c\u65f6\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u5982\u4e0b\u9519\u8bef\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"failed to initialize storage reader. tablet=63416.1050661139.aa4d304e7a7aff9c-f0fa7579928c85a0, res=-214, backend=192.168.100.10\n")),(0,n.kt)("p",null,"-214 \u9519\u8bef\u610f\u5473\u7740\u5bf9\u5e94 tablet \u7684\u6570\u636e\u7248\u672c\u7f3a\u5931\u3002\u6bd4\u5982\u5982\u4e0a\u9519\u8bef\uff0c\u8868\u793a tablet 63416 \u5728 192.168.100.10 \u8fd9\u4e2a BE \u4e0a\u7684\u526f\u672c\u7684\u6570\u636e\u7248\u672c\u6709\u7f3a\u5931\u3002\uff08\u53ef\u80fd\u8fd8\u6709\u5176\u4ed6\u7c7b\u4f3c\u9519\u8bef\u7801\uff0c\u90fd\u53ef\u4ee5\u7528\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u6392\u67e5\u548c\u4fee\u590d\uff09\u3002"),(0,n.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4f60\u7684\u6570\u636e\u662f\u591a\u526f\u672c\u7684\uff0c\u90a3\u4e48\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4fee\u590d\u8fd9\u4e9b\u6709\u95ee\u9898\u7684\u526f\u672c\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u6392\u67e5\uff1a"),(0,n.kt)("p",null,"\u9996\u5148\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"show tablet 63416")," \u8bed\u53e5\u5e76\u6267\u884c\u7ed3\u679c\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"show proc xxx")," \u8bed\u53e5\u6765\u67e5\u770b\u5bf9\u5e94 tablet \u7684\u5404\u4e2a\u526f\u672c\u60c5\u51b5\u3002\u901a\u5e38\u6211\u4eec\u9700\u8981\u5173\u5fc3 ",(0,n.kt)("inlineCode",{parentName:"p"},"Version")," \u8fd9\u4e00\u5217\u7684\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a tablet \u7684\u591a\u4e2a\u526f\u672c\u7684 Version \u5e94\u8be5\u662f\u76f8\u540c\u7684\u3002\u5e76\u4e14\u548c\u5bf9\u5e94\u5206\u533a\u7684 VisibleVersion \u7248\u672c\u76f8\u540c\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"show partitions from tblx")," \u6765\u67e5\u770b\u5bf9\u5e94\u7684\u5206\u533a\u7248\u672c\uff08tablet \u5bf9\u5e94\u7684\u5206\u533a\u53ef\u4ee5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"show tablet")," \u8bed\u53e5\u4e2d\u83b7\u53d6\u3002\uff09"),(0,n.kt)("p",null,"\u540c\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"p"},"show proc")," \u8bed\u53e5\u4e2d\u7684 CompactionStatus \u5217\u4e2d\u7684 URL\uff08\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u5373\u53ef\uff09\u6765\u67e5\u770b\u66f4\u5177\u4f53\u7684\u7248\u672c\u4fe1\u606f\uff0c\u6765\u68c0\u67e5\u5177\u4f53\u4e22\u5931\u7684\u662f\u54ea\u4e9b\u7248\u672c\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u957f\u65f6\u95f4\u6ca1\u6709\u81ea\u52a8\u4fee\u590d\uff0c\u5219\u9700\u8981\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},'show proc "/cluster_balance"')," \u8bed\u53e5\uff0c\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u6b63\u5728\u6267\u884c\u7684 tablet \u4fee\u590d\u548c\u8c03\u5ea6\u4efb\u52a1\u3002\u53ef\u80fd\u662f\u56e0\u4e3a\u6709\u5927\u91cf\u7684 tablet \u5728\u7b49\u5f85\u88ab\u8c03\u5ea6\uff0c\u5bfc\u81f4\u4fee\u590d\u65f6\u95f4\u8f83\u957f\u3002\u53ef\u4ee5\u5173\u6ce8 ",(0,n.kt)("inlineCode",{parentName:"p"},"pending_tablets")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"running_tablets")," \u4e2d\u7684\u8bb0\u5f55\u3002"),(0,n.kt)("p",null,"\u66f4\u8fdb\u4e00\u6b65\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"admin repair")," \u8bed\u53e5\u6765\u6307\u5b9a\u4f18\u5148\u4fee\u590d\u67d0\u4e2a\u8868\u6216\u5206\u533a\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u9605 ",(0,n.kt)("inlineCode",{parentName:"p"},"help admin repair"),";"),(0,n.kt)("p",null,"\u5982\u679c\u4f9d\u7136\u65e0\u6cd5\u4fee\u590d\uff0c\u90a3\u4e48\u5728\u591a\u526f\u672c\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"admin set replica status")," \u547d\u4ee4\u5f3a\u5236\u5c06\u6709\u95ee\u9898\u7684\u526f\u672c\u4e0b\u7ebf\u3002\u5177\u4f53\u53ef\u53c2\u9605 ",(0,n.kt)("inlineCode",{parentName:"p"},"help admin set replica status")," \u4e2d\u5c06\u526f\u672c\u72b6\u6001\u7f6e\u4e3a bad \u7684\u793a\u4f8b\u3002\uff08\u7f6e\u4e3a bad \u540e\uff0c\u526f\u672c\u5c06\u4e0d\u4f1a\u518d\u88ab\u8bbf\u95ee\u3002\u5e76\u4e14\u4f1a\u540e\u7eed\u81ea\u52a8\u4fee\u590d\u3002\u4f46\u5728\u64cd\u4f5c\u524d\uff0c\u5e94\u5148\u786e\u4fdd\u5176\u4ed6\u526f\u672c\u662f\u6b63\u5e38\u7684\uff09"),(0,n.kt)("h3",{id:"q9-not-connected-to-19216810018060-yet-server_id384"},"Q9. Not connected to 192.168.100.1:8060 yet, server_id=384"),(0,n.kt)("p",null,"\u5728\u5bfc\u5165\u6216\u8005\u67e5\u8be2\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u9047\u5230\u8fd9\u4e2a\u9519\u8bef\u3002\u5982\u679c\u4f60\u53bb\u5bf9\u5e94\u7684 BE \u65e5\u5fd7\u4e2d\u67e5\u770b\uff0c\u4e5f\u53ef\u80fd\u4f1a\u627e\u5230\u7c7b\u4f3c\u9519\u8bef\u3002"),(0,n.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a RPC \u9519\u8bef\uff0c\u901a\u5e38\u6709\u4e24\u79cd\u53ef\u80fd\uff1a1. \u5bf9\u5e94\u7684 BE \u8282\u70b9\u5b95\u673a\u30022. rpc \u62e5\u585e\u6216\u5176\u4ed6\u9519\u8bef\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u662f BE \u8282\u70b9\u5b95\u673a\uff0c\u5219\u9700\u8981\u67e5\u770b\u5177\u4f53\u7684\u5b95\u673a\u539f\u56e0\u3002\u8fd9\u91cc\u53ea\u8ba8\u8bba rpc \u62e5\u585e\u7684\u95ee\u9898\u3002"),(0,n.kt)("p",null,"\u4e00\u79cd\u60c5\u51b5\u662f OVERCROWDED\uff0c\u5373\u8868\u793a rpc \u6e90\u7aef\u6709\u5927\u91cf\u672a\u53d1\u9001\u7684\u6570\u636e\u8d85\u8fc7\u4e86\u9608\u503c\u3002BE \u6709\u4e24\u4e2a\u53c2\u6570\u4e0e\u4e4b\u76f8\u5173\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"brpc_socket_max_unwritten_bytes"),"\uff1a\u9ed8\u8ba4 1GB\uff0c\u5982\u679c\u672a\u53d1\u9001\u6570\u636e\u8d85\u8fc7\u8fd9\u4e2a\u503c\uff0c\u5219\u4f1a\u62a5\u9519\u3002\u53ef\u4ee5\u9002\u5f53\u4fee\u6539\u8fd9\u4e2a\u503c\u4ee5\u907f\u514d OVERCROWDED \u9519\u8bef\u3002\uff08\u4f46\u8fd9\u4e2a\u6cbb\u6807\u4e0d\u6cbb\u672c\uff0c\u672c\u8d28\u4e0a\u8fd8\u662f\u6709\u62e5\u585e\u53d1\u751f\uff09\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"tablet_writer_ignore_eovercrowded"),"\uff1a\u9ed8\u8ba4\u4e3a false\u3002\u5982\u679c\u8bbe\u4e3atrue\uff0c\u5219 Doris \u4f1a\u5ffd\u7565\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7684 OVERCROWDED \u9519\u8bef\u3002\u8fd9\u4e2a\u53c2\u6570\u4e3b\u8981\u4e3a\u4e86\u907f\u514d\u5bfc\u5165\u5931\u8d25\uff0c\u4ee5\u63d0\u9ad8\u5bfc\u5165\u7684\u7a33\u5b9a\u6027\u3002")),(0,n.kt)("p",null,"\u7b2c\u4e8c\u79cd\u662f rpc \u7684\u5305\u5927\u5c0f\u8d85\u8fc7 max_body_size\u3002\u5982\u679c\u67e5\u8be2\u4e2d\u5e26\u6709\u8d85\u5927 String \u7c7b\u578b\uff0c\u6216\u8005 bitmap \u7c7b\u578b\u65f6\uff0c\u53ef\u80fd\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u3002\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4ee5\u4e0b BE \u53c2\u6570\u89c4\u907f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"brpc_max_body_size\uff1a\u9ed8\u8ba4 3GB.\n")),(0,n.kt)("h3",{id:"q10--broker-load--orgapachethrifttransportttransportexception-javanetsocketexception-broken-pipe"},"Q10. ","[ Broker load ]"," org.apache.thrift.transport.TTransportException: java.net.SocketException: Broken pipe"),(0,n.kt)("p",null,"\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u53ef\u80fd\u662f\u5230\u4ece\u5916\u90e8\u5b58\u50a8\uff08\u4f8b\u5982HDFS\uff09\u5bfc\u5165\u6570\u636e\u7684\u65f6\u5019\uff0c\u56e0\u4e3a\u76ee\u5f55\u4e0b\u6587\u4ef6\u592a\u591a\uff0c\u5217\u51fa\u6587\u4ef6\u76ee\u5f55\u7684\u65f6\u95f4\u592a\u957f\uff0c\u8fd9\u91ccBroker RPC Timeout \u9ed8\u8ba4\u662f10\u79d2\uff0c\u8fd9\u91cc\u9700\u8981\u9002\u5f53\u8c03\u6574\u8d85\u65f6\u65f6\u95f4\u3002"),(0,n.kt)("p",null,"\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"fe.conf")," \u914d\u7f6e\u6587\u4ef6\uff0c\u6dfb\u52a0\u4e0b\u9762\u7684\u53c2\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"broker_timeout_ms = 10000\n##\u8fd9\u91cc\u9ed8\u8ba4\u662f10\u79d2\uff0c\u9700\u8981\u9002\u5f53\u52a0\u5927\u8fd9\u4e2a\u53c2\u6570\n")),(0,n.kt)("p",null,"\u8fd9\u91cc\u6dfb\u52a0\u53c2\u6570\uff0c\u9700\u8981\u91cd\u542f FE \u670d\u52a1\u3002"),(0,n.kt)("h3",{id:"q11-routine-load--reasonofstatechanged-errorreasoncodeerrcode--104-msgbe-10004-abort-task-with-reason-fetch-failed-due-to-requested-offset-not-available-on-the-broker-broker-offset-out-of-range"},"Q11.","[ Routine load ]"," ReasonOfStateChanged: ErrorReason{code=errCode = 104, msg='be 10004 abort task with reason: fetch failed due to requested offset not available on the broker: Broker: Offset out of range'}"),(0,n.kt)("p",null,"\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3akafka\u7684\u6e05\u7406\u7b56\u7565\u9ed8\u8ba4\u4e3a7\u5929\uff0c\u5f53\u67d0\u4e2aroutine load\u4efb\u52a1\u56e0\u4e3a\u67d0\u79cd\u539f\u56e0\u5bfc\u81f4\u4efb\u52a1\u6682\u505c\uff0c\u957f\u65f6\u95f4\u6ca1\u6709\u6062\u590d\uff0c\u5f53\u91cd\u65b0\u6062\u590d\u4efb\u52a1\u7684\u65f6\u5019routine load\u8bb0\u5f55\u4e86\u6d88\u8d39\u7684offset,\u800ckafka\u7684\u6e05\u7406\u7b56\u7565\u5df2\u7ecf\u6e05\u7406\u4e86\u5bf9\u5e94\u7684offset,\u5c31\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898"),(0,n.kt)("p",null,"\u6240\u4ee5\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u7528alter routine load\u89e3\u51b3\u65b9\u5f0f\uff1a"),(0,n.kt)("p",null,"\u67e5\u770bkafka\u6700\u5c0f\u7684offset ,\u4f7f\u7528ALTER ROUTINE LOAD\u547d\u4ee4\u4fee\u6539offset,\u91cd\u65b0\u6062\u590d\u4efb\u52a1\u5373\u53ef"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER ROUTINE LOAD FOR db.tb\nFROM kafka\n(\n "kafka_partitions" = "0",\n "kafka_offsets" = "xxx",\n "property.group.id" = "xxx"\n);\n')),(0,n.kt)("h3",{id:"q12-error-1105-hy000-errcode--2-detailmessage--1921689091cancellederror-setting-certificate-verify-locations--cafile-etcsslcertsca-certificatescrt-capath-none"},"Q12. ERROR 1105 (HY000): errCode = 2, detailMessage = (192.168.90.91)","[CANCELLED][INTERNAL_ERROR]","error setting certificate verify locations:  CAfile: /etc/ssl/certs/ca-certificates.crt CApath: none"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"yum install -y ca-certificates\nln -s /etc/pki/ca-trust/extracted/openssl/ca-bundle.trust.crt /etc/ssl/certs/ca-certificates.crt\n")),(0,n.kt)("h3",{id:"q13-create-partition-failed-partition-numbers-will-exceed-limit-variable-max_auto_partition_num"},"Q13. create partition failed. partition numbers will exceed limit variable max_auto_partition_num"),(0,n.kt)("p",null,"\u5bf9\u81ea\u52a8\u5206\u533a\u8868\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u4e3a\u9632\u6b62\u610f\u5916\u521b\u5efa\u8fc7\u591a\u5206\u533a\uff0c\u6211\u4eec\u4f7f\u7528\u4e86FE\u914d\u7f6e\u9879",(0,n.kt)("inlineCode",{parentName:"p"},"max_auto_partition_num"),"\u7ba1\u63a7\u6b64\u7c7b\u8868\u81ea\u52a8\u521b\u5efa\u65f6\u7684\u6700\u5927\u5206\u533a\u6570\u3002\u5982\u679c\u786e\u9700\u521b\u5efa\u66f4\u591a\u5206\u533a\uff0c\u8bf7\u4fee\u6539FE master\u8282\u70b9\u7684\u8be5\u914d\u7f6e\u9879\u3002"))}u.isMDXComponent=!0}}]);