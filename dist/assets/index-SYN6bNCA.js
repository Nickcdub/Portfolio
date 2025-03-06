import{r as e,a as t,R as o}from"./vendor-JKc4DCpQ.js";import{u as r,a as n,m as s,T as a}from"./animations-cG8WGZA3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var i={exports:{}},l={},c=e,d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,f=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,o){var r,n={},s=null,a=null;for(r in void 0!==o&&(s=""+o),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)m.call(t,r)&&!h.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:d,type:e,key:s,ref:a,props:n,_owner:f.current}}l.Fragment=u,l.jsx=p,l.jsxs=p,i.exports=l;var y=i.exports,v={},j=t;v.createRoot=j.createRoot,v.hydrateRoot=j.hydrateRoot;const g={},_=function(e,t,o){let r=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link");r=Promise.all(t.map((t=>{if((t=function(e){return"/"+e}(t))in g)return;g[t]=!0;const r=t.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(!!o)for(let o=e.length-1;o>=0;o--){const n=e[o];if(n.href===t&&(!r||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${t}"]${n}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":"modulepreload",r||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),r?new Promise(((e,o)=>{s.addEventListener("load",e),s.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}return r.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},b=()=>{const[t,o]=e.useState(!1);return y.jsx(y.Fragment,{children:y.jsxs("nav",{className:"nav",children:[y.jsxs("div",{className:"nav-header",children:[y.jsx("h2",{className:"nav-name",onClick:()=>document.getElementById("Intro").scrollIntoView({behavior:"smooth"}),children:"Nicholas Curwood"}),y.jsx("button",{className:"nav-toggle "+(t?"active":""),onClick:()=>o(!t),children:"☰"})]}),y.jsxs("div",{className:"nav-buttons "+(t?"active":""),children:[y.jsx("button",{onClick:()=>document.getElementById("About").scrollIntoView({behavior:"smooth"}),children:"About Me"}),y.jsx("button",{onClick:()=>document.getElementById("Projects").scrollIntoView({behavior:"smooth"}),children:"Projects"}),y.jsx("button",{onClick:()=>document.getElementById("Certifications").scrollIntoView({behavior:"smooth"}),children:"Certifications"}),y.jsx("button",{onClick:()=>document.getElementById("Contacts").scrollIntoView({behavior:"smooth"}),children:"Contact"})]})]})})};function x(){const t=e.useRef(null),{scrollYProgress:o}=r({target:t,offset:["start start","end start"]}),i=n(o,[0,1],["0%","-100%"]),l=n(o,[0,1],["100%","20%"]),c=n(o,[0,1],["-30%","200%"]);return y.jsxs("div",{ref:t,className:"intro",id:"Intro",children:[y.jsx(s.h1,{className:"intro-text",style:{y:c},children:y.jsx(a,{options:{autoStart:!0,loop:!0,delay:40,strings:["Hello, I am Nick","I am a Problem Solver","I am a Lifelong Learner","I am a Team Player","I am a Software Engineer."]}})}),y.jsxs("div",{className:"intro-img",children:[y.jsx("div",{className:"intro-img1",style:{backgroundImage:"url(/assets/Seattle-LiqMy3ht.svg)",backgroundPosition:"bottom",backgroundSize:"cover",position:"absolute",inset:0,y:l}}),y.jsx("div",{className:"intro-img3",style:{backgroundPosition:"bottom",backgroundSize:"cover",position:"absolute",inset:0,y:i}})]})]})}const E=o.lazy((()=>_((()=>import("./AboutMe-MQmhQyGD.js")),__vite__mapDeps([0,1,2,3,4,5])).then((e=>({default:e.AboutMe}))))),I=o.lazy((()=>_((()=>import("./Projects-StIiIU27.js")),__vite__mapDeps([6,1,2,3,4,7])).then((e=>({default:e.Projects}))))),P=o.lazy((()=>_((()=>import("./Certifications--DA6NqXk.js")),__vite__mapDeps([8,1,2,9,10])).then((e=>({default:e.Certifications}))))),N=o.lazy((()=>_((()=>import("./Contacts--SMgTeei.js")),__vite__mapDeps([11,1,2,9,12])).then((e=>({default:e.Contacts})))));function k(){return e.useState(0),y.jsxs("div",{className:"content-wrapper",children:[y.jsx(b,{}),y.jsx(x,{}),y.jsxs(e.Suspense,{fallback:y.jsx("div",{className:"loading",children:"Loading..."}),children:[y.jsx(E,{}),y.jsx(I,{}),y.jsx(P,{}),y.jsx(N,{})]}),y.jsx("p",{className:"read-the-docs",children:"A Vite and React app created by Nicholas Curwood"})]})}v.createRoot(document.getElementById("root")).render(y.jsx(o.StrictMode,{children:y.jsx(k,{})}));export{y as j};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutMe-MQmhQyGD.js","assets/vendor-JKc4DCpQ.js","assets/animations-cG8WGZA3.js","assets/Carousel-B7xJv6gO.js","assets/Carousel-gMgXajZO.css","assets/AboutMe-XhqW9Ox0.css","assets/Projects-StIiIU27.js","assets/Projects-jFc0vpNV.css","assets/Certifications--DA6NqXk.js","assets/iconBase-QbvJsY0v.js","assets/Certifications-jiTwRyf3.css","assets/Contacts--SMgTeei.js","assets/Contacts-Z1L2GbmX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
