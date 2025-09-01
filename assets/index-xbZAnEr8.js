var pa=Object.defineProperty;var _n=t=>{throw TypeError(t)};var ga=(t,e,i)=>e in t?pa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Gn=(t,e,i)=>ga(t,typeof e!="symbol"?e+"":e,i),yi=(t,e,i)=>e.has(t)||_n("Cannot "+i);var y=(t,e,i)=>(yi(t,e,"read from private field"),i?i.call(t):e.get(t)),V=(t,e,i)=>e.has(t)?_n("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),O=(t,e,i,n)=>(yi(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),Q=(t,e,i)=>(yi(t,e,"access private method"),i);var Bt=(t,e,i,n)=>({set _(s){O(t,e,s,i)},get _(){return y(t,e,n)}});import{r as w,a as ya,g as va,R as Un}from"./react-vendor-CIP6LD3P.js";import{c as Ji,a as xa}from"./utils-BzrgaQw0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();var Pr={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=w,wa=Symbol.for("react.element"),Sa=Symbol.for("react.fragment"),Pa=Object.prototype.hasOwnProperty,Aa=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ta={key:!0,ref:!0,__self:!0,__source:!0};function Ar(t,e,i){var n,s={},o=null,r=null;i!==void 0&&(o=""+i),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(r=e.ref);for(n in e)Pa.call(e,n)&&!Ta.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:wa,type:t,key:o,ref:r,props:s,_owner:Aa.current}}ai.Fragment=Sa;ai.jsx=Ar;ai.jsxs=Ar;Pr.exports=ai;var u=Pr.exports,Zt={},Wn=ya;Zt.createRoot=Wn.createRoot,Zt.hydrateRoot=Wn.hydrateRoot;var li=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ci=typeof window>"u"||"Deno"in globalThis;function de(){}function Ca(t,e){return typeof t=="function"?t(e):t}function ka(t){return typeof t=="number"&&t>=0&&t!==1/0}function Ea(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Ni(t,e){return typeof t=="function"?t(e):t}function ja(t,e){return typeof t=="function"?t(e):t}function qn(t,e){const{type:i="all",exact:n,fetchStatus:s,predicate:o,queryKey:r,stale:a}=t;if(r){if(n){if(e.queryHash!==en(r,e.options))return!1}else if(!Tt(e.queryKey,r))return!1}if(i!=="all"){const l=e.isActive();if(i==="active"&&!l||i==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||o&&!o(e))}function Kn(t,e){const{exact:i,status:n,predicate:s,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(i){if(At(e.options.mutationKey)!==At(o))return!1}else if(!Tt(e.options.mutationKey,o))return!1}return!(n&&e.state.status!==n||s&&!s(e))}function en(t,e){return((e==null?void 0:e.queryKeyHashFn)||At)(t)}function At(t){return JSON.stringify(t,(e,i)=>Di(i)?Object.keys(i).sort().reduce((n,s)=>(n[s]=i[s],n),{}):i)}function Tt(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(i=>Tt(t[i],e[i])):!1}function Tr(t,e){if(t===e)return t;const i=Yn(t)&&Yn(e);if(i||Di(t)&&Di(e)){const n=i?t:Object.keys(t),s=n.length,o=i?e:Object.keys(e),r=o.length,a=i?[]:{},l=new Set(n);let c=0;for(let d=0;d<r;d++){const h=i?d:o[d];(!i&&l.has(h)||i)&&t[h]===void 0&&e[h]===void 0?(a[h]=void 0,c++):(a[h]=Tr(t[h],e[h]),a[h]===t[h]&&t[h]!==void 0&&c++)}return s===r&&c===s?t:a}return e}function Yn(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Di(t){if(!zn(t))return!1;const e=t.constructor;if(e===void 0)return!0;const i=e.prototype;return!(!zn(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function zn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ra(t){return new Promise(e=>{setTimeout(e,t)})}function Ia(t,e,i){return typeof i.structuralSharing=="function"?i.structuralSharing(t,e):i.structuralSharing!==!1?Tr(t,e):e}function Ma(t,e,i=0){const n=[...t,e];return i&&n.length>i?n.slice(1):n}function Na(t,e,i=0){const n=[e,...t];return i&&n.length>i?n.slice(0,-1):n}var tn=Symbol();function Cr(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===tn?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Be,Ce,et,pr,Da=(pr=class extends li{constructor(){super();V(this,Be);V(this,Ce);V(this,et);O(this,et,e=>{if(!ci&&window.addEventListener){const i=()=>e();return window.addEventListener("visibilitychange",i,!1),()=>{window.removeEventListener("visibilitychange",i)}}})}onSubscribe(){y(this,Ce)||this.setEventListener(y(this,et))}onUnsubscribe(){var e;this.hasListeners()||((e=y(this,Ce))==null||e.call(this),O(this,Ce,void 0))}setEventListener(e){var i;O(this,et,e),(i=y(this,Ce))==null||i.call(this),O(this,Ce,e(n=>{typeof n=="boolean"?this.setFocused(n):this.onFocus()}))}setFocused(e){y(this,Be)!==e&&(O(this,Be,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(i=>{i(e)})}isFocused(){var e;return typeof y(this,Be)=="boolean"?y(this,Be):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Be=new WeakMap,Ce=new WeakMap,et=new WeakMap,pr),kr=new Da,tt,ke,it,gr,Oa=(gr=class extends li{constructor(){super();V(this,tt,!0);V(this,ke);V(this,it);O(this,it,e=>{if(!ci&&window.addEventListener){const i=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",i,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",n)}}})}onSubscribe(){y(this,ke)||this.setEventListener(y(this,it))}onUnsubscribe(){var e;this.hasListeners()||((e=y(this,ke))==null||e.call(this),O(this,ke,void 0))}setEventListener(e){var i;O(this,it,e),(i=y(this,ke))==null||i.call(this),O(this,ke,e(this.setOnline.bind(this)))}setOnline(e){y(this,tt)!==e&&(O(this,tt,e),this.listeners.forEach(n=>{n(e)}))}isOnline(){return y(this,tt)}},tt=new WeakMap,ke=new WeakMap,it=new WeakMap,gr),Jt=new Oa;function Va(){let t,e;const i=new Promise((s,o)=>{t=s,e=o});i.status="pending",i.catch(()=>{});function n(s){Object.assign(i,s),delete i.resolve,delete i.reject}return i.resolve=s=>{n({status:"fulfilled",value:s}),t(s)},i.reject=s=>{n({status:"rejected",reason:s}),e(s)},i}function La(t){return Math.min(1e3*2**t,3e4)}function Er(t){return(t??"online")==="online"?Jt.isOnline():!0}var jr=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function vi(t){return t instanceof jr}function Rr(t){let e=!1,i=0,n=!1,s;const o=Va(),r=p=>{var b;n||(f(new jr(p)),(b=t.abort)==null||b.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>kr.isFocused()&&(t.networkMode==="always"||Jt.isOnline())&&t.canRun(),d=()=>Er(t.networkMode)&&t.canRun(),h=p=>{var b;n||(n=!0,(b=t.onSuccess)==null||b.call(t,p),s==null||s(),o.resolve(p))},f=p=>{var b;n||(n=!0,(b=t.onError)==null||b.call(t,p),s==null||s(),o.reject(p))},m=()=>new Promise(p=>{var b;s=P=>{(n||c())&&p(P)},(b=t.onPause)==null||b.call(t)}).then(()=>{var p;s=void 0,n||(p=t.onContinue)==null||p.call(t)}),x=()=>{if(n)return;let p;const b=i===0?t.initialPromise:void 0;try{p=b??t.fn()}catch(P){p=Promise.reject(P)}Promise.resolve(p).then(h).catch(P=>{var D;if(n)return;const C=t.retry??(ci?0:3),T=t.retryDelay??La,j=typeof T=="function"?T(i,P):T,k=C===!0||typeof C=="number"&&i<C||typeof C=="function"&&C(i,P);if(e||!k){f(P);return}i++,(D=t.onFail)==null||D.call(t,i,P),Ra(j).then(()=>c()?void 0:m()).then(()=>{e?f(P):x()})})};return{promise:o,cancel:r,continue:()=>(s==null||s(),o),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?x():m().then(x),o)}}var Fa=t=>setTimeout(t,0);function Ba(){let t=[],e=0,i=a=>{a()},n=a=>{a()},s=Fa;const o=a=>{e?t.push(a):s(()=>{i(a)})},r=()=>{const a=t;t=[],a.length&&s(()=>{n(()=>{a.forEach(l=>{i(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||r()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{i=a},setBatchNotifyFunction:a=>{n=a},setScheduler:a=>{s=a}}}var ie=Ba(),_e,yr,Ir=(yr=class{constructor(){V(this,_e)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ka(this.gcTime)&&O(this,_e,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(ci?1/0:5*60*1e3))}clearGcTimeout(){y(this,_e)&&(clearTimeout(y(this,_e)),O(this,_e,void 0))}},_e=new WeakMap,yr),nt,Ge,le,Ue,X,It,We,he,xe,vr,_a=(vr=class extends Ir{constructor(e){super();V(this,he);V(this,nt);V(this,Ge);V(this,le);V(this,Ue);V(this,X);V(this,It);V(this,We);O(this,We,!1),O(this,It,e.defaultOptions),this.setOptions(e.options),this.observers=[],O(this,Ue,e.client),O(this,le,y(this,Ue).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,O(this,nt,Ua(this.options)),this.state=e.state??y(this,nt),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=y(this,X))==null?void 0:e.promise}setOptions(e){this.options={...y(this,It),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&y(this,le).remove(this)}setData(e,i){const n=Ia(this.state.data,e,this.options);return Q(this,he,xe).call(this,{data:n,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual}),n}setState(e,i){Q(this,he,xe).call(this,{type:"setState",state:e,setStateOptions:i})}cancel(e){var n,s;const i=(n=y(this,X))==null?void 0:n.promise;return(s=y(this,X))==null||s.cancel(e),i?i.then(de).catch(de):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(y(this,nt))}isActive(){return this.observers.some(e=>ja(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===tn||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>Ni(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Ea(this.state.dataUpdatedAt,e)}onFocus(){var i;const e=this.observers.find(n=>n.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(i=y(this,X))==null||i.continue()}onOnline(){var i;const e=this.observers.find(n=>n.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(i=y(this,X))==null||i.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),y(this,le).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(i=>i!==e),this.observers.length||(y(this,X)&&(y(this,We)?y(this,X).cancel({revert:!0}):y(this,X).cancelRetry()),this.scheduleGc()),y(this,le).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Q(this,he,xe).call(this,{type:"invalidate"})}fetch(e,i){var c,d,h;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(y(this,X))return y(this,X).continueRetry(),y(this,X).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(m=>m.options.queryFn);f&&this.setOptions(f.options)}const n=new AbortController,s=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(O(this,We,!0),n.signal)})},o=()=>{const f=Cr(this.options,i),x=(()=>{const p={client:y(this,Ue),queryKey:this.queryKey,meta:this.meta};return s(p),p})();return O(this,We,!1),this.options.persister?this.options.persister(f,x,this):f(x)},a=(()=>{const f={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:y(this,Ue),state:this.state,fetchFn:o};return s(f),f})();(c=this.options.behavior)==null||c.onFetch(a,this),O(this,Ge,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=a.fetchOptions)==null?void 0:d.meta))&&Q(this,he,xe).call(this,{type:"fetch",meta:(h=a.fetchOptions)==null?void 0:h.meta});const l=f=>{var m,x,p,b;vi(f)&&f.silent||Q(this,he,xe).call(this,{type:"error",error:f}),vi(f)||((x=(m=y(this,le).config).onError)==null||x.call(m,f,this),(b=(p=y(this,le).config).onSettled)==null||b.call(p,this.state.data,f,this)),this.scheduleGc()};return O(this,X,Rr({initialPromise:i==null?void 0:i.initialPromise,fn:a.fetchFn,abort:n.abort.bind(n),onSuccess:f=>{var m,x,p,b;if(f===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(P){l(P);return}(x=(m=y(this,le).config).onSuccess)==null||x.call(m,f,this),(b=(p=y(this,le).config).onSettled)==null||b.call(p,f,this.state.error,this),this.scheduleGc()},onError:l,onFail:(f,m)=>{Q(this,he,xe).call(this,{type:"failed",failureCount:f,error:m})},onPause:()=>{Q(this,he,xe).call(this,{type:"pause"})},onContinue:()=>{Q(this,he,xe).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),y(this,X).start()}},nt=new WeakMap,Ge=new WeakMap,le=new WeakMap,Ue=new WeakMap,X=new WeakMap,It=new WeakMap,We=new WeakMap,he=new WeakSet,xe=function(e){const i=n=>{switch(e.type){case"failed":return{...n,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...Ga(n.data,this.options),fetchMeta:e.meta??null};case"success":return O(this,Ge,void 0),{...n,data:e.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return vi(s)&&s.revert&&y(this,Ge)?{...y(this,Ge),fetchStatus:"idle"}:{...n,error:s,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...e.state}}};this.state=i(this.state),ie.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),y(this,le).notify({query:this,type:"updated",action:e})})},vr);function Ga(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Er(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Ua(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,i=e!==void 0,n=i?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var me,xr,Wa=(xr=class extends li{constructor(e={}){super();V(this,me);this.config=e,O(this,me,new Map)}build(e,i,n){const s=i.queryKey,o=i.queryHash??en(s,i);let r=this.get(o);return r||(r=new _a({client:e,queryKey:s,queryHash:o,options:e.defaultQueryOptions(i),state:n,defaultOptions:e.getQueryDefaults(s)}),this.add(r)),r}add(e){y(this,me).has(e.queryHash)||(y(this,me).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const i=y(this,me).get(e.queryHash);i&&(e.destroy(),i===e&&y(this,me).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){ie.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return y(this,me).get(e)}getAll(){return[...y(this,me).values()]}find(e){const i={exact:!0,...e};return this.getAll().find(n=>qn(i,n))}findAll(e={}){const i=this.getAll();return Object.keys(e).length>0?i.filter(n=>qn(e,n)):i}notify(e){ie.batch(()=>{this.listeners.forEach(i=>{i(e)})})}onFocus(){ie.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){ie.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},me=new WeakMap,xr),pe,te,qe,ge,Ae,br,qa=(br=class extends Ir{constructor(e){super();V(this,ge);V(this,pe);V(this,te);V(this,qe);this.mutationId=e.mutationId,O(this,te,e.mutationCache),O(this,pe,[]),this.state=e.state||Ka(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){y(this,pe).includes(e)||(y(this,pe).push(e),this.clearGcTimeout(),y(this,te).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){O(this,pe,y(this,pe).filter(i=>i!==e)),this.scheduleGc(),y(this,te).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){y(this,pe).length||(this.state.status==="pending"?this.scheduleGc():y(this,te).remove(this))}continue(){var e;return((e=y(this,qe))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var o,r,a,l,c,d,h,f,m,x,p,b,P,C,T,j,k,D,F,N;const i=()=>{Q(this,ge,Ae).call(this,{type:"continue"})};O(this,qe,Rr({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(I,G)=>{Q(this,ge,Ae).call(this,{type:"failed",failureCount:I,error:G})},onPause:()=>{Q(this,ge,Ae).call(this,{type:"pause"})},onContinue:i,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>y(this,te).canRun(this)}));const n=this.state.status==="pending",s=!y(this,qe).canStart();try{if(n)i();else{Q(this,ge,Ae).call(this,{type:"pending",variables:e,isPaused:s}),await((r=(o=y(this,te).config).onMutate)==null?void 0:r.call(o,e,this));const G=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));G!==this.state.context&&Q(this,ge,Ae).call(this,{type:"pending",context:G,variables:e,isPaused:s})}const I=await y(this,qe).start();return await((d=(c=y(this,te).config).onSuccess)==null?void 0:d.call(c,I,e,this.state.context,this)),await((f=(h=this.options).onSuccess)==null?void 0:f.call(h,I,e,this.state.context)),await((x=(m=y(this,te).config).onSettled)==null?void 0:x.call(m,I,null,this.state.variables,this.state.context,this)),await((b=(p=this.options).onSettled)==null?void 0:b.call(p,I,null,e,this.state.context)),Q(this,ge,Ae).call(this,{type:"success",data:I}),I}catch(I){try{throw await((C=(P=y(this,te).config).onError)==null?void 0:C.call(P,I,e,this.state.context,this)),await((j=(T=this.options).onError)==null?void 0:j.call(T,I,e,this.state.context)),await((D=(k=y(this,te).config).onSettled)==null?void 0:D.call(k,void 0,I,this.state.variables,this.state.context,this)),await((N=(F=this.options).onSettled)==null?void 0:N.call(F,void 0,I,e,this.state.context)),I}finally{Q(this,ge,Ae).call(this,{type:"error",error:I})}}finally{y(this,te).runNext(this)}}},pe=new WeakMap,te=new WeakMap,qe=new WeakMap,ge=new WeakSet,Ae=function(e){const i=n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=i(this.state),ie.batch(()=>{y(this,pe).forEach(n=>{n.onMutationUpdate(e)}),y(this,te).notify({mutation:this,type:"updated",action:e})})},br);function Ka(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var be,fe,Mt,wr,Ya=(wr=class extends li{constructor(e={}){super();V(this,be);V(this,fe);V(this,Mt);this.config=e,O(this,be,new Set),O(this,fe,new Map),O(this,Mt,0)}build(e,i,n){const s=new qa({mutationCache:this,mutationId:++Bt(this,Mt)._,options:e.defaultMutationOptions(i),state:n});return this.add(s),s}add(e){y(this,be).add(e);const i=_t(e);if(typeof i=="string"){const n=y(this,fe).get(i);n?n.push(e):y(this,fe).set(i,[e])}this.notify({type:"added",mutation:e})}remove(e){if(y(this,be).delete(e)){const i=_t(e);if(typeof i=="string"){const n=y(this,fe).get(i);if(n)if(n.length>1){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}else n[0]===e&&y(this,fe).delete(i)}}this.notify({type:"removed",mutation:e})}canRun(e){const i=_t(e);if(typeof i=="string"){const n=y(this,fe).get(i),s=n==null?void 0:n.find(o=>o.state.status==="pending");return!s||s===e}else return!0}runNext(e){var n;const i=_t(e);if(typeof i=="string"){const s=(n=y(this,fe).get(i))==null?void 0:n.find(o=>o!==e&&o.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ie.batch(()=>{y(this,be).forEach(e=>{this.notify({type:"removed",mutation:e})}),y(this,be).clear(),y(this,fe).clear()})}getAll(){return Array.from(y(this,be))}find(e){const i={exact:!0,...e};return this.getAll().find(n=>Kn(i,n))}findAll(e={}){return this.getAll().filter(i=>Kn(e,i))}notify(e){ie.batch(()=>{this.listeners.forEach(i=>{i(e)})})}resumePausedMutations(){const e=this.getAll().filter(i=>i.state.isPaused);return ie.batch(()=>Promise.all(e.map(i=>i.continue().catch(de))))}},be=new WeakMap,fe=new WeakMap,Mt=new WeakMap,wr);function _t(t){var e;return(e=t.options.scope)==null?void 0:e.id}function Hn(t){return{onFetch:(e,i)=>{var d,h,f,m,x;const n=e.options,s=(f=(h=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:h.fetchMore)==null?void 0:f.direction,o=((m=e.state.data)==null?void 0:m.pages)||[],r=((x=e.state.data)==null?void 0:x.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let p=!1;const b=T=>{Object.defineProperty(T,"signal",{enumerable:!0,get:()=>(e.signal.aborted?p=!0:e.signal.addEventListener("abort",()=>{p=!0}),e.signal)})},P=Cr(e.options,e.fetchOptions),C=async(T,j,k)=>{if(p)return Promise.reject();if(j==null&&T.pages.length)return Promise.resolve(T);const F=(()=>{const ce={client:e.client,queryKey:e.queryKey,pageParam:j,direction:k?"backward":"forward",meta:e.options.meta};return b(ce),ce})(),N=await P(F),{maxPages:I}=e.options,G=k?Na:Ma;return{pages:G(T.pages,N,I),pageParams:G(T.pageParams,j,I)}};if(s&&o.length){const T=s==="backward",j=T?za:$n,k={pages:o,pageParams:r},D=j(n,k);a=await C(k,D,T)}else{const T=t??o.length;do{const j=l===0?r[0]??n.initialPageParam:$n(n,a);if(l>0&&j==null)break;a=await C(a,j),l++}while(l<T)}return a};e.options.persister?e.fetchFn=()=>{var p,b;return(b=(p=e.options).persister)==null?void 0:b.call(p,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},i)}:e.fetchFn=c}}}function $n(t,{pages:e,pageParams:i}){const n=e.length-1;return e.length>0?t.getNextPageParam(e[n],e,i[n],i):void 0}function za(t,{pages:e,pageParams:i}){var n;return e.length>0?(n=t.getPreviousPageParam)==null?void 0:n.call(t,e[0],e,i[0],i):void 0}var W,Ee,je,st,rt,Re,ot,at,Sr,Ha=(Sr=class{constructor(t={}){V(this,W);V(this,Ee);V(this,je);V(this,st);V(this,rt);V(this,Re);V(this,ot);V(this,at);O(this,W,t.queryCache||new Wa),O(this,Ee,t.mutationCache||new Ya),O(this,je,t.defaultOptions||{}),O(this,st,new Map),O(this,rt,new Map),O(this,Re,0)}mount(){Bt(this,Re)._++,y(this,Re)===1&&(O(this,ot,kr.subscribe(async t=>{t&&(await this.resumePausedMutations(),y(this,W).onFocus())})),O(this,at,Jt.subscribe(async t=>{t&&(await this.resumePausedMutations(),y(this,W).onOnline())})))}unmount(){var t,e;Bt(this,Re)._--,y(this,Re)===0&&((t=y(this,ot))==null||t.call(this),O(this,ot,void 0),(e=y(this,at))==null||e.call(this),O(this,at,void 0))}isFetching(t){return y(this,W).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return y(this,Ee).findAll({...t,status:"pending"}).length}getQueryData(t){var i;const e=this.defaultQueryOptions({queryKey:t});return(i=y(this,W).get(e.queryHash))==null?void 0:i.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),i=y(this,W).build(this,e),n=i.state.data;return n===void 0?this.fetchQuery(t):(t.revalidateIfStale&&i.isStaleByTime(Ni(e.staleTime,i))&&this.prefetchQuery(e),Promise.resolve(n))}getQueriesData(t){return y(this,W).findAll(t).map(({queryKey:e,state:i})=>{const n=i.data;return[e,n]})}setQueryData(t,e,i){const n=this.defaultQueryOptions({queryKey:t}),s=y(this,W).get(n.queryHash),o=s==null?void 0:s.state.data,r=Ca(e,o);if(r!==void 0)return y(this,W).build(this,n).setData(r,{...i,manual:!0})}setQueriesData(t,e,i){return ie.batch(()=>y(this,W).findAll(t).map(({queryKey:n})=>[n,this.setQueryData(n,e,i)]))}getQueryState(t){var i;const e=this.defaultQueryOptions({queryKey:t});return(i=y(this,W).get(e.queryHash))==null?void 0:i.state}removeQueries(t){const e=y(this,W);ie.batch(()=>{e.findAll(t).forEach(i=>{e.remove(i)})})}resetQueries(t,e){const i=y(this,W);return ie.batch(()=>(i.findAll(t).forEach(n=>{n.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const i={revert:!0,...e},n=ie.batch(()=>y(this,W).findAll(t).map(s=>s.cancel(i)));return Promise.all(n).then(de).catch(de)}invalidateQueries(t,e={}){return ie.batch(()=>(y(this,W).findAll(t).forEach(i=>{i.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const i={...e,cancelRefetch:e.cancelRefetch??!0},n=ie.batch(()=>y(this,W).findAll(t).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let o=s.fetch(void 0,i);return i.throwOnError||(o=o.catch(de)),s.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(n).then(de)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const i=y(this,W).build(this,e);return i.isStaleByTime(Ni(e.staleTime,i))?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(de).catch(de)}fetchInfiniteQuery(t){return t.behavior=Hn(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(de).catch(de)}ensureInfiniteQueryData(t){return t.behavior=Hn(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Jt.isOnline()?y(this,Ee).resumePausedMutations():Promise.resolve()}getQueryCache(){return y(this,W)}getMutationCache(){return y(this,Ee)}getDefaultOptions(){return y(this,je)}setDefaultOptions(t){O(this,je,t)}setQueryDefaults(t,e){y(this,st).set(At(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...y(this,st).values()],i={};return e.forEach(n=>{Tt(t,n.queryKey)&&Object.assign(i,n.defaultOptions)}),i}setMutationDefaults(t,e){y(this,rt).set(At(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...y(this,rt).values()],i={};return e.forEach(n=>{Tt(t,n.mutationKey)&&Object.assign(i,n.defaultOptions)}),i}defaultQueryOptions(t){if(t._defaulted)return t;const e={...y(this,je).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=en(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===tn&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...y(this,je).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){y(this,W).clear(),y(this,Ee).clear()}},W=new WeakMap,Ee=new WeakMap,je=new WeakMap,st=new WeakMap,rt=new WeakMap,Re=new WeakMap,ot=new WeakMap,at=new WeakMap,Sr),$a=w.createContext(void 0),Qa=({client:t,children:e})=>(w.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),u.jsx($a.Provider,{value:t,children:e})),Mr={},Nr={},Dr={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];if(typeof window<"u"){var a;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(a=window).gtag.apply(a,o)}},i=e;t.default=i})(Dr);var Or={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var e=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function i(a){return a.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(l,c,d){return c>0&&c+l.length!==d.length&&l.search(e)>-1&&d.charAt(c-2)!==":"&&(d.charAt(c+l.length)!=="-"||d.charAt(c-1)==="-")&&d.charAt(c-1).search(/[^\s-]/)<0?l.toLowerCase():l.substr(1).search(/[A-Z]|\../)>-1?l:l.charAt(0).toUpperCase()+l.substr(1)})}function n(a){return typeof a=="string"&&a.indexOf("@")!==-1}var s="REDACTED (Potential Email Address)";function o(a){return n(a)?(console.warn("This arg looks like an email address, redacting."),s):a}function r(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,d=a||"";return l&&(d=i(a)),c&&(d=o(d)),d}})(Or);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var e=r(Dr),i=r(Or),n=["eventCategory","eventAction","eventLabel","eventValue","hitType"],s=["title","location"],o=["page","hitType"];function r(A){return A&&A.__esModule?A:{default:A}}function a(A,g){if(A==null)return{};var S=l(A,g),v,E;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(A);for(E=0;E<R.length;E++)v=R[E],!(g.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(A,v)&&(S[v]=A[v])}return S}function l(A,g){if(A==null)return{};var S={},v=Object.keys(A),E,R;for(R=0;R<v.length;R++)E=v[R],!(g.indexOf(E)>=0)&&(S[E]=A[E]);return S}function c(A){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},c(A)}function d(A){return m(A)||f(A)||C(A)||h()}function h(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}function m(A){if(Array.isArray(A))return T(A)}function x(A,g){var S=Object.keys(A);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(A);g&&(v=v.filter(function(E){return Object.getOwnPropertyDescriptor(A,E).enumerable})),S.push.apply(S,v)}return S}function p(A){for(var g=1;g<arguments.length;g++){var S=arguments[g]!=null?arguments[g]:{};g%2?x(Object(S),!0).forEach(function(v){I(A,v,S[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(S)):x(Object(S)).forEach(function(v){Object.defineProperty(A,v,Object.getOwnPropertyDescriptor(S,v))})}return A}function b(A,g){return k(A)||j(A,g)||C(A,g)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(A,g){if(A){if(typeof A=="string")return T(A,g);var S=Object.prototype.toString.call(A).slice(8,-1);if(S==="Object"&&A.constructor&&(S=A.constructor.name),S==="Map"||S==="Set")return Array.from(A);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return T(A,g)}}function T(A,g){(g==null||g>A.length)&&(g=A.length);for(var S=0,v=new Array(g);S<g;S++)v[S]=A[S];return v}function j(A,g){var S=A==null?null:typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(S!=null){var v,E,R,B,K=[],z=!0,H=!1;try{if(R=(S=S.call(A)).next,g!==0)for(;!(z=(v=R.call(S)).done)&&(K.push(v.value),K.length!==g);z=!0);}catch(ee){H=!0,E=ee}finally{try{if(!z&&S.return!=null&&(B=S.return(),Object(B)!==B))return}finally{if(H)throw E}}return K}}function k(A){if(Array.isArray(A))return A}function D(A,g){if(!(A instanceof g))throw new TypeError("Cannot call a class as a function")}function F(A,g){for(var S=0;S<g.length;S++){var v=g[S];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(A,G(v.key),v)}}function N(A,g,S){return g&&F(A.prototype,g),Object.defineProperty(A,"prototype",{writable:!1}),A}function I(A,g,S){return g=G(g),g in A?Object.defineProperty(A,g,{value:S,enumerable:!0,configurable:!0,writable:!0}):A[g]=S,A}function G(A){var g=ce(A,"string");return c(g)==="symbol"?g:String(g)}function ce(A,g){if(c(A)!=="object"||A===null)return A;var S=A[Symbol.toPrimitive];if(S!==void 0){var v=S.call(A,g);if(c(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(g==="string"?String:Number)(A)}var ft=function(){function A(){var g=this;D(this,A),I(this,"reset",function(){g.isInitialized=!1,g._testMode=!1,g._currentMeasurementId,g._hasLoadedGA=!1,g._isQueuing=!1,g._queueGtag=[]}),I(this,"_gtag",function(){for(var S=arguments.length,v=new Array(S),E=0;E<S;E++)v[E]=arguments[E];g._testMode||g._isQueuing?g._queueGtag.push(v):e.default.apply(void 0,v)}),I(this,"_loadGA",function(S,v){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!g._hasLoadedGA){var R=document.createElement("script");R.async=!0,R.src="".concat(E,"?id=").concat(S),v&&R.setAttribute("nonce",v),document.body.appendChild(R),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},g._hasLoadedGA=!0}}),I(this,"_toGtagOptions",function(S){if(S){var v={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},E=Object.entries(S).reduce(function(R,B){var K=b(B,2),z=K[0],H=K[1];return v[z]?R[v[z]]=H:R[z]=H,R},{});return E}}),I(this,"initialize",function(S){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!S)throw new Error("Require GA_MEASUREMENT_ID");var E=typeof S=="string"?[{trackingId:S}]:S;g._currentMeasurementId=E[0].trackingId;var R=v.gaOptions,B=v.gtagOptions,K=v.nonce,z=v.testMode,H=z===void 0?!1:z,ee=v.gtagUrl;if(g._testMode=H,H||g._loadGA(g._currentMeasurementId,K,ee),g.isInitialized||(g._gtag("js",new Date),E.forEach(function(Ft){var Bn=p(p(p({},g._toGtagOptions(p(p({},R),Ft.gaOptions))),B),Ft.gtagOptions);Object.keys(Bn).length?g._gtag("config",Ft.trackingId,Bn):g._gtag("config",Ft.trackingId)})),g.isInitialized=!0,!H){var Ln=d(g._queueGtag);for(g._queueGtag=[],g._isQueuing=!1;Ln.length;){var Fn=Ln.shift();g._gtag.apply(g,d(Fn)),Fn[0]==="get"&&(g._isQueuing=!0)}}}),I(this,"set",function(S){if(!S){console.warn("`fieldsObject` is required in .set()");return}if(c(S)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(S).length===0&&console.warn("empty `fieldsObject` given to .set()"),g._gaCommand("set",S)}),I(this,"_gaCommandSendEvent",function(S,v,E,R,B){g._gtag("event",v,p(p({event_category:S,event_label:E,value:R},B&&{non_interaction:B.nonInteraction}),g._toGtagOptions(B)))}),I(this,"_gaCommandSendEventParameters",function(){for(var S=arguments.length,v=new Array(S),E=0;E<S;E++)v[E]=arguments[E];if(typeof v[0]=="string")g._gaCommandSendEvent.apply(g,d(v.slice(1)));else{var R=v[0],B=R.eventCategory,K=R.eventAction,z=R.eventLabel,H=R.eventValue;R.hitType;var ee=a(R,n);g._gaCommandSendEvent(B,K,z,H,ee)}}),I(this,"_gaCommandSendTiming",function(S,v,E,R){g._gtag("event","timing_complete",{name:v,value:E,event_category:S,event_label:R})}),I(this,"_gaCommandSendPageview",function(S,v){if(v&&Object.keys(v).length){var E=g._toGtagOptions(v),R=E.title,B=E.location,K=a(E,s);g._gtag("event","page_view",p(p(p(p({},S&&{page_path:S}),R&&{page_title:R}),B&&{page_location:B}),K))}else S?g._gtag("event","page_view",{page_path:S}):g._gtag("event","page_view")}),I(this,"_gaCommandSendPageviewParameters",function(){for(var S=arguments.length,v=new Array(S),E=0;E<S;E++)v[E]=arguments[E];if(typeof v[0]=="string")g._gaCommandSendPageview.apply(g,d(v.slice(1)));else{var R=v[0],B=R.page;R.hitType;var K=a(R,o);g._gaCommandSendPageview(B,K)}}),I(this,"_gaCommandSend",function(){for(var S=arguments.length,v=new Array(S),E=0;E<S;E++)v[E]=arguments[E];var R=typeof v[0]=="string"?v[0]:v[0].hitType;switch(R){case"event":g._gaCommandSendEventParameters.apply(g,v);break;case"pageview":g._gaCommandSendPageviewParameters.apply(g,v);break;case"timing":g._gaCommandSendTiming.apply(g,d(v.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(R));break;default:console.warn("Send command doesn't exist: ".concat(R))}}),I(this,"_gaCommandSet",function(){for(var S=arguments.length,v=new Array(S),E=0;E<S;E++)v[E]=arguments[E];typeof v[0]=="string"&&(v[0]=I({},v[0],v[1])),g._gtag("set",g._toGtagOptions(v[0]))}),I(this,"_gaCommand",function(S){for(var v=arguments.length,E=new Array(v>1?v-1:0),R=1;R<v;R++)E[R-1]=arguments[R];switch(S){case"send":g._gaCommandSend.apply(g,E);break;case"set":g._gaCommandSet.apply(g,E);break;default:console.warn("Command doesn't exist: ".concat(S))}}),I(this,"ga",function(){for(var S=arguments.length,v=new Array(S),E=0;E<S;E++)v[E]=arguments[E];if(typeof v[0]=="string")g._gaCommand.apply(g,v);else{var R=v[0];g._gtag("get",g._currentMeasurementId,"client_id",function(B){g._isQueuing=!1;var K=g._queueGtag;for(R({get:function(ee){return ee==="clientId"?B:ee==="trackingId"?g._currentMeasurementId:ee==="apiVersion"?"1":void 0}});K.length;){var z=K.shift();g._gtag.apply(g,d(z))}}),g._isQueuing=!0}return g.ga}),I(this,"event",function(S,v){if(typeof S=="string")g._gtag("event",S,g._toGtagOptions(v));else{var E=S.action,R=S.category,B=S.label,K=S.value,z=S.nonInteraction,H=S.transport;if(!R||!E){console.warn("args.category AND args.action are required in event()");return}var ee={hitType:"event",eventCategory:(0,i.default)(R),eventAction:(0,i.default)(E)};B&&(ee.eventLabel=(0,i.default)(B)),typeof K<"u"&&(typeof K!="number"?console.warn("Expected `args.value` arg to be a Number."):ee.eventValue=K),typeof z<"u"&&(typeof z!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):ee.nonInteraction=z),typeof H<"u"&&(typeof H!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(H)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),ee.transport=H)),g._gaCommand("send",ee)}}),I(this,"send",function(S){g._gaCommand("send",S)}),this.reset()}return N(A,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),A}();t.GA4=ft;var gi=new ft;t.default=gi})(Nr);(function(t){function e(a){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},e(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ReactGAImplementation=void 0;var i=s(Nr);function n(a){if(typeof WeakMap!="function")return null;var l=new WeakMap,c=new WeakMap;return(n=function(h){return h?c:l})(a)}function s(a,l){if(a&&a.__esModule)return a;if(a===null||e(a)!=="object"&&typeof a!="function")return{default:a};var c=n(l);if(c&&c.has(a))return c.get(a);var d={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(f!=="default"&&Object.prototype.hasOwnProperty.call(a,f)){var m=h?Object.getOwnPropertyDescriptor(a,f):null;m&&(m.get||m.set)?Object.defineProperty(d,f,m):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}var o=i.GA4;t.ReactGAImplementation=o;var r=i.default;t.default=r})(Mr);const xi=va(Mr),Vr=w.createContext(void 0),Xa=()=>{const t=w.useContext(Vr);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Za=({children:t})=>{const[e,i]=w.useState(()=>localStorage.getItem("theme")||"system"),[n,s]=w.useState(()=>e==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e),o=r=>{i(r),r==="system"?localStorage.removeItem("theme"):localStorage.setItem("theme",r)};return w.useEffect(()=>{const r=window.document.documentElement;if(e==="system"){const a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";s(a),r.classList.remove("light","dark"),r.classList.add(a)}else s(e),r.classList.remove("light","dark"),r.classList.add(e)},[e]),w.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)"),a=l=>{if(e==="system"){const c=l.matches?"dark":"light";s(c),window.document.documentElement.classList.remove("light","dark"),window.document.documentElement.classList.add(c)}};return r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[e]),u.jsx(Vr.Provider,{value:{theme:e,resolvedTheme:n,setTheme:o},children:t})},Ja=()=>{const{theme:t,resolvedTheme:e,setTheme:i}=Xa(),[n,s]=w.useState(!1),o=w.useRef(null),r=[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"system",label:"System"}];return w.useEffect(()=>{const a=l=>{o.current&&!o.current.contains(l.target)&&s(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),u.jsxs("div",{className:"relative",ref:o,children:[u.jsx("button",{onClick:()=>s(!n),className:"p-2 rounded-md hover:bg-accent transition-colors","aria-label":"Toggle theme",children:e==="light"?u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),n&&u.jsx("div",{className:"absolute right-0 mt-2 w-32 rounded-md bg-popover border shadow-lg",children:r.map(a=>u.jsx("button",{onClick:()=>{i(a.value),s(!1)},className:`w-full px-3 py-2 text-sm text-left hover:bg-accent transition-colors first:rounded-t-md last:rounded-b-md ${t===a.value?"bg-accent":""}`,children:a.label},a.value))})]})},el=()=>{const[t,e]=w.useState(!1);return u.jsxs("header",{className:"fixed top-0 left-0 right-0 z-40 glass-effect border-b",children:[u.jsx("div",{className:"max-width-container section-padding",children:u.jsxs("div",{className:"flex items-center justify-between h-16",children:[u.jsx("div",{className:"flex items-center",children:u.jsxs("a",{href:"/",className:"flex items-center space-x-3",children:[u.jsx("span",{className:"text-2xl",children:"🚀"}),u.jsx("span",{className:"text-xl font-semibold",children:"StartupGPT"})]})}),u.jsx("nav",{className:"hidden md:flex items-center space-x-6",children:[{href:"#features",label:"Features"},{href:"#how-it-works",label:"How It Works"},{href:"#pricing",label:"Pricing"},{href:"#testimonials",label:"Testimonials"}].map(i=>u.jsx("a",{href:i.href,className:"text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:i.label},i.href))}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Ja,{}),u.jsx("button",{className:"md:hidden p-2 rounded-md hover:bg-accent",onClick:()=>e(!t),children:u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:t?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})]})]})}),t&&u.jsx("div",{className:"md:hidden border-t",children:u.jsx("nav",{className:"px-4 py-4 space-y-1",children:[{href:"#features",label:"Features"},{href:"#how-it-works",label:"How It Works"},{href:"#pricing",label:"Pricing"},{href:"#testimonials",label:"Testimonials"}].map(i=>u.jsx("a",{href:i.href,className:"block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors",onClick:()=>e(!1),children:i.label},i.href))})})]})},nn=w.createContext({});function sn(t){const e=w.useRef(null);return e.current===null&&(e.current=t()),e.current}const ui=w.createContext(null),rn=w.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class tl extends w.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function il({children:t,isPresent:e}){const i=w.useId(),n=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=w.useContext(rn);return w.useInsertionEffect(()=>{const{width:r,height:a,top:l,left:c}=s.current;if(e||!n.current||!r||!a)return;n.current.dataset.motionPopId=i;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),u.jsx(tl,{isPresent:e,childRef:n,sizeRef:s,children:w.cloneElement(t,{ref:n})})}const nl=({children:t,initial:e,isPresent:i,onExitComplete:n,custom:s,presenceAffectsLayout:o,mode:r})=>{const a=sn(sl),l=w.useId(),c=w.useCallback(h=>{a.set(h,!0);for(const f of a.values())if(!f)return;n&&n()},[a,n]),d=w.useMemo(()=>({id:l,initial:e,isPresent:i,custom:s,onExitComplete:c,register:h=>(a.set(h,!1),()=>a.delete(h))}),o?[Math.random(),c]:[i,c]);return w.useMemo(()=>{a.forEach((h,f)=>a.set(f,!1))},[i]),w.useEffect(()=>{!i&&!a.size&&n&&n()},[i]),r==="popLayout"&&(t=u.jsx(il,{isPresent:i,children:t})),u.jsx(ui.Provider,{value:d,children:t})};function sl(){return new Map}function Lr(t=!0){const e=w.useContext(ui);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:n,register:s}=e,o=w.useId();w.useEffect(()=>{t&&s(o)},[t]);const r=w.useCallback(()=>t&&n&&n(o),[o,n,t]);return!i&&n?[!1,r]:[!0]}const Gt=t=>t.key||"";function Qn(t){const e=[];return w.Children.forEach(t,i=>{w.isValidElement(i)&&e.push(i)}),e}const on=typeof window<"u",Fr=on?w.useLayoutEffect:w.useEffect,Br=({children:t,custom:e,initial:i=!0,onExitComplete:n,presenceAffectsLayout:s=!0,mode:o="sync",propagate:r=!1})=>{const[a,l]=Lr(r),c=w.useMemo(()=>Qn(t),[t]),d=r&&!a?[]:c.map(Gt),h=w.useRef(!0),f=w.useRef(c),m=sn(()=>new Map),[x,p]=w.useState(c),[b,P]=w.useState(c);Fr(()=>{h.current=!1,f.current=c;for(let j=0;j<b.length;j++){const k=Gt(b[j]);d.includes(k)?m.delete(k):m.get(k)!==!0&&m.set(k,!1)}},[b,d.length,d.join("-")]);const C=[];if(c!==x){let j=[...c];for(let k=0;k<b.length;k++){const D=b[k],F=Gt(D);d.includes(F)||(j.splice(k,0,D),C.push(D))}o==="wait"&&C.length&&(j=C),P(Qn(j)),p(c);return}const{forceRender:T}=w.useContext(nn);return u.jsx(u.Fragment,{children:b.map(j=>{const k=Gt(j),D=r&&!a?!1:c===b||d.includes(k),F=()=>{if(m.has(k))m.set(k,!0);else return;let N=!0;m.forEach(I=>{I||(N=!1)}),N&&(T==null||T(),P(f.current),r&&(l==null||l()),n&&n())};return u.jsx(nl,{isPresent:D,initial:!h.current||i?void 0:!1,custom:D?void 0:e,presenceAffectsLayout:s,mode:o,onExitComplete:D?void 0:F,children:j},k)})})},se=t=>t;let _r=se;function an(t){let e;return()=>(e===void 0&&(e=t()),e)}const lt=(t,e,i)=>{const n=e-t;return n===0?1:(i-t)/n},we=t=>t*1e3,Se=t=>t/1e3,rl={useManualTiming:!1};function ol(t){let e=new Set,i=new Set,n=!1,s=!1;const o=new WeakSet;let r={delta:0,timestamp:0,isProcessing:!1};function a(c){o.has(c)&&(l.schedule(c),t()),c(r)}const l={schedule:(c,d=!1,h=!1)=>{const m=h&&n?e:i;return d&&o.add(c),m.has(c)||m.add(c),c},cancel:c=>{i.delete(c),o.delete(c)},process:c=>{if(r=c,n){s=!0;return}n=!0,[e,i]=[i,e],e.forEach(a),e.clear(),n=!1,s&&(s=!1,l.process(c))}};return l}const Ut=["read","resolveKeyframes","update","preRender","render","postRender"],al=40;function Gr(t,e){let i=!1,n=!0;const s={delta:0,timestamp:0,isProcessing:!1},o=()=>i=!0,r=Ut.reduce((P,C)=>(P[C]=ol(o),P),{}),{read:a,resolveKeyframes:l,update:c,preRender:d,render:h,postRender:f}=r,m=()=>{const P=performance.now();i=!1,s.delta=n?1e3/60:Math.max(Math.min(P-s.timestamp,al),1),s.timestamp=P,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),d.process(s),h.process(s),f.process(s),s.isProcessing=!1,i&&e&&(n=!1,t(m))},x=()=>{i=!0,n=!0,s.isProcessing||t(m)};return{schedule:Ut.reduce((P,C)=>{const T=r[C];return P[C]=(j,k=!1,D=!1)=>(i||x(),T.schedule(j,k,D)),P},{}),cancel:P=>{for(let C=0;C<Ut.length;C++)r[Ut[C]].cancel(P)},state:s,steps:r}}const{schedule:_,cancel:Ie,state:$,steps:bi}=Gr(typeof requestAnimationFrame<"u"?requestAnimationFrame:se,!0),Ur=w.createContext({strict:!1}),Xn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ct={};for(const t in Xn)ct[t]={isEnabled:e=>Xn[t].some(i=>!!e[i])};function ll(t){for(const e in t)ct[e]={...ct[e],...t[e]}}const cl=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ei(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||cl.has(t)}let Wr=t=>!ei(t);function ul(t){t&&(Wr=e=>e.startsWith("on")?!ei(e):t(e))}try{ul(require("@emotion/is-prop-valid").default)}catch{}function dl(t,e,i){const n={};for(const s in t)s==="values"&&typeof t.values=="object"||(Wr(s)||i===!0&&ei(s)||!e&&!ei(s)||t.draggable&&s.startsWith("onDrag"))&&(n[s]=t[s]);return n}function hl(t){if(typeof Proxy>"u")return t;const e=new Map,i=(...n)=>t(...n);return new Proxy(i,{get:(n,s)=>s==="create"?t:(e.has(s)||e.set(s,t(s)),e.get(s))})}const di=w.createContext({});function Ct(t){return typeof t=="string"||Array.isArray(t)}function hi(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const ln=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cn=["initial",...ln];function fi(t){return hi(t.animate)||cn.some(e=>Ct(t[e]))}function qr(t){return!!(fi(t)||t.variants)}function fl(t,e){if(fi(t)){const{initial:i,animate:n}=t;return{initial:i===!1||Ct(i)?i:void 0,animate:Ct(n)?n:void 0}}return t.inherit!==!1?e:{}}function ml(t){const{initial:e,animate:i}=fl(t,w.useContext(di));return w.useMemo(()=>({initial:e,animate:i}),[Zn(e),Zn(i)])}function Zn(t){return Array.isArray(t)?t.join(" "):t}const pl=Symbol.for("motionComponentSymbol");function ze(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function gl(t,e,i){return w.useCallback(n=>{n&&t.onMount&&t.onMount(n),e&&(n?e.mount(n):e.unmount()),i&&(typeof i=="function"?i(n):ze(i)&&(i.current=n))},[e])}const un=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yl="framerAppearId",Kr="data-"+un(yl),{schedule:dn}=Gr(queueMicrotask,!1),Yr=w.createContext({});function vl(t,e,i,n,s){var o,r;const{visualElement:a}=w.useContext(di),l=w.useContext(Ur),c=w.useContext(ui),d=w.useContext(rn).reducedMotion,h=w.useRef(null);n=n||l.renderer,!h.current&&n&&(h.current=n(t,{visualState:e,parent:a,props:i,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const f=h.current,m=w.useContext(Yr);f&&!f.projection&&s&&(f.type==="html"||f.type==="svg")&&xl(h.current,i,s,m);const x=w.useRef(!1);w.useInsertionEffect(()=>{f&&x.current&&f.update(i,c)});const p=i[Kr],b=w.useRef(!!p&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,p))&&((r=window.MotionHasOptimisedAnimation)===null||r===void 0?void 0:r.call(window,p)));return Fr(()=>{f&&(x.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),dn.render(f.render),b.current&&f.animationState&&f.animationState.animateChanges())}),w.useEffect(()=>{f&&(!b.current&&f.animationState&&f.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)===null||P===void 0||P.call(window,p)}),b.current=!1))}),f}function xl(t,e,i,n){const{layoutId:s,layout:o,drag:r,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:zr(t.parent)),t.projection.setOptions({layoutId:s,layout:o,alwaysMeasureLayout:!!r||a&&ze(a),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:n,layoutScroll:l,layoutRoot:c})}function zr(t){if(t)return t.options.allowProjection!==!1?t.projection:zr(t.parent)}function bl({preloadedFeatures:t,createVisualElement:e,useRender:i,useVisualState:n,Component:s}){var o,r;t&&ll(t);function a(c,d){let h;const f={...w.useContext(rn),...c,layoutId:wl(c)},{isStatic:m}=f,x=ml(c),p=n(c,m);if(!m&&on){Sl();const b=Pl(f);h=b.MeasureLayout,x.visualElement=vl(s,p,f,e,b.ProjectionNode)}return u.jsxs(di.Provider,{value:x,children:[h&&x.visualElement?u.jsx(h,{visualElement:x.visualElement,...f}):null,i(s,c,gl(p,x.visualElement,d),p,m,x.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(r=(o=s.displayName)!==null&&o!==void 0?o:s.name)!==null&&r!==void 0?r:""})`}`;const l=w.forwardRef(a);return l[pl]=s,l}function wl({layoutId:t}){const e=w.useContext(nn).id;return e&&t!==void 0?e+"-"+t:t}function Sl(t,e){w.useContext(Ur).strict}function Pl(t){const{drag:e,layout:i}=ct;if(!e&&!i)return{};const n={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(t)||i!=null&&i.isEnabled(t)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}const Al=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hn(t){return typeof t!="string"||t.includes("-")?!1:!!(Al.indexOf(t)>-1||/[A-Z]/u.test(t))}function Jn(t){const e=[{},{}];return t==null||t.values.forEach((i,n)=>{e[0][n]=i.get(),e[1][n]=i.getVelocity()}),e}function fn(t,e,i,n){if(typeof e=="function"){const[s,o]=Jn(n);e=e(i!==void 0?i:t.custom,s,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[s,o]=Jn(n);e=e(i!==void 0?i:t.custom,s,o)}return e}const Oi=t=>Array.isArray(t),Tl=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Cl=t=>Oi(t)?t[t.length-1]||0:t,J=t=>!!(t&&t.getVelocity);function $t(t){const e=J(t)?t.get():t;return Tl(e)?e.toValue():e}function kl({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:i},n,s,o){const r={latestValues:El(n,s,o,t),renderState:e()};return i&&(r.onMount=a=>i({props:n,current:a,...r}),r.onUpdate=a=>i(a)),r}const Hr=t=>(e,i)=>{const n=w.useContext(di),s=w.useContext(ui),o=()=>kl(t,e,n,s);return i?o():sn(o)};function El(t,e,i,n){const s={},o=n(t,{});for(const f in o)s[f]=$t(o[f]);let{initial:r,animate:a}=t;const l=fi(t),c=qr(t);e&&c&&!l&&t.inherit!==!1&&(r===void 0&&(r=e.initial),a===void 0&&(a=e.animate));let d=i?i.initial===!1:!1;d=d||r===!1;const h=d?a:r;if(h&&typeof h!="boolean"&&!hi(h)){const f=Array.isArray(h)?h:[h];for(let m=0;m<f.length;m++){const x=fn(t,f[m]);if(x){const{transitionEnd:p,transition:b,...P}=x;for(const C in P){let T=P[C];if(Array.isArray(T)){const j=d?T.length-1:0;T=T[j]}T!==null&&(s[C]=T)}for(const C in p)s[C]=p[C]}}}return s}const dt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ye=new Set(dt),$r=t=>e=>typeof e=="string"&&e.startsWith(t),Qr=$r("--"),jl=$r("var(--"),mn=t=>jl(t)?Rl.test(t.split("/*")[0].trim()):!1,Rl=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Xr=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Pe=(t,e,i)=>i>e?e:i<t?t:i,ht={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},kt={...ht,transform:t=>Pe(0,1,t)},Wt={...ht,default:1},Nt=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Te=Nt("deg"),ye=Nt("%"),M=Nt("px"),Il=Nt("vh"),Ml=Nt("vw"),es={...ye,parse:t=>ye.parse(t)/100,transform:t=>ye.transform(t*100)},Nl={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,radius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,backgroundPositionX:M,backgroundPositionY:M},Dl={rotate:Te,rotateX:Te,rotateY:Te,rotateZ:Te,scale:Wt,scaleX:Wt,scaleY:Wt,scaleZ:Wt,skew:Te,skewX:Te,skewY:Te,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:kt,originX:es,originY:es,originZ:M},ts={...ht,transform:Math.round},pn={...Nl,...Dl,zIndex:ts,size:M,fillOpacity:kt,strokeOpacity:kt,numOctaves:ts},Ol={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Vl=dt.length;function Ll(t,e,i){let n="",s=!0;for(let o=0;o<Vl;o++){const r=dt[o],a=t[r];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(r.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||i){const c=Xr(a,pn[r]);if(!l){s=!1;const d=Ol[r]||r;n+=`${d}(${c}) `}i&&(e[r]=c)}}return n=n.trim(),i?n=i(e,s?"":n):s&&(n="none"),n}function gn(t,e,i){const{style:n,vars:s,transformOrigin:o}=t;let r=!1,a=!1;for(const l in e){const c=e[l];if(Ye.has(l)){r=!0;continue}else if(Qr(l)){s[l]=c;continue}else{const d=Xr(c,pn[l]);l.startsWith("origin")?(a=!0,o[l]=d):n[l]=d}}if(e.transform||(r||i?n.transform=Ll(e,t.transform,i):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=o;n.transformOrigin=`${l} ${c} ${d}`}}const Fl={offset:"stroke-dashoffset",array:"stroke-dasharray"},Bl={offset:"strokeDashoffset",array:"strokeDasharray"};function _l(t,e,i=1,n=0,s=!0){t.pathLength=1;const o=s?Fl:Bl;t[o.offset]=M.transform(-n);const r=M.transform(e),a=M.transform(i);t[o.array]=`${r} ${a}`}function is(t,e,i){return typeof t=="string"?t:M.transform(e+i*t)}function Gl(t,e,i){const n=is(e,t.x,t.width),s=is(i,t.y,t.height);return`${n} ${s}`}function yn(t,{attrX:e,attrY:i,attrScale:n,originX:s,originY:o,pathLength:r,pathSpacing:a=1,pathOffset:l=0,...c},d,h){if(gn(t,c,h),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:m,dimensions:x}=t;f.transform&&(x&&(m.transform=f.transform),delete f.transform),x&&(s!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=Gl(x,s!==void 0?s:.5,o!==void 0?o:.5)),e!==void 0&&(f.x=e),i!==void 0&&(f.y=i),n!==void 0&&(f.scale=n),r!==void 0&&_l(f,r,a,l,!1)}const vn=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Zr=()=>({...vn(),attrs:{}}),xn=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Jr(t,{style:e,vars:i},n,s){Object.assign(t.style,e,s&&s.getProjectionStyles(n));for(const o in i)t.style.setProperty(o,i[o])}const eo=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function to(t,e,i,n){Jr(t,e,void 0,n);for(const s in e.attrs)t.setAttribute(eo.has(s)?s:un(s),e.attrs[s])}const ti={};function Ul(t){Object.assign(ti,t)}function io(t,{layout:e,layoutId:i}){return Ye.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!ti[t]||t==="opacity")}function bn(t,e,i){var n;const{style:s}=t,o={};for(const r in s)(J(s[r])||e.style&&J(e.style[r])||io(r,t)||((n=i==null?void 0:i.getValue(r))===null||n===void 0?void 0:n.liveStyle)!==void 0)&&(o[r]=s[r]);return o}function no(t,e,i){const n=bn(t,e,i);for(const s in t)if(J(t[s])||J(e[s])){const o=dt.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[o]=t[s]}return n}function Wl(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const ns=["x","y","width","height","cx","cy","r"],ql={useVisualState:Hr({scrapeMotionValuesFromProps:no,createRenderState:Zr,onUpdate:({props:t,prevProps:e,current:i,renderState:n,latestValues:s})=>{if(!i)return;let o=!!t.drag;if(!o){for(const a in s)if(Ye.has(a)){o=!0;break}}if(!o)return;let r=!e;if(e)for(let a=0;a<ns.length;a++){const l=ns[a];t[l]!==e[l]&&(r=!0)}r&&_.read(()=>{Wl(i,n),_.render(()=>{yn(n,s,xn(i.tagName),t.transformTemplate),to(i,n)})})}})},Kl={useVisualState:Hr({scrapeMotionValuesFromProps:bn,createRenderState:vn})};function so(t,e,i){for(const n in e)!J(e[n])&&!io(n,i)&&(t[n]=e[n])}function Yl({transformTemplate:t},e){return w.useMemo(()=>{const i=vn();return gn(i,e,t),Object.assign({},i.vars,i.style)},[e])}function zl(t,e){const i=t.style||{},n={};return so(n,i,t),Object.assign(n,Yl(t,e)),n}function Hl(t,e){const i={},n=zl(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=n,i}function $l(t,e,i,n){const s=w.useMemo(()=>{const o=Zr();return yn(o,e,xn(n),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};so(o,t.style,t),s.style={...o,...s.style}}return s}function Ql(t=!1){return(i,n,s,{latestValues:o},r)=>{const l=(hn(i)?$l:Hl)(n,o,r,i),c=dl(n,typeof i=="string",t),d=i!==w.Fragment?{...c,...l,ref:s}:{},{children:h}=n,f=w.useMemo(()=>J(h)?h.get():h,[h]);return w.createElement(i,{...d,children:f})}}function Xl(t,e){return function(n,{forwardMotionProps:s}={forwardMotionProps:!1}){const r={...hn(n)?ql:Kl,preloadedFeatures:t,useRender:Ql(s),createVisualElement:e,Component:n};return bl(r)}}function ro(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}function mi(t,e,i){const n=t.getProps();return fn(n,e,i!==void 0?i:n.custom,t)}const Zl=an(()=>window.ScrollTimeline!==void 0);class Jl{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,i){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=i}attachTimeline(e,i){const n=this.animations.map(s=>{if(Zl()&&s.attachTimeline)return s.attachTimeline(e);if(typeof i=="function")return i(s)});return()=>{n.forEach((s,o)=>{s&&s(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let i=0;i<this.animations.length;i++)e=Math.max(e,this.animations[i].duration);return e}runAll(e){this.animations.forEach(i=>i[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ec extends Jl{then(e,i){return Promise.all(this.animations).then(e).catch(i)}}function wn(t,e){return t?t[e]||t.default||t:void 0}const Vi=2e4;function oo(t){let e=0;const i=50;let n=t.next(e);for(;!n.done&&e<Vi;)e+=i,n=t.next(e);return e>=Vi?1/0:e}function Sn(t){return typeof t=="function"}function ss(t,e){t.timeline=e,t.onfinish=null}const Pn=t=>Array.isArray(t)&&typeof t[0]=="number",tc={linearEasing:void 0};function ic(t,e){const i=an(t);return()=>{var n;return(n=tc[e])!==null&&n!==void 0?n:i()}}const ii=ic(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ao=(t,e,i=10)=>{let n="";const s=Math.max(Math.round(e/i),2);for(let o=0;o<s;o++)n+=t(lt(0,s-1,o))+", ";return`linear(${n.substring(0,n.length-2)})`};function lo(t){return!!(typeof t=="function"&&ii()||!t||typeof t=="string"&&(t in Li||ii())||Pn(t)||Array.isArray(t)&&t.every(lo))}const yt=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,Li={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:yt([0,.65,.55,1]),circOut:yt([.55,0,1,.45]),backIn:yt([.31,.01,.66,-.59]),backOut:yt([.33,1.53,.69,.99])};function co(t,e){if(t)return typeof t=="function"&&ii()?ao(t,e):Pn(t)?yt(t):Array.isArray(t)?t.map(i=>co(i,e)||Li.easeOut):Li[t]}const ue={x:!1,y:!1};function uo(){return ue.x||ue.y}function nc(t,e,i){var n;if(t instanceof Element)return[t];if(typeof t=="string"){let s=document;const o=(n=void 0)!==null&&n!==void 0?n:s.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t)}function ho(t,e){const i=nc(t),n=new AbortController,s={passive:!0,...e,signal:n.signal};return[i,s,()=>n.abort()]}function rs(t){return e=>{e.pointerType==="touch"||uo()||t(e)}}function sc(t,e,i={}){const[n,s,o]=ho(t,i),r=rs(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const d=rs(h=>{c(h),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,s)});return n.forEach(a=>{a.addEventListener("pointerenter",r,s)}),o}const fo=(t,e)=>e?t===e?!0:fo(t,e.parentElement):!1,An=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,rc=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function oc(t){return rc.has(t.tagName)||t.tabIndex!==-1}const vt=new WeakSet;function os(t){return e=>{e.key==="Enter"&&t(e)}}function wi(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ac=(t,e)=>{const i=t.currentTarget;if(!i)return;const n=os(()=>{if(vt.has(i))return;wi(i,"down");const s=os(()=>{wi(i,"up")}),o=()=>wi(i,"cancel");i.addEventListener("keyup",s,e),i.addEventListener("blur",o,e)});i.addEventListener("keydown",n,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),e)};function as(t){return An(t)&&!uo()}function lc(t,e,i={}){const[n,s,o]=ho(t,i),r=a=>{const l=a.currentTarget;if(!as(a)||vt.has(l))return;vt.add(l);const c=e(a),d=(m,x)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),!(!as(m)||!vt.has(l))&&(vt.delete(l),typeof c=="function"&&c(m,{success:x}))},h=m=>{d(m,i.useGlobalTarget||fo(l,m.target))},f=m=>{d(m,!1)};window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",f,s)};return n.forEach(a=>{!oc(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(i.useGlobalTarget?window:a).addEventListener("pointerdown",r,s),a.addEventListener("focus",c=>ac(c,s),s)}),o}function cc(t){return t==="x"||t==="y"?ue[t]?null:(ue[t]=!0,()=>{ue[t]=!1}):ue.x||ue.y?null:(ue.x=ue.y=!0,()=>{ue.x=ue.y=!1})}const mo=new Set(["width","height","top","left","right","bottom",...dt]);let Qt;function uc(){Qt=void 0}const ve={now:()=>(Qt===void 0&&ve.set($.isProcessing||rl.useManualTiming?$.timestamp:performance.now()),Qt),set:t=>{Qt=t,queueMicrotask(uc)}};function Tn(t,e){t.indexOf(e)===-1&&t.push(e)}function Cn(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}class kn{constructor(){this.subscriptions=[]}add(e){return Tn(this.subscriptions,e),()=>Cn(this.subscriptions,e)}notify(e,i,n){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,i,n);else for(let o=0;o<s;o++){const r=this.subscriptions[o];r&&r(e,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function po(t,e){return e?t*(1e3/e):0}const ls=30,dc=t=>!isNaN(parseFloat(t));class hc{constructor(e,i={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(n,s=!0)=>{const o=ve.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=ve.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=dc(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new kn);const n=this.events[e].add(i);return e==="change"?()=>{n(),_.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e,i=!0){!i||!this.passiveEffect?this.updateAndNotify(e,i):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,i,n){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ve.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ls)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,ls);return po(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Et(t,e){return new hc(t,e)}function fc(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,Et(i))}function mc(t,e){const i=mi(t,e);let{transitionEnd:n={},transition:s={},...o}=i||{};o={...o,...n};for(const r in o){const a=Cl(o[r]);fc(t,r,a)}}function pc(t){return!!(J(t)&&t.add)}function Fi(t,e){const i=t.getValue("willChange");if(pc(i))return i.add(e)}function go(t){return t.props[Kr]}const yo=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,gc=1e-7,yc=12;function vc(t,e,i,n,s){let o,r,a=0;do r=e+(i-e)/2,o=yo(r,n,s)-t,o>0?i=r:e=r;while(Math.abs(o)>gc&&++a<yc);return r}function Dt(t,e,i,n){if(t===e&&i===n)return se;const s=o=>vc(o,0,1,t,i);return o=>o===0||o===1?o:yo(s(o),e,n)}const vo=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,xo=t=>e=>1-t(1-e),bo=Dt(.33,1.53,.69,.99),En=xo(bo),wo=vo(En),So=t=>(t*=2)<1?.5*En(t):.5*(2-Math.pow(2,-10*(t-1))),jn=t=>1-Math.sin(Math.acos(t)),Po=xo(jn),Ao=vo(jn),To=t=>/^0[^.\s]+$/u.test(t);function xc(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||To(t):!0}const bt=t=>Math.round(t*1e5)/1e5,Rn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function bc(t){return t==null}const wc=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,In=(t,e)=>i=>!!(typeof i=="string"&&wc.test(i)&&i.startsWith(t)||e&&!bc(i)&&Object.prototype.hasOwnProperty.call(i,e)),Co=(t,e,i)=>n=>{if(typeof n!="string")return n;const[s,o,r,a]=n.match(Rn);return{[t]:parseFloat(s),[e]:parseFloat(o),[i]:parseFloat(r),alpha:a!==void 0?parseFloat(a):1}},Sc=t=>Pe(0,255,t),Si={...ht,transform:t=>Math.round(Sc(t))},Fe={test:In("rgb","red"),parse:Co("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:n=1})=>"rgba("+Si.transform(t)+", "+Si.transform(e)+", "+Si.transform(i)+", "+bt(kt.transform(n))+")"};function Pc(t){let e="",i="",n="",s="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),n=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),n=t.substring(3,4),s=t.substring(4,5),e+=e,i+=i,n+=n,s+=s),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:s?parseInt(s,16)/255:1}}const Bi={test:In("#"),parse:Pc,transform:Fe.transform},He={test:In("hsl","hue"),parse:Co("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:n=1})=>"hsla("+Math.round(t)+", "+ye.transform(bt(e))+", "+ye.transform(bt(i))+", "+bt(kt.transform(n))+")"},Z={test:t=>Fe.test(t)||Bi.test(t)||He.test(t),parse:t=>Fe.test(t)?Fe.parse(t):He.test(t)?He.parse(t):Bi.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Fe.transform(t):He.transform(t)},Ac=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Tc(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Rn))===null||e===void 0?void 0:e.length)||0)+(((i=t.match(Ac))===null||i===void 0?void 0:i.length)||0)>0}const ko="number",Eo="color",Cc="var",kc="var(",cs="${}",Ec=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function jt(t){const e=t.toString(),i=[],n={color:[],number:[],var:[]},s=[];let o=0;const a=e.replace(Ec,l=>(Z.test(l)?(n.color.push(o),s.push(Eo),i.push(Z.parse(l))):l.startsWith(kc)?(n.var.push(o),s.push(Cc),i.push(l)):(n.number.push(o),s.push(ko),i.push(parseFloat(l))),++o,cs)).split(cs);return{values:i,split:a,indexes:n,types:s}}function jo(t){return jt(t).values}function Ro(t){const{split:e,types:i}=jt(t),n=e.length;return s=>{let o="";for(let r=0;r<n;r++)if(o+=e[r],s[r]!==void 0){const a=i[r];a===ko?o+=bt(s[r]):a===Eo?o+=Z.transform(s[r]):o+=s[r]}return o}}const jc=t=>typeof t=="number"?0:t;function Rc(t){const e=jo(t);return Ro(t)(e.map(jc))}const Me={test:Tc,parse:jo,createTransformer:Ro,getAnimatableNone:Rc},Ic=new Set(["brightness","contrast","saturate","opacity"]);function Mc(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=i.match(Rn)||[];if(!n)return t;const s=i.replace(n,"");let o=Ic.has(e)?1:0;return n!==i&&(o*=100),e+"("+o+s+")"}const Nc=/\b([a-z-]*)\(.*?\)/gu,_i={...Me,getAnimatableNone:t=>{const e=t.match(Nc);return e?e.map(Mc).join(" "):t}},Dc={...pn,color:Z,backgroundColor:Z,outlineColor:Z,fill:Z,stroke:Z,borderColor:Z,borderTopColor:Z,borderRightColor:Z,borderBottomColor:Z,borderLeftColor:Z,filter:_i,WebkitFilter:_i},Mn=t=>Dc[t];function Io(t,e){let i=Mn(t);return i!==_i&&(i=Me),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const Oc=new Set(["auto","none","0"]);function Vc(t,e,i){let n=0,s;for(;n<t.length&&!s;){const o=t[n];typeof o=="string"&&!Oc.has(o)&&jt(o).values.length&&(s=t[n]),n++}if(s&&i)for(const o of e)t[o]=Io(i,s)}const us=t=>t===ht||t===M,ds=(t,e)=>parseFloat(t.split(", ")[e]),hs=(t,e)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const s=n.match(/^matrix3d\((.+)\)$/u);if(s)return ds(s[1],e);{const o=n.match(/^matrix\((.+)\)$/u);return o?ds(o[1],t):0}},Lc=new Set(["x","y","z"]),Fc=dt.filter(t=>!Lc.has(t));function Bc(t){const e=[];return Fc.forEach(i=>{const n=t.getValue(i);n!==void 0&&(e.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),e}const ut={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:hs(4,13),y:hs(5,14)};ut.translateX=ut.x;ut.translateY=ut.y;const Ke=new Set;let Gi=!1,Ui=!1;function Mo(){if(Ui){const t=Array.from(Ke).filter(n=>n.needsMeasurement),e=new Set(t.map(n=>n.element)),i=new Map;e.forEach(n=>{const s=Bc(n);s.length&&(i.set(n,s),n.render())}),t.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();const s=i.get(n);s&&s.forEach(([o,r])=>{var a;(a=n.getValue(o))===null||a===void 0||a.set(r)})}),t.forEach(n=>n.measureEndState()),t.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Ui=!1,Gi=!1,Ke.forEach(t=>t.complete()),Ke.clear()}function No(){Ke.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ui=!0)})}function _c(){No(),Mo()}class Nn{constructor(e,i,n,s,o,r=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=n,this.motionValue=s,this.element=o,this.isAsync=r}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ke.add(this),Gi||(Gi=!0,_.read(No),_.resolveKeyframes(Mo))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:n,motionValue:s}=this;for(let o=0;o<e.length;o++)if(e[o]===null)if(o===0){const r=s==null?void 0:s.get(),a=e[e.length-1];if(r!==void 0)e[0]=r;else if(n&&i){const l=n.readValue(i,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),s&&r===void 0&&s.set(e[0])}else e[o]=e[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ke.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ke.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Do=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Gc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Uc(t){const e=Gc.exec(t);if(!e)return[,];const[,i,n,s]=e;return[`--${i??n}`,s]}function Oo(t,e,i=1){const[n,s]=Uc(t);if(!n)return;const o=window.getComputedStyle(e).getPropertyValue(n);if(o){const r=o.trim();return Do(r)?parseFloat(r):r}return mn(s)?Oo(s,e,i+1):s}const Vo=t=>e=>e.test(t),Wc={test:t=>t==="auto",parse:t=>t},Lo=[ht,M,ye,Te,Ml,Il,Wc],fs=t=>Lo.find(Vo(t));class Fo extends Nn{constructor(e,i,n,s,o){super(e,i,n,s,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:n}=this;if(!i||!i.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),mn(c))){const d=Oo(c,i.current);d!==void 0&&(e[l]=d),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!mo.has(n)||e.length!==2)return;const[s,o]=e,r=fs(s),a=fs(o);if(r!==a)if(us(r)&&us(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,n=[];for(let s=0;s<e.length;s++)xc(e[s])&&n.push(s);n.length&&Vc(e,n,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ut[n](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const s=i[i.length-1];s!==void 0&&e.getValue(n,s).jump(s,!1)}measureEndState(){var e;const{element:i,name:n,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const o=i.getValue(n);o&&o.jump(this.measuredOrigin,!1);const r=s.length-1,a=s[r];s[r]=ut[n](i.measureViewportBox(),window.getComputedStyle(i.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{i.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const ms=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Me.test(t)||t==="0")&&!t.startsWith("url("));function qc(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function Kc(t,e,i,n){const s=t[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const o=t[t.length-1],r=ms(s,e),a=ms(o,e);return!r||!a?!1:qc(t)||(i==="spring"||Sn(i))&&n}const Yc=t=>t!==null;function pi(t,{repeat:e,repeatType:i="loop"},n){const s=t.filter(Yc),o=e&&i!=="loop"&&e%2===1?0:s.length-1;return!o||n===void 0?s[o]:n}const zc=40;class Bo{constructor({autoplay:e=!0,delay:i=0,type:n="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:r="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ve.now(),this.options={autoplay:e,delay:i,type:n,repeat:s,repeatDelay:o,repeatType:r,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>zc?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&_c(),this._resolved}onKeyframesResolved(e,i){this.resolvedAt=ve.now(),this.hasAttemptedResolve=!0;const{name:n,type:s,velocity:o,delay:r,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Kc(e,n,s,o))if(r)this.options.duration=0;else{l&&l(pi(e,this.options,i)),a&&a(),this.resolveFinishedPromise();return}const d=this.initPlayback(e,i);d!==!1&&(this._resolved={keyframes:e,finalKeyframe:i,...d},this.onPostResolved())}onPostResolved(){}then(e,i){return this.currentFinishedPromise.then(e,i)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const U=(t,e,i)=>t+(e-t)*i;function Pi(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Hc({hue:t,saturation:e,lightness:i,alpha:n}){t/=360,e/=100,i/=100;let s=0,o=0,r=0;if(!e)s=o=r=i;else{const a=i<.5?i*(1+e):i+e-i*e,l=2*i-a;s=Pi(l,a,t+1/3),o=Pi(l,a,t),r=Pi(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(o*255),blue:Math.round(r*255),alpha:n}}function ni(t,e){return i=>i>0?e:t}const Ai=(t,e,i)=>{const n=t*t,s=i*(e*e-n)+n;return s<0?0:Math.sqrt(s)},$c=[Bi,Fe,He],Qc=t=>$c.find(e=>e.test(t));function ps(t){const e=Qc(t);if(!e)return!1;let i=e.parse(t);return e===He&&(i=Hc(i)),i}const gs=(t,e)=>{const i=ps(t),n=ps(e);if(!i||!n)return ni(t,e);const s={...i};return o=>(s.red=Ai(i.red,n.red,o),s.green=Ai(i.green,n.green,o),s.blue=Ai(i.blue,n.blue,o),s.alpha=U(i.alpha,n.alpha,o),Fe.transform(s))},Xc=(t,e)=>i=>e(t(i)),Ot=(...t)=>t.reduce(Xc),Wi=new Set(["none","hidden"]);function Zc(t,e){return Wi.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function Jc(t,e){return i=>U(t,e,i)}function Dn(t){return typeof t=="number"?Jc:typeof t=="string"?mn(t)?ni:Z.test(t)?gs:iu:Array.isArray(t)?_o:typeof t=="object"?Z.test(t)?gs:eu:ni}function _o(t,e){const i=[...t],n=i.length,s=t.map((o,r)=>Dn(o)(o,e[r]));return o=>{for(let r=0;r<n;r++)i[r]=s[r](o);return i}}function eu(t,e){const i={...t,...e},n={};for(const s in i)t[s]!==void 0&&e[s]!==void 0&&(n[s]=Dn(t[s])(t[s],e[s]));return s=>{for(const o in n)i[o]=n[o](s);return i}}function tu(t,e){var i;const n=[],s={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const r=e.types[o],a=t.indexes[r][s[r]],l=(i=t.values[a])!==null&&i!==void 0?i:0;n[o]=l,s[r]++}return n}const iu=(t,e)=>{const i=Me.createTransformer(e),n=jt(t),s=jt(e);return n.indexes.var.length===s.indexes.var.length&&n.indexes.color.length===s.indexes.color.length&&n.indexes.number.length>=s.indexes.number.length?Wi.has(t)&&!s.values.length||Wi.has(e)&&!n.values.length?Zc(t,e):Ot(_o(tu(n,s),s.values),i):ni(t,e)};function Go(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?U(t,e,i):Dn(t)(t,e)}const nu=5;function Uo(t,e,i){const n=Math.max(e-nu,0);return po(i-t(n),e-n)}const q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ti=.001;function su({duration:t=q.duration,bounce:e=q.bounce,velocity:i=q.velocity,mass:n=q.mass}){let s,o,r=1-e;r=Pe(q.minDamping,q.maxDamping,r),t=Pe(q.minDuration,q.maxDuration,Se(t)),r<1?(s=c=>{const d=c*r,h=d*t,f=d-i,m=qi(c,r),x=Math.exp(-h);return Ti-f/m*x},o=c=>{const h=c*r*t,f=h*i+i,m=Math.pow(r,2)*Math.pow(c,2)*t,x=Math.exp(-h),p=qi(Math.pow(c,2),r);return(-s(c)+Ti>0?-1:1)*((f-m)*x)/p}):(s=c=>{const d=Math.exp(-c*t),h=(c-i)*t+1;return-Ti+d*h},o=c=>{const d=Math.exp(-c*t),h=(i-c)*(t*t);return d*h});const a=5/t,l=ou(s,o,a);if(t=we(t),isNaN(l))return{stiffness:q.stiffness,damping:q.damping,duration:t};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:r*2*Math.sqrt(n*c),duration:t}}}const ru=12;function ou(t,e,i){let n=i;for(let s=1;s<ru;s++)n=n-t(n)/e(n);return n}function qi(t,e){return t*Math.sqrt(1-e*e)}const au=["duration","bounce"],lu=["stiffness","damping","mass"];function ys(t,e){return e.some(i=>t[i]!==void 0)}function cu(t){let e={velocity:q.velocity,stiffness:q.stiffness,damping:q.damping,mass:q.mass,isResolvedFromDuration:!1,...t};if(!ys(t,lu)&&ys(t,au))if(t.visualDuration){const i=t.visualDuration,n=2*Math.PI/(i*1.2),s=n*n,o=2*Pe(.05,1,1-(t.bounce||0))*Math.sqrt(s);e={...e,mass:q.mass,stiffness:s,damping:o}}else{const i=su(t);e={...e,...i,mass:q.mass},e.isResolvedFromDuration=!0}return e}function Wo(t=q.visualDuration,e=q.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:n,restDelta:s}=i;const o=i.keyframes[0],r=i.keyframes[i.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:d,duration:h,velocity:f,isResolvedFromDuration:m}=cu({...i,velocity:-Se(i.velocity||0)}),x=f||0,p=c/(2*Math.sqrt(l*d)),b=r-o,P=Se(Math.sqrt(l/d)),C=Math.abs(b)<5;n||(n=C?q.restSpeed.granular:q.restSpeed.default),s||(s=C?q.restDelta.granular:q.restDelta.default);let T;if(p<1){const k=qi(P,p);T=D=>{const F=Math.exp(-p*P*D);return r-F*((x+p*P*b)/k*Math.sin(k*D)+b*Math.cos(k*D))}}else if(p===1)T=k=>r-Math.exp(-P*k)*(b+(x+P*b)*k);else{const k=P*Math.sqrt(p*p-1);T=D=>{const F=Math.exp(-p*P*D),N=Math.min(k*D,300);return r-F*((x+p*P*b)*Math.sinh(N)+k*b*Math.cosh(N))/k}}const j={calculatedDuration:m&&h||null,next:k=>{const D=T(k);if(m)a.done=k>=h;else{let F=0;p<1&&(F=k===0?we(x):Uo(T,k,D));const N=Math.abs(F)<=n,I=Math.abs(r-D)<=s;a.done=N&&I}return a.value=a.done?r:D,a},toString:()=>{const k=Math.min(oo(j),Vi),D=ao(F=>j.next(k*F).value,k,30);return k+"ms "+D}};return j}function vs({keyframes:t,velocity:e=0,power:i=.8,timeConstant:n=325,bounceDamping:s=10,bounceStiffness:o=500,modifyTarget:r,min:a,max:l,restDelta:c=.5,restSpeed:d}){const h=t[0],f={done:!1,value:h},m=N=>a!==void 0&&N<a||l!==void 0&&N>l,x=N=>a===void 0?l:l===void 0||Math.abs(a-N)<Math.abs(l-N)?a:l;let p=i*e;const b=h+p,P=r===void 0?b:r(b);P!==b&&(p=P-h);const C=N=>-p*Math.exp(-N/n),T=N=>P+C(N),j=N=>{const I=C(N),G=T(N);f.done=Math.abs(I)<=c,f.value=f.done?P:G};let k,D;const F=N=>{m(f.value)&&(k=N,D=Wo({keyframes:[f.value,x(f.value)],velocity:Uo(T,N,f.value),damping:s,stiffness:o,restDelta:c,restSpeed:d}))};return F(0),{calculatedDuration:null,next:N=>{let I=!1;return!D&&k===void 0&&(I=!0,j(N),F(N)),k!==void 0&&N>=k?D.next(N-k):(!I&&j(N),f)}}}const uu=Dt(.42,0,1,1),du=Dt(0,0,.58,1),qo=Dt(.42,0,.58,1),hu=t=>Array.isArray(t)&&typeof t[0]!="number",fu={linear:se,easeIn:uu,easeInOut:qo,easeOut:du,circIn:jn,circInOut:Ao,circOut:Po,backIn:En,backInOut:wo,backOut:bo,anticipate:So},xs=t=>{if(Pn(t)){_r(t.length===4);const[e,i,n,s]=t;return Dt(e,i,n,s)}else if(typeof t=="string")return fu[t];return t};function mu(t,e,i){const n=[],s=i||Go,o=t.length-1;for(let r=0;r<o;r++){let a=s(t[r],t[r+1]);if(e){const l=Array.isArray(e)?e[r]||se:e;a=Ot(l,a)}n.push(a)}return n}function pu(t,e,{clamp:i=!0,ease:n,mixer:s}={}){const o=t.length;if(_r(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const r=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=mu(e,n,s),l=a.length,c=d=>{if(r&&d<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(d<t[h+1]);h++);const f=lt(t[h],t[h+1],d);return a[h](f)};return i?d=>c(Pe(t[0],t[o-1],d)):c}function gu(t,e){const i=t[t.length-1];for(let n=1;n<=e;n++){const s=lt(0,e,n);t.push(U(i,1,s))}}function yu(t){const e=[0];return gu(e,t.length-1),e}function vu(t,e){return t.map(i=>i*e)}function xu(t,e){return t.map(()=>e||qo).splice(0,t.length-1)}function si({duration:t=300,keyframes:e,times:i,ease:n="easeInOut"}){const s=hu(n)?n.map(xs):xs(n),o={done:!1,value:e[0]},r=vu(i&&i.length===e.length?i:yu(e),t),a=pu(r,e,{ease:Array.isArray(s)?s:xu(e,s)});return{calculatedDuration:t,next:l=>(o.value=a(l),o.done=l>=t,o)}}const bu=t=>{const e=({timestamp:i})=>t(i);return{start:()=>_.update(e,!0),stop:()=>Ie(e),now:()=>$.isProcessing?$.timestamp:ve.now()}},wu={decay:vs,inertia:vs,tween:si,keyframes:si,spring:Wo},Su=t=>t/100;class On extends Bo{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:i,motionValue:n,element:s,keyframes:o}=this.options,r=(s==null?void 0:s.KeyframeResolver)||Nn,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new r(o,a,i,n,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:i="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:o,velocity:r=0}=this.options,a=Sn(i)?i:wu[i]||si;let l,c;a!==si&&typeof e[0]!="number"&&(l=Ot(Su,Go(e[0],e[1])),e=[0,100]);const d=a({...this.options,keyframes:e});o==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-r})),d.calculatedDuration===null&&(d.calculatedDuration=oo(d));const{calculatedDuration:h}=d,f=h+s,m=f*(n+1)-s;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:f,totalDuration:m}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,i=!1){const{resolved:n}=this;if(!n){const{keyframes:N}=this.options;return{done:!0,value:N[N.length-1]}}const{finalKeyframe:s,generator:o,mirroredGenerator:r,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:d,resolvedDuration:h}=n;if(this.startTime===null)return o.next(0);const{delay:f,repeat:m,repeatType:x,repeatDelay:p,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-d/this.speed,this.startTime)),i?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const P=this.currentTime-f*(this.speed>=0?1:-1),C=this.speed>=0?P<0:P>d;this.currentTime=Math.max(P,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let T=this.currentTime,j=o;if(m){const N=Math.min(this.currentTime,d)/h;let I=Math.floor(N),G=N%1;!G&&N>=1&&(G=1),G===1&&I--,I=Math.min(I,m+1),!!(I%2)&&(x==="reverse"?(G=1-G,p&&(G-=p/h)):x==="mirror"&&(j=r)),T=Pe(0,1,G)*h}const k=C?{done:!1,value:l[0]}:j.next(T);a&&(k.value=a(k.value));let{done:D}=k;!C&&c!==null&&(D=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&D);return F&&s!==void 0&&(k.value=pi(l,this.options,s)),b&&b(k.value),F&&this.finish(),k}get duration(){const{resolved:e}=this;return e?Se(e.calculatedDuration):0}get time(){return Se(this.currentTime)}set time(e){e=we(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=Se(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=bu,onPlay:i,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),i&&i();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=n??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Pu=new Set(["opacity","clipPath","filter","transform"]);function Au(t,e,i,{delay:n=0,duration:s=300,repeat:o=0,repeatType:r="loop",ease:a="easeInOut",times:l}={}){const c={[e]:i};l&&(c.offset=l);const d=co(a,s);return Array.isArray(d)&&(c.easing=d),t.animate(c,{delay:n,duration:s,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:r==="reverse"?"alternate":"normal"})}const Tu=an(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ri=10,Cu=2e4;function ku(t){return Sn(t.type)||t.type==="spring"||!lo(t.ease)}function Eu(t,e){const i=new On({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let n={done:!1,value:t[0]};const s=[];let o=0;for(;!n.done&&o<Cu;)n=i.sample(o),s.push(n.value),o+=ri;return{times:void 0,keyframes:s,duration:o-ri,ease:"linear"}}const Ko={anticipate:So,backInOut:wo,circInOut:Ao};function ju(t){return t in Ko}class bs extends Bo{constructor(e){super(e);const{name:i,motionValue:n,element:s,keyframes:o}=this.options;this.resolver=new Fo(o,(r,a)=>this.onKeyframesResolved(r,a),i,n,s),this.resolver.scheduleResolve()}initPlayback(e,i){let{duration:n=300,times:s,ease:o,type:r,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof o=="string"&&ii()&&ju(o)&&(o=Ko[o]),ku(this.options)){const{onComplete:h,onUpdate:f,motionValue:m,element:x,...p}=this.options,b=Eu(e,p);e=b.keyframes,e.length===1&&(e[1]=e[0]),n=b.duration,s=b.times,o=b.ease,r="keyframes"}const d=Au(a.owner.current,l,e,{...this.options,duration:n,times:s,ease:o});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(ss(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:h}=this.options;a.set(pi(e,this.options,i)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:n,times:s,type:r,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:i}=e;return Se(i)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:i}=e;return Se(i.currentTime||0)}set time(e){const{resolved:i}=this;if(!i)return;const{animation:n}=i;n.currentTime=we(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:i}=e;return i.playbackRate}set speed(e){const{resolved:i}=this;if(!i)return;const{animation:n}=i;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:i}=e;return i.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:i}=e;return i.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:i}=this;if(!i)return se;const{animation:n}=i;ss(n,e)}return se}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:i,keyframes:n,duration:s,type:o,ease:r,times:a}=e;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:h,element:f,...m}=this.options,x=new On({...m,keyframes:n,duration:s,type:o,ease:r,times:a,isGenerator:!0}),p=we(this.time);c.setWithVelocity(x.sample(p-ri).value,x.sample(p).value,ri)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:i,name:n,repeatDelay:s,repeatType:o,damping:r,type:a}=e;if(!i||!i.owner||!(i.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=i.owner.getProps();return Tu()&&n&&Pu.has(n)&&!l&&!c&&!s&&o!=="mirror"&&r!==0&&a!=="inertia"}}const Ru={type:"spring",stiffness:500,damping:25,restSpeed:10},Iu=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Mu={type:"keyframes",duration:.8},Nu={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Du=(t,{keyframes:e})=>e.length>2?Mu:Ye.has(t)?t.startsWith("scale")?Iu(e[1]):Ru:Nu;function Ou({when:t,delay:e,delayChildren:i,staggerChildren:n,staggerDirection:s,repeat:o,repeatType:r,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const Vn=(t,e,i,n={},s,o)=>r=>{const a=wn(n,t)||{},l=a.delay||n.delay||0;let{elapsed:c=0}=n;c=c-we(l);let d={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{r(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:s};Ou(a)||(d={...d,...Du(t,d)}),d.duration&&(d.duration=we(d.duration)),d.repeatDelay&&(d.repeatDelay=we(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(h=!0)),h&&!o&&e.get()!==void 0){const f=pi(d.keyframes,a);if(f!==void 0)return _.update(()=>{d.onUpdate(f),d.onComplete()}),new ec([])}return!o&&bs.supports(d)?new bs(d):new On(d)};function Vu({protectedKeys:t,needsAnimating:e},i){const n=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,n}function Yo(t,e,{delay:i=0,transitionOverride:n,type:s}={}){var o;let{transition:r=t.getDefaultTransition(),transitionEnd:a,...l}=e;n&&(r=n);const c=[],d=s&&t.animationState&&t.animationState.getState()[s];for(const h in l){const f=t.getValue(h,(o=t.latestValues[h])!==null&&o!==void 0?o:null),m=l[h];if(m===void 0||d&&Vu(d,h))continue;const x={delay:i,...wn(r||{},h)};let p=!1;if(window.MotionHandoffAnimation){const P=go(t);if(P){const C=window.MotionHandoffAnimation(P,h,_);C!==null&&(x.startTime=C,p=!0)}}Fi(t,h),f.start(Vn(h,f,m,t.shouldReduceMotion&&mo.has(h)?{type:!1}:x,t,p));const b=f.animation;b&&c.push(b)}return a&&Promise.all(c).then(()=>{_.update(()=>{a&&mc(t,a)})}),c}function Ki(t,e,i={}){var n;const s=mi(t,e,i.type==="exit"?(n=t.presenceContext)===null||n===void 0?void 0:n.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=s||{};i.transitionOverride&&(o=i.transitionOverride);const r=s?()=>Promise.all(Yo(t,s,i)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=o;return Lu(t,e,d+c,h,f,i)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,d]=l==="beforeChildren"?[r,a]:[a,r];return c().then(()=>d())}else return Promise.all([r(),a(i.delay)])}function Lu(t,e,i=0,n=0,s=1,o){const r=[],a=(t.variantChildren.size-1)*n,l=s===1?(c=0)=>c*n:(c=0)=>a-c*n;return Array.from(t.variantChildren).sort(Fu).forEach((c,d)=>{c.notify("AnimationStart",e),r.push(Ki(c,e,{...o,delay:i+l(d)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(r)}function Fu(t,e){return t.sortNodePosition(e)}function Bu(t,e,i={}){t.notify("AnimationStart",e);let n;if(Array.isArray(e)){const s=e.map(o=>Ki(t,o,i));n=Promise.all(s)}else if(typeof e=="string")n=Ki(t,e,i);else{const s=typeof e=="function"?mi(t,e,i.custom):e;n=Promise.all(Yo(t,s,i))}return n.then(()=>{t.notify("AnimationComplete",e)})}const _u=cn.length;function zo(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?zo(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<_u;i++){const n=cn[i],s=t.props[n];(Ct(s)||s===!1)&&(e[n]=s)}return e}const Gu=[...ln].reverse(),Uu=ln.length;function Wu(t){return e=>Promise.all(e.map(({animation:i,options:n})=>Bu(t,i,n)))}function qu(t){let e=Wu(t),i=ws(),n=!0;const s=l=>(c,d)=>{var h;const f=mi(t,d,l==="exit"?(h=t.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(f){const{transition:m,transitionEnd:x,...p}=f;c={...c,...p,...x}}return c};function o(l){e=l(t)}function r(l){const{props:c}=t,d=zo(t.parent)||{},h=[],f=new Set;let m={},x=1/0;for(let b=0;b<Uu;b++){const P=Gu[b],C=i[P],T=c[P]!==void 0?c[P]:d[P],j=Ct(T),k=P===l?C.isActive:null;k===!1&&(x=b);let D=T===d[P]&&T!==c[P]&&j;if(D&&n&&t.manuallyAnimateOnMount&&(D=!1),C.protectedKeys={...m},!C.isActive&&k===null||!T&&!C.prevProp||hi(T)||typeof T=="boolean")continue;const F=Ku(C.prevProp,T);let N=F||P===l&&C.isActive&&!D&&j||b>x&&j,I=!1;const G=Array.isArray(T)?T:[T];let ce=G.reduce(s(P),{});k===!1&&(ce={});const{prevResolvedValues:ft={}}=C,gi={...ft,...ce},A=v=>{N=!0,f.has(v)&&(I=!0,f.delete(v)),C.needsAnimating[v]=!0;const E=t.getValue(v);E&&(E.liveStyle=!1)};for(const v in gi){const E=ce[v],R=ft[v];if(m.hasOwnProperty(v))continue;let B=!1;Oi(E)&&Oi(R)?B=!ro(E,R):B=E!==R,B?E!=null?A(v):f.add(v):E!==void 0&&f.has(v)?A(v):C.protectedKeys[v]=!0}C.prevProp=T,C.prevResolvedValues=ce,C.isActive&&(m={...m,...ce}),n&&t.blockInitialAnimation&&(N=!1),N&&(!(D&&F)||I)&&h.push(...G.map(v=>({animation:v,options:{type:P}})))}if(f.size){const b={};f.forEach(P=>{const C=t.getBaseTarget(P),T=t.getValue(P);T&&(T.liveStyle=!0),b[P]=C??null}),h.push({animation:b})}let p=!!h.length;return n&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(p=!1),n=!1,p?e(h):Promise.resolve()}function a(l,c){var d;if(i[l].isActive===c)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(f=>{var m;return(m=f.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),i[l].isActive=c;const h=r(l);for(const f in i)i[f].protectedKeys={};return h}return{animateChanges:r,setActive:a,setAnimateFunction:o,getState:()=>i,reset:()=>{i=ws(),n=!0}}}function Ku(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!ro(e,t):!1}function De(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ws(){return{animate:De(!0),whileInView:De(),whileHover:De(),whileTap:De(),whileDrag:De(),whileFocus:De(),exit:De()}}class Ne{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Yu extends Ne{constructor(e){super(e),e.animationState||(e.animationState=qu(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();hi(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let zu=0;class Hu extends Ne{constructor(){super(...arguments),this.id=zu++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const s=this.node.animationState.setActive("exit",!e);i&&!e&&s.then(()=>i(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const $u={animation:{Feature:Yu},exit:{Feature:Hu}};function Rt(t,e,i,n={passive:!0}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i)}function Vt(t){return{point:{x:t.pageX,y:t.pageY}}}const Qu=t=>e=>An(e)&&t(e,Vt(e));function wt(t,e,i,n){return Rt(t,e,Qu(i),n)}const Ss=(t,e)=>Math.abs(t-e);function Xu(t,e){const i=Ss(t.x,e.x),n=Ss(t.y,e.y);return Math.sqrt(i**2+n**2)}class Ho{constructor(e,i,{transformPagePoint:n,contextWindow:s,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=ki(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,m=Xu(h.offset,{x:0,y:0})>=3;if(!f&&!m)return;const{point:x}=h,{timestamp:p}=$;this.history.push({...x,timestamp:p});const{onStart:b,onMove:P}=this.handlers;f||(b&&b(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Ci(f,this.transformPagePoint),_.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:m,onSessionEnd:x,resumeAnimation:p}=this.handlers;if(this.dragSnapToOrigin&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=ki(h.type==="pointercancel"?this.lastMoveEventInfo:Ci(f,this.transformPagePoint),this.history);this.startEvent&&m&&m(h,b),x&&x(h,b)},!An(e))return;this.dragSnapToOrigin=o,this.handlers=i,this.transformPagePoint=n,this.contextWindow=s||window;const r=Vt(e),a=Ci(r,this.transformPagePoint),{point:l}=a,{timestamp:c}=$;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=i;d&&d(e,ki(a,this.history)),this.removeListeners=Ot(wt(this.contextWindow,"pointermove",this.handlePointerMove),wt(this.contextWindow,"pointerup",this.handlePointerUp),wt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ie(this.updatePoint)}}function Ci(t,e){return e?{point:e(t.point)}:t}function Ps(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ki({point:t},e){return{point:t,delta:Ps(t,$o(e)),offset:Ps(t,Zu(e)),velocity:Ju(e,.1)}}function Zu(t){return t[0]}function $o(t){return t[t.length-1]}function Ju(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,n=null;const s=$o(t);for(;i>=0&&(n=t[i],!(s.timestamp-n.timestamp>we(e)));)i--;if(!n)return{x:0,y:0};const o=Se(s.timestamp-n.timestamp);if(o===0)return{x:0,y:0};const r={x:(s.x-n.x)/o,y:(s.y-n.y)/o};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}const Qo=1e-4,ed=1-Qo,td=1+Qo,Xo=.01,id=0-Xo,nd=0+Xo;function re(t){return t.max-t.min}function sd(t,e,i){return Math.abs(t-e)<=i}function As(t,e,i,n=.5){t.origin=n,t.originPoint=U(e.min,e.max,t.origin),t.scale=re(i)/re(e),t.translate=U(i.min,i.max,t.origin)-t.originPoint,(t.scale>=ed&&t.scale<=td||isNaN(t.scale))&&(t.scale=1),(t.translate>=id&&t.translate<=nd||isNaN(t.translate))&&(t.translate=0)}function St(t,e,i,n){As(t.x,e.x,i.x,n?n.originX:void 0),As(t.y,e.y,i.y,n?n.originY:void 0)}function Ts(t,e,i){t.min=i.min+e.min,t.max=t.min+re(e)}function rd(t,e,i){Ts(t.x,e.x,i.x),Ts(t.y,e.y,i.y)}function Cs(t,e,i){t.min=e.min-i.min,t.max=t.min+re(e)}function Pt(t,e,i){Cs(t.x,e.x,i.x),Cs(t.y,e.y,i.y)}function od(t,{min:e,max:i},n){return e!==void 0&&t<e?t=n?U(e,t,n.min):Math.max(t,e):i!==void 0&&t>i&&(t=n?U(i,t,n.max):Math.min(t,i)),t}function ks(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function ad(t,{top:e,left:i,bottom:n,right:s}){return{x:ks(t.x,i,s),y:ks(t.y,e,n)}}function Es(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function ld(t,e){return{x:Es(t.x,e.x),y:Es(t.y,e.y)}}function cd(t,e){let i=.5;const n=re(t),s=re(e);return s>n?i=lt(e.min,e.max-n,t.min):n>s&&(i=lt(t.min,t.max-s,e.min)),Pe(0,1,i)}function ud(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const Yi=.35;function dd(t=Yi){return t===!1?t=0:t===!0&&(t=Yi),{x:js(t,"left","right"),y:js(t,"top","bottom")}}function js(t,e,i){return{min:Rs(t,e),max:Rs(t,i)}}function Rs(t,e){return typeof t=="number"?t:t[e]||0}const Is=()=>({translate:0,scale:1,origin:0,originPoint:0}),$e=()=>({x:Is(),y:Is()}),Ms=()=>({min:0,max:0}),Y=()=>({x:Ms(),y:Ms()});function ae(t){return[t("x"),t("y")]}function Zo({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function hd({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function fd(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function Ei(t){return t===void 0||t===1}function zi({scale:t,scaleX:e,scaleY:i}){return!Ei(t)||!Ei(e)||!Ei(i)}function Oe(t){return zi(t)||Jo(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Jo(t){return Ns(t.x)||Ns(t.y)}function Ns(t){return t&&t!=="0%"}function oi(t,e,i){const n=t-i,s=e*n;return i+s}function Ds(t,e,i,n,s){return s!==void 0&&(t=oi(t,s,n)),oi(t,i,n)+e}function Hi(t,e=0,i=1,n,s){t.min=Ds(t.min,e,i,n,s),t.max=Ds(t.max,e,i,n,s)}function ea(t,{x:e,y:i}){Hi(t.x,e.translate,e.scale,e.originPoint),Hi(t.y,i.translate,i.scale,i.originPoint)}const Os=.999999999999,Vs=1.0000000000001;function md(t,e,i,n=!1){const s=i.length;if(!s)return;e.x=e.y=1;let o,r;for(let a=0;a<s;a++){o=i[a],r=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Xe(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,ea(t,r)),n&&Oe(o.latestValues)&&Xe(t,o.latestValues))}e.x<Vs&&e.x>Os&&(e.x=1),e.y<Vs&&e.y>Os&&(e.y=1)}function Qe(t,e){t.min=t.min+e,t.max=t.max+e}function Ls(t,e,i,n,s=.5){const o=U(t.min,t.max,s);Hi(t,e,i,o,n)}function Xe(t,e){Ls(t.x,e.x,e.scaleX,e.scale,e.originX),Ls(t.y,e.y,e.scaleY,e.scale,e.originY)}function ta(t,e){return Zo(fd(t.getBoundingClientRect(),e))}function pd(t,e,i){const n=ta(t,i),{scroll:s}=e;return s&&(Qe(n.x,s.offset.x),Qe(n.y,s.offset.y)),n}const ia=({current:t})=>t?t.ownerDocument.defaultView:null,gd=new WeakMap;class yd{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Y(),this.visualElement=e}start(e,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const s=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Vt(d).point)},o=(d,h)=>{const{drag:f,dragPropagation:m,onDragStart:x}=this.getProps();if(f&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=cc(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ae(b=>{let P=this.getAxisMotionValue(b).get()||0;if(ye.test(P)){const{projection:C}=this.visualElement;if(C&&C.layout){const T=C.layout.layoutBox[b];T&&(P=re(T)*(parseFloat(P)/100))}}this.originPoint[b]=P}),x&&_.postRender(()=>x(d,h)),Fi(this.visualElement,"transform");const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},r=(d,h)=>{const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:x,onDrag:p}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:b}=h;if(m&&this.currentDirection===null){this.currentDirection=vd(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",h.point,b),this.updateAxis("y",h.point,b),this.visualElement.render(),p&&p(d,h)},a=(d,h)=>this.stop(d,h),l=()=>ae(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ho(e,{onSessionStart:s,onStart:o,onMove:r,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:ia(this.visualElement)})}stop(e,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:o}=this.getProps();o&&_.postRender(()=>o(e,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,n){const{drag:s}=this.getProps();if(!n||!qt(e,s,this.currentDirection))return;const o=this.getAxisMotionValue(e);let r=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(r=od(r,this.constraints[e],this.elastic[e])),o.set(r)}resolveConstraints(){var e;const{dragConstraints:i,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,o=this.constraints;i&&ze(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=ad(s.layoutBox,i):this.constraints=!1,this.elastic=dd(n),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&ae(r=>{this.constraints!==!1&&this.getAxisMotionValue(r)&&(this.constraints[r]=ud(s.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!ze(e))return!1;const n=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const o=pd(n,s.root,this.visualElement.getTransformPagePoint());let r=ld(s.layout.layoutBox,o);if(i){const a=i(hd(r));this.hasMutatedConstraints=!!a,a&&(r=Zo(a))}return r}startAnimation(e){const{drag:i,dragMomentum:n,dragElastic:s,dragTransition:o,dragSnapToOrigin:r,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ae(d=>{if(!qt(d,i,this.currentDirection))return;let h=l&&l[d]||{};r&&(h={min:0,max:0});const f=s?200:1e6,m=s?40:1e7,x={type:"inertia",velocity:n?e[d]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(d,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,i){const n=this.getAxisMotionValue(e);return Fi(this.visualElement,e),n.start(Vn(e,n,0,i,this.visualElement,!1))}stopAnimation(){ae(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ae(e=>{var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),s=n[i];return s||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ae(i=>{const{drag:n}=this.getProps();if(!qt(i,n,this.currentDirection))return;const{projection:s}=this.visualElement,o=this.getAxisMotionValue(i);if(s&&s.layout){const{min:r,max:a}=s.layout.layoutBox[i];o.set(e[i]-U(r,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!ze(i)||!n||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};ae(r=>{const a=this.getAxisMotionValue(r);if(a&&this.constraints!==!1){const l=a.get();s[r]=cd({min:l,max:l},this.constraints[r])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ae(r=>{if(!qt(r,e,null))return;const a=this.getAxisMotionValue(r),{min:l,max:c}=this.constraints[r];a.set(U(l,c,s[r]))})}addListeners(){if(!this.visualElement.current)return;gd.set(this.visualElement,this);const e=this.visualElement.current,i=wt(e,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),n=()=>{const{dragConstraints:l}=this.getProps();ze(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,o=s.addEventListener("measure",n);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),_.read(n);const r=Rt(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(ae(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=l[d].translate,h.set(h.get()+l[d].translate))}),this.visualElement.render())});return()=>{r(),i(),o(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:s=!1,dragConstraints:o=!1,dragElastic:r=Yi,dragMomentum:a=!0}=e;return{...e,drag:i,dragDirectionLock:n,dragPropagation:s,dragConstraints:o,dragElastic:r,dragMomentum:a}}}function qt(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function vd(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class xd extends Ne{constructor(e){super(e),this.removeGroupControls=se,this.removeListeners=se,this.controls=new yd(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||se}unmount(){this.removeGroupControls(),this.removeListeners()}}const Fs=t=>(e,i)=>{t&&_.postRender(()=>t(e,i))};class bd extends Ne{constructor(){super(...arguments),this.removePointerDownListener=se}onPointerDown(e){this.session=new Ho(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ia(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:n,onPanEnd:s}=this.node.getProps();return{onSessionStart:Fs(e),onStart:Fs(i),onMove:n,onEnd:(o,r)=>{delete this.session,s&&_.postRender(()=>s(o,r))}}}mount(){this.removePointerDownListener=wt(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Xt={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Bs(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const mt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(M.test(t))t=parseFloat(t);else return t;const i=Bs(t,e.target.x),n=Bs(t,e.target.y);return`${i}% ${n}%`}},wd={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,s=Me.parse(t);if(s.length>5)return n;const o=Me.createTransformer(t),r=typeof s[0]!="number"?1:0,a=i.x.scale*e.x,l=i.y.scale*e.y;s[0+r]/=a,s[1+r]/=l;const c=U(a,l,.5);return typeof s[2+r]=="number"&&(s[2+r]/=c),typeof s[3+r]=="number"&&(s[3+r]/=c),o(s)}};class Sd extends w.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n,layoutId:s}=this.props,{projection:o}=e;Ul(Pd),o&&(i.group&&i.group.add(o),n&&n.register&&s&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Xt.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:n,drag:s,isPresent:o}=this.props,r=n.projection;return r&&(r.isPresent=o,s||e.layoutDependency!==i||i===void 0?r.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?r.promote():r.relegate()||_.postRender(()=>{const a=r.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),dn.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(s),n&&n.deregister&&n.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function na(t){const[e,i]=Lr(),n=w.useContext(nn);return u.jsx(Sd,{...t,layoutGroup:n,switchLayoutGroup:w.useContext(Yr),isPresent:e,safeToRemove:i})}const Pd={borderRadius:{...mt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mt,borderTopRightRadius:mt,borderBottomLeftRadius:mt,borderBottomRightRadius:mt,boxShadow:wd};function Ad(t,e,i){const n=J(t)?t:Et(t);return n.start(Vn("",n,e,i)),n.animation}function Td(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Cd=(t,e)=>t.depth-e.depth;class kd{constructor(){this.children=[],this.isDirty=!1}add(e){Tn(this.children,e),this.isDirty=!0}remove(e){Cn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Cd),this.isDirty=!1,this.children.forEach(e)}}function Ed(t,e){const i=ve.now(),n=({timestamp:s})=>{const o=s-i;o>=e&&(Ie(n),t(o-e))};return _.read(n,!0),()=>Ie(n)}const sa=["TopLeft","TopRight","BottomLeft","BottomRight"],jd=sa.length,_s=t=>typeof t=="string"?parseFloat(t):t,Gs=t=>typeof t=="number"||M.test(t);function Rd(t,e,i,n,s,o){s?(t.opacity=U(0,i.opacity!==void 0?i.opacity:1,Id(n)),t.opacityExit=U(e.opacity!==void 0?e.opacity:1,0,Md(n))):o&&(t.opacity=U(e.opacity!==void 0?e.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let r=0;r<jd;r++){const a=`border${sa[r]}Radius`;let l=Us(e,a),c=Us(i,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Gs(l)===Gs(c)?(t[a]=Math.max(U(_s(l),_s(c),n),0),(ye.test(c)||ye.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||i.rotate)&&(t.rotate=U(e.rotate||0,i.rotate||0,n))}function Us(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Id=ra(0,.5,Po),Md=ra(.5,.95,se);function ra(t,e,i){return n=>n<t?0:n>e?1:i(lt(t,e,n))}function Ws(t,e){t.min=e.min,t.max=e.max}function oe(t,e){Ws(t.x,e.x),Ws(t.y,e.y)}function qs(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Ks(t,e,i,n,s){return t-=e,t=oi(t,1/i,n),s!==void 0&&(t=oi(t,1/s,n)),t}function Nd(t,e=0,i=1,n=.5,s,o=t,r=t){if(ye.test(e)&&(e=parseFloat(e),e=U(r.min,r.max,e/100)-r.min),typeof e!="number")return;let a=U(o.min,o.max,n);t===o&&(a-=e),t.min=Ks(t.min,e,i,a,s),t.max=Ks(t.max,e,i,a,s)}function Ys(t,e,[i,n,s],o,r){Nd(t,e[i],e[n],e[s],e.scale,o,r)}const Dd=["x","scaleX","originX"],Od=["y","scaleY","originY"];function zs(t,e,i,n){Ys(t.x,e,Dd,i?i.x:void 0,n?n.x:void 0),Ys(t.y,e,Od,i?i.y:void 0,n?n.y:void 0)}function Hs(t){return t.translate===0&&t.scale===1}function oa(t){return Hs(t.x)&&Hs(t.y)}function $s(t,e){return t.min===e.min&&t.max===e.max}function Vd(t,e){return $s(t.x,e.x)&&$s(t.y,e.y)}function Qs(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function aa(t,e){return Qs(t.x,e.x)&&Qs(t.y,e.y)}function Xs(t){return re(t.x)/re(t.y)}function Zs(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Ld{constructor(){this.members=[]}add(e){Tn(this.members,e),e.scheduleRender()}remove(e){if(Cn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(s=>e===s);if(i===0)return!1;let n;for(let s=i;s>=0;s--){const o=this.members[s];if(o.isPresent!==!1){n=o;break}}return n?(this.promote(n),!0):!1}promote(e,i){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,i&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:n}=e;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Fd(t,e,i){let n="";const s=t.x.translate/e.x,o=t.y.translate/e.y,r=(i==null?void 0:i.z)||0;if((s||o||r)&&(n=`translate3d(${s}px, ${o}px, ${r}px) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:c,rotate:d,rotateX:h,rotateY:f,skewX:m,skewY:x}=i;c&&(n=`perspective(${c}px) ${n}`),d&&(n+=`rotate(${d}deg) `),h&&(n+=`rotateX(${h}deg) `),f&&(n+=`rotateY(${f}deg) `),m&&(n+=`skewX(${m}deg) `),x&&(n+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(n+=`scale(${a}, ${l})`),n||"none"}const Ve={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},xt=typeof window<"u"&&window.MotionDebug!==void 0,ji=["","X","Y","Z"],Bd={visibility:"hidden"},Js=1e3;let _d=0;function Ri(t,e,i,n){const{latestValues:s}=e;s[t]&&(i[t]=s[t],e.setStaticValue(t,0),n&&(n[t]=0))}function la(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=go(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:s,layoutId:o}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",_,!(s||o))}const{parent:n}=t;n&&!n.hasCheckedOptimisedAppear&&la(n)}function ca({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:s}){return class{constructor(r={},a=e==null?void 0:e()){this.id=_d++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xt&&(Ve.totalNodes=Ve.resolvedTargetDeltas=Ve.recalculatedProjection=0),this.nodes.forEach(Wd),this.nodes.forEach(Hd),this.nodes.forEach($d),this.nodes.forEach(qd),xt&&window.MotionDebug.record(Ve)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new kd)}addEventListener(r,a){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new kn),this.eventHandlers.get(r).add(a)}notifyListeners(r,...a){const l=this.eventHandlers.get(r);l&&l.notify(...a)}hasListeners(r){return this.eventHandlers.has(r)}mount(r,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Td(r),this.instance=r;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const f=()=>this.root.updateBlockedByResize=!1;t(r,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=Ed(f,250),Xt.hasAnimatedSinceResize&&(Xt.hasAnimatedSinceResize=!1,this.nodes.forEach(tr))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:m,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||d.getDefaultTransition()||eh,{onLayoutAnimationStart:b,onLayoutAnimationComplete:P}=d.getProps(),C=!this.targetLayout||!aa(this.targetLayout,x)||m,T=!f&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||T||f&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,T);const j={...wn(p,"layout"),onPlay:b,onComplete:P};(d.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j)}else f||tr(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ie(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Qd),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&la(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(er);return}this.isUpdating||this.nodes.forEach(Yd),this.isUpdating=!1,this.nodes.forEach(zd),this.nodes.forEach(Gd),this.nodes.forEach(Ud),this.clearAllSnapshots();const a=ve.now();$.delta=Pe(0,1e3/60,a-$.timestamp),$.timestamp=a,$.isProcessing=!0,bi.update.process($),bi.preRender.process($),bi.render.process($),$.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,dn.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Kd),this.sharedNodes.forEach(Xd)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Y(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(a=!1),a){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:r,isRoot:l,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const r=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!oa(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;r&&(a||Oe(this.latestValues)||d)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return r&&(l=this.removeTransform(l)),th(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var r;const{visualElement:a}=this.options;if(!a)return Y();const l=a.measureViewportBox();if(!(((r=this.scroll)===null||r===void 0?void 0:r.wasRoot)||this.path.some(ih))){const{scroll:d}=this.root;d&&(Qe(l.x,d.offset.x),Qe(l.y,d.offset.y))}return l}removeElementScroll(r){var a;const l=Y();if(oe(l,r),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&oe(l,r),Qe(l.x,h.offset.x),Qe(l.y,h.offset.y))}return l}applyTransform(r,a=!1){const l=Y();oe(l,r);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Xe(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Oe(d.latestValues)&&Xe(l,d.latestValues)}return Oe(this.latestValues)&&Xe(l,this.latestValues),l}removeTransform(r){const a=Y();oe(a,r);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Oe(c.latestValues))continue;zi(c.latestValues)&&c.updateSnapshot();const d=Y(),h=c.measurePageBox();oe(d,h),zs(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Oe(this.latestValues)&&zs(a,this.latestValues),a}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(r||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=$.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),Pt(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Y(),this.targetWithTransforms=Y()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rd(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):oe(this.target,this.layout.layoutBox),ea(this.target,this.targetDelta)):oe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),Pt(this.relativeTargetOrigin,this.target,m.target),oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}xt&&Ve.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||zi(this.parent.latestValues)||Jo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var r;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((r=this.parent)===null||r===void 0)&&r.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===$.timestamp&&(c=!1),c)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;oe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,m=this.treeScale.y;md(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Y());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(qs(this.prevProjectionDelta.x,this.projectionDelta.x),qs(this.prevProjectionDelta.y,this.projectionDelta.y)),St(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==m||!Zs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Zs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),xt&&Ve.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),r){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=$e(),this.projectionDelta=$e(),this.projectionDeltaWithTransform=$e()}setAnimationOrigin(r,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},h=$e();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Y(),m=l?l.source:void 0,x=this.layout?this.layout.source:void 0,p=m!==x,b=this.getStack(),P=!b||b.members.length<=1,C=!!(p&&!P&&this.options.crossfade===!0&&!this.path.some(Jd));this.animationProgress=0;let T;this.mixTargetDelta=j=>{const k=j/1e3;ir(h.x,r.x,k),ir(h.y,r.y,k),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pt(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Zd(this.relativeTarget,this.relativeTargetOrigin,f,k),T&&Vd(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=Y()),oe(T,this.relativeTarget)),p&&(this.animationValues=d,Rd(d,c,this.latestValues,k,C,P)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ie(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_.update(()=>{Xt.hasAnimatedSinceResize=!0,this.currentAnimation=Ad(0,Js,{...r,onUpdate:a=>{this.mixTargetDelta(a),r.onUpdate&&r.onUpdate(a)},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Js),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=r;if(!(!a||!l||!c)){if(this!==r&&this.layout&&c&&ua(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Y();const h=re(this.layout.layoutBox.x);l.x.min=r.target.x.min,l.x.max=l.x.min+h;const f=re(this.layout.layoutBox.y);l.y.min=r.target.y.min,l.y.max=l.y.min+f}oe(a,l),Xe(a,d),St(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(r,a){this.sharedNodes.has(r)||this.sharedNodes.set(r,new Ld),this.sharedNodes.get(r).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){var r;const{layoutId:a}=this.options;return a?((r=this.getStack())===null||r===void 0?void 0:r.lead)||this:this}getPrevLead(){var r;const{layoutId:a}=this.options;return a?(r=this.getStack())===null||r===void 0?void 0:r.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),r&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetSkewAndRotation(){const{visualElement:r}=this.options;if(!r)return;let a=!1;const{latestValues:l}=r;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Ri("z",r,c,this.animationValues);for(let d=0;d<ji.length;d++)Ri(`rotate${ji[d]}`,r,c,this.animationValues),Ri(`skew${ji[d]}`,r,c,this.animationValues);r.render();for(const d in c)r.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);r.scheduleRender()}getProjectionStyles(r){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Bd;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=$t(r==null?void 0:r.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=$t(r==null?void 0:r.pointerEvents)||""),this.hasProjected&&!Oe(this.latestValues)&&(p.transform=d?d({},""):"none",this.hasProjected=!1),p}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=Fd(this.projectionDeltaWithTransform,this.treeScale,f),d&&(c.transform=d(f,c.transform));const{x:m,y:x}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${x.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const p in ti){if(f[p]===void 0)continue;const{correct:b,applyTo:P}=ti[p],C=c.transform==="none"?f[p]:b(f[p],h);if(P){const T=P.length;for(let j=0;j<T;j++)c[P[j]]=C}else c[p]=C}return this.options.layoutId&&(c.pointerEvents=h===this?$t(r==null?void 0:r.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>{var a;return(a=r.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(er),this.root.sharedNodes.clear()}}}function Gd(t){t.updateLayout()}function Ud(t){var e;const i=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=t.layout,{animationType:o}=t.options,r=i.source!==t.layout.source;o==="size"?ae(h=>{const f=r?i.measuredBox[h]:i.layoutBox[h],m=re(f);f.min=n[h].min,f.max=f.min+m}):ua(o,i.layoutBox,n)&&ae(h=>{const f=r?i.measuredBox[h]:i.layoutBox[h],m=re(n[h]);f.max=f.min+m,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+m)});const a=$e();St(a,n,i.layoutBox);const l=$e();r?St(l,t.applyTransform(s,!0),i.measuredBox):St(l,n,i.layoutBox);const c=!oa(a);let d=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:m}=h;if(f&&m){const x=Y();Pt(x,i.layoutBox,f.layoutBox);const p=Y();Pt(p,n,m.layoutBox),aa(x,p)||(d=!0),h.options.layoutRoot&&(t.relativeTarget=p,t.relativeTargetOrigin=x,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function Wd(t){xt&&Ve.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function qd(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Kd(t){t.clearSnapshot()}function er(t){t.clearMeasurements()}function Yd(t){t.isLayoutDirty=!1}function zd(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function tr(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Hd(t){t.resolveTargetDelta()}function $d(t){t.calcProjection()}function Qd(t){t.resetSkewAndRotation()}function Xd(t){t.removeLeadSnapshot()}function ir(t,e,i){t.translate=U(e.translate,0,i),t.scale=U(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function nr(t,e,i,n){t.min=U(e.min,i.min,n),t.max=U(e.max,i.max,n)}function Zd(t,e,i,n){nr(t.x,e.x,i.x,n),nr(t.y,e.y,i.y,n)}function Jd(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const eh={duration:.45,ease:[.4,0,.1,1]},sr=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),rr=sr("applewebkit/")&&!sr("chrome/")?Math.round:se;function or(t){t.min=rr(t.min),t.max=rr(t.max)}function th(t){or(t.x),or(t.y)}function ua(t,e,i){return t==="position"||t==="preserve-aspect"&&!sd(Xs(e),Xs(i),.2)}function ih(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const nh=ca({attachResizeListener:(t,e)=>Rt(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ii={current:void 0},da=ca({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ii.current){const t=new nh({});t.mount(window),t.setOptions({layoutScroll:!0}),Ii.current=t}return Ii.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),sh={pan:{Feature:bd},drag:{Feature:xd,ProjectionNode:da,MeasureLayout:na}};function ar(t,e,i){const{props:n}=t;t.animationState&&n.whileHover&&t.animationState.setActive("whileHover",i==="Start");const s="onHover"+i,o=n[s];o&&_.postRender(()=>o(e,Vt(e)))}class rh extends Ne{mount(){const{current:e}=this.node;e&&(this.unmount=sc(e,i=>(ar(this.node,i,"Start"),n=>ar(this.node,n,"End"))))}unmount(){}}class oh extends Ne{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ot(Rt(this.node.current,"focus",()=>this.onFocus()),Rt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function lr(t,e,i){const{props:n}=t;t.animationState&&n.whileTap&&t.animationState.setActive("whileTap",i==="Start");const s="onTap"+(i==="End"?"":i),o=n[s];o&&_.postRender(()=>o(e,Vt(e)))}class ah extends Ne{mount(){const{current:e}=this.node;e&&(this.unmount=lc(e,i=>(lr(this.node,i,"Start"),(n,{success:s})=>lr(this.node,n,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const $i=new WeakMap,Mi=new WeakMap,lh=t=>{const e=$i.get(t.target);e&&e(t)},ch=t=>{t.forEach(lh)};function uh({root:t,...e}){const i=t||document;Mi.has(i)||Mi.set(i,{});const n=Mi.get(i),s=JSON.stringify(e);return n[s]||(n[s]=new IntersectionObserver(ch,{root:t,...e})),n[s]}function dh(t,e,i){const n=uh(e);return $i.set(t,i),n.observe(t),()=>{$i.delete(t),n.unobserve(t)}}const hh={some:0,all:1};class fh extends Ne{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:n,amount:s="some",once:o}=e,r={root:i?i.current:void 0,rootMargin:n,threshold:typeof s=="number"?s:hh[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=c?d:h;f&&f(l)};return dh(this.node.current,r,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(mh(e,i))&&this.startObserver()}unmount(){}}function mh({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const ph={inView:{Feature:fh},tap:{Feature:ah},focus:{Feature:oh},hover:{Feature:rh}},gh={layout:{ProjectionNode:da,MeasureLayout:na}},Qi={current:null},ha={current:!1};function yh(){if(ha.current=!0,!!on)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Qi.current=t.matches;t.addListener(e),e()}else Qi.current=!1}const vh=[...Lo,Z,Me],xh=t=>vh.find(Vo(t)),cr=new WeakMap;function bh(t,e,i){for(const n in e){const s=e[n],o=i[n];if(J(s))t.addValue(n,s);else if(J(o))t.addValue(n,Et(s,{owner:t}));else if(o!==s)if(t.hasValue(n)){const r=t.getValue(n);r.liveStyle===!0?r.jump(s):r.hasAnimated||r.set(s)}else{const r=t.getStaticValue(n);t.addValue(n,Et(r!==void 0?r:s,{owner:t}))}}for(const n in i)e[n]===void 0&&t.removeValue(n);return e}const ur=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class wh{scrapeMotionValuesFromProps(e,i,n){return{}}constructor({parent:e,props:i,presenceContext:n,reducedMotionConfig:s,blockInitialAnimation:o,visualState:r},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Nn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=ve.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,_.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:d}=r;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=i.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=i,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=fi(i),this.isVariantNode=qr(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(i,{},this);for(const m in f){const x=f[m];l[m]!==void 0&&J(x)&&x.set(l[m],!1)}}mount(e){this.current=e,cr.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),ha.current||yh(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qi.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){cr.delete(this.current),this.projection&&this.projection.unmount(),Ie(this.notifyUpdate),Ie(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const i=this.features[e];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Ye.has(e),s=i.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&_.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),o=i.on("renderRequest",this.scheduleRender);let r;window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{s(),o(),r&&r(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ct){const i=ct[e];if(!i)continue;const{isEnabled:n,Feature:s}=i;if(!this.features[e]&&s&&n(this.props)&&(this.features[e]=new s(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Y()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<ur.length;n++){const s=ur[n];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const o="on"+s,r=e[o];r&&(this.propEventSubscriptions[s]=this.on(s,r))}this.prevMotionValues=bh(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const n=this.values.get(e);i!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&i!==void 0&&(n=Et(i===null?void 0:i,{owner:this}),this.addValue(e,n)),n}readValue(e,i){var n;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Do(s)||To(s))?s=parseFloat(s):!xh(s)&&Me.test(i)&&(s=Io(e,i)),this.setBaseTarget(e,J(s)?s.get():s)),J(s)?s.get():s}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var i;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const r=fn(this.props,n,(i=this.presenceContext)===null||i===void 0?void 0:i.custom);r&&(s=r[e])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!J(o)?o:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new kn),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}}class fa extends wh{constructor(){super(...arguments),this.KeyframeResolver=Fo}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:n}){delete i[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;J(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function Sh(t){return window.getComputedStyle(t)}class Ph extends fa{constructor(){super(...arguments),this.type="html",this.renderInstance=Jr}readValueFromInstance(e,i){if(Ye.has(i)){const n=Mn(i);return n&&n.default||0}else{const n=Sh(e),s=(Qr(i)?n.getPropertyValue(i):n[i])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:i}){return ta(e,i)}build(e,i,n){gn(e,i,n.transformTemplate)}scrapeMotionValuesFromProps(e,i,n){return bn(e,i,n)}}class Ah extends fa{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Y}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Ye.has(i)){const n=Mn(i);return n&&n.default||0}return i=eo.has(i)?i:un(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,n){return no(e,i,n)}build(e,i,n){yn(e,i,this.isSVGTag,n.transformTemplate)}renderInstance(e,i,n,s){to(e,i,n,s)}mount(e){this.isSVGTag=xn(e.tagName),super.mount(e)}}const Th=(t,e)=>hn(t)?new Ah(e):new Ph(e,{allowProjection:t!==w.Fragment}),Ch=Xl({...$u,...ph,...sh,...gh},Th),L=hl(Ch),Je=w.forwardRef(({className:t,variant:e="default",size:i="md",loading:n=!1,fullWidth:s=!1,children:o,disabled:r,...a},l)=>{const c="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",d={default:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",primary:"bg-primary text-primary-foreground hover:bg-primary/90"},h={sm:"h-9 px-3 text-sm rounded-md",md:"h-10 px-4 py-2 rounded-md",lg:"h-11 px-8 rounded-md"};return u.jsx("button",{ref:l,className:Ji(c,d[e],h[i],s&&"w-full",t),disabled:r||n,...a,children:n?u.jsxs("div",{className:"flex items-center",children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Loading..."]}):o})});Je.displayName="Button";const kh=()=>{const[t,e]=w.useState(!1),[i,n]=w.useState(!1),[s,o]=w.useState({necessary:!0,analytics:!1,functional:!1});w.useEffect(()=>{const c=localStorage.getItem("cookieConsent");c?JSON.parse(c).analytics:e(!0)},[]);const r=()=>{const c={necessary:!0,analytics:!0,functional:!0,timestamp:new Date().toISOString()};localStorage.setItem("cookieConsent",JSON.stringify(c)),e(!1)},a=()=>{const c={...s,timestamp:new Date().toISOString()};localStorage.setItem("cookieConsent",JSON.stringify(c)),s.analytics,e(!1)},l=()=>{const c={necessary:!0,analytics:!1,functional:!1,timestamp:new Date().toISOString()};localStorage.setItem("cookieConsent",JSON.stringify(c)),e(!1)};return u.jsx(Br,{children:t&&u.jsx(L.div,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{duration:.3},className:"fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl",children:u.jsx("div",{className:"max-w-7xl mx-auto p-4 sm:p-6",children:u.jsxs("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"🍪 Cookie Preferences"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:'We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. By clicking "Accept All", you consent to our use of cookies.'}),i&&u.jsxs(L.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.3},className:"mt-4 space-y-3",children:[u.jsxs("label",{className:"flex items-start gap-3",children:[u.jsx("input",{type:"checkbox",checked:s.necessary,disabled:!0,className:"mt-1 w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Necessary Cookies (Always Active)"}),u.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1",children:"Essential for the website to function properly."})]})]}),u.jsxs("label",{className:"flex items-start gap-3",children:[u.jsx("input",{type:"checkbox",checked:s.analytics,onChange:c=>o({...s,analytics:c.target.checked}),className:"mt-1 w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Analytics Cookies"}),u.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1",children:"Help us understand how visitors interact with our website (Google Analytics)."})]})]}),u.jsxs("label",{className:"flex items-start gap-3",children:[u.jsx("input",{type:"checkbox",checked:s.functional,onChange:c=>o({...s,functional:c.target.checked}),className:"mt-1 w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Functional Cookies"}),u.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1",children:"Enable personalized features and remember your preferences."})]})]})]}),u.jsx("button",{onClick:()=>n(!i),className:"text-sm text-primary-600 dark:text-primary-400 hover:underline mt-2",children:i?"Hide Details":"Show Details"})]}),u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx(Je,{variant:"ghost",size:"sm",onClick:l,children:"Reject All"}),i&&u.jsx(Je,{variant:"secondary",size:"sm",onClick:a,children:"Accept Selected"}),u.jsx(Je,{variant:"primary",size:"sm",onClick:r,children:"Accept All"})]})]})})})})},Le=w.forwardRef(({className:t,variant:e="default",size:i="md",children:n,...s},o)=>{const r="inline-flex items-center font-medium rounded-md transition-colors",a={default:"bg-primary/10 text-primary border-transparent",secondary:"bg-secondary text-secondary-foreground border-transparent",outline:"border text-foreground",destructive:"bg-destructive/10 text-destructive border-transparent",primary:"bg-primary text-primary-foreground border-transparent",success:"bg-green-500/10 text-green-700 dark:text-green-400 border-transparent"},l={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-0.5 text-sm",lg:"px-3 py-1 text-base"};return u.jsx("span",{ref:o,className:Ji(r,a[e],l[i],t),...s,children:n})});Le.displayName="Badge";const Eh=()=>{const[t,e]=w.useState(!1),i=()=>{const n=document.getElementById("pricing");n==null||n.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{className:"relative min-h-[80vh] flex items-center pt-20 px-4",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10"}),u.jsx("div",{className:"relative w-full max-w-6xl mx-auto",children:u.jsxs("div",{className:"text-center space-y-6",children:[u.jsx(L.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:u.jsxs(Le,{variant:"default",size:"lg",children:[u.jsx("span",{className:"mr-2",children:"🚀"}),"Limited Presale Pricing"]})}),u.jsxs(L.h1,{className:"text-4xl sm:text-5xl md:text-6xl font-black leading-tight",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.5},children:["First Customer in"," ",u.jsx("span",{className:"text-gradient",children:"30 Days"}),u.jsx("br",{className:"hidden sm:block"}),u.jsxs("span",{className:"text-primary dark:text-primary-400 text-3xl sm:text-4xl md:text-5xl",children:[" ","or Money Back"]})]}),u.jsx(L.p,{className:"text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.5},children:"AI agents validate your idea, build your MVP, and get you paying customers. All in 30 days. Join 500+ founders already building."}),u.jsxs(L.div,{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3,duration:.5},children:[u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm",children:[u.jsx("div",{className:"text-2xl mb-2",children:"🤖"}),u.jsx("p",{className:"font-semibold",children:"AI Agents"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Working 24/7"})]}),u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm",children:[u.jsx("div",{className:"text-2xl mb-2",children:"💰"}),u.jsx("p",{className:"font-semibold",children:"From $79"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Launch today"})]}),u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm",children:[u.jsx("div",{className:"text-2xl mb-2",children:"✅"}),u.jsx("p",{className:"font-semibold",children:"Guaranteed"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Results or refund"})]})]}),u.jsxs(L.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4,duration:.5},children:[u.jsxs(Je,{size:"lg",onClick:i,className:"text-lg px-8 py-4",children:[u.jsx("span",{className:"mr-2",children:"🚀"}),"Start Building Now →"]}),u.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-3",children:"No credit card required • 30-day guarantee"})]}),u.jsxs(L.div,{className:"mt-8",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:[u.jsxs("button",{onClick:()=>e(!t),className:"text-primary hover:text-primary-600 font-medium inline-flex items-center gap-2",children:[t?"Hide":"See"," how it works",u.jsx("svg",{className:`w-4 h-4 transition-transform ${t?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),t&&u.jsxs(L.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.3},className:"mt-6 overflow-hidden",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto",children:[u.jsx("div",{className:"bg-gray-900 rounded-lg p-4",children:u.jsx("img",{src:"/images/startupgpt-animation.gif",alt:"StartupGPT Platform",className:"rounded w-full",loading:"lazy"})}),u.jsx("div",{className:"bg-gray-900 rounded-lg p-4",children:u.jsx("img",{src:"/images/startupgpt-dashboard.gif",alt:"AI Dashboard",className:"rounded w-full",loading:"lazy"})})]}),u.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-4",children:["Live example: ",u.jsx("a",{href:"https://www.vowcraft.io",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"vowcraft.io"})," - built with StartupGPT"]})]})]})]})})]})};var Xi=new Map,Kt=new WeakMap,dr=0,jh=void 0;function Rh(t){return t?(Kt.has(t)||(dr+=1,Kt.set(t,dr.toString())),Kt.get(t)):"0"}function Ih(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?Rh(t.root):t[e]}`).toString()}function Mh(t){const e=Ih(t);let i=Xi.get(e);if(!i){const n=new Map;let s;const o=new IntersectionObserver(r=>{r.forEach(a=>{var l;const c=a.isIntersecting&&s.some(d=>a.intersectionRatio>=d);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=n.get(a.target))==null||l.forEach(d=>{d(c,a)})})},t);s=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:o,elements:n},Xi.set(e,i)}return i}function Nh(t,e,i={},n=jh){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const l=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:s,observer:o,elements:r}=Mh(i),a=r.get(t)||[];return r.has(t)||r.set(t,a),a.push(e),o.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(r.delete(t),o.unobserve(t)),r.size===0&&(o.disconnect(),Xi.delete(s))}}function Lt({threshold:t,delay:e,trackVisibility:i,rootMargin:n,root:s,triggerOnce:o,skip:r,initialInView:a,fallbackInView:l,onChange:c}={}){var d;const[h,f]=w.useState(null),m=w.useRef(c),[x,p]=w.useState({inView:!!a,entry:void 0});m.current=c,w.useEffect(()=>{if(r||!h)return;let T;return T=Nh(h,(j,k)=>{p({inView:j,entry:k}),m.current&&m.current(j,k),k.isIntersecting&&o&&T&&(T(),T=void 0)},{root:s,rootMargin:n,threshold:t,trackVisibility:i,delay:e},l),()=>{T&&T()}},[Array.isArray(t)?t.toString():t,h,s,n,o,r,i,l,e]);const b=(d=x.entry)==null?void 0:d.target,P=w.useRef(void 0);!h&&b&&!o&&!r&&P.current!==b&&(P.current=b,p({inView:!!a,entry:void 0}));const C=[f,x.inView,x.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}const Dh=()=>{const[t,e]=Lt({triggerOnce:!0,threshold:.1}),i=[{icon:"🔍",title:"Market Research",description:"AI validates demand before you build",stat:"90% accuracy"},{icon:"🚀",title:"MVP Builder",description:"Launch-ready product in days",stat:"10x faster"},{icon:"📈",title:"Growth Engine",description:"Automated customer acquisition",stat:"$10k ad budget"},{icon:"💰",title:"Revenue Share",description:"We succeed when you succeed",stat:"Only 10-20%"}];return u.jsx("section",{className:"py-16 bg-white dark:bg-gray-900",id:"features",children:u.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[u.jsxs(L.div,{ref:t,className:"text-center mb-12",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[u.jsxs("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:["Everything You Need to ",u.jsx("span",{className:"text-gradient",children:"Succeed"})]}),u.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"AI agents handle the heavy lifting while you focus on your vision"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:i.map((n,s)=>u.jsxs(L.div,{initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:s*.1,duration:.5},className:"bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow",children:[u.jsx("div",{className:"text-4xl mb-4",children:n.icon}),u.jsx("h3",{className:"font-semibold text-lg mb-2",children:n.title}),u.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-3",children:n.description}),u.jsx("div",{className:"text-primary font-bold",children:n.stat})]},n.title))})]})})},Ze=w.forwardRef(({className:t,variant:e="default",padding:i="md",children:n,...s},o)=>{const r="rounded-lg transition-all duration-200",a={default:"bg-card text-card-foreground border",elevated:"bg-card text-card-foreground border shadow-lg",bordered:"bg-card text-card-foreground border-2",glass:"glass-effect",bubble:"bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20"},l={none:"",sm:"p-4",md:"p-6",lg:"p-8"};return u.jsx("div",{ref:o,className:Ji(r,a[e],l[i],t),...s,children:n})});Ze.displayName="Card";const Oh=()=>{const[t,e]=Lt({triggerOnce:!0,threshold:.1}),[i,n]=w.useState(null),s=[{number:"1",title:"Validate",emoji:"🔍",duration:"2-4 hours",summary:"AI researches your market and validates demand",details:["Market size analysis","Competitor research","Customer pain points","Demand validation"],outcome:"Know if your idea will work"},{number:"2",title:"Build",emoji:"🚀",duration:"3-5 days",summary:"AI builds your MVP and marketing assets",details:["Landing page creation","MVP development","Marketing copy","Payment integration"],outcome:"Launch-ready product"},{number:"3",title:"Grow",emoji:"📈",duration:"30 days",summary:"AI acquires customers and optimizes growth",details:["Ad campaign setup","Customer acquisition","A/B testing","Revenue optimization"],outcome:"First paying customers"}];return u.jsx("section",{className:"py-16 bg-gray-50 dark:bg-gray-800/50",id:"how-it-works",children:u.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[u.jsxs(L.div,{ref:t,className:"text-center mb-12",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[u.jsxs("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:["How ",u.jsx("span",{className:"text-gradient",children:"StartupGPT"})," Works"]}),u.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"From idea to revenue in 3 simple phases. Click each phase to learn more."})]}),u.jsx("div",{className:"space-y-4 max-w-3xl mx-auto",children:s.map((o,r)=>u.jsx(L.div,{initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:r*.1,duration:.5},children:u.jsx(Ze,{variant:"elevated",className:`cursor-pointer transition-all ${i===r?"ring-2 ring-primary":""}`,onClick:()=>n(i===r?null:r),children:u.jsxs("div",{className:"p-6",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"text-4xl",children:o.emoji}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsxs("span",{className:"text-sm text-primary font-semibold",children:["Phase ",o.number]}),u.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:["• ",o.duration]})]}),u.jsx("h3",{className:"text-xl font-bold",children:o.title}),u.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:o.summary})]})]}),u.jsx("svg",{className:`w-5 h-5 text-gray-400 transition-transform ${i===r?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),i===r&&u.jsx(L.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.3},className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:u.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold mb-3",children:"What happens:"}),u.jsx("ul",{className:"space-y-2",children:o.details.map((a,l)=>u.jsxs("li",{className:"flex items-start gap-2",children:[u.jsx("svg",{className:"w-5 h-5 text-green-500 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),u.jsx("span",{className:"text-sm",children:a})]},l))})]}),u.jsxs("div",{className:"bg-primary/5 dark:bg-primary/10 rounded-lg p-4",children:[u.jsx("h4",{className:"font-semibold mb-2",children:"Your outcome:"}),u.jsx("p",{className:"text-lg font-medium text-primary dark:text-primary-400",children:o.outcome})]})]})})]})})},o.number))}),u.jsxs(L.div,{className:"text-center mt-12",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.4,duration:.5},children:[u.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:"Ready to build your startup the smart way?"}),u.jsxs("a",{href:"#pricing",className:"inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors",children:["Get Started Now",u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})]})})},Vh=()=>{const[t,e]=Lt({triggerOnce:!0,threshold:.1}),i=[{name:"Marcus Chen",role:"Founder, TechFlow",content:"Went from idea to $5K MRR in 3 weeks. The AI agents found a market I never would have discovered myself.",revenue:"$5K MRR"},{name:"Emily Rodriguez",role:"Creator, DesignHub",content:"Quit my job after 2 months. StartupGPT built everything while I focused on talking to customers.",revenue:"$12K MRR"},{name:"David Kim",role:"Founder, DataSync",content:"The $10K marketing budget alone paid for the entire investment. Now doing $8K MRR consistently.",revenue:"$8K MRR"}];return u.jsx("section",{className:"py-16 bg-white dark:bg-gray-900",id:"testimonials",children:u.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[u.jsxs(L.div,{ref:t,className:"text-center mb-12",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[u.jsxs("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:["Real Founders. ",u.jsx("span",{className:"text-gradient",children:"Real Revenue."})]}),u.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Join 500+ founders already building with AI"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:i.map((n,s)=>u.jsxs(L.div,{initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:s*.1,duration:.5},className:"bg-gray-50 dark:bg-gray-800 rounded-xl p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:n.name}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:n.role})]}),u.jsx("div",{className:"text-primary font-bold",children:n.revenue})]}),u.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:['"',n.content,'"']})]},n.name))}),u.jsxs(L.div,{className:"grid grid-cols-3 gap-4 max-w-2xl mx-auto",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.3,duration:.5},children:[u.jsxs("div",{className:"text-center",children:[u.jsx("p",{className:"text-3xl font-bold text-primary",children:"500+"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Active Founders"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("p",{className:"text-3xl font-bold text-primary",children:"$7.5M+"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Generated"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("p",{className:"text-3xl font-bold text-primary",children:"89%"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Success Rate"})]})]})]})})};var ma="https://js.stripe.com/v3",Lh=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var Fh=function(){for(var e=document.querySelectorAll('script[src^="'.concat(ma,'"]')),i=0;i<e.length;i++){var n=e[i];if(Lh.test(n.src))return n}return null},hr=function(e){var i="",n=document.createElement("script");n.src="".concat(ma).concat(i);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(n),n},pt=null,Yt=null,zt=null,Bh=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},_h=function(e,i){return function(){window.Stripe?e(window.Stripe):i(new Error("Stripe.js not available"))}},Gh=function(e){return pt!==null?pt:(pt=new Promise(function(i,n){if(typeof window>"u"||typeof document>"u"){i(null);return}if(window.Stripe){i(window.Stripe);return}try{var s=Fh();if(!(s&&e)){if(!s)s=hr(e);else if(s&&zt!==null&&Yt!==null){var o;s.removeEventListener("load",zt),s.removeEventListener("error",Yt),(o=s.parentNode)===null||o===void 0||o.removeChild(s),s=hr(e)}}zt=_h(i,n),Yt=Bh(n),s.addEventListener("load",zt),s.addEventListener("error",Yt)}catch(r){n(r);return}}),pt.catch(function(i){return pt=null,Promise.reject(i)}))},gt,Uh=function(){return gt||(gt=Gh(null).catch(function(e){return gt=null,Promise.reject(e)}),gt)};Promise.resolve().then(function(){return Uh()}).catch(function(t){console.warn(t)});const Wh={paymentLinks:{earlyBird:"#",regular:"#","single-startup":"#","startup-trio":"#","startup-empire":"#"},customerPortalUrl:"#"},qh=t=>{t&&t!=="#"?window.open(t,"_blank"):console.error("Stripe payment link not configured")},Kh="http://localhost:8000/api",Zi=xa.create({baseURL:Kh,headers:{"Content-Type":"application/json"},timeout:1e4});Zi.interceptors.response.use(t=>t,t=>(t.response?console.error("API Error:",t.response.data):t.request?console.error("Network Error:",t.request):console.error("Error:",t.message),Promise.reject(t)));const fr={trackEvent:async(t,e)=>{await Zi.post("/analytics/event",{eventType:t,eventData:e,timestamp:new Date().toISOString()})},trackConversion:async(t,e)=>{await Zi.post("/analytics/conversion",{conversionType:t,value:e,timestamp:new Date().toISOString()})}};class Yh{constructor(){Gn(this,"isInitialized",!1)}init(e){!this.isInitialized&&e&&(xi.initialize(e),this.isInitialized=!0)}trackPageView(e){this.isInitialized&&xi.send({hitType:"pageview",page:e})}trackEvent({category:e,action:i,label:n,value:s}){this.isInitialized&&xi.event({category:e,action:i,label:n,value:s}),fr.trackEvent(`${e}_${i}`,{label:n,value:s}).catch(console.error)}trackConversion(e,i){this.trackEvent({category:"Conversion",action:e,value:i}),fr.trackConversion(e,i).catch(console.error)}trackScrollDepth(e){this.trackEvent({category:"Engagement",action:"Scroll",label:`${e}%`,value:e})}trackTimeOnPage(e){this.trackEvent({category:"Engagement",action:"Time on Page",value:e})}trackCTAClick(e,i){this.trackEvent({category:"CTA",action:"Click",label:`${e} - ${i}`})}trackFormSubmission(e,i){this.trackEvent({category:"Form",action:i?"Submit Success":"Submit Error",label:e})}trackVideoPlay(e,i){this.trackEvent({category:"Video",action:"Play",label:e,value:i})}trackSocialShare(e,i){this.trackEvent({category:"Social",action:"Share",label:`${e} - ${i}`})}}const ne=new Yh,zh={heroCtaClick:()=>ne.trackCTAClick("Get Early Access","Hero"),watchDemoClick:()=>ne.trackCTAClick("Watch Demo","Hero"),pricingCtaClick:()=>ne.trackCTAClick("Get Instant Access","Pricing"),finalCtaClick:()=>ne.trackCTAClick("Claim Early Access","Final CTA"),waitlistJoin:t=>ne.trackConversion("Waitlist Join",t),paymentInitiated:()=>ne.trackConversion("Payment Initiated"),paymentCompleted:t=>ne.trackConversion("Payment Completed",t),faqOpen:t=>ne.trackEvent({category:"FAQ",action:"Open",label:t}),trackEvent:(t,e,i,n)=>ne.trackEvent({category:t,action:e,label:i,value:n}),trackFormSubmission:(t,e)=>ne.trackFormSubmission(t,e)},Hh=()=>{w.useEffect(()=>{ne.trackPageView(window.location.pathname)},[]);const t=w.useCallback((o,r,a,l)=>{ne.trackEvent({category:o,action:r,label:a,value:l})},[]),e=w.useCallback(()=>{let o=0;const r=()=>{const a=document.documentElement.scrollHeight-window.innerHeight,l=Math.round(window.scrollY/a*100);l>o&&(o=l,(l===25||l===50||l===75||l===100)&&ne.trackScrollDepth(l))};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),i=w.useCallback(()=>{const o=Date.now();return()=>{const r=Math.round((Date.now()-o)/1e3);ne.trackTimeOnPage(r)}},[]),{trackEvent:n,...s}=zh;return{trackEvent:t,trackScrollDepth:e,trackTimeOnPage:i,...s}},$h=()=>{const[t,e]=w.useState(!1),[i,n]=w.useState(null),{paymentInitiated:s}=Hh(),o=w.useCallback(async(a="earlyBird")=>{e(!0),n(null);try{s();const l=Wh.paymentLinks[a];if(!l||l==="#")throw new Error("Payment link not configured. Please try again later.");qh(l),e(!1)}catch(l){const c=l instanceof Error?l.message:"Failed to initiate payment";n(c),e(!1),console.error("Payment error:",l)}},[s]),r=w.useCallback(()=>{n(null)},[]);return{initiatePayment:o,isLoading:t,error:i,clearError:r}},Qh=()=>{const[t,e]=Lt({triggerOnce:!0,threshold:.1}),[i,n]=w.useState({days:0,hours:0,minutes:0,seconds:0});w.useEffect(()=>{const a=()=>{const d=+new Date("2025-09-15T00:00:00")-+new Date;return d>0?{days:Math.floor(d/864e5),hours:Math.floor(d/36e5%24),minutes:Math.floor(d/1e3/60%60),seconds:Math.floor(d/1e3%60)}:{days:0,hours:0,minutes:0,seconds:0}};n(a());const l=setInterval(()=>{n(a())},1e3);return()=>clearInterval(l)},[]);const s=[{id:"single-startup",name:"Solopreneur",price:79,originalPrice:149,currency:"USD",interval:"one-time",stripePriceId:"https://buy.stripe.com/00weVfejn6GEgXHe3N8EM06",popular:!1,limitedSpots:47,revenueShare:"20%",features:["1 Startup Launch","All AI Agents Included","Google Marketing Budget","Social Media Marketing Budget (X, Facebook, YouTube, TikTok)","Private Founder Community (Discord)","All Future Updates included*","Access on September 15, 2025","$10,000 Marketing Budget from VC Network","20% Revenue Share","Super Early Bird: 47% OFF (Reg. $149)"]},{id:"startup-trio",name:"Entrepreneur",price:199,originalPrice:399,currency:"USD",interval:"one-time",stripePriceId:"https://buy.stripe.com/aFa9AVejn4ywazj2l58EM07",popular:!0,limitedSpots:25,savings:"Save $200 (50% OFF)",revenueShare:"15%",features:["3 Startup Launches","All AI Agents Included","Google Marketing Budget","Social Media Marketing Budget (X, Facebook, YouTube, TikTok)","Private Founder Community (Discord)","All Future Updates included*","Access on September 15, 2025","$10,000 Marketing Budget from VC Network","15% Revenue Share","Priority Support & Weekly Check-ins","Bonus: Personal AI Agent Training"]},{id:"startup-empire",name:"Multipreneur",price:599,originalPrice:999,currency:"USD",interval:"one-time",stripePriceId:"https://buy.stripe.com/14AcN71wB0ig4aV4td8EM08",popular:!1,limitedSpots:10,savings:"Save $400 (40% OFF)",revenueShare:"10%",features:["10 Startup Launches","All AI Agents Included","Google Marketing Budget","Social Media Marketing Budget (X, Facebook, YouTube, TikTok)","Custom AI Agent Training","Private Founder Community (Discord)","All Future Updates included*","Access on September 15, 2025","$10,000 Marketing Budget from VC Network","10% Revenue Share","White-Glove Onboarding","Direct Founder Access"]}],{initiatePayment:o}=$h(),r=a=>{a.stripePriceId.startsWith("https://")?window.open(a.stripePriceId,"_blank"):o(a.id)};return u.jsx("section",{className:"py-24 bg-white dark:bg-gray-900",id:"pricing",children:u.jsxs("div",{className:"max-width-container section-padding",children:[u.jsxs(L.div,{ref:t,className:"text-center mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[u.jsxs(Le,{variant:"default",size:"lg",className:"mb-4",children:[u.jsx("span",{className:"mr-2",children:"⏰"}),"Super Early Bird Pricing Ends Soon"]}),u.jsxs("h2",{className:"text-responsive-2xl font-display font-bold mb-4",children:[u.jsx("span",{className:"text-gradient",children:"Lock In Your Presale Discount"}),u.jsx("br",{}),"Before Prices Double on Launch"]}),u.jsxs("p",{className:"text-responsive-lg text-foreground-muted max-w-2xl mx-auto mb-2",children:["Join 500+ founders who secured their spots during StartupGPT Alpha.",u.jsx("br",{}),"Prices increase as spots fill up."]}),u.jsxs("div",{className:"flex justify-center gap-4 text-sm",children:[u.jsx(Le,{variant:"secondary",children:"✓ 30-Day Results Guarantee*"}),u.jsx(Le,{variant:"default",children:"✓ No Hidden Fees"}),u.jsx(Le,{variant:"secondary",children:"✓ Launch Sept 1"})]})]}),u.jsxs(L.div,{className:"mb-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 text-center",initial:{scale:.95,opacity:0},animate:e?{scale:1,opacity:1}:{},transition:{delay:.2},children:[u.jsx("p",{className:"text-lg font-semibold mb-2",children:"Early Bird Pricing Ends In:"}),u.jsx("div",{className:"flex justify-center gap-4",children:Object.entries(i).map(([a,l])=>u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:u.jsx("span",{className:"text-3xl font-bold",children:l.toString().padStart(2,"0")})}),u.jsx("p",{className:"text-sm mt-1 capitalize",children:a})]},a))})]}),u.jsxs(L.div,{className:"mb-12 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.25},children:[u.jsxs(Ze,{variant:"glass",className:"text-center p-4",children:[u.jsx("p",{className:"text-3xl font-bold text-gradient mb-1",children:"500+"}),u.jsx("p",{className:"text-sm text-foreground-muted",children:"Founders Already Joined"})]}),u.jsxs(Ze,{variant:"glass",className:"text-center p-4",children:[u.jsx("p",{className:"text-3xl font-bold text-gradient-cosmic mb-1",children:"$7.5M+"}),u.jsx("p",{className:"text-sm text-foreground-muted",children:"Revenue Generated"})]}),u.jsxs(Ze,{variant:"glass",className:"text-center p-4",children:[u.jsx("p",{className:"text-3xl font-bold text-gradient mb-1",children:"4.9/5"}),u.jsx("p",{className:"text-sm text-foreground-muted",children:"Founder Rating"})]})]}),u.jsx("div",{className:"grid md:grid-cols-3 gap-6 max-w-6xl mx-auto",children:s.map((a,l)=>u.jsx(L.div,{initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.3+l*.1},children:u.jsxs(Ze,{variant:"elevated",className:`relative overflow-hidden h-full flex flex-col ${a.popular?"ring-2 ring-primary-500":""}`,children:[a.popular&&u.jsx("div",{className:"absolute top-0 right-0 bg-accent-500 text-white px-4 py-1 rounded-bl-lg",children:u.jsx("span",{className:"text-sm font-semibold",children:"MOST POPULAR"})}),a.savings&&u.jsx("div",{className:"absolute top-0 left-0 bg-green-500 text-white px-4 py-1 rounded-br-lg",children:u.jsx("span",{className:"text-sm font-semibold",children:a.savings})}),u.jsxs("div",{className:"text-center mb-8 pt-8",children:[u.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:a.name}),u.jsxs("div",{className:"flex items-baseline justify-center gap-2 mb-1",children:[u.jsxs("span",{className:"text-4xl font-bold text-gray-900 dark:text-white",children:["$",a.price]}),a.originalPrice&&u.jsxs("span",{className:"text-xl text-gray-500 line-through",children:["$",a.originalPrice]})]}),u.jsxs("p",{className:"text-lg font-semibold text-primary dark:text-primary-400 mb-2",children:[a.revenueShare," Revenue Share"]}),u.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"One-time payment + Revenue share"}),a.limitedSpots&&u.jsxs(Le,{variant:"destructive",className:"mt-3",children:["Only ",a.limitedSpots," spots left at this price"]})]}),u.jsx("ul",{className:"space-y-3 mb-8 flex-grow",children:a.features.map((c,d)=>u.jsxs("li",{className:"flex items-start gap-3",children:[u.jsx("svg",{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),u.jsx("span",{className:"text-gray-700 dark:text-gray-300 text-sm",children:c})]},d))}),u.jsx(Je,{size:"lg",fullWidth:!0,onClick:()=>r(a),className:`mb-4 ${a.popular?"bg-accent hover:bg-accent/90 text-accent-foreground":""}`,variant:a.popular?"default":"secondary",children:"Secure Your Spot"}),u.jsx("div",{className:"text-center space-y-2 text-xs text-gray-600 dark:text-gray-400",children:u.jsx("p",{children:"✓ Secure payment via Stripe"})})]})},a.id))}),u.jsxs(L.div,{className:"mt-16 text-center",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.5},children:[u.jsxs("div",{className:"bg-primary-50 dark:bg-gray-800 rounded-xl p-6 max-w-2xl mx-auto",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"What's Included in Your Marketing Budget"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Each startup launch includes budget for Google Ads and social media campaigns (X, Facebook, YouTube, or TikTok) based on your product and target audience. Our AI agents optimize your ad spend for maximum ROI."}),u.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-3 italic",children:"* All future updates are included after we've built you a business with at least 50 paying customers and $500+ MRR"})]}),u.jsxs("div",{className:"inline-flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400 mt-8",children:[u.jsx("img",{src:"/images/stripe-badge.svg",alt:"Powered by Stripe",className:"h-8"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("svg",{className:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"SSL Secure Payment"]})]})]})]})})},Xh=()=>{const[t,e]=Lt({triggerOnce:!0,threshold:.1}),[i,n]=w.useState(["1"]),s=[{id:"1",question:"What exactly do I get?",answer:`You get a complete startup launch system:
• AI agents that validate your idea
• A custom-built MVP with your branding
• Landing page and payment processing
• $10,000 marketing budget (after 100 customers)
• Access to our founder community
• 30-day money-back guarantee`},{id:"2",question:"How long does it really take?",answer:`Most founders see results within 7-14 days:
• Day 1-2: Market validation
• Day 3-7: MVP development
• Day 7-14: First customers
• Day 30: Revenue optimization

We guarantee your first customer in 30 days or your money back.`},{id:"3",question:"Do I need technical skills?",answer:"No! Our AI agents handle everything technical. You just need your idea and the drive to succeed. We handle the code, marketing, and operations."},{id:"4",question:"What's the catch?",answer:"There isn't one. We take a small revenue share (10-20%) only when you make money. If you don't succeed, we don't get paid. We're invested in your success."},{id:"5",question:"Can I cancel anytime?",answer:"This is a one-time payment, not a subscription. You own everything we build. If you're not satisfied within 30 days, we'll refund your payment minus any ad spend used."},{id:"6",question:"When do I get access?",answer:"Presale buyers get access on September 15, 2025. Lock in your spot now at the lowest price - prices increase after launch."}],o=r=>{n(a=>a.includes(r)?a.filter(l=>l!==r):[...a,r])};return u.jsx("section",{className:"py-16 bg-gray-50 dark:bg-gray-800/50",id:"faq",children:u.jsxs("div",{className:"max-w-3xl mx-auto px-4",children:[u.jsxs(L.div,{ref:t,className:"text-center mb-12",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:"Common Questions"}),u.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Everything you need to know to get started"})]}),u.jsx(L.div,{className:"space-y-4",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.1,duration:.5},children:s.map(r=>u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden",children:[u.jsx("button",{onClick:()=>o(r.id),className:"w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h3",{className:"font-semibold text-lg pr-4",children:r.question}),u.jsx("svg",{className:`w-5 h-5 text-gray-400 transition-transform ${i.includes(r.id)?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})}),i.includes(r.id)&&u.jsx(L.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.3},className:"px-6 pb-6",children:u.jsx("div",{className:"text-gray-600 dark:text-gray-400 whitespace-pre-line",children:r.answer})})]},r.id))}),u.jsxs(L.div,{className:"text-center mt-12",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.3,duration:.5},children:[u.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Still have questions?"}),u.jsx("a",{href:"mailto:support@startupgpt.pro",className:"text-primary hover:text-primary-600 font-semibold",children:"Email us →"})]})]})})},Zh=({isOpen:t,onClose:e,title:i,children:n,scrollToId:s})=>(w.useEffect(()=>{const o=r=>{r.key==="Escape"&&t&&e()};return t&&(document.addEventListener("keydown",o),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",o),document.body.style.overflow="unset"}},[t,e]),w.useEffect(()=>{t&&s&&setTimeout(()=>{const o=document.getElementById(s);o&&o.scrollIntoView({behavior:"smooth",block:"start"})},100)},[t,s]),u.jsx(Br,{children:t&&u.jsxs(u.Fragment,{children:[u.jsx(L.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 bg-black bg-opacity-50 z-50",onClick:e}),u.jsx(L.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.3},className:"fixed inset-0 z-50 overflow-y-auto",onClick:e,children:u.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:u.jsxs("div",{className:"w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all",onClick:o=>o.stopPropagation(),children:[u.jsx("h3",{className:"text-2xl font-bold leading-6 text-gray-900 dark:text-white mb-4",children:i}),u.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300","aria-label":"Close modal",children:u.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),u.jsx("div",{className:"mt-4 max-h-[70vh] overflow-y-auto pr-2",children:u.jsx("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:n})})]})})})]})})),Jh=()=>{const[t,e]=w.useState(!1),[i,n]=w.useState("privacy"),[s,o]=w.useState(null),r=(c,d)=>{n(c),o(d||null),e(!0)},a=()=>{e(!1),o(null)},l={privacy:{title:"Privacy Policy",content:`
        <h1>PRIVACY POLICY</h1>
        
        <h2><strong>StartupGPT</strong><br/>
        <em>AI-Powered Startup Platform</em></h2>
        
        <p><strong>Effective Date</strong>: August 1, 2025<br/>
        <strong>Last Updated</strong>: August 1, 2025</p>
        
        <h2>1. INTRODUCTION</h2>
        <p>Welcome to StartupGPT ("we", "us", "our", "the Platform"). We understand that launching a startup is intense enough without worrying about your data privacy. This Privacy Policy explains how we collect, use, protect, and share your information when you use our AI-powered startup launching platform.</p>
        
        <p><strong>Data Controller</strong>:<br/>
        Email: privacy@startupgpt.pro<br/>
        Data Protection Officer: dpo@startupgpt.pro</p>
        
        <h2>2. INFORMATION WE COLLECT</h2>
        
        <h3>2.1 Account & Identity Information</h3>
        <ul>
          <li><strong>Basic Info</strong>: Name, email address, username, password</li>
          <li><strong>Profile Data</strong>: Company name, industry, founder experience level</li>
          <li><strong>Contact Details</strong>: Phone number (optional), business address</li>
          <li><strong>Verification</strong>: LinkedIn profile, GitHub (optional)</li>
        </ul>
        
        <h3>2.2 Startup Data</h3>
        <ul>
          <li><strong>Business Ideas</strong>: Concepts, pitches, business plans</li>
          <li><strong>Market Research</strong>: Target audience, competitor analysis</li>
          <li><strong>Product Details</strong>: MVP specifications, features, pricing</li>
          <li><strong>Customer Data</strong>: Early adopter information, feedback</li>
          <li><strong>Financial Projections</strong>: Revenue models, cost structures</li>
        </ul>
        
        <h3>2.3 AI Agent Interaction Data</h3>
        <ul>
          <li><strong>Market Research Agent</strong>: Search queries, analysis results</li>
          <li><strong>Business Model Agent</strong>: Validation inputs, model iterations</li>
          <li><strong>Customer Discovery Agent</strong>: Interview data, personas</li>
          <li><strong>MVP Builder Agent</strong>: Product specifications, tech stack</li>
          <li><strong>Growth Hacking Agent</strong>: Marketing strategies, campaigns</li>
          <li><strong>Pitch Deck Agent</strong>: Presentation content, investor targets</li>
        </ul>
        
        <h3>2.4 Marketing & Growth Data</h3>
        <ul>
          <li><strong>Campaign Performance</strong>: Google Ads data, social media metrics</li>
          <li><strong>Customer Acquisition</strong>: Lead sources, conversion data</li>
          <li><strong>Community Activity</strong>: Forum posts, mentor interactions</li>
          <li><strong>Success Metrics</strong>: Revenue data, customer count</li>
        </ul>
        
        <h3>2.5 Technical Information</h3>
        <ul>
          <li><strong>Device Data</strong>: IP address, browser type, OS, device ID</li>
          <li><strong>Usage Analytics</strong>: Feature usage, session duration, click paths</li>
          <li><strong>Performance Data</strong>: Load times, error logs, API calls</li>
          <li><strong>Cookies</strong>: Authentication, preferences, analytics</li>
        </ul>
        
        <h3>2.6 Payment Information</h3>
        <ul>
          <li><strong>Transaction Data</strong>: Purchase history, subscription tier</li>
          <li><strong>Billing Details</strong>: Processed securely via Stripe</li>
          <li><strong>Refund Requests</strong>: Money-back guarantee claims</li>
        </ul>
        
        <h2>3. HOW WE USE YOUR INFORMATION</h2>
        
        <h3>3.1 Primary Uses</h3>
        <p>We process your data to:</p>
        <ul>
          <li>Power our AI agents to launch your startup</li>
          <li>Validate business ideas and find product-market fit</li>
          <li>Generate marketing campaigns and growth strategies</li>
          <li>Build MVPs and create pitch decks</li>
          <li>Manage your marketing budgets (Google Ads, social media)</li>
          <li>Connect you with other founders in our community</li>
          <li>Process payments and honor guarantees</li>
        </ul>
        
        <h3>3.2 Legal Basis (GDPR)</h3>
        <ul>
          <li><strong>Contract Performance</strong>: Delivering our startup launching services</li>
          <li><strong>Legitimate Interests</strong>: Improving AI agents, preventing fraud</li>
          <li><strong>Consent</strong>: Marketing emails, success story features</li>
          <li><strong>Legal Compliance</strong>: Tax records, regulatory requirements</li>
        </ul>
        
        <h3>3.3 AI-Specific Processing</h3>
        <p><strong>Critical AI Disclosures</strong>:</p>
        <ul>
          <li>Your startup data trains our specialized AI agents</li>
          <li>Each agent processes data for its specific function</li>
          <li>AI decisions can be reviewed by human experts</li>
          <li>Generated content is kept confidential to your account</li>
          <li>We use pattern recognition to improve success rates</li>
        </ul>
        
        <h2>4. INFORMATION SHARING</h2>
        
        <h3>4.1 Third-Party Services</h3>
        <p>We integrate with essential partners:</p>
        <ul>
          <li><strong>OpenAI/Anthropic</strong>: AI model providers (under DPA)</li>
          <li><strong>Stripe</strong>: Payment processing (PCI compliant)</li>
          <li><strong>Google Ads</strong>: Marketing campaign management</li>
          <li><strong>Meta Business</strong>: Social media advertising</li>
          <li><strong>AWS/Google Cloud</strong>: Secure infrastructure</li>
          <li><strong>Vercel</strong>: Application hosting</li>
          <li><strong>SendGrid</strong>: Transactional emails</li>
        </ul>
        
        <h3>4.2 Marketing Budget Management</h3>
        <p>When we manage your included marketing budgets:</p>
        <ul>
          <li>Google Ads account creation (with your consent)</li>
          <li>Facebook/Instagram campaign setup</li>
          <li>Performance data shared back to optimize</li>
        </ul>
        
        <h3>4.3 Community Features</h3>
        <ul>
          <li><strong>Opt-in Sharing</strong>: Success stories, case studies</li>
          <li><strong>Anonymous Data</strong>: Aggregate success metrics</li>
          <li><strong>Mentor Network</strong>: Profile visibility (optional)</li>
        </ul>
        
        <h3>4.4 Legal Disclosures</h3>
        <p>We may share data when required by:</p>
        <ul>
          <li>Court orders or subpoenas</li>
          <li>Regulatory investigations</li>
          <li>IP rights protection</li>
        </ul>
        
        <h3>4.5 What We Never Do</h3>
        <ul>
          <li><strong>Never</strong> sell your startup ideas or data</li>
          <li><strong>Never</strong> share your business plans with competitors</li>
          <li><strong>Never</strong> use your customer lists</li>
          <li><strong>Never</strong> claim ownership of your startup</li>
        </ul>
        
        <h2>5. DATA SECURITY</h2>
        
        <h3>5.1 Technical Safeguards</h3>
        <ul>
          <li><strong>Encryption</strong>: AES-256 at rest, TLS 1.3 in transit</li>
          <li><strong>Access Control</strong>: Multi-factor authentication available</li>
          <li><strong>Isolation</strong>: Startup data segregated by account</li>
          <li><strong>Monitoring</strong>: Real-time threat detection</li>
          <li><strong>Backups</strong>: Encrypted, geographically distributed</li>
        </ul>
        
        <h3>5.2 Operational Security</h3>
        <ul>
          <li>Background-checked employees</li>
          <li>Strict NDAs for all staff</li>
          <li>Limited access on need-to-know basis</li>
          <li>Regular security training</li>
          <li>Incident response team 24/7</li>
        </ul>
        
        <h3>5.3 AI Model Security</h3>
        <ul>
          <li>Isolated processing environments</li>
          <li>No cross-contamination between accounts</li>
          <li>Regular model audits</li>
          <li>Adversarial testing</li>
        </ul>
        
        <h2>6. INTERNATIONAL DATA TRANSFERS</h2>
        
        <h3>6.1 Transfer Mechanisms</h3>
        <p>As a German company with global services:</p>
        <ul>
          <li><strong>EU to US</strong>: Standard Contractual Clauses (SCCs)</li>
          <li><strong>Other Countries</strong>: Adequacy decisions or SCCs</li>
          <li><strong>Encryption</strong>: All international transfers encrypted</li>
        </ul>
        
        <h3>6.2 Specific Provider Locations</h3>
        <ul>
          <li><strong>AI Processing</strong>: US (OpenAI/Anthropic) with SCCs</li>
          <li><strong>Payment Processing</strong>: US/EU (Stripe)</li>
          <li><strong>Cloud Infrastructure</strong>: Multi-region (AWS/GCP)</li>
        </ul>
        
        <h2>7. YOUR PRIVACY RIGHTS</h2>
        
        <h3>7.1 Under GDPR You Can:</h3>
        <ul>
          <li><strong>Access</strong>: Download all your startup data</li>
          <li><strong>Rectify</strong>: Update incorrect information</li>
          <li><strong>Delete</strong>: Remove account and data</li>
          <li><strong>Restrict</strong>: Limit certain processing</li>
          <li><strong>Port</strong>: Export data in standard formats</li>
          <li><strong>Object</strong>: Opt-out of specific uses</li>
          <li><strong>Human Review</strong>: Challenge AI decisions</li>
        </ul>
        
        <h3>7.2 Exercising Rights</h3>
        <p>Email privacy@startupgpt.pro with:</p>
        <ul>
          <li>Account identification</li>
          <li>Specific request</li>
          <li>Response within 30 days guaranteed</li>
        </ul>
        
        <h3>7.3 Supervisory Authority</h3>
        <p>Lodge complaints with:</p>
        <ul>
          <li>German Federal Commissioner for Data Protection</li>
          <li>Your local EU data protection authority</li>
        </ul>
        
        <h2>8. DATA RETENTION</h2>
        
        <h3>8.1 Active Accounts</h3>
        <ul>
          <li><strong>Startup Data</strong>: Duration of launches + 1 year</li>
          <li><strong>AI Interactions</strong>: 6 months for improvement</li>
          <li><strong>Community Posts</strong>: Until deleted by you</li>
          <li><strong>Success Metrics</strong>: Anonymized after 2 years</li>
        </ul>
        
        <h3>8.2 After Account Closure</h3>
        <ul>
          <li><strong>Transaction Records</strong>: 10 years (German tax law)</li>
          <li><strong>Legal Claims</strong>: 3 years</li>
          <li><strong>Anonymized Analytics</strong>: Indefinite</li>
          <li><strong>All Other Data</strong>: Deleted within 90 days</li>
        </ul>
        
        <h3>8.3 Startup IP Protection</h3>
        <p>Your business ideas and plans are immediately deleted upon request, regardless of retention policies.</p>
        
        <h2>9. COOKIES AND TRACKING</h2>
        
        <h3>9.1 Essential Cookies</h3>
        <p>Required for platform function:</p>
        <ul>
          <li>Authentication tokens</li>
          <li>Session management</li>
          <li>Security features</li>
          <li>AI agent state</li>
        </ul>
        
        <h3>9.2 Analytics Cookies</h3>
        <p>With consent only:</p>
        <ul>
          <li>Google Analytics 4</li>
          <li>Hotjar heatmaps</li>
          <li>Conversion tracking</li>
          <li>A/B testing</li>
        </ul>
        
        <h3>9.3 Marketing Cookies</h3>
        <p>For your campaigns:</p>
        <ul>
          <li>Google Ads pixels</li>
          <li>Facebook pixel</li>
          <li>Attribution tracking</li>
        </ul>
        
        <h3>9.4 Cookie Control</h3>
        <p>Manage at: startupgpt.pro/cookie-preferences</p>
        
        <h2>10. AI TRANSPARENCY</h2>
        
        <h3>10.1 How Our AI Agents Work</h3>
        <ul>
          <li><strong>Training Data</strong>: Successful startup patterns</li>
          <li><strong>Processing</strong>: Real-time analysis and generation</li>
          <li><strong>Learning</strong>: Aggregate improvements only</li>
          <li><strong>Isolation</strong>: Your data never trains models for others</li>
        </ul>
        
        <h3>10.2 AI-Generated Content</h3>
        <ul>
          <li>You own all generated content</li>
          <li>No warranties on AI accuracy</li>
          <li>Human review recommended</li>
          <li>Unique to your inputs</li>
        </ul>
        
        <h3>10.3 AI Limitations</h3>
        <ul>
          <li>Results vary by input quality</li>
          <li>Not legal or financial advice</li>
          <li>Requires human judgment</li>
          <li>Success not guaranteed (but we try!)</li>
        </ul>
        
        <h2>11. CHILDREN'S PRIVACY</h2>
        <p>StartupGPT is for adults 18+ only. We don't knowingly collect data from minors. If discovered, immediate deletion.</p>
        
        <h2>12. CALIFORNIA PRIVACY RIGHTS</h2>
        
        <h3>12.1 CCPA Rights for California Residents</h3>
        <ul>
          <li>Know what personal information we collect</li>
          <li>Delete personal information</li>
          <li>Opt-out of "sales" (we don't sell data)</li>
          <li>Non-discrimination for exercising rights</li>
        </ul>
        
        <h3>12.2 Shine the Light</h3>
        <p>California residents can request information about disclosures to third parties.</p>
        
        <h2>13. MARKETING COMMUNICATIONS</h2>
        
        <h3>13.1 What We Send</h3>
        <ul>
          <li>Platform updates and features</li>
          <li>Success tips from top performers</li>
          <li>Community highlights</li>
          <li>Special offers</li>
        </ul>
        
        <h3>13.2 Opt-Out Options</h3>
        <ul>
          <li>Unsubscribe link in every email</li>
          <li>Account dashboard preferences</li>
          <li>Email: unsubscribe@startupgpt.pro</li>
        </ul>
        
        <h2>14. CHANGES TO PRIVACY POLICY</h2>
        
        <h3>14.1 Notification Process</h3>
        <ul>
          <li>Email for material changes</li>
          <li>30-day notice period</li>
          <li>Dashboard notifications</li>
          <li>Version history available</li>
        </ul>
        
        <h2>15. SPECIAL FEATURES PRIVACY</h2>
        
        <h3>15.1 $10K Marketing Budget Feature</h3>
        <p>After 100 customers:</p>
        <ul>
          <li>Additional verification required</li>
          <li>Enhanced data sharing for campaigns</li>
          <li>Performance tracking across channels</li>
          <li>Separate consent process</li>
        </ul>
        
        <h3>15.2 Community Features</h3>
        <ul>
          <li>Profile visibility controls</li>
          <li>Message privacy settings</li>
          <li>Success story permissions</li>
          <li>Mentor matching preferences</li>
        </ul>
        
        <h3>15.3 AI Agent Memory</h3>
        <ul>
          <li>Session-based memory only</li>
          <li>No permanent user profiles</li>
          <li>Clear session option available</li>
          <li>Isolated between launches</li>
        </ul>
        
        <h2>16. PRIVACY BY DESIGN</h2>
        <p>Built-in privacy features:</p>
        <ul>
          <li>Data minimization defaults</li>
          <li>Privacy impact assessments</li>
          <li>Regular audits</li>
          <li>Security-first architecture</li>
          <li>Transparent AI processing</li>
        </ul>
        
        <h2>17. YOUR STARTUP'S PRIVACY</h2>
        <p>We help you build privacy-compliant startups:</p>
        <ul>
          <li>GDPR templates included</li>
          <li>Privacy policy generators</li>
          <li>Cookie consent tools</li>
          <li>Data protection guidance</li>
        </ul>
        
        <h2>18. CONTACT INFORMATION</h2>
        
        <h3>Privacy Team</h3>
        <p><strong>Email</strong>: privacy@startupgpt.pro<br/>
        <strong>DPO</strong>: dpo@startupgpt.pro<br/>
        <strong>Support</strong>: support@startupgpt.pro</p>
        
        <h3>Response Commitments</h3>
        <ul>
          <li>Acknowledgment: 24 hours</li>
          <li>Simple requests: 72 hours</li>
          <li>Complex requests: 30 days</li>
          <li>Urgent security: Immediate</li>
        </ul>
        
        <h2>19. DISPUTE RESOLUTION</h2>
        
        <h3>19.1 Process</h3>
        <ol>
          <li>Direct resolution attempt</li>
          <li>Mediation option</li>
          <li>Binding arbitration</li>
          <li>German courts as last resort</li>
        </ol>
        
        <h3>19.2 EU Dispute Resolution</h3>
        <p>EU Online Dispute Resolution Platform available</p>
        
        <h2>20. CLOSING COMMITMENT</h2>
        <p>We're building the future of startup launching. Your privacy isn't just a legal requirement—it's fundamental to trust. We protect your ideas like they're our own (but they're not, they're 100% yours).</p>
        
        <p><strong>Remember</strong>: Your next billion-dollar idea deserves billion-dollar privacy protection.</p>
        
        <hr/>
        
        <p><strong>Questions?</strong> Reach out at privacy@startupgpt.pro</p>
        
        <p><strong>Last Updated</strong>: August 1, 2025<br/>
        <strong>Version</strong>: 1.0</p>
        
        <p><em>P.S. - Unlike your competitors, we'll never see your brilliant ideas. Our AI agents are like Vegas—what happens in your account, stays in your account.</em></p>
      `},terms:{title:"Terms and Conditions",content:`
        <h1>TERMS AND CONDITIONS</h1>
        
        <h2><strong>StartupGPT</strong><br/>
        <em>AI-Powered Startup Platform</em></h2>
        
        <p><strong>Effective Date</strong>: August 1, 2025<br/>
        <strong>Last Updated</strong>: August 1, 2025</p>
        
        <h2>1. ACCEPTANCE OF TERMS</h2>
        <p>By accessing or using StartupGPT ("Platform", "Service", "we", "us", "our"), you ("User", "Founder", "you") agree to these Terms and Conditions ("Terms"). If you disagree, don't use our Service. Simple as that.</p>
        <p><strong>Age Requirement</strong>: You must be 18+ to use StartupGPT. We're building serious businesses here.</p>
        
        <h2>2. SERVICE DESCRIPTION</h2>
        
        <h3>2.1 What StartupGPT Is</h3>
        <p>StartupGPT is your AI-powered virtual co-founder that helps you go from idea to paying customers in 30 days through:</p>
        <ul>
          <li>Specialized AI agents working 24/7</li>
          <li>Automated market validation</li>
          <li>MVP development guidance</li>
          <li>Marketing campaign execution</li>
          <li>Customer acquisition strategies</li>
          <li>Community support</li>
        </ul>
        
        <h3>2.2 What StartupGPT Is NOT</h3>
        <ul>
          <li>A guarantee of business success</li>
          <li>Legal or financial advice</li>
          <li>A replacement for human judgment</li>
          <li>A get-rich-quick scheme</li>
        </ul>
        
        <h2>3. ACCOUNT REGISTRATION</h2>
        
        <h3>3.1 Account Requirements</h3>
        <ul>
          <li>Accurate, complete information</li>
          <li>Secure password (seriously, not "password123")</li>
          <li>One account per person</li>
          <li>Maintain current contact info</li>
        </ul>
        
        <h3>3.2 Account Security</h3>
        <p>You're responsible for:</p>
        <ul>
          <li>Keeping credentials confidential</li>
          <li>All activity under your account</li>
          <li>Notifying us of unauthorized access</li>
          <li>Not sharing accounts (each founder needs their own)</li>
        </ul>
        
        <h2>4. SUBSCRIPTION PLANS & PRICING</h2>
        
        <h3>4.1 Presale Pricing (50% OFF - Valid Until September 15, 2025)</h3>
        <p><strong>Limited Time Presale - Save 50% on All Plans:</strong></p>
        <ul>
          <li><strong>Solopreneur</strong>: $497 (Regular: $997) - 1 startup launch</li>
          <li><strong>Entrepreneur</strong>: $1,397 (Regular: $2,991) - 3 startup launches</li>
          <li><strong>Multipreneur</strong>: $3,997 (Regular: $9,970) - 10 startup launches + custom AI training</li>
        </ul>
        <p><em>Presale pricing ends September 15, 2025. Prices will double after presale period.</em></p>
        
        <h3>4.2 What's Included in ALL Plans</h3>
        <ul>
          <li>Specialized AI Agents (Market Research, Business Model, Customer Discovery, MVP Builder, Growth Hacking, Pitch Deck)</li>
          <li>Google Ads marketing budget</li>
          <li>Social media marketing budget</li>
          <li>Private founder community access</li>
          <li>All platform updates</li>
          <li>30-day money-back guarantee</li>
        </ul>
        
        <h3>4.3 Payment Terms</h3>
        <ul>
          <li>One-time payment (no hidden subscriptions)</li>
          <li>Processed securely via Stripe</li>
          <li>All prices in USD</li>
          <li>Taxes additional where applicable</li>
          <li>Presale prices are final (no additional discounts)</li>
        </ul>
        
        <h2 id="refund-section">5. 30-DAY MONEY-BACK GUARANTEE</h2>
        
        <h3>5.1 Our Promise</h3>
        <p>First paying customer in 30 days or your money back. Period.</p>
        
        <h3>5.2 Guarantee Conditions</h3>
        <p>To qualify for refund:</p>
        <ul>
          <li>Complete all AI agent workflows</li>
          <li>Launch your MVP</li>
          <li>Execute provided marketing strategies</li>
          <li>Document your efforts</li>
          <li>Request within 35 days of purchase</li>
        </ul>
        
        <h3>5.3 What Disqualifies You</h3>
        <ul>
          <li>Not following AI recommendations</li>
          <li>Incomplete implementation</li>
          <li>Pursuing illegal business ideas</li>
          <li>Violating our Terms</li>
          <li>Previous refund received</li>
        </ul>
        
        <h2>6. USAGE RIGHTS & RESTRICTIONS</h2>
        
        <h3>6.1 What You CAN Do</h3>
        <ul>
          <li>Launch legitimate startups</li>
          <li>Use AI-generated content for your business</li>
          <li>Access community resources</li>
          <li>Request human support</li>
          <li>Build multiple startups (per your plan)</li>
        </ul>
        
        <h3>6.2 What You CAN'T Do</h3>
        <ul>
          <li>Resell or share your account</li>
          <li>Use for illegal activities</li>
          <li>Scrape or reverse-engineer our AI</li>
          <li>Spam the community</li>
          <li>Generate harmful content</li>
          <li>Exceed your launch limit</li>
          <li>Create competitor platforms</li>
        </ul>
        
        <h2>7. INTELLECTUAL PROPERTY</h2>
        
        <h3>7.1 Your Content</h3>
        <ul>
          <li>You own your startup ideas</li>
          <li>You own AI-generated content for your use</li>
          <li>You grant us license to process your data</li>
          <li>You're responsible for IP compliance</li>
        </ul>
        
        <h3>7.2 Our Property</h3>
        <ul>
          <li>The Platform and AI agents</li>
          <li>StartupGPT branding</li>
          <li>Proprietary algorithms</li>
          <li>Training methodologies</li>
        </ul>
        
        <h3>7.3 Community Content</h3>
        <ul>
          <li>Shared with permission only</li>
          <li>Success stories require consent</li>
          <li>Anonymous metrics aggregated</li>
          <li>No ownership claims on user startups</li>
        </ul>
        
        <h2>8. AI SERVICES DISCLOSURE</h2>
        
        <h3>8.1 AI Capabilities</h3>
        <p>Our AI agents:</p>
        <ul>
          <li>Generate recommendations based on patterns</li>
          <li>Create content from your inputs</li>
          <li>Analyze market data</li>
          <li>Suggest strategies</li>
        </ul>
        
        <h3>8.2 AI Limitations</h3>
        <ul>
          <li>Not infallible (even AI makes mistakes)</li>
          <li>Requires human oversight</li>
          <li>Can't guarantee uniqueness</li>
          <li>May produce biased results</li>
          <li>Not legal/financial advice</li>
        </ul>
        
        <h3>8.3 Your Responsibilities</h3>
        <ul>
          <li>Review all AI output</li>
          <li>Make independent decisions</li>
          <li>Verify recommendations</li>
          <li>Ensure legal compliance</li>
        </ul>
        
        <h2>9. MARKETING BUDGET MANAGEMENT</h2>
        
        <h3>9.1 Included Ad Spend</h3>
        <p>Each plan includes marketing budgets for:</p>
        <ul>
          <li>Google Ads campaigns</li>
          <li>Social media advertising</li>
          <li>Managed by our growth agents</li>
        </ul>
        
        <h3>9.2 Budget Terms</h3>
        <ul>
          <li>Use-it-or-lose-it within launch period</li>
          <li>Non-transferable between launches</li>
          <li>Requires ad account setup</li>
          <li>Performance not guaranteed</li>
        </ul>
        
        <h3>9.3 $10K VC-Backed Budget</h3>
        <p>After reaching 100 customers:</p>
        <ul>
          <li>Additional verification required</li>
          <li>Separate terms apply</li>
          <li>Professional management included</li>
          <li>Equity not required</li>
        </ul>
        
        <h2>10. COMMUNITY GUIDELINES</h2>
        
        <h3>10.1 Expected Behavior</h3>
        <ul>
          <li>Support fellow founders</li>
          <li>Share constructive feedback</li>
          <li>Respect confidentiality</li>
          <li>Celebrate wins together</li>
        </ul>
        
        <h3>10.2 Prohibited Actions</h3>
        <ul>
          <li>Soliciting for services</li>
          <li>Poaching ideas</li>
          <li>Harassment or discrimination</li>
          <li>Spreading false information</li>
          <li>Competitive recruitment</li>
        </ul>
        
        <h3>10.3 Enforcement</h3>
        <p>Violations may result in:</p>
        <ul>
          <li>Warning</li>
          <li>Temporary suspension</li>
          <li>Permanent ban</li>
          <li>No refunds for banned users</li>
        </ul>
        
        <h2>11. WARRANTIES AND DISCLAIMERS</h2>
        
        <h3>11.1 What We Promise</h3>
        <ul>
          <li>Platform availability (99% uptime target)</li>
          <li>AI agents will function as described</li>
          <li>Secure data handling</li>
          <li>Responsive support</li>
        </ul>
        
        <h3>11.2 What We DON'T Promise</h3>
        <ul>
          <li>Business success</li>
          <li>Specific revenue outcomes</li>
          <li>Legal compliance of your startup</li>
          <li>Third-party service availability</li>
        </ul>
        
        <h3>11.3 "AS IS" Basis</h3>
        <p>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</p>
        
        <h2>12. LIMITATION OF LIABILITY</h2>
        
        <h3>12.1 Maximum Liability</h3>
        <p>Our total liability shall not exceed the amount you paid for your current plan.</p>
        
        <h3>12.2 No Liability For</h3>
        <ul>
          <li>Lost profits or revenue</li>
          <li>Business failure</li>
          <li>Indirect damages</li>
          <li>Third-party claims</li>
          <li>Force majeure events</li>
        </ul>
        
        <h3>12.3 Exceptions</h3>
        <p>Limitations don't apply to:</p>
        <ul>
          <li>Gross negligence or willful misconduct</li>
          <li>Death or personal injury</li>
          <li>Violations of applicable law</li>
        </ul>
        
        <h2>13. INDEMNIFICATION</h2>
        <p>You agree to defend and hold us harmless from claims arising from:</p>
        <ul>
          <li>Your use of the Platform</li>
          <li>Your startup's activities</li>
          <li>Violation of these Terms</li>
          <li>Infringement of third-party rights</li>
          <li>Your marketing campaigns</li>
        </ul>
        
        <h2>14. CANCELLATION AND TERMINATION</h2>
        
        <h3>14.1 Your Cancellation Rights</h3>
        <ul>
          <li>Cancel anytime (no refunds after 30 days)</li>
          <li>Download your data before cancellation</li>
          <li>Unused launches expire after 12 months</li>
        </ul>
        
        <h3>14.2 Our Termination Rights</h3>
        <p>We may terminate for:</p>
        <ul>
          <li>Terms violations</li>
          <li>Illegal activities</li>
          <li>Non-payment</li>
          <li>Extended inactivity (12+ months)</li>
        </ul>
        
        <h3>14.3 Effect of Termination</h3>
        <ul>
          <li>Access ends immediately</li>
          <li>Data deleted after 90 days</li>
          <li>No refunds for termination due to violations</li>
        </ul>
        
        <h2>15. DISPUTE RESOLUTION</h2>
        
        <h3>15.1 Informal Resolution</h3>
        <p>First, let's talk it out via email at support@startupgpt.pro</p>
        
        <h3>15.2 Formal Process</h3>
        <p>If needed:</p>
        <ol>
          <li>Mediation (split costs)</li>
          <li>Binding arbitration</li>
          <li>Individual claims only (no class actions)</li>
        </ol>
        
        <h3>15.3 Exceptions</h3>
        <p>Small claims court available for qualifying disputes</p>
        
        <h2>16. PRESALE TERMS AND CONDITIONS</h2>
        
        <h3>16.1 Presale Period</h3>
        <p>The presale runs until September 15, 2025, offering 50% off all regular prices.</p>
        
        <h3>16.2 Presale Benefits</h3>
        <ul>
          <li>50% discount on all plans</li>
          <li>Lifetime price lock (never pay more)</li>
          <li>Early access to new features</li>
          <li>Founding member status in community</li>
        </ul>
        
        <h3>16.3 Presale Limitations</h3>
        <ul>
          <li>Limited availability</li>
          <li>No additional discounts or coupons</li>
          <li>Non-transferable</li>
          <li>Prices double after September 15, 2025</li>
        </ul>
        
        <h2>17. PRIVACY AND DATA PROTECTION</h2>
        
        <h3>17.1 Privacy Policy</h3>
        <p>Our Privacy Policy governs data handling. Key points:</p>
        <ul>
          <li>GDPR compliant</li>
          <li>Your startup data is confidential</li>
          <li>AI training on aggregate data only</li>
          <li>Strong security measures</li>
        </ul>
        
        <h3>17.2 Data Ownership</h3>
        <ul>
          <li>You own your startup data</li>
          <li>We delete upon request</li>
          <li>Portable format available</li>
        </ul>
        
        <h2>18. THIRD-PARTY SERVICES</h2>
        
        <h3>18.1 Integrations</h3>
        <p>We integrate with:</p>
        <ul>
          <li>Stripe (payments)</li>
          <li>Google Ads (marketing)</li>
          <li>Meta/Facebook (advertising)</li>
          <li>AI providers (OpenAI, Anthropic)</li>
        </ul>
        
        <h3>18.2 Third-Party Terms</h3>
        <p>You must comply with their terms when using integrations</p>
        
        <h3>18.3 No Liability</h3>
        <p>We're not responsible for third-party service issues</p>
        
        <h2>19. MODIFICATIONS TO TERMS</h2>
        
        <h3>19.1 Right to Modify</h3>
        <p>We may update these Terms with:</p>
        <ul>
          <li>30-day notice for material changes</li>
          <li>Email notification</li>
          <li>Continued use = acceptance</li>
        </ul>
        
        <h3>19.2 Grandfathering</h3>
        <p>Existing users keep their plan benefits</p>
        
        <h3>19.3 Presale Benefits</h3>
        <p>Users who purchase during presale (before September 15, 2025) lock in their discounted price for life. This pricing will never increase for presale purchasers.</p>
        
        <h2>20. EXPORT CONTROLS</h2>
        <p>You agree not to use StartupGPT in violation of export laws or sanctions.</p>
        
        <h2>21. ASSIGNMENT</h2>
        <p>You can't transfer your account or rights. We can assign our rights in connection with a business transaction.</p>
        
        <h2>22. GOVERNING LAW</h2>
        <p>These Terms are governed by German law, excluding conflict of law provisions.</p>
        
        <h2>23. ENTIRE AGREEMENT</h2>
        <p>These Terms and our Privacy Policy constitute the complete agreement between us.</p>
        
        <h2>24. SURVIVAL</h2>
        <p>Provisions that should survive termination will, including IP rights, limitations of liability, and dispute resolution.</p>
        
        <h2>25. WAIVER AND SEVERABILITY</h2>
        <ul>
          <li>No waiver unless in writing</li>
          <li>Invalid provisions will be modified to be enforceable</li>
          <li>Remainder stays in effect</li>
        </ul>
        
        <h2>26. FORCE MAJEURE</h2>
        <p>Neither party liable for delays due to causes beyond reasonable control (acts of God, war, pandemic, etc.)</p>
        
        <h2>27. BETA FEATURES</h2>
        
        <h3>27.1 Early Access</h3>
        <p>Some users may get beta features:</p>
        <ul>
          <li>Provided "AS IS"</li>
          <li>May be buggy</li>
          <li>Can be discontinued</li>
          <li>Feedback encouraged</li>
        </ul>
        
        <h2>28. SUCCESS METRICS</h2>
        
        <h3>28.1 Reporting</h3>
        <p>You agree to:</p>
        <ul>
          <li>Report customer acquisition honestly</li>
          <li>Share success metrics (anonymously)</li>
          <li>Participate in case studies (optional)</li>
        </ul>
        
        <h2>29. REFERRAL PROGRAM</h2>
        <p>Terms for referral rewards (if applicable) provided separately.</p>
        
        <h2>30. PROFESSIONAL SERVICES</h2>
        <p>Additional coaching or consulting services have separate agreements.</p>
        
        <h2>31. CONTACT INFORMATION</h2>
        <p><strong>Support</strong>: support@startupgpt.pro<br/>
        <strong>Legal</strong>: legal@startupgpt.pro<br/>
        <strong>Privacy</strong>: privacy@startupgpt.pro</p>
        
        <p><strong>Business Hours</strong>: 24/7 AI, Human support M-F 9-5 CET</p>
        
        <hr/>
        
        <p><strong>BY USING STARTUPGPT, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.</strong></p>
        
        <p><em>Remember: We're here to help you succeed. These terms protect both of us so we can focus on what matters - launching your startup! 🚀</em></p>
        
        <p><strong>Last Updated</strong>: August 1, 2025<br/>
        <strong>Version</strong>: 1.0</p>
      `},refund:{title:"Refund Policy",content:`
        <h2>Refund Policy for StartupGPT.pro</h2>
        <p><strong>Effective Date:</strong> ${new Date().toLocaleDateString()}</p>

        <h3>Pre-Sale Period</h3>
        <p><strong>During the pre-sale period (before September 15, 2025), all sales are final and non-refundable.</strong></p>
        <p>By purchasing during the pre-sale, you acknowledge that:</p>
        <ul>
          <li>You are receiving a significant discount (50% off regular price)</li>
          <li>You understand the product is in active development</li>
          <li>No refunds will be issued during the pre-sale period</li>
        </ul>

        <h3>Post-Launch Refund Policy</h3>
        <p><strong>After the official launch (September 15, 2025), we offer a 7-day money-back guarantee.</strong></p>
        
        <h4>Eligibility for Refund</h4>
        <p>To be eligible for a refund post-launch:</p>
        <ul>
          <li>Request must be made within 7 days of purchase</li>
          <li>You must not have extensively used the AI agents (reasonable trial use is acceptable)</li>
          <li>You must provide feedback on why the product didn't meet your needs</li>
        </ul>

        <h4>How to Request a Refund</h4>
        <ol>
          <li>Email refunds@startupgpt.pro within 7 days of purchase</li>
          <li>Include your order number and reason for refund</li>
          <li>Our team will review your request within 48 hours</li>
          <li>If approved, refunds will be processed within 5-10 business days</li>
        </ol>

        <h3>Revenue Share Model</h3>
        <p>The revenue share component of our pricing is non-refundable as it is based on actual success and value delivered.</p>

        <h3>Exceptional Circumstances</h3>
        <p>We may consider refunds outside these terms in cases of:</p>
        <ul>
          <li>Technical issues preventing access to the platform</li>
          <li>Duplicate purchases</li>
          <li>Other exceptional circumstances at our discretion</li>
        </ul>

        <h3>Contact</h3>
        <p>For refund requests or questions, email: refunds@startupgpt.pro</p>
      `},cookies:{title:"Cookie Policy",content:`
        <h1>COOKIE POLICY</h1>
        
        <h2><strong>StartupGPT</strong><br/>
        <em>AI-Powered Startup Platform</em></h2>
        
        <p><strong>Effective Date</strong>: August 1, 2025<br/>
        <strong>Last Updated</strong>: August 1, 2025</p>
        
        <h2>1. WHAT ARE COOKIES?</h2>
        <p>Cookies are small text files placed on your device when you visit our website. They're like digital Post-it notes that help us remember your preferences and understand how you use StartupGPT.</p>
        <p><strong>Why we use them</strong>: To make your experience better, analyze platform usage, and show relevant ads to potential founders.</p>
        
        <h2>2. TYPES OF COOKIES WE USE</h2>
        
        <h3>2.1 Essential Cookies (Always Active)</h3>
        <p>These cookies are necessary for StartupGPT to function. You can't turn them off without breaking things.</p>
        
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>session_id</code></td>
              <td>Keeps you logged in</td>
              <td>Session</td>
            </tr>
            <tr>
              <td><code>auth_token</code></td>
              <td>Secure authentication</td>
              <td>7 days</td>
            </tr>
            <tr>
              <td><code>csrf_token</code></td>
              <td>Security protection</td>
              <td>Session</td>
            </tr>
            <tr>
              <td><code>cookie_consent</code></td>
              <td>Remembers your cookie choices</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>
        
        <h3>2.2 Analytics Cookies (Optional)</h3>
        <p>Help us understand how you use the platform so we can improve it.</p>
        
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>_ga</code></td>
              <td>Google Analytics</td>
              <td>Distinguishes users</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td><code>_gid</code></td>
              <td>Google Analytics</td>
              <td>Distinguishes users</td>
              <td>24 hours</td>
            </tr>
            <tr>
              <td><code>_gat</code></td>
              <td>Google Analytics</td>
              <td>Throttles request rate</td>
              <td>1 minute</td>
            </tr>
            <tr>
              <td><code>_ga_*</code></td>
              <td>Google Analytics 4</td>
              <td>Maintains session state</td>
              <td>2 years</td>
            </tr>
          </tbody>
        </table>
        
        <p><strong>What Google Analytics tracks</strong>:</p>
        <ul>
          <li>Pages visited</li>
          <li>Time on platform</li>
          <li>Feature usage</li>
          <li>General location (city level)</li>
          <li>Device type</li>
        </ul>
        
        <p><strong>What it DOESN'T track</strong>:</p>
        <ul>
          <li>Personal information</li>
          <li>Startup ideas or data</li>
          <li>Individual AI interactions</li>
        </ul>
        
        <h3>2.3 Marketing/Advertising Cookies (Optional)</h3>
        <p>Help us reach other founders and measure our marketing effectiveness.</p>
        
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>test_cookie</code></td>
              <td>Google Ads</td>
              <td>Checks if cookies enabled</td>
              <td>15 minutes</td>
            </tr>
            <tr>
              <td><code>_gcl_au</code></td>
              <td>Google Ads</td>
              <td>Conversion tracking</td>
              <td>90 days</td>
            </tr>
            <tr>
              <td><code>_gcl_aw</code></td>
              <td>Google Ads</td>
              <td>Conversion tracking</td>
              <td>90 days</td>
            </tr>
            <tr>
              <td><code>_gcl_dc</code></td>
              <td>Google Ads</td>
              <td>Conversion tracking</td>
              <td>90 days</td>
            </tr>
            <tr>
              <td><code>IDE</code></td>
              <td>Google/DoubleClick</td>
              <td>Ad targeting</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td><code>_fbp</code></td>
              <td>Facebook</td>
              <td>Ad tracking (if enabled)</td>
              <td>90 days</td>
            </tr>
          </tbody>
        </table>
        
        <p><strong>What marketing cookies do</strong>:</p>
        <ul>
          <li>Track if you came from an ad</li>
          <li>Measure ad campaign success</li>
          <li>Prevent showing you the same ad repeatedly</li>
          <li>Help us optimize marketing spend</li>
        </ul>
        
        <h2>3. YOUR COOKIE CHOICES</h2>
        
        <h3>3.1 Cookie Consent Banner</h3>
        <p>When you first visit StartupGPT, you'll see our cookie consent banner where you can:</p>
        <ul>
          <li><strong>Accept All</strong>: All cookies enabled</li>
          <li><strong>Reject Non-Essential</strong>: Only essential cookies</li>
          <li><strong>Customize</strong>: Choose specific categories</li>
        </ul>
        
        <h3>3.2 Change Your Preferences</h3>
        <p>Update your choices anytime at: <a href="/cookie-settings">startupgpt.pro/cookie-settings</a></p>
        
        <h3>3.3 Browser Controls</h3>
        <p>You can also manage cookies through your browser:</p>
        <ul>
          <li><strong>Chrome</strong>: Settings > Privacy and security > Cookies</li>
          <li><strong>Firefox</strong>: Settings > Privacy & Security > Cookies</li>
          <li><strong>Safari</strong>: Preferences > Privacy > Cookies</li>
          <li><strong>Edge</strong>: Settings > Privacy, search, and services > Cookies</li>
        </ul>
        
        <p><strong>Warning</strong>: Blocking all cookies will prevent you from logging in!</p>
        
        <h2>4. THIRD-PARTY COOKIES</h2>
        
        <h3>4.1 Our Partners</h3>
        <p>We work with trusted partners who may set cookies:</p>
        <ul>
          <li><strong>Stripe</strong>: Payment processing (essential)</li>
          <li><strong>Google</strong>: Analytics and advertising</li>
          <li><strong>Meta/Facebook</strong>: Advertising (if you opt-in)</li>
          <li><strong>LinkedIn</strong>: Professional targeting (if enabled)</li>
        </ul>
        
        <h3>4.2 Their Privacy Policies</h3>
        <ul>
          <li>Google: <a href="https://policies.google.com/privacy">policies.google.com/privacy</a></li>
          <li>Stripe: <a href="https://stripe.com/privacy">stripe.com/privacy</a></li>
          <li>Meta: <a href="https://facebook.com/privacy">facebook.com/privacy</a></li>
        </ul>
        
        <h2>5. COOKIES AND YOUR STARTUP DATA</h2>
        <p><strong>Important</strong>: Cookies DO NOT access or track:</p>
        <ul>
          <li>Your startup ideas</li>
          <li>AI-generated content</li>
          <li>Business plans</li>
          <li>Customer data</li>
          <li>Revenue information</li>
        </ul>
        <p>Cookies only track platform usage, not your confidential business information.</p>
        
        <h2>6. DO NOT TRACK SIGNALS</h2>
        <p>We currently don't respond to "Do Not Track" browser signals because there's no industry standard. However, you can use our cookie preferences to control tracking.</p>
        
        <h2>7. COOKIES ON MOBILE</h2>
        
        <h3>7.1 Mobile Apps</h3>
        <p>Our mobile apps (when launched) use similar technologies:</p>
        <ul>
          <li>Device identifiers</li>
          <li>Mobile analytics</li>
          <li>App preferences</li>
        </ul>
        
        <h3>7.2 Mobile Browsers</h3>
        <p>Cookie settings work the same on mobile browsers.</p>
        
        <h2>8. INTERNATIONAL VISITORS</h2>
        
        <h3>8.1 EU/EEA Visitors (GDPR)</h3>
        <ul>
          <li>Explicit consent required for non-essential cookies</li>
          <li>Right to withdraw consent anytime</li>
          <li>Cookies processed under legitimate interest or consent</li>
        </ul>
        
        <h3>8.2 California Residents (CCPA)</h3>
        <ul>
          <li>Right to opt-out of "sale" (we don't sell data)</li>
          <li>Cookie choices respected</li>
        </ul>
        
        <h3>8.3 Other Regions</h3>
        <p>We respect cookie preferences globally.</p>
        
        <h2>9. COOKIE POLICY UPDATES</h2>
        <p>We may update this policy to:</p>
        <ul>
          <li>Add new cookie types</li>
          <li>Reflect new features</li>
          <li>Comply with regulations</li>
        </ul>
        <p>Updates announced via platform notification.</p>
        
        <h2>10. QUESTIONS ABOUT COOKIES?</h2>
        <p><strong>Cookie Support</strong>: privacy@startupgpt.pro<br/>
        <strong>General Support</strong>: support@startupgpt.pro</p>
        <p><strong>Response time</strong>: Within 48 hours</p>
        
        <hr/>
        
        <h2>QUICK COOKIE GUIDE</h2>
        
        <p><strong>🍪 Essential = Always On</strong></p>
        <ul>
          <li>Keep you logged in</li>
          <li>Remember your settings</li>
          <li>Secure your account</li>
        </ul>
        
        <p><strong>📊 Analytics = Your Choice</strong></p>
        <ul>
          <li>Improve the platform</li>
          <li>Understand feature usage</li>
          <li>Anonymous data only</li>
        </ul>
        
        <p><strong>📢 Marketing = Your Choice</strong></p>
        <ul>
          <li>Find more founders</li>
          <li>Measure ad success</li>
          <li>Optimize our marketing</li>
        </ul>
        
        <p><strong>Your data = Always Private</strong></p>
        <ul>
          <li>Cookies don't see your startup secrets</li>
          <li>We never share your information</li>
          <li>You control your preferences</li>
        </ul>
        
        <hr/>
        
        <p><strong>Manage Your Cookies</strong>: <a href="/cookie-settings">startupgpt.pro/cookie-settings</a></p>
        
        <p><em>Building startups is sweet enough without unwanted cookies! 🚀</em></p>
        
        <p><strong>Version</strong>: 1.0<br/>
        <strong>Last Updated</strong>: August 1, 2025</p>
      `}};return{isOpen:t,currentPage:i,scrollToSection:s,openLegalPage:r,closeLegalPage:a,legalContent:l}},ef=()=>{const t=new Date().getFullYear(),{isOpen:e,currentPage:i,scrollToSection:n,openLegalPage:s,closeLegalPage:o,legalContent:r}=Jh(),a={product:[{name:"Features",href:"#features"},{name:"How It Works",href:"#how-it-works"},{name:"Pricing",href:"#pricing"},{name:"Testimonials",href:"#testimonials"}],company:[{name:"Blog",href:"/blog"},{name:"Contact",href:"mailto:support@startupgpt.pro"},{name:"FAQ",href:"#faq"}],legal:[{name:"Privacy Policy",href:"#",type:"privacy"},{name:"Terms of Service",href:"#",type:"terms"},{name:"Refund Policy",href:"#",type:"refund"},{name:"Cookie Policy",href:"#",type:"cookies"}]};return u.jsxs("footer",{className:"bg-gray-900 text-gray-300",children:[u.jsxs("div",{className:"max-width-container section-padding py-12",children:[u.jsxs("div",{className:"grid md:grid-cols-5 gap-8 mb-8",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"StartupGPT"}),u.jsx("p",{className:"text-gray-400 mb-4",children:"Your AI-powered co-founder. Go from idea to paying customers in 30 days. Join 500+ founders who generated $7.5M+ revenue."})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-white mb-4",children:"Product"}),u.jsx("ul",{className:"space-y-2",children:a.product.map(l=>u.jsx("li",{children:u.jsx("a",{href:l.href,className:"hover:text-white transition-colors",children:l.name})},l.name))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-white mb-4",children:"Company"}),u.jsx("ul",{className:"space-y-2",children:a.company.map(l=>u.jsx("li",{children:u.jsx("a",{href:l.href,className:"hover:text-white transition-colors",children:l.name})},l.name))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-white mb-4",children:"Legal"}),u.jsx("ul",{className:"space-y-2",children:a.legal.map(l=>u.jsx("li",{children:u.jsx("button",{onClick:()=>{l.type==="refund"?s("terms","refund-section"):s(l.type)},className:"hover:text-white transition-colors text-left",children:l.name})},l.name))})]})]}),u.jsx("div",{className:"pt-8 border-t border-gray-800",children:u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[u.jsxs("p",{className:"text-sm text-gray-400",children:["© ",t," StartupGPT. All rights reserved. Built with love ❤️ by multipreneurs to make your dreams come true"]}),u.jsxs("div",{className:"flex items-center gap-6 text-sm",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("svg",{className:"w-4 h-4 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),u.jsx("span",{className:"text-gray-400",children:"SSL Secured"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("img",{src:"/images/stripe-badge-white.svg",alt:"Stripe",className:"h-4"}),u.jsx("span",{className:"text-gray-400",children:"Powered by Stripe"})]})]})]})})]}),u.jsx(Zh,{isOpen:e,onClose:o,title:r[i].title,scrollToId:n,children:u.jsx("div",{dangerouslySetInnerHTML:{__html:r[i].content}})})]})},tf=new Ha({defaultOptions:{queries:{staleTime:60*1e3,retry:1}}});function mr(){return w.useEffect(()=>{const t=localStorage.getItem("cookieConsent");t&&JSON.parse(t).analytics},[]),u.jsx(Za,{children:u.jsx(Qa,{client:tf,children:u.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200",children:[u.jsx(el,{}),u.jsx(Eh,{}),u.jsx(Dh,{}),u.jsx(Oh,{}),u.jsx(Vh,{}),u.jsx(Qh,{}),u.jsx(Xh,{}),u.jsx(ef,{}),u.jsx(kh,{})]})})})}const Ht=document.getElementById("root");Ht&&Ht.hasChildNodes()?Zt.hydrateRoot(Ht,u.jsx(Un.StrictMode,{children:u.jsx(mr,{})})):Zt.createRoot(Ht).render(u.jsx(Un.StrictMode,{children:u.jsx(mr,{})}));
//# sourceMappingURL=index-xbZAnEr8.js.map
