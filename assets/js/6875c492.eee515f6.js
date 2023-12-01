"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[8610,7918],{9703:(e,n,r)=>{r.d(n,{Z:()=>o});r(7294);var t=r(5999),s=r(2244),i=r(5893);function o(e){const{metadata:n}=e,{previousPage:r,nextPage:o}=n;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,t.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[r&&(0,i.jsx)(s.Z,{permalink:r,title:(0,i.jsx)(t.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,i.jsx)(s.Z,{permalink:o,title:(0,i.jsx)(t.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,n,r)=>{r.d(n,{Z:()=>o});r(7294);var t=r(9460),s=r(390),i=r(5893);function o(e){let{items:n,component:r=s.Z}=e;return(0,i.jsx)(i.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,i.jsx)(t.n,{content:n,children:(0,i.jsx)(r,{children:(0,i.jsx)(n,{})})},n.metadata.permalink)}))})}},1714:(e,n,r)=>{r.r(n),r.d(n,{default:()=>b});r(7294);var t=r(6010),s=r(5999),i=r(8824),o=r(1944),l=r(5281),a=r(9960),c=r(1460),d=r(9703),h=r(197),u=r(9985),x=r(2212),p=r(2503),j=r(5893);function m(e){const n=function(){const{selectMessage:e}=(0,i.c)();return n=>e(n,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:n}))}();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function g(e){let{tag:n}=e;const r=m(n);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.d,{title:r}),(0,j.jsx)(h.Z,{tag:"blog_tags_posts"})]})}function f(e){let{tag:n,items:r,sidebar:t,listMetadata:i}=e;const o=m(n);return(0,j.jsxs)(c.Z,{sidebar:t,children:[n.unlisted&&(0,j.jsx)(x.Z,{}),(0,j.jsxs)("header",{className:"margin-bottom--xl",children:[(0,j.jsx)(p.Z,{as:"h1",children:o}),(0,j.jsx)(a.Z,{href:n.allTagsPath,children:(0,j.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,j.jsx)(u.Z,{items:r}),(0,j.jsx)(d.Z,{metadata:i})]})}function b(e){return(0,j.jsxs)(o.FG,{className:(0,t.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,j.jsx)(g,{...e}),(0,j.jsx)(f,{...e})]})}},2212:(e,n,r)=>{r.d(n,{Z:()=>x});r(7294);var t=r(6010),s=r(5999),i=r(5742),o=r(5893);function l(){return(0,o.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,o.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=r(5281),h=r(9047);function u(e){let{className:n}=e;return(0,o.jsx)(h.Z,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,t.Z)(n,d.k.common.unlistedBanner),children:(0,o.jsx)(a,{})})}function x(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(u,{...e})]})}},9234:(e,n,r)=>{r.d(n,{Z:()=>Be});var t=r(7294),s=r(2757),i=r(4071),o=r(7334),l=r(7747),a=r(1293),c=r(4225),d=r(3990),h=r(3614),u=r(2883),x=r(6089),p=r(607),j=r(2215),m=r(8087),g=r(2185),f=r(273);const b=r.p+"assets/images/hf-logo-6fd51d26c652a2d5a3c17c9e76a4ea46.png";var v=r(2140),y=r(2735),w=r(5040),T=r(1557),C=r(991),P=r(5115),k=r(510),M=r(4693),S=r(4698),I=r(9981),L=r(3717),F=r(8371),E=r(4153),A=r(1679),U=r(5349);function V(e){let{url:n,params:r={},condition:s=!0,cache:i="force-cache",debounceTime:o=0}=e;const[l,a]=(0,t.useState)(null),[c,d]=(0,t.useState)(null),[h,u]=(0,t.useState)(s),x=new URL(n);x.search=new URLSearchParams(r).toString();const p=x.toString();return(0,t.useEffect)((()=>{const e=new AbortController,{signal:n}=e;if(!s)return e.abort(),void u(!1);u(!0);const r=setTimeout((()=>fetch(p,{signal:n,cache:i}).then((e=>e.json())).then((e=>{n.aborted||(a(e),d(null),u(!1))})).catch((e=>{n.aborted||(d(e),u(!1))}))),o);return()=>{clearTimeout(r),e.abort()}}),[p,s]),{data:l,error:c,loading:h}}var D=r(6370),O=r(5893);function G(e){let{model:n,onModelChange:r,models:t}=e;return(0,O.jsxs)(D.Qc,{openOnFocus:!0,creatable:!0,onChange:r,suggestWhenEmpty:!0,children:[(0,O.jsxs)(v.B,{children:[(0,O.jsx)(D.Vp,{placeholder:"Search for a model",variant:"filled",value:n,onChange:e=>r(e.target.value)}),n&&(0,O.jsx)(y.x,{children:(0,O.jsx)(c.z,{size:"xs",onClick:()=>r(""),children:(0,O.jsx)(A.T,{})})})]}),(0,O.jsxs)(D.Jm,{children:[t.map((e=>(0,O.jsx)(D.Gb,{value:e.id,children:e.id},e.id))),(0,O.jsx)(D.JU,{children:e=>{let{value:n}=e;return(0,O.jsxs)("span",{children:["Use custom '",n,"' model"]})}})]})]})}const z=e=>Intl.NumberFormat(navigator.language,{notation:"compact",maximumFractionDigits:1}).format(e),R={F32:["Single Precision Floating Point",32],F16:["Half Precision Floating Point",16],BF16:["Brain Floating Point",16],I8:["Integer",8],I4:["Integer",4]},Z=e=>Object.entries(e).map((e=>{let[n,r]=e;const[t,s]=R[n];return`${z(r)} ${t} (${s} bits)`})).join(", "),_=e=>`${z(Object.entries(e).reduce(((e,n)=>{let[r,t]=n;const[,s]=R[r];return e+t*s}),0)/8589934592)} GB`;function H(e){let{model:n,knownModelData:r,modelData:t,modelLoading:s}=e;return s?(0,O.jsx)(w.E,{colorScheme:"yellow",isIndeterminate:!0}):n&&(r?.id||t?.id)?(0,O.jsx)(T.x,{children:(0,O.jsx)(C.i,{variant:"simple",size:"sm",children:(0,O.jsxs)(P.p,{children:[(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Link"}),(0,O.jsx)(S.Td,{children:(0,O.jsxs)(u.r,{href:`https://hf.co/${n}`,isExternal:!0,children:[`hf.co/${n}`,(0,O.jsx)(U.h,{marginLeft:1})]})})]}),t?.lastModified&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Last Modified"}),(0,O.jsx)(S.Td,{children:new Date(t.lastModified).toLocaleString()})]}),(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Likes"}),(0,O.jsx)(S.Td,{children:z(t?.likes??r?.likes)})]}),(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Downloads"}),(0,O.jsx)(S.Td,{children:z(t?.downloads??r?.downloads)})]}),t?.cardData?.license&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"License"}),(0,O.jsx)(S.Td,{children:t.cardData.license})]}),t?.safetensors?.parameters&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Parameters"}),(0,O.jsx)(S.Td,{children:Z(t.safetensors.parameters)})]}),(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:(0,O.jsx)(I.u,{label:"Minimum size of the model in memory according to an approximate calculation. Does not include memory required for inference.",children:(0,O.jsx)("span",{children:"Minimum Size"})})}),(0,O.jsx)(S.Td,{children:_(t.safetensors.parameters)})]})]}),(t?.tags??r?.tags)&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Tags"}),(0,O.jsx)(S.Td,{children:(0,O.jsx)(L.k,{gap:2,flexWrap:"wrap",children:(t?.tags??r?.tags).map((e=>(0,O.jsx)(F.Vp,{size:"md",children:(0,O.jsx)(u.r,{href:`https://huggingface.co/models?other=${e}`,isExternal:!0,children:e})},e)))})})]}),t?.config?.architectures&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Architectures"}),(0,O.jsx)(S.Td,{children:(0,O.jsx)(L.k,{gap:2,flexWrap:"wrap",children:t.config.architectures.map((e=>(0,O.jsx)(F.Vp,{size:"md",children:e},e)))})})]}),t?.library_name&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"Library"}),(0,O.jsx)(S.Td,{children:t.library_name})]}),t?.cardData?.co2_eq_emissions&&(0,O.jsxs)(k.Tr,{children:[(0,O.jsx)(M.Th,{children:"CO2 Emissions"}),(0,O.jsxs)(S.Td,{children:[z(t.cardData.co2_eq_emissions.emissions/1e3)," kg"]})]})]})})}):(0,O.jsx)(O.Fragment,{})}function $(e){let{model:n,onModelChange:r,task:t}=e;const{data:s,error:i,loading:o}=V({url:"https://huggingface.co/api/models",params:{pipeline_tag:t,sort:"likes",limit:1e3,direction:-1}}),{data:a,loading:c}=V({url:`https://huggingface.co/api/models/${n}`,condition:""!==n,debounceTime:500}),d=s??[],h=d.find((e=>e.id===e));return i?(0,O.jsxs)(E.b,{status:"error",children:["Error retrieving models: ",i.message]}):o?(0,O.jsx)(w.E,{colorScheme:"yellow",isIndeterminate:!0}):(0,O.jsxs)(l.xu,{children:[(0,O.jsx)(G,{model:n,onModelChange:r,models:d}),(0,O.jsx)(H,{model:n,knownModelData:h,modelData:a,modelLoading:c})]})}var N=r(9289),q=r(7239);function B(e){let{children:n}=e;return(0,O.jsx)(s.X,{as:"h3",size:"sm",my:4,children:n})}function J(e){let{children:n}=e;return(0,O.jsx)(a.x,{my:4,children:n})}var Q=r(7405),W=r(6101),K=r(959),X=r(4461),Y=r(4124),ee=r(4028),ne=r(889);function re(e){let{children:n}=e;const[r,s]=(0,t.useState)(-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0);return(0,O.jsxs)(K.m,{index:r,onChange:s,children:[(0,O.jsxs)(X.t,{children:[(0,O.jsx)(Y.O,{children:"Windows"}),(0,O.jsx)(Y.O,{children:"macOS"}),(0,O.jsx)(Y.O,{children:"Linux"})]}),(0,O.jsxs)(ee.n,{children:[(0,O.jsx)(ne.x,{p:0,children:n[0]}),(0,O.jsx)(ne.x,{p:0,children:n[1]}),(0,O.jsx)(ne.x,{p:0,children:n[2]})]})]})}var te=r(5392);function se(e){let{children:n}=e;const[r,s]=(0,t.useState)(!1),[i,o]=(0,t.useState)(!1);return(0,O.jsxs)(l.xu,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:"gray.200",bg:"gray.50",fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>s(!0),onMouseOut:()=>s(!1),position:"relative",children:[n,r&&(0,O.jsx)(I.u,{label:i?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,O.jsx)(c.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(n),o(!0),setTimeout((()=>o(!1)),1e3)},colorScheme:i?"green":"gray",children:(0,O.jsx)(te.T,{})})})]})}function ie(e){let{username:n}=e;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Connect to Lyra"}),(0,O.jsxs)(E.b,{status:"info",children:[(0,O.jsx)(Q.z,{}),"If you are off-campus, you will first need to connect to the QUT network using the VPN."]}),(0,O.jsxs)(J,{children:["See the instructions ",(0,O.jsx)(u.r,{href:"/ai-toolbox/docs/hpc/lyra/connecting",isExternal:!0,color:"blue.500",children:"here"})," for more information about how to use Lyra."]}),(0,O.jsxs)(re,{children:[(0,O.jsxs)(l.xu,{children:[(0,O.jsxs)(E.b,{status:"info",children:[(0,O.jsx)(Q.z,{}),(0,O.jsxs)(a.x,{mb:"0",children:["You may need to enable the ",(0,O.jsx)(u.r,{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",isExternal:!0,color:"blue.500",children:"ssh feature"})," in Windows."]})]}),(0,O.jsx)(J,{children:"In Windows Terminal, Powershell, or cmd.exe, run the following command to connect to Lyra:"})]}),(0,O.jsx)(l.xu,{children:(0,O.jsx)(J,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,O.jsx)(l.xu,{children:(0,O.jsx)(J,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===n&&(0,O.jsx)(J,{children:(0,O.jsxs)("i",{children:["Replace ",(0,O.jsx)(W.E,{children:"qutusername"})," with your QUT username."]})}),(0,O.jsxs)(se,{children:["ssh ",n||"qutusername","@lyra.qut.edu.au"]})]})}function oe(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Connect to JupyterHub"}),(0,O.jsxs)(J,{children:["See the instructions ",(0,O.jsx)(u.r,{href:"/ai-toolbox/docs/hpc/jupyterhub/connecting",isExternal:!0,color:"blue.500",children:"here"})," for more information about how to use JupyterHub on Lyra."]}),(0,O.jsxs)(J,{children:["Visit ",(0,O.jsx)(u.r,{href:"https://jupyterhub.eres.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://jupyterhub.eres.qut.edu.au"})," and log in with your QUT username and password."]})]})}function le(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Connect to rVDI"}),(0,O.jsxs)(J,{children:["See the instructions ",(0,O.jsx)(u.r,{href:"/ai-toolbox/docs/rvdi",isExternal:!0,color:"blue.500",children:"here"})," for more information."]}),(0,O.jsxs)(J,{children:["If you have not already, download and install the VMware Horizon client from ",(0,O.jsx)(u.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://rvdi.qut.edu.au"}),"."]}),(0,O.jsxs)(J,{children:["In the VMware Horizon client, connect to ",(0,O.jsx)(u.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"rvdi.qut.edu.au"})," and log in with your QUT username and password."]})]})}function ae(e){let{service:n,username:r}=e;return(0,O.jsxs)(O.Fragment,{children:["Lyra"===n&&(0,O.jsx)(ie,{username:r}),"JupyterHub"===n&&(0,O.jsx)(oe,{}),"rVDI"===n&&(0,O.jsx)(le,{}),"Local"===n&&(0,O.jsx)(O.Fragment,{})," "]})}function ce(e){let{service:n,environment:r,tool:t}=e;const s=["rVDI","Local"].includes(n),i=s&&"Notebook"===t;return(0,O.jsxs)(O.Fragment,{children:["Apptainer"===r&&(0,O.jsxs)(O.Fragment,{children:[s&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Install Apptainer (if it has not been installed)"}),(0,O.jsxs)(J,{children:["Follow the instructions ",(0,O.jsx)(u.r,{href:"https://apptainer.org/docs/admin/main/installation.html",isExternal:!0,color:"blue.500",children:"here"})," to install apptainer."]}),(0,O.jsx)(B,{children:"Set up the container"}),(0,O.jsxs)(J,{children:["Save the following to a file named ",(0,O.jsx)(W.E,{children:"hf.def"}),":"]}),(0,O.jsx)(se,{children:"Bootstrap: docker\nFrom: python:3.10\n\n%post\n    pip install gradio jupyterlab 'transformers[torch]'\n"}),(0,O.jsx)(J,{children:"Build the container:"}),(0,O.jsx)(se,{children:"apptainer build hf.sif hf.def"}),(0,O.jsx)(J,{children:"Run the container:"}),(0,O.jsx)(se,{children:"apptainer run hf.sif bash"})]}),"Lyra"===n&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Set up the container"}),(0,O.jsx)(J,{children:"Run the container:"}),(0,O.jsx)(se,{children:"apptainer run /work/ai-toolbox/containers/hf.sif bash"})]})]}),"Conda"===r&&(0,O.jsxs)(O.Fragment,{children:["JupyterHub"!==n&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Install Conda (if it has not been installed)"}),(0,O.jsxs)(K.m,{children:[(0,O.jsxs)(X.t,{children:[(0,O.jsx)(Y.O,{children:"mamba"}),(0,O.jsx)(Y.O,{children:"conda"})]}),(0,O.jsxs)(ee.n,{children:[(0,O.jsxs)(ne.x,{children:[(0,O.jsx)(J,{children:"Download the latest version of micromamba"}),(0,O.jsx)(se,{children:"wget https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh"}),(0,O.jsx)(J,{children:"Run the installer and follow the prompts to install micromamba:"}),(0,O.jsx)(se,{children:"bash install.sh -p ~/micromamba"}),(0,O.jsx)(J,{children:"Create an alias for micromamba"}),(0,O.jsx)(se,{children:'echo "alias conda=micromamba" >> ~/.bashrc'}),(0,O.jsx)(J,{children:"Refresh the shell:"}),(0,O.jsx)(se,{children:"source ~/.bashrc"})]}),(0,O.jsxs)(ne.x,{children:[(0,O.jsxs)(E.b,{status:"warning",children:[(0,O.jsx)(Q.z,{}),"Packages take a long time to install with conda. We recommend using mamba instead."]}),(0,O.jsx)(J,{children:"Download the latest version of miniconda:"}),(0,O.jsx)(se,{children:"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"}),(0,O.jsx)(J,{children:"Run the installer and follow the prompts to install conda:"}),(0,O.jsx)(se,{children:"bash Miniconda3-latest-Linux-x86_64.sh"}),(0,O.jsx)(J,{children:"Refresh the shell:"}),(0,O.jsx)(se,{children:"source ~/.bashrc"})]})]})]})]}),(0,O.jsx)(B,{children:"Set up the conda environment"}),(0,O.jsx)(J,{children:"Create the conda environment (if it doesn't exist):"}),(0,O.jsx)(se,{children:"conda create --name hf"}),(0,O.jsx)(J,{children:"Activate the conda environment:"}),(0,O.jsx)(se,{children:"conda activate hf"}),(0,O.jsx)(J,{children:"Install the transformers package:"}),(0,O.jsx)(se,{children:"conda install -c huggingface -c conda-forge transformers"}),(0,O.jsx)(J,{children:"Install pytorch:"}),(0,O.jsx)(se,{children:"conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision torchaudio pytorch-cuda=12.1"}),(0,O.jsx)(J,{children:"Install the gradio package:"}),(0,O.jsx)(se,{children:"conda install -c conda-forge gradio"}),i&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(J,{children:"Install JupyterLab:"}),(0,O.jsx)(se,{children:"conda install -c conda-forge jupyterlab"})]})]}),"venv"===r&&(0,O.jsxs)(O.Fragment,{children:[s&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Install Python (if it has not been installed)"}),(0,O.jsxs)(J,{children:["Follow the instructions ",(0,O.jsx)(u.r,{href:"https://www.python.org/downloads/",isExternal:!0,color:"blue.500",children:"here"})," to install python."]})]}),"Lyra"===n&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Python module"}),(0,O.jsx)(J,{children:"Source the module script:"}),(0,O.jsx)(se,{children:"source /etc/profile.d/modules.sh"}),(0,O.jsx)(J,{children:"Load the python module:"}),(0,O.jsx)(se,{children:"module load python/3.10.8-gcccore-12.2.0-bare"}),(0,O.jsx)(J,{children:"Check the python version"}),(0,O.jsx)(se,{children:"python --version"})]}),(0,O.jsx)(B,{children:"Set up the virtual environment"}),(0,O.jsx)(J,{children:"Create the virtual environment (if it doesn't exist):"}),(0,O.jsx)(se,{children:"python -m venv hf-venv"}),(0,O.jsx)(J,{children:"Activate the virtual environment:"}),(0,O.jsx)(se,{children:"source hf-venv/bin/activate"}),(0,O.jsx)(J,{children:"Install the base dependencies:"}),(0,O.jsx)(se,{children:"pip install gradio 'transformers[torch]'"}),i&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(J,{children:"Install JupyterLab:"}),(0,O.jsx)(se,{children:"pip install jupyterlab"})]})]})]})}function de(e){let{service:n,tool:r,task:t,model:s,port:i}=e;const o=["rVDI","Local"].includes(n);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Run the gradio server"}),"CLI"===r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(J,{children:"Start the gradio server:"}),(0,O.jsxs)(se,{children:["gradio pipeline ",t," --model=",s,' --server-name="0.0.0.0" --server-port=',i,' --device-map="auto"']})]}),"Script"===r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(J,{children:["Save the following to a file named ",(0,O.jsx)(W.E,{children:"hf_pipeline.py"})]}),(0,O.jsx)(se,{children:`import gradio\nimport transformers\nimport sys\n\nTASK = "${t}"\nMODEL = "${s}"\nPORT = int(sys.argv[1])\n\nprint(f"Starting: {TASK=} {MODEL=} {PORT=}", file=sys.stderr)\nprint("Please wait while the model loads into memory...", file=sys.stderr)\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`}),(0,O.jsx)(J,{children:"Run the script:"}),(0,O.jsxs)(se,{children:["python hf_pipeline.py ",i]})]}),"Notebook"===r&&(0,O.jsxs)(O.Fragment,{children:[o&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(J,{children:"Run the following command to start the server:"}),(0,O.jsx)(se,{children:"python -m jupyterlab"}),(0,O.jsx)(J,{children:"Open the link to the jupyter server in your browser, and create a new notebook."})]}),(0,O.jsx)(J,{children:"Execute the following code in the notebook:"}),(0,O.jsx)(se,{children:`import gradio\nimport transformers\n\nTASK = "${t}"\nMODEL = "${s}"\nPORT = ${i}\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`})]})]})}function he(e){let{hardware:n,cpuVendor:r,cpuModel:t,cpuCores:s,ram:i,gpuVendor:o,gpuModel:l,gpuModules:a}=e;const c=["select=1",`ncpus=${s}`,`mem=${i}gb`];return"Any"!==r&&t&&c.push(`cputype=${t}`),"GPU"===n&&(c.push(`ngpus=${a}`),"Any"!==o&&l&&c.push(`gputype=${l}`)),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Schedule an interactive job"}),(0,O.jsx)(J,{children:"In the ssh session, run the following command to schedule an interactive job:"}),(0,O.jsx)(se,{children:`qsub -I -l walltime=1:00:00 -l ${c.join(":")}`}),(0,O.jsxs)(J,{children:["Wait for the job to start, and take note of the node you are on (eg. ",(0,O.jsx)(W.E,{children:"cl5n042"}),")."]})]})}function ue(e){let{jobProfile:n}=e;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Schedule a job"}),(0,O.jsxs)(J,{children:["From the JupyterHub home page, click ",(0,O.jsx)(W.E,{children:"Start My Server"})," to schedule a job."]}),(0,O.jsxs)(J,{children:["From the list of available options, select the one containing ",(0,O.jsxs)(W.E,{children:["Lyra - ",n]})," and click the start button."]})]})}function xe(e){let n,{hardware:r,os:t}=e;return n="Linux"===t?"Red Hat VDI Medium with GPU":"GPU"===r?"eResearch Large with GPU":"eResearch General VDI",(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Start a session"}),(0,O.jsxs)(J,{children:["From the list of machines, select the one named ",(0,O.jsx)(W.E,{children:n})]})]})}function pe(e){let{hardware:n,os:r}=e}function je(e){let{service:n,port:r,node:t,username:s}=e;return(0,O.jsxs)(O.Fragment,{children:["Lyra"===n&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Forward the port"}),(0,O.jsx)(J,{children:"In a new terminal window, run the following command to forward traffic from the server to your local machine:"}),""===s&&(0,O.jsx)(J,{children:(0,O.jsxs)("i",{children:["Replace ",(0,O.jsx)(W.E,{children:"qutusername"})," with your QUT username."]})}),""===t&&(0,O.jsx)(J,{children:(0,O.jsxs)("i",{children:["Replace ",(0,O.jsx)(W.E,{children:"node"})," with the name of the node the job is running on."]})}),(0,O.jsxs)(se,{children:["ssh -L ",r,":",t||"node",":",r," ",s||"qutusername","@lyra.qut.edu.au"]})]}),(0,O.jsx)(B,{children:"Access the tool"}),(0,O.jsxs)(J,{children:["In your web browser, navigate to the following address: ",(0,O.jsxs)(u.r,{href:`http://localhost:${r}`,isExternal:!0,color:"blue.500",children:["http://localhost:",r]})]}),(0,O.jsxs)(se,{children:["http://localhost:",r]})]})}var me=r(6409);function ge(e){let{service:n,environment:r}=e;return(0,O.jsxs)(O.Fragment,{children:["Lyra"===n&&(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(E.b,{status:"warning",variant:"left-accent",children:[(0,O.jsx)(Q.z,{}),"Lyra is a shared resource. Please be considerate of other users and stop the job when you are finished."]})}),(0,O.jsx)(B,{children:"Stop the server"}),(0,O.jsxs)(J,{children:["Once you have finished using the tool, stop the server by pressing ",(0,O.jsx)(me.T,{children:"Ctrl"})," + ",(0,O.jsx)(me.T,{children:"C"})," in the terminal."]}),(0,O.jsx)(J,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."}),"Apptainer"===r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Exit the container"}),(0,O.jsxs)(J,{children:["Exit the container by pressing ",(0,O.jsx)(me.T,{children:"Ctrl"})," + ",(0,O.jsx)(me.T,{children:"D"}),", or typing ",(0,O.jsx)(W.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===n&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{children:"Stop the job"}),(0,O.jsxs)(J,{children:["Stop the job by pressing ",(0,O.jsx)(me.T,{children:"Ctrl"})," + ",(0,O.jsx)(me.T,{children:"D"}),", or typing ",(0,O.jsx)(W.E,{children:"exit"})," in the terminal."]}),(0,O.jsx)(B,{children:"Exit the ssh session"}),(0,O.jsxs)(J,{children:["Exit the ssh session on Lyra by pressing ",(0,O.jsx)(me.T,{children:"Ctrl"})," + ",(0,O.jsx)(me.T,{children:"D"}),", or typing ",(0,O.jsx)(W.E,{children:"exit"})," in the terminal."]}),(0,O.jsx)(B,{children:"Stop port forwarding"}),(0,O.jsxs)(J,{children:["Stop local port forwarding by pressing ",(0,O.jsx)(me.T,{children:"Ctrl"})," + ",(0,O.jsx)(me.T,{children:"D"}),", or typing ",(0,O.jsx)(W.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})}var fe=r(8049),be=r(9371),ve=r(8732),ye=r(7821),we=r(9754);function Te(e){let{label:n,placeholder:r,value:s,onChange:i,pattern:o,helperText:l,errorText:a}=e;const[c,d]=(0,t.useState)(s),[h,u]=(0,t.useState)(!0);(0,t.useEffect)((()=>{u(o.test(s)),d(s)}),[s]);return(0,O.jsxs)(fe.NI,{isInvalid:!h,children:[(0,O.jsx)(be.l,{children:(0,O.jsx)(B,{children:n})}),(0,O.jsxs)(v.B,{children:[(0,O.jsx)(ve.I,{type:"text",placeholder:r,value:c,onChange:e=>{d(e.target.value),i(e.target.value)},pattern:o}),h&&""!==s&&(0,O.jsx)(y.x,{children:(0,O.jsx)(we.n,{color:"green.500"})})]}),!h&&(0,O.jsx)(ye.J1,{children:a}),(0,O.jsx)(fe.Q6,{children:l})]})}const Ce=/^[a-z0-9]*$/;function Pe(e){let{task:n,model:r,config:i,port:o}=e;const[a,c]=function(e,n){const[r,s]=(0,t.useState)((()=>{const r=localStorage.getItem(e);return r?JSON.parse(r):n}));return(0,t.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,s]}("qutUsername","qutusername"),[d,h]=(0,t.useState)("");return(0,O.jsxs)(l.xu,{children:["Lyra"===i.service&&(0,O.jsx)(Te,{label:"QUT Username",placeholder:"username",value:a,onChange:c,pattern:Ce,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),(0,O.jsx)(ae,{service:i.service,username:a}),"Lyra"===i.service&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(he,{hardware:i.hardware,cpuVendor:i.cpuVendor,cpuModel:i.cpuModel,cpuCores:i.cpuCores,ram:i.ram,gpuVendor:i.gpuVendor,gpuModel:i.gpuModel,gpuModules:i.gpuModules}),(0,O.jsx)(Te,{label:"Node name",placeholder:"node",value:d,onChange:h,pattern:Ce,helperText:"Optionally enter the name of the node so that it can be pre-populated in the commands below.",errorText:"Node name must only contain lowercase letters and numbers"})]}),"JupyterHub"===i.service&&(0,O.jsx)(ue,{jobProfile:i.jobProfile}),"rVDI"===i.service&&(0,O.jsx)(xe,{hardware:i.hardware,os:i.os}),"Local"===i.service&&(0,O.jsx)(pe,{hardware:i.hardware,os:i.os}),(0,O.jsx)(ce,{service:i.service,tool:i.tool,environment:i.environment}),(0,O.jsx)(de,{service:i.service,tool:i.tool,task:n,model:r,port:o}),(0,O.jsx)(je,{service:i.service,port:o,node:d,username:a}),(0,O.jsxs)(l.xu,{position:"relative",padding:"10",children:[(0,O.jsx)(N.i,{}),(0,O.jsx)(q.u,{bg:"white",px:"4",children:(0,O.jsx)(s.X,{as:"h2",size:"md",my:4,children:"Teardown steps"})})]}),(0,O.jsx)(ge,{service:i.service,environment:i.environment})]})}var ke=r(5106),Me=r(9563);function Se(e){let{choices:n,value:r,onChange:s}=e;const[i,o]=(0,t.useState)(r);(0,t.useEffect)((()=>{o(r)}),[r]);return(0,O.jsx)(L.k,{flexGrow:"1",children:n.map((e=>{const{label:n,description:r}=Array.isArray(e)?{label:e[0],description:e[1]}:{label:e,description:""},t=n===i;return(0,O.jsx)(I.u,{label:r,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,O.jsx)(c.z,{flex:"1",variant:t?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>(e=>{o(e),s&&s(e)})(n),colorScheme:t?"yellow":"gray",children:n})},n)}))})}var Ie=r(1680),Le=r(1023);function Fe(e){let{value:n=1,label:r,onChange:s=(()=>{}),...i}=e;const[o,c]=(0,t.useState)(n);(0,t.useEffect)((()=>{c(n)}),[n]);const d=e=>{c(e),s(e)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(l.xu,{width:"120px",children:(0,O.jsxs)(v.B,{size:"sm",children:[(0,O.jsx)(ve.I,{type:"number",value:o,onChange:e=>d(parseInt(e.target.value)),textAlign:"center"}),(0,O.jsx)(Ie.xW,{width:"60px",p:0,justifyContent:"center",children:(0,O.jsx)(a.x,{mb:"0",children:r})})]})}),(0,O.jsxs)(Le.iR,{display:"block",flex:"1",defaultValue:n,ml:2,value:o,focusThumbOnChange:!1,colorScheme:"yellow",onChange:e=>d(e),...i,children:[(0,O.jsx)(Le.Uj,{children:(0,O.jsx)(Le.Ms,{})}),(0,O.jsx)(Le.gs,{})]})]})}function Ee(e){let{title:n,description:r,type:t,selected:i,inputProps:o}=e;return(0,O.jsx)(l.xu,{children:(0,O.jsxs)(L.k,{align:"center",children:[(0,O.jsxs)(l.xu,{w:"120px",children:[i?(0,O.jsx)(ke.r,{color:"green.500"}):(0,O.jsx)(I.u,{label:"Pick an option",children:(0,O.jsx)(Me.a,{color:"orange.500"})}),(0,O.jsx)(I.u,{label:r,placement:"top",hasArrow:!0,children:(0,O.jsx)(s.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:n})})]}),(0,O.jsx)(l.bK,{size:"10px"}),"picker"===t&&(0,O.jsx)(Se,{...o}),"slider"===t&&(0,O.jsx)(Fe,{...o})]})})}const Ae=(e,n)=>0!==e.length&&(Array.isArray(e[0])?e.map((e=>e[0])).includes(n):e.includes(n));function Ue(e,n){void 0===n&&(n=()=>{});const r=r=>t=>n({...e,[r]:t}),t=e=>"Lyra"===e?.service,s=e=>["rVDI","Local"].includes(e?.service),i=e=>"GPU"===e?.hardware;return{service:()=>{const n=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"],["Local","Your own workstation"]];return{element:(t,s)=>(0,O.jsx)(Ee,{title:"Service",description:"The service to use for running the model.",type:"picker",selected:s,inputProps:{choices:n,value:e?.service,onChange:r("service")}},t),show:e=>!0,selected:e=>Ae(n,e?.service)}},os:()=>{let n;return n="rVDI"===e?.service?["Linux","Windows"]:"Local"===e?.service?["Linux","macOS","Windows"]:["Linux"],{element:(t,s)=>(0,O.jsx)(Ee,{title:"OS",description:"The operating system to use for running the model.",type:"picker",selected:s,inputProps:{choices:n,value:e?.os,onChange:r("os")}},t),show:e=>s(e),selected:e=>Ae(n,e?.os)}},hardware:()=>{let n;return n=t(e)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"]],{element:(t,s)=>(0,O.jsx)(Ee,{title:"Hardware",description:"The hardware to use for running the model.",type:"picker",selected:s,inputProps:{choices:n,value:e?.hardware,onChange:r("hardware")}},t),show:e=>e?.service,selected:e=>Ae(n,e?.hardware)}},cpuVendor:()=>{const n=["Any","AMD","Intel"];return{element:(t,s)=>(0,O.jsx)(Ee,{title:"CPU Vendor",type:"picker",selected:s,inputProps:{choices:n,value:e?.cpuVendor,onChange:r("cpuVendor")}},t),show:e=>t(e),selected:e=>Ae(n,e?.cpuVendor)}},cpuModel:()=>{let n=[];return"AMD"===e?.cpuVendor?n=["7702","7713","75F3"]:"Intel"===e?.cpuVendor&&(n=["6140","6248","8260","E7-8890"]),{element:(t,s)=>(0,O.jsx)(Ee,{title:"CPU Model",type:"picker",selected:s,inputProps:{choices:n,value:e?.cpuModel,onChange:r("cpuModel")}},t),show:e=>t(e)&&e?.cpuVendor&&"Any"!==e.cpuVendor,selected:e=>Ae(n,e?.cpuModel)}},cpuCores:()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?128:"75F3"===e?.cpuModel?64:"6140"===e?.cpuModel?36:"6248"===e?.cpuModel?40:"8260"===e?.cpuModel?48:"E7-8890"===e?.cpuModel?96:128,{element:(t,s)=>(0,O.jsx)(Ee,{title:"CPU",type:"slider",selected:s,inputProps:{value:e?.cpuCores,label:"cores",min:1,max:n,step:1,onChange:r("cpuCores")}},t),show:e=>t(e),selected:e=>!0}},ram:()=>{let n;return n="Any"===e?.cpuModel||"7702"===e?.cpuModel||"7713"===e?.cpuModel?1006:"75F3"===e?.cpuModel?503:"6140"===e?.cpuModel||"6248"===e?.cpuModel||"8260"===e?.cpuModel?186:"E7-8890"===e?.cpuModel?5794:1006,{element:(t,s)=>(0,O.jsx)(Ee,{title:"RAM",type:"slider",selected:s,inputProps:{value:e?.ram,label:"GB",min:8,max:n,step:8,onChange:r("ram")}},t),show:e=>t(e),selected:e=>!0}},jobProfile:()=>{let n=[];return"CPU"===e?.hardware?n=["1 core, 8 GB","4 cores, 32 GB","8 cores, 64 GB","16 cores, 128GB"]:"GPU"===e?.hardware&&(n=["4 cores, 32 GB, T4 GPU","8 cores, 64 GB, T4 GPU"]),{element:(t,s)=>(0,O.jsx)(Ee,{title:"Job Profile",type:"picker",selected:s,inputProps:{choices:n,value:e?.jobProfile,onChange:r("jobProfile")}},t),show:e=>"JupyterHub"===e?.service&&e?.hardware,selected:e=>Ae(n,e?.jobProfile)}},gpuVendor:()=>{const n=["Any","NVIDIA","AMD"];return{element:(t,s)=>(0,O.jsx)(Ee,{title:"GPU Vendor",type:"picker",selected:s,inputProps:{choices:n,value:e?.gpuVendor,onChange:r("gpuVendor")}},t),show:e=>t(e)&&i(e),selected:e=>Ae(n,e?.gpuVendor)}},gpuModel:()=>{let n=[];return"NVIDIA"===e?.gpuVendor?n=["T4","P100","V100","A100"]:"AMD"===e?.gpuVendor&&(n=["MI100","MI210"]),{element:(t,s)=>(0,O.jsx)(Ee,{title:"GPU Model",type:"picker",selected:s,inputProps:{choices:n,value:e?.gpuModel,onChange:r("gpuModel")}},t),show:e=>t(e)&&"GPU"===e?.hardware&&e?.gpuVendor&&"Any"!==e.gpuVendor,selected:e=>Ae(n,e?.gpuModel)}},gpuModules:()=>({element:(n,t)=>(0,O.jsx)(Ee,{title:"GPU",type:"slider",selected:t,inputProps:{value:e?.gpuModules,label:"modules",min:1,max:8,step:1,onChange:r("gpuModules")}},n),show:e=>t(e)&&i(e),selected:e=>!0}),environment:()=>{let n=[];return n="JupyterHub"===e?.service?[["Conda","Conda package manager"]]:s(e)&&["macOS","Windows"].includes(e?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Apptainer","Apptainer / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(t,s)=>(0,O.jsx)(Ee,{title:"Environment",description:"The Python package management system.",type:"picker",selected:s,inputProps:{choices:n,value:e?.environment,onChange:r("environment")}},t),show:e=>e?.service,selected:e=>Ae(n,e?.environment)}},tool:()=>{let n=[];return n="Lyra"===e?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(t,s)=>(0,O.jsx)(Ee,{title:"Tool",description:"The interface to use for running the model.",type:"picker",selected:s,inputProps:{choices:n,value:e?.tool,onChange:r("tool")}},t),show:e=>e?.service,selected:e=>Ae(n,e?.tool)}}}}function Ve(e){let{config:n,onConfigChange:r}=e;return(0,O.jsx)(l.xu,{children:Object.entries(Ue(n,r)).map((e=>{let[n,r]=e;return[n,r()]})).filter((e=>{let[r,t]=e;return t.show(n)})).map((e=>{let[r,t]=e;return t.element(r,t.selected(n))}))})}var De=r(3804);function Oe(e){let{presets:n,onPresetChange:r}=e;return(0,O.jsx)(l.xu,{children:(0,O.jsx)(De.QI,{children:n.map(((e,n)=>(0,O.jsx)(De.HC,{onClick:()=>r(e),children:(0,O.jsxs)(u.r,{children:[e.name," ",(0,O.jsx)(f.m,{mx:"2px"})]})},n)))})})}var Ge=r(8719),ze=r(2923);function Re(e){let{choices:n,page:r,showPage:s=!1,onPageChange:i,clickable:o=!1}=e;const[a,h]=(0,t.useState)(s);(0,t.useEffect)((()=>{h(s)}),[s]);const u=(e,n)=>{i&&i(e,n),h(e)};if(a)return(0,O.jsxs)(l.xu,{children:[r,(0,O.jsx)(c.z,{leftIcon:(0,O.jsx)(ze.R,{}),position:"absolute",right:"4",top:"4",size:"sm",onClick:()=>u(!1),children:"Back"})]});const x=1===n.length?1:3===n.length?3:2;return(0,O.jsx)(Ge.M,{columns:x,spacing:2,children:n.map(((e,n)=>(0,O.jsx)(l.xu,{onClick:o?()=>u(!0,n):null,cursor:o?"pointer":"auto",children:(0,O.jsx)(d.Z,{height:"100%",children:(0,O.jsx)(p.e,{children:e})})},n)))})}function Ze(e){let{children:n,...r}=e;return(0,O.jsx)(s.X,{as:"h2",size:"md",marginBottom:0,...r,children:n})}function _e(e){let{children:n}=e;return(0,O.jsxs)(i.K,{py:3,children:[(0,O.jsx)(Ze,{display:"inline-block",flex:"1",textAlign:"left",children:n}),(0,O.jsx)(o.X,{})]})}function He(e){let{presets:n,onPresetChange:r}=e;return(0,O.jsxs)(l.xu,{children:[(0,O.jsx)(Ze,{children:"Preset configurations"}),(0,O.jsx)(Oe,{presets:n,onPresetChange:r})]})}function $e(e){let{onSelected:n}=e;return(0,O.jsxs)(l.xu,{children:[(0,O.jsx)(Ze,{children:"Custom configuration"}),(0,O.jsx)(a.x,{my:2,children:"Choose the model, service, and settings."}),(0,O.jsx)(c.z,{size:"md",onClick:n,rightIcon:(0,O.jsx)(f.m,{}),children:"Start"})]})}const Ne=e=>Object.values(Ue(e)).map((e=>e())).filter((n=>n.show(e))).every((n=>n.selected(e))),qe={cpuCores:4,ram:16,gpuModules:1};function Be(e){let{title:n,task:r,presets:i=[]}=e;const[o,l]=(0,t.useState)(""),[c]=(0,t.useState)(Math.floor(7e3*Math.random())+3e3),[f,v]=(0,t.useState)(qe),[y,w]=(0,t.useState)(!1),[T,C]=(0,t.useState)([0,1,2]),P=""!==o,k=Ne(f);return(0,O.jsxs)(d.Z,{children:[(0,O.jsx)(h.O,{children:(0,O.jsxs)(u.r,{href:`https://huggingface.co/tasks/${r}`,isExternal:!0,children:[(0,O.jsx)(x.E,{float:"left",verticalAlign:"middle",src:b,alt:"HuggingFace logo",display:"inline",height:"30px"}),(0,O.jsx)(s.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:n})]})}),(0,O.jsxs)(p.e,{children:[(0,O.jsx)(a.x,{mb:6,children:"Step-by-step instructions to interact through your web browser with a HuggingFace model, running on Lyra, JupyterHub, rVDI, or your own machine."}),(0,O.jsx)(Re,{choices:[(0,O.jsx)(He,{presets:i,onPresetChange:e=>{l(e.model),v(e.config),w(!0),C([2])}}),(0,O.jsx)($e,{onSelected:()=>{l(""),v(qe),w(!0),C([0,1,2])}})],page:(0,O.jsxs)(j.U,{allowMultiple:!0,defaultIndex:T,allowToggle:!0,children:[(0,O.jsxs)(m.Q,{children:[(0,O.jsx)(_e,{children:"Model"}),(0,O.jsx)(g.H,{children:(0,O.jsx)($,{model:o,onModelChange:l,task:r})})]}),P&&(0,O.jsxs)(m.Q,{children:[(0,O.jsx)(_e,{children:"Config"}),(0,O.jsx)(g.H,{children:(0,O.jsx)(Ve,{config:f,onConfigChange:v})})]}),P&&k&&(0,O.jsxs)(m.Q,{children:[(0,O.jsx)(_e,{children:"Instructions"}),(0,O.jsx)(g.H,{children:(0,O.jsx)(Pe,{task:r,model:o,config:f,port:c})})]})]}),showPage:y,onPageChange:e=>w(e)})]})]})}},1769:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var t=r(1220),s=r(9234);const i={...t.Z,HuggingFacePipeline:s.Z}}}]);