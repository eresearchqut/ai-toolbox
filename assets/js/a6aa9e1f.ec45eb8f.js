"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[3089,7918],{46:(e,n,r)=>{r.r(n),r.d(n,{default:()=>p});r(7294);var s=r(6010),t=r(2263),i=r(1944),o=r(5281),l=r(1460),a=r(9703),c=r(197),d=r(9985),h=r(5893);function u(e){const{metadata:n}=e,{siteConfig:{title:r}}=(0,t.Z)(),{blogDescription:s,blogTitle:o,permalink:l}=n,a="/"===l?r:o;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.d,{title:a,description:s}),(0,h.jsx)(c.Z,{tag:"blog_posts_list"})]})}function x(e){const{metadata:n,items:r,sidebar:s}=e;return(0,h.jsxs)(l.Z,{sidebar:s,children:[(0,h.jsx)(d.Z,{items:r}),(0,h.jsx)(a.Z,{metadata:n})]})}function p(e){return(0,h.jsxs)(i.FG,{className:(0,s.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,h.jsx)(u,{...e}),(0,h.jsx)(x,{...e})]})}},9703:(e,n,r)=>{r.d(n,{Z:()=>o});r(7294);var s=r(5999),t=r(2244),i=r(5893);function o(e){const{metadata:n}=e,{previousPage:r,nextPage:o}=n;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[r&&(0,i.jsx)(t.Z,{permalink:r,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,i.jsx)(t.Z,{permalink:o,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,n,r)=>{r.d(n,{Z:()=>o});r(7294);var s=r(9460),t=r(390),i=r(5893);function o(e){let{items:n,component:r=t.Z}=e;return(0,i.jsx)(i.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,i.jsx)(s.n,{content:n,children:(0,i.jsx)(r,{children:(0,i.jsx)(n,{})})},n.metadata.permalink)}))})}},980:(e,n,r)=>{r.d(n,{Z:()=>We});var s=r(7294),t=r(2757),i=r(4071),o=r(7334),l=r(7747),a=r(1293),c=r(4225),d=r(3990),h=r(3614),u=r(2883),x=r(6089),p=r(607),j=r(2215),m=r(8087),g=r(2185),f=r(273);const v=r.p+"assets/images/hf-logo-6fd51d26c652a2d5a3c17c9e76a4ea46.png";var b=r(2140),y=r(2735),w=r(5040),C=r(1557),T=r(991),P=r(5115),k=r(510),M=r(4693),S=r(4698),I=r(9981),L=r(3717),F=r(8371),V=r(4153),E=r(1679),U=r(5349);function A(e){let{url:n,params:r={},condition:t=!0,cache:i="force-cache",debounceTime:o=0}=e;const[l,a]=(0,s.useState)(null),[c,d]=(0,s.useState)(null),[h,u]=(0,s.useState)(t),x=new URL(n);x.search=new URLSearchParams(r).toString();const p=x.toString();return(0,s.useEffect)((()=>{const e=new AbortController,{signal:n}=e;if(!t)return e.abort(),void u(!1);u(!0);const r=setTimeout((()=>fetch(p,{signal:n,cache:i}).then((e=>e.json())).then((e=>{n.aborted||(a(e),d(null),u(!1))})).catch((e=>{n.aborted||(d(e),u(!1))}))),o);return()=>{clearTimeout(r),e.abort()}}),[p,t]),{data:l,error:c,loading:h}}var D=r(6370),O=r(5893);function G(e){let{model:n,onModelChange:r,models:s}=e;return(0,O.jsxs)(D.Qc,{openOnFocus:!0,creatable:!0,onChange:r,suggestWhenEmpty:!0,children:[(0,O.jsxs)(b.B,{children:[(0,O.jsx)(D.Vp,{placeholder:"Search for a model",variant:"filled",value:n,onChange:e=>r(e.target.value)}),n&&(0,O.jsx)(y.x,{children:(0,O.jsx)(c.z,{size:"xs",onClick:()=>r(""),children:(0,O.jsx)(E.T,{})})})]}),(0,O.jsxs)(D.Jm,{children:[s.map((e=>(0,O.jsx)(D.Gb,{value:e.id,children:e.id},e.id))),(0,O.jsx)(D.JU,{children:e=>{let{value:n}=e;return(0,O.jsxs)("span",{children:["Use custom '",n,"' model"]})}})]})]})}const _=e=>Intl.NumberFormat(navigator.language,{notation:"compact",maximumFractionDigits:1}).format(e),z={F32:["Single Precision Floating Point",32],F16:["Half Precision Floating Point",16],BF16:["Brain Floating Point",16],I8:["Integer",8],I4:["Integer",4]},R=e=>Object.entries(e).map((e=>{let[n,r]=e;const[s,t]=z[n];return`${_(r)} ${s} (${t} bits)`})).join(", "),H=e=>`${_(Object.entries(e).reduce(((e,n)=>{let[r,s]=n;const[,t]=z[r];return e+s*t}),0)/8589934592)} GB`;function $(e){let{model:n,knownModelData:r,modelData:s,modelLoading:t}=e;return t?(0,O.jsx)(w.E,{colorScheme:"yellow",isIndeterminate:!0}):n&&(r?.id||s?.id)?(0,O.jsx)(C.x,{children:(0,O.jsx)(T.i,{variant:"simple",size:"sm",children:(0,O.jsxs)(P.p,{children:[(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Link"}),(0,O.jsx)(S.Td,{children:(0,O.jsxs)(u.r,{href:`https://hf.co/${n}`,isExternal:!0,children:[`hf.co/${n}`,(0,O.jsx)(U.h,{marginLeft:1})]})})]}),s?.lastModified&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Last Modified"}),(0,O.jsx)(S.Td,{children:new Date(s.lastModified).toLocaleString()})]}),(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Likes"}),(0,O.jsx)(S.Td,{children:_(s?.likes??r?.likes)})]}),(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Downloads"}),(0,O.jsx)(S.Td,{children:_(s?.downloads??r?.downloads)})]}),s?.cardData?.license&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"License"}),(0,O.jsx)(S.Td,{children:s.cardData.license})]}),s?.safetensors?.parameters&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Parameters"}),(0,O.jsx)(S.Td,{children:R(s.safetensors.parameters)})]}),(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:(0,O.jsx)(I.u,{label:"Minimum size of the model in memory according to an approximate calculation. Does not include memory required for inference.",children:(0,O.jsx)("span",{children:"Minimum Size"})})}),(0,O.jsx)(S.Td,{children:H(s.safetensors.parameters)})]})]}),(s?.tags??r?.tags)&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Tags"}),(0,O.jsx)(S.Td,{children:(0,O.jsx)(L.k,{gap:2,flexWrap:"wrap",children:(s?.tags??r?.tags).map((e=>(0,O.jsx)(F.Vp,{size:"md",children:(0,O.jsx)(u.r,{href:`https://huggingface.co/models?other=${e}`,isExternal:!0,children:e})},e)))})})]}),s?.config?.architectures&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Architectures"}),(0,O.jsx)(S.Td,{children:(0,O.jsx)(L.k,{gap:2,flexWrap:"wrap",children:s.config.architectures.map((e=>(0,O.jsx)(F.Vp,{size:"md",children:e},e)))})})]}),s?.library_name&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Library"}),(0,O.jsx)(S.Td,{children:s.library_name})]}),s?.cardData?.co2_eq_emissions&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"CO2 Emissions"}),(0,O.jsxs)(S.Td,{children:[_(s.cardData.co2_eq_emissions.emissions/1e3)," kg"]})]})]})})}):(0,O.jsx)(O.Fragment,{})}function q(e){let{model:n,onModelChange:r,task:s}=e;const{data:t,error:i,loading:o}=A({url:"https://huggingface.co/api/models",params:{pipeline_tag:s,sort:"likes",limit:1e3,direction:-1}}),{data:a,loading:c}=A({url:`https://huggingface.co/api/models/${n}`,condition:""!==n,debounceTime:500}),d=t??[],h=d.find((e=>e.id===e));return i?(0,O.jsxs)(V.b,{status:"error",children:["Error retrieving models: ",i.message]}):o?(0,O.jsx)(w.E,{colorScheme:"yellow",isIndeterminate:!0}):(0,O.jsxs)(l.xu,{children:[(0,O.jsx)(G,{model:n,onModelChange:r,models:d}),(0,O.jsx)($,{model:n,knownModelData:h,modelData:a,modelLoading:c})]})}var J=r(9289),Z=r(7239);function B(e){let{children:n}=e;return(0,O.jsx)(t.X,{as:"h3",size:"sm",my:4,children:n})}function N(e){let{children:n}=e;return(0,O.jsx)(a.x,{my:4,children:n})}var Q=r(7405),W=r(6101),K=r(959),X=r(4461),Y=r(4124),ee=r(4028),ne=r(889);function re(e){let{children:n}=e;const[r,t]=(0,s.useState)(-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0);return(0,O.jsxs)(K.m,{index:r,onChange:t,children:[(0,O.jsxs)(X.t,{children:[(0,O.jsx)(Y.O,{children:"Windows"}),(0,O.jsx)(Y.O,{children:"macOS"}),(0,O.jsx)(Y.O,{children:"Linux"})]}),(0,O.jsxs)(ee.n,{children:[(0,O.jsx)(ne.x,{p:0,children:n[0]}),(0,O.jsx)(ne.x,{p:0,children:n[1]}),(0,O.jsx)(ne.x,{p:0,children:n[2]})]})]})}var se=r(5392);function te(e){let{children:n}=e;const[r,t]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1),a=Array.isArray(n)?n.join(""):n;return(0,O.jsxs)(l.xu,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:"gray.200",bg:"gray.50",fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>t(!0),onMouseOut:()=>t(!1),position:"relative",children:[a,r&&(0,O.jsx)(I.u,{label:i?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,O.jsx)(c.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(a),o(!0),setTimeout((()=>o(!1)),1e3)},colorScheme:i?"green":"gray",children:(0,O.jsx)(se.T,{})})})]})}function ie(e){let{username:n}=e;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Connect to Lyra"}),(0,O.jsxs)(V.b,{status:"info",children:[(0,O.jsx)(Q.z,{}),"If you are off-campus, you will first need to connect to the QUT network using the VPN."]}),(0,O.jsxs)(N,{children:["See the instructions ",(0,O.jsx)(u.r,{href:"/ai-toolbox/docs/hpc/lyra/connecting",isExternal:!0,color:"blue.500",children:"here"})," for more information about how to use Lyra."]}),(0,O.jsxs)(re,{children:[(0,O.jsxs)(l.xu,{children:[(0,O.jsxs)(V.b,{status:"info",children:[(0,O.jsx)(Q.z,{}),(0,O.jsxs)(a.x,{mb:"0",children:["You may need to enable the ",(0,O.jsx)(u.r,{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",isExternal:!0,color:"blue.500",children:"ssh feature"})," in Windows."]})]}),(0,O.jsx)(N,{children:"In Windows Terminal, Powershell, or cmd.exe, run the following command to connect to Lyra:"})]}),(0,O.jsx)(l.xu,{children:(0,O.jsx)(N,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,O.jsx)(l.xu,{children:(0,O.jsx)(N,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===n&&(0,O.jsx)(N,{children:(0,O.jsxs)("i",{children:["Replace ",(0,O.jsx)(W.E,{children:"qutusername"})," with your QUT username."]})}),(0,O.jsxs)(te,{children:["ssh ",n||"qutusername","@lyra.qut.edu.au"]})]})}function oe(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Connect to JupyterHub"}),(0,O.jsxs)(N,{children:["See the instructions ",(0,O.jsx)(u.r,{href:"/ai-toolbox/docs/hpc/jupyterhub/connecting",isExternal:!0,color:"blue.500",children:"here"})," for more information about how to use JupyterHub on Lyra."]}),(0,O.jsxs)(N,{children:["Visit ",(0,O.jsx)(u.r,{href:"https://jupyterhub.eres.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://jupyterhub.eres.qut.edu.au"})," and log in with your QUT username and password."]})]})}function le(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Connect to rVDI"}),(0,O.jsxs)(N,{children:["See the instructions ",(0,O.jsx)(u.r,{href:"/ai-toolbox/docs/rvdi",isExternal:!0,color:"blue.500",children:"here"})," for more information."]}),(0,O.jsxs)(N,{children:["If you have not already, download and install the VMware Horizon client from ",(0,O.jsx)(u.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://rvdi.qut.edu.au"}),"."]}),(0,O.jsxs)(N,{children:["In the VMware Horizon client, connect to ",(0,O.jsx)(u.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"rvdi.qut.edu.au"})," and log in with your QUT username and password."]})]})}function ae(e){let{service:n,username:r}=e;return(0,O.jsxs)(O.Fragment,{children:["Lyra"===n&&(0,O.jsx)(ie,{username:r}),"JupyterHub"===n&&(0,O.jsx)(oe,{}),"rVDI"===n&&(0,O.jsx)(le,{}),"Local"===n&&(0,O.jsx)(O.Fragment,{})," "]})}function ce(e,n){let r="hf_pipeline.sif";return"GPU"===e?"NVIDIA"===n?r="hf_pipeline_nvidia.sif":"AMD"===n&&(r="hf_pipeline_amd.sif"):"CPU"===e&&(r="hf_pipeline_cpu.sif"),r}function de(e){let{hardware:n,gpuVendor:r}=e;const s=ce(n,r);let t="cpu";return"GPU"===n&&("NVIDIA"===r?t="nvidia":"AMD"===r&&(t="amd")),(0,O.jsxs)(te,{children:["singularity build ",s," docker://ghcr.io/eresearchqut/ai-toolbox/hf_pipeline:",t]})}function he(e){let{hardware:n,gpuVendor:r,service:s}=e;const t="GPU"===n?"--nv ":"",i="Lyra"===s?"/work/ai-toolbox/containers/":"";let o=ce(n,r);return(0,O.jsxs)(te,{children:["singularity run ",t,i,o," bash"]})}function ue(e){let{hardware:n,gpuVendor:r,service:s,environment:t,tool:i}=e;const o=["rVDI","Local"].includes(s),l=o&&"Notebook"===i;return(0,O.jsxs)(O.Fragment,{children:["Singularity"===t&&(0,O.jsxs)(O.Fragment,{children:[o&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Install Singularity (if it has not been installed)"}),(0,O.jsxs)(N,{children:["Follow the instructions ",(0,O.jsx)(u.r,{href:"https://sylabs.io/docs/",isExternal:!0,color:"blue.500",children:"here"})," to install singularity."]}),(0,O.jsx)(B,{children:"Set up the container"}),(0,O.jsx)(N,{children:"Build the container:"}),(0,O.jsx)(de,{hardware:n,gpuVendor:r})]}),"Lyra"===s&&(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(B,{children:"Set up the container"})}),(0,O.jsx)(N,{children:"Run the container:"}),(0,O.jsx)(he,{hardware:n,gpuVendor:r,service:s})]}),"Conda"===t&&(0,O.jsxs)(O.Fragment,{children:["JupyterHub"!==s&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Install Conda (if it has not been installed)"}),(0,O.jsxs)(K.m,{children:[(0,O.jsxs)(X.t,{children:[(0,O.jsx)(Y.O,{children:"mamba"}),(0,O.jsx)(Y.O,{children:"conda"})]}),(0,O.jsxs)(ee.n,{children:[(0,O.jsxs)(ne.x,{children:[(0,O.jsx)(N,{children:"Download the latest version of micromamba"}),(0,O.jsx)(te,{children:"wget https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh"}),(0,O.jsx)(N,{children:"Run the installer and follow the prompts to install micromamba:"}),(0,O.jsx)(te,{children:"bash install.sh -p ~/micromamba"}),(0,O.jsx)(N,{children:"Create an alias for micromamba"}),(0,O.jsx)(te,{children:'echo "alias conda=micromamba" >> ~/.bashrc'}),(0,O.jsx)(N,{children:"Refresh the shell:"}),(0,O.jsx)(te,{children:"source ~/.bashrc"})]}),(0,O.jsxs)(ne.x,{children:[(0,O.jsxs)(V.b,{status:"warning",children:[(0,O.jsx)(Q.z,{}),"Packages take a long time to install with conda. We recommend using mamba instead."]}),(0,O.jsx)(N,{children:"Download the latest version of miniconda:"}),(0,O.jsx)(te,{children:"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"}),(0,O.jsx)(N,{children:"Run the installer and follow the prompts to install conda:"}),(0,O.jsx)(te,{children:"bash Miniconda3-latest-Linux-x86_64.sh"}),(0,O.jsx)(N,{children:"Refresh the shell:"}),(0,O.jsx)(te,{children:"source ~/.bashrc"})]})]})]})]}),(0,O.jsx)(B,{children:"Set up the conda environment"}),(0,O.jsx)(N,{children:"Create the conda environment (if it doesn't exist):"}),(0,O.jsx)(te,{children:"conda create --name hf"}),(0,O.jsx)(N,{children:"Activate the conda environment:"}),(0,O.jsx)(te,{children:"conda activate hf"}),(0,O.jsx)(N,{children:"Install the transformers package:"}),(0,O.jsx)(te,{children:"conda install -c huggingface -c conda-forge transformers"}),(0,O.jsx)(N,{children:"Install pytorch:"}),(0,O.jsx)(te,{children:"conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision torchaudio pytorch-cuda=12.1"}),(0,O.jsx)(N,{children:"Install the gradio package:"}),(0,O.jsx)(te,{children:"conda install -c conda-forge gradio"}),l&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(N,{children:"Install JupyterLab:"}),(0,O.jsx)(te,{children:"conda install -c conda-forge jupyterlab"})]})]}),"venv"===t&&(0,O.jsxs)(O.Fragment,{children:[o&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Install Python (if it has not been installed)"}),(0,O.jsxs)(N,{children:["Follow the instructions ",(0,O.jsx)(u.r,{href:"https://www.python.org/downloads/",isExternal:!0,color:"blue.500",children:"here"})," to install python."]})]}),"Lyra"===s&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Python module"}),(0,O.jsx)(N,{children:"Source the module script:"}),(0,O.jsx)(te,{children:"source /etc/profile.d/modules.sh"}),(0,O.jsx)(N,{children:"Load the python module:"}),(0,O.jsx)(te,{children:"module load python/3.10.8-gcccore-12.2.0-bare"}),(0,O.jsx)(N,{children:"Check the python version"}),(0,O.jsx)(te,{children:"python --version"})]}),(0,O.jsx)(B,{children:"Set up the virtual environment"}),(0,O.jsx)(N,{children:"Create the virtual environment (if it doesn't exist):"}),(0,O.jsx)(te,{children:"python -m venv hf-venv"}),(0,O.jsx)(N,{children:"Activate the virtual environment:"}),(0,O.jsx)(te,{children:"source hf-venv/bin/activate"}),(0,O.jsx)(N,{children:"Install the base dependencies:"}),(0,O.jsx)(te,{children:"pip install gradio 'transformers[torch]'"}),l&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(N,{children:"Install JupyterLab:"}),(0,O.jsx)(te,{children:"pip install jupyterlab"})]})]})]})}function xe(e){let{service:n,tool:r,task:s,model:t,port:i}=e;const o=["rVDI","Local"].includes(n);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Run the gradio server"}),"CLI"===r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(N,{children:"Start the gradio server:"}),(0,O.jsxs)(te,{children:["gradio pipeline ",s," --model=",t,' --server-name="0.0.0.0" --server-port=',i,' --device-map="auto"']})]}),"Script"===r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(N,{children:["Save the following to a file named ",(0,O.jsx)(W.E,{children:"hf_pipeline.py"})]}),(0,O.jsx)(te,{children:`import gradio\nimport transformers\nimport sys\n\nTASK = "${s}"\nMODEL = "${t}"\nPORT = int(sys.argv[1])\n\nprint(f"Starting: {TASK=} {MODEL=} {PORT=}", file=sys.stderr)\nprint("Please wait while the model loads into memory...", file=sys.stderr)\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`}),(0,O.jsx)(N,{children:"Run the script:"}),(0,O.jsxs)(te,{children:["python hf_pipeline.py ",i]})]}),"Notebook"===r&&(0,O.jsxs)(O.Fragment,{children:[o&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(N,{children:"Run the following command to start the server:"}),(0,O.jsx)(te,{children:"python -m jupyterlab"}),(0,O.jsx)(N,{children:"Open the link to the jupyter server in your browser, and create a new notebook."})]}),(0,O.jsx)(N,{children:"Execute the following code in the notebook:"}),(0,O.jsx)(te,{children:`import gradio\nimport transformers\n\nTASK = "${s}"\nMODEL = "${t}"\nPORT = ${i}\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`})]})]})}function pe(e){let{hardware:n,cpuVendor:r,cpuModel:s,cpuCores:t,ram:i,gpuVendor:o,gpuModel:l,gpuModules:a}=e;const c=["select=1",`ncpus=${t}`,`mem=${i}gb`];return"Any"!==r&&s&&c.push(`cputype=${s}`),"GPU"===n&&(c.push(`ngpus=${a}`),"Any"!==o&&l&&c.push(`gputype=${l}`)),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Schedule an interactive job"}),(0,O.jsx)(N,{children:"In the ssh session, run the following command to schedule an interactive job:"}),(0,O.jsx)(te,{children:`qsub -I -l walltime=1:00:00 -l ${c.join(":")}`}),(0,O.jsxs)(N,{children:["Wait for the job to start, and take note of the node you are on (eg. ",(0,O.jsx)(W.E,{children:"cl5n042"}),")."]})]})}function je(e){let{jobProfile:n}=e;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Schedule a job"}),(0,O.jsxs)(N,{children:["From the JupyterHub home page, click ",(0,O.jsx)(W.E,{children:"Start My Server"})," to schedule a job."]}),(0,O.jsxs)(N,{children:["From the list of available options, select the one containing ",(0,O.jsxs)(W.E,{children:["Lyra - ",n]})," and click the start button."]})]})}function me(e){let n,{hardware:r,os:s}=e;return n="Linux"===s?"Red Hat VDI Medium with GPU":"GPU"===r?"eResearch Large with GPU":"eResearch General VDI",(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Start a session"}),(0,O.jsxs)(N,{children:["From the list of machines, select the one named ",(0,O.jsx)(W.E,{children:n})]})]})}function ge(e){let{hardware:n,os:r}=e}function fe(e){let{service:n,port:r,node:s,username:t}=e;return(0,O.jsxs)(O.Fragment,{children:["Lyra"===n&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Forward the port"}),(0,O.jsx)(N,{children:"In a new terminal window, run the following command to forward traffic from the server to your local machine:"}),""===t&&(0,O.jsx)(N,{children:(0,O.jsxs)("i",{children:["Replace ",(0,O.jsx)(W.E,{children:"qutusername"})," with your QUT username."]})}),""===s&&(0,O.jsx)(N,{children:(0,O.jsxs)("i",{children:["Replace ",(0,O.jsx)(W.E,{children:"node"})," with the name of the node the job is running on."]})}),(0,O.jsxs)(te,{children:["ssh -L ",r,":",s||"node",":",r," ",t||"qutusername","@lyra.qut.edu.au"]})]}),(0,O.jsx)(B,{children:"Access the tool"}),(0,O.jsxs)(N,{children:["In your web browser, navigate to the following address: ",(0,O.jsxs)(u.r,{href:`http://localhost:${r}`,isExternal:!0,color:"blue.500",children:["http://localhost:",r]})]}),(0,O.jsxs)(te,{children:["http://localhost:",r]})]})}var ve=r(6409);function be(e){let{service:n,environment:r}=e;return(0,O.jsxs)(O.Fragment,{children:["Lyra"===n&&(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(V.b,{status:"warning",variant:"left-accent",children:[(0,O.jsx)(Q.z,{}),"Lyra is a shared resource. Please be considerate of other users and stop the job when you are finished."]})}),(0,O.jsx)(B,{children:"Stop the server"}),(0,O.jsxs)(N,{children:["Once you have finished using the tool, stop the server by pressing ",(0,O.jsx)(ve.T,{children:"Ctrl"})," + ",(0,O.jsx)(ve.T,{children:"C"})," in the terminal."]}),(0,O.jsx)(N,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."}),"Singularity"===r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Exit the container"}),(0,O.jsxs)(N,{children:["Exit the container by pressing ",(0,O.jsx)(ve.T,{children:"Ctrl"})," + ",(0,O.jsx)(ve.T,{children:"D"}),", or typing ",(0,O.jsx)(W.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===n&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Stop the job"}),(0,O.jsxs)(N,{children:["Stop the job by pressing ",(0,O.jsx)(ve.T,{children:"Ctrl"})," + ",(0,O.jsx)(ve.T,{children:"D"}),", or typing ",(0,O.jsx)(W.E,{children:"exit"})," in the terminal."]}),(0,O.jsx)(B,{children:"Exit the ssh session"}),(0,O.jsxs)(N,{children:["Exit the ssh session on Lyra by pressing ",(0,O.jsx)(ve.T,{children:"Ctrl"})," + ",(0,O.jsx)(ve.T,{children:"D"}),", or typing ",(0,O.jsx)(W.E,{children:"exit"})," in the terminal."]}),(0,O.jsx)(B,{children:"Stop port forwarding"}),(0,O.jsxs)(N,{children:["Stop local port forwarding by pressing ",(0,O.jsx)(ve.T,{children:"Ctrl"})," + ",(0,O.jsx)(ve.T,{children:"D"}),", or typing ",(0,O.jsx)(W.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})}var ye=r(8049),we=r(9371),Ce=r(8732),Te=r(7821),Pe=r(9754);function ke(e){let{label:n,placeholder:r,value:t,onChange:i,pattern:o,helperText:l,errorText:a}=e;const[c,d]=(0,s.useState)(t),[h,u]=(0,s.useState)(!0);(0,s.useEffect)((()=>{u(o.test(t)),d(t)}),[t]);return(0,O.jsxs)(ye.NI,{isInvalid:!h,children:[(0,O.jsx)(we.l,{children:(0,O.jsx)(B,{children:n})}),(0,O.jsxs)(b.B,{children:[(0,O.jsx)(Ce.I,{type:"text",placeholder:r,value:c,onChange:e=>{d(e.target.value),i(e.target.value)},pattern:o}),h&&""!==t&&(0,O.jsx)(y.x,{children:(0,O.jsx)(Pe.n,{color:"green.500"})})]}),!h&&(0,O.jsx)(Te.J1,{children:a}),(0,O.jsx)(ye.Q6,{children:l})]})}const Me=/^[a-z0-9]*$/;function Se(e){let{task:n,model:r,config:i,port:o}=e;const[a,c]=function(e,n){const[r,t]=(0,s.useState)((()=>{const r=localStorage.getItem(e);return r?JSON.parse(r):n}));return(0,s.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,t]}("qutUsername","qutusername"),[d,h]=(0,s.useState)("");return(0,O.jsxs)(l.xu,{children:["Lyra"===i.service&&(0,O.jsx)(ke,{label:"QUT Username",placeholder:"username",value:a,onChange:c,pattern:Me,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),(0,O.jsx)(ae,{service:i.service,username:a}),"Lyra"===i.service&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(pe,{hardware:i.hardware,cpuVendor:i.cpuVendor,cpuModel:i.cpuModel,cpuCores:i.cpuCores,ram:i.ram,gpuVendor:i.gpuVendor,gpuModel:i.gpuModel,gpuModules:i.gpuModules}),(0,O.jsx)(ke,{label:"Node name",placeholder:"node",value:d,onChange:h,pattern:Me,helperText:"Optionally enter the name of the node so that it can be pre-populated in the commands below.",errorText:"Node name must only contain lowercase letters and numbers"})]}),"JupyterHub"===i.service&&(0,O.jsx)(je,{jobProfile:i.jobProfile}),"rVDI"===i.service&&(0,O.jsx)(me,{hardware:i.hardware,os:i.os}),"Local"===i.service&&(0,O.jsx)(ge,{hardware:i.hardware,os:i.os}),(0,O.jsx)(ue,{hardware:i.hardware,gpuVendor:i.gpuVendor,service:i.service,tool:i.tool,environment:i.environment}),(0,O.jsx)(xe,{service:i.service,tool:i.tool,task:n,model:r,port:o}),(0,O.jsx)(fe,{service:i.service,port:o,node:d,username:a}),(0,O.jsxs)(l.xu,{position:"relative",padding:"10",children:[(0,O.jsx)(J.i,{}),(0,O.jsx)(Z.u,{bg:"white",px:"4",children:(0,O.jsx)(t.X,{as:"h2",size:"md",my:4,children:"Teardown steps"})})]}),(0,O.jsx)(be,{service:i.service,environment:i.environment})]})}var Ie=r(5106),Le=r(9563);function Fe(e){let{choices:n,value:r,onChange:s=(()=>{})}=e;return(0,O.jsx)(L.k,{flexGrow:"1",children:n.map((e=>{const{label:n,description:t}=Array.isArray(e)?{label:e[0],description:e[1]}:{label:e,description:""},i=n===r;return(0,O.jsx)(I.u,{label:t,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,O.jsx)(c.z,{flex:"1",variant:i?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>s(n),colorScheme:i?"yellow":"gray",children:n})},n)}))})}var Ve=r(1680),Ee=r(1023);function Ue(e){let{value:n=1,label:r,onChange:s=(()=>{}),...t}=e;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(l.xu,{width:"120px",children:(0,O.jsxs)(b.B,{size:"sm",children:[(0,O.jsx)(Ce.I,{type:"number",value:n,onChange:e=>s(parseInt(e.target.value)),textAlign:"center"}),(0,O.jsx)(Ve.xW,{width:"60px",p:0,justifyContent:"center",children:(0,O.jsx)(a.x,{mb:"0",children:r})})]})}),(0,O.jsxs)(Ee.iR,{display:"block",flex:"1",ml:2,value:n,focusThumbOnChange:!1,colorScheme:"yellow",onChange:e=>s(e),...t,children:[(0,O.jsx)(Ee.Uj,{children:(0,O.jsx)(Ee.Ms,{})}),(0,O.jsx)(Ee.gs,{})]})]})}function Ae(e){let{title:n,description:r,type:s,selected:i,inputProps:o}=e;return(0,O.jsx)(l.xu,{children:(0,O.jsxs)(L.k,{align:"center",children:[(0,O.jsxs)(l.xu,{w:"120px",children:[i?(0,O.jsx)(Ie.r,{color:"green.500"}):(0,O.jsx)(I.u,{label:"Pick an option",children:(0,O.jsx)(Le.a,{color:"orange.500"})}),(0,O.jsx)(I.u,{label:r,placement:"top",hasArrow:!0,children:(0,O.jsx)(t.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:n})})]}),(0,O.jsx)(l.bK,{size:"10px"}),"picker"===s&&(0,O.jsx)(Fe,{...o}),"slider"===s&&(0,O.jsx)(Ue,{...o})]})})}const De=(e,n)=>0!==e.length&&(Array.isArray(e[0])?e.map((e=>e[0])).includes(n):e.includes(n));function Oe(e,n){void 0===n&&(n=()=>{});const r=r=>s=>n({...e,[r]:s}),s=e=>"Lyra"===e?.service,t=e=>["rVDI","Local"].includes(e?.service),i=e=>"GPU"===e?.hardware;return{service:()=>{const n=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"],["Local","Your own workstation"]];return{element:(s,t)=>(0,O.jsx)(Ae,{title:"Service",description:"The service to use for running the model.",type:"picker",selected:t,inputProps:{choices:n,value:e?.service,onChange:r("service")}},s),show:e=>!0,selected:e=>De(n,e?.service)}},os:()=>{let n;return n="rVDI"===e?.service?["Linux","Windows"]:"Local"===e?.service?["Linux","macOS","Windows"]:["Linux"],{element:(s,t)=>(0,O.jsx)(Ae,{title:"OS",description:"The operating system to use for running the model.",type:"picker",selected:t,inputProps:{choices:n,value:e?.os,onChange:r("os")}},s),show:e=>t(e),selected:e=>De(n,e?.os)}},hardware:()=>{let n;return n=s(e)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"]],{element:(s,t)=>(0,O.jsx)(Ae,{title:"Hardware",description:"The hardware to use for running the model.",type:"picker",selected:t,inputProps:{choices:n,value:e?.hardware,onChange:r("hardware")}},s),show:e=>e?.service,selected:e=>De(n,e?.hardware)}},cpuVendor:()=>{const n=["Any","AMD","Intel"];return{element:(s,t)=>(0,O.jsx)(Ae,{title:"CPU Vendor",type:"picker",selected:t,inputProps:{choices:n,value:e?.cpuVendor,onChange:r("cpuVendor")}},s),show:e=>s(e),selected:e=>De(n,e?.cpuVendor)}},cpuModel:()=>{let n=[];return"AMD"===e?.cpuVendor?n=["7702","7713","75F3"]:"Intel"===e?.cpuVendor&&(n=["6140","6248","8260","E7-8890"]),{element:(s,t)=>(0,O.jsx)(Ae,{title:"CPU Model",type:"picker",selected:t,inputProps:{choices:n,value:e?.cpuModel,onChange:r("cpuModel")}},s),show:e=>s(e)&&e?.cpuVendor&&"Any"!==e.cpuVendor,selected:e=>De(n,e?.cpuModel)}},cpuCores:()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?128:"75F3"===e?.cpuModel?64:"6140"===e?.cpuModel?36:"6248"===e?.cpuModel?40:"8260"===e?.cpuModel?48:"E7-8890"===e?.cpuModel?96:128,{element:(s,t)=>(0,O.jsx)(Ae,{title:"CPU",type:"slider",selected:t,inputProps:{value:e?.cpuCores,label:"cores",min:1,max:n,step:1,onChange:r("cpuCores")}},s),show:e=>s(e),selected:e=>!0}},ram:()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?1006:"75F3"===e?.cpuModel?503:"6140"===e?.cpuModel||"6248"===e?.cpuModel||"8260"===e?.cpuModel?186:"E7-8890"===e?.cpuModel?5794:1006,{element:(s,t)=>(0,O.jsx)(Ae,{title:"RAM",type:"slider",selected:t,inputProps:{value:e?.ram,label:"GB",min:8,max:n,step:8,onChange:r("ram")}},s),show:e=>s(e),selected:e=>!0}},jobProfile:()=>{let n=[];return"CPU"===e?.hardware?n=["1 core, 8 GB","4 cores, 32 GB","8 cores, 64 GB","16 cores, 128GB"]:"GPU"===e?.hardware&&(n=["4 cores, 32 GB, T4 GPU","8 cores, 64 GB, T4 GPU"]),{element:(s,t)=>(0,O.jsx)(Ae,{title:"Job Profile",type:"picker",selected:t,inputProps:{choices:n,value:e?.jobProfile,onChange:r("jobProfile")}},s),show:e=>"JupyterHub"===e?.service&&e?.hardware,selected:e=>De(n,e?.jobProfile)}},gpuVendor:()=>{const n=["Any","NVIDIA","AMD"];return{element:(s,t)=>(0,O.jsx)(Ae,{title:"GPU Vendor",type:"picker",selected:t,inputProps:{choices:n,value:e?.gpuVendor,onChange:r("gpuVendor")}},s),show:e=>s(e)&&i(e),selected:e=>De(n,e?.gpuVendor)}},gpuModel:()=>{let n=[];return"NVIDIA"===e?.gpuVendor?n=["T4","P100","V100","A100"]:"AMD"===e?.gpuVendor&&(n=["MI100","MI210"]),{element:(s,t)=>(0,O.jsx)(Ae,{title:"GPU Model",type:"picker",selected:t,inputProps:{choices:n,value:e?.gpuModel,onChange:r("gpuModel")}},s),show:e=>s(e)&&"GPU"===e?.hardware&&e?.gpuVendor&&"Any"!==e.gpuVendor,selected:e=>De(n,e?.gpuModel)}},gpuModules:()=>({element:(n,s)=>(0,O.jsx)(Ae,{title:"GPU",type:"slider",selected:s,inputProps:{value:e?.gpuModules,label:"modules",min:1,max:8,step:1,onChange:r("gpuModules")}},n),show:e=>s(e)&&i(e),selected:e=>!0}),environment:()=>{let n=[];return n="JupyterHub"===e?.service?[["Conda","Conda package manager"]]:t(e)&&["macOS","Windows"].includes(e?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Singularity","Singularity / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(s,t)=>(0,O.jsx)(Ae,{title:"Environment",description:"The Python package management system.",type:"picker",selected:t,inputProps:{choices:n,value:e?.environment,onChange:r("environment")}},s),show:e=>e?.service,selected:e=>De(n,e?.environment)}},tool:()=>{let n=[];return n="Lyra"===e?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(s,t)=>(0,O.jsx)(Ae,{title:"Tool",description:"The interface to use for running the model.",type:"picker",selected:t,inputProps:{choices:n,value:e?.tool,onChange:r("tool")}},s),show:e=>e?.service,selected:e=>De(n,e?.tool)}}}}function Ge(e){let{config:n,onConfigChange:r}=e;return(0,O.jsx)(l.xu,{children:Object.entries(Oe(n,r)).map((e=>{let[n,r]=e;return[n,r()]})).filter((e=>{let[r,s]=e;return s.show(n)})).map((e=>{let[r,s]=e;return s.element(r,s.selected(n))}))})}var _e=r(3804);function ze(e){let{presets:n,onPresetChange:r}=e;return(0,O.jsx)(l.xu,{children:(0,O.jsx)(_e.QI,{p:"0",children:n.map(((e,n)=>(0,O.jsx)(_e.HC,{onClick:()=>r(e),children:(0,O.jsxs)(u.r,{children:[e.name," ",(0,O.jsx)(f.m,{mx:"2px"})]})},n)))})})}var Re=r(8719),He=r(2923);function $e(e){let{choices:n,page:r,showPage:s=!1,onPageChange:t=((e,n)=>{}),clickable:i=!1}=e;if(s)return(0,O.jsxs)(l.xu,{children:[r,(0,O.jsx)(c.z,{leftIcon:(0,O.jsx)(He.R,{}),position:"absolute",right:"4",top:"4",size:"sm",onClick:()=>t(!1,void 0),children:"Back"})]});const o=1===n.length?1:3===n.length?3:2;return(0,O.jsx)(Re.M,{columns:o,spacing:2,children:n.map(((e,n)=>(0,O.jsx)(l.xu,{onClick:i?()=>t(!0,n):null,cursor:i?"pointer":"auto",children:(0,O.jsx)(d.Z,{height:"100%",children:(0,O.jsx)(p.e,{children:e})})},n)))})}function qe(e){let{children:n,...r}=e;return(0,O.jsx)(t.X,{as:"h2",size:"md",marginBottom:0,...r,children:n})}function Je(e){let{children:n}=e;return(0,O.jsxs)(i.K,{py:3,children:[(0,O.jsx)(qe,{display:"inline-block",flex:"1",textAlign:"left",children:n}),(0,O.jsx)(o.X,{})]})}function Ze(e){let{presets:n,onPresetChange:r}=e;return(0,O.jsxs)(l.xu,{children:[(0,O.jsx)(qe,{children:"Preset configurations"}),(0,O.jsx)(ze,{presets:n,onPresetChange:r})]})}function Be(e){let{onSelected:n}=e;return(0,O.jsxs)(l.xu,{children:[(0,O.jsx)(qe,{children:"Custom configuration"}),(0,O.jsx)(a.x,{my:2,children:"Choose the model, service, and settings."}),(0,O.jsx)(c.z,{size:"md",onClick:n,rightIcon:(0,O.jsx)(f.m,{}),children:"Start"})]})}const Ne=e=>Object.values(Oe(e)).map((e=>e())).filter((n=>n.show(e))).every((n=>n.selected(e))),Qe={cpuCores:4,ram:16,gpuModules:1};function We(e){let{title:n,task:r,presets:i=[]}=e;const[o,l]=(0,s.useState)(""),[c]=(0,s.useState)(Math.floor(7e3*Math.random())+3e3),[f,b]=(0,s.useState)(Qe),[y,w]=(0,s.useState)(!1),[C,T]=(0,s.useState)([0,1,2]),P=""!==o,k=Ne(f);return(0,O.jsxs)(d.Z,{children:[(0,O.jsx)(h.O,{children:(0,O.jsxs)(u.r,{href:`https://huggingface.co/tasks/${r}`,isExternal:!0,children:[(0,O.jsx)(x.E,{float:"left",verticalAlign:"middle",src:v,alt:"HuggingFace logo",display:"inline",height:"30px"}),(0,O.jsx)(t.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:n})]})}),(0,O.jsxs)(p.e,{children:[(0,O.jsx)(a.x,{mb:6,children:"Step-by-step instructions to interact through your web browser with a HuggingFace model, running on Lyra, JupyterHub, rVDI, or your own machine."}),(0,O.jsx)($e,{choices:[(0,O.jsx)(Ze,{presets:i,onPresetChange:e=>{l(e.model),b(e.config),w(!0),T([2])}}),(0,O.jsx)(Be,{onSelected:()=>{l(""),b(Qe),w(!0),T([0,1,2])}})],page:(0,O.jsxs)(j.U,{allowMultiple:!0,defaultIndex:C,allowToggle:!0,children:[(0,O.jsxs)(m.Q,{children:[(0,O.jsx)(Je,{children:"Model"}),(0,O.jsx)(g.H,{children:(0,O.jsx)(q,{model:o,onModelChange:l,task:r})})]}),P&&(0,O.jsxs)(m.Q,{children:[(0,O.jsx)(Je,{children:"Config"}),(0,O.jsx)(g.H,{children:(0,O.jsx)(Ge,{config:f,onConfigChange:b})})]}),P&&k&&(0,O.jsxs)(m.Q,{children:[(0,O.jsx)(Je,{children:"Instructions"}),(0,O.jsx)(g.H,{children:(0,O.jsx)(Se,{task:r,model:o,config:f,port:c})})]})]}),showPage:y,onPageChange:e=>w(e)})]})]})}},1769:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var s=r(1220),t=r(980);const i={...s.Z,HuggingFacePipeline:t.Z}}}]);