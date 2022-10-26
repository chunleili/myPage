"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(a,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const l={},i="\u5728SPlisHSPlaSH\u4e2d\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e",u={unversionedId:"SPlisHSPlaSH/get_mouse",id:"SPlisHSPlaSH/get_mouse",title:"\u5728SPlisHSPlaSH\u4e2d\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e",description:"\u9700\u6c42\uff1a \u6211\u5e0c\u671b\u5f53\u9f20\u6807\u70b9\u51fb\u7684\u65f6\u5019\uff0c\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e\uff0c\u7136\u540e\u4f20\u51fa\u4e00\u4e2a\u4e09\u7ef4\u5750\u6807(x,y,z)\u3002",source:"@site/docs/SPlisHSPlaSH/get_mouse.md",sourceDirName:"SPlisHSPlaSH",slug:"/SPlisHSPlaSH/get_mouse",permalink:"/SPlisHSPlaSH/get_mouse",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/SPlisHSPlaSH/get_mouse.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenVDB\u7684\u5b89\u88c5\u4e0e\u7b2c\u4e00\u4e2ademo",permalink:"/OpenVDB/first-openvdb"},next:{title:"\u5b9d\u85cf\u6536\u85cf\u5939",permalink:"/Treasures"}},a={},s=[],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5728splishsplash\u4e2d\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e"},"\u5728SPlisHSPlaSH\u4e2d\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e"),(0,o.kt)("p",null,"\u9700\u6c42\uff1a \u6211\u5e0c\u671b\u5f53\u9f20\u6807\u70b9\u51fb\u7684\u65f6\u5019\uff0c\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e\uff0c\u7136\u540e\u4f20\u51fa\u4e00\u4e2a\u4e09\u7ef4\u5750\u6807(x,y,z)\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u627e\u5230\u76f8\u5e94\u7684\u53d8\u91cf\u5373\u53ef\u3002splishsplash\u7684\u9ed8\u8ba4gui\u662fimgui\u3002\u5b83\u7684\u5b9e\u73b0\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"Simulator\\GUI\\imgui\\Simulator_GUI_imgui.cpp"),"\u3002\u5b83\u5b9e\u73b0\u7684\u7c7b\u5c31\u53eb\u505aSimulator_GUI_imgui"),(0,o.kt)("p",null,"\u8fd9\u91cc\u88ab\u5916\u754c\u8c03\u7528\u7684\u5165\u53e3\u662fvoid Simulator_GUI_imgui::run()\u3002\u5f53\u7136\u8fd9\u4e2a\u6211\u4eec\u65e0\u9700\u5173\u7cfb\uff0c\u6211\u4eec\u53ea\u8981\u627e\u5230\u90a3\u4e2a\u4e16\u754c\u5750\u6807\u7684\u7269\u7406\u91cf\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u89c2\u5bdf\u8fd9\u4e2a\u7c7b\uff0c\u53d1\u73b0\u6709\u4e00\u4e2a\u53d8\u91cf\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Vector3r m_oldMousePos;")),(0,o.kt)("p",null,"\u975e\u5e38\u7b26\u5408\u6211\u4eec\u7684\u8981\u6c42\uff01"),(0,o.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u5728\u67d0\u4e2a\u5fc5\u5b9a\u88ab\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u6253\u5370\u4e00\u4e0b\uff0c\u5c31\u77e5\u9053\u5bf9\u4e0d\u5bf9\u4e86\uff01"),(0,o.kt)("p",null,"\u9996\u5148\u641c\u7d22",(0,o.kt)("inlineCode",{parentName:"p"},"m_oldMousePos"),"\uff0c\u53d1\u73b0\u5b83\u5728\u4e24\u4e2a\u51fd\u6570\u4e2d\u6709\u88ab\u8c03\u7528\uff0c\u4e00\u4e2a\u662fselection\uff0c\u4e00\u4e2a\u662fmouseMove\u3002"),(0,o.kt)("p",null,"\u5728mouseMove\u4e2d\u6253\u5370\uff0c\u53d1\u73b0\u5b83\u672a\u5fc5\u88ab\u8c03\u7528\u3002\u540e\u53d1\u73b0selection\u5fc5\u5b9a\u88ab\u8c03\u7528\u3002\u800c\u4e14selection\u4e2d\u662f\u8c03\u7528moveMove\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    if (selected)\n        MiniGL::setMouseMoveFunc(2, mouseMove);\n    else\n        MiniGL::setMouseMoveFunc(-1, NULL);\n")),(0,o.kt)("p",null,"\u90a3\u4e48\u663e\u7136\u5c31\u5728selection\u4e2d\uff01"),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u8be5\u51fd\u6570\u4e2d\u5012\u6570\u7b2c\u4e8c\u884c\u6253\u5370\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/198032983-c2fd6510-43d3-445c-b0f4-9a269dfa92ab.png",alt:"image"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    printf("gui->m_oldMousePos: (%f\\t,%f\\t,%f)\\n", gui->m_oldMousePos[0],gui->m_oldMousePos[1],gui->m_oldMousePos[2]);\n\n    MiniGL::unproject(end[0], end[1], gui->m_oldMousePos);\n')),(0,o.kt)("p",null,"\u53d1\u73b0\u5f97\u5230\u4e86\u9884\u671f\u7684\u7ed3\u679c\uff01"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gui->m_oldMousePos: (0.015165   ,2.968639       ,7.893096)\n")),(0,o.kt)("p",null,"\u56e0\u6b64\u603b\u7ed3\uff1a\n\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Simulator\\GUI\\imgui\\Simulator_GUI_imgui.cpp"),"\u83b7\u53d6gui->m_oldMousePos\u8fd9\u4e2a\u53d8\u91cf\uff0c\u8fd9\u4e2a\u53d8\u91cf\u5fc5\u5b9a\u4f1a\u88abselection\u51fd\u6570\u6240\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u53d8\u91cf\u5c31\u662f\u4e16\u754c\u5750\u6807\uff01"))}c.isMDXComponent=!0}}]);