"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20386],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,c=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return t?n.createElement(c,s(s({ref:a},d),{},{components:t})):n.createElement(c,s({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21518:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=t(58168),r=(t(96540),t(15680));const i={title:"File System Benchmark Tools",language:"en"},s=void 0,o={unversionedId:"lakehouse/fs-benchmark-tool",id:"lakehouse/fs-benchmark-tool",title:"File System Benchmark Tools",description:"\x3c!--",source:"@site/docs/lakehouse/fs-benchmark-tool.md",sourceDirName:"lakehouse",slug:"/lakehouse/fs-benchmark-tool",permalink:"/docs/dev/lakehouse/fs-benchmark-tool",draft:!1,tags:[],version:"current",frontMatter:{title:"File System Benchmark Tools",language:"en"},sidebar:"docs",previous:{title:"SQL Dialect",permalink:"/docs/dev/lakehouse/sql-dialect"},next:{title:"FAQ",permalink:"/docs/dev/lakehouse/faq"}},l={},m=[{value:"Parameter parsing",id:"parameter-parsing",level:2},{value:"Result analysis",id:"result-analysis",level:2},{value:"HDFS",id:"hdfs",level:2},{value:"Object storage",id:"object-storage",level:2}],d={toc:m},p="wrapper";function h(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fs_benchmark_tool")," can be used to test the basic service performance of remote storage systems including hdfs and object storage, such as read and write performance. This tool is mainly used to analyze or troubleshoot the performance problems of remote storage systems."),(0,r.yg)("h1",{id:"compile-and-install"},"Compile and install"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fs_benchmark_tool")," is part of the ",(0,r.yg)("inlineCode",{parentName:"p"},"BE")," code and does not compile by default. To compile, execute the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd doris \nBUILD_FS_BENCHMARK=ON ./build.sh  --be\n")),(0,r.yg)("p",null,"After compilation, the following contents will be generated in the ",(0,r.yg)("inlineCode",{parentName:"p"},"output/be/")," directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"bin/run-fs-benchmark.sh\nlib/fs_benchmark_tool\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note that ",(0,r.yg)("inlineCode",{parentName:"p"},"fs_benchmark_tool")," it needs to be used in the BE running environment directory, because it depends on the BE-related jar package, environment variables, etc.")),(0,r.yg)("h1",{id:"use"},"Use"),(0,r.yg)("p",null,"Command format:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh run-fs-benchmark.sh \\\n          --conf= configuration file \\\n          --fs_type= file system \\\n          --operation= operations on the file system  \\\n          --file_size= file size \\\n          --threads= the number of threads \\\n          --iterations= the number of iterations\n")),(0,r.yg)("h2",{id:"parameter-parsing"},"Parameter parsing"),(0,r.yg)("p",null," ",(0,r.yg)("inlineCode",{parentName:"p"},"--conf")," Required parameter"),(0,r.yg)("p",null,"Configuration file corresponding to the operation file. It is mainly used to add the relevant connection information of the remote storage system. See examples below."),(0,r.yg)("p",null,"If you want to connect ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs"),", please put the ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml")," ",(0,r.yg)("inlineCode",{parentName:"p"},"core-site.xml")," file in the ",(0,r.yg)("inlineCode",{parentName:"p"},"be/conf")," directory."),(0,r.yg)("p",null,"In addition to the connection information, there are the following additional parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"file_size"),": Specifies the size of the file to read or write.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"buffer_size"),": The block size of the file read by one read operation.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"base_dir"),": Specifies the base path to read or write to the file."))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"--fs_type")," Required parameter"),(0,r.yg)("p",null,"The type of file system on which the operation is required. Currently supported ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs"),",",(0,r.yg)("inlineCode",{parentName:"p"},"s3"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"--operation")," Required parameter"),(0,r.yg)("p",null,"Specifies the type of operation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"create_write"),": Each thread creates a file named ",(0,r.yg)("inlineCode",{parentName:"p"},"test_${current thread number}"),"  in the ",(0,r.yg)("inlineCode",{parentName:"p"},"base_dir(set in conf file)")," directory and writes to the file with a write size ",(0,r.yg)("inlineCode",{parentName:"p"},"file_size")," of.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"open_read"),": On ",(0,r.yg)("inlineCode",{parentName:"p"},"create_write")," the basis of the created file, each thread reads the file with the name of ",(0,r.yg)("inlineCode",{parentName:"p"},"test_${current thread number}"),"  and the read size of ",(0,r.yg)("inlineCode",{parentName:"p"},"file_size"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"single_read"),": Read ",(0,r.yg)("inlineCode",{parentName:"p"},"file_path(set in conf file)")," file, read size is ",(0,r.yg)("inlineCode",{parentName:"p"},"file_size"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"prefetch_read"),"\uff1aUse prefetch reader to read ",(0,r.yg)("inlineCode",{parentName:"p"},"file_path(set in conf file)")," file, read size is ",(0,r.yg)("inlineCode",{parentName:"p"},"file_size"),". Only for s3 file system.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"exists"),": Each thread queries whether a file with  ",(0,r.yg)("inlineCode",{parentName:"p"},"test_${current thread number}")," filename exists.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"rename"),": On ",(0,r.yg)("inlineCode",{parentName:"p"},"create_write")," the basis of the created file, each thread changes the ",(0,r.yg)("inlineCode",{parentName:"p"},"test_${current thread number}")," filename to ",(0,r.yg)("inlineCode",{parentName:"p"},"test_${current thread number}_new"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"list"),": Get ",(0,r.yg)("inlineCode",{parentName:"p"},"base_dir(set in conf file)")," the list of files in the directory."))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"--file_size")," "),(0,r.yg)("p",null,"The file size of the operation, in bytes."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"create_write"),": Default is 10 MB.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"open_read"),": Default is 10 MB.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"single_read"),": The default is 0, that is, the full file is read."))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"--threads")),(0,r.yg)("p",null,"The number of threads for the operation. The default number is 1."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"--iterations")),(0,r.yg)("p",null,"The number of iterations ( The number of times the function was executed ) per thread. The default number is 1."),(0,r.yg)("h2",{id:"result-analysis"},"Result analysis"),(0,r.yg)("p",null,"Except for ",(0,r.yg)("inlineCode",{parentName:"p"},"rename")," the operation, the other operations are repeated three times, and the average value, the median value, the standard deviation, and the like are calculated."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"--------------------------------------------------------------------------------------------------------------------------------\nBenchmark                                                                      Time             CPU   Iterations UserCounters...\n--------------------------------------------------------------------------------------------------------------------------------\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1             13642 ms         2433 ms            1 OpenReaderTime(S)=4.80734 ReadRate(B/S)=101.104M/s ReadTime(S)=13.642 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              3918 ms         1711 ms            1 OpenReaderTime(S)=22.041u ReadRate(B/S)=352.011M/s ReadTime(S)=3.91824 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              3685 ms         1697 ms            1 OpenReaderTime(S)=35.837u ReadRate(B/S)=374.313M/s ReadTime(S)=3.68479 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_mean         7082 ms         1947 ms            3 OpenReaderTime(S)=1.60247 ReadRate(B/S)=275.809M/s ReadTime(S)=7.08166 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_median       3918 ms         1711 ms            3 OpenReaderTime(S)=35.837u ReadRate(B/S)=352.011M/s ReadTime(S)=3.91824 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_stddev       5683 ms          421 ms            3 OpenReaderTime(S)=2.7755 ReadRate(B/S)=151.709M/s ReadTime(S)=5.68258 ReadTotal(B)=0\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_cv          80.24 %         21.64 %             3 OpenReaderTime(S)=173.20% ReadRate(B/S)=55.01% ReadTime(S)=80.24% ReadTotal(B)=0.00%\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_max         13642 ms         2433 ms            3 OpenReaderTime(S)=4.80734 ReadRate(B/S)=374.313M/s ReadTime(S)=13.642 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_min          3685 ms         1697 ms            3 OpenReaderTime(S)=22.041u ReadRate(B/S)=101.104M/s ReadTime(S)=3.68479 ReadTotal(B)=1.37926G\n")),(0,r.yg)("p",null,"Focus on the first three lines, the result of three repeated executions of the code. The first time involves some operations such as connection initialization, so it will take a long time. The latter two times usually represent normal performance."),(0,r.yg)("p",null,"Focus ",(0,r.yg)("inlineCode",{parentName:"p"},"UserCounters")," on information in:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OpenReaderTime"),": Time to open the file."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ReadRate"),": read rate. The overall throughput is recorded here. If it is multithreaded, it can be divided by the number of threads, which represents the average rate per thread."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ReadTime"),": Read time consuming. What is recorded here is the accumulated time of multiple threads. Divided by the number of threads, it represents the average time spent per thread."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ReadTotal"),": Total amount read. What is recorded here is the accumulated value of multiple threads. Divided by the number of threads, this represents the average reads per thread."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"WriteRate"),": Same as ",(0,r.yg)("inlineCode",{parentName:"li"},"ReadRate"),". Represents the write rate."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"WriteTime"),": Same as ",(0,r.yg)("inlineCode",{parentName:"li"},"ReadTime"),". Represents time to write."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"WriteTotal"),": Same as ",(0,r.yg)("inlineCode",{parentName:"li"},"ReadTotal"),". Represents the total amount written."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ListCost/RenameCost/ExistsCost"),": A single operation of the corresponding operation takes time.")),(0,r.yg)("h1",{id:"examples"},"Examples"),(0,r.yg)("h2",{id:"hdfs"},"HDFS"),(0,r.yg)("p",null,"Command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sh run-fs-benchmark.sh \\\n    --conf=hdfs.conf \\\n    --fs_type=hdfs \\\n    --operation=create_write  \\\n    --file_size=1024000 \\\n    --threads=3 \\\n    --iterations=5\n")),(0,r.yg)("p",null,"Using ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs.conf")," the configuration file,",(0,r.yg)("inlineCode",{parentName:"p"},"create_write")," operate on the ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs")," file system , using three threads, write 1MB per operation, and iterate 5 times."),(0,r.yg)("p",null," ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs.conf")," Profile:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"fs.defaultFS=hdfs://HDFS8000871\nhadoop.username=hadoop\ndfs.nameservices=HDFS8000871\ndfs.ha.namenodes.HDFS8000871=nn1,nn2\ndfs.namenode.rpc-address.HDFS8000871.nn1=102.22.10.56:4007\ndfs.namenode.rpc-address.HDFS8000871.nn2=102.22.10.57:4007\ndfs.client.failover.proxy.provider.HDFS8000871=org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\nbase_dir=hdfs://HDFS8000871/benchmarks/TestDFSIO/io_data/\n")),(0,r.yg)("p",null,"Operation result:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"---------------------------------------------------------------------------------------------------------------------------------------\nBenchmark                                                                             Time             CPU   Iterations UserCounters...\n---------------------------------------------------------------------------------------------------------------------------------------\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3              61.7 ms         38.7 ms           15 WriteRate(B/S)=3.31902M/s WriteTime(S)=0.387954 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3              49.6 ms         3.09 ms           15 WriteRate(B/S)=4.12967M/s WriteTime(S)=0.427992 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3              45.2 ms         2.72 ms           15 WriteRate(B/S)=4.53148M/s WriteTime(S)=0.362854 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_mean         52.2 ms         14.8 ms            3 WriteRate(B/S)=3.99339M/s WriteTime(S)=0.392933 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_median       49.6 ms         3.09 ms            3 WriteRate(B/S)=4.12967M/s WriteTime(S)=0.387954 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_stddev       8.55 ms         20.7 ms            3 WriteRate(B/S)=617.61k/s WriteTime(S)=0.0328536 WriteTotal(B)=0\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_cv          16.39 %        139.34 %             3 WriteRate(B/S)=15.47% WriteTime(S)=8.36% WriteTotal(B)=0.00%\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_max          61.7 ms         38.7 ms            3 WriteRate(B/S)=4.53148M/s WriteTime(S)=0.427992 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_min          45.2 ms         2.72 ms            3 WriteRate(B/S)=3.31902M/s WriteTime(S)=0.362854 WriteTotal(B)=3.072M\nHDFS \u4e0a\u751f\u6210\u7684\u6587\u4ef6\uff1a\n[hadoop@172 ~]$ hadoop fs -ls -h /benchmarks/TestDFSIO/io_data/\nFound 3 items\n-rw-r--r--   3 hadoop supergroup        100 2023-06-27 11:55 /benchmarks/TestDFSIO/io_data/test_0\n-rw-r--r--   3 hadoop supergroup        100 2023-06-27 11:55 /benchmarks/TestDFSIO/io_data/test_1\n-rw-r--r--   3 hadoop supergroup        100 2023-06-27 11:55 /benchmarks/TestDFSIO/io_data/test_2\n")),(0,r.yg)("h2",{id:"object-storage"},"Object storage"),(0,r.yg)("p",null,"Command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sh bin/run-fs-benchmark.sh \\\n     --conf=s3.conf \\\n     --fs_type=s3 \\\n     --operation=single_read \\\n     --threads=1 \\\n     --iterations=1\n")),(0,r.yg)("p",null,"Using ",(0,r.yg)("inlineCode",{parentName:"p"},"s3.conf")," the configuration file, operate on the ",(0,r.yg)("inlineCode",{parentName:"p"},"s3")," file system ",(0,r.yg)("inlineCode",{parentName:"p"},"single_read"),", using 1 thread, with 1 iteration."),(0,r.yg)("p",null," ",(0,r.yg)("inlineCode",{parentName:"p"},"s3.conf")," Profile:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"AWS_ACCESS_KEY=ak\nAWS_SECRET_KEY=sk\nAWS_ENDPOINT=cos.ap-beijing.myqcloud.com\nAWS_REGION=ap-beijing\nfile_path=s3://bucket-123/test_data/parquet/000016_0\n")),(0,r.yg)("p",null,"Operation result:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"------------------------------------------------------------------------------------------------------------------------------\nBenchmark                                                                    Time             CPU   Iterations UserCounters...\n------------------------------------------------------------------------------------------------------------------------------\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              7534 ms          140 ms            1 ReadRate(B/S)=11.9109M/s ReadTime(S)=7.53353 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              5988 ms          118 ms            1 ReadRate(B/S)=14.985M/s ReadTime(S)=5.98808 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              6060 ms          124 ms            1 ReadRate(B/S)=14.8081M/s ReadTime(S)=6.05961 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_mean         6527 ms          127 ms            3 ReadRate(B/S)=13.9014M/s ReadTime(S)=6.52707 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_median       6060 ms          124 ms            3 ReadRate(B/S)=14.8081M/s ReadTime(S)=6.05961 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_stddev        872 ms         11.4 ms            3 ReadRate(B/S)=1.72602M/s ReadTime(S)=0.87235 ReadTotal(B)=0\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_cv          13.37 %          8.94 %             3 ReadRate(B/S)=12.42% ReadTime(S)=13.37% ReadTotal(B)=0.00%\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_max          7534 ms          140 ms            3 ReadRate(B/S)=14.985M/s ReadTime(S)=7.53353 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_min          5988 ms          118 ms            3 ReadRate(B/S)=11.9109M/s ReadTime(S)=5.98808 ReadTotal(B)=89.7314M\n")))}h.isMDXComponent=!0}}]);