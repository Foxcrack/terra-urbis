var T_=Object.defineProperty;var A_=(t,e,n)=>e in t?T_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var nu=(t,e,n)=>A_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function b_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zg={exports:{}},wc={},Qg={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),C_=Symbol.for("react.portal"),R_=Symbol.for("react.fragment"),P_=Symbol.for("react.strict_mode"),N_=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),U_=Symbol.for("react.suspense"),F_=Symbol.for("react.memo"),O_=Symbol.for("react.lazy"),Gf=Symbol.iterator;function k_(t){return t===null||typeof t!="object"?null:(t=Gf&&t[Gf]||t["@@iterator"],typeof t=="function"?t:null)}var Jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},e0=Object.assign,t0={};function aa(t,e,n){this.props=t,this.context=e,this.refs=t0,this.updater=n||Jg}aa.prototype.isReactComponent={};aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function n0(){}n0.prototype=aa.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=t0,this.updater=n||Jg}var Ch=bh.prototype=new n0;Ch.constructor=bh;e0(Ch,aa.prototype);Ch.isPureReactComponent=!0;var Wf=Array.isArray,i0=Object.prototype.hasOwnProperty,Rh={current:null},r0={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)i0.call(e,i)&&!r0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:fo,type:t,key:s,ref:a,props:r,_owner:Rh.current}}function z_(t,e){return{$$typeof:fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===fo}function B_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xf=/\/+/g;function iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B_(""+t.key):e.toString(36)}function wl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case fo:case C_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+iu(a,0):i,Wf(r)?(n="",t!=null&&(n=t.replace(Xf,"$&/")+"/"),wl(r,e,n,"",function(c){return c})):r!=null&&(Ph(r)&&(r=z_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Xf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Wf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+iu(s,o);a+=wl(s,e,n,l,r)}else if(l=k_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+iu(s,o++),a+=wl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function wo(t,e,n){if(t==null)return t;var i=[],r=0;return wl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function H_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Tl={transition:null},j_={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Rh};function a0(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:wo,forEach:function(t,e,n){wo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wo(t,function(){e++}),e},toArray:function(t){return wo(t,function(e){return e})||[]},only:function(t){if(!Ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=aa;Ke.Fragment=R_;Ke.Profiler=N_;Ke.PureComponent=bh;Ke.StrictMode=P_;Ke.Suspense=U_;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j_;Ke.act=a0;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=e0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Rh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)i0.call(e,l)&&!r0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:fo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:D_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L_,_context:t},t.Consumer=t};Ke.createElement=s0;Ke.createFactory=function(t){var e=s0.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:I_,render:t}};Ke.isValidElement=Ph;Ke.lazy=function(t){return{$$typeof:O_,_payload:{_status:-1,_result:t},_init:H_}};Ke.memo=function(t,e){return{$$typeof:F_,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Ke.unstable_act=a0;Ke.useCallback=function(t,e){return an.current.useCallback(t,e)};Ke.useContext=function(t){return an.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return an.current.useEffect(t,e)};Ke.useId=function(){return an.current.useId()};Ke.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return an.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Ke.useRef=function(t){return an.current.useRef(t)};Ke.useState=function(t){return an.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return an.current.useTransition()};Ke.version="18.3.1";Qg.exports=Ke;var ae=Qg.exports;const V_=b_(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_=ae,W_=Symbol.for("react.element"),X_=Symbol.for("react.fragment"),q_=Object.prototype.hasOwnProperty,Y_=G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$_={key:!0,ref:!0,__self:!0,__source:!0};function o0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)q_.call(e,i)&&!$_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:W_,type:t,key:s,ref:a,props:r,_owner:Y_.current}}wc.Fragment=X_;wc.jsx=o0;wc.jsxs=o0;Zg.exports=wc;var h=Zg.exports,xd={},l0={exports:{}},An={},c0={exports:{}},u0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Q){var k=I.length;I.push(Q);e:for(;0<k;){var j=k-1>>>1,se=I[j];if(0<r(se,Q))I[j]=Q,I[k]=se,k=j;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Q=I[0],k=I.pop();if(k!==Q){I[0]=k;e:for(var j=0,se=I.length,me=se>>>1;j<me;){var V=2*(j+1)-1,X=I[V],re=V+1,oe=I[re];if(0>r(X,k))re<se&&0>r(oe,X)?(I[j]=oe,I[re]=k,j=re):(I[j]=X,I[V]=k,j=V);else if(re<se&&0>r(oe,k))I[j]=oe,I[re]=k,j=re;else break e}}return Q}function r(I,Q){var k=I.sortIndex-Q.sortIndex;return k!==0?k:I.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,p=null,f=3,m=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var Q=n(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=I)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function S(I){if(y=!1,x(I),!v)if(n(l)!==null)v=!0,H(C);else{var Q=n(c);Q!==null&&Z(S,Q.startTime-I)}}function C(I,Q){v=!1,y&&(y=!1,d(P),P=-1),m=!0;var k=f;try{for(x(Q),p=n(l);p!==null&&(!(p.expirationTime>Q)||I&&!N());){var j=p.callback;if(typeof j=="function"){p.callback=null,f=p.priorityLevel;var se=j(p.expirationTime<=Q);Q=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&i(l),x(Q)}else i(l);p=n(l)}if(p!==null)var me=!0;else{var V=n(c);V!==null&&Z(S,V.startTime-Q),me=!1}return me}finally{p=null,f=k,m=!1}}var w=!1,T=null,P=-1,A=5,M=-1;function N(){return!(t.unstable_now()-M<A)}function F(){if(T!==null){var I=t.unstable_now();M=I;var Q=!0;try{Q=T(!0,I)}finally{Q?D():(w=!1,T=null)}}else w=!1}var D;if(typeof _=="function")D=function(){_(F)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,J=B.port2;B.port1.onmessage=F,D=function(){J.postMessage(null)}}else D=function(){g(F,0)};function H(I){T=I,w||(w=!0,D())}function Z(I,Q){P=g(function(){I(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,H(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var Q=3;break;default:Q=f}var k=f;f=Q;try{return I()}finally{f=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var k=f;f=I;try{return Q()}finally{f=k}},t.unstable_scheduleCallback=function(I,Q,k){var j=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?j+k:j):k=j,I){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=k+se,I={id:u++,callback:Q,priorityLevel:I,startTime:k,expirationTime:se,sortIndex:-1},k>j?(I.sortIndex=k,e(c,I),n(l)===null&&I===n(c)&&(y?(d(P),P=-1):y=!0,Z(S,k-j))):(I.sortIndex=se,e(l,I),v||m||(v=!0,H(C))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var Q=f;return function(){var k=f;f=Q;try{return I.apply(this,arguments)}finally{f=k}}}})(u0);c0.exports=u0;var K_=c0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_=ae,Tn=K_;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d0=new Set,qa={};function qr(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(qa[t]=e,t=0;t<e.length;t++)d0.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,Q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qf={},Yf={};function J_(t){return _d.call(Yf,t)?!0:_d.call(qf,t)?!1:Q_.test(t)?Yf[t]=!0:(qf[t]=!0,!1)}function ey(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ty(t,e,n,i){if(e===null||typeof e>"u"||ey(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,Lh);jt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,Lh);jt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,Lh);jt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dh(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ty(e,n,r,i)&&(n=null),i||r===null?J_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,To=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),f0=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Md=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),p0=Symbol.for("react.offscreen"),$f=Symbol.iterator;function ha(t){return t===null||typeof t!="object"?null:(t=$f&&t[$f]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,ru;function Ca(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var su=!1;function au(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function ny(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Ss:return"Portal";case yd:return"Profiler";case Ih:return"StrictMode";case Sd:return"Suspense";case Md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f0:return(t.displayName||"Context")+".Consumer";case h0:return(t._context.displayName||"Context")+".Provider";case Uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fh:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function iy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function m0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ry(t){var e=m0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ao(t){t._valueTracker||(t._valueTracker=ry(t))}function g0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=m0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wd(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v0(t,e){e=e.checked,e!=null&&Dh(t,"checked",e,!1)}function Td(t,e){v0(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ad(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ad(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ra=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(Ra(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function x0(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bo,y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sy=["Webkit","ms","Moz","O"];Object.keys(Ua).forEach(function(t){sy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ua[e]=Ua[t]})});function S0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ua.hasOwnProperty(t)&&Ua[t]?(""+e).trim():e+"px"}function M0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=S0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ay=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(ay[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=null;function Oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,Us=null,Fs=null;function ep(t){if(t=go(t)){if(typeof Ld!="function")throw Error(de(280));var e=t.stateNode;e&&(e=Rc(e),Ld(t.stateNode,t.type,e))}}function E0(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function w0(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,ep(t),e)for(t=0;t<e.length;t++)ep(e[t])}}function T0(t,e){return t(e)}function A0(){}var ou=!1;function b0(t,e,n){if(ou)return t(e,n);ou=!0;try{return T0(t,e,n)}finally{ou=!1,(Us!==null||Fs!==null)&&(A0(),w0())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var i=Rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var Dd=!1;if(Pi)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{Dd=!1}function oy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Fa=!1,zl=null,Bl=!1,Id=null,ly={onError:function(t){Fa=!0,zl=t}};function cy(t,e,n,i,r,s,a,o,l){Fa=!1,zl=null,oy.apply(ly,arguments)}function uy(t,e,n,i,r,s,a,o,l){if(cy.apply(this,arguments),Fa){if(Fa){var c=zl;Fa=!1,zl=null}else throw Error(de(198));Bl||(Bl=!0,Id=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function C0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tp(t){if(Yr(t)!==t)throw Error(de(188))}function dy(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tp(r),t;if(s===i)return tp(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function R0(t){return t=dy(t),t!==null?P0(t):null}function P0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=P0(t);if(e!==null)return e;t=t.sibling}return null}var N0=Tn.unstable_scheduleCallback,np=Tn.unstable_cancelCallback,hy=Tn.unstable_shouldYield,fy=Tn.unstable_requestPaint,yt=Tn.unstable_now,py=Tn.unstable_getCurrentPriorityLevel,kh=Tn.unstable_ImmediatePriority,L0=Tn.unstable_UserBlockingPriority,Hl=Tn.unstable_NormalPriority,my=Tn.unstable_LowPriority,D0=Tn.unstable_IdlePriority,Tc=null,ui=null;function gy(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:_y,vy=Math.log,xy=Math.LN2;function _y(t){return t>>>=0,t===0?32:31-(vy(t)/xy|0)|0}var Co=64,Ro=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Pa(o):(s&=a,s!==0&&(i=Pa(s)))}else a=n&~r,a!==0?i=Pa(a):s!==0&&(i=Pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function yy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ti(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=yy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ud(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I0(){var t=Co;return Co<<=1,!(Co&4194240)&&(Co=64),t}function lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function My(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function U0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F0,Bh,O0,k0,z0,Fd=!1,Po=[],tr=null,nr=null,ir=null,Ka=new Map,Za=new Map,Yi=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function pa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=go(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function wy(t,e,n,i,r){switch(e){case"focusin":return tr=pa(tr,t,e,n,i,r),!0;case"dragenter":return nr=pa(nr,t,e,n,i,r),!0;case"mouseover":return ir=pa(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ka.set(s,pa(Ka.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Za.set(s,pa(Za.get(s)||null,t,e,n,i,r)),!0}return!1}function B0(t){var e=Nr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=C0(n),e!==null){t.blockedOn=e,z0(t.priority,function(){O0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nd=i,n.target.dispatchEvent(i),Nd=null}else return e=go(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function rp(t,e,n){Al(t)&&n.delete(e)}function Ty(){Fd=!1,tr!==null&&Al(tr)&&(tr=null),nr!==null&&Al(nr)&&(nr=null),ir!==null&&Al(ir)&&(ir=null),Ka.forEach(rp),Za.forEach(rp)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Fd||(Fd=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,Ty)))}function Qa(t){function e(r){return ma(r,t)}if(0<Po.length){ma(Po[0],t);for(var n=1;n<Po.length;n++){var i=Po[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&ma(tr,t),nr!==null&&ma(nr,t),ir!==null&&ma(ir,t),Ka.forEach(e),Za.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&Yi.shift()}var Os=Ui.ReactCurrentBatchConfig,Vl=!0;function Ay(t,e,n,i){var r=rt,s=Os.transition;Os.transition=null;try{rt=1,Hh(t,e,n,i)}finally{rt=r,Os.transition=s}}function by(t,e,n,i){var r=rt,s=Os.transition;Os.transition=null;try{rt=4,Hh(t,e,n,i)}finally{rt=r,Os.transition=s}}function Hh(t,e,n,i){if(Vl){var r=Od(t,e,n,i);if(r===null)xu(t,e,i,Gl,n),ip(t,i);else if(wy(r,t,e,n,i))i.stopPropagation();else if(ip(t,i),e&4&&-1<Ey.indexOf(t)){for(;r!==null;){var s=go(r);if(s!==null&&F0(s),s=Od(t,e,n,i),s===null&&xu(t,e,i,Gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(t,e,i,null,n)}}var Gl=null;function Od(t,e,n,i){if(Gl=null,t=Oh(i),t=Nr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=C0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function H0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(py()){case kh:return 1;case L0:return 4;case Hl:case my:return 16;case D0:return 536870912;default:return 16}default:return 16}}var Zi=null,jh=null,bl=null;function j0(){if(bl)return bl;var t,e=jh,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function No(){return!0}function sp(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?No:sp,this.isPropagationStopped=sp,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=bn(oa),mo=mt({},oa,{view:0,detail:0}),Cy=bn(mo),cu,uu,ga,Ac=mt({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(cu=t.screenX-ga.screenX,uu=t.screenY-ga.screenY):uu=cu=0,ga=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),ap=bn(Ac),Ry=mt({},Ac,{dataTransfer:0}),Py=bn(Ry),Ny=mt({},mo,{relatedTarget:0}),du=bn(Ny),Ly=mt({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Dy=bn(Ly),Iy=mt({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uy=bn(Iy),Fy=mt({},oa,{data:0}),op=bn(Fy),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zy[t])?!!e[t]:!1}function Gh(){return By}var Hy=mt({},mo,{key:function(t){if(t.key){var e=Oy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ky[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jy=bn(Hy),Vy=mt({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=bn(Vy),Gy=mt({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),Wy=bn(Gy),Xy=mt({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=bn(Xy),Yy=mt({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=bn(Yy),Ky=[9,13,27,32],Wh=Pi&&"CompositionEvent"in window,Oa=null;Pi&&"documentMode"in document&&(Oa=document.documentMode);var Zy=Pi&&"TextEvent"in window&&!Oa,V0=Pi&&(!Wh||Oa&&8<Oa&&11>=Oa),cp=" ",up=!1;function G0(t,e){switch(t){case"keyup":return Ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function Qy(t,e){switch(t){case"compositionend":return W0(e);case"keypress":return e.which!==32?null:(up=!0,cp);case"textInput":return t=e.data,t===cp&&up?null:t;default:return null}}function Jy(t,e){if(Es)return t==="compositionend"||!Wh&&G0(t,e)?(t=j0(),bl=jh=Zi=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return V0&&e.locale!=="ko"?null:e.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e1[t.type]:e==="textarea"}function X0(t,e,n,i){E0(i),e=Wl(e,"onChange"),0<e.length&&(n=new Vh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ka=null,Ja=null;function t1(t){iv(t,0)}function bc(t){var e=As(t);if(g0(e))return t}function n1(t,e){if(t==="change")return e}var q0=!1;if(Pi){var hu;if(Pi){var fu="oninput"in document;if(!fu){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),fu=typeof hp.oninput=="function"}hu=fu}else hu=!1;q0=hu&&(!document.documentMode||9<document.documentMode)}function fp(){ka&&(ka.detachEvent("onpropertychange",Y0),Ja=ka=null)}function Y0(t){if(t.propertyName==="value"&&bc(Ja)){var e=[];X0(e,Ja,t,Oh(t)),b0(t1,e)}}function i1(t,e,n){t==="focusin"?(fp(),ka=e,Ja=n,ka.attachEvent("onpropertychange",Y0)):t==="focusout"&&fp()}function r1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(Ja)}function s1(t,e){if(t==="click")return bc(e)}function a1(t,e){if(t==="input"||t==="change")return bc(e)}function o1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:o1;function eo(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_d.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,e){var n=pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function $0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function K0(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function l1(t){var e=K0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$0(n.ownerDocument.documentElement,n)){if(i!==null&&Xh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=mp(n,s);var a=mp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c1=Pi&&"documentMode"in document&&11>=document.documentMode,ws=null,kd=null,za=null,zd=!1;function gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||ws==null||ws!==kl(i)||(i=ws,"selectionStart"in i&&Xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),za&&eo(za,i)||(za=i,i=Wl(kd,"onSelect"),0<i.length&&(e=new Vh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function Lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},pu={},Z0={};Pi&&(Z0=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Cc(t){if(pu[t])return pu[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z0)return pu[t]=e[n];return t}var Q0=Cc("animationend"),J0=Cc("animationiteration"),ev=Cc("animationstart"),tv=Cc("transitionend"),nv=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){nv.set(t,e),qr(e,[t])}for(var mu=0;mu<vp.length;mu++){var gu=vp[mu],u1=gu.toLowerCase(),d1=gu[0].toUpperCase()+gu.slice(1);fr(u1,"on"+d1)}fr(Q0,"onAnimationEnd");fr(J0,"onAnimationIteration");fr(ev,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(tv,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,uy(i,e,void 0,t),t.currentTarget=null}function iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;xp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;xp(r,o,c),s=l}}}if(Bl)throw t=Id,Bl=!1,Id=null,t}function ct(t,e){var n=e[Gd];n===void 0&&(n=e[Gd]=new Set);var i=t+"__bubble";n.has(i)||(rv(e,t,2,!1),n.add(i))}function vu(t,e,n){var i=0;e&&(i|=4),rv(n,t,i,e)}var Do="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[Do]){t[Do]=!0,d0.forEach(function(n){n!=="selectionchange"&&(h1.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Do]||(e[Do]=!0,vu("selectionchange",!1,e))}}function rv(t,e,n,i){switch(H0(e)){case 1:var r=Ay;break;case 4:r=by;break;default:r=Hh}n=r.bind(null,e,n,t),r=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Nr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}b0(function(){var c=s,u=Oh(n),p=[];e:{var f=nv.get(t);if(f!==void 0){var m=Vh,v=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":m=jy;break;case"focusin":v="focus",m=du;break;case"focusout":v="blur",m=du;break;case"beforeblur":case"afterblur":m=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Wy;break;case Q0:case J0:case ev:m=Dy;break;case tv:m=qy;break;case"scroll":m=Cy;break;case"wheel":m=$y;break;case"copy":case"cut":case"paste":m=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=lp}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=$a(_,d),S!=null&&y.push(no(_,S,x)))),g)break;_=_.return}0<y.length&&(f=new m(f,v,null,n,u),p.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Nd&&(v=n.relatedTarget||n.fromElement)&&(Nr(v)||v[Ni]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Nr(v):null,v!==null&&(g=Yr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(y=ap,S="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=lp,S="onPointerLeave",d="onPointerEnter",_="pointer"),g=m==null?f:As(m),x=v==null?f:As(v),f=new y(S,_+"leave",m,n,u),f.target=g,f.relatedTarget=x,S=null,Nr(u)===c&&(y=new y(d,_+"enter",v,n,u),y.target=x,y.relatedTarget=g,S=y),g=S,m&&v)t:{for(y=m,d=v,_=0,x=y;x;x=Jr(x))_++;for(x=0,S=d;S;S=Jr(S))x++;for(;0<_-x;)y=Jr(y),_--;for(;0<x-_;)d=Jr(d),x--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=Jr(y),d=Jr(d)}y=null}else y=null;m!==null&&_p(p,f,m,y,!1),v!==null&&g!==null&&_p(p,g,v,y,!0)}}e:{if(f=c?As(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=n1;else if(dp(f))if(q0)C=a1;else{C=r1;var w=i1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=s1);if(C&&(C=C(t,c))){X0(p,C,n,u);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Ad(f,"number",f.value)}switch(w=c?As(c):window,t){case"focusin":(dp(w)||w.contentEditable==="true")&&(ws=w,kd=c,za=null);break;case"focusout":za=kd=ws=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,gp(p,n,u);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":gp(p,n,u)}var T;if(Wh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Es?G0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(V0&&n.locale!=="ko"&&(Es||P!=="onCompositionStart"?P==="onCompositionEnd"&&Es&&(T=j0()):(Zi=u,jh="value"in Zi?Zi.value:Zi.textContent,Es=!0)),w=Wl(c,P),0<w.length&&(P=new op(P,t,null,n,u),p.push({event:P,listeners:w}),T?P.data=T:(T=W0(n),T!==null&&(P.data=T)))),(T=Zy?Qy(t,n):Jy(t,n))&&(c=Wl(c,"onBeforeInput"),0<c.length&&(u=new op("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:c}),u.data=T))}iv(p,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$a(t,n),s!=null&&i.unshift(no(t,s,r)),s=$a(t,e),s!=null&&i.push(no(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=$a(n,s),l!=null&&a.unshift(no(n,l,o))):r||(l=$a(n,s),l!=null&&a.push(no(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var f1=/\r\n?/g,p1=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(f1,`
`).replace(p1,"")}function Io(t,e,n){if(e=yp(e),yp(t)!==e&&n)throw Error(de(425))}function Xl(){}var Bd=null,Hd=null;function jd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vd=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(t){return Sp.resolve(null).then(t).catch(v1)}:Vd;function v1(t){setTimeout(function(){throw t})}function _u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qa(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var la=Math.random().toString(36).slice(2),li="__reactFiber$"+la,io="__reactProps$"+la,Ni="__reactContainer$"+la,Gd="__reactEvents$"+la,x1="__reactListeners$"+la,_1="__reactHandles$"+la;function Nr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mp(t);t!==null;){if(n=t[li])return n;t=Mp(t)}return e}t=n,n=t.parentNode}return null}function go(t){return t=t[li]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function Rc(t){return t[io]||null}var Wd=[],bs=-1;function pr(t){return{current:t}}function ut(t){0>bs||(t.current=Wd[bs],Wd[bs]=null,bs--)}function lt(t,e){bs++,Wd[bs]=t.current,t.current=e}var dr={},Kt=pr(dr),dn=pr(!1),Br=dr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function ql(){ut(dn),ut(Kt)}function Ep(t,e,n){if(Kt.current!==dr)throw Error(de(168));lt(Kt,e),lt(dn,n)}function sv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,iy(t)||"Unknown",r));return mt({},n,i)}function Yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Br=Kt.current,lt(Kt,t),lt(dn,dn.current),!0}function wp(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=sv(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,ut(dn),ut(Kt),lt(Kt,t)):ut(dn),lt(dn,n)}var wi=null,Pc=!1,yu=!1;function av(t){wi===null?wi=[t]:wi.push(t)}function y1(t){Pc=!0,av(t)}function mr(){if(!yu&&wi!==null){yu=!0;var t=0,e=rt;try{var n=wi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Pc=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),N0(kh,mr),r}finally{rt=e,yu=!1}}return null}var Cs=[],Rs=0,$l=null,Kl=0,Ln=[],Dn=0,Hr=null,Ti=1,Ai="";function br(t,e){Cs[Rs++]=Kl,Cs[Rs++]=$l,$l=t,Kl=e}function ov(t,e,n){Ln[Dn++]=Ti,Ln[Dn++]=Ai,Ln[Dn++]=Hr,Hr=t;var i=Ti;t=Ai;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ti=1<<32-ti(e)+r|n<<r|i,Ai=s+t}else Ti=1<<s|n<<r|i,Ai=t}function qh(t){t.return!==null&&(br(t,1),ov(t,1,0))}function Yh(t){for(;t===$l;)$l=Cs[--Rs],Cs[Rs]=null,Kl=Cs[--Rs],Cs[Rs]=null;for(;t===Hr;)Hr=Ln[--Dn],Ln[Dn]=null,Ai=Ln[--Dn],Ln[Dn]=null,Ti=Ln[--Dn],Ln[Dn]=null}var Mn=null,Sn=null,ht=!1,qn=null;function lv(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function Xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qd(t){if(ht){var e=Sn;if(e){var n=e;if(!Tp(t,e)){if(Xd(t))throw Error(de(418));e=rr(n.nextSibling);var i=Mn;e&&Tp(t,e)?lv(i,n):(t.flags=t.flags&-4097|2,ht=!1,Mn=t)}}else{if(Xd(t))throw Error(de(418));t.flags=t.flags&-4097|2,ht=!1,Mn=t}}}function Ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Uo(t){if(t!==Mn)return!1;if(!ht)return Ap(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jd(t.type,t.memoizedProps)),e&&(e=Sn)){if(Xd(t))throw cv(),Error(de(418));for(;e;)lv(t,e),e=rr(e.nextSibling)}if(Ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?rr(t.stateNode.nextSibling):null;return!0}function cv(){for(var t=Sn;t;)t=rr(t.nextSibling)}function Ws(){Sn=Mn=null,ht=!1}function $h(t){qn===null?qn=[t]:qn.push(t)}var S1=Ui.ReactCurrentBatchConfig;function va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function Fo(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bp(t){var e=t._init;return e(t._payload)}function uv(t){function e(d,_){if(t){var x=d.deletions;x===null?(d.deletions=[_],d.flags|=16):x.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=lr(d,_),d.index=0,d.sibling=null,d}function s(d,_,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<_?(d.flags|=2,_):x):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,x,S){return _===null||_.tag!==6?(_=bu(x,d.mode,S),_.return=d,_):(_=r(_,x),_.return=d,_)}function l(d,_,x,S){var C=x.type;return C===Ms?u(d,_,x.props.children,S,x.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&bp(C)===_.type)?(S=r(_,x.props),S.ref=va(d,_,x),S.return=d,S):(S=Ul(x.type,x.key,x.props,null,d.mode,S),S.ref=va(d,_,x),S.return=d,S)}function c(d,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Cu(x,d.mode,S),_.return=d,_):(_=r(_,x.children||[]),_.return=d,_)}function u(d,_,x,S,C){return _===null||_.tag!==7?(_=Or(x,d.mode,S,C),_.return=d,_):(_=r(_,x),_.return=d,_)}function p(d,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bu(""+_,d.mode,x),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case To:return x=Ul(_.type,_.key,_.props,null,d.mode,x),x.ref=va(d,null,_),x.return=d,x;case Ss:return _=Cu(_,d.mode,x),_.return=d,_;case Wi:var S=_._init;return p(d,S(_._payload),x)}if(Ra(_)||ha(_))return _=Or(_,d.mode,x,null),_.return=d,_;Fo(d,_)}return null}function f(d,_,x,S){var C=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:o(d,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case To:return x.key===C?l(d,_,x,S):null;case Ss:return x.key===C?c(d,_,x,S):null;case Wi:return C=x._init,f(d,_,C(x._payload),S)}if(Ra(x)||ha(x))return C!==null?null:u(d,_,x,S,null);Fo(d,x)}return null}function m(d,_,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,o(_,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case To:return d=d.get(S.key===null?x:S.key)||null,l(_,d,S,C);case Ss:return d=d.get(S.key===null?x:S.key)||null,c(_,d,S,C);case Wi:var w=S._init;return m(d,_,x,w(S._payload),C)}if(Ra(S)||ha(S))return d=d.get(x)||null,u(_,d,S,C,null);Fo(_,S)}return null}function v(d,_,x,S){for(var C=null,w=null,T=_,P=_=0,A=null;T!==null&&P<x.length;P++){T.index>P?(A=T,T=null):A=T.sibling;var M=f(d,T,x[P],S);if(M===null){T===null&&(T=A);break}t&&T&&M.alternate===null&&e(d,T),_=s(M,_,P),w===null?C=M:w.sibling=M,w=M,T=A}if(P===x.length)return n(d,T),ht&&br(d,P),C;if(T===null){for(;P<x.length;P++)T=p(d,x[P],S),T!==null&&(_=s(T,_,P),w===null?C=T:w.sibling=T,w=T);return ht&&br(d,P),C}for(T=i(d,T);P<x.length;P++)A=m(T,d,P,x[P],S),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?P:A.key),_=s(A,_,P),w===null?C=A:w.sibling=A,w=A);return t&&T.forEach(function(N){return e(d,N)}),ht&&br(d,P),C}function y(d,_,x,S){var C=ha(x);if(typeof C!="function")throw Error(de(150));if(x=C.call(x),x==null)throw Error(de(151));for(var w=C=null,T=_,P=_=0,A=null,M=x.next();T!==null&&!M.done;P++,M=x.next()){T.index>P?(A=T,T=null):A=T.sibling;var N=f(d,T,M.value,S);if(N===null){T===null&&(T=A);break}t&&T&&N.alternate===null&&e(d,T),_=s(N,_,P),w===null?C=N:w.sibling=N,w=N,T=A}if(M.done)return n(d,T),ht&&br(d,P),C;if(T===null){for(;!M.done;P++,M=x.next())M=p(d,M.value,S),M!==null&&(_=s(M,_,P),w===null?C=M:w.sibling=M,w=M);return ht&&br(d,P),C}for(T=i(d,T);!M.done;P++,M=x.next())M=m(T,d,P,M.value,S),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?P:M.key),_=s(M,_,P),w===null?C=M:w.sibling=M,w=M);return t&&T.forEach(function(F){return e(d,F)}),ht&&br(d,P),C}function g(d,_,x,S){if(typeof x=="object"&&x!==null&&x.type===Ms&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case To:e:{for(var C=x.key,w=_;w!==null;){if(w.key===C){if(C=x.type,C===Ms){if(w.tag===7){n(d,w.sibling),_=r(w,x.props.children),_.return=d,d=_;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&bp(C)===w.type){n(d,w.sibling),_=r(w,x.props),_.ref=va(d,w,x),_.return=d,d=_;break e}n(d,w);break}else e(d,w);w=w.sibling}x.type===Ms?(_=Or(x.props.children,d.mode,S,x.key),_.return=d,d=_):(S=Ul(x.type,x.key,x.props,null,d.mode,S),S.ref=va(d,_,x),S.return=d,d=S)}return a(d);case Ss:e:{for(w=x.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(d,_.sibling),_=r(_,x.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Cu(x,d.mode,S),_.return=d,d=_}return a(d);case Wi:return w=x._init,g(d,_,w(x._payload),S)}if(Ra(x))return v(d,_,x,S);if(ha(x))return y(d,_,x,S);Fo(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,x),_.return=d,d=_):(n(d,_),_=bu(x,d.mode,S),_.return=d,d=_),a(d)):n(d,_)}return g}var Xs=uv(!0),dv=uv(!1),Zl=pr(null),Ql=null,Ps=null,Kh=null;function Zh(){Kh=Ps=Ql=null}function Qh(t){var e=Zl.current;ut(Zl),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Ql=t,Kh=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(Kh!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Ql===null)throw Error(de(308));Ps=t,Ql.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Lr=null;function Jh(t){Lr===null?Lr=[t]:Lr.push(t)}function hv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zh(t,n)}}function Cp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(f=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(m,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(m,p,f):v,f==null)break e;p=mt({},p,f);break e;case 2:Xi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=m,l=p):u=u.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=a,t.lanes=a,t.memoizedState=p}}function Rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var vo={},di=pr(vo),ro=pr(vo),so=pr(vo);function Dr(t){if(t===vo)throw Error(de(174));return t}function tf(t,e){switch(lt(so,e),lt(ro,t),lt(di,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cd(e,t)}ut(di),lt(di,e)}function qs(){ut(di),ut(ro),ut(so)}function pv(t){Dr(so.current);var e=Dr(di.current),n=Cd(e,t.type);e!==n&&(lt(ro,t),lt(di,n))}function nf(t){ro.current===t&&(ut(di),ut(ro))}var ft=pr(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function rf(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var Pl=Ui.ReactCurrentDispatcher,Mu=Ui.ReactCurrentBatchConfig,jr=0,pt=null,bt=null,Dt=null,tc=!1,Ba=!1,ao=0,M1=0;function Vt(){throw Error(de(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function af(t,e,n,i,r,s){if(jr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?A1:b1,t=n(i,r),Ba){s=0;do{if(Ba=!1,ao=0,25<=s)throw Error(de(301));s+=1,Dt=bt=null,e.updateQueue=null,Pl.current=C1,t=n(i,r)}while(Ba)}if(Pl.current=nc,e=bt!==null&&bt.next!==null,jr=0,Dt=bt=pt=null,tc=!1,e)throw Error(de(300));return t}function of(){var t=ao!==0;return ao=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?pt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function On(){if(bt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Dt===null?pt.memoizedState:Dt.next;if(e!==null)Dt=e,bt=t;else{if(t===null)throw Error(de(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Dt===null?pt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function oo(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=On(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,pt.lanes|=u,Vr|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ii(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=On(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ii(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function mv(){}function gv(t,e){var n=pt,i=On(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,lf(_v.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,lo(9,xv.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(de(349));jr&30||vv(n,e,r)}return r}function vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xv(t,e,n,i){e.value=n,e.getSnapshot=i,yv(e)&&Sv(t)}function _v(t,e,n){return n(function(){yv(e)&&Sv(t)})}function yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function Sv(t){var e=Li(t,1);e!==null&&ni(e,t,1,-1)}function Pp(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=T1.bind(null,pt,t),[e.memoizedState,t]}function lo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Mv(){return On().memoizedState}function Nl(t,e,n,i){var r=ai();pt.flags|=t,r.memoizedState=lo(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&sf(i,a.deps)){r.memoizedState=lo(e,n,s,i);return}}pt.flags|=t,r.memoizedState=lo(1|e,n,s,i)}function Np(t,e){return Nl(8390656,8,t,e)}function lf(t,e){return Nc(2048,8,t,e)}function Ev(t,e){return Nc(4,2,t,e)}function wv(t,e){return Nc(4,4,t,e)}function Tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Av(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,Tv.bind(null,e,t),n)}function cf(){}function bv(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Cv(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Rv(t,e,n){return jr&21?(ii(n,e)||(n=I0(),pt.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function E1(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Mu.transition;Mu.transition={};try{t(!1),e()}finally{rt=n,Mu.transition=i}}function Pv(){return On().memoizedState}function w1(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Lv(e,n);else if(n=hv(t,e,n,i),n!==null){var r=rn();ni(n,t,i,r),Dv(n,e,i)}}function T1(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Lv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ii(o,a)){var l=e.interleaved;l===null?(r.next=r,Jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hv(t,e,r,i),n!==null&&(r=rn(),ni(n,t,i,r),Dv(n,e,i))}}function Nv(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Lv(t,e){Ba=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zh(t,n)}}var nc={readContext:Fn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},A1={readContext:Fn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:Np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,Tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=w1.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:Pp,useDebugValue:cf,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=Pp(!1),e=t[0];return t=E1.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=ai();if(ht){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Ut===null)throw Error(de(349));jr&30||vv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Np(_v.bind(null,i,s,t),[t]),i.flags|=2048,lo(9,xv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Ut.identifierPrefix;if(ht){var n=Ai,i=Ti;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=M1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},b1={readContext:Fn,useCallback:bv,useContext:Fn,useEffect:lf,useImperativeHandle:Av,useInsertionEffect:Ev,useLayoutEffect:wv,useMemo:Cv,useReducer:Eu,useRef:Mv,useState:function(){return Eu(oo)},useDebugValue:cf,useDeferredValue:function(t){var e=On();return Rv(e,bt.memoizedState,t)},useTransition:function(){var t=Eu(oo)[0],e=On().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:gv,useId:Pv,unstable_isNewReconciler:!1},C1={readContext:Fn,useCallback:bv,useContext:Fn,useEffect:lf,useImperativeHandle:Av,useInsertionEffect:Ev,useLayoutEffect:wv,useMemo:Cv,useReducer:wu,useRef:Mv,useState:function(){return wu(oo)},useDebugValue:cf,useDeferredValue:function(t){var e=On();return bt===null?e.memoizedState=t:Rv(e,bt.memoizedState,t)},useTransition:function(){var t=wu(oo)[0],e=On().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:gv,useId:Pv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=or(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ni(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=or(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ni(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=or(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(ni(e,t,i,n),Rl(e,t,i))}};function Lp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!eo(n,i)||!eo(r,s):!0}function Iv(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=hn(e)?Br:Kt.current,i=e.contextTypes,s=(i=i!=null)?Gs(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ef(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=hn(e)?Br:Kt.current,r.context=Gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),Jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=ny(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var R1=typeof WeakMap=="function"?WeakMap:Map;function Uv(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){rc||(rc=!0,oh=i),Zd(t,e)},n}function Fv(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new R1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=V1.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var P1=Ui.ReactCurrentOwner,un=!1;function Jt(t,e,n,i){e.child=t===null?dv(e,null,n,i):Xs(e,t.child,n,i)}function Op(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=af(t,e,n,i,s,r),n=of(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(ht&&n&&qh(e),e.flags|=1,Jt(t,e,i,r),e.child)}function kp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ov(t,e,s,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(a,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(eo(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Di(t,e,r)}return Qd(t,e,n,i,r)}function kv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ls,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Ls,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Ls,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Ls,_n),_n|=i;return Jt(t,e,r,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,n,i,r){var s=hn(n)?Br:Kt.current;return s=Gs(e,s),ks(e,r),n=af(t,e,n,i,s,r),i=of(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(ht&&i&&qh(e),e.flags|=1,Jt(t,e,n,r),e.child)}function zp(t,e,n,i,r){if(hn(n)){var s=!0;Yl(e)}else s=!1;if(ks(e,r),e.stateNode===null)Ll(t,e),Iv(e,n,i),Kd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=hn(n)?Br:Kt.current,c=Gs(e,c));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Dp(e,a,i,c),Xi=!1;var f=e.memoizedState;a.state=f,Jl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||dn.current||Xi?(typeof u=="function"&&($d(e,n,u,i),l=e.memoizedState),(o=Xi||Lp(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,fv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=hn(n)?Br:Kt.current,l=Gs(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Dp(e,a,i,l),Xi=!1,f=e.memoizedState,a.state=f,Jl(e,i,a,r);var v=e.memoizedState;o!==p||f!==v||dn.current||Xi?(typeof m=="function"&&($d(e,n,m,i),v=e.memoizedState),(c=Xi||Lp(e,n,c,i,f,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Jd(t,e,n,i,s,r)}function Jd(t,e,n,i,r,s){zv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&wp(e,n,!1),Di(t,e,s);i=e.stateNode,P1.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,o,s)):Jt(t,e,o,s),e.memoizedState=i.state,r&&wp(e,n,!0),e.child}function Bv(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),tf(t,e.containerInfo)}function Bp(t,e,n,i,r){return Ws(),$h(r),e.flags|=256,Jt(t,e,n,i),e.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(ft,r&1),t===null)return qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Uc(a,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=th(n),e.memoizedState=eh,t):uf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return N1(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=lr(o,s):(s=Or(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?th(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=eh,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function uf(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oo(t,e,n,i){return i!==null&&$h(i),Xs(e,t.child,null,n),t=uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N1(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Tu(Error(de(422))),Oo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=Or(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,a),e.child.memoizedState=th(a),e.memoizedState=eh,s);if(!(e.mode&1))return Oo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(de(419)),i=Tu(s,i,void 0),Oo(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=Ut,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),ni(i,t,r,-1))}return gf(),i=Tu(Error(de(421))),Oo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=G1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=rr(r.nextSibling),Mn=e,ht=!0,qn=null,t!==null&&(Ln[Dn++]=Ti,Ln[Dn++]=Ai,Ln[Dn++]=Hr,Ti=t.id,Ai=t.overflow,Hr=e),e=uf(e,i.children),e.flags|=4096,e)}function Hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yd(t.return,e,n)}function Au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function jv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hp(t,n,e);else if(t.tag===19)Hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ec(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Au(e,!0,n,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function L1(t,e,n){switch(e.tag){case 3:Bv(e),Ws();break;case 5:pv(e);break;case 1:hn(e.type)&&Yl(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(lt(ft,ft.current&1),t=Di(t,e,n),t!==null?t.sibling:null);lt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return jv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,kv(t,e,n)}return Di(t,e,n)}var Vv,nh,Gv,Wv;Vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nh=function(){};Gv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(di.current);var s=null;switch(n){case"input":r=wd(t,r),i=wd(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=bd(t,r),i=bd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Xl)}Rd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Wv=function(t,e,n,i){n!==i&&(e.flags|=4)};function xa(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function D1(t,e,n){var i=e.pendingProps;switch(Yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return hn(e.type)&&ql(),Gt(e),null;case 3:return i=e.stateNode,qs(),ut(dn),ut(Kt),rf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(uh(qn),qn=null))),nh(t,e),Gt(e),null;case 5:nf(e);var r=Dr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)Gv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return Gt(e),null}if(t=Dr(di.current),Uo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[io]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)ct(Na[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Kf(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Qf(i,s),ct("invalid",i)}Rd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,o,t),r=["children",""+o]):qa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ao(i),Zf(i,s,!0);break;case"textarea":Ao(i),Jf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[li]=e,t[io]=i,Vv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Pd(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)ct(Na[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Kf(t,i),r=wd(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Qf(t,i),r=bd(t,i),ct("invalid",t);break;default:r=i}Rd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?M0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&y0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ya(t,l):typeof l=="number"&&Ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Dh(t,s,l,a))}switch(n){case"input":Ao(t),Zf(t,i,!1);break;case"textarea":Ao(t),Jf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)Wv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Dr(so.current),Dr(di.current),Uo(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Io(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Io(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Gt(e),null;case 13:if(ut(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&Sn!==null&&e.mode&1&&!(e.flags&128))cv(),Ws(),e.flags|=98560,s=!1;else if(s=Uo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[li]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else qn!==null&&(uh(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Ct===0&&(Ct=3):gf())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return qs(),nh(t,e),t===null&&to(e.stateNode.containerInfo),Gt(e),null;case 10:return Qh(e.type._context),Gt(e),null;case 17:return hn(e.type)&&ql(),Gt(e),null;case 19:if(ut(ft),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)xa(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ec(t),a!==null){for(e.flags|=128,xa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>$s&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304)}else{if(!i)if(t=ec(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return Gt(e),null}else 2*yt()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ft.current,lt(ft,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return mf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function I1(t,e){switch(Yh(e),e.tag){case 1:return hn(e.type)&&ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),ut(dn),ut(Kt),rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(ut(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ft),null;case 4:return qs(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var ko=!1,qt=!1,U1=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function ih(t,e,n){try{n()}catch(i){_t(t,e,i)}}var jp=!1;function F1(t,e){if(Bd=Vl,t=K0(),Xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hd={focusedElem:t,selectionRange:n},Vl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){_t(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=jp,jp=!1,v}function Ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ih(e,n,s)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[io],delete e[Gd],delete e[x1],delete e[_1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qv(t){return t.tag===5||t.tag===3||t.tag===4}function Vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(i!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}function ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}var zt=null,Vn=!1;function ki(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:qt||Ns(n,e);case 6:var i=zt,r=Vn;zt=null,ki(t,e,n),zt=i,Vn=r,zt!==null&&(Vn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Vn?(t=zt,n=n.stateNode,t.nodeType===8?_u(t.parentNode,n):t.nodeType===1&&_u(t,n),Qa(t)):_u(zt,n.stateNode));break;case 4:i=zt,r=Vn,zt=n.stateNode.containerInfo,Vn=!0,ki(t,e,n),zt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ih(n,e,a),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!qt&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,ki(t,e,n),qt=i):ki(t,e,n);break;default:ki(t,e,n)}}function Gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new U1),e.forEach(function(i){var r=W1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,Vn=!1;break e;case 3:zt=o.stateNode.containerInfo,Vn=!0;break e;case 4:zt=o.stateNode.containerInfo,Vn=!0;break e}o=o.return}if(zt===null)throw Error(de(160));Yv(s,a,r),zt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,t),e=e.sibling}function $v(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),si(t),i&4){try{Ha(3,t,t.return),Dc(3,t)}catch(y){_t(t,t.return,y)}try{Ha(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:kn(e,t),si(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(kn(e,t),si(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Ya(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&v0(r,s),Pd(o,a);var c=Pd(o,s);for(a=0;a<l.length;a+=2){var u=l[a],p=l[a+1];u==="style"?M0(r,p):u==="dangerouslySetInnerHTML"?y0(r,p):u==="children"?Ya(r,p):Dh(r,u,p,c)}switch(o){case"input":Td(r,s);break;case"textarea":x0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Is(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[io]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(kn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(kn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:kn(e,t),si(t);break;case 13:kn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ff=yt())),i&4&&Gp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||u,kn(e,t),qt=c):kn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(p=Ee=u;Ee!==null;){switch(f=Ee,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ha(4,f,f.return);break;case 1:Ns(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:Ns(f,f.return);break;case 22:if(f.memoizedState!==null){Xp(p);continue}}m!==null?(m.return=f,Ee=m):Xp(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=S0("display",a))}catch(y){_t(t,t.return,y)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){_t(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:kn(e,t),si(t),i&4&&Gp(t);break;case 21:break;default:kn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qv(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ya(r,""),i.flags&=-33);var s=Vp(t);ah(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Vp(t);sh(t,o,a);break;default:throw Error(de(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O1(t,e,n){Ee=t,Kv(t)}function Kv(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ko;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||qt;o=ko;var c=qt;if(ko=a,(qt=l)&&!c)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?qp(r):l!==null?(l.return=a,Ee=l):qp(r);for(;s!==null;)Ee=s,Kv(s),s=s.sibling;Ee=r,ko=o,qt=c}Wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Wp(t)}}function Wp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Qa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}qt||e.flags&512&&rh(e)}catch(f){_t(e,e.return,f)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Xp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function qp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{rh(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{rh(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var k1=Math.ceil,ic=Ui.ReactCurrentDispatcher,df=Ui.ReactCurrentOwner,Un=Ui.ReactCurrentBatchConfig,Ze=0,Ut=null,At=null,Ht=0,_n=0,Ls=pr(0),Ct=0,co=null,Vr=0,Ic=0,hf=0,ja=null,cn=null,ff=0,$s=1/0,Ei=null,rc=!1,oh=null,ar=null,zo=!1,Qi=null,sc=0,Va=0,lh=null,Dl=-1,Il=0;function rn(){return Ze&6?yt():Dl!==-1?Dl:Dl=yt()}function or(t){return t.mode&1?Ze&2&&Ht!==0?Ht&-Ht:S1.transition!==null?(Il===0&&(Il=I0()),Il):(t=rt,t!==0||(t=window.event,t=t===void 0?16:H0(t.type)),t):1}function ni(t,e,n,i){if(50<Va)throw Va=0,lh=null,Error(de(185));po(t,n,i),(!(Ze&2)||t!==Ut)&&(t===Ut&&(!(Ze&2)&&(Ic|=n),Ct===4&&$i(t,Ht)),fn(t,i),n===1&&Ze===0&&!(e.mode&1)&&($s=yt()+500,Pc&&mr()))}function fn(t,e){var n=t.callbackNode;Sy(t,e);var i=jl(t,t===Ut?Ht:0);if(i===0)n!==null&&np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&np(n),e===1)t.tag===0?y1(Yp.bind(null,t)):av(Yp.bind(null,t)),g1(function(){!(Ze&6)&&mr()}),n=null;else{switch(U0(i)){case 1:n=kh;break;case 4:n=L0;break;case 16:n=Hl;break;case 536870912:n=D0;break;default:n=Hl}n=rx(n,Zv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zv(t,e){if(Dl=-1,Il=0,Ze&6)throw Error(de(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=jl(t,t===Ut?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ac(t,i);else{e=i;var r=Ze;Ze|=2;var s=Jv();(Ut!==t||Ht!==e)&&(Ei=null,$s=yt()+500,Fr(t,e));do try{H1();break}catch(o){Qv(t,o)}while(!0);Zh(),ic.current=s,Ze=r,At!==null?e=0:(Ut=null,Ht=0,e=Ct)}if(e!==0){if(e===2&&(r=Ud(t),r!==0&&(i=r,e=ch(t,r))),e===1)throw n=co,Fr(t,0),$i(t,i),fn(t,yt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!z1(r)&&(e=ac(t,i),e===2&&(s=Ud(t),s!==0&&(i=s,e=ch(t,s))),e===1))throw n=co,Fr(t,0),$i(t,i),fn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Cr(t,cn,Ei);break;case 3:if($i(t,i),(i&130023424)===i&&(e=ff+500-yt(),10<e)){if(jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vd(Cr.bind(null,t,cn,Ei),e);break}Cr(t,cn,Ei);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ti(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*k1(i/1960))-i,10<i){t.timeoutHandle=Vd(Cr.bind(null,t,cn,Ei),i);break}Cr(t,cn,Ei);break;case 5:Cr(t,cn,Ei);break;default:throw Error(de(329))}}}return fn(t,yt()),t.callbackNode===n?Zv.bind(null,t):null}function ch(t,e){var n=ja;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=ac(t,e),t!==2&&(e=cn,cn=n,e!==null&&uh(e)),t}function uh(t){cn===null?cn=t:cn.push.apply(cn,t)}function z1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~hf,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function Yp(t){if(Ze&6)throw Error(de(327));zs();var e=jl(t,0);if(!(e&1))return fn(t,yt()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var i=Ud(t);i!==0&&(e=i,n=ch(t,i))}if(n===1)throw n=co,Fr(t,0),$i(t,e),fn(t,yt()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,cn,Ei),fn(t,yt()),null}function pf(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&($s=yt()+500,Pc&&mr())}}function Gr(t){Qi!==null&&Qi.tag===0&&!(Ze&6)&&zs();var e=Ze;Ze|=1;var n=Un.transition,i=rt;try{if(Un.transition=null,rt=1,t)return t()}finally{rt=i,Un.transition=n,Ze=e,!(Ze&6)&&mr()}}function mf(){_n=Ls.current,ut(Ls)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,m1(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ql();break;case 3:qs(),ut(dn),ut(Kt),rf();break;case 5:nf(i);break;case 4:qs();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:Qh(i.type._context);break;case 22:case 23:mf()}n=n.return}if(Ut=t,At=t=lr(t.current,null),Ht=_n=e,Ct=0,co=null,hf=Ic=Vr=0,cn=ja=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Lr=null}return t}function Qv(t,e){do{var n=At;try{if(Zh(),Pl.current=nc,tc){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tc=!1}if(jr=0,Dt=bt=pt=null,Ba=!1,ao=0,df.current=null,n===null||n.return===null){Ct=1,co=e,At=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Up(a);if(m!==null){m.flags&=-257,Fp(m,a,o,s,e),m.mode&1&&Ip(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Ip(s,c,e),gf();break e}l=Error(de(426))}}else if(ht&&o.mode&1){var g=Up(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Fp(g,a,o,s,e),$h(Ys(l,o));break e}}s=l=Ys(l,o),Ct!==4&&(Ct=2),ja===null?ja=[s]:ja.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Uv(s,l,e);Cp(s,d);break e;case 1:o=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ar===null||!ar.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Fv(s,o,e);Cp(s,S);break e}}s=s.return}while(s!==null)}tx(n)}catch(C){e=C,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function Jv(){var t=ic.current;return ic.current=nc,t===null?nc:t}function gf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Ut===null||!(Vr&268435455)&&!(Ic&268435455)||$i(Ut,Ht)}function ac(t,e){var n=Ze;Ze|=2;var i=Jv();(Ut!==t||Ht!==e)&&(Ei=null,Fr(t,e));do try{B1();break}catch(r){Qv(t,r)}while(!0);if(Zh(),Ze=n,ic.current=i,At!==null)throw Error(de(261));return Ut=null,Ht=0,Ct}function B1(){for(;At!==null;)ex(At)}function H1(){for(;At!==null&&!hy();)ex(At)}function ex(t){var e=ix(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?tx(t):At=e,df.current=null}function tx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=I1(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,At=null;return}}else if(n=D1(n,e,_n),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Ct===0&&(Ct=5)}function Cr(t,e,n){var i=rt,r=Un.transition;try{Un.transition=null,rt=1,j1(t,e,n,i)}finally{Un.transition=r,rt=i}return null}function j1(t,e,n,i){do zs();while(Qi!==null);if(Ze&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(My(t,s),t===Ut&&(At=Ut=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,rx(Hl,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=rt;rt=1;var o=Ze;Ze|=4,df.current=null,F1(t,n),$v(n,t),l1(Hd),Vl=!!Bd,Hd=Bd=null,t.current=n,O1(n),fy(),Ze=o,rt=a,Un.transition=s}else t.current=n;if(zo&&(zo=!1,Qi=t,sc=r),s=t.pendingLanes,s===0&&(ar=null),gy(n.stateNode),fn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(rc)throw rc=!1,t=oh,oh=null,t;return sc&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===lh?Va++:(Va=0,lh=t):Va=0,mr(),null}function zs(){if(Qi!==null){var t=U0(sc),e=Un.transition,n=rt;try{if(Un.transition=null,rt=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,sc=0,Ze&6)throw Error(de(331));var r=Ze;for(Ze|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:Ha(8,u,s)}var p=u.child;if(p!==null)p.return=u,Ee=p;else for(;Ee!==null;){u=Ee;var f=u.sibling,m=u.return;if(Xv(u),u===c){Ee=null;break}if(f!==null){f.return=m,Ee=f;break}Ee=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ha(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var _=t.current;for(Ee=_;Ee!==null;){a=Ee;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Ee=x;else e:for(a=_;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Dc(9,o)}}catch(C){_t(o,o.return,C)}if(o===a){Ee=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ee=S;break e}Ee=o.return}}if(Ze=r,mr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{rt=n,Un.transition=e}}return!1}function $p(t,e,n){e=Ys(n,e),e=Uv(t,e,1),t=sr(t,e,1),e=rn(),t!==null&&(po(t,1,e),fn(t,e))}function _t(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=Ys(n,t),t=Fv(e,t,1),e=sr(e,t,1),t=rn(),e!==null&&(po(e,1,t),fn(e,t));break}}e=e.return}}function V1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Ht&n)===n&&(Ct===4||Ct===3&&(Ht&130023424)===Ht&&500>yt()-ff?Fr(t,0):hf|=n),fn(t,e)}function nx(t,e){e===0&&(t.mode&1?(e=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):e=1);var n=rn();t=Li(t,e),t!==null&&(po(t,e,n),fn(t,n))}function G1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nx(t,n)}function W1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),nx(t,n)}var ix;ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,L1(t,e,n);un=!!(t.flags&131072)}else un=!1,ht&&e.flags&1048576&&ov(e,Kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(t,e),t=e.pendingProps;var r=Gs(e,Kt.current);ks(e,n),r=af(null,e,i,t,r,n);var s=of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Yl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ef(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Kd(e,i,t,n),e=Jd(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&qh(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=q1(i),t=jn(i,t),r){case 0:e=Qd(null,e,i,t,n);break e;case 1:e=zp(null,e,i,t,n);break e;case 11:e=Op(null,e,i,t,n);break e;case 14:e=kp(null,e,i,jn(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Qd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),zp(t,e,i,r,n);case 3:e:{if(Bv(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fv(t,e),Jl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(de(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(de(424)),e),e=Bp(t,e,i,n,r);break e}else for(Sn=rr(e.stateNode.containerInfo.firstChild),Mn=e,ht=!0,qn=null,n=dv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Di(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return pv(e),t===null&&qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,jd(i,r)?a=null:s!==null&&jd(i,s)&&(e.flags|=32),zv(t,e),Jt(t,e,a,n),e.child;case 6:return t===null&&qd(e),null;case 13:return Hv(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Op(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(Zl,i._currentValue),i._currentValue=a,s!==null)if(ii(s.value,a)){if(s.children===r.children&&!dn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(de(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=Fn(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),kp(t,e,i,r,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ll(t,e),e.tag=1,hn(i)?(t=!0,Yl(e)):t=!1,ks(e,n),Iv(e,i,r),Kd(e,i,r,n),Jd(null,e,i,!0,t,n);case 19:return jv(t,e,n);case 22:return kv(t,e,n)}throw Error(de(156,e.tag))};function rx(t,e){return N0(t,e)}function X1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new X1(t,e,n,i)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q1(t){if(typeof t=="function")return vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uh)return 11;if(t===Fh)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")vf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ms:return Or(n.children,r,s,e);case Ih:a=8,r|=8;break;case yd:return t=In(12,n,e,r|2),t.elementType=yd,t.lanes=s,t;case Sd:return t=In(13,n,e,r),t.elementType=Sd,t.lanes=s,t;case Md:return t=In(19,n,e,r),t.elementType=Md,t.lanes=s,t;case p0:return Uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h0:a=10;break e;case f0:a=9;break e;case Uh:a=11;break e;case Fh:a=14;break e;case Wi:a=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=In(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=In(22,t,i,e),t.elementType=p0,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Cu(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xf(t,e,n,i,r,s,a,o,l){return t=new Y1(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(s),t}function $1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sx(t){if(!t)return dr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(hn(n))return sv(t,n,e)}return e}function ax(t,e,n,i,r,s,a,o,l){return t=xf(n,i,!0,t,r,s,a,o,l),t.context=sx(null),n=t.current,i=rn(),r=or(n),s=Ri(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,po(t,r,i),fn(t,i),t}function Fc(t,e,n,i){var r=e.current,s=rn(),a=or(r);return n=sx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,a),t!==null&&(ni(t,r,a,s),Rl(t,r,a)),a}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function K1(){return null}var ox=typeof reportError=="function"?reportError:function(t){console.error(t)};function yf(t){this._internalRoot=t}Oc.prototype.render=yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));Fc(t,e,null,null)};Oc.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Fc(null,t,null,null)}),e[Ni]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=k0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&B0(t)}};function Sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function Z1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=oc(a);s.call(c)}}var a=ax(e,i,t,0,null,!1,!1,"",Zp);return t._reactRootContainer=a,t[Ni]=a.current,to(t.nodeType===8?t.parentNode:t),Gr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=oc(l);o.call(c)}}var l=xf(t,0,!1,null,null,!1,!1,"",Zp);return t._reactRootContainer=l,t[Ni]=l.current,to(t.nodeType===8?t.parentNode:t),Gr(function(){Fc(e,l,n,i)}),l}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=oc(a);o.call(l)}}Fc(e,a,t,r)}else a=Z1(n,e,t,r,i);return oc(a)}F0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(zh(e,n|1),fn(e,yt()),!(Ze&6)&&($s=yt()+500,mr()))}break;case 13:Gr(function(){var i=Li(t,1);if(i!==null){var r=rn();ni(i,t,1,r)}}),_f(t,1)}};Bh=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=rn();ni(e,t,134217728,n)}_f(t,134217728)}};O0=function(t){if(t.tag===13){var e=or(t),n=Li(t,e);if(n!==null){var i=rn();ni(n,t,e,i)}_f(t,e)}};k0=function(){return rt};z0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Ld=function(t,e,n){switch(e){case"input":if(Td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rc(i);if(!r)throw Error(de(90));g0(i),Td(i,r)}}}break;case"textarea":x0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};T0=pf;A0=Gr;var Q1={usingClientEntryPoint:!1,Events:[go,As,Rc,E0,w0,pf]},_a={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J1={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R0(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||K1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Tc=Bo.inject(J1),ui=Bo}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q1;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(e))throw Error(de(200));return $1(t,e,null,n)};An.createRoot=function(t,e){if(!Sf(t))throw Error(de(299));var n=!1,i="",r=ox;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xf(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,to(t.nodeType===8?t.parentNode:t),new yf(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=R0(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Gr(t)};An.hydrate=function(t,e,n){if(!kc(e))throw Error(de(200));return zc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Sf(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=ox;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ax(e,null,t,1,n??null,r,!1,s,a),t[Ni]=e.current,to(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};An.render=function(t,e,n){if(!kc(e))throw Error(de(200));return zc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!kc(t))throw Error(de(40));return t._reactRootContainer?(Gr(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};An.unstable_batchedUpdates=pf;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return zc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lx)}catch(t){console.error(t)}}lx(),l0.exports=An;var eS=l0.exports,Qp=eS;xd.createRoot=Qp.createRoot,xd.hydrateRoot=Qp.hydrateRoot;function ca(t){let e=Math.floor(t)>>>0;return function(){e=e+1831565813>>>0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function kr(t,e,n){return t+n*(e-t)}function Jn(t,e,n){const i=Math.max(0,Math.min(1,(n-t)/(e-t)));return i*i*(3-2*i)}class xo{constructor(e){nu(this,"p",new Uint8Array(512));nu(this,"grad2",[[1,0],[-1,0],[0,1],[0,-1],[Math.SQRT1_2,Math.SQRT1_2],[-Math.SQRT1_2,Math.SQRT1_2],[Math.SQRT1_2,-Math.SQRT1_2],[-Math.SQRT1_2,-Math.SQRT1_2]]);this.reseed(e)}reseed(e){const n=ca(e),i=new Uint8Array(256);for(let r=0;r<256;r++)i[r]=r;for(let r=255;r>0;r--){const s=Math.floor(n()*(r+1)),a=i[r];i[r]=i[s],i[s]=a}for(let r=0;r<256;r++)this.p[r]=i[r],this.p[256+r]=i[r]}fade(e){return e*e*e*(e*(e*6-15)+10)}dotGrad(e,n,i){const r=this.grad2[e&7];return r[0]*n+r[1]*i}noise2D(e,n){const i=Math.floor(e)&255,r=Math.floor(n)&255,s=e-Math.floor(e),a=n-Math.floor(n),o=this.fade(s),l=this.fade(a),c=this.p[this.p[i]+r],u=this.p[this.p[i]+r+1],p=this.p[this.p[i+1]+r],f=this.p[this.p[i+1]+r+1],m=this.dotGrad(c,s,a),v=this.dotGrad(p,s-1,a),y=this.dotGrad(u,s,a-1),g=this.dotGrad(f,s-1,a-1),d=kr(m,v,o),_=kr(y,g,o);return kr(d,_,l)}}function zr(t,e,n,i,r,s,a){if(s==="plano"||r<=0)return 0;const o=.006*i,l=2,c=.5;let u=0,p=o,f=1,m=0;for(let g=0;g<n;g++){let d=a.noise2D(t*p,e*p);s==="montanoso"&&(d=1-Math.abs(d),d=d*d*2-1),u+=d*f,m+=f,p*=l,f*=c}const v=u/(m>0?m:1),y=s==="montanoso"?r*1.6:r;return v*y}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mf="165",es={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tS=0,Jp=1,nS=2,Bc=1,Fl=2,Mi=3,hr=0,sn=1,ci=2,Bt=0,Bs=1,dh=2,em=3,tm=4,cx=5,Yn=100,iS=101,rS=102,sS=103,aS=104,La=200,oS=201,lS=202,cS=203,hh=204,fh=205,ph=206,uS=207,mh=208,dS=209,hS=210,fS=211,pS=212,mS=213,gS=214,vS=0,xS=1,_S=2,lc=3,yS=4,SS=5,MS=6,ES=7,ux=0,wS=1,TS=2,cr=0,dx=1,hx=2,fx=3,Ef=4,AS=5,px=6,mx=7,gx=300,Ks=301,Zs=302,gh=303,vh=304,Hc=306,nn=1e3,Ir=1001,xh=1002,Yt=1003,bS=1004,Ho=1005,$n=1006,Ru=1007,Ur=1008,Ii=1009,CS=1010,RS=1011,cc=1012,vx=1013,Qs=1014,bi=1015,hi=1016,xx=1017,_x=1018,Wr=1020,PS=35902,NS=1021,LS=1022,ei=1023,DS=1024,IS=1025,Hs=1026,Xr=1027,yx=1028,Sx=1029,US=1030,Mx=1031,Ex=1033,Pu=33776,Nu=33777,Lu=33778,Du=33779,nm=35840,im=35841,rm=35842,sm=35843,am=36196,om=37492,lm=37496,cm=37808,um=37809,dm=37810,hm=37811,fm=37812,pm=37813,mm=37814,gm=37815,vm=37816,xm=37817,_m=37818,ym=37819,Sm=37820,Mm=37821,Iu=36492,Em=36494,wm=36495,FS=36283,Tm=36284,Am=36285,bm=36286,OS=3200,kS=3201,wf=0,zS=1,Ki="",en="srgb",gr="srgb-linear",Tf="display-p3",jc="display-p3-linear",uc="linear",ot="srgb",dc="rec709",hc="p3",ns=7680,Cm=519,BS=512,HS=513,jS=514,wx=515,VS=516,GS=517,WS=518,XS=519,Rm=35044,Pm="300 es",Ci=2e3,fc=2001;class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,_h=180/Math.PI;function _o(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function qS(t,e){return(t%e+e)%e}function Uu(t,e,n){return(1-n)*t+n*e}function ya(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const YS={DEG2RAD:Ga};class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],f=i[2],m=i[5],v=i[8],y=r[0],g=r[3],d=r[6],_=r[1],x=r[4],S=r[7],C=r[2],w=r[5],T=r[8];return s[0]=a*y+o*_+l*C,s[3]=a*g+o*x+l*w,s[6]=a*d+o*S+l*T,s[1]=c*y+u*_+p*C,s[4]=c*g+u*x+p*w,s[7]=c*d+u*S+p*T,s[2]=f*y+m*_+v*C,s[5]=f*g+m*x+v*w,s[8]=f*d+m*S+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=u*a-o*c,f=o*l-u*s,m=c*s-a*l,v=n*p+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=p*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Fu.makeScale(e,n)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new Ye;function Tx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $S(){const t=pc("canvas");return t.style.display="block",t}const Nm={};function Ax(t){t in Nm||(Nm[t]=!0,console.warn(t))}function KS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Lm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[gr]:{transfer:uc,primaries:dc,toReference:t=>t,fromReference:t=>t},[en]:{transfer:ot,primaries:dc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jc]:{transfer:uc,primaries:hc,toReference:t=>t.applyMatrix3(Dm),fromReference:t=>t.applyMatrix3(Lm)},[Tf]:{transfer:ot,primaries:hc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dm),fromReference:t=>t.applyMatrix3(Lm).convertLinearToSRGB()}},ZS=new Set([gr,jc]),tt={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ZS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=jo[e].toReference,r=jo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return jo[t].primaries},getTransfer:function(t){return t===Ki?uc:jo[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ou(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class QS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=pc("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=js(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class bx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ku(r[a].image)):s.push(ku(r[a]))}else s=ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?QS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;class $t extends $r{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=Ir,r=Ir,s=$n,a=Ur,o=ei,l=Ii,c=$t.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=_o(),this.name="",this.source=new bx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nn:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nn:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=gx;$t.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],p=l[8],f=l[1],m=l[5],v=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(p-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(m+1)/2,C=(d+1)/2,w=(u+f)/4,T=(p+y)/4,P=(v+g)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-v)*(g-v)+(p-y)*(p-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(p-y)/_,this.z=(f-u)/_,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends $r{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new bx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends tM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cx extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(p!==y||l!==f||c!==m||u!==v){let g=1-o;const d=l*f+c*m+u*v+p*y,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,d*_);g=Math.sin(g*w)/C,o=Math.sin(o*w)/C}const S=o*_;if(l=l*g+f*S,c=c*g+m*S,u=u*g+v*S,p=p*g+y*S,g===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=C,c*=C,u*=C,p*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],p=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+u*p+l*m-c*f,e[n+1]=l*v+u*f+c*p-o*m,e[n+2]=c*v+u*m+o*f-l*p,e[n+3]=u*v-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*u*p+c*m*v,this._y=c*m*p-f*u*v,this._z=c*u*v+f*m*p,this._w=c*u*p-f*m*v;break;case"YXZ":this._x=f*u*p+c*m*v,this._y=c*m*p-f*u*v,this._z=c*u*v-f*m*p,this._w=c*u*p+f*m*v;break;case"ZXY":this._x=f*u*p-c*m*v,this._y=c*m*p+f*u*v,this._z=c*u*v+f*m*p,this._w=c*u*p-f*m*v;break;case"ZYX":this._x=f*u*p-c*m*v,this._y=c*m*p+f*u*v,this._z=c*u*v-f*m*p,this._w=c*u*p+f*m*v;break;case"YZX":this._x=f*u*p+c*m*v,this._y=c*m*p+f*u*v,this._z=c*u*v-f*m*p,this._w=c*u*p-f*m*v;break;case"XZY":this._x=f*u*p-c*m*v,this._y=c*m*p-f*u*v,this._z=c*u*v+f*m*p,this._w=c*u*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*u,this.y=i+l*u+o*c-s*p,this.z=r+l*p+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new O,Im=new fi;class Kr{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Go.subVectors(this.max,Sa),rs.subVectors(e.a,Sa),ss.subVectors(e.b,Sa),as.subVectors(e.c,Sa),zi.subVectors(ss,rs),Bi.subVectors(as,ss),Sr.subVectors(rs,as);let n=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-Sr.z,Sr.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,Sr.z,0,-Sr.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-Sr.y,Sr.x,0];return!Bu(n,rs,ss,as,Go)||(n=[1,0,0,0,1,0,0,0,1],!Bu(n,rs,ss,as,Go))?!1:(Wo.crossVectors(zi,Bi),n=[Wo.x,Wo.y,Wo.z],Bu(n,rs,ss,as,Go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,Vo=new Kr,rs=new O,ss=new O,as=new O,zi=new O,Bi=new O,Sr=new O,Sa=new O,Go=new O,Wo=new O,Mr=new O;function Bu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Mr.fromArray(t,s);const o=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=n.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const iM=new Kr,Ma=new O,Hu=new O;class ua{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const n=Ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Hu)),this.expandByPoint(Ma.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new O,ju=new O,Xo=new O,Hi=new O,Vu=new O,qo=new O,Gu=new O;class Af{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ju.copy(e).add(n).multiplyScalar(.5),Xo.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(ju);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Xo),o=Hi.dot(this.direction),l=-Hi.dot(Xo),c=Hi.lengthSq(),u=Math.abs(1-a*a);let p,f,m,v;if(u>0)if(p=a*l-o,f=a*o-l,v=s*u,p>=0)if(f>=-v)if(f<=v){const y=1/u;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ju).addScaledVector(Xo,f),m}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){Vu.subVectors(n,e),qo.subVectors(i,e),Gu.crossVectors(Vu,qo);let a=this.direction.dot(Gu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(qo.crossVectors(Hi,qo));if(l<0)return null;const c=o*this.direction.dot(Vu.cross(Hi));if(c<0||l+c>a)return null;const u=-o*Hi.dot(Gu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,n,i,r,s,a,o,l,c,u,p,f,m,v,y,g){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,p,f,m,v,y,g)}set(e,n,i,r,s,a,o,l,c,u,p,f,m,v,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=f,d[3]=m,d[7]=v,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*p,v=o*u,y=o*p;n[0]=l*u,n[4]=-l*p,n[8]=c,n[1]=m+v*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*p,v=c*u,y=c*p;n[0]=f+y*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*u,n[9]=-o,n[2]=m*o-v,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*p,v=c*u,y=c*p;n[0]=f-y*o,n[4]=-a*p,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*u,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*p,v=o*u,y=o*p;n[0]=l*u,n[4]=v*c-m,n[8]=f*c+y,n[1]=l*p,n[5]=y*c+f,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,y=o*c;n[0]=l*u,n[4]=y-f*p,n[8]=v*p+m,n[1]=p,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=m*p+v,n[10]=f-y*p}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,y=o*c;n[0]=l*u,n[4]=-p,n[8]=c*u,n[1]=f*p+y,n[5]=a*u,n[9]=m*p-v,n[2]=v*p-m,n[6]=o*u,n[10]=y*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,sM)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ji.crossVectors(i,vn),ji.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ji.crossVectors(i,vn)),ji.normalize(),Yo.crossVectors(vn,ji),r[0]=ji.x,r[4]=Yo.x,r[8]=vn.x,r[1]=ji.y,r[5]=Yo.y,r[9]=vn.y,r[2]=ji.z,r[6]=Yo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],f=i[9],m=i[13],v=i[2],y=i[6],g=i[10],d=i[14],_=i[3],x=i[7],S=i[11],C=i[15],w=r[0],T=r[4],P=r[8],A=r[12],M=r[1],N=r[5],F=r[9],D=r[13],B=r[2],J=r[6],H=r[10],Z=r[14],I=r[3],Q=r[7],k=r[11],j=r[15];return s[0]=a*w+o*M+l*B+c*I,s[4]=a*T+o*N+l*J+c*Q,s[8]=a*P+o*F+l*H+c*k,s[12]=a*A+o*D+l*Z+c*j,s[1]=u*w+p*M+f*B+m*I,s[5]=u*T+p*N+f*J+m*Q,s[9]=u*P+p*F+f*H+m*k,s[13]=u*A+p*D+f*Z+m*j,s[2]=v*w+y*M+g*B+d*I,s[6]=v*T+y*N+g*J+d*Q,s[10]=v*P+y*F+g*H+d*k,s[14]=v*A+y*D+g*Z+d*j,s[3]=_*w+x*M+S*B+C*I,s[7]=_*T+x*N+S*J+C*Q,s[11]=_*P+x*F+S*H+C*k,s[15]=_*A+x*D+S*Z+C*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],p=e[6],f=e[10],m=e[14],v=e[3],y=e[7],g=e[11],d=e[15];return v*(+s*l*p-r*c*p-s*o*f+i*c*f+r*o*m-i*l*m)+y*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+g*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-n*l*p+n*o*f+r*a*p-i*a*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],f=e[10],m=e[11],v=e[12],y=e[13],g=e[14],d=e[15],_=p*g*c-y*f*c+y*l*m-o*g*m-p*l*d+o*f*d,x=v*f*c-u*g*c-v*l*m+a*g*m+u*l*d-a*f*d,S=u*y*c-v*p*c+v*o*m-a*y*m-u*o*d+a*p*d,C=v*p*l-u*y*l-v*o*f+a*y*f+u*o*g-a*p*g,w=n*_+i*x+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(y*f*s-p*g*s-y*r*m+i*g*m+p*r*d-i*f*d)*T,e[2]=(o*g*s-y*l*s+y*r*c-i*g*c-o*r*d+i*l*d)*T,e[3]=(p*l*s-o*f*s-p*r*c+i*f*c+o*r*m-i*l*m)*T,e[4]=x*T,e[5]=(u*g*s-v*f*s+v*r*m-n*g*m-u*r*d+n*f*d)*T,e[6]=(v*l*s-a*g*s-v*r*c+n*g*c+a*r*d-n*l*d)*T,e[7]=(a*f*s-u*l*s+u*r*c-n*f*c-a*r*m+n*l*m)*T,e[8]=S*T,e[9]=(v*p*s-u*y*s-v*i*m+n*y*m+u*i*d-n*p*d)*T,e[10]=(a*y*s-v*o*s+v*i*c-n*y*c-a*i*d+n*o*d)*T,e[11]=(u*o*s-a*p*s-u*i*c+n*p*c+a*i*m-n*o*m)*T,e[12]=C*T,e[13]=(u*y*r-v*p*r+v*i*f-n*y*f-u*i*g+n*p*g)*T,e[14]=(v*o*r-a*y*r-v*i*l+n*y*l+a*i*g-n*o*g)*T,e[15]=(a*p*r-u*o*r+u*i*l-n*p*l-a*i*f+n*o*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,p=o+o,f=s*c,m=s*u,v=s*p,y=a*u,g=a*p,d=o*p,_=l*c,x=l*u,S=l*p,C=i.x,w=i.y,T=i.z;return r[0]=(1-(y+d))*C,r[1]=(m+S)*C,r[2]=(v-x)*C,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(f+d))*w,r[6]=(g+_)*w,r[7]=0,r[8]=(v+x)*T,r[9]=(g-_)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const a=os.set(r[4],r[5],r[6]).length(),o=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/a,p=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=p,Bn.elements[9]*=p,Bn.elements[10]*=p,n.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ci){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,v;if(o===Ci)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===fc)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ci){const l=this.elements,c=1/(n-e),u=1/(i-r),p=1/(a-s),f=(n+e)*c,m=(i+r)*u;let v,y;if(o===Ci)v=(a+s)*p,y=-2*p;else if(o===fc)v=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const os=new O,Bn=new Qe,rM=new O(0,0,0),sM=new O(1,1,1),ji=new O,Yo=new O,vn=new O,Um=new Qe,Fm=new fi;class ri{constructor(e=0,n=0,i=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";let Rx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},aM=0;const Om=new O,ls=new fi,xi=new Qe,$o=new O,Ea=new O,oM=new O,lM=new fi,km=new O(1,0,0),zm=new O(0,1,0),Bm=new O(0,0,1),Hm={type:"added"},cM={type:"removed"},cs={type:"childadded",child:null},Wu={type:"childremoved",child:null};class Ft extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new O,n=new ri,i=new fi,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ye}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,n){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$o.copy(e):$o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ea,$o,this.up):xi.lookAt($o,Ea,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(xi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cM),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new O(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new O,_i=new O,Xu=new O,yi=new O,us=new O,ds=new O,jm=new O,qu=new O,Yu=new O,$u=new O;class Kn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),_i.subVectors(i,n),Xu.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(_i),l=Hn.dot(Xu),c=_i.dot(_i),u=_i.dot(Xu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*u)*f,v=(a*u-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),_i.subVectors(e,n),Hn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Hn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;us.subVectors(r,i),ds.subVectors(s,i),qu.subVectors(e,i);const l=us.dot(qu),c=ds.dot(qu);if(l<=0&&c<=0)return n.copy(i);Yu.subVectors(e,r);const u=us.dot(Yu),p=ds.dot(Yu);if(u>=0&&p<=u)return n.copy(r);const f=l*p-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(us,a);$u.subVectors(e,s);const m=us.dot($u),v=ds.dot($u);if(v>=0&&m<=v)return n.copy(s);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ds,o);const g=u*v-m*p;if(g<=0&&p-u>=0&&m-v>=0)return jm.subVectors(s,r),o=(p-u)/(p-u+(m-v)),n.copy(r).addScaledVector(jm,o);const d=1/(g+y+f);return a=y*d,o=f*d,n.copy(i).addScaledVector(us,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class _e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=qS(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ku(a,s,e+1/3),this.g=Ku(a,s,e),this.b=Ku(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=en){const i=Px[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Ou(e.r),this.g=Ou(e.g),this.b=Ou(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return tt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(tn(Xt.r*255,0,255))*65536+Math.round(tn(Xt.g*255,0,255))*256+Math.round(tn(Xt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=en){tt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==en?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Ko);const i=Uu(Vi.h,Ko.h,n),r=Uu(Vi.s,Ko.s,n),s=Uu(Vi.l,Ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new _e;_e.NAMES=Px;let uM=0;class Zr extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=Bs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=fh,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uo extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new O,Zo=new Ce;class wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ax("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zo.fromBufferAttribute(this,n),Zo.applyMatrix3(e),this.setXY(n,Zo.x,Zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ya(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}}class Nx extends wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lx extends wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ot extends wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let dM=0;const Nn=new Qe,Zu=new Ft,hs=new O,xn=new Kr,wa=new Kr,Lt=new O;class Cn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tx(e)?Lx:Nx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ot(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(xn.min,wa.min),xn.expandByPoint(Lt),Lt.addVectors(xn.max,wa.max),xn.expandByPoint(Lt)):(xn.expandByPoint(wa.min),xn.expandByPoint(wa.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(e,c),Lt.add(hs)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new O,l[P]=new O;const c=new O,u=new O,p=new O,f=new Ce,m=new Ce,v=new Ce,y=new O,g=new O;function d(P,A,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,A),p.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,M),u.sub(c),p.sub(c),m.sub(f),v.sub(f);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(N),g.copy(p).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(N),o[P].add(y),o[A].add(y),o[M].add(y),l[P].add(g),l[A].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,A=_.length;P<A;++P){const M=_[P],N=M.start,F=M.count;for(let D=N,B=N+F;D<B;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new O,S=new O,C=new O,w=new O;function T(P){C.fromBufferAttribute(r,P),w.copy(C);const A=o[P];x.copy(A),x.sub(C.multiplyScalar(C.dot(A))).normalize(),S.crossVectors(w,A);const N=S.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,N)}for(let P=0,A=_.length;P<A;++P){const M=_[P],N=M.start,F=M.count;for(let D=N,B=N+F;D<B;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,p=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,p=o.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let d=0;d<u;d++)f[v++]=c[m++]}return new wn(f,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const f=c[u],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let f=0,m=p.length;f<m;f++)u.push(p[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vm=new Qe,Er=new Af,Qo=new ua,Gm=new O,fs=new O,ps=new O,ms=new O,Qu=new O,Jo=new O,el=new Ce,tl=new Ce,nl=new Ce,Wm=new O,Xm=new O,qm=new O,il=new O,rl=new O;class dt extends Ft{constructor(e=new Cn,n=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Jo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(Qu.fromBufferAttribute(p,e),a?Jo.addScaledVector(Qu,u):Jo.addScaledVector(Qu.sub(n),u))}n.add(Jo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Qo.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Qo,Gm)===null||Er.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Vm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Vm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const g=f[v],d=a[g.materialIndex],_=Math.max(g.start,m.start),x=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=_,C=x;S<C;S+=3){const w=o.getX(S),T=o.getX(S+1),P=o.getX(S+2);r=sl(this,d,e,i,c,u,p,w,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=v,d=y;g<d;g+=3){const _=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);r=sl(this,a,e,i,c,u,p,_,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const g=f[v],d=a[g.materialIndex],_=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=_,C=x;S<C;S+=3){const w=S,T=S+1,P=S+2;r=sl(this,d,e,i,c,u,p,w,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=v,d=y;g<d;g+=3){const _=g,x=g+1,S=g+2;r=sl(this,a,e,i,c,u,p,_,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function hM(t,e,n,i,r,s,a,o){let l;if(e.side===sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===hr,o),l===null)return null;rl.copy(o),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,fs),t.getVertexPosition(l,ps),t.getVertexPosition(c,ms);const u=hM(t,e,n,i,fs,ps,ms,il);if(u){r&&(el.fromBufferAttribute(r,o),tl.fromBufferAttribute(r,l),nl.fromBufferAttribute(r,c),u.uv=Kn.getInterpolation(il,fs,ps,ms,el,tl,nl,new Ce)),s&&(el.fromBufferAttribute(s,o),tl.fromBufferAttribute(s,l),nl.fromBufferAttribute(s,c),u.uv1=Kn.getInterpolation(il,fs,ps,ms,el,tl,nl,new Ce)),a&&(Wm.fromBufferAttribute(a,o),Xm.fromBufferAttribute(a,l),qm.fromBufferAttribute(a,c),u.normal=Kn.getInterpolation(il,fs,ps,ms,Wm,Xm,qm,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new O,materialIndex:0};Kn.getNormal(fs,ps,ms,p.normal),u.face=p}return u}class it extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(p,2));function v(y,g,d,_,x,S,C,w,T,P,A){const M=S/T,N=C/P,F=S/2,D=C/2,B=w/2,J=T+1,H=P+1;let Z=0,I=0;const Q=new O;for(let k=0;k<H;k++){const j=k*N-D;for(let se=0;se<J;se++){const me=se*M-F;Q[y]=me*_,Q[g]=j*x,Q[d]=B,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[g]=0,Q[d]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),p.push(se/T),p.push(1-k/P),Z+=1}}for(let k=0;k<P;k++)for(let j=0;j<T;j++){const se=f+j+J*k,me=f+j+J*(k+1),V=f+(j+1)+J*(k+1),X=f+(j+1)+J*k;l.push(se,me,X),l.push(me,V,X),I+=6}o.addGroup(m,I,A),m+=I,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function fM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Zn={clone:Js,merge:Qt};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let Ix=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Gi=new O,Ym=new Ce,$m=new Ce;class yn extends Ix{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Ym,$m),n.subVectors($m,Ym)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gs=-90,vs=1;class gM extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(gs,vs,e,n);r.layers=this.layers,this.add(r);const s=new yn(gs,vs,e,n);s.layers=this.layers,this.add(s);const a=new yn(gs,vs,e,n);a.layers=this.layers,this.add(a);const o=new yn(gs,vs,e,n);o.layers=this.layers,this.add(o);const l=new yn(gs,vs,e,n);l.layers=this.layers,this.add(l);const c=new yn(gs,vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(p,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ux extends $t{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends En{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ux(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new it(5,5,5),s=new St({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Bt});s.uniforms.tEquirect.value=n;const a=new dt(r,s),o=n.minFilter;return n.minFilter===Ur&&(n.minFilter=$n),new gM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Ju=new O,xM=new O,_M=new Ye;class qi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ju.subVectors(i,n).cross(xM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_M.getNormalMatrix(e),r=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new ua,al=new O;class bf{constructor(e=new qi,n=new qi,i=new qi,r=new qi,s=new qi,a=new qi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],p=r[6],f=r[7],m=r[8],v=r[9],y=r[10],g=r[11],d=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-m,S-d).normalize(),i[1].setComponents(l+s,f+c,g+m,S+d).normalize(),i[2].setComponents(l+a,f+u,g+v,S+_).normalize(),i[3].setComponents(l-a,f-u,g-v,S-_).normalize(),i[4].setComponents(l-o,f-p,g-y,S-x).normalize(),n===Ci)i[5].setComponents(l+o,f+p,g+y,S+x).normalize();else if(n===fc)i[5].setComponents(o,p,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function yM(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const u=l.array,p=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,o),p.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let m=0,v=f.length;m<v;m++){const y=f[m];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(c,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ea extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,p=e/o,f=n/l,m=[],v=[],y=[],g=[];for(let d=0;d<u;d++){const _=d*f-a;for(let x=0;x<c;x++){const S=x*p-s;v.push(S,-_,0),y.push(0,0,1),g.push(x/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const x=_+c*d,S=_+c*(d+1),C=_+1+c*(d+1),w=_+1+c*d;m.push(x,S,w),m.push(S,C,w)}this.setIndex(m),this.setAttribute("position",new Ot(v,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,GM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ww=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:SM,alphahash_pars_fragment:MM,alphamap_fragment:EM,alphamap_pars_fragment:wM,alphatest_fragment:TM,alphatest_pars_fragment:AM,aomap_fragment:bM,aomap_pars_fragment:CM,batching_pars_vertex:RM,batching_vertex:PM,begin_vertex:NM,beginnormal_vertex:LM,bsdfs:DM,iridescence_fragment:IM,bumpmap_pars_fragment:UM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:zM,color_fragment:BM,color_pars_fragment:HM,color_pars_vertex:jM,color_vertex:VM,common:GM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:XM,displacementmap_pars_vertex:qM,displacementmap_vertex:YM,emissivemap_fragment:$M,emissivemap_pars_fragment:KM,colorspace_fragment:ZM,colorspace_pars_fragment:QM,envmap_fragment:JM,envmap_common_pars_fragment:eE,envmap_pars_fragment:tE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:fE,envmap_vertex:iE,fog_vertex:rE,fog_pars_vertex:sE,fog_fragment:aE,fog_pars_fragment:oE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:dE,lights_pars_begin:hE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:vE,lights_physical_fragment:xE,lights_physical_pars_fragment:_E,lights_fragment_begin:yE,lights_fragment_maps:SE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:bE,map_pars_fragment:CE,map_particle_fragment:RE,map_particle_pars_fragment:PE,metalnessmap_fragment:NE,metalnessmap_pars_fragment:LE,morphinstance_vertex:DE,morphcolor_vertex:IE,morphnormal_vertex:UE,morphtarget_pars_vertex:FE,morphtarget_vertex:OE,normal_fragment_begin:kE,normal_fragment_maps:zE,normal_pars_fragment:BE,normal_pars_vertex:HE,normal_vertex:jE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:qE,opaque_fragment:YE,packing:$E,premultiplied_alpha_fragment:KE,project_vertex:ZE,dithering_fragment:QE,dithering_pars_fragment:JE,roughnessmap_fragment:ew,roughnessmap_pars_fragment:tw,shadowmap_pars_fragment:nw,shadowmap_pars_vertex:iw,shadowmap_vertex:rw,shadowmask_pars_fragment:sw,skinbase_vertex:aw,skinning_pars_vertex:ow,skinning_vertex:lw,skinnormal_vertex:cw,specularmap_fragment:uw,specularmap_pars_fragment:dw,tonemapping_fragment:hw,tonemapping_pars_fragment:fw,transmission_fragment:pw,transmission_pars_fragment:mw,uv_pars_fragment:gw,uv_pars_vertex:vw,uv_vertex:xw,worldpos_vertex:_w,background_vert:yw,background_frag:Sw,backgroundCube_vert:Mw,backgroundCube_frag:Ew,cube_vert:ww,cube_frag:Tw,depth_vert:Aw,depth_frag:bw,distanceRGBA_vert:Cw,distanceRGBA_frag:Rw,equirect_vert:Pw,equirect_frag:Nw,linedashed_vert:Lw,linedashed_frag:Dw,meshbasic_vert:Iw,meshbasic_frag:Uw,meshlambert_vert:Fw,meshlambert_frag:Ow,meshmatcap_vert:kw,meshmatcap_frag:zw,meshnormal_vert:Bw,meshnormal_frag:Hw,meshphong_vert:jw,meshphong_frag:Vw,meshphysical_vert:Gw,meshphysical_frag:Ww,meshtoon_vert:Xw,meshtoon_frag:qw,points_vert:Yw,points_frag:$w,shadow_vert:Kw,shadow_frag:Zw,sprite_vert:Qw,sprite_frag:Jw},ge={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},oi={basic:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Qt([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Qt([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Qt([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Qt([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Qt([ge.lights,ge.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};oi.physical={uniforms:Qt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ol={r:0,b:0,g:0},Tr=new ri,eT=new Qe;function tT(t,e,n,i,r,s,a){const o=new _e(0);let l=s===!0?0:1,c,u,p=null,f=0,m=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function y(_){let x=!1;const S=v(_);S===null?d(o,l):S&&S.isColor&&(d(S,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===Hc)?(u===void 0&&(u=new dt(new it(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Js(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Tr.copy(x.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(Tr)),u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ot,(p!==S||f!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,f=S.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dt(new ea(2,2),new St({name:"BackgroundMaterial",uniforms:Js(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||f!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=S,f=S.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,x){_.getRGB(ol,Dx(t)),i.buffers.color.setClear(ol.r,ol.g,ol.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:y,addToRenderList:g}}function nT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,N,F,D,B){let J=!1;const H=p(D,F,N);s!==H&&(s=H,c(s.object)),J=m(M,D,F,B),J&&v(M,D,F,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(M,N,F,D),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function p(M,N,F){const D=F.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let J=B[N.id];J===void 0&&(J={},B[N.id]=J);let H=J[D];return H===void 0&&(H=f(l()),J[D]=H),H}function f(M){const N=[],F=[],D=[];for(let B=0;B<n;B++)N[B]=0,F[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:D,object:M,attributes:{},index:null}}function m(M,N,F,D){const B=s.attributes,J=N.attributes;let H=0;const Z=F.getAttributes();for(const I in Z)if(Z[I].location>=0){const k=B[I];let j=J[I];if(j===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),k===void 0||k.attribute!==j||j&&k.data!==j.data)return!0;H++}return s.attributesNum!==H||s.index!==D}function v(M,N,F,D){const B={},J=N.attributes;let H=0;const Z=F.getAttributes();for(const I in Z)if(Z[I].location>=0){let k=J[I];k===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(k=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(k=M.instanceColor));const j={};j.attribute=k,k&&k.data&&(j.data=k.data),B[I]=j,H++}s.attributes=B,s.attributesNum=H,s.index=D}function y(){const M=s.newAttributes;for(let N=0,F=M.length;N<F;N++)M[N]=0}function g(M){d(M,0)}function d(M,N){const F=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;F[M]=1,D[M]===0&&(t.enableVertexAttribArray(M),D[M]=1),B[M]!==N&&(t.vertexAttribDivisor(M,N),B[M]=N)}function _(){const M=s.newAttributes,N=s.enabledAttributes;for(let F=0,D=N.length;F<D;F++)N[F]!==M[F]&&(t.disableVertexAttribArray(F),N[F]=0)}function x(M,N,F,D,B,J,H){H===!0?t.vertexAttribIPointer(M,N,F,B,J):t.vertexAttribPointer(M,N,F,D,B,J)}function S(M,N,F,D){y();const B=D.attributes,J=F.getAttributes(),H=N.defaultAttributeValues;for(const Z in J){const I=J[Z];if(I.location>=0){let Q=B[Z];if(Q===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const k=Q.normalized,j=Q.itemSize,se=e.get(Q);if(se===void 0)continue;const me=se.buffer,V=se.type,X=se.bytesPerElement,re=V===t.INT||V===t.UNSIGNED_INT||Q.gpuType===vx;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Re=oe.stride,xe=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<I.locationSize;Ne++)d(I.location+Ne,oe.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<I.locationSize;Ne++)g(I.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Ne=0;Ne<I.locationSize;Ne++)x(I.location+Ne,j/I.locationSize,V,k,Re*X,(xe+j/I.locationSize*Ne)*X,re)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<I.locationSize;oe++)d(I.location+oe,Q.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<I.locationSize;oe++)g(I.location+oe);t.bindBuffer(t.ARRAY_BUFFER,me);for(let oe=0;oe<I.locationSize;oe++)x(I.location+oe,j/I.locationSize,V,k,j*X,j/I.locationSize*oe*X,re)}}else if(H!==void 0){const k=H[Z];if(k!==void 0)switch(k.length){case 2:t.vertexAttrib2fv(I.location,k);break;case 3:t.vertexAttrib3fv(I.location,k);break;case 4:t.vertexAttrib4fv(I.location,k);break;default:t.vertexAttrib1fv(I.location,k)}}}}_()}function C(){P();for(const M in i){const N=i[M];for(const F in N){const D=N[F];for(const B in D)u(D[B].object),delete D[B];delete N[F]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const F in N){const D=N[F];for(const B in D)u(D[B].object),delete D[B];delete N[F]}delete i[M.id]}function T(M){for(const N in i){const F=i[N];if(F[M.id]===void 0)continue;const D=F[M.id];for(const B in D)u(D[B].object),delete D[B];delete F[M.id]}}function P(){A(),a=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function iT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,p){p!==0&&(t.drawArraysInstanced(i,c,u,p),n.update(u,i,p))}function o(c,u,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<p;m++)this.render(c[m],u[m]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,p);let m=0;for(let v=0;v<p;v++)m+=u[v];n.update(m,i,1)}}function l(c,u,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,p);let v=0;for(let y=0;y<p;y++)v+=u[y];for(let y=0;y<f.length;y++)n.update(v,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==ei&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ii&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bi&&!T)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:S,maxSamples:C}}function sT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new qi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=u(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,x=_*4;let S=d.clippingState||null;l.value=S,S=u(v,f,x,m);for(let C=0;C!==x;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,f,m,v){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const d=m+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,S=m;x!==y;++x,S+=4)a.copy(p[x]).applyMatrix4(_,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function aT(t){let e=new WeakMap;function n(a,o){return o===gh?a.mapping=Ks:o===vh&&(a.mapping=Zs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===gh||o===vh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Cf extends Ix{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Km=[.125,.215,.35,.446,.526,.582],Pr=20,ed=new Cf,Zm=new _e;let td=null,nd=0,id=0,rd=!1;const Rr=(1+Math.sqrt(5))/2,xs=1/Rr,Qm=[new O(-Rr,xs,0),new O(Rr,xs,0),new O(-xs,0,Rr),new O(xs,0,Rr),new O(0,Rr,-xs),new O(0,Rr,xs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:hi,format:ei,colorSpace:gr,depthBuffer:!1},r=eg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(s)),this._blurMaterial=lT(s,e,n)}return r}_compileMaterial(e){const n=new dt(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,i,r){const o=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(Zm),u.toneMapping=cr,u.autoClear=!1;const m=new uo({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new dt(new it,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(Zm),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;ll(r,_*x,d>2?x:0,x,x),u.setRenderTarget(r),y&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ks||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ed)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qm[(r-s-1)%Qm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new dt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pr-1),y=s/v,g=isFinite(s)?1+Math.floor(u*y):Pr;g>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);const d=[];let _=0;for(let T=0;T<Pr;++T){const P=T/y,A=Math.exp(-P*P/2);d.push(A),T===0?_+=A:T<g&&(_+=2*A)}for(let T=0;T<d.length;T++)d[T]=d[T]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Ds?r-x+Ds:0),w=4*(this._cubeSize-S);ll(n,C,w,3*S,2*S),l.setRenderTarget(n),l.render(p,ed)}}function oT(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+Km.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ds?l=Km[a-t+Ds-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,p=1+c,f=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,v=6,y=3,g=2,d=1,_=new Float32Array(y*v*m),x=new Float32Array(g*v*m),S=new Float32Array(d*v*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,P=w>2?0:-1,A=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];_.set(A,y*v*w),x.set(f,g*v*w);const M=[w,w,w,w,w,w];S.set(M,d*v*w)}const C=new Cn;C.setAttribute("position",new wn(_,y)),C.setAttribute("uv",new wn(x,g)),C.setAttribute("faceIndex",new wn(S,d)),e.push(C),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function eg(t,e,n){const i=new En(t,e,n);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lT(t,e,n){const i=new Float32Array(Pr),r=new O(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function tg(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function ng(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function Rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gh||l===vh,u=l===Ks||l===Zs;if(c||u){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Jm(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Jm(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function uT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ax("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dT(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const y=m[v];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,v=p.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let x=0,S=_.length;x<S;x+=3){const C=_[x+0],w=_[x+1],T=_[x+2];f.push(C,w,w,T,T,C)}}else if(v!==void 0){const _=v.array;y=v.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const C=x+0,w=x+1,T=x+2;f.push(C,w,w,T,T,C)}}else return;const g=new(Tx(f)?Lx:Nx)(f,1);g.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function u(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function hT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,f*a,v),n.update(m,i,v))}function u(f,m,v){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v;g++)this.render(f[g]/a,m[g]);else{y.multiDrawElementsWEBGL(i,m,0,s,f,0,v);let g=0;for(let d=0;d<v;d++)g+=m[d];n.update(g,i,1)}}function p(f,m,v,y){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],y[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,y,0,v);let d=0;for(let _=0;_<v;_++)d+=m[_];for(let _=0;_<y.length;_++)n.update(d,i,y[_])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function fT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pT(t,e,n){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let C=o.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*w*4*p),P=new Cx(T,C,w,p);P.type=bi,P.needsUpdate=!0;const A=S*4;for(let N=0;N<p;N++){const F=d[N],D=_[N],B=x[N],J=C*w*4*N;for(let H=0;H<F.count;H++){const Z=H*A;v===!0&&(r.fromBufferAttribute(F,H),T[J+Z+0]=r.x,T[J+Z+1]=r.y,T[J+Z+2]=r.z,T[J+Z+3]=0),y===!0&&(r.fromBufferAttribute(D,H),T[J+Z+4]=r.x,T[J+Z+5]=r.y,T[J+Z+6]=r.z,T[J+Z+7]=0),g===!0&&(r.fromBufferAttribute(B,H),T[J+Z+8]=r.x,T[J+Z+9]=r.y,T[J+Z+10]=r.z,T[J+Z+11]=B.itemSize===4?r.w:1)}}f={count:p,texture:P,size:new Ce(C,w)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function mT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,p=e.get(l,u);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Pf extends $t{constructor(e,n,i,r,s,a,o,l,c,u=Hs){if(u!==Hs&&u!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=Qs),i===void 0&&u===Xr&&(i=Wr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ox=new $t,kx=new Pf(1,1);kx.compareFunction=wx;const zx=new Cx,Bx=new nM,Hx=new Ux,ig=[],rg=[],sg=new Float32Array(16),ag=new Float32Array(9),og=new Float32Array(4);function da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ig[r];if(s===void 0&&(s=new Float32Array(r),ig[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vc(t,e){let n=rg[e];n===void 0&&(n=new Int32Array(e),rg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function yT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;og.set(i),t.uniformMatrix2fv(this.addr,!1,og),Pt(n,i)}}function ST(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;ag.set(i),t.uniformMatrix3fv(this.addr,!1,ag),Pt(n,i)}}function MT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;sg.set(i),t.uniformMatrix4fv(this.addr,!1,sg),Pt(n,i)}}function ET(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function bT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function NT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?kx:Ox;n.setTexture2D(e||s,r)}function LT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Bx,r)}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Hx,r)}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zx,r)}function UT(t){switch(t){case 5126:return gT;case 35664:return vT;case 35665:return xT;case 35666:return _T;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return wT;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return bT;case 36294:return CT;case 36295:return RT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return IT}}function FT(t,e){t.uniform1fv(this.addr,e)}function OT(t,e){const n=da(e,this.size,2);t.uniform2fv(this.addr,n)}function kT(t,e){const n=da(e,this.size,3);t.uniform3fv(this.addr,n)}function zT(t,e){const n=da(e,this.size,4);t.uniform4fv(this.addr,n)}function BT(t,e){const n=da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HT(t,e){const n=da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jT(t,e){const n=da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function VT(t,e){t.uniform1iv(this.addr,e)}function GT(t,e){t.uniform2iv(this.addr,e)}function WT(t,e){t.uniform3iv(this.addr,e)}function XT(t,e){t.uniform4iv(this.addr,e)}function qT(t,e){t.uniform1uiv(this.addr,e)}function YT(t,e){t.uniform2uiv(this.addr,e)}function $T(t,e){t.uniform3uiv(this.addr,e)}function KT(t,e){t.uniform4uiv(this.addr,e)}function ZT(t,e,n){const i=this.cache,r=e.length,s=Vc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ox,s[a])}function QT(t,e,n){const i=this.cache,r=e.length,s=Vc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Bx,s[a])}function JT(t,e,n){const i=this.cache,r=e.length,s=Vc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Hx,s[a])}function e2(t,e,n){const i=this.cache,r=e.length,s=Vc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||zx,s[a])}function t2(t){switch(t){case 5126:return FT;case 35664:return OT;case 35665:return kT;case 35666:return zT;case 35674:return BT;case 35675:return HT;case 35676:return jT;case 5124:case 35670:return VT;case 35667:case 35671:return GT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return qT;case 36294:return YT;case 36295:return $T;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return e2}}class n2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UT(n.type)}}class i2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=t2(n.type)}}class r2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function lg(t,e){t.seq.push(e),t.map[e.id]=e}function s2(t,e,n){const i=t.name,r=i.length;for(sd.lastIndex=0;;){const s=sd.exec(i),a=sd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lg(n,c===void 0?new n2(o,t,e):new i2(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new r2(o),lg(n,p)),n=p}}}class Ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);s2(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function cg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const a2=37297;let o2=0;function l2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function c2(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===hc&&n===dc?i="LinearDisplayP3ToLinearSRGB":e===dc&&n===hc&&(i="LinearSRGBToLinearDisplayP3"),t){case gr:case jc:return[i,"LinearTransferOETF"];case en:case Tf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ug(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+l2(t.getShaderSource(e),a)}else return r}function u2(t,e){const n=c2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function d2(t,e){let n;switch(e){case dx:n="Linear";break;case hx:n="Reinhard";break;case fx:n="OptimizedCineon";break;case Ef:n="ACESFilmic";break;case px:n="AgX";break;case mx:n="Neutral";break;case AS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function h2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function f2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function p2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Da(t){return t!==""}function dg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(t){return t.replace(m2,v2)}const g2=new Map;function v2(t,e){let n=qe[e];if(n===void 0){const i=g2.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yh(n)}const x2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(t){return t.replace(x2,_2)}function _2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function S2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function E2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ux:e="ENVMAP_BLENDING_MULTIPLY";break;case wS:e="ENVMAP_BLENDING_MIX";break;case TS:e="ENVMAP_BLENDING_ADD";break}return e}function w2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function T2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=y2(n),c=S2(n),u=M2(n),p=E2(n),f=w2(n),m=h2(n),v=f2(s),y=r.createProgram();let g,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Da).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Da).join(`
`),d.length>0&&(d+=`
`)):(g=[pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),d=[pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?qe.tonemapping_pars_fragment:"",n.toneMapping!==cr?d2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,u2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Da).join(`
`)),a=yh(a),a=dg(a,n),a=hg(a,n),o=yh(o),o=dg(o,n),o=hg(o,n),a=fg(a),o=fg(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+g+a,S=_+d+o,C=cg(r,r.VERTEX_SHADER,x),w=cg(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(N){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),D=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(w).trim();let J=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,w);else{const Z=ug(r,C,"vertex"),I=ug(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+Z+`
`+I)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||B==="")&&(H=!1);H&&(N.diagnostics={runnable:J,programLog:F,vertexShader:{log:D,prefix:g},fragmentShader:{log:B,prefix:d}})}r.deleteShader(C),r.deleteShader(w),P=new Ol(r,y),A=p2(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,a2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=o2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=w,this}let A2=0;class b2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new C2(e),n.set(e,i)),i}}class C2{constructor(e){this.id=A2++,this.code=e,this.usedTimes=0}}function R2(t,e,n,i,r,s,a){const o=new Rx,l=new b2,c=new Set,u=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,M,N,F,D){const B=F.fog,J=D.geometry,H=A.isMeshStandardMaterial?F.environment:null,Z=(A.isMeshStandardMaterial?n:e).get(A.envMap||H),I=Z&&Z.mapping===Hc?Z.image.height:null,Q=v[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const k=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,j=k!==void 0?k.length:0;let se=0;J.morphAttributes.position!==void 0&&(se=1),J.morphAttributes.normal!==void 0&&(se=2),J.morphAttributes.color!==void 0&&(se=3);let me,V,X,re;if(Q){const Je=oi[Q];me=Je.vertexShader,V=Je.fragmentShader}else me=A.vertexShader,V=A.fragmentShader,l.update(A),X=l.getVertexShaderID(A),re=l.getFragmentShaderID(A);const oe=t.getRenderTarget(),Re=D.isInstancedMesh===!0,xe=D.isBatchedMesh===!0,Ne=!!A.map,U=!!A.matcap,ze=!!Z,Fe=!!A.aoMap,Ue=!!A.lightMap,pe=!!A.bumpMap,De=!!A.normalMap,we=!!A.displacementMap,Se=!!A.emissiveMap,We=!!A.metalnessMap,L=!!A.roughnessMap,b=A.anisotropy>0,q=A.clearcoat>0,te=A.dispersion>0,ie=A.iridescence>0,ne=A.sheen>0,Me=A.transmission>0,ue=b&&!!A.anisotropyMap,he=q&&!!A.clearcoatMap,Te=q&&!!A.clearcoatNormalMap,le=q&&!!A.clearcoatRoughnessMap,Ae=ie&&!!A.iridescenceMap,Xe=ie&&!!A.iridescenceThicknessMap,ke=ne&&!!A.sheenColorMap,ve=ne&&!!A.sheenRoughnessMap,je=!!A.specularMap,Ve=!!A.specularColorMap,st=!!A.specularIntensityMap,E=Me&&!!A.transmissionMap,$=Me&&!!A.thicknessMap,W=!!A.gradientMap,ee=!!A.alphaMap,ce=A.alphaTest>0,Le=!!A.alphaHash,Ge=!!A.extensions;let gt=cr;A.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Mt={shaderID:Q,shaderType:A.type,shaderName:A.name,vertexShader:me,fragmentShader:V,defines:A.defines,customVertexShaderID:X,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:xe,batchingColor:xe&&D._colorsTexture!==null,instancing:Re,instancingColor:Re&&D.instanceColor!==null,instancingMorph:Re&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:gr,alphaToCoverage:!!A.alphaToCoverage,map:Ne,matcap:U,envMap:ze,envMapMode:ze&&Z.mapping,envMapCubeUVHeight:I,aoMap:Fe,lightMap:Ue,bumpMap:pe,normalMap:De,displacementMap:f&&we,emissiveMap:Se,normalMapObjectSpace:De&&A.normalMapType===zS,normalMapTangentSpace:De&&A.normalMapType===wf,metalnessMap:We,roughnessMap:L,anisotropy:b,anisotropyMap:ue,clearcoat:q,clearcoatMap:he,clearcoatNormalMap:Te,clearcoatRoughnessMap:le,dispersion:te,iridescence:ie,iridescenceMap:Ae,iridescenceThicknessMap:Xe,sheen:ne,sheenColorMap:ke,sheenRoughnessMap:ve,specularMap:je,specularColorMap:Ve,specularIntensityMap:st,transmission:Me,transmissionMap:E,thicknessMap:$,gradientMap:W,opaque:A.transparent===!1&&A.blending===Bs&&A.alphaToCoverage===!1,alphaMap:ee,alphaTest:ce,alphaHash:Le,combine:A.combine,mapUv:Ne&&y(A.map.channel),aoMapUv:Fe&&y(A.aoMap.channel),lightMapUv:Ue&&y(A.lightMap.channel),bumpMapUv:pe&&y(A.bumpMap.channel),normalMapUv:De&&y(A.normalMap.channel),displacementMapUv:we&&y(A.displacementMap.channel),emissiveMapUv:Se&&y(A.emissiveMap.channel),metalnessMapUv:We&&y(A.metalnessMap.channel),roughnessMapUv:L&&y(A.roughnessMap.channel),anisotropyMapUv:ue&&y(A.anisotropyMap.channel),clearcoatMapUv:he&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(A.sheenRoughnessMap.channel),specularMapUv:je&&y(A.specularMap.channel),specularColorMapUv:Ve&&y(A.specularColorMap.channel),specularIntensityMapUv:st&&y(A.specularIntensityMap.channel),transmissionMapUv:E&&y(A.transmissionMap.channel),thicknessMapUv:$&&y(A.thicknessMap.channel),alphaMapUv:ee&&y(A.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(De||b),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!J.attributes.uv&&(Ne||ee),fog:!!B,useFog:A.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:D.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ne&&A.map.isVideoTexture===!0&&tt.getTransfer(A.map.colorSpace)===ot,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ci,flipSided:A.side===sn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ge&&A.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function d(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const N in A.defines)M.push(N),M.push(A.defines[N]);return A.isRawShaderMaterial===!1&&(_(M,A),x(M,A),M.push(t.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function _(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function x(A,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),A.push(o.mask)}function S(A){const M=v[A.type];let N;if(M){const F=oi[M];N=Zn.clone(F.uniforms)}else N=A.uniforms;return N}function C(A,M){let N;for(let F=0,D=u.length;F<D;F++){const B=u[F];if(B.cacheKey===M){N=B,++N.usedTimes;break}}return N===void 0&&(N=new T2(t,M,A,s),u.push(N)),N}function w(A){if(--A.usedTimes===0){const M=u.indexOf(A);u[M]=u[u.length-1],u.pop(),A.destroy()}}function T(A){l.remove(A)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:P}}function P2(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function N2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,m,v,y,g){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:y,group:g},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=p.renderOrder,d.z=y,d.group=g),e++,d}function o(p,f,m,v,y,g){const d=a(p,f,m,v,y,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(p,f,m,v,y,g){const d=a(p,f,m,v,y,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,f){n.length>1&&n.sort(p||N2),i.length>1&&i.sort(f||mg),r.length>1&&r.sort(f||mg)}function u(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function L2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new gg,t.set(i,[a])):r>=s.length?(a=new gg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function D2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new _e};break;case"SpotLight":n={position:new O,direction:new O,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new _e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":n={color:new _e,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function I2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let U2=0;function F2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function O2(t){const e=new D2,n=I2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new Qe,a=new Qe;function o(c){let u=0,p=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,v=0,y=0,g=0,d=0,_=0,x=0,S=0,C=0,w=0,T=0;c.sort(F2);for(let A=0,M=c.length;A<M;A++){const N=c[A],F=N.color,D=N.intensity,B=N.distance,J=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=F.r*D,p+=F.g*D,f+=F.b*D;else if(N.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],D);T++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Z=N.shadow,I=n.get(N);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=N.shadow.matrix,_++}i.directional[m]=H,m++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(F).multiplyScalar(D),H.distance=B,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,i.spot[y]=H;const Z=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,Z.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[y]=Z.matrix,N.castShadow){const I=n.get(N);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=J,S++}y++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy(F).multiplyScalar(D),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=H,g++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const Z=N.shadow,I=n.get(N);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=N.shadow.matrix,x++}i.point[v]=H,v++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(D),H.groundColor.copy(N.groundColor).multiplyScalar(D),i.hemi[d]=H,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==d||P.numDirectionalShadows!==_||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,P.directionalLength=m,P.pointLength=v,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=d,P.numDirectionalShadows=_,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=T,i.version=U2++)}function l(c,u){let p=0,f=0,m=0,v=0,y=0;const g=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const x=c[d];if(x.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(x.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function vg(t){const e=new O2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function k2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vg(t),e.set(r,[o])):s>=a.length?(o=new vg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class z2 extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B2 extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V2(t,e,n){let i=new bf;const r=new Ce,s=new Ce,a=new It,o=new z2({depthPacking:kS}),l=new B2,c={},u=n.maxTextureSize,p={[hr]:sn,[sn]:hr,[ci]:ci},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:H2,fragmentShader:j2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Cn;v.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new dt(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let d=this.type;this.render=function(w,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const A=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Bt),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=d!==Mi&&this.type===Mi,B=d===Mi&&this.type!==Mi;for(let J=0,H=w.length;J<H;J++){const Z=w[J],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Q=I.getFrameExtents();if(r.multiply(Q),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||D===!0||B===!0){const j=this.type!==Mi?{minFilter:Yt,magFilter:Yt}:{};I.map!==null&&I.map.dispose(),I.map=new En(r.x,r.y,j),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const k=I.getViewportCount();for(let j=0;j<k;j++){const se=I.getViewport(j);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),F.viewport(a),I.updateMatrices(Z,j),i=I.getFrustum(),S(T,P,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===Mi&&_(I,P),I.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(A,M,N)};function _(w,T){const P=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new En(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,P,f,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,P,m,y,null)}function x(w,T,P,A){let M=null;const N=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)M=N;else if(M=P.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=M.uuid,D=T.uuid;let B=c[F];B===void 0&&(B={},c[F]=B);let J=B[D];J===void 0&&(J=M.clone(),B[D]=J,T.addEventListener("dispose",C)),M=J}if(M.visible=T.visible,M.wireframe=T.wireframe,A===Mi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:p[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=P}return M}function S(w,T,P,A,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Mi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const D=e.update(w),B=w.material;if(Array.isArray(B)){const J=D.groups;for(let H=0,Z=J.length;H<Z;H++){const I=J[H],Q=B[I.materialIndex];if(Q&&Q.visible){const k=x(w,Q,A,M);w.onBeforeShadow(t,w,T,P,D,k,I),t.renderBufferDirect(P,null,D,k,w,I),w.onAfterShadow(t,w,T,P,D,k,I)}}}else if(B.visible){const J=x(w,B,A,M);w.onBeforeShadow(t,w,T,P,D,J,null),t.renderBufferDirect(P,null,D,J,w,null),w.onAfterShadow(t,w,T,P,D,J,null)}}const F=w.children;for(let D=0,B=F.length;D<B;D++)S(F[D],T,P,A,M)}function C(w){w.target.removeEventListener("dispose",C);for(const P in c){const A=c[P],M=w.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}function G2(t){function e(){let E=!1;const $=new It;let W=null;const ee=new It(0,0,0,0);return{setMask:function(ce){W!==ce&&!E&&(t.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){E=ce},setClear:function(ce,Le,Ge,gt,Mt){Mt===!0&&(ce*=gt,Le*=gt,Ge*=gt),$.set(ce,Le,Ge,gt),ee.equals($)===!1&&(t.clearColor(ce,Le,Ge,gt),ee.copy($))},reset:function(){E=!1,W=null,ee.set(-1,0,0,0)}}}function n(){let E=!1,$=null,W=null,ee=null;return{setTest:function(ce){ce?re(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ce){$!==ce&&!E&&(t.depthMask(ce),$=ce)},setFunc:function(ce){if(W!==ce){switch(ce){case vS:t.depthFunc(t.NEVER);break;case xS:t.depthFunc(t.ALWAYS);break;case _S:t.depthFunc(t.LESS);break;case lc:t.depthFunc(t.LEQUAL);break;case yS:t.depthFunc(t.EQUAL);break;case SS:t.depthFunc(t.GEQUAL);break;case MS:t.depthFunc(t.GREATER);break;case ES:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=ce}},setLocked:function(ce){E=ce},setClear:function(ce){ee!==ce&&(t.clearDepth(ce),ee=ce)},reset:function(){E=!1,$=null,W=null,ee=null}}}function i(){let E=!1,$=null,W=null,ee=null,ce=null,Le=null,Ge=null,gt=null,Mt=null;return{setTest:function(Je){E||(Je?re(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Je){$!==Je&&!E&&(t.stencilMask(Je),$=Je)},setFunc:function(Je,Et,wt){(W!==Je||ee!==Et||ce!==wt)&&(t.stencilFunc(Je,Et,wt),W=Je,ee=Et,ce=wt)},setOp:function(Je,Et,wt){(Le!==Je||Ge!==Et||gt!==wt)&&(t.stencilOp(Je,Et,wt),Le=Je,Ge=Et,gt=wt)},setLocked:function(Je){E=Je},setClear:function(Je){Mt!==Je&&(t.clearStencil(Je),Mt=Je)},reset:function(){E=!1,$=null,W=null,ee=null,ce=null,Le=null,Ge=null,gt=null,Mt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,f=[],m=null,v=!1,y=null,g=null,d=null,_=null,x=null,S=null,C=null,w=new _e(0,0,0),T=0,P=!1,A=null,M=null,N=null,F=null,D=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,H=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=H>=2);let I=null,Q={};const k=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),se=new It().fromArray(k),me=new It().fromArray(j);function V(E,$,W,ee){const ce=new Uint8Array(4),Le=t.createTexture();t.bindTexture(E,Le),t.texParameteri(E,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(E,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<W;Ge++)E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY?t.texImage3D($,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D($+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return Le}const X={};X[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),re(t.DEPTH_TEST),s.setFunc(lc),pe(!1),De(Jp),re(t.CULL_FACE),Fe(Bt);function re(E){c[E]!==!0&&(t.enable(E),c[E]=!0)}function oe(E){c[E]!==!1&&(t.disable(E),c[E]=!1)}function Re(E,$){return u[E]!==$?(t.bindFramebuffer(E,$),u[E]=$,E===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=$),E===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=$),!0):!1}function xe(E,$){let W=f,ee=!1;if(E){W=p.get($),W===void 0&&(W=[],p.set($,W));const ce=E.textures;if(W.length!==ce.length||W[0]!==t.COLOR_ATTACHMENT0){for(let Le=0,Ge=ce.length;Le<Ge;Le++)W[Le]=t.COLOR_ATTACHMENT0+Le;W.length=ce.length,ee=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,ee=!0);ee&&t.drawBuffers(W)}function Ne(E){return m!==E?(t.useProgram(E),m=E,!0):!1}const U={[Yn]:t.FUNC_ADD,[iS]:t.FUNC_SUBTRACT,[rS]:t.FUNC_REVERSE_SUBTRACT};U[sS]=t.MIN,U[aS]=t.MAX;const ze={[La]:t.ZERO,[oS]:t.ONE,[lS]:t.SRC_COLOR,[hh]:t.SRC_ALPHA,[hS]:t.SRC_ALPHA_SATURATE,[mh]:t.DST_COLOR,[ph]:t.DST_ALPHA,[cS]:t.ONE_MINUS_SRC_COLOR,[fh]:t.ONE_MINUS_SRC_ALPHA,[dS]:t.ONE_MINUS_DST_COLOR,[uS]:t.ONE_MINUS_DST_ALPHA,[fS]:t.CONSTANT_COLOR,[pS]:t.ONE_MINUS_CONSTANT_COLOR,[mS]:t.CONSTANT_ALPHA,[gS]:t.ONE_MINUS_CONSTANT_ALPHA};function Fe(E,$,W,ee,ce,Le,Ge,gt,Mt,Je){if(E===Bt){v===!0&&(oe(t.BLEND),v=!1);return}if(v===!1&&(re(t.BLEND),v=!0),E!==cx){if(E!==y||Je!==P){if((g!==Yn||x!==Yn)&&(t.blendEquation(t.FUNC_ADD),g=Yn,x=Yn),Je)switch(E){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.ONE,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}d=null,_=null,S=null,C=null,w.set(0,0,0),T=0,y=E,P=Je}return}ce=ce||$,Le=Le||W,Ge=Ge||ee,($!==g||ce!==x)&&(t.blendEquationSeparate(U[$],U[ce]),g=$,x=ce),(W!==d||ee!==_||Le!==S||Ge!==C)&&(t.blendFuncSeparate(ze[W],ze[ee],ze[Le],ze[Ge]),d=W,_=ee,S=Le,C=Ge),(gt.equals(w)===!1||Mt!==T)&&(t.blendColor(gt.r,gt.g,gt.b,Mt),w.copy(gt),T=Mt),y=E,P=!1}function Ue(E,$){E.side===ci?oe(t.CULL_FACE):re(t.CULL_FACE);let W=E.side===sn;$&&(W=!W),pe(W),E.blending===Bs&&E.transparent===!1?Fe(Bt):Fe(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),s.setFunc(E.depthFunc),s.setTest(E.depthTest),s.setMask(E.depthWrite),r.setMask(E.colorWrite);const ee=E.stencilWrite;a.setTest(ee),ee&&(a.setMask(E.stencilWriteMask),a.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),a.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Se(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function pe(E){A!==E&&(E?t.frontFace(t.CW):t.frontFace(t.CCW),A=E)}function De(E){E!==tS?(re(t.CULL_FACE),E!==M&&(E===Jp?t.cullFace(t.BACK):E===nS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),M=E}function we(E){E!==N&&(J&&t.lineWidth(E),N=E)}function Se(E,$,W){E?(re(t.POLYGON_OFFSET_FILL),(F!==$||D!==W)&&(t.polygonOffset($,W),F=$,D=W)):oe(t.POLYGON_OFFSET_FILL)}function We(E){E?re(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function L(E){E===void 0&&(E=t.TEXTURE0+B-1),I!==E&&(t.activeTexture(E),I=E)}function b(E,$,W){W===void 0&&(I===null?W=t.TEXTURE0+B-1:W=I);let ee=Q[W];ee===void 0&&(ee={type:void 0,texture:void 0},Q[W]=ee),(ee.type!==E||ee.texture!==$)&&(I!==W&&(t.activeTexture(W),I=W),t.bindTexture(E,$||X[E]),ee.type=E,ee.texture=$)}function q(){const E=Q[I];E!==void 0&&E.type!==void 0&&(t.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Xe(){try{t.texImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ke(E){se.equals(E)===!1&&(t.scissor(E.x,E.y,E.z,E.w),se.copy(E))}function ve(E){me.equals(E)===!1&&(t.viewport(E.x,E.y,E.z,E.w),me.copy(E))}function je(E,$){let W=l.get($);W===void 0&&(W=new WeakMap,l.set($,W));let ee=W.get(E);ee===void 0&&(ee=t.getUniformBlockIndex($,E.name),W.set(E,ee))}function Ve(E,$){const ee=l.get($).get(E);o.get($)!==ee&&(t.uniformBlockBinding($,ee,E.__bindingPointIndex),o.set($,ee))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,Q={},u={},p=new WeakMap,f=[],m=null,v=!1,y=null,g=null,d=null,_=null,x=null,S=null,C=null,w=new _e(0,0,0),T=0,P=!1,A=null,M=null,N=null,F=null,D=null,se.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:re,disable:oe,bindFramebuffer:Re,drawBuffers:xe,useProgram:Ne,setBlending:Fe,setMaterial:Ue,setFlipSided:pe,setCullFace:De,setLineWidth:we,setPolygonOffset:Se,setScissorTest:We,activeTexture:L,bindTexture:b,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:Ae,texImage3D:Xe,updateUBOMapping:je,uniformBlockBinding:Ve,texStorage2D:Te,texStorage3D:le,texSubImage2D:ne,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:he,scissor:ke,viewport:ve,reset:st}}function W2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,b){return m?new OffscreenCanvas(L,b):pc("canvas")}function y(L,b,q){let te=1;const ie=We(L);if((ie.width>q||ie.height>q)&&(te=q/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ne=Math.floor(te*ie.width),Me=Math.floor(te*ie.height);p===void 0&&(p=v(ne,Me));const ue=b?v(ne,Me):p;return ue.width=ne,ue.height=Me,ue.getContext("2d").drawImage(L,0,0,ne,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ne+"x"+Me+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Yt&&L.minFilter!==$n}function d(L){t.generateMipmap(L)}function _(L,b,q,te,ie=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ne=b;if(b===t.RED&&(q===t.FLOAT&&(ne=t.R32F),q===t.HALF_FLOAT&&(ne=t.R16F),q===t.UNSIGNED_BYTE&&(ne=t.R8)),b===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ne=t.R8UI),q===t.UNSIGNED_SHORT&&(ne=t.R16UI),q===t.UNSIGNED_INT&&(ne=t.R32UI),q===t.BYTE&&(ne=t.R8I),q===t.SHORT&&(ne=t.R16I),q===t.INT&&(ne=t.R32I)),b===t.RG&&(q===t.FLOAT&&(ne=t.RG32F),q===t.HALF_FLOAT&&(ne=t.RG16F),q===t.UNSIGNED_BYTE&&(ne=t.RG8)),b===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(ne=t.RG8UI),q===t.UNSIGNED_SHORT&&(ne=t.RG16UI),q===t.UNSIGNED_INT&&(ne=t.RG32UI),q===t.BYTE&&(ne=t.RG8I),q===t.SHORT&&(ne=t.RG16I),q===t.INT&&(ne=t.RG32I)),b===t.RGB&&q===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),b===t.RGBA){const Me=ie?uc:tt.getTransfer(te);q===t.FLOAT&&(ne=t.RGBA32F),q===t.HALF_FLOAT&&(ne=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ne=Me===ot?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(L,b){let q;return L?b===null||b===Qs||b===Wr?q=t.DEPTH24_STENCIL8:b===bi?q=t.DEPTH32F_STENCIL8:b===cc&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qs||b===Wr?q=t.DEPTH_COMPONENT24:b===bi?q=t.DEPTH_COMPONENT32F:b===cc&&(q=t.DEPTH_COMPONENT16),q}function S(L,b){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Yt&&L.minFilter!==$n?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function C(L){const b=L.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&u.delete(b)}function w(L){const b=L.target;b.removeEventListener("dispose",w),A(b)}function T(L){const b=i.get(L);if(b.__webglInit===void 0)return;const q=L.source,te=f.get(q);if(te){const ie=te[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(L),Object.keys(te).length===0&&f.delete(q)}i.remove(L)}function P(L){const b=i.get(L);t.deleteTexture(b.__webglTexture);const q=L.source,te=f.get(q);delete te[b.__cacheKey],a.memory.textures--}function A(L){const b=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ie=0;ie<b.__webglFramebuffer[te].length;ie++)t.deleteFramebuffer(b.__webglFramebuffer[te][ie]);else t.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)t.deleteFramebuffer(b.__webglFramebuffer[te]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=L.textures;for(let te=0,ie=q.length;te<ie;te++){const ne=i.get(q[te]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(q[te])}i.remove(L)}let M=0;function N(){M=0}function F(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function D(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function B(L,b){const q=i.get(L);if(L.isVideoTexture&&we(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(q,L,b);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+b)}function J(L,b){const q=i.get(L);if(L.version>0&&q.__version!==L.version){me(q,L,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+b)}function H(L,b){const q=i.get(L);if(L.version>0&&q.__version!==L.version){me(q,L,b);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+b)}function Z(L,b){const q=i.get(L);if(L.version>0&&q.__version!==L.version){V(q,L,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+b)}const I={[nn]:t.REPEAT,[Ir]:t.CLAMP_TO_EDGE,[xh]:t.MIRRORED_REPEAT},Q={[Yt]:t.NEAREST,[bS]:t.NEAREST_MIPMAP_NEAREST,[Ho]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[Ru]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},k={[BS]:t.NEVER,[XS]:t.ALWAYS,[HS]:t.LESS,[wx]:t.LEQUAL,[jS]:t.EQUAL,[WS]:t.GEQUAL,[VS]:t.GREATER,[GS]:t.NOTEQUAL};function j(L,b){if(b.type===bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===$n||b.magFilter===Ru||b.magFilter===Ho||b.magFilter===Ur||b.minFilter===$n||b.minFilter===Ru||b.minFilter===Ho||b.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,I[b.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,I[b.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,I[b.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,Q[b.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,k[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yt||b.minFilter!==Ho&&b.minFilter!==Ur||b.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function se(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",C));const te=b.source;let ie=f.get(te);ie===void 0&&(ie={},f.set(te,ie));const ne=D(b);if(ne!==L.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ie[ne].usedTimes++;const Me=ie[L.__cacheKey];Me!==void 0&&(ie[L.__cacheKey].usedTimes--,Me.usedTimes===0&&P(b)),L.__cacheKey=ne,L.__webglTexture=ie[ne].texture}return q}function me(L,b,q){let te=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=t.TEXTURE_3D);const ie=se(L,b),ne=b.source;n.bindTexture(te,L.__webglTexture,t.TEXTURE0+q);const Me=i.get(ne);if(ne.version!==Me.__version||ie===!0){n.activeTexture(t.TEXTURE0+q);const ue=tt.getPrimaries(tt.workingColorSpace),he=b.colorSpace===Ki?null:tt.getPrimaries(b.colorSpace),Te=b.colorSpace===Ki||ue===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let le=y(b.image,!1,r.maxTextureSize);le=Se(b,le);const Ae=s.convert(b.format,b.colorSpace),Xe=s.convert(b.type);let ke=_(b.internalFormat,Ae,Xe,b.colorSpace,b.isVideoTexture);j(te,b);let ve;const je=b.mipmaps,Ve=b.isVideoTexture!==!0,st=Me.__version===void 0||ie===!0,E=ne.dataReady,$=S(b,le);if(b.isDepthTexture)ke=x(b.format===Xr,b.type),st&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ke,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,ke,le.width,le.height,0,Ae,Xe,null));else if(b.isDataTexture)if(je.length>0){Ve&&st&&n.texStorage2D(t.TEXTURE_2D,$,ke,je[0].width,je[0].height);for(let W=0,ee=je.length;W<ee;W++)ve=je[W],Ve?E&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,Ae,Xe,ve.data):n.texImage2D(t.TEXTURE_2D,W,ke,ve.width,ve.height,0,Ae,Xe,ve.data);b.generateMipmaps=!1}else Ve?(st&&n.texStorage2D(t.TEXTURE_2D,$,ke,le.width,le.height),E&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Ae,Xe,le.data)):n.texImage2D(t.TEXTURE_2D,0,ke,le.width,le.height,0,Ae,Xe,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,$,ke,je[0].width,je[0].height,le.depth);for(let W=0,ee=je.length;W<ee;W++)if(ve=je[W],b.format!==ei)if(Ae!==null)if(Ve){if(E)if(b.layerUpdates.size>0){for(const ce of b.layerUpdates){const Le=ve.width*ve.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,ce,ve.width,ve.height,1,Ae,ve.data.slice(Le*ce,Le*(ce+1)),0,0)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,le.depth,Ae,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,ke,ve.width,ve.height,le.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?E&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,le.depth,Ae,Xe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,ke,ve.width,ve.height,le.depth,0,Ae,Xe,ve.data)}else{Ve&&st&&n.texStorage2D(t.TEXTURE_2D,$,ke,je[0].width,je[0].height);for(let W=0,ee=je.length;W<ee;W++)ve=je[W],b.format!==ei?Ae!==null?Ve?E&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,Ae,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,W,ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?E&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,Ae,Xe,ve.data):n.texImage2D(t.TEXTURE_2D,W,ke,ve.width,ve.height,0,Ae,Xe,ve.data)}else if(b.isDataArrayTexture)if(Ve){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,$,ke,le.width,le.height,le.depth),E)if(b.layerUpdates.size>0){let W;switch(Xe){case t.UNSIGNED_BYTE:switch(Ae){case t.ALPHA:W=1;break;case t.LUMINANCE:W=1;break;case t.LUMINANCE_ALPHA:W=2;break;case t.RGB:W=3;break;case t.RGBA:W=4;break;default:throw new Error(`Unknown texel size for format ${Ae}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:W=1;break;default:throw new Error(`Unknown texel size for type ${Xe}.`)}const ee=le.width*le.height*W;for(const ce of b.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,le.width,le.height,1,Ae,Xe,le.data.slice(ee*ce,ee*(ce+1)));b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,Xe,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,le.width,le.height,le.depth,0,Ae,Xe,le.data);else if(b.isData3DTexture)Ve?(st&&n.texStorage3D(t.TEXTURE_3D,$,ke,le.width,le.height,le.depth),E&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,Xe,le.data)):n.texImage3D(t.TEXTURE_3D,0,ke,le.width,le.height,le.depth,0,Ae,Xe,le.data);else if(b.isFramebufferTexture){if(st)if(Ve)n.texStorage2D(t.TEXTURE_2D,$,ke,le.width,le.height);else{let W=le.width,ee=le.height;for(let ce=0;ce<$;ce++)n.texImage2D(t.TEXTURE_2D,ce,ke,W,ee,0,Ae,Xe,null),W>>=1,ee>>=1}}else if(je.length>0){if(Ve&&st){const W=We(je[0]);n.texStorage2D(t.TEXTURE_2D,$,ke,W.width,W.height)}for(let W=0,ee=je.length;W<ee;W++)ve=je[W],Ve?E&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Ae,Xe,ve):n.texImage2D(t.TEXTURE_2D,W,ke,Ae,Xe,ve);b.generateMipmaps=!1}else if(Ve){if(st){const W=We(le);n.texStorage2D(t.TEXTURE_2D,$,ke,W.width,W.height)}E&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Xe,le)}else n.texImage2D(t.TEXTURE_2D,0,ke,Ae,Xe,le);g(b)&&d(te),Me.__version=ne.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function V(L,b,q){if(b.image.length!==6)return;const te=se(L,b),ie=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+q);const ne=i.get(ie);if(ie.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+q);const Me=tt.getPrimaries(tt.workingColorSpace),ue=b.colorSpace===Ki?null:tt.getPrimaries(b.colorSpace),he=b.colorSpace===Ki||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Te=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let ee=0;ee<6;ee++)!Te&&!le?Ae[ee]=y(b.image[ee],!0,r.maxCubemapSize):Ae[ee]=le?b.image[ee].image:b.image[ee],Ae[ee]=Se(b,Ae[ee]);const Xe=Ae[0],ke=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),je=_(b.internalFormat,ke,ve,b.colorSpace),Ve=b.isVideoTexture!==!0,st=ne.__version===void 0||te===!0,E=ie.dataReady;let $=S(b,Xe);j(t.TEXTURE_CUBE_MAP,b);let W;if(Te){Ve&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,$,je,Xe.width,Xe.height);for(let ee=0;ee<6;ee++){W=Ae[ee].mipmaps;for(let ce=0;ce<W.length;ce++){const Le=W[ce];b.format!==ei?ke!==null?Ve?E&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,0,0,Le.width,Le.height,ke,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,0,0,Le.width,Le.height,ke,ve,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,je,Le.width,Le.height,0,ke,ve,Le.data)}}}else{if(W=b.mipmaps,Ve&&st){W.length>0&&$++;const ee=We(Ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,$,je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){Ve?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae[ee].width,Ae[ee].height,ke,ve,Ae[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,Ae[ee].width,Ae[ee].height,0,ke,ve,Ae[ee].data);for(let ce=0;ce<W.length;ce++){const Ge=W[ce].image[ee].image;Ve?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,0,0,Ge.width,Ge.height,ke,ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,je,Ge.width,Ge.height,0,ke,ve,Ge.data)}}else{Ve?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ke,ve,Ae[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,ke,ve,Ae[ee]);for(let ce=0;ce<W.length;ce++){const Le=W[ce];Ve?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,0,0,ke,ve,Le.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,je,ke,ve,Le.image[ee])}}}g(b)&&d(t.TEXTURE_CUBE_MAP),ne.__version=ie.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function X(L,b,q,te,ie,ne){const Me=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),he=_(q.internalFormat,Me,ue,q.colorSpace);if(!i.get(b).__hasExternalTextures){const le=Math.max(1,b.width>>ne),Ae=Math.max(1,b.height>>ne);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ne,he,le,Ae,b.depth,0,Me,ue,null):n.texImage2D(ie,ne,he,le,Ae,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),De(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ie,i.get(q).__webglTexture,0,pe(b)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ie,i.get(q).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(L,b,q){if(t.bindRenderbuffer(t.RENDERBUFFER,L),b.depthBuffer){const te=b.depthTexture,ie=te&&te.isDepthTexture?te.type:null,ne=x(b.stencilBuffer,ie),Me=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=pe(b);De(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ne,b.width,b.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ne,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ne,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,L)}else{const te=b.textures;for(let ie=0;ie<te.length;ie++){const ne=te[ie],Me=s.convert(ne.format,ne.colorSpace),ue=s.convert(ne.type),he=_(ne.internalFormat,Me,ue,ne.colorSpace),Te=pe(b);q&&De(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,he,b.width,b.height):De(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,he,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,he,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const te=i.get(b.depthTexture).__webglTexture,ie=pe(b);if(b.depthTexture.format===Hs)De(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(b.depthTexture.format===Xr)De(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Re(L){const b=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");oe(b.__webglFramebuffer,L)}else if(q){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=t.createRenderbuffer(),re(b.__webglDepthbuffer[te],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),re(b.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(L,b,q){const te=i.get(L);b!==void 0&&X(te.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&Re(L)}function Ne(L){const b=L.texture,q=i.get(L),te=i.get(b);L.addEventListener("dispose",w);const ie=L.textures,ne=L.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=b.version,a.memory.textures++),ne){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let he=0;he<b.mipmaps.length;he++)q.__webglFramebuffer[ue][he]=t.createFramebuffer()}else q.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)q.__webglFramebuffer[ue]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,he=ie.length;ue<he;ue++){const Te=i.get(ie[ue]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&De(L)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const he=ie[ue];q.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const Te=s.convert(he.format,he.colorSpace),le=s.convert(he.type),Ae=_(he.internalFormat,Te,le,he.colorSpace,L.isXRRenderTarget===!0),Xe=pe(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,Ae,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,q.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),re(q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),j(t.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)X(q.__webglFramebuffer[ue][he],L,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else X(q.__webglFramebuffer[ue],L,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(b)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,he=ie.length;ue<he;ue++){const Te=ie[ue],le=i.get(Te);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),j(t.TEXTURE_2D,Te),X(q.__webglFramebuffer,L,Te,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(Te)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,te.__webglTexture),j(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)X(q.__webglFramebuffer[he],L,b,t.COLOR_ATTACHMENT0,ue,he);else X(q.__webglFramebuffer,L,b,t.COLOR_ATTACHMENT0,ue,0);g(b)&&d(ue),n.unbindTexture()}L.depthBuffer&&Re(L)}function U(L){const b=L.textures;for(let q=0,te=b.length;q<te;q++){const ie=b[q];if(g(ie)){const ne=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ie).__webglTexture;n.bindTexture(ne,Me),d(ne),n.unbindTexture()}}}const ze=[],Fe=[];function Ue(L){if(L.samples>0){if(De(L)===!1){const b=L.textures,q=L.width,te=L.height;let ie=t.COLOR_BUFFER_BIT;const ne=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(L),ue=b.length>1;if(ue)for(let he=0;he<b.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let he=0;he<b.length;he++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[he]);const Te=i.get(b[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,q,te,0,0,q,te,ie,t.NEAREST),l===!0&&(ze.length=0,Fe.length=0,ze.push(t.COLOR_ATTACHMENT0+he),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ze.push(ne),Fe.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Fe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let he=0;he<b.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,Me.__webglColorRenderbuffer[he]);const Te=i.get(b[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function pe(L){return Math.min(r.maxSamples,L.samples)}function De(L){const b=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(L){const b=a.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function Se(L,b){const q=L.colorSpace,te=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==gr&&q!==Ki&&(tt.getTransfer(q)===ot?(te!==ei||ie!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=xe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=X,this.useMultisampledRTT=De}function X2(t,e){function n(i,r=Ki){let s;const a=tt.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===xx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_x)return t.UNSIGNED_SHORT_5_5_5_1;if(i===PS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===CS)return t.BYTE;if(i===RS)return t.SHORT;if(i===cc)return t.UNSIGNED_SHORT;if(i===vx)return t.INT;if(i===Qs)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===hi)return t.HALF_FLOAT;if(i===NS)return t.ALPHA;if(i===LS)return t.RGB;if(i===ei)return t.RGBA;if(i===DS)return t.LUMINANCE;if(i===IS)return t.LUMINANCE_ALPHA;if(i===Hs)return t.DEPTH_COMPONENT;if(i===Xr)return t.DEPTH_STENCIL;if(i===yx)return t.RED;if(i===Sx)return t.RED_INTEGER;if(i===US)return t.RG;if(i===Mx)return t.RG_INTEGER;if(i===Ex)return t.RGBA_INTEGER;if(i===Pu||i===Nu||i===Lu||i===Du)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Du)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nm||i===im||i===rm||i===sm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===im)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===am||i===om||i===lm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===am||i===om)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cm||i===um||i===dm||i===hm||i===fm||i===pm||i===mm||i===gm||i===vm||i===xm||i===_m||i===ym||i===Sm||i===Mm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===um)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_m)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ym)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mm)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Iu||i===Em||i===wm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Iu)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Em)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===FS||i===Tm||i===Am||i===bm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Iu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Am)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class q2 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ji extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y2={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(c,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=u.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new St({vertexShader:$2,fragmentShader:K2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dt(new ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Q2 extends $r{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,f=null,m=null,v=null;const y=new Z2,g=n.getContextAttributes();let d=null,_=null;const x=[],S=[],C=new Ce;let w=null;const T=new yn;T.layers.enable(1),T.viewport=new It;const P=new yn;P.layers.enable(2),P.viewport=new It;const A=[T,P],M=new q2;M.layers.enable(1),M.layers.enable(2);let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=x[V];return X===void 0&&(X=new ad,x[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=x[V];return X===void 0&&(X=new ad,x[V]=X),X.getGripSpace()},this.getHand=function(V){let X=x[V];return X===void 0&&(X=new ad,x[V]=X),X.getHandSpace()};function D(V){const X=S.indexOf(V.inputSource);if(X===-1)return;const re=x[X];re!==void 0&&(re.update(V.inputSource,V.frame,c||a),re.dispatchEvent({type:V.type,data:V.inputSource}))}function B(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",J);for(let V=0;V<x.length;V++){const X=S[V];X!==null&&(S[V]=null,x[V].disconnect(X))}N=null,F=null,y.reset(),e.setRenderTarget(d),m=null,f=null,p=null,r=null,_=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",B),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const X={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new En(m.framebufferWidth,m.framebufferHeight,{format:ei,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,re=null,oe=null;g.depth&&(oe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=g.stencil?Xr:Hs,re=g.stencil?Wr:Qs);const Re={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new En(f.textureWidth,f.textureHeight,{format:ei,type:Ii,depthTexture:new Pf(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(V){for(let X=0;X<V.removed.length;X++){const re=V.removed[X],oe=S.indexOf(re);oe>=0&&(S[oe]=null,x[oe].disconnect(re))}for(let X=0;X<V.added.length;X++){const re=V.added[X];let oe=S.indexOf(re);if(oe===-1){for(let xe=0;xe<x.length;xe++)if(xe>=S.length){S.push(re),oe=xe;break}else if(S[xe]===null){S[xe]=re,oe=xe;break}if(oe===-1)break}const Re=x[oe];Re&&Re.connect(re)}}const H=new O,Z=new O;function I(V,X,re){H.setFromMatrixPosition(X.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);const oe=H.distanceTo(Z),Re=X.projectionMatrix.elements,xe=re.projectionMatrix.elements,Ne=Re[14]/(Re[10]-1),U=Re[14]/(Re[10]+1),ze=(Re[9]+1)/Re[5],Fe=(Re[9]-1)/Re[5],Ue=(Re[8]-1)/Re[0],pe=(xe[8]+1)/xe[0],De=Ne*Ue,we=Ne*pe,Se=oe/(-Ue+pe),We=Se*-Ue;X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(We),V.translateZ(Se),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const L=Ne+Se,b=U+Se,q=De-We,te=we+(oe-We),ie=ze*U/b*L,ne=Fe*U/b*L;V.projectionMatrix.makePerspective(q,te,ie,ne,L,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Q(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;y.texture!==null&&(V.near=y.depthNear,V.far=y.depthFar),M.near=P.near=T.near=V.near,M.far=P.far=T.far=V.far,(N!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,F=M.far,T.near=N,T.far=F,P.near=N,P.far=F,T.updateProjectionMatrix(),P.updateProjectionMatrix(),V.updateProjectionMatrix());const X=V.parent,re=M.cameras;Q(M,X);for(let oe=0;oe<re.length;oe++)Q(re[oe],X);re.length===2?I(M,T,P):M.projectionMatrix.copy(T.projectionMatrix),k(V,M,X)};function k(V,X,re){re===null?V.matrix.copy(X.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(X.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=_h*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let j=null;function se(V,X){if(u=X.getViewerPose(c||a),v=X,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let oe=!1;re.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let xe=0;xe<re.length;xe++){const Ne=re[xe];let U=null;if(m!==null)U=m.getViewport(Ne);else{const Fe=p.getViewSubImage(f,Ne);U=Fe.viewport,xe===0&&(e.setRenderTargetTextures(_,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(_))}let ze=A[xe];ze===void 0&&(ze=new yn,ze.layers.enable(xe),ze.viewport=new It,A[xe]=ze),ze.matrix.fromArray(Ne.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ne.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(U.x,U.y,U.width,U.height),xe===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(ze)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const xe=p.getDepthInformation(re[0]);xe&&xe.isValid&&xe.texture&&y.init(e,xe,r.renderState)}}for(let re=0;re<x.length;re++){const oe=S[re],Re=x[re];oe!==null&&Re!==void 0&&Re.update(oe,X,c||a)}j&&j(V,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),v=null}const me=new Fx;me.setAnimationLoop(se),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}const Ar=new ri,J2=new Qe;function eA(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Dx(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,_,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,_,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===sn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===sn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const _=e.get(d),x=_.envMap,S=_.envMapRotation;x&&(g.envMap.value=x,Ar.copy(S),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),g.envMapRotation.value.setFromMatrix4(J2.makeRotationFromEuler(Ar)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const _=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(v(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const C=x.program;i.updateUBOMapping(_,C);const w=e.render.frame;s[_.id]!==w&&(f(_),s[_.id]=w)}function u(_){const x=p();_.__bindingPointIndex=x;const S=t.createBuffer(),C=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function p(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let w=0,T=S.length;w<T;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let A=0,M=P.length;A<M;A++){const N=P[A];if(m(N,w,A,C)===!0){const F=N.__offset,D=Array.isArray(N.value)?N.value:[N.value];let B=0;for(let J=0;J<D.length;J++){const H=D[J],Z=y(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,F+B,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,x,S,C){const w=_.value,T=x+"_"+S;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const P=C[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function v(_){const x=_.uniforms;let S=0;const C=16;for(let T=0,P=x.length;T<P;T++){const A=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,N=A.length;M<N;M++){const F=A[M],D=Array.isArray(F.value)?F.value:[F.value];for(let B=0,J=D.length;B<J;B++){const H=D[B],Z=y(H),I=S%C;I!==0&&C-I<Z.boundary&&(S+=C-I),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Z.storage}}}const w=S%C;return w>0&&(S+=C-w),_.__size=S,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){const x=_.target;x.removeEventListener("dispose",g);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class jx{constructor(e={}){const{canvas:n=$S(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=cr,this.toneMappingExposure=1;const x=this;let S=!1,C=0,w=0,T=null,P=-1,A=null;const M=new It,N=new It;let F=null;const D=new _e(0);let B=0,J=n.width,H=n.height,Z=1,I=null,Q=null;const k=new It(0,0,J,H),j=new It(0,0,J,H);let se=!1;const me=new bf;let V=!1,X=!1;const re=new Qe,oe=new O,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Ne(){return T===null?Z:1}let U=i;function ze(R,z){return n.getContext(R,z)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mf}`),n.addEventListener("webglcontextlost",$,!1),n.addEventListener("webglcontextrestored",W,!1),n.addEventListener("webglcontextcreationerror",ee,!1),U===null){const z="webgl2";if(U=ze(z,R),U===null)throw ze(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Ue,pe,De,we,Se,We,L,b,q,te,ie,ne,Me,ue,he,Te,le,Ae,Xe,ke,ve,je,Ve;function st(){Fe=new uT(U),Fe.init(),ve=new X2(U,Fe),Ue=new rT(U,Fe,e,ve),pe=new G2(U),De=new fT(U),we=new P2,Se=new W2(U,Fe,pe,we,Ue,ve,De),We=new aT(x),L=new cT(x),b=new yM(U),je=new nT(U,b),q=new dT(U,b,De,je),te=new mT(U,q,b,De),Ae=new pT(U,Ue,Se),he=new sT(we),ie=new R2(x,We,L,Fe,Ue,je,he),ne=new eA(x,we),Me=new L2,ue=new k2(Fe),le=new tT(x,We,L,pe,te,f,l),Te=new V2(x,te,Ue),Ve=new tA(U,De,Ue,pe),Xe=new iT(U,Fe,De),ke=new hT(U,Fe,De),De.programs=ie.programs,x.capabilities=Ue,x.extensions=Fe,x.properties=we,x.renderLists=Me,x.shadowMap=Te,x.state=pe,x.info=De}st();const E=new Q2(x,U);this.xr=E,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(J,H,!1))},this.getSize=function(R){return R.set(J,H)},this.setSize=function(R,z,Y=!0){if(E.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,H=z,n.width=Math.floor(R*Z),n.height=Math.floor(z*Z),Y===!0&&(n.style.width=R+"px",n.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(J*Z,H*Z).floor()},this.setDrawingBufferSize=function(R,z,Y){J=R,H=z,Z=Y,n.width=Math.floor(R*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,z,Y,K){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,z,Y,K),pe.viewport(M.copy(k).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,z,Y,K){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,z,Y,K),pe.scissor(N.copy(j).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(R){pe.setScissorTest(se=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(R=!0,z=!0,Y=!0){let K=0;if(R){let G=!1;if(T!==null){const fe=T.texture.format;G=fe===Ex||fe===Mx||fe===Sx}if(G){const fe=T.texture.type,ye=fe===Ii||fe===Qs||fe===cc||fe===Wr||fe===xx||fe===_x,be=le.getClearColor(),Pe=le.getClearAlpha(),Be=be.r,He=be.g,Oe=be.b;ye?(m[0]=Be,m[1]=He,m[2]=Oe,m[3]=Pe,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=Be,v[1]=He,v[2]=Oe,v[3]=Pe,U.clearBufferiv(U.COLOR,0,v))}else K|=U.COLOR_BUFFER_BIT}z&&(K|=U.DEPTH_BUFFER_BIT),Y&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$,!1),n.removeEventListener("webglcontextrestored",W,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),Me.dispose(),ue.dispose(),we.dispose(),We.dispose(),L.dispose(),te.dispose(),je.dispose(),Ve.dispose(),ie.dispose(),E.dispose(),E.removeEventListener("sessionstart",Et),E.removeEventListener("sessionend",wt),pn.stop()};function $(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=De.autoReset,z=Te.enabled,Y=Te.autoUpdate,K=Te.needsUpdate,G=Te.type;st(),De.autoReset=R,Te.enabled=z,Te.autoUpdate=Y,Te.needsUpdate=K,Te.type=G}function ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){const z=R.target;z.removeEventListener("dispose",ce),Le(z)}function Le(R){Ge(R),we.remove(R)}function Ge(R){const z=we.get(R).programs;z!==void 0&&(z.forEach(function(Y){ie.releaseProgram(Y)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,Y,K,G,fe){z===null&&(z=Re);const ye=G.isMesh&&G.matrixWorld.determinant()<0,be=S_(R,z,Y,K,G);pe.setMaterial(K,ye);let Pe=Y.index,Be=1;if(K.wireframe===!0){if(Pe=q.getWireframeAttribute(Y),Pe===void 0)return;Be=2}const He=Y.drawRange,Oe=Y.attributes.position;let et=He.start*Be,vt=(He.start+He.count)*Be;fe!==null&&(et=Math.max(et,fe.start*Be),vt=Math.min(vt,(fe.start+fe.count)*Be)),Pe!==null?(et=Math.max(et,0),vt=Math.min(vt,Pe.count)):Oe!=null&&(et=Math.max(et,0),vt=Math.min(vt,Oe.count));const xt=vt-et;if(xt<0||xt===1/0)return;je.setup(G,K,be,Y,Pe);let gn,nt=Xe;if(Pe!==null&&(gn=b.get(Pe),nt=ke,nt.setIndex(gn)),G.isMesh)K.wireframe===!0?(pe.setLineWidth(K.wireframeLinewidth*Ne()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(G.isLine){let Ie=K.linewidth;Ie===void 0&&(Ie=1),pe.setLineWidth(Ie*Ne()),G.isLineSegments?nt.setMode(U.LINES):G.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else G.isPoints?nt.setMode(U.POINTS):G.isSprite&&nt.setMode(U.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?nt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)nt.renderInstances(et,xt,G.count);else if(Y.isInstancedBufferGeometry){const Ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Zt=Math.min(Y.instanceCount,Ie);nt.renderInstances(et,xt,Zt)}else nt.render(et,xt)};function gt(R,z,Y){R.transparent===!0&&R.side===ci&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,Mo(R,z,Y),R.side=hr,R.needsUpdate=!0,Mo(R,z,Y),R.side=ci):Mo(R,z,Y)}this.compile=function(R,z,Y=null){Y===null&&(Y=R),g=ue.get(Y),g.init(z),_.push(g),Y.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),R!==Y&&R.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const K=new Set;return R.traverse(function(G){const fe=G.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const be=fe[ye];gt(be,Y,G),K.add(be)}else gt(fe,Y,G),K.add(fe)}),_.pop(),g=null,K},this.compileAsync=function(R,z,Y=null){const K=this.compile(R,z,Y);return new Promise(G=>{function fe(){if(K.forEach(function(ye){we.get(ye).currentProgram.isReady()&&K.delete(ye)}),K.size===0){G(R);return}setTimeout(fe,10)}Fe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Mt=null;function Je(R){Mt&&Mt(R)}function Et(){pn.stop()}function wt(){pn.start()}const pn=new Fx;pn.setAnimationLoop(Je),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(R){Mt=R,E.setAnimationLoop(R),R===null?pn.stop():pn.start()},E.addEventListener("sessionstart",Et),E.addEventListener("sessionend",wt),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(E.cameraAutoUpdate===!0&&E.updateCamera(z),z=E.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,z,T),g=ue.get(R,_.length),g.init(z),_.push(g),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),me.setFromProjectionMatrix(re),X=this.localClippingEnabled,V=he.init(this.clippingPlanes,X),y=Me.get(R,d.length),y.init(),d.push(y),E.enabled===!0&&E.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&mn(fe,z,-1/0,x.sortObjects)}mn(R,z,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(I,Q),xe=E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1,xe&&le.addToRenderList(y,R),this.info.render.frame++,V===!0&&he.beginShadows();const Y=g.state.shadowsArray;Te.render(Y,R,z),V===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,G=y.transmissive;if(g.setupLights(),z.isArrayCamera){const fe=z.cameras;if(G.length>0)for(let ye=0,be=fe.length;ye<be;ye++){const Pe=fe[ye];xr(K,G,R,Pe)}xe&&le.render(R);for(let ye=0,be=fe.length;ye<be;ye++){const Pe=fe[ye];Fi(y,R,Pe,Pe.viewport)}}else G.length>0&&xr(K,G,R,z),xe&&le.render(R),Fi(y,R,z);T!==null&&(Se.updateMultisampleRenderTarget(T),Se.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,z),je.resetDefaultState(),P=-1,A=null,_.pop(),_.length>0?(g=_[_.length-1],V===!0&&he.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function mn(R,z,Y,K){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||me.intersectsSprite(R)){K&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(re);const ye=te.update(R),be=R.material;be.visible&&y.push(R,ye,be,Y,oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||me.intersectsObject(R))){const ye=te.update(R),be=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),oe.copy(ye.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(re)),Array.isArray(be)){const Pe=ye.groups;for(let Be=0,He=Pe.length;Be<He;Be++){const Oe=Pe[Be],et=be[Oe.materialIndex];et&&et.visible&&y.push(R,ye,et,Y,oe.z,Oe)}}else be.visible&&y.push(R,ye,be,Y,oe.z,null)}}const fe=R.children;for(let ye=0,be=fe.length;ye<be;ye++)mn(fe[ye],z,Y,K)}function Fi(R,z,Y,K){const G=R.opaque,fe=R.transmissive,ye=R.transparent;g.setupLightsView(Y),V===!0&&he.setGlobalState(x.clippingPlanes,Y),K&&pe.viewport(M.copy(K)),G.length>0&&_r(G,z,Y),fe.length>0&&_r(fe,z,Y),ye.length>0&&_r(ye,z,Y),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function xr(R,z,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new En(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?hi:Ii,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const fe=g.state.transmissionRenderTarget[K.id],ye=K.viewport||M;fe.setSize(ye.z,ye.w);const be=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(D),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),xe?le.render(Y):x.clear();const Pe=x.toneMapping;x.toneMapping=cr;const Be=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),V===!0&&he.setGlobalState(x.clippingPlanes,K),_r(R,Y,K),Se.updateMultisampleRenderTarget(fe),Se.updateRenderTargetMipmap(fe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Oe=0,et=z.length;Oe<et;Oe++){const vt=z[Oe],xt=vt.object,gn=vt.geometry,nt=vt.material,Ie=vt.group;if(nt.side===ci&&xt.layers.test(K.layers)){const Zt=nt.side;nt.side=sn,nt.needsUpdate=!0,Bf(xt,Y,K,gn,nt,Ie),nt.side=Zt,nt.needsUpdate=!0,He=!0}}He===!0&&(Se.updateMultisampleRenderTarget(fe),Se.updateRenderTargetMipmap(fe))}x.setRenderTarget(be),x.setClearColor(D,B),Be!==void 0&&(K.viewport=Be),x.toneMapping=Pe}function _r(R,z,Y){const K=z.isScene===!0?z.overrideMaterial:null;for(let G=0,fe=R.length;G<fe;G++){const ye=R[G],be=ye.object,Pe=ye.geometry,Be=K===null?ye.material:K,He=ye.group;be.layers.test(Y.layers)&&Bf(be,z,Y,Pe,Be,He)}}function Bf(R,z,Y,K,G,fe){R.onBeforeRender(x,z,Y,K,G,fe),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,z,Y,K,R,fe),G.transparent===!0&&G.side===ci&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,x.renderBufferDirect(Y,z,K,G,R,fe),G.side=hr,G.needsUpdate=!0,x.renderBufferDirect(Y,z,K,G,R,fe),G.side=ci):x.renderBufferDirect(Y,z,K,G,R,fe),R.onAfterRender(x,z,Y,K,G,fe)}function Mo(R,z,Y){z.isScene!==!0&&(z=Re);const K=we.get(R),G=g.state.lights,fe=g.state.shadowsArray,ye=G.state.version,be=ie.getParameters(R,G.state,fe,z,Y),Pe=ie.getProgramCacheKey(be);let Be=K.programs;K.environment=R.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(R.isMeshStandardMaterial?L:We).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",ce),Be=new Map,K.programs=Be);let He=Be.get(Pe);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===ye)return jf(R,be),He}else be.uniforms=ie.getUniforms(R),R.onBuild(Y,be,x),R.onBeforeCompile(be,x),He=ie.acquireProgram(be,Pe),Be.set(Pe,He),K.uniforms=be.uniforms;const Oe=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Oe.clippingPlanes=he.uniform),jf(R,be),K.needsLights=E_(R),K.lightsStateVersion=ye,K.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMap.value=G.state.directionalShadowMap,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotShadowMap.value=G.state.spotShadowMap,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMap.value=G.state.pointShadowMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function Hf(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Ol.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function jf(R,z){const Y=we.get(R);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function S_(R,z,Y,K,G){z.isScene!==!0&&(z=Re),Se.resetTextureUnits();const fe=z.fog,ye=K.isMeshStandardMaterial?z.environment:null,be=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:gr,Pe=(K.isMeshStandardMaterial?L:We).get(K.envMap||ye),Be=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Oe=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color;let xt=cr;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=x.toneMapping);const gn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=gn!==void 0?gn.length:0,Ie=we.get(K),Zt=g.state.lights;if(V===!0&&(X===!0||R!==A)){const Pn=R===A&&K.id===P;he.setState(K,R,Pn)}let at=!1;K.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Zt.state.version||Ie.outputColorSpace!==be||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==Pe||K.fog===!0&&Ie.fog!==fe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==he.numPlanes||Ie.numIntersection!==he.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==He||Ie.morphTargets!==Oe||Ie.morphNormals!==et||Ie.morphColors!==vt||Ie.toneMapping!==xt||Ie.morphTargetsCount!==nt)&&(at=!0):(at=!0,Ie.__version=K.version);let mi=Ie.currentProgram;at===!0&&(mi=Mo(K,z,G));let Eo=!1,yr=!1,Jc=!1;const Nt=mi.getUniforms(),Oi=Ie.uniforms;if(pe.useProgram(mi.program)&&(Eo=!0,yr=!0,Jc=!0),K.id!==P&&(P=K.id,yr=!0),Eo||A!==R){Nt.setValue(U,"projectionMatrix",R.projectionMatrix),Nt.setValue(U,"viewMatrix",R.matrixWorldInverse);const Pn=Nt.map.cameraPosition;Pn!==void 0&&Pn.setValue(U,oe.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Nt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,yr=!0,Jc=!0)}if(G.isSkinnedMesh){Nt.setOptional(U,G,"bindMatrix"),Nt.setOptional(U,G,"bindMatrixInverse");const Pn=G.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Nt.setValue(U,"boneTexture",Pn.boneTexture,Se))}G.isBatchedMesh&&(Nt.setOptional(U,G,"batchingTexture"),Nt.setValue(U,"batchingTexture",G._matricesTexture,Se),Nt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(U,"batchingColorTexture",G._colorsTexture,Se));const eu=Y.morphAttributes;if((eu.position!==void 0||eu.normal!==void 0||eu.color!==void 0)&&Ae.update(G,Y,mi),(yr||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,Nt.setValue(U,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Oi.envMap.value=Pe,Oi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(Oi.envMapIntensity.value=z.environmentIntensity),yr&&(Nt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&M_(Oi,Jc),fe&&K.fog===!0&&ne.refreshFogUniforms(Oi,fe),ne.refreshMaterialUniforms(Oi,K,Z,H,g.state.transmissionRenderTarget[R.id]),Ol.upload(U,Hf(Ie),Oi,Se)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ol.upload(U,Hf(Ie),Oi,Se),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nt.setValue(U,"center",G.center),Nt.setValue(U,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(U,"normalMatrix",G.normalMatrix),Nt.setValue(U,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Pn=K.uniformsGroups;for(let tu=0,w_=Pn.length;tu<w_;tu++){const Vf=Pn[tu];Ve.update(Vf,mi),Ve.bind(Vf,mi)}}return mi}function M_(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function E_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,z,Y){we.get(R.texture).__webglTexture=z,we.get(R.depthTexture).__webglTexture=Y;const K=we.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const Y=we.get(R);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,Y=0){T=R,C=z,w=Y;let K=!0,G=null,fe=!1,ye=!1;if(R){const Pe=we.get(R);Pe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(U.FRAMEBUFFER,null),K=!1):Pe.__webglFramebuffer===void 0?Se.setupRenderTarget(R):Pe.__hasExternalTextures&&Se.rebindTextures(R,we.get(R.texture).__webglTexture,we.get(R.depthTexture).__webglTexture);const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const He=we.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[z])?G=He[z][Y]:G=He[z],fe=!0):R.samples>0&&Se.useMultisampledRTT(R)===!1?G=we.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?G=He[Y]:G=He,M.copy(R.viewport),N.copy(R.scissor),F=R.scissorTest}else M.copy(k).multiplyScalar(Z).floor(),N.copy(j).multiplyScalar(Z).floor(),F=se;if(pe.bindFramebuffer(U.FRAMEBUFFER,G)&&K&&pe.drawBuffers(R,G),pe.viewport(M),pe.scissor(N),pe.setScissorTest(F),fe){const Pe=we.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,Y)}else if(ye){const Pe=we.get(R.texture),Be=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,Y||0,Be)}P=-1},this.readRenderTargetPixels=function(R,z,Y,K,G,fe,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){pe.bindFramebuffer(U.FRAMEBUFFER,be);try{const Pe=R.texture,Be=Pe.format,He=Pe.type;if(!Ue.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-K&&Y>=0&&Y<=R.height-G&&U.readPixels(z,Y,K,G,ve.convert(Be),ve.convert(He),fe)}finally{const Pe=T!==null?we.get(T).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(R,z,Y,K,G,fe,ye){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){pe.bindFramebuffer(U.FRAMEBUFFER,be);try{const Pe=R.texture,Be=Pe.format,He=Pe.type;if(!Ue.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-K&&Y>=0&&Y<=R.height-G){const Oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(z,Y,K,G,ve.convert(Be),ve.convert(He),0),U.flush();const et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await KS(U,et,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe)}finally{U.deleteBuffer(Oe),U.deleteSync(et)}return fe}}finally{const Pe=T!==null?we.get(T).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(R,z=null,Y=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-Y),G=Math.floor(R.image.width*K),fe=Math.floor(R.image.height*K),ye=z!==null?z.x:0,be=z!==null?z.y:0;Se.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,ye,be,G,fe),pe.unbindTexture()},this.copyTextureToTexture=function(R,z,Y=null,K=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],z=arguments[2],G=arguments[3]||0,Y=null);let fe,ye,be,Pe,Be,He;Y!==null?(fe=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,be=Y.min.x,Pe=Y.min.y):(fe=R.image.width,ye=R.image.height,be=0,Pe=0),K!==null?(Be=K.x,He=K.y):(Be=0,He=0);const Oe=ve.convert(z.format),et=ve.convert(z.type);Se.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const vt=U.getParameter(U.UNPACK_ROW_LENGTH),xt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=U.getParameter(U.UNPACK_SKIP_PIXELS),nt=U.getParameter(U.UNPACK_SKIP_ROWS),Ie=U.getParameter(U.UNPACK_SKIP_IMAGES),Zt=R.isCompressedTexture?R.mipmaps[G]:R.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,be),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,Be,He,fe,ye,Oe,et,Zt.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,Be,He,Zt.width,Zt.height,Oe,Zt.data):U.texSubImage2D(U.TEXTURE_2D,G,Be,He,Oe,et,Zt),U.pixelStorei(U.UNPACK_ROW_LENGTH,vt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),U.pixelStorei(U.UNPACK_SKIP_ROWS,nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie),G===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(R,z,Y=null,K=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,R=arguments[2],z=arguments[3],G=arguments[4]||0);let fe,ye,be,Pe,Be,He,Oe,et,vt;const xt=R.isCompressedTexture?R.mipmaps[G]:R.image;Y!==null?(fe=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,be=Y.max.z-Y.min.z,Pe=Y.min.x,Be=Y.min.y,He=Y.min.z):(fe=xt.width,ye=xt.height,be=xt.depth,Pe=0,Be=0,He=0),K!==null?(Oe=K.x,et=K.y,vt=K.z):(Oe=0,et=0,vt=0);const gn=ve.convert(z.format),nt=ve.convert(z.type);let Ie;if(z.isData3DTexture)Se.setTexture3D(z,0),Ie=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Se.setTexture2DArray(z,0),Ie=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Zt=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),mi=U.getParameter(U.UNPACK_SKIP_PIXELS),Eo=U.getParameter(U.UNPACK_SKIP_ROWS),yr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Pe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Be),U.pixelStorei(U.UNPACK_SKIP_IMAGES,He),R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Ie,G,Oe,et,vt,fe,ye,be,gn,nt,xt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Ie,G,Oe,et,vt,fe,ye,be,gn,xt.data):U.texSubImage3D(Ie,G,Oe,et,vt,fe,ye,be,gn,nt,xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Eo),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yr),G===0&&z.generateMipmaps&&U.generateMipmap(Ie),pe.unbindTexture()},this.initRenderTarget=function(R){we.get(R).__webglFramebuffer===void 0&&Se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Se.setTextureCube(R,0):R.isData3DTexture?Se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Se.setTexture2DArray(R,0):Se.setTexture2D(R,0),pe.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,pe.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Tf?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===jc?"display-p3":"srgb"}}class mc{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=n}clone(){return new mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gc{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=n,this.far=i}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Vx=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};class Nf extends $t{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Yt,u=Yt,p,f){super(null,a,o,l,c,u,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xg extends wn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _s=new Qe,_g=new Qe,cl=[],yg=new Kr,nA=new Qe,Ta=new dt,Aa=new ua;class ys extends dt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new xg(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,nA)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_s),yg.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(yg)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ua),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_s),Aa.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Aa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(i),e.ray.intersectsSphere(Aa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_s),_g.multiplyMatrices(i,_s),Ta.matrixWorld=_g,Ta.raycast(e,cl);for(let a=0,o=cl.length;a<o;a++){const l=cl[a];l.instanceId=s,l.object=this,n.push(l)}cl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new xg(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nf(new Float32Array(r*this.count),r,this.count,yx,bi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Lf extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new O,xc=new O,Sg=new Qe,ba=new Af,ul=new ua,od=new O,Mg=new O;class iA extends Ft{constructor(e=new Cn,n=new Lf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vc.fromBufferAttribute(n,r-1),xc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vc.distanceTo(xc);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;Sg.copy(r).invert(),ba.copy(e.ray).applyMatrix4(Sg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let y=m,g=v-1;y<g;y+=c){const d=u.getX(y),_=u.getX(y+1),x=dl(this,e,ba,l,d,_);x&&n.push(x)}if(this.isLineLoop){const y=u.getX(v-1),g=u.getX(m),d=dl(this,e,ba,l,y,g);d&&n.push(d)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let y=m,g=v-1;y<g;y+=c){const d=dl(this,e,ba,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=dl(this,e,ba,l,v-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dl(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(vc.fromBufferAttribute(a,r),xc.fromBufferAttribute(a,s),n.distanceSqToSegment(vc,xc,od,Mg)>i)return;od.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(od);if(!(l<e.near||l>e.far))return{distance:l,point:Mg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Eg=new O,wg=new O;class _c extends iA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Eg.fromBufferAttribute(n,r),wg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Eg.distanceTo(wg);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yc extends $t{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gc extends Cn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],f=[],m=[];let v=0;const y=[],g=i/2;let d=0;_(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(m,2));function _(){const S=new O,C=new O;let w=0;const T=(n-e)/i;for(let P=0;P<=s;P++){const A=[],M=P/s,N=M*(n-e)+e;for(let F=0;F<=r;F++){const D=F/r,B=D*l+o,J=Math.sin(B),H=Math.cos(B);C.x=N*J,C.y=-M*i+g,C.z=N*H,p.push(C.x,C.y,C.z),S.set(J,T,H).normalize(),f.push(S.x,S.y,S.z),m.push(D,1-M),A.push(v++)}y.push(A)}for(let P=0;P<r;P++)for(let A=0;A<s;A++){const M=y[A][P],N=y[A+1][P],F=y[A+1][P+1],D=y[A][P+1];u.push(M,N,D),u.push(N,F,D),w+=6}c.addGroup(d,w,0),d+=w}function x(S){const C=v,w=new Ce,T=new O;let P=0;const A=S===!0?e:n,M=S===!0?1:-1;for(let F=1;F<=r;F++)p.push(0,g*M,0),f.push(0,M,0),m.push(.5,.5),v++;const N=v;for(let F=0;F<=r;F++){const B=F/r*l+o,J=Math.cos(B),H=Math.sin(B);T.x=A*H,T.y=g*M,T.z=A*J,p.push(T.x,T.y,T.z),f.push(0,M,0),w.x=J*.5+.5,w.y=H*.5*M+.5,m.push(w.x,w.y),v++}for(let F=0;F<r;F++){const D=C+F,B=N+F;S===!0?u.push(B,B+1,D):u.push(B+1,B,D),P+=3}c.addGroup(d,P,S===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sc extends Gc{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const hl=new O,fl=new O,ld=new O,pl=new Kn;class Gx extends Cn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ga*n),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],p=new Array(3),f={},m=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:y,b:g,c:d}=pl;if(y.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),pl.getNormal(ld),p[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,p[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,p[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let _=0;_<3;_++){const x=(_+1)%3,S=p[_],C=p[x],w=pl[u[_]],T=pl[u[x]],P=`${S}_${C}`,A=`${C}_${S}`;A in f&&f[A]?(ld.dot(f[A].normal)<=s&&(m.push(w.x,w.y,w.z),m.push(T.x,T.y,T.z)),f[A]=null):P in f||(f[P]={index0:c[_],index1:c[x],normal:ld.clone()})}}for(const v in f)if(f[v]){const{index0:y,index1:g}=f[v];hl.fromBufferAttribute(o,y),fl.fromBufferAttribute(o,g),m.push(hl.x,hl.y,hl.z),m.push(fl.x,fl.y,fl.z)}this.setAttribute("position",new Ot(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Df extends Cn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let p=e;const f=(n-e)/r,m=new O,v=new Ce;for(let y=0;y<=r;y++){for(let g=0;g<=i;g++){const d=s+g/i*a;m.x=p*Math.cos(d),m.y=p*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,u.push(v.x,v.y)}p+=f}for(let y=0;y<r;y++){const g=y*(i+1);for(let d=0;d<i;d++){const _=d+g,x=_,S=_+i+1,C=_+i+2,w=_+1;o.push(x,S,w),o.push(S,C,w)}}this.setIndex(o),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Df(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rA extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gn extends Zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sA extends Zr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class If extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Wx extends If{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const cd=new Qe,Tg=new O,Ag=new O;class aA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tg),Ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ag),n.updateMatrixWorld(),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oA extends aA{constructor(){super(new Cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xx extends If{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new oA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qx extends If{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class lA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=bg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function bg(){return(typeof performance>"u"?Date:performance).now()}class Cg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);const Ia=400,cA=256,Wn=12,uA=4.4,Rg=18;function Yx(t,e,n,i,r,s){const a=Math.max(0,Math.abs(t-n)-r/2),o=Math.max(0,Math.abs(e-i)-s/2);return Math.sqrt(a*a+o*o)}function dA(t,e){const n=Wn/2,i=Math.abs((t%Wn+Wn+n)%Wn-n),r=Math.abs((e%Wn+Wn+n)%Wn-n),s=n-i,a=n-r,o=Math.min(s,a),l=1-Jn(1.5,1.85,o),c=Jn(1.5,1.85,o),u=1-Jn(2.35,2.7,o),p=c*u,f=(1-Jn(.08,.22,o))*l;return{onStreet:l,onSidewalk:p,onCenterline:f}}function Qn(t,e,n,i,r,s){const a=zr(t,e,n.octaves,n.terrainScale,n.relief,n.terrainType,i);if(n.terrainType==="plano"||n.relief<=0)return 0;const o=r!==void 0?r:zr(0,0,n.octaves,n.terrainScale,n.relief,n.terrainType,i),l=Math.sqrt(t*t+e*e),c=n.cityRadius,p=(1-Jn(.6*c,1.1*c,l))*(n.urbanLeveling/100),f=kr(a,o,p),m=s!==void 0?s:(()=>{const y=zr(n.lotX,n.lotZ,n.octaves,n.terrainScale,n.relief,n.terrainType,i),g=Math.sqrt(n.lotX*n.lotX+n.lotZ*n.lotZ),d=1-Jn(.6*c,1.1*c,g);return kr(y,o,d*(n.urbanLeveling/100))})(),v=Yx(t,e,n.lotX,n.lotZ,n.lotWidth,n.lotDepth);if(v<Rg){const y=1-Jn(0,Rg,v);return kr(f,m,y)}return f}const hA=new _e(14271894),fA=new _e(5079085),Pg=new _e(7442240),ud=new _e(6317418),pA=new _e(4540749),Ng=new _e(15923194),mA=new _e(7765120),gA=new _e(9607068),vA=new _e(2237479),xA=new _e(5659746);function $x(t,e){const n=cA,i=n+1,r=i*i,s=t.terrainType==="plano"||t.relief<=0?0:zr(0,0,t.octaves,t.terrainScale,t.relief,t.terrainType,e),a=t.terrainType==="plano"||t.relief<=0?0:zr(t.lotX,t.lotZ,t.octaves,t.terrainScale,t.relief,t.terrainType,e),o=Math.sqrt(t.lotX*t.lotX+t.lotZ*t.lotZ),l=1-Jn(.6*t.cityRadius,1.1*t.cityRadius,o),c=t.terrainType==="plano"||t.relief<=0?0:kr(a,s,l*(t.urbanLeveling/100)),u=new ea(Ia,Ia,n,n);u.rotateX(-Math.PI/2);const p=u.attributes.position,f=p.array,m=new Float32Array(r*3);let v=1/0,y=-1/0;for(let M=0;M<r;M++){const N=M*3,F=f[N],D=f[N+2],B=Qn(F,D,t,e,s,c);f[N+1]=B,B<v&&(v=B),B>y&&(y=B)}(t.terrainType==="plano"||t.relief<=0||!isFinite(v))&&(v=0,y=0);const g=y-v,d=g>.5?v+.25*g:v-10;p.needsUpdate=!0,u.computeVertexNormals();const x=u.attributes.normal.array,S=new _e,C=new _e,w=new _e,T=t.cityRadius;for(let M=0;M<r;M++){const N=M*3,F=f[N],D=f[N+1],B=f[N+2],J=x[N+1],H=Math.max(0,1-J),Z=g>.01?(D-v)/g:.5;if(Z<.26)w.copy(hA);else if(Z<.52){const j=(Z-.26)/.26;w.lerpColors(fA,Pg,j)}else if(Z<.78){const j=(Z-.52)/.26;w.lerpColors(Pg,ud,j)}else{const j=Math.min(1,(Z-.78)/.22);w.lerpColors(ud,Ng,j)}const I=Jn(.12,.28,H);if(I>.01){const j=Jn(.28,.5,H);C.lerpColors(ud,pA,j),Z>.78?w.lerpColors(Ng,C,I):w.lerp(C,I*.95)}S.copy(w);const Q=Math.sqrt(F*F+B*B),k=1-Jn(.6*T,1.05*T,Q);if(k>.01){S.lerp(mA,k*.88);const j=dA(F,B);j.onSidewalk>.05&&S.lerp(gA,k*j.onSidewalk*.9),j.onStreet>.05&&(S.lerp(vA,k*j.onStreet*.96),j.onCenterline>.05&&S.lerp(xA,k*j.onCenterline*.7))}m[N]=S.r,m[N+1]=S.g,m[N+2]=S.b}u.setAttribute("color",new wn(m,3));let P=null;return t.showWater&&t.terrainType!=="plano"&&g>1&&(P=new ea(Ia,Ia,64,64),P.rotateX(-Math.PI/2)),{geometry:u,metrics:{minHeight:v,maxHeight:y,waterLevel:d,centerHeight:s,lotBaseHeight:c},waterGeometry:P}}const ml=Wn-uA,Lg=[[.88,.85,.8],[.82,.79,.74],[.76,.77,.79],[.85,.86,.88],[.7,.72,.75],[.91,.88,.83],[.65,.67,.7],[.8,.75,.7]];function Kx(t,e,n){const i=[],r=t.cityRadius,s=t.cityDensity/100,a=ca(t.seed+9999),o=Math.ceil(r/Wn)+1;for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){const u=l*Wn,p=c*Wn,f=Math.sqrt(u*u+p*p);if(f>r)continue;const m=s*(1-.55*(f/r));if(a()>m||Yx(u,p,t.lotX,t.lotZ,t.lotWidth,t.lotDepth)<ml*.7)continue;const y=ml/2*.95,g=Qn(u,p,t,e,n.centerHeight,n.lotBaseHeight),d=Qn(u-y,p-y,t,e,n.centerHeight,n.lotBaseHeight),_=Qn(u+y,p-y,t,e,n.centerHeight,n.lotBaseHeight),x=Qn(u-y,p+y,t,e,n.centerHeight,n.lotBaseHeight),S=Qn(u+y,p+y,t,e,n.centerHeight,n.lotBaseHeight),C=Math.min(g,d,_,x,S),w=Math.max(g,d,_,x,S);if(w-C>7||t.showWater&&t.terrainType!=="plano"&&C<=n.waterLevel+.4)continue;const P=Math.pow(Math.max(0,1-f/r),1.5),A=.4+.9*a();let M=t.maxBuildingHeight*(.15+.85*P)*A;M<4&&(M=4);const N=6.2+a()*(ml-6.4),F=6.2+a()*(ml-6.4),D=Lg[Math.floor(a()*Lg.length)],B=(a()-.5)*.08,J=Math.max(0,Math.min(1,D[0]+B)),H=Math.max(0,Math.min(1,D[1]+B)),Z=Math.max(0,Math.min(1,D[2]+B)),I=(C+w)/2;i.push({x:u,y:I,z:p,width:N,depth:F,height:M,color:[J,H,Z]})}return i}const Dg={type:"change"},dd={type:"start"},Ig={type:"end"},gl=new Af,Ug=new qi,_A=Math.cos(70*YS.DEG2RAD);class Zx extends $r{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",he),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Dg),i.update(),s=r.NONE},this.update=function(){const E=new O,$=new fi().setFromUnitVectors(e.up,new O(0,1,0)),W=$.clone().invert(),ee=new O,ce=new fi,Le=new O,Ge=2*Math.PI;return function(Mt=null){const Je=i.object.position;E.copy(Je).sub(i.target),E.applyQuaternion($),o.setFromVector3(E),i.autoRotate&&s===r.NONE&&F(M(Mt)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Et=i.minAzimuthAngle,wt=i.maxAzimuthAngle;isFinite(Et)&&isFinite(wt)&&(Et<-Math.PI?Et+=Ge:Et>Math.PI&&(Et-=Ge),wt<-Math.PI?wt+=Ge:wt>Math.PI&&(wt-=Ge),Et<=wt?o.theta=Math.max(Et,Math.min(wt,o.theta)):o.theta=o.theta>(Et+wt)/2?Math.max(Et,o.theta):Math.min(wt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let pn=!1;if(i.zoomToCursor&&w||i.object.isOrthographicCamera)o.radius=k(o.radius);else{const mn=o.radius;o.radius=k(o.radius*c),pn=mn!=o.radius}if(E.setFromSpherical(o),E.applyQuaternion(W),Je.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&w){let mn=null;if(i.object.isPerspectiveCamera){const Fi=E.length();mn=k(Fi*c);const xr=Fi-mn;i.object.position.addScaledVector(S,xr),i.object.updateMatrixWorld(),pn=!!xr}else if(i.object.isOrthographicCamera){const Fi=new O(C.x,C.y,0);Fi.unproject(i.object);const xr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),pn=xr!==i.object.zoom;const _r=new O(C.x,C.y,0);_r.unproject(i.object),i.object.position.sub(_r).add(Fi),i.object.updateMatrixWorld(),mn=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;mn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(mn).add(i.object.position):(gl.origin.copy(i.object.position),gl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(gl.direction))<_A?e.lookAt(i.target):(Ug.setFromNormalAndCoplanarPoint(i.object.up,i.target),gl.intersectPlane(Ug,i.target))))}else if(i.object.isOrthographicCamera){const mn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),mn!==i.object.zoom&&(i.object.updateProjectionMatrix(),pn=!0)}return c=1,w=!1,pn||ee.distanceToSquared(i.object.position)>a||8*(1-ce.dot(i.object.quaternion))>a||Le.distanceToSquared(i.target)>a?(i.dispatchEvent(Dg),ee.copy(i.object.position),ce.copy(i.object.quaternion),Le.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ae),i.domElement.removeEventListener("pointerdown",We),i.domElement.removeEventListener("pointercancel",b),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",b),i.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Cg,l=new Cg;let c=1;const u=new O,p=new Ce,f=new Ce,m=new Ce,v=new Ce,y=new Ce,g=new Ce,d=new Ce,_=new Ce,x=new Ce,S=new O,C=new Ce;let w=!1;const T=[],P={};let A=!1;function M(E){return E!==null?2*Math.PI/60*i.autoRotateSpeed*E:2*Math.PI/60/60*i.autoRotateSpeed}function N(E){const $=Math.abs(E*.01);return Math.pow(.95,i.zoomSpeed*$)}function F(E){l.theta-=E}function D(E){l.phi-=E}const B=function(){const E=new O;return function(W,ee){E.setFromMatrixColumn(ee,0),E.multiplyScalar(-W),u.add(E)}}(),J=function(){const E=new O;return function(W,ee){i.screenSpacePanning===!0?E.setFromMatrixColumn(ee,1):(E.setFromMatrixColumn(ee,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(W),u.add(E)}}(),H=function(){const E=new O;return function(W,ee){const ce=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;E.copy(Le).sub(i.target);let Ge=E.length();Ge*=Math.tan(i.object.fov/2*Math.PI/180),B(2*W*Ge/ce.clientHeight,i.object.matrix),J(2*ee*Ge/ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(B(W*(i.object.right-i.object.left)/i.object.zoom/ce.clientWidth,i.object.matrix),J(ee*(i.object.top-i.object.bottom)/i.object.zoom/ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(E,$){if(!i.zoomToCursor)return;w=!0;const W=i.domElement.getBoundingClientRect(),ee=E-W.left,ce=$-W.top,Le=W.width,Ge=W.height;C.x=ee/Le*2-1,C.y=-(ce/Ge)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(E){return Math.max(i.minDistance,Math.min(i.maxDistance,E))}function j(E){p.set(E.clientX,E.clientY)}function se(E){Q(E.clientX,E.clientX),d.set(E.clientX,E.clientY)}function me(E){v.set(E.clientX,E.clientY)}function V(E){f.set(E.clientX,E.clientY),m.subVectors(f,p).multiplyScalar(i.rotateSpeed);const $=i.domElement;F(2*Math.PI*m.x/$.clientHeight),D(2*Math.PI*m.y/$.clientHeight),p.copy(f),i.update()}function X(E){_.set(E.clientX,E.clientY),x.subVectors(_,d),x.y>0?Z(N(x.y)):x.y<0&&I(N(x.y)),d.copy(_),i.update()}function re(E){y.set(E.clientX,E.clientY),g.subVectors(y,v).multiplyScalar(i.panSpeed),H(g.x,g.y),v.copy(y),i.update()}function oe(E){Q(E.clientX,E.clientY),E.deltaY<0?I(N(E.deltaY)):E.deltaY>0&&Z(N(E.deltaY)),i.update()}function Re(E){let $=!1;switch(E.code){case i.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),$=!0;break;case i.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),$=!0;break;case i.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),$=!0;break;case i.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),$=!0;break}$&&(E.preventDefault(),i.update())}function xe(E){if(T.length===1)p.set(E.pageX,E.pageY);else{const $=Ve(E),W=.5*(E.pageX+$.x),ee=.5*(E.pageY+$.y);p.set(W,ee)}}function Ne(E){if(T.length===1)v.set(E.pageX,E.pageY);else{const $=Ve(E),W=.5*(E.pageX+$.x),ee=.5*(E.pageY+$.y);v.set(W,ee)}}function U(E){const $=Ve(E),W=E.pageX-$.x,ee=E.pageY-$.y,ce=Math.sqrt(W*W+ee*ee);d.set(0,ce)}function ze(E){i.enableZoom&&U(E),i.enablePan&&Ne(E)}function Fe(E){i.enableZoom&&U(E),i.enableRotate&&xe(E)}function Ue(E){if(T.length==1)f.set(E.pageX,E.pageY);else{const W=Ve(E),ee=.5*(E.pageX+W.x),ce=.5*(E.pageY+W.y);f.set(ee,ce)}m.subVectors(f,p).multiplyScalar(i.rotateSpeed);const $=i.domElement;F(2*Math.PI*m.x/$.clientHeight),D(2*Math.PI*m.y/$.clientHeight),p.copy(f)}function pe(E){if(T.length===1)y.set(E.pageX,E.pageY);else{const $=Ve(E),W=.5*(E.pageX+$.x),ee=.5*(E.pageY+$.y);y.set(W,ee)}g.subVectors(y,v).multiplyScalar(i.panSpeed),H(g.x,g.y),v.copy(y)}function De(E){const $=Ve(E),W=E.pageX-$.x,ee=E.pageY-$.y,ce=Math.sqrt(W*W+ee*ee);_.set(0,ce),x.set(0,Math.pow(_.y/d.y,i.zoomSpeed)),Z(x.y),d.copy(_);const Le=(E.pageX+$.x)*.5,Ge=(E.pageY+$.y)*.5;Q(Le,Ge)}function we(E){i.enableZoom&&De(E),i.enablePan&&pe(E)}function Se(E){i.enableZoom&&De(E),i.enableRotate&&Ue(E)}function We(E){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",b)),!ve(E)&&(Xe(E),E.pointerType==="touch"?Te(E):q(E)))}function L(E){i.enabled!==!1&&(E.pointerType==="touch"?le(E):te(E))}function b(E){switch(ke(E),T.length){case 0:i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",b),i.dispatchEvent(Ig),s=r.NONE;break;case 1:const $=T[0],W=P[$];Te({pointerId:$,pageX:W.x,pageY:W.y});break}}function q(E){let $;switch(E.button){case 0:$=i.mouseButtons.LEFT;break;case 1:$=i.mouseButtons.MIDDLE;break;case 2:$=i.mouseButtons.RIGHT;break;default:$=-1}switch($){case es.DOLLY:if(i.enableZoom===!1)return;se(E),s=r.DOLLY;break;case es.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;me(E),s=r.PAN}else{if(i.enableRotate===!1)return;j(E),s=r.ROTATE}break;case es.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;j(E),s=r.ROTATE}else{if(i.enablePan===!1)return;me(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(dd)}function te(E){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;V(E);break;case r.DOLLY:if(i.enableZoom===!1)return;X(E);break;case r.PAN:if(i.enablePan===!1)return;re(E);break}}function ie(E){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(E.preventDefault(),i.dispatchEvent(dd),oe(ne(E)),i.dispatchEvent(Ig))}function ne(E){const $=E.deltaMode,W={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch($){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return E.ctrlKey&&!A&&(W.deltaY*=10),W}function Me(E){E.key==="Control"&&(A=!0,i.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(E){E.key==="Control"&&(A=!1,i.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function he(E){i.enabled===!1||i.enablePan===!1||Re(E)}function Te(E){switch(je(E),T.length){case 1:switch(i.touches.ONE){case ts.ROTATE:if(i.enableRotate===!1)return;xe(E),s=r.TOUCH_ROTATE;break;case ts.PAN:if(i.enablePan===!1)return;Ne(E),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ts.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(E),s=r.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(E),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(dd)}function le(E){switch(je(E),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;pe(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;we(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(E),i.update();break;default:s=r.NONE}}function Ae(E){i.enabled!==!1&&E.preventDefault()}function Xe(E){T.push(E.pointerId)}function ke(E){delete P[E.pointerId];for(let $=0;$<T.length;$++)if(T[$]==E.pointerId){T.splice($,1);return}}function ve(E){for(let $=0;$<T.length;$++)if(T[$]==E.pointerId)return!0;return!1}function je(E){let $=P[E.pointerId];$===void 0&&($=new Ce,P[E.pointerId]=$),$.set(E.pageX,E.pageY)}function Ve(E){const $=E.pointerId===T[0]?T[1]:T[0];return P[$]}i.domElement.addEventListener("contextmenu",Ae),i.domElement.addEventListener("pointerdown",We),i.domElement.addEventListener("pointercancel",b),i.domElement.addEventListener("wheel",ie,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}const Wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Qr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yA=new Cf(-1,1,1,-1,0,1);class SA extends Cn{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}}const MA=new SA;class Wc{constructor(e){this._mesh=new dt(MA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qx extends Qr{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zn.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wc(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fg extends Qr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class EA extends Qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ce);this._width=i.width,this._height=i.height,n=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qx(Wa),this.copyPass.material.blending=Bt,this.clock=new lA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fg!==void 0&&(a instanceof Fg?i=!0:a instanceof EA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class TA extends Qr{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const vl={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},xl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},hd={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function AA(t=5){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=bA(e),i=n.length,r=new Uint8Array(i*4);for(let a=0;a<i;++a){const o=n[a],l=2*Math.PI*o/i,c=new O(Math.cos(l),Math.sin(l),0).normalize();r[a*4]=(c.x*.5+.5)*255,r[a*4+1]=(c.y*.5+.5)*255,r[a*4+2]=127,r[a*4+3]=255}const s=new Nf(r,e,e);return s.wrapS=nn,s.wrapT=nn,s.needsUpdate=!0,s}function bA(t){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=e*e,i=Array(n).fill(0);let r=Math.floor(e/2),s=e-1;for(let a=1;a<=n;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=a++;s++,r--}return i}const _l={defines:{SAMPLES:16,SAMPLE_VECTORS:Jx(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ce},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Jx(t,e,n){const i=CA(t,e,n);let r="vec3[SAMPLES](";for(let s=0;s<t;s++){const a=i[s];r+=`vec3(${a.x}, ${a.y}, ${a.z})${s<t-1?",":")"}`}return r}function CA(t,e,n){const i=[];for(let r=0;r<t;r++){const s=2*Math.PI*e*r/t,a=Math.pow(r/(t-1),n);i.push(new O(Math.cos(s),Math.sin(s),a))}return i}class RA{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,n,i){return e[0]*n+e[1]*i}dot3(e,n,i,r){return e[0]*n+e[1]*i+e[2]*r}dot4(e,n,i,r,s){return e[0]*n+e[1]*i+e[2]*r+e[3]*s}noise(e,n){let i,r,s;const a=.5*(Math.sqrt(3)-1),o=(e+n)*a,l=Math.floor(e+o),c=Math.floor(n+o),u=(3-Math.sqrt(3))/6,p=(l+c)*u,f=l-p,m=c-p,v=e-f,y=n-m;let g,d;v>y?(g=1,d=0):(g=0,d=1);const _=v-g+u,x=y-d+u,S=v-1+2*u,C=y-1+2*u,w=l&255,T=c&255,P=this.perm[w+this.perm[T]]%12,A=this.perm[w+g+this.perm[T+d]]%12,M=this.perm[w+1+this.perm[T+1]]%12;let N=.5-v*v-y*y;N<0?i=0:(N*=N,i=N*N*this.dot(this.grad3[P],v,y));let F=.5-_*_-x*x;F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[A],_,x));let D=.5-S*S-C*C;return D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[M],S,C)),70*(i+r+s)}noise3d(e,n,i){let r,s,a,o;const c=(e+n+i)*.3333333333333333,u=Math.floor(e+c),p=Math.floor(n+c),f=Math.floor(i+c),m=1/6,v=(u+p+f)*m,y=u-v,g=p-v,d=f-v,_=e-y,x=n-g,S=i-d;let C,w,T,P,A,M;_>=x?x>=S?(C=1,w=0,T=0,P=1,A=1,M=0):_>=S?(C=1,w=0,T=0,P=1,A=0,M=1):(C=0,w=0,T=1,P=1,A=0,M=1):x<S?(C=0,w=0,T=1,P=0,A=1,M=1):_<S?(C=0,w=1,T=0,P=0,A=1,M=1):(C=0,w=1,T=0,P=1,A=1,M=0);const N=_-C+m,F=x-w+m,D=S-T+m,B=_-P+2*m,J=x-A+2*m,H=S-M+2*m,Z=_-1+3*m,I=x-1+3*m,Q=S-1+3*m,k=u&255,j=p&255,se=f&255,me=this.perm[k+this.perm[j+this.perm[se]]]%12,V=this.perm[k+C+this.perm[j+w+this.perm[se+T]]]%12,X=this.perm[k+P+this.perm[j+A+this.perm[se+M]]]%12,re=this.perm[k+1+this.perm[j+1+this.perm[se+1]]]%12;let oe=.6-_*_-x*x-S*S;oe<0?r=0:(oe*=oe,r=oe*oe*this.dot3(this.grad3[me],_,x,S));let Re=.6-N*N-F*F-D*D;Re<0?s=0:(Re*=Re,s=Re*Re*this.dot3(this.grad3[V],N,F,D));let xe=.6-B*B-J*J-H*H;xe<0?a=0:(xe*=xe,a=xe*xe*this.dot3(this.grad3[X],B,J,H));let Ne=.6-Z*Z-I*I-Q*Q;return Ne<0?o=0:(Ne*=Ne,o=Ne*Ne*this.dot3(this.grad3[re],Z,I,Q)),32*(r+s+a+o)}noise4d(e,n,i,r){const s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,p,f,m,v;const y=(e+n+i+r)*l,g=Math.floor(e+y),d=Math.floor(n+y),_=Math.floor(i+y),x=Math.floor(r+y),S=(g+d+_+x)*c,C=g-S,w=d-S,T=_-S,P=x-S,A=e-C,M=n-w,N=i-T,F=r-P,D=A>M?32:0,B=A>N?16:0,J=M>N?8:0,H=A>F?4:0,Z=M>F?2:0,I=N>F?1:0,Q=D+B+J+H+Z+I,k=a[Q][0]>=3?1:0,j=a[Q][1]>=3?1:0,se=a[Q][2]>=3?1:0,me=a[Q][3]>=3?1:0,V=a[Q][0]>=2?1:0,X=a[Q][1]>=2?1:0,re=a[Q][2]>=2?1:0,oe=a[Q][3]>=2?1:0,Re=a[Q][0]>=1?1:0,xe=a[Q][1]>=1?1:0,Ne=a[Q][2]>=1?1:0,U=a[Q][3]>=1?1:0,ze=A-k+c,Fe=M-j+c,Ue=N-se+c,pe=F-me+c,De=A-V+2*c,we=M-X+2*c,Se=N-re+2*c,We=F-oe+2*c,L=A-Re+3*c,b=M-xe+3*c,q=N-Ne+3*c,te=F-U+3*c,ie=A-1+4*c,ne=M-1+4*c,Me=N-1+4*c,ue=F-1+4*c,he=g&255,Te=d&255,le=_&255,Ae=x&255,Xe=o[he+o[Te+o[le+o[Ae]]]]%32,ke=o[he+k+o[Te+j+o[le+se+o[Ae+me]]]]%32,ve=o[he+V+o[Te+X+o[le+re+o[Ae+oe]]]]%32,je=o[he+Re+o[Te+xe+o[le+Ne+o[Ae+U]]]]%32,Ve=o[he+1+o[Te+1+o[le+1+o[Ae+1]]]]%32;let st=.6-A*A-M*M-N*N-F*F;st<0?u=0:(st*=st,u=st*st*this.dot4(s[Xe],A,M,N,F));let E=.6-ze*ze-Fe*Fe-Ue*Ue-pe*pe;E<0?p=0:(E*=E,p=E*E*this.dot4(s[ke],ze,Fe,Ue,pe));let $=.6-De*De-we*we-Se*Se-We*We;$<0?f=0:($*=$,f=$*$*this.dot4(s[ve],De,we,Se,We));let W=.6-L*L-b*b-q*q-te*te;W<0?m=0:(W*=W,m=W*W*this.dot4(s[je],L,b,q,te));let ee=.6-ie*ie-ne*ne-Me*Me-ue*ue;return ee<0?v=0:(ee*=ee,v=ee*ee*this.dot4(s[Ve],ie,ne,Me,ue)),27*(u+p+f+m+v)}}class Xn extends Qr{constructor(e,n,i,r,s,a,o){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=n,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=AA(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new En(this.width,this.height,{type:hi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new St({defines:Object.assign({},vl.defines),uniforms:Zn.clone(vl.uniforms),vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader,blending:Bt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new sA,this.normalMaterial.blending=Bt,this.pdMaterial=new St({defines:Object.assign({},_l.defines),uniforms:Zn.clone(_l.uniforms),vertexShader:_l.vertexShader,fragmentShader:_l.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new St({defines:Object.assign({},xl.defines),uniforms:Zn.clone(xl.uniforms),vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader,blending:Bt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new St({uniforms:Zn.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:mh,blendDst:La,blendEquation:Yn,blendSrcAlpha:ph,blendDstAlpha:La,blendEquationAlpha:Yn}),this.blendMaterial=new St({uniforms:Zn.clone(hd.uniforms),vertexShader:hd.vertexShader,fragmentShader:hd.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cx,blendSrc:mh,blendDst:La,blendEquation:Yn,blendSrcAlpha:ph,blendDstAlpha:La,blendEquationAlpha:Yn}),this.fsQuad=new Wc(null),this.originalClearColor=new _e,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e!==void 0?(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1):(this.depthTexture=new Pf,this.depthTexture.format=Xr,this.depthTexture.type=Wr,this.normalRenderTarget=new En(this.width,this.height,{minFilter:Yt,magFilter:Yt,type:hi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let n=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,n=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,n=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,n=!0),n&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Jx(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Xn.OUTPUT.Off:break;case Xn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Xn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Xn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Xn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Xn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Xn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,n){this.width=e,this.height=n,this.gtaoRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.pdRenderTarget.setSize(e,n),this.gtaoMaterial.uniforms.resolution.value.set(e,n),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,n),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){const r=n.get(i);i.visible=r}),n.clear()}generateNoise(e=64){const n=new RA,i=e*e*4,r=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=a,c=o;r[(a*e+o)*4]=(n.noise(l,c)*.5+.5)*255,r[(a*e+o)*4+1]=(n.noise(l+e,c)*.5+.5)*255,r[(a*e+o)*4+2]=(n.noise(l,c+e)*.5+.5)*255,r[(a*e+o)*4+3]=(n.noise(l+e,c+e)*.5+.5)*255}const s=new Nf(r,e,e,ei,Ii);return s.wrapS=nn,s.wrapT=nn,s.needsUpdate=!0,s}}Xn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const PA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ta extends Qr{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new _e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new En(s,a,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const f=new En(s,a,{type:hi});f.texture.name="UnrealBloomPass.h"+p,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new En(s,a,{type:hi});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}const o=PA;this.highPassUniforms=Zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new Ce(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Wa;this.copyUniforms=Zn.clone(u.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:dh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _e,this.oldClearAlpha=1,this.basic=new uo,this.fsQuad=new Wc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ce(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ta.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ta.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ta.BlurDirectionX=new Ce(1,0);ta.BlurDirectionY=new Ce(0,1);const NA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class LA extends Qr{constructor(){super();const e=NA;this.uniforms=Zn.clone(e.uniforms),this.material=new rA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ef?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===px?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mx&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const DA={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ce(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};class Xc extends dt{constructor(){const e=Xc.SkyShader,n=new St({name:e.name,uniforms:Zn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:sn,depthWrite:!1});super(new it(1,1,1),n),this.isSky=!0}}Xc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new O},up:{value:new O(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function IA(t=42089){const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=512;const a=s.getContext("2d");r.fillStyle="#f0f2f5",r.fillRect(0,0,512,512),a.fillStyle="#000000",a.fillRect(0,0,512,512);const o=8,l=16,c=8,u=6,p=(512-c*(o+1))/o,f=(512-u*(l+1))/l,m=ca(t+443322),v=["#ffe49e","#ffd56b","#fff3cc","#ffe9b3"];for(let d=0;d<l;d++){const _=u+d*(f+u);r.fillStyle="#d2d6dc",r.fillRect(0,_+f,512,u*.4);for(let x=0;x<o;x++){const S=c+x*(p+c);if(r.fillStyle="#2d333b",r.fillRect(S-1,_-1,p+2,f+2),r.fillStyle="#1c2533",r.fillRect(S,_,p,f),r.fillStyle="#283445",r.fillRect(S+p*.48,_,p*.08,f),r.fillStyle="rgba(0, 0, 0, 0.35)",r.fillRect(S,_,p,f*.25),m()>.35){const w=v[Math.floor(m()*v.length)];a.fillStyle=w,a.fillRect(S+1,_+1,p-2,f-2),m()>.5&&(a.fillStyle="rgba(0, 0, 0, 0.45)",a.fillRect(S+1,_+1,(p-2)*(.2+m()*.4),f-2))}}}const y=new yc(i);y.wrapS=nn,y.wrapT=nn,y.repeat.set(1,1),y.colorSpace=en;const g=new yc(s);return g.wrapS=nn,g.wrapT=nn,g.repeat.set(1,1),g.colorSpace=en,{diffuseMap:y,emissiveMap:g,dispose:()=>{y.dispose(),g.dispose()}}}function UA(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=n.createImageData(256,256),r=i.data,s=ca(87654321);for(let o=0;o<256*256;o++){const l=o*4,c=Math.floor(128+(s()-.5)*44);r[l]=c,r[l+1]=c,r[l+2]=c,r[l+3]=255}n.putImageData(i,0,0);const a=new yc(e);return a.wrapS=nn,a.wrapT=nn,a.repeat.set(36,36),a.colorSpace=en,{texture:a,dispose:()=>a.dispose()}}function FA(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=n.createImageData(256,256),r=i.data;for(let a=0;a<256;a++)for(let o=0;o<256;o++){const l=(a*256+o)*4,c=o/256*Math.PI*4,u=a/256*Math.PI*4,p=Math.sin(c)*.35+Math.cos(u*1.5)*.25,f=Math.cos(u)*.35+Math.sin(c*1.5)*.25;r[l]=Math.floor((p*.5+.5)*255),r[l+1]=Math.floor((f*.5+.5)*255),r[l+2]=230,r[l+3]=255}n.putImageData(i,0,0);const s=new yc(e);return s.wrapS=nn,s.wrapT=nn,s.repeat.set(16,16),{texture:s,dispose:()=>s.dispose()}}function qc(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},a={},o=t[0].morphTargetsRelative,l=new Cn;let c=0;for(let u=0;u<t.length;++u){const p=t[u];let f=0;if(n!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in p.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(p.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in p.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(p.morphAttributes[m])}if(e){let m;if(n)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(n){let u=0;const p=[];for(let f=0;f<t.length;++f){const m=t[f].index;for(let v=0;v<m.count;++v)p.push(m.getX(v)+u);u+=t[f].attributes.position.count}l.setIndex(p)}for(const u in s){const p=Og(s[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in a){const p=a[u][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<p;++f){const m=[];for(let y=0;y<a[u].length;++y)m.push(a[u][y][f]);const v=Og(m);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}return l}function Og(t){let e,n,i,r=-1,s=0;for(let c=0;c<t.length;++c){const u=t[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*n}const a=new e(s),o=new wn(a,n,i);let l=0;for(let c=0;c<t.length;++c){const u=t[c];if(u.isInterleavedBufferAttribute){const p=l/n;for(let f=0,m=u.count;f<m;f++)for(let v=0;v<n;v++){const y=u.getComponent(f,v);o.setComponent(f+p,v,y)}}else a.set(u.array,l);l+=u.count*n}return r!==void 0&&(o.gpuType=r),o}function OA(){const t=[],e=new it(1,.95,1);e.translate(0,.95/2,0),t.push(e);const n=new it(1,.05,.05);n.translate(0,.95+.025,.475),t.push(n);const i=new it(1,.05,.05);i.translate(0,.95+.025,-.475),t.push(i);const r=new it(.05,.05,.9);r.translate(.475,.95+.025,0),t.push(r);const s=new it(.05,.05,.9);s.translate(-.475,.95+.025,0),t.push(s);const a=new it(.42,.09,.42);a.translate(0,.95+.045,0),t.push(a);const o=qc(t,!1);return t.forEach(l=>l.dispose()),o}function kA(){const t=[],n=new it(1,.55,1);n.translate(0,.55/2,0),t.push(n);const i=.41,r=.72,s=new it(r,i,r);s.translate(0,.55+i/2,0),t.push(s);const a=new it(1,.03,.04);a.translate(0,.55+.015,.48),t.push(a);const o=new it(1,.03,.04);o.translate(0,.55+.015,-.48),t.push(o);const l=.07,c=new it(.32,l,.32);c.translate(0,.55+i+l/2,0),t.push(c);const u=qc(t,!1);return t.forEach(p=>p.dispose()),u}function zA(){const t=[],n=new it(1,.9,1);n.translate(0,.9/2,0),t.push(n);const i=.08,r=.06,s=new it(1,i,r);s.translate(0,.9+i/2,.5-r/2),t.push(s);const a=new it(1,i,r);a.translate(0,.9+i/2,-.5+r/2),t.push(a);const o=new it(r,i,1-r*2);o.translate(.5-r/2,.9+i/2,0),t.push(o);const l=new it(r,i,1-r*2);l.translate(-.5+r/2,.9+i/2,0),t.push(l);const c=new it(.28,.12,.28);c.translate(.22,.9+.06,.22),t.push(c);const u=qc(t,!1);return t.forEach(p=>p.dispose()),u}function BA(){const t=OA(),e=kA(),n=zA();return{simpleTower:t,steppedTower:e,lowBlock:n,dispose:()=>{t.dispose(),e.dispose(),n.dispose()}}}function HA(){const t=[],e=new Gc(.12,.22,1.2,5);e.translate(0,.6,0),t.push(e);const n=new Sc(1.2,2,6);n.translate(0,1.2+1,0),t.push(n);const i=new Sc(.85,1.6,6);i.translate(0,2+.8,0),t.push(i);const r=qc(t,!1);return t.forEach(s=>s.dispose()),r}const kg=[new _e(4023869),new _e(4879170),new _e(3101235),new _e(5668166),new _e(6391112)];function jA(t,e,n,i){if(i==="baja")return[];const r=i==="alta"?260:110,s=[],a=ca(t.seed+88888),o=t.cityRadius,l=e.maxHeight-e.minHeight,c=Ia*.44;let u=0;const p=r*6,f=new O,m=new O,v=new ri,y=new fi;for(;s.length<r&&u<p;){u++;const g=a()*Math.PI*2,d=o*1.05+a()*(c-o*1.05),_=Math.cos(g)*d,x=Math.sin(g)*d;if(Math.abs(_)>c||Math.abs(x)>c)continue;const S=Qn(_,x,t,n,e.centerHeight,e.lotBaseHeight);if(t.showWater&&t.terrainType!=="plano"&&S<e.waterLevel+.6||(l>.01?(S-e.minHeight)/l:.5)>.75)continue;const w=.8,T=Qn(_-w,x,t,n,e.centerHeight,e.lotBaseHeight),P=Qn(_+w,x,t,n,e.centerHeight,e.lotBaseHeight),A=Qn(_,x-w,t,n,e.centerHeight,e.lotBaseHeight),M=Qn(_,x+w,t,n,e.centerHeight,e.lotBaseHeight);if(Math.sqrt(((P-T)/(2*w))**2+((M-A)/(2*w))**2)>.38)continue;const F=.75+a()*.6;f.set(_,S,x),m.set(F,F,F),v.set(0,a()*Math.PI*2,0),y.setFromEuler(v);const D=new Qe;D.compose(f,y,m);const J=kg[Math.floor(a()*kg.length)].clone(),H=(a()-.5)*.08;J.offsetHSL(0,0,H),s.push({matrix:D,color:J})}return s}function zg(t,e){const n=t>=5.5&&t<=19.5,i=!n,r=new O,s=new _e,a=new _e,o=new _e,l=new _e;let c=2.4,u=.5,p=0;if(n){const f=(t-5.5)/14*Math.PI;r.set(-Math.cos(f)*280,Math.sin(f)*280+12,90);const m=Math.sin(f);if(t<8){const v=(t-5.5)/2.5;s.setRGB(.92,.65+.15*v,.55+.3*v),a.setRGB(.9,.7+.1*v,.65+.2*v),o.setRGB(1,.78,.52),l.setRGB(.35,.3,.25),c=1.8+.6*v,u=.45+.1*v,p=Math.max(0,.6*(1-v))}else if(t>16.5){const v=(19.5-t)/3;s.setRGB(.95,.58+.2*v,.48+.35*v),a.setRGB(.88,.64+.15*v,.55+.3*v),o.setRGB(1,.72,.45),l.setRGB(.35,.28,.24),c=1.6+.8*v,u=.42+.12*v,p=Math.max(0,.8*(1-v))}else s.setRGB(.52+.1*m,.72+.08*m,.95),a.setRGB(.7+.08*m,.8+.06*m,.93),o.setRGB(1,.98,.94),l.setRGB(.38,.4,.42),c=2.6,u=.6,p=0}else{const m=(t>19.5?(t-19.5)/10:(t+4.5)/10)*Math.PI;r.set(Math.cos(m)*250,Math.sin(m)*220+30,-90),s.setRGB(.04,.07,.14),a.setRGB(.03,.06,.12),o.setRGB(.65,.75,.95),l.setRGB(.05,.08,.15),c=.55,u=.3,p=1.25}return e&&n&&(c*=1.35,u*=.65),{isDay:n,isNight:i,sunPos:r,skyColor:s,fogColor:a,lightColor:o,groundColor:l,lightIntensity:c,ambientIntensity:u,emissiveIntensity:p}}const VA=({params:t,terrainGeometry:e,waterGeometry:n,metrics:i,buildings:r,cameraPreset:s,onCameraPresetApplied:a,triggerScreenshot:o,onScreenshotTaken:l})=>{const c=ae.useRef(null),[u,p]=ae.useState({x:0,y:0,visible:!1}),f=ae.useRef(null),m=ae.useRef(null),v=ae.useRef(null),y=ae.useRef(null),g=ae.useRef(null),d=ae.useRef(null),_=ae.useRef(null),x=ae.useRef(null),S=ae.useRef(null),C=ae.useRef(null),w=ae.useRef(null),T=ae.useRef(null),P=ae.useRef(null),A=ae.useRef(null),M=ae.useRef(null),N=ae.useRef(null),F=ae.useRef(null),D=ae.useRef(null),B=ae.useRef([]),J=ae.useRef(null),H=ae.useRef(null),Z=ae.useRef({startPos:new O,targetPos:new O,startLookAt:new O,targetLookAt:new O,startTime:0,duration:900,active:!1}),I=ae.useRef(!1);ae.useEffect(()=>{const k=c.current;if(!k)return;const j=new Vx;f.current=j;const se=new mc(9094386,.0022);j.fog=se;const me=k.clientWidth/k.clientHeight,V=new yn(45,me,.5,1400);V.position.set(160,150,160),v.current=V;const X=new jx({antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});X.setSize(k.clientWidth,k.clientHeight),X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.outputColorSpace=en,X.toneMapping=Ef,X.toneMappingExposure=1,X.shadowMap.enabled=!0,X.shadowMap.type=Fl,k.appendChild(X.domElement),m.current=X;const re=new Zx(V,X.domElement);re.enableDamping=!0,re.dampingFactor=.05,re.maxPolarAngle=Math.PI/2-.02,re.minDistance=8,re.maxDistance=580,re.target.set(0,10,0),y.current=re;const oe=new Xc;oe.scale.setScalar(45e4),j.add(oe),d.current=oe;const Re=oe.material.uniforms;Re.turbidity.value=8,Re.rayleigh.value=2.2,Re.mieCoefficient.value=.005,Re.mieDirectionalG.value=.82;const xe=new Xx(16775654,2.4);xe.castShadow=!0,xe.shadow.mapSize.width=t.quality==="alta"?2048:1024,xe.shadow.mapSize.height=t.quality==="alta"?2048:1024,xe.shadow.bias=-18e-5,xe.shadow.normalBias=.025,xe.shadow.camera.left=-230,xe.shadow.camera.right=230,xe.shadow.camera.top=230,xe.shadow.camera.bottom=-230,xe.shadow.camera.near=10,xe.shadow.camera.far=650,j.add(xe),j.add(xe.target),S.current=xe;const Ne=new Wx(16777215,4473924,.5);Ne.position.set(0,220,0),j.add(Ne),C.current=Ne;const U=new qx(16777215,.28);j.add(U),w.current=U;const ze=new Ji;j.add(ze),D.current=ze;const Fe=new Ji;j.add(Fe),J.current=Fe;const Ue=new Ji;j.add(Ue),H.current=Ue,N.current=IA(t.seed),F.current=BA(),P.current=UA(),M.current=FA();const pe=new wA(X);g.current=pe;const De=new TA(j,V);pe.addPass(De);const we=new Xn(j,V,k.clientWidth,k.clientHeight);we.output=Xn.OUTPUT.Default,we.blendIntensity=.75,we.updateGtaoMaterial({radius:9,distanceExponent:1.3,thickness:6}),pe.addPass(we),_.current=we;const Se=new ta(new Ce(k.clientWidth,k.clientHeight),.32,.4,.82);pe.addPass(Se);const We=new Qx(DA),L=X.getPixelRatio();We.material.uniforms.resolution.value.x=1/(k.clientWidth*L),We.material.uniforms.resolution.value.y=1/(k.clientHeight*L),pe.addPass(We),x.current=We;const b=new LA;pe.addPass(b);let q;const te=new O,ie=Me=>{q=requestAnimationFrame(ie);const ue=Z.current;if(ue.active){const he=performance.now()-ue.startTime,Te=Math.min(1,he/ue.duration),le=Te<.5?4*Te*Te*Te:1-Math.pow(-2*Te+2,3)/2;V.position.lerpVectors(ue.startPos,ue.targetPos,le),re.target.lerpVectors(ue.startLookAt,ue.targetLookAt,le),Te>=1&&(ue.active=!1)}if(re.update(),M.current&&(M.current.texture.offset.x=Me*4e-5%1,M.current.texture.offset.y=Me*3e-5%1),H.current&&t.showLotVolume&&k)if(te.set(t.lotX,i.lotBaseHeight+t.lotHeight+2.5,t.lotZ),te.project(V),te.z>1)p(Te=>Te.visible?{...Te,visible:!1}:Te);else{const Te=(te.x*.5+.5)*k.clientWidth,le=(-te.y*.5+.5)*k.clientHeight;p({x:Te,y:le,visible:!0})}if(t.quality==="baja"?X.render(j,V):pe.render(),I.current){I.current=!1;try{X.render(j,V);const he=X.domElement.toDataURL("image/png"),Te=document.createElement("a"),le=Math.floor(t.hourOfDay);Te.download=`terra-urbis-semilla-${t.seed}-${le}h.png`,Te.href=he,Te.click(),l&&l()}catch(he){console.error("Error al capturar imagen:",he)}}};q=requestAnimationFrame(ie);const ne=()=>{if(!k)return;const Me=k.clientWidth,ue=k.clientHeight,he=X.getPixelRatio();V.aspect=Me/ue,V.updateProjectionMatrix(),X.setSize(Me,ue),pe.setSize(Me,ue),_.current&&_.current.setSize(Me,ue),x.current&&(x.current.material.uniforms.resolution.value.x=1/(Me*he),x.current.material.uniforms.resolution.value.y=1/(ue*he))};return window.addEventListener("resize",ne),()=>{cancelAnimationFrame(q),window.removeEventListener("resize",ne),re.dispose(),X.dispose(),pe.dispose(),N.current&&N.current.dispose(),F.current&&F.current.dispose(),P.current&&P.current.dispose(),M.current&&M.current.dispose(),k.contains(X.domElement)&&k.removeChild(X.domElement)}},[]),ae.useEffect(()=>{o&&(I.current=!0)},[o]),ae.useEffect(()=>{const k=m.current,j=S.current,se=_.current;!k||!j||(t.quality==="alta"?(k.shadowMap.type=Fl,j.shadow.mapSize.set(2048,2048),j.shadow.map&&j.shadow.map.dispose(),j.shadow.map=null,se&&(se.enabled=!0)):t.quality==="media"?(k.shadowMap.type=Fl,j.shadow.mapSize.set(1024,1024),j.shadow.map&&j.shadow.map.dispose(),j.shadow.map=null,se&&(se.enabled=!1)):(k.shadowMap.type=Bc,j.shadow.mapSize.set(1024,1024),j.shadow.map&&j.shadow.map.dispose(),j.shadow.map=null,se&&(se.enabled=!1)))},[t.quality]),ae.useEffect(()=>{const k=f.current,j=S.current,se=C.current,me=w.current,V=d.current;if(!k||!j||!se||!me)return;const X=zg(t.hourOfDay,t.shadowStudy);j.position.copy(X.sunPos),j.color.copy(X.lightColor),j.intensity=X.lightIntensity,j.target.position.set(0,0,0),j.target.updateMatrixWorld(),se.color.copy(X.lightColor),se.groundColor.copy(X.groundColor),se.intensity=X.ambientIntensity,me.intensity=X.ambientIntensity*.5,k.fog&&k.fog instanceof mc&&k.fog.color.copy(X.fogColor),k.background=X.skyColor,V&&(V.material.uniforms.sunPosition.value.copy(X.sunPos),X.isNight?V.visible=!1:V.visible=!0),B.current.forEach(re=>{re.emissiveIntensity=X.emissiveIntensity})},[t.hourOfDay,t.shadowStudy]),ae.useEffect(()=>{var V;const k=f.current;if(!k||(T.current&&(k.remove(T.current),T.current.geometry.dispose(),T.current.material.dispose(),T.current=null),!e))return;const j=(V=P.current)==null?void 0:V.texture,se=new Gn({vertexColors:!0,map:j||null,roughness:.82,metalness:.05,flatShading:!1}),me=new dt(e,se);me.receiveShadow=!0,me.castShadow=!0,k.add(me),T.current=me},[e]),ae.useEffect(()=>{var V;const k=f.current;if(!k||(A.current&&(k.remove(A.current),A.current.geometry.dispose(),A.current.material.dispose(),A.current=null),!n||!t.showWater||t.terrainType==="plano"))return;const j=(V=M.current)==null?void 0:V.texture,se=new Gn({color:1929369,roughness:.1,metalness:.22,normalMap:j||null,normalScale:new Ce(.35,.35),transparent:!0,opacity:.78,depthWrite:!1}),me=new dt(n,se);me.position.y=i.waterLevel,me.receiveShadow=!0,k.add(me),A.current=me},[n,t.showWater,t.terrainType,i.waterLevel]),ae.useEffect(()=>{const k=J.current;if(!k)return;for(;k.children.length>0;){const re=k.children[0];k.remove(re),re instanceof ys&&(re.geometry.dispose(),re.material.dispose())}if(t.terrainType==="plano"&&i.maxHeight===0)return;const j=new xo(t.seed),se=jA(t,i,j,t.quality);if(se.length===0)return;const me=HA(),V=new Gn({roughness:.72,metalness:.08}),X=new ys(me,V,se.length);X.castShadow=!0,X.receiveShadow=!0;for(let re=0;re<se.length;re++)X.setMatrixAt(re,se[re].matrix),X.setColorAt(re,se[re].color);X.instanceMatrix.needsUpdate=!0,X.instanceColor&&(X.instanceColor.needsUpdate=!0),k.add(X)},[t.seed,t.cityRadius,t.terrainType,t.relief,t.terrainScale,t.octaves,t.quality,t.showWater,i]),ae.useEffect(()=>{const k=D.current;if(!k||!F.current||!N.current)return;for(;k.children.length>0;){const Ue=k.children[0];k.remove(Ue),Ue instanceof ys&&(Ue.geometry.dispose(),Array.isArray(Ue.material)?Ue.material.forEach(pe=>pe.dispose()):Ue.material.dispose())}if(B.current=[],r.length===0)return;const{diffuseMap:j,emissiveMap:se}=N.current,{simpleTower:me,steppedTower:V,lowBlock:X}=F.current,re=zg(t.hourOfDay,t.shadowStudy),oe=new Gn({map:j,emissiveMap:se,emissive:new _e(16769674),emissiveIntensity:re.emissiveIntensity,roughness:.52,metalness:.18});B.current.push(oe);const Re=new Gn({color:14213868,transparent:!0,opacity:.28,roughness:.6,metalness:.1,depthWrite:!1}),xe=[],Ne=[],U=[],ze=65;for(let Ue=0;Ue<r.length;Ue++){const pe=r[Ue],De=ca(t.seed+10101+Ue*37)();let we=0;pe.height>34?we=De<.65?1:0:pe.height<15?we=De<.65?2:0:De<.34?we=0:De<.68?we=1:we=2;const Se=Math.hypot(pe.x-t.lotX,pe.z-t.lotZ),We=t.contextMode&&Se<ze,L={building:pe,isContextGhost:We};we===0?xe.push(L):we===1?Ne.push(L):U.push(L)}const Fe=(Ue,pe)=>{const De=Ue.filter(te=>!te.isContextGhost),we=Ue.filter(te=>te.isContextGhost),Se=new Qe,We=new O,L=new O,b=new _e,q=new fi;if(De.length>0){const te=new ys(pe,oe,De.length);te.castShadow=!0,te.receiveShadow=!0;for(let ie=0;ie<De.length;ie++){const ne=De[ie].building;We.set(ne.x,ne.y,ne.z),L.set(ne.width,ne.height,ne.depth),Se.compose(We,q,L),te.setMatrixAt(ie,Se),b.setRGB(ne.color[0],ne.color[1],ne.color[2]),te.setColorAt(ie,b)}te.instanceMatrix.needsUpdate=!0,te.instanceColor&&(te.instanceColor.needsUpdate=!0),k.add(te)}if(we.length>0){const te=new ys(pe,Re,we.length);te.castShadow=!1,te.receiveShadow=!0;for(let ie=0;ie<we.length;ie++){const ne=we[ie].building;We.set(ne.x,ne.y,ne.z),L.set(ne.width,ne.height,ne.depth),Se.compose(We,q,L),te.setMatrixAt(ie,Se)}te.instanceMatrix.needsUpdate=!0,k.add(te)}};Fe(xe,me),Fe(Ne,V),Fe(U,X)},[r,t.seed,t.contextMode,t.lotX,t.lotZ]),ae.useEffect(()=>{const k=H.current;if(!k)return;for(;k.children.length>0;){const Se=k.children[0];k.remove(Se),(Se instanceof dt||Se instanceof _c)&&(Se.geometry.dispose(),Array.isArray(Se.material)?Se.material.forEach(We=>We.dispose()):Se.material.dispose())}const{lotWidth:j,lotDepth:se,lotHeight:me,lotX:V,lotZ:X,showLotVolume:re,shadowStudy:oe}=t,Re=i.lotBaseHeight,xe=new it(j+1.2,.35,se+1.2);xe.translate(0,-.175,0);const Ne=new Gn({color:3488061,roughness:.75,metalness:.15}),U=new dt(xe,Ne);U.position.set(V,Re,X),U.receiveShadow=!0,U.castShadow=!0,k.add(U);const ze=new Df(Math.min(j,se)*.45,Math.min(j,se)*.52,32);ze.rotateX(-Math.PI/2);const Fe=new uo({color:16743202,side:ci,transparent:!0,opacity:.85}),Ue=new dt(ze,Fe);Ue.position.set(V,Re+.05,X),k.add(Ue);const pe=new it(j+1.4,.08,se+1.4);pe.translate(0,.04,0);const De=new uo({color:16737792,wireframe:!0}),we=new dt(pe,De);if(we.position.set(V,Re,X),k.add(we),re){const Se=new it(j,me,se);Se.translate(0,me/2,0);const We=new Gn({color:16739098,roughness:.28,metalness:.12,transparent:!0,opacity:oe?.82:.62,emissive:new _e(16730112),emissiveIntensity:.35,depthWrite:!1}),L=new dt(Se,We);L.position.set(V,Re,X),L.castShadow=!0,L.receiveShadow=!0,k.add(L);const b=new Gx(Se),q=new Lf({color:16777215,linewidth:2.5}),te=new _c(b,q);te.position.set(V,Re,X),k.add(te)}},[t.lotWidth,t.lotDepth,t.lotHeight,t.lotX,t.lotZ,t.showLotVolume,t.shadowStudy,i.lotBaseHeight]),ae.useEffect(()=>{if(!s||!v.current||!y.current)return;const k=v.current,j=y.current,{lotX:se,lotZ:me,lotHeight:V}=t,X=i.lotBaseHeight,re=new O,oe=new O;s==="aerea"?(re.set(160,150,160),oe.set(0,10,0)):s==="planta"?(re.set(0,310,.1),oe.set(0,0,0)):s==="calle"&&(re.set(se-32,X+3.8,me+32),oe.set(se,X+Math.min(V*.45,14),me)),Z.current={startPos:k.position.clone(),targetPos:re,startLookAt:j.target.clone(),targetLookAt:oe,startTime:performance.now(),duration:1e3,active:!0},a()},[s,t.lotX,t.lotZ,t.lotHeight,i.lotBaseHeight,a]);const Q=t.lotWidth*t.lotDepth;return h.jsx("div",{ref:c,className:"scene-canvas-container",role:"region","aria-label":"Visualizador 3D interactivo de Terra Urbis",children:u.visible&&t.showLotVolume&&h.jsxs("div",{className:"lot-floating-tag",style:{transform:`translate(${u.x}px, ${u.y}px) translate(-50%, -100%)`},"aria-hidden":"true",children:[h.jsxs("div",{className:"lot-tag-badge",children:[h.jsx("span",{className:"lot-tag-dot"}),h.jsx("span",{className:"lot-tag-title",children:"Lote del proyecto"})]}),h.jsxs("div",{className:"lot-tag-metrics",children:[h.jsxs("span",{className:"lot-tag-value",children:[Q," m²"]}),h.jsx("span",{className:"lot-tag-sep",children:"·"}),h.jsxs("span",{className:"lot-tag-value",children:[t.lotHeight," m"]})]})]})})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$e=(t,e)=>{const n=ae.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},u)=>ae.createElement("svg",{ref:u,...GA,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${WA(t)}`,o].join(" "),...c},[...e.map(([p,f])=>ae.createElement(p,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=$e("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=$e("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=$e("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=$e("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=$e("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=$e("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=$e("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=$e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=$e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=$e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=$e("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=$e("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=$e("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=$e("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=$e("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=$e("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=$e("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=$e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=$e("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=$e("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=$e("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=$e("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=$e("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=$e("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=$e("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=$e("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=$e("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=$e("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=$e("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=$e("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=$e("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=$e("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=$e("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=$e("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=$e("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=$e("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=$e("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=$e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fb=({stats:t})=>h.jsxs("div",{className:"stats-grid","aria-label":"Estadísticas del entorno generado",children:[h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon-wrapper buildings",children:h.jsx(Sh,{size:18})}),h.jsxs("div",{className:"stat-info",children:[h.jsx("span",{className:"stat-label",children:"Edificios"}),h.jsx("span",{className:"stat-value",children:t.buildingCount.toLocaleString("es-ES")})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon-wrapper height",children:h.jsx(rb,{size:18})}),h.jsxs("div",{className:"stat-info",children:[h.jsx("span",{className:"stat-label",children:"Altura máx. entorno"}),h.jsxs("span",{className:"stat-value",children:[t.maxSurroundingHeight.toFixed(1)," ",h.jsx("small",{children:"m"})]})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon-wrapper delta",children:h.jsx(ob,{size:18})}),h.jsxs("div",{className:"stat-info",children:[h.jsx("span",{className:"stat-label",children:"Desnivel del terreno"}),h.jsxs("span",{className:"stat-value",children:[t.heightDelta.toFixed(1)," ",h.jsx("small",{children:"m"})]})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon-wrapper lot",children:h.jsx(n_,{size:18})}),h.jsxs("div",{className:"stat-info",children:[h.jsx("span",{className:"stat-label",children:"Área del lote"}),h.jsxs("span",{className:"stat-value",children:[t.lotArea.toFixed(0)," ",h.jsx("small",{children:"m²"})]})]})]})]}),pb=({params:t,onUpdateParams:e})=>{const[n,i]=ae.useState(!1),[r,s]=ae.useState("octavas"),a=ae.useRef(null);return ae.useEffect(()=>{if(!n||r!=="octavas")return;const o=a.current;if(!o)return;const l=o.getContext("2d");if(!l)return;const c=o.width,u=o.height,p=l.createImageData(c,u),f=p.data,m=new xo(t.seed),v=t.terrainScale,y=t.octaves;for(let g=0;g<u;g++)for(let d=0;d<c;d++){const _=(d-c/2)*(360/c),x=(g-u/2)*(360/u),S=zr(_,x,y,v,30,t.terrainType==="plano"?"ondulado":t.terrainType,m),C=Math.max(0,Math.min(255,Math.floor((S+30)/60*255))),w=(g*c+d)*4;f[w]=C,f[w+1]=C,f[w+2]=C,f[w+3]=255}l.putImageData(p,0,0)},[n,r,t.seed,t.octaves,t.terrainScale,t.terrainType]),h.jsxs("div",{className:`learn-panel ${n?"open":"collapsed"}`,children:[h.jsxs("button",{className:"learn-header-btn",onClick:()=>i(!n),"aria-expanded":n,children:[h.jsxs("div",{className:"learn-header-title",children:[h.jsx(e_,{size:18,className:"learn-icon"}),h.jsx("span",{children:"Aprende las Matemáticas Procedurales"})]}),h.jsxs("div",{className:"learn-header-toggle",children:[h.jsx("span",{className:"badge-didactic",children:"Didáctico"}),n?h.jsx(ZA,{size:18}):h.jsx(YA,{size:18})]})]}),n&&h.jsxs("div",{className:"learn-content",children:[h.jsxs("div",{className:"learn-tabs",children:[h.jsxs("button",{className:`learn-tab-btn ${r==="semillas"?"active":""}`,onClick:()=>s("semillas"),children:[h.jsx(r_,{size:14}),h.jsx("span",{children:"1. Semillas"})]}),h.jsxs("button",{className:`learn-tab-btn ${r==="suavizado"?"active":""}`,onClick:()=>s("suavizado"),children:[h.jsx(lb,{size:14}),h.jsx("span",{children:"2. Suavizado"})]}),h.jsxs("button",{className:`learn-tab-btn ${r==="octavas"?"active":""}`,onClick:()=>s("octavas"),children:[h.jsx(Mh,{size:14}),h.jsx("span",{children:"3. Capas Fractales"})]})]}),r==="semillas"&&h.jsxs("div",{className:"lesson-body",children:[h.jsx("h4",{className:"lesson-title",children:"Semillas PRNG y Determinismo"}),h.jsxs("p",{className:"lesson-desc",children:["Las computadoras no generan números verdaderamente aleatorios. Utilizan un algoritmo",h.jsx("strong",{children:" pseudoaleatorio (PRNG)"})," como ",h.jsx("code",{children:"mulberry32"}),". Una ",h.jsx("em",{children:"semilla"})," (número entero) define el estado inicial: ",h.jsx("strong",{children:"la misma semilla produce la misma secuencia matemática"}),", lo que garantiza que un diseño topográfico y arquitectónico se pueda replicar exactamente."]}),h.jsxs("div",{className:"lesson-interactive",children:[h.jsx("span",{className:"interactive-label",children:"Probar semillas predeterminadas:"}),h.jsx("div",{className:"seed-pills",children:[42,1337,777,98234,10001].map(o=>h.jsxs("button",{className:`seed-pill-btn ${t.seed===o?"active":""}`,onClick:()=>e({seed:o}),children:["Semilla #",o]},o))})]})]}),r==="suavizado"&&h.jsxs("div",{className:"lesson-body",children:[h.jsx("h4",{className:"lesson-title",children:"Interpolación y Función Fade de Perlin"}),h.jsxs("p",{className:"lesson-desc",children:["El ruido blanco genera estática caótica sin continuidad. El ",h.jsx("strong",{children:"Ruido de Perlin"})," asigna vectores de gradiente en los nodos de una cuadrícula e interpola suavemente entre ellos usando la función polinómica cuíntica:"]}),h.jsx("div",{className:"math-formula",children:h.jsx("code",{children:"f(t) = 6t⁵ - 15t⁴ + 10t³"})}),h.jsxs("p",{className:"lesson-desc",children:["Esta función posee derivadas primera y segunda iguales a cero en ",h.jsx("code",{children:"t=0"})," y ",h.jsx("code",{children:"t=1"}),"(continuidad C²). Esto elimina bordes afilados o costuras artificiales entre las celdas del terreno."]}),h.jsxs("div",{className:"fade-visualizer",children:[h.jsxs("svg",{viewBox:"0 0 200 80",className:"fade-curve-svg",children:[h.jsx("line",{x1:"20",y1:"70",x2:"180",y2:"70",stroke:"var(--border)",strokeWidth:"1"}),h.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"70",stroke:"var(--border)",strokeWidth:"1"}),h.jsx("line",{x1:"20",y1:"70",x2:"180",y2:"10",stroke:"var(--text-muted)",strokeDasharray:"3,3",strokeWidth:"1"}),h.jsx("path",{d:"M 20 70 C 80 70, 120 10, 180 10",fill:"none",stroke:"var(--accent)",strokeWidth:"2.5"}),h.jsx("text",{x:"25",y:"65",fontSize:"8",fill:"var(--text-muted)",children:"t=0"}),h.jsx("text",{x:"165",y:"22",fontSize:"8",fill:"var(--text-muted)",children:"t=1"})]}),h.jsxs("div",{className:"curve-legend",children:[h.jsxs("span",{className:"legend-item",children:[h.jsx("span",{className:"dot dot-accent"})," Perlin Fade C² (Suave)"]}),h.jsxs("span",{className:"legend-item",children:[h.jsx("span",{className:"dot dot-dashed"})," Lineal (Aristas duras)"]})]})]})]}),r==="octavas"&&h.jsxs("div",{className:"lesson-body",children:[h.jsx("h4",{className:"lesson-title",children:"Capas Fractales (fBm y Octavas)"}),h.jsxs("p",{className:"lesson-desc",children:["El ",h.jsx("strong",{children:"Movimiento Browniano Fraccional (fBm)"})," suma múltiples capas de ruido de Perlin. Cada capa (octava) duplica la frecuencia espacial (lacunaridad = 2.0) y reduce a la mitad su peso vertical (ganancia = 0.5):"]}),h.jsx("div",{className:"math-formula",children:h.jsx("code",{children:"Altura(x,z) = ∑ (amplitud × gananciaⁱ) × Perlin(frecuencia × 2ⁱ)"})}),h.jsx("p",{className:"lesson-desc",children:"La 1ª octava forma las montañas y valles principales; las octavas superiores agregan la rugosidad y el detalle de las laderas."}),h.jsxs("div",{className:"octaves-interactive-demo",children:[h.jsxs("div",{className:"demo-slider-row",children:[h.jsxs("label",{htmlFor:"didactic-octaves-slider",children:["Número de octavas actuales: ",h.jsx("strong",{children:t.octaves})]}),h.jsx("input",{id:"didactic-octaves-slider",type:"range",min:"1",max:"6",step:"1",value:t.octaves,onChange:o=>e({octaves:parseInt(o.target.value,10)})})]}),h.jsxs("div",{className:"heightmap-preview-container",children:[h.jsxs("div",{className:"heightmap-canvas-box",children:[h.jsx("canvas",{ref:a,width:128,height:128,className:"heightmap-canvas",title:"Mapa de alturas 2D en escala de grises"}),h.jsx("span",{className:"heightmap-caption",children:"Vista 2D (Mapa de alturas)"})]}),h.jsxs("div",{className:"heightmap-details",children:[h.jsxs("p",{className:"detail-line",children:["• ",h.jsx("strong",{children:"Octava 1"}),": Macizo continental base."]}),h.jsxs("p",{className:"detail-line",children:["• ",h.jsx("strong",{children:"Octavas 2 a 4"}),": Colinas y vaguadas intermedias."]}),h.jsxs("p",{className:"detail-line",children:["• ",h.jsx("strong",{children:"Octavas 5 a 6"}),": Micro-relieve y textura rocosa."]})]})]})]})]})]})]})},mb=({params:t,stats:e,theme:n,onToggleTheme:i,onUpdateParams:r,onSelectCameraPreset:s,onRandomSeed:a,onCaptureScreenshot:o,onOpenPresentation:l})=>{const c=Math.floor(t.hourOfDay),u=Math.floor(t.hourOfDay%1*60),p=`${c.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")} h`;let f="Día";return t.hourOfDay<5.5||t.hourOfDay>19.5?f="Noche (Ventanas ON)":t.hourOfDay<8?f="Amanecer":t.hourOfDay>16.5?f="Atardecer":f="Mediodía",h.jsxs("aside",{className:"control-sidebar","aria-label":"Panel de configuración de Terra Urbis",children:[h.jsxs("header",{className:"sidebar-header",children:[h.jsxs("div",{className:"sidebar-brand",children:[h.jsx("div",{className:"brand-badge",children:"🏙️"}),h.jsxs("div",{children:[h.jsx("h1",{className:"brand-title",children:"Terra Urbis"}),h.jsx("p",{className:"brand-subtitle",children:"Visualización y Ciudad Procedural"})]})]}),h.jsxs("div",{className:"header-actions",children:[h.jsxs("button",{className:"header-presentation-btn",onClick:l,title:"Abrir Presentación del Proyecto (Pantalla completa)","aria-label":"Abrir Presentación del Proyecto",children:[h.jsx(ab,{size:16}),h.jsx("span",{children:"Presentación"})]}),h.jsx("button",{className:"header-icon-btn screenshot-btn",onClick:o,title:"Capturar imagen PNG de la vista actual","aria-label":"Capturar imagen PNG",children:h.jsx(Hg,{size:16})}),h.jsx("button",{className:"header-icon-btn theme-toggle-btn",onClick:i,title:n==="dark"?"Cambiar a modo claro":"Cambiar a modo oscuro","aria-label":"Alternar tema de interfaz",children:n==="dark"?h.jsx(cb,{size:18}):h.jsx(Gg,{size:18})})]})]}),h.jsxs("div",{className:"sidebar-scrollable-content",children:[h.jsx("section",{className:"control-section stats-section",children:h.jsx(fb,{stats:e})}),h.jsxs("section",{className:"control-section",children:[h.jsxs("div",{className:"section-title",children:[h.jsx(r_,{size:16}),h.jsx("span",{children:"Calidad Gráfica"}),h.jsx("span",{className:"tooltip-badge",title:"Ajusta la resolución de sombras y el postprocesado: Baja (sin postprocesado para móviles 60fps), Media (Bloom + Árboles + FXAA) y Alta (Oclusión Ambiental GTAO + Sombras 2048px).",children:h.jsx(kt,{size:13})})]}),h.jsx("div",{className:"segmented-control quality-control",children:["baja","media","alta"].map(m=>h.jsxs("button",{className:`segment-btn ${t.quality===m?"active":""}`,onClick:()=>r({quality:m}),title:m==="baja"?"Baja: Direct WebGL para móviles y bajo consumo (60 FPS)":m==="media"?"Media: Bloom nocturno sutil, árboles y antialiasing FXAA":"Alta: Oclusión Ambiental GTAO, sombras HD 2048 y máxima vegetación",children:[m==="baja"&&"Baja",m==="media"&&"Media",m==="alta"&&"Alta"]},m))})]}),h.jsx("section",{className:"control-section",children:h.jsx(pb,{params:t,onUpdateParams:r})}),h.jsxs("section",{className:"control-section",children:[h.jsxs("div",{className:"section-title",children:[h.jsx(Hg,{size:16}),h.jsx("span",{children:"Vistas de Cámara"}),h.jsx("span",{className:"tooltip-badge",title:"Transición cinemática amortiguada hacia posiciones canónicas arquitectónicas: Aérea (isométrica), Planta (cenital ortogonal) o Calle (nivel de observador peatonal).",children:h.jsx(kt,{size:13})})]}),h.jsxs("div",{className:"camera-btn-group",children:[h.jsxs("button",{className:"camera-btn",onClick:()=>s("aerea"),title:"Vista isométrica general (perspectiva clásica 45°)",children:[h.jsx(t_,{size:14}),h.jsx("span",{children:"Aérea"})]}),h.jsxs("button",{className:"camera-btn",onClick:()=>s("planta"),title:"Vista cenital de implantación urbana",children:[h.jsx(Mh,{size:14}),h.jsx("span",{children:"Planta"})]}),h.jsxs("button",{className:"camera-btn",onClick:()=>s("calle"),title:"Vista peatonal en rasante hacia el lote del proyecto",children:[h.jsx(Bg,{size:14}),h.jsx("span",{children:"Calle"})]})]})]}),h.jsxs("section",{className:"control-section",children:[h.jsxs("div",{className:"section-title",children:[h.jsx(Mh,{size:16}),h.jsx("span",{children:"Matemáticas y Relieve"}),h.jsx("span",{className:"tooltip-badge",title:"Generación topográfica determinista mediante PRNG Mulberry32, gradiente Perlin y armónicos fractales fBm.",children:h.jsx(kt,{size:13})})]}),h.jsxs("div",{className:"control-row seed-row",children:[h.jsxs("label",{htmlFor:"seed-input",className:"control-label",children:[h.jsx("span",{children:"Semilla (PRNG):"}),h.jsx("span",{className:"tooltip-icon",title:"Semilla de 32 bits para el generador Mulberry32. La misma semilla garantiza reproducir exactamente el mismo terreno y edificios bit a bit.",children:h.jsx(kt,{size:12})})]}),h.jsxs("div",{className:"seed-input-container",children:[h.jsx("input",{id:"seed-input",type:"number",className:"input-number",value:t.seed,onChange:m=>{const v=parseInt(m.target.value,10);isNaN(v)||r({seed:v})}}),h.jsxs("button",{className:"btn-secondary random-seed-btn",onClick:a,title:"Generar nueva semilla aleatoria",children:[h.jsx(i_,{size:14}),h.jsx("span",{children:"Aleatoria"})]})]})]}),h.jsxs("div",{className:"control-row",children:[h.jsxs("label",{className:"control-label",children:[h.jsx("span",{children:"Tipo de terreno:"}),h.jsx("span",{className:"tooltip-icon",title:"Plano: cota cero constante. Ondulado: fBm estándar con colinas suaves. Montañoso: Ridged multifractal con crestas afiladas (n = 2n² - 1).",children:h.jsx(kt,{size:12})})]}),h.jsx("div",{className:"segmented-control",children:["plano","ondulado","montanoso"].map(m=>h.jsxs("button",{className:`segment-btn ${t.terrainType===m?"active":""}`,onClick:()=>r({terrainType:m}),children:[m==="plano"&&"Plano",m==="ondulado"&&"Ondulado",m==="montanoso"&&"Montañoso"]},m))})]}),t.terrainType!=="plano"&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsxs("label",{htmlFor:"relief-slider",children:[h.jsx("span",{children:"Relieve vertical:"}),h.jsx("span",{className:"tooltip-icon",title:"Amplitud vertical máxima en metros (0 a 60 m). Escala el relieve resultante de la suma fractal.",children:h.jsx(kt,{size:12})})]}),h.jsxs("span",{className:"slider-value",children:[t.relief," m"]})]}),h.jsx("input",{id:"relief-slider",type:"range",min:"0",max:"60",step:"1",value:t.relief,onChange:m=>r({relief:parseFloat(m.target.value)})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsxs("label",{htmlFor:"scale-slider",children:[h.jsx("span",{children:"Escala del terreno:"}),h.jsx("span",{className:"tooltip-icon",title:"Frecuencia espacial del ruido de Perlin (0.006 × escala). Valores bajos generan colinas extendidas; valores altos, topografía densa.",children:h.jsx(kt,{size:12})})]}),h.jsxs("span",{className:"slider-value",children:[t.terrainScale.toFixed(2),"x"]})]}),h.jsx("input",{id:"scale-slider",type:"range",min:"0.4",max:"4",step:"0.1",value:t.terrainScale,onChange:m=>r({terrainScale:parseFloat(m.target.value)})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsxs("label",{htmlFor:"octaves-slider",children:[h.jsx("span",{children:"Capas fractales (Octavas):"}),h.jsx("span",{className:"tooltip-icon",title:"Número de armónicos fractales superpuestos (1 a 6). Cada octava duplica la frecuencia espacial y reduce la amplitud a la mitad.",children:h.jsx(kt,{size:12})})]}),h.jsx("span",{className:"slider-value",children:t.octaves})]}),h.jsx("input",{id:"octaves-slider",type:"range",min:"1",max:"6",step:"1",value:t.octaves,onChange:m=>r({octaves:parseInt(m.target.value,10)})})]})]})]}),h.jsxs("section",{className:"control-section",children:[h.jsxs("div",{className:"section-title",children:[h.jsx(Bg,{size:16}),h.jsx("span",{children:"Trama Urbana y Edificios"}),h.jsx("span",{className:"tooltip-badge",title:"Cuadrícula ortogonal cada 12 m con calles de 4.4 m, calzadas de asfalto y aceras. Variedad visual con 3 tipos de edificios instanciados.",children:h.jsx(kt,{size:13})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsxs("label",{htmlFor:"city-radius-slider",children:[h.jsx("span",{children:"Radio de la ciudad:"}),h.jsx("span",{className:"tooltip-icon",title:"Radio máximo R en metros dentro del cual se generan manzanas urbanas y edificios.",children:h.jsx(kt,{size:12})})]}),h.jsxs("span",{className:"slider-value",children:[t.cityRadius," m"]})]}),h.jsx("input",{id:"city-radius-slider",type:"range",min:"30",max:"180",step:"5",value:t.cityRadius,onChange:m=>r({cityRadius:parseFloat(m.target.value)})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsxs("label",{htmlFor:"city-density-slider",children:[h.jsx("span",{children:"Densidad urbana:"}),h.jsx("span",{className:"tooltip-icon",title:"Probabilidad radial de ocupación: P(d) = densidad × (1 - 0.55 × d/R). Mayor densidad en el núcleo urbano central.",children:h.jsx(kt,{size:12})})]}),h.jsxs("span",{className:"slider-value",children:[t.cityDensity,"%"]})]}),h.jsx("input",{id:"city-density-slider",type:"range",min:"20",max:"100",step:"5",value:t.cityDensity,onChange:m=>r({cityDensity:parseFloat(m.target.value)})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsxs("label",{htmlFor:"building-height-slider",children:[h.jsx("span",{children:"Altura máx. edificios:"}),h.jsx("span",{className:"tooltip-icon",title:"Perfil radial de alturas: Altura = alturaMax × (0.15 + 0.85(1 - d/R)^1.5) × factorAleatorio. Produce un skyline cónico natural.",children:h.jsx(kt,{size:12})})]}),h.jsxs("span",{className:"slider-value",children:[t.maxBuildingHeight," m"]})]}),h.jsx("input",{id:"building-height-slider",type:"range",min:"10",max:"120",step:"5",value:t.maxBuildingHeight,onChange:m=>r({maxBuildingHeight:parseFloat(m.target.value)})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsxs("label",{htmlFor:"urban-leveling-slider",children:[h.jsx("span",{children:"Nivelación urbana:"}),h.jsx("span",{className:"tooltip-icon",title:"Grado de explanación topográfica en la ciudad: interpola la cota del terreno hacia la cota central según una máscara smoothstep.",children:h.jsx(kt,{size:12})})]}),h.jsxs("span",{className:"slider-value",children:[t.urbanLeveling,"%"]})]}),h.jsx("input",{id:"urban-leveling-slider",type:"range",min:"0",max:"100",step:"5",value:t.urbanLeveling,onChange:m=>r({urbanLeveling:parseFloat(m.target.value)})})]})]}),h.jsxs("section",{className:"control-section",children:[h.jsxs("div",{className:"section-title",children:[h.jsx(qA,{size:16}),h.jsx("span",{children:"Lote de Proyecto (Implantación)"}),h.jsx("span",{className:"tooltip-badge",title:"Volumen prisma naranja para análisis de inserción, ocupación de suelo y asoleamiento.",children:h.jsx(kt,{size:13})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsx("label",{htmlFor:"lot-width-slider",children:"Ancho del lote:"}),h.jsxs("span",{className:"slider-value",children:[t.lotWidth," m"]})]}),h.jsx("input",{id:"lot-width-slider",type:"range",min:"10",max:"60",step:"2",value:t.lotWidth,onChange:m=>r({lotWidth:parseFloat(m.target.value)})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsx("label",{htmlFor:"lot-depth-slider",children:"Fondo del lote:"}),h.jsxs("span",{className:"slider-value",children:[t.lotDepth," m"]})]}),h.jsx("input",{id:"lot-depth-slider",type:"range",min:"10",max:"60",step:"2",value:t.lotDepth,onChange:m=>r({lotDepth:parseFloat(m.target.value)})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsx("label",{htmlFor:"lot-height-slider",children:"Altura propuesta:"}),h.jsxs("span",{className:"slider-value",children:[t.lotHeight," m"]})]}),h.jsx("input",{id:"lot-height-slider",type:"range",min:"5",max:"80",step:"1",value:t.lotHeight,onChange:m=>r({lotHeight:parseFloat(m.target.value)})})]}),h.jsx("div",{className:"checkbox-row",children:h.jsxs("label",{className:"checkbox-label",onClick:()=>r({showLotVolume:!t.showLotVolume}),children:[t.showLotVolume?h.jsx(yl,{size:16,className:"checked-icon"}):h.jsx(Sl,{size:16}),h.jsx("span",{children:"Mostrar volumen propuesto"})]})}),h.jsxs("div",{className:"checkbox-row",children:[h.jsxs("label",{className:"checkbox-label",onClick:()=>r({contextMode:!t.contextMode}),children:[t.contextMode?h.jsx(yl,{size:16,className:"checked-icon"}):h.jsx(Sl,{size:16}),h.jsx("span",{children:"Modo contexto (atenuar edificios vecinos)"})]}),h.jsx("span",{className:"tooltip-icon",title:"Atenúa a semitransparente los edificios en un radio de 65 m para que el lote destaque claramente aunque esté rodeado de torres.",children:h.jsx(kt,{size:12})})]}),h.jsxs("div",{className:"checkbox-row",children:[h.jsxs("label",{className:"checkbox-label",onClick:()=>r({shadowStudy:!t.shadowStudy}),children:[t.shadowStudy?h.jsx(yl,{size:16,className:"checked-icon"}):h.jsx(Sl,{size:16}),h.jsx("span",{children:"Estudio de sombras del lote"})]}),h.jsx("span",{className:"tooltip-icon",title:"Enfatiza el contraste de sombras solares directas para evaluar cómo incide el volumen propuesto sobre las parcelas adyacentes a cada hora.",children:h.jsx(kt,{size:12})})]})]}),h.jsxs("section",{className:"control-section",children:[h.jsxs("div",{className:"section-title",children:[h.jsx(Wg,{size:16}),h.jsx("span",{children:"Ambiente y Estudio Solar (24 h)"}),h.jsx("span",{className:"tooltip-badge",title:"Ciclo solar y lunar continuo de 0 a 24 horas. De noche (fuera de 6-18h) se encienden las ventanas de los edificios y la iluminación pasa a luz de luna.",children:h.jsx(kt,{size:13})})]}),h.jsxs("div",{className:"control-row slider-row",children:[h.jsxs("div",{className:"slider-header",children:[h.jsx("label",{htmlFor:"sun-hour-slider",children:"Hora del día:"}),h.jsxs("span",{className:"slider-value sun-hour-badge",children:[p," · ",f]})]}),h.jsx("input",{id:"sun-hour-slider",type:"range",min:"0",max:"24",step:"0.1",value:t.hourOfDay,onChange:m=>r({hourOfDay:parseFloat(m.target.value)})}),h.jsxs("div",{className:"hour-quick-buttons",children:[h.jsxs("button",{className:`quick-time-btn ${Math.abs(t.hourOfDay-7)<.5?"active":""}`,onClick:()=>r({hourOfDay:7}),title:"Amanecer (07:00 h)",children:[h.jsx(ub,{size:12}),h.jsx("span",{children:"07:00"})]}),h.jsxs("button",{className:`quick-time-btn ${Math.abs(t.hourOfDay-12)<.5?"active":""}`,onClick:()=>r({hourOfDay:12}),title:"Mediodía Cenit (12:00 h)",children:[h.jsx(Wg,{size:12}),h.jsx("span",{children:"12:00"})]}),h.jsxs("button",{className:`quick-time-btn ${Math.abs(t.hourOfDay-18)<.5?"active":""}`,onClick:()=>r({hourOfDay:18}),title:"Atardecer (18:00 h)",children:[h.jsx(db,{size:12}),h.jsx("span",{children:"18:00"})]}),h.jsxs("button",{className:`quick-time-btn ${t.hourOfDay>=21||t.hourOfDay<=4?"active":""}`,onClick:()=>r({hourOfDay:22}),title:"Modo Noche con Ventanas Encendidas (22:00 h)",children:[h.jsx(Gg,{size:12}),h.jsx("span",{children:"22:00 (Noche)"})]})]})]}),t.terrainType!=="plano"&&h.jsx("div",{className:"checkbox-row",children:h.jsxs("label",{className:"checkbox-label",onClick:()=>r({showWater:!t.showWater}),children:[t.showWater?h.jsx(yl,{size:16,className:"checked-icon"}):h.jsx(Sl,{size:16}),h.jsx("span",{children:"Mostrar plano de agua"})]})})]})]}),h.jsx("footer",{className:"sidebar-footer",children:h.jsx("p",{className:"footer-credits",children:"Terra Urbis v1.1 • Visualización Arquitectónica y Urbana"})})]})};var yo={},gb=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},s_={},Rn={};let Uf;const vb=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Rn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Rn.getSymbolTotalCodewords=function(e){return vb[e]};Rn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Rn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Uf=e};Rn.isKanjiModeEnabled=function(){return typeof Uf<"u"};Rn.toSJIS=function(e){return Uf(e)};var Yc={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},t.from=function(i,r){if(t.isValid(i))return i;try{return e(i)}catch{return r}}})(Yc);function a_(){this.buffer=[],this.length=0}a_.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var xb=a_;function So(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}So.prototype.set=function(t,e,n,i){const r=t*this.size+e;this.data[r]=n,i&&(this.reservedBit[r]=!0)};So.prototype.get=function(t,e){return this.data[t*this.size+e]};So.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};So.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var _b=So,o_={};(function(t){const e=Rn.getSymbolSize;t.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,s=e(i),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let l=1;l<r-1;l++)o[l]=o[l-1]-a;return o.push(6),o.reverse()},t.getPositions=function(i){const r=[],s=t.getRowColCoords(i),a=s.length;for(let o=0;o<a;o++)for(let l=0;l<a;l++)o===0&&l===0||o===0&&l===a-1||o===a-1&&l===0||r.push([s[o],s[l]]);return r}})(o_);var l_={};const yb=Rn.getSymbolSize,qg=7;l_.getPositions=function(e){const n=yb(e);return[[0,0],[n-qg,0],[0,n-qg]]};var c_={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,l=0,c=null,u=null;for(let p=0;p<s;p++){o=l=0,c=u=null;for(let f=0;f<s;f++){let m=r.get(p,f);m===c?o++:(o>=5&&(a+=e.N1+(o-5)),c=m,o=1),m=r.get(f,p),m===u?l++:(l>=5&&(a+=e.N1+(l-5)),u=m,l=1)}o>=5&&(a+=e.N1+(o-5)),l>=5&&(a+=e.N1+(l-5))}return a},t.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let l=0;l<s-1;l++){const c=r.get(o,l)+r.get(o,l+1)+r.get(o+1,l)+r.get(o+1,l+1);(c===4||c===0)&&a++}return a*e.N2},t.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,l=0;for(let c=0;c<s;c++){o=l=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(c,u),u>=10&&(o===1488||o===93)&&a++,l=l<<1&2047|r.get(u,c),u>=10&&(l===1488||l===93)&&a++}return a*e.N3},t.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let l=0;l<a;l++)s+=r.data[l];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function n(i,r,s){switch(i){case t.Patterns.PATTERN000:return(r+s)%2===0;case t.Patterns.PATTERN001:return r%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(r+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return r*s%2+r*s%3===0;case t.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case t.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}t.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let l=0;l<a;l++)s.isReserved(l,o)||s.xor(l,o,n(r,l,o))},t.getBestMask=function(r,s){const a=Object.keys(t.Patterns).length;let o=0,l=1/0;for(let c=0;c<a;c++){s(c),t.applyMask(c,r);const u=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(c,r),u<l&&(l=u,o=c)}return o}})(c_);var $c={};const er=Yc,Ml=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],El=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];$c.getBlocksCount=function(e,n){switch(n){case er.L:return Ml[(e-1)*4+0];case er.M:return Ml[(e-1)*4+1];case er.Q:return Ml[(e-1)*4+2];case er.H:return Ml[(e-1)*4+3];default:return}};$c.getTotalCodewordsCount=function(e,n){switch(n){case er.L:return El[(e-1)*4+0];case er.M:return El[(e-1)*4+1];case er.Q:return El[(e-1)*4+2];case er.H:return El[(e-1)*4+3];default:return}};var u_={},Kc={};const Xa=new Uint8Array(512),Mc=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Xa[n]=e,Mc[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Xa[n]=Xa[n-255]})();Kc.log=function(e){if(e<1)throw new Error("log("+e+")");return Mc[e]};Kc.exp=function(e){return Xa[e]};Kc.mul=function(e,n){return e===0||n===0?0:Xa[Mc[e]+Mc[n]]};(function(t){const e=Kc;t.mul=function(i,r){const s=new Uint8Array(i.length+r.length-1);for(let a=0;a<i.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(i[a],r[o]);return s},t.mod=function(i,r){let s=new Uint8Array(i);for(;s.length-r.length>=0;){const a=s[0];for(let l=0;l<r.length;l++)s[l]^=e.mul(r[l],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},t.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let s=0;s<i;s++)r=t.mul(r,new Uint8Array([1,e.exp(s)]));return r}})(u_);const d_=u_;function Ff(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Ff.prototype.initialize=function(e){this.degree=e,this.genPoly=d_.generateECPolynomial(this.degree)};Ff.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const i=d_.mod(n,this.genPoly),r=this.degree-i.length;if(r>0){const s=new Uint8Array(this.degree);return s.set(i,r),s}return i};var Sb=Ff,h_={},vr={},Of={};Of.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var pi={};const f_="[0-9]+",Mb="[A-Z $%*+\\-./:]+";let ho="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ho=ho.replace(/u/g,"\\u");const Eb="(?:(?![A-Z0-9 $%*+\\-./:]|"+ho+`)(?:.|[\r
]))+`;pi.KANJI=new RegExp(ho,"g");pi.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");pi.BYTE=new RegExp(Eb,"g");pi.NUMERIC=new RegExp(f_,"g");pi.ALPHANUMERIC=new RegExp(Mb,"g");const wb=new RegExp("^"+ho+"$"),Tb=new RegExp("^"+f_+"$"),Ab=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");pi.testKanji=function(e){return wb.test(e)};pi.testNumeric=function(e){return Tb.test(e)};pi.testAlphanumeric=function(e){return Ab.test(e)};(function(t){const e=Of,n=pi;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+r)}}t.from=function(s,a){if(t.isValid(s))return s;try{return i(s)}catch{return a}}})(vr);(function(t){const e=Rn,n=$c,i=Yc,r=vr,s=Of,a=7973,o=e.getBCHDigit(a);function l(f,m,v){for(let y=1;y<=40;y++)if(m<=t.getCapacity(y,v,f))return y}function c(f,m){return r.getCharCountIndicator(f,m)+4}function u(f,m){let v=0;return f.forEach(function(y){const g=c(y.mode,m);v+=g+y.getBitsLength()}),v}function p(f,m){for(let v=1;v<=40;v++)if(u(f,v)<=t.getCapacity(v,m,r.MIXED))return v}t.from=function(m,v){return s.isValid(m)?parseInt(m,10):v},t.getCapacity=function(m,v,y){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=r.BYTE);const g=e.getSymbolTotalCodewords(m),d=n.getTotalCodewordsCount(m,v),_=(g-d)*8;if(y===r.MIXED)return _;const x=_-c(y,m);switch(y){case r.NUMERIC:return Math.floor(x/10*3);case r.ALPHANUMERIC:return Math.floor(x/11*2);case r.KANJI:return Math.floor(x/13);case r.BYTE:default:return Math.floor(x/8)}},t.getBestVersionForData=function(m,v){let y;const g=i.from(v,i.M);if(Array.isArray(m)){if(m.length>1)return p(m,g);if(m.length===0)return 1;y=m[0]}else y=m;return l(y.mode,y.getLength(),g)},t.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let v=m<<12;for(;e.getBCHDigit(v)-o>=0;)v^=a<<e.getBCHDigit(v)-o;return m<<12|v}})(h_);var p_={};const Eh=Rn,m_=1335,bb=21522,Yg=Eh.getBCHDigit(m_);p_.getEncodedBits=function(e,n){const i=e.bit<<3|n;let r=i<<10;for(;Eh.getBCHDigit(r)-Yg>=0;)r^=m_<<Eh.getBCHDigit(r)-Yg;return(i<<10|r)^bb};var g_={};const Cb=vr;function na(t){this.mode=Cb.NUMERIC,this.data=t.toString()}na.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};na.prototype.getLength=function(){return this.data.length};na.prototype.getBitsLength=function(){return na.getBitsLength(this.data.length)};na.prototype.write=function(e){let n,i,r;for(n=0;n+3<=this.data.length;n+=3)i=this.data.substr(n,3),r=parseInt(i,10),e.put(r,10);const s=this.data.length-n;s>0&&(i=this.data.substr(n),r=parseInt(i,10),e.put(r,s*3+1))};var Rb=na;const Pb=vr,fd=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ia(t){this.mode=Pb.ALPHANUMERIC,this.data=t}ia.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};ia.prototype.getLength=function(){return this.data.length};ia.prototype.getBitsLength=function(){return ia.getBitsLength(this.data.length)};ia.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let i=fd.indexOf(this.data[n])*45;i+=fd.indexOf(this.data[n+1]),e.put(i,11)}this.data.length%2&&e.put(fd.indexOf(this.data[n]),6)};var Nb=ia;const Lb=vr;function ra(t){this.mode=Lb.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}ra.getBitsLength=function(e){return e*8};ra.prototype.getLength=function(){return this.data.length};ra.prototype.getBitsLength=function(){return ra.getBitsLength(this.data.length)};ra.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var Db=ra;const Ib=vr,Ub=Rn;function sa(t){this.mode=Ib.KANJI,this.data=t}sa.getBitsLength=function(e){return e*13};sa.prototype.getLength=function(){return this.data.length};sa.prototype.getBitsLength=function(){return sa.getBitsLength(this.data.length)};sa.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=Ub.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var Fb=sa,v_={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,i,r){var s={},a={};a[i]=0;var o=e.PriorityQueue.make();o.push(i,0);for(var l,c,u,p,f,m,v,y,g;!o.empty();){l=o.pop(),c=l.value,p=l.cost,f=n[c]||{};for(u in f)f.hasOwnProperty(u)&&(m=f[u],v=p+m,y=a[u],g=typeof a[u]>"u",(g||y>v)&&(a[u]=v,o.push(u,v),s[u]=c))}if(typeof r<"u"&&typeof a[r]>"u"){var d=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(d)}return s},extract_shortest_path_from_predecessor_list:function(n,i){for(var r=[],s=i;s;)r.push(s),n[s],s=n[s];return r.reverse(),r},find_path:function(n,i,r){var s=e.single_source_shortest_paths(n,i,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(n){var i=e.PriorityQueue,r={},s;n=n||{};for(s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);return r.queue=[],r.sorter=n.sorter||i.default_sorter,r},default_sorter:function(n,i){return n.cost-i.cost},push:function(n,i){var r={value:n,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(v_);var Ob=v_.exports;(function(t){const e=vr,n=Rb,i=Nb,r=Db,s=Fb,a=pi,o=Rn,l=Ob;function c(d){return unescape(encodeURIComponent(d)).length}function u(d,_,x){const S=[];let C;for(;(C=d.exec(x))!==null;)S.push({data:C[0],index:C.index,mode:_,length:C[0].length});return S}function p(d){const _=u(a.NUMERIC,e.NUMERIC,d),x=u(a.ALPHANUMERIC,e.ALPHANUMERIC,d);let S,C;return o.isKanjiModeEnabled()?(S=u(a.BYTE,e.BYTE,d),C=u(a.KANJI,e.KANJI,d)):(S=u(a.BYTE_KANJI,e.BYTE,d),C=[]),_.concat(x,S,C).sort(function(T,P){return T.index-P.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function f(d,_){switch(_){case e.NUMERIC:return n.getBitsLength(d);case e.ALPHANUMERIC:return i.getBitsLength(d);case e.KANJI:return s.getBitsLength(d);case e.BYTE:return r.getBitsLength(d)}}function m(d){return d.reduce(function(_,x){const S=_.length-1>=0?_[_.length-1]:null;return S&&S.mode===x.mode?(_[_.length-1].data+=x.data,_):(_.push(x),_)},[])}function v(d){const _=[];for(let x=0;x<d.length;x++){const S=d[x];switch(S.mode){case e.NUMERIC:_.push([S,{data:S.data,mode:e.ALPHANUMERIC,length:S.length},{data:S.data,mode:e.BYTE,length:S.length}]);break;case e.ALPHANUMERIC:_.push([S,{data:S.data,mode:e.BYTE,length:S.length}]);break;case e.KANJI:_.push([S,{data:S.data,mode:e.BYTE,length:c(S.data)}]);break;case e.BYTE:_.push([{data:S.data,mode:e.BYTE,length:c(S.data)}])}}return _}function y(d,_){const x={},S={start:{}};let C=["start"];for(let w=0;w<d.length;w++){const T=d[w],P=[];for(let A=0;A<T.length;A++){const M=T[A],N=""+w+A;P.push(N),x[N]={node:M,lastCount:0},S[N]={};for(let F=0;F<C.length;F++){const D=C[F];x[D]&&x[D].node.mode===M.mode?(S[D][N]=f(x[D].lastCount+M.length,M.mode)-f(x[D].lastCount,M.mode),x[D].lastCount+=M.length):(x[D]&&(x[D].lastCount=M.length),S[D][N]=f(M.length,M.mode)+4+e.getCharCountIndicator(M.mode,_))}}C=P}for(let w=0;w<C.length;w++)S[C[w]].end=0;return{map:S,table:x}}function g(d,_){let x;const S=e.getBestModeForData(d);if(x=e.from(_,S),x!==e.BYTE&&x.bit<S.bit)throw new Error('"'+d+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(S));switch(x===e.KANJI&&!o.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new n(d);case e.ALPHANUMERIC:return new i(d);case e.KANJI:return new s(d);case e.BYTE:return new r(d)}}t.fromArray=function(_){return _.reduce(function(x,S){return typeof S=="string"?x.push(g(S,null)):S.data&&x.push(g(S.data,S.mode)),x},[])},t.fromString=function(_,x){const S=p(_,o.isKanjiModeEnabled()),C=v(S),w=y(C,x),T=l.find_path(w.map,"start","end"),P=[];for(let A=1;A<T.length-1;A++)P.push(w.table[T[A]].node);return t.fromArray(m(P))},t.rawSplit=function(_){return t.fromArray(p(_,o.isKanjiModeEnabled()))}})(g_);const Zc=Rn,pd=Yc,kb=xb,zb=_b,Bb=o_,Hb=l_,wh=c_,Th=$c,jb=Sb,Ec=h_,Vb=p_,Gb=vr,md=g_;function Wb(t,e){const n=t.size,i=Hb.getPositions(e);for(let r=0;r<i.length;r++){const s=i[r][0],a=i[r][1];for(let o=-1;o<=7;o++)if(!(s+o<=-1||n<=s+o))for(let l=-1;l<=7;l++)a+l<=-1||n<=a+l||(o>=0&&o<=6&&(l===0||l===6)||l>=0&&l<=6&&(o===0||o===6)||o>=2&&o<=4&&l>=2&&l<=4?t.set(s+o,a+l,!0,!0):t.set(s+o,a+l,!1,!0))}}function Xb(t){const e=t.size;for(let n=8;n<e-8;n++){const i=n%2===0;t.set(n,6,i,!0),t.set(6,n,i,!0)}}function qb(t,e){const n=Bb.getPositions(e);for(let i=0;i<n.length;i++){const r=n[i][0],s=n[i][1];for(let a=-2;a<=2;a++)for(let o=-2;o<=2;o++)a===-2||a===2||o===-2||o===2||a===0&&o===0?t.set(r+a,s+o,!0,!0):t.set(r+a,s+o,!1,!0)}}function Yb(t,e){const n=t.size,i=Ec.getEncodedBits(e);let r,s,a;for(let o=0;o<18;o++)r=Math.floor(o/3),s=o%3+n-8-3,a=(i>>o&1)===1,t.set(r,s,a,!0),t.set(s,r,a,!0)}function gd(t,e,n){const i=t.size,r=Vb.getEncodedBits(e,n);let s,a;for(s=0;s<15;s++)a=(r>>s&1)===1,s<6?t.set(s,8,a,!0):s<8?t.set(s+1,8,a,!0):t.set(i-15+s,8,a,!0),s<8?t.set(8,i-s-1,a,!0):s<9?t.set(8,15-s-1+1,a,!0):t.set(8,15-s-1,a,!0);t.set(i-8,8,1,!0)}function $b(t,e){const n=t.size;let i=-1,r=n-1,s=7,a=0;for(let o=n-1;o>0;o-=2)for(o===6&&o--;;){for(let l=0;l<2;l++)if(!t.isReserved(r,o-l)){let c=!1;a<e.length&&(c=(e[a]>>>s&1)===1),t.set(r,o-l,c),s--,s===-1&&(a++,s=7)}if(r+=i,r<0||n<=r){r-=i,i=-i;break}}}function Kb(t,e,n){const i=new kb;n.forEach(function(l){i.put(l.mode.bit,4),i.put(l.getLength(),Gb.getCharCountIndicator(l.mode,t)),l.write(i)});const r=Zc.getSymbolTotalCodewords(t),s=Th.getTotalCodewordsCount(t,e),a=(r-s)*8;for(i.getLengthInBits()+4<=a&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const o=(a-i.getLengthInBits())/8;for(let l=0;l<o;l++)i.put(l%2?17:236,8);return Zb(i,t,e)}function Zb(t,e,n){const i=Zc.getSymbolTotalCodewords(e),r=Th.getTotalCodewordsCount(e,n),s=i-r,a=Th.getBlocksCount(e,n),o=i%a,l=a-o,c=Math.floor(i/a),u=Math.floor(s/a),p=u+1,f=c-u,m=new jb(f);let v=0;const y=new Array(a),g=new Array(a);let d=0;const _=new Uint8Array(t.buffer);for(let T=0;T<a;T++){const P=T<l?u:p;y[T]=_.slice(v,v+P),g[T]=m.encode(y[T]),v+=P,d=Math.max(d,P)}const x=new Uint8Array(i);let S=0,C,w;for(C=0;C<d;C++)for(w=0;w<a;w++)C<y[w].length&&(x[S++]=y[w][C]);for(C=0;C<f;C++)for(w=0;w<a;w++)x[S++]=g[w][C];return x}function Qb(t,e,n,i){let r;if(Array.isArray(t))r=md.fromArray(t);else if(typeof t=="string"){let c=e;if(!c){const u=md.rawSplit(t);c=Ec.getBestVersionForData(u,n)}r=md.fromString(t,c||40)}else throw new Error("Invalid data");const s=Ec.getBestVersionForData(r,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const a=Kb(e,n,r),o=Zc.getSymbolSize(e),l=new zb(o);return Wb(l,e),Xb(l),qb(l,e),gd(l,n,0),e>=7&&Yb(l,e),$b(l,a),isNaN(i)&&(i=wh.getBestMask(l,gd.bind(null,l,n))),wh.applyMask(i,l),gd(l,n,i),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:i,segments:r}}s_.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let i=pd.M,r,s;return typeof n<"u"&&(i=pd.from(n.errorCorrectionLevel,pd.M),r=Ec.from(n.version),s=wh.from(n.maskPattern),n.toSJISFunc&&Zc.setToSJISFunction(n.toSJISFunc)),Qb(e,r,i,s)};var x_={},kf={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(s){return[s,s]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}t.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,s=i.width&&i.width>=21?i.width:void 0,a=i.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},t.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},t.getImageWidth=function(i,r){const s=t.getScale(i,r);return Math.floor((i+r.margin*2)*s)},t.qrToImageData=function(i,r,s){const a=r.modules.size,o=r.modules.data,l=t.getScale(a,s),c=Math.floor((a+s.margin*2)*l),u=s.margin*l,p=[s.color.light,s.color.dark];for(let f=0;f<c;f++)for(let m=0;m<c;m++){let v=(f*c+m)*4,y=s.color.light;if(f>=u&&m>=u&&f<c-u&&m<c-u){const g=Math.floor((f-u)/l),d=Math.floor((m-u)/l);y=p[o[g*a+d]?1:0]}i[v++]=y.r,i[v++]=y.g,i[v++]=y.b,i[v]=y.a}}})(kf);(function(t){const e=kf;function n(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,a,o){let l=o,c=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(c=i()),l=e.getOptions(l);const u=e.getImageWidth(s.modules.size,l),p=c.getContext("2d"),f=p.createImageData(u,u);return e.qrToImageData(f.data,s,l),n(p,c,u),p.putImageData(f,0,0),c},t.renderToDataURL=function(s,a,o){let l=o;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const c=t.render(s,a,l),u=l.type||"image/png",p=l.rendererOpts||{};return c.toDataURL(u,p.quality)}})(x_);var __={};const Jb=kf;function $g(t,e){const n=t.a/255,i=e+'="'+t.hex+'"';return n<1?i+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function vd(t,e,n){let i=t+e;return typeof n<"u"&&(i+=" "+n),i}function eC(t,e,n){let i="",r=0,s=!1,a=0;for(let o=0;o<t.length;o++){const l=Math.floor(o%e),c=Math.floor(o/e);!l&&!s&&(s=!0),t[o]?(a++,o>0&&l>0&&t[o-1]||(i+=s?vd("M",l+n,.5+c+n):vd("m",r,0),r=0,s=!1),l+1<e&&t[o+1]||(i+=vd("h",a),a=0)):r++}return i}__.render=function(e,n,i){const r=Jb.getOptions(n),s=e.modules.size,a=e.modules.data,o=s+r.margin*2,l=r.color.light.a?"<path "+$g(r.color.light,"fill")+' d="M0 0h'+o+"v"+o+'H0z"/>':"",c="<path "+$g(r.color.dark,"stroke")+' d="'+eC(a,s,r.margin)+'"/>',u='viewBox="0 0 '+o+" "+o+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof i=="function"&&i(null,f),f};const tC=gb,Ah=s_,y_=x_,nC=__;function zf(t,e,n,i,r){const s=[].slice.call(arguments,1),a=s.length,o=typeof s[a-1]=="function";if(!o&&!tC())throw new Error("Callback required as last argument");if(o){if(a<2)throw new Error("Too few arguments provided");a===2?(r=n,n=e,e=i=void 0):a===3&&(e.getContext&&typeof r>"u"?(r=i,i=void 0):(r=i,i=n,n=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(n=e,e=i=void 0):a===2&&!e.getContext&&(i=n,n=e,e=void 0),new Promise(function(l,c){try{const u=Ah.create(n,i);l(t(u,e,i))}catch(u){c(u)}})}try{const l=Ah.create(n,i);r(null,t(l,e,i))}catch(l){r(l)}}yo.create=Ah.create;yo.toCanvas=zf.bind(null,y_.render);yo.toDataURL=zf.bind(null,y_.renderToDataURL);yo.toString=zf.bind(null,function(t,e,n){return nC.render(t,n)});const Qc=({seed:t,octaves:e=5,hourOfDay:n=15,terrainType:i="ondulado",relief:r=14,terrainScale:s=1.2,showBuildings:a=!0,showLot:o=!0,autoRotate:l=!1,cameraPreset:c="diagonal",className:u=""})=>{const p=ae.useRef(null),f=ae.useRef(null),m=ae.useRef(null),v=ae.useRef(null),y=ae.useRef(null),g=ae.useRef(null),d=ae.useRef(null),_=ae.useRef(null),x=ae.useRef(null),S=ae.useRef(null);return ae.useEffect(()=>{const C=p.current;if(!C)return;const w=new Vx;f.current=w,w.background=new _e(9094386);const T=new gc(9094386,140,480);w.fog=T;const P=C.clientWidth/C.clientHeight,A=new yn(45,P,.5,900);c==="aerea"?A.position.set(130,140,130):c==="frontal"?A.position.set(0,90,180):A.position.set(150,110,150),v.current=A;const M=new jx({antialias:!0,alpha:!1,powerPreference:"default"});M.setSize(C.clientWidth,C.clientHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),M.outputColorSpace=en,M.shadowMap.enabled=!0,M.shadowMap.type=Bc,C.appendChild(M.domElement),m.current=M;const N=new Zx(A,M.domElement);N.enableDamping=!0,N.dampingFactor=.05,N.maxPolarAngle=Math.PI/2-.04,N.minDistance=20,N.maxDistance=450,N.target.set(0,5,0);const F=window.matchMedia("(prefers-reduced-motion: reduce)").matches;N.autoRotate=l&&!F,N.autoRotateSpeed=.8,y.current=N;const D=new Xx(16774877,2.2);D.castShadow=!0,D.shadow.mapSize.width=1024,D.shadow.mapSize.height=1024,D.shadow.bias=-2e-4,D.shadow.camera.left=-180,D.shadow.camera.right=180,D.shadow.camera.top=180,D.shadow.camera.bottom=-180,D.shadow.camera.near=10,D.shadow.camera.far=500,w.add(D),w.add(D.target),g.current=D;const B=new Wx(16777215,4473924,.55);B.position.set(0,180,0),w.add(B),d.current=B;const J=new qx(16777215,.3);w.add(J);const H=new Ji;w.add(H),S.current=H;let Z;const I=()=>{Z=requestAnimationFrame(I),N.update(),M.render(w,A)};I();const Q=()=>{if(!C)return;const k=C.clientWidth,j=C.clientHeight;A.aspect=k/j,A.updateProjectionMatrix(),M.setSize(k,j)};return window.addEventListener("resize",Q),()=>{cancelAnimationFrame(Z),window.removeEventListener("resize",Q),N.dispose(),M.dispose(),_.current&&(_.current.geometry.dispose(),_.current.material.dispose()),x.current&&(x.current.geometry.dispose(),x.current.material.dispose()),C.contains(M.domElement)&&C.removeChild(M.domElement)}},[]),ae.useEffect(()=>{const C=f.current,w=g.current,T=d.current;if(!C||!w||!T)return;const P=(n-5.5)/14*Math.PI,A=new O(-Math.cos(P)*240,Math.sin(P)*240+15,80);w.position.copy(A),w.target.position.set(0,0,0),w.target.updateMatrixWorld();const M=n>16||n<8,N=M?new _e(16162149):new _e(8307186),F=M?new _e(16760704):new _e(16775914);C.background=N,C.fog&&C.fog instanceof gc&&C.fog.color.copy(N),w.color.copy(F),T.color.copy(F)},[n]),ae.useEffect(()=>{const C=f.current,w=S.current;if(!C||!w)return;for(_.current&&(C.remove(_.current),_.current.geometry.dispose(),_.current.material.dispose(),_.current=null),x.current&&(C.remove(x.current),x.current.geometry.dispose(),x.current.material.dispose(),x.current=null);w.children.length>0;){const D=w.children[0];w.remove(D),(D instanceof dt||D instanceof _c)&&(D.geometry.dispose(),Array.isArray(D.material)?D.material.forEach(B=>B.dispose()):D.material.dispose())}const T={seed:t,terrainType:i,relief:r,terrainScale:s,octaves:e,cityRadius:100,cityDensity:70,maxBuildingHeight:48,urbanLeveling:70,lotWidth:25,lotDepth:25,lotX:0,lotZ:0,showWater:!0},P=new xo(t),{geometry:A,metrics:M}=$x(T,P),N=new Gn({vertexColors:!0,roughness:.85,metalness:.05}),F=new dt(A,N);if(F.receiveShadow=!0,F.castShadow=!0,C.add(F),_.current=F,a){const D=Kx(T,P,M);if(D.length>0){const B=new it(1,1,1);B.translate(0,.5,0);const J=new Gn({roughness:.55,metalness:.15}),H=new ys(B,J,D.length);H.castShadow=!0,H.receiveShadow=!0;const Z=new Qe,I=new O,Q=new O,k=new _e,j=new fi;for(let se=0;se<D.length;se++){const me=D[se];I.set(me.x,me.y,me.z),Q.set(me.width,me.height,me.depth),Z.compose(I,j,Q),H.setMatrixAt(se,Z),k.setRGB(me.color[0],me.color[1],me.color[2]),H.setColorAt(se,k)}H.instanceMatrix.needsUpdate=!0,H.instanceColor&&(H.instanceColor.needsUpdate=!0),C.add(H),x.current=H}}if(o){const D=M.lotBaseHeight,B=new it(26,.3,26);B.translate(0,-.15,0);const J=new Gn({color:3816768,roughness:.8}),H=new dt(B,J);H.position.set(0,D,0),H.receiveShadow=!0,w.add(H);const Z=new it(25,22,25);Z.translate(0,11,0);const I=new Gn({color:16739098,transparent:!0,opacity:.65,roughness:.3,depthWrite:!1}),Q=new dt(Z,I);Q.position.set(0,D,0),Q.castShadow=!0,Q.receiveShadow=!0,w.add(Q);const k=new Gx(Z),j=new Lf({color:16777215,linewidth:2}),se=new _c(k,j);se.position.set(0,D,0),w.add(se)}},[t,e,i,r,s,a,o]),h.jsx("div",{ref:p,className:`mini-scene-container ${u}`,role:"region","aria-label":"Visualizador 3D interactivo en miniatura"})},iC=()=>{const[t,e]=ae.useState(42089);return h.jsxs("div",{className:"slide-split-layout",children:[h.jsxs("div",{className:"slide-text-pane",children:[h.jsxs("p",{className:"slide-lead",children:["En computación, el azar puro no existe: los números pseudoaleatorios provienen de un algoritmo ",h.jsx("strong",{children:"determinista"}),"."]}),h.jsxs("div",{className:"math-callout-box",children:[h.jsx("div",{className:"math-badge",children:"Algoritmo Mulberry32 (32-bit)"}),h.jsx("pre",{className:"code-snippet",children:`s = (s + 0x6d2b79f5) >>> 0;
t = Math.imul(s ^ (s >>> 15), 1 | s);
t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
return ((t ^ (t >>> 14)) >>> 0) / 4294967296;`}),h.jsxs("p",{className:"math-caption",children:["Transformaciones lineales y no lineales bit a bit con periodo de \\(2^",32,"\\) valores uniformes."]})]}),h.jsxs("div",{className:"interactive-controls-card",children:[h.jsx("label",{htmlFor:"slide-seed-input",className:"interactive-label",children:"Ingresa o cambia la semilla:"}),h.jsxs("div",{className:"interactive-seed-bar",children:[h.jsx("input",{id:"slide-seed-input",type:"number",className:"slide-input-number",value:t,onChange:n=>{const i=parseInt(n.target.value,10);isNaN(i)||e(i)}}),h.jsxs("button",{className:"slide-action-btn",onClick:()=>e(Math.floor(Math.random()*9e5)+1e4),children:[h.jsx(i_,{size:14}),h.jsx("span",{children:"Aleatoria"})]}),h.jsx("button",{className:"slide-action-btn secondary",onClick:()=>e(42089),title:"Volver a la semilla original de demostración",children:h.jsx("span",{children:"42089"})})]}),h.jsxs("p",{className:"interactive-hint",children:["💡 ",h.jsx("strong",{children:"Prueba esto:"})," Cambia el número para ver un mundo nuevo; vuelve a escribir el número anterior y verás exactamente el mismo mundo reconstruido."]})]})]}),h.jsxs("div",{className:"slide-viewport-pane",children:[h.jsx(Qc,{seed:t,autoRotate:!1,cameraPreset:"diagonal"}),h.jsxs("span",{className:"mini-viewport-caption",children:["Mundo 3D generado por semilla: #",t]})]})]})},rC=()=>{const[t,e]=ae.useState(!0),[n,i]=ae.useState(!0),[r,s]=ae.useState(4),a=560,o=200,l=120,c=[.2,.85,.15,.75,.35,.9,.1,.6],u=[],p=[];for(let v=0;v<=l;v++){const y=v/l*r,g=Math.floor(y)%(c.length-1),d=y-Math.floor(y),_=c[g],x=c[g+1],S=v/l*a,C=_+d*(x-_);u.push([S,o-C*(o-30)-15]);const w=d*d*d*(d*(d*6-15)+10),T=_+w*(x-_);p.push([S,o-T*(o-30)-15])}const f=u.map((v,y)=>`${y===0?"M":"L"} ${v[0]} ${v[1]}`).join(" "),m=p.map((v,y)=>`${y===0?"M":"L"} ${v[0]} ${v[1]}`).join(" ");return h.jsxs("div",{className:"slide-split-layout",children:[h.jsxs("div",{className:"slide-text-pane",children:[h.jsxs("p",{className:"slide-lead",children:["El ruido blanco genera estática desconectada. El ",h.jsx("strong",{children:"Ruido de Perlin"})," (Ken Perlin, 1985) interpola gradientes con continuidad de segundo orden (\\(C^2\\))."]}),h.jsxs("div",{className:"math-formula-card",children:[h.jsx("div",{className:"formula-header",children:"Función de Suavizado Cuíntica de Perlin:"}),h.jsx("div",{className:"formula-math",children:"\\(f(t) = 6t^5 - 15t^4 + 10t^3\\)"}),h.jsxs("div",{className:"formula-properties",children:[h.jsx("span",{children:"✓ \\(f(0) = 0, \\; f(1) = 1\\)"}),h.jsx("span",{children:"✓ Derivada primera: \\(f'(0) = f'(1) = 0\\)"}),h.jsx("span",{children:"✓ Derivada segunda: \\(f''(0) = f''(1) = 0\\)"})]})]}),h.jsxs("div",{className:"interactive-controls-card",children:[h.jsxs("div",{className:"slider-header-simple",children:[h.jsx("span",{children:"Frecuencia de muestreo:"}),h.jsxs("strong",{children:[r," nodos"]})]}),h.jsx("input",{type:"range",min:"2",max:"6",step:"1",value:r,onChange:v=>s(parseInt(v.target.value,10))}),h.jsxs("div",{className:"curve-toggles",children:[h.jsxs("button",{className:`curve-toggle-btn ${t?"active-linear":""}`,onClick:()=>e(!t),children:[h.jsx("span",{className:"dot dot-linear"}),h.jsx("span",{children:"Interpolación Lineal (\\(C^0\\))"})]}),h.jsxs("button",{className:`curve-toggle-btn ${n?"active-perlin":""}`,onClick:()=>i(!n),children:[h.jsx("span",{className:"dot dot-perlin"}),h.jsx("span",{children:"Suavizado Cuíntico Perlin (\\(C^2\\))"})]})]})]})]}),h.jsxs("div",{className:"slide-graph-pane",children:[h.jsxs("div",{className:"svg-graph-box",children:[h.jsxs("svg",{viewBox:`0 0 ${a} ${o}`,className:"noise-svg",children:[h.jsx("line",{x1:"0",y1:o/2,x2:a,y2:o/2,stroke:"currentColor",strokeOpacity:"0.1",strokeDasharray:"4 4"}),h.jsx("line",{x1:"0",y1:o-15,x2:a,y2:o-15,stroke:"currentColor",strokeOpacity:"0.2"}),t&&h.jsx("path",{d:f,fill:"none",stroke:"#f59e0b",strokeWidth:"2.5",strokeDasharray:"5 3"}),n&&h.jsx("path",{d:m,fill:"none",stroke:"#10b981",strokeWidth:"3.5"})]}),h.jsxs("div",{className:"graph-legend-bar",children:[t&&h.jsx("span",{className:"legend-chip linear",children:"Lineal: Aristas angulares"}),n&&h.jsx("span",{className:"legend-chip perlin",children:"Perlin: Curva orgánica sin quiebres"})]})]}),h.jsx("p",{className:"graph-caption",children:"La curva cuíntica elimina los artefactos visuales y asegura pendientes suaves en colinas y valles."})]})]})},sC=()=>{const[t,e]=ae.useState(3),n=ae.useRef(null);return ae.useEffect(()=>{const i=n.current;if(!i)return;const r=i.getContext("2d");if(!r)return;const s=120,a=new xo(42089),o=r.createImageData(s,s),l=o.data;for(let c=0;c<s;c++)for(let u=0;u<s;u++){const p=(u-s/2)*2.8,f=(c-s/2)*2.8,m=zr(p,f,t,1.2,14,"ondulado",a),v=Math.max(0,Math.min(255,Math.floor((m+14)/28*255))),y=(c*s+u)*4;l[y]=v,l[y+1]=v,l[y+2]=v,l[y+3]=255}r.putImageData(o,0,0)},[t]),h.jsxs("div",{className:"slide-split-layout",children:[h.jsxs("div",{className:"slide-text-pane",children:[h.jsxs("p",{className:"slide-lead",children:["Inspirado en la geometría fractal de ",h.jsx("strong",{children:"Benoît Mandelbrot"}),": la topografía natural se modela sumando capas de ruido armónicas (Movimiento Browniano Fraccional)."]}),h.jsxs("div",{className:"math-formula-card",children:[h.jsx("div",{className:"formula-header",children:"Fórmula del Movimiento Browniano Fraccional (fBm):"}),h.jsx("div",{className:"formula-math",children:"Relieve(x, z) = ∑ [ Ruido(fᵢ · x, fᵢ · z) / 2ⁱ ]"}),h.jsxs("div",{className:"formula-properties",children:[h.jsxs("span",{children:["• ",h.jsx("strong",{children:"Lacunaridad = 2.0:"})," La frecuencia espacial se duplica por capa."]}),h.jsxs("span",{children:["• ",h.jsx("strong",{children:"Ganancia = 0.5:"})," La amplitud vertical se reduce a la mitad."]})]})]}),h.jsxs("div",{className:"interactive-controls-card",children:[h.jsxs("div",{className:"slider-header-simple",children:[h.jsx("span",{children:"Número de Octavas (N):"}),h.jsxs("strong",{className:"badge-octave",children:[t," ",t===1?"capa":"capas"]})]}),h.jsx("input",{type:"range",min:"1",max:"6",step:"1",value:t,onChange:i=>e(parseInt(i.target.value,10))}),h.jsxs("div",{className:"octaves-explanation",children:[t===1&&"Octava 1: Solo colinas base muy suaves, sin detalle fino.",t===2&&"Octava 2: Comienzan a formarse lomas intermedias.",t===3&&"Octava 3: Buen balance entre volumen y rugosidad natural.",t===4&&"Octava 4: Ondulación rica con textura topográfica.",t>=5&&`Octava ${t}: Detalle de alta frecuencia con riscos y micro-relieve.`]})]})]}),h.jsxs("div",{className:"slide-viewport-dual-pane",children:[h.jsxs("div",{className:"heightmap-preview-card",children:[h.jsx("span",{className:"card-micro-label",children:"Mapa de Alturas 2D"}),h.jsx("canvas",{ref:n,width:120,height:120,className:"slide-heightmap-canvas"}),h.jsx("span",{className:"card-micro-sub",children:"Escala de grises (Blanco = Cumbre, Negro = Valle)"})]}),h.jsxs("div",{className:"mini-scene-wrapper",children:[h.jsx(Qc,{seed:42089,octaves:t,showBuildings:!1,cameraPreset:"diagonal"}),h.jsxs("span",{className:"mini-viewport-caption",children:["Malla 3D calculada con ",t," octavas"]})]})]})]})},aC=()=>{const[t,e]=ae.useState(15);return h.jsxs("div",{className:"slide-split-layout",children:[h.jsxs("div",{className:"slide-text-pane",children:[h.jsx("p",{className:"slide-lead",children:"La ciudad y el lote del proyecto integran reglas matemáticas para asegurar coherencia urbana y estudios de asoleamiento:"}),h.jsxs("ul",{className:"slide-checklist",children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Trama urbana ortogonal:"})," Cuadrícula modular cada 12 m con calzadas de 4.4 m y aceras peatonales."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Decaimiento radial:"})," Altura de edificios decreciente hacia la periferia: \\(H \\propto (1 - d/R)^",1.5,"\\)."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Nivelación con smoothstep:"})," El terreno se aplana hacia la base del lote en un radio perimetral de 18 m."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Estudio solar dinámico:"})," Trayectoria cenital del sol con cálculo de sombras volumétricas en tiempo real."]})]}),h.jsxs("div",{className:"interactive-controls-card",children:[h.jsxs("div",{className:"slider-header-simple",children:[h.jsx("span",{children:"Hora del día (Estudio solar):"}),h.jsxs("strong",{className:"badge-octave",children:[Math.floor(t).toString().padStart(2,"0"),":",Math.floor(t%1*60).toString().padStart(2,"0")," h"]})]}),h.jsx("input",{type:"range",min:"6",max:"18",step:"0.2",value:t,onChange:n=>e(parseFloat(n.target.value))}),h.jsxs("div",{className:"hour-quick-strip",children:[h.jsx("button",{className:"quick-chip",onClick:()=>e(8),children:"08:00 (Mañana)"}),h.jsx("button",{className:"quick-chip",onClick:()=>e(12),children:"12:00 (Cenit)"}),h.jsx("button",{className:"quick-chip",onClick:()=>e(17),children:"17:00 (Tarde)"})]})]})]}),h.jsxs("div",{className:"slide-viewport-pane",children:[h.jsx(Qc,{seed:42089,hourOfDay:t,showBuildings:!0,showLot:!0,cameraPreset:"diagonal"}),h.jsxs("span",{className:"mini-viewport-caption",children:["Volumen propuesto (naranja) y proyección de sombras solares a las ",Math.floor(t),":00 h"]})]})]})},oC=()=>{const[t,e]=ae.useState("");return ae.useEffect(()=>{const n=typeof window<"u"?window.location.href.split("#")[0]:"https://terra-urbis.vercel.app";yo.toDataURL(n,{width:220,margin:1.5,color:{dark:"#0f172a",light:"#ffffff"}}).then(i=>e(i)).catch(i=>console.error(i))},[]),h.jsx("div",{className:"slide-center-layout",children:h.jsxs("div",{className:"closing-content-box",children:[h.jsx("div",{className:"closing-badge",children:"¡Muchas Gracias!"}),h.jsx("h2",{className:"closing-title",children:"Terra Urbis"}),h.jsx("p",{className:"closing-subtitle",children:"Generador de Terrenos y Ciudades Procedurales para Arquitectura e Ingeniería"}),h.jsxs("div",{className:"closing-grid",children:[h.jsxs("div",{className:"closing-team-card",children:[h.jsx("h3",{children:"Equipo de Desarrollo:"}),h.jsxs("ul",{className:"closing-members-list",children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Andre Felipe Valencia Chacon"})," · A00435495"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Sebastian Arenas Leal"})," · A00430300"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Emanuel Quintero Ortiz"})," · A00435351"]})]}),h.jsxs("div",{className:"course-tag",children:[h.jsx("span",{children:"Pensamiento Matemático"})," · ",h.jsx("span",{children:"Prof. Jimy Nelson Ramirez Agudelo"})]})]}),h.jsxs("div",{className:"closing-qr-card",children:[t?h.jsx("img",{src:t,alt:"Código QR hacia la aplicación web Terra Urbis",className:"qr-image"}):h.jsx("div",{className:"qr-placeholder",children:"Generando QR..."}),h.jsx("p",{className:"qr-label",children:"Escanea para explorar la aplicación interactiva"})]})]}),h.jsxs("button",{className:"slide-cta-btn",onClick:()=>{window.location.hash=""},children:[h.jsx(JA,{size:16}),h.jsx("span",{children:"Volver al Generador 3D Principal"})]})]})})},Si=[{id:1,title:"Terra Urbis",subtitle:"Generación procedural de terrenos y ciudades",badge:"Proyecto Final · Pensamiento Matemático",notes:"Dar la bienvenida al profesor Jimy Ramirez y a la clase. Presentar el nombre del proyecto Terra Urbis y el objetivo de unir matemáticas formales con computación gráfica.",render:()=>h.jsxs("div",{className:"slide-cover-layout",children:[h.jsxs("div",{className:"cover-glass-card",children:[h.jsx("div",{className:"cover-tag",children:"Proyecto Final · Pensamiento Matemático"}),h.jsx("h1",{className:"cover-title",children:"Terra Urbis"}),h.jsx("p",{className:"cover-subtitle",children:"Generación procedural de terrenos y ciudades"}),h.jsxs("div",{className:"cover-meta-info",children:[h.jsxs("div",{className:"meta-block",children:[h.jsx("span",{className:"meta-label",children:"Grupo:"}),h.jsx("strong",{className:"meta-val",children:"Six Sevenitos Sigmas Group"})]}),h.jsxs("div",{className:"meta-block",children:[h.jsx("span",{className:"meta-label",children:"Profesor:"}),h.jsx("strong",{className:"meta-val",children:"Jimy Nelson Ramirez Agudelo"})]})]}),h.jsx("div",{className:"cover-instructions-bar",children:h.jsxs("span",{children:["Presiona ",h.jsx("strong",{children:"Espacio"})," o las flechas ",h.jsx("strong",{children:"← →"})," para avanzar"]})})]}),h.jsx("div",{className:"cover-background-scene",children:h.jsx(Qc,{seed:42089,autoRotate:!0,showBuildings:!0,showLot:!0,cameraPreset:"diagonal"})})]})},{id:2,title:"Equipo de Trabajo",subtitle:"Six Sevenitos Sigmas Group · Ingeniería de Sistemas",badge:"Integrantes",notes:"Presentar a los tres miembros del equipo, todos estudiantes del programa de Ingeniería de Sistemas.",render:()=>h.jsxs("div",{className:"slide-grid-3",children:[h.jsxs("div",{className:"team-member-card",children:[h.jsx("div",{className:"member-avatar",children:"👨‍💻"}),h.jsx("h3",{className:"member-name",children:"Andre Felipe Valencia Chacon"}),h.jsx("span",{className:"member-code",children:"Código: A00435495"}),h.jsx("span",{className:"member-program",children:"Ingeniería de Sistemas"})]}),h.jsxs("div",{className:"team-member-card",children:[h.jsx("div",{className:"member-avatar",children:"💻"}),h.jsx("h3",{className:"member-name",children:"Sebastian Arenas Leal"}),h.jsx("span",{className:"member-code",children:"Código: A00430300"}),h.jsx("span",{className:"member-program",children:"Ingeniería de Sistemas"})]}),h.jsxs("div",{className:"team-member-card",children:[h.jsx("div",{className:"member-avatar",children:"⚙️"}),h.jsx("h3",{className:"member-name",children:"Emanuel Quintero Ortiz"}),h.jsx("span",{className:"member-code",children:"Código: A00435351"}),h.jsx("span",{className:"member-program",children:"Ingeniería de Sistemas"})]})]})},{id:3,title:"Pregunta de Investigación",subtitle:"El punto de partida de nuestro estudio matemático",badge:"Problema Central",notes:"Explicar que los videojuegos modernos como Minecraft no guardan gigabytes de mapas; calculan la altura de cada bloque usando fórmulas matemáticas deterministas.",render:()=>h.jsxs("div",{className:"slide-center-box",children:[h.jsxs("div",{className:"question-quote-card",children:[h.jsx("div",{className:"question-mark-icon",children:h.jsx(eb,{size:44})}),h.jsx("blockquote",{className:"research-question-text",children:'"¿Cómo permiten las funciones matemáticas de ruido (como el ruido de Perlin) y las semillas pseudoaleatorias generar terrenos creíbles y reproducibles en mundos tipo Minecraft?"'})]}),h.jsxs("div",{className:"question-pillars-row",children:[h.jsxs("div",{className:"pillar-item",children:[h.jsx("strong",{children:"1. Determinismo"}),h.jsx("span",{children:"La misma semilla produce siempre el mismo resultado matemático."})]}),h.jsxs("div",{className:"pillar-item",children:[h.jsx("strong",{children:"2. Continuidad \\(C^2\\)"}),h.jsx("span",{children:"Sin quiebres ni saltos abruptos entre puntos cercanos del espacio."})]}),h.jsxs("div",{className:"pillar-item",children:[h.jsx("strong",{children:"3. Autosimilitud"}),h.jsx("span",{children:"La naturaleza es fractal: rugosidad a todas las escalas de observación."})]})]})]})},{id:4,title:"Objetivos del Proyecto",subtitle:"Metas académicas y de desarrollo tecnológico",badge:"Propósito",notes:"Detallar el objetivo general y los tres específicos, haciendo énfasis en cómo conectan las matemáticas teóricas con la arquitectura y la ingeniería industrial.",render:()=>h.jsxs("div",{className:"slide-split-cards",children:[h.jsxs("div",{className:"objective-card general",children:[h.jsxs("div",{className:"obj-icon-title",children:[h.jsx(hb,{size:24,className:"accent-icon"}),h.jsx("h3",{children:"Objetivo General"})]}),h.jsxs("p",{children:["Analizar las matemáticas detrás de la generación procedural de mundos (semillas, ruido y fractales) y aplicarlas en una herramienta web interactiva que ayude a estudiantes y profesionales de ",h.jsx("strong",{children:"Arquitectura"})," e ",h.jsx("strong",{children:"Ingeniería Industrial"})," a visualizar un terreno con su entorno urbano y asoleamiento."]})]}),h.jsxs("div",{className:"objective-card specifics",children:[h.jsxs("div",{className:"obj-icon-title",children:[h.jsx(e_,{size:24,className:"teal-icon"}),h.jsx("h3",{children:"Objetivos Específicos"})]}),h.jsxs("ol",{className:"specific-list",children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Explicar las matemáticas:"})," Describir el funcionamiento del algoritmo Mulberry32, la interpolación cuíntica de Perlin y la suma armónica fractal (fBm)."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Comparar con Minecraft:"})," Analizar las diferencias entre campos escalares de densidad 3D y mapas de alturas paramétricos 2D con trama urbana."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Desarrollar la herramienta web:"})," Implementar un visualizador 3D en tiempo real accesible desde navegador para estudiar implantación de lotes y pendientes."]})]})]})]})},{id:5,title:"Justificación y Relevancia",subtitle:"¿Por qué estudiar la generación procedural?",badge:"Motivación",notes:"Destacar que los videojuegos son familiares para los estudiantes, pero esconden matemáticas rigurosas que además tienen aplicaciones industriales directas.",render:()=>h.jsxs("div",{className:"slide-cards-grid-2x2",children:[h.jsxs("div",{className:"info-card",children:[h.jsxs("div",{className:"info-card-header",children:[h.jsx("span",{className:"card-badge-num",children:"01"}),h.jsx("h4",{children:"Contexto cercano y cotidiano"})]}),h.jsx("p",{children:"Los videojuegos populares como Minecraft son familiares, pero sus motores se basan en teoría matemática profunda de funciones y cálculo multivariable."})]}),h.jsxs("div",{className:"info-card",children:[h.jsxs("div",{className:"info-card-header",children:[h.jsx("span",{className:"card-badge-num",children:"02"}),h.jsx("h4",{children:"Un mundo infinito en un solo número"})]}),h.jsx("p",{children:"Con solo almacenar un entero de 32 bits (la semilla), se describe un territorio infinito y reproducible sin consumir memoria de almacenamiento."})]}),h.jsxs("div",{className:"info-card",children:[h.jsxs("div",{className:"info-card-header",children:[h.jsx("span",{className:"card-badge-num",children:"03"}),h.jsx("h4",{children:"La naturaleza se modela con fractales"})]}),h.jsx("p",{children:"Las funciones euclidianas clásicas (planos y esferas) no bastan para describir colinas y montañas; las leyes fractales capturan su rugosidad real."})]}),h.jsxs("div",{className:"info-card highlight",children:[h.jsxs("div",{className:"info-card-header",children:[h.jsx("span",{className:"card-badge-num",children:"04"}),h.jsx("h4",{children:"Aplicación profesional previa a planos"})]}),h.jsx("p",{children:"Permite a un arquitecto o ingeniero ver en segundos cómo queda un lote dentro del relieve, con edificios circundantes y sombras reales antes de costosos estudios topográficos."})]})]})},{id:6,title:"Enfoque Interdisciplinar",subtitle:"Cruce transversal de seis áreas del conocimiento",badge:"Articulación",notes:"Explicar cómo este proyecto articula las matemáticas puras con la tecnología, el arte, la comunicación y dos ramas de la ingeniería y el diseño.",render:()=>h.jsxs("div",{className:"slide-interdisciplinary-grid",children:[h.jsxs("div",{className:"discipline-card",children:[h.jsx("div",{className:"disc-icon math",children:h.jsx(t_,{size:22})}),h.jsx("h4",{children:"Matemáticas"}),h.jsx("p",{children:"Funciones de varias variables, interpolación cuíntica, series armónicas y álgebra lineal matricial."})]}),h.jsxs("div",{className:"discipline-card",children:[h.jsx("div",{className:"disc-icon tech",children:h.jsx(QA,{size:22})}),h.jsx("h4",{children:"Tecnología y Código"}),h.jsx("p",{children:"Desarrollo web moderno en React, TypeScript, Three.js, shaders y optimización con InstancedMesh."})]}),h.jsxs("div",{className:"discipline-card",children:[h.jsx("div",{className:"disc-icon art",children:h.jsx(sb,{size:22})}),h.jsx("h4",{children:"Arte y Diseño"}),h.jsx("p",{children:"Composición visual, texturas procedurales, teoría del color, iluminación realista y experiencia de usuario (UX)."})]}),h.jsxs("div",{className:"discipline-card",children:[h.jsx("div",{className:"disc-icon comm",children:h.jsx(nb,{size:22})}),h.jsx("h4",{children:"Comunicación"}),h.jsx("p",{children:"Transmisión didáctica de conceptos matemáticos complejos a través de visualizaciones interactivas intuitivas."})]}),h.jsxs("div",{className:"discipline-card",children:[h.jsx("div",{className:"disc-icon arch",children:h.jsx(Sh,{size:22})}),h.jsx("h4",{children:"Arquitectura y Urbanismo"}),h.jsx("p",{children:"Implantación volumétrica en el terreno, densidades urbanas, trama ortogonal y análisis solar de sombras."})]}),h.jsxs("div",{className:"discipline-card",children:[h.jsx("div",{className:"disc-icon ind",children:h.jsx(jg,{size:22})}),h.jsx("h4",{children:"Ingeniería Industrial"}),h.jsx("p",{children:"Localización de instalaciones, evaluación de pendientes para logística y explanación de bodegas."})]})]})},{id:7,title:"Las Matemáticas, Parte 1: Semillas y Azar",subtitle:"El algoritmo pseudoaleatorio determinista Mulberry32",badge:"Fundamento Matemático",notes:"Demostrar a la clase cómo cambiar la semilla genera mundos distintos, pero ingresar la misma semilla vuelve a reproducir el relieve y los edificios idénticos.",render:()=>h.jsx(iC,{})},{id:8,title:"Las Matemáticas, Parte 2: Ruido de Perlin",subtitle:"Interpolación cuíntica suave y continuidad de clase C²",badge:"Fundamento Matemático",notes:"Explicar por qué la función cuíntica con derivadas cero en los extremos evita las aristas visibles que dejaba la interpolación lineal clásica.",render:()=>h.jsx(rC,{})},{id:9,title:"Las Matemáticas, Parte 3: Fractales y Octavas",subtitle:"Movimiento Browniano Fraccional (fBm) y la geometría de Mandelbrot",badge:"Fundamento Matemático",notes:"Mover el slider de octavas frente al público para mostrar cómo se pasa de una simple duna lisa a una montaña rugosa con ricos detalles.",render:()=>h.jsx(sC,{})},{id:10,title:"La Ciudad y el Lote del Proyecto",subtitle:"Reglas espaciales, nivelación smoothstep y asoleamiento",badge:"Aplicación Espacial",notes:"Mover el slider de hora para mostrar cómo la posición del sol altera la sombra arrojada por el volumen del lote sobre el terreno y las calles.",render:()=>h.jsx(aC,{})},{id:11,title:"Comparación con Minecraft",subtitle:"Generación por densidad 3D frente a mapas de elevación 2D",badge:"Estudio Comparativo",notes:"Explicar la diferencia matemática entre muestrear ruido en 3 dimensiones (permite cuevas y voladizos) frente a mapas de alturas 2D optimizados para arquitectura.",render:()=>h.jsxs("div",{className:"slide-compare-grid",children:[h.jsxs("div",{className:"compare-card minecraft",children:[h.jsxs("div",{className:"compare-header",children:[h.jsx("span",{className:"compare-tag",children:"Minecraft (Mojang)"}),h.jsx("h3",{children:"Ruido Volumétrico 3D"})]}),h.jsxs("ul",{className:"compare-features",children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Espacio tridimensional:"})," Muestrea ruido en coordenadas (x, y, z). Si Densidad(x, y, z) > 0 se coloca un bloque."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Topología compleja:"})," Permite cuevas subterráneas, túneles, arcos de piedra y voladizos flotantes."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Biomas climáticos:"})," Combina mapas de temperatura, humedad, continentalidad y erosión para determinar el bioma."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Costo computacional:"})," Requiere generar y almacenar millones de bloques discretos organizados en *chunks*."]})]}),h.jsx("div",{className:"visual-placeholder minecraft-box",children:h.jsx("span",{children:"[ Campo de densidad 3D · Cuevas y Salientes ]"})})]}),h.jsxs("div",{className:"compare-card terra",children:[h.jsxs("div",{className:"compare-header",children:[h.jsx("span",{className:"compare-tag",children:"Terra Urbis (Nuestro generador)"}),h.jsx("h3",{children:"Mapa de Alturas 2D + Ciudad"})]}),h.jsxs("ul",{className:"compare-features",children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Función continua 2D:"})," La cota vertical es función directa de la posición: \\(y = f(x, z)\\)."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Optimizado para arquitectura:"})," Sin huecos invertidos, ideal para nivelación de explanadas y estudios de asoleamiento."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Trama urbana paramétrica:"})," Reglas ortogonales integradas para calzadas, aceras y distribución de edificios."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Rendimiento en navegador:"})," Renderizado instantáneo a 60 FPS en mallas continuas con InstancedMesh."]})]}),h.jsx("div",{className:"visual-placeholder terra-box",children:h.jsx("span",{children:"[ Superficie paramétrica 2D · Malla continua continua ]"})})]})]})},{id:12,title:"Usos Profesionales y Aplicaciones",subtitle:"Valor aplicado para la toma de decisiones en obra y logística",badge:"Impacto Práctico",notes:"Demostrar que esta herramienta no es solo un ejercicio escolar; resuelve problemas reales de visualización antes de pasar a fases costosas de ingeniería.",render:()=>h.jsxs("div",{className:"slide-two-columns",children:[h.jsxs("div",{className:"application-card arch",children:[h.jsxs("div",{className:"app-card-header",children:[h.jsx(Sh,{size:28,className:"app-icon"}),h.jsxs("div",{children:[h.jsx("h3",{children:"Arquitectura y Urbanismo"}),h.jsx("span",{children:"Implantación, entorno y asoleamiento"})]})]}),h.jsxs("ul",{className:"app-list",children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Evaluación rápida de emplazamiento:"})," Ubicar el volumen de anteproyecto en el lote y validar su escala frente a las alturas vecinas."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Estudio de asoleamiento y sombras:"})," Analizar qué calles o fachadas colindantes quedan en sombra a las 9:00, 12:00 o 16:00 h."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Comprensión topográfica intuitiva:"})," Entender el desnivel del terreno para planear accesos peatonales y vehiculares."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Presentación a clientes:"})," Visualización estética y limpia en fase conceptual previa a modelos BIM detallados."]})]})]}),h.jsxs("div",{className:"application-card ind",children:[h.jsxs("div",{className:"app-card-header",children:[h.jsx(jg,{size:28,className:"app-icon"}),h.jsxs("div",{children:[h.jsx("h3",{children:"Ingeniería Industrial"}),h.jsx("span",{children:"Plantas, bodegas y logística de suelo"})]})]}),h.jsxs("ul",{className:"app-list",children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Localización de plantas y bodegas:"})," Ubicar instalaciones industriales considerando pendientes y accesibilidad vial."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Estimación de explanación:"})," Visualizar el impacto de la nivelación requerida para patios de maniobra y bodegas de almacenamiento."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Logística de transporte:"})," Descartar zonas con pendientes excesivas que dificulten el acceso de camiones de carga pesada."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Riesgo de inundación:"})," Analizar la distancia vertical respecto a la cota del nivel de agua para evitar anegamientos."]})]})]})]})},{id:13,title:"Fuentes y Bibliografía",subtitle:"Rigor científico y referencias seminales de la literatura",badge:"Referencias",notes:"Mencionar los autores clásicos en los que se basó la investigación, desde Ken Perlin y Mandelbrot hasta las publicaciones de generación de ciudades de SIGGRAPH.",render:()=>h.jsxs("div",{className:"slide-bibliography-list",children:[h.jsxs("div",{className:"bib-item",children:[h.jsx("div",{className:"bib-num",children:"1"}),h.jsxs("div",{className:"bib-content",children:[h.jsxs("p",{className:"bib-citation",children:[h.jsx("strong",{children:"Perlin, K. (1985)."})," An image synthesizer. ",h.jsx("em",{children:"Computer Graphics (SIGGRAPH '85 Proceedings)"}),", 19(3), 287–296."]}),h.jsx("span",{className:"bib-desc",children:"Artículo seminal que introdujo el ruido de gradiente coherente en computación gráfica."})]})]}),h.jsxs("div",{className:"bib-item",children:[h.jsx("div",{className:"bib-num",children:"2"}),h.jsxs("div",{className:"bib-content",children:[h.jsxs("p",{className:"bib-citation",children:[h.jsx("strong",{children:"Mandelbrot, B. B. (1982)."})," ",h.jsx("em",{children:"The Fractal Geometry of Nature"}),". W. H. Freeman and Company."]}),h.jsx("span",{className:"bib-desc",children:"Texto fundamental sobre la autosimilitud y el modelado fractal de montañas y costas naturales."})]})]}),h.jsxs("div",{className:"bib-item",children:[h.jsx("div",{className:"bib-num",children:"3"}),h.jsxs("div",{className:"bib-content",children:[h.jsxs("p",{className:"bib-citation",children:[h.jsx("strong",{children:"Shaker, N., Togelius, J., & Nelson, M. J. (2016)."})," ",h.jsx("em",{children:"Procedural Content Generation in Games"}),". Springer."]}),h.jsx("span",{className:"bib-desc",children:"Compendio exhaustivo sobre algoritmos procedurales para mundos de videojuegos y mapas."})]})]}),h.jsxs("div",{className:"bib-item",children:[h.jsx("div",{className:"bib-num",children:"4"}),h.jsxs("div",{className:"bib-content",children:[h.jsxs("p",{className:"bib-citation",children:[h.jsx("strong",{children:"Parish, Y. I. H., & Müller, P. (2001)."})," Procedural modeling of cities. ",h.jsx("em",{children:"ACM SIGGRAPH 2001 Proceedings"}),", 301–308."]}),h.jsx("span",{className:"bib-desc",children:"Base de las reglas urbanas para generación de trazados viales y manzanas ortogonales."})]})]}),h.jsxs("div",{className:"bib-item",children:[h.jsx("div",{className:"bib-num",children:"5"}),h.jsxs("div",{className:"bib-content",children:[h.jsxs("p",{className:"bib-citation",children:[h.jsx("strong",{children:"Müller, P., Wonka, P., Haegler, S., Ulmer, A., & Van Gool, L. (2006)."})," Procedural modeling of buildings. ",h.jsx("em",{children:"ACM Transactions on Graphics (TOG)"}),", 25(3), 614–623."]}),h.jsx("span",{className:"bib-desc",children:"Gramáticas de forma para la variedad volumétrica de fachadas y rascacielos."})]})]}),h.jsxs("div",{className:"bib-item",children:[h.jsx("div",{className:"bib-num",children:"6"}),h.jsxs("div",{className:"bib-content",children:[h.jsxs("p",{className:"bib-citation",children:[h.jsx("strong",{children:"Minecraft Wiki (Mojang)."})," ",h.jsx("em",{children:"World generation and biome distribution algorithms"}),"."]}),h.jsx("span",{className:"bib-desc",children:"Documentación técnica sobre las etapas de muestreo de ruido de densidad y biomas en el juego."})]})]})]})},{id:14,title:"Cierre y Conclusiones",subtitle:"Código QR y acceso directo a la aplicación web interactiva",badge:"Agradecimientos",notes:"Agradecer a todos por su atención y responder preguntas de los compañeros o el profesor.",render:()=>h.jsx(oC,{})}],lC=({onClose:t,theme:e})=>{const n=ae.useRef(null),i=ae.useCallback(()=>{const T=window.location.hash.match(/#\/presentacion\/(\d+)/);if(T&&T[1]){const P=parseInt(T[1],10);if(!isNaN(P)&&P>=1&&P<=Si.length)return P-1}return 0},[]),[r,s]=ae.useState(i),[a,o]=ae.useState(!1),[l,c]=ae.useState(!1),[u,p]=ae.useState(!1);ae.useEffect(()=>{const w=()=>{const T=i();s(T)};return window.addEventListener("hashchange",w),()=>window.removeEventListener("hashchange",w)},[i]);const f=ae.useCallback(w=>{const T=Math.max(0,Math.min(Si.length-1,w));s(T),window.location.hash=`#/presentacion/${T+1}`},[]),m=ae.useCallback(()=>{r<Si.length-1&&f(r+1)},[r,f]),v=ae.useCallback(()=>{r>0&&f(r-1)},[r,f]),y=ae.useCallback(()=>{var w;document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):(w=n.current)!=null&&w.requestFullscreen&&n.current.requestFullscreen().catch(()=>{})},[]);ae.useEffect(()=>{const w=()=>{c(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",w),()=>document.removeEventListener("fullscreenchange",w)},[]),ae.useEffect(()=>{const w=T=>{T.target instanceof HTMLInputElement||T.target instanceof HTMLTextAreaElement||T.target instanceof HTMLSelectElement||(T.key==="ArrowRight"||T.key===" "||T.key==="PageDown"?(T.preventDefault(),m()):T.key==="ArrowLeft"||T.key==="PageUp"?(T.preventDefault(),v()):T.key==="Escape"?(T.preventDefault(),t()):T.key==="f"||T.key==="F"?(T.preventDefault(),y()):T.key==="n"||T.key==="N"?(T.preventDefault(),o(P=>!P)):(T.key==="h"||T.key==="H"||T.key==="?")&&(T.preventDefault(),p(P=>!P)))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[m,v,t,y]);const g=ae.useRef(null),d=ae.useRef(null),_=w=>{w.touches.length===1&&(g.current=w.touches[0].clientX,d.current=w.touches[0].clientY)},x=w=>{if(g.current===null||d.current===null)return;const T=w.changedTouches[0].clientX,P=w.changedTouches[0].clientY,A=T-g.current,M=P-d.current;Math.abs(A)>Math.abs(M)&&Math.abs(A)>45&&(A<0?m():v()),g.current=null,d.current=null},S=Si[r],C=(r+1)/Si.length*100;return h.jsxs("div",{ref:n,className:"presentation-root","data-theme":e,onTouchStart:_,onTouchEnd:x,role:"region","aria-label":"Presentación final de Terra Urbis",children:[h.jsx("div",{className:"presentation-progress-track",children:h.jsx("div",{className:"presentation-progress-fill",style:{width:`${C}%`},role:"progressbar","aria-valuenow":r+1,"aria-valuemin":1,"aria-valuemax":Si.length})}),h.jsxs("header",{className:"presentation-header",children:[h.jsx("div",{className:"header-left",children:h.jsxs("button",{className:"presentation-btn back-btn",onClick:t,title:"Volver al generador principal (Esc)","aria-label":"Volver al generador",children:[h.jsx(XA,{size:16}),h.jsx("span",{className:"btn-text",children:"Volver al Generador"})]})}),h.jsxs("div",{className:"header-center",children:[S.badge&&h.jsx("span",{className:"slide-badge-pill",children:S.badge}),h.jsxs("span",{className:"slide-counter-badge",children:[r+1," / ",Si.length]})]}),h.jsxs("div",{className:"header-right",children:[h.jsx("button",{className:`presentation-btn icon-only ${a?"active":""}`,onClick:()=>o(!a),title:"Mostrar / ocultar notas del orador (N)","aria-label":"Notas del orador",children:h.jsx(Vg,{size:16})}),h.jsx("button",{className:`presentation-btn icon-only ${u?"active":""}`,onClick:()=>p(!u),title:"Atajos de teclado (H o ?)","aria-label":"Ayuda de teclado",children:h.jsx(tb,{size:16})}),h.jsx("button",{className:"presentation-btn icon-only",onClick:y,title:l?"Salir de pantalla completa (F)":"Pantalla completa (F)","aria-label":"Pantalla completa",children:l?h.jsx(ib,{size:16}):h.jsx(n_,{size:16})})]})]}),h.jsx("main",{className:"presentation-stage",children:h.jsxs("div",{className:"presentation-slide-card",children:[S.id!==1&&S.id!==14&&h.jsxs("div",{className:"slide-inner-header",children:[h.jsx("h2",{className:"slide-main-title",children:S.title}),S.subtitle&&h.jsx("p",{className:"slide-sub-title",children:S.subtitle})]}),h.jsx("div",{className:"slide-content-body",children:S.render()})]},S.id)}),h.jsxs("footer",{className:"presentation-footer",children:[h.jsxs("button",{className:"nav-arrow-btn prev",onClick:v,disabled:r===0,title:"Diapositiva anterior (← o Shift+Espacio)","aria-label":"Diapositiva anterior",children:[h.jsx($A,{size:20}),h.jsx("span",{className:"nav-arrow-label",children:"Anterior"})]}),h.jsx("nav",{className:"dots-navigation-bar","aria-label":"Navegación de diapositivas",children:Si.map((w,T)=>h.jsx("button",{className:`nav-dot ${T===r?"active":""}`,onClick:()=>f(T),title:`Diapositiva ${T+1}: ${w.title}`,"aria-label":`Ir a diapositiva ${T+1}: ${w.title}`},w.id))}),h.jsxs("button",{className:"nav-arrow-btn next",onClick:m,disabled:r===Si.length-1,title:"Siguiente diapositiva (→ o Espacio)","aria-label":"Siguiente diapositiva",children:[h.jsx("span",{className:"nav-arrow-label",children:"Siguiente"}),h.jsx(KA,{size:20})]})]}),a&&h.jsxs("aside",{className:"speaker-notes-drawer",role:"complementary","aria-label":"Notas del orador",children:[h.jsxs("div",{className:"notes-header",children:[h.jsxs("div",{className:"notes-title",children:[h.jsx(Vg,{size:16}),h.jsxs("span",{children:["Notas del Orador · Diapositiva ",r+1]})]}),h.jsx("button",{className:"notes-close-btn",onClick:()=>o(!1),"aria-label":"Cerrar notas",children:h.jsx(Xg,{size:16})})]}),h.jsx("div",{className:"notes-content",children:h.jsx("p",{children:S.notes})})]}),u&&h.jsx("div",{className:"keyboard-help-overlay",onClick:()=>p(!1),children:h.jsxs("div",{className:"keyboard-help-card",onClick:w=>w.stopPropagation(),children:[h.jsxs("div",{className:"help-card-header",children:[h.jsx("h3",{children:"Atajos de Teclado"}),h.jsx("button",{className:"help-close-btn",onClick:()=>p(!1),children:h.jsx(Xg,{size:16})})]}),h.jsxs("div",{className:"help-keys-grid",children:[h.jsxs("div",{className:"key-row",children:[h.jsx("kbd",{children:"→"})," / ",h.jsx("kbd",{children:"Espacio"}),h.jsx("span",{children:"Siguiente diapositiva"})]}),h.jsxs("div",{className:"key-row",children:[h.jsx("kbd",{children:"←"}),h.jsx("span",{children:"Diapositiva anterior"})]}),h.jsxs("div",{className:"key-row",children:[h.jsx("kbd",{children:"F"}),h.jsx("span",{children:"Pantalla completa"})]}),h.jsxs("div",{className:"key-row",children:[h.jsx("kbd",{children:"N"}),h.jsx("span",{children:"Notas del orador"})]}),h.jsxs("div",{className:"key-row",children:[h.jsx("kbd",{children:"Esc"}),h.jsx("span",{children:"Salir al generador"})]})]})]})})]})},cC=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768),Kg={seed:42089,terrainType:"ondulado",relief:14,terrainScale:1.2,octaves:5,cityRadius:110,cityDensity:75,maxBuildingHeight:55,urbanLeveling:70,lotWidth:25,lotDepth:25,lotHeight:20,lotX:0,lotZ:0,hourOfDay:15,showWater:!0,showLotVolume:!0,quality:cC?"baja":"alta",contextMode:!1,shadowStudy:!1},uC=()=>{const t=ae.useMemo(()=>{try{const D=localStorage.getItem("terra_urbis_last_seed");if(D){const B=parseInt(D,10);if(!isNaN(B))return{...Kg,seed:B}}}catch{}return Kg},[]),[e,n]=ae.useState(t),[i,r]=ae.useState(()=>typeof window<"u"&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),[s,a]=ae.useState(()=>typeof window<"u"&&window.location.hash.startsWith("#/presentacion"));ae.useEffect(()=>{const D=()=>{a(window.location.hash.startsWith("#/presentacion"))};return window.addEventListener("hashchange",D),()=>window.removeEventListener("hashchange",D)},[]);const o=ae.useCallback(()=>{window.location.hash="#/presentacion/1",a(!0)},[]),l=ae.useCallback(()=>{window.location.hash="",a(!1)},[]),[c,u]=ae.useState(null),[p,f]=ae.useState(!1),[m,v]=ae.useState(null),[y,g]=ae.useState(null),[d,_]=ae.useState({minHeight:0,maxHeight:14,waterLevel:3.5,centerHeight:0,lotBaseHeight:0}),[x,S]=ae.useState([]),C=ae.useRef(null),w=ae.useCallback(D=>{const B=new xo(D.seed),{geometry:J,metrics:H,waterGeometry:Z}=$x(D,B),I=Kx(D,B,H);v(J),g(Z),_(H),S(I);try{localStorage.setItem("terra_urbis_last_seed",D.seed.toString())}catch{}},[]),T=[e.seed,e.terrainType,e.relief,e.terrainScale,e.octaves,e.cityRadius,e.cityDensity,e.maxBuildingHeight,e.urbanLeveling,e.lotWidth,e.lotDepth,e.lotHeight,e.lotX,e.lotZ,e.showWater];ae.useEffect(()=>(C.current!==null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{w(e)},60),()=>{C.current!==null&&window.clearTimeout(C.current)}),T),ae.useEffect(()=>{w(e)},[]);const P=ae.useCallback(D=>{n(B=>({...B,...D}))},[]),A=ae.useCallback(()=>{const D=Math.floor(Math.random()*9e5)+1e4;P({seed:D})},[P]),M=ae.useCallback(()=>{r(D=>D==="dark"?"light":"dark")},[]),N=ae.useCallback(()=>{f(!0)},[]);ae.useEffect(()=>{document.documentElement.setAttribute("data-theme",i)},[i]);const F=ae.useMemo(()=>{let D=0;for(let Z=0;Z<x.length;Z++){const I=x[Z].y+x[Z].height;I>D&&(D=I)}const B=Math.max(d.maxHeight,D,d.lotBaseHeight+e.lotHeight),J=e.terrainType==="plano"?0:Math.max(0,d.maxHeight-d.minHeight),H=e.lotWidth*e.lotDepth;return{buildingCount:x.length,maxSurroundingHeight:B,heightDelta:J,lotArea:H}},[x,d,e.lotHeight,e.lotWidth,e.lotDepth,e.terrainType]);return h.jsxs("div",{className:"app-layout","data-theme":i,children:[h.jsx("main",{className:"main-viewport",role:"main",children:!s&&h.jsx(VA,{params:e,terrainGeometry:m,waterGeometry:y,metrics:d,buildings:x,cameraPreset:c,onCameraPresetApplied:()=>u(null),triggerScreenshot:p,onScreenshotTaken:()=>f(!1)})}),h.jsx(mb,{params:e,stats:F,theme:i,onToggleTheme:M,onUpdateParams:P,onSelectCameraPreset:u,onRandomSeed:A,onCaptureScreenshot:N,onOpenPresentation:o}),s&&h.jsx(lC,{onClose:l,theme:i})]})};xd.createRoot(document.getElementById("root")).render(h.jsx(V_.StrictMode,{children:h.jsx(uC,{})}));
