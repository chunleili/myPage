"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3124],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>g});var l=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,l,a=function(t,n){if(null==t)return{};var e,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var c=l.createContext({}),o=function(t){var n=l.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},u=function(t){var n=o(t.components);return l.createElement(c.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=o(e),g=a,s=m["".concat(c,".").concat(g)]||m[g]||d[g]||i;return e?l.createElement(s,r(r({ref:n},u),{},{components:e})):l.createElement(s,r({ref:n},u))}));function g(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,r=new Array(i);r[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=t,p.mdxType="string"==typeof t?t:a,r[1]=p;for(var o=2;o<i;o++)r[o]=e[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,e)}m.displayName="MDXCreateElement"},7126:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var l=e(7462),a=(e(7294),e(3905));const i={},r="\u5982\u4f55\u4f7f\u7528Houdini\u6e32\u67d3\u6d41\u4f53\uff1f",p={unversionedId:"Houdini/Houdini-render-fluid",id:"Houdini/Houdini-render-fluid",title:"\u5982\u4f55\u4f7f\u7528Houdini\u6e32\u67d3\u6d41\u4f53\uff1f",description:"\u7248\u672c\uff1aHoudini19.5 \u5176\u4ed6\u7248\u672c\u5e94\u8be5\u4e5f\u5dee\u4e0d\u591a",source:"@site/docs/Houdini/Houdini-render-fluid.md",sourceDirName:"Houdini",slug:"/Houdini/Houdini-render-fluid",permalink:"/Houdini/Houdini-render-fluid",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/Houdini/Houdini-render-fluid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Houdini isn't scary \u7cfb\u5217\u7b14\u8bb0",permalink:"/Houdini/Houdini-learn/"},next:{title:"Houdini Principled shader\u51e0\u4e2a\u6700\u91cd\u8981\u7684\u53c2\u6570\u8bb2\u89e3",permalink:"/Houdini/principled-shader"}},c={},o=[{value:"Houdini\u57fa\u672c\u5e38\u8bc6",id:"houdini\u57fa\u672c\u5e38\u8bc6",level:2},{value:"Houdini\u4e2d\u89c6\u89d2\u79fb\u52a8\u7684\u65b9\u5f0f",id:"houdini\u4e2d\u89c6\u89d2\u79fb\u52a8\u7684\u65b9\u5f0f",level:3},{value:"Houdini \u8282\u70b9",id:"houdini-\u8282\u70b9",level:3},{value:"\u8bfb\u53d6\u6570\u636e\u548c\u6d41\u4f53\u8868\u9762\u91cd\u5efa",id:"\u8bfb\u53d6\u6570\u636e\u548c\u6d41\u4f53\u8868\u9762\u91cd\u5efa",level:2},{value:"\u7c92\u5b50\u4f4d\u7f6e\u6570\u636e",id:"\u7c92\u5b50\u4f4d\u7f6e\u6570\u636e",level:3},{value:"\u8bfb\u53d6\u6570\u636e\u5230houdini",id:"\u8bfb\u53d6\u6570\u636e\u5230houdini",level:3},{value:"\u91cd\u5efa\u8868\u9762",id:"\u91cd\u5efa\u8868\u9762",level:3},{value:"\u706f\u5149\u548c\u6444\u50cf\u673a (Mantra \uff09",id:"\u706f\u5149\u548c\u6444\u50cf\u673a-mantra-",level:2},{value:"\u706f\u5149",id:"\u706f\u5149",level:3},{value:"\u9762\u5149\u6e90",id:"\u9762\u5149\u6e90",level:4},{value:"\u73af\u5883\u5149\u548cHDR\u80cc\u666f",id:"\u73af\u5883\u5149\u548chdr\u80cc\u666f",level:4},{value:"\u6444\u50cf\u673a",id:"\u6444\u50cf\u673a",level:3},{value:"\u8bbe\u7f6e\u6750\u8d28\u548c\u6e32\u67d3\u5668\u53c2\u6570\uff08Mantra\uff09",id:"\u8bbe\u7f6e\u6750\u8d28\u548c\u6e32\u67d3\u5668\u53c2\u6570mantra",level:2},{value:"\u6750\u8d28",id:"\u6750\u8d28",level:3},{value:"\u6e32\u67d3\u5668",id:"\u6e32\u67d3\u5668",level:2}],u={toc:o};function d(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,l.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528houdini\u6e32\u67d3\u6d41\u4f53"},"\u5982\u4f55\u4f7f\u7528Houdini\u6e32\u67d3\u6d41\u4f53\uff1f"),(0,a.kt)("p",null,"\u7248\u672c\uff1aHoudini19.5 \u5176\u4ed6\u7248\u672c\u5e94\u8be5\u4e5f\u5dee\u4e0d\u591a"),(0,a.kt)("p",null,"\u6e32\u67d3\u5668\u4e0e\u6750\u8d28\u662f\u76f4\u63a5\u5173\u8054\u7684\uff0c\u4e0d\u540c\u6e32\u67d3\u5668\u6709\u4e0d\u540c\u7684\u706f\u5149\u3001\u6750\u8d28\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9996\u5148\u8bb2\u89e3\u5982\u4f55\u5229\u7528Houdini\u81ea\u5e26\u7684Mantra\u6e32\u67d3\uff08CPU\u6e32\u67d3\uff0c\u8f83\u6162\uff09\uff0c\u7136\u540e\u8bb2\u89e3\u66f4\u5feb\u7684\u7b2c\u4e09\u65b9\u6e32\u67d3\u5668Redshift\uff08GPU\u6e32\u67d3\uff0c\u8f83\u5feb\uff09\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5728\u6b64\u4e4b\u524d\uff0c\u6709\u4e00\u4e9b\u901a\u7528\u6b65\u9aa4\uff0c\u5373\u8bfb\u53d6\u6d41\u4f53\u7c92\u5b50\u5e27\u6570\u636e\u548c\u8868\u9762\u91cd\u5efa\u3002"),(0,a.kt)("h2",{id:"houdini\u57fa\u672c\u5e38\u8bc6"},"Houdini\u57fa\u672c\u5e38\u8bc6"),(0,a.kt)("h3",{id:"houdini\u4e2d\u89c6\u89d2\u79fb\u52a8\u7684\u65b9\u5f0f"},"Houdini\u4e2d\u89c6\u89d2\u79fb\u52a8\u7684\u65b9\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Esc\u8fdb\u5165\u89c6\u56fe\u89c6\u89d2"),"\uff0c"),(0,a.kt)("p",null,"\u7136\u540e",(0,a.kt)("strong",{parentName:"p"},"\u5de6\u952e\u65cb\u8f6c\uff0c\u6eda\u8f6e/\u53f3\u952e\u62c9\u8fd1\u62c9\u8fdc\uff0c\u4e2d\u952e\u5e73\u79fb"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"H\u952e\u91cd\u7f6e\u89c6\u89d2")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"G\u952e\u4ee5\u67d0\u4e2a\u7269\u4f53\u4e3a\u4e2d\u5fc3\u91cd\u7f6e\u89c6\u89d2")," "),(0,a.kt)("h3",{id:"houdini-\u8282\u70b9"},"Houdini \u8282\u70b9"),(0,a.kt)("p",null,"\u8282\u70b9\u662fHoudini\u6838\u5fc3\u4e2d\u7684\u6838\u5fc3\uff01\u662f\u7b2c\u4e00\u516c\u6c11\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48Houdini\u88ab\u79f0\u4e3a\u7a0b\u5e8f\u5316\u5efa\u6a21\u8f6f\u4ef6\u3002"),(0,a.kt)("p",null,"Houdini\u4e2d",(0,a.kt)("strong",{parentName:"p"},"\u6240\u6709\u64cd\u4f5c"),"\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u5728Network\u89c6\u56fe\u4e2d\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Tab\u952e"),"\u521b\u5efa\u8282\u70b9\u3002"),(0,a.kt)("h2",{id:"\u8bfb\u53d6\u6570\u636e\u548c\u6d41\u4f53\u8868\u9762\u91cd\u5efa"},"\u8bfb\u53d6\u6570\u636e\u548c\u6d41\u4f53\u8868\u9762\u91cd\u5efa"),(0,a.kt)("h3",{id:"\u7c92\u5b50\u4f4d\u7f6e\u6570\u636e"},"\u7c92\u5b50\u4f4d\u7f6e\u6570\u636e"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u51c6\u5907\u7c92\u5b50\u6570\u636e\u3002\u6211\u8fd9\u91cc\u7684\u8f93\u5165\u6570\u636e\u662f\u4ecetaichi\u751f\u6210\u7684mpm3d\u6a21\u62df\u5f97\u5230\u7684\u5e8f\u5217\uff08\u9ed8\u8ba4\u662fply\u683c\u5f0f\uff09"),(0,a.kt)("p",null,"\u5982\u679c\u662fobj\u683c\u5f0f\u7684\u8bdd\uff0c\u5b83\u91cc\u9762\u53ea\u6709\u4e00\u4e9b\u70b9\u7684\u4f4d\u7f6e\u800c\u5df2\u3002\n\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"v 1.00718 0.992176 1.00718\nv 1.09713 0.992118 1.00712\nv 1.2004 0.992209 1.00721\nv 1.29996 0.992199 1.0072\nv 1.4 0.9922 1.0072\nv 1.5 0.9922 1.0072\nv 1.6 0.9922 1.0072\nv 1.7 0.9922 1.0072\nv 1.8 0.9922 1.0072\nv 1.9 0.9922 1.0072\nv 2 0.9922 1.0072\nv 2.1 0.9922 1.0072\nv 2.2 0.9922 1.0072\nv 2.3 0.9922 1.0072\nv 2.4 0.9922 1.0072\nv 2.5 0.9922 1.0072\nv 2.6 0.9922 1.0072\n...\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/72011fe46c6545d68884858c393fe099.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("h3",{id:"\u8bfb\u53d6\u6570\u636e\u5230houdini"},"\u8bfb\u53d6\u6570\u636e\u5230houdini"),(0,a.kt)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e00\u4e2ageo\u8282\u70b9\uff0c\u91cd\u547d\u540d\u4e3aread_data\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c725f103b70f4a41a56c5021f2e7a3c5.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u53cc\u51fb\u8fdb\u5165\u8be5\u8282\u70b9"),(0,a.kt)("p",null,"\u7136\u540e\u65b0\u5efafile\u8282\u70b9\uff0c\u9009\u62e9\u6570\u636e\u5e8f\u5217"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a71a7edd221c41f0853c7125c8ac8bad.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u5f97\u5230\u7684\u5c31\u662f\u4e00\u5806\u70b9\u3002"),(0,a.kt)("h3",{id:"\u91cd\u5efa\u8868\u9762"},"\u91cd\u5efa\u8868\u9762"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u91cd\u5efa\u8868\u9762\u3002\u4f7f\u7528particle fluid surface\u8fd9\u4e2a\u8282\u70b9\u3002\u8c03\u6574particle seperation\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/57942776a283480d8d821c719ec48ef7.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u5b9e\u9645\u4e0a\u8fd9\u5c31\u5b8c\u6210\u4e86\u5de5\u4f5c\u3002\u4f46\u662f\u8fd9\u6837\u7684\u8bdd\uff0c\u4f60\u6bcf\u6b21\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u90fd\u8981\u91cd\u65b0\u8bfb\u53d6\u7c92\u5b50\uff0c\u7136\u540e\u91cd\u5efa\u8868\u9762\u3002\u6211\u4eec\u4e0d\u5982\u628a\u8868\u9762\u7f13\u5b58\u4e00\u4e0b\uff0c\u4ee5\u540e\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u7f13\u5b58\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u65b0\u5efafile cache\u8282\u70b9\uff0c\u7136\u540e\u4fee\u6539\u4e0b\u9762\u7684\u65f6\u95f4\u5e27\u3002\u6211\u4eec\u53ea\u9700\u898150\u5e27\uff0c\u56e0\u6b64\u6539\u4e3a50\u3002\uff08\u4e0a\u9762\u7eff\u8272\u7684\u4f4d\u7f6e\u4f1a\u968f\u4e4b\u66f4\u6539\u3002\u5982\u679c\u4f60\u76f4\u63a5\u53bb\u6539\u7eff\u8272\u7684\u4f4d\u7f6e\u662f\u6539\u4e0d\u4e86\u7684\u3002\uff09\n\u5e76\u4e14\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\u5e8f\u5217\u7684\u540d\u5b57\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"$OS"),"\u7684\u610f\u601d\u5c31\u662f\u5f53\u524d\u8282\u70b9\u7684\u540d\u5b57\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"$HIP"),"\u7684\u610f\u601d\u5c31\u662f\u5f53\u524d.hip\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002"),(0,a.kt)("p",null,"\u8f93\u51fa\u7684\u683c\u5f0f\u662f.bgeo.sc\u3002\u8fd9\u662fhoudini\u7279\u6709\u7684\u538b\u7f29\u683c\u5f0f\uff0c\u5bf9\u4e8eHoudini\u6765\u8bf4\u8bfb\u5199\u90fd\u5f88\u5feb\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/666d346b63534e518fa6c56e68847881.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u8f93\u51fa\u5b8c\u4e86\uff0c\u4f60\u53ef\u4ee5\u53bb\u770b\u4e00\u770b\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/aa277ae28105498d93caccc404ee7b96.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u4f60\u4f1a\u53d1\u73b0file cache\u4e4b\u540e\u7684\u8282\u70b9\u4e0a\u4f1a\u51fa\u73b0\u4e00\u4e2a\u865a\u5f71\uff0c\u8fd9\u5c31\u4ee3\u8868\u6211\u4eec\u5df2\u7ecf\u7f13\u5b58\u4e86\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u65b0\u5efa\u4e00\u4e2anull\u8282\u70b9\uff0c\u91cd\u547d\u540d\u4e3afluid_surface\u3002\u8fd9\u4e2a\u8282\u70b9\u4ec0\u4e48\u4e5f\u4e0d\u505a\uff0c\u5355\u7eaf\u5c31\u662f\u4e3a\u4e86\u4ee5\u540e\u597d\u5f15\u7528\u540d\u5b57\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/d744768941d04429a5c2894ca701a55a.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u56de\u5230\u6700\u5916\u5c42"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/75ea512b4a874202a0f5c60b1779cf38.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u81f3\u6b64\uff0c\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u6d41\u4f53\u8bfb\u53d6\u6570\u636e\u548c\u8868\u9762\u91cd\u5efa"),(0,a.kt)("h2",{id:"\u706f\u5149\u548c\u6444\u50cf\u673a-mantra-"},"\u706f\u5149\u548c\u6444\u50cf\u673a (Mantra \uff09"),(0,a.kt)("p",null,"\u706f\u5149\u548c\u6750\u8d28\u90fd\u662f\u6e32\u67d3\u5668\u7279\u5b9a\u7684\uff0c\u6211\u4eec\u4ece\u6b64\u5904\u5f00\u59cb\u4f7f\u7528Mantra\u6e32\u67d3\u3002"),(0,a.kt)("h3",{id:"\u706f\u5149"},"\u706f\u5149"),(0,a.kt)("h4",{id:"\u9762\u5149\u6e90"},"\u9762\u5149\u6e90"),(0,a.kt)("p",null,"\u9996\u5148\u589e\u52a0\u9762\u5149\u6e90\u3002control+\u5de6\u952e \u70b9\u51fb\u5de5\u5177\u680f\uff08shelf tool\uff09\u7684area light"),(0,a.kt)("p",null,"\u7136\u540e\u5c31\u4f1a\u81ea\u52a8\u8fdb\u5165\u706f\u5149\u7684\u89c6\u89d2\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u9501\u5b9a"),"\uff0c\u5c31\u53ef\u4ee5\u79fb\u52a8\u706f\u5149\u3002"),(0,a.kt)("p",null,"Houdini\u4e2d\u79fb\u52a8\u7684\u65b9\u5f0f\u662f\u5148"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Esc\u8fdb\u5165\u89c6\u56fe\u89c6\u89d2"),"\uff0c"),(0,a.kt)("p",null,"\u7136\u540e",(0,a.kt)("strong",{parentName:"p"},"\u5de6\u952e\u65cb\u8f6c\uff0c\u6eda\u8f6e/\u53f3\u952e\u62c9\u8fd1\u62c9\u8fdc\uff0c\u4e2d\u952e\u5e73\u79fb"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"H\u952e\u91cd\u7f6e\u89c6\u89d2")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"G\u952e\u4ee5\u67d0\u4e2a\u7269\u4f53\u4e3a\u4e2d\u5fc3\u91cd\u7f6e\u89c6\u89d2")," "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/bcb3bed5f9234defa7e57c5c19607c0d.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u8c03\u6574\u7ed3\u675f\u4e4b\u540e\uff0c\u518d\u6b21\u70b9\u51fb\u9501\uff0c\u7136\u540e\u968f\u4fbf\u79fb\u52a8\u4e00\u4e0b\u89c6\u89d2\uff0c\u5c31\u80fd\u9000\u51fa\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u518d\u6b21\u8fdb\u5165\u706f\u5149\u89c6\u89d2\uff0c\u5c31\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684",(0,a.kt)("strong",{parentName:"p"},"look through light"),"\u3002\u5982\u4e0b\u56fe\u6240\u793a\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/9f5b373a4f5645df9daf8a067f40bc4b.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u9000\u51fa\u4ee5\u540e\uff0c\u968f\u4fbf\u79fb\u52a8\u4e0b\u89c6\u89d2\uff0c\u4f60\u4f1a\u53d1\u73b0\u4f1a\u6709\u4e00\u4e2a\u9ec4\u8272\u7684\u77e9\u5f62\uff0c\u90a3\u4e2a\u5c31\u662f\u521a\u624d\u7684\u9762\u5149\u6e90\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u8c03\u6574\u706f\u5149\u7684\u4eae\u5ea6\u3002\u53ef\u4ee5\u8c03",(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570Exposure"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/00ee2c62c4e841da97af6279ff62c1e5.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u5982\u6cd5\u70ae\u5236\u518d\u5236\u4f5c\u53e6\u4e00\u4e2a\u9762\u5149\u6e90\u3002"),(0,a.kt)("h4",{id:"\u73af\u5883\u5149\u548chdr\u80cc\u666f"},"\u73af\u5883\u5149\u548cHDR\u80cc\u666f"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u589e\u52a0\u73af\u5883\u5149\u548cHDR\u80cc\u666f"),(0,a.kt)("p",null,"\u589e\u52a0",(0,a.kt)("strong",{parentName:"p"},"environment light\u8282\u70b9")),(0,a.kt)("p",null,"\u7136\u540e\u9009\u62e9",(0,a.kt)("strong",{parentName:"p"},"Environment Map"),"\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u5bfc\u5165",(0,a.kt)("strong",{parentName:"p"},"HDR\u80cc\u666f"),"\u56fe\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://polyhaven.com/"},"https://polyhaven.com/")," \u83b7\u53d6\u514d\u8d39\u7684HDR\u8d44\u6e90\uff01"),(0,a.kt)("p",null,"HDR\u7684\u4f5c\u7528\u5c31\u662f\u4e3a\u73af\u5883\u6dfb\u52a0\u73af\u5883\u5149\u7167\u3002\u56e0\u4e3a\u662f\u73af\u5883\uff0c\u4f60\u5f97\u6307\u5b9a\u662f\u4ec0\u4e48\u6837\u7684\u73af\u5883\u3002\u6bd4\u5982\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u662f\u53a8\u623f\uff1f\u8fd8\u662f\u5e7f\u573a\uff1f\u8fd8\u662f\u68ee\u6797\uff1f")),(0,a.kt)("p",null,"\u6211\u4eec\u8981\u6e05\u695a\uff0c",(0,a.kt)("strong",{parentName:"p"},"HDR\u7684\u80cc\u666f\u56fe\u9ed8\u8ba4\u4e0d\u4f1a\u88ab\u6e32\u67d3\u51fa\u6765"),"\uff08\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u6e32\u67d3\u51fa\u6765\uff09\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6dfb\u52a0HDR\u7684\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u8bbe\u7f6e\u73af\u5883\u5149\u7167"),"\uff01"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/ee875faae8a642299ed1ad8357ab305c.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("h3",{id:"\u6444\u50cf\u673a"},"\u6444\u50cf\u673a"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u76f8\u673a\u7684\u65b9\u5f0f\u57fa\u672c\u4e0e\u9762\u5149\u6e90\u4e00\u81f4\uff1alook through, \u9501\u5b9a\uff0c\u8c03\u6574\uff0c\u89e3\u9501\u5e76\u9000\u51fa\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/f019b300d68d4617aec1b55bf44430fa.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u6750\u8d28\u548c\u6e32\u67d3\u5668\u53c2\u6570mantra"},"\u8bbe\u7f6e\u6750\u8d28\u548c\u6e32\u67d3\u5668\u53c2\u6570\uff08Mantra\uff09"),(0,a.kt)("h3",{id:"\u6750\u8d28"},"\u6750\u8d28"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5207\u6362\u5230Material Platte"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u53d1\u73b0\u81ea\u5df1\u7684\u6807\u7b7e\u9875\u4e0a\u6ca1\u6709\u8fd9\u73a9\u610f\uff0c\u5c31\u53f3\u952e\uff0c\u7136\u540e\u9009\u62e9Material Platte"),(0,a.kt)("p",null,"\u8fd9\u91cc\u9762\u6240\u6709\u7684\u4e1c\u897f\uff0c\u90fd\u662f\u8fea\u58eb\u5c3c\u7684Principled shader\uff0c\u5b66\u540d\u53c8\u53ebBRDF\u6216\u8005BSDF\u3002Blender\u91cc\u9762\u53c8\u53eb\u539f\u7406\u5316BSDF\u3002\u6240\u6709\u8fd9\u4e9b\u4e1c\u897f\uff0c\u90fd\u53ea\u662f\u53c2\u6570\u4e0d\u540c\u7684\u9884\u8bbe\u800c\u5df2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/17acc48b0a62433099524e19e8573466.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u6211\u4eec\u628aBasic fluid\u62d6\u51fa\u6765\u3002\u8fd9\u662f\u4e2a\u6d41\u4f53\u7684\u9884\u8bbe\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/6484de66684346fabfca8420f127ab51.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u7136\u540e\u518d\u628a\u5b83\u62d6\u5230\u6211\u4eec\u7684\u6d41\u4f53\u5757\u4e0a"),(0,a.kt)("p",null,"\u8fd9\u65f6\u6211\u4eec\u5c31\u4f1a\u53d1\u73b0\u6d41\u4f53\u6709\u4e86\u6750\u8d28\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/e5e0ae213dcd4b569e92c631418ab486.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8c03\u6574\u6d41\u4f53\u7684\u6750\u8d28\uff0c\u53ef\u4ee5\u53cc\u51fb\u8fdb\u5165Basic fluid\uff0c \u7136\u540e\u8c03\u6574\u53c2\u6570\u3002\u6bd4\u5982\u6211\u4eec\u8fd9\u91cc\u7a0d\u5fae\u8c03\u6574\u4e00\u4e0b\u4e0d\u900f\u660e\u5ea6\uff08opacity\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/204093c19f8443c8935995dee991e124.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("h2",{id:"\u6e32\u67d3\u5668"},"\u6e32\u67d3\u5668"),(0,a.kt)("p",null,"\u6211\u4eec\u8df3\u8f6c\u5230out\u3002\u4f1a\u53d1\u73b0\u6709\u4e2a\u9ed8\u8ba4\u7684mantra_ipr\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/1ed0a159f58b4030bb266c1576c2cdb4.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u7136\u540e\u70b9\u51fb\u6e32\u67d3\u7a97\u53e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a65fa327265340e9898668dad807a5dd.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u8bbe\u7f6e\u597d\u8f93\u51fa\u8def\u5f84\u7b49\u4e4b\u540e\uff0c\u70b9\u51fb\u6e32\u67d3\uff08\u6216Render To Disk\uff09\u5373\u53ef\uff01\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c280ab4ef34a4a109abf169e62aa8f9d.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u81ea\u5df1\u6307\u5b9a\u4fdd\u5b58\u8def\u5f84\u548c\u6e32\u67d3\u7684\u8303\u56f4\u3002\u6211\u8fd9\u91cc\u53ea\u662f\u6e32\u67d3\u4e00\u5e27\u3002"),(0,a.kt)("p",null,"Mantra\u662fCPU\u6e32\u67d3\uff0c\u6240\u4ee5\u5f88\u6162\u3002\u800c\u4e14\u4f1a\u5360\u6ee1\u4f60\u7684\u6574\u4e2aCPU\uff08\u5982\u56fe\u6240\u793a\u3002\u4e00\u5f20\u56fe\u6211\u5df2\u7ecf\u6e32\u67d3\u4e861\u520617\u79d2\u624d\u8fdb\u5ea687%\uff0c\u800c\u4e14CPU\u6ee1\u8f7d\uff0c\u5185\u5b58\u6d88\u80171.11GB\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a05a89bd08c44c1599e8c52297ee9bef.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7b49\u4e0d\u53ca\u7684\u8bdd\uff0c\u53ef\u4ee5\u5148\u4fdd\u5b58\u4e00\u4e0b\u6ca1\u6e32\u67d3\u5b8c\u7684\u622a\u56fe\u3002\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a289640783204bad948a6bf362c8723d.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u81f3\u6b64\uff0c\u5b8c\u6574\u7684\u6e32\u67d3\u6d41\u7a0b\u7ed3\u675f\uff01"),(0,a.kt)("p",null,"\u7ed3\u679c\u5982\u56fe\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/6b256be323db46e4ac590dda37c213ee.jpeg",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}d.isMDXComponent=!0}}]);