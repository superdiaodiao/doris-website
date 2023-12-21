"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[99026],{42587:(e,a,t)=>{t.d(a,{v:()=>s});var r=t(67294);function s(e){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",className:e.className},r.createElement("path",{d:"M4 6L7.57574 9.57574C7.81005 9.81005 8.18995 9.81005 8.42426 9.57574L12 6",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"}))}},70508:(e,a,t)=>{t.d(a,{k:()=>s});var r=t(67294);function s(e){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"transition-slide",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none"},r.createElement("path",{d:"M9.37549 12.3542L14.8755 6.85419L9.37549 1.35419",stroke:"currentColor","stroke-width":"1.65","stroke-linecap":"round","stroke-linejoin":"round"}),r.createElement("path",{d:"M1.12549 6.85419L14.8755 6.85419",stroke:"currentColor","stroke-width":"1.65","stroke-linecap":"round","stroke-linejoin":"round"}))}},91970:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(67294);function s(e){return r.createElement("div",{className:`page-header bg-[#F7F9FE] pt-10 pb-20 ${e.className}`},r.createElement("h1",{className:"title"},e.title),r.createElement("div",{className:"subtitle mt-4"},e.subtitle),e?.extra&&e?.extra)}},90709:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(67294);function s(){return r.createElement("span",null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},r.createElement("rect",{width:"16",height:"16",fill:"white"}),r.createElement("path",{d:"M1.5 8.19781L2.81207 6.84098L6.14286 10.2844L13.1861 3L14.5 4.35875L6.14286 13L1.5 8.19781Z",fill:"#0065FD"})))}var l=t(42587);function n(e){let{title:a,defaultExpand:t=!0,disabled:s=!1}=e;const[n,o]=(0,r.useState)(t);return r.createElement("div",{onClick:()=>{s||o(!n)},className:`peer flex cursor-pointer items-center justify-between rounded-t-lg bg-[#F7F9FE] px-[1rem] py-[0.75rem] lg:px-[3rem] lg:py-[1.5rem] text-2xl font-medium leading-[2.5rem] font-misans ${s?"cursor-default":"cursor-pointer"} ${n?"expand":" rounded-b-lg"}`},a,!s&&r.createElement(l.v,{className:"text-[#0065FD] text-3xl lg:text-2xl "+(n?"rotate-180":"")}))}function o(e){let{title:a,description:t,characteristic:l=[],rightContent:o,newLink:i,moreLink:c,showListIcon:d=!0,notes:m,expand:h,className:p,disabledExpand:u=!1}=e;return r.createElement("div",{className:`mt-[5.5rem] w-full rounded-lg border border-[#DFE5F0]  ${p}`},r.createElement(n,{title:a,defaultExpand:h,disabled:u}),r.createElement("div",{className:"grid grid-rows-[0fr] overflow-hidden transition-all peer-[.expand]:grid-rows-[1fr]"},r.createElement("div",{className:"min-h-0 "},r.createElement("div",{className:"flex flex-col flex-wrap items-center justify-between p-4 sm:p-[3rem] lg:flex-row lg:items-start"},r.createElement("div",{className:"w-full lg:mr-32 lg:flex-1"},i,t&&r.createElement("div",{className:"text-base leading-[1.625rem] text-[#1D1D1D]"},t),l?.length>0&&r.createElement("div",{className:"flex"},r.createElement("ul",null,l?.map((e=>r.createElement("li",{key:e,className:"mt-4 flex items-center space-x-2"},d&&r.createElement(s,null),r.createElement("div",{className:"text-[#5F6368]"},e)))))),c&&r.createElement("div",{className:"flex mt-6 items-center"},c),m&&r.createElement("div",{className:"mt-8 text-[#8592A6] text-xs leading-5"},m)),r.createElement("div",{className:"w-full pt-8 lg:w-[27.25rem] lg:pt-0"},o)))))}},40702:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(87462),s=t(39960),l=t(67294);function n(){return l.createElement("svg",{width:"1rem",height:"1rem",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M14.8497 8.99993L14.8497 14.5349C14.8497 14.8332 14.6079 15.0749 14.3097 15.0749H3.68966C3.39142 15.0749 3.14966 14.8332 3.14966 14.5349V3.46493C3.14966 3.16669 3.39142 2.92493 3.68966 2.92493H8.53166",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M11.4746 2.92493H14.3096C14.6078 2.92493 14.8496 3.16669 14.8496 3.46493V6.29993",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.9944 3.82495L8.90322 8.91612",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))}function o(e){const{className:a="primary-btn",label:t,linkIcon:o=l.createElement(n,null),...i}=e;return l.createElement(s.Z,(0,r.Z)({},i,{className:`flex group items-center justify-center hover:no-underline external-link ${a}`}),l.createElement("span",{className:"mr-2"},t),l.createElement("span",{className:"transition-slide"},o))}},70801:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(39960),s=t(67294);function l(e){return s.createElement(r.Z,{className:`flex group text-primary items-center text-base cursor-pointer hover:no-underline ${e?.className}`,to:e.to},s.createElement("span",{className:"mr-2"},e.text),s.createElement("span",{className:"transition-slide"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"transition-slide",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none"},s.createElement("path",{d:"M9.37549 12.3542L14.8755 6.85419L9.37549 1.35419",stroke:"currentColor","stroke-width":"1.65","stroke-linecap":"round","stroke-linejoin":"round"}),s.createElement("path",{d:"M1.12549 6.85419L14.8755 6.85419",stroke:"currentColor","stroke-width":"1.65","stroke-linecap":"round","stroke-linejoin":"round"}))))}},2409:(e,a,t)=>{t.r(a),t.d(a,{default:()=>D});var r=t(95999),s=t(67294),l=t(91970),n=t(68097),o=t(90709),i=t(40702),c=t(87462);function d(e){return s.createElement("svg",(0,c.Z)({},e,{width:"43",height:"23",viewBox:"0 0 43 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),s.createElement("path",{d:"M2 22.9092C0.895431 22.9092 -1.06778e-08 22.0137 -2.38494e-08 20.9092L-2.49335e-07 2.00009C-2.62507e-07 0.895518 0.89543 8.96347e-05 2 8.96215e-05L37.1011 8.9203e-05C37.9412 8.91929e-05 38.6917 0.525021 38.9798 1.3141L42.38 10.626C42.4577 10.8387 42.4609 11.0715 42.389 11.2863L38.9569 21.5438C38.684 22.3594 37.9202 22.9092 37.0602 22.9092L2 22.9092Z",fill:"#23C343"}),s.createElement("path",{d:"M6.98 5.45859H8.52L13.63 12.8926H13.686V5.45859H15.212V15.4546H13.728L8.562 7.93659H8.506V15.4546H6.98V5.45859ZM20.1052 8.02059C21.2812 8.02059 22.1912 8.41259 22.8072 9.22459C23.3672 9.95259 23.6612 10.9606 23.6752 12.2486H18.1872C18.2432 12.9486 18.4252 13.4946 18.7612 13.8726C19.0972 14.2366 19.5592 14.4326 20.1472 14.4326C20.6652 14.4326 21.0852 14.3066 21.4072 14.0686C21.6592 13.8726 21.8692 13.5506 22.0652 13.1306H23.5492C23.3812 13.8026 23.0592 14.3766 22.5552 14.8246C21.9252 15.3706 21.1272 15.6506 20.1612 15.6506C19.0972 15.6506 18.2432 15.3146 17.6272 14.6566C16.9552 13.9566 16.6192 13.0186 16.6192 11.8286C16.6192 10.7506 16.9272 9.85459 17.5712 9.12659C18.1872 8.38459 19.0412 8.02059 20.1052 8.02059ZM20.1472 9.23859C19.5872 9.23859 19.1532 9.39259 18.8172 9.72859C18.5092 10.0506 18.2992 10.5126 18.2152 11.1286H22.1212C21.9812 9.86859 21.3232 9.23859 20.1472 9.23859ZM24.1716 8.21659H25.8096L27.3356 13.6906L28.8196 8.21659H30.1916L31.6756 13.6906L33.2016 8.21659H34.8396L32.3896 15.4546H31.0176L29.5056 10.0366L27.9936 15.4546H26.6216L24.1716 8.21659Z",fill:"white"}))}var m=t(73770),h=t(24074),p=t(34041),u=t(42587);function x(e){let{value:a="",onChange:t,label:r,placeholder:l,options:n,isCascader:o=!1,displayRender:i=(e=>e.length>0?e[0]:"")}=e;return s.createElement("div",{className:"group relative z-0 w-full form-select"},o?s.createElement(h.Z,{displayRender:i,suffixIcon:s.createElement(u.v,null),allowClear:!1,value:a,onChange:e=>t&&t(e),options:n,className:"peer block h-[3.5rem] w-full appearance-none rounded-lg  bg-transparent text-sm text-[#1D1D1D] focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",popupClassName:"form-cascader"}):s.createElement(p.Z,{suffixIcon:s.createElement(u.v,null),popupClassName:"form-select-select",value:a,onChange:e=>t&&t(e||""),className:"peer block h-[3.5rem] w-full appearance-none rounded-lg  bg-transparent text-sm text-[#1D1D1D] focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",options:n}),s.createElement("label",{htmlFor:r,className:"absolute left-2 top-5 z-10 origin-[0] -translate-y-7 scale-75 transform bg-[#fff]  px-1 text-sm text-[#8592A6] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-hover:text-blue peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-[.ant-input-status-error]:text-[#ff4d4f] peer-[.ant-select-open]:text-blue-500  dark:text-gray-400"},l))}var g=t(88942),v=t(34308);function b(e){const{versions:a}=e,[t]=(0,g.Z)(),r=(0,v.qo)("version",t),l=(0,v.qo)("architecture",t),n=e=>a.find((a=>a.value===e)).children,o=(e,t,r)=>{const s=a.find((a=>a.value===e)).children.find((e=>e.value===t));return s?.[r]||null};return(0,s.useEffect)((()=>{const e=a.find((e=>t.getFieldValue("version")===e.value)).children;t.setFieldValue("architecture",e[0].value)}),[r]),s.createElement("div",{className:"rounded-lg border border-b-[0.375rem] border-[#444FD9] px-8 pt-[3.125rem] pb-[2.1875rem]"},s.createElement("div",{className:"mb-8 text-xl font-medium"},"Available downloads"),s.createElement(m.Z,{form:t,onFinish:e=>{window.open(o(e.version,e.architecture,"gz"),"_blank")},initialValues:{version:a[0].value}},s.createElement(m.Z.Item,{name:"version",rules:[{required:!0}]},s.createElement(x,{placeholder:"Version",label:"version",isCascader:!1,options:a})),s.createElement(m.Z.Item,{noStyle:!0,shouldUpdate:!0},(e=>{let{getFieldValue:a}=e;return s.createElement(m.Z.Item,{name:"architecture",rules:[{required:!0}]},s.createElement(x,{placeholder:"Architecture",label:"Architecture",isCascader:!1,options:n(a("version"))}))})),s.createElement(m.Z.Item,{style:{marginBottom:0},colon:!1},s.createElement("button",{type:"submit",className:"button-primary w-full text-lg"},"Download")),s.createElement("div",{className:"flex justify-center mt-[1.5rem]"},s.createElement("div",{className:"inline-flex items-center text-[#444FD9] cursor-pointer hover:underline",onClick:()=>{window.open(o(r,l,"asc"),"_blank")}},"asc"),s.createElement("div",{className:"inline-flex items-center ml-[4.375rem] text-[#444FD9] cursor-pointer hover:underline",onClick:()=>{window.open(o(r,l,"sha512"),"_blank")}},"sha512"),s.createElement("div",{className:"inline-flex items-center ml-[4.375rem] text-[#444FD9] cursor-pointer hover:underline",onClick:()=>{window.open(o(r,l,"source"),"_blank")}},"source code"))))}let f=function(e){return e.X64="x64 (avx2)",e.X64NoAvx2="x64 (no avx2)",e.ARM64="arm64",e}({});const w="https://apache-doris-releases.oss-accelerate.aliyuncs.com/",E=[{label:"2.0.3",value:"2.0.3",majorVersion:"2.0",children:[{label:f.X64,value:f.X64,gz:`${w}apache-doris-2.0.3-bin-x64.tar.gz`,asc:`${w}apache-doris-2.0.3-bin-x64.tar.gz.asc`,sha512:`${w}apache-doris-2.0.3-bin-x64.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.3/"},{label:f.X64NoAvx2,value:f.X64NoAvx2,gz:`${w}apache-doris-2.0.3-bin-x64-noavx2.tar.gz`,asc:`${w}apache-doris-2.0.3-bin-x64-noavx2.tar.gz.asc`,sha512:`${w}apache-doris-2.0.3-bin-x64-noavx2.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.3/"},{label:f.ARM64,value:f.ARM64,gz:`${w}apache-doris-2.0.3-bin-arm64.tar.gz`,asc:`${w}apache-doris-2.0.3-bin-arm64.tar.gz.asc`,sha512:`${w}apache-doris-2.0.3-bin-arm64.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.3/"}]},{label:"2.0.2",value:"2.0.2",majorVersion:"2.0",children:[{label:f.X64,value:f.X64,gz:`${w}apache-doris-2.0.2.1-bin-x64.tar.gz`,asc:`${w}apache-doris-2.0.2.1-bin-x64.tar.gz.asc`,sha512:`${w}apache-doris-2.0.2.1-bin-x64.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.2.1/"},{label:f.X64NoAvx2,value:f.X64NoAvx2,gz:`${w}apache-doris-2.0.2.1-bin-x64-noavx2.tar.gz`,asc:`${w}apache-doris-2.0.2.1-bin-x64-noavx2.tar.gz.asc`,sha512:`${w}apache-doris-2.0.2.1-bin-x64-noavx2.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.2.1/"},{label:f.ARM64,value:f.ARM64,gz:`${w}apache-doris-2.0.2.1-bin-arm64.tar.gz`,asc:`${w}apache-doris-2.0.2.1-bin-arm64.tar.gz.asc`,sha512:`${w}apache-doris-2.0.2.1-bin-arm64.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.2.1/"}]},{label:"2.0.1",value:"2.0.1",majorVersion:"2.0",children:[{label:f.X64,value:f.X64,gz:`${w}apache-doris-2.0.1.1-bin-x64.tar.gz`,asc:`${w}apache-doris-2.0.1.1-bin-x64.tar.gz.asc`,sha512:`${w}apache-doris-2.0.1.1-bin-x64.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.1.1/"},{label:f.X64NoAvx2,value:f.X64NoAvx2,gz:`${w}apache-doris-2.0.1.1-bin-x64-noavx2.tar.gz`,asc:`${w}apache-doris-2.0.1.1-bin-x64-noavx2.tar.gz.asc`,sha512:`${w}apache-doris-2.0.1.1-bin-x64-noavx2.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.1.1/"},{label:f.ARM64,value:f.ARM64,gz:`${w}apache-doris-2.0.1.1-bin-arm64.tar.gz`,asc:`${w}apache-doris-2.0.1.1-bin-arm64.tar.gz.asc`,sha512:`${w}apache-doris-2.0.1.1-bin-arm64.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.1.1/"}]},{label:"2.0.0",value:"2.0.0",majorVersion:"2.0",children:[{label:f.X64,value:f.X64,gz:`${w}apache-doris-2.0.0-bin-x64.tar.gz`,asc:`${w}apache-doris-2.0.0-bin-x64.tar.gz.asc`,sha512:`${w}apache-doris-2.0.0-bin-x64.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.0/"},{label:f.X64NoAvx2,value:f.X64NoAvx2,gz:`${w}apache-doris-2.0.0-bin-x64-noavx2.tar.gz`,asc:`${w}apache-doris-2.0.0-bin-x64-noavx2.tar.gz.asc`,sha512:`${w}apache-doris-2.0.0-bin-x64-noavx2.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.0/"},{label:f.ARM64,value:f.ARM64,gz:`${w}apache-doris-2.0.0-bin-arm64.tar.gz`,asc:`${w}apache-doris-2.0.0-bin-arm64.tar.gz.asc`,sha512:`${w}apache-doris-2.0.0-bin-arm64.tar.gz.sha512`,source:"https://downloads.apache.org/doris/2.0/2.0.0/"}]},{label:"1.2.7",value:"1.2.7",majorVersion:"1.2",children:[{label:f.X64,value:f.X64,gz:`${w}apache-doris-1.2.7.1-bin-x64.tar.xz`,asc:`${w}apache-doris-1.2.7.1-bin-x64.tar.xz.asc`,sha512:`${w}apache-doris-1.2.7.1-bin-x64.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.7.1/"},{label:f.X64NoAvx2,value:f.X64NoAvx2,gz:`${w}apache-doris-1.2.7.1-bin-x64-noavx2.tar.xz`,asc:`${w}apache-doris-1.2.7.1-bin-x64-noavx2.tar.xz.asc`,sha512:`${w}apache-doris-1.2.7.1-bin-x64-noavx2.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.7.1/"},{label:f.ARM64,value:f.ARM64,gz:`${w}apache-doris-1.2.7.1-bin-arm64.tar.xz`,asc:`${w}apache-doris-1.2.7.1-bin-arm64.tar.xz.asc`,sha512:`${w}apache-doris-1.2.7.1-bin-arm64.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.7.1/"}]},{label:"1.2.6",value:"1.2.6",majorVersion:"1.2",children:[{label:f.X64,value:f.X64,gz:`${w}apache-doris-1.2.6-bin-x64.tar.xz`,asc:`${w}apache-doris-1.2.6-bin-x64.tar.xz.asc`,sha512:`${w}apache-doris-1.2.6-bin-x64.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.6-rc03/"},{label:f.X64NoAvx2,value:f.X64NoAvx2,gz:`${w}apache-doris-1.2.6-bin-x64-noavx2.tar.xz`,asc:`${w}apache-doris-1.2.6-bin-x64-noavx2.tar.xz.asc`,sha512:`${w}apache-doris-1.2.6-bin-x64-noavx2.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.6-rc03/"},{label:f.ARM64,value:f.ARM64,gz:`${w}apache-doris-1.2.6-bin-arm64.tar.xz`,asc:`${w}apache-doris-1.2.6-bin-arm64.tar.xz.asc`,sha512:`${w}apache-doris-1.2.6-bin-arm64.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.6-rc03/"}]},{label:"1.2.5",value:"1.2.5",majorVersion:"1.2",children:[{label:f.X64,value:f.X64,gz:`${w}apache-doris-1.2.5-bin-x86_64.tar.xz`,asc:`${w}apache-doris-1.2.5-bin-x86_64.tar.xz.asc`,sha512:`${w}apache-doris-1.2.5-bin-x86_64.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.5-rc01/"},{label:f.X64NoAvx2,value:f.X64NoAvx2,gz:`${w}apache-doris-1.2.5-bin-x86_64-noavx2.tar.xz`,asc:`${w}apache-doris-1.2.5-bin-x86_64-noavx2.tar.xz.asc`,sha512:`${w}apache-doris-1.2.5-bin-x86_64-noavx2.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.5-rc01/"},{label:f.ARM64,value:f.ARM64,gz:`${w}apache-doris-1.2.5-bin-aarch64.tar.xz`,asc:`${w}apache-doris-1.2.5-bin-aarch64.tar.xz.asc`,sha512:`${w}apache-doris-1.2.5-bin-aarch64.tar.xz.sha512`,source:"https://downloads.apache.org/doris/1.2/1.2.5-rc01/"}]},{label:"1.2.4",value:"1.2.4",majorVersion:"1.2",children:[{label:f.X64,value:f.X64,gz:`${w}apache-doris-1.2.4.1-bin-x86_64.tar.xz`,asc:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/",sha512:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/",source:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/"},{label:f.X64NoAvx2,value:f.X64NoAvx2,gz:`${w}apache-doris-1.2.5-bin-x86_64-noavx2.tar.xz`,asc:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/",sha512:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/",source:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/"},{label:f.ARM64,value:f.ARM64,gz:`${w}apache-doris-1.2.5-bin-aarch64.tar.xz`,asc:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/",sha512:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/",source:"https://downloads.apache.org/doris/1.2/1.2.4.1-rc01/"}]}],z=[{label:"1.2",value:"1.2",children:[{label:"1.2.3",value:"1.2.3",source:"https://archive.apache.org/dist/doris/1.2/1.2.3-rc02/"},{label:"1.2.2",value:"1.2.2",source:"https://archive.apache.org/dist/doris/1.2/1.2.2-rc01/"},{label:"1.2.1",value:"1.2.1",source:"https://archive.apache.org/dist/doris/1.2/1.2.1-rc01/"}]},{label:"1.1",value:"1.1",children:[{label:"1.1.5",value:"1.1.5",source:"https://archive.apache.org/dist/doris/1.1/1.1.5-rc02/"},{label:"1.1.4",value:"1.1.4",source:"https://archive.apache.org/dist/doris/1.1/1.1.4-rc01/"},{label:"1.1.3",value:"1.1.3",source:"https://archive.apache.org/dist/doris/1.1/1.1.3-rc02/"},{label:"1.1.2",value:"1.1.2",source:"https://archive.apache.org/dist/doris/1.1/1.1.2-rc05/"},{label:"1.1.1",value:"1.1.1",source:"https://archive.apache.org/dist/doris/1.1/1.1.1-rc03/"},{label:"1.1.0",value:"1.1.0",source:"https://archive.apache.org/dist/doris/1.1/1.1.0-rc05/"}]},{label:"0.x",value:"0.x",children:[{label:"0.15.0",value:"0.15.0",source:"https://archive.apache.org/dist/doris/0.15.0-incubating/"},{label:"0.14.0",value:"0.14.0",source:"https://archive.apache.org/dist/doris/0.14.0-incubating/"},{label:"0.13.0",value:"0.13.0",source:"https://archive.apache.org/dist/doris/0.13.0-incubating/"}]}],N=[{title:"Doris on bare metal",description:"A platform for visualized cluster deployment on bare metal or VM.",link:"https://doris.apache.org/docs/install/standard-deployment"},{title:"Doris on K8s",description:"Create, configure and manage Doris clusters on Kubernetes",link:"https://doris.apache.org/docs/install/k8s-deploy"},{title:"Doris on AWS",description:"Deploy Doris on AWS with CloudFormation templates",link:"https://doris-cf-template.s3.amazonaws.com/cloudformation_doris.template.yaml"}];var k=t(70508);function $(e){const{versions:a}=e,[t]=(0,g.Z)();return s.createElement("div",{className:"rounded-lg border border-b-[0.375rem] border-[#0065FD] px-8 pt-[3.125rem] pb-[2.1875rem]"},s.createElement("div",{className:"mb-8 text-xl font-medium"},"Downloads"),s.createElement(m.Z,{form:t,onFinish:e=>{window.open((e=>{const t=a.find((a=>{let{value:t}=a;return t===e[0]})),r=t?.children.find((a=>{let{value:t}=a;return t===e[1]}));return r?.source||null})(e.version),"_blank")},initialValues:{version:[a[0].value,a[0].children[0].value]}},s.createElement(m.Z.Item,{name:"version",rules:[{required:!0}]},s.createElement(x,{placeholder:"Version",label:"version",isCascader:!0,displayRender:e=>e.length>0?e[e.length-1]:"",options:a})),s.createElement(m.Z.Item,{style:{marginBottom:0},colon:!1},s.createElement("button",{type:"submit",className:"button-primary w-full text-lg"},"Download"))))}var y=t(39960),C=t(70801);function D(){return s.createElement(n.Z,{title:(0,r.I)({id:"download.title",message:"Download"}),description:(0,r.I)({id:"homepage.banner.subTitle",message:"An easy-to-use, high-performance and unified analytical database"}),wrapperClassName:"download"},s.createElement(l.Z,{className:"lg:pt-[7.5rem] g-white",title:"Quick Download & Easy Deployment",subtitle:"Download the latest version and enjoy effortless deployment for your big data analytics needs."}),s.createElement("div",{className:"container mx-auto flex flex-col flex-wrap items-center justify-center mb-[5.5rem] lg:flex-row"},s.createElement(o.Z,{title:"Apache Doris 2.0",disabledExpand:!0,newLink:s.createElement("div",{className:"flex items-center space-x-2 pb-8 text-[#0065FD]"},s.createElement(d,null),s.createElement(i.Z,{linkIcon:!1,to:"/docs/releasenotes/release-2.0.3",label:"The latest version 2.0.3 is available now !",className:"bg-white p-0 text-[#444FD9]"})),description:"Apache Doris 2.0 milestone has merged over 4100 pull requests, representing a 70% increase from version 1.2 last year.",characteristic:["10 times faster data query","Enhanced log analytics and federated query capabilities","More efficient data writing and updates","Improved multi-tenant and resource isolation mechanisms"],rightContent:s.createElement(b,{versions:E.filter((e=>"2.0"===e.majorVersion))}),moreLink:s.createElement(C.Z,{to:"/docs/releasenotes/release-2.0.0",text:"Learn more from release note"}),notes:s.createElement(s.Fragment,null,"Note: For detailed upgrade precautions, please refer to the"," ",s.createElement(y.Z,{className:"text-primary underline",to:"/docs/install/standard-deployment"},"deployment")," ","manual and cluster"," ",s.createElement(y.Z,{className:"text-primary underline",to:"/docs/admin-manual/cluster-management/upgrade"},"upgrade")," ","manual.")}),s.createElement(o.Z,{title:"Apache Doris 1.2 ( Stable )",disabledExpand:!0,newLink:s.createElement("div",{className:"flex items-center space-x-2 pb-8 text-[#0065FD]"},s.createElement(d,null),s.createElement(i.Z,{linkIcon:!1,to:"/docs/releasenotes/release-1.2.7",label:"The latest version 1.2.7 is available now !",className:"bg-white p-0 text-[#444FD9]"})),description:"Apache Doris 1.2 enhance its functionality, performance, and reliability.",characteristic:["Full vectorized execution engine, 3-11 times faster data query","Merge-on-write on Unique Key Model","Multi-Catalog to enhance data lake analytics","Light schema change at millisecond-level and DDL auto-synchronization"],rightContent:s.createElement(b,{versions:E.filter((e=>"1.2"===e.majorVersion))}),moreLink:s.createElement(i.Z,{to:"/docs/releasenotes/release-1.2.0",className:"bg-white p-0 text-[#444FD9]",label:"Learn more from release note",linkIcon:s.createElement(k.k,null)}),notes:s.createElement(s.Fragment,null,"Note: For detailed upgrade precautions, please refer to the"," ",s.createElement(y.Z,{className:"text-primary underline",to:"/docs/install/standard-deployment"},"deployment")," ","manual and cluster"," ",s.createElement(y.Z,{className:"text-primary underline",to:"/docs/admin-manual/cluster-management/upgrade"},"upgrade")," ","manual.")}),s.createElement(o.Z,{expand:!1,title:"Archived releases",description:s.createElement("div",null,s.createElement("p",null,"We have collected all the code and binaries available from previous releases. For more information on the latest release, please refer to the Docs."),s.createElement("p",{className:"mt-6"},"Kindly note that older releases are provided for archival purposes only, and are no longer supported.")),rightContent:s.createElement($,{versions:z})})),s.createElement("a",{id:"runAnywhere",className:"scroll-mt-20"}),s.createElement("div",{className:"run-anywhere bg-[#F7F9FE] pt-[5.5rem] pb-[7.5rem]"},s.createElement("div",{className:"container mx-auto"},s.createElement("h3",{className:"text-center text-[#1D1D1D] text-[2.5rem] font-medium"},"Run anywhere"),s.createElement("ul",{className:"mt-10 grid gap-x-6 gap-y-3 lg:grid-cols-3 lg:gap-y-0"},N.map((e=>"Doris on AWS"!==e.title?s.createElement(y.Z,{href:e.link,key:e.title,className:"relative bg-white flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border-b-4 border-b-[#444FD9] py-[2rem] px-4 lg:px-[1.5rem] shadow-[inset_0_0_0_1px_#444FD9] hover:no-underline"},s.createElement("div",{className:"text-2xl text-[#1D1D1D]"},e.title),s.createElement("div",{className:"mt-4 text-base text-center text-[#4C576C]"},e.description),s.createElement("div",{className:"flex items-center mt-4 text-[#444FD9]"},s.createElement(C.Z,{to:e.link,text:"Learn more"}))):s.createElement("div",{className:"relative bg-white flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border-b-4 border-b-[#444FD9] py-[2rem] px-4 lg:px-[1.5rem] shadow-[inset_0_0_0_1px_#444FD9] hover:no-underline"},s.createElement("div",{className:"text-2xl text-[#1D1D1D]"},e.title),s.createElement("div",{className:"mt-4 text-base text-center text-[#4C576C]"},e.description),s.createElement("div",{className:"flex items-center mt-4"},s.createElement("span",null,"Coming soon")))))))))}}}]);