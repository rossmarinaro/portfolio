(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{1378:(e,t,n)=>{Promise.resolve().then(n.bind(n,5744))},5744:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(7437),l=n(2265);class i{static async xhr(e,t,n){let a=await i.request(t,n),l={method:a.method,headers:a.headers,body:JSON.stringify(a.body)},s=await fetch(e,l);return s.ok?await s.json():Error()}static async request(e,t){switch(i.headers={Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("webtoken"),credentials:"same-origin"},e){case"GET":i.method="GET";break;case"POST":i.method="POST";break;case"PUT":i.method="PUT"}let n={method:i.method,headers:i.headers};return"POST"===e||"PUT"===e?n.body=t:delete n.body,n}}var s=n(6648);let r={src:"/_next/static/media/dots.5d1eda58.svg",height:23,width:8,blurWidth:0,blurHeight:0},o=(e,t)=>Array.from({length:t-e+1},(t,n)=>n+e),c=e=>(0,l.useMemo)(()=>{let t=Math.ceil(e.totalCount/e.pageSize);if(e.siblingCount+5>=t)return o(1,t);let n=Math.max(e.currentPage-e.siblingCount,1),a=Math.min(e.currentPage+e.siblingCount,t),l=n>2,i=a<t-2;return!l&&i?[...o(1,2+3*e.siblingCount),r,t]:l&&!i?[1,r,...o(t-(2+3*e.siblingCount)+1,t)]:l&&i?[1,r,...o(n,a),r,t]:void 0},[e.totalCount,e.pageSize,e.siblingCount,e.currentPage]),d=e=>{let{onPageChange:t,totalCount:n,siblingCount:l=1,currentPage:i,pageSize:o,className:d}=e,h=c({currentPage:i,totalCount:n,siblingCount:l,pageSize:o});if(0===i||h&&h.length<2)return null;let u=h&&h[h.length-1];return(0,a.jsx)("div",{id:"pagination",children:(0,a.jsxs)("ul",{className:"pagination-container-".concat(d),style:{display:"flex"},children:[(0,a.jsx)("li",{className:"pagination-item",onClick:()=>t(i-1),children:(0,a.jsx)("div",{className:"arrow left"})}),null==h?void 0:h.map(e=>e===r?(0,a.jsxs)("li",{style:{padding:"10px"},className:"pagination-item dots",children:[(0,a.jsx)(s.default,{src:r,alt:"pagination-dots"},e)," "]},e):(0,a.jsx)("li",{style:{padding:"10px"},className:"pagination-item",onClick:()=>t(e),children:e},"")),i===u&&(0,a.jsx)("li",{className:"pagination-item",onClick:()=>t(i+1),children:(0,a.jsx)("div",{className:"arrow right"})})]})})};function h(e){let{username:t,title:n,date:l,content:i}=e.props;return(0,a.jsxs)("div",{className:"component content-container col-2-2 container",children:[(0,a.jsxs)("ul",{id:"blog-element",style:{marginTop:"2%",fontStyle:"italic",fontWeight:"bold"},children:[(0,a.jsx)("li",{className:"image-gallery-link vector",children:t}),(0,a.jsx)("li",{className:"image-gallery-link vector",children:n}),(0,a.jsx)("li",{className:"image-gallery-link vector",children:l})]}),(0,a.jsx)("p",{children:i})]})}function u(){let e=(0,l.useRef)([]),[t,n]=(0,l.useState)(1),[s,r]=(0,l.useState)("list"),[o,c]=(0,l.useState)({}),u=(0,l.useMemo)(()=>{let n=(t-1)*5;return e.current.slice(n,n+5)},[t,e]);return(0,l.useEffect)(()=>{(async()=>{try{i.xhr("https://rossmarinaro.onrender.com/get-blogs","GET").then(t=>{t&&e.current.push(t)})}catch(e){console.log("There was an error. ",e)}})()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("table",{className:"blog-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Username"}),(0,a.jsx)("th",{children:"Title"}),(0,a.jsx)("th",{children:"Date"})]})}),(0,a.jsx)("tbody",{children:u.length?u.map(e=>(0,a.jsxs)("tr",{onClick:()=>{c(e),r("blog"===s?"list":"blog")},children:[e.username&&(0,a.jsx)("td",{children:e.username}),e.title&&(0,a.jsx)("td",{children:e.title}),e.date&&(0,a.jsx)("td",{children:e.date})]},e._id)):(0,a.jsx)("h3",{className:"mb-2 text-1xl font-semibold",style:{marginLeft:"100%"},children:" N/A "})})]}),(0,a.jsx)(d,{className:"pagination-bar",currentPage:t,totalCount:e.current.length,pageSize:5,onPageChange:e=>n(e)}),o?(0,a.jsx)(h,{props:o}):(0,a.jsx)("h3",{className:"mb-3 text-2xl font-semibold",style:{fontStyle:"italic",color:"#fff"},children:" No blogs loaded. "})]})}},6648:(e,t,n)=>{"use strict";n.d(t,{default:()=>l.a});var a=n(5601),l=n.n(a)},5601:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return r}});let a=n(9920),l=n(497),i=n(8173),s=a._(n(1241));function r(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=i.Image}},e=>{var t=t=>e(e.s=t);e.O(0,[173,130,215,744],()=>t(1378)),_N_E=e.O()}]);