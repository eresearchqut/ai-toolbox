"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[515],{"./src/components/tool/HuggingFacePipeline/HuggingFacePipeline.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutomaticSpeechRecognition:()=>AutomaticSpeechRecognition,ImageClassification:()=>ImageClassification,ObjectDetection:()=>ObjectDetection,TextGeneration:()=>TextGeneration,TextGenerationPresets:()=>TextGenerationPresets,TextToImage:()=>TextToImage,TextToSpeech:()=>TextToSpeech,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HuggingFacePipeline_stories});var react=__webpack_require__("./node_modules/react/index.js"),chunk_7OLJDQMT=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),chunk_QCAXGLVH=__webpack_require__("./node_modules/@chakra-ui/accordion/dist/chunk-QCAXGLVH.mjs"),chunk_YI3ICT2T=__webpack_require__("./node_modules/@chakra-ui/accordion/dist/chunk-YI3ICT2T.mjs"),chunk_PULVB27S=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),chunk_2OOHT3W5=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),chunk_UVUR7MCU=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),chunk_YQO7BFFX=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs"),chunk_2EW3JUUD=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-2EW3JUUD.mjs"),chunk_K7XRJ7NL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),chunk_QINAG4RG=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs"),chunk_FHHZMTWR=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs"),chunk_CRBMUVJA=__webpack_require__("./node_modules/@chakra-ui/accordion/dist/chunk-CRBMUVJA.mjs"),chunk_JQ2DNXQ3=__webpack_require__("./node_modules/@chakra-ui/accordion/dist/chunk-JQ2DNXQ3.mjs"),chunk_5VAIMVHT=__webpack_require__("./node_modules/@chakra-ui/accordion/dist/chunk-5VAIMVHT.mjs"),chunk_XEKRR764=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-XEKRR764.mjs");const hf_logo_namespaceObject=__webpack_require__.p+"static/media/hf-logo.6fd51d26.png";var chunk_FKYN3ZGE=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs"),chunk_2ZHRCML3=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-2ZHRCML3.mjs"),chunk_BZDCPGYF=__webpack_require__("./node_modules/@chakra-ui/progress/dist/chunk-BZDCPGYF.mjs"),chunk_OA6OURRG=__webpack_require__("./node_modules/@chakra-ui/table/dist/chunk-OA6OURRG.mjs"),chunk_GEJVU65N=__webpack_require__("./node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),chunk_J4QO5GAJ=__webpack_require__("./node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs"),chunk_GIQFRSD6=__webpack_require__("./node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs"),chunk_MGVPL3OH=__webpack_require__("./node_modules/@chakra-ui/table/dist/chunk-MGVPL3OH.mjs"),chunk_T2WCTPDH=__webpack_require__("./node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs"),chunk_KICXRNWJ=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-KICXRNWJ.mjs"),chunk_KRPLQIP4=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),chunk_RPO2WXNL=__webpack_require__("./node_modules/@chakra-ui/tag/dist/chunk-RPO2WXNL.mjs"),chunk_3KCBMPN5=__webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),chunk_BTVB6U66=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-BTVB6U66.mjs"),chunk_6UX5C75U=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-6UX5C75U.mjs");function useData(_ref){let{url,params={},condition=!0,cache="force-cache",debounceTime=0}=_ref;const[data,setData]=(0,react.useState)(null),[error,setError]=(0,react.useState)(null),[loading,setLoading]=(0,react.useState)(condition),baseUrl=new URL(url);baseUrl.search=new URLSearchParams(params).toString();const fetchUrl=baseUrl.toString();return(0,react.useEffect)((()=>{const abortController=new AbortController,{signal}=abortController;if(!condition)return abortController.abort(),void setLoading(!1);setLoading(!0);const debounceFetch=setTimeout((()=>fetch(fetchUrl,{signal,cache}).then((res=>res.json())).then((result=>{signal.aborted||(setData(result),setError(null),setLoading(!1))})).catch((err=>{signal.aborted||(setError(err),setLoading(!1))}))),debounceTime);return()=>{clearTimeout(debounceFetch),abortController.abort()}}),[fetchUrl,condition]),{data,error,loading}}var index_es=__webpack_require__("./node_modules/@choc-ui/chakra-autocomplete/dist/index.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ModelAutoComplete(_ref){let{model,onModelChange,models}=_ref;return(0,jsx_runtime.jsxs)(index_es.Qc,{openOnFocus:!0,creatable:!0,onChange:onModelChange,suggestWhenEmpty:!0,children:[(0,jsx_runtime.jsxs)(chunk_FKYN3ZGE.B,{children:[(0,jsx_runtime.jsx)(index_es.Vp,{placeholder:"Search for a model",variant:"filled",value:model,onChange:e=>onModelChange(e.target.value)}),model&&(0,jsx_runtime.jsx)(chunk_2ZHRCML3.x,{children:(0,jsx_runtime.jsx)(chunk_UVUR7MCU.z,{size:"xs",onClick:()=>onModelChange(""),children:(0,jsx_runtime.jsx)(chunk_BTVB6U66.T,{})})})]}),(0,jsx_runtime.jsxs)(index_es.Jm,{children:[models.map((model=>(0,jsx_runtime.jsx)(index_es.Gb,{value:model.id,children:model.id},model.id))),(0,jsx_runtime.jsx)(index_es.JU,{children:_ref2=>{let{value}=_ref2;return(0,jsx_runtime.jsxs)("span",{children:["Use custom '",value,"' model"]})}})]})]})}ModelAutoComplete.displayName="ModelAutoComplete";const formatNumber=n=>Intl.NumberFormat(navigator.language,{notation:"compact",maximumFractionDigits:1}).format(n),MODEL_FORMATS={F32:["Single Precision Floating Point",32],F16:["Half Precision Floating Point",16],BF16:["Brain Floating Point",16],I8:["Integer",8],I4:["Integer",4]},formatModelParameters=modelParameters=>Object.entries(modelParameters).map((_ref3=>{let[precision,value]=_ref3;const[name,bits]=MODEL_FORMATS[precision];return`${formatNumber(value)} ${name} (${bits} bits)`})).join(", "),formatModelMinSize=modelParameters=>`${formatNumber(Object.entries(modelParameters).reduce(((acc,_ref4)=>{let[precision,value]=_ref4;const[,bits]=MODEL_FORMATS[precision];return acc+value*bits}),0)/8589934592)} GB`;function ModelDetails(_ref5){let{model,knownModelData,modelData,modelLoading}=_ref5;return modelLoading?(0,jsx_runtime.jsx)(chunk_BZDCPGYF.E,{colorScheme:"yellow",isIndeterminate:!0}):model&&(knownModelData?.id||modelData?.id)?(0,jsx_runtime.jsx)(chunk_OA6OURRG.x,{children:(0,jsx_runtime.jsx)(chunk_GEJVU65N.i,{variant:"simple",size:"sm",children:(0,jsx_runtime.jsxs)(chunk_J4QO5GAJ.p,{children:[(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"Link"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:(0,jsx_runtime.jsxs)(chunk_K7XRJ7NL.r,{href:`https://hf.co/${model}`,isExternal:!0,children:[`hf.co/${model}`,(0,jsx_runtime.jsx)(chunk_6UX5C75U.h,{marginLeft:1})]})})]}),modelData?.lastModified&&(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"Last Modified"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:new Date(modelData.lastModified).toLocaleString()})]}),(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"Likes"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:formatNumber(modelData?.likes??knownModelData?.likes)})]}),(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"Downloads"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:formatNumber(modelData?.downloads??knownModelData?.downloads)})]}),modelData?.cardData?.license&&(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"License"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:modelData.cardData.license})]}),modelData?.safetensors?.parameters&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"Parameters"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:formatModelParameters(modelData.safetensors.parameters)})]}),(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:(0,jsx_runtime.jsx)(chunk_KICXRNWJ.u,{label:"Minimum size of the model in memory according to an approximate calculation. Does not include memory required for inference.",children:(0,jsx_runtime.jsx)("span",{children:"Minimum Size"})})}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:formatModelMinSize(modelData.safetensors.parameters)})]})]}),(modelData?.tags??knownModelData?.tags)&&(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"Tags"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:(0,jsx_runtime.jsx)(chunk_KRPLQIP4.k,{gap:2,flexWrap:"wrap",children:(modelData?.tags??knownModelData?.tags).map((tag=>(0,jsx_runtime.jsx)(chunk_RPO2WXNL.Vp,{size:"md",children:(0,jsx_runtime.jsx)(chunk_K7XRJ7NL.r,{href:`https://huggingface.co/models?other=${tag}`,isExternal:!0,children:tag})},tag)))})})]}),modelData?.config?.architectures&&(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"Architectures"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:(0,jsx_runtime.jsx)(chunk_KRPLQIP4.k,{gap:2,flexWrap:"wrap",children:modelData.config.architectures.map((architecture=>(0,jsx_runtime.jsx)(chunk_RPO2WXNL.Vp,{size:"md",children:architecture},architecture)))})})]}),modelData?.library_name&&(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"Library"}),(0,jsx_runtime.jsx)(chunk_T2WCTPDH.Td,{children:modelData.library_name})]}),modelData?.cardData?.co2_eq_emissions&&(0,jsx_runtime.jsxs)(chunk_GIQFRSD6.Tr,{children:[(0,jsx_runtime.jsx)(chunk_MGVPL3OH.Th,{children:"CO2 Emissions"}),(0,jsx_runtime.jsxs)(chunk_T2WCTPDH.Td,{children:[formatNumber(modelData.cardData.co2_eq_emissions.emissions/1e3)," kg"]})]})]})})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})}function Model(_ref6){let{model,onModelChange,task}=_ref6;const{data:modelsData,error:modelsError,loading:modelsLoading}=useData({url:"https://huggingface.co/api/models",params:{pipeline_tag:task,sort:"likes",limit:1e3,direction:-1}}),{data:modelData,loading:modelLoading}=useData({url:`https://huggingface.co/api/models/${model}`,condition:""!==model,debounceTime:500}),models=modelsData??[],knownModel=models.find((model=>model.id===model));return modelsError?(0,jsx_runtime.jsxs)(chunk_3KCBMPN5.b,{status:"error",children:["Error retrieving models: ",modelsError.message]}):modelsLoading?(0,jsx_runtime.jsx)(chunk_BZDCPGYF.E,{colorScheme:"yellow",isIndeterminate:!0}):(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{children:[(0,jsx_runtime.jsx)(ModelAutoComplete,{model,onModelChange,models}),(0,jsx_runtime.jsx)(ModelDetails,{model,knownModelData:knownModel,modelData,modelLoading})]})}Model.displayName="Model",Model.__docgenInfo={description:"",methods:[],displayName:"Model"};var Instructions=__webpack_require__("./src/components/tool/HuggingFacePipeline/Instructions/Instructions.js"),chunk_IWV6Y2ZN=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-IWV6Y2ZN.mjs"),chunk_TN2QQVDX=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-TN2QQVDX.mjs"),InputPicker=__webpack_require__("./src/components/input/InputPicker.js"),InputSlider=__webpack_require__("./src/components/input/InputSlider.js");function ConfigGroup(_ref){let{title,description,type,selected,inputProps}=_ref;return(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:(0,jsx_runtime.jsxs)(chunk_KRPLQIP4.k,{align:"center",children:[(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{w:"120px",children:[selected?(0,jsx_runtime.jsx)(chunk_IWV6Y2ZN.r,{color:"green.500"}):(0,jsx_runtime.jsx)(chunk_KICXRNWJ.u,{label:"Pick an option",children:(0,jsx_runtime.jsx)(chunk_TN2QQVDX.a,{color:"orange.500"})}),(0,jsx_runtime.jsx)(chunk_KICXRNWJ.u,{label:description,placement:"top",hasArrow:!0,children:(0,jsx_runtime.jsx)(chunk_7OLJDQMT.X,{size:"xs",mb:"0",display:"inline",ml:"2",children:title})})]}),(0,jsx_runtime.jsx)(chunk_PULVB27S.bK,{size:"10px"}),"picker"===type&&(0,jsx_runtime.jsx)(InputPicker.Z,{...inputProps}),"slider"===type&&(0,jsx_runtime.jsx)(InputSlider.Z,{...inputProps})]})})}ConfigGroup.displayName="ConfigGroup";const isValidChoice=(choices,value)=>0!==choices.length&&(Array.isArray(choices[0])?choices.map((c=>c[0])).includes(value):choices.includes(value));function getConfigGroups(config,onConfigChange){void 0===onConfigChange&&(onConfigChange=()=>{});const onChange=key=>value=>onConfigChange({...config,[key]:value}),isLyra=config=>"Lyra"===config?.service,isWorkstation=config=>["rVDI","Local"].includes(config?.service),isGPU=config=>"GPU"===config?.hardware;return{service:()=>{const services=[["Lyra","QUT's HPC cluster"],["JupyterHub","Jupyter notebooks on QUT's HPC cluster"],["rVDI","QUT's Research Virtual Desktop Infrastructure"],["Local","Your own workstation"]];return{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"Service",description:"The service to use for running the model.",type:"picker",selected,inputProps:{choices:services,value:config?.service,onChange:onChange("service")}},key),show:config=>!0,selected:config=>isValidChoice(services,config?.service)}},os:()=>{let operatingSystems;return operatingSystems="rVDI"===config?.service?["Linux","Windows"]:"Local"===config?.service?["Linux","macOS","Windows"]:["Linux"],{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"OS",description:"The operating system to use for running the model.",type:"picker",selected,inputProps:{choices:operatingSystems,value:config?.os,onChange:onChange("os")}},key),show:config=>isWorkstation(config),selected:config=>isValidChoice(operatingSystems,config?.os)}},hardware:()=>{let hardware;return hardware=isLyra(config)?[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"],["IPU","Accelerated IPU from Graphcore"]]:[["CPU","Un-accelerated. Quick to queue, slow to run."],["GPU","Accelerated GPU (recommended)"]],{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"Hardware",description:"The hardware to use for running the model.",type:"picker",selected,inputProps:{choices:hardware,value:config?.hardware,onChange:onChange("hardware")}},key),show:config=>config?.service,selected:config=>isValidChoice(hardware,config?.hardware)}},cpuVendor:()=>{const cpuVendors=["Any","AMD","Intel"];return{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"CPU Vendor",type:"picker",selected,inputProps:{choices:cpuVendors,value:config?.cpuVendor,onChange:onChange("cpuVendor")}},key),show:config=>isLyra(config),selected:config=>isValidChoice(cpuVendors,config?.cpuVendor)}},cpuModel:()=>{let cpuModels=[];return"AMD"===config?.cpuVendor?cpuModels=["7702","7713","75F3"]:"Intel"===config?.cpuVendor&&(cpuModels=["6140","6248","8260","E7-8890"]),{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"CPU Model",type:"picker",selected,inputProps:{choices:cpuModels,value:config?.cpuModel,onChange:onChange("cpuModel")}},key),show:config=>isLyra(config)&&config?.cpuVendor&&"Any"!==config.cpuVendor,selected:config=>isValidChoice(cpuModels,config?.cpuModel)}},cpuCores:()=>{let cpuCores;return cpuCores="Any"===config?.cpuModel||"7702"===config?.cpuModel||"7713"===config?.cpuModel?128:"75F3"===config?.cpuModel?64:"6140"===config?.cpuModel?36:"6248"===config?.cpuModel?40:"8260"===config?.cpuModel?48:"E7-8890"===config?.cpuModel?96:128,{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"CPU",type:"slider",selected,inputProps:{value:config?.cpuCores,label:"cores",min:1,max:cpuCores,step:1,onChange:onChange("cpuCores")}},key),show:config=>isLyra(config),selected:config=>!0}},ram:()=>{let ram;return ram="Any"===config?.cpuModel||"7702"===config?.cpuModel||"7713"===config?.cpuModel?1006:"75F3"===config?.cpuModel?503:"6140"===config?.cpuModel||"6248"===config?.cpuModel||"8260"===config?.cpuModel?186:"E7-8890"===config?.cpuModel?5794:1006,{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"RAM",type:"slider",selected,inputProps:{value:config?.ram,label:"GB",min:8,max:ram,step:8,onChange:onChange("ram")}},key),show:config=>isLyra(config),selected:config=>!0}},jobProfile:()=>{let profiles=[];return"CPU"===config?.hardware?profiles=["1 core, 8 GB","4 cores, 32 GB","8 cores, 64 GB","16 cores, 128GB"]:"GPU"===config?.hardware&&(profiles=["4 cores, 32 GB, T4 GPU","8 cores, 64 GB, T4 GPU"]),{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"Job Profile",type:"picker",selected,inputProps:{choices:profiles,value:config?.jobProfile,onChange:onChange("jobProfile")}},key),show:config=>"JupyterHub"===config?.service&&config?.hardware,selected:config=>isValidChoice(profiles,config?.jobProfile)}},gpuVendor:()=>{const gpuVendors=["Any","NVIDIA","AMD"];return{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"GPU Vendor",type:"picker",selected,inputProps:{choices:gpuVendors,value:config?.gpuVendor,onChange:onChange("gpuVendor")}},key),show:config=>isLyra(config)&&isGPU(config),selected:config=>isValidChoice(gpuVendors,config?.gpuVendor)}},gpuModel:()=>{let gpuModels=[];return"NVIDIA"===config?.gpuVendor?gpuModels=["T4","P100","V100","A100"]:"AMD"===config?.gpuVendor&&(gpuModels=["MI100","MI210"]),{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"GPU Model",type:"picker",selected,inputProps:{choices:gpuModels,value:config?.gpuModel,onChange:onChange("gpuModel")}},key),show:config=>isLyra(config)&&"GPU"===config?.hardware&&config?.gpuVendor&&"Any"!==config.gpuVendor,selected:config=>isValidChoice(gpuModels,config?.gpuModel)}},gpuModules:()=>({element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"GPU",type:"slider",selected,inputProps:{value:config?.gpuModules,label:"modules",min:1,max:8,step:1,onChange:onChange("gpuModules")}},key),show:config=>isLyra(config)&&isGPU(config),selected:config=>!0}),environment:()=>{let environments=[];return environments="JupyterHub"===config?.service?[["Conda","Conda package manager"]]:isWorkstation(config)&&["macOS","Windows"].includes(config?.os)?[["Conda","Conda package manager"],["venv","Python virtual environments"]]:[["Singularity","Singularity / Singularity container"],["Conda","Conda package manager"],["venv","Python virtual environments"]],{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"Environment",description:"The Python package management system.",type:"picker",selected,inputProps:{choices:environments,value:config?.environment,onChange:onChange("environment")}},key),show:config=>config?.service,selected:config=>isValidChoice(environments,config?.environment)}},tool:()=>{let tools=[];return tools="Lyra"===config?.service?[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"]]:[["CLI","Use Gradio's Command-Line-Interface"],["Script","Run a generated Python script"],["Notebook","Run a generated Jupyter notebook"]],{element:(key,selected)=>(0,jsx_runtime.jsx)(ConfigGroup,{title:"Tool",description:"The interface to use for running the model.",type:"picker",selected,inputProps:{choices:tools,value:config?.tool,onChange:onChange("tool")}},key),show:config=>config?.service,selected:config=>isValidChoice(tools,config?.tool)}}}}function Config(_ref2){let{config,onConfigChange}=_ref2;return(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:Object.entries(getConfigGroups(config,onConfigChange)).map((_ref3=>{let[key,configGroup]=_ref3;return[key,configGroup()]})).filter((_ref4=>{let[_,configGroup]=_ref4;return configGroup.show(config)})).map((_ref5=>{let[key,configGroup]=_ref5;return configGroup.element(key,configGroup.selected(config))}))})}Config.displayName="Config",Config.__docgenInfo={description:"",methods:[],displayName:"Config"};var chunk_46CXQZ4E=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-46CXQZ4E.mjs");function PresetSection(_ref){let{presets,onPresetChange}=_ref;return(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:(0,jsx_runtime.jsx)(chunk_46CXQZ4E.QI,{children:presets.map(((p,i)=>(0,jsx_runtime.jsx)(chunk_46CXQZ4E.HC,{onClick:()=>onPresetChange(p),children:(0,jsx_runtime.jsxs)(chunk_K7XRJ7NL.r,{children:[p.name," ",(0,jsx_runtime.jsx)(chunk_XEKRR764.m,{mx:"2px"})]})},i)))})})}PresetSection.displayName="PresetSection",PresetSection.__docgenInfo={description:"",methods:[],displayName:"PresetSection"};var ChoiceScreen=__webpack_require__("./src/components/layout/ChoiceScreen.js");function BoxHeading(_ref){let{children,...props}=_ref;return(0,jsx_runtime.jsx)(chunk_7OLJDQMT.X,{as:"h2",size:"md",marginBottom:0,...props,children})}function AccordionHeading(_ref2){let{children}=_ref2;return(0,jsx_runtime.jsxs)(chunk_QCAXGLVH.K,{py:3,children:[(0,jsx_runtime.jsx)(BoxHeading,{display:"inline-block",flex:"1",textAlign:"left",children}),(0,jsx_runtime.jsx)(chunk_YI3ICT2T.X,{})]})}function PresetsChoice(_ref3){let{presets,onPresetChange}=_ref3;return(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{children:[(0,jsx_runtime.jsx)(BoxHeading,{children:"Preset configurations"}),(0,jsx_runtime.jsx)(PresetSection,{presets,onPresetChange})]})}function CustomChoice(_ref4){let{onSelected}=_ref4;return(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{children:[(0,jsx_runtime.jsx)(BoxHeading,{children:"Custom configuration"}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{my:2,children:"Choose the model, service, and settings."}),(0,jsx_runtime.jsx)(chunk_UVUR7MCU.z,{size:"md",onClick:onSelected,rightIcon:(0,jsx_runtime.jsx)(chunk_XEKRR764.m,{}),children:"Start"})]})}BoxHeading.displayName="BoxHeading",AccordionHeading.displayName="AccordionHeading",PresetsChoice.displayName="PresetsChoice",CustomChoice.displayName="CustomChoice";const DEFAULT_CONFIG={cpuCores:4,ram:16,gpuModules:1};function HuggingFacePipeline(_ref5){let{title,task,presets=[]}=_ref5;const[model,setModel]=(0,react.useState)(""),[port]=(0,react.useState)(Math.floor(7e3*Math.random())+3e3),[config,setConfig]=(0,react.useState)(DEFAULT_CONFIG),[showPage,setShowPage]=(0,react.useState)(!1),[accordionIndices,setAccordionIndices]=(0,react.useState)([0,1,2]),isModelComplete=""!==model,isConfigComplete=(config=>Object.values(getConfigGroups(config)).map((g=>g())).filter((g=>g.show(config))).every((g=>g.selected(config))))(config);return(0,jsx_runtime.jsxs)(chunk_YQO7BFFX.Z,{children:[(0,jsx_runtime.jsx)(chunk_2EW3JUUD.O,{children:(0,jsx_runtime.jsxs)(chunk_K7XRJ7NL.r,{href:`https://huggingface.co/tasks/${task}`,isExternal:!0,children:[(0,jsx_runtime.jsx)(chunk_QINAG4RG.E,{float:"left",verticalAlign:"middle",src:hf_logo_namespaceObject,alt:"HuggingFace logo",display:"inline",height:"30px"}),(0,jsx_runtime.jsx)(chunk_7OLJDQMT.X,{as:"h1",size:"lg",display:"inline",position:"relative",marginLeft:"2",children:title})]})}),(0,jsx_runtime.jsxs)(chunk_FHHZMTWR.e,{children:[(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{mb:6,children:"Step-by-step instructions to interact through your web browser with a HuggingFace model, running on Lyra, JupyterHub, rVDI, or your own machine."}),(0,jsx_runtime.jsx)(ChoiceScreen.Z,{choices:[(0,jsx_runtime.jsx)(PresetsChoice,{presets,onPresetChange:preset=>{setModel(preset.model),setConfig(preset.config),setShowPage(!0),setAccordionIndices([2])}}),(0,jsx_runtime.jsx)(CustomChoice,{onSelected:()=>{setModel(""),setConfig(DEFAULT_CONFIG),setShowPage(!0),setAccordionIndices([0,1,2])}})],page:(0,jsx_runtime.jsxs)(chunk_CRBMUVJA.U,{allowMultiple:!0,defaultIndex:accordionIndices,allowToggle:!0,children:[(0,jsx_runtime.jsxs)(chunk_JQ2DNXQ3.Q,{children:[(0,jsx_runtime.jsx)(AccordionHeading,{children:"Model"}),(0,jsx_runtime.jsx)(chunk_5VAIMVHT.H,{children:(0,jsx_runtime.jsx)(Model,{model,onModelChange:setModel,task})})]}),isModelComplete&&(0,jsx_runtime.jsxs)(chunk_JQ2DNXQ3.Q,{children:[(0,jsx_runtime.jsx)(AccordionHeading,{children:"Config"}),(0,jsx_runtime.jsx)(chunk_5VAIMVHT.H,{children:(0,jsx_runtime.jsx)(Config,{config,onConfigChange:setConfig})})]}),isModelComplete&&isConfigComplete&&(0,jsx_runtime.jsxs)(chunk_JQ2DNXQ3.Q,{children:[(0,jsx_runtime.jsx)(AccordionHeading,{children:"Instructions"}),(0,jsx_runtime.jsx)(chunk_5VAIMVHT.H,{children:(0,jsx_runtime.jsx)(Instructions.t,{task,model,config,port})})]})]}),showPage,onPageChange:show=>setShowPage(show)})]})]})}HuggingFacePipeline.displayName="HuggingFacePipeline",HuggingFacePipeline.__docgenInfo={description:"",methods:[],displayName:"HuggingFacePipeline",props:{presets:{defaultValue:{value:"[]",computed:!1},required:!1}}};const HuggingFacePipeline_stories={title:"Tools/HuggingFacePipeline",component:HuggingFacePipeline},TextGeneration={args:{title:"Text Generation",task:"text-generation"}},TextGenerationPresets={args:{title:"Text Generation",task:"text-generation",presets:[{name:"Llama-2-70b-chat on Lyra with 8 A100 GPUs",model:"meta-llama/Llama-2-70b-chat-hf",config:{service:"Lyra",hardware:"GPU",cpuVendor:"Any",cpuCores:8,ram:32,gpuVendor:"NVIDIA",gpuModel:"A100",gpuModules:8,tool:"CLI",environment:"Singularity"}},{name:"Llama-2-7b-chat locally",model:"meta-llama/Llama-2-7b-chat-hf",config:{service:"Local",os:"Linux",hardware:"GPU",tool:"CLI",environment:"Singularity"}},{name:"Bloom on Lyra with an A100 GPU",model:"bigscience/bloom",config:{service:"Lyra",hardware:"GPU",cpuVendor:"Any",cpuCores:4,ram:16,gpuVendor:"NVIDIA",gpuModel:"A100",gpuModules:1,tool:"CLI",environment:"Singularity"}}]}},ImageClassification={args:{title:"Image Classification",task:"image-classification"}},ObjectDetection={args:{title:"Object Detection",task:"object-detection"}},AutomaticSpeechRecognition={args:{title:"Automatic Speech Recognition",task:"automatic-speech-recognition"}},TextToSpeech={args:{title:"Text to Speech",task:"text-to-speech"}},TextToImage={args:{title:"Text to Image",task:"text-to-image"}};TextGeneration.parameters={...TextGeneration.parameters,docs:{...TextGeneration.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Text Generation',\n    task: 'text-generation'\n  }\n}",...TextGeneration.parameters?.docs?.source}}},TextGenerationPresets.parameters={...TextGenerationPresets.parameters,docs:{...TextGenerationPresets.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Text Generation\',\n    task: \'text-generation\',\n    presets: [{\n      name: "Llama-2-70b-chat on Lyra with 8 A100 GPUs",\n      model: "meta-llama/Llama-2-70b-chat-hf",\n      config: {\n        service: "Lyra",\n        hardware: "GPU",\n        cpuVendor: "Any",\n        cpuCores: 8,\n        ram: 32,\n        gpuVendor: "NVIDIA",\n        gpuModel: "A100",\n        gpuModules: 8,\n        tool: "CLI",\n        environment: "Singularity"\n      }\n    }, {\n      name: "Llama-2-7b-chat locally",\n      model: "meta-llama/Llama-2-7b-chat-hf",\n      config: {\n        service: "Local",\n        os: "Linux",\n        hardware: "GPU",\n        tool: "CLI",\n        environment: "Singularity"\n      }\n    }, {\n      name: \'Bloom on Lyra with an A100 GPU\',\n      model: "bigscience/bloom",\n      config: {\n        service: "Lyra",\n        hardware: "GPU",\n        cpuVendor: "Any",\n        cpuCores: 4,\n        ram: 16,\n        gpuVendor: "NVIDIA",\n        gpuModel: "A100",\n        gpuModules: 1,\n        tool: "CLI",\n        environment: "Singularity"\n      }\n    }]\n  }\n}',...TextGenerationPresets.parameters?.docs?.source}}},ImageClassification.parameters={...ImageClassification.parameters,docs:{...ImageClassification.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Image Classification',\n    task: 'image-classification'\n  }\n}",...ImageClassification.parameters?.docs?.source}}},ObjectDetection.parameters={...ObjectDetection.parameters,docs:{...ObjectDetection.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Object Detection',\n    task: 'object-detection'\n  }\n}",...ObjectDetection.parameters?.docs?.source}}},AutomaticSpeechRecognition.parameters={...AutomaticSpeechRecognition.parameters,docs:{...AutomaticSpeechRecognition.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Automatic Speech Recognition',\n    task: 'automatic-speech-recognition'\n  }\n}",...AutomaticSpeechRecognition.parameters?.docs?.source}}},TextToSpeech.parameters={...TextToSpeech.parameters,docs:{...TextToSpeech.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Text to Speech',\n    task: 'text-to-speech'\n  }\n}",...TextToSpeech.parameters?.docs?.source}}},TextToImage.parameters={...TextToImage.parameters,docs:{...TextToImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Text to Image',\n    task: 'text-to-image'\n  }\n}",...TextToImage.parameters?.docs?.source}}};const __namedExportsOrder=["TextGeneration","TextGenerationPresets","ImageClassification","ObjectDetection","AutomaticSpeechRecognition","TextToSpeech","TextToImage"]},"./src/components/input/InputPicker.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InputPicker});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-KICXRNWJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputPicker(_ref){let{choices,value,onChange=()=>{}}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.k,{flexGrow:"1",children:choices.map((choice=>{const{label,description}=Array.isArray(choice)?{label:choice[0],description:choice[1]}:{label:choice,description:""},selected=label===value;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.u,{label:description,flexGrow:"1",placement:"top",hasArrow:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.z,{flex:"1",variant:selected?"solid":"outline",size:"sm",borderRadius:"0",m:"0",p:"0",onClick:()=>onChange(label),colorScheme:selected?"yellow":"gray",children:label})},label)}))})}InputPicker.displayName="InputPicker",InputPicker.__docgenInfo={description:"",methods:[],displayName:"InputPicker",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"./src/components/input/InputSlider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InputSlider});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-ADBZ7YHX.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/slider/dist/chunk-6KSEUUNN.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputSlider(_ref){let{value=1,label,onChange=()=>{},...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.xu,{width:"120px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.B,{size:"sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.I,{type:"number",value,onChange:e=>onChange(parseInt(e.target.value)),textAlign:"center"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.xW,{width:"60px",p:0,justifyContent:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.x,{mb:"0",children:label})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.iR,{display:"block",flex:"1",ml:2,value,focusThumbOnChange:!1,colorScheme:"yellow",onChange:v=>onChange(v),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Uj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.gs,{})]})]})}InputSlider.__docgenInfo={description:"",methods:[],displayName:"InputSlider",props:{value:{defaultValue:{value:"1",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"./src/components/layout/ChoiceScreen.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ChoiceScreen});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-NEK3OOAM.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs"),_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chunk-G6T6CBSV.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ChoiceScreen(_ref){let{choices,page,showPage=!1,onPageChange=(show,page)=>{},clickable=!1}=_ref;if(showPage)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.xu,{children:[page,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.z,{leftIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.R,{}),position:"absolute",right:"4",top:"4",size:"sm",onClick:()=>onPageChange(!1,void 0),children:"Back"})]});const columns=1===choices.length?1:3===choices.length?3:2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.M,{columns,spacing:2,children:choices.map(((child,idx)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.xu,{onClick:clickable?()=>onPageChange(!0,idx):null,cursor:clickable?"pointer":"auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Z,{height:"100%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.e,{children:child})})},idx)))})}ChoiceScreen.displayName="ChoiceScreen",ChoiceScreen.__docgenInfo={description:"",methods:[],displayName:"ChoiceScreen",props:{showPage:{defaultValue:{value:"false",computed:!1},required:!1},onPageChange:{defaultValue:{value:"(show, page) => {}",computed:!1},required:!1},clickable:{defaultValue:{value:"false",computed:!1},required:!1}}}}}]);