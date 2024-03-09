"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37849],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var i=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),g=a,u=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return n?i.createElement(u,r(r({ref:t},d),{},{components:n})):i.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},577858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=n(58168),a=(n(296540),n(15680));const o={title:"Time Zone",language:"en"},r=void 0,l={unversionedId:"advanced/time-zone",id:"version-2.1/advanced/time-zone",title:"Time Zone",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/advanced/time-zone.md",sourceDirName:"advanced",slug:"/advanced/time-zone",permalink:"/docs/advanced/time-zone",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Time Zone",language:"en"},sidebar:"docs",previous:{title:"Variable",permalink:"/docs/advanced/variables"},next:{title:"SQL Mode",permalink:"/docs/advanced/sql-mode"}},s={},m=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operations",id:"specific-operations",level:2},{value:"Data source",id:"data-source",level:2},{value:"Impact of time zone",id:"impact-of-time-zone",level:2},{value:"1. functions",id:"1-functions",level:3},{value:"2. Values of time types",id:"2-values-of-time-types",level:3},{value:"3. Daylight Saving Time",id:"3-daylight-saving-time",level:3},{value:"Usage",id:"usage",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Time Zone Sensitive Data",id:"time-zone-sensitive-data",level:3},{value:"Daylight Saving Time",id:"daylight-saving-time",level:3},{value:"Extended Reading",id:"extended-reading",level:2}],d={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"time-zone"},"Time Zone"),(0,a.yg)("p",null,"Doris supports custom time zone settings"),(0,a.yg)("h2",{id:"basic-concepts"},"Basic concepts"),(0,a.yg)("p",null,"The following two time zone related parameters exist within Doris:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"system_time_zone")," : When the server starts up, it will be set automatically according to the time zone set by the machine, and cannot be modified after it is set."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"time_zone")," : The current time zone of the cluster.")),(0,a.yg)("h2",{id:"specific-operations"},"Specific operations"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"SHOW VARIABLES LIKE '% time_zone%'")),(0,a.yg)("p",{parentName:"li"},"View the current time zone related configuration")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"SET [global] time_zone = 'Asia/Shanghai'")),(0,a.yg)("p",{parentName:"li"},"This command sets the time zone at the session level. If the ",(0,a.yg)("inlineCode",{parentName:"p"},"global")," keyword is used, Doris FE persists the parameter and it takes effect for all new sessions afterwards."))),(0,a.yg)("h2",{id:"data-source"},"Data source"),(0,a.yg)("p",null,"The time zone data contains the name of the time zone, the corresponding time offset, and the change of daylight saving time. On the machine where the BE is located, the sources of the data are as follows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"the directory returned by command ",(0,a.yg)("inlineCode",{parentName:"li"},"TZDIR"),". If was not supported, the directory ",(0,a.yg)("inlineCode",{parentName:"li"},"/usr/share/zoneinfo"),"."),(0,a.yg)("li",{parentName:"ol"},"the ",(0,a.yg)("inlineCode",{parentName:"li"},"zoneinfo")," directory generated under the Doris BE deployment directory. The ",(0,a.yg)("inlineCode",{parentName:"li"},"resource/zoneinfo.tar.gz")," directory from the Doris Repository.")),(0,a.yg)("p",null,"Look up the above data sources in order and use the current item if found. If the BE configuration item ",(0,a.yg)("inlineCode",{parentName:"p"},"use_doris_tzfile")," is true, the search for the first item is skipped. If neither is found, the Doris BE will fail to start, please rebuild the BE correctly or get the distribution."),(0,a.yg)("h2",{id:"impact-of-time-zone"},"Impact of time zone"),(0,a.yg)("h3",{id:"1-functions"},"1. functions"),(0,a.yg)("p",null,"Includes values displayed by time functions such as ",(0,a.yg)("inlineCode",{parentName:"p"},"NOW()")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"CURTIME()"),", and also time values in ",(0,a.yg)("inlineCode",{parentName:"p"},"show load"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"show backends"),"."),(0,a.yg)("p",null,"However, it does not affect the less than value of the time-type partitioned columns in ",(0,a.yg)("inlineCode",{parentName:"p"},"create table"),", nor does it affect the display of values stored as ",(0,a.yg)("inlineCode",{parentName:"p"},"date/datetime")," types."),(0,a.yg)("p",null,"Functions affected by time zone:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"FROM_UNIXTIME"),": Given a UTC timestamp, return the date and time of the specified time zone, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"FROM_UNIXTIME(0)"),", return the CST time zone: ",(0,a.yg)("inlineCode",{parentName:"p"},"1970-01-08:00"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP"),": Given a specified time zone date and time, return UTC timestamp, such as CST time zone ",(0,a.yg)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP('1970-01 08:00:00')"),", return ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"CURTIME"),": Returns the datetime of specified time zone.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"NOW"),": Returns the specified date and time of specified time zone.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"CONVERT_TZ"),": Converts a date and time from one specified time zone to another."))),(0,a.yg)("h3",{id:"2-values-of-time-types"},"2. Values of time types"),(0,a.yg)("p",null,"For ",(0,a.yg)("inlineCode",{parentName:"p"},"DATE"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DATEV2"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DATETIMEV2")," types, we support time zone conversion when inserting data."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'If the data comes with a time zone, such as "2020-12-12 12:12:12+08:00", and the current Doris ',(0,a.yg)("inlineCode",{parentName:"li"},"time_zone = +00:00"),', you get the actual value "2020-12-12 04:12:12".'),(0,a.yg)("li",{parentName:"ul"},'If the data does not come with a time zone, such as "2020-12-12 12:12:12", the time is considered to be absolute and no conversion occurs.')),(0,a.yg)("h3",{id:"3-daylight-saving-time"},"3. Daylight Saving Time"),(0,a.yg)("p",null,"Daylight Saving Time is essentially the actual time offset of a named time zone, which changes on certain dates."),(0,a.yg)("p",null,"For example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles")," time zone contains a Daylight Saving Time adjustment that begins and ends approximately in March and November of each year. That is, the ",(0,a.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles")," actual time zone offset changes from ",(0,a.yg)("inlineCode",{parentName:"p"},"-08:00")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"-07:00")," at the start of Daylight Savings Time in March, and from ",(0,a.yg)("inlineCode",{parentName:"p"},"-07:00")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"-08:00")," at the end of Daylight Savings Time in November.\nIf you do not want Daylight Saving Time to be turned on, set ",(0,a.yg)("inlineCode",{parentName:"p"},"time_zone")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"-08:00")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles"),"."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"Time zone values can be given in a variety of formats. The following standard formats are well supported in Doris:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},'standard named time zone formats, such as "Asia/Shanghai", "America/Los_Angeles".'),(0,a.yg)("li",{parentName:"ol"},'standard offset formats, such as "+02:30", "-10:00".'),(0,a.yg)("li",{parentName:"ol"},"abbreviated time zone formats, currently only support:",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},'"GMT", "UTC", equivalent to "+00:00" time zone'),(0,a.yg)("li",{parentName:"ol"},'"CST", which is equivalent to the "Asia/Shanghai" time zone'))),(0,a.yg)("li",{parentName:"ol"},'single letter Z, for Zulu time zone, equivalent to "+00:00" time zone')),(0,a.yg)("p",null,"Note: Some other formats are currently supported in some imports in Doris due to different implementations. ",(0,a.yg)("strong",{parentName:"p"},"Production environments should not rely on these formats that are not listed here, and their behaviour may change at any time"),", so keep an eye on the relevant changelog for version updates."),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("h3",{id:"time-zone-sensitive-data"},"Time Zone Sensitive Data"),(0,a.yg)("p",null,"The time zone issue involves three main influences:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"session variable ",(0,a.yg)("inlineCode",{parentName:"li"},"time_zone")," -- cluster timezone"),(0,a.yg)("li",{parentName:"ol"},"header ",(0,a.yg)("inlineCode",{parentName:"li"},"timezone")," specified during import(Stream Load, Broker Load etc.) -- importing timezone"),(0,a.yg)("li",{parentName:"ol"},'timezone type literal "+08:00" in "2023-12-12 08:00:00+08:00" -- data timezone')),(0,a.yg)("p",null,"We can understand it as follows:"),(0,a.yg)("p",null,"Doris is currently compatible with importing data into Doris under all time zones. Since time types such as ",(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME")," do not contain time zone information, the time type data in the Doris cluster can be divided into two categories:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"absolute time"),(0,a.yg)("li",{parentName:"ol"},"time in a specific time zone")),(0,a.yg)("p",null,"Absolute time means that it is associated with a data scenario that is independent of the time zone. For this type of data, it should be imported without any time zone suffix and they will be stored as is. For this type of time, since it is not associated with an actual time zone, taking the result of a function such as ",(0,a.yg)("inlineCode",{parentName:"p"},"unix_timestamp")," is meaningless. Changes to the cluster ",(0,a.yg)("inlineCode",{parentName:"p"},"time_zone")," will not affect its use."),(0,a.yg)("p",null,'The time in a particular time zone. This "specific time zone" is our session variable ',(0,a.yg)("inlineCode",{parentName:"p"},"time_zone"),". As a matter of best practice, this variable should be set before data is imported ",(0,a.yg)("strong",{parentName:"p"},"and never changed"),". At this point in time, this type of time data in the Doris cluster will actually mean: time in the ",(0,a.yg)("inlineCode",{parentName:"p"},"time_zone")," time zone. Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select @@time_zone;\n+----------------+\n| @@time_zone    |\n+----------------+\n| Asia/Hong_Kong |\n+----------------+\n1 row in set (0.12 sec)\n\nmysql> insert into dtv23 values('2020-12-12 12:12:12+02:00'); --- absolute timezone is +02:00\nQuery OK, 1 row affected (0.27 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 18:12:12.000 | --- converted to Doris' cluster timezone Asia/Hong_Kong. This semantics should be maintained. \n+-------------------------+\n1 row in set (0.19 sec)\n\nmysql> set time_zone = 'America/Los_Angeles';\nQuery OK, 0 rows affected (0.15 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 18:12:12.000 | --- If time_zone is modified, the time value does not change and its meaning is disturbed.\n+-------------------------+\n1 row in set (0.18 sec)\n\nmysql> insert into dtv23 values('2020-12-12 12:12:12+02:00');\nQuery OK, 1 row affected (0.17 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 02:12:12.000 |\n| 2020-12-12 18:12:12.000 |\n+-------------------------+ --- the data has been misplaced.\n2 rows in set (0.19 sec)\n")),(0,a.yg)("p",null,"In summary, the best practice for dealing with time zone issues is to:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Confirm the timezone characterised by the cluster and set the ",(0,a.yg)("inlineCode",{parentName:"li"},"time_zone")," before use, and do not change it afterwards."),(0,a.yg)("li",{parentName:"ol"},"Set the header ",(0,a.yg)("inlineCode",{parentName:"li"},"timezone")," on import to match the cluster ",(0,a.yg)("inlineCode",{parentName:"li"},"time_zone"),"."),(0,a.yg)("li",{parentName:"ol"},"For absolute time, import without a time zone suffix; for time in a time zone, import with a specific time zone suffix, which will be converted to the Doris ",(0,a.yg)("inlineCode",{parentName:"li"},"time_zone")," time zone after import.")),(0,a.yg)("h3",{id:"daylight-saving-time"},"Daylight Saving Time"),(0,a.yg)("p",null,"The start and end times for Daylight Saving Time are taken from the ",(0,a.yg)("a",{parentName:"p",href:"#data-source"},"current time zone data source")," and may not necessarily correspond exactly to the actual officially recognised times for the current year's time zone location. This data is maintained by ICANN. If you need to ensure that Daylight Saving Time behaves as specified for the current year, please make sure that data source selected by Doris is the latest ICANN published time zone data, which could be downloaded at ",(0,a.yg)("a",{parentName:"p",href:"#extended-reading"},"Extended Reading"),"."),(0,a.yg)("h2",{id:"extended-reading"},"Extended Reading"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of tz database time zones")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.iana.org/time-zones"},"IANA Time Zone Database")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://mm.icann.org/pipermail/tz-announce/"},"The tz-announce Archives"))))}c.isMDXComponent=!0}}]);