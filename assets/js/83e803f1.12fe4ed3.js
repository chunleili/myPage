"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=_(e,["components","mdxType","originalType","parentName"]),p=i(n),E=a,k=p["".concat(o,".").concat(E)]||p[E]||s[E]||l;return n?r.createElement(k,c(c({ref:t},d),{},{components:n})):r.createElement(k,c({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=E;var _={};for(var o in t)hasOwnProperty.call(t,o)&&(_[o]=t[o]);_.originalType=e,_[p]="string"==typeof e?e:a,c[1]=_;for(var i=2;i<l;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},6385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>_,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={},c="\u5229\u7528ExternalProject_Add\u89e3\u51b3\u7b2c\u4e09\u65b9\u5e93target\u547d\u540d\u51b2\u7a81\u95ee\u9898",_={unversionedId:"cmake/ExternalProject_Add",id:"cmake/ExternalProject_Add",title:"\u5229\u7528ExternalProject_Add\u89e3\u51b3\u7b2c\u4e09\u65b9\u5e93target\u547d\u540d\u51b2\u7a81\u95ee\u9898",description:"\u53c2\u8003",source:"@site/docs/cmake/ExternalProject_Add.md",sourceDirName:"cmake",slug:"/cmake/ExternalProject_Add",permalink:"/cmake/ExternalProject_Add",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cmake/ExternalProject_Add.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528CMakePresets\u6307\u5b9a\u914d\u7f6e\u548c\u6784\u5efa\u4fe1\u606f",permalink:"/cmake/CMakePresets"},next:{title:"\u5f15\u5165\u95ed\u6e90/\u7f16\u8bd1\u597d\u7684\u5e93\uff1a\u4f7f\u7528IMPORTED\u5173\u952e\u5b57",permalink:"/cmake/IMPORTED"}},o={},i=[{value:"ExternalProject_add\u89e3\u51b3target\u51b2\u7a81",id:"externalproject_add\u89e3\u51b3target\u51b2\u7a81",level:2},{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u89e3\u51b3\u65b9\u6848: \u4f7f\u7528ExternalProject_Add\u6dfb\u52a0\u5916\u90e8\u5e93",id:"\u89e3\u51b3\u65b9\u6848-\u4f7f\u7528externalproject_add\u6dfb\u52a0\u5916\u90e8\u5e93",level:3},{value:"UTILITY\u76ee\u6807\u4e0d\u53ef\u94fe\u63a5",id:"utility\u76ee\u6807\u4e0d\u53ef\u94fe\u63a5",level:3},{value:"\u89e3\u51b3UTILITY\u4e0d\u53ef\u94fe\u63a5\u9519\u8bef",id:"\u89e3\u51b3utility\u4e0d\u53ef\u94fe\u63a5\u9519\u8bef",level:3}],d={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5229\u7528externalproject_add\u89e3\u51b3\u7b2c\u4e09\u65b9\u5e93target\u547d\u540d\u51b2\u7a81\u95ee\u9898"},"\u5229\u7528ExternalProject_Add\u89e3\u51b3\u7b2c\u4e09\u65b9\u5e93target\u547d\u540d\u51b2\u7a81\u95ee\u9898"),(0,a.kt)("p",null,"\u53c2\u8003\n",(0,a.kt)("a",{parentName:"p",href:"https://www.bookstack.cn/read/CMake-Cookbook/content-chapter8-8.1-chinese.md"},"cmake\u83dc\u8c31\u7b2c\u516b\u7ae0\u7b2c\u4e00\u8282")),(0,a.kt)("p",null,"\u6211\u4eec\u7ecf\u5e38\u4f1a\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("p",null,"project A \u662f\u6700\u5916\u5c42\u9879\u76ee\nproject B \u662fA\u4f7f\u7528\u7684\u5916\u90e8\u5e93\nproject C \u662fA\u548cB\u4f7f\u7528\u7684\u5916\u90e8\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 extern\n\u2502   \u251c\u2500\u2500 B\n\u2502   \u2502   \u251c\u2500\u2500 extern\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 C\n\u2502   \u2502   \u2514\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 C\n\u2514\u2500\u2500 src\n")),(0,a.kt)("p",null,"\u8fd9\u5c31\u5bfc\u81f4project C\u88ab\u5f15\u7528\u4e86\u4e24\u904d\uff0c\u4ece\u800c\u51fa\u73b0target\u547d\u540d\u51b2\u7a81\u7684\u95ee\u9898\u3002\u7531\u4e8etarget\u5747\u662f\u5168\u5c40\u7684\uff0c\u56e0\u6b64\u4e00\u65e6\u51b2\u7a81\u5c31\u5f88\u96be\u89e3\u51b3\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528if(NOT target C)\u6765\u4fdd\u8bc1target C\u53ea\u7f16\u8bd1\u4e86\u4e00\u904d\u3002\u7f3a\u70b9\u5728\u4e8eA\u4e2d\u548cB\u4e2dC\u7684\u7248\u672c\u548c\u914d\u7f6e\u4e5f\u8bb8\u4e0d\u540c\uff0c\u4f46\u4e0d\u5f97\u4e0d\u4f7f\u7528\u540c\u4e00\u4e2a\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u547d\u540dA\u548cB\u4e2d\u7684targetC\u3002\u6bd4\u5982\u6539\u540d\u4e3aA_C\u548cB_C\u3002\u7f3a\u70b9\u662f\u4f60\u9700\u8981\u9b54\u6539\u592a\u591a\u4e1c\u897f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8d85\u7ea7\u6784\u5efa\uff0c\u4f8b\u5982ExternalProject_Add\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u91cd\u70b9\u8ba8\u8bba\u7b2c\u4e09\u79cd"),(0,a.kt)("h2",{id:"externalproject_add\u89e3\u51b3target\u51b2\u7a81"},"ExternalProject_add\u89e3\u51b3target\u51b2\u7a81"),(0,a.kt)("h3",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u8981\u6765\u770b\u4e00\u4e0b\u6ca1\u6709\u89e3\u51b3\u524d\u7684\u62a5\u9519\u662f\u4ec0\u4e48\u6837\u7684\uff1a"),(0,a.kt)("p",null,"\u62a5\u9519\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[cmake] CMake Error at E:/codes/vcpkg/scripts/buildsystems/vcpkg.cmake:582 (_add_executable):\n[cmake]   _add_executable cannot create target "Cexe" because another target with the\n[cmake]   same name already exists.  The existing target is an executable created in\n[cmake]   source directory "E:/codes/try/cmake-target-clash/extern/B/extern/C".  See\n[cmake]   documentation for policy CMP0002 for more details.\n[cmake] Call Stack (most recent call first):\n[cmake]   extern/C/CMakeLists.txt:9 (add_executable)\n[cmake] \n[cmake] \n[cmake] -- Configuring incomplete, errors occurred!\n[cmake] See also "E:/codes/try/cmake-target-clash/build/CMakeFiles/CMakeOutput.log".\n[cmake] CMake Error at E:/codes/vcpkg/scripts/buildsystems/vcpkg.cmake:623 (_add_library):\n[cmake]   _add_library cannot create target "Clib" because another target with the\n[cmake]   same name already exists.  The existing target is a static library created\n[cmake]   in source directory "E:/codes/try/cmake-target-clash/extern/B/extern/C".\n[cmake]   See documentation for policy CMP0002 for more details.\n[cmake] Call Stack (most recent call first):\n[cmake]   extern/C/CMakeLists.txt:10 (add_library)\n[cmake] \n[cmake] \n[proc] The command: "C:\\Program Files\\CMake\\bin\\cmake.EXE" --no-warn-unused-cli -DCMAKE_EXPORT_COMPILE_COMMANDS:BOOL=TRUE -Se:/codes/try/cmake-target-clash -Be:/codes/try/cmake-target-clash/build -G "Visual Studio 16 2019" -T host=x64 -A x64 exited with code: 1 and signal: null\n')),(0,a.kt)("p",null,"\u91cd\u70b9\u662f\u8fd9\u53e5"),(0,a.kt)("p",null,'_add_executable cannot create target "Cexe" because another target with the same name already exists.  The existing target is an executable created in source directory "E:/codes/try/cmake-target-clash/extern/B/extern/C". '),(0,a.kt)("p",null,"\u663e\u7136\uff0c\u8fd9\u544a\u8bc9\u6211\u4eec\u5df2\u7ecf\u5b58\u5728\u4e86\u4e00\u4e2aCexe\u76ee\u6807\u3002\u4e5f\u5c31\u662f\u56e0\u4e3a\u5d4c\u5957\u5f15\u5165C\u800c\u5bfc\u81f4\u7684target\u91cd\u540d\u51b2\u7a81\u3002"),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-\u4f7f\u7528externalproject_add\u6dfb\u52a0\u5916\u90e8\u5e93"},"\u89e3\u51b3\u65b9\u6848: \u4f7f\u7528ExternalProject_Add\u6dfb\u52a0\u5916\u90e8\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# \u4f7f\u7528ExternalProject\u53ef\u4ee5\u89e3\u51b3target\u51b2\u7a81\u95ee\u9898\ninclude(ExternalProject)\nset_property(DIRECTORY PROPERTY EP_BASE ${CMAKE_BINARY_DIR}/ep_base_I_set)\n\nExternalProject_Add(External_C_name_I_set\n  SOURCE_DIR\n    ${CMAKE_CURRENT_LIST_DIR}/extern/C\n  CMAKE_ARGS\n    -DCMAKE_CXX_STANDARD=${CMAKE_CXX_STANDARD}\n    -DCMAKE_CXX_FLAGS=${CMAKE_CXX_FLAGS}\n  INSTALL_COMMAND\n    ""\n  )\n\nExternalProject_Add(External_B_name_I_set\n  SOURCE_DIR\n    ${CMAKE_CURRENT_LIST_DIR}/extern/B\n  CMAKE_ARGS\n    -DCMAKE_CXX_STANDARD=${CMAKE_CXX_STANDARD}\n    -DCMAKE_CXX_FLAGS=${CMAKE_CXX_FLAGS}\n  INSTALL_COMMAND\n    ""\n  )\n')),(0,a.kt)("p",null,"\u9996\u5148\u8981\u5f15\u5165ExternalProject_Add\u8fd9\u4e2acmake\u51fd\u6570\u3002\u8fd9\u662f\u4e00\u4e2acmake\u5b98\u65b9\u5185\u7f6e\u7684\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u63a5\u7740\u4e3a\u5f53\u524d\u76ee\u5f55\u8bbe\u7f6e\u4e00\u4e0bEP_BASE\u8fd9\u4e2a\u5c5e\u6027\uff0c\u8fd9\u5c31\u4ee3\u8868ExternalProject Base\u3002\u4e5f\u5c31\u662f\u5916\u90e8\u9879\u76ee\u7684\u6839\u76ee\u5f55\u3002\u914d\u7f6e\u540e\u4f1a\u81ea\u52a8\u5728\u8be5\u76ee\u5f55\u4e4b\u4e0b\u521b\u5efaBuild, Download, Install, Stamp\u548ctmp\u6587\u4ef6\u5939\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/fb32b3d87bce415e9a089b3bfcdb0082.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n(\u6ce8\uff1a\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728ExternalProject_add\u6307\u5b9aPREFIX\u53c2\u6570\u6765\u6307\u5b9a\u5916\u90e8\u5e93\u7684\u6839\u76ee\u5f55\u3002\u5982\u679c\u4ec0\u4e48\u90fd\u4e0d\u6307\u5b9a\uff0c\u90a3\u4e48\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"<name>-prefix")," \u5176\u4e2dname\u5c31\u662f\u8be5\u5916\u90e8\u5e93\u7684\u540d\u5b57\u3002\uff09"),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5229\u7528ExternalProject_add\u8fd9\u4e2a\u51fd\u6570"),(0,a.kt)("p",null,"\u89e3\u91ca\u4e0b\u8fd9\u51fd\u6570\u7684\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4ee3\u8868\u4f60\u7ed9\u5b9a\u8be5\u5916\u90e8\u9879\u76ee\u7684target\u540d\u79f0\uff08\u5982External_B_name_I_set\uff09"),(0,a.kt)("li",{parentName:"ul"},"SOURCE_DIR\u4ee3\u8868\u4f60\u8981\u6307\u5b9a\u7684\u6e90\u7801\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"CMAKE_ARGS\u4ee3\u8868\u4f60\u4ece\u5916\u754c\u4f20\u5165\u7684\u547d\u4ee4\u884c\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"INSTALL_COMMAND \u4e3a\u7a7a\u4fdd\u8bc1\u4e86\u4e0d\u4f1a\u62a5\u51fa\u5982\u4e0b\u9519\u8bef\u3002\u7531\u4e8e\u9ed8\u8ba4\u4f1a\u6267\u884cinstall\uff0c\u6240\u4ee5\u4f1a\u62a5\u4e0b\u9762\u7684\u9519\u8bef\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[build] MSBUILD : error MSB1009: \u9879\u76ee\u6587\u4ef6\u4e0d\u5b58\u5728\u3002 [E:\\codes\\try\\cmake-target-clash\\build\\B.vcxproj]\n[build]   \u5f00\u5173:install.vcxproj\n[build] E:\\App\\Microsoft Visual \n")),(0,a.kt)("p",null,"\u5f53\u4f60\u914d\u7f6ecmake\u540e\uff0c\u4f1a\u51fa\u73b0\u5982\u4e0b\u51e0\u4e2a\u76ee\u6807\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/ca572ac75fa54a33880ece917afbd41b.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u5176\u4e2dB\u548cC\u90fd\u662f",(0,a.kt)("strong",{parentName:"p"},"UTILITY\u76ee\u6807\uff0c\u8fd9\u4e9b\u76ee\u6807\u662f\u4e0d\u80fd\u88ab\u76f4\u63a5\u4f7f\u7528\u7684"),"\u3002\uff08\u56e0\u6b64\u6211\u4eec\u540e\u9762\u8981\u624b\u52a8\u5c06\u5176\u8bbe\u7f6e\u4e3a\u53ef\u4ee5\u4f7f\u7528\u7684\u76ee\u6807\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5916\u90e8\u9879\u76ee\u5c31\u50cf\u5b58\u5728\u4e8e\u4e00\u4e2a\u72ec\u7acb\u5c01\u95ed\u7684\u7a7a\u95f4\uff0c\u9664\u4e86\u4f60\u81ea\u5df1\u5728ExternalProject_Add\u4e2d\u5b9a\u4e49\u7684 target\u540d\u4e4b\u5916\uff0c\u4ec0\u4e48\u90fd\u4e0d\u4f1a\u66b4\u9732\u51fa\u6765\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u8fd9\u65f6\u5019\u7f16\u8bd1External_B_name_I_set\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u51fa\u73b0\u4efb\u4f55target\u51b2\u7a81\u7684\u9519\u8bef"),"\u3002"),(0,a.kt)("h3",{id:"utility\u76ee\u6807\u4e0d\u53ef\u94fe\u63a5"},"UTILITY\u76ee\u6807\u4e0d\u53ef\u94fe\u63a5"),(0,a.kt)("p",null,"\u4e0a\u9762\u8bf4\u4e86\u3002\u7f16\u8bd1\u51fa\u6765\u7684\u662fUTILITY\u76ee\u6807\uff0c\u8fd9\u4e9b\u76ee\u6807\u65e0\u6cd5\u88ab\u76f4\u63a5\u4f7f\u7528\u3002\u9700\u8981\u624b\u52a8\u53bb\u8bbe\u7f6e\u5c06\u5176\u53d8\u4e3a\u6b63\u5e38\u7684\u53ef\u94fe\u63a5\u7684\u76ee\u6807\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8fd9\u65f6\u5019\u76f4\u63a5\u53bblink\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"target_link_libraries(A PRIVATE\nExternal_C_name_I_set\nExternal_B_name_I_set\n)\n")),(0,a.kt)("p",null,"\u62a5\u9519\u5982\u4e0b\u6240\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[cmake] CMake Error at CMakeLists.txt:48 (target_link_libraries):\n[cmake]   Target "External_B_name_I_set" of type UTILITY may not be linked into\n[cmake]   another target.  One may link only to INTERFACE, OBJECT, STATIC or SHARED\n[cmake]   libraries, or to executables with the ENABLE_EXPORTS property set.\n')),(0,a.kt)("p",null,"\u5b83\u544a\u8bc9\u6211\u4eecUTILITY\u76ee\u6807\u662f\u4e2a\u5047\u76ee\u6807\uff0c\u662f\u4e0d\u80fd\u88ablink\u7684\u3002"),(0,a.kt)("p",null,"\u9898\u5916\u8bdd\uff1a"),(0,a.kt)("p",null,"\u5047\u76ee\u6807\u5c31\u662f\u7528\u6765\u6267\u884c\u67d0\u4e9b\u547d\u4ee4\u7684\u5047\u76ee\u6807\uff0c\u6bd4\u5982add_custom_target\u5f53\u4e2d\u7684\u76ee\u6807\u90fd\u662f\u5047\u76ee\u6807\u3002"),(0,a.kt)("p",null,"\u4e0d\u4fe1\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u5047\u76ee\u6807\u770b\u770b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'add_custom_target(hello_target\n  COMMAND ${CMAKE_COMMAND} -E echo "hello I am a custom target"\n  )\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/81db5bf1b4f2490893c525efaf3a1510.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"ZERO_CHECK\u4e5f\u662f\u4e2a\u5047\u76ee\u6807\u3002ZERO_CHECK\u5c31\u662f\u4fdd\u8bc1\u66f4\u6539\u4e86cmake\u6587\u4ef6\u540e\u7f16\u8bd1\u65f6\u81ea\u52a8config\u3002\u8fd9\u4e2a\u4f2a\u76ee\u6807\u662fcmake\u5185\u7f6e\u7684\u3002"),(0,a.kt)("h3",{id:"\u89e3\u51b3utility\u4e0d\u53ef\u94fe\u63a5\u9519\u8bef"},"\u89e3\u51b3UTILITY\u4e0d\u53ef\u94fe\u63a5\u9519\u8bef"),(0,a.kt)("p",null,"\u5982\u4f55\u89e3\u51b3\u5462\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6bd4\u8f83\u539f\u59cb\u7684\u65b9\u6cd5\uff0c\u6839\u636e\u5e93\u7684\u5730\u5740\u94fe\u63a5\u5e93\u3002\uff08\u7531\u4e8e\u6211\u4eec\u8fd9\u4e2a\u4f8b\u5b50\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u5c31\u4e0d\u6f14\u793a\u5934\u6587\u4ef6\u4e86\uff09\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c31\u662f\u8c03\u7528install\u547d\u4ee4\u3002\u8fd9\u79cd\u6bd4\u8f83\u597d\uff0c\u4f46\u662f\u8981\u6c42\u4f60\u6240\u7528\u7684\u7b2c\u4e09\u65b9\u5e93\u4f5c\u8005\u5199\u4e86install\u547d\u4ee4\uff08\u4e00\u822c\u90fd\u4f1a\u5199\uff09\u3002"))),(0,a.kt)("p",null,"\u9996\u5148\u6f14\u793a\u65b9\u68481\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ExternalProject_Get_Property(External_B_name_I_set BINARY_DIR )\nmessage(STATUS "BINARY_DIR: ${BINARY_DIR}")\ntarget_link_libraries(A PRIVATE\n${BINARY_DIR}/$<CONFIG>/Blib.lib\n)\nunset(BINARY_DIR)\n')),(0,a.kt)("p",null,"\u6ca1\u4ec0\u4e48\u53ef\u8bf4\u7684\uff0c\u5c31\u662f\u627e\u5230Blib.lib\u7684\u7edd\u5bf9\u5730\u5740\u7136\u540e\u94fe\u63a5\u800c\u5df2\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\u6f14\u793a\u65b9\u68482\uff1a"),(0,a.kt)("p",null,'\u9996\u5148\u53bb\u6389INSTALL_COMMAND ""'),(0,a.kt)("p",null,"\u4e3aB\u548cC\u7f16\u5199install\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cmake_minimum_required(VERSION 3.23)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nproject(A)\n\nadd_executable(A src/main.cpp)\n\n# \u76f4\u63a5add_subdirectory\u4f1a\u5bfc\u81f4target\u51b2\u7a81\n# add_subdirectory(extern/B)\n# add_subdirectory(extern/C)\n\n# \u4f7f\u7528ExternalProject\u53ef\u4ee5\u89e3\u51b3target\u51b2\u7a81\u95ee\u9898\ninclude(ExternalProject)\nset_property(DIRECTORY PROPERTY EP_BASE ${CMAKE_BINARY_DIR}/ExternalProject)\n\nset(EXT_INALL_DIR ${CMAKE_BINARY_DIR}/ExternalProject/Install)\nmessage(STATUS "EXT_INALL_DIR: ${EXT_INALL_DIR}")\n\nExternalProject_Add(External_C\n  SOURCE_DIR\n    ${CMAKE_CURRENT_LIST_DIR}/extern/C\n  CMAKE_ARGS\n    -DCMAKE_CXX_STANDARD=${CMAKE_CXX_STANDARD}\n    -DCMAKE_CXX_FLAGS=${CMAKE_CXX_FLAGS}\n    -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE}\n    -DCMAKE_INSTALL_PREFIX:PATH=${EXT_INALL_DIR}/External_C \n  )\n\nExternalProject_Add(External_B\n  SOURCE_DIR\n    ${CMAKE_CURRENT_LIST_DIR}/extern/B\n  CMAKE_ARGS\n    -DCMAKE_CXX_STANDARD=${CMAKE_CXX_STANDARD}\n    -DCMAKE_CXX_FLAGS=${CMAKE_CXX_FLAGS}\n    -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE}\n    -DCMAKE_INSTALL_PREFIX:PATH=${EXT_INALL_DIR}/External_B \n  )\n\n# \u65b9\u68481(INSTALL_COMMAND "")\n# ExternalProject_Get_Property(External_B BINARY_DIR )\n# message(STATUS "BINARY_DIR: ${BINARY_DIR}")\n# target_link_libraries(A PRIVATE\n# ${BINARY_DIR}/$<CONFIG>/Blib.lib\n# )\n# unset(BINARY_DIR)\n\n\n# # \u65b9\u68482\n# \u53ef\u4ee5\u76f4\u63a5\u94fe\u63a5\u5e76include\nExternalProject_Get_Property(External_B INSTALL_DIR)\nset(BLIB_INCLUDE_DIR ${INSTALL_DIR}/include)\nset(BLIB_LIBRARIES ${INSTALL_DIR}/lib/Blib.lib)\nunset(INSTALL_DIR)\n# target_link_libraries(A PRIVATE\n#   ${BLIB_LIBRARIES}\n# )\n# target_include_directories(A PUBLIC\n#   ${BLIB_INCLUDE_DIR}\n# )\n\n# \u4e5f\u53ef\u4ee5\u5148\u5c01\u88c5\u6210\u4e00\u4e2aINTERFACE\u5e93\uff0c\u7136\u540e\u94fe\u63a5\nadd_library(External_B_to_link INTERFACE)\ntarget_link_libraries(External_B_to_link INTERFACE\n  ${BLIB_LIBRARIES}\n)\ntarget_include_directories(External_B_to_link INTERFACE\n  ${BLIB_INCLUDE_DIR}\n)\ntarget_link_libraries(A PRIVATE\n  External_B_to_link\n)\nadd_dependencies(External_B_to_link External_B)\n\n')))}p.isMDXComponent=!0}}]);