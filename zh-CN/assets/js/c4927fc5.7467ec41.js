"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52512],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return t?r.createElement(g,i(i({ref:n},y),{},{components:t})):r.createElement(g,i({ref:n},y))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={title:"AES",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/aes",id:"version-1.2/sql-manual/sql-functions/encrypt-digest-functions/aes",title:"AES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/encrypt-digest-functions/aes.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/aes",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/aes",draft:!1,tags:[],version:"1.2",frontMatter:{title:"AES",language:"zh-CN"},sidebar:"docs",previous:{title:"mod",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/mod"},next:{title:"MD5",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/md5"}},o={},p=[{value:"AES_ENCRYPT",id:"aes_encrypt",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"AES_DECRYPT",id:"aes_decrypt",level:2},{value:"Name",id:"name-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Type",id:"return-type-1",level:4},{value:"Example",id:"example-1",level:3},{value:"Keywords",id:"keywords-1",level:3}],y={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"aes_encrypt"},"AES_ENCRYPT"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"AES_ENCRYPT"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Aes \u52a0\u5bc6\u51fd\u6570\u3002\u8be5\u51fd\u6570\u4e0e MySQL \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"AES_ENCRYPT")," \u51fd\u6570\u884c\u4e3a\u4e00\u81f4\u3002\u9ed8\u8ba4\u91c7\u7528 AES_128_ECB \u7b97\u6cd5\uff0cpadding \u6a21\u5f0f\u4e3a PKCS7\u3002\u5e95\u5c42\u4f7f\u7528 OpenSSL \u5e93\u8fdb\u884c\u52a0\u5bc6\u3002\nReference: ",(0,a.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt"},"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt")),(0,a.yg)("h3",{id:"compatibility"},"Compatibility"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"aes_decrypt/aes_encrypt/sm4_decrypt/sm4_encrypt \u5f53\u6ca1\u6709\u63d0\u4f9b\u521d\u59cb\u5411\u91cf\u65f6\uff0cblock_encryption_mode \u4e0d\u751f\u6548\uff0c\u6700\u7ec8\u90fd\u4f1a\u4f7f\u7528 AES_128_ECB \u52a0\u89e3\u5bc6\uff0c\u8fd9\u548c MySQL \u7684\u884c\u4e3a\u4e0d\u4e00\u81f4\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u589e\u52a0 aes_decrypt_v2/aes_encrypt_v2/sm4_decrypt_v2/sm4_encrypt_v2 \u51fd\u6570\u652f\u6301\u6b63\u786e\u7684\u884c\u4e3a\uff0c\u6ca1\u6709\u63d0\u4f9b\u521d\u59cb\u5411\u91cf\u65f6\uff0cblock_encryption_mode \u53ef\u4ee5\u751f\u6548\uff0caes-192-ecb \u548c aes-256-ecb \u5c06\u6b63\u786e\u52a0\u89e3\u5bc6\uff0c\u5176\u4ed6\u5757\u52a0\u5bc6\u6a21\u5f0f\u5c06\u62a5\u9519\u3002\u5982\u679c\u65e0\u9700\u517c\u5bb9\u65e7\u6570\u636e\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528v2\u51fd\u6570\u3002")),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"AES_ENCRYPT(str, key_str[, init_vector])")),(0,a.yg)("h4",{id:"arguments"},"Arguments"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"str"),": \u5f85\u52a0\u5bc6\u7684\u5185\u5bb9"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"key_str"),": \u5bc6\u94a5"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"init_vector"),": \u521d\u59cb\u5411\u91cf\u3002block_encryption_mode \u9ed8\u8ba4\u503c\u4e3a aes-128-ecb\uff0c\u5b83\u4e0d\u9700\u8981\u521d\u59cb\u5411\u91cf\uff0c\u53ef\u9009\u7684\u5757\u52a0\u5bc6\u6a21\u5f0f CBC\u3001CFB1\u3001CFB8\u3001CFB128 \u548c OFB \u90fd\u9700\u8981\u4e00\u4e2a\u521d\u59cb\u5411\u91cf\u3002")),(0,a.yg)("h4",{id:"return-type"},"Return Type"),(0,a.yg)("p",null,"VARCHAR(*)"),(0,a.yg)("h4",{id:"remarks"},"Remarks"),(0,a.yg)("p",null,"AES_ENCRYPT \u51fd\u6570\u5bf9\u4e8e\u4f20\u5165\u7684\u5bc6\u94a5\uff0c\u5e76\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528\uff0c\u800c\u662f\u4f1a\u8fdb\u4e00\u6b65\u505a\u5904\u7406\uff0c\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u6839\u636e\u4f7f\u7528\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u786e\u5b9a\u5bc6\u94a5\u7684\u5b57\u8282\u6570\uff0c\u6bd4\u5982\u4f7f\u7528 AES_128_ECB \u7b97\u6cd5\uff0c\u5219\u5bc6\u94a5\u5b57\u8282\u6570\u4e3a ",(0,a.yg)("inlineCode",{parentName:"li"},"128 / 8 = 16"),"\uff08\u5982\u679c\u4f7f\u7528 AES_256_ECB \u7b97\u6cd5\uff0c\u5219\u5bc6\u94a5\u5b57\u8282\u6570\u4e3a ",(0,a.yg)("inlineCode",{parentName:"li"},"128 / 8 = 32"),"\uff09\uff1b"),(0,a.yg)("li",{parentName:"ol"},"\u7136\u540e\u9488\u5bf9\u7528\u6237\u8f93\u5165\u7684\u5bc6\u94a5\uff0c\u7b2c ",(0,a.yg)("inlineCode",{parentName:"li"},"i")," \u4f4d\u548c\u7b2c ",(0,a.yg)("inlineCode",{parentName:"li"},"16*k+i")," \u4f4d\u8fdb\u884c\u5f02\u6216\uff0c\u5982\u679c\u7528\u6237\u8f93\u5165\u7684\u5bc6\u94a5\u4e0d\u8db3 16 \u4f4d\uff0c\u5219\u540e\u9762\u8865 0\uff1b"),(0,a.yg)("li",{parentName:"ol"},"\u6700\u540e\uff0c\u518d\u4f7f\u7528\u65b0\u751f\u6210\u7684\u5bc6\u94a5\u8fdb\u884c\u52a0\u5bc6\uff1b")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n")),(0,a.yg)("p",null,"\u7ed3\u679c\u4e0e\u5728 MySQL \u4e2d\u6267\u884c\u7684\u7ed3\u679c\u4e00\u81f4\uff0c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u66f4\u6362\u5176\u4ed6\u52a0\u5bc6\u7b97\u6cd5\uff0c\u53ef\u4ee5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set block_encryption_mode=\"AES_256_CBC\";\nselect to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n")),(0,a.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+-----------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '0123456789')) |\n+-----------------------------------------------------+\n| tsmK1HzbpnEdR2//WhO+MA==                            |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"\u5173\u4e8e ",(0,a.yg)("inlineCode",{parentName:"p"},"block_encryption_mode")," \u53ef\u9009\u7684\u503c\u53ef\u4ee5\u53c2\u89c1\uff1a",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/advanced/variables"},"\u53d8\u91cf\u7ae0\u8282"),"\u3002"),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"AES_ENCRYPT"),(0,a.yg)("h2",{id:"aes_decrypt"},"AES_DECRYPT"),(0,a.yg)("h3",{id:"name-1"},"Name"),(0,a.yg)("p",null,"AES_DECRYPT"),(0,a.yg)("h3",{id:"description-1"},"Description"),(0,a.yg)("p",null,"Aes \u89e3\u5bc6\u51fd\u6570\u3002\u8be5\u51fd\u6570\u4e0e MySQL \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"AES_DECRYPT")," \u51fd\u6570\u884c\u4e3a\u4e00\u81f4\u3002\u9ed8\u8ba4\u91c7\u7528 AES_128_ECB \u7b97\u6cd5\uff0cpadding \u6a21\u5f0f\u4e3a PKCS7\u3002\u5e95\u5c42\u4f7f\u7528 OpenSSL \u5e93\u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.yg)("h4",{id:"syntax-1"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"AES_DECRYPT(str,key_str[,init_vector])\n")),(0,a.yg)("h4",{id:"arguments-1"},"Arguments"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"str"),": \u5df2\u52a0\u5bc6\u7684\u5185\u5bb9"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"key_str"),": \u5bc6\u94a5"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"init_vector"),": \u521d\u59cb\u5411\u91cf")),(0,a.yg)("h4",{id:"return-type-1"},"Return Type"),(0,a.yg)("p",null,"VARCHAR(*)"),(0,a.yg)("h3",{id:"example-1"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n")),(0,a.yg)("p",null,"\u7ed3\u679c\u4e0e\u5728 MySQL \u4e2d\u6267\u884c\u7684\u7ed3\u679c\u4e00\u81f4\uff0c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u66f4\u6362\u5176\u4ed6\u52a0\u5bc6\u7b97\u6cd5\uff0c\u53ef\u4ee5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set block_encryption_mode=\"AES_256_CBC\";\nselect AES_DECRYPT(FROM_BASE64('tsmK1HzbpnEdR2//WhO+MA=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n")),(0,a.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+---------------------------------------------------------------------------+\n| aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='), '***', '0123456789') |\n+---------------------------------------------------------------------------+\n| text                                                                      |\n+---------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"\u5173\u4e8e ",(0,a.yg)("inlineCode",{parentName:"p"},"block_encryption_mode")," \u53ef\u9009\u7684\u503c\u53ef\u4ee5\u53c2\u89c1\uff1a",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/advanced/variables"},"\u53d8\u91cf\u7ae0\u8282"),"\u3002"),(0,a.yg)("h3",{id:"keywords-1"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"AES_DECRYPT\n")))}u.isMDXComponent=!0}}]);