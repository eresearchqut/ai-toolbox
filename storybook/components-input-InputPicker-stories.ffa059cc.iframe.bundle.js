"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[963],{"./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),[ButtonGroupProvider,useButtonGroup]=(0,dist.k)({strict:!1,name:"ButtonGroupContext"}),chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ButtonIcon(props){const{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=(0,shared_utils_dist.cx)("chakra-button__icon",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className,children:_children})}ButtonIcon.displayName="ButtonIcon";var chunk_5PH6ULNP=__webpack_require__("./node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs");function ButtonSpinner(props){const{label,placement,spacing="0.5rem",children=(0,jsx_runtime.jsx)(chunk_5PH6ULNP.$,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=(0,shared_utils_dist.cx)("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)((()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css})),[__css,label,marginProp,spacing]);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:_className,...rest,__css:spinnerStyles,children})}ButtonSpinner.displayName="ButtonSpinner";var react_use_merge_refs_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),Button=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const group=useButtonGroup(),styles=(0,chunk_DMO4EI7P.mq)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,styled_system_dist.Lr)(props),buttonStyles=(0,react.useMemo)((()=>{const _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}}),[styles,group]),{ref:_ref,type:defaultType}=function useButtonType(value){const[isButton,setIsButton]=(0,react.useState)(!value);return{ref:(0,react.useCallback)((node=>{node&&setIsButton("BUTTON"===node.tagName)}),[]),type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return(0,jsx_runtime.jsxs)(chunk_ZHQNHOQS.m.button,{ref:(0,react_use_merge_refs_dist.qq)(ref,_ref),as,type:null!=type?type:defaultType,"data-active":(0,shared_utils_dist.PB)(isActive),"data-loading":(0,shared_utils_dist.PB)(isLoading),__css:buttonStyles,className:(0,shared_utils_dist.cx)("chakra-button",className),...rest,disabled:isDisabled||isLoading,children:[isLoading&&"start"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing,children:spinner}),isLoading?loadingText||(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{opacity:0,children:(0,jsx_runtime.jsx)(ButtonContent,{...contentProps})}):(0,jsx_runtime.jsx)(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing,children:spinner})]})}));function ButtonContent(props){const{leftIcon,rightIcon,children,iconSpacing}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leftIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginEnd:iconSpacing,children:leftIcon}),children,rightIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginStart:iconSpacing,children:rightIcon})]})}Button.displayName="Button"},"./node_modules/@chakra-ui/card/dist/chunk-2EW3JUUD.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>CardHeader});var _chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CardHeader=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function CardHeader2(props,ref){const{className,...rest}=props,styles=(0,_chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_2__.v)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-card__header",className),__css:styles.header,...rest})}))},"./node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>CardBody});var _chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CardBody=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function CardBody2(props,ref){const{className,...rest}=props,styles=(0,_chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_2__.v)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-card__body",className),__css:styles.body,...rest})}))},"./node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardStylesProvider,v:()=>useCardStyles});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-MFVQSVQB.mjs"),[CardStylesProvider,useCardStyles]=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.eC)("Card")},"./node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var _chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Card=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Card2(props,ref){const{className,children,direction="column",justify,align,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.Lr)(props),styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("Card",props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-card",className),__css:{display:"flex",flexDirection:direction,justifyContent:justify,alignItems:align,position:"relative",minWidth:0,wordWrap:"break-word",...styles.container},...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_6__.Y,{value:styles,children})})}))},"./node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>chunk_QINAG4RG_Image});var chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),NativeImage=(0,chunk_ZJJGQIVY.G)((function NativeImage2(props,ref){const{htmlWidth,htmlHeight,alt,...rest}=props;return(0,jsx_runtime.jsx)("img",{width:htmlWidth,height:htmlHeight,ref,alt,...rest})}));NativeImage.displayName="NativeImage";var dist=__webpack_require__("./node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js");var chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs");function omit(object,keysToOmit=[]){const clone=Object.assign({},object);for(const key of keysToOmit)key in clone&&delete clone[key];return clone}var chunk_QINAG4RG_Image=(0,chunk_ZJJGQIVY.G)((function Image2(props,ref){const{fallbackSrc,fallback,src,srcSet,align,fit,loading,ignoreFallback,crossOrigin,fallbackStrategy="beforeLoadOrError",referrerPolicy,...rest}=props,shouldIgnoreFallbackImage=null!=loading||ignoreFallback||!(void 0!==fallbackSrc||void 0!==fallback),status=function useImage(props){const{loading,src,srcSet,onLoad,onError,crossOrigin,sizes,ignoreFallback}=props,[status,setStatus]=(0,react.useState)("pending");(0,react.useEffect)((()=>{setStatus(src?"loading":"pending")}),[src]);const imageRef=(0,react.useRef)(),load=(0,react.useCallback)((()=>{if(!src)return;flush();const img=new Image;img.src=src,crossOrigin&&(img.crossOrigin=crossOrigin),srcSet&&(img.srcset=srcSet),sizes&&(img.sizes=sizes),loading&&(img.loading=loading),img.onload=event=>{flush(),setStatus("loaded"),null==onLoad||onLoad(event)},img.onerror=error=>{flush(),setStatus("failed"),null==onError||onError(error)},imageRef.current=img}),[src,crossOrigin,srcSet,sizes,onLoad,onError,loading]),flush=()=>{imageRef.current&&(imageRef.current.onload=null,imageRef.current.onerror=null,imageRef.current=null)};return(0,dist.G)((()=>{if(!ignoreFallback)return"loading"===status&&load(),()=>{flush()}}),[status,load,ignoreFallback]),ignoreFallback?"loaded":status}({...props,crossOrigin,ignoreFallback:shouldIgnoreFallbackImage}),showFallbackImage=((status,fallbackStrategy)=>"loaded"!==status&&"beforeLoadOrError"===fallbackStrategy||"failed"===status&&"onError"===fallbackStrategy)(status,fallbackStrategy),shared={ref,objectFit:fit,objectPosition:align,...shouldIgnoreFallbackImage?rest:omit(rest,["onError","onLoad"])};return showFallbackImage?fallback||(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.img,{as:NativeImage,className:"chakra-image__placeholder",src:fallbackSrc,...shared}):(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.img,{as:NativeImage,src,srcSet,crossOrigin,loading,referrerPolicy,className:"chakra-image",...shared})}));chunk_QINAG4RG_Image.displayName="Image"},"./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Heading=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Heading2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Heading",props),{className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.h2,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading",props.className),...rest,__css:styles})}));Heading.displayName="Heading"},"./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Link=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Link2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Link",props),{className,isExternal,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.a,{target:isExternal?"_blank":void 0,rel:isExternal?"noopener":void 0,ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-link",className),...rest,__css:styles})}));Link.displayName="Link"},"./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./src/components/input/InputPicker.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HuggingFace:()=>HuggingFace,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/preview-api"),_InputPicker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/input/InputPicker.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/InputPicker",component:_InputPicker__WEBPACK_IMPORTED_MODULE_1__.Z,decorators:[Story=>{const[args,setArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useArgs)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{args:{...args,onChange:value=>{setArgs({value})}}})}]},Simple={args:{choices:["Option A","Option B"],value:"Option B"}},HuggingFace={args:{choices:[["Lyra","QUT's HPC cluster"],["JupyterHub","JupyterHub on QUT's HPC cluster"],["rVDI","Research Virtual Desktop Infrastructure managed by QUT"],["Local","Your own workstation"]],value:"rVDI"}};Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:'{\n  args: {\n    choices: ["Option A", "Option B"],\n    value: "Option B"\n  }\n}',...Simple.parameters?.docs?.source}}},HuggingFace.parameters={...HuggingFace.parameters,docs:{...HuggingFace.parameters?.docs,source:{originalSource:'{\n  args: {\n    choices: [["Lyra", "QUT\'s HPC cluster"], ["JupyterHub", "JupyterHub on QUT\'s HPC cluster"], ["rVDI", "Research Virtual Desktop Infrastructure managed by QUT"], ["Local", "Your own workstation"]],\n    value: "rVDI"\n  }\n}',...HuggingFace.parameters?.docs?.source}}};const __namedExportsOrder=["Simple","HuggingFace"]},"./src/components/input/InputPicker.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InputPicker});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-KICXRNWJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),_tool_guide_Guide__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/tool/guide/Guide.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputPicker(_ref){let{choices,value,onChange=()=>{}}=_ref;const{colorScheme}=(0,_tool_guide_Guide__WEBPACK_IMPORTED_MODULE_0__.Q5)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.k,{flexGrow:"1",children:choices.map((choice=>{const{label,description}=Array.isArray(choice)?{label:choice[0],description:choice[1]}:{label:choice,description:""},selected=label===value;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.u,{label:description,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.z,{flex:"1",variant:selected?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>onChange(label),colorScheme:selected?colorScheme:"gray",children:label})},label)}))})}InputPicker.displayName="InputPicker",InputPicker.__docgenInfo={description:"",methods:[],displayName:"InputPicker",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"./src/components/tool/guide/Guide.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DN:()=>GuideHeader,Q5:()=>useGuideContext,fD:()=>Guide});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-2EW3JUUD.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function GuideHeader(_ref){let{title,subtitle,logo,alt,link}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.r,{href:link,isExternal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.E,{float:"left",verticalAlign:"middle",src:logo,alt,display:"inline",height:"30px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.X,{as:"h3",size:"xs",mt:4,children:subtitle})]})}GuideHeader.displayName="GuideHeader";const GuideContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({colorScheme:"teal",pickerTextColor:"white",pickerTextShadow:"1px 1px 1px black"}),useGuideContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GuideContext),GuideProvider=_ref2=>{let{children,...props}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GuideContext.Provider,{value:{...props},children})};function Guide(_ref3){let{colorScheme,header,body}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GuideProvider,{colorScheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Z,{children:[header&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.O,{children:header}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.e,{children:body})]})})}GuideProvider.displayName="GuideProvider",Guide.displayName="Guide",GuideHeader.__docgenInfo={description:"",methods:[],displayName:"GuideHeader"},Guide.__docgenInfo={description:"",methods:[],displayName:"Guide"}}}]);