"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76771],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},g=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,c=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?i.createElement(c,r(r({ref:n},g),{},{components:t})):i.createElement(c,r({ref:n},g))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(58168),a=(t(96540),t(15680));const o={title:"Doris Storage File Format Optimization",language:"en"},r=void 0,l={unversionedId:"design/doris_storage_optimization",id:"design/doris_storage_optimization",title:"Doris Storage File Format Optimization",description:"\x3c!--",source:"@site/community/design/doris_storage_optimization.md",sourceDirName:"design",slug:"/design/doris_storage_optimization",permalink:"/community/design/doris_storage_optimization",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris Storage File Format Optimization",language:"en"},sidebar:"community",previous:{title:"Security",permalink:"/community/security"},next:{title:"GROUPING SETS DESIGN",permalink:"/community/design/grouping_sets_design"}},s={},d=[{value:"File format",id:"file-format",level:2},{value:"DataPage",id:"datapage",level:3},{value:"Bloom Filter Pages",id:"bloom-filter-pages",level:3},{value:"Ordinal Index Page",id:"ordinal-index-page",level:3},{value:"Short Key Index page",id:"short-key-index-page",level:3},{value:"Column&#39;s other indexes",id:"columns-other-indexes",level:3},{value:"Metadata Definition",id:"metadata-definition",level:3},{value:"Read-write logic",id:"read-write-logic",level:2},{value:"Write",id:"write",level:3},{value:"Read",id:"read",level:3},{value:"Coding",id:"coding",level:2},{value:"Compression",id:"compression",level:2},{value:"TODO",id:"todo",level:2}],g={toc:d},p="wrapper";function u(e){let{components:n,...o}=e;return(0,a.yg)(p,(0,i.A)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"doris-storage-file-format-optimization"},"Doris Storage File Format Optimization"),(0,a.yg)("h2",{id:"file-format"},"File format"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(24690).A,width:"640",height:"825"})),(0,a.yg)("center",null,"1. doris segment"),(0,a.yg)("p",null,"Documents include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The file starts with an 8-byte magic code to identify the file format and version"),(0,a.yg)("li",{parentName:"ul"},"Data Region: Used to store data information for each column, where the data is loaded on demand by pages."),(0,a.yg)("li",{parentName:"ul"},"Index Region: Doris stores the index data of each column in Index Region, where the data is loaded according to column granularity, so the data information of the following column is stored separately."),(0,a.yg)("li",{parentName:"ul"},"Footer",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FileFooterPB: Metadata Information for Definition Files"),(0,a.yg)("li",{parentName:"ul"},"Checksum of 4 bytes of footer Pb content"),(0,a.yg)("li",{parentName:"ul"},"Four bytes FileFooterPB message length for reading FileFooterPB"),(0,a.yg)("li",{parentName:"ul"},"The 8 byte MAGIC CODE is stored in the last bit to facilitate the identification of file types in different scenarios.")))),(0,a.yg)("p",null,"The data in the file is organized in the form of page, which is the basic unit of coding and compression. Current page types include the following:"),(0,a.yg)("h3",{id:"datapage"},"DataPage"),(0,a.yg)("p",null,"Data Page is divided into two types: nullable and non-nullable data pages."),(0,a.yg)("p",null,"Nullable's data page includes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\n                 +----------------+\n                 |  value count   |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 | bitmap length  |\n                 |----------------|\n                 |  null bitmap   |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")),(0,a.yg)("p",null,"non -zero data page32467;- 26500;- 229140;-"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"                 |----------------|\n                 |   value count  |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")),(0,a.yg)("p",null,"The meanings of each field are as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"value count",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Represents the number of rows in a page"))),(0,a.yg)("li",{parentName:"ul"},"First row id",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Line number of the first line in page"))),(0,a.yg)("li",{parentName:"ul"},"bitmap length",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Represents the number of bytes in the next bitmap"))),(0,a.yg)("li",{parentName:"ul"},"null bitmap",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"bitmap representing null information"))),(0,a.yg)("li",{parentName:"ul"},"Data",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Store data after encoding and compress"),(0,a.yg)("li",{parentName:"ul"},"You need to write in the header information of the data: is_compressed"),(0,a.yg)("li",{parentName:"ul"},"Various kinds of data encoded by different codes need to write some field information in the header information in order to achieve data parsing."),(0,a.yg)("li",{parentName:"ul"},"TODO: Add header information for various encodings"))),(0,a.yg)("li",{parentName:"ul"},"Checksum",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Store page granularity checksum, including page header and subsequent actual data")))),(0,a.yg)("h3",{id:"bloom-filter-pages"},"Bloom Filter Pages"),(0,a.yg)("p",null,"For each bloom filter column, a page of the bloom filter is generated corresponding to the granularity of the page and saved in the bloom filter pages area."),(0,a.yg)("h3",{id:"ordinal-index-page"},"Ordinal Index Page"),(0,a.yg)("p",null,"For each column, a sparse index of row numbers is established according to page granularity. The content is a pointer to the block (including offset and length) for the line number of the start line of the page"),(0,a.yg)("h3",{id:"short-key-index-page"},"Short Key Index page"),(0,a.yg)("p",null,"We generate a sparse index of short key every N rows (configurable) with the contents of short key - > line number (ordinal)"),(0,a.yg)("h3",{id:"columns-other-indexes"},"Column's other indexes"),(0,a.yg)("p",null,"The format design supports the subsequent expansion of other index information, such as inverted index, spatial index, etc. It only needs to write the required data to the existing column data, and add the corresponding metadata fields to FileFooterPB."),(0,a.yg)("h3",{id:"metadata-definition"},"Metadata Definition"),(0,a.yg)("p",null,"SegmentFooterPB is defined as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"message ColumnPB {\n    required int32 unique_id = 1;   // The column id is used here, and the column name is not used\n    optional string name = 2;   // Column name,  when name equals __DORIS_DELETE_SIGN__, this column is a hidden delete column\n    required string type = 3;   // Column type\n    optional bool is_key = 4;   // Whether column is a primary key column\n    optional string aggregation = 5;    // Aggregate type\n    optional bool is_nullable = 6;      // Whether column is allowed to assgin null\n    optional bytes default_value = 7;   // Defalut value\n    optional int32 precision = 8;       // Precision of column\n    optional int32 frac = 9;\n    optional int32 length = 10;         // Length of column\n    optional int32 index_length = 11;   // Length of column index\n    optional bool is_bf_column = 12;    // Whether column has bloom filter index\n    optional bool has_bitmap_index = 15 [default=false];  // Whether column has bitmap index\n}\n\n// page offset\nmessage PagePointerPB {\n    required uint64 offset; // offset of page in segment file\n    required uint32 length; // length of page\n}\n\nmessage MetadataPairPB {\n  optional string key = 1;\n  optional bytes value = 2;\n}\n\nmessage ColumnMetaPB {\n    optional ColumnMessage encoding; // Encoding of column\n\n    optional PagePointerPB dict_page // Dictionary page\n    repeated PagePointerPB bloom_filter_pages; // Bloom filter pages\n    optional PagePointerPB ordinal_index_page; // Ordinal index page\n    optional PagePointerPB page_zone_map_page; // Page level of statistics index data\n\n    optional PagePointerPB bitmap_index_page; // Bitmap index page\n\n    optional uint64 data_footprint; // The size of the index in the column\n    optional uint64 index_footprint; // The size of the data in the column\n    optional uint64 raw_data_footprint; // Original column data size\n\n    optional CompressKind compress_kind; // Column compression type\n\n    optional ZoneMapPB column_zone_map; // Segment level of statistics index data\n    repeated MetadataPairPB column_meta_datas;\n}\n\nmessage SegmentFooterPB {\n    optional uint32 version = 2 [default = 1]; // For version compatibility and upgrade use\n    repeated ColumnPB schema = 5; // Schema of columns\n  optional uint64 num_values = 4; // Number of lines saved in the file\n  optional uint64 index_footprint = 7; // Index size\n  optional uint64 data_footprint = 8; // Data size\n    optional uint64 raw_data_footprint = 8; // Original data size\n\n  optional CompressKind compress_kind = 9 [default = COMPRESS_LZO]; // Compression type\n  repeated ColumnMetaPB column_metas = 10; // Column metadata\n    optional PagePointerPB key_index_page = 11; // short key index page\n}\n\n")),(0,a.yg)("h2",{id:"read-write-logic"},"Read-write logic"),(0,a.yg)("h3",{id:"write"},"Write"),(0,a.yg)("p",null,"The general writing process is as follows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Write magic"),(0,a.yg)("li",{parentName:"ol"},"Generate corresponding Column Writer according to schema information. Each Column Writer obtains corresponding encoding information (configurable) according to different types, and generates corresponding encoder according to encoding."),(0,a.yg)("li",{parentName:"ol"},"Call encoder - > add (value) for data writing. Each K line generates a short key index entry, and if the current page satisfies certain conditions (the size exceeds 1M or the number of rows is K), a new page is generated and cached in memory."),(0,a.yg)("li",{parentName:"ol"},"Continuous cycle step 3 until data writing is completed. Brush the data of each column into the file in sequence"),(0,a.yg)("li",{parentName:"ol"},"Generate FileFooterPB information and write it to the file.")),(0,a.yg)("p",null,"Relevant issues:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"How does the index of short key be generated?"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Now we still generate a short key sparse index according to how many rows are sparse, and keep a short sparse index generated every 1024 rows. The specific content is: short key - > ordinal"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"What should be stored in the ordinal index?"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Store the first ordinal to page pointer mapping information for pages"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"What are stored in pages of different encoding types?"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Dictionary Compression"),(0,a.yg)("li",{parentName:"ul"},"plain"),(0,a.yg)("li",{parentName:"ul"},"rle"),(0,a.yg)("li",{parentName:"ul"},"bshuf")))),(0,a.yg)("h3",{id:"read"},"Read"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Read the magic of the file and judge the type and version of the file."),(0,a.yg)("li",{parentName:"ol"},"Read FileFooterPB and check sum"),(0,a.yg)("li",{parentName:"ol"},"Read short key index and data ordinal index information of corresponding columns according to required columns"),(0,a.yg)("li",{parentName:"ol"},"Use start key and end key, locate the row number to be read through short key index, then determine the row ranges to be read through ordinal index, and filter the row ranges to be read through statistics, inverted index and so on."),(0,a.yg)("li",{parentName:"ol"},"Then read row data through ordinal index according to row ranges")),(0,a.yg)("p",null,"Relevant issues:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"How to quickly locate a row within the page?"),(0,a.yg)("p",{parentName:"li"},"The data inside the page is encoding, so it cannot locate the row-level data quickly. Different encoding methods have different schemes for fast line number positioning in-house, which need to be analyzed concretely:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"If it is rle-coded, skip is performed by resolving the head of RLE until the RLE block containing the row is reached, and then the reverse solution is performed."),(0,a.yg)("li",{parentName:"ul"},"binary plain encoding: offset information will be stored in the page, and offset information will be specified in the page header. When reading, offset information will be parsed into the array first, so that you can quickly locate the data of a row of block through offset data information of each row."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"How to achieve efficient block reading? Consider merging adjacent blocks while they are being read, one-time reading?\nThis requires judging whether the block is continuous at the time of reading, and if it is continuous, reading it once."))),(0,a.yg)("h2",{id:"coding"},"Coding"),(0,a.yg)("p",null,"In the existing Doris storage, plain encoding is adopted for string type encoding, which is inefficient. After comparison, it is found that in Baidu statistics scenario, data will expand more than twice because of string type coding. Therefore, it is planned to introduce dictionary-based coding compression."),(0,a.yg)("h2",{id:"compression"},"Compression"),(0,a.yg)("p",null,"It implements a scalable compression framework, supports a variety of compression algorithms, facilitates the subsequent addition of new compression algorithms, and plans to introduce zstd compression."),(0,a.yg)("h2",{id:"todo"},"TODO"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"How to implement nested types? How to locate line numbers in nested types?"),(0,a.yg)("li",{parentName:"ol"},"How to optimize the downstream inverted index and column statistics caused by ScanRange splitting?")))}u.isMDXComponent=!0},24690:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/segment_v2-35f14e9d11067d490a85debb8ea7d2a8.png"}}]);