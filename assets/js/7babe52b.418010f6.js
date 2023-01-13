"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[s]="string"==typeof e?e:l,p[1]=a;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const i={},p="\u51fd\u6570\u8fd4\u56de\u591a\u4e2a\u503c\u7684\u6700\u4f73\u65b9\u5f0f",a={unversionedId:"cpp/return_multiple_vals",id:"cpp/return_multiple_vals",title:"\u51fd\u6570\u8fd4\u56de\u591a\u4e2a\u503c\u7684\u6700\u4f73\u65b9\u5f0f",description:"\u8ba9C++\u7684\u51fd\u6570\u6709\u591a\u4e2a\u8fd4\u56de\u503c\u7684\u65b9\u5f0f\u591a\u79cd\u591a\u6837\uff0c\u6bd4\u5982",source:"@site/docs/cpp/return_multiple_vals.md",sourceDirName:"cpp",slug:"/cpp/return_multiple_vals",permalink:"/cpp/return_multiple_vals",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cpp/return_multiple_vals.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u73b0\u4ee3cpp\u6559\u7a0b\u7b14\u8bb0",permalink:"/cpp/mordenCppTut"},next:{title:"\u7ed3\u6784\u5316\u7ed1\u5b9a",permalink:"/cpp/structured_bind"}},o={},u=[],c={toc:u};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u51fd\u6570\u8fd4\u56de\u591a\u4e2a\u503c\u7684\u6700\u4f73\u65b9\u5f0f"},"\u51fd\u6570\u8fd4\u56de\u591a\u4e2a\u503c\u7684\u6700\u4f73\u65b9\u5f0f"),(0,l.kt)("p",null,"\u8ba9C++\u7684\u51fd\u6570\u6709\u591a\u4e2a\u8fd4\u56de\u503c\u7684\u65b9\u5f0f\u591a\u79cd\u591a\u6837\uff0c\u6bd4\u5982"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u7ed3\u6784\u4f53"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u53c2\u6570\u4e2d\u4ee5\u5f15\u7528\u7684\u65b9\u5f0f\u8fd4\u56de\u503c"),(0,l.kt)("li",{parentName:"ol"},"\uff08\u5bf9\u4e8e\u540c\u4e00\u7c7b\u578b\u6570\u636e\uff09\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"std::vector")),(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"std::pair")),(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"std::tuple"))),(0,l.kt)("p",null,"..."),(0,l.kt)("p",null,"\u5176\u4e2d\u6211\u8ba4\u4e3a\u6700\u7b80\u6d01\u6700\u597d\u7528\u7684\u5c31\u662f\u8fd4\u56de\u5143\u7ec4\u3002\u56e0\u4e3a\u8fd9\u79cd\u65b9\u5f0f\u5199\u7684\u4ee3\u7801\u6700\u5c11\u6700\u7b80\u6d01\uff0c\u800c\u4e14\u9002\u7528\u8303\u56f4\u6700\u5e7f\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\u8fd9\u79cd\u65b9\u6cd5\u9700\u8981C++17\u4ee5\u4e0a"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e2a\u7b80\u5355\u7684\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <iostream>\n#include <tuple>\n#include <string>\n\nstd::tuple<std::string, int> f() // this function returns multiple values\n{\n    std::string x = "Hello";\n    return std::make_tuple(x, 7); // return {x,7}; in C++17\n}\n\nint main()\n{\n    auto [s, n] = f(); // structured binding declaration\n    std::cout << s << " " << n << "\\n";\n}\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\u662f\u642d\u914d\u4e86C++17\u7684\u7ed3\u6784\u5316\u7ed1\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"auto [s, n]"),"\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u52a8\u63a8\u65ad\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u65e0\u9700\u624b\u52a8\u53bb\u5199\u4e86\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u65e2\u7b80\u6d01\u53c8\u76f4\u89c2\u3002"))}s.isMDXComponent=!0}}]);