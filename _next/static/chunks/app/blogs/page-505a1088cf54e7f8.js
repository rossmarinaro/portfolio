(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{3527:(e,t,n)=>{Promise.resolve().then(n.bind(n,5744))},5744:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var l=n(7437),a=n(2265);class i{static async xhr(e,t,n){let l=await i.request(t,n),a={method:l.method,headers:l.headers,body:JSON.stringify(l.body)},s=await fetch(e,a);return s.ok?await s.json():Error()}static async request(e,t){switch(i.headers={Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("webtoken"),credentials:"same-origin"},e){case"GET":i.method="GET";break;case"POST":i.method="POST";break;case"PUT":i.method="PUT"}let n={method:i.method,headers:i.headers};return"POST"===e||"PUT"===e?n.body=t:delete n.body,n}}var s=n(6648);let r={src:"/_next/static/media/dots.5d1eda58.svg",height:23,width:8,blurWidth:0,blurHeight:0},o=(e,t)=>Array.from({length:t-e+1},(t,n)=>n+e),c=e=>(0,a.useMemo)(()=>{let t=Math.ceil(e.totalCount/e.pageSize);if(e.siblingCount+5>=t)return o(1,t);let n=Math.max(e.currentPage-e.siblingCount,1),l=Math.min(e.currentPage+e.siblingCount,t),a=n>2,i=l<t-2;return!a&&i?[...o(1,2+3*e.siblingCount),r,t]:a&&!i?[1,r,...o(t-(2+3*e.siblingCount)+1,t)]:a&&i?[1,r,...o(n,l),r,t]:void 0},[e.totalCount,e.pageSize,e.siblingCount,e.currentPage]),d=e=>{let{onPageChange:t,totalCount:n,siblingCount:a=1,currentPage:i,pageSize:o,className:d}=e,h=c({currentPage:i,totalCount:n,siblingCount:a,pageSize:o});if(0===i||h&&h.length<2)return null;let u=h&&h[h.length-1];return(0,l.jsx)("div",{id:"pagination",children:(0,l.jsxs)("ul",{className:"pagination-container-".concat(d),style:{display:"flex"},children:[(0,l.jsx)("li",{className:"pagination-item",onClick:()=>t(i-1),children:(0,l.jsx)("div",{className:"arrow left"})}),null==h?void 0:h.map(e=>e===r?(0,l.jsxs)("li",{style:{padding:"10px"},className:"pagination-item dots",children:[(0,l.jsx)(s.default,{src:r,alt:"pagination-dots"},e)," "]},e):(0,l.jsx)("li",{style:{padding:"10px"},className:"pagination-item",onClick:()=>t(e),children:e},"")),i===u&&(0,l.jsx)("li",{className:"pagination-item",onClick:()=>t(i+1),children:(0,l.jsx)("div",{className:"arrow right"})})]})})};function h(e){let{username:t,title:n,date:a,content:i}=e.props;return(0,l.jsxs)("div",{className:"component content-container col-2-2 container",children:[(0,l.jsxs)("ul",{id:"blog-element",style:{marginTop:"2%",fontStyle:"italic",fontWeight:"bold"},children:[(0,l.jsx)("li",{className:"image-gallery-link vector",children:t}),(0,l.jsx)("li",{className:"image-gallery-link vector",children:n}),(0,l.jsx)("li",{className:"image-gallery-link vector",children:a})]}),(0,l.jsx)("p",{children:i})]})}function u(){let e=(0,a.useRef)([]),[t,n]=(0,a.useState)(1),[s,r]=(0,a.useState)("list"),[o,c]=(0,a.useState)({}),u=(0,a.useMemo)(()=>{let n=(t-1)*5;return e.current.slice(n,n+5)},[t,e]);return(0,a.useEffect)(()=>{(async()=>{try{i.xhr("https://rem-webstore.onrender.com/get-blogs","GET").then(t=>{t&&e.current.push(t)})}catch(e){console.log("There was an error. ",e)}})()},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("table",{className:"blog-table",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Username"}),(0,l.jsx)("th",{children:"Title"}),(0,l.jsx)("th",{children:"Date"})]})}),(0,l.jsx)("tbody",{children:u.length?u.map(e=>(0,l.jsxs)("tr",{onClick:()=>{c(e),r("blog"===s?"list":"blog")},children:[e.username&&(0,l.jsx)("td",{children:e.username}),e.title&&(0,l.jsx)("td",{children:e.title}),e.date&&(0,l.jsx)("td",{children:e.date})]},e._id)):(0,l.jsx)("h3",{className:"mb-2 text-1xl font-semibold",style:{marginLeft:"100%"},children:" N/A "})})]}),(0,l.jsx)(d,{className:"pagination-bar",currentPage:t,totalCount:e.current.length,pageSize:5,onPageChange:e=>n(e)}),o?(0,l.jsx)(h,{props:o}):(0,l.jsx)("h3",{className:"mb-3 text-2xl font-semibold",style:{fontStyle:"italic",color:"#fff"},children:" No blogs loaded. "})]})}},6648:(e,t,n)=>{"use strict";n.d(t,{default:()=>a.a});var l=n(5601),a=n.n(l)},5601:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return r}});let l=n(9920),a=n(497),i=n(8173),s=l._(n(1241));function r(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=i.Image}},e=>{var t=t=>e(e.s=t);e.O(0,[173,130,215,744],()=>t(3527)),_N_E=e.O()}]);