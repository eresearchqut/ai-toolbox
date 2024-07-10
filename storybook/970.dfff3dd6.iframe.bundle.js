"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[970],{"./src/components/hooks/useLocalStorageState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useLocalStorageState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useLocalStorageState(key,defaultValue){const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{const stored=localStorage.getItem(key);return stored?JSON.parse(stored):defaultValue}));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{localStorage.setItem(key,JSON.stringify(state))}),[key,state]),[state,setState]}},"./src/components/output/CopyBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CopyBox});var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-FBZFEQBO.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/editable/dist/chunk-ROCN3PRT.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/editable/dist/chunk-USE7AZZJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/editable/dist/chunk-KE6CZM3P.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-KICXRNWJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CopyBox(_ref){let{children,editable=!1,defaultRows=10}=_ref;const[hover,setHover]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[copied,setCopied]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),borderColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ff)("gray.200","gray.500"),bg=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ff)("gray.50","gray.800"),Wrapper=editable?_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.C:_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.xu,[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array.isArray(children)?children.join(""):children);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setText(Array.isArray(children)?children.join(""):children)}),[children]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor,bg,fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>setHover(!0),onMouseOut:()=>setHover(!1),position:"relative",defaultValue:text,onSubmit:e=>setText(e),children:[editable?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.w,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.H,{rows:defaultRows})]}):text,hover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.u,{label:copied?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(text),setCopied(!0),setTimeout((()=>setCopied(!1)),1e3)},colorScheme:copied?"green":"gray",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__.T,{})})})]},text)}CopyBox.displayName="CopyBox",CopyBox.__docgenInfo={description:"",methods:[],displayName:"CopyBox",props:{editable:{defaultValue:{value:"false",computed:!1},required:!1},defaultRows:{defaultValue:{value:"10",computed:!1},required:!1}}}},"./src/components/tool/guide/Instructions/ConnectInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>ConnectInstructions});var chunk_3KCBMPN5=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),chunk_ALC6QPCI=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs"),chunk_K7XRJ7NL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),chunk_PULVB27S=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),chunk_2OOHT3W5=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),chunk_LZZHVJFG=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),CopyBox=__webpack_require__("./src/components/output/CopyBox.js"),InstructionHeading=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),InstructionText=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionText.js"),chunk_GTRZJDIL=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-GTRZJDIL.mjs"),chunk_BXDFYXZJ=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-BXDFYXZJ.mjs"),chunk_IAXSQ4X2=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-IAXSQ4X2.mjs"),chunk_4YMKQ5D4=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-4YMKQ5D4.mjs"),chunk_KGTDXOFZ=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-KGTDXOFZ.mjs"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function OperatingSystemTabs(_ref){let{children}=_ref;const[tabIndex,setTabIndex]=(0,react.useState)(function getOsIndex(){return-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0}());return(0,jsx_runtime.jsxs)(chunk_GTRZJDIL.m,{index:tabIndex,onChange:setTabIndex,children:[(0,jsx_runtime.jsxs)(chunk_BXDFYXZJ.t,{children:[(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"Windows"}),(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"macOS"}),(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"Linux"})]}),(0,jsx_runtime.jsxs)(chunk_4YMKQ5D4.n,{children:[(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[0]}),(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[1]}),(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[2]})]})]})}function LyraInstructions(_ref){let{username}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to Lyra"}),(0,jsx_runtime.jsxs)(chunk_3KCBMPN5.b,{status:"info",children:[(0,jsx_runtime.jsx)(chunk_ALC6QPCI.z,{}),"If you are off-campus, you will first need to connect to the QUT network using the VPN."]}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["See the instructions"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",isExternal:!0,color:"blue.500",children:"here"})," ","for more information about how to use Lyra."]}),(0,jsx_runtime.jsxs)(OperatingSystemTabs,{children:[(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{children:[(0,jsx_runtime.jsxs)(chunk_3KCBMPN5.b,{status:"info",children:[(0,jsx_runtime.jsx)(chunk_ALC6QPCI.z,{}),(0,jsx_runtime.jsxs)(chunk_2OOHT3W5.x,{mb:"0",children:["You may need to enable the"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",isExternal:!0,color:"blue.500",children:"ssh feature"})," ","in Windows."]})]}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["In"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://aka.ms/terminal",isExternal:!0,color:"blue.500",children:"Windows Terminal"}),", Powershell,"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://www.putty.org/",isExternal:!0,color:"blue.500",children:"PuTTY"}),", or cmd.exe, run the following command to connect to Lyra:"]})]}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:(0,jsx_runtime.jsx)(InstructionText.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:(0,jsx_runtime.jsx)(InstructionText.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===username&&(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsxs)("i",{children:["Replace ",(0,jsx_runtime.jsx)(chunk_LZZHVJFG.E,{children:"qutusername"})," with your QUT username."]})}),(0,jsx_runtime.jsxs)(CopyBox.Z,{children:["ssh ",username||"qutusername","@lyra.qut.edu.au"]})]})}function JupyterHubInstructions(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to JupyterHub"}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["Visit"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://jupyterhub.eres.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://jupyterhub.eres.qut.edu.au"})," ","and log in with your QUT username and password."]})]})}function RvdiInstructions(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to rVDI"}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["See the instructions"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",isExternal:!0,color:"blue.500",children:"here"})," ","for more information."]}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["If you have not already, download and install the VMware Horizon client from"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://rvdi.qut.edu.au"}),"."]}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["In the VMware Horizon client, connect to"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"rvdi.qut.edu.au"})," ","and log in with your QUT username and password."]})]})}function ConnectInstructions(_ref2){let{service,username}=_ref2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Lyra"===service&&(0,jsx_runtime.jsx)(LyraInstructions,{username}),"JupyterHub"===service&&(0,jsx_runtime.jsx)(JupyterHubInstructions,{}),"rVDI"===service&&(0,jsx_runtime.jsx)(RvdiInstructions,{}),"Local"===service&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})," "]})}OperatingSystemTabs.displayName="OperatingSystemTabs",OperatingSystemTabs.__docgenInfo={description:"",methods:[],displayName:"OperatingSystemTabs"},ConnectInstructions.__docgenInfo={description:"",methods:[],displayName:"ConnectInstructions"}},"./src/components/tool/guide/Instructions/InstructionInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InstructionInput});var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-SNGWRL4Y.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-OSN4JR34.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-GCOAS5YC.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-2ZHRCML3.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-5ZQ6B3SW.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstructionInput(_ref){let{label,placeholder,value,onChange,pattern,helperText,errorText}=_ref;const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),[valid,setValid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setValid(pattern.test(value)),setText(value)}),[value]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.NI,{isInvalid:!valid,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.l,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.B,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.I,{type:"text",placeholder,value:text,onChange:e=>{setText(e.target.value),onChange(e.target.value)},pattern}),valid&&""!==value&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.x,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.n,{color:"green.500"})})]}),!valid&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.J1,{children:errorText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Q6,{children:helperText})]})}InstructionInput.displayName="InstructionInput",InstructionInput.__docgenInfo={description:"",methods:[],displayName:"InstructionInput"}},"./src/components/tool/guide/Instructions/StartInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bc:()=>LocalStartInstructions,CJ:()=>JupyterHubStartInstructions,HW:()=>RvdiStartInstructions,Wh:()=>LyraStartInstructions});var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-6UX5C75U.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@chakra-ui/checkbox/dist/chunk-CWVAJCXJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_output_CopyBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/output/CopyBox.js"),_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionText.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function LyraStartInstructions(_ref){let{jobType,jobName="",nodes,wallTime,hardware,cpuVendor,cpuModel,cpuCores,ram,gpuVendor,gpuModel,gpuModules}=_ref;const resources=[`select=${"Interactive"===jobType?1:nodes}`,`ncpus=${cpuCores}`,`mem=${ram}gb`];"Any"!==cpuVendor&&cpuModel&&resources.push(`cputype=${cpuModel}`),"GPU"===hardware&&(resources.push(`ngpus=${gpuModules}`),"Any"!==gpuVendor&&gpuModel&&resources.push(`gputype=${gpuModel}`));const jobParameters=["Interactive"===jobType?" -I -S /bin/bash":"","Interactive"!==jobType&&""!==jobName?' -N "'+jobName+'"':""],wallTimeStr="Interactive"===jobType?"01:00:00":(wallTime?.hour<10?"0":"")+wallTime?.hour+":"+(wallTime?.minute<10?"0":"")+wallTime?.minute+":00",[hasScript,setHasScript]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[scriptPath,setScriptPath]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),cmdText=`qsub${jobParameters.join("")} -l walltime=${wallTimeStr} -l ${resources.join(":")}${hasScript?" "+scriptPath:""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["Batch"===jobType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"Creating a batch job script"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["Before scheduling a batch job, you need to create a job script first (Click to edit):",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_output_CopyBox__WEBPACK_IMPORTED_MODULE_1__.Z,{editable:!0,children:["#!/bin/bash","","echo \"Running job '$PBS_JOBNAME' ($PBS_JOBID) in the following directory: $PWD\""].join("\n")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["You can either edit and copy the above content, use"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"qsub"})," command submitting a job, paste it to standard input to run it."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["(Note: When submitting a job without specifying your script, you will see"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"Job script will be read from standard input. Submit with CTRL+D."})," ","which indicates standard input mode.)"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Alternatively, save your script as a file, and use it as a command-line argument."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["Pick your favourite text editor (e.g.: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"nano"}),","," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"vim"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"gedit"}),"). If you do not know how to use text editors, please"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.r,{color:"teal.500",href:"https://qutvirtual4.qut.edu.au/group/staff/research/conducting/facilities/advanced-research-computing-storage/supercomputing/using-linux",isExternal:!0,children:["refer here",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.h,{mx:"2px"})]}),"."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"Schedule a job"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["In the ssh session, run the following command to schedule the"," ",jobType.toLowerCase()," job:"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.k,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.xu,{minWidth:"20%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.X,{isChecked:hasScript,onChange:e=>setHasScript(e.target.checked),children:"I have a script to specify"})}),hasScript&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.I,{size:"xs",placeholder:"full/path/to/your_script.sh",value:scriptPath,onChange:e=>setScriptPath(e.target.value)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_output_CopyBox__WEBPACK_IMPORTED_MODULE_1__.Z,{children:cmdText}),"Interactive"===jobType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["Wait for the job to start, and take note of the node you are on (eg."," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"cl5n042"}),")."]})}),"Batch"===jobType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"You can check the status of your jobs by running the following:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_output_CopyBox__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"qstat -u $USER"})]})]})}function JupyterHubStartInstructions(_ref2){let{jobProfile}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"Schedule a job"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["From the JupyterHub home page, click ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"Start My Server"})," to schedule a job."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["From the list of available options, select the one containing"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:["Lyra - ",jobProfile]})," and click the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"Start"})," ","button."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"Waiting Screen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["You will now enter a waiting screen and see the following message:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"Your server is starting up."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:"You will be redirected automatically when it's ready for you"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Wait for the to be redirected."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["It may take up to 10 minutes for your job to be queued and for the server to start. If it fails to start, please raise an incident in the"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.r,{color:"teal.500",href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",isExternal:!0,children:["eResearch help centre",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.h,{mx:"2px"})]}),"."]})]})}function RvdiStartInstructions(_ref3){let machineName,{hardware,os}=_ref3;return machineName="Linux"===os?"Red Hat VDI Medium with GPU":"GPU"===hardware?"eResearch Large with GPU":"eResearch General VDI",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"Start a session"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["From the list of machines, select the one named"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.E,{children:machineName})]})]})}function LocalStartInstructions(_ref4){let{_hardware,_os}=_ref4}LyraStartInstructions.__docgenInfo={description:"",methods:[],displayName:"LyraStartInstructions",props:{jobName:{defaultValue:{value:'""',computed:!1},required:!1}}},JupyterHubStartInstructions.__docgenInfo={description:"",methods:[],displayName:"JupyterHubStartInstructions"},RvdiStartInstructions.__docgenInfo={description:"",methods:[],displayName:"RvdiStartInstructions"}},"./src/components/tool/guide/Instructions/TeardownInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>TeardownInstructions});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-EBIU6VW7.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),_output_CopyBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/output/CopyBox.js"),_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionText.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TeardownInstructions(_ref){let{service,jobType,environment,usingTool=!1}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:["Lyra"===service&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.b,{status:"warning",variant:"left-accent",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.z,{}),"Lyra is a shared resource, only request the resources you need."]})}),usingTool&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Stop the server"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Once you have finished using the tool, stop the server by pressing"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"Ctrl"})," + ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"C"})," in the terminal."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."})]}),"Singularity"===environment&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Exit the container"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Exit the container by pressing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"Ctrl"})," + ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"D"}),", or typing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===service&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Stop the job"}),"Interactive"===jobType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Stop the job by pressing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"Ctrl"})," + ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"D"}),", or typing"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:"exit"})," in the terminal."]}),"Batch"===jobType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"The batch job will stop automatically when the job's script terminates, or the walltime elapses."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["To stop the job early, you need to know your job id. You can either note down your job id when you submit a batch job, or find the job id using the check job status command:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_output_CopyBox__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"qstat -u $USER"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["To stop the job early, run the following:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_output_CopyBox__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"qdel {job_id}"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Exit the ssh session"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Exit the ssh session on Lyra by pressing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"Ctrl"})," +"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"D"}),", or typing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:"exit"})," in the terminal."]}),usingTool&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Stop port forwarding"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Stop local port forwarding by pressing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"Ctrl"})," +"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.T,{children:"D"}),", or typing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})]})}TeardownInstructions.__docgenInfo={description:"",methods:[],displayName:"TeardownInstructions",props:{usingTool:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/tool/guide/Instructions/components/InstructionHeading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InstructionHeading});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstructionHeading(_ref){let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.X,{as:"h3",size:"sm",my:4,children})}InstructionHeading.displayName="InstructionHeading",InstructionHeading.__docgenInfo={description:"",methods:[],displayName:"InstructionHeading"}},"./src/components/tool/guide/Instructions/components/InstructionText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InstructionText});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstructionText(_ref){let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.x,{my:4,children})}InstructionText.displayName="InstructionText",InstructionText.__docgenInfo={description:"",methods:[],displayName:"InstructionText"}}}]);