"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[47630],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>h});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),y=t,h=c["".concat(p,".").concat(y)]||c[y]||g[y]||l;return r?a.createElement(h,i(i({ref:n},u),{},{components:r})):a.createElement(h,i({ref:n},u))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},15508:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(58168),t=(r(96540),r(15680));const l={title:"Release 2.0.4",language:"zh-CN"},i=void 0,o={unversionedId:"releasenotes/release-2.0.4",id:"releasenotes/release-2.0.4",title:"Release 2.0.4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/release-2.0.4.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0.4",permalink:"/zh-CN/docs/dev/releasenotes/release-2.0.4",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.0.4",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 2.0.5",permalink:"/zh-CN/docs/dev/releasenotes/release-2.0.5"},next:{title:"Release 2.0.3",permalink:"/zh-CN/docs/dev/releasenotes/release-2.0.3"}},p={},s=[{value:"\u884c\u4e3a\u53d8\u66f4",id:"\u884c\u4e3a\u53d8\u66f4",level:2},{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",level:2},{value:"\u6539\u8fdb\u548c\u4f18\u5316",id:"\u6539\u8fdb\u548c\u4f18\u5316",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],u={toc:s},c="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0cApache Doris 2.0.4  \u7248\u672c\u5df2\u4e8e 2024 \u5e74 1 \u6708 26 \u65e5\u6b63\u5f0f\u53d1\u5e03\uff0c\u8be5\u7248\u672c\u5728\u65b0\u4f18\u5316\u5668\u3001\u5012\u6392\u7d22\u5f15\u3001\u6570\u636e\u6e56\u7b49\u529f\u80fd\u4e0a\u6709\u4e86\u8fdb\u4e00\u6b65\u7684\u5b8c\u5584\u4e0e\u66f4\u65b0\uff0c\u4f7f Apache Doris \u80fd\u591f\u9002\u914d\u66f4\u5e7f\u6cdb\u7684\u573a\u666f\u3002\u6b64\u5916\uff0c\u8be5\u7248\u672c\u8fdb\u884c\u4e86\u82e5\u5e72\u7684\u6539\u8fdb\u4e0e\u4f18\u5316\uff0c\u4ee5\u63d0\u4f9b\u66f4\u52a0\u7a33\u5b9a\u9ad8\u6548\u7684\u6027\u80fd\u4f53\u9a8c\u3002\u65b0\u7248\u672c\u5df2\u7ecf\u4e0a\u7ebf\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\uff01"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u5b98\u7f51\u4e0b\u8f7d\uff1a")," ",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"GitHub \u4e0b\u8f7d\uff1a")," ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,t.yg)("h2",{id:"\u884c\u4e3a\u53d8\u66f4"},"\u884c\u4e3a\u53d8\u66f4"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u66f4\u7cbe\u786e\u7684 Precision \u548c Scale \u63a8\u5bfc\uff0c\u53ef\u6ee1\u8db3\u91d1\u878d\u573a\u666f\u8ba1\u7b97\u7684\u9ad8\u8981\u6c42",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/28034"},"https://github.com/apache/doris/pull/28034")))),(0,t.yg)("li",{parentName:"ul"},"Drop Policy \u652f\u6301\u4e86 User \u548c Role",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/29488"},"https://github.com/apache/doris/pull/29488")," ")))),(0,t.yg)("h2",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u65b0\u4f18\u5316\u5668\u652f\u6301\u4e86 datev1\uff0c datetimev1 \u53ca decimalv2 \u6570\u636e\u7c7b\u578b"),(0,t.yg)("li",{parentName:"ul"},"\u65b0\u4f18\u5316\u5668\u652f\u6301\u4e86 ODBC \u5916\u8868"),(0,t.yg)("li",{parentName:"ul"},"\u5012\u6392\u7d22\u5f15\u652f\u6301\u4e86 ",(0,t.yg)("inlineCode",{parentName:"li"},"lower_case")," \u548c ",(0,t.yg)("inlineCode",{parentName:"li"},"ignore_above")," \u9009\u9879"),(0,t.yg)("li",{parentName:"ul"},"\u5012\u6392\u7d22\u5f15\u652f\u6301\u4e86 ",(0,t.yg)("inlineCode",{parentName:"li"},"match_regexp")," \u548c ",(0,t.yg)("inlineCode",{parentName:"li"},"match_phrase_prefix")," \u67e5\u8be2\u52a0\u901f"),(0,t.yg)("li",{parentName:"ul"},"\u6570\u636e\u6e56\u652f\u6301\u4e86 Paimon Native Reader"),(0,t.yg)("li",{parentName:"ul"},"\u6570\u636e\u6e56\u652f\u6301\u8bfb\u53d6 LZO \u538b\u7f29\u7684 Parquet \u6587\u4ef6"),(0,t.yg)("li",{parentName:"ul"},"\u5ba1\u8ba1\u65e5\u5fd7\u652f\u6301 ",(0,t.yg)("inlineCode",{parentName:"li"},"insert into"))),(0,t.yg)("h2",{id:"\u6539\u8fdb\u548c\u4f18\u5316"},"\u6539\u8fdb\u548c\u4f18\u5316"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5bf9\u6570\u636e\u5747\u8861\u3001\u8fc1\u79fb\u7b49\u5b58\u50a8\u7ba1\u63a7\u8fdb\u884c\u4e86\u6539\u8fdb"),(0,t.yg)("li",{parentName:"ul"},"\u5bf9\u6570\u636e\u51b7\u5374\u7b56\u7565\u8fdb\u884c\u4e86\u6539\u8fdb\uff0c\u4ee5\u8282\u7701\u672c\u5730\u786c\u76d8\u5b58\u50a8\u7a7a\u95f4"),(0,t.yg)("li",{parentName:"ul"},"\u5bf9 ASCII \u5b57\u7b26\u4e32 substr \u8fdb\u884c\u4e86\u4f18\u5316"),(0,t.yg)("li",{parentName:"ul"},"\u9488\u5bf9\u4f7f\u7528 date \u51fd\u6570\u67e5\u8be2\u65f6\u7684\u5206\u533a\u88c1\u526a\u8fdb\u884c\u4e86\u4f18\u5316"),(0,t.yg)("li",{parentName:"ul"},"\u9488\u5bf9\u4f18\u5316\u5668\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7684\u53ef\u89c2\u6d4b\u6027\u548c\u6027\u80fd\u8fdb\u884c\u4e86\u4f18\u5316")),(0,t.yg)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,t.yg)("p",null,"\u611f\u8c22 73 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache Doris 2.0.4 \u7248\u672c\u505a\u51fa\u4e86\u91cd\u8981\u8d21\u732e \uff0c\u6b63\u662f\u7531\u4e8e\u4ed6\u4eec\u7684\u52aa\u529b\uff0cApache Doris \u5728\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u65b9\u9762\u53d6\u5f97\u4e86\u663e\u8457\u7684\u8fdb\u6b65\u3002"),(0,t.yg)("p",null,"airborne12\u3001amorynan\u3001AshinGau\u3001BePPPower\u3001bingquanzhao\u3001BiteTheDDDDt\u3001bobhan1\u3001ByteYue\u3001caiconghui\u3001CalvinKirs\u3001cambyzju\u3001caoliang-web\u3001catpineapple\u3001csun5285\u3001dataroaring\u3001deardeng\u3001dutyu\u3001eldenmoon\u3001englefly\u3001feifeifeimoon\u3001fornaix\u3001Gabriel39\u3001gnehil\u3001HappenLee\u3001hello-stephen\u3001HHoflittlefish777\u3001hubgeter\u3001hust-hhb\u3001ixzc\u3001jacktengg\u3001jackwener\u3001Jibing-Li\u3001kaka11chen\u3001KassieZ\u3001LemonLiTree\u3001liaoxin01\u3001LiBinfeng-01\u3001lihuigang\u3001liugddx\u3001luwei16\u3001morningman\u3001morrySnow\u3001mrhhsg\u3001Mryange\u3001nextdreamblue\u3001Nitin-Kashyap\u3001platoneko\u3001py023\u3001qidaye\u3001shuke987\u3001starocean999\u3001SWJTU-ZhangLei\u3001w41ter\u3001wangbo\u3001wsjz\u3001wuwenchi\u3001Xiaoccer\u3001xiaokang\u3001XieJiann\u3001xingyingone\u3001xinyiZzz\u3001xuwei0912\u3001xy720\u3001xzj7019\u3001yujun777\u3001zclllyybb\u3001zddr\u3001zhangguoqiang666\u3001zhangstar333\u3001zhannngchen\u3001zhiqiang-hhhh\u3001zy-kkk\u3001zzzxl1993"))}g.isMDXComponent=!0}}]);