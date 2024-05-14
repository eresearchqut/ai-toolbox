"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[3089,7918],{46:(e,n,r)=>{r.r(n),r.d(n,{default:()=>p});r(7294);var t=r(6010),s=r(2263),i=r(1944),o=r(5281),l=r(1460),a=r(9703),c=r(197),d=r(9985),h=r(5893);function u(e){const{metadata:n}=e,{siteConfig:{title:r}}=(0,s.Z)(),{blogDescription:t,blogTitle:o,permalink:l}=n,a="/"===l?r:o;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.d,{title:a,description:t}),(0,h.jsx)(c.Z,{tag:"blog_posts_list"})]})}function x(e){const{metadata:n,items:r,sidebar:t}=e;return(0,h.jsxs)(l.Z,{sidebar:t,children:[(0,h.jsx)(d.Z,{items:r}),(0,h.jsx)(a.Z,{metadata:n})]})}function p(e){return(0,h.jsxs)(i.FG,{className:(0,t.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,h.jsx)(u,{...e}),(0,h.jsx)(x,{...e})]})}},9703:(e,n,r)=>{r.d(n,{Z:()=>o});r(7294);var t=r(5999),s=r(2244),i=r(5893);function o(e){const{metadata:n}=e,{previousPage:r,nextPage:o}=n;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,t.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[r&&(0,i.jsx)(s.Z,{permalink:r,title:(0,i.jsx)(t.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,i.jsx)(s.Z,{permalink:o,title:(0,i.jsx)(t.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,n,r)=>{r.d(n,{Z:()=>o});r(7294);var t=r(9460),s=r(390),i=r(5893);function o(e){let{items:n,component:r=s.Z}=e;return(0,i.jsx)(i.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,i.jsx)(t.n,{content:n,children:(0,i.jsx)(r,{children:(0,i.jsx)(n,{})})},n.metadata.permalink)}))})}},9273:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(7294);function s(e,n){const[r,s]=(0,t.useState)((()=>{const r=localStorage.getItem(e);return r?JSON.parse(r):n}));return(0,t.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,s]}},4758:(e,n,r)=>{r.d(n,{Z:()=>d});var t=r(7294),s=r(5161),i=r(7747),o=r(9981),l=r(4225),a=r(5392),c=r(5893);function d(e){let{children:n}=e;const[r,d]=(0,t.useState)(!1),[h,u]=(0,t.useState)(!1),x=(0,s.ff)("gray.200","gray.500"),p=(0,s.ff)("gray.50","gray.800"),j=Array.isArray(n)?n.join(""):n;return(0,c.jsxs)(i.xu,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:x,bg:p,fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>d(!0),onMouseOut:()=>d(!1),position:"relative",children:[j,r&&(0,c.jsx)(o.u,{label:h?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,c.jsx)(l.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(j),u(!0),setTimeout((()=>u(!1)),1e3)},colorScheme:h?"green":"gray",children:(0,c.jsx)(a.T,{})})})]})}},4396:(e,n,r)=>{r.d(n,{De:()=>E,Cy:()=>y,g5:()=>v,Bz:()=>U,UJ:()=>S,Rs:()=>k,_3:()=>P,zj:()=>A,DD:()=>F,bD:()=>D,zh:()=>L,H4:()=>M,kA:()=>T,Hw:()=>I,R:()=>V,Ae:()=>w,p8:()=>b});var t=r(7747),s=r(3717),i=r(9981),o=r(2757),l=(r(7294),r(5106)),a=r(9563),c=r(4225),d=r(6115),h=r(5893);function u(e){let{choices:n,value:r,onChange:t=(()=>{})}=e;const{colorScheme:o}=(0,d.Q5)();return(0,h.jsx)(s.k,{flexGrow:"1",children:n.map((e=>{const{label:n,description:s}=Array.isArray(e)?{label:e[0],description:e[1]}:{label:e,description:""},l=n===r;return(0,h.jsx)(i.u,{label:s,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,h.jsx)(c.z,{flex:"1",variant:l?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>t(n),colorScheme:l?o:"gray",children:n})},n)}))})}var x=r(2140),p=r(8732),j=r(1680),m=r(1293),g=r(1023);function f(e){let{value:n=1,label:r,onChange:s=(()=>{}),...i}=e;const{colorScheme:o}=(0,d.Q5)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.xu,{width:"120px",children:(0,h.jsxs)(x.B,{size:"sm",children:[(0,h.jsx)(p.I,{type:"number",value:n,onChange:e=>s(parseInt(e.target.value)),textAlign:"center"}),(0,h.jsx)(j.xW,{width:"60px",p:0,justifyContent:"center",children:(0,h.jsx)(m.x,{mb:"0",children:r})})]})}),(0,h.jsxs)(g.iR,{display:"block",flex:"1",ml:2,value:n,focusThumbOnChange:!1,colorScheme:o,onChange:e=>s(e),...i,children:[(0,h.jsx)(g.Uj,{children:(0,h.jsx)(g.Ms,{})}),(0,h.jsx)(g.gs,{})]})]})}const v={nodes:1,cpuCores:4,ram:16,gpuModules:1};function y(e){let{title:n,description:r,type:c,selected:d,inputProps:x}=e;return(0,h.jsx)(t.xu,{children:(0,h.jsxs)(s.k,{align:"center",children:[(0,h.jsxs)(t.xu,{w:"120px",children:[d?(0,h.jsx)(l.r,{color:"green.500"}):(0,h.jsx)(i.u,{label:"Pick an option",children:(0,h.jsx)(a.a,{color:"orange.500"})}),(0,h.jsx)(i.u,{label:r,placement:"top",hasArrow:!0,children:(0,h.jsx)(o.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:n})})]}),(0,h.jsx)(t.bK,{size:"10px"}),"picker"===c&&(0,h.jsx)(u,{...x}),"slider"===c&&(0,h.jsx)(f,{...x})]})})}const b=(e,n)=>0!==e.length&&(Array.isArray(e[0])?e.map((e=>e[0])).includes(n):e.includes(n)),w=e=>"Lyra"===e?.service,Z=e=>["rVDI","Local"].includes(e?.service),C=e=>"GPU"===e?.hardware,T=(e,n)=>()=>{let r;return r="rVDI"===e?.service?["Linux","Windows"]:"Local"===e?.service?["Linux","macOS","Windows"]:["Linux"],{element:(t,s)=>(0,h.jsx)(y,{title:"OS",description:"The operating system to use for running the model.",type:"picker",selected:s,inputProps:{choices:r,value:e?.os,onChange:n("os")}},t),show:e=>Z(e),selected:e=>b(r,e?.os)}},P=(e,n)=>()=>{const r=["Any","AMD","Intel"];return{element:(t,s)=>(0,h.jsx)(y,{title:"CPU Vendor",type:"picker",selected:s,inputProps:{choices:r,value:e?.cpuVendor,onChange:n("cpuVendor")}},t),show:e=>w(e),selected:e=>b(r,e?.cpuVendor)}},k=(e,n)=>()=>{let r=[];return"AMD"===e?.cpuVendor?r=["7702","7713","75F3"]:"Intel"===e?.cpuVendor&&(r=["6140","6248","8260","E7-8890v4"]),{element:(t,s)=>(0,h.jsx)(y,{title:"CPU Model",type:"picker",selected:s,inputProps:{choices:r,value:e?.cpuModel,onChange:n("cpuModel")}},t),show:e=>w(e)&&e?.cpuVendor&&"Any"!==e.cpuVendor,selected:e=>b(r,e?.cpuModel)}},S=(e,n)=>()=>{let r;return r="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?128:"75F3"===e?.cpuModel?64:"6140"===e?.cpuModel?36:"6248"===e?.cpuModel?40:"8260"===e?.cpuModel?48:"E7-8890v4"===e?.cpuModel?96:128,{element:(t,s)=>(0,h.jsx)(y,{title:"CPU",type:"slider",selected:s,inputProps:{value:e?.cpuCores,label:"cores",min:1,max:r,step:1,onChange:n("cpuCores")}},t),show:e=>w(e),selected:e=>!0}},I=(e,n)=>()=>{let r;return r="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?1006:"75F3"===e?.cpuModel?503:"6140"===e?.cpuModel||"6248"===e?.cpuModel||"8260"===e?.cpuModel?186:"E7-8890v4"===e?.cpuModel?5794:1006,{element:(t,s)=>(0,h.jsx)(y,{title:"RAM",type:"slider",selected:s,inputProps:{value:e?.ram,label:"GB",min:8,max:r,step:8,onChange:n("ram")}},t),show:e=>w(e),selected:e=>!0}},M=(e,n)=>()=>{let r=[];return"CPU"===e?.hardware?r=["1 core, 8 GB","4 cores, 32 GB","8 cores, 64 GB","16 cores, 128GB"]:"GPU"===e?.hardware&&(r=["4 cores, 32 GB, T4 GPU","8 cores, 64 GB, T4 GPU"]),{element:(t,s)=>(0,h.jsx)(y,{title:"Job Profile",type:"picker",selected:s,inputProps:{choices:r,value:e?.jobProfile,onChange:n("jobProfile")}},t),show:e=>"JupyterHub"===e?.service&&e?.hardware,selected:e=>b(r,e?.jobProfile)}},L=(e,n)=>()=>{const r=["Any","NVIDIA","AMD"];return{element:(t,s)=>(0,h.jsx)(y,{title:"GPU Vendor",type:"picker",selected:s,inputProps:{choices:r,value:e?.gpuVendor,onChange:n("gpuVendor")}},t),show:e=>w(e)&&C(e),selected:e=>b(r,e?.gpuVendor)}},F=(e,n)=>()=>{let r=[];return"NVIDIA"===e?.gpuVendor?r=[["T4","Tesla T4 16 GB"],["P100","TESLA P100-PCIE-16GB"],["V100","TESLA V100-PCIE-32GB"],["A100","NVIDIA A100-SXM4-40GB"]]:"AMD"===e?.gpuVendor&&(r=[["MI100","AMD MI100 32 GB"],["MI210","AMD MI210 16 GB"]]),{element:(t,s)=>(0,h.jsx)(y,{title:"GPU Model",type:"picker",selected:s,inputProps:{choices:r,value:e?.gpuModel,onChange:n("gpuModel")}},t),show:e=>w(e)&&"GPU"===e?.hardware&&e?.gpuVendor&&"Any"!==e.gpuVendor,selected:e=>b(r,e?.gpuModel)}},D=(e,n)=>()=>({element:(r,t)=>(0,h.jsx)(y,{title:"GPU",type:"slider",selected:t,inputProps:{value:e?.gpuModules,label:"modules",min:1,max:8,step:1,onChange:n("gpuModules")}},r),show:e=>w(e)&&C(e),selected:e=>!0}),A=(e,n)=>()=>{let r=[];return r="JupyterHub"===e?.service?[["Conda","Conda package manager"]]:Z(e)&&["macOS","Windows"].includes(e?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Singularity","Singularity / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(t,s)=>(0,h.jsx)(y,{title:"Environment",description:"The Python package management system.",type:"picker",selected:s,inputProps:{choices:r,value:e?.environment,onChange:n("environment")}},t),show:e=>e?.service,selected:e=>b(r,e?.environment)}},V=(e,n)=>()=>{let r=[];return r="Lyra"===e?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(t,s)=>(0,h.jsx)(y,{title:"Tool",description:"The interface to use for running the model.",type:"picker",selected:s,inputProps:{choices:r,value:e?.tool,onChange:n("tool")}},t),show:e=>e?.service,selected:e=>b(r,e?.tool)}};function E(e){let{config:n,onConfigChange:r,getConfigGroups:s}=e;return(0,h.jsx)(t.xu,{children:Object.entries(s(n,r)).map((e=>{let[n,r]=e;return[n,r()]})).filter((e=>{let[r,t]=e;return t.show(n)})).map((e=>{let[r,t]=e;return t.element(r,t.selected(n))}))})}const U=(e,n)=>Object.values(n(e)).map((e=>e())).filter((n=>n.show(e))).every((n=>n.selected(e)))},6115:(e,n,r)=>{r.d(n,{DN:()=>h,Q5:()=>x,fD:()=>j});var t=r(2883),s=r(6089),i=r(2757),o=r(3990),l=r(3614),a=r(607),c=r(7294),d=r(5893);function h(e){let{title:n,subtitle:r,logo:o,alt:l,link:a}=e;return(0,d.jsxs)(t.r,{href:a,isExternal:!0,children:[(0,d.jsx)(s.E,{float:"left",verticalAlign:"middle",src:o,alt:l,display:"inline",height:"30px"}),(0,d.jsx)(i.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:n}),r&&(0,d.jsx)(i.X,{as:"h3",size:"xs",mt:4,children:r})]})}const u=(0,c.createContext)({colorScheme:"teal",pickerTextColor:"white",pickerTextShadow:"1px 1px 1px black"}),x=()=>(0,c.useContext)(u),p=e=>{let{children:n,...r}=e;return(0,d.jsx)(u.Provider,{value:{...r},children:n})};function j(e){let{colorScheme:n,header:r,body:t}=e;return(0,d.jsx)(p,{colorScheme:n,children:(0,d.jsxs)(o.Z,{children:[r&&(0,d.jsx)(l.O,{children:r}),(0,d.jsx)(a.e,{children:t})]})})}},5491:(e,n,r)=>{r.d(n,{Z:()=>ke});var t=r(7294),s=r(2757),i=r(4071),o=r(7334),l=r(7747),a=r(1293),c=r(4225),d=r(2215),h=r(8087),u=r(2185),x=r(273);const p=r.p+"assets/images/hf-logo-6fd51d26c652a2d5a3c17c9e76a4ea46.png";var j=r(2140),m=r(2735),g=r(5040),f=r(1557),v=r(991),y=r(5115),b=r(510),w=r(4693),Z=r(4698),C=r(2883),T=r(9981),P=r(3717),k=r(8371),S=r(4153),I=r(1679),M=r(5349);function L(e){let{url:n,params:r={},condition:s=!0,cache:i="force-cache",debounceTime:o=0}=e;const[l,a]=(0,t.useState)(null),[c,d]=(0,t.useState)(null),[h,u]=(0,t.useState)(s),x=new URL(n);x.search=new URLSearchParams(r).toString();const p=x.toString();return(0,t.useEffect)((()=>{const e=new AbortController,{signal:n}=e;if(!s)return e.abort(),void u(!1);u(!0);const r=setTimeout((()=>fetch(p,{signal:n,cache:i}).then((e=>e.json())).then((e=>{n.aborted||(a(e),d(null),u(!1))})).catch((e=>{n.aborted||(d(e),u(!1))}))),o);return()=>{clearTimeout(r),e.abort()}}),[p,s]),{data:l,error:c,loading:h}}var F=r(6370),D=r(5893);function A(e){let{model:n,onModelChange:r,models:t}=e;return(0,D.jsxs)(F.Qc,{openOnFocus:!0,creatable:!0,onChange:r,suggestWhenEmpty:!0,children:[(0,D.jsxs)(j.B,{children:[(0,D.jsx)(F.Vp,{placeholder:"Search for a model",variant:"filled",value:n,onChange:e=>r(e.target.value)}),n&&(0,D.jsx)(m.x,{children:(0,D.jsx)(c.z,{size:"xs",onClick:()=>r(""),children:(0,D.jsx)(I.T,{})})})]}),(0,D.jsxs)(F.Jm,{children:[t.map((e=>(0,D.jsx)(F.Gb,{value:e.id,children:e.id},e.id))),(0,D.jsx)(F.JU,{children:e=>{let{value:n}=e;return(0,D.jsxs)("span",{children:["Use custom '",n,"' model"]})}})]})]})}const V=e=>Intl.NumberFormat(navigator.language,{notation:"compact",maximumFractionDigits:1}).format(e),E={F32:["Single Precision Floating Point",32],F16:["Half Precision Floating Point",16],BF16:["Brain Floating Point",16],I8:["Integer",8],I4:["Integer",4]},U=e=>Object.entries(e).map((e=>{let[n,r]=e;const[t,s]=E[n];return`${V(r)} ${t} (${s} bits)`})).join(", "),G=e=>`${V(Object.entries(e).reduce(((e,n)=>{let[r,t]=n;const[,s]=E[r];return e+t*s}),0)/8589934592)} GB`;function O(e){let{model:n,knownModelData:r,modelData:t,modelLoading:s}=e;return s?(0,D.jsx)(g.E,{colorScheme:"yellow",isIndeterminate:!0}):n&&(r?.id||t?.id)?(0,D.jsx)(f.x,{children:(0,D.jsx)(v.i,{variant:"simple",size:"sm",children:(0,D.jsxs)(y.p,{children:[(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"Link"}),(0,D.jsx)(Z.Td,{children:(0,D.jsxs)(C.r,{href:`https://hf.co/${n}`,isExternal:!0,children:[`hf.co/${n}`,(0,D.jsx)(M.h,{marginLeft:1})]})})]}),t?.lastModified&&(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"Last Modified"}),(0,D.jsx)(Z.Td,{children:new Date(t.lastModified).toLocaleString()})]}),(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"Likes"}),(0,D.jsx)(Z.Td,{children:V(t?.likes??r?.likes)})]}),(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"Downloads"}),(0,D.jsx)(Z.Td,{children:V(t?.downloads??r?.downloads)})]}),t?.cardData?.license&&(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"License"}),(0,D.jsx)(Z.Td,{children:t.cardData.license})]}),t?.safetensors?.parameters&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"Parameters"}),(0,D.jsx)(Z.Td,{children:U(t.safetensors.parameters)})]}),(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:(0,D.jsx)(T.u,{label:"Minimum size of the model in memory according to an approximate calculation. Does not include memory required for inference.",children:(0,D.jsx)("span",{children:"Minimum Size"})})}),(0,D.jsx)(Z.Td,{children:G(t.safetensors.parameters)})]})]}),(t?.tags??r?.tags)&&(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"Tags"}),(0,D.jsx)(Z.Td,{children:(0,D.jsx)(P.k,{gap:2,flexWrap:"wrap",children:(t?.tags??r?.tags).map((e=>(0,D.jsx)(k.Vp,{size:"md",children:(0,D.jsx)(C.r,{href:`https://huggingface.co/models?other=${e}`,isExternal:!0,children:e})},e)))})})]}),t?.config?.architectures&&(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"Architectures"}),(0,D.jsx)(Z.Td,{children:(0,D.jsx)(P.k,{gap:2,flexWrap:"wrap",children:t.config.architectures.map((e=>(0,D.jsx)(k.Vp,{size:"md",children:e},e)))})})]}),t?.library_name&&(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"Library"}),(0,D.jsx)(Z.Td,{children:t.library_name})]}),t?.cardData?.co2_eq_emissions&&(0,D.jsxs)(b.Tr,{children:[(0,D.jsx)(w.Th,{children:"CO2 Emissions"}),(0,D.jsxs)(Z.Td,{children:[V(t.cardData.co2_eq_emissions.emissions/1e3)," kg"]})]})]})})}):(0,D.jsx)(D.Fragment,{})}function z(e){let{model:n,onModelChange:r,task:t}=e;const{data:s,error:i,loading:o}=L({url:"https://huggingface.co/api/models",params:{pipeline_tag:t,sort:"likes",limit:1e3,direction:-1}}),{data:a,loading:c}=L({url:`https://huggingface.co/api/models/${n}`,condition:""!==n,debounceTime:500}),d=s??[],h=d.find((e=>e.id===e));return i?(0,D.jsxs)(S.b,{status:"error",children:["Error retrieving models: ",i.message]}):o?(0,D.jsx)(g.E,{colorScheme:"yellow",isIndeterminate:!0}):(0,D.jsxs)(l.xu,{children:[(0,D.jsx)(A,{model:n,onModelChange:r,models:d}),(0,D.jsx)(O,{model:n,knownModelData:h,modelData:a,modelLoading:c})]})}var R=r(9289),_=r(7239),B=r(5161),H=r(3623),q=r(9206),$=r(483),J=r(4758),N=r(959),Q=r(4461),W=r(4124),X=r(4028),K=r(889),Y=r(7405);function ee(e,n){let r="hf_pipeline.sif";return"GPU"===e?"NVIDIA"===n?r="hf_pipeline_nvidia.sif":"AMD"===n&&(r="hf_pipeline_amd.sif"):"CPU"===e&&(r="hf_pipeline_cpu.sif"),r}function ne(e){let{hardware:n,gpuVendor:r}=e;const t=ee(n,r);let s="cpu";return"GPU"===n&&("NVIDIA"===r?s="nvidia":"AMD"===r&&(s="amd")),(0,D.jsxs)(J.Z,{children:["singularity build ",t," docker://ghcr.io/eresearchqut/ai-toolbox/hf_pipeline:",s]})}function re(e){let{hardware:n,gpuVendor:r,service:t}=e;const s=[];"GPU"===n&&s.push("--nv"),"Lyra"===t&&s.push("--bind /:/lyra","--bind /work:/work","--contain","--cleanenv");const i=s.length>0?s.join(" ")+" ":"",o="Lyra"===t?"/work/ai-toolbox/containers/":"";let l=ee(n,r);return(0,D.jsxs)(J.Z,{children:["singularity run ",i,o,l," bash"]})}function te(e){let{hardware:n,gpuVendor:r,service:t,environment:s,tool:i}=e;const o=["rVDI","Local"].includes(t),l=o&&"Notebook"===i;return(0,D.jsxs)(D.Fragment,{children:["Singularity"===s&&(0,D.jsxs)(D.Fragment,{children:[o&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(q.Z,{children:"Install Singularity (if it has not been installed)"}),(0,D.jsxs)($.Z,{children:["Follow the instructions ",(0,D.jsx)(C.r,{href:"https://sylabs.io/docs/",isExternal:!0,color:"blue.500",children:"here"})," to install singularity."]}),(0,D.jsx)(q.Z,{children:"Set up the container"}),(0,D.jsx)($.Z,{children:"Build the container:"}),(0,D.jsx)(ne,{hardware:n,gpuVendor:r})]}),"Lyra"===t&&(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(q.Z,{children:"Set up the container"})}),(0,D.jsx)($.Z,{children:"Run the container:"}),(0,D.jsx)(re,{hardware:n,gpuVendor:r,service:t})]}),"Conda"===s&&(0,D.jsxs)(D.Fragment,{children:["JupyterHub"!==t&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(q.Z,{children:"Install Conda (if it has not been installed)"}),(0,D.jsxs)(N.m,{children:[(0,D.jsxs)(Q.t,{children:[(0,D.jsx)(W.O,{children:"mamba"}),(0,D.jsx)(W.O,{children:"conda"})]}),(0,D.jsxs)(X.n,{children:[(0,D.jsxs)(K.x,{children:[(0,D.jsx)($.Z,{children:"Download the latest version of micromamba"}),(0,D.jsx)(J.Z,{children:"wget https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh"}),(0,D.jsx)($.Z,{children:"Run the installer and follow the prompts to install micromamba:"}),(0,D.jsx)(J.Z,{children:"bash install.sh -p ~/micromamba"}),(0,D.jsx)($.Z,{children:"Create an alias for micromamba"}),(0,D.jsx)(J.Z,{children:'echo "alias conda=micromamba" >> ~/.bashrc'}),(0,D.jsx)($.Z,{children:"Refresh the shell:"}),(0,D.jsx)(J.Z,{children:"source ~/.bashrc"})]}),(0,D.jsxs)(K.x,{children:[(0,D.jsxs)(S.b,{status:"warning",children:[(0,D.jsx)(Y.z,{}),"Packages take a long time to install with conda. We recommend using mamba instead."]}),(0,D.jsx)($.Z,{children:"Download the latest version of miniconda:"}),(0,D.jsx)(J.Z,{children:"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"}),(0,D.jsx)($.Z,{children:"Run the installer and follow the prompts to install conda:"}),(0,D.jsx)(J.Z,{children:"bash Miniconda3-latest-Linux-x86_64.sh"}),(0,D.jsx)($.Z,{children:"Refresh the shell:"}),(0,D.jsx)(J.Z,{children:"source ~/.bashrc"})]})]})]})]}),(0,D.jsx)(q.Z,{children:"Set up the conda environment"}),(0,D.jsx)($.Z,{children:"Create the conda environment (if it doesn't exist):"}),(0,D.jsx)(J.Z,{children:"conda create --name hf"}),(0,D.jsx)($.Z,{children:"Activate the conda environment:"}),(0,D.jsx)(J.Z,{children:"conda activate hf"}),(0,D.jsx)($.Z,{children:"Install the transformers package:"}),(0,D.jsx)(J.Z,{children:"conda install -c huggingface -c conda-forge transformers"}),(0,D.jsx)($.Z,{children:"Install pytorch:"}),(0,D.jsx)(J.Z,{children:"conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision torchaudio pytorch-cuda=12.1"}),(0,D.jsx)($.Z,{children:"Install the gradio package:"}),(0,D.jsx)(J.Z,{children:"conda install -c conda-forge gradio"}),l&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)($.Z,{children:"Install JupyterLab:"}),(0,D.jsx)(J.Z,{children:"conda install -c conda-forge jupyterlab"})]})]}),"venv"===s&&(0,D.jsxs)(D.Fragment,{children:[o&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(q.Z,{children:"Install Python (if it has not been installed)"}),(0,D.jsxs)($.Z,{children:["Follow the instructions ",(0,D.jsx)(C.r,{href:"https://www.python.org/downloads/",isExternal:!0,color:"blue.500",children:"here"})," to install python."]})]}),"Lyra"===t&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(q.Z,{children:"Python module"}),(0,D.jsx)($.Z,{children:"Source the module script:"}),(0,D.jsx)(J.Z,{children:"source /etc/profile.d/modules.sh"}),(0,D.jsx)($.Z,{children:"Load the python module:"}),(0,D.jsx)(J.Z,{children:"module load python/3.10.8-gcccore-12.2.0-bare"}),(0,D.jsx)($.Z,{children:"Check the python version"}),(0,D.jsx)(J.Z,{children:"python --version"})]}),(0,D.jsx)(q.Z,{children:"Set up the virtual environment"}),(0,D.jsx)($.Z,{children:"Create the virtual environment (if it doesn't exist):"}),(0,D.jsx)(J.Z,{children:"python -m venv hf-venv"}),(0,D.jsx)($.Z,{children:"Activate the virtual environment:"}),(0,D.jsx)(J.Z,{children:"source hf-venv/bin/activate"}),(0,D.jsx)($.Z,{children:"Install the base dependencies:"}),(0,D.jsx)(J.Z,{children:"pip install gradio 'transformers[torch]'"}),l&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)($.Z,{children:"Install JupyterLab:"}),(0,D.jsx)(J.Z,{children:"pip install jupyterlab"})]})]})]})}var se=r(6101);function ie(e){let{service:n,tool:r,task:t,model:s,port:i}=e;const o=["rVDI","Local"].includes(n);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(q.Z,{children:"Run the gradio server"}),"CLI"===r&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)($.Z,{children:"Start the gradio server:"}),(0,D.jsxs)(J.Z,{children:["gradio pipeline ",t," --model=",s,' --server-name="0.0.0.0" --server-port=',i,' --device-map="auto"']})]}),"Script"===r&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)($.Z,{children:["Save the following to a file named ",(0,D.jsx)(se.E,{children:"hf_pipeline.py"})]}),(0,D.jsx)(J.Z,{children:`import gradio\nimport transformers\nimport sys\n\nTASK = "${t}"\nMODEL = "${s}"\nPORT = int(sys.argv[1])\n\nprint(f"Starting: {TASK=} {MODEL=} {PORT=}", file=sys.stderr)\nprint("Please wait while the model loads into memory...", file=sys.stderr)\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`}),(0,D.jsx)($.Z,{children:"Run the script:"}),(0,D.jsxs)(J.Z,{children:["python hf_pipeline.py ",i]})]}),"Notebook"===r&&(0,D.jsxs)(D.Fragment,{children:[o&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)($.Z,{children:"Run the following command to start the server:"}),(0,D.jsx)(J.Z,{children:"python -m jupyterlab"}),(0,D.jsx)($.Z,{children:"Open the link to the jupyter server in your browser, and create a new notebook."})]}),(0,D.jsx)($.Z,{children:"Execute the following code in the notebook:"}),(0,D.jsx)(J.Z,{children:`import gradio\nimport transformers\n\nTASK = "${t}"\nMODEL = "${s}"\nPORT = ${i}\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`})]})]})}var oe=r(1400);function le(e){let{service:n,port:r,node:t,username:s}=e;return(0,D.jsxs)(D.Fragment,{children:["Lyra"===n&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(q.Z,{children:"Forward the port"}),(0,D.jsx)($.Z,{children:"In a new terminal window, run the following command to forward traffic from the server to your local machine:"}),""===s&&(0,D.jsx)($.Z,{children:(0,D.jsxs)("i",{children:["Replace ",(0,D.jsx)(se.E,{children:"qutusername"})," with your QUT username."]})}),""===t&&(0,D.jsx)($.Z,{children:(0,D.jsxs)("i",{children:["Replace ",(0,D.jsx)(se.E,{children:"node"})," with the name of the node the job is running on."]})}),(0,D.jsxs)(J.Z,{children:["ssh -L ",r,":",t||"node",":",r," ",s||"qutusername","@lyra.qut.edu.au"]})]}),(0,D.jsx)(q.Z,{children:"Access the tool"}),(0,D.jsxs)($.Z,{children:["In your web browser, navigate to the following address: ",(0,D.jsxs)(C.r,{href:`http://localhost:${r}`,isExternal:!0,color:"blue.500",children:["http://localhost:",r]})]}),(0,D.jsxs)(J.Z,{children:["http://localhost:",r]})]})}var ae=r(6240),ce=r(9273),de=r(665);const he=/^[a-z0-9]*$/;function ue(e){let{task:n,model:r,config:i,port:o}=e;const[a,c]=(0,ce.Z)("qutUsername","qutusername"),[d,h]=(0,t.useState)("");return(0,D.jsxs)(l.xu,{children:["Lyra"===i.service&&(0,D.jsx)(de.Z,{label:"QUT Username",placeholder:"username",value:a,onChange:c,pattern:he,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),(0,D.jsx)(H.s,{service:i.service,username:a}),"Lyra"===i.service&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(oe.Wh,{jobType:"Interactive",hardware:i.hardware,cpuVendor:i.cpuVendor,cpuModel:i.cpuModel,cpuCores:i.cpuCores,ram:i.ram,gpuVendor:i.gpuVendor,gpuModel:i.gpuModel,gpuModules:i.gpuModules}),(0,D.jsx)(de.Z,{label:"Node name",placeholder:"node",value:d,onChange:h,pattern:he,helperText:"Optionally enter the name of the node so that it can be pre-populated in the commands below.",errorText:"Node name must only contain lowercase letters and numbers"})]}),"JupyterHub"===i.service&&(0,D.jsx)(oe.CJ,{jobProfile:i.jobProfile}),"rVDI"===i.service&&(0,D.jsx)(oe.HW,{hardware:i.hardware,os:i.os}),"Local"===i.service&&(0,D.jsx)(oe.Bc,{hardware:i.hardware,os:i.os}),(0,D.jsx)(te,{hardware:i.hardware,gpuVendor:i.gpuVendor,service:i.service,tool:i.tool,environment:i.environment}),(0,D.jsx)(ie,{service:i.service,tool:i.tool,task:n,model:r,port:o}),(0,D.jsx)(le,{service:i.service,port:o,node:d,username:a}),(0,D.jsxs)(l.xu,{position:"relative",padding:"10",children:[(0,D.jsx)(R.i,{}),(0,D.jsx)(_.u,{bg:(0,B.ff)("white","gray.700"),px:"4",children:(0,D.jsx)(s.X,{as:"h2",size:"md",my:4,children:"Teardown steps"})})]}),(0,D.jsx)(ae.v,{service:i.service,environment:i.environment,usingTool:!0})]})}var xe=r(4396),pe=r(3804);function je(e){let{presets:n,onPresetChange:r}=e;return(0,D.jsx)(l.xu,{children:(0,D.jsx)(pe.QI,{p:"0",children:n.map(((e,n)=>(0,D.jsx)(pe.HC,{onClick:()=>r(e),children:(0,D.jsxs)(C.r,{children:[e.name," ",(0,D.jsx)(x.m,{mx:"2px"})]})},n)))})})}var me=r(8719),ge=r(3990),fe=r(607),ve=r(2923);function ye(e){let{choices:n,page:r,showPage:t=!1,onPageChange:s=((e,n)=>{}),clickable:i=!1}=e;if(t)return(0,D.jsxs)(l.xu,{children:[r,(0,D.jsx)(c.z,{leftIcon:(0,D.jsx)(ve.R,{}),position:"absolute",right:"4",top:"4",size:"sm",onClick:()=>s(!1,void 0),children:"Back"})]});const o=1===n.length?1:3===n.length?3:2;return(0,D.jsx)(me.M,{columns:o,spacing:2,children:n.map(((e,n)=>(0,D.jsx)(l.xu,{onClick:i?()=>s(!0,n):null,cursor:i?"pointer":"auto",children:(0,D.jsx)(ge.Z,{height:"100%",children:(0,D.jsx)(fe.e,{children:e})})},n)))})}var be=r(6115);function we(e){let{children:n,...r}=e;return(0,D.jsx)(s.X,{as:"h2",size:"md",marginBottom:0,...r,children:n})}function Ze(e){let{children:n}=e;return(0,D.jsxs)(i.K,{py:3,children:[(0,D.jsx)(we,{display:"inline-block",flex:"1",textAlign:"left",children:n}),(0,D.jsx)(o.X,{})]})}function Ce(e){let{presets:n,onPresetChange:r}=e;return(0,D.jsxs)(l.xu,{children:[(0,D.jsx)(we,{children:"Preset configurations"}),(0,D.jsx)(je,{presets:n,onPresetChange:r})]})}function Te(e){let{onSelected:n}=e;return(0,D.jsxs)(l.xu,{children:[(0,D.jsx)(we,{children:"Custom configuration"}),(0,D.jsx)(a.x,{my:2,children:"Choose the model, service, and settings."}),(0,D.jsx)(c.z,{size:"md",onClick:n,rightIcon:(0,D.jsx)(x.m,{}),children:"Start"})]})}const Pe=function(e,n){void 0===n&&(n=()=>{});const r=r=>t=>n({...e,[r]:t});return{service:()=>{const n=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"],["Local","Your own workstation"]];return{element:(t,s)=>(0,D.jsx)(xe.Cy,{title:"Service",description:"The service to use for running the model.",type:"picker",selected:s,inputProps:{choices:n,value:e?.service,onChange:r("service")}},t),show:e=>!0,selected:e=>(0,xe.p8)(n,e?.service)}},os:(0,xe.kA)(e,r),hardware:()=>{let n;return n=(0,xe.Ae)(e)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"]],{element:(t,s)=>(0,D.jsx)(xe.Cy,{title:"Hardware",description:"The hardware to use for running the model.",type:"picker",selected:s,inputProps:{choices:n,value:e?.hardware,onChange:r("hardware")}},t),show:e=>e?.service,selected:e=>(0,xe.p8)(n,e?.hardware)}},cpuVendor:(0,xe._3)(e,r),cpuModel:(0,xe.Rs)(e,r),cpuCores:(0,xe.UJ)(e,r),ram:(0,xe.Hw)(e,r),jobProfile:(0,xe.H4)(e,r),gpuVendor:(0,xe.zh)(e,r),gpuModel:(0,xe.DD)(e,r),gpuModules:(0,xe.bD)(e,r),environment:(0,xe.zj)(e,r),tool:(0,xe.R)(e,r)}};function ke(e){let{title:n,task:r,presets:s=[]}=e;const[i,o]=(0,t.useState)(""),[l]=(0,t.useState)(Math.floor(7e3*Math.random())+3e3),[c,x]=(0,t.useState)(xe.g5),[j,m]=(0,t.useState)(!1),[g,f]=(0,t.useState)([0,1,2]),v=""!==i,y=(0,xe.Bz)(c,Pe);return(0,D.jsx)(be.fD,{colorScheme:"yellow",header:(0,D.jsx)(be.DN,{title:n,logo:p,alt:"HuggingFace logo",link:`https://huggingface.co/tasks/${r}`}),body:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(a.x,{mb:6,children:"Step-by-step instructions to interact through your web browser with a HuggingFace model, running on Lyra, JupyterHub, rVDI, or your own machine."}),(0,D.jsx)(ye,{choices:[(0,D.jsx)(Ce,{presets:s,onPresetChange:e=>{o(e.model),x(e.config),m(!0),f([2])}}),(0,D.jsx)(Te,{onSelected:()=>{o(""),x(xe.g5),m(!0),f([0,1,2])}})],page:(0,D.jsxs)(d.U,{allowMultiple:!0,defaultIndex:g,allowToggle:!0,children:[(0,D.jsxs)(h.Q,{children:[(0,D.jsx)(Ze,{children:"Model"}),(0,D.jsx)(u.H,{children:(0,D.jsx)(z,{model:i,onModelChange:o,task:r})})]}),v&&(0,D.jsxs)(h.Q,{children:[(0,D.jsx)(Ze,{children:"Configuration"}),(0,D.jsx)(u.H,{children:(0,D.jsx)(xe.De,{config:c,onConfigChange:x,getConfigGroups:Pe})})]}),v&&y&&(0,D.jsxs)(h.Q,{children:[(0,D.jsx)(Ze,{children:"Instructions"}),(0,D.jsx)(u.H,{children:(0,D.jsx)(ue,{task:r,model:i,config:c,port:l})})]})]}),showPage:j,onPageChange:e=>m(e)})]})})}},3623:(e,n,r)=>{r.d(n,{s:()=>Z});var t=r(9206),s=r(483),i=r(4153),o=r(7405),l=r(2883),a=r(7747),c=r(1293),d=r(6101),h=r(7294),u=r(959),x=r(4461),p=r(4124),j=r(4028),m=r(889),g=r(5893);function f(e){let{children:n}=e;const[r,t]=(0,h.useState)(-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0);return(0,g.jsxs)(u.m,{index:r,onChange:t,children:[(0,g.jsxs)(x.t,{children:[(0,g.jsx)(p.O,{children:"Windows"}),(0,g.jsx)(p.O,{children:"macOS"}),(0,g.jsx)(p.O,{children:"Linux"})]}),(0,g.jsxs)(j.n,{children:[(0,g.jsx)(m.x,{p:0,children:n[0]}),(0,g.jsx)(m.x,{p:0,children:n[1]}),(0,g.jsx)(m.x,{p:0,children:n[2]})]})]})}var v=r(4758);function y(e){let{username:n}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.Z,{children:"Connect to Lyra"}),(0,g.jsxs)(i.b,{status:"info",children:[(0,g.jsx)(o.z,{}),"If you are off-campus, you will first need to connect to the QUT network using the VPN."]}),(0,g.jsxs)(s.Z,{children:["See the instructions ",(0,g.jsx)(l.r,{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",isExternal:!0,color:"blue.500",children:"here"})," for more information about how to use Lyra."]}),(0,g.jsxs)(f,{children:[(0,g.jsxs)(a.xu,{children:[(0,g.jsxs)(i.b,{status:"info",children:[(0,g.jsx)(o.z,{}),(0,g.jsxs)(c.x,{mb:"0",children:["You may need to enable the ",(0,g.jsx)(l.r,{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",isExternal:!0,color:"blue.500",children:"ssh feature"})," in Windows."]})]}),(0,g.jsx)(s.Z,{children:"In Windows Terminal, Powershell, or cmd.exe, run the following command to connect to Lyra:"})]}),(0,g.jsx)(a.xu,{children:(0,g.jsx)(s.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,g.jsx)(a.xu,{children:(0,g.jsx)(s.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===n&&(0,g.jsx)(s.Z,{children:(0,g.jsxs)("i",{children:["Replace ",(0,g.jsx)(d.E,{children:"qutusername"})," with your QUT username."]})}),(0,g.jsxs)(v.Z,{children:["ssh ",n||"qutusername","@lyra.qut.edu.au"]})]})}function b(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.Z,{children:"Connect to JupyterHub"}),(0,g.jsxs)(s.Z,{children:["Visit ",(0,g.jsx)(l.r,{href:"https://jupyterhub.eres.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://jupyterhub.eres.qut.edu.au"})," and log in with your QUT username and password."]})]})}function w(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.Z,{children:"Connect to rVDI"}),(0,g.jsxs)(s.Z,{children:["See the instructions ",(0,g.jsx)(l.r,{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",isExternal:!0,color:"blue.500",children:"here"})," for more information."]}),(0,g.jsxs)(s.Z,{children:["If you have not already, download and install the VMware Horizon client from ",(0,g.jsx)(l.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://rvdi.qut.edu.au"}),"."]}),(0,g.jsxs)(s.Z,{children:["In the VMware Horizon client, connect to ",(0,g.jsx)(l.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"rvdi.qut.edu.au"})," and log in with your QUT username and password."]})]})}function Z(e){let{service:n,username:r}=e;return(0,g.jsxs)(g.Fragment,{children:["Lyra"===n&&(0,g.jsx)(y,{username:r}),"JupyterHub"===n&&(0,g.jsx)(b,{}),"rVDI"===n&&(0,g.jsx)(w,{}),"Local"===n&&(0,g.jsx)(g.Fragment,{})," "]})}},665:(e,n,r)=>{r.d(n,{Z:()=>x});var t=r(7294),s=r(8049),i=r(9371),o=r(2140),l=r(8732),a=r(2735),c=r(7821),d=r(9206),h=r(9754),u=r(5893);function x(e){let{label:n,placeholder:r,value:x,onChange:p,pattern:j,helperText:m,errorText:g}=e;const[f,v]=(0,t.useState)(x),[y,b]=(0,t.useState)(!0);(0,t.useEffect)((()=>{b(j.test(x)),v(x)}),[x]);return(0,u.jsxs)(s.NI,{isInvalid:!y,children:[(0,u.jsx)(i.l,{children:(0,u.jsx)(d.Z,{children:n})}),(0,u.jsxs)(o.B,{children:[(0,u.jsx)(l.I,{type:"text",placeholder:r,value:f,onChange:e=>{v(e.target.value),p(e.target.value)},pattern:j}),y&&""!==x&&(0,u.jsx)(a.x,{children:(0,u.jsx)(h.n,{color:"green.500"})})]}),!y&&(0,u.jsx)(c.J1,{children:g}),(0,u.jsx)(s.Q6,{children:m})]})}},1400:(e,n,r)=>{r.d(n,{Bc:()=>h,CJ:()=>c,HW:()=>d,Wh:()=>a});var t=r(4758),s=r(6101),i=r(9206),o=r(483),l=r(5893);function a(e){let{jobType:n,nodes:r,hardware:a,cpuVendor:c,cpuModel:d,cpuCores:h,ram:u,gpuVendor:x,gpuModel:p,gpuModules:j}=e;const m=[`select=${"Interactive"===n?1:r}`,`ncpus=${h}`,`mem=${u}gb`];return"Any"!==c&&d&&m.push(`cputype=${d}`),"GPU"===a&&(m.push(`ngpus=${j}`),"Any"!==x&&p&&m.push(`gputype=${p}`)),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{children:"Schedule a job"}),(0,l.jsxs)(o.Z,{children:["In the ssh session, run the following command to schedule the ",n.toLowerCase()," job:"]}),(0,l.jsx)(t.Z,{children:`qsub${"Interactive"===n?" -I":""} -l walltime=1:00:00 -l ${m.join(":")}`}),"Interactive"===n&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.Z,{children:["Wait for the job to start, and take note of the node you are on (eg. ",(0,l.jsx)(s.E,{children:"cl5n042"}),")."]})}),"Batch"===n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{children:"You can check the status of your jobs by running the following:"}),(0,l.jsx)(t.Z,{children:"qstat -u $USER"})]})]})}function c(e){let{jobProfile:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{children:"Schedule a job"}),(0,l.jsxs)(o.Z,{children:["From the JupyterHub home page, click ",(0,l.jsx)(s.E,{children:"Start My Server"})," to schedule a job."]}),(0,l.jsxs)(o.Z,{children:["From the list of available options, select the one containing ",(0,l.jsxs)(s.E,{children:["Lyra - ",n]})," and click the start button."]})]})}function d(e){let n,{hardware:r,os:t}=e;return n="Linux"===t?"Red Hat VDI Medium with GPU":"GPU"===r?"eResearch Large with GPU":"eResearch General VDI",(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{children:"Start a session"}),(0,l.jsxs)(o.Z,{children:["From the list of machines, select the one named ",(0,l.jsx)(s.E,{children:n})]})]})}function h(e){let{hardware:n,os:r}=e}},6240:(e,n,r)=>{r.d(n,{v:()=>d});var t=r(9206),s=r(483),i=r(4153),o=r(7405),l=r(6409),a=r(6101),c=r(5893);function d(e){let{service:n,environment:r,usingTool:d=!1}=e;return(0,c.jsxs)(c.Fragment,{children:["Lyra"===n&&(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(i.b,{status:"warning",variant:"left-accent",children:[(0,c.jsx)(o.z,{}),"Lyra is a shared resource. Please be considerate of other users and stop the job when you are finished."]})}),d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.Z,{children:"Stop the server"}),(0,c.jsxs)(s.Z,{children:["Once you have finished using the tool, stop the server by pressing ",(0,c.jsx)(l.T,{children:"Ctrl"})," + ",(0,c.jsx)(l.T,{children:"C"})," in the terminal."]}),(0,c.jsx)(s.Z,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."})]}),"Singularity"===r&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.Z,{children:"Exit the container"}),(0,c.jsxs)(s.Z,{children:["Exit the container by pressing ",(0,c.jsx)(l.T,{children:"Ctrl"})," + ",(0,c.jsx)(l.T,{children:"D"}),", or typing ",(0,c.jsx)(a.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.Z,{children:"Stop the job"}),(0,c.jsxs)(s.Z,{children:["Stop the job by pressing ",(0,c.jsx)(l.T,{children:"Ctrl"})," + ",(0,c.jsx)(l.T,{children:"D"}),", or typing ",(0,c.jsx)(a.E,{children:"exit"})," in the terminal."]}),(0,c.jsx)(t.Z,{children:"Exit the ssh session"}),(0,c.jsxs)(s.Z,{children:["Exit the ssh session on Lyra by pressing ",(0,c.jsx)(l.T,{children:"Ctrl"})," + ",(0,c.jsx)(l.T,{children:"D"}),", or typing ",(0,c.jsx)(a.E,{children:"exit"})," in the terminal."]}),d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.Z,{children:"Stop port forwarding"}),(0,c.jsxs)(s.Z,{children:["Stop local port forwarding by pressing ",(0,c.jsx)(l.T,{children:"Ctrl"})," + ",(0,c.jsx)(l.T,{children:"D"}),", or typing ",(0,c.jsx)(a.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})]})}},9206:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(2757),s=r(5893);function i(e){let{children:n}=e;return(0,s.jsx)(t.X,{as:"h3",size:"sm",my:4,children:n})}},483:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(1293),s=r(5893);function i(e){let{children:n}=e;return(0,s.jsx)(t.x,{my:4,children:n})}},1769:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var t=r(1220),s=r(5491);const i={...t.Z,HuggingFacePipeline:s.Z}}}]);