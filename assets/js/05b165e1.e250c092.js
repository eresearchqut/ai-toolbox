"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[3671],{9273:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294);function s(e,t){const[n,s]=(0,r.useState)((()=>{const n=localStorage.getItem(e);return n?JSON.parse(n):t}));return(0,r.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,s]}},2233:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(5349),s=n(1293),o=n(2883),i=n(5893);function l(e){let{textBeforeLink:t="",link:n={href:"",text:"",color:void 0,isExternal:!1},hasExternalIcon:l=!1,textAfterLink:a=""}=e;return(0,i.jsxs)(s.x,{mb:0,children:[t,(0,i.jsxs)(o.r,{color:n?.color?n.color:"teal.500",href:n.href,isExternal:n?.isExternal,children:[n.text,l&&(0,i.jsx)(r.h,{mx:"2px"})]}),a]})}},4758:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(5392),s=n(5161),o=n(6344),i=n(7747),l=n(5744),a=n(8589),c=n(9981),u=n(4225),d=n(7294),h=n(5893);function x(e){let{children:t,editable:n=!1,defaultRows:x=10}=e;const[p,j]=(0,d.useState)(!1),[m,g]=(0,d.useState)(!1),f=(0,s.ff)("gray.200","gray.500"),b=(0,s.ff)("gray.50","gray.800"),y=n?o.C:i.xu,[w,v]=(0,d.useState)(Array.isArray(t)?t.join(""):t);return(0,d.useEffect)((()=>{v(Array.isArray(t)?t.join(""):t)}),[t]),(0,h.jsxs)(y,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:f,bg:b,fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>j(!0),onMouseOut:()=>j(!1),position:"relative",defaultValue:w,onSubmit:e=>v(e),children:[n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.w,{}),(0,h.jsx)(a.H,{rows:x})]}):w,p&&(0,h.jsx)(c.u,{label:m?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,h.jsx)(u.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(w),g(!0),setTimeout((()=>g(!1)),1e3)},colorScheme:m?"green":"gray",children:(0,h.jsx)(r.T,{})})})]},w)}},3684:(e,t,n)=>{n.d(t,{Ae:()=>c,Bz:()=>Z,DD:()=>b,De:()=>C,H4:()=>g,Hw:()=>m,R:()=>v,Rs:()=>p,UJ:()=>j,_3:()=>x,bD:()=>y,g5:()=>l,kA:()=>h,p8:()=>a,zh:()=>f,zj:()=>w});var r=n(9078),s=n(4260),o=n(2458),i=n(5893);const l={nodes:1,cpuCores:4,ram:16,gpuModules:1,wallTime:{hour:1,minute:0},isArrayJob:"Standalone",jobInstances:{firstIndex:1,upperBound:10,step:1}},a=(e,t)=>0!==e.length&&(Array.isArray(e[0])?e.map((e=>e[0])).includes(t):e.includes(t)),c=e=>"Lyra"===e?.service,u=e=>["rVDI","Local"].includes(e?.service),d=e=>"GPU"===e?.hardware,h=(e,t)=>()=>{let n;return n="rVDI"===e?.service?["Linux","Windows"]:"Local"===e?.service?["Linux","macOS","Windows"]:["Linux"],{element:(r,o)=>(0,i.jsx)(s.Z,{title:"OS",description:"The operating system to use for running the model.",selected:o,inputProps:{choices:n,value:e?.os,onChange:t("os")}},r),show:e=>u(e),selected:e=>a(n,e?.os)}},x=(e,t)=>()=>{const n=["Any","AMD","Intel"];return{element:(r,o)=>(0,i.jsx)(s.Z,{title:"CPU Vendor",selected:o,inputProps:{choices:n,value:e?.cpuVendor,onChange:t("cpuVendor")}},r),show:e=>c(e),selected:e=>a(n,e?.cpuVendor)}},p=(e,t)=>()=>{let n=[];return"AMD"===e?.cpuVendor?n=["7702","7713"]:"Intel"===e?.cpuVendor&&(n=["6140","6248","8260","E7-8890v4"]),{element:(r,o)=>(0,i.jsx)(s.Z,{title:"CPU Model",selected:o,inputProps:{choices:n,value:e?.cpuModel,onChange:t("cpuModel")}},r),show:e=>c(e)&&e?.cpuVendor&&"Any"!==e.cpuVendor,selected:e=>a(n,e?.cpuModel)}},j=(e,t)=>()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?128:"6140"===e?.cpuModel?36:"6248"===e?.cpuModel?40:"8260"===e?.cpuModel?48:"E7-8890v4"===e?.cpuModel?96:128,{element:(r,s)=>(0,i.jsx)(o.Z,{title:"CPU",selected:s,inputProps:{value:e?.cpuCores,label:"cores",min:1,max:n,step:1,onChange:t("cpuCores")}},r),show:e=>c(e),selected:()=>!0}},m=(e,t)=>()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?1006:"6140"===e?.cpuModel||"6248"===e?.cpuModel||"8260"===e?.cpuModel?186:"E7-8890v4"===e?.cpuModel?5794:1006,{element:(r,s)=>(0,i.jsx)(o.Z,{title:"RAM",selected:s,inputProps:{value:e?.ram,label:"GB",min:8,max:n,step:8,onChange:t("ram")}},r),show:e=>c(e),selected:()=>!0}},g=(e,t)=>()=>{let n=[];return"CPU"===e?.hardware?n=["1 core, 8 GB, 8 hours","4 cores, 32 GB, 8 hours","8 cores, 64 GB, 4 hours","16 cores, 128GB, 4 hours"]:"GPU"===e?.hardware&&(n=["4 cores, 32 GB, T4 GPU, 4 hours","8 cores, 64 GB, T4 GPU, 2 hours"]),{element:(r,o)=>(0,i.jsx)(s.Z,{title:"Job Profile",selected:o,inputProps:{choices:n,value:e?.jobProfile,onChange:t("jobProfile")}},r),show:e=>"JupyterHub"===e?.service&&e?.hardware,selected:e=>a(n,e?.jobProfile)}},f=(e,t)=>()=>{const n=["Any","NVIDIA","AMD"];return{element:(r,o)=>(0,i.jsx)(s.Z,{title:"GPU Vendor",selected:o,inputProps:{choices:n,value:e?.gpuVendor,onChange:t("gpuVendor")}},r),show:e=>c(e)&&d(e),selected:e=>a(n,e?.gpuVendor)}},b=(e,t)=>()=>{let n=[];return"NVIDIA"===e?.gpuVendor?n=[["T4","Tesla T4 16 GB"],["P100","TESLA P100-PCIE-16GB"],["V100","TESLA V100-PCIE-32GB"],["A100","NVIDIA A100-SXM4-40GB"]]:"AMD"===e?.gpuVendor&&(n=[["MI100","AMD MI100 32 GB"],["MI210","AMD MI210 16 GB"]]),{element:(r,o)=>(0,i.jsx)(s.Z,{title:"GPU Model",selected:o,inputProps:{choices:n,value:e?.gpuModel,onChange:t("gpuModel")}},r),show:e=>c(e)&&"GPU"===e?.hardware&&e?.gpuVendor&&"Any"!==e.gpuVendor,selected:e=>a(n,e?.gpuModel)}},y=(e,t)=>()=>({element:(n,r)=>(0,i.jsx)(o.Z,{title:"GPU",selected:r,inputProps:{value:e?.gpuModules,label:e?.gpuModules>1?"GPUs":"GPU",min:1,max:8,step:1,onChange:t("gpuModules")},showAlert:e?.gpuModules>1,alertType:"warning",alertMsg:"Only use more than 1 GPU if your job is capable of utilising multiple GPUs simultaneously."},n),show:e=>c(e)&&d(e),selected:()=>!0}),w=(e,t)=>()=>{let n=[];return n="JupyterHub"===e?.service?[["Conda","Conda package manager"]]:u(e)&&["macOS","Windows"].includes(e?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Singularity","Singularity / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(r,o)=>(0,i.jsx)(s.Z,{title:"Environment",description:"The Python package management system.",selected:o,inputProps:{choices:n,value:e?.environment,onChange:t("environment")}},r),show:e=>e?.service,selected:e=>a(n,e?.environment)}},v=(e,t)=>()=>{let n=[];return n="Lyra"===e?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(r,o)=>(0,i.jsx)(s.Z,{title:"Tool",description:"The interface to use for running the model.",selected:o,inputProps:{choices:n,value:e?.tool,onChange:t("tool")}},r),show:e=>e?.service,selected:e=>a(n,e?.tool)}};function C(e){let{config:t,onConfigChange:n,getConfigGroups:s}=e;return(0,i.jsx)(r.r,{templateColumns:"auto 1fr",gridColumnGap:2,alignItems:"center",children:Object.entries(s(t,n)).map((e=>{let[t,n]=e;return[t,n()]})).filter((e=>{let[n,r]=e;return r.show(t)})).map((e=>{let[n,r]=e;return r.element(n,r.selected(t))}))})}const Z=(e,t)=>Object.values(t(e)).map((e=>e())).filter((t=>t.show(e))).every((t=>t.selected(e)))},1778:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7747),s=n(3717),o=n(4153),i=n(7405),l=n(3949),a=n(7294),c=n(5893);function u(e){let{alertDismissible:t=!0,alertType:n="info",onClose:u={},children:d=null}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.xu,{}),(0,c.jsx)(s.k,{direction:"row",align:"center",children:(0,c.jsx)(r.xu,{w:"100%",children:(0,c.jsxs)(o.b,{display:"flex",status:n,children:[(0,c.jsx)(i.z,{}),d&&"string"==typeof d?`${d}`:a.isValidElement(d)&&d,t&&(0,c.jsx)(l.P,{size:"sm",style:{marginLeft:"auto"},position:"relative",right:"0",top:"0",onClick:u})]})})})]})}},5833:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(5106),s=n(9563),o=n(7747),i=n(9981),l=n(2757),a=n(5893);function c(e){let{title:t,description:n,selected:c}=e;return(0,a.jsxs)(o.xu,{children:[c?(0,a.jsx)(r.r,{color:"green.500"}):(0,a.jsx)(i.u,{label:"Pick an option",children:(0,a.jsx)(s.a,{color:"orange.500"})}),(0,a.jsx)(i.u,{label:n,placement:"top",hasArrow:!0,children:(0,a.jsx)(l.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:t})})]})}},4260:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),s=n(3717),o=n(9981),i=n(4225),l=n(6115),a=n(5893);function c(e){let{choices:t,value:n,onChange:r=(()=>{})}=e;const{colorScheme:c}=(0,l.Q5)();return(0,a.jsx)(s.k,{flexGrow:"1",children:t?.map((e=>{const{label:t,description:s}=Array.isArray(e)?{label:e[0],description:e[1]}:{label:e,description:""},l=t===n;return(0,a.jsx)(o.u,{label:s,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,a.jsx)(i.z,{flex:"1",variant:l?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>r(t),colorScheme:l?c:"gray",children:t})},t)}))})}var u=n(1778),d=n(5833);function h(e){let{title:t,description:n,selected:s,inputProps:o,onChange:i={},showAlert:l=!1,alertDismissible:h=!0,alertType:x="info",alertMsg:p=null}=e;const[j,m]=(0,r.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{title:t,description:n,selected:s}),(0,a.jsx)(c,{onChange:i,...o})]}),l&&!j&&(0,a.jsx)(u.Z,{alertDismissible:h,alertType:x,onClose:()=>{m(!0)},children:p})]})}},2458:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7294),s=n(3717),o=n(7747),i=n(2140),l=n(3090),a=n(1680),c=n(1293),u=n(8237),d=n(6115),h=n(5893);function x(e){let{value:t=1,label:n,onChange:r=(()=>{}),...x}=e;const{colorScheme:p}=(0,d.Q5)();return(0,h.jsxs)(s.k,{children:[(0,h.jsx)(o.xu,{width:"120px",children:(0,h.jsxs)(i.B,{size:"sm",children:[(0,h.jsx)(l.I,{type:"number",value:t,onChange:e=>r(parseInt(e.target.value)),textAlign:"center"}),(0,h.jsx)(a.xW,{width:"60px",p:0,justifyContent:"center",children:(0,h.jsx)(c.x,{mb:"0",children:n})})]})}),(0,h.jsxs)(u.iR,{display:"block",flex:"1",ml:2,value:t,focusThumbOnChange:!1,colorScheme:p,onChange:e=>r(e),...x,children:[(0,h.jsx)(u.Uj,{children:(0,h.jsx)(u.Ms,{})}),(0,h.jsx)(u.gs,{})]})]})}var p=n(1778),j=n(5833);function m(e){let{title:t,description:n,selected:s,inputProps:o,onChange:i={},showAlert:l=!1,alertDismissible:a=!0,alertType:c="info",alertMsg:u=null}=e;const[d,m]=(0,r.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j.Z,{title:t,description:n,selected:s}),(0,h.jsx)(x,{onChange:i,...o})]}),l&&!d&&(0,h.jsx)(p.Z,{alertDismissible:a,alertType:c,onClose:()=>{m(!0)},children:u})]})}},6115:(e,t,n)=>{n.d(t,{DN:()=>d,Q5:()=>x,fD:()=>j});var r=n(2883),s=n(6089),o=n(2757),i=n(3990),l=n(3614),a=n(607),c=n(7294),u=n(5893);function d(e){let{title:t,subtitle:n,logo:i,alt:l,link:a}=e;return(0,u.jsxs)(r.r,{href:a,isExternal:!0,children:[(0,u.jsx)(s.E,{float:"left",verticalAlign:"middle",src:i,alt:l,display:"inline",height:"30px"}),(0,u.jsx)(o.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:t}),n&&(0,u.jsx)(o.X,{as:"h3",size:"xs",mt:4,children:n})]})}const h=(0,c.createContext)({colorScheme:"teal",pickerTextColor:"white",pickerTextShadow:"1px 1px 1px black"}),x=()=>(0,c.useContext)(h),p=e=>{let{children:t,...n}=e;return(0,u.jsx)(h.Provider,{value:{...n},children:t})};function j(e){let{colorScheme:t,header:n,body:r}=e;return(0,u.jsx)(p,{colorScheme:t,children:(0,u.jsxs)(i.Z,{children:[n&&(0,u.jsx)(l.O,{children:n}),(0,u.jsx)(a.e,{children:r})]})})}},3623:(e,t,n)=>{n.d(t,{s:()=>v});var r=n(7747),s=n(3717),o=n(6101),i=n(2233),l=n(4758),a=n(1778),c=n(9206),u=n(483),d=n(959),h=n(4461),x=n(4124),p=n(4028),j=n(889),m=n(7294),g=n(5893);function f(e){let{children:t}=e;const[n,r]=(0,m.useState)(-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0);return(0,g.jsxs)(d.m,{index:n,onChange:r,children:[(0,g.jsxs)(h.t,{children:[(0,g.jsx)(x.O,{children:"Windows"}),(0,g.jsx)(x.O,{children:"macOS"}),(0,g.jsx)(x.O,{children:"Linux"})]}),(0,g.jsxs)(p.n,{children:[(0,g.jsx)(j.x,{p:0,children:t[0]}),(0,g.jsx)(j.x,{p:0,children:t[1]}),(0,g.jsx)(j.x,{p:0,children:t[2]})]})]})}function b(e){let{username:t}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{children:"Connect to Lyra"}),(0,g.jsx)(a.Z,{alertType:"info",alertDismissible:!1,children:"If you are off-campus, you will first need to connect to the QUT network using the VPN."}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"See the instructions ",link:{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",text:"here",color:"blue.500",isExternal:!0},textAfterLink:" for more information about how to use Lyra."})}),(0,g.jsxs)(f,{children:[(0,g.jsxs)(r.xu,{children:[(0,g.jsx)(a.Z,{alertType:"info",alertDismissible:!1,children:(0,g.jsx)(i.Z,{textBeforeLink:"You may need to enable the ",link:{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",text:"ssh feature",color:"blue.500",isExternal:!0},hasExternalIcon:!1,textAfterLink:" in Windows."})}),(0,g.jsx)(u.Z,{children:(0,g.jsxs)(s.k,{alignItems:"center",children:[(0,g.jsx)(i.Z,{textBeforeLink:"In ",link:{href:"https://aka.ms/terminal",text:"Windows Terminal",color:"blue.500",isExternal:!0}}),(0,g.jsx)(i.Z,{textBeforeLink:", Powershell, ",link:{href:"https://www.putty.org/",text:"PuTTY",color:"blue.500",isExternal:!0},textAfterLink:", or cmd.exe, run the following command to connect to Lyra:"})]})})]}),(0,g.jsx)(r.xu,{children:(0,g.jsx)(u.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,g.jsx)(r.xu,{children:(0,g.jsx)(u.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===t&&(0,g.jsx)(u.Z,{children:(0,g.jsxs)("i",{children:["Replace ",(0,g.jsx)(o.E,{children:"username"})," with your QUT username."]})}),(0,g.jsxs)(l.Z,{children:["ssh ",t||"username","@lyra.qut.edu.au"]})]})}function y(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{children:"Connect to JupyterHub"}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"Visit ",link:{href:"https://jupyterhub.eres.qut.edu.au",text:"https://jupyterhub.eres.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:" and log in with your QUT username and password."})})]})}function w(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{children:"Connect to rVDI"}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"See the instructions ",link:{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",text:"here",color:"blue.500",isExternal:!0},textAfterLink:" for more information."})}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"If you have not already, download and install the VMware Horizon client from ",link:{href:"https://rvdi.qut.edu.au",text:"https://rvdi.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:"."})}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"In the VMware Horizon client, connect to ",link:{href:"https://rvdi.qut.edu.au",text:"https://rvdi.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:" and log in with your QUT username and password."})})]})}function v(e){let{service:t,username:n}=e;return(0,g.jsxs)(g.Fragment,{children:["Lyra"===t&&(0,g.jsx)(b,{username:n}),"JupyterHub"===t&&(0,g.jsx)(y,{}),"rVDI"===t&&(0,g.jsx)(w,{}),"Local"===t&&(0,g.jsx)(g.Fragment,{})," "]})}},665:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(9754),s=n(8049),o=n(9371),i=n(2140),l=n(3090),a=n(2735),c=n(7821),u=n(7294),d=n(9206),h=n(5893);function x(e){let{label:t,placeholder:n,value:x,onChange:p,pattern:j,helperText:m,errorText:g}=e;const[f,b]=(0,u.useState)(x),[y,w]=(0,u.useState)(!0);(0,u.useEffect)((()=>{w(j.test(x)),b(x)}),[x]);return(0,h.jsxs)(s.NI,{isInvalid:!y,children:[(0,h.jsx)(o.l,{children:(0,h.jsx)(d.Z,{children:t})}),(0,h.jsxs)(i.B,{children:[(0,h.jsx)(l.I,{type:"text",placeholder:n,value:f,onChange:e=>{b(e.target.value),p(e.target.value)},pattern:j}),y&&""!==x&&(0,h.jsx)(a.x,{children:(0,h.jsx)(r.n,{color:"green.500"})})]}),!y&&(0,h.jsx)(c.J1,{children:g}),(0,h.jsx)(s.Q6,{children:m})]})}},1400:(e,t,n)=>{n.d(t,{Bc:()=>g,CJ:()=>j,HW:()=>m,Wh:()=>p});var r=n(6101),s=n(3717),o=n(7747),i=n(6180),l=n(3090),a=n(7294),c=n(2233),u=n(4758),d=n(9206),h=n(483),x=n(5893);function p(e){let{jobType:t,jobName:n="",nodes:p,wallTime:j,hardware:m,cpuVendor:g,cpuModel:f,cpuCores:b,ram:y,gpuVendor:w,gpuModel:v,gpuModules:C,isArrayJob:Z,jobInstances:T}=e;const k=[`select=${"Interactive"===t?1:p}`,`ncpus=${b}`,`mem=${y}gb`];"Any"!==g&&f&&k.push(`cputype=${f}`),"GPU"===m&&(k.push(`ngpus=${C}`),"Any"!==w&&v&&k.push(`gputype=${v}`));const I=["Interactive"===t?" -I -S /bin/bash":"","Interactive"!==t&&""!==n?' -N "'+n+'"':"","Batch"===t&&"Array"===Z?" -J "+T?.firstIndex+"-"+T?.upperBound:"","Batch"===t&&"Array"===Z&&T?.step>1?":"+T?.step:""],P="Interactive"===t?"01:00:00":(j?.hour<10?"0":"")+j?.hour+":"+(j?.minute<10?"0":"")+j?.minute+":00",[A,S]=(0,a.useState)(!1),[M,L]=(0,a.useState)(""),B=`qsub${I.join("")} -l walltime=${P} -l ${k.join(":")}${"Batch"===t&&A?" "+M:""}`;return(0,x.jsxs)(x.Fragment,{children:["Batch"===t&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{children:"Creating a batch job script"}),(0,x.jsxs)(h.Z,{children:["Before scheduling a batch job, you need to create a job script first (Click to edit):",(0,x.jsx)(u.Z,{editable:!0,children:["#!/bin/bash -l","","cd $PBS_O_WORKDIR","","echo \"Running job '$PBS_JOBNAME' ($PBS_JOBID) in the following directory: $PWD\""].join("\n")})]}),(0,x.jsxs)(h.Z,{children:["You can either edit and copy the above content, use"," ",(0,x.jsx)(r.E,{children:"qsub"})," command submitting a job, paste it to standard input to run it."]}),(0,x.jsxs)(h.Z,{children:["(Note: When submitting a job without specifying your script, you will see"," ",(0,x.jsx)(r.E,{children:"Job script will be read from standard input. Submit with CTRL+D."})," ","which indicates standard input mode.)"]}),(0,x.jsx)(h.Z,{children:"Alternatively, save your script as a file, and use it as a command-line argument."}),(0,x.jsx)(h.Z,{children:(0,x.jsxs)(s.k,{alignItems:"center",children:["Pick your favourite text editor (e.g.: ",(0,x.jsx)(r.E,{children:"nano"}),","," ",(0,x.jsx)(r.E,{children:"vim"})," or ",(0,x.jsx)(r.E,{children:"gedit"}),").",(0,x.jsx)(c.Z,{textBeforeLink:"If you do not know how to use text editors, please ",link:{href:"https://qutvirtual4.qut.edu.au/group/staff/research/conducting/facilities/advanced-research-computing-storage/supercomputing/using-linux",text:"refer here",color:"blue.500",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})]})})]}),(0,x.jsx)(d.Z,{children:"Schedule a job"}),(0,x.jsxs)(h.Z,{children:["In the ssh session, run the following command to schedule the"," ",t.toLowerCase()," job:"]}),"Batch"===t&&(0,x.jsxs)(s.k,{children:[(0,x.jsx)(o.xu,{minWidth:"20%",children:(0,x.jsx)(i.X,{isChecked:A,onChange:e=>S(e.target.checked),children:"I have a script to specify"})}),A&&(0,x.jsx)(l.I,{size:"xs",placeholder:"full/path/to/your_script.sh",value:M,onChange:e=>L(e.target.value)})]}),(0,x.jsx)(u.Z,{children:B}),"Interactive"===t&&(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(h.Z,{children:["Wait for the job to start, and take note of the node you are on (eg."," ",(0,x.jsx)(r.E,{children:"cl5n042"}),")."]})}),"Batch"===t&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{children:"You can check the status of your jobs by running the following:"}),(0,x.jsx)(u.Z,{children:"qstat -u $USER"})]})]})}function j(e){let{jobProfile:t}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{children:"Schedule a job"}),(0,x.jsxs)(h.Z,{children:["From the JupyterHub home page, click ",(0,x.jsx)(r.E,{children:"Start My Server"})," to schedule a job."]}),(0,x.jsxs)(h.Z,{children:["From the list of available options, select the one containing"," ",(0,x.jsxs)(r.E,{children:["Lyra - ",t]})," and click the ",(0,x.jsx)(r.E,{children:"Start"})," ","button."]}),(0,x.jsx)(d.Z,{children:"Waiting Screen"}),(0,x.jsxs)(h.Z,{children:["You will now enter a waiting screen and see the following message:",(0,x.jsx)("br",{}),(0,x.jsx)(r.E,{children:"Your server is starting up."}),(0,x.jsx)("br",{}),(0,x.jsx)(r.E,{children:"You will be redirected automatically when it's ready for you"})]}),(0,x.jsx)(h.Z,{children:"Wait for the to be redirected."}),(0,x.jsx)(h.Z,{children:(0,x.jsx)(c.Z,{textBeforeLink:"It may take up to 10 minutes for your job to be queued and for the server to start. If it fails to start, please raise an incident in the ",link:{href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",text:"eResearch help centre",color:"blue.500",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})})]})}function m(e){let t,{hardware:n,os:s}=e;return t="Linux"===s?"Red Hat VDI Medium with GPU":"GPU"===n?"eResearch Large with GPU":"eResearch General VDI",(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{children:"Start a session"}),(0,x.jsxs)(h.Z,{children:["From the list of machines, select the one named"," ",(0,x.jsx)(r.E,{children:t})]})]})}function g(e){let{_hardware:t,_os:n}=e}},6240:(e,t,n)=>{n.d(t,{v:()=>u});var r=n(6409),s=n(6101),o=n(4758),i=n(1778),l=n(9206),a=n(483),c=n(5893);function u(e){let{service:t,jobType:n,environment:u,usingTool:d=!1}=e;return(0,c.jsxs)(c.Fragment,{children:["Lyra"===t&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{alertType:"warning",alertDismissible:!1,children:"Lyra is a shared resource, only request the resources you need."})}),d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Stop the server"}),(0,c.jsxs)(a.Z,{children:["Once you have finished using the tool, stop the server by pressing"," ",(0,c.jsx)(r.T,{children:"Ctrl"})," + ",(0,c.jsx)(r.T,{children:"C"})," in the terminal."]}),(0,c.jsx)(a.Z,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."})]}),"Singularity"===u&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Exit the container"}),(0,c.jsxs)(a.Z,{children:["Exit the container by pressing ",(0,c.jsx)(r.T,{children:"Ctrl"})," + ",(0,c.jsx)(r.T,{children:"D"}),", or typing ",(0,c.jsx)(s.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===t&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Stop the job"}),"Interactive"===n&&(0,c.jsxs)(a.Z,{children:["Stop the job by pressing ",(0,c.jsx)(r.T,{children:"Ctrl"})," + ",(0,c.jsx)(r.T,{children:"D"}),", or typing"," ",(0,c.jsx)(s.E,{children:"exit"})," in the terminal."]}),"Batch"===n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{children:"The batch job will stop automatically when the job's script terminates, or the walltime elapses."}),(0,c.jsxs)(a.Z,{children:["To stop the job early, you need to know your job id. You can either note down your job id when you submit a batch job, or find the job id using the check job status command:",(0,c.jsx)(o.Z,{children:"qstat -u $USER"})]}),(0,c.jsxs)(a.Z,{children:["To stop the job early, run the following:",(0,c.jsx)(o.Z,{children:"qdel {job_id}"})]})]}),(0,c.jsx)(l.Z,{children:"Exit the ssh session"}),(0,c.jsxs)(a.Z,{children:["Exit the ssh session on Lyra by pressing ",(0,c.jsx)(r.T,{children:"Ctrl"})," +"," ",(0,c.jsx)(r.T,{children:"D"}),", or typing ",(0,c.jsx)(s.E,{children:"exit"})," in the terminal."]}),d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Stop port forwarding"}),(0,c.jsxs)(a.Z,{children:["Stop local port forwarding by pressing ",(0,c.jsx)(r.T,{children:"Ctrl"})," +"," ",(0,c.jsx)(r.T,{children:"D"}),", or typing ",(0,c.jsx)(s.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})]})}},9206:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2757),s=n(5893);function o(e){let{children:t}=e;return(0,s.jsx)(r.X,{as:"h3",size:"sm",my:4,children:t})}},483:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(1293),s=n(5893);function o(e){let{children:t}=e;return(0,s.jsx)(r.x,{my:4,children:t})}},9235:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(2757),s=n(7294);const o=n.p+"assets/images/qut-f500d51a24669f94cd64892fe289c0d3.png";var i=n(2233),l=n(3684),a=n(3717),c=n(2140),u=n(7555),d=n(1680),h=n(6115),x=n(5893);function p(e){let{value:t=1,allowMouseWheel:n=!0,label:r,onChange:s=(()=>{}),...o}=e;const{colorScheme:i}=(0,h.Q5)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(c.B,{size:"sm",width:"unset",children:[(0,x.jsxs)(u.Y2,{defaultValue:t,allowMouseWheel:n,onChange:s,colorScheme:i,...o,children:[(0,x.jsx)(u.zu,{focusBorderColor:"red.200"}),(0,x.jsxs)(u.Fi,{children:[(0,x.jsx)(u.WQ,{}),(0,x.jsx)(u.Y_,{})]})]}),(0,x.jsx)(d.xW,{children:r})]})})}var j=n(1778),m=n(5833);function g(e){let{title:t,description:n,selected:r,value:o={},onChange:i,inputProps:l,showAlert:c=!1,alertDismissible:u=!0,alertType:d="info",alertMsg:h=""}=e;const[g,f]=(0,s.useState)(!1),b=e=>e.replace(/([A-Z])/g," $1").replace(/^./,(e=>e.toUpperCase()));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.Z,{title:t,description:n,selected:r}),(0,x.jsx)(a.k,{justifyContent:"flex-start",children:Object.keys(o).map(((e,t)=>(0,x.jsx)(p,{w:"100px",label:b(e),value:o[e],onChange:t=>{i({...o,[e]:parseInt(t)})},...Array.isArray(l)?l[t]:l},e)))}),c&&!g&&(0,x.jsx)(j.Z,{alertDismissible:u,alertType:d,onClose:()=>{f(!0)},children:h})]})}var f=n(4260),b=n(2458),y=n(7747),w=n(9273),v=n(3623),C=n(665),Z=n(1400),T=n(6240);const k=/^[a-z0-9]*$/,I=/^(?=.*[A-Za-z0-9._+-])[A-Za-z0-9._+-]+$/;function P(e){let{config:t}=e;const[n,r]=(0,w.Z)("qutUsername",""),[s,o]=(0,w.Z)("qutBatchJobName","Batch-job-name");return(0,x.jsxs)(y.xu,{children:["Lyra"===t.service&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C.Z,{label:"QUT Username",placeholder:"username",value:n,onChange:r,pattern:k,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),"Batch"===t.jobType&&(0,x.jsx)(C.Z,{label:"Batch Job Name",placeholder:"Batch-job-name",value:s,onChange:o,pattern:I,helperText:"Please enter your batch job name so that it can be pre-populated in the commands below.",errorText:"Job name must only contain alphanumerics or '-', '_', '+', '.' and must not be empty."})]}),s&&(0,x.jsx)(v.s,{service:t.service,username:n}),"Lyra"===t.service&&(0,x.jsx)(x.Fragment,{children:s&&(0,x.jsx)(Z.Wh,{jobType:t.jobType,jobName:s,hardware:t.hardware,cpuVendor:t.cpuVendor,cpuModel:t.cpuModel,cpuCores:t.cpuCores,ram:t.ram,gpuVendor:t.gpuVendor,gpuModel:t.gpuModel,gpuModules:t.gpuModules,nodes:t.nodes,wallTime:t.wallTime,isArrayJob:t.isArrayJob,jobInstances:t.jobInstances})}),"JupyterHub"===t.service&&(0,x.jsx)(Z.CJ,{jobProfile:t.jobProfile}),"rVDI"===t.service&&(0,x.jsx)(Z.HW,{hardware:t.hardware,os:t.os}),"Local"===t.service&&(0,x.jsx)(Z.Bc,{hardware:t.hardware,os:t.os}),s&&(0,x.jsx)(T.v,{service:t.service,jobType:t.jobType,environment:t.environment})]})}const A=function(e,t){void 0===t&&(t=()=>{});const n=n=>r=>t({...e,[n]:r});return{service:()=>{const t=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"]];return{element:(r,s)=>(0,x.jsx)(f.Z,{title:"Service",description:"The service to use for running the job.",selected:s,inputProps:{choices:t,value:e?.service,onChange:n("service")}},r),show:()=>!0,selected:e=>(0,l.p8)(t,e?.service)}},jobType:()=>{const t=[["Interactive","Run the job in an interactive shell"],["Batch","Submit the job to the queue to run in the background"]];return{element:(r,s)=>(0,x.jsx)(f.Z,{title:"Job Type",description:"The type of PBS job to run.",selected:s,inputProps:{choices:t,value:e?.jobType,onChange:n("jobType")}},r),show:e=>"Lyra"===e?.service,selected:e=>(0,l.p8)(t,e?.jobType)}},nodes:()=>({element:(t,r)=>(0,x.jsx)(b.Z,{title:"Nodes",description:"The number of nodes to use for the job.",selected:r,inputProps:{label:e?.nodes>1?"nodes":"node",value:e?.nodes,min:1,max:100,step:1,onChange:n("nodes")},showAlert:e?.nodes>1,alertType:"warning",alertMsg:(0,x.jsx)(i.Z,{textBeforeLink:"Only use more than 1 node if you are using ",link:{href:"https://hpc-wiki.info/hpc/MPI",text:"MPI",isExternal:!0},hasExternalIcon:!0,textAfterLink:"-type software."})},t),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>e?.nodes>0}),isArrayJob:()=>{const t=[["Standalone","Run a single instance of the job"],["Array","Run many instances of the job in parallel"]];return{element:(r,s)=>(0,x.jsx)(f.Z,{title:"Job Instances",description:"Run a single instance, or many instances of the job.",selected:s,inputProps:{choices:t,value:e?.isArrayJob,onChange:n("isArrayJob")}},r),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>(0,l.p8)(t,e?.isArrayJob)}},jobInstances:()=>({element:(t,r)=>(0,x.jsx)(g,{title:"Instances Config",description:"Array job settings",selected:r,value:e?.jobInstances,onChange:n("jobInstances"),inputProps:{min:0}},t),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType&&"Array"===e?.isArrayJob,selected:e=>e?.jobInstances.step>=1&&e?.jobInstances.upperBound>=e?.jobInstances.firstIndex&&e?.jobInstances.upperBound>e?.jobInstances.step&&e?.jobInstances.upperBound>=e?.jobInstances.firstIndex+e?.jobInstances.step}),wallTime:()=>({element:(t,r)=>(0,x.jsx)(g,{title:"Walltime",description:"The estimated total time for the job.",selected:r,onChange:n("wallTime"),value:e?.wallTime,inputProps:[{min:0,step:1},{min:e?.wallTime?.hour<1?1:0,max:59,step:1}]},t),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>e?.wallTime.hour>0||e?.wallTime.minute>0}),hardware:()=>{let t;return t=(0,l.Ae)(e)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU"]],{element:(r,s)=>(0,x.jsx)(f.Z,{title:"Hardware",description:"The hardware to use for running the job.",selected:s,inputProps:{choices:t,value:e?.hardware,onChange:n("hardware")},showAlert:"IPU"===e?.hardware,alertType:"warning",alertMsg:(0,x.jsx)(i.Z,{textBeforeLink:"IPUs are currently unavailable. Please ",link:{href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",text:"contact eResearch if interested",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})},r),show:e=>e?.service,selected:e=>(0,l.p8)(t,e?.hardware)}},cpuVendor:(0,l._3)(e,n),cpuModel:(0,l.Rs)(e,n),cpuCores:(0,l.UJ)(e,n),ram:(0,l.Hw)(e,n),gpuVendor:(0,l.zh)(e,n),gpuModel:(0,l.DD)(e,n),gpuModules:(0,l.bD)(e,n),jobProfile:(0,l.H4)(e,n)}};function S(e){let{initialConfig:t=l.g5,showHeader:n=!0}=e;const[i,a]=(0,s.useState)(t);(0,s.useEffect)((()=>{a(t)}),[t]);const c=(0,l.Bz)(i,A),u=n?(0,x.jsx)(h.DN,{title:"eResearch Job",subtitle:"Use the form below to configure a workload that runs on the eResearch infrastructure at QUT.",logo:o,alt:"QUT logo",link:"https://www.qut.edu.au/research/eresearch"}):null,d=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.X,{as:"h2",size:"md",my:2,children:"Configuration"}),(0,x.jsx)(l.De,{config:i,onConfigChange:a,getConfigGroups:A}),c&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.X,{as:"h2",size:"md",my:2,children:"Instructions"}),(0,x.jsx)(P,{config:i})]})]});return(0,x.jsx)(h.fD,{colorScheme:"qut",header:u,body:d})}function M(){return(0,x.jsx)(S,{showHeader:!1})}}}]);