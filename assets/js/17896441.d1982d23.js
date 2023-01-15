"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[27918],{74855:(e,t,a)=>{a.r(t),a.d(t,{default:()=>se});var n=a(67294),l=a(86010),r=a(1944),s=a(87524),c=a(35281),o=a(87462),i=a(95999),m=a(32244);function d(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(m.Z,(0,o.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(m.Z,(0,o.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=a(52263),b=a(39960),E=a(94104),v=a(60373),p=a(74477);const h={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=h[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(b.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function N(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,u.Z)(),{pluginId:s}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,v.J)(s),{latestDocSuggestion:i,latestVersionSuggestion:m}=(0,E.Jo)(s),d=i??(b=m).docs.find((e=>e.id===b.mainDocId));var b;return n.createElement("div",{className:(0,l.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:m.label,to:d.path,onClick:()=>o(m.name)})))}function Z(e){let{className:t}=e;const a=(0,p.E)();return a.banner?n.createElement(N,{className:t,versionMetadata:a}):null}function k(e){let{className:t}=e;const a=(0,p.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}const L="iconEdit_eYIM";function _(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},n.createElement(_,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C=a(13008);const w="tags_jXut",x="tag_QGVx";function M(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(w,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:x},n.createElement(C.Z,{label:t,permalink:a}))}))))}const A="lastUpdated_itvN";function I(e){return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M,e)))}function V(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",A)},n.createElement(b.Z,{to:"https://github.com/apache/doris/discussions"},n.createElement(i.Z,{id:"documentation.feedback"},"Feedback"))))}function U(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:i,tags:m}=a,d=m.length>0,u=!!(r||s||i);return d||u?n.createElement("footer",{className:(0,l.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(I,{tags:m}),u&&n.createElement(V,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var y=a(39407),B=a(86043),H=a(93743);const P="tocCollapsibleButton_TO0P",S="tocCollapsibleButtonExpanded_MG3E";function F(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,o.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",P,!t&&S,a.className)}),n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const z="tocCollapsible_ETCw",D="tocCollapsibleContent_vkbj",R="tocCollapsibleExpanded_sAul";function O(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:o}=(0,B.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(z,!c&&R,a)},n.createElement(F,{collapsed:c,onClick:o}),n.createElement(B.z,{lazy:!0,className:D,collapsed:c},n.createElement(H.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var j=a(92503),G=a(52802),q=a(48596),J=a(44996);function Q(e){return n.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const W={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function X(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(b.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function Y(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return n.createElement("li",(0,o.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function $(){const e=(0,J.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(b.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",W.breadcrumbsItemLink),href:e},n.createElement(Q,{className:W.breadcrumbHomeIcon})))}function K(){const e=(0,G.s1)(),t=(0,q.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(c.k.docs.docBreadcrumbs,W.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement($,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(Y,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(X,{href:t.href,isLast:l},t.label))})))):null}var ee=a(45042);const te="docItemContainer_Adtb",ae="docItemCol_GujU",ne="tocMobile_aoJ5";function le(e){const{content:t}=e,{metadata:a,frontMatter:l,assets:s}=t,{keywords:c}=l,{description:o,title:i}=a,m=s.image??l.image;return n.createElement(r.d,{title:i,description:o,keywords:c,image:m})}function re(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:o,hide_table_of_contents:i,toc_min_heading_level:m,toc_max_heading_level:u}=r,{title:b}=a,E=!o&&void 0===t.contentTitle,v=(0,s.i)(),p=!i&&t.toc&&t.toc.length>0,h=p&&("desktop"===v||"ssr"===v);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&ae)},n.createElement(Z,null),n.createElement("div",{className:te},n.createElement("article",null,n.createElement(K,null),n.createElement(k,null),p&&n.createElement(O,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:u,className:(0,l.Z)(c.k.docs.docTocMobile,ne)}),n.createElement("div",{className:(0,l.Z)(c.k.docs.docMarkdown,"markdown")},E&&n.createElement("header",null,n.createElement(j.Z,{as:"h1"},b)),n.createElement(ee.Z,null,n.createElement(t,null))),n.createElement(U,e)),n.createElement(d,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:u,className:c.k.docs.docTocDesktop})))}function se(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(r.FG,{className:t},n.createElement(le,e),n.createElement(re,e))}},13008:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010),r=a(39960);const s="tag_zVej",c="tagRegular_sFm0",o="tagWithCount_h2kH";function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,i?o:c)},a,i&&n.createElement("span",null,i))}},74477:(e,t,a)=>{a.d(t,{E:()=>c,q:()=>s});var n=a(67294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},68179:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(22435),l=a(67294),r=a(86010);const s={...n.Z,version:function(e){const{children:t,type:a="paragraph",since:n="",deprecated:s="",comment:c=""}=e,[o,i]=(0,l.useState)(!1);return l.createElement("span",{className:(0,r.Z)("version-mark",a),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},l.createElement("span",{className:(0,r.Z)("v-mark",o&&"show")},l.createElement("span",{className:(0,r.Z)("version-tags")},n&&l.createElement("span",{className:"version-tag"},l.createElement("span",{className:"version-tag-t"},"Since"),l.createElement("span",{className:"version-tag-n since"},"Version ",n)),s&&l.createElement("span",{className:"version-tag"},l.createElement("span",{className:"version-tag-t"},"Deprecated"),l.createElement("span",{className:"version-tag-n deprecated"},"Version ",s))),c&&l.createElement("span",{className:"version-comment"},c)),t)}}}}]);