"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62790],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,y=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},36656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const i={title:"tracing",language:"en"},a=void 0,l={unversionedId:"admin-manual/tracing",id:"version-1.2/admin-manual/tracing",title:"tracing",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/tracing.md",sourceDirName:"admin-manual",slug:"/admin-manual/tracing",permalink:"/docs/1.2/admin-manual/tracing",draft:!1,tags:[],version:"1.2",frontMatter:{title:"tracing",language:"en"},sidebar:"docs",previous:{title:"Statistics of query execution",permalink:"/docs/1.2/admin-manual/query-profile"},next:{title:"performance optimization",permalink:"/docs/1.2/admin-manual/optimization"}},c={},p=[{value:"Principle",id:"principle",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Deploy zipkin",id:"deploy-zipkin",level:3},{value:"Configuring and starting Doris",id:"configuring-and-starting-doris",level:3},{value:"Add configuration to fe.conf",id:"add-configuration-to-feconf",level:4},{value:"Add configuration to be.conf",id:"add-configuration-to-beconf",level:4},{value:"Start fe and be",id:"start-fe-and-be",level:4},{value:"Executing a query",id:"executing-a-query",level:3},{value:"View zipkin UI",id:"view-zipkin-ui",level:3},{value:"Using opentelemetry collector",id:"using-opentelemetry-collector",level:2},{value:"Deploy opentelemetry collector",id:"deploy-opentelemetry-collector",level:3},{value:"Download collector",id:"download-collector",level:4},{value:"Generate configuration file",id:"generate-configuration-file",level:4},{value:"Start collector",id:"start-collector",level:4},{value:"Configuring and starting Doris",id:"configuring-and-starting-doris-1",level:3},{value:"Add configuration to fe.conf",id:"add-configuration-to-feconf-1",level:4},{value:"Add configuration to be.conf",id:"add-configuration-to-beconf-1",level:4},{value:"Start fe and be",id:"start-fe-and-be-1",level:4},{value:"Executing a query",id:"executing-a-query-1",level:3},{value:"View zipkin UI",id:"view-zipkin-ui-1",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"tracing"},"tracing"),(0,o.yg)("p",null,"Tracing records the life cycle of a request execution in the system, including the request and its sub-procedure call links, execution time and statistics, which can be used for slow query location, performance bottleneck analysis, etc."),(0,o.yg)("h2",{id:"principle"},"Principle"),(0,o.yg)("p",null,"doris is responsible for collecting traces and exporting them to a third-party tracing analysis system, which is responsible for the presentation and storage of traces."),(0,o.yg)("h2",{id:"quick-start"},"Quick Start"),(0,o.yg)("p",null,"doris currently supports exporting traces directly to ",(0,o.yg)("a",{parentName:"p",href:"https://zipkin.io/"},"zipkin"),"."),(0,o.yg)("h3",{id:"deploy-zipkin"},"Deploy zipkin"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"curl -sSL https://zipkin.io/quickstart.sh | bash -s\njava -jar zipkin.jar\n")),(0,o.yg)("h3",{id:"configuring-and-starting-doris"},"Configuring and starting Doris"),(0,o.yg)("h4",{id:"add-configuration-to-feconf"},"Add configuration to fe.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"enable_tracing = true\n\n# Configure traces to export to zipkin\ntrace_export_url = http://127.0.0.1:9411/api/v2/spans\n")),(0,o.yg)("h4",{id:"add-configuration-to-beconf"},"Add configuration to be.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"enable_tracing = true\n\n# Configure traces to export to zipkin\ntrace_export_url = http://127.0.0.1:9411/api/v2/spans\n\n# Queue size for caching spans. span export will be triggered once when the number of spans reaches half of the queue capacity. spans arriving in the queue will be discarded when the queue is full.\nmax_span_queue_size=2048\n\n# The maximum number of spans to export in a single pass.\nmax_span_export_batch_size=512\n\n# Maximum interval for exporting span\nexport_span_schedule_delay_millis=500\n")),(0,o.yg)("h4",{id:"start-fe-and-be"},"Start fe and be"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"sh fe/bin/start_fe.sh --daemon\nsh be/bin/start_be.sh --daemon\n")),(0,o.yg)("h3",{id:"executing-a-query"},"Executing a query"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"...\n")),(0,o.yg)("h3",{id:"view-zipkin-ui"},"View zipkin UI"),(0,o.yg)("p",null,"The browser opens ",(0,o.yg)("inlineCode",{parentName:"p"},"http://127.0.0.1:9411/zipkin/")," to view the query tracing."),(0,o.yg)("h2",{id:"using-opentelemetry-collector"},"Using opentelemetry collector"),(0,o.yg)("p",null,"Use the opentelemetry collector to export traces to other systems such as zipkin, jaeger, skywalking, or to database systems and files.  For more details, refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter"},"collector exporter"),"."),(0,o.yg)("p",null,"Meanwhile, opentelemetry collector provides a rich set of operators to process traces. For example, ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/filterprocessor"},"filterprocessor")," , ",(0,o.yg)("a",{parentName:"p",href:"hhttps://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor"},"tailsamplingprocessor"),". For more details, refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor"},"collector processor"),"."),(0,o.yg)("p",null,"traces export path: doris->collector->zipkin etc."),(0,o.yg)("h3",{id:"deploy-opentelemetry-collector"},"Deploy opentelemetry collector"),(0,o.yg)("p",null,"opentelemetry has released collector ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector"},"core")," and ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib"},"contrib"),", contrib provides richer features, here is an example of contrib version."),(0,o.yg)("h4",{id:"download-collector"},"Download collector"),(0,o.yg)("p",null,"Download otelcol-contrib, available on the official website ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-releases/releases"},"more precompiled versions for more platforms")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.55.0/otelcol-contrib_0.55.0_linux_amd64.tar.gz\n\ntar -zxvf otelcol-contrib_0.55.0_linux_amd64.tar.gz\n")),(0,o.yg)("h4",{id:"generate-configuration-file"},"Generate configuration file"),(0,o.yg)("p",null,"The collector configuration file is divided into 5 parts: ",(0,o.yg)("inlineCode",{parentName:"p"},"receivers"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"processors"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"exporters"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"extensions"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"service"),". Among them, receivers, processors and exporters define the way to receive, process and export data respectively; extensions are optional and are used to extend tasks that do not involve processing telemetry data; service specifies which components are used in the collector. See ",(0,o.yg)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/deployment/"},"collector configuration"),"."),(0,o.yg)("p",null,"The following configuration file uses the otlp (OpenTelemetry Protocol) protocol to receive traces data, perform batch processing and filter out traces longer than 50ms, and finally export them to zipkin and file."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'cat > otel-collector-config.yaml << EOF\nreceivers:\n  otlp:\n    protocols:\n      http:\n\nexporters:\n  zipkin:\n    endpoint: "http://10.81.85.90:8791/api/v2/spans"\n  file:\n    path: ./filename.json\n\nprocessors:\n  batch:\n  tail_sampling:\n    policies:\n      {\n        name: duration_policy,\n        type: latency,\n        latency: {threshold_ms: 50}\n      }\n\nextensions:\n\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch, tail_sampling]\n      exporters: [zipkin, file]\nEOF\n')),(0,o.yg)("h4",{id:"start-collector"},"Start collector"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"nohup ./otelcol-contrib --config=otel-collector-config.yaml &\n")),(0,o.yg)("h3",{id:"configuring-and-starting-doris-1"},"Configuring and starting Doris"),(0,o.yg)("h4",{id:"add-configuration-to-feconf-1"},"Add configuration to fe.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"enable_tracing = true\n\n# enable opentelemetry collector\ntrace_exporter = collector\n\n# Configure traces export to collector, 4318 is the default port for collector otlp http\ntrace_export_url = http://127.0.0.1:4318/v1/traces\n")),(0,o.yg)("h4",{id:"add-configuration-to-beconf-1"},"Add configuration to be.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"enable_tracing = true\n\n# enable opentelemetry collector\ntrace_exporter = collector\n\n# Configure traces export to collector, 4318 is the default port for collector otlp http\ntrace_export_url = http://127.0.0.1:4318/v1/traces\n\n# Queue size for caching spans. span export will be triggered once when the number of spans reaches half of the queue capacity. spans arriving in the queue will be discarded when the queue is full.\nmax_span_queue_size=2048\n\n# The maximum number of spans to export in a single pass.\nmax_span_export_batch_size=512\n\n# Maximum interval for exporting span\nexport_span_schedule_delay_millis=500\n")),(0,o.yg)("h4",{id:"start-fe-and-be-1"},"Start fe and be"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"sh fe/bin/start_fe.sh --daemon\nsh be/bin/start_be.sh --daemon\n")),(0,o.yg)("h3",{id:"executing-a-query-1"},"Executing a query"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"...\n")),(0,o.yg)("h3",{id:"view-zipkin-ui-1"},"View zipkin UI"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"...\n")))}d.isMDXComponent=!0}}]);