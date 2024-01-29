"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Cloud Service Authentication",language:"en"},i=void 0,o={unversionedId:"lakehouse/cloud-auth/cloud-auth",id:"lakehouse/cloud-auth/cloud-auth",title:"Cloud Service Authentication",description:"\x3c!--",source:"@site/docs/lakehouse/cloud-auth/cloud-auth.md",sourceDirName:"lakehouse/cloud-auth",slug:"/lakehouse/cloud-auth/",permalink:"/docs/dev/lakehouse/cloud-auth/",draft:!1,tags:[],version:"current",frontMatter:{title:"Cloud Service Authentication",language:"en"},sidebar:"docs",previous:{title:"JDBC",permalink:"/docs/dev/lakehouse/multi-catalog/jdbc"},next:{title:"File Analysis",permalink:"/docs/dev/lakehouse/file"}},s={},c=[{value:"AWS",id:"aws",level:2},{value:"Catalog Credentials",id:"catalog-credentials",level:3},{value:"System Credentials",id:"system-credentials",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"When accessing a service on the cloud, we need to provide the credentials needed to access the service so that the service can be authenticated by IAM of cloud vendors."),(0,a.kt)("h2",{id:"aws"},"AWS"),(0,a.kt)("p",null,"Now Doris support two types of authentication to access AWS service."),(0,a.kt)("h3",{id:"catalog-credentials"},"Catalog Credentials"),(0,a.kt)("p",null,"The Catalog supports filling in basic Credentials properties, such as:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"For S3: ",(0,a.kt)("inlineCode",{parentName:"li"},"s3.endpoint"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"s3.access_key"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"s3.secret_key"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"For Glue: ",(0,a.kt)("inlineCode",{parentName:"li"},"glue.endpoint"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"glue.access_key"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"glue.secret_key"),"\u3002")),(0,a.kt)("p",null,"When access Glue though Iceberg Catalog, we can access tables on Glue by filling in the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG glue PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n')),(0,a.kt)("h3",{id:"system-credentials"},"System Credentials"),(0,a.kt)("p",null,"For applications running on AWS resources, such as EC2 instances, this approach enhances security by avoiding hardcoded credentials."),(0,a.kt)("p",null,"If we create the Catalog but not fill any Credentials in properties, the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultAWSCredentialsProviderChain")," will be used to read in the system environment variables or instance profile."),(0,a.kt)("p",null,"For details about how to configure environment variables and system properties, see: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},"AWS CLI")," ."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The configurable environment variables are: ",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_SESSION_TOKEN"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_ROLE_ARN"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_WEB_IDENTITY_TOKEN_FILE")," and so on."),(0,a.kt)("li",{parentName:"ul"},"In addition, you can also use ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"aws configure")," to configure Credentials, the Credentials file will be written to the ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.aws")," directory.")))}d.isMDXComponent=!0}}]);