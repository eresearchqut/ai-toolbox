"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[569],{"./src/components/hooks/useLocalStorageState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useLocalStorageState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useLocalStorageState(key,defaultValue){const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{const stored=localStorage.getItem(key);return stored?JSON.parse(stored):defaultValue}));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{localStorage.setItem(key,JSON.stringify(state))}),[key,state]),[state,setState]}},"./src/components/navigation/TextWithLink.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>TextWithLink});var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-6UX5C75U.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TextWithLink(_ref){let{textBeforeLink="",link={href:"",text:"",color:void 0,isExternal:!1},hasExternalIcon=!1,textAfterLink=""}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[textBeforeLink,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.r,{color:link?.color?link.color:"teal.500",href:link.href,isExternal:link?.isExternal,children:[link.text,hasExternalIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.h,{mx:"2px"})]}),textAfterLink]})}TextWithLink.__docgenInfo={description:"",methods:[],displayName:"TextWithLink",props:{textBeforeLink:{defaultValue:{value:'""',computed:!1},required:!1},link:{defaultValue:{value:'{\n  href: "",\n  text: "",\n  color: undefined,\n  isExternal: false,\n}',computed:!1},required:!1},hasExternalIcon:{defaultValue:{value:"false",computed:!1},required:!1},textAfterLink:{defaultValue:{value:'""',computed:!1},required:!1}}}},"./src/components/output/CommandBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CommandBox});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_PreformattedBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/output/PreformattedBox.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Header(_ref){let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.X,{size:"xs",border:"1px",backgroundColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ff)("gray.100","gray.800"),borderColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ff)("gray.200","gray.500"),m:"0",p:"2",children})}function CommandBox(_ref2){let{command,output,editable}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.xu,{border:"1px",borderColor:"gray.200",rounded:"md",overflow:"hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.xu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Header,{children:"Command"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PreformattedBox__WEBPACK_IMPORTED_MODULE_0__.Z,{editable,type:"input",contentProps:{ariaLabel:"Command text",rounded:"",...!output&&{borderBottomRadius:"md"},borderRadius:"0",mb:0},children:command})]}),output&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.xu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Header,{children:"Output"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PreformattedBox__WEBPACK_IMPORTED_MODULE_0__.Z,{editable,type:"output",wrap:!1,contentProps:{ariaLabel:"Output text",rounded:"",borderBottomRadius:"md",borderRadius:"0",mb:0},children:output})]})]})}CommandBox.__docgenInfo={description:"",methods:[],displayName:"CommandBox"}},"./src/components/output/PreformattedBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PreformattedBox});var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-FBZFEQBO.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/editable/dist/chunk-ROCN3PRT.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/editable/dist/chunk-USE7AZZJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/editable/dist/chunk-KE6CZM3P.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-TK6VMDNP.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function PreformattedBox(_ref){let{children,editable=!1,type="input",defaultRows=10,wrap=!0,contentProps}=_ref;const[hover,setHover]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[copied,setCopied]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),borderColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ff)("gray.200","gray.500");let bg;bg="input"===type?(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ff)("gray.50","gray.800"):"output"===type?(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ff)("gray.200","gray.700"):(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ff)("gray.50","gray.800");const wrapStyle={textWrap:wrap?"wrap":"nowrap"},Content=editable?_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.C:_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.xu,[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array.isArray(children)?children.join(""):children);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setText(Array.isArray(children)?children.join(""):children)}),[children]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.xu,{position:"relative",onMouseOver:()=>setHover(!0),onMouseOut:()=>setHover(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Content,{as:"pre",p:"4",rounded:"md",border:"1px",borderColor,bg,fontSize:"sm",whiteSpace:"pre-wrap",wordBreak:"break-all",overflowX:"auto",w:"full",defaultValue:text,onSubmit:e=>setText(e),sx:wrapStyle,...contentProps,children:editable?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.w,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.H,{rows:defaultRows,sx:wrapStyle})]}):text},text),"input"===type&&hover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.u,{label:copied?"Copied!":"Copy to clipboard",placement:"top",closeDelay:500,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.z,{position:"absolute",right:"2",top:"2",size:"sm",onClick:()=>{navigator.clipboard.writeText(text),setCopied(!0),setTimeout((()=>setCopied(!1)),1e3)},colorScheme:copied?"green":"gray",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__.T,{})})})]})}PreformattedBox.__docgenInfo={description:"",methods:[],displayName:"PreformattedBox",props:{editable:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"input"',computed:!1},required:!1},defaultRows:{defaultValue:{value:"10",computed:!1},required:!1},wrap:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./src/components/tool/guide/Config/AlertHelper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AlertHelper});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/close-button/dist/chunk-37N6GCLA.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AlertHelper(_ref){let{alertDismissible=!0,alertType="info",onClose={},children=null}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.xu,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.b,{display:"flex",status:alertType,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.xu,{flex:"1",children}),alertDismissible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.P,{size:"sm",style:{marginLeft:"auto"},position:"relative",right:"0",top:"0",onClick:onClose})]})]})}AlertHelper.__docgenInfo={description:"",methods:[],displayName:"AlertHelper",props:{alertDismissible:{defaultValue:{value:"true",computed:!1},required:!1},alertType:{defaultValue:{value:'"info"',computed:!1},required:!1},onClose:{defaultValue:{value:"{}",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1}}}},"./src/components/tool/guide/Instructions/ConnectInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>ConnectInstructions});var chunk_PULVB27S=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),chunk_LZZHVJFG=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),TextWithLink=__webpack_require__("./src/components/navigation/TextWithLink.js"),CommandBox=__webpack_require__("./src/components/output/CommandBox.js"),AlertHelper=__webpack_require__("./src/components/tool/guide/Config/AlertHelper.js"),InstructionHeading=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),InstructionText=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionText.js"),chunk_GTRZJDIL=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-GTRZJDIL.mjs"),chunk_BXDFYXZJ=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-BXDFYXZJ.mjs"),chunk_IAXSQ4X2=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-IAXSQ4X2.mjs"),chunk_4YMKQ5D4=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-4YMKQ5D4.mjs"),chunk_KGTDXOFZ=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-KGTDXOFZ.mjs"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function OperatingSystemTabs(_ref){let{children}=_ref;const[tabIndex,setTabIndex]=(0,react.useState)(function getOsIndex(){return-1!==navigator.userAgent.indexOf("Win")?0:-1!==navigator.userAgent.indexOf("Mac")?1:-1!==navigator.userAgent.indexOf("Linux")?2:0}());return(0,jsx_runtime.jsxs)(chunk_GTRZJDIL.m,{index:tabIndex,onChange:setTabIndex,children:[(0,jsx_runtime.jsxs)(chunk_BXDFYXZJ.t,{children:[(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"Windows"}),(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"macOS"}),(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"Linux"})]}),(0,jsx_runtime.jsxs)(chunk_4YMKQ5D4.n,{children:[(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[0]}),(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[1]}),(0,jsx_runtime.jsx)(chunk_KGTDXOFZ.x,{p:0,children:children[2]})]})]})}function LyraInstructions(_ref){let{username}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to Lyra"}),(0,jsx_runtime.jsx)(AlertHelper.Z,{alertType:"info",alertDismissible:!1,children:"If you are off-campus, you will first need to connect to the QUT network using the VPN."}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsx)(TextWithLink.Z,{textBeforeLink:"See the instructions ",link:{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",text:"here",color:"blue.500",isExternal:!0},textAfterLink:" for more information about how to use Lyra."})}),(0,jsx_runtime.jsxs)(OperatingSystemTabs,{children:[(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{children:[(0,jsx_runtime.jsx)(AlertHelper.Z,{alertType:"info",alertDismissible:!1,children:(0,jsx_runtime.jsx)(TextWithLink.Z,{textBeforeLink:"You may need to enable the ",link:{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",text:"ssh feature",color:"blue.500",isExternal:!0},hasExternalIcon:!1,textAfterLink:" in Windows."})}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:[(0,jsx_runtime.jsx)(TextWithLink.Z,{textBeforeLink:"In ",link:{href:"https://aka.ms/terminal",text:"Windows Terminal",color:"blue.500",isExternal:!0}}),(0,jsx_runtime.jsx)(TextWithLink.Z,{textBeforeLink:", Powershell, ",link:{href:"https://www.putty.org/",text:"PuTTY",color:"blue.500",isExternal:!0},textAfterLink:", or cmd.exe, run the following command to connect to Lyra:"})]})]}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:(0,jsx_runtime.jsx)(InstructionText.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:(0,jsx_runtime.jsx)(InstructionText.Z,{children:"In a terminal emulator, run the following command to connect to Lyra:"})})]}),""===username&&(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsxs)("i",{children:["Replace ",(0,jsx_runtime.jsx)(chunk_LZZHVJFG.E,{children:"username"})," with your QUT username."]})}),(0,jsx_runtime.jsx)(CommandBox.Z,{command:`ssh ${username||"username"}@lyra.qut.edu.au`})]})}function JupyterHubInstructions(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to JupyterHub"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsx)(TextWithLink.Z,{textBeforeLink:"Visit ",link:{href:"https://jupyterhub.eres.qut.edu.au",text:"https://jupyterhub.eres.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:" and log in with your QUT username and password."})})]})}function RvdiInstructions(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Connect to rVDI"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsx)(TextWithLink.Z,{textBeforeLink:"See the instructions ",link:{href:"https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",text:"here",color:"blue.500",isExternal:!0},textAfterLink:" for more information."})}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsx)(TextWithLink.Z,{textBeforeLink:"If you have not already, download and install the VMware Horizon client from ",link:{href:"https://rvdi.qut.edu.au",text:"https://rvdi.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:"."})}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsx)(TextWithLink.Z,{textBeforeLink:"In the VMware Horizon client, connect to ",link:{href:"https://rvdi.qut.edu.au",text:"https://rvdi.qut.edu.au",color:"blue.500",isExternal:!0},textAfterLink:" and log in with your QUT username and password."})})]})}function ConnectInstructions(_ref2){let{service,username}=_ref2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Lyra"===service&&(0,jsx_runtime.jsx)(LyraInstructions,{username}),"JupyterHub"===service&&(0,jsx_runtime.jsx)(JupyterHubInstructions,{}),"rVDI"===service&&(0,jsx_runtime.jsx)(RvdiInstructions,{}),"Local"===service&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})," "]})}OperatingSystemTabs.__docgenInfo={description:"",methods:[],displayName:"OperatingSystemTabs"},ConnectInstructions.__docgenInfo={description:"",methods:[],displayName:"ConnectInstructions"}},"./src/components/tool/guide/Instructions/InstructionInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InstructionInput});var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-SNGWRL4Y.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-DFWC5MHP.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-H46NUPBZ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-2ZHRCML3.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-VGESXGVT.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstructionInput(_ref){let{label,placeholder,value,onChange,pattern=/.*/,helperText,errorText}=_ref;const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),[valid,setValid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setValid(pattern.test(value)),setText(value)}),[value]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.NI,{isInvalid:!valid,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.l,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.B,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.I,{type:"text",placeholder,value:text,onChange:e=>{setText(e.target.value),onChange(e.target.value)},pattern}),valid&&""!==value&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.x,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.n,{color:"green.500"})})]}),!valid&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.J1,{children:errorText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Q6,{children:helperText})]})}InstructionInput.__docgenInfo={description:"",methods:[],displayName:"InstructionInput",props:{pattern:{defaultValue:{value:"/.*/",computed:!1},required:!1}}}},"./src/components/tool/guide/Instructions/StartInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bc:()=>LocalStartInstructions,CJ:()=>JupyterHubStartInstructions,HW:()=>RvdiStartInstructions,Wh:()=>LyraStartInstructions});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_navigation_TextWithLink__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/navigation/TextWithLink.js"),_output_CommandBox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/output/CommandBox.js"),_InstructionInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/tool/guide/Instructions/InstructionInput.js"),_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionText.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function LyraStartInstructions(_ref){let{jobType,jobName="",nodes,wallTime,hardware,cpuVendor,cpuModel,cpus,ram,gpuVendor,gpuModel,gpuModules,jobInstanceType,arrayConfig}=_ref;const resources=[`select=${"Interactive"===jobType?1:nodes}`,`ncpus=${cpus}`,`mem=${ram}gb`];"Any"!==cpuVendor&&("Any"!==cpuModel?resources.push(`cputype=${cpuModel}`):resources.push("AMD"===cpuVendor?"cpuarch=amd":"cpuarch=avx512")),"GPU"===hardware&&(resources.push(`ngpus=${gpuModules}`),"Any"!==gpuVendor&&gpuModel&&resources.push(`gputype=${gpuModel}`));const jobParameters=["Interactive"===jobType?" -I -S /bin/bash":"","Interactive"!==jobType&&""!==jobName?' -N "'+jobName+'"':"","Batch"===jobType&&"Array"===jobInstanceType?" -J "+arrayConfig?.firstIndex+"-"+arrayConfig?.upperBound:"","Batch"===jobType&&"Array"===jobInstanceType&&arrayConfig?.step>1?":"+arrayConfig?.step:""],wallTimeStr="Interactive"===jobType?"01:00:00":(wallTime?.hours<10?"0":"")+wallTime?.hours+":"+(wallTime?.minutes<10?"0":"")+wallTime?.minutes+":00",batchJobScript=["#!/bin/bash -l",`#PBS -N ${jobName}`,`#PBS -l walltime=${wallTimeStr}`,`#PBS -l ${resources.join(":")}`,"","cd $PBS_O_WORKDIR","","echo \"Running job '$PBS_JOBNAME' ($PBS_JOBID) in the following directory: $PWD\"",'echo "Data written to stderr" >&2'],[scriptPath,setScriptPath]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),cmdText="Interactive"===jobType?`qsub${jobParameters.join("")} -l walltime=${wallTimeStr} -l ${resources.join(":")}`:`qsub ${scriptPath||`${jobName}.pbs`}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:["Batch"===jobType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_4__.Z,{children:"Create the batch job script"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:"A job script contains the commands you want to run as part of the job. The script will be saved on the Lyra filesystem."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_InstructionInput__WEBPACK_IMPORTED_MODULE_3__.Z,{label:"Script Path",placeholder:`${jobName}.pbs`,value:scriptPath,onChange:setScriptPath,helperText:"Enter the path where the script will be saved, or leave blank to use the default."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:"Run the following command to create the batch job script:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_output_CommandBox__WEBPACK_IMPORTED_MODULE_2__.Z,{command:[`cat <<'EOF' > ${jobName}.pbs`,...batchJobScript,"EOF",""].join("\n")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:"Run the following command to confirm the contents of the script:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_output_CommandBox__WEBPACK_IMPORTED_MODULE_2__.Z,{command:`cat ${jobName}.pbs`,output:batchJobScript.join("\n")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_4__.Z,{children:"Schedule a job"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:["Run the following command to schedule the ",jobType.toLowerCase()," job:"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_output_CommandBox__WEBPACK_IMPORTED_MODULE_2__.Z,{command:cmdText,output:"{jobId}.pbs"})]})}function JupyterHubStartInstructions(_ref2){let{jobProfile}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_4__.Z,{children:"Schedule a job"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:["From the JupyterHub home page, click ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:"Start My Server"})," to schedule a job."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:["From the list of available options, select the one containing"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:["Lyra - ",jobProfile]})," and click the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:"Start"})," ","button."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_4__.Z,{children:"Waiting Screen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:["You will now enter a waiting screen and see the following message:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:"Your server is starting up."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:"You will be redirected automatically when it's ready for you"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:"Wait for the to be redirected."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigation_TextWithLink__WEBPACK_IMPORTED_MODULE_1__.Z,{textBeforeLink:"It may take up to 10 minutes for your job to be queued and for the server to start. If it fails to start, please raise an incident in the ",link:{href:"https://eresearchqut.atlassian.net/servicedesk/customer/portals",text:"eResearch help centre",color:"blue.500",isExternal:!0},hasExternalIcon:!0,textAfterLink:"."})})]})}function RvdiStartInstructions(_ref3){let machineName,{hardware,os}=_ref3;return machineName="Linux"===os?"Red Hat VDI Medium with GPU":"GPU"===hardware?"eResearch Large with GPU":"eResearch General VDI",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_4__.Z,{children:"Start a session"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_5__.Z,{children:["From the list of machines, select the one named"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.E,{children:machineName})]})]})}function LocalStartInstructions(_ref4){let{_hardware,_os}=_ref4}LyraStartInstructions.__docgenInfo={description:"",methods:[],displayName:"LyraStartInstructions",props:{jobName:{defaultValue:{value:'""',computed:!1},required:!1}}},JupyterHubStartInstructions.__docgenInfo={description:"",methods:[],displayName:"JupyterHubStartInstructions"},RvdiStartInstructions.__docgenInfo={description:"",methods:[],displayName:"RvdiStartInstructions"}},"./src/components/tool/guide/Instructions/TeardownInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>TeardownInstructions});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-W7WUSNWJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-EBIU6VW7.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),_output_CommandBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/output/CommandBox.js"),_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionText.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TeardownInstructions(_ref){let{service,jobType,environment,usingTool=!1}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.xu,{position:"relative",padding:"10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.i,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.u,{bg:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ff)("white","gray.700"),px:"4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.X,{as:"h2",size:"md",my:2,textAlign:"center",children:"Teardown"})})]}),usingTool&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Stop the server"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Once you have finished using the tool, stop the server by pressing"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"Ctrl"})," + ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"C"})," in the terminal."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"It may take up to a minute for the server to cancel any ongoing tasks and shut down."})]}),"Singularity"===environment&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Exit the container"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Exit the container by pressing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"Ctrl"})," + ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"D"}),", or typing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.E,{children:"exit"})," in the terminal."]})]}),"Lyra"===service&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Stop the job"}),"Interactive"===jobType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Stop the job by pressing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"Ctrl"})," + ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"D"}),", or typing"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.E,{children:"exit"})," in the terminal."]}),"Batch"===jobType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"The batch job will stop automatically when the job's script terminates, or the walltime elapses."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"To stop the job early, you need to know your job id. You can either note down your job id when you submit a batch job, or find the job id using the check job status command:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_output_CommandBox__WEBPACK_IMPORTED_MODULE_0__.Z,{command:"qstat -u $USER"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"To stop the job early, run the following command:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_output_CommandBox__WEBPACK_IMPORTED_MODULE_0__.Z,{command:"qdel {job_id}"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Exit the ssh session"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Exit the ssh session on Lyra by pressing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"Ctrl"})," +"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"D"}),", or typing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.E,{children:"exit"})," in the terminal."]}),usingTool&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_InstructionHeading__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Stop port forwarding"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_InstructionText__WEBPACK_IMPORTED_MODULE_2__.Z,{children:["Stop local port forwarding by pressing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"Ctrl"})," +"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.T,{children:"D"}),", or typing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.E,{children:"exit"})," in the terminal window running the port forwarding command."]})]})]})]})}TeardownInstructions.__docgenInfo={description:"",methods:[],displayName:"TeardownInstructions",props:{usingTool:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/tool/guide/Instructions/components/InstructionHeading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InstructionHeading});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstructionHeading(_ref){let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.X,{as:"h3",size:"sm",my:4,children})}InstructionHeading.__docgenInfo={description:"",methods:[],displayName:"InstructionHeading"}},"./src/components/tool/guide/Instructions/components/InstructionText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InstructionText});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InstructionText(_ref){let{children}=_ref;return"string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.x,{my:4,children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{my:4,children})}InstructionText.__docgenInfo={description:"",methods:[],displayName:"InstructionText"}}}]);