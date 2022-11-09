(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[1598],{3905:(e,t,l)=>{"use strict";l.d(t,{Zo:()=>s,kt:()=>g});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=u(l),g=n,p=k["".concat(c,".").concat(g)]||k[g]||d[g]||a;return l?r.createElement(p,o(o({ref:t},s),{},{components:l})):r.createElement(p,o({ref:t},s))}));function g(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,o=new Array(a);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=l[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}k.displayName="MDXCreateElement"},9346:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n    <div class="bg-wrapper standard-padding">\n    <h1>H1 Heading <a href="#">and link</a></h1>\n    <h2>H2 Heading <a href="#">and link</a></h2>\n    <h3>H3 Heading <a href="#">and link</a></h3>\n    <h4>H4 Heading <a href="#">and link</a></h4>\n    <h5>H5 Heading <a href="#">and link</a></h5>\n\n    <p class="tagline">Tagline Text</p>\n\n    <p class="intro">Intro Text</p>\n\n    <p>Regular Text with <a href="#">a regular link</a> and a <a href="https://wwu.edu/">visited link</a></p>\n\n    <ul>\n        <li><a href="#">Regular</a></li>\n        <li><a href="#">list with this</a></li>\n        <li>background, and a <a href="#">bunch of links</a></li>\n    </ul>\n\n    <div class="block--beyond-basics-block">\n        <ul class="menu">\n        <li><a href="#">List of links</a></li>\n        <li><a href="#">with of links</a></li>\n        <li><a href="#">.menu class of links</a></li>\n        </ul>\n    </div>\n\n    <div class="ctas">\n        <a class="light-blue cta" href="#">Call to Action</a>\n        <a class="cta" href="#">Call to Action</a>\n        <a class="dark-blue cta" href="#">Call to Action</a>\n        <a class="light-green cta" href="#">Call to Action</a>\n        <a class="green cta" href="#">Call to Action</a>\n        <a class="dark-green cta" href="#">Call to Action</a>\n        <a class="white cta" href="#">Call to Action</a> \n    </div>\n\n    {% include "@atoms/buttons/play-button/play-button.twig" %}\n\n    {% include "@molecules/social-media-links/social-media-links.html.twig" %}\n\n    {% include "@atoms/tables/tables--customized.twig" %}\n    </div>\n  ';class t extends HTMLElement{constructor(){super()}connectedCallback(){this.appendChild(e.content.cloneNode(!0)),this.querySelector(".bg-wrapper").classList.add(this.attributes.color.value+"-bg")}}window.customElements.define("wwu-background-color",t)}},7532:(e,t,l)=>{"use strict";l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=l(7462),n=(l(7294),l(3905));l(9346);const a={},o="Background Color",i={unversionedId:"atoms/background-color/background-color",id:"atoms/background-color/background-color",title:"Background Color",description:"Default",source:"@site/patterns/01-atoms/background-color/background-color.md",sourceDirName:"01-atoms/background-color",slug:"/atoms/background-color/",permalink:"/ashlar/patterns/atoms/background-color/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/ashlar/patterns/utilities/variables"},next:{title:"Blockquotes",permalink:"/ashlar/patterns/atoms/blockquotes/"}},c={},u=[{value:"Default",id:"default",level:2},{value:"Black",id:"black",level:2},{value:"Darkest Blue",id:"darkest-blue",level:2},{value:"Dark Blue",id:"dark-blue",level:2},{value:"Blue",id:"blue",level:2},{value:"Light Blue",id:"light-blue",level:2},{value:"Lightest Blue",id:"lightest-blue",level:2},{value:"Green",id:"green",level:2},{value:"Light Green",id:"light-green",level:2},{value:"Gray",id:"gray",level:2},{value:"Light Gray",id:"light-gray",level:2},{value:"Lightest Gray",id:"lightest-gray",level:2}],s={toc:u};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"background-color"},"Background Color"),(0,n.kt)("h2",{id:"default"},"Default"),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",null),"    "),(0,n.kt)("h2",{id:"black"},"Black"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="black-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"black"})),(0,n.kt)("h2",{id:"darkest-blue"},"Darkest Blue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="darkest-blue-bg"></div>    \n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"darkest-blue"})),(0,n.kt)("h2",{id:"dark-blue"},"Dark Blue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="dark-blue-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"dark-blue"})),(0,n.kt)("h2",{id:"blue"},"Blue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="blue-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"blue"})),(0,n.kt)("h2",{id:"light-blue"},"Light Blue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="light-blue-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"light-blue"})),(0,n.kt)("h2",{id:"lightest-blue"},"Lightest Blue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="lightest-blue-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"lightest-blue"})),(0,n.kt)("h2",{id:"green"},"Green"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="green-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"green"})),(0,n.kt)("h2",{id:"light-green"},"Light Green"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="light-green-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"light-green"})),(0,n.kt)("h2",{id:"gray"},"Gray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="gray-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"gray"})),(0,n.kt)("h2",{id:"light-gray"},"Light Gray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="light-gray-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"light-gray"})),(0,n.kt)("h2",{id:"lightest-gray"},"Lightest Gray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<div class="lightest-gray-bg"></div>\n')),(0,n.kt)("p",null,(0,n.kt)("wwu-background-color",{color:"lightest-gray"})))}d.isMDXComponent=!0}}]);