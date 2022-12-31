"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),s=l,m=d["".concat(c,".").concat(s)]||d[s]||f[s]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const a={},i="\u5f15\u5165\u95ed\u6e90/\u7f16\u8bd1\u597d\u7684\u5e93\uff1a\u4f7f\u7528IMPORTED\u5173\u952e\u5b57",o={unversionedId:"cmake/IMPORTED",id:"cmake/IMPORTED",title:"\u5f15\u5165\u95ed\u6e90/\u7f16\u8bd1\u597d\u7684\u5e93\uff1a\u4f7f\u7528IMPORTED\u5173\u952e\u5b57",description:"\u7528\u6cd5",source:"@site/docs/cmake/IMPORTED.md",sourceDirName:"cmake",slug:"/cmake/IMPORTED",permalink:"/cmake/IMPORTED",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cmake/IMPORTED.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ExternalProject_Add",permalink:"/cmake/ExternalProject_Add"},next:{title:"\u5728\u7f16\u8bd1\u7ed3\u675f\u4e4b\u540e\u62f7\u8d1d\u5e93\u6587\u4ef6\u5230\u6307\u5b9a\u4f4d\u7f6e",permalink:"/cmake/add_custom_command"}},c={},p=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5f15\u5165\u95ed\u6e90\u7f16\u8bd1\u597d\u7684\u5e93\u4f7f\u7528imported\u5173\u952e\u5b57"},"\u5f15\u5165\u95ed\u6e90/\u7f16\u8bd1\u597d\u7684\u5e93\uff1a\u4f7f\u7528IMPORTED\u5173\u952e\u5b57"),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"add_library(glfw STATIC IMPORTED)\nset_property(TARGET glfw PROPERTY IMPORTED_LOCATION ${CMAKE_CURRENT_SOURCE_DIR}/extern/glfw/lib-vc2019/glfw3.lib)\ntarget_include_directories(glfw INTERFACE ${CMAKE_CURRENT_SOURCE_DIR}/extern/glfw/include)\n")),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\u662fadd_library\uff0c\u5e76\u6307\u5b9aIMPORTED\u3002\u8fd9\u4ee3\u8868\u662f\u5916\u90e8\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\u5e93"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6b65\u662fset_preperty\u3002\u6307\u5b9a\u5916\u90e8\u5e93\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e09\u6b65\u662f\u8bbe\u5b9a\u5934\u6587\u4ef6\u3002\u6ce8\u610f\u8981\u7528INTERFACE"),(0,l.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u597d64\u4f4dglfw\u7136\u540e\u62f7\u8d1d\u5230extern/glfw\u4e0b\u9762"),(0,l.kt)("p",null,"\u6839\u76ee\u5f55CMakeLists.txt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cmake_minimum_required(VERSION 3.20)\nproject(tryIMPORTED)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\n\nadd_executable(main main.cpp)\n\n# \u8bbe\u5b9a\u5916\u90e8\u5e93\n\n# glfw\nadd_library(glfw STATIC IMPORTED)\nset_property(TARGET glfw PROPERTY IMPORTED_LOCATION ${CMAKE_CURRENT_SOURCE_DIR}/extern/glfw/lib-vc2019/glfw3.lib)\ntarget_include_directories(glfw INTERFACE ${CMAKE_CURRENT_SOURCE_DIR}/extern/glfw/include)\n\ntarget_link_libraries(main glfw)\n\n# opengl\nfind_package(OpenGL REQUIRED)\ntarget_link_libraries(main OpenGL::GL)\n\n\n")))}d.isMDXComponent=!0}}]);