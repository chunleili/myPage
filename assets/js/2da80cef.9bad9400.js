"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const l={},a="\u5728zeno\u4e2d\u5355\u72ec\u7684\u6d4b\u8bd5\u67d0\u4e2a\u6587\u4ef6",i={unversionedId:"zeno/zeno_test",id:"zeno/zeno_test",title:"\u5728zeno\u4e2d\u5355\u72ec\u7684\u6d4b\u8bd5\u67d0\u4e2a\u6587\u4ef6",description:"\u63cf\u8ff0",source:"@site/docs/zeno/zeno_test.md",sourceDirName:"zeno",slug:"/zeno/zeno_test",permalink:"/zeno/zeno_test",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/zeno/zeno_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e3ataichi\u7a0b\u5e8f\u6682\u505c\u548creset\u4ee5\u4fbf\u4e8e\u8c03\u8bd5",permalink:"/taichi/taichi-debug"},next:{title:"IterMethods",permalink:"/\u8bfb\u4e66\u7b14\u8bb0/IterMethods/"}},c={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b\uff1a\u6d4b\u8bd5\u6838\u51fd\u6570",id:"\u793a\u4f8b\u6d4b\u8bd5\u6838\u51fd\u6570",level:2},{value:"\u8981\u70b9",id:"\u8981\u70b9",level:2}],u={toc:s};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5728zeno\u4e2d\u5355\u72ec\u7684\u6d4b\u8bd5\u67d0\u4e2a\u6587\u4ef6"},"\u5728zeno\u4e2d\u5355\u72ec\u7684\u6d4b\u8bd5\u67d0\u4e2a\u6587\u4ef6"),(0,o.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"\u73af\u5883\uff1aWin10 + VS Code\n\u751f\u4ea7\u73af\u5883\u4e2d\u7528VS2019 + cmake\n\u6b64\u6d4b\u8bd5\u4e2d\u4f7f\u7528minGW g++\n(gcc version 8.1.0 (x86_64-win32-seh-rev0, Built by MinGW-W64 project))"),(0,o.kt)("p",null,"\u9700\u6c42\uff1a\u6211\u5e0c\u671b\u628a\u67d0\u4e2a\u51fd\u6570\u5355\u72ec\u62bd\u79bb\u51fa\u6765\uff0c\u81ea\u5df1\u5199main\u51fd\u6570\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u6d4b\u8bd5\u6838\u51fd\u6570"},"\u793a\u4f8b\uff1a\u6d4b\u8bd5\u6838\u51fd\u6570"),(0,o.kt)("p",null,"testKernels.cpp\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "../PBF/SPHKernels.h"\n#include "../Utils/myPrint.h"\n#include <vector>\nfloat CubicKernel::m_radius;\nfloat CubicKernel::m_k;\nfloat CubicKernel::m_l;\nfloat CubicKernel::m_W_zero;\n\nint main()\n{\n    constexpr float h = 0.1;\n    constexpr int num = 1000;\n    CubicKernel::set(h);\n\n    std::vector<float> res(num);\n    for (size_t i = 0; i < num; i++)\n    {\n        float dist = h/num * i;\n        res[i] = CubicKernel::W(dist);\n    }\n    printScalarField("cubicW.csv",res);\n}\n')),(0,o.kt)("p",null,"SPHKernels.h"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#pragma once\n\n#include <array>\n#include <cmath>\n\n#include <zeno/utils/vec.h>\n\nstruct CubicKernel\n{\n\n    static float m_radius;\n    static float m_k;\n    static float m_l;\n    static float m_W_zero;\n\n    static void set(float val)\n    {\n        m_radius = val;\n        static const float pi = (3.14159265358979323846);\n\n        const float h3 = m_radius*m_radius*m_radius;\n        m_k = (8.0) / (pi*h3);\n        m_l = (48.0) / (pi*h3);\n        m_W_zero = W(0.0);\n    }\n\n    static float W(const float rl)\n    {\n        float res = 0.0;\n        const float q = rl/m_radius;\n        {\n            if (q <= 0.5)\n            {\n                const float q2 = q*q;\n                const float q3 = q2*q;\n                res = m_k * ((6.0)*q3- (6.0)*q2+ (1.0));\n            }\n            else\n            {\n                res = m_k * ((2.0)*pow((1.0)-q,3));\n            }\n        }\n        return res;\n    }\n\n    static zeno::vec3f gradW(const zeno::vec3f &r)\n    {\n        zeno::vec3f res;\n        // const float rl = r.norm();\n        const float rl = zeno::length(r);\n        const float q = rl / m_radius;\n\n        {\n            if (rl > 1.0e-6)\n            {\n                const zeno::vec3f gradq = r * ( 1.0 / (rl*m_radius));\n                if (q <= 0.5)\n                {\n                    res = m_l*q*( 3.0*q -  2.0)*gradq;\n                }\n                else\n                {\n                    const float factor = (1.0) - q;\n                    res = m_l*(-factor*factor)*gradq;\n                }\n            }\n        }\n        return res;\n    }\n};\n\nstruct Poly6Kernel\n{\n\n    static float W(float dist, float h=0.1)\n    {\n        float coeff = 315.0 / 64.0 / 3.14159265358979323846;\n        float res = 0.0;\n        if(dist > 0 && dist < h)\n        {\n            float x = (h * h - dist * dist) / (h * h * h);\n            res = coeff * x * x * x;\n        }\n        return res;\n    }\n};\n\nstruct SpikyKernel\n{\n    static zeno::vec3f gradW(const zeno::vec3f& r, float h=0.1)\n    {\n        float coeff = -45.0 / 3.14159265358979323846;\n        zeno::vec3f res{0.0, 0.0, 0.0};\n        float dist = zeno::length(r);\n        if (dist > 0 && dist < h)\n        {\n            float x = (h - dist) / (h * h * h);\n            float factor = coeff * x * x;\n            res = r * factor / dist;\n        }\n        return res;\n    }\n};\n")),(0,o.kt)("p",null,"\u5f53\u524d\u76ee\u5f55\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"E:\\Dev\\zenos\\zeno\\projects\\PBD\\test>")),(0,o.kt)("p",null,"\u7f16\u8bd1\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' g++ -I"E:\\Dev\\zenos\\zeno\\zeno\\include" -std=c++17 .\\testKernels.cpp\n')),(0,o.kt)("p",null," \u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\\a.exe\n")),(0,o.kt)("p",null," \u8f93\u51fa\u7ed3\u679c\ncubicW.csv"),(0,o.kt)("h2",{id:"\u8981\u70b9"},"\u8981\u70b9"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'\u56e0\u4e3a\u7528\u5230\u4e86zeno\u7684vec\uff0c\u6240\u4ee5\u8981include zeno\u7684\u5934\u6587\u4ef6\u76ee\u5f55-I"E:\\Dev\\zenos\\zeno\\zeno\\include"'),(0,o.kt)("li",{parentName:"ol"},"\u6307\u5b9ac++\u7248\u672c\u4e3a17")))}f.isMDXComponent=!0}}]);