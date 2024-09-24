"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[3671],{9273:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(7294);function s(e,r){const[n,s]=(0,t.useState)((()=>{const n=localStorage.getItem(e);return n?JSON.parse(n):r}));return(0,t.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,s]}},2233:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(5349),s=n(2883),o=n(5893);function i(e){let{textBeforeLink:r="",link:n={href:"",text:"",color:void 0,isExternal:!1},hasExternalIcon:i=!1,textAfterLink:l=""}=e;return(0,o.jsxs)(o.Fragment,{children:[r,(0,o.jsxs)(s.r,{color:n?.color?n.color:"teal.500",href:n.href,isExternal:n?.isExternal,children:[n.text,i&&(0,o.jsx)(t.h,{mx:"2px"})]}),l]})}},8615:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(2757),s=n(5161),o=n(7747),i=n(4796),l=n(5893);function a(e){let{children:r}=e;return(0,l.jsx)(t.X,{size:"xs",border:"1px",backgroundColor:(0,s.ff)("gray.100","gray.800"),borderColor:(0,s.ff)("gray.200","gray.500"),m:"0",p:"2",children:r})}function c(e){let{command:r,output:n,editable:t}=e;return(0,l.jsxs)(o.xu,{border:"1px",borderColor:"gray.200",rounded:"md",overflow:"hidden",children:[(0,l.jsxs)(o.xu,{children:[(0,l.jsx)(a,{children:"Command"}),(0,l.jsx)(i.Z,{editable:t,type:"input",contentProps:{ariaLabel:"Command text",rounded:"",...!n&&{borderBottomRadius:"md"},borderRadius:"0",mb:0},children:r})]}),n&&(0,l.jsxs)(o.xu,{children:[(0,l.jsx)(a,{children:"Output"}),(0,l.jsx)(i.Z,{editable:t,type:"output",wrap:!1,contentProps:{ariaLabel:"Output text",rounded:"",borderBottomRadius:"md",borderRadius:"0",mb:0},children:n})]})]})}},4796:(e,r,n)=>{n.d(r,{Z:()=>x});var t=n(5392),s=n(5161),o=n(6344),i=n(7747),l=n(5744),a=n(8589),c=n(2568),d=n(4225),u=n(7294),h=n(5893);function x(e){let{children:r,editable:n=!1,type:x="input",defaultRows:p=10,wrap:j=!0,contentProps:m}=e;const[g,b]=(0,u.useState)(!1),[f,y]=(0,u.useState)(!1),w=(0,s.ff)("gray.200","gray.500");let v;v="input"===x?(0,s.ff)("gray.50","gray.800"):"output"===x?(0,s.ff)("gray.200","gray.700"):(0,s.ff)("gray.50","gray.800");const T={textWrap:j?"wrap":"nowrap"},C=n?o.C:i.xu,[Z,P]=(0,u.useState)(Array.isArray(r)?r.join(""):r);return(0,u.useEffect)((()=>{P(Array.isArray(r)?r.join(""):r)}),[r]),(0,h.jsxs)(i.xu,{position:"relative",onMouseOver:()=>b(!0),onMouseOut:()=>b(!1),children:[(0,h.jsx)(C,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:w,bg:v,fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",overflowX:"auto",w:"full",defaultValue:Z,onSubmit:e=>P(e),sx:T,...m,children:n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.w,{}),(0,h.jsx)(a.H,{rows:p,sx:T})]}):Z},Z),"input"===x&&g&&(0,h.jsx)(c.u,{label:f?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,h.jsx)(d.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(Z),y(!0),setTimeout((()=>y(!1)),1e3)},colorScheme:f?"green":"gray",children:(0,h.jsx)(t.T,{})})})]})}},3684:(e,r,n)=>{n.d(r,{Ae:()=>c,Bz:()=>C,DD:()=>f,De:()=>T,Ec:()=>j,H4:()=>g,Hw:()=>m,R:()=>v,Rs:()=>p,_3:()=>x,bD:()=>y,g5:()=>l,kA:()=>h,p8:()=>a,zh:()=>b,zj:()=>w});var t=n(9078),s=n(4260),o=n(2458),i=n(5893);const l={nodes:1,cpus:4,ram:32,gpuModules:1,wallTime:{hours:1,minutes:0},jobInstanceType:"Standalone",arrayConfig:{firstIndex:1,upperBound:10,step:1}},a=(e,r)=>0!==e.length&&(Array.isArray(e[0])?e.map((e=>e[0])).includes(r):e.includes(r)),c=e=>"Lyra"===e?.service,d=e=>["rVDI","Local"].includes(e?.service),u=e=>"GPU"===e?.hardware,h=(e,r)=>()=>{let n;return n="rVDI"===e?.service?["Linux","Windows"]:"Local"===e?.service?["Linux","macOS","Windows"]:["Linux"],{element:(t,o)=>(0,i.jsx)(s.Z,{title:"OS",description:"The operating system to use for running the model.",selected:o,inputProps:{choices:n,value:e?.os,onChange:r("os")}},t),show:e=>d(e),selected:e=>a(n,e?.os)}},x=(e,r)=>()=>{const n=["Any","AMD","Intel"];return{element:(t,o)=>(0,i.jsx)(s.Z,{title:"CPU vendor",selected:o,inputProps:{choices:n,value:e?.cpuVendor,onChange:r("cpuVendor")}},t),show:e=>c(e),selected:e=>a(n,e?.cpuVendor)}},p=(e,r)=>()=>{let n=[];return"AMD"===e?.cpuVendor?n=["Any","7702","7713"]:"Intel"===e?.cpuVendor&&(n=["Any","6140","6248","8260","E7-8890v4"]),{element:(t,o)=>(0,i.jsx)(s.Z,{title:"CPU model",selected:o,inputProps:{choices:n,value:e?.cpuModel,onChange:r("cpuModel")}},t),show:e=>c(e)&&e?.cpuVendor&&"Any"!==e.cpuVendor,selected:e=>a(n,e?.cpuModel)}},j=(e,r)=>()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?128:"6140"===e?.cpuModel?36:"6248"===e?.cpuModel?40:"8260"===e?.cpuModel?48:"E7-8890v4"===e?.cpuModel?96:128,{element:(t,s)=>(0,i.jsx)(o.Z,{title:"CPU",selected:s,inputProps:{value:e?.cpus,label:e?.cpus>1?"cpus":"cpu",min:1,max:n,step:1,onChange:e=>{r("cpus")(e),r("ram")(8*e)}}},t),show:e=>c(e),selected:()=>!0}},m=(e,r)=>()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?1006:"6140"===e?.cpuModel||"6248"===e?.cpuModel||"8260"===e?.cpuModel?186:"E7-8890v4"===e?.cpuModel?5794:1006,{element:(t,s)=>(0,i.jsx)(o.Z,{title:"RAM",selected:s,inputProps:{value:e?.ram,label:"GB",min:8,max:n,step:8,onChange:r("ram")},showAlert:e?.ram!==8*e?.cpus,alertType:"warning",alertMsg:"The recommended RAM is 8GB per CPU."},t),show:e=>c(e),selected:()=>!0}},g=(e,r)=>()=>{let n=[];return"CPU"===e?.hardware?n=["1 core, 8 GB, 8 hours","4 cores, 32 GB, 8 hours","8 cores, 64 GB, 4 hours","16 cores, 128GB, 4 hours"]:"GPU"===e?.hardware&&(n=["4 cores, 32 GB, T4 GPU, 4 hours","8 cores, 64 GB, T4 GPU, 2 hours"]),{element:(t,o)=>(0,i.jsx)(s.Z,{title:"Job Profile",selected:o,inputProps:{choices:n,value:e?.jobProfile,onChange:r("jobProfile")}},t),show:e=>"JupyterHub"===e?.service&&e?.hardware,selected:e=>a(n,e?.jobProfile)}},b=(e,r)=>()=>{const n=["Any","NVIDIA","AMD"];return{element:(t,o)=>(0,i.jsx)(s.Z,{title:"GPU vendor",selected:o,inputProps:{choices:n,value:e?.gpuVendor,onChange:r("gpuVendor")}},t),show:e=>c(e)&&u(e),selected:e=>a(n,e?.gpuVendor)}},f=(e,r)=>()=>{let n=[];return"NVIDIA"===e?.gpuVendor?n=[["T4","Tesla T4 16 GB"],["P100","TESLA P100-PCIE-16GB"],["V100","TESLA V100-PCIE-32GB"],["A100","NVIDIA A100-SXM4-40GB"]]:"AMD"===e?.gpuVendor&&(n=[["MI100","AMD MI100 32 GB"],["MI210","AMD MI210 16 GB"]]),{element:(t,o)=>(0,i.jsx)(s.Z,{title:"GPU model",selected:o,inputProps:{choices:n,value:e?.gpuModel,onChange:r("gpuModel")}},t),show:e=>c(e)&&"GPU"===e?.hardware&&e?.gpuVendor&&"Any"!==e.gpuVendor,selected:e=>a(n,e?.gpuModel)}},y=(e,r)=>()=>({element:(n,t)=>(0,i.jsx)(o.Z,{title:"GPU",selected:t,inputProps:{value:e?.gpuModules,label:e?.gpuModules>1?"GPUs":"GPU",min:1,max:8,step:1,onChange:r("gpuModules")},showAlert:e?.gpuModules>1,alertType:"warning",alertMsg:"Only use more than 1 GPU if your job is capable of utilising multiple GPUs simultaneously."},n),show:e=>c(e)&&u(e),selected:()=>!0}),w=(e,r)=>()=>{let n=[];return n="JupyterHub"===e?.service?[["Conda","Conda package manager"]]:d(e)&&["macOS","Windows"].includes(e?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Singularity","Singularity / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(t,o)=>(0,i.jsx)(s.Z,{title:"Environment",description:"The Python package management system.",selected:o,inputProps:{choices:n,value:e?.environment,onChange:r("environment")}},t),show:e=>e?.service,selected:e=>a(n,e?.environment)}},v=(e,r)=>()=>{let n=[];return n="Lyra"===e?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(t,o)=>(0,i.jsx)(s.Z,{title:"Tool",description:"The interface to use for running the model.",selected:o,inputProps:{choices:n,value:e?.tool,onChange:r("tool")}},t),show:e=>e?.service,selected:e=>a(n,e?.tool)}};function T(e){let{config:r,onConfigChange:n,getConfigGroups:s}=e;return(0,i.jsx)(t.r,{templateColumns:"auto 1fr",gridColumnGap:2,alignItems:"center",children:Object.entries(s(r,n)).map((e=>{let[r,n]=e;return[r,n()]})).filter((e=>{let[n,t]=e;return t.show(r)})).map((e=>{let[n,t]=e;return t.element(n,t.selected(r))}))})}const C=(e,r)=>Object.values(r(e)).map((e=>e())).filter((r=>r.show(e))).every((r=>r.selected(e)))},1778:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(7747),s=n(4153),o=n(7405),i=n(3949),l=n(5893);function a(e){let{alertDismissible:r=!0,alertType:n="info",onClose:a={},children:c=null}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.xu,{}),(0,l.jsxs)(s.b,{display:"flex",status:n,children:[(0,l.jsx)(o.z,{}),(0,l.jsx)(t.xu,{flex:"1",children:c}),r&&(0,l.jsx)(i.P,{size:"sm",style:{marginLeft:"auto"},position:"relative",right:"0",top:"0",onClick:a})]})]})}},5833:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(5106),s=n(9563),o=n(7747),i=n(2568),l=n(2757),a=n(5893);function c(e){let{title:r,description:n,selected:c}=e;return(0,a.jsxs)(o.xu,{children:[c?(0,a.jsx)(t.r,{color:"green.500"}):(0,a.jsx)(i.u,{label:"Pick an option",children:(0,a.jsx)(s.a,{color:"orange.500"})}),(0,a.jsx)(i.u,{label:n,placement:"top",hasArrow:!0,children:(0,a.jsx)(l.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:r})})]})}},4260:(e,r,n)=>{n.d(r,{Z:()=>h});var t=n(7294),s=n(3717),o=n(2568),i=n(4225),l=n(6115),a=n(5893);function c(e){let{choices:r,value:n,onChange:t=(e=>{})}=e;const{colorScheme:c}=(0,l.Q5)();return(0,a.jsx)(s.k,{flexGrow:"1",flexWrap:"wrap",children:r?.map((e=>{const{label:r,description:s}=Array.isArray(e)?{label:e[0],description:e[1]}:{label:e,description:""},l=r===n;return(0,a.jsx)(o.u,{label:s,placement:"top",hasArrow:!0,children:(0,a.jsx)(i.z,{flexGrow:"1",flexBasis:"0",minW:"",variant:l?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"2",onClick:()=>t(r),colorScheme:l?c:"gray",children:r})},r)}))})}var d=n(1778),u=n(5833);function h(e){let{title:r,description:n,selected:s,inputProps:o,onChange:i={},showAlert:l=!1,alertDismissible:h=!0,alertType:x="info",alertMsg:p=null}=e;const[j,m]=(0,t.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{title:r,description:n,selected:s}),(0,a.jsx)(c,{onChange:i,...o})]}),l&&!j&&(0,a.jsx)(d.Z,{alertDismissible:h,alertType:x,onClose:()=>{m(!0)},children:p})]})}},2458:(e,r,n)=>{n.d(r,{Z:()=>m});var t=n(7294),s=n(3717),o=n(7747),i=n(2140),l=n(3090),a=n(1680),c=n(1293),d=n(357),u=n(6115),h=n(5893);function x(e){let{value:r=1,label:n,onChange:t=(()=>{}),...x}=e;const{colorScheme:p}=(0,u.Q5)();return(0,h.jsxs)(s.k,{children:[(0,h.jsx)(o.xu,{width:"120px",children:(0,h.jsxs)(i.B,{size:"sm",children:[(0,h.jsx)(l.I,{type:"number",value:r,onChange:e=>t(parseInt(e.target.value)),textAlign:"center"}),(0,h.jsx)(a.xW,{width:"60px",p:0,justifyContent:"center",children:(0,h.jsx)(c.x,{mb:"0",children:n})})]})}),(0,h.jsxs)(d.iR,{display:"block",flex:"1",ml:2,value:r,focusThumbOnChange:!1,colorScheme:p,onChange:e=>t(e),...x,children:[(0,h.jsx)(d.Uj,{children:(0,h.jsx)(d.Ms,{})}),(0,h.jsx)(d.gs,{})]})]})}var p=n(1778),j=n(5833);function m(e){let{title:r,description:n,selected:s,inputProps:o,onChange:i={},showAlert:l=!1,alertDismissible:a=!0,alertType:c="info",alertMsg:d=null}=e;const[u,m]=(0,t.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j.Z,{title:r,description:n,selected:s}),(0,h.jsx)(x,{onChange:i,...o})]}),l&&!u&&(0,h.jsx)(p.Z,{alertDismissible:a,alertType:c,onClose:()=>{m(!0)},children:d})]})}},6115:(e,r,n)=>{n.d(r,{DN:()=>u,Q5:()=>x,fD:()=>j});var t=n(2883),s=n(6089),o=n(2757),i=n(3990),l=n(3614),a=n(607),c=n(7294),d=n(5893);function u(e){let{title:r,subtitle:n,logo:i,alt:l,link:a}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.r,{href:a,isExternal:!0,children:[(0,d.jsx)(s.E,{float:"left",verticalAlign:"middle",src:i,alt:l,display:"inline",height:"30px"}),(0,d.jsx)(o.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:r})]}),n&&(0,d.jsx)(o.X,{as:"h3",size:"xs",mt:4,children:n})]})}const h=(0,c.createContext)({colorScheme:"teal",pickerTextColor:"white",pickerTextShadow:"1px 1px 1px black"}),x=()=>(0,c.useContext)(h),p=e=>{let{children:r,...n}=e;return(0,d.jsx)(h.Provider,{value:{...n},children:r})};function j(e){let{colorScheme:r,header:n,body:t}=e;return(0,d.jsx)(p,{colorScheme:r,children:(0,d.jsxs)(i.Z,{children:[n&&(0,d.jsx)(l.O,{children:n}),(0,d.jsx)(a.e,{children:t})]})})}},3623:(e,r,n)=>{n.d(r,{s:()=>w});var t=n(7747),s=n(6101),o=n(2233),i=n(8615),l=n(1778),a=n(9206),c=n(483),d=n(959),u=n(4461),h=n(4124),x=n(4028),p=n(889),j=n(7294),m=n(5893);function g(e){let{children:r}=e;const[n,t]=(0,j.useState)(-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0);return(0,m.jsxs)(d.m,{index:n,onChange:t,children:[(0,m.jsxs)(u.t,{children:[(0,m.jsx)(h.O,{children:"Windows"}),(0,m.jsx)(h.O,{children:"macOS"}),(0,m.jsx)(h.O,{children:"Linux"})]}),(0,m.jsxs)(x.n,{children:[(0,m.jsx)(p.x,{p:0,children:r[0]}),(0,m.jsx)(p.x,{p:0,children:r[1]}),(0,m.jsx)(p.x,{p:0,children:r[2]})]})]})}function b(e){let{username:r}=e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{children:"Connect to Lyra"}),(0,m.jsx)(l.Z,{alertType:"info",alertDismissible:!1,children:"If you are off-campus, you will first need to connect to the QUT network using the VPN."}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(o.Z,{textBeforeLink:"See the instructions ",link:{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",text:"here",color:"blue.500",isExternal:!0},textAfterLink:" for more information about how to use Lyra."})}),(0,m.jsxs)(g,{children:[(0,m.jsxs)(t.xu,{children:[(0,m.jsx)(l.Z,{alertType:"info",alertDismissible:!1,children:(0,m.jsx)(o.Z,{textBeforeLink:"You may need to enable the ",link:{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",text:"ssh feature",color:"blue.500",isExternal:!0},hasExternalIcon:!1,textAfterLink:" in Windows."})}),(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(o.Z,{textBeforeLink:"In ",link:{href:"https://aka.ms/terminal",text:"Windows Terminal",color:"blue.500",isExternal:!0}}),(0,m.jsx)(o.Z,{textBeforeLink:", Powershell, ",link:{href:"https://www.putty.org/",text:"PuTTY",color:"blue.500",isExternal:!0},textAfterLink:", or cmd.exe, run the following command to connect to Lyra:"})]})]}),(0,m.jsx)(t.xu,{children:(0,m.jsx)(c.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,m.jsx)(t.xu,{children:(0,m.jsx)(c.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===r&&(0,m.jsx)(c.Z,{children:(0,m.jsxs)("i",{children:["Replace ",(0,m.jsx)(s.E,{children:"username"})," with your QUT username."]})}),(0,m.jsx)(i.Z,{command:`ssh ${r||"username"}@lyra.qut.edu.au`})]})}function f(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{children:"Connect to JupyterHub"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(o.Z,{textBeforeLink:"Visit ",link:{href:"https://jupyterhub.eres.qut.edu.au",text:"https://jupyterhub.eres.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:" and log in with your QUT username and password."})})]})}function y(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{children:"Connect to rVDI"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(o.Z,{textBeforeLink:"See the instructions ",link:{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",text:"here",color:"blue.500",isExternal:!0},textAfterLink:" for more information."})}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(o.Z,{textBeforeLink:"If you have not already, download and install the VMware Horizon client from ",link:{href:"https://rvdi.qut.edu.au",text:"https://rvdi.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:"."})}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(o.Z,{textBeforeLink:"In the VMware Horizon client, connect to ",link:{href:"https://rvdi.qut.edu.au",text:"https://rvdi.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:" and log in with your QUT username and password."})})]})}function w(e){let{service:r,username:n}=e;return(0,m.jsxs)(m.Fragment,{children:["Lyra"===r&&(0,m.jsx)(b,{username:n}),"JupyterHub"===r&&(0,m.jsx)(f,{}),"rVDI"===r&&(0,m.jsx)(y,{}),"Local"===r&&(0,m.jsx)(m.Fragment,{})," "]})}},665:(e,r,n)=>{n.d(r,{Z:()=>x});var t=n(9754),s=n(5970),o=n(5418),i=n(2140),l=n(3090),a=n(2735),c=n(6105),d=n(7294),u=n(9206),h=n(5893);function x(e){let{label:r,placeholder:n,value:x,onChange:p,pattern:j=/.*/,helperText:m,errorText:g}=e;const[b,f]=(0,d.useState)(x),[y,w]=(0,d.useState)(!0);(0,d.useEffect)((()=>{w(j.test(x)),f(x)}),[x]);return(0,h.jsxs)(s.NI,{isInvalid:!y,children:[(0,h.jsx)(o.l,{children:(0,h.jsx)(u.Z,{children:r})}),(0,h.jsxs)(i.B,{children:[(0,h.jsx)(l.I,{type:"text",placeholder:n,value:b,onChange:e=>{f(e.target.value),p(e.target.value)},pattern:j}),y&&""!==x&&(0,h.jsx)(a.x,{children:(0,h.jsx)(t.n,{color:"green.500"})})]}),!y&&(0,h.jsx)(c.J1,{children:g}),(0,h.jsx)(s.Q6,{children:m})]})}},1400:(e,r,n)=>{n.d(r,{Bc:()=>p,CJ:()=>h,HW:()=>x,Wh:()=>u});var t=n(6101),s=n(7294),o=n(2233),i=n(8615),l=n(665),a=n(9206),c=n(483),d=n(5893);function u(e){let{jobType:r,jobName:n="",nodes:t,wallTime:o,hardware:u,cpuVendor:h,cpuModel:x,cpus:p,ram:j,gpuVendor:m,gpuModel:g,gpuModules:b,jobInstanceType:f,arrayConfig:y}=e;const w=[`select=${"Interactive"===r?1:t}`,`ncpus=${p}`,`mem=${j}gb`];"Any"!==h&&("Any"!==x?w.push(`cputype=${x}`):w.push("AMD"===h?"cpuarch=amd":"cpuarch=avx512")),"GPU"===u&&(w.push(`ngpus=${b}`),"Any"!==m&&g&&w.push(`gputype=${g}`));const v=["Interactive"===r?" -I -S /bin/bash":"","Interactive"!==r&&""!==n?' -N "'+n+'"':"","Batch"===r&&"Array"===f?" -J "+y?.firstIndex+"-"+y?.upperBound:"","Batch"===r&&"Array"===f&&y?.step>1?":"+y?.step:""],T="Interactive"===r?"01:00:00":(o?.hours<10?"0":"")+o?.hours+":"+(o?.minutes<10?"0":"")+o?.minutes+":00",C=["#!/bin/bash -l",`#PBS -N ${n}`,`#PBS -l walltime=${T}`,`#PBS -l ${w.join(":")}`,"","cd $PBS_O_WORKDIR","","echo \"Running job '$PBS_JOBNAME' ($PBS_JOBID) in the following directory: $PWD\"",'echo "Data written to stderr" >&2'],[Z,P]=(0,s.useState)(),I="Interactive"===r?`qsub${v.join("")} -l walltime=${T} -l ${w.join(":")}`:`qsub ${Z||`${n}.pbs`}`;return(0,d.jsxs)(d.Fragment,{children:["Batch"===r&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:"Create the batch job script"}),(0,d.jsx)(c.Z,{children:"A job script contains the commands you want to run as part of the job. The script will be saved on the Lyra filesystem."}),(0,d.jsx)(l.Z,{label:"Script Path",placeholder:`${n}.pbs`,value:Z,onChange:P,helperText:"Enter the path where the script will be saved, or leave blank to use the default."}),(0,d.jsx)(c.Z,{children:"Run the following command to create the batch job script:"}),(0,d.jsx)(i.Z,{command:[`cat <<'EOF' > ${n}.pbs`,...C,"EOF",""].join("\n")}),(0,d.jsx)(c.Z,{children:"Run the following command to confirm the contents of the script:"}),(0,d.jsx)(i.Z,{command:`cat ${n}.pbs`,output:C.join("\n")})]}),(0,d.jsx)(a.Z,{children:"Schedule a job"}),(0,d.jsxs)(c.Z,{children:["Run the following command to schedule the ",r.toLowerCase()," job:"]}),(0,d.jsx)(i.Z,{command:I,output:"{jobId}.pbs"})]})}function h(e){let{jobProfile:r}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:"Schedule a job"}),(0,d.jsxs)(c.Z,{children:["From the JupyterHub home page, click ",(0,d.jsx)(t.E,{children:"Start My Server"})," to schedule a job."]}),(0,d.jsxs)(c.Z,{children:["From the list of available options, select the one containing"," ",(0,d.jsxs)(t.E,{children:["Lyra - ",r]})," and click the ",(0,d.jsx)(t.E,{children:"Start"})," ","button."]}),(0,d.jsx)(a.Z,{children:"Waiting Screen"}),(0,d.jsxs)(c.Z,{children:["You will now enter a waiting screen and see the following message:",(0,d.jsx)("br",{}),(0,d.jsx)(t.E,{children:"Your server is starting up."}),(0,d.jsx)("br",{}),(0,d.jsx)(t.E,{children:"You will be redirected automatically when it's ready for you"})]}),(0,d.jsx)(c.Z,{children:"Wait for the to be redirected."}),(0,d.jsx)(c.Z,{children:(0,d.jsx)(o.Z,{textBeforeLink:"It may take up to 10 minutes for your job to be queued and for the server to start. If it fails to start, please raise an incident in the ",link:{href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",text:"eResearch help centre",color:"blue.500",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})})]})}function x(e){let r,{hardware:n,os:s}=e;return r="Linux"===s?"Red Hat VDI Medium with GPU":"GPU"===n?"eResearch Large with GPU":"eResearch General VDI",(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:"Start a session"}),(0,d.jsxs)(c.Z,{children:["From the list of machines, select the one named"," ",(0,d.jsx)(t.E,{children:r})]})]})}function p(e){let{_hardware:r,_os:n}=e}},6240:(e,r,n)=>{n.d(r,{v:()=>p});var t=n(7747),s=n(9289),o=n(7239),i=n(5161),l=n(2757),a=n(6409),c=n(6101),d=n(8615),u=n(9206),h=n(483),x=n(5893);function p(e){let{service:r,jobType:n,environment:p,usingTool:j=!1}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(t.xu,{position:"relative",padding:"10",children:[(0,x.jsx)(s.i,{}),(0,x.jsx)(o.u,{bg:(0,i.ff)("white","gray.700"),px:"4",children:(0,x.jsx)(l.X,{as:"h2",size:"md",my:2,textAlign:"center",children:"Teardown"})})]}),j&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{children:"Stop the server"}),(0,x.jsxs)(h.Z,{children:["Once you have finished using the tool, stop the server by pressing"," ",(0,x.jsx)(a.T,{children:"Ctrl"})," + ",(0,x.jsx)(a.T,{children:"C"})," in the terminal."]}),(0,x.jsx)(h.Z,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."})]}),"Singularity"===p&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{children:"Exit the container"}),(0,x.jsxs)(h.Z,{children:["Exit the container by pressing ",(0,x.jsx)(a.T,{children:"Ctrl"})," + ",(0,x.jsx)(a.T,{children:"D"}),", or typing ",(0,x.jsx)(c.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===r&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{children:"Stop the job"}),"Interactive"===n&&(0,x.jsxs)(h.Z,{children:["Stop the job by pressing ",(0,x.jsx)(a.T,{children:"Ctrl"})," + ",(0,x.jsx)(a.T,{children:"D"}),", or typing"," ",(0,x.jsx)(c.E,{children:"exit"})," in the terminal."]}),"Batch"===n&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{children:"The batch job will stop automatically when the job's script terminates, or the walltime elapses."}),(0,x.jsx)(h.Z,{children:"To stop the job early, you need to know your job id. You can either note down your job id when you submit a batch job, or find the job id using the check job status command:"}),(0,x.jsx)(d.Z,{command:"qstat -u $USER"}),(0,x.jsx)(h.Z,{children:"To stop the job early, run the following command:"}),(0,x.jsx)(d.Z,{command:"qdel {job_id}"})]}),(0,x.jsx)(u.Z,{children:"Exit the ssh session"}),(0,x.jsxs)(h.Z,{children:["Exit the ssh session on Lyra by pressing ",(0,x.jsx)(a.T,{children:"Ctrl"})," +"," ",(0,x.jsx)(a.T,{children:"D"}),", or typing ",(0,x.jsx)(c.E,{children:"exit"})," in the terminal."]}),j&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{children:"Stop port forwarding"}),(0,x.jsxs)(h.Z,{children:["Stop local port forwarding by pressing ",(0,x.jsx)(a.T,{children:"Ctrl"})," +"," ",(0,x.jsx)(a.T,{children:"D"}),", or typing ",(0,x.jsx)(c.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})]})}},9206:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(2757),s=n(5893);function o(e){let{children:r}=e;return(0,s.jsx)(t.X,{as:"h3",size:"sm",my:4,children:r})}},483:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(1293),s=n(7747),o=n(5893);function i(e){let{children:r}=e;return"string"==typeof r?(0,o.jsx)(t.x,{my:4,children:r}):(0,o.jsx)(s.xu,{my:4,children:r})}},7826:(e,r,n)=>{n.r(r),n.d(r,{default:()=>J});var t=n(2757),s=n(7294);const o=n.p+"assets/images/qut-f500d51a24669f94cd64892fe289c0d3.png";var i=n(2233),l=n(3684),a=n(3717),c=n(2140),d=n(7555),u=n(1680),h=n(6115),x=n(5893);function p(e){let{value:r=1,allowMouseWheel:n=!0,label:t,onChange:s=(()=>{}),...o}=e;const{colorScheme:i}=(0,h.Q5)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(c.B,{size:"sm",width:"unset",children:[(0,x.jsxs)(d.Y2,{defaultValue:r,allowMouseWheel:n,onChange:s,colorScheme:i,...o,children:[(0,x.jsx)(d.zu,{focusBorderColor:"red.200"}),(0,x.jsxs)(d.Fi,{children:[(0,x.jsx)(d.WQ,{}),(0,x.jsx)(d.Y_,{})]})]}),(0,x.jsx)(u.xW,{children:t})]})})}var j=n(1778),m=n(5833);function g(e){let{title:r,description:n,selected:t,value:o={},onChange:i,inputProps:l,showAlert:c=!1,alertDismissible:d=!0,alertType:u="info",alertMsg:h=""}=e;const[g,b]=(0,s.useState)(!1),f=e=>e.replace(/([A-Z])/g," $1").replace(/^./,(e=>e.toUpperCase()));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.Z,{title:r,description:n,selected:t}),(0,x.jsx)(a.k,{justifyContent:"flex-start",flexWrap:"wrap",children:Object.keys(o).map(((e,r)=>(0,x.jsx)(p,{w:"100px",label:f(e),value:o[e],onChange:r=>{i({...o,[e]:parseInt(r)})},...Array.isArray(l)?l[r]:l},e)))}),c&&!g&&(0,x.jsx)(j.Z,{alertDismissible:d,alertType:u,onClose:()=>{b(!0)},children:h})]})}var b=n(4260),f=n(2458),y=n(7747),w=n(9273),v=n(3623),T=n(665),C=n(1400),Z=n(6101),P=n(991),I=n(9840),k=n(510),S=n(4693),A=n(5115),M=n(4698),B=n(1293),L=n(8615),E=n(9206),U=n(483);function D(e){let{jobType:r,jobName:n}=e;const[t,o]=(0,s.useState)(""),i=t||"1234567";return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(U.Z,{children:"The job has been scheduled and will start running when resources are available."}),"Batch"===r&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(T.Z,{label:"Job ID",placeholder:"1234567",value:t,onChange:o,pattern:/^\d*$/,helperText:"Optionally enter the job ID so that it can be pre-populated in the commands below.",errorText:"Job ID must only contain numbers"}),(0,x.jsx)(E.Z,{children:"Job status"}),(0,x.jsx)(U.Z,{children:"Check the status of your jobs by running the following command:"}),(0,x.jsx)(L.Z,{command:"qstat -xu $USER",output:`pbs:\n                                                   Req'd  Req'd   Elap\nJob ID      Username Queue Jobname  SessID NDS TSK Memory Time  S Time\n----------- -------- ----- -------- ------ --- --- ------ ----- - -----\n${i}.pbs username quick job-name    --    1   4   32gb 01:00 Q   --`}),(0,x.jsxs)(U.Z,{children:["The job status will be shown in the ",(0,x.jsx)(Z.E,{children:"S"})," column."]}),(0,x.jsxs)(P.i,{size:"sm",variant:"striped",children:[(0,x.jsx)(I.h,{children:(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(S.Th,{children:"Status"}),(0,x.jsx)(S.Th,{children:"Description"})]})}),(0,x.jsxs)(A.p,{children:[(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"Q"})}),(0,x.jsx)(M.Td,{children:"Queued"})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"R"})}),(0,x.jsx)(M.Td,{children:"Running"})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"B"})}),(0,x.jsx)(M.Td,{children:"Array job has at least one subjob running"})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"H"})}),(0,x.jsx)(M.Td,{children:"Held"})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"S"})}),(0,x.jsx)(M.Td,{children:"Suspended"})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"E"})}),(0,x.jsx)(M.Td,{children:"Exiting"})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"F"})}),(0,x.jsx)(M.Td,{children:"Finished"})]})]})]}),(0,x.jsx)(E.Z,{children:"Job results"}),(0,x.jsxs)(U.Z,{children:["The output of the job will be saved in a file named"," ",(0,x.jsxs)(Z.E,{children:[n,".o",i]})," ","in the same directory that the job was submitted from."]}),(0,x.jsx)(U.Z,{children:"Run the following command to see the output files:"}),(0,x.jsx)(L.Z,{command:`ls -lh ${n}.*`,output:[`-rw------- 1 username default 100 Jan 01 00:00 ${n}.e${i}`,`-rw------- 1 username default  80 Jan 01 00:00 ${n}.o${i}`].join("\n")}),(0,x.jsx)(U.Z,{children:"Run the following command to see the output of the job:"}),(0,x.jsx)(L.Z,{command:`cat ${n}.o${i}`,output:["Hello, world!",`PBS Job ${i}.pbs`,"CPU time  : 00:00:00","Wall time : 00:00:01","Mem usage : 0b"].join("\n")}),(0,x.jsx)(U.Z,{children:"Run the following command to see the error output of the job:"}),(0,x.jsx)(L.Z,{command:`cat ${n}.e${i}`,output:"Data written to stderr"}),(0,x.jsx)(U.Z,{children:"Use the following command to get more detailed information about the job, including resource usage."}),(0,x.jsx)(L.Z,{command:`qstat -fx ${i}`,output:`Job Id: ${i}.pbs\n  ...\n  resources_used.cpupercent = 99\n  resources_used.cput = 00:39:22\n  resources_used.mem = 5671036kb\n  resources_used.ncpus = 1\n  resources_used.vmem = 2755392kb\n  resources_used.walltime = 00:40:51\n  ...\n  `}),(0,x.jsx)(U.Z,{children:"Observe the resource usage of the job and adjust the requested resources in future job submissions accordingly"}),(0,x.jsxs)(P.i,{size:"sm",my:4,variant:"striped",children:[(0,x.jsx)(I.h,{children:(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(S.Th,{children:"Resource"}),(0,x.jsx)(S.Th,{children:"Description"})]})}),(0,x.jsxs)(A.p,{children:[(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"cpupercent"})}),(0,x.jsx)(M.Td,{children:"Sum of the percentage of CPU time used by each requested cpu. (eg. 75% of each of 4 cpus = 300)"})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"cput"})}),(0,x.jsx)(M.Td,{children:"Sum of the CPU time used by each requested core. (eg. 1 hour using 4 cpus = 04:00:00)"})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"mem"})}),(0,x.jsx)(M.Td,{children:"Maximum memory used by the job."})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"ncpus"})}),(0,x.jsx)(M.Td,{children:"Number of cpus used by the job."})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"vmem"})}),(0,x.jsx)(M.Td,{children:"Maximum virtual memory used by the job."})]}),(0,x.jsxs)(k.Tr,{children:[(0,x.jsx)(M.Td,{children:(0,x.jsx)(B.x,{as:"b",children:"walltime"})}),(0,x.jsx)(M.Td,{children:"The time it took to run the job."})]})]})]})]})]})}var G=n(6240);const R=/^[a-z0-9]*$/,V=/^(?=.*[A-Za-z0-9._+\-])[A-Za-z0-9._+\-]+$/u;function $(e){let{config:r}=e;const[n,t]=(0,w.Z)("qutUsername",""),[s,o]=(0,w.Z)("qutBatchJobName","Batch-job-name");return(0,x.jsxs)(y.xu,{children:["Lyra"===r.service&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(T.Z,{label:"QUT Username",placeholder:"username",value:n,onChange:t,pattern:R,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),"Batch"===r.jobType&&(0,x.jsx)(T.Z,{label:"Batch Job Name",placeholder:"Batch-job-name",value:s,onChange:o,pattern:V,helperText:"Enter a name for your batch job so that it can be pre-populated in the commands below.",errorText:"Job name must only contain alphanumerics or '-', '_', '+', '.' and must not be empty."})]}),s&&(0,x.jsx)(v.s,{service:r.service,username:n}),"Lyra"===r.service&&(0,x.jsx)(x.Fragment,{children:s&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C.Wh,{jobType:r.jobType,jobName:s,hardware:r.hardware,cpuVendor:r.cpuVendor,cpuModel:r.cpuModel,cpus:r.cpus,ram:r.ram,gpuVendor:r.gpuVendor,gpuModel:r.gpuModel,gpuModules:r.gpuModules,nodes:r.nodes,wallTime:r.wallTime,jobInstanceType:r.jobInstanceType,arrayConfig:r.arrayConfig}),(0,x.jsx)(D,{jobType:r.jobType,jobName:s}),(0,x.jsx)(G.v,{service:r.service,jobType:r.jobType,environment:r.environment})]})}),"JupyterHub"===r.service&&(0,x.jsx)(C.CJ,{jobProfile:r.jobProfile}),"rVDI"===r.service&&(0,x.jsx)(C.HW,{hardware:r.hardware,os:r.os}),"Local"===r.service&&(0,x.jsx)(C.Bc,{hardware:r.hardware,os:r.os})]})}const F=function(e,r){void 0===r&&(r=()=>{});const n=e=>n=>r((r=>({...r,[e]:n})));return{service:()=>{const r=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"]];return{element:(t,s)=>(0,x.jsx)(b.Z,{title:"Service",description:"The service to use for running the job.",selected:s,inputProps:{choices:r,value:e?.service,onChange:n("service")}},t),show:()=>!0,selected:e=>(0,l.p8)(r,e?.service)}},jobType:()=>{const r=[["Batch","Submit the job to the queue to run in the background"],["Interactive","Run the job in an interactive shell"]];return{element:(t,s)=>(0,x.jsx)(b.Z,{title:"Job type",description:"The type of PBS job to run.",selected:s,inputProps:{choices:r,value:e?.jobType,onChange:n("jobType")}},t),show:e=>"Lyra"===e?.service,selected:e=>(0,l.p8)(r,e?.jobType)}},nodes:()=>({element:(r,t)=>(0,x.jsx)(f.Z,{title:"Nodes",description:"The number of nodes to use for the job.",selected:t,inputProps:{label:e?.nodes>1?"nodes":"node",value:e?.nodes,min:1,max:100,step:1,onChange:n("nodes")},showAlert:e?.nodes>1,alertType:"warning",alertMsg:(0,x.jsx)(i.Z,{textBeforeLink:"Only use more than 1 node if you are using ",link:{href:"https://hpc-wiki.info/hpc/MPI",text:"MPI",isExternal:!0},hasExternalIcon:!0,textAfterLink:"-type software."})},r),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>e?.nodes>0}),jobInstanceType:()=>{const r=[["Standalone","Run a single instance of the job"],["Array","Run many instances of the job"]];return{element:(t,s)=>(0,x.jsx)(b.Z,{title:"Job instances",description:"Run a single instance, or many instances of the job.",selected:s,inputProps:{choices:r,value:e?.jobInstanceType,onChange:n("jobInstanceType")}},t),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>(0,l.p8)(r,e?.jobInstanceType)}},arrayConfig:()=>{const r=function(e,r,n,t){void 0===t&&(t=6);const s=[],o=Math.floor((r-e+n)/n),i=Math.floor(t/2);if(o<=t)for(let l=0;l<o;l++)s.push(e+l*n);else{for(let t=0;t<i;t++)s.push(e+t*n);s.push("...");const r=e+(o-i)*n;for(let e=0;e<i;e++)s.push(r+e*n)}return s}(e?.arrayConfig?.firstIndex,e?.arrayConfig?.upperBound,e?.arrayConfig?.step);return{element:(t,s)=>(0,x.jsx)(g,{title:"Array range",description:"Array sub-job range indexes. The first index is the starting index, the upper bound is the last index, and the step is the increment between indexes.",selected:s,value:e?.arrayConfig,onChange:n("arrayConfig"),inputProps:{min:0},showAlert:s,alertType:"info",alertMsg:`Indexes: ${r.join(", ")}`},t),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType&&"Array"===e?.jobInstanceType,selected:e=>e?.arrayConfig.step>=1&&e?.arrayConfig.upperBound>=e?.arrayConfig.firstIndex&&e?.arrayConfig.upperBound>e?.arrayConfig.step&&e?.arrayConfig.upperBound>=e?.arrayConfig.firstIndex+e?.arrayConfig.step}},wallTime:()=>({element:(r,t)=>(0,x.jsx)(g,{title:"Walltime",description:"The estimated total time for the job.",selected:t,onChange:n("wallTime"),value:e?.wallTime,inputProps:[{min:0,step:1},{min:e?.wallTime?.hours<1?1:0,max:59,step:1}]},r),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>e?.wallTime.hours>0||e?.wallTime.minutes>0}),hardware:()=>{let r;return r=(0,l.Ae)(e)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU"]],{element:(t,s)=>(0,x.jsx)(b.Z,{title:"Hardware",description:"The hardware to use for running the job.",selected:s,inputProps:{choices:r,value:e?.hardware,onChange:n("hardware")},showAlert:"IPU"===e?.hardware,alertType:"warning",alertMsg:(0,x.jsx)(i.Z,{textBeforeLink:"IPUs are currently unavailable. Please ",link:{href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",text:"contact eResearch if interested",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})},t),show:e=>e?.service,selected:e=>(0,l.p8)(["CPU","GPU"],e?.hardware)}},cpuVendor:(0,l._3)(e,n),cpuModel:(0,l.Rs)(e,n),cpus:(0,l.Ec)(e,n),ram:(0,l.Hw)(e,n),gpuVendor:(0,l.zh)(e,n),gpuModel:(0,l.DD)(e,n),gpuModules:(0,l.bD)(e,n),jobProfile:(0,l.H4)(e,n)}};function q(e){let{initialConfig:r=l.g5,showHeader:n=!0}=e;const[i,a]=(0,s.useState)(r);(0,s.useEffect)((()=>{a(r)}),[r]);const c=(0,l.Bz)(i,F),d=n?(0,x.jsx)(h.DN,{title:"eResearch Job",subtitle:"Use the form below to configure a workload that runs on the eResearch infrastructure at QUT.",logo:o,alt:"QUT logo",link:"https://www.qut.edu.au/research/eresearch"}):null,u=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.X,{as:"h2",size:"md",my:2,children:"Configuration"}),(0,x.jsx)(l.De,{config:i,onConfigChange:a,getConfigGroups:F}),c&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.X,{as:"h2",size:"md",my:2,children:"Instructions"}),(0,x.jsx)($,{config:i})]})]});return(0,x.jsx)(h.fD,{colorScheme:"qut",header:d,body:u})}function J(){return(0,x.jsx)(q,{showHeader:!1})}}}]);