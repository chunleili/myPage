"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i="\u5229\u7528std::chrono\u6765\u8fdb\u884c\u8ba1\u65f6, \u4ee5\u6d4b\u8bd5\u6027\u80fd",l={unversionedId:"cpp/chrono",id:"cpp/chrono",title:"\u5229\u7528std::chrono\u6765\u8fdb\u884c\u8ba1\u65f6, \u4ee5\u6d4b\u8bd5\u6027\u80fd",description:"1. \u9996\u5148\u8981#include",source:"@site/docs/cpp/chrono.md",sourceDirName:"cpp",slug:"/cpp/chrono",permalink:"/cpp/chrono",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cpp/chrono.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e09\u79cd\u4f7f\u7528\u65ad\u8a00\u7684\u65b9\u6cd5",permalink:"/cpp/assert"},next:{title:"C++ \u4e0d\u540c\u5bf9\u8c61\u4e4b\u95f4\u4f20\u9012\u6570\u636e",permalink:"/cpp/data_transfer_OOP"}},c={},p=[{value:"\u5b8c\u6574\u4f8b\u5b50",id:"\u5b8c\u6574\u4f8b\u5b50",level:2}],s={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5229\u7528stdchrono\u6765\u8fdb\u884c\u8ba1\u65f6-\u4ee5\u6d4b\u8bd5\u6027\u80fd"},"\u5229\u7528std::chrono\u6765\u8fdb\u884c\u8ba1\u65f6, \u4ee5\u6d4b\u8bd5\u6027\u80fd"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9996\u5148\u8981",(0,o.kt)("inlineCode",{parentName:"p"},"#include <chrono>"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5176\u6b21\uff0c\u5148\u8bb0\u5f55\u5f00\u59cb\u65f6\u95f4\n",(0,o.kt)("inlineCode",{parentName:"p"},"auto start = std::chrono::steady_clock::now();"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7136\u540e\u8bb0\u5f55\u7ed3\u675f\u65f6\u95f4\n",(0,o.kt)("inlineCode",{parentName:"p"},"auto end = std::chrono::steady_clock::now();"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u63a5\u7740\u6c42\u65f6\u95f4\u5dee\n",(0,o.kt)("inlineCode",{parentName:"p"},"std::chrono::duration<double> elapsed_seconds = end - start;"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6700\u540e\u6253\u5370\n",(0,o.kt)("inlineCode",{parentName:"p"},'std::cout << "elapsed seconds: " << elapsed_seconds.count() << std::endl;')))),(0,o.kt)("h2",{id:"\u5b8c\u6574\u4f8b\u5b50"},"\u5b8c\u6574\u4f8b\u5b50"),(0,o.kt)("p",null,"\u7528Eigen\u505a\u4e00\u767e\u6b21\u4e00\u4ebf\u7ef4\u5411\u91cf\u70b9\u4e58\uff0c\u7136\u540e\u8bb0\u5f55\u65f6\u95f4"),(0,o.kt)("p",null,"main.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <chrono>\n#include <iostream>\n#include <Eigen/Dense>\nEIGEN_DONT_INLINE\ndouble simple_function(Eigen::VectorXd &va, Eigen::VectorXd &vb)\n{\n  // this simple function computes the dot product of two vectors\n  // of course it could be expressed more compactly\n  double d = va.dot(vb);\n  return d;\n}\nint main()\n{\n  int len = 100000000;\n  int num_repetitions = 100;\n  // generate two random vectors\n  Eigen::VectorXd va = Eigen::VectorXd::Random(len);\n  Eigen::VectorXd vb = Eigen::VectorXd::Random(len);\n  double result;\n\n  auto start = std::chrono::steady_clock::now();\n  for (auto i = 0; i < num_repetitions; i++)\n  {\n    result = simple_function(va, vb);\n  }\n  auto end = std::chrono::steady_clock::now();\n  \n  std::chrono::duration<double> elapsed_seconds = end - start;\n  std::cout << "result: " << result << std::endl;\n  std::cout << "elapsed seconds: " << elapsed_seconds.count() << std::endl;\n}\n')),(0,o.kt)("p",null,"CMakeLists.txt"),(0,o.kt)("p",null,"\u8bb0\u5f97\u8981\u66f4\u6539\u81ea\u5df1\u7684Eigen\u5e93\u7684\u4f4d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cmake_minimum_required(VERSION 3.5 FATAL_ERROR)\nproject(recipe-06 LANGUAGES CXX)\nset(CMAKE_CXX_STANDARD 11)\nset(CMAKE_CXX_EXTENSIONS OFF)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\n\n# \u8bbe\u7f6e\u9ed8\u8ba4\u6784\u5efa\u7c7b\u578b \u6ce8\u610f\uff1a\u56e0\u4e3a\u9ed8\u8ba4\u662f\u591a\u6784\u5efa\u65b9\u5f0f\uff0c\u5728\u7f16\u8bd1\u65f6\u4ecd\u9700\u4f7f\u7528cmake --build build --config=Release \u6307\u5b9a\u624d\u884c\uff01\nif(NOT CMAKE_BUILD_TYPE)\n    set(CMAKE_BUILD_TYPE Release CACHE STRING "Build type" FORCE)\nendif()\nmessage(STATUS "Build type: ${CMAKE_BUILD_TYPE}")\n\n# \u544a\u8bc9cmake eigenConfig.cmake\u7684\u4f4d\u7f6e \u5e76\u589e\u52a0Eigen\u5e93\nlist(APPEND CMAKE_PREFIX_PATH "E:/codes/vcpkg/installed/x64-windows/share/eigen3")\nfind_package(Eigen3 3.3 REQUIRED CONFIG)\n\nadd_executable(linear-algebra main.cpp)\n\n# \u94fe\u63a5Eigen\u5e93\ntarget_link_libraries(linear-algebra\nPRIVATE\n    Eigen3::Eigen\n)\n')),(0,o.kt)("p",null,"\u7f16\u8bd1\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cmake -B build\ncmake --build build --config=Release\n.\\build\\Release\\linear-algebra.exe\n")),(0,o.kt)("p",null,"\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"result: -4500.21\nelapsed seconds: 8.13039\n")))}u.isMDXComponent=!0}}]);