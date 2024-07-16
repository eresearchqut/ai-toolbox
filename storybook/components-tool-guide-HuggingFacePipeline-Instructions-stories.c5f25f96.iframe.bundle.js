"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[72],{"./node_modules/@chakra-ui/form-control/dist/chunk-OSN4JR34.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NI:()=>FormControl,NJ:()=>useFormControlContext,Q6:()=>FormHelperText,e:()=>useFormControlStyles});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),[FormControlStylesProvider,useFormControlStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[FormControlProvider,useFormControlContext]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.k)({strict:!1,name:"FormControlContext"});var FormControl=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.G)((function FormControl2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.jC)("Form",props),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.Lr)(props),{getRootProps,htmlProps:_,...context}=function useFormControlProvider(props){const{id:idProp,isRequired,isInvalid,isDisabled,isReadOnly,...htmlProps}=props,uuid=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),id=idProp||`field-${uuid}`,labelId=`${id}-label`,feedbackId=`${id}-feedback`,helpTextId=`${id}-helptext`,[hasFeedbackText,setHasFeedbackText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasHelpText,setHasHelpText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isFocused,setFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),getHelpTextProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({id:helpTextId,...props2,ref:(0,_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardedRef,(node=>{node&&setHasHelpText(!0)}))})),[helpTextId]),getLabelProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:forwardedRef,"data-focus":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isFocused),"data-disabled":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isDisabled),"data-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isInvalid),"data-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isReadOnly),id:void 0!==props2.id?props2.id:labelId,htmlFor:void 0!==props2.htmlFor?props2.htmlFor:id})),[id,isDisabled,isFocused,isInvalid,isReadOnly,labelId]),getErrorMessageProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({id:feedbackId,...props2,ref:(0,_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardedRef,(node=>{node&&setHasFeedbackText(!0)})),"aria-live":"polite"})),[feedbackId]),getRootProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,...htmlProps,ref:forwardedRef,role:"group"})),[htmlProps]),getRequiredIndicatorProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:forwardedRef,role:"presentation","aria-hidden":!0,children:props2.children||"*"})),[]);return{isRequired:!!isRequired,isInvalid:!!isInvalid,isReadOnly:!!isReadOnly,isDisabled:!!isDisabled,isFocused:!!isFocused,onFocus:()=>setFocus(!0),onBlur:()=>setFocus(!1),hasFeedbackText,setHasFeedbackText,hasHelpText,setHasHelpText,id,labelId,feedbackId,helpTextId,htmlProps,getHelpTextProps,getErrorMessageProps,getRootProps,getLabelProps,getRequiredIndicatorProps}}(ownProps),className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-form-control",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormControlProvider,{value:context,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormControlStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__.m.div,{...getRootProps({},ref),className,__css:styles.container})})})}));FormControl.displayName="FormControl";var FormHelperText=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.G)((function FormHelperText2(props,ref){const field=useFormControlContext(),styles=useFormControlStyles(),className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-form__helper-text",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__.m.div,{...null==field?void 0:field.getHelpTextProps(props,ref),__css:styles.helperText,className})}));FormHelperText.displayName="FormHelperText"},"./node_modules/@chakra-ui/form-control/dist/chunk-VLMMX64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useFormControlProps,Y:()=>useFormControl});var _chunk_OSN4JR34_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-OSN4JR34.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");function useFormControl(props){const{isDisabled,isInvalid,isReadOnly,isRequired,...rest}=useFormControlProps(props);return{...rest,disabled:isDisabled,readOnly:isReadOnly,required:isRequired,"aria-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isInvalid),"aria-required":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isRequired),"aria-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isReadOnly)}}function useFormControlProps(props){var _a,_b,_c;const field=(0,_chunk_OSN4JR34_mjs__WEBPACK_IMPORTED_MODULE_1__.NJ)(),{id,disabled,readOnly,required,isRequired,isInvalid,isReadOnly,isDisabled,onFocus,onBlur,...rest}=props,labelIds=props["aria-describedby"]?[props["aria-describedby"]]:[];return(null==field?void 0:field.hasFeedbackText)&&(null==field?void 0:field.isInvalid)&&labelIds.push(field.feedbackId),(null==field?void 0:field.hasHelpText)&&labelIds.push(field.helpTextId),{...rest,"aria-describedby":labelIds.join(" ")||void 0,id:null!=id?id:null==field?void 0:field.id,isDisabled:null!=(_a=null!=disabled?disabled:isDisabled)?_a:null==field?void 0:field.isDisabled,isReadOnly:null!=(_b=null!=readOnly?readOnly:isReadOnly)?_b:null==field?void 0:field.isReadOnly,isRequired:null!=(_c=null!=required?required:isRequired)?_c:null==field?void 0:field.isRequired,isInvalid:null!=isInvalid?isInvalid:null==field?void 0:field.isInvalid,onFocus:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.v0)(null==field?void 0:field.onFocus,onFocus),onBlur:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.v0)(null==field?void 0:field.onBlur,onBlur)}}},"./node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-VLMMX64R.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Input=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Input2(props,ref){const{htmlSize,...rest}=props,styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.jC)("Input",rest),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(rest),input=(0,_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__.Y)(ownProps),_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-input",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.input,{size:htmlSize,...input,__css:styles.field,ref,className:_className})}));Input.displayName="Input",Input.id="Input"},"./node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>InputGroup,m:()=>useInputGroupStyles});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),[InputGroupStylesProvider,useInputGroupStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),InputGroup=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.G)((function InputGroup2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.jC)("Input",props),{children,className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.Lr)(props),_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-input__group",className),groupStyles={},validChildren=(0,_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_7__.W)(children),input=styles.field;validChildren.forEach((child=>{var _a,_b;styles&&(input&&"InputLeftElement"===child.type.id&&(groupStyles.paddingStart=null!=(_a=input.height)?_a:input.h),input&&"InputRightElement"===child.type.id&&(groupStyles.paddingEnd=null!=(_b=input.height)?_b:input.h),"InputRightAddon"===child.type.id&&(groupStyles.borderEndRadius=0),"InputLeftAddon"===child.type.id&&(groupStyles.borderStartRadius=0))}));const clones=validChildren.map((child=>{var _a,_b;const theming=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_8__.o)({size:(null==(_a=child.props)?void 0:_a.size)||props.size,variant:(null==(_b=child.props)?void 0:_b.variant)||props.variant});return"Input"!==child.type.id?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,theming):(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,Object.assign(theming,groupStyles,child.props))}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_9__.m.div,{className:_className,ref,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...styles.group},"data-group":!0,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InputGroupStylesProvider,{value:styles,children:clones})})}));InputGroup.displayName="InputGroup"},"./node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Center,u:()=>AbsoluteCenter});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Center=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},AbsoluteCenter=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})}))},"./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./node_modules/@chakra-ui/layout/dist/chunk-W7WUSNWJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Divider=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Divider2(props,ref){const{borderLeftWidth,borderBottomWidth,borderTopWidth,borderRightWidth,borderWidth,borderStyle,borderColor,...styles}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Divider",props),{className,orientation="horizontal",__css,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),dividerStyles={vertical:{borderLeftWidth:borderLeftWidth||borderRightWidth||borderWidth||"1px",height:"100%"},horizontal:{borderBottomWidth:borderBottomWidth||borderTopWidth||borderWidth||"1px",width:"100%"}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.hr,{ref,"aria-orientation":orientation,...rest,__css:{...styles,border:"0",borderColor,borderStyle,...dividerStyles[orientation],...__css},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-divider",className)})}));Divider.displayName="Divider"},"./src/components/tool/guide/HuggingFacePipeline/Instructions.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LyraGPU:()=>LyraGPU,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Tools/HuggingFacePipeline/HuggingFaceInstructions",component:__webpack_require__("./src/components/tool/guide/HuggingFacePipeline/HuggingFaceInstructions.js").k},LyraGPU={args:{task:"text-generation",model:"bigscience/bloom",config:{service:"Lyra",hardware:"GPU",cpuVendor:"Any",cpuCores:8,ram:32,gpuVendor:"NVIDIA",gpuModel:"A100",gpuModules:8,tool:"CLI",environment:"Singularity"},port:3456},argTypes:{config:{tool:{control:{type:"select",options:["CLI","API"]}}}}};LyraGPU.parameters={...LyraGPU.parameters,docs:{...LyraGPU.parameters?.docs,source:{originalSource:'{\n  args: {\n    task: "text-generation",\n    model: "bigscience/bloom",\n    config: {\n      service: "Lyra",\n      hardware: "GPU",\n      cpuVendor: "Any",\n      cpuCores: 8,\n      ram: 32,\n      gpuVendor: "NVIDIA",\n      gpuModel: "A100",\n      gpuModules: 8,\n      tool: "CLI",\n      environment: "Singularity"\n    },\n    port: 3456\n  },\n  argTypes: {\n    config: {\n      tool: {\n        control: {\n          type: "select",\n          options: ["CLI", "API"]\n        }\n      }\n    }\n  }\n}',...LyraGPU.parameters?.docs?.source}}};const __namedExportsOrder=["LyraGPU"]},"./src/components/tool/guide/HuggingFacePipeline/HuggingFaceInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>HuggingFaceInstructions});var chunk_PULVB27S=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),chunk_W7WUSNWJ=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-W7WUSNWJ.mjs"),chunk_FAWTVNS3=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs"),chunk_UQDW7KKV=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs"),chunk_7OLJDQMT=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),react=__webpack_require__("./node_modules/react/index.js"),useLocalStorageState=__webpack_require__("./src/components/hooks/useLocalStorageState.js"),chunk_LZZHVJFG=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),chunk_K7XRJ7NL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),CopyBox=__webpack_require__("./src/components/output/CopyBox.js"),InstructionHeading=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),InstructionText=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionText.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AccessInstructions(_ref){let{service,port,node,username}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Lyra"===service&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Forward the port"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"In a new terminal window, run the following command to forward traffic from the server to your local machine:"}),""===username&&(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsxs)("i",{children:["Replace ",(0,jsx_runtime.jsx)(chunk_LZZHVJFG.E,{children:"qutusername"})," with your QUT username."]})}),""===node&&(0,jsx_runtime.jsx)(InstructionText.Z,{children:(0,jsx_runtime.jsxs)("i",{children:["Replace ",(0,jsx_runtime.jsx)(chunk_LZZHVJFG.E,{children:"node"})," with the name of the node the job is running on."]})}),(0,jsx_runtime.jsxs)(CopyBox.Z,{children:["ssh -L ",port,":",node||"node",":",port," ",username||"qutusername","@lyra.qut.edu.au"]})]}),(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Access the tool"}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["In your web browser, navigate to the following address:"," ",(0,jsx_runtime.jsxs)(chunk_K7XRJ7NL.r,{href:`http://localhost:${port}`,isExternal:!0,color:"blue.500",children:["http://localhost:",port]})]}),(0,jsx_runtime.jsxs)(CopyBox.Z,{children:["http://localhost:",port]})]})}AccessInstructions.__docgenInfo={description:"",methods:[],displayName:"AccessInstructions"};var ConnectInstructions=__webpack_require__("./src/components/tool/guide/Instructions/ConnectInstructions.js"),InstallInstructions=__webpack_require__("./src/components/tool/guide/Instructions/InstallInstructions.js"),InstructionInput=__webpack_require__("./src/components/tool/guide/Instructions/InstructionInput.js");function RunInstructions(_ref){let{service,tool,task,model,port}=_ref;const isWorkstation=["rVDI","Local"].includes(service);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Run the gradio server"}),"CLI"===tool&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Start the gradio server:"}),(0,jsx_runtime.jsxs)(CopyBox.Z,{children:["gradio pipeline ",task," --model=",model," ",'--server-name="0.0.0.0" --server-port=',port," ",'--device-map="auto"']})]}),"Script"===tool&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["Save the following to a file named ",(0,jsx_runtime.jsx)(chunk_LZZHVJFG.E,{children:"hf_pipeline.py"})]}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:`import gradio\nimport transformers\nimport sys\n\nTASK = "${task}"\nMODEL = "${model}"\nPORT = int(sys.argv[1])\n\nprint(f"Starting: {TASK=} {MODEL=} {PORT=}", file=sys.stderr)\nprint("Please wait while the model loads into memory...", file=sys.stderr)\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Run the script:"}),(0,jsx_runtime.jsxs)(CopyBox.Z,{children:["python hf_pipeline.py ",port]})]}),"Notebook"===tool&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isWorkstation&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Run the following command to start the server:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"python -m jupyterlab"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Open the link to the jupyter server in your browser, and create a new notebook."})]}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Execute the following code in the notebook:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:`import gradio\nimport transformers\n\nTASK = "${task}"\nMODEL = "${model}"\nPORT = ${port}\n\npipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")\ninterface = gradio.Interface.from_pipeline(pipeline)\ninterface.launch(server_name="0.0.0.0", server_port=PORT)\n`})]})]})}RunInstructions.__docgenInfo={description:"",methods:[],displayName:"RunInstructions"};var StartInstructions=__webpack_require__("./src/components/tool/guide/Instructions/StartInstructions.js"),TeardownInstructions=__webpack_require__("./src/components/tool/guide/Instructions/TeardownInstructions.js");const TEXT_PATTERN=/^[a-z0-9]*$/;function HuggingFaceInstructions(_ref){let{task,model,config,port}=_ref;const[username,setUsername]=(0,useLocalStorageState.Z)("qutUsername","qutusername"),[node,setNode]=(0,react.useState)("");return(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{children:["Lyra"===config.service&&(0,jsx_runtime.jsx)(InstructionInput.Z,{label:"QUT Username",placeholder:"username",value:username,onChange:setUsername,pattern:TEXT_PATTERN,helperText:"Optionally enter your QUT username so that it can be pre-populated in the commands below.",errorText:"Username must only contain lowercase letters and numbers"}),(0,jsx_runtime.jsx)(ConnectInstructions.s,{service:config.service,username}),"Lyra"===config.service&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StartInstructions.Wh,{jobType:"Interactive",hardware:config.hardware,cpuVendor:config.cpuVendor,cpuModel:config.cpuModel,cpuCores:config.cpuCores,ram:config.ram,gpuVendor:config.gpuVendor,gpuModel:config.gpuModel,gpuModules:config.gpuModules,wallTime:config.wallTime,isArrayJob:config.isArrayJob,jobInstances:config.jobInstances}),(0,jsx_runtime.jsx)(InstructionInput.Z,{label:"Node name",placeholder:"node",value:node,onChange:setNode,pattern:TEXT_PATTERN,helperText:"Optionally enter the name of the node so that it can be pre-populated in the commands below.",errorText:"Node name must only contain lowercase letters and numbers"})]}),"JupyterHub"===config.service&&(0,jsx_runtime.jsx)(StartInstructions.CJ,{jobProfile:config.jobProfile}),"rVDI"===config.service&&(0,jsx_runtime.jsx)(StartInstructions.HW,{hardware:config.hardware,os:config.os}),"Local"===config.service&&(0,jsx_runtime.jsx)(StartInstructions.Bc,{hardware:config.hardware,os:config.os}),(0,jsx_runtime.jsx)(InstallInstructions._,{hardware:config.hardware,gpuVendor:config.gpuVendor,service:config.service,tool:config.tool,environment:config.environment}),(0,jsx_runtime.jsx)(RunInstructions,{service:config.service,tool:config.tool,task,model,port}),(0,jsx_runtime.jsx)(AccessInstructions,{service:config.service,port,node,username}),(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{position:"relative",padding:"10",children:[(0,jsx_runtime.jsx)(chunk_W7WUSNWJ.i,{}),(0,jsx_runtime.jsx)(chunk_FAWTVNS3.u,{bg:(0,chunk_UQDW7KKV.ff)("white","gray.700"),px:"4",children:(0,jsx_runtime.jsx)(chunk_7OLJDQMT.X,{as:"h2",size:"md",my:4,children:"Teardown steps"})})]}),(0,jsx_runtime.jsx)(TeardownInstructions.v,{service:config.service,environment:config.environment,usingTool:!0})]})}HuggingFaceInstructions.displayName="HuggingFaceInstructions",HuggingFaceInstructions.__docgenInfo={description:"",methods:[],displayName:"HuggingFaceInstructions"}},"./src/components/tool/guide/Instructions/InstallInstructions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>InstallInstructions});var chunk_K7XRJ7NL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),chunk_GTRZJDIL=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-GTRZJDIL.mjs"),chunk_BXDFYXZJ=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-BXDFYXZJ.mjs"),chunk_IAXSQ4X2=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-IAXSQ4X2.mjs"),chunk_4YMKQ5D4=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-4YMKQ5D4.mjs"),chunk_KGTDXOFZ=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-KGTDXOFZ.mjs"),chunk_3KCBMPN5=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),chunk_ALC6QPCI=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs"),CopyBox=__webpack_require__("./src/components/output/CopyBox.js"),InstructionHeading=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionHeading.js"),InstructionText=__webpack_require__("./src/components/tool/guide/Instructions/components/InstructionText.js");function singularityContainerName(hardware,gpuVendor){let containerName="hf_pipeline.sif";return"GPU"===hardware?"NVIDIA"===gpuVendor?containerName="hf_pipeline_nvidia.sif":"AMD"===gpuVendor&&(containerName="hf_pipeline_amd.sif"):"CPU"===hardware&&(containerName="hf_pipeline_cpu.sif"),containerName}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SingularityBuildInstructions(_ref){let{hardware,gpuVendor}=_ref;const containerName=singularityContainerName(hardware,gpuVendor);let containerTag="cpu";return"GPU"===hardware&&("NVIDIA"===gpuVendor?containerTag="nvidia":"AMD"===gpuVendor&&(containerTag="amd")),(0,jsx_runtime.jsxs)(CopyBox.Z,{children:["singularity build ",containerName," ","docker://ghcr.io/eresearchqut/ai-toolbox/hf_pipeline:",containerTag]})}function SingularityRunInstructions(_ref2){let{hardware,gpuVendor,service}=_ref2;const args=[];"GPU"===hardware&&args.push("--nv"),"Lyra"===service&&args.push("--bind /:/lyra","--bind /work:/work","--contain","--cleanenv");const argsString=args.length>0?args.join(" ")+" ":"",containerLocation="Lyra"===service?"/work/ai-toolbox/containers/":"";let containerName=singularityContainerName(hardware,gpuVendor);return(0,jsx_runtime.jsxs)(CopyBox.Z,{children:["singularity run ",argsString,containerLocation,containerName," bash"]})}function InstallInstructions(_ref3){let{hardware,gpuVendor,service,environment,tool}=_ref3;const isWorkstation=["rVDI","Local"].includes(service),isWorkstationNotebook=isWorkstation&&"Notebook"===tool;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Singularity"===environment&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isWorkstation&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Install Singularity (if it has not been installed)"}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["Follow the instructions"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://sylabs.io/docs/",isExternal:!0,color:"blue.500",children:"here"})," ","to install singularity."]}),(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Set up the container"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Build the container:"}),(0,jsx_runtime.jsx)(SingularityBuildInstructions,{hardware,gpuVendor})]}),"Lyra"===service&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Set up the container"})}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Run the container:"}),(0,jsx_runtime.jsx)(SingularityRunInstructions,{hardware,gpuVendor,service})]}),"Conda"===environment&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["JupyterHub"!==service&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Install Conda (if it has not been installed)"}),(0,jsx_runtime.jsxs)(chunk_GTRZJDIL.m,{children:[(0,jsx_runtime.jsxs)(chunk_BXDFYXZJ.t,{children:[(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"mamba"}),(0,jsx_runtime.jsx)(chunk_IAXSQ4X2.O,{children:"conda"})]}),(0,jsx_runtime.jsxs)(chunk_4YMKQ5D4.n,{children:[(0,jsx_runtime.jsxs)(chunk_KGTDXOFZ.x,{children:[(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Download the latest version of micromamba"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"wget https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Run the installer and follow the prompts to install micromamba:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"bash install.sh -p ~/micromamba"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Create an alias for micromamba"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:'echo "alias conda=micromamba" >> ~/.bashrc'}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Refresh the shell:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"source ~/.bashrc"})]}),(0,jsx_runtime.jsxs)(chunk_KGTDXOFZ.x,{children:[(0,jsx_runtime.jsxs)(chunk_3KCBMPN5.b,{status:"warning",children:[(0,jsx_runtime.jsx)(chunk_ALC6QPCI.z,{}),"Packages take a long time to install with conda. We recommend using mamba instead."]}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Download the latest version of miniconda:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Run the installer and follow the prompts to install conda:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"bash Miniconda3-latest-Linux-x86_64.sh"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Refresh the shell:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"source ~/.bashrc"})]})]})]})]}),(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Set up the conda environment"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Create the conda environment (if it doesn't exist):"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"conda create --name hf"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Activate the conda environment:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"conda activate hf"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Install the transformers package:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"conda install -c huggingface -c conda-forge transformers"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Install pytorch:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision torchaudio pytorch-cuda=12.1"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Install the gradio package:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"conda install -c conda-forge gradio"}),isWorkstationNotebook&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Install JupyterLab:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"conda install -c conda-forge jupyterlab"})]})]}),"venv"===environment&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isWorkstation&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Install Python (if it has not been installed)"}),(0,jsx_runtime.jsxs)(InstructionText.Z,{children:["Follow the instructions"," ",(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:"https://www.python.org/downloads/",isExternal:!0,color:"blue.500",children:"here"})," ","to install python."]})]}),"Lyra"===service&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Python module"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Source the module script:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"source /etc/profile.d/modules.sh"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Load the python module:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"module load python/3.10.8-gcccore-12.2.0-bare"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Check the python version"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"python --version"})]}),(0,jsx_runtime.jsx)(InstructionHeading.Z,{children:"Set up the virtual environment"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Create the virtual environment (if it doesn't exist):"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"python -m venv hf-venv"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Activate the virtual environment:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"source hf-venv/bin/activate"}),(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Install the base dependencies:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"pip install gradio 'transformers[torch]'"}),isWorkstationNotebook&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InstructionText.Z,{children:"Install JupyterLab:"}),(0,jsx_runtime.jsx)(CopyBox.Z,{children:"pip install jupyterlab"})]})]})]})}SingularityBuildInstructions.displayName="SingularityBuildInstructions",SingularityRunInstructions.displayName="SingularityRunInstructions",InstallInstructions.__docgenInfo={description:"",methods:[],displayName:"InstallInstructions"}}}]);