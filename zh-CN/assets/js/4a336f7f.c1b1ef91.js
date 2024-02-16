"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[36923],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),g=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=g(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=g(a),u=r,c=d["".concat(o,".").concat(u)]||d[u]||y[u]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var g=2;g<i;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58001:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const i={title:"Bitmap/HLL \u6570\u636e\u683c\u5f0f",language:"zh-CN"},l=void 0,p={unversionedId:"developer-guide/bitmap-hll-file-format",id:"developer-guide/bitmap-hll-file-format",title:"Bitmap/HLL \u6570\u636e\u683c\u5f0f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/bitmap-hll-file-format.md",sourceDirName:"developer-guide",slug:"/developer-guide/bitmap-hll-file-format",permalink:"/zh-CN/community/developer-guide/bitmap-hll-file-format",draft:!1,tags:[],version:"current",frontMatter:{title:"Bitmap/HLL \u6570\u636e\u683c\u5f0f",language:"zh-CN"},sidebar:"community",previous:{title:"\u5982\u4f55\u5206\u4eabBlog",permalink:"/zh-CN/community/developer-guide/how-to-share-blogs"},next:{title:"Github \u51c6\u5165\u68c0\u67e5",permalink:"/zh-CN/community/developer-guide/github-checks"}},o={},g=[{value:"Bitmap \u683c\u5f0f",id:"bitmap-\u683c\u5f0f",level:2},{value:"\u683c\u5f0f\u8bf4\u660e",id:"\u683c\u5f0f\u8bf4\u660e",level:3},{value:"HLL \u683c\u5f0f\u8bf4\u660e",id:"hll-\u683c\u5f0f\u8bf4\u660e",level:2}],m={toc:g},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"bitmap-\u683c\u5f0f"},"Bitmap \u683c\u5f0f"),(0,r.yg)("h3",{id:"\u683c\u5f0f\u8bf4\u660e"},"\u683c\u5f0f\u8bf4\u660e"),(0,r.yg)("p",null,"Doris \u4e2d\u7684bitmap \u91c7\u7528\u7684\u662froaring bitmap \u5b58\u50a8\uff0c be \u7aef\u4f7f\u7528CRoaring\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"Roaring")," \u7684\u5e8f\u5217\u5316\u683c\u5f0f\u5728C++/java/go \u7b49\u8bed\u8a00\u4e2d\u517c\u5bb9\uff0c \u800cC++ ",(0,r.yg)("inlineCode",{parentName:"p"},"Roaring64Map")," \u7684\u683c\u5f0f\u5e8f\u5217\u5316\u7ed3\u679c\u548cJava\u4e2d",(0,r.yg)("inlineCode",{parentName:"p"},"Roaring64NavigableMap")," \u4e0d\u517c\u5bb9\u3002Doris bimap \u67095\u79cd\u7c7b\u578b\uff0c \u5206\u522b\u7528\u4e00\u4e2a\u5b57\u8282\u8868\u793a"),(0,r.yg)("p",null,"Doris \u4e2d\u7684bitmap \u5e8f\u5217\u5316\u683c\u5f0f\u8bf4\u660e\u5982\u4e0b:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," | flag     | data .....|\n <--1Byte--\x3e<--n bytes--\x3e\n")),(0,r.yg)("p",null,"Flag \u503c\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"EMPTY\uff0c\u7a7a bitmap,  \u540e\u9762data \u90e8\u5206\u4e3a\u7a7a\uff0c\u6574\u4e2a\u5e8f\u5217\u5316\u7ed3\u679c\u53ea\u6709\u4e00\u4e2a\u5b57\u8282")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"SINGLE32\uff0cbitmap \u4e2d\u53ea\u6709\u4e00\u4e2a32\u4f4d\u65e0\u7b26\u53f7\u6574\u578b\u503c\uff0c \u540e\u97624\u4e2a\u5b57\u8282\u8868\u793a32\u4f4d\u65e0\u7b26\u53f7\u6574\u578b\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"BITMAP32\uff0c32 \u4f4dbitmap \u5bf9\u5e94java \u4e2d\u7c7b\u578b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"org.roaringbitmap.RoaringBitmap")," C++ \u4e2d\u7c7b\u578b\u4e3a",(0,r.yg)("inlineCode",{parentName:"td"},"roaring::Roaring"),"\uff0c \u540e\u9762data \u4e3aroaring::Roaring \u5e8f\u5217\u540e\u7684\u7ed3\u6784\uff0c \u53ef\u4ee5\u4f7f\u7528java \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"td"},"org.roaringbitmap.RoaringBitmap"),"  \u6216c++\u4e2d",(0,r.yg)("inlineCode",{parentName:"td"},"roaring::Roaring")," \u76f4\u63a5\u53cd\u5e8f\u5217\u5316")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"SINGLE64 ,bitmap \u4e2d\u53ea\u6709\u4e00\u4e2a64\u4f4d\u65e0\u7b26\u53f7\u6574\u578b\u503c\uff0c\u540e\u97628\u4e2a\u5b57\u8282\u8868\u793a64\u4f4d\u65e0\u7b26\u53f7\u6574\u578b\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"BITMAP64, 64 \u4f4dbitmap \u5bf9\u5e94java \u4e2d\u7c7b\u578b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"org.roaringbitmap.RoaringBitmap;")," c++ \u4e2d\u7c7b\u578b\u4e3adoris \u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"td"},"Roaring64Map"),"\uff0c\u6570\u636e\u7ed3\u6784\u548c roaring \u5e93\u4e2d\u7684\u7ed3\u679c\u4e00\u81f4\uff0c\u4f46\u662f\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u8bdd\u65b9\u6cd5\u6709\u6240\u4e0d\u540c\uff0c\u540e\u9762\u4f1a\u67091-8\u4e2a\u5b57\u8282\u7684\u53d8\u957f\u7f16\u7801\u7684uint64 \u7684\u8868\u8ff0bitmap \u4e2dsize\u3002\u540e\u9762\u7684\u6570\u636e\u662f\u5404\u5f0f\u662f\u591a\u4e2a 4\u4e2a\u5b57\u8282\u7684\u9ad8\u4f4d\u8868\u793a\u548c32\u4f4d roaring bitmap \u5e8f\u5217\u5316\u6570\u636e\u91cd\u590d\u800c\u6210")))),(0,r.yg)("p",null,"c++ \u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u7684\u793a\u4f8b \u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"be/src/util/bitmap_value.h")," \u7684",(0,r.yg)("inlineCode",{parentName:"p"},"BitmapValue::write()"),"   ",(0,r.yg)("inlineCode",{parentName:"p"},"BitmapValue::deserialize()"),"  \u65b9\u6cd5\u4e2d, Java\u793a\u4f8b\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe/fe-common/src/main/java/org/apache/doris/common/io/BitmapValue.java")," \u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"serialize()")," ",(0,r.yg)("inlineCode",{parentName:"p"},"deserialize()")," \u65b9\u6cd5\u4e2d\u3002"),(0,r.yg)("h2",{id:"hll-\u683c\u5f0f\u8bf4\u660e"},"HLL \u683c\u5f0f\u8bf4\u660e"),(0,r.yg)("p",null,"HLL \u683c\u5f0f\u5e8f\u5217\u5316\u6570\u636e\u5728Doris \u4e2d\u81ea\u5df1\u5b9e\u73b0\u7684\u3002\u540cBitmap \u7c7b\u578b\u7c7b\u4f3c\uff0cHLL \u683c\u5f0f\u662f1\u4e2a\u5b57\u8282\u7684flag \u540e\u9762\u8ddf\u968f\u591a\u4e2a\u5b57\u8282\u6570\u636e\u7ec4\u6210\uff0cflag \u542b\u4e49\u5982\u4e0b"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"HLL_DATA_EMPTY\uff0c\u7a7a HLL,  \u540e\u9762data \u90e8\u5206\u4e3a\u7a7a\uff0c\u6574\u4e2a\u5e8f\u5217\u5316\u7ed3\u679c\u53ea\u6709\u4e00\u4e2a\u5b57\u8282")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"HLL_DATA_EXPLICIT\uff0c \u540e\u97621\u4e2a\u5b57\u8282 explicit \u6570\u636e\u5757\u4e2a\u6570\uff0c\u540e\u9762\u63a5\u591a\u4e2a\u6570\u636e\u5757\uff0c\u6bcf\u4e2a\u6570\u636e\u5757\u75318\u4e2a\u5b57\u8282\u957f\u5ea6\u548c\u6570\u636e\u7ec4\u6210\uff0c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"HLL_DATA_SPARSE\uff0c\u53ea\u5b58\u975e0 \u503c\uff0c\u540e\u97624\u4e2a\u5b57\u8282 \u8868\u793a register \u4e2a\u6570\uff0c \u540e\u9762\u8fde\u7eed\u591a\u4e2a register \u7ed3\u6784\uff0c\u6bcf\u4e2aregister \u7531\u524d\u97622\u4e2a\u5b57\u8282\u7684index \u548c1\u4e2a\u5b57\u8282\u7684\u503c\u7ec4\u6210")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"HLL_DATA_FULL ,\u8868\u793a\u6240\u670916 ",(0,r.yg)("em",{parentName:"td"}," 1024\u4e2aregister\u90fd\u6709\u503c\uff0c \u540e\u9762\u8fde\u7eed16 ")," 1024\u4e2a\u5b57\u8282\u7684\u503c\u6570\u636e")))),(0,r.yg)("p",null,"c++ \u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u7684\u793a\u4f8b \u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"be/src/olap/hll.h")," \u7684",(0,r.yg)("inlineCode",{parentName:"p"},"serialize()"),"   ",(0,r.yg)("inlineCode",{parentName:"p"},"deserialize()"),"  \u65b9\u6cd5\u4e2d, Java\u793a\u4f8b\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe/fe-common/src/main/java/org/apache/doris/common/io/hll.java")," \u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"serialize()")," ",(0,r.yg)("inlineCode",{parentName:"p"},"deserialize()")," \u65b9\u6cd5\u4e2d\u3002"))}y.isMDXComponent=!0}}]);