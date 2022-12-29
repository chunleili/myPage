"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=o(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(g,c(c({ref:t},i),{},{components:r})):n.createElement(g,c({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,c[1]=p;for(var o=2;o<s;o++)c[o]=r[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const s={},c="\u4e09\u79cd\u4f7f\u7528\u65ad\u8a00\u7684\u65b9\u6cd5",p={unversionedId:"cpp/assert",id:"cpp/assert",title:"\u4e09\u79cd\u4f7f\u7528\u65ad\u8a00\u7684\u65b9\u6cd5",description:"\u65ad\u8a00\u4e3b\u8981\u662f\u7528\u6765DEBUG\u7684\u3002",source:"@site/docs/cpp/assert.md",sourceDirName:"cpp",slug:"/cpp/assert",permalink:"/cpp/assert",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cpp/assert.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"quternion",permalink:"/compute-graphics/quternion"},next:{title:"\u5229\u7528std::chrono\u6765\u8fdb\u884c\u8ba1\u65f6, \u4ee5\u6d4b\u8bd5\u6027\u80fd",permalink:"/cpp/chrono"}},l={},o=[],i={toc:o};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e09\u79cd\u4f7f\u7528\u65ad\u8a00\u7684\u65b9\u6cd5"},"\u4e09\u79cd\u4f7f\u7528\u65ad\u8a00\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u65ad\u8a00\u4e3b\u8981\u662f\u7528\u6765DEBUG\u7684\u3002\n\u65ad\u8a00\u7528\u6765\u5224\u65ad\u7a0b\u5e8f\u7ed3\u679c\u662f\u5426\u6ee1\u8db3\u4f60\u9884\u671f\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5728zeno\u4e2d\u4f7f\u7528\u65ad\u8a00\u6765\u5e2e\u52a9\u6211\u4eecdebug"),(0,a.kt)("h1",{id:"\u63d0\u524d\u603b\u7ed3"},"\u63d0\u524d\u603b\u7ed3"),(0,a.kt)("p",null,"\u5c31\u4e09\u79cd\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'//\u7528\u6cd51\uff1a\u8fd0\u884c\u65f6assert\nassert(0 && "assert here");\n\n//\u7528\u6cd52\uff1a\u9759\u6001static_assert\n static_assert(0,"triggered the  static assert");\n\n//\u7528\u6cd53\uff1athrow\u8fd0\u884c\u65f6\u5f02\u5e38\n throw std::runtime_error("test the runtime err.");\n')),(0,a.kt)("p",null,"\u4e0d\u5efa\u8bae\u7528\u7b2c\u4e00\u79cd\u65b9\u5f0f\u3002\u56e0\u4e3azeno\u5bf9\u7b2c\u4e00\u79cd\u65b9\u5f0f\u652f\u6301\u4e0d\u597d\u3002"),(0,a.kt)("h1",{id:"\u7528\u6cd51\u8fd0\u884c\u65f6assert"},"\u7528\u6cd51\uff1a\u8fd0\u884c\u65f6assert"),(0,a.kt)("p",null,"\u5047\u5982\u8981\u7528assert\u9700\u8981\u52a0\u5165\u8fd9\u4e24\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#undef NDEBUG//\u5148\u53bb\u6389NDEBUG\u5b8f\u8ba9\u65ad\u8a00\u53d1\u6325\u4f5c\u7528\n#include <cassert>//\u8bb0\u4f4f\u4e00\u5b9a\u8981\u5728\u4e0a\u4e00\u884c\u7684\u540e\u9762\n")),(0,a.kt)("p",null,"\uff08\u8fd9\u6837\u5373\u4f7f\u5728Release\u6a21\u5f0f\u4e5f\u53ef\u4ee5\u7528\u65ad\u8a00\uff0c\u4f46\u662f\u6ce8\u610f\u4e0d\u8981\u5728\u5934\u6587\u4ef6\u4e2d\u8fd9\u6837\u7528\uff0c\u56e0\u4e3a\u5b8f\u4f1a\u88ab\u4f20\u9012\uff09\n\u5728\u60f3\u8981assert\u7684\u5730\u65b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'assert(0 && "assert here");\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u6548\u679c\uff1a\n\u7a0b\u5e8f\u7f16\u8bd1\u8fd0\u884c\u6b63\u5e38\uff0c\u5f53\u8fd0\u884c\u5230\u8fd9\u4e00\u884c\u7a0b\u5e8f\u7684\u65f6\u5019"),(0,a.kt)("p",null,"\u5728\u7ec8\u7aef\u51fa\u73b0assertion failed\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/fdf7b032fb924c4d8b569aa27a8f3664.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"zeno\u53ef\u8fd0\u884c\uff0c\u4e14\u65e0\u4efb\u4f55\u8f93\u51fa\u4fe1\u606f"),(0,a.kt)("p",null,"\uff08\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u7528\u8fd9\u79cd\u65b9\u5f0f\uff09"),(0,a.kt)("h1",{id:"\u7528\u6cd52static_assert"},"\u7528\u6cd52\uff1astatic_assert"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'    //\u7528\u6cd52\uff1a\u9759\u6001static_assert\n    static_assert(0,"triggered the  static assert");\n')),(0,a.kt)("p",null,"\u7f16\u8bd1\u4e0d\u901a\u8fc7\u5e76\u62a5\u9519\u5982\u4e0b\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/9ec9c4f246384d168c0c426a2a3e42de.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u8fd9\u4e2a\u53ef\u4ee5\u7528\u5728\u68c0\u67e5\u7f16\u8bd1\u65f6\u7684\u7c7b\u578b\u7b49\u9519\u8bef\u3002"),(0,a.kt)("h1",{id:"\u7528\u6cd53"},"\u7528\u6cd53\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'//\u7528\u6cd53\uff1athrow\u8fd0\u884c\u65f6\u5f02\u5e38\n throw std::runtime_error("test the runtime err.");\n')),(0,a.kt)("p",null,"\u53ef\u6b63\u5e38\u7f16\u8bd1\u8fd0\u884c\uff0c\u53ea\u6709\u52a0\u8f7d\u8be5\u8282\u70b9\u5e76\u8fd0\u884c\u7684\u65f6\u5019\u624d\u4f1a\u4ea7\u751f\u62a5\u9519\u4fe1\u606f\u3002\u62a5\u9519\u4fe1\u606f\u9f50\u5168\uff08\u62a5\u544a\u9519\u8bef\u4f4d\u7f6e\uff09\u4e14\u8282\u70b9\u4f1a\u53d8\u6210\u7ea2\u8272\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4100e18e3b4f47c28bb98e73e5688dc7.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u5728\u7ec8\u7aef\u7a97\u53e3\u4e5f\u4f1a\u51fa\u73b0\u62a5\u9519\u4fe1\u606f\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/f475e84f38ba4a07920a8b9c6620a291.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u56e0\u6b64\u68c0\u67e5\u8fd0\u884c\u65f6\u9519\u8bef\u5efa\u8bae\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"))}u.isMDXComponent=!0}}]);