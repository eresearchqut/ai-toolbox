"use strict";(self.webpackChunkai_toolbox=self.webpackChunkai_toolbox||[]).push([[894],{"./node_modules/@chakra-ui/number-input/dist/chunk-2JJX6TVY.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y_:()=>NumberDecrementStepper,WQ:()=>NumberIncrementStepper,Y2:()=>NumberInput,zu:()=>NumberInputField,Fi:()=>NumberInputStepper});var chunk_2GBDXOMA=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chunk-2GBDXOMA.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TriangleDownIcon=props=>(0,jsx_runtime.jsx)(chunk_2GBDXOMA.J,{viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}),TriangleUpIcon=props=>(0,jsx_runtime.jsx)(chunk_2GBDXOMA.J,{viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})}),react=__webpack_require__("./node_modules/react/index.js");function useAttributeObserver(ref,attributes,fn,enabled){(0,react.useEffect)((()=>{var _a;if(!ref.current||!enabled)return;const win=null!=(_a=ref.current.ownerDocument.defaultView)?_a:window,attrs=Array.isArray(attributes)?attributes:[attributes],obs=new win.MutationObserver((changes=>{for(const change of changes)"attributes"===change.type&&change.attributeName&&attrs.includes(change.attributeName)&&fn(change)}));return obs.observe(ref.current,{attributes:!0,attributeFilter:attrs}),()=>obs.disconnect()}))}var dist=__webpack_require__("./node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs");var CONTINUOUS_CHANGE_INTERVAL=50,CONTINUOUS_CHANGE_DELAY=300;function useSpinner(increment,decrement){const[isSpinning,setIsSpinning]=(0,react.useState)(!1),[action,setAction]=(0,react.useState)(null),[runOnce,setRunOnce]=(0,react.useState)(!0),timeoutRef=(0,react.useRef)(null),removeTimeout=()=>clearTimeout(timeoutRef.current);!function useInterval(callback,delay){const fn=(0,dist.W)(callback);(0,react.useEffect)((()=>{let intervalId=null;const tick=()=>fn();return null!==delay&&(intervalId=window.setInterval(tick,delay)),()=>{intervalId&&window.clearInterval(intervalId)}}),[delay,fn])}((()=>{"increment"===action&&increment(),"decrement"===action&&decrement()}),isSpinning?CONTINUOUS_CHANGE_INTERVAL:null);const up=(0,react.useCallback)((()=>{runOnce&&increment(),timeoutRef.current=setTimeout((()=>{setRunOnce(!1),setIsSpinning(!0),setAction("increment")}),CONTINUOUS_CHANGE_DELAY)}),[increment,runOnce]),down=(0,react.useCallback)((()=>{runOnce&&decrement(),timeoutRef.current=setTimeout((()=>{setRunOnce(!1),setIsSpinning(!0),setAction("decrement")}),CONTINUOUS_CHANGE_DELAY)}),[decrement,runOnce]),stop=(0,react.useCallback)((()=>{setRunOnce(!0),setIsSpinning(!1),removeTimeout()}),[]);return(0,react.useEffect)((()=>()=>removeTimeout()),[]),{up,down,stop,isSpinning}}var number_utils_dist=__webpack_require__("./node_modules/@chakra-ui/number-utils/dist/index.mjs");function useCounter(props={}){const{onChange,precision:precisionProp,defaultValue,value:valueProp,step:stepProp=1,min=Number.MIN_SAFE_INTEGER,max=Number.MAX_SAFE_INTEGER,keepWithinRange=!0}=props,onChangeProp=(0,dist.W)(onChange),[valueState,setValue]=(0,react.useState)((()=>{var _a;return null==defaultValue?"":null!=(_a=cast(defaultValue,stepProp,precisionProp))?_a:""})),isControlled=void 0!==valueProp,value=isControlled?valueProp:valueState,decimalPlaces=getDecimalPlaces(parse(value),stepProp),precision=null!=precisionProp?precisionProp:decimalPlaces,update=(0,react.useCallback)((next=>{next!==value&&(isControlled||setValue(next.toString()),null==onChangeProp||onChangeProp(next.toString(),parse(next)))}),[onChangeProp,isControlled,value]),clamp=(0,react.useCallback)((value2=>{let nextValue=value2;return keepWithinRange&&(nextValue=(0,number_utils_dist.HU)(nextValue,min,max)),(0,number_utils_dist.Zd)(nextValue,precision)}),[precision,keepWithinRange,max,min]),increment=(0,react.useCallback)(((step=stepProp)=>{let next;next=""===value?parse(step):parse(value)+step,next=clamp(next),update(next)}),[clamp,stepProp,update,value]),decrement=(0,react.useCallback)(((step=stepProp)=>{let next;next=""===value?parse(-step):parse(value)-step,next=clamp(next),update(next)}),[clamp,stepProp,update,value]),reset=(0,react.useCallback)((()=>{var _a;let next;next=null==defaultValue?"":null!=(_a=cast(defaultValue,stepProp,precisionProp))?_a:min,update(next)}),[defaultValue,precisionProp,stepProp,update,min]),castValue=(0,react.useCallback)((value2=>{var _a;const nextValue=null!=(_a=cast(value2,stepProp,precision))?_a:min;update(nextValue)}),[precision,stepProp,update,min]),valueAsNumber=parse(value);return{isOutOfRange:valueAsNumber>max||valueAsNumber<min,isAtMax:valueAsNumber===max,isAtMin:valueAsNumber===min,precision,value,valueAsNumber,update,reset,increment,decrement,clamp,cast:castValue,setValue}}function parse(value){return parseFloat(value.toString().replace(/[^\w.-]+/g,""))}function getDecimalPlaces(value,step){return Math.max((0,number_utils_dist.vk)(step),(0,number_utils_dist.vk)(value))}function cast(value,step,precision){const parsedValue=parse(value);if(Number.isNaN(parsedValue))return;const decimalPlaces=getDecimalPlaces(parsedValue,step);return(0,number_utils_dist.Zd)(parsedValue,null!=precision?precision:decimalPlaces)}var react_use_event_listener_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs"),react_use_update_effect_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-update-effect/dist/index.mjs"),react_use_safe_layout_effect_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),react_use_merge_refs_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),FLOATING_POINT_REGEX=/^[Ee0-9+\-.]$/;function isFloatingPointNumericCharacter(character){return FLOATING_POINT_REGEX.test(character)}var chunk_VLMMX64R=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-VLMMX64R.mjs"),react_context_dist=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),[NumberInputStylesProvider,useNumberInputStyles]=(0,react_context_dist.k)({name:"NumberInputStylesContext",errorMessage:"useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<NumberInput />\" "}),[NumberInputProvider,useNumberInputContext]=(0,react_context_dist.k)({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),NumberInput=(0,chunk_ZJJGQIVY.G)((function NumberInput2(props,ref){const styles=(0,chunk_DMO4EI7P.jC)("NumberInput",props),ownProps=(0,styled_system_dist.Lr)(props),controlProps=(0,chunk_VLMMX64R.K)(ownProps),{htmlProps,...context}=function useNumberInput(props={}){const{focusInputOnChange=!0,clampValueOnBlur=!0,keepWithinRange=!0,min=Number.MIN_SAFE_INTEGER,max=Number.MAX_SAFE_INTEGER,step:stepProp=1,isReadOnly,isDisabled,isRequired,isInvalid,pattern="[0-9]*(.[0-9]+)?",inputMode="decimal",allowMouseWheel,id,onChange:_,precision,name,"aria-describedby":ariaDescBy,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,onFocus:onFocusProp,onBlur:onBlurProp,onInvalid:onInvalidProp,getAriaValueText:getAriaValueTextProp,isValidCharacter:isValidCharacterProp,format:formatValue,parse:parseValue,...htmlProps}=props,onFocus=(0,dist.W)(onFocusProp),onBlur=(0,dist.W)(onBlurProp),onInvalid=(0,dist.W)(onInvalidProp),isValidCharacter=(0,dist.W)(null!=isValidCharacterProp?isValidCharacterProp:isFloatingPointNumericCharacter),getAriaValueText=(0,dist.W)(getAriaValueTextProp),counter=useCounter(props),{update:updateFn,increment:incrementFn,decrement:decrementFn}=counter,[isFocused,setFocused]=(0,react.useState)(!1),isInteractive=!(isReadOnly||isDisabled),inputRef=(0,react.useRef)(null),inputSelectionRef=(0,react.useRef)(null),incrementButtonRef=(0,react.useRef)(null),decrementButtonRef=(0,react.useRef)(null),sanitize=(0,react.useCallback)((value=>value.split("").filter(isValidCharacter).join("")),[isValidCharacter]),parse=(0,react.useCallback)((value=>{var _a;return null!=(_a=null==parseValue?void 0:parseValue(value))?_a:value}),[parseValue]),format=(0,react.useCallback)((value=>{var _a;return(null!=(_a=null==formatValue?void 0:formatValue(value))?_a:value).toString()}),[formatValue]);(0,react_use_update_effect_dist.r)((()=>{(counter.valueAsNumber>max||counter.valueAsNumber<min)&&(null==onInvalid||onInvalid("rangeOverflow",format(counter.value),counter.valueAsNumber))}),[counter.valueAsNumber,counter.value,format,onInvalid]),(0,react_use_safe_layout_effect_dist.G)((()=>{if(inputRef.current&&inputRef.current.value!=counter.value){const parsedInput=parse(inputRef.current.value);counter.setValue(sanitize(parsedInput))}}),[parse,sanitize]);const increment=(0,react.useCallback)(((step=stepProp)=>{isInteractive&&incrementFn(step)}),[incrementFn,isInteractive,stepProp]),decrement=(0,react.useCallback)(((step=stepProp)=>{isInteractive&&decrementFn(step)}),[decrementFn,isInteractive,stepProp]),spinner=useSpinner(increment,decrement);useAttributeObserver(incrementButtonRef,"disabled",spinner.stop,spinner.isSpinning),useAttributeObserver(decrementButtonRef,"disabled",spinner.stop,spinner.isSpinning);const onChange=(0,react.useCallback)((event=>{if(event.nativeEvent.isComposing)return;const parsedInput=parse(event.currentTarget.value);updateFn(sanitize(parsedInput)),inputSelectionRef.current={start:event.currentTarget.selectionStart,end:event.currentTarget.selectionEnd}}),[updateFn,sanitize,parse]),_onFocus=(0,react.useCallback)((event=>{var _a,_b,_c;null==onFocus||onFocus(event),inputSelectionRef.current&&(event.target.selectionStart=null!=(_b=inputSelectionRef.current.start)?_b:null==(_a=event.currentTarget.value)?void 0:_a.length,event.currentTarget.selectionEnd=null!=(_c=inputSelectionRef.current.end)?_c:event.currentTarget.selectionStart)}),[onFocus]),onKeyDown=(0,react.useCallback)((event=>{if(event.nativeEvent.isComposing)return;(function isValidNumericKeyboardEvent(event,isValid){if(null==event.key)return!0;const isModifierKey=event.ctrlKey||event.altKey||event.metaKey;return!(1===event.key.length&&!isModifierKey)||isValid(event.key)})(event,isValidCharacter)||event.preventDefault();const stepFactor=getStepFactor(event)*stepProp,action={ArrowUp:()=>increment(stepFactor),ArrowDown:()=>decrement(stepFactor),Home:()=>updateFn(min),End:()=>updateFn(max)}[event.key];action&&(event.preventDefault(),action(event))}),[isValidCharacter,stepProp,increment,decrement,updateFn,min,max]),getStepFactor=event=>{let ratio=1;return(event.metaKey||event.ctrlKey)&&(ratio=.1),event.shiftKey&&(ratio=10),ratio},ariaValueText=(0,react.useMemo)((()=>{const text=null==getAriaValueText?void 0:getAriaValueText(counter.value);if(null!=text)return text;return counter.value.toString()||void 0}),[counter.value,getAriaValueText]),validateAndClamp=(0,react.useCallback)((()=>{let next=counter.value;""!==counter.value&&(/^[eE]/.test(counter.value.toString())?counter.setValue(""):(counter.valueAsNumber<min&&(next=min),counter.valueAsNumber>max&&(next=max),counter.cast(next)))}),[counter,max,min]),onInputBlur=(0,react.useCallback)((()=>{setFocused(!1),clampValueOnBlur&&validateAndClamp()}),[clampValueOnBlur,setFocused,validateAndClamp]),focusInput=(0,react.useCallback)((()=>{focusInputOnChange&&requestAnimationFrame((()=>{var _a;null==(_a=inputRef.current)||_a.focus()}))}),[focusInputOnChange]),spinUp=(0,react.useCallback)((event=>{event.preventDefault(),spinner.up(),focusInput()}),[focusInput,spinner]),spinDown=(0,react.useCallback)((event=>{event.preventDefault(),spinner.down(),focusInput()}),[focusInput,spinner]);(0,react_use_event_listener_dist.O)((()=>inputRef.current),"wheel",(event=>{var _a,_b;const isInputFocused=(null!=(_b=null==(_a=inputRef.current)?void 0:_a.ownerDocument)?_b:document).activeElement===inputRef.current;if(!allowMouseWheel||!isInputFocused)return;event.preventDefault();const stepFactor=getStepFactor(event)*stepProp,direction=Math.sign(event.deltaY);-1===direction?increment(stepFactor):1===direction&&decrement(stepFactor)}),{passive:!1});const getIncrementButtonProps=(0,react.useCallback)(((props2={},ref=null)=>{const disabled=isDisabled||keepWithinRange&&counter.isAtMax;return{...props2,ref:(0,react_use_merge_refs_dist.lq)(ref,incrementButtonRef),role:"button",tabIndex:-1,onPointerDown:(0,shared_utils_dist.v0)(props2.onPointerDown,(event=>{0!==event.button||disabled||spinUp(event)})),onPointerLeave:(0,shared_utils_dist.v0)(props2.onPointerLeave,spinner.stop),onPointerUp:(0,shared_utils_dist.v0)(props2.onPointerUp,spinner.stop),disabled,"aria-disabled":(0,shared_utils_dist.Qm)(disabled)}}),[counter.isAtMax,keepWithinRange,spinUp,spinner.stop,isDisabled]),getDecrementButtonProps=(0,react.useCallback)(((props2={},ref=null)=>{const disabled=isDisabled||keepWithinRange&&counter.isAtMin;return{...props2,ref:(0,react_use_merge_refs_dist.lq)(ref,decrementButtonRef),role:"button",tabIndex:-1,onPointerDown:(0,shared_utils_dist.v0)(props2.onPointerDown,(event=>{0!==event.button||disabled||spinDown(event)})),onPointerLeave:(0,shared_utils_dist.v0)(props2.onPointerLeave,spinner.stop),onPointerUp:(0,shared_utils_dist.v0)(props2.onPointerUp,spinner.stop),disabled,"aria-disabled":(0,shared_utils_dist.Qm)(disabled)}}),[counter.isAtMin,keepWithinRange,spinDown,spinner.stop,isDisabled]),getInputProps=(0,react.useCallback)(((props2={},ref=null)=>{var _a,_b,_c,_d;return{name,inputMode,type:"text",pattern,"aria-labelledby":ariaLabelledBy,"aria-label":ariaLabel,"aria-describedby":ariaDescBy,id,disabled:isDisabled,...props2,readOnly:null!=(_a=props2.readOnly)?_a:isReadOnly,"aria-readonly":null!=(_b=props2.readOnly)?_b:isReadOnly,"aria-required":null!=(_c=props2.required)?_c:isRequired,required:null!=(_d=props2.required)?_d:isRequired,ref:(0,react_use_merge_refs_dist.lq)(inputRef,ref),value:format(counter.value),role:"spinbutton","aria-valuemin":min,"aria-valuemax":max,"aria-valuenow":Number.isNaN(counter.valueAsNumber)?void 0:counter.valueAsNumber,"aria-invalid":(0,shared_utils_dist.Qm)(null!=isInvalid?isInvalid:counter.isOutOfRange),"aria-valuetext":ariaValueText,autoComplete:"off",autoCorrect:"off",onChange:(0,shared_utils_dist.v0)(props2.onChange,onChange),onKeyDown:(0,shared_utils_dist.v0)(props2.onKeyDown,onKeyDown),onFocus:(0,shared_utils_dist.v0)(props2.onFocus,_onFocus,(()=>setFocused(!0))),onBlur:(0,shared_utils_dist.v0)(props2.onBlur,onBlur,onInputBlur)}}),[name,inputMode,pattern,ariaLabelledBy,ariaLabel,format,ariaDescBy,id,isDisabled,isRequired,isReadOnly,isInvalid,counter.value,counter.valueAsNumber,counter.isOutOfRange,min,max,ariaValueText,onChange,onKeyDown,_onFocus,onBlur,onInputBlur]);return{value:format(counter.value),valueAsNumber:counter.valueAsNumber,isFocused,isDisabled,isReadOnly,getIncrementButtonProps,getDecrementButtonProps,getInputProps,htmlProps}}(controlProps),ctx=(0,react.useMemo)((()=>context),[context]);return(0,jsx_runtime.jsx)(NumberInputProvider,{value:ctx,children:(0,jsx_runtime.jsx)(NumberInputStylesProvider,{value:styles,children:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{...htmlProps,ref,className:(0,shared_utils_dist.cx)("chakra-numberinput",props.className),__css:{position:"relative",zIndex:0,...styles.root}})})})}));NumberInput.displayName="NumberInput";var NumberInputStepper=(0,chunk_ZJJGQIVY.G)((function NumberInputStepper2(props,ref){const styles=useNumberInputStyles();return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{"aria-hidden":!0,ref,...props,__css:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1,...styles.stepperGroup}})}));NumberInputStepper.displayName="NumberInputStepper";var NumberInputField=(0,chunk_ZJJGQIVY.G)((function NumberInputField2(props,ref){const{getInputProps}=useNumberInputContext(),input=getInputProps(props,ref),styles=useNumberInputStyles();return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.input,{...input,className:(0,shared_utils_dist.cx)("chakra-numberinput__field",props.className),__css:{width:"100%",...styles.field}})}));NumberInputField.displayName="NumberInputField";var StyledStepper=(0,chunk_ZHQNHOQS.m)("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),NumberDecrementStepper=(0,chunk_ZJJGQIVY.G)((function NumberDecrementStepper2(props,ref){var _a;const styles=useNumberInputStyles(),{getDecrementButtonProps}=useNumberInputContext(),decrement=getDecrementButtonProps(props,ref);return(0,jsx_runtime.jsx)(StyledStepper,{...decrement,__css:styles.stepper,children:null!=(_a=props.children)?_a:(0,jsx_runtime.jsx)(TriangleDownIcon,{})})}));NumberDecrementStepper.displayName="NumberDecrementStepper";var NumberIncrementStepper=(0,chunk_ZJJGQIVY.G)((function NumberIncrementStepper2(props,ref){var _a;const{getIncrementButtonProps}=useNumberInputContext(),increment=getIncrementButtonProps(props,ref),styles=useNumberInputStyles();return(0,jsx_runtime.jsx)(StyledStepper,{...increment,__css:styles.stepper,children:null!=(_a=props.children)?_a:(0,jsx_runtime.jsx)(TriangleUpIcon,{})})}));NumberIncrementStepper.displayName="NumberIncrementStepper"}}]);