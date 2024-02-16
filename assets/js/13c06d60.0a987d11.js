"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5782],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,y=p["".concat(i,".").concat(m)]||p[m]||_[m]||s;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(58168),a=(r(96540),r(15680));const s={title:"ST_AREA",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/spatial-functions/st-area",id:"sql-manual/sql-functions/spatial-functions/st-area",title:"ST_AREA",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/spatial-functions/st-area.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-area",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st-area",draft:!1,tags:[],version:"current",frontMatter:{title:"ST_AREA",language:"en"},sidebar:"docs",previous:{title:"ST_ANGLE_SPHERE",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st-angle-sphere"},next:{title:"ST_POINT",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st-point"}},i={},u=[{value:"ST_Area_Square_Meters,ST_Area_Square_Km",id:"st_area_square_metersst_area_square_km",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function _(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"st_area_square_metersst_area_square_km"},"ST_Area_Square_Meters,ST_Area_Square_Km"),(0,a.yg)("h3",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DOUBLE ST_Area_Square_Meters(GEOMETRY geo)\nDOUBLE ST_Area_Square_Km(GEOMETRY geo)\n")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Calculate the area of the area on the earth's sphere. Currently, the parameter geo supports St_Point, St_LineString, St_Circle and St_Polygon. "),(0,a.yg)("p",null,"Returns zero if the input is St_Point, St_LineString."),(0,a.yg)("p",null,"Among them, the unit returned by ST_Area_Square_Meters (GEOMETRY geo) is square meters, and the unit returned by ST_Area_Square_Km (GEOMETRY geo) is square kilometers."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT ST_Area_Square_Meters(ST_Circle(0, 0, 1));\n+-------------------------------------------------+\n| st_area_square_meters(st_circle(0.0, 0.0, 1.0)) |\n+-------------------------------------------------+\n|                              3.1415926535897869 |\n+-------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT ST_Area_Square_Km(ST_Polygon(\"POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))\"));\n+----------------------------------------------------------------------+\n| st_area_square_km(st_polygon('POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))')) |\n+----------------------------------------------------------------------+\n|                                                   12364.036567076409 |\n+----------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_Point(0, 1));\n+-------------------------------------------+\n| st_area_square_meters(st_point(0.0, 1.0)) |\n+-------------------------------------------+\n|                                         0 |\n+-------------------------------------------+\n1 row in set (0.05 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_LineFromText(\"LINESTRING (1 1, 2 2)\"));\n+-----------------------------------------------------------------+\n| st_area_square_meters(st_linefromtext('LINESTRING (1 1, 2 2)')) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n1 row in set (0.03 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ST_Area_Square_Meters,ST_Area_Square_Km,ST_Area,ST,Area"))}_.isMDXComponent=!0}}]);