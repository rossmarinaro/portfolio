(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{6803:(e,t,l)=>{Promise.resolve().then(l.bind(l,9926))},9926:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>u});var n=l(5155),i=l(2115);class a{static async xhr(e,t,l){let n=await a.request(t,l),i={method:n.method,headers:n.headers,body:JSON.stringify(n.body)},s=await fetch(e,i);return s.ok?await s.json():Error()}static async request(e,t){switch(a.headers={Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("webtoken"),credentials:"same-origin"},e){case"GET":a.method="GET";break;case"POST":a.method="POST";break;case"PUT":a.method="PUT"}let l={method:a.method,headers:a.headers};return"POST"===e||"PUT"===e?l.body=t:delete l.body,l}}var s=l(5565);let r={src:"/portfolio/_next/static/media/dots.5d1eda58.svg",height:23,width:8,blurWidth:0,blurHeight:0},o=(e,t)=>Array.from({length:t-e+1},(t,l)=>l+e),c=e=>(0,i.useMemo)(()=>{let t=Math.ceil(e.totalCount/e.pageSize);if(e.siblingCount+5>=t)return o(1,t);let l=Math.max(e.currentPage-e.siblingCount,1),n=Math.min(e.currentPage+e.siblingCount,t),i=l>2,a=n<t-2;return!i&&a?[...o(1,2+3*e.siblingCount),r,t]:i&&!a?[1,r,...o(t-(2+3*e.siblingCount)+1,t)]:i&&a?[1,r,...o(l,n),r,t]:void 0},[e.totalCount,e.pageSize,e.siblingCount,e.currentPage]),d=e=>{let{onPageChange:t,totalCount:l,siblingCount:i=1,currentPage:a,pageSize:o,className:d}=e,h=c({currentPage:a,totalCount:l,siblingCount:i,pageSize:o});if(0===a||h&&h.length<2)return null;let u=h&&h[h.length-1];return(0,n.jsx)("div",{id:"pagination",children:(0,n.jsxs)("ul",{className:"flex pagination-container-".concat(d," mt-5 pl-[50%] w-full bg-[#00ff4c] rounded-xl"),children:[(0,n.jsx)("li",{className:"pagination-item",onClick:()=>t(a-1),children:(0,n.jsx)("div",{className:"arrow left"})}),null==h?void 0:h.map(e=>e===r?(0,n.jsxs)("li",{style:{padding:"10px"},className:"pagination-item dots",children:[(0,n.jsx)(s.default,{src:r,alt:"pagination-dots"},e)," "]},e):(0,n.jsx)("li",{style:{padding:"10px"},className:"pagination-item",onClick:()=>t(e),children:e},"")),a===u&&(0,n.jsx)("li",{className:"pagination-item pl-5",onClick:()=>t(a+1),children:(0,n.jsx)("div",{className:"arrow right"})})]})})};function h(e){let{username:t,title:l,date:i,content:a}=e.props;return(0,n.jsxs)("div",{className:"component content-container col-2-2 container",children:[(0,n.jsxs)("ul",{id:"blog-element",style:{marginTop:"2%",fontStyle:"italic",fontWeight:"bold"},children:[(0,n.jsx)("li",{className:"image-gallery-link vector",children:t}),(0,n.jsx)("li",{className:"image-gallery-link vector",children:l}),(0,n.jsx)("li",{className:"image-gallery-link vector",children:i})]}),(0,n.jsx)("p",{children:a})]})}function u(){let e=(0,i.useRef)([]),[t,l]=(0,i.useState)(1),[s,r]=(0,i.useState)("list"),[o,c]=(0,i.useState)({}),u=(0,i.useMemo)(()=>{let l=(t-1)*5;return e.current.slice(l,l+5)},[t,e]);return(0,i.useEffect)(()=>{(async()=>{try{a.xhr("https://rossmarinaro.onrender.com/get-blogs","GET").then(t=>{t&&e.current.push(t)})}catch(e){console.log("There was an error. ",e)}})()},[]),(0,n.jsxs)("section",{className:"mt-[5%] mb-[10%] w-full",children:[(0,n.jsxs)("table",{className:"blog-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Username"}),(0,n.jsx)("th",{children:"Title"}),(0,n.jsx)("th",{children:"Date"})]})}),(0,n.jsx)("tbody",{children:u.length?u.map(e=>(0,n.jsxs)("tr",{onClick:()=>{c(e),r("blog"===s?"list":"blog")},children:[e.username&&(0,n.jsx)("td",{children:e.username}),e.title&&(0,n.jsx)("td",{children:e.title}),e.date&&(0,n.jsx)("td",{children:e.date})]},e._id)):(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"mb-2 text-1xl font-semibold",style:{marginLeft:"100%"},children:" N/A "})})})]}),(0,n.jsx)(d,{className:"pagination-bar",currentPage:t,totalCount:e.current.length,pageSize:5,onPageChange:e=>l(e)}),o?(0,n.jsx)(h,{props:o}):(0,n.jsx)("h3",{className:"mb-3 text-2xl font-semibold",style:{fontStyle:"italic",color:"#fff"},children:" No blogs loaded. "})]})}},5565:(e,t,l)=>{"use strict";l.d(t,{default:()=>i.a});var n=l(4146),i=l.n(n)},4146:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{default:function(){return o},getImageProps:function(){return r}});let n=l(306),i=l(666),a=l(7970),s=n._(l(5514));function r(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}}let o=a.Image}},e=>{var t=t=>e(e.s=t);e.O(0,[970,441,517,358],()=>t(6803)),_N_E=e.O()}]);