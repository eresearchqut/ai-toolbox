"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[3671],{9273:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);function s(e,t){const[r,s]=(0,n.useState)((()=>{const r=localStorage.getItem(e);return r?JSON.parse(r):t}));return(0,n.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,s]}},2233:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(5349),s=r(1293),o=r(2883),i=r(5893);function l(e){let{textBeforeLink:t="",link:r={href:"",text:"",color:void 0,isExternal:!1},hasExternalIcon:l=!1,textAfterLink:a=""}=e;return(0,i.jsxs)(s.x,{mb:0,children:[t,(0,i.jsxs)(o.r,{color:r?.color?r.color:"teal.500",href:r.href,isExternal:r?.isExternal,children:[r.text,l&&(0,i.jsx)(n.h,{mx:"2px"})]}),a]})}},4758:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(5392),s=r(5161),o=r(6344),i=r(7747),l=r(5744),a=r(8589),c=r(9981),u=r(4225),d=r(7294),h=r(5893);function p(e){let{children:t,editable:r=!1,defaultRows:p=10}=e;const[x,j]=(0,d.useState)(!1),[m,g]=(0,d.useState)(!1),f=(0,s.ff)("gray.200","gray.500"),y=(0,s.ff)("gray.50","gray.800"),b=r?o.C:i.xu,[w,v]=(0,d.useState)(Array.isArray(t)?t.join(""):t);return(0,d.useEffect)((()=>{v(Array.isArray(t)?t.join(""):t)}),[t]),(0,h.jsxs)(b,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:f,bg:y,fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>j(!0),onMouseOut:()=>j(!1),position:"relative",defaultValue:w,onSubmit:e=>v(e),children:[r?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.w,{}),(0,h.jsx)(a.H,{rows:p})]}):w,x&&(0,h.jsx)(c.u,{label:m?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,h.jsx)(u.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(w),g(!0),setTimeout((()=>g(!1)),1e3)},colorScheme:m?"green":"gray",children:(0,h.jsx)(n.T,{})})})]},w)}},3684:(e,t,r)=>{r.d(t,{Ae:()=>c,Bz:()=>T,DD:()=>y,De:()=>C,H4:()=>g,Hw:()=>m,R:()=>v,Rs:()=>x,UJ:()=>j,_3:()=>p,bD:()=>b,g5:()=>l,kA:()=>h,p8:()=>a,zh:()=>f,zj:()=>w});var n=r(9078),s=r(4260),o=r(2458),i=r(5893);const l={nodes:1,cpuCores:4,ram:32,gpuModules:1,wallTime:{hour:1,minute:0},jobInstanceType:"Standalone",arrayConfig:{firstIndex:1,upperBound:10,step:1}},a=(e,t)=>0!==e.length&&(Array.isArray(e[0])?e.map((e=>e[0])).includes(t):e.includes(t)),c=e=>"Lyra"===e?.service,u=e=>["rVDI","Local"].includes(e?.service),d=e=>"GPU"===e?.hardware,h=(e,t)=>()=>{let r;return r="rVDI"===e?.service?["Linux","Windows"]:"Local"===e?.service?["Linux","macOS","Windows"]:["Linux"],{element:(n,o)=>(0,i.jsx)(s.Z,{title:"OS",description:"The operating system to use for running the model.",selected:o,inputProps:{choices:r,value:e?.os,onChange:t("os")}},n),show:e=>u(e),selected:e=>a(r,e?.os)}},p=(e,t)=>()=>{const r=["Any","AMD","Intel"];return{element:(n,o)=>(0,i.jsx)(s.Z,{title:"CPU vendor",selected:o,inputProps:{choices:r,value:e?.cpuVendor,onChange:t("cpuVendor")}},n),show:e=>c(e),selected:e=>a(r,e?.cpuVendor)}},x=(e,t)=>()=>{let r=[];return"AMD"===e?.cpuVendor?r=["7702","7713"]:"Intel"===e?.cpuVendor&&(r=["6140","6248","8260","E7-8890v4"]),{element:(n,o)=>(0,i.jsx)(s.Z,{title:"CPU model",selected:o,inputProps:{choices:r,value:e?.cpuModel,onChange:t("cpuModel")}},n),show:e=>c(e)&&e?.cpuVendor&&"Any"!==e.cpuVendor,selected:e=>a(r,e?.cpuModel)}},j=(e,t)=>()=>{let r;return r="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?128:"6140"===e?.cpuModel?36:"6248"===e?.cpuModel?40:"8260"===e?.cpuModel?48:"E7-8890v4"===e?.cpuModel?96:128,{element:(n,s)=>(0,i.jsx)(o.Z,{title:"CPU",selected:s,inputProps:{value:e?.cpuCores,label:e?.cpuCores>1?"cores":"core",min:1,max:r,step:1,onChange:e=>{t("cpuCores")(e),t("ram")(8*e)}}},n),show:e=>c(e),selected:()=>!0}},m=(e,t)=>()=>{let r;return r="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?1006:"6140"===e?.cpuModel||"6248"===e?.cpuModel||"8260"===e?.cpuModel?186:"E7-8890v4"===e?.cpuModel?5794:1006,{element:(n,s)=>(0,i.jsx)(o.Z,{title:"RAM",selected:s,inputProps:{value:e?.ram,label:"GB",min:8,max:r,step:8,onChange:t("ram")},showAlert:e?.ram!==8*e?.cpuCores,alertType:"warning",alertMsg:"The recommended RAM is 8GB per core."},n),show:e=>c(e),selected:()=>!0}},g=(e,t)=>()=>{let r=[];return"CPU"===e?.hardware?r=["1 core, 8 GB, 8 hours","4 cores, 32 GB, 8 hours","8 cores, 64 GB, 4 hours","16 cores, 128GB, 4 hours"]:"GPU"===e?.hardware&&(r=["4 cores, 32 GB, T4 GPU, 4 hours","8 cores, 64 GB, T4 GPU, 2 hours"]),{element:(n,o)=>(0,i.jsx)(s.Z,{title:"Job Profile",selected:o,inputProps:{choices:r,value:e?.jobProfile,onChange:t("jobProfile")}},n),show:e=>"JupyterHub"===e?.service&&e?.hardware,selected:e=>a(r,e?.jobProfile)}},f=(e,t)=>()=>{const r=["Any","NVIDIA","AMD"];return{element:(n,o)=>(0,i.jsx)(s.Z,{title:"GPU vendor",selected:o,inputProps:{choices:r,value:e?.gpuVendor,onChange:t("gpuVendor")}},n),show:e=>c(e)&&d(e),selected:e=>a(r,e?.gpuVendor)}},y=(e,t)=>()=>{let r=[];return"NVIDIA"===e?.gpuVendor?r=[["T4","Tesla T4 16 GB"],["P100","TESLA P100-PCIE-16GB"],["V100","TESLA V100-PCIE-32GB"],["A100","NVIDIA A100-SXM4-40GB"]]:"AMD"===e?.gpuVendor&&(r=[["MI100","AMD MI100 32 GB"],["MI210","AMD MI210 16 GB"]]),{element:(n,o)=>(0,i.jsx)(s.Z,{title:"GPU model",selected:o,inputProps:{choices:r,value:e?.gpuModel,onChange:t("gpuModel")}},n),show:e=>c(e)&&"GPU"===e?.hardware&&e?.gpuVendor&&"Any"!==e.gpuVendor,selected:e=>a(r,e?.gpuModel)}},b=(e,t)=>()=>({element:(r,n)=>(0,i.jsx)(o.Z,{title:"GPU",selected:n,inputProps:{value:e?.gpuModules,label:e?.gpuModules>1?"GPUs":"GPU",min:1,max:8,step:1,onChange:t("gpuModules")},showAlert:e?.gpuModules>1,alertType:"warning",alertMsg:"Only use more than 1 GPU if your job is capable of utilising multiple GPUs simultaneously."},r),show:e=>c(e)&&d(e),selected:()=>!0}),w=(e,t)=>()=>{let r=[];return r="JupyterHub"===e?.service?[["Conda","Conda package manager"]]:u(e)&&["macOS","Windows"].includes(e?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Singularity","Singularity / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(n,o)=>(0,i.jsx)(s.Z,{title:"Environment",description:"The Python package management system.",selected:o,inputProps:{choices:r,value:e?.environment,onChange:t("environment")}},n),show:e=>e?.service,selected:e=>a(r,e?.environment)}},v=(e,t)=>()=>{let r=[];return r="Lyra"===e?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(n,o)=>(0,i.jsx)(s.Z,{title:"Tool",description:"The interface to use for running the model.",selected:o,inputProps:{choices:r,value:e?.tool,onChange:t("tool")}},n),show:e=>e?.service,selected:e=>a(r,e?.tool)}};function C(e){let{config:t,onConfigChange:r,getConfigGroups:s}=e;return(0,i.jsx)(n.r,{templateColumns:"auto 1fr",gridColumnGap:2,alignItems:"center",children:Object.entries(s(t,r)).map((e=>{let[t,r]=e;return[t,r()]})).filter((e=>{let[r,n]=e;return n.show(t)})).map((e=>{let[r,n]=e;return n.element(r,n.selected(t))}))})}const T=(e,t)=>Object.values(t(e)).map((e=>e())).filter((t=>t.show(e))).every((t=>t.selected(e)))},1778:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7747),s=r(3717),o=r(4153),i=r(7405),l=r(3949),a=r(7294),c=r(5893);function u(e){let{alertDismissible:t=!0,alertType:r="info",onClose:u={},children:d=null}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.xu,{}),(0,c.jsx)(s.k,{direction:"row",align:"center",children:(0,c.jsx)(n.xu,{w:"100%",children:(0,c.jsxs)(o.b,{display:"flex",status:r,children:[(0,c.jsx)(i.z,{}),d&&"string"==typeof d?`${d}`:a.isValidElement(d)&&d,t&&(0,c.jsx)(l.P,{size:"sm",style:{marginLeft:"auto"},position:"relative",right:"0",top:"0",onClick:u})]})})})]})}},5833:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(5106),s=r(9563),o=r(7747),i=r(9981),l=r(2757),a=r(5893);function c(e){let{title:t,description:r,selected:c}=e;return(0,a.jsxs)(o.xu,{children:[c?(0,a.jsx)(n.r,{color:"green.500"}):(0,a.jsx)(i.u,{label:"Pick an option",children:(0,a.jsx)(s.a,{color:"orange.500"})}),(0,a.jsx)(i.u,{label:r,placement:"top",hasArrow:!0,children:(0,a.jsx)(l.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:t})})]})}},4260:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),s=r(3717),o=r(9981),i=r(4225),l=r(6115),a=r(5893);function c(e){let{choices:t,value:r,onChange:n=(()=>{})}=e;const{colorScheme:c}=(0,l.Q5)();return(0,a.jsx)(s.k,{flexGrow:"1",children:t?.map((e=>{const{label:t,description:s}=Array.isArray(e)?{label:e[0],description:e[1]}:{label:e,description:""},l=t===r;return(0,a.jsx)(o.u,{label:s,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,a.jsx)(i.z,{flex:"1",variant:l?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>n(t),colorScheme:l?c:"gray",children:t})},t)}))})}var u=r(1778),d=r(5833);function h(e){let{title:t,description:r,selected:s,inputProps:o,onChange:i={},showAlert:l=!1,alertDismissible:h=!0,alertType:p="info",alertMsg:x=null}=e;const[j,m]=(0,n.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{title:t,description:r,selected:s}),(0,a.jsx)(c,{onChange:i,...o})]}),l&&!j&&(0,a.jsx)(u.Z,{alertDismissible:h,alertType:p,onClose:()=>{m(!0)},children:x})]})}},2458:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294),s=r(3717),o=r(7747),i=r(2140),l=r(3090),a=r(1680),c=r(1293),u=r(8237),d=r(6115),h=r(5893);function p(e){let{value:t=1,label:r,onChange:n=(()=>{}),...p}=e;const{colorScheme:x}=(0,d.Q5)();return(0,h.jsxs)(s.k,{children:[(0,h.jsx)(o.xu,{width:"120px",children:(0,h.jsxs)(i.B,{size:"sm",children:[(0,h.jsx)(l.I,{type:"number",value:t,onChange:e=>n(parseInt(e.target.value)),textAlign:"center"}),(0,h.jsx)(a.xW,{width:"60px",p:0,justifyContent:"center",children:(0,h.jsx)(c.x,{mb:"0",children:r})})]})}),(0,h.jsxs)(u.iR,{display:"block",flex:"1",ml:2,value:t,focusThumbOnChange:!1,colorScheme:x,onChange:e=>n(e),...p,children:[(0,h.jsx)(u.Uj,{children:(0,h.jsx)(u.Ms,{})}),(0,h.jsx)(u.gs,{})]})]})}var x=r(1778),j=r(5833);function m(e){let{title:t,description:r,selected:s,inputProps:o,onChange:i={},showAlert:l=!1,alertDismissible:a=!0,alertType:c="info",alertMsg:u=null}=e;const[d,m]=(0,n.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j.Z,{title:t,description:r,selected:s}),(0,h.jsx)(p,{onChange:i,...o})]}),l&&!d&&(0,h.jsx)(x.Z,{alertDismissible:a,alertType:c,onClose:()=>{m(!0)},children:u})]})}},6115:(e,t,r)=>{r.d(t,{DN:()=>d,Q5:()=>p,fD:()=>j});var n=r(2883),s=r(6089),o=r(2757),i=r(3990),l=r(3614),a=r(607),c=r(7294),u=r(5893);function d(e){let{title:t,subtitle:r,logo:i,alt:l,link:a}=e;return(0,u.jsxs)(n.r,{href:a,isExternal:!0,children:[(0,u.jsx)(s.E,{float:"left",verticalAlign:"middle",src:i,alt:l,display:"inline",height:"30px"}),(0,u.jsx)(o.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:t}),r&&(0,u.jsx)(o.X,{as:"h3",size:"xs",mt:4,children:r})]})}const h=(0,c.createContext)({colorScheme:"teal",pickerTextColor:"white",pickerTextShadow:"1px 1px 1px black"}),p=()=>(0,c.useContext)(h),x=e=>{let{children:t,...r}=e;return(0,u.jsx)(h.Provider,{value:{...r},children:t})};function j(e){let{colorScheme:t,header:r,body:n}=e;return(0,u.jsx)(x,{colorScheme:t,children:(0,u.jsxs)(i.Z,{children:[r&&(0,u.jsx)(l.O,{children:r}),(0,u.jsx)(a.e,{children:n})]})})}},3623:(e,t,r)=>{r.d(t,{s:()=>v});var n=r(7747),s=r(3717),o=r(6101),i=r(2233),l=r(4758),a=r(1778),c=r(9206),u=r(483),d=r(959),h=r(4461),p=r(4124),x=r(4028),j=r(889),m=r(7294),g=r(5893);function f(e){let{children:t}=e;const[r,n]=(0,m.useState)(-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0);return(0,g.jsxs)(d.m,{index:r,onChange:n,children:[(0,g.jsxs)(h.t,{children:[(0,g.jsx)(p.O,{children:"Windows"}),(0,g.jsx)(p.O,{children:"macOS"}),(0,g.jsx)(p.O,{children:"Linux"})]}),(0,g.jsxs)(x.n,{children:[(0,g.jsx)(j.x,{p:0,children:t[0]}),(0,g.jsx)(j.x,{p:0,children:t[1]}),(0,g.jsx)(j.x,{p:0,children:t[2]})]})]})}function y(e){let{username:t}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{children:"Connect to Lyra"}),(0,g.jsx)(a.Z,{alertType:"info",alertDismissible:!1,children:"If you are off-campus, you will first need to connect to the QUT network using the VPN."}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"See the instructions ",link:{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",text:"here",color:"blue.500",isExternal:!0},textAfterLink:" for more information about how to use Lyra."})}),(0,g.jsxs)(f,{children:[(0,g.jsxs)(n.xu,{children:[(0,g.jsx)(a.Z,{alertType:"info",alertDismissible:!1,children:(0,g.jsx)(i.Z,{textBeforeLink:"You may need to enable the ",link:{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",text:"ssh feature",color:"blue.500",isExternal:!0},hasExternalIcon:!1,textAfterLink:" in Windows."})}),(0,g.jsx)(u.Z,{children:(0,g.jsxs)(s.k,{alignItems:"center",children:[(0,g.jsx)(i.Z,{textBeforeLink:"In ",link:{href:"https://aka.ms/terminal",text:"Windows Terminal",color:"blue.500",isExternal:!0}}),(0,g.jsx)(i.Z,{textBeforeLink:", Powershell, ",link:{href:"https://www.putty.org/",text:"PuTTY",color:"blue.500",isExternal:!0},textAfterLink:", or cmd.exe, run the following command to connect to Lyra:"})]})})]}),(0,g.jsx)(n.xu,{children:(0,g.jsx)(u.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,g.jsx)(n.xu,{children:(0,g.jsx)(u.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===t&&(0,g.jsx)(u.Z,{children:(0,g.jsxs)("i",{children:["Replace ",(0,g.jsx)(o.E,{children:"username"})," with your QUT username."]})}),(0,g.jsxs)(l.Z,{children:["ssh ",t||"username","@lyra.qut.edu.au"]})]})}function b(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{children:"Connect to JupyterHub"}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"Visit ",link:{href:"https://jupyterhub.eres.qut.edu.au",text:"https://jupyterhub.eres.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:" and log in with your QUT username and password."})})]})}function w(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{children:"Connect to rVDI"}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"See the instructions ",link:{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",text:"here",color:"blue.500",isExternal:!0},textAfterLink:" for more information."})}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"If you have not already, download and install the VMware Horizon client from ",link:{href:"https://rvdi.qut.edu.au",text:"https://rvdi.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:"."})}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(i.Z,{textBeforeLink:"In the VMware Horizon client, connect to ",link:{href:"https://rvdi.qut.edu.au",text:"https://rvdi.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:" and log in with your QUT username and password."})})]})}function v(e){let{service:t,username:r}=e;return(0,g.jsxs)(g.Fragment,{children:["Lyra"===t&&(0,g.jsx)(y,{username:r}),"JupyterHub"===t&&(0,g.jsx)(b,{}),"rVDI"===t&&(0,g.jsx)(w,{}),"Local"===t&&(0,g.jsx)(g.Fragment,{})," "]})}},665:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(9754),s=r(8049),o=r(9371),i=r(2140),l=r(3090),a=r(2735),c=r(7821),u=r(7294),d=r(9206),h=r(5893);function p(e){let{label:t,placeholder:r,value:p,onChange:x,pattern:j,helperText:m,errorText:g}=e;const[f,y]=(0,u.useState)(p),[b,w]=(0,u.useState)(!0);(0,u.useEffect)((()=>{w(j.test(p)),y(p)}),[p]);return(0,h.jsxs)(s.NI,{isInvalid:!b,children:[(0,h.jsx)(o.l,{children:(0,h.jsx)(d.Z,{children:t})}),(0,h.jsxs)(i.B,{children:[(0,h.jsx)(l.I,{type:"text",placeholder:r,value:f,onChange:e=>{y(e.target.value),x(e.target.value)},pattern:j}),b&&""!==p&&(0,h.jsx)(a.x,{children:(0,h.jsx)(n.n,{color:"green.500"})})]}),!b&&(0,h.jsx)(c.J1,{children:g}),(0,h.jsx)(s.Q6,{children:m})]})}},1400:(e,t,r)=>{r.d(t,{Bc:()=>g,CJ:()=>j,HW:()=>m,Wh:()=>x});var n=r(6101),s=r(3717),o=r(7747),i=r(6180),l=r(3090),a=r(7294),c=r(2233),u=r(4758),d=r(9206),h=r(483),p=r(5893);function x(e){let{jobType:t,jobName:r="",nodes:x,wallTime:j,hardware:m,cpuVendor:g,cpuModel:f,cpuCores:y,ram:b,gpuVendor:w,gpuModel:v,gpuModules:C,jobInstanceType:T,arrayConfig:Z}=e;const k=[`select=${"Interactive"===t?1:x}`,`ncpus=${y}`,`mem=${b}gb`];"Any"!==g&&f&&k.push(`cputype=${f}`),"GPU"===m&&(k.push(`ngpus=${C}`),"Any"!==w&&v&&k.push(`gputype=${v}`));const P=["Interactive"===t?" -I -S /bin/bash":"","Interactive"!==t&&""!==r?' -N "'+r+'"':"","Batch"===t&&"Array"===T?" -J "+Z?.firstIndex+"-"+Z?.upperBound:"","Batch"===t&&"Array"===T&&Z?.step>1?":"+Z?.step:""],I="Interactive"===t?"01:00:00":(j?.hour<10?"0":"")+j?.hour+":"+(j?.minute<10?"0":"")+j?.minute+":00",[A,S]=(0,a.useState)(!1),[M,L]=(0,a.useState)(""),B=`qsub${P.join("")} -l walltime=${I} -l ${k.join(":")}${"Batch"===t&&A?" "+M:""}`;return(0,p.jsxs)(p.Fragment,{children:["Batch"===t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{children:"Creating a batch job script"}),(0,p.jsxs)(h.Z,{children:["Before scheduling a batch job, you need to create a job script first (Click to edit):",(0,p.jsx)(u.Z,{editable:!0,children:["#!/bin/bash -l","","cd $PBS_O_WORKDIR","","echo \"Running job '$PBS_JOBNAME' ($PBS_JOBID) in the following directory: $PWD\""].join("\n")})]}),(0,p.jsxs)(h.Z,{children:["You can either edit and copy the above content, use"," ",(0,p.jsx)(n.E,{children:"qsub"})," command submitting a job, paste it to standard input to run it."]}),(0,p.jsxs)(h.Z,{children:["(Note: When submitting a job without specifying your script, you will see"," ",(0,p.jsx)(n.E,{children:"Job script will be read from standard input. Submit with CTRL+D."})," ","which indicates standard input mode.)"]}),(0,p.jsx)(h.Z,{children:"Alternatively, save your script as a file, and use it as a command-line argument."}),(0,p.jsx)(h.Z,{children:(0,p.jsxs)(s.k,{alignItems:"center",children:["Pick your favourite text editor (e.g.: ",(0,p.jsx)(n.E,{children:"nano"}),","," ",(0,p.jsx)(n.E,{children:"vim"})," or ",(0,p.jsx)(n.E,{children:"gedit"}),").",(0,p.jsx)(c.Z,{textBeforeLink:"If you do not know how to use text editors, please ",link:{href:"https://qutvirtual4.qut.edu.au/group/staff/research/conducting/facilities/advanced-research-computing-storage/supercomputing/using-linux",text:"refer here",color:"blue.500",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})]})})]}),(0,p.jsx)(d.Z,{children:"Schedule a job"}),(0,p.jsxs)(h.Z,{children:["In the ssh session, run the following command to schedule the"," ",t.toLowerCase()," job:"]}),"Batch"===t&&(0,p.jsxs)(s.k,{children:[(0,p.jsx)(o.xu,{minWidth:"20%",children:(0,p.jsx)(i.X,{isChecked:A,onChange:e=>S(e.target.checked),children:"I have a script to specify"})}),A&&(0,p.jsx)(l.I,{size:"xs",placeholder:"full/path/to/your_script.sh",value:M,onChange:e=>L(e.target.value)})]}),(0,p.jsx)(u.Z,{children:B}),"Interactive"===t&&(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(h.Z,{children:["Wait for the job to start, and take note of the node you are on (eg."," ",(0,p.jsx)(n.E,{children:"cl5n042"}),")."]})}),"Batch"===t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.Z,{children:"You can check the status of your jobs by running the following:"}),(0,p.jsx)(u.Z,{children:"qstat -u $USER"})]})]})}function j(e){let{jobProfile:t}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{children:"Schedule a job"}),(0,p.jsxs)(h.Z,{children:["From the JupyterHub home page, click ",(0,p.jsx)(n.E,{children:"Start My Server"})," to schedule a job."]}),(0,p.jsxs)(h.Z,{children:["From the list of available options, select the one containing"," ",(0,p.jsxs)(n.E,{children:["Lyra - ",t]})," and click the ",(0,p.jsx)(n.E,{children:"Start"})," ","button."]}),(0,p.jsx)(d.Z,{children:"Waiting Screen"}),(0,p.jsxs)(h.Z,{children:["You will now enter a waiting screen and see the following message:",(0,p.jsx)("br",{}),(0,p.jsx)(n.E,{children:"Your server is starting up."}),(0,p.jsx)("br",{}),(0,p.jsx)(n.E,{children:"You will be redirected automatically when it's ready for you"})]}),(0,p.jsx)(h.Z,{children:"Wait for the to be redirected."}),(0,p.jsx)(h.Z,{children:(0,p.jsx)(c.Z,{textBeforeLink:"It may take up to 10 minutes for your job to be queued and for the server to start. If it fails to start, please raise an incident in the ",link:{href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",text:"eResearch help centre",color:"blue.500",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})})]})}function m(e){let t,{hardware:r,os:s}=e;return t="Linux"===s?"Red Hat VDI Medium with GPU":"GPU"===r?"eResearch Large with GPU":"eResearch General VDI",(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{children:"Start a session"}),(0,p.jsxs)(h.Z,{children:["From the list of machines, select the one named"," ",(0,p.jsx)(n.E,{children:t})]})]})}function g(e){let{_hardware:t,_os:r}=e}},6240:(e,t,r)=>{r.d(t,{v:()=>u});var n=r(6409),s=r(6101),o=r(4758),i=r(1778),l=r(9206),a=r(483),c=r(5893);function u(e){let{service:t,jobType:r,environment:u,usingTool:d=!1}=e;return(0,c.jsxs)(c.Fragment,{children:["Lyra"===t&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{alertType:"warning",alertDismissible:!1,children:"Lyra is a shared resource, only request the resources you need."})}),d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Stop the server"}),(0,c.jsxs)(a.Z,{children:["Once you have finished using the tool, stop the server by pressing"," ",(0,c.jsx)(n.T,{children:"Ctrl"})," + ",(0,c.jsx)(n.T,{children:"C"})," in the terminal."]}),(0,c.jsx)(a.Z,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."})]}),"Singularity"===u&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Exit the container"}),(0,c.jsxs)(a.Z,{children:["Exit the container by pressing ",(0,c.jsx)(n.T,{children:"Ctrl"})," + ",(0,c.jsx)(n.T,{children:"D"}),", or typing ",(0,c.jsx)(s.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===t&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Stop the job"}),"Interactive"===r&&(0,c.jsxs)(a.Z,{children:["Stop the job by pressing ",(0,c.jsx)(n.T,{children:"Ctrl"})," + ",(0,c.jsx)(n.T,{children:"D"}),", or typing"," ",(0,c.jsx)(s.E,{children:"exit"})," in the terminal."]}),"Batch"===r&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{children:"The batch job will stop automatically when the job's script terminates, or the walltime elapses."}),(0,c.jsxs)(a.Z,{children:["To stop the job early, you need to know your job id. You can either note down your job id when you submit a batch job, or find the job id using the check job status command:",(0,c.jsx)(o.Z,{children:"qstat -u $USER"})]}),(0,c.jsxs)(a.Z,{children:["To stop the job early, run the following:",(0,c.jsx)(o.Z,{children:"qdel {job_id}"})]})]}),(0,c.jsx)(l.Z,{children:"Exit the ssh session"}),(0,c.jsxs)(a.Z,{children:["Exit the ssh session on Lyra by pressing ",(0,c.jsx)(n.T,{children:"Ctrl"})," +"," ",(0,c.jsx)(n.T,{children:"D"}),", or typing ",(0,c.jsx)(s.E,{children:"exit"})," in the terminal."]}),d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Stop port forwarding"}),(0,c.jsxs)(a.Z,{children:["Stop local port forwarding by pressing ",(0,c.jsx)(n.T,{children:"Ctrl"})," +"," ",(0,c.jsx)(n.T,{children:"D"}),", or typing ",(0,c.jsx)(s.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})]})}},9206:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(2757),s=r(5893);function o(e){let{children:t}=e;return(0,s.jsx)(n.X,{as:"h3",size:"sm",my:4,children:t})}},483:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(1293),s=r(5893);function o(e){let{children:t}=e;return(0,s.jsx)(n.x,{my:4,children:t})}},9235:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var n=r(2757),s=r(7294);const o=r.p+"assets/images/qut-f500d51a24669f94cd64892fe289c0d3.png";var i=r(2233),l=r(3684),a=r(3717),c=r(2140),u=r(7555),d=r(1680),h=r(6115),p=r(5893);function x(e){let{value:t=1,allowMouseWheel:r=!0,label:n,onChange:s=(()=>{}),...o}=e;const{colorScheme:i}=(0,h.Q5)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(c.B,{size:"sm",width:"unset",children:[(0,p.jsxs)(u.Y2,{defaultValue:t,allowMouseWheel:r,onChange:s,colorScheme:i,...o,children:[(0,p.jsx)(u.zu,{focusBorderColor:"red.200"}),(0,p.jsxs)(u.Fi,{children:[(0,p.jsx)(u.WQ,{}),(0,p.jsx)(u.Y_,{})]})]}),(0,p.jsx)(d.xW,{children:n})]})})}var j=r(1778),m=r(5833);function g(e){let{title:t,description:r,selected:n,value:o={},onChange:i,inputProps:l,showAlert:c=!1,alertDismissible:u=!0,alertType:d="info",alertMsg:h=""}=e;const[g,f]=(0,s.useState)(!1),y=e=>e.replace(/([A-Z])/g," $1").replace(/^./,(e=>e.toUpperCase()));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.Z,{title:t,description:r,selected:n}),(0,p.jsx)(a.k,{justifyContent:"flex-start",children:Object.keys(o).map(((e,t)=>(0,p.jsx)(x,{w:"100px",label:y(e),value:o[e],onChange:t=>{i({...o,[e]:parseInt(t)})},...Array.isArray(l)?l[t]:l},e)))}),c&&!g&&(0,p.jsx)(j.Z,{alertDismissible:u,alertType:d,onClose:()=>{f(!0)},children:h})]})}var f=r(4260),y=r(2458),b=r(7747),w=r(9273),v=r(3623),C=r(665),T=r(1400),Z=r(6240);const k=/^[a-z0-9]*$/,P=/^(?=.*[A-Za-z0-9._+-])[A-Za-z0-9._+-]+$/;function I(e){let{config:t}=e;const[r,n]=(0,w.Z)("qutUsername",""),[s,o]=(0,w.Z)("qutBatchJobName","Batch-job-name");return(0,p.jsxs)(b.xu,{children:["Lyra"===t.service&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(C.Z,{label:"QUT Username",placeholder:"username",value:r,onChange:n,pattern:k,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),"Batch"===t.jobType&&(0,p.jsx)(C.Z,{label:"Batch Job Name",placeholder:"Batch-job-name",value:s,onChange:o,pattern:P,helperText:"Please enter your batch job name so that it can be pre-populated in the commands below.",errorText:"Job name must only contain alphanumerics or '-', '_', '+', '.' and must not be empty."})]}),s&&(0,p.jsx)(v.s,{service:t.service,username:r}),"Lyra"===t.service&&(0,p.jsx)(p.Fragment,{children:s&&(0,p.jsx)(T.Wh,{jobType:t.jobType,jobName:s,hardware:t.hardware,cpuVendor:t.cpuVendor,cpuModel:t.cpuModel,cpuCores:t.cpuCores,ram:t.ram,gpuVendor:t.gpuVendor,gpuModel:t.gpuModel,gpuModules:t.gpuModules,nodes:t.nodes,wallTime:t.wallTime,jobInstanceType:t.jobInstanceType,arrayConfig:t.arrayConfig})}),"JupyterHub"===t.service&&(0,p.jsx)(T.CJ,{jobProfile:t.jobProfile}),"rVDI"===t.service&&(0,p.jsx)(T.HW,{hardware:t.hardware,os:t.os}),"Local"===t.service&&(0,p.jsx)(T.Bc,{hardware:t.hardware,os:t.os}),s&&(0,p.jsx)(Z.v,{service:t.service,jobType:t.jobType,environment:t.environment})]})}const A=function(e,t){void 0===t&&(t=()=>{});const r=e=>r=>t((t=>({...t,[e]:r})));return{service:()=>{const t=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"]];return{element:(n,s)=>(0,p.jsx)(f.Z,{title:"Service",description:"The service to use for running the job.",selected:s,inputProps:{choices:t,value:e?.service,onChange:r("service")}},n),show:()=>!0,selected:e=>(0,l.p8)(t,e?.service)}},jobType:()=>{const t=[["Interactive","Run the job in an interactive shell"],["Batch","Submit the job to the queue to run in the background"]];return{element:(n,s)=>(0,p.jsx)(f.Z,{title:"Job type",description:"The type of PBS job to run.",selected:s,inputProps:{choices:t,value:e?.jobType,onChange:r("jobType")}},n),show:e=>"Lyra"===e?.service,selected:e=>(0,l.p8)(t,e?.jobType)}},nodes:()=>({element:(t,n)=>(0,p.jsx)(y.Z,{title:"Nodes",description:"The number of nodes to use for the job.",selected:n,inputProps:{label:e?.nodes>1?"nodes":"node",value:e?.nodes,min:1,max:100,step:1,onChange:r("nodes")},showAlert:e?.nodes>1,alertType:"warning",alertMsg:(0,p.jsx)(i.Z,{textBeforeLink:"Only use more than 1 node if you are using ",link:{href:"https://hpc-wiki.info/hpc/MPI",text:"MPI",isExternal:!0},hasExternalIcon:!0,textAfterLink:"-type software."})},t),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>e?.nodes>0}),jobInstanceType:()=>{const t=[["Standalone","Run a single instance of the job"],["Array","Run many instances of the job"]];return{element:(n,s)=>(0,p.jsx)(f.Z,{title:"Job instances",description:"Run a single instance, or many instances of the job.",selected:s,inputProps:{choices:t,value:e?.jobInstanceType,onChange:r("jobInstanceType")}},n),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>(0,l.p8)(t,e?.jobInstanceType)}},arrayConfig:()=>({element:(t,n)=>(0,p.jsx)(g,{title:"Array range",description:"Array sub-job range indexes. The first index is the starting index, the upper bound is the last index, and the step is the increment between indexes.",selected:n,value:e?.arrayConfig,onChange:r("arrayConfig"),inputProps:{min:0}},t),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType&&"Array"===e?.jobInstanceType,selected:e=>e?.arrayConfig.step>=1&&e?.arrayConfig.upperBound>=e?.arrayConfig.firstIndex&&e?.arrayConfig.upperBound>e?.arrayConfig.step&&e?.arrayConfig.upperBound>=e?.arrayConfig.firstIndex+e?.arrayConfig.step}),wallTime:()=>({element:(t,n)=>(0,p.jsx)(g,{title:"Walltime",description:"The estimated total time for the job.",selected:n,onChange:r("wallTime"),value:e?.wallTime,inputProps:[{min:0,step:1},{min:e?.wallTime?.hour<1?1:0,max:59,step:1}]},t),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>e?.wallTime.hour>0||e?.wallTime.minute>0}),hardware:()=>{let t;return t=(0,l.Ae)(e)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU"]],{element:(n,s)=>(0,p.jsx)(f.Z,{title:"Hardware",description:"The hardware to use for running the job.",selected:s,inputProps:{choices:t,value:e?.hardware,onChange:r("hardware")},showAlert:"IPU"===e?.hardware,alertType:"warning",alertMsg:(0,p.jsx)(i.Z,{textBeforeLink:"IPUs are currently unavailable. Please ",link:{href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",text:"contact eResearch if interested",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})},n),show:e=>e?.service,selected:e=>(0,l.p8)(["CPU","GPU"],e?.hardware)}},cpuVendor:(0,l._3)(e,r),cpuModel:(0,l.Rs)(e,r),cpuCores:(0,l.UJ)(e,r),ram:(0,l.Hw)(e,r),gpuVendor:(0,l.zh)(e,r),gpuModel:(0,l.DD)(e,r),gpuModules:(0,l.bD)(e,r),jobProfile:(0,l.H4)(e,r)}};function S(e){let{initialConfig:t=l.g5,showHeader:r=!0}=e;const[i,a]=(0,s.useState)(t);(0,s.useEffect)((()=>{a(t)}),[t]);const c=(0,l.Bz)(i,A),u=r?(0,p.jsx)(h.DN,{title:"eResearch Job",subtitle:"Use the form below to configure a workload that runs on the eResearch infrastructure at QUT.",logo:o,alt:"QUT logo",link:"https://www.qut.edu.au/research/eresearch"}):null,d=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.X,{as:"h2",size:"md",my:2,children:"Configuration"}),(0,p.jsx)(l.De,{config:i,onConfigChange:a,getConfigGroups:A}),c&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.X,{as:"h2",size:"md",my:2,children:"Instructions"}),(0,p.jsx)(I,{config:i})]})]});return(0,p.jsx)(h.fD,{colorScheme:"qut",header:u,body:d})}function M(){return(0,p.jsx)(S,{showHeader:!1})}}}]);