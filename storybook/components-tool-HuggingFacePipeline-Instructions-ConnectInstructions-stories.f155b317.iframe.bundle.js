"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[460],{"./src/components/tool/HuggingFacePipeline/Instructions/ConnectInstructions.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{JupyterHub:()=>JupyterHub,Local:()=>Local,Lyra:()=>Lyra,RVDI:()=>RVDI,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Tools/HuggingFacePipeline/Instructions/ConnectInstructions",component:__webpack_require__("./src/components/tool/HuggingFacePipeline/Instructions/ConnectInstructions.js").s},Lyra={args:{service:"Lyra"}},JupyterHub={args:{service:"JupyterHub"}},RVDI={args:{service:"rVDI"}},Local={args:{service:"Local"}};Lyra.parameters={...Lyra.parameters,docs:{...Lyra.parameters?.docs,source:{originalSource:'{\n  args: {\n    service: "Lyra"\n  }\n}',...Lyra.parameters?.docs?.source}}},JupyterHub.parameters={...JupyterHub.parameters,docs:{...JupyterHub.parameters?.docs,source:{originalSource:'{\n  args: {\n    service: "JupyterHub"\n  }\n}',...JupyterHub.parameters?.docs?.source}}},RVDI.parameters={...RVDI.parameters,docs:{...RVDI.parameters?.docs,source:{originalSource:'{\n  args: {\n    service: "rVDI"\n  }\n}',...RVDI.parameters?.docs?.source}}},Local.parameters={...Local.parameters,docs:{...Local.parameters?.docs,source:{originalSource:'{\n  args: {\n    service: "Local"\n  }\n}',...Local.parameters?.docs?.source}}};const __namedExportsOrder=["Lyra","JupyterHub","RVDI","Local"]},"./src/components/output/CopyBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CopyBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-KICXRNWJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-FBZFEQBO.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CopyBox(_ref){let{children}=_ref;const[hover,setHover]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[copied,setCopied]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor:"gray.200",bg:"gray.50",fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",w:"full",onMouseOver:()=>setHover(!0),onMouseOut:()=>setHover(!1),position:"relative",children:[children,hover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.u,{label:copied?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(children),setCopied(!0),setTimeout((()=>setCopied(!1)),1e3)},colorScheme:copied?"green":"gray",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.T,{})})})]})}CopyBox.displayName="CopyBox",CopyBox.__docgenInfo={description:"",methods:[],displayName:"CopyBox"}},"./src/components/tool/HuggingFacePipeline/Instructions/ConnectInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>ConnectInstructions});var InstructionHeading=__webpack_require__("./src/components/tool/HuggingFacePipeline/Instructions/components/InstructionHeading.js"),InstructionText=__webpack_require__("./src/components/tool/HuggingFacePipeline/Instructions/components/InstructionText.js"),chunk_3KCBMPN5=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),chunk_ALC6QPCI=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs"),chunk_K7XRJ7NL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),chunk_PULVB27S=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),chunk_2OOHT3W5=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),chunk_LZZHVJFG=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),react=__webpack_require__("./node_modules/react/index.js"),chunk_GTRZJDIL=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-GTRZJDIL.mjs"),chunk_BXDFYXZJ=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-BXDFYXZJ.mjs"),chunk_IAXSQ4X2=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-IAXSQ4X2.mjs"),chunk_4YMKQ5D4=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-4YMKQ5D4.mjs"),chunk_KGTDXOFZ=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-KGTDXOFZ.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function OperatingSystemTabs(_ref){let{children}=_ref;const[tabIndex,setTabIndex]=(0,react.useState)(function getOsIndex(){return-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0}());return(0,jsx_runtime.jsxs)(chunk_GTRZJDIL.m,{index:tabIndex,onChange:setTabIndex,children:[(0,jsx_runtime.jsxs)(chunk_BXDFYXZJ.t,{children:[(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"Windows"}),(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"macOS"}),(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"Linux"})]}),(0,jsx_runtime.jsxs)(chunk_4YMKQ5D4.n,{children:[(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[0]}),(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[1]}),(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[2]})]})]})}OperatingSystemTabs.displayName="OperatingSystemTabs",OperatingSystemTabs.__docgenInfo={description:"",methods:[],displayName:"OperatingSystemTabs"};var CopyBox=__webpack_require__("./src/components/output/CopyBox.js");function LyraInstructions(_ref){let{username}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to Lyra"}),(0,jsx_runtime.jsxs)(chunk_3KCBMPN5.b,{status:"info",children:[(0,jsx_runtime.jsx)(chunk_ALC6QPCI.z,{}),"If you are off-campus, you will first need to connect to the QUT network using the VPN."]}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["See the instructions ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"/ai-toolbox/docs/hpc/lyra/connecting",isExternal:!0,color:"blue.500",children:"here"})," for more information about how to use Lyra."]}),(0,jsx_runtime.jsxs)(OperatingSystemTabs,{children:[(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{children:[(0,jsx_runtime.jsxs)(chunk_3KCBMPN5.b,{status:"info",children:[(0,jsx_runtime.jsx)(chunk_ALC6QPCI.z,{}),(0,jsx_runtime.jsxs)(chunk_2OOHT3W5.x,{mb:"0",children:["You may need to enable the ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",isExternal:!0,color:"blue.500",children:"ssh feature"})," in Windows."]})]}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"In Windows Terminal, Powershell, or cmd.exe, run the following command to connect to Lyra:"})]}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:(0,jsx_runtime.jsx)(InstructionText.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:(0,jsx_runtime.jsx)(InstructionText.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===username&&(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsxs)("i",{children:["Replace ",(0,jsx_runtime.jsx)(chunk_LZZHVJFG.E,{children:"qutusername"})," with your QUT username."]})}),(0,jsx_runtime.jsxs)(CopyBox.Z,{children:["ssh ",username||"qutusername","@lyra.qut.edu.au"]})]})}function JupyterHubInstructions(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to JupyterHub"}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["See the instructions ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"/ai-toolbox/docs/hpc/jupyterhub/connecting",isExternal:!0,color:"blue.500",children:"here"})," for more information about how to use JupyterHub on Lyra."]}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["Visit ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://jupyterhub.eres.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://jupyterhub.eres.qut.edu.au"})," and log in with your QUT username and password."]})]})}function RvdiInstructions(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to rVDI"}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["See the instructions ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"/ai-toolbox/docs/rvdi",isExternal:!0,color:"blue.500",children:"here"})," for more information."]}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["If you have not already, download and install the VMware Horizon client from ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"https://rvdi.qut.edu.au"}),"."]}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["In the VMware Horizon client, connect to ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://rvdi.qut.edu.au",isExternal:!0,color:"blue.500",children:"rvdi.qut.edu.au"})," and log in with your QUT username and password."]})]})}function ConnectInstructions(_ref2){let{service,username}=_ref2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Lyra"===service&&(0,jsx_runtime.jsx)(LyraInstructions,{username}),"JupyterHub"===service&&(0,jsx_runtime.jsx)(JupyterHubInstructions,{}),"rVDI"===service&&(0,jsx_runtime.jsx)(RvdiInstructions,{}),"Local"===service&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})," "]})}ConnectInstructions.__docgenInfo={description:"",methods:[],displayName:"ConnectInstructions"}},"./src/components/tool/HuggingFacePipeline/Instructions/components/InstructionHeading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InstructionHeading});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstructionHeading(_ref){let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.X,{as:"h3",size:"sm",my:4,children})}InstructionHeading.displayName="InstructionHeading",InstructionHeading.__docgenInfo={description:"",methods:[],displayName:"InstructionHeading"}},"./src/components/tool/HuggingFacePipeline/Instructions/components/InstructionText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InstructionText});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstructionText(_ref){let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.x,{my:4,children})}InstructionText.displayName="InstructionText",InstructionText.__docgenInfo={description:"",methods:[],displayName:"InstructionText"}}}]);