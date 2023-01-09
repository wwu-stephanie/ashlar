(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[1231],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3129:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const a=document.createElement("template");a.innerHTML='\n        <div class="wrapper closed">\n        <div class="modal">            \n        </div>\n        </div>\n        \n        <button class="open-modal" aria-expanded="false"></button>\n        ';class o extends HTMLElement{constructor(){super()}connectedCallback(){const t=this.innerHTML;this.innerHTML="",this.appendChild(a.content.cloneNode(!0)),this.querySelector(".modal").innerHTML='<button class="close-modal"><span class="material-icons" aria-hidden="true">close</span>Close</button>'+t;const o=this.querySelector(".open-modal");this.getAttribute("icon")?o.innerHTML=`<span class="material-icons" aria-hidden="true">${this.getAttribute("icon")}</span>${this.getAttribute("label")}`:o.innerText=this.getAttribute("label"),o.addEventListener("click",e),this.addEventListener("keyup",r),this.querySelector(".wrapper").addEventListener("click",n)}}function e(){const e=this.parentNode.querySelector(".close-modal");this.parentNode.querySelector(".wrapper").classList.remove("closed"),this.setAttribute("aria-expanded",!0),e.focus()}function t(){this.parentNode.querySelector(".wrapper").classList.add("closed"),this.setAttribute("aria-expanded",!1),this.parentNode.querySelector(".open-modal").focus();const e=this.parentNode.querySelector("iframe"),t=e.parentNode;e.remove(),t.appendChild(e)}function r(e){"Escape"==e.code&&t.call(this)}function n(e){e.target.classList.contains("modal")||t.call(this)}window.customElements.define("wwu-modal",o)}},9509:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(3129);const o={},i="Modal",l={unversionedId:"molecules/modal/modal",id:"molecules/modal/modal",title:"Modal",description:"",source:"@site/patterns/02-molecules/modal/modal.md",sourceDirName:"02-molecules/modal",slug:"/molecules/modal/",permalink:"/ashlar/patterns/molecules/modal/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Image with Description",permalink:"/ashlar/patterns/molecules/image-with-description/"},next:{title:"Breadcrumb",permalink:"/ashlar/patterns/molecules/navigation/breadcrumb/"}},c={},s=[],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modal"},"Modal"),(0,a.kt)("wwu-modal",{label:"Play a Vimeo Video",icon:"play_arrow"},(0,a.kt)("div",{class:"embed-container"},(0,a.kt)("iframe",{src:"https://player.vimeo.com/video/668337172?h=15cc98305e&badge=0&autopause=0&player_id=0&app_id=58479/embed",allow:"autoplay; fullscreen; picture-in-picture",title:"Anthem, Vimeo"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<wwu-modal label="Play a Vimeo Video" icon="play_arrow">\n<div class="embed-container">\n    <iframe src="https://player.vimeo.com/video/668337172?h=15cc98305e&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" title="Anthem Video Vimeo"></iframe>\n</div>\n</wwu-modal>\n')),(0,a.kt)("wwu-modal",{label:"Play a Youtube Video",icon:"play_arrow"},(0,a.kt)("div",{class:"embed-container"},(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nR7cUFRwTIM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:"Shannon Point Marine Center, YouTube"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<wwu-modal label="Play a Youtube Video" icon="play_arrow">\n<div class="embed-container">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/nR7cUFRwTIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Shannon Point Marine Center, YouTube"></iframe>\n</div>\n</wwu-modal>\n')))}u.isMDXComponent=!0}}]);