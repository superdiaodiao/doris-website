"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41945],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),y=i,f=u["".concat(l,".").concat(y)]||u[y]||g[y]||s;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=y;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},32861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const s={title:"ST_ANGLE",language:"en"},o=void 0,a={unversionedId:"sql-manual/sql-functions/spatial-functions/st-angle",id:"version-2.0/sql-manual/sql-functions/spatial-functions/st-angle",title:"ST_ANGLE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-angle.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-angle",permalink:"/docs/sql-manual/sql-functions/spatial-functions/st-angle",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ST_ANGLE",language:"en"},sidebar:"docs",previous:{title:"ST_DISTANCE_SPHERE",permalink:"/docs/sql-manual/sql-functions/spatial-functions/st-distance-sphere"},next:{title:"ST_AZIMUTH",permalink:"/docs/sql-manual/sql-functions/spatial-functions/st-azimuth"}},l={},p=[{value:"ST_Angle",id:"st_angle",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"st_angle"},"ST_Angle"),(0,i.yg)("h3",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DOUBLE ST_Angle(GEOPOINT point1, GEOPOINT point2, GEOPOINT point3)")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("p",null,"Enter three point, which represent two intersecting lines. Returns the angle between these lines. Point 2 and point 1 represent the first line and point 2 and point 3 represent the second line. The angle between these lines is in radians, in the range [0, 2pi). The angle is measured clockwise from the first line to the second line."),(0,i.yg)("p",null,"ST_ANGLE has the following edge cases:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If points 2 and 3 are the same, returns NULL."),(0,i.yg)("li",{parentName:"ul"},"If points 2 and 1 are the same, returns NULL."),(0,i.yg)("li",{parentName:"ul"},"If points 2 and 3 are exactly antipodal, returns NULL."),(0,i.yg)("li",{parentName:"ul"},"If points 2 and 1 are exactly antipodal, returns NULL."),(0,i.yg)("li",{parentName:"ul"},"If any of the input geographies are not single points or are the empty geography, then throws an error.")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(0, 1));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------------------------+\n|                                                     4.71238898038469 |\n+----------------------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT ST_Angle(ST_Point(0, 0),ST_Point(1, 0),ST_Point(0, 1));\n+----------------------------------------------------------------------+\n| st_angle(st_point(0.0, 0.0), st_point(1.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------------------------+\n|                                                  0.78547432161873854 |\n+----------------------------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(1, 0));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(1.0, 0.0)) |\n+----------------------------------------------------------------------+\n|                                                                    0 |\n+----------------------------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(0, 0));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(0.0, 0.0)) |\n+----------------------------------------------------------------------+\n|                                                                 NULL |\n+----------------------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT ST_Angle(ST_Point(0, 0),ST_Point(-30, 0),ST_Point(150, 0));\n+--------------------------------------------------------------------------+\n| st_angle(st_point(0.0, 0.0), st_point(-30.0, 0.0), st_point(150.0, 0.0)) |\n+--------------------------------------------------------------------------+\n|                                                                     NULL |\n+--------------------------------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"ST_ANGLE,ST,ANGLE"))}g.isMDXComponent=!0}}]);