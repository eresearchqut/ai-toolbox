"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[7918],{9273:(e,n,r)=>{r.d(n,{Z:()=>t});var s=r(7294);function t(e,n){const[r,t]=(0,s.useState)((()=>{const r=localStorage.getItem(e);return r?JSON.parse(r):n}));return(0,s.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,t]}},4758:(e,n,r)=>{r.d(n,{Z:()=>d});var s=r(5392),t=r(5161),i=r(7747),o=r(9981),l=r(4225),a=r(7294),c=r(5893);function d(e){let{children:n}=e;const[r,d]=(0,a.useState)(!1),[h,u]=(0,a.useState)(!1),x=(0,t.ff)("gray.200","gray.500"),p=(0,t.ff)("gray.50","gray.800"),j=Array.isArray(n)?n.join(""):n;return(0,c.jsxs)(i.xu,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:x,bg:p,fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>d(!0),onMouseOut:()=>d(!1),position:"relative",children:[j,r&&(0,c.jsx)(o.u,{label:h?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,c.jsx)(l.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(j),u(!0),setTimeout((()=>u(!1)),1e3)},colorScheme:h?"green":"gray",children:(0,c.jsx)(s.T,{})})})]})}},4396:(e,n,r)=>{r.d(n,{De:()=>O,Cy:()=>C,g5:()=>Z,Bz:()=>R,UJ:()=>D,Rs:()=>L,_3:()=>M,zj:()=>G,DD:()=>V,bD:()=>U,zh:()=>E,H4:()=>A,kA:()=>I,Hw:()=>F,R:()=>z,Ae:()=>k,p8:()=>T});var s=r(5106),t=r(9563),i=r(7747),o=r(3717),l=r(9981),a=r(2757),c=r(4153),d=r(7405),h=r(3949),u=r(7294),x=r(4225),p=r(6115),j=r(5893);function m(e){let{choices:n,value:r,onChange:s=(()=>{})}=e;const{colorScheme:t}=(0,p.Q5)();return(0,j.jsx)(o.k,{flexGrow:"1",children:n.map((e=>{const{label:n,description:i}=Array.isArray(e)?{label:e[0],description:e[1]}:{label:e,description:""},o=n===r;return(0,j.jsx)(l.u,{label:i,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,j.jsx)(x.z,{flex:"1",variant:o?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>s(n),colorScheme:o?t:"gray",children:n})},n)}))})}var g=r(2140),f=r(3090),y=r(1680),v=r(1293),b=r(8237);function w(e){let{value:n=1,label:r,onChange:s=(()=>{}),...t}=e;const{colorScheme:o}=(0,p.Q5)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.xu,{width:"120px",children:(0,j.jsxs)(g.B,{size:"sm",children:[(0,j.jsx)(f.I,{type:"number",value:n,onChange:e=>s(parseInt(e.target.value)),textAlign:"center"}),(0,j.jsx)(y.xW,{width:"60px",p:0,justifyContent:"center",children:(0,j.jsx)(v.x,{mb:"0",children:r})})]})}),(0,j.jsxs)(b.iR,{display:"block",flex:"1",ml:2,value:n,focusThumbOnChange:!1,colorScheme:o,onChange:e=>s(e),...t,children:[(0,j.jsx)(b.Uj,{children:(0,j.jsx)(b.Ms,{})}),(0,j.jsx)(b.gs,{})]})]})}const Z={nodes:1,cpuCores:4,ram:16,gpuModules:1,wallTime:{hour:1,minute:0}};function C(e){let{title:n,description:r,type:x,selected:p,inputProps:g,showAlert:f=!1,alertDismissible:y=!0,alertType:v="info",alertMsg:b=null}=e;const[Z,C]=(0,u.useState)(!1);return(0,j.jsx)(i.xu,{children:(0,j.jsxs)(o.k,{direction:"column",width:"100%",children:[(0,j.jsxs)(o.k,{direction:"row",align:"center",children:[(0,j.jsxs)(i.xu,{w:"120px",children:[p?(0,j.jsx)(s.r,{color:"green.500"}):(0,j.jsx)(l.u,{label:"Pick an option",children:(0,j.jsx)(t.a,{color:"orange.500"})}),(0,j.jsx)(l.u,{label:r,placement:"top",hasArrow:!0,children:(0,j.jsx)(a.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:n})})]}),(0,j.jsx)(i.bK,{size:"10px"}),"picker"===x&&(0,j.jsx)(m,{...g}),"slider"===x&&(0,j.jsx)(w,{...g})]}),f&&!Z&&(0,j.jsxs)(o.k,{direction:"row",align:"center",children:[(0,j.jsx)(i.xu,{minWidth:"120px"}),(0,j.jsx)(i.bK,{size:"10px"}),(0,j.jsx)(i.xu,{w:"100%",children:(0,j.jsxs)(c.b,{display:"flex",status:v,children:[(0,j.jsx)(d.z,{}),b&&"function"==typeof b?b():`${b}`,y&&(0,j.jsx)(h.P,{size:"sm",style:{marginLeft:"auto"},position:"relative",right:"0",top:"0",onClick:()=>{C(!0)}})]})})]})]})})}const T=(e,n)=>0!==e.length&&(Array.isArray(e[0])?e.map((e=>e[0])).includes(n):e.includes(n)),k=e=>"Lyra"===e?.service,P=e=>["rVDI","Local"].includes(e?.service),S=e=>"GPU"===e?.hardware,I=(e,n)=>()=>{let r;return r="rVDI"===e?.service?["Linux","Windows"]:"Local"===e?.service?["Linux","macOS","Windows"]:["Linux"],{element:(s,t)=>(0,j.jsx)(C,{title:"OS",description:"The operating system to use for running the model.",type:"picker",selected:t,inputProps:{choices:r,value:e?.os,onChange:n("os")}},s),show:e=>P(e),selected:e=>T(r,e?.os)}},M=(e,n)=>()=>{const r=["Any","AMD","Intel"];return{element:(s,t)=>(0,j.jsx)(C,{title:"CPU Vendor",type:"picker",selected:t,inputProps:{choices:r,value:e?.cpuVendor,onChange:n("cpuVendor")}},s),show:e=>k(e),selected:e=>T(r,e?.cpuVendor)}},L=(e,n)=>()=>{let r=[];return"AMD"===e?.cpuVendor?r=["7702","7713","75F3"]:"Intel"===e?.cpuVendor&&(r=["6140","6248","8260","E7-8890v4"]),{element:(s,t)=>(0,j.jsx)(C,{title:"CPU Model",type:"picker",selected:t,inputProps:{choices:r,value:e?.cpuModel,onChange:n("cpuModel")}},s),show:e=>k(e)&&e?.cpuVendor&&"Any"!==e.cpuVendor,selected:e=>T(r,e?.cpuModel)}},D=(e,n)=>()=>{let r;return r="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?128:"75F3"===e?.cpuModel?64:"6140"===e?.cpuModel?36:"6248"===e?.cpuModel?40:"8260"===e?.cpuModel?48:"E7-8890v4"===e?.cpuModel?96:128,{element:(s,t)=>(0,j.jsx)(C,{title:"CPU",type:"slider",selected:t,inputProps:{value:e?.cpuCores,label:"cores",min:1,max:r,step:1,onChange:n("cpuCores")}},s),show:e=>k(e),selected:()=>!0}},F=(e,n)=>()=>{let r;return r="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?1006:"75F3"===e?.cpuModel?503:"6140"===e?.cpuModel||"6248"===e?.cpuModel||"8260"===e?.cpuModel?186:"E7-8890v4"===e?.cpuModel?5794:1006,{element:(s,t)=>(0,j.jsx)(C,{title:"RAM",type:"slider",selected:t,inputProps:{value:e?.ram,label:"GB",min:8,max:r,step:8,onChange:n("ram")}},s),show:e=>k(e),selected:()=>!0}},A=(e,n)=>()=>{let r=[];return"CPU"===e?.hardware?r=["1 core, 8 GB, 8 hours","4 cores, 32 GB, 8 hours","8 cores, 64 GB, 4 hours","16 cores, 128GB, 4 hours"]:"GPU"===e?.hardware&&(r=["4 cores, 32 GB, T4 GPU, 4 hours","8 cores, 64 GB, T4 GPU, 2 hours"]),{element:(s,t)=>(0,j.jsx)(C,{title:"Job Profile",type:"picker",selected:t,inputProps:{choices:r,value:e?.jobProfile,onChange:n("jobProfile")}},s),show:e=>"JupyterHub"===e?.service&&e?.hardware,selected:e=>T(r,e?.jobProfile)}},E=(e,n)=>()=>{const r=["Any","NVIDIA","AMD"];return{element:(s,t)=>(0,j.jsx)(C,{title:"GPU Vendor",type:"picker",selected:t,inputProps:{choices:r,value:e?.gpuVendor,onChange:n("gpuVendor")}},s),show:e=>k(e)&&S(e),selected:e=>T(r,e?.gpuVendor)}},V=(e,n)=>()=>{let r=[];return"NVIDIA"===e?.gpuVendor?r=[["T4","Tesla T4 16 GB"],["P100","TESLA P100-PCIE-16GB"],["V100","TESLA V100-PCIE-32GB"],["A100","NVIDIA A100-SXM4-40GB"]]:"AMD"===e?.gpuVendor&&(r=[["MI100","AMD MI100 32 GB"],["MI210","AMD MI210 16 GB"]]),{element:(s,t)=>(0,j.jsx)(C,{title:"GPU Model",type:"picker",selected:t,inputProps:{choices:r,value:e?.gpuModel,onChange:n("gpuModel")}},s),show:e=>k(e)&&"GPU"===e?.hardware&&e?.gpuVendor&&"Any"!==e.gpuVendor,selected:e=>T(r,e?.gpuModel)}},U=(e,n)=>()=>({element:(r,s)=>(0,j.jsx)(C,{title:"GPU",type:"slider",selected:s,inputProps:{value:e?.gpuModules,label:"modules",min:1,max:8,step:1,onChange:n("gpuModules")}},r),show:e=>k(e)&&S(e),selected:()=>!0}),G=(e,n)=>()=>{let r=[];return r="JupyterHub"===e?.service?[["Conda","Conda package manager"]]:P(e)&&["macOS","Windows"].includes(e?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Singularity","Singularity / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(s,t)=>(0,j.jsx)(C,{title:"Environment",description:"The Python package management system.",type:"picker",selected:t,inputProps:{choices:r,value:e?.environment,onChange:n("environment")}},s),show:e=>e?.service,selected:e=>T(r,e?.environment)}},z=(e,n)=>()=>{let r=[];return r="Lyra"===e?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(s,t)=>(0,j.jsx)(C,{title:"Tool",description:"The interface to use for running the model.",type:"picker",selected:t,inputProps:{choices:r,value:e?.tool,onChange:n("tool")}},s),show:e=>e?.service,selected:e=>T(r,e?.tool)}};function O(e){let{config:n,onConfigChange:r,getConfigGroups:s}=e;return(0,j.jsx)(i.xu,{children:Object.entries(s(n,r)).map((e=>{let[n,r]=e;return[n,r()]})).filter((e=>{let[r,s]=e;return s.show(n)})).map((e=>{let[r,s]=e;return s.element(r,s.selected(n))}))})}const R=(e,n)=>Object.values(n(e)).map((e=>e())).filter((n=>n.show(e))).every((n=>n.selected(e)))},6115:(e,n,r)=>{r.d(n,{DN:()=>h,Q5:()=>x,fD:()=>j});var s=r(2883),t=r(6089),i=r(2757),o=r(3990),l=r(3614),a=r(607),c=r(7294),d=r(5893);function h(e){let{title:n,subtitle:r,logo:o,alt:l,link:a}=e;return(0,d.jsxs)(s.r,{href:a,isExternal:!0,children:[(0,d.jsx)(t.E,{float:"left",verticalAlign:"middle",src:o,alt:l,display:"inline",height:"30px"}),(0,d.jsx)(i.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:n}),r&&(0,d.jsx)(i.X,{as:"h3",size:"xs",mt:4,children:r})]})}const u=(0,c.createContext)({colorScheme:"teal",pickerTextColor:"white",pickerTextShadow:"1px 1px 1px black"}),x=()=>(0,c.useContext)(u),p=e=>{let{children:n,...r}=e;return(0,d.jsx)(u.Provider,{value:{...r},children:n})};function j(e){let{colorScheme:n,header:r,body:s}=e;return(0,d.jsx)(p,{colorScheme:n,children:(0,d.jsxs)(o.Z,{children:[r&&(0,d.jsx)(l.O,{children:r}),(0,d.jsx)(a.e,{children:s})]})})}},5491:(e,n,r)=>{r.d(n,{Z:()=>Pe});var s=r(273),t=r(2757),i=r(4071),o=r(7334),l=r(7747),a=r(1293),c=r(4225),d=r(2215),h=r(8087),u=r(2185),x=r(7294);const p=r.p+"assets/images/hf-logo-6fd51d26c652a2d5a3c17c9e76a4ea46.png";var j=r(2923),m=r(8719),g=r(3990),f=r(607),y=r(5893);function v(e){let{choices:n,page:r,showPage:s=!1,onPageChange:t=((e,n)=>{}),clickable:i=!1}=e;if(s)return(0,y.jsxs)(l.xu,{children:[r,(0,y.jsx)(c.z,{leftIcon:(0,y.jsx)(j.R,{}),position:"absolute",right:"4",top:"4",size:"sm",onClick:()=>t(!1,void 0),children:"Back"})]});const o=1===n.length?1:3===n.length?3:2;return(0,y.jsx)(m.M,{columns:o,spacing:2,children:n.map(((e,n)=>(0,y.jsx)(l.xu,{onClick:i?()=>t(!0,n):null,cursor:i?"pointer":"auto",children:(0,y.jsx)(g.Z,{height:"100%",children:(0,y.jsx)(f.e,{children:e})})},n)))})}var b=r(4396),w=r(6115),Z=r(9289),C=r(7239),T=r(5161),k=r(9273),P=r(6101),S=r(2883),I=r(4758),M=r(9206),L=r(483);function D(e){let{service:n,port:r,node:s,username:t}=e;return(0,y.jsxs)(y.Fragment,{children:["Lyra"===n&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M.Z,{children:"Forward the port"}),(0,y.jsx)(L.Z,{children:"In a new terminal window, run the following command to forward traffic from the server to your local machine:"}),""===t&&(0,y.jsx)(L.Z,{children:(0,y.jsxs)("i",{children:["Replace ",(0,y.jsx)(P.E,{children:"qutusername"})," with your QUT username."]})}),""===s&&(0,y.jsx)(L.Z,{children:(0,y.jsxs)("i",{children:["Replace ",(0,y.jsx)(P.E,{children:"node"})," with the name of the node the job is running on."]})}),(0,y.jsxs)(I.Z,{children:["ssh -L ",r,":",s||"node",":",r," ",t||"qutusername","@lyra.qut.edu.au"]})]}),(0,y.jsx)(M.Z,{children:"Access the tool"}),(0,y.jsxs)(L.Z,{children:["In your web browser, navigate to the following address:"," ",(0,y.jsxs)(S.r,{href:`http://localhost:${r}`,isExternal:!0,color:"blue.500",children:["http://localhost:",r]})]}),(0,y.jsxs)(I.Z,{children:["http://localhost:",r]})]})}var F=r(3623),A=r(959),E=r(4461),V=r(4124),U=r(4028),G=r(889),z=r(4153),O=r(7405);function R(e,n){let r="hf_pipeline.sif";return"GPU"===e?"NVIDIA"===n?r="hf_pipeline_nvidia.sif":"AMD"===n&&(r="hf_pipeline_amd.sif"):"CPU"===e&&(r="hf_pipeline_cpu.sif"),r}function _(e){let{hardware:n,gpuVendor:r}=e;const s=R(n,r);let t="cpu";return"GPU"===n&&("NVIDIA"===r?t="nvidia":"AMD"===r&&(t="amd")),(0,y.jsxs)(I.Z,{children:["singularity build ",s," ","docker://ghcr.io/eresearchqut/ai-toolbox/hf_pipeline:",t]})}function q(e){let{hardware:n,gpuVendor:r,service:s}=e;const t=[];"GPU"===n&&t.push("--nv"),"Lyra"===s&&t.push("--bind /:/lyra","--bind /work:/work","--contain","--cleanenv");const i=t.length>0?t.join(" ")+" ":"",o="Lyra"===s?"/work/ai-toolbox/containers/":"";let l=R(n,r);return(0,y.jsxs)(I.Z,{children:["singularity run ",i,o,l," bash"]})}function B(e){let{hardware:n,gpuVendor:r,service:s,environment:t,tool:i}=e;const o=["rVDI","Local"].includes(s),l=o&&"Notebook"===i;return(0,y.jsxs)(y.Fragment,{children:["Singularity"===t&&(0,y.jsxs)(y.Fragment,{children:[o&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M.Z,{children:"Install Singularity (if it has not been installed)"}),(0,y.jsxs)(L.Z,{children:["Follow the instructions"," ",(0,y.jsx)(S.r,{href:"https://sylabs.io/docs/",isExternal:!0,color:"blue.500",children:"here"})," ","to install singularity."]}),(0,y.jsx)(M.Z,{children:"Set up the container"}),(0,y.jsx)(L.Z,{children:"Build the container:"}),(0,y.jsx)(_,{hardware:n,gpuVendor:r})]}),"Lyra"===s&&(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(M.Z,{children:"Set up the container"})}),(0,y.jsx)(L.Z,{children:"Run the container:"}),(0,y.jsx)(q,{hardware:n,gpuVendor:r,service:s})]}),"Conda"===t&&(0,y.jsxs)(y.Fragment,{children:["JupyterHub"!==s&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M.Z,{children:"Install Conda (if it has not been installed)"}),(0,y.jsxs)(A.m,{children:[(0,y.jsxs)(E.t,{children:[(0,y.jsx)(V.O,{children:"mamba"}),(0,y.jsx)(V.O,{children:"conda"})]}),(0,y.jsxs)(U.n,{children:[(0,y.jsxs)(G.x,{children:[(0,y.jsx)(L.Z,{children:"Download the latest version of micromamba"}),(0,y.jsx)(I.Z,{children:"wget https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh"}),(0,y.jsx)(L.Z,{children:"Run the installer and follow the prompts to install micromamba:"}),(0,y.jsx)(I.Z,{children:"bash install.sh -p ~/micromamba"}),(0,y.jsx)(L.Z,{children:"Create an alias for micromamba"}),(0,y.jsx)(I.Z,{children:'echo "alias conda=micromamba" >> ~/.bashrc'}),(0,y.jsx)(L.Z,{children:"Refresh the shell:"}),(0,y.jsx)(I.Z,{children:"source ~/.bashrc"})]}),(0,y.jsxs)(G.x,{children:[(0,y.jsxs)(z.b,{status:"warning",children:[(0,y.jsx)(O.z,{}),"Packages take a long time to install with conda. We recommend using mamba instead."]}),(0,y.jsx)(L.Z,{children:"Download the latest version of miniconda:"}),(0,y.jsx)(I.Z,{children:"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"}),(0,y.jsx)(L.Z,{children:"Run the installer and follow the prompts to install conda:"}),(0,y.jsx)(I.Z,{children:"bash Miniconda3-latest-Linux-x86_64.sh"}),(0,y.jsx)(L.Z,{children:"Refresh the shell:"}),(0,y.jsx)(I.Z,{children:"source ~/.bashrc"})]})]})]})]}),(0,y.jsx)(M.Z,{children:"Set up the conda environment"}),(0,y.jsx)(L.Z,{children:"Create the conda environment (if it doesn't exist):"}),(0,y.jsx)(I.Z,{children:"conda create --name hf"}),(0,y.jsx)(L.Z,{children:"Activate the conda environment:"}),(0,y.jsx)(I.Z,{children:"conda activate hf"}),(0,y.jsx)(L.Z,{children:"Install the transformers package:"}),(0,y.jsx)(I.Z,{children:"conda install -c huggingface -c conda-forge transformers"}),(0,y.jsx)(L.Z,{children:"Install pytorch:"}),(0,y.jsx)(I.Z,{children:"conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision torchaudio pytorch-cuda=12.1"}),(0,y.jsx)(L.Z,{children:"Install the gradio package:"}),(0,y.jsx)(I.Z,{children:"conda install -c conda-forge gradio"}),l&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(L.Z,{children:"Install JupyterLab:"}),(0,y.jsx)(I.Z,{children:"conda install -c conda-forge jupyterlab"})]})]}),"venv"===t&&(0,y.jsxs)(y.Fragment,{children:[o&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M.Z,{children:"Install Python (if it has not been installed)"}),(0,y.jsxs)(L.Z,{children:["Follow the instructions"," ",(0,y.jsx)(S.r,{href:"https://www.python.org/downloads/",isExternal:!0,color:"blue.500",children:"here"})," ","to install python."]})]}),"Lyra"===s&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M.Z,{children:"Python module"}),(0,y.jsx)(L.Z,{children:"Source the module script:"}),(0,y.jsx)(I.Z,{children:"source /etc/profile.d/modules.sh"}),(0,y.jsx)(L.Z,{children:"Load the python module:"}),(0,y.jsx)(I.Z,{children:"module load python/3.10.8-gcccore-12.2.0-bare"}),(0,y.jsx)(L.Z,{children:"Check the python version"}),(0,y.jsx)(I.Z,{children:"python --version"})]}),(0,y.jsx)(M.Z,{children:"Set up the virtual environment"}),(0,y.jsx)(L.Z,{children:"Create the virtual environment (if it doesn't exist):"}),(0,y.jsx)(I.Z,{children:"python -m venv hf-venv"}),(0,y.jsx)(L.Z,{children:"Activate the virtual environment:"}),(0,y.jsx)(I.Z,{children:"source hf-venv/bin/activate"}),(0,y.jsx)(L.Z,{children:"Install the base dependencies:"}),(0,y.jsx)(I.Z,{children:"pip install gradio 'transformers[torch]'"}),l&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(L.Z,{children:"Install JupyterLab:"}),(0,y.jsx)(I.Z,{children:"pip install jupyterlab"})]})]})]})}var H=r(665);function $(e){let{service:n,tool:r,task:s,model:t,port:i}=e;const o=["rVDI","Local"].includes(n);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M.Z,{children:"Run the gradio server"}),"CLI"===r&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(L.Z,{children:"Start the gradio server:"}),(0,y.jsxs)(I.Z,{children:["gradio pipeline ",s," --model=",t," ",'--server-name="0.0.0.0" --server-port=',i," ",'--device-map="auto"']})]}),"Script"===r&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(L.Z,{children:["Save the following to a file named ",(0,y.jsx)(P.E,{children:"hf_pipeline.py"})]}),(0,y.jsx)(I.Z,{children:`import gradio\nimport transformers\nimport sys\n\nTASK = "${s}"\nMODEL = "${t}"\nPORT = int(sys.argv[1])\n\nprint(f"Starting: {TASK=} {MODEL=} {PORT=}", file=sys.stderr)\nprint("Please wait while the model loads into memory...", file=sys.stderr)\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`}),(0,y.jsx)(L.Z,{children:"Run the script:"}),(0,y.jsxs)(I.Z,{children:["python hf_pipeline.py ",i]})]}),"Notebook"===r&&(0,y.jsxs)(y.Fragment,{children:[o&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(L.Z,{children:"Run the following command to start the server:"}),(0,y.jsx)(I.Z,{children:"python -m jupyterlab"}),(0,y.jsx)(L.Z,{children:"Open the link to the jupyter server in your browser, and create a new notebook."})]}),(0,y.jsx)(L.Z,{children:"Execute the following code in the notebook:"}),(0,y.jsx)(I.Z,{children:`import gradio\nimport transformers\n\nTASK = "${s}"\nMODEL = "${t}"\nPORT = ${i}\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`})]})]})}var J=r(1400),Q=r(6240);const W=/^[a-z0-9]*$/;function N(e){let{task:n,model:r,config:s,port:i}=e;const[o,a]=(0,k.Z)("qutUsername","qutusername"),[c,d]=(0,x.useState)("");return(0,y.jsxs)(l.xu,{children:["Lyra"===s.service&&(0,y.jsx)(H.Z,{label:"QUT Username",placeholder:"username",value:o,onChange:a,pattern:W,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),(0,y.jsx)(F.s,{service:s.service,username:o}),"Lyra"===s.service&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(J.Wh,{jobType:"Interactive",hardware:s.hardware,cpuVendor:s.cpuVendor,cpuModel:s.cpuModel,cpuCores:s.cpuCores,ram:s.ram,gpuVendor:s.gpuVendor,gpuModel:s.gpuModel,gpuModules:s.gpuModules,wallTime:s.wallTime}),(0,y.jsx)(H.Z,{label:"Node name",placeholder:"node",value:c,onChange:d,pattern:W,helperText:"Optionally enter the name of the node so that it can be pre-populated in the commands below.",errorText:"Node name must only contain lowercase letters and numbers"})]}),"JupyterHub"===s.service&&(0,y.jsx)(J.CJ,{jobProfile:s.jobProfile}),"rVDI"===s.service&&(0,y.jsx)(J.HW,{hardware:s.hardware,os:s.os}),"Local"===s.service&&(0,y.jsx)(J.Bc,{hardware:s.hardware,os:s.os}),(0,y.jsx)(B,{hardware:s.hardware,gpuVendor:s.gpuVendor,service:s.service,tool:s.tool,environment:s.environment}),(0,y.jsx)($,{service:s.service,tool:s.tool,task:n,model:r,port:i}),(0,y.jsx)(D,{service:s.service,port:i,node:c,username:o}),(0,y.jsxs)(l.xu,{position:"relative",padding:"10",children:[(0,y.jsx)(Z.i,{}),(0,y.jsx)(C.u,{bg:(0,T.ff)("white","gray.700"),px:"4",children:(0,y.jsx)(t.X,{as:"h2",size:"md",my:4,children:"Teardown steps"})})]}),(0,y.jsx)(Q.v,{service:s.service,environment:s.environment,usingTool:!0})]})}var K=r(1679),X=r(5349),Y=r(2140),ee=r(2735),ne=r(5040),re=r(1557),se=r(991),te=r(5115),ie=r(510),oe=r(4693),le=r(4698),ae=r(9981),ce=r(3717),de=r(8371),he=r(6370);function ue(e){let{url:n,params:r={},condition:s=!0,cache:t="force-cache",debounceTime:i=0}=e;const[o,l]=(0,x.useState)(null),[a,c]=(0,x.useState)(null),[d,h]=(0,x.useState)(s),u=new URL(n);u.search=new URLSearchParams(r).toString();const p=u.toString();return(0,x.useEffect)((()=>{const e=new AbortController,{signal:n}=e;if(!s)return e.abort(),void h(!1);h(!0);const r=setTimeout((()=>fetch(p,{signal:n,cache:t}).then((e=>e.json())).then((e=>{n.aborted||(l(e),c(null),h(!1))})).catch((e=>{n.aborted||(c(e),h(!1))}))),i);return()=>{clearTimeout(r),e.abort()}}),[p,s]),{data:o,error:a,loading:d}}function xe(e){let{model:n,onModelChange:r,models:s}=e;return(0,y.jsxs)(he.Qc,{openOnFocus:!0,creatable:!0,onChange:r,suggestWhenEmpty:!0,children:[(0,y.jsxs)(Y.B,{children:[(0,y.jsx)(he.Vp,{placeholder:"Search for a model",variant:"filled",value:n,onChange:e=>r(e.target.value)}),n&&(0,y.jsx)(ee.x,{children:(0,y.jsx)(c.z,{size:"xs",onClick:()=>r(""),children:(0,y.jsx)(K.T,{})})})]}),(0,y.jsxs)(he.Jm,{children:[s.map((e=>(0,y.jsx)(he.Gb,{value:e.id,children:e.id},e.id))),(0,y.jsx)(he.JU,{children:e=>{let{value:n}=e;return(0,y.jsxs)("span",{children:["Use custom '",n,"' model"]})}})]})]})}const pe=e=>Intl.NumberFormat(navigator.language,{notation:"compact",maximumFractionDigits:1}).format(e),je={F32:["Single Precision Floating Point",32],F16:["Half Precision Floating Point",16],BF16:["Brain Floating Point",16],I8:["Integer",8],I4:["Integer",4]},me=e=>Object.entries(e).map((e=>{let[n,r]=e;const[s,t]=je[n];return`${pe(r)} ${s} (${t} bits)`})).join(", "),ge=e=>`${pe(Object.entries(e).reduce(((e,n)=>{let[r,s]=n;const[,t]=je[r];return e+s*t}),0)/8589934592)} GB`;function fe(e){let{model:n,knownModelData:r,modelData:s,modelLoading:t}=e;if(t)return(0,y.jsx)(ne.E,{colorScheme:"yellow",isIndeterminate:!0});if(n&&(r?.id||s?.id)){const e=s?.tags??r?.tags;return(0,y.jsx)(re.x,{children:(0,y.jsx)(se.i,{variant:"simple",size:"sm",children:(0,y.jsxs)(te.p,{children:[(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"Link"}),(0,y.jsx)(le.Td,{children:(0,y.jsxs)(S.r,{href:`https://hf.co/${n}`,isExternal:!0,children:[`hf.co/${n}`,(0,y.jsx)(X.h,{marginLeft:1})]})})]}),s?.lastModified&&(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"Last Modified"}),(0,y.jsx)(le.Td,{children:new Date(s.lastModified).toLocaleString()})]}),(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"Likes"}),(0,y.jsx)(le.Td,{children:pe(s?.likes??r?.likes)})]}),(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"Downloads"}),(0,y.jsx)(le.Td,{children:pe(s?.downloads??r?.downloads)})]}),s?.cardData?.license&&(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"License"}),(0,y.jsx)(le.Td,{children:s.cardData.license})]}),s?.safetensors?.parameters&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"Parameters"}),(0,y.jsx)(le.Td,{children:me(s.safetensors.parameters)})]}),(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:(0,y.jsx)(ae.u,{label:"Minimum size of the model in memory according to an approximate calculation. Does not include memory required for inference.",children:(0,y.jsx)("span",{children:"Minimum Size"})})}),(0,y.jsx)(le.Td,{children:ge(s.safetensors.parameters)})]})]}),e&&(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"Tags"}),(0,y.jsx)(le.Td,{children:(0,y.jsx)(ce.k,{gap:2,flexWrap:"wrap",children:e.map((e=>(0,y.jsx)(de.Vp,{size:"md",children:(0,y.jsx)(S.r,{href:`https://huggingface.co/models?other=${e}`,isExternal:!0,children:e})},e)))})})]}),s?.config?.architectures&&(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"Architectures"}),(0,y.jsx)(le.Td,{children:(0,y.jsx)(ce.k,{gap:2,flexWrap:"wrap",children:s.config.architectures.map((e=>(0,y.jsx)(de.Vp,{size:"md",children:e},e)))})})]}),s?.library_name&&(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"Library"}),(0,y.jsx)(le.Td,{children:s.library_name})]}),s?.cardData?.co2_eq_emissions&&(0,y.jsxs)(ie.Tr,{children:[(0,y.jsx)(oe.Th,{children:"CO2 Emissions"}),(0,y.jsxs)(le.Td,{children:[pe(s.cardData.co2_eq_emissions.emissions/1e3)," ","kg"]})]})]})})})}return(0,y.jsx)(y.Fragment,{})}function ye(e){let{model:n,onModelChange:r,task:s}=e;const{data:t,error:i,loading:o}=ue({url:"https://huggingface.co/api/models",params:{pipeline_tag:s,sort:"likes",limit:1e3,direction:-1}}),{data:a,loading:c}=ue({url:`https://huggingface.co/api/models/${n}`,condition:""!==n,debounceTime:500}),d=t??[],h=d.find((e=>e.id===e));return i?(0,y.jsxs)(z.b,{status:"error",children:["Error retrieving models: ",i.message]}):o?(0,y.jsx)(ne.E,{colorScheme:"yellow",isIndeterminate:!0}):(0,y.jsxs)(l.xu,{children:[(0,y.jsx)(xe,{model:n,onModelChange:r,models:d}),(0,y.jsx)(fe,{model:n,knownModelData:h,modelData:a,modelLoading:c})]})}var ve=r(3804);function be(e){let{presets:n,onPresetChange:r}=e;return(0,y.jsx)(l.xu,{children:(0,y.jsx)(ve.QI,{p:"0",children:n.map(((e,n)=>(0,y.jsx)(ve.HC,{onClick:()=>r(e),children:(0,y.jsxs)(S.r,{children:[e.name," ",(0,y.jsx)(s.m,{mx:"2px"})]})},n)))})})}function we(e){let{children:n,...r}=e;return(0,y.jsx)(t.X,{as:"h2",size:"md",marginBottom:0,...r,children:n})}function Ze(e){let{children:n}=e;return(0,y.jsxs)(i.K,{py:3,children:[(0,y.jsx)(we,{display:"inline-block",flex:"1",textAlign:"left",children:n}),(0,y.jsx)(o.X,{})]})}function Ce(e){let{presets:n,onPresetChange:r}=e;return(0,y.jsxs)(l.xu,{children:[(0,y.jsx)(we,{children:"Preset configurations"}),(0,y.jsx)(be,{presets:n,onPresetChange:r})]})}function Te(e){let{onSelected:n}=e;return(0,y.jsxs)(l.xu,{children:[(0,y.jsx)(we,{children:"Custom configuration"}),(0,y.jsx)(a.x,{my:2,children:"Choose the model, service, and settings."}),(0,y.jsx)(c.z,{size:"md",onClick:n,rightIcon:(0,y.jsx)(s.m,{}),children:"Start"})]})}const ke=function(e,n){void 0===n&&(n=()=>{});const r=r=>s=>n({...e,[r]:s});return{service:()=>{const n=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"],["Local","Your own workstation"]];return{element:(s,t)=>(0,y.jsx)(b.Cy,{title:"Service",description:"The service to use for running the model.",type:"picker",selected:t,inputProps:{choices:n,value:e?.service,onChange:r("service")}},s),show:()=>!0,selected:e=>(0,b.p8)(n,e?.service)}},os:(0,b.kA)(e,r),hardware:()=>{let n;return n=(0,b.Ae)(e)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"]],{element:(s,t)=>(0,y.jsx)(b.Cy,{title:"Hardware",description:"The hardware to use for running the model.",type:"picker",selected:t,inputProps:{choices:n,value:e?.hardware,onChange:r("hardware")}},s),show:e=>e?.service,selected:e=>(0,b.p8)(n,e?.hardware)}},cpuVendor:(0,b._3)(e,r),cpuModel:(0,b.Rs)(e,r),cpuCores:(0,b.UJ)(e,r),ram:(0,b.Hw)(e,r),jobProfile:(0,b.H4)(e,r),gpuVendor:(0,b.zh)(e,r),gpuModel:(0,b.DD)(e,r),gpuModules:(0,b.bD)(e,r),environment:(0,b.zj)(e,r),tool:(0,b.R)(e,r)}};function Pe(e){let{title:n,task:r,presets:s=[]}=e;const[t,i]=(0,x.useState)(""),[o]=(0,x.useState)(Math.floor(7e3*Math.random())+3e3),[l,c]=(0,x.useState)(b.g5),[j,m]=(0,x.useState)(!1),[g,f]=(0,x.useState)([0,1,2]),Z=""!==t,C=(0,b.Bz)(l,ke);return(0,y.jsx)(w.fD,{colorScheme:"yellow",header:(0,y.jsx)(w.DN,{title:n,logo:p,alt:"HuggingFace logo",link:`https://huggingface.co/tasks/${r}`}),body:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.x,{mb:6,children:"Step-by-step instructions to interact through your web browser with a HuggingFace model, running on Lyra, JupyterHub, rVDI, or your own machine."}),(0,y.jsx)(v,{choices:[(0,y.jsx)(Ce,{presets:s,onPresetChange:e=>{i(e.model),c(e.config),m(!0),f([2])}},0),(0,y.jsx)(Te,{onSelected:()=>{i(""),c(b.g5),m(!0),f([0,1,2])}},1)],page:(0,y.jsxs)(d.U,{allowMultiple:!0,defaultIndex:g,allowToggle:!0,children:[(0,y.jsxs)(h.Q,{children:[(0,y.jsx)(Ze,{children:"Model"}),(0,y.jsx)(u.H,{children:(0,y.jsx)(ye,{model:t,onModelChange:i,task:r})})]}),Z&&(0,y.jsxs)(h.Q,{children:[(0,y.jsx)(Ze,{children:"Configuration"}),(0,y.jsx)(u.H,{children:(0,y.jsx)(b.De,{config:l,onConfigChange:c,getConfigGroups:ke})})]}),Z&&C&&(0,y.jsxs)(h.Q,{children:[(0,y.jsx)(Ze,{children:"Instructions"}),(0,y.jsx)(u.H,{children:(0,y.jsx)(N,{task:r,model:t,config:l,port:o})})]})]}),showPage:j,onPageChange:e=>m(e)})]})})}},3623:(e,n,r)=>{r.d(n,{s:()=>Z});var s=r(4153),t=r(7405),i=r(2883),o=r(7747),l=r(1293),a=r(6101),c=r(4758),d=r(9206),h=r(483),u=r(959),x=r(4461),p=r(4124),j=r(4028),m=r(889),g=r(7294),f=r(5893);function y(e){let{children:n}=e;const[r,s]=(0,g.useState)(-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0);return(0,f.jsxs)(u.m,{index:r,onChange:s,children:[(0,f.jsxs)(x.t,{children:[(0,f.jsx)(p.O,{children:"Windows"}),(0,f.jsx)(p.O,{children:"macOS"}),(0,f.jsx)(p.O,{children:"Linux"})]}),(0,f.jsxs)(j.n,{children:[(0,f.jsx)(m.x,{p:0,children:n[0]}),(0,f.jsx)(m.x,{p:0,children:n[1]}),(0,f.jsx)(m.x,{p:0,children:n[2]})]})]})}function v(e){let{username:n}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{children:"Connect to Lyra"}),(0,f.jsxs)(s.b,{status:"info",children:[(0,f.jsx)(t.z,{}),"If you are off-campus, you will first need to connect to the QUT network using the VPN."]}),(0,f.jsxs)(h.Z,{children:["See the instructions"," ",(0,f.jsx)(i.r,{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",isExternal:!0,color:"blue.500",children:"here"})," ","for more information about how to use Lyra."]}),(0,f.jsxs)(y,{children:[(0,f.jsxs)(o.xu,{children:[(0,f.jsxs)(s.b,{status:"info",children:[(0,f.jsx)(t.z,{}),(0,f.jsxs)(l.x,{mb:"0",children:["You may need to enable the"," ",(0,f.jsx)(i.r,{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",isExternal:!0,color:"blue.500",children:"ssh feature"})," ","in Windows."]})]}),(0,f.jsx)(h.Z,{children:"In Windows Terminal, Powershell, or cmd.exe, run the following command to connect to Lyra:"})]}),(0,f.jsx)(o.xu,{children:(0,f.jsx)(h.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,f.jsx)(o.xu,{children:(0,f.jsx)(h.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===n&&(0,f.jsx)(h.Z,{children:(0,f.jsxs)("i",{children:["Replace ",(0,f.jsx)(a.E,{children:"qutusername"})," with your QUT username."]})}),(0,f.jsxs)(c.Z,{children:["ssh ",n||"qutusername","@lyra.qut.edu.au"]})]})}function b(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{children:"Connect to JupyterHub"}),(0,f.jsxs)(h.Z,{children:["Visit"," ",(0,f.jsx)(i.r,{href:"https://jupyterhub.eres.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://jupyterhub.eres.qut.edu.au"})," ","and log in with your QUT username and password."]})]})}function w(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{children:"Connect to rVDI"}),(0,f.jsxs)(h.Z,{children:["See the instructions"," ",(0,f.jsx)(i.r,{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",isExternal:!0,color:"blue.500",children:"here"})," ","for more information."]}),(0,f.jsxs)(h.Z,{children:["If you have not already, download and install the VMware Horizon client from"," ",(0,f.jsx)(i.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://rvdi.qut.edu.au"}),"."]}),(0,f.jsxs)(h.Z,{children:["In the VMware Horizon client, connect to"," ",(0,f.jsx)(i.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"rvdi.qut.edu.au"})," ","and log in with your QUT username and password."]})]})}function Z(e){let{service:n,username:r}=e;return(0,f.jsxs)(f.Fragment,{children:["Lyra"===n&&(0,f.jsx)(v,{username:r}),"JupyterHub"===n&&(0,f.jsx)(b,{}),"rVDI"===n&&(0,f.jsx)(w,{}),"Local"===n&&(0,f.jsx)(f.Fragment,{})," "]})}},665:(e,n,r)=>{r.d(n,{Z:()=>x});var s=r(9754),t=r(8049),i=r(9371),o=r(2140),l=r(3090),a=r(2735),c=r(7821),d=r(7294),h=r(9206),u=r(5893);function x(e){let{label:n,placeholder:r,value:x,onChange:p,pattern:j,helperText:m,errorText:g}=e;const[f,y]=(0,d.useState)(x),[v,b]=(0,d.useState)(!0);(0,d.useEffect)((()=>{b(j.test(x)),y(x)}),[x]);return(0,u.jsxs)(t.NI,{isInvalid:!v,children:[(0,u.jsx)(i.l,{children:(0,u.jsx)(h.Z,{children:n})}),(0,u.jsxs)(o.B,{children:[(0,u.jsx)(l.I,{type:"text",placeholder:r,value:f,onChange:e=>{y(e.target.value),p(e.target.value)},pattern:j}),v&&""!==x&&(0,u.jsx)(a.x,{children:(0,u.jsx)(s.n,{color:"green.500"})})]}),!v&&(0,u.jsx)(c.J1,{children:g}),(0,u.jsx)(t.Q6,{children:m})]})}},1400:(e,n,r)=>{r.d(n,{Bc:()=>x,CJ:()=>h,HW:()=>u,Wh:()=>d});var s=r(5349),t=r(6101),i=r(2883),o=r(4758),l=r(9206),a=r(483),c=r(5893);function d(e){let{jobType:n,jobName:r="",nodes:s,wallTime:i,hardware:d,cpuVendor:h,cpuModel:u,cpuCores:x,ram:p,gpuVendor:j,gpuModel:m,gpuModules:g}=e;const f=[`select=${"Interactive"===n?1:s}`,`ncpus=${x}`,`mem=${p}gb`];"Any"!==h&&u&&f.push(`cputype=${u}`),"GPU"===d&&(f.push(`ngpus=${g}`),"Any"!==j&&m&&f.push(`gputype=${m}`));const y=["Interactive"===n?" -I":"","Interactive"!==n&&""!==r?' -N "'+r+'"':""],v="Interactive"===n?"01:00:00":(i?.hour<10?"0":"")+i?.hour+":"+(i?.minute<10?"0":"")+i?.minute+":00";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Schedule a job"}),(0,c.jsxs)(a.Z,{children:["In the ssh session, run the following command to schedule the"," ",n.toLowerCase()," job:"]}),(0,c.jsx)(o.Z,{children:`qsub${y.join("")} -l walltime=${v} -l ${f.join(":")}`}),"Interactive"===n&&(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(a.Z,{children:["Wait for the job to start, and take note of the node you are on (eg."," ",(0,c.jsx)(t.E,{children:"cl5n042"}),")."]})}),"Batch"===n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{children:"You can check the status of your jobs by running the following:"}),(0,c.jsx)(o.Z,{children:"qstat -u $USER"})]})]})}function h(e){let{jobProfile:n}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Schedule a job"}),(0,c.jsxs)(a.Z,{children:["From the JupyterHub home page, click ",(0,c.jsx)(t.E,{children:"Start My Server"})," to schedule a job."]}),(0,c.jsxs)(a.Z,{children:["From the list of available options, select the one containing"," ",(0,c.jsxs)(t.E,{children:["Lyra - ",n]})," and click the ",(0,c.jsx)(t.E,{children:"Start"})," ","button."]}),(0,c.jsx)(l.Z,{children:"Waiting Screen"}),(0,c.jsxs)(a.Z,{children:["You will now enter a waiting screen and see the following message:",(0,c.jsx)("br",{}),(0,c.jsx)(t.E,{children:"Your server is starting up."}),(0,c.jsx)("br",{}),(0,c.jsx)(t.E,{children:"You will be redirected automatically when it's ready for you"})]}),(0,c.jsx)(a.Z,{children:"Wait for the to be redirected."}),(0,c.jsxs)(a.Z,{children:["It may take up to 10 minutes for your job to be queued and for the server to start. If it fails to start, please raise an incident in the"," ",(0,c.jsxs)(i.r,{color:"teal.500",href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",isExternal:!0,children:["eResearch help centre",(0,c.jsx)(s.h,{mx:"2px"})]}),"."]})]})}function u(e){let n,{hardware:r,os:s}=e;return n="Linux"===s?"Red Hat VDI Medium with GPU":"GPU"===r?"eResearch Large with GPU":"eResearch General VDI",(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{children:"Start a session"}),(0,c.jsxs)(a.Z,{children:["From the list of machines, select the one named"," ",(0,c.jsx)(t.E,{children:n})]})]})}function x(e){let{_hardware:n,_os:r}=e}},6240:(e,n,r)=>{r.d(n,{v:()=>h});var s=r(4153),t=r(7405),i=r(6409),o=r(6101),l=r(4758),a=r(9206),c=r(483),d=r(5893);function h(e){let{service:n,jobType:r,environment:h,usingTool:u=!1}=e;return(0,d.jsxs)(d.Fragment,{children:["Lyra"===n&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.b,{status:"warning",variant:"left-accent",children:[(0,d.jsx)(t.z,{}),"Lyra is a shared resource, only request the resources you need."]})}),u&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:"Stop the server"}),(0,d.jsxs)(c.Z,{children:["Once you have finished using the tool, stop the server by pressing"," ",(0,d.jsx)(i.T,{children:"Ctrl"})," + ",(0,d.jsx)(i.T,{children:"C"})," in the terminal."]}),(0,d.jsx)(c.Z,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."})]}),"Singularity"===h&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:"Exit the container"}),(0,d.jsxs)(c.Z,{children:["Exit the container by pressing ",(0,d.jsx)(i.T,{children:"Ctrl"})," + ",(0,d.jsx)(i.T,{children:"D"}),", or typing ",(0,d.jsx)(o.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===n&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:"Stop the job"}),"Interactive"===r&&(0,d.jsxs)(c.Z,{children:["Stop the job by pressing ",(0,d.jsx)(i.T,{children:"Ctrl"})," + ",(0,d.jsx)(i.T,{children:"D"}),", or typing"," ",(0,d.jsx)(o.E,{children:"exit"})," in the terminal."]}),"Batch"===r&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.Z,{children:"The batch job will stop automatically when the job's script terminates, or the walltime elapses."}),(0,d.jsxs)(c.Z,{children:["To stop the job early, you need to know your job id. You can either note down your job id when you submit a batch job, or find the job id using the check job status command:",(0,d.jsx)(l.Z,{children:"qstat -u $USER"})]}),(0,d.jsxs)(c.Z,{children:["To stop the job early, run the following:",(0,d.jsx)(l.Z,{children:"qdel {job_id}"})]})]}),(0,d.jsx)(a.Z,{children:"Exit the ssh session"}),(0,d.jsxs)(c.Z,{children:["Exit the ssh session on Lyra by pressing ",(0,d.jsx)(i.T,{children:"Ctrl"})," +"," ",(0,d.jsx)(i.T,{children:"D"}),", or typing ",(0,d.jsx)(o.E,{children:"exit"})," in the terminal."]}),u&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:"Stop port forwarding"}),(0,d.jsxs)(c.Z,{children:["Stop local port forwarding by pressing ",(0,d.jsx)(i.T,{children:"Ctrl"})," +"," ",(0,d.jsx)(i.T,{children:"D"}),", or typing ",(0,d.jsx)(o.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})]})}},9206:(e,n,r)=>{r.d(n,{Z:()=>i});var s=r(2757),t=r(5893);function i(e){let{children:n}=e;return(0,t.jsx)(s.X,{as:"h3",size:"sm",my:4,children:n})}},483:(e,n,r)=>{r.d(n,{Z:()=>i});var s=r(1293),t=r(5893);function i(e){let{children:n}=e;return(0,t.jsx)(s.x,{my:4,children:n})}},1769:(e,n,r)=>{r.d(n,{Z:()=>t});var s=r(5491);const t={...r(1220).Z,HuggingFacePipeline:s.Z}}}]);