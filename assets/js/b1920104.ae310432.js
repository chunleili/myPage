"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="OpenVDB\u7684\u5b89\u88c5\u4e0e\u7b2c\u4e00\u4e2ademo",i={unversionedId:"OpenVDB/first-openvdb",id:"OpenVDB/first-openvdb",title:"OpenVDB\u7684\u5b89\u88c5\u4e0e\u7b2c\u4e00\u4e2ademo",description:"\u4ecb\u7ecd",source:"@site/docs/OpenVDB/first-openvdb.md",sourceDirName:"OpenVDB",slug:"/OpenVDB/first-openvdb",permalink:"/OpenVDB/first-openvdb",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/OpenVDB/first-openvdb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7528Houdini \u521b\u5efa\u7b2c\u4e00\u4e2a\u8f6f\u4f53\u6a21\u62df",permalink:"/Houdini/vellum-first/vellum-first"},next:{title:"\u5728SPlisHSPlaSH\u4e2d\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e",permalink:"/SPlisHSPlaSH/get_mouse"}},c={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7b2c\u4e00\u4e2ademo",id:"\u7b2c\u4e00\u4e2ademo",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openvdb\u7684\u5b89\u88c5\u4e0e\u7b2c\u4e00\u4e2ademo"},"OpenVDB\u7684\u5b89\u88c5\u4e0e\u7b2c\u4e00\u4e2ademo"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"OpenVDB\u662f\u8fea\u58eb\u5c3c\u63a8\u51fa\u7684\u5f00\u6e90\u5e93\uff0c\u4e3b\u8981\u7528\u4e8e\u5904\u7406\u56fe\u5f62\u5b66\u4e2d\u7684\u5404\u79cd\u6570\u636e\u7ed3\u6784\u3002\u4f8b\u5982\u7a00\u758f\u6570\u636e\u7ed3\u6784\uff0c\u8fd8\u6709\u4e0e\u4e4b\u76f8\u5173\u7684\u5404\u7c7b\u5e94\u7528\uff08\u6bd4\u5982\u7f51\u683c\u8f6c\u6362\u4e3aSDF\u7b49\uff09\u3002"),(0,a.kt)("p",null,"OpenVDB\u662f\u4e2aC++\u7684\u5e93\u3002\u56e0\u6b64\u4f60\u4e0b\u8f7d\u6e90\u7801\u4e4b\u540e\u7f16\u8bd1\u51fa\u6765\u7684\u662f\u9759\u6001\u5e93\u548c\u52a8\u6001\u5e93\u3002\u628a\u5e93\u914d\u7f6e\u597d\uff0c\u5934\u6587\u4ef6\u914d\u7f6e\u597d\uff0c\u5c31\u662f\u628avdb\u5b89\u88c5\u597d\u4e86\u3002"),(0,a.kt)("p",null,"\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.openvdb.org/documentation/doxygen/build.html"},"\u5b98\u65b9\u5b89\u88c5\u6587\u6863"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/AcademySoftwareFoundation/openvdb"},"github repo")))),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u5b89\u88c5\u4e3b\u8981\u53c2\u8003github"),(0,a.kt)("p",null,"\u9996\u5148\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("p",null,"\u5c31\u662f\u5e38\u89c4\u7684cmake\u5b89\u88c5\u6d41\u7a0b\n\u4ecegithub\u4e0aclone\u4e0b\u6765\n\u7136\u540e\u53c2\u8003github\uff0c\u5b89\u88c5boost tbb blosc\u8fd9\u4e09\u4e2a\u4f9d\u8d56\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cmake -B build\ncmake --build build\n")),(0,a.kt)("p",null,"\u53e6\u5916\u4f60\u8fd8\u53ef\u4ee5make install\u3002\u8fd9\u6837\u7684\u597d\u5904\u662f\u8fd8\u53ef\u4ee5\u628a\u7f16\u8bd1\u597d\u7684\u5e93\u5b89\u88c5\u5230\u5b89\u88c5\u76ee\u5f55\uff08\u5176\u5b9e\u5c31\u662f\u628a\u7f16\u8bd1\u51fa\u6765\u7684\u9759\u6001\u548c\u52a8\u6001\u5e93\u62f7\u8d1d\u5230/usr/local/lib/\u4ee5\u53ca\u628a\u5934\u6587\u4ef6\u62f7\u8d1d\u5230/usr/local/include/)"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u4e2ademo"},"\u7b2c\u4e00\u4e2ademo"),(0,a.kt)("p",null,"\u53c2\u8003\u5b98\u65b9\u6587\u6863"),(0,a.kt)("p",null,"\u5728CMakeLists.txt\u4e2d\u5199\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},'cmake_minimum_required(VERSION 3.20)\nproject(main)\nlist(APPEND CMAKE_MODULE_PATH "/usr/local/lib/cmake/OpenVDB")\nfind_package(OpenVDB REQUIRED)\nadd_executable(main main.cpp)\ntarget_link_libraries(main OpenVDB::openvdb)\n')),(0,a.kt)("p",null,"\u5176CMAKE_MODULE_PATH\u5c31\u662fFindXXX.cmake\u7684\u4f4d\u7f6e\u3002\u8fd9\u4e9b.cmake\u6587\u4ef6\u662fvdb\u4f5c\u8005\u5df2\u7ecf\u5199\u597d\u7684\uff0c\u5728\u4f60\u5b89\u88c5\uff08make install)\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u518d\u5229\u7528find_package\u6765\u67e5\u627e\u8fd9\u4e2acmake\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u662flink\u8fd9\u4e2alib"),(0,a.kt)("p",null,"main.cpp\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <openvdb/openvdb.h>\n#include <iostream>\nint main()\n{\n    // Initialize the OpenVDB library.  This must be called at least\n    // once per program and may safely be called multiple times.\n    openvdb::initialize();\n    // Create an empty floating-point grid with background value 0.\n    openvdb::FloatGrid::Ptr grid = openvdb::FloatGrid::create();\n    std::cout << "Testing random access:" << std::endl;\n    // Get an accessor for coordinate-based access to voxels.\n    openvdb::FloatGrid::Accessor accessor = grid->getAccessor();\n    // Define a coordinate with large signed indices.\n    openvdb::Coord xyz(1000, -200000000, 30000000);\n    // Set the voxel value at (1000, -200000000, 30000000) to 1.\n    accessor.setValue(xyz, 1.0);\n    // Verify that the voxel value at (1000, -200000000, 30000000) is 1.\n    std::cout << "Grid" << xyz << " = " << accessor.getValue(xyz) << std::endl;\n    // Reset the coordinates to those of a different voxel.\n    xyz.reset(1000, 200000000, -30000000);\n    // Verify that the voxel value at (1000, 200000000, -30000000) is\n    // the background value, 0.\n    std::cout << "Grid" << xyz << " = " << accessor.getValue(xyz) << std::endl;\n    // Set the voxel value at (1000, 200000000, -30000000) to 2.\n    accessor.setValue(xyz, 2.0);\n    // Set the voxels at the two extremes of the available coordinate space.\n    // For 32-bit signed coordinates these are (-2147483648, -2147483648, -2147483648)\n    // and (2147483647, 2147483647, 2147483647).\n    accessor.setValue(openvdb::Coord::min(), 3.0f);\n    accessor.setValue(openvdb::Coord::max(), 4.0f);\n    std::cout << "Testing sequential access:" << std::endl;\n    // Print all active ("on") voxels by means of an iterator.\n    for (openvdb::FloatGrid::ValueOnCIter iter = grid->cbeginValueOn(); iter; ++iter) {\n        std::cout << "Grid" << iter.getCoord() << " = " << *iter << std::endl;\n    }\n}\n')),(0,a.kt)("p",null,"\u7f16\u8bd1\u8fd0\u884c\u4e4b\u540e\u5f97\u5230\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Testing random access:\nGrid[1000, -200000000, 30000000] = 1\nGrid[1000, 200000000, -30000000] = 0\nTesting sequential access:\nGrid[-2147483648, -2147483648, -2147483648] = 3\nGrid[1000, -200000000, 30000000] = 1\nGrid[1000, 200000000, -30000000] = 2\nGrid[2147483647, 2147483647, 2147483647] = 4\n")))}d.isMDXComponent=!0}}]);