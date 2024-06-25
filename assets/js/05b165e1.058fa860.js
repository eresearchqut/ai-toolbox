"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[3671],{9273:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(7294);function s(e,r){const[n,s]=(0,t.useState)((()=>{const n=localStorage.getItem(e);return n?JSON.parse(n):r}));return(0,t.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,s]}},4758:(e,r,n)=>{n.d(r,{Z:()=>u});var t=n(7294),s=n(5161),o=n(7747),i=n(9981),l=n(4225),c=n(5392),a=n(5893);function u(e){let{children:r}=e;const[n,u]=(0,t.useState)(!1),[d,h]=(0,t.useState)(!1),p=(0,s.ff)("gray.200","gray.500"),x=(0,s.ff)("gray.50","gray.800"),j=Array.isArray(r)?r.join(""):r;return(0,a.jsxs)(o.xu,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:p,bg:x,fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>u(!0),onMouseOut:()=>u(!1),position:"relative",children:[j,n&&(0,a.jsx)(i.u,{label:d?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,a.jsx)(l.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(j),h(!0),setTimeout((()=>h(!1)),1e3)},colorScheme:d?"green":"gray",children:(0,a.jsx)(c.T,{})})})]})}},4396:(e,r,n)=>{n.d(r,{De:()=>D,Cy:()=>v,g5:()=>f,Bz:()=>E,UJ:()=>k,Rs:()=>S,_3:()=>T,zj:()=>G,DD:()=>V,bD:()=>A,zh:()=>Z,H4:()=>U,kA:()=>M,Hw:()=>I,R:()=>L,Ae:()=>w,p8:()=>b});var t=n(7747),s=n(3717),o=n(9981),i=n(2757),l=(n(7294),n(5106)),c=n(9563),a=n(4225),u=n(6115),d=n(5893);function h(e){let{choices:r,value:n,onChange:t=(()=>{})}=e;const{colorScheme:i}=(0,u.Q5)();return(0,d.jsx)(s.k,{flexGrow:"1",children:r.map((e=>{const{label:r,description:s}=Array.isArray(e)?{label:e[0],description:e[1]}:{label:e,description:""},l=r===n;return(0,d.jsx)(o.u,{label:s,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,d.jsx)(a.z,{flex:"1",variant:l?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>t(r),colorScheme:l?i:"gray",children:r})},r)}))})}var p=n(2140),x=n(8732),j=n(1680),m=n(1293),g=n(1023);function y(e){let{value:r=1,label:n,onChange:s=(()=>{}),...o}=e;const{colorScheme:i}=(0,u.Q5)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.xu,{width:"120px",children:(0,d.jsxs)(p.B,{size:"sm",children:[(0,d.jsx)(x.I,{type:"number",value:r,onChange:e=>s(parseInt(e.target.value)),textAlign:"center"}),(0,d.jsx)(j.xW,{width:"60px",p:0,justifyContent:"center",children:(0,d.jsx)(m.x,{mb:"0",children:n})})]})}),(0,d.jsxs)(g.iR,{display:"block",flex:"1",ml:2,value:r,focusThumbOnChange:!1,colorScheme:i,onChange:e=>s(e),...o,children:[(0,d.jsx)(g.Uj,{children:(0,d.jsx)(g.Ms,{})}),(0,d.jsx)(g.gs,{})]})]})}const f={nodes:1,cpuCores:4,ram:16,gpuModules:1};function v(e){let{title:r,description:n,type:a,selected:u,inputProps:p}=e;return(0,d.jsx)(t.xu,{children:(0,d.jsxs)(s.k,{align:"center",children:[(0,d.jsxs)(t.xu,{w:"120px",children:[u?(0,d.jsx)(l.r,{color:"green.500"}):(0,d.jsx)(o.u,{label:"Pick an option",children:(0,d.jsx)(c.a,{color:"orange.500"})}),(0,d.jsx)(o.u,{label:n,placement:"top",hasArrow:!0,children:(0,d.jsx)(i.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:r})})]}),(0,d.jsx)(t.bK,{size:"10px"}),"picker"===a&&(0,d.jsx)(h,{...p}),"slider"===a&&(0,d.jsx)(y,{...p})]})})}const b=(e,r)=>0!==e.length&&(Array.isArray(e[0])?e.map((e=>e[0])).includes(r):e.includes(r)),w=e=>"Lyra"===e?.service,C=e=>["rVDI","Local"].includes(e?.service),P=e=>"GPU"===e?.hardware,M=(e,r)=>()=>{let n;return n="rVDI"===e?.service?["Linux","Windows"]:"Local"===e?.service?["Linux","macOS","Windows"]:["Linux"],{element:(t,s)=>(0,d.jsx)(v,{title:"OS",description:"The operating system to use for running the model.",type:"picker",selected:s,inputProps:{choices:n,value:e?.os,onChange:r("os")}},t),show:e=>C(e),selected:e=>b(n,e?.os)}},T=(e,r)=>()=>{const n=["Any","AMD","Intel"];return{element:(t,s)=>(0,d.jsx)(v,{title:"CPU Vendor",type:"picker",selected:s,inputProps:{choices:n,value:e?.cpuVendor,onChange:r("cpuVendor")}},t),show:e=>w(e),selected:e=>b(n,e?.cpuVendor)}},S=(e,r)=>()=>{let n=[];return"AMD"===e?.cpuVendor?n=["7702","7713","75F3"]:"Intel"===e?.cpuVendor&&(n=["6140","6248","8260","E7-8890v4"]),{element:(t,s)=>(0,d.jsx)(v,{title:"CPU Model",type:"picker",selected:s,inputProps:{choices:n,value:e?.cpuModel,onChange:r("cpuModel")}},t),show:e=>w(e)&&e?.cpuVendor&&"Any"!==e.cpuVendor,selected:e=>b(n,e?.cpuModel)}},k=(e,r)=>()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?128:"75F3"===e?.cpuModel?64:"6140"===e?.cpuModel?36:"6248"===e?.cpuModel?40:"8260"===e?.cpuModel?48:"E7-8890v4"===e?.cpuModel?96:128,{element:(t,s)=>(0,d.jsx)(v,{title:"CPU",type:"slider",selected:s,inputProps:{value:e?.cpuCores,label:"cores",min:1,max:n,step:1,onChange:r("cpuCores")}},t),show:e=>w(e),selected:e=>!0}},I=(e,r)=>()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?1006:"75F3"===e?.cpuModel?503:"6140"===e?.cpuModel||"6248"===e?.cpuModel||"8260"===e?.cpuModel?186:"E7-8890v4"===e?.cpuModel?5794:1006,{element:(t,s)=>(0,d.jsx)(v,{title:"RAM",type:"slider",selected:s,inputProps:{value:e?.ram,label:"GB",min:8,max:n,step:8,onChange:r("ram")}},t),show:e=>w(e),selected:e=>!0}},U=(e,r)=>()=>{let n=[];return"CPU"===e?.hardware?n=["1 core, 8 GB","4 cores, 32 GB","8 cores, 64 GB","16 cores, 128GB"]:"GPU"===e?.hardware&&(n=["4 cores, 32 GB, T4 GPU","8 cores, 64 GB, T4 GPU"]),{element:(t,s)=>(0,d.jsx)(v,{title:"Job Profile",type:"picker",selected:s,inputProps:{choices:n,value:e?.jobProfile,onChange:r("jobProfile")}},t),show:e=>"JupyterHub"===e?.service&&e?.hardware,selected:e=>b(n,e?.jobProfile)}},Z=(e,r)=>()=>{const n=["Any","NVIDIA","AMD"];return{element:(t,s)=>(0,d.jsx)(v,{title:"GPU Vendor",type:"picker",selected:s,inputProps:{choices:n,value:e?.gpuVendor,onChange:r("gpuVendor")}},t),show:e=>w(e)&&P(e),selected:e=>b(n,e?.gpuVendor)}},V=(e,r)=>()=>{let n=[];return"NVIDIA"===e?.gpuVendor?n=[["T4","Tesla T4 16 GB"],["P100","TESLA P100-PCIE-16GB"],["V100","TESLA V100-PCIE-32GB"],["A100","NVIDIA A100-SXM4-40GB"]]:"AMD"===e?.gpuVendor&&(n=[["MI100","AMD MI100 32 GB"],["MI210","AMD MI210 16 GB"]]),{element:(t,s)=>(0,d.jsx)(v,{title:"GPU Model",type:"picker",selected:s,inputProps:{choices:n,value:e?.gpuModel,onChange:r("gpuModel")}},t),show:e=>w(e)&&"GPU"===e?.hardware&&e?.gpuVendor&&"Any"!==e.gpuVendor,selected:e=>b(n,e?.gpuModel)}},A=(e,r)=>()=>({element:(n,t)=>(0,d.jsx)(v,{title:"GPU",type:"slider",selected:t,inputProps:{value:e?.gpuModules,label:"modules",min:1,max:8,step:1,onChange:r("gpuModules")}},n),show:e=>w(e)&&P(e),selected:e=>!0}),G=(e,r)=>()=>{let n=[];return n="JupyterHub"===e?.service?[["Conda","Conda package manager"]]:C(e)&&["macOS","Windows"].includes(e?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Singularity","Singularity / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(t,s)=>(0,d.jsx)(v,{title:"Environment",description:"The Python package management system.",type:"picker",selected:s,inputProps:{choices:n,value:e?.environment,onChange:r("environment")}},t),show:e=>e?.service,selected:e=>b(n,e?.environment)}},L=(e,r)=>()=>{let n=[];return n="Lyra"===e?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(t,s)=>(0,d.jsx)(v,{title:"Tool",description:"The interface to use for running the model.",type:"picker",selected:s,inputProps:{choices:n,value:e?.tool,onChange:r("tool")}},t),show:e=>e?.service,selected:e=>b(n,e?.tool)}};function D(e){let{config:r,onConfigChange:n,getConfigGroups:s}=e;return(0,d.jsx)(t.xu,{children:Object.entries(s(r,n)).map((e=>{let[r,n]=e;return[r,n()]})).filter((e=>{let[n,t]=e;return t.show(r)})).map((e=>{let[n,t]=e;return t.element(n,t.selected(r))}))})}const E=(e,r)=>Object.values(r(e)).map((e=>e())).filter((r=>r.show(e))).every((r=>r.selected(e)))},6115:(e,r,n)=>{n.d(r,{DN:()=>d,Q5:()=>p,fD:()=>j});var t=n(2883),s=n(6089),o=n(2757),i=n(3990),l=n(3614),c=n(607),a=n(7294),u=n(5893);function d(e){let{title:r,subtitle:n,logo:i,alt:l,link:c}=e;return(0,u.jsxs)(t.r,{href:c,isExternal:!0,children:[(0,u.jsx)(s.E,{float:"left",verticalAlign:"middle",src:i,alt:l,display:"inline",height:"30px"}),(0,u.jsx)(o.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:r}),n&&(0,u.jsx)(o.X,{as:"h3",size:"xs",mt:4,children:n})]})}const h=(0,a.createContext)({colorScheme:"teal",pickerTextColor:"white",pickerTextShadow:"1px 1px 1px black"}),p=()=>(0,a.useContext)(h),x=e=>{let{children:r,...n}=e;return(0,u.jsx)(h.Provider,{value:{...n},children:r})};function j(e){let{colorScheme:r,header:n,body:t}=e;return(0,u.jsx)(x,{colorScheme:r,children:(0,u.jsxs)(i.Z,{children:[n&&(0,u.jsx)(l.O,{children:n}),(0,u.jsx)(c.e,{children:t})]})})}},3623:(e,r,n)=>{n.d(r,{s:()=>C});var t=n(9206),s=n(483),o=n(4153),i=n(7405),l=n(2883),c=n(7747),a=n(1293),u=n(6101),d=n(7294),h=n(959),p=n(4461),x=n(4124),j=n(4028),m=n(889),g=n(5893);function y(e){let{children:r}=e;const[n,t]=(0,d.useState)(-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0);return(0,g.jsxs)(h.m,{index:n,onChange:t,children:[(0,g.jsxs)(p.t,{children:[(0,g.jsx)(x.O,{children:"Windows"}),(0,g.jsx)(x.O,{children:"macOS"}),(0,g.jsx)(x.O,{children:"Linux"})]}),(0,g.jsxs)(j.n,{children:[(0,g.jsx)(m.x,{p:0,children:r[0]}),(0,g.jsx)(m.x,{p:0,children:r[1]}),(0,g.jsx)(m.x,{p:0,children:r[2]})]})]})}var f=n(4758);function v(e){let{username:r}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.Z,{children:"Connect to Lyra"}),(0,g.jsxs)(o.b,{status:"info",children:[(0,g.jsx)(i.z,{}),"If you are off-campus, you will first need to connect to the QUT network using the VPN."]}),(0,g.jsxs)(s.Z,{children:["See the instructions ",(0,g.jsx)(l.r,{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",isExternal:!0,color:"blue.500",children:"here"})," for more information about how to use Lyra."]}),(0,g.jsxs)(y,{children:[(0,g.jsxs)(c.xu,{children:[(0,g.jsxs)(o.b,{status:"info",children:[(0,g.jsx)(i.z,{}),(0,g.jsxs)(a.x,{mb:"0",children:["You may need to enable the ",(0,g.jsx)(l.r,{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",isExternal:!0,color:"blue.500",children:"ssh feature"})," in Windows."]})]}),(0,g.jsx)(s.Z,{children:"In Windows Terminal, Powershell, or cmd.exe, run the following command to connect to Lyra:"})]}),(0,g.jsx)(c.xu,{children:(0,g.jsx)(s.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,g.jsx)(c.xu,{children:(0,g.jsx)(s.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===r&&(0,g.jsx)(s.Z,{children:(0,g.jsxs)("i",{children:["Replace ",(0,g.jsx)(u.E,{children:"qutusername"})," with your QUT username."]})}),(0,g.jsxs)(f.Z,{children:["ssh ",r||"qutusername","@lyra.qut.edu.au"]})]})}function b(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.Z,{children:"Connect to JupyterHub"}),(0,g.jsxs)(s.Z,{children:["Visit ",(0,g.jsx)(l.r,{href:"https://jupyterhub.eres.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://jupyterhub.eres.qut.edu.au"})," and log in with your QUT username and password."]})]})}function w(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.Z,{children:"Connect to rVDI"}),(0,g.jsxs)(s.Z,{children:["See the instructions ",(0,g.jsx)(l.r,{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",isExternal:!0,color:"blue.500",children:"here"})," for more information."]}),(0,g.jsxs)(s.Z,{children:["If you have not already, download and install the VMware Horizon client from ",(0,g.jsx)(l.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://rvdi.qut.edu.au"}),"."]}),(0,g.jsxs)(s.Z,{children:["In the VMware Horizon client, connect to ",(0,g.jsx)(l.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"rvdi.qut.edu.au"})," and log in with your QUT username and password."]})]})}function C(e){let{service:r,username:n}=e;return(0,g.jsxs)(g.Fragment,{children:["Lyra"===r&&(0,g.jsx)(v,{username:n}),"JupyterHub"===r&&(0,g.jsx)(b,{}),"rVDI"===r&&(0,g.jsx)(w,{}),"Local"===r&&(0,g.jsx)(g.Fragment,{})," "]})}},665:(e,r,n)=>{n.d(r,{Z:()=>p});var t=n(7294),s=n(8049),o=n(9371),i=n(2140),l=n(8732),c=n(2735),a=n(7821),u=n(9206),d=n(9754),h=n(5893);function p(e){let{label:r,placeholder:n,value:p,onChange:x,pattern:j,helperText:m,errorText:g}=e;const[y,f]=(0,t.useState)(p),[v,b]=(0,t.useState)(!0);(0,t.useEffect)((()=>{b(j.test(p)),f(p)}),[p]);return(0,h.jsxs)(s.NI,{isInvalid:!v,children:[(0,h.jsx)(o.l,{children:(0,h.jsx)(u.Z,{children:r})}),(0,h.jsxs)(i.B,{children:[(0,h.jsx)(l.I,{type:"text",placeholder:n,value:y,onChange:e=>{f(e.target.value),x(e.target.value)},pattern:j}),v&&""!==p&&(0,h.jsx)(c.x,{children:(0,h.jsx)(d.n,{color:"green.500"})})]}),!v&&(0,h.jsx)(a.J1,{children:g}),(0,h.jsx)(s.Q6,{children:m})]})}},1400:(e,r,n)=>{n.d(r,{Bc:()=>d,CJ:()=>a,HW:()=>u,Wh:()=>c});var t=n(4758),s=n(6101),o=n(9206),i=n(483),l=n(5893);function c(e){let{jobType:r,nodes:n,hardware:c,cpuVendor:a,cpuModel:u,cpuCores:d,ram:h,gpuVendor:p,gpuModel:x,gpuModules:j}=e;const m=[`select=${"Interactive"===r?1:n}`,`ncpus=${d}`,`mem=${h}gb`];return"Any"!==a&&u&&m.push(`cputype=${u}`),"GPU"===c&&(m.push(`ngpus=${j}`),"Any"!==p&&x&&m.push(`gputype=${x}`)),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{children:"Schedule a job"}),(0,l.jsxs)(i.Z,{children:["In the ssh session, run the following command to schedule the ",r.toLowerCase()," job:"]}),(0,l.jsx)(t.Z,{children:`qsub${"Interactive"===r?" -I":""} -l walltime=1:00:00 -l ${m.join(":")}`}),"Interactive"===r&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.Z,{children:["Wait for the job to start, and take note of the node you are on (eg. ",(0,l.jsx)(s.E,{children:"cl5n042"}),")."]})}),"Batch"===r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{children:"You can check the status of your jobs by running the following:"}),(0,l.jsx)(t.Z,{children:"qstat -u $USER"})]})]})}function a(e){let{jobProfile:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{children:"Schedule a job"}),(0,l.jsxs)(i.Z,{children:["From the JupyterHub home page, click ",(0,l.jsx)(s.E,{children:"Start My Server"})," to schedule a job."]}),(0,l.jsxs)(i.Z,{children:["From the list of available options, select the one containing ",(0,l.jsxs)(s.E,{children:["Lyra - ",r]})," and click the start button."]})]})}function u(e){let r,{hardware:n,os:t}=e;return r="Linux"===t?"Red Hat VDI Medium with GPU":"GPU"===n?"eResearch Large with GPU":"eResearch General VDI",(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{children:"Start a session"}),(0,l.jsxs)(i.Z,{children:["From the list of machines, select the one named ",(0,l.jsx)(s.E,{children:r})]})]})}function d(e){let{hardware:r,os:n}=e}},6240:(e,r,n)=>{n.d(r,{v:()=>u});var t=n(9206),s=n(483),o=n(4153),i=n(7405),l=n(6409),c=n(6101),a=n(5893);function u(e){let{service:r,environment:n,usingTool:u=!1}=e;return(0,a.jsxs)(a.Fragment,{children:["Lyra"===r&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.b,{status:"warning",variant:"left-accent",children:[(0,a.jsx)(i.z,{}),"Lyra is a shared resource, only request the resources you need."]})}),u&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.Z,{children:"Stop the server"}),(0,a.jsxs)(s.Z,{children:["Once you have finished using the tool, stop the server by pressing ",(0,a.jsx)(l.T,{children:"Ctrl"})," + ",(0,a.jsx)(l.T,{children:"C"})," in the terminal."]}),(0,a.jsx)(s.Z,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."})]}),"Singularity"===n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.Z,{children:"Exit the container"}),(0,a.jsxs)(s.Z,{children:["Exit the container by pressing ",(0,a.jsx)(l.T,{children:"Ctrl"})," + ",(0,a.jsx)(l.T,{children:"D"}),", or typing ",(0,a.jsx)(c.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===r&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.Z,{children:"Stop the job"}),(0,a.jsxs)(s.Z,{children:["Stop the job by pressing ",(0,a.jsx)(l.T,{children:"Ctrl"})," + ",(0,a.jsx)(l.T,{children:"D"}),", or typing ",(0,a.jsx)(c.E,{children:"exit"})," in the terminal."]}),(0,a.jsx)(t.Z,{children:"Exit the ssh session"}),(0,a.jsxs)(s.Z,{children:["Exit the ssh session on Lyra by pressing ",(0,a.jsx)(l.T,{children:"Ctrl"})," + ",(0,a.jsx)(l.T,{children:"D"}),", or typing ",(0,a.jsx)(c.E,{children:"exit"})," in the terminal."]}),u&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.Z,{children:"Stop port forwarding"}),(0,a.jsxs)(s.Z,{children:["Stop local port forwarding by pressing ",(0,a.jsx)(l.T,{children:"Ctrl"})," + ",(0,a.jsx)(l.T,{children:"D"}),", or typing ",(0,a.jsx)(c.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})]})}},9206:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(2757),s=n(5893);function o(e){let{children:r}=e;return(0,s.jsx)(t.X,{as:"h3",size:"sm",my:4,children:r})}},483:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(1293),s=n(5893);function o(e){let{children:r}=e;return(0,s.jsx)(t.x,{my:4,children:r})}},5008:(e,r,n)=>{n.r(r),n.d(r,{default:()=>f});var t=n(4396),s=n(2757),o=n(7294);const i=n.p+"assets/images/qut-f500d51a24669f94cd64892fe289c0d3.png";var l=n(6115),c=n(7747),a=n(3623),u=n(1400),d=n(6240),h=n(9273),p=n(665),x=n(5893);const j=/^[a-z0-9]*$/;function m(e){let{config:r}=e;const[n,t]=(0,h.Z)("qutUsername","qutusername");return(0,x.jsxs)(c.xu,{children:["Lyra"===r.service&&(0,x.jsx)(p.Z,{label:"QUT Username",placeholder:"username",value:n,onChange:t,pattern:j,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),(0,x.jsx)(a.s,{service:r.service,username:n}),"Lyra"===r.service&&(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(u.Wh,{jobType:r.jobType,hardware:r.hardware,cpuVendor:r.cpuVendor,cpuModel:r.cpuModel,cpuCores:r.cpuCores,ram:r.ram,gpuVendor:r.gpuVendor,gpuModel:r.gpuModel,gpuModules:r.gpuModules,nodes:r.nodes})}),"JupyterHub"===r.service&&(0,x.jsx)(u.CJ,{jobProfile:r.jobProfile}),"rVDI"===r.service&&(0,x.jsx)(u.HW,{hardware:r.hardware,os:r.os}),"Local"===r.service&&(0,x.jsx)(u.Bc,{hardware:r.hardware,os:r.os}),(0,x.jsx)(d.v,{service:r.service,environment:r.environment})]})}const g=function(e,r){void 0===r&&(r=()=>{});const n=n=>t=>r({...e,[n]:t});return{service:()=>{const r=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"]];return{element:(s,o)=>(0,x.jsx)(t.Cy,{title:"Service",description:"The service to use for running the job.",type:"picker",selected:o,inputProps:{choices:r,value:e?.service,onChange:n("service")}},s),show:e=>!0,selected:e=>(0,t.p8)(r,e?.service)}},jobType:()=>{const r=[["Interactive","Run the job in an interactive shell"],["Batch","Submit the job to the queue to run in the background"]];return{element:(s,o)=>(0,x.jsx)(t.Cy,{title:"Job Type",description:"The type of PBS job to run.",type:"picker",selected:o,inputProps:{choices:r,value:e?.jobType,onChange:n("jobType")}},s),show:e=>"Lyra"===e?.service,selected:e=>(0,t.p8)(r,e?.jobType)}},nodes:()=>({element:(r,s)=>(0,x.jsx)(t.Cy,{title:"Nodes",description:"The number of nodes to use for the job.",type:"slider",selected:s,inputProps:{value:e?.nodes,min:1,max:100,step:1,onChange:n("nodes")}},r),show:e=>"Lyra"===e?.service&&"Batch"===e?.jobType,selected:e=>e?.nodes>0}),hardware:()=>{let r;return r=(0,t.Ae)(e)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU"]],{element:(s,o)=>(0,x.jsx)(t.Cy,{title:"Hardware",description:"The hardware to use for running the job.",type:"picker",selected:o,inputProps:{choices:r,value:e?.hardware,onChange:n("hardware")}},s),show:e=>e?.service,selected:e=>(0,t.p8)(r,e?.hardware)}},cpuVendor:(0,t._3)(e,n),cpuModel:(0,t.Rs)(e,n),cpuCores:(0,t.UJ)(e,n),ram:(0,t.Hw)(e,n),gpuVendor:(0,t.zh)(e,n),gpuModel:(0,t.DD)(e,n),gpuModules:(0,t.bD)(e,n),jobProfile:(0,t.H4)(e,n)}};function y(e){let{showHeader:r=!0}=e;const[n,c]=(0,o.useState)(t.g5),a=(0,t.Bz)(n,g),u=r?(0,x.jsx)(l.DN,{title:"eResearch Job",subtitle:"Use the form below to configure a workload that runs on the eResearch infrastructure at QUT.",logo:i,alt:"QUT logo",link:"https://www.qut.edu.au/research/eresearch"}):null,d=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.X,{as:"h2",size:"md",my:2,children:"Configuration"}),(0,x.jsx)(t.De,{config:n,onConfigChange:c,getConfigGroups:g}),a&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.X,{as:"h2",size:"md",my:2,children:"Instructions"}),(0,x.jsx)(m,{config:n})]})]});return(0,x.jsx)(l.fD,{colorScheme:"qut",header:u,body:d})}function f(){return(0,x.jsx)(y,{showHeader:!1})}}}]);