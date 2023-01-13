"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7600],{3905:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>g});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=r.createContext({}),u=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},l=function(t){var n=u(t.components);return r.createElement(s.Provider,{value:n},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=u(e),v=a,g=d["".concat(s,".").concat(v)]||d[v]||p[v]||i;return e?r.createElement(g,o(o({ref:n},l),{},{components:e})):r.createElement(g,o({ref:n},l))}));function g(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=v;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=t,c[d]="string"==typeof t?t:a,o[1]=c;for(var u=2;u<i;u++)o[u]=e[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}v.displayName="MDXCreateElement"},4986:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=e(7462),a=(e(7294),e(3905));const i={},o=void 0,c={unversionedId:"cpp/variant and visit",id:"cpp/variant and visit",title:"variant and visit",description:"std::variant\u662fC++ 17\u7684\u91cd\u8981\u65b0\u7279\u6027\u3002\u5b83\u975e\u5e38\u5e38\u7528\u4ee5\u81f3\u4e8e\u4e0d\u5f97\u4e0d\u53bb\u5b66\u4e60\u5b83\u3002\u5b83\u5b9e\u9645\u4e0a\u662fC\u8bed\u8a00\u4e2d\u7684union\u7684\u62d3\u5c55\u3002\u5b83\u53ef\u4ee5\u5b58\u50a8\u591a\u79cd\u591a\u6837\u7684\u7c7b\u578b\uff0c\u5177\u4f53\u7c7b\u578b\u53ea\u6709\u5728\u8fd0\u884c\u65f6\u624d\u80fd\u786e\u5b9a\u3002\u4f60\u751a\u81f3\u53ef\u4ee5\u5b58\u50a8\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u3002\u6216\u8005\u662f\u5b9a\u4e49\u4e00\u4e2a\u5143\u7d20\u90fd\u662fvariant\u7684\u6570\u7ec4\u3002\u8fd9\u4e2a\u6570\u7ec4\u91cc\u9762\u6bcf\u4e00\u4e2a\u5143\u7d20\u7684\u7c7b\u578b\u90fd\u53ef\u4ee5\u4e0d\u76f8\u540c\uff01",source:"@site/docs/cpp/variant and visit.md",sourceDirName:"cpp",slug:"/cpp/variant and visit",permalink:"/cpp/variant and visit",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cpp/variant and visit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ed3\u6784\u5316\u7ed1\u5b9a",permalink:"/cpp/structured_bind"},next:{title:"\u4f7f\u7528ffmpeg\u5feb\u901f\u526a\u8f91\u89c6\u9891",permalink:"/ffmpeg/cut-video"}},s={},u=[],l={toc:u};function d(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"std::variant\u662fC++ 17\u7684\u91cd\u8981\u65b0\u7279\u6027\u3002\u5b83\u975e\u5e38\u5e38\u7528\u4ee5\u81f3\u4e8e\u4e0d\u5f97\u4e0d\u53bb\u5b66\u4e60\u5b83\u3002\u5b83\u5b9e\u9645\u4e0a\u662fC\u8bed\u8a00\u4e2d\u7684union\u7684\u62d3\u5c55\u3002\u5b83\u53ef\u4ee5\u5b58\u50a8\u591a\u79cd\u591a\u6837\u7684\u7c7b\u578b\uff0c\u5177\u4f53\u7c7b\u578b\u53ea\u6709\u5728\u8fd0\u884c\u65f6\u624d\u80fd\u786e\u5b9a\u3002\u4f60\u751a\u81f3\u53ef\u4ee5\u5b58\u50a8\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u3002\u6216\u8005\u662f\u5b9a\u4e49\u4e00\u4e2a\u5143\u7d20\u90fd\u662fvariant\u7684\u6570\u7ec4\u3002\u8fd9\u4e2a\u6570\u7ec4\u91cc\u9762\u6bcf\u4e00\u4e2a\u5143\u7d20\u7684\u7c7b\u578b\u90fd\u53ef\u4ee5\u4e0d\u76f8\u540c\uff01"),(0,a.kt)("p",null,"\u800cstd::visit\u662f\u4e0e\u4e4b\u914d\u5957\u7684\u8bbf\u95ee\u5668\u3002\u901a\u8fc7std::visit\u80fd\u591f\u4e0d\u5173\u5fc3\u5177\u4f53\u7c7b\u578b\u5730\u5199\u51fa\u7b97\u6cd5\uff0c\u5b9e\u73b0\u7b97\u6cd5\u7684\u6cdb\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <variant>\n#include <string>\n#include <array>\n#include <vector>\n#include <iostream>\nusing namespace std;\n\nint main()\n{\n    //\u5e38\u89c4\u7528\u6cd5\uff1a1. \u5148\u4e3avariant\u8d77\u4e2a\u522b\u540d\n    using myVariant = std::variant<\n        double,\n        string,\n        int\n    > ;\n    //2. \u7528variant \u58f0\u660e\u4e00\u4e2a\u53d8\u91cfa\n    myVariant a;\n    //3. \u7ed9\u53d8\u91cfa\u8d4b\u503c\u3002\n    a = 10;\n    //4. \u901a\u8fc7std::get<int>(a)\u83b7\u53d6a\u7684\u53d8\u91cf\u3002\n    cout<<std::get<int>(a)<<"\\n";\n    //5. \u7ed9\u53d8\u91cfa\u91cd\u65b0\u8d4b\u503c\n    a = "hello";\n    cout<<std::get<string>(a)<<"\\n";\n    //5. \u8fd9\u4e2a\u53d8\u91cf\uff08std::get<string>(a) \u800c\u975ea\uff09\u4e5f\u53ef\u4ee5\u8d4b\u503c\u7ed9\u522b\u4eba\u3002\n    string s = std::get<string>(a);\n    cout<<s<<"\\n";\n    a = 3.14;\n    cout<<std::get<double>(a)<<"\\n";\n\n    //\u9519\u8bef\u505a\u6cd5\uff1a\u4f1a\u629b\u51fastd::bad_variant_access\u3002\n    //\u8fd9\u662f\u56e0\u4e3a\u6bcf\u6b21\u91cd\u65b0\u8d4b\u503c\uff0ca\u90fd\u4f1a\u88ab\u8986\u76d6\u6389\uff0c\u56e0\u6b64a\u53ea\u80fd\u5b58\u6700\u540e\u4e00\u79cd\u7c7b\u578b\u3002\n    // a = 10;\n    // a = "hello";\n    // a = 3.14;\n    // cout<<std::get<int>(a)<<"\\n";\n    // cout<<std::get<string>(a)<<"\\n";\n    // cout<<std::get<double>(a)<<"\\n";\n\n    //\u8fd8\u53ef\u4ee5\u7528index()\u65b9\u6cd5\u6765\u5f97\u77e5\u76ee\u524d\u5b58\u50a8\u7684\u662f\u7b2c\u51e0\u79cd\u7c7b\u578b\u3002\n    myVariant b = "hello";\n    cout <<"which type? : "<<b.index()<<endl ; //\u5f97\u52301\uff08\u4ece0\u5f00\u59cb\uff09\n    //\u7136\u540e\u7528\u5176\u8bbf\u95ee\n    cout<<"access using index: "<<std::get<1>(b)<<endl;\n    // cout<<std::get<b.index()>(b)<<endl;//\u9519\u8bef\u505a\u6cd5\uff0c\u56e0\u4e3aindex\u8fd0\u884c\u65f6\u624d\u77e5\u9053\n\n    //\u66f4\u597d\u7684get\u2014\u2014get_if\u3002\u5b83\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u5047\u5982\u76ee\u524d\u4e0d\u662f\u76f8\u5e94\u7c7b\u578b\uff0c\u90a3\u4e48\u5c31\u7ed9\u51fa\u7a7a\u6307\u9488nullptr\u3002\n    //\u4f46\u662f\u5b83\u662f\u4e2a\u6307\u9488\uff0c\u56e0\u6b64\u8981\u53d6\u5730\u5740\u548c\u89e3\u5f15\u7528\n    b = 6;\n    int * c= std::get_if<int>(&b);\n    if(c)\n    {\n        cout<<"c is int: ";\n        int c_val = *c;\n        cout<<c_val;\n    }\n    else\n    {\n        cout<<"c is not int";\n    }\n\n\n\n    //std::visit\u662f\u4e00\u79cd\u8bbf\u95eevariant\u7684\u65b9\u6cd5\u3002\n    //\u5047\u5982\u4f60\u60f3\u7ed9\u522b\u4eba\u5199\u5e93\uff0c\u4f60\u9700\u8981\u4e00\u79cd\u6cdb\u7528\u7684\u65b9\u6cd5\u6765\u8bbf\u95eevariant\u3002\n    //\u56e0\u4e3a\u4f60\u4e0d\u77e5\u9053\u5ba2\u6237\u4e2d\u7684 variant \u5b58\u7684\u662f\u4ec0\u4e48\u7c7b\u578b\u3002\n    // \u5b83\u7684\u53c2\u6570\u6709\u4e24\u4e2a\uff1a\u7b2c\u4e00\u4e2a\u662f\u4e00\u4e2a\u53ef\u8c03\u7528\u5bf9\u8c61\uff0c\u53ef\u4ee5\u7528lambda\u8868\u8fbe\u5f0f\u3002\u7b2c\u4e8c\u4e2a\u662f\u8981\u8bbf\u95ee\u7684variant\u3002\n    //\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff1a\u6253\u5370\u4e00\u4e0b\u76ee\u524d\u6240\u5b58\u7684\u503c\n    std::cout <<"\\nAccess with std::visit\\n";\n    std::visit([](auto&& arg){std::cout <<" " <<arg;}, b);\n\n    //\u590d\u6742\u4f46\u5b9e\u7528\u7684\u7528\u6cd5\uff1a\u904d\u5386\u6570\u7ec4\u3002\n    //\u4e0b\u9762\u7684\u4f8b\u5b50\u89e3\u91ca\u5982\u4f55\u904d\u5386\u4e00\u4e2avariant\u7ec4\u6210\u7684\u6570\u7ec4\u3002\n    //\u7531\u4e8e\u6bcf\u4e2a\u5143\u7d20\u90fd\u662fvariant, \u800c\u4e3a\u6bcf\u79cdvariant\u90fd\u5199\u4e00\u904dstd::get_if\u5b9e\u5728\u662f\u592a\u9ebb\u70e6\u4e86\u3002\n    //\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e00\u79cd\u901a\u7528\u7684\u8bbf\u95eevariant\u7684\u65b9\u6cd5\u3002\n    using var_t = std::variant<int, long, double, std::string>;\n    std::vector<var_t> vec = {10, 15l, 1.5, "hello"};\n    std::cout <<"\\nNow we iterate through a variant vector\\n";\n    // for (auto& v: vec) \n    //     cout<<v; //\u4e00\u79cd\u663e\u800c\u6613\u89c1\u7684\u9519\u8bef\uff0c\u56e0\u4e3av\u662f\u4e00\u4e2avariant\uff0c\u4f60\u5fc5\u987b\u5148\u53d6\u51fa\u6765\u771f\u6b63\u7684\u7c7b\u578b\uff0c\u624d\u80fd\u8bbf\u95ee\u3002\n\n    //\u5229\u7528std::visit\uff0c\u5373\u4f7f\u65e0\u9700\u53d6\u51fa\u771f\u6b63\u7684\u7c7b\u578b\uff0c\u4e5f\u80fd\u8bbf\u95ee\u3002\n    for (auto& v: vec) \n        std::visit([](auto&& arg){std::cout <<" " <<arg;}, v);\n\n\n    //\u8fd8\u662f\u8bbf\u95ee\u3002\u4f60\u8fd8\u53ef\u4ee5\u7528+\u53f7\u3002\u5bf9\u4e8e\u6570\u5b57\u5c31\u662f\u52a0\u6cd5\uff0c\u5bf9\u4e8e\u5b57\u7b26\u4e32\u5c31\u662f\u8fde\u63a5\u3002\n    std::cout <<"\\nTest for + operation \\n";\n    for (auto& v: vec) \n    {\n        var_t w = std::visit([](auto&& arg) -> var_t {return arg + arg;}, v);\n        std::visit([](auto&& arg){std::cout <<" " <<arg;}, w);\n    }\n    return 0;\n}\n')))}d.isMDXComponent=!0}}]);