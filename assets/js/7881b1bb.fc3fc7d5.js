"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[42670],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return r?t.createElement(m,a(a({ref:n},c),{},{components:r})):t.createElement(m,a({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75291:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const i={title:"Fe Version Info Action",language:"en"},a=void 0,s={unversionedId:"admin-manual/http-actions/fe/fe-version-info-action",id:"version-dev/admin-manual/http-actions/fe/fe-version-info-action",title:"Fe Version Info Action",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/http-actions/fe/fe-version-info-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/fe-version-info-action",permalink:"/docs/dev/admin-manual/http-actions/fe/fe-version-info-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/admin-manual/http-actions/fe/fe-version-info-action.md",tags:[],version:"dev",frontMatter:{title:"Fe Version Info Action",language:"en"}},d={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fe-version-info-action"},"Fe Version Info Action"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/fe_version_info")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Get fe version info from fe host."),(0,o.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,o.kt)("p",null,"None."),(0,o.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,o.kt)("p",null,"None."),(0,o.kt)("h2",{id:"request-body"},"Request body"),(0,o.kt)("p",null,"None."),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\nGET /api/fe_version_info\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n')))}u.isMDXComponent=!0}}]);