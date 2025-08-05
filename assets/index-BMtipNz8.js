var fo=Object.defineProperty;var Gn=t=>{throw TypeError(t)};var mo=(t,e,i)=>e in t?fo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Un=(t,e,i)=>mo(t,typeof e!="symbol"?e+"":e,i),pi=(t,e,i)=>e.has(t)||Gn("Cannot "+i);var y=(t,e,i)=>(pi(t,e,"read from private field"),i?i.call(t):e.get(t)),V=(t,e,i)=>e.has(t)?Gn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),L=(t,e,i,n)=>(pi(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),Q=(t,e,i)=>(pi(t,e,"access private method"),i);var Bt=(t,e,i,n)=>({set _(s){L(t,e,s,i)},get _(){return y(t,e,n)}});import{r as w,a as po,g as go,R as yo}from"./react-vendor-CIP6LD3P.js";import{c as Ji,a as vo}from"./utils-BzrgaQw0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();var wr={exports:{}},ri={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=w,bo=Symbol.for("react.element"),wo=Symbol.for("react.fragment"),So=Object.prototype.hasOwnProperty,Po=xo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ao={key:!0,ref:!0,__self:!0,__source:!0};function Sr(t,e,i){var n,s={},a=null,r=null;i!==void 0&&(a=""+i),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(r=e.ref);for(n in e)So.call(e,n)&&!Ao.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:bo,type:t,key:a,ref:r,props:s,_owner:Po.current}}ri.Fragment=wo;ri.jsx=Sr;ri.jsxs=Sr;wr.exports=ri;var o=wr.exports,Ii={},_n=po;Ii.createRoot=_n.createRoot,Ii.hydrateRoot=_n.hydrateRoot;var ai=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},oi=typeof window>"u"||"Deno"in globalThis;function he(){}function ko(t,e){return typeof t=="function"?t(e):t}function Co(t){return typeof t=="number"&&t>=0&&t!==1/0}function To(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Mi(t,e){return typeof t=="function"?t(e):t}function jo(t,e){return typeof t=="function"?t(e):t}function Wn(t,e){const{type:i="all",exact:n,fetchStatus:s,predicate:a,queryKey:r,stale:l}=t;if(r){if(n){if(e.queryHash!==Zi(r,e.options))return!1}else if(!Ct(e.queryKey,r))return!1}if(i!=="all"){const c=e.isActive();if(i==="active"&&!c||i==="inactive"&&c)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||s&&s!==e.state.fetchStatus||a&&!a(e))}function zn(t,e){const{exact:i,status:n,predicate:s,mutationKey:a}=t;if(a){if(!e.options.mutationKey)return!1;if(i){if(kt(e.options.mutationKey)!==kt(a))return!1}else if(!Ct(e.options.mutationKey,a))return!1}return!(n&&e.state.status!==n||s&&!s(e))}function Zi(t,e){return((e==null?void 0:e.queryKeyHashFn)||kt)(t)}function kt(t){return JSON.stringify(t,(e,i)=>Ri(i)?Object.keys(i).sort().reduce((n,s)=>(n[s]=i[s],n),{}):i)}function Ct(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(i=>Ct(t[i],e[i])):!1}function Pr(t,e){if(t===e)return t;const i=qn(t)&&qn(e);if(i||Ri(t)&&Ri(e)){const n=i?t:Object.keys(t),s=n.length,a=i?e:Object.keys(e),r=a.length,l=i?[]:{},c=new Set(n);let u=0;for(let d=0;d<r;d++){const h=i?d:a[d];(!i&&c.has(h)||i)&&t[h]===void 0&&e[h]===void 0?(l[h]=void 0,u++):(l[h]=Pr(t[h],e[h]),l[h]===t[h]&&t[h]!==void 0&&u++)}return s===r&&u===s?t:l}return e}function qn(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Ri(t){if(!Yn(t))return!1;const e=t.constructor;if(e===void 0)return!0;const i=e.prototype;return!(!Yn(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Yn(t){return Object.prototype.toString.call(t)==="[object Object]"}function No(t){return new Promise(e=>{setTimeout(e,t)})}function Eo(t,e,i){return typeof i.structuralSharing=="function"?i.structuralSharing(t,e):i.structuralSharing!==!1?Pr(t,e):e}function Io(t,e,i=0){const n=[...t,e];return i&&n.length>i?n.slice(1):n}function Mo(t,e,i=0){const n=[e,...t];return i&&n.length>i?n.slice(0,-1):n}var en=Symbol();function Ar(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===en?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var _e,Ne,tt,fr,Ro=(fr=class extends ai{constructor(){super();V(this,_e);V(this,Ne);V(this,tt);L(this,tt,e=>{if(!oi&&window.addEventListener){const i=()=>e();return window.addEventListener("visibilitychange",i,!1),()=>{window.removeEventListener("visibilitychange",i)}}})}onSubscribe(){y(this,Ne)||this.setEventListener(y(this,tt))}onUnsubscribe(){var e;this.hasListeners()||((e=y(this,Ne))==null||e.call(this),L(this,Ne,void 0))}setEventListener(e){var i;L(this,tt,e),(i=y(this,Ne))==null||i.call(this),L(this,Ne,e(n=>{typeof n=="boolean"?this.setFocused(n):this.onFocus()}))}setFocused(e){y(this,_e)!==e&&(L(this,_e,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(i=>{i(e)})}isFocused(){var e;return typeof y(this,_e)=="boolean"?y(this,_e):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},_e=new WeakMap,Ne=new WeakMap,tt=new WeakMap,fr),kr=new Ro,it,Ee,nt,mr,Do=(mr=class extends ai{constructor(){super();V(this,it,!0);V(this,Ee);V(this,nt);L(this,nt,e=>{if(!oi&&window.addEventListener){const i=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",i,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",n)}}})}onSubscribe(){y(this,Ee)||this.setEventListener(y(this,nt))}onUnsubscribe(){var e;this.hasListeners()||((e=y(this,Ee))==null||e.call(this),L(this,Ee,void 0))}setEventListener(e){var i;L(this,nt,e),(i=y(this,Ee))==null||i.call(this),L(this,Ee,e(this.setOnline.bind(this)))}setOnline(e){y(this,it)!==e&&(L(this,it,e),this.listeners.forEach(n=>{n(e)}))}isOnline(){return y(this,it)}},it=new WeakMap,Ee=new WeakMap,nt=new WeakMap,mr),Xt=new Do;function Oo(){let t,e;const i=new Promise((s,a)=>{t=s,e=a});i.status="pending",i.catch(()=>{});function n(s){Object.assign(i,s),delete i.resolve,delete i.reject}return i.resolve=s=>{n({status:"fulfilled",value:s}),t(s)},i.reject=s=>{n({status:"rejected",reason:s}),e(s)},i}function Lo(t){return Math.min(1e3*2**t,3e4)}function Cr(t){return(t??"online")==="online"?Xt.isOnline():!0}var Tr=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function gi(t){return t instanceof Tr}function jr(t){let e=!1,i=0,n=!1,s;const a=Oo(),r=p=>{var b;n||(f(new Tr(p)),(b=t.abort)==null||b.call(t))},l=()=>{e=!0},c=()=>{e=!1},u=()=>kr.isFocused()&&(t.networkMode==="always"||Xt.isOnline())&&t.canRun(),d=()=>Cr(t.networkMode)&&t.canRun(),h=p=>{var b;n||(n=!0,(b=t.onSuccess)==null||b.call(t,p),s==null||s(),a.resolve(p))},f=p=>{var b;n||(n=!0,(b=t.onError)==null||b.call(t,p),s==null||s(),a.reject(p))},m=()=>new Promise(p=>{var b;s=P=>{(n||u())&&p(P)},(b=t.onPause)==null||b.call(t)}).then(()=>{var p;s=void 0,n||(p=t.onContinue)==null||p.call(t)}),x=()=>{if(n)return;let p;const b=i===0?t.initialPromise:void 0;try{p=b??t.fn()}catch(P){p=Promise.reject(P)}Promise.resolve(p).then(h).catch(P=>{var O;if(n)return;const C=t.retry??(oi?0:3),k=t.retryDelay??Lo,E=typeof k=="function"?k(i,P):k,T=C===!0||typeof C=="number"&&i<C||typeof C=="function"&&C(i,P);if(e||!T){f(P);return}i++,(O=t.onFail)==null||O.call(t,i,P),No(E).then(()=>u()?void 0:m()).then(()=>{e?f(P):x()})})};return{promise:a,cancel:r,continue:()=>(s==null||s(),a),cancelRetry:l,continueRetry:c,canStart:d,start:()=>(d()?x():m().then(x),a)}}var Vo=t=>setTimeout(t,0);function Fo(){let t=[],e=0,i=l=>{l()},n=l=>{l()},s=Vo;const a=l=>{e?t.push(l):s(()=>{i(l)})},r=()=>{const l=t;t=[],l.length&&s(()=>{n(()=>{l.forEach(c=>{i(c)})})})};return{batch:l=>{let c;e++;try{c=l()}finally{e--,e||r()}return c},batchCalls:l=>(...c)=>{a(()=>{l(...c)})},schedule:a,setNotifyFunction:l=>{i=l},setBatchNotifyFunction:l=>{n=l},setScheduler:l=>{s=l}}}var ie=Fo(),We,pr,Nr=(pr=class{constructor(){V(this,We)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Co(this.gcTime)&&L(this,We,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(oi?1/0:5*60*1e3))}clearGcTimeout(){y(this,We)&&(clearTimeout(y(this,We)),L(this,We,void 0))}},We=new WeakMap,pr),st,ze,ce,qe,X,Mt,Ye,fe,Se,gr,Bo=(gr=class extends Nr{constructor(e){super();V(this,fe);V(this,st);V(this,ze);V(this,ce);V(this,qe);V(this,X);V(this,Mt);V(this,Ye);L(this,Ye,!1),L(this,Mt,e.defaultOptions),this.setOptions(e.options),this.observers=[],L(this,qe,e.client),L(this,ce,y(this,qe).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,L(this,st,Uo(this.options)),this.state=e.state??y(this,st),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=y(this,X))==null?void 0:e.promise}setOptions(e){this.options={...y(this,Mt),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&y(this,ce).remove(this)}setData(e,i){const n=Eo(this.state.data,e,this.options);return Q(this,fe,Se).call(this,{data:n,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual}),n}setState(e,i){Q(this,fe,Se).call(this,{type:"setState",state:e,setStateOptions:i})}cancel(e){var n,s;const i=(n=y(this,X))==null?void 0:n.promise;return(s=y(this,X))==null||s.cancel(e),i?i.then(he).catch(he):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(y(this,st))}isActive(){return this.observers.some(e=>jo(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===en||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>Mi(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!To(this.state.dataUpdatedAt,e)}onFocus(){var i;const e=this.observers.find(n=>n.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(i=y(this,X))==null||i.continue()}onOnline(){var i;const e=this.observers.find(n=>n.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(i=y(this,X))==null||i.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),y(this,ce).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(i=>i!==e),this.observers.length||(y(this,X)&&(y(this,Ye)?y(this,X).cancel({revert:!0}):y(this,X).cancelRetry()),this.scheduleGc()),y(this,ce).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Q(this,fe,Se).call(this,{type:"invalidate"})}fetch(e,i){var u,d,h;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(y(this,X))return y(this,X).continueRetry(),y(this,X).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(m=>m.options.queryFn);f&&this.setOptions(f.options)}const n=new AbortController,s=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(L(this,Ye,!0),n.signal)})},a=()=>{const f=Ar(this.options,i),x=(()=>{const p={client:y(this,qe),queryKey:this.queryKey,meta:this.meta};return s(p),p})();return L(this,Ye,!1),this.options.persister?this.options.persister(f,x,this):f(x)},l=(()=>{const f={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:y(this,qe),state:this.state,fetchFn:a};return s(f),f})();(u=this.options.behavior)==null||u.onFetch(l,this),L(this,ze,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=l.fetchOptions)==null?void 0:d.meta))&&Q(this,fe,Se).call(this,{type:"fetch",meta:(h=l.fetchOptions)==null?void 0:h.meta});const c=f=>{var m,x,p,b;gi(f)&&f.silent||Q(this,fe,Se).call(this,{type:"error",error:f}),gi(f)||((x=(m=y(this,ce).config).onError)==null||x.call(m,f,this),(b=(p=y(this,ce).config).onSettled)==null||b.call(p,this.state.data,f,this)),this.scheduleGc()};return L(this,X,jr({initialPromise:i==null?void 0:i.initialPromise,fn:l.fetchFn,abort:n.abort.bind(n),onSuccess:f=>{var m,x,p,b;if(f===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(P){c(P);return}(x=(m=y(this,ce).config).onSuccess)==null||x.call(m,f,this),(b=(p=y(this,ce).config).onSettled)==null||b.call(p,f,this.state.error,this),this.scheduleGc()},onError:c,onFail:(f,m)=>{Q(this,fe,Se).call(this,{type:"failed",failureCount:f,error:m})},onPause:()=>{Q(this,fe,Se).call(this,{type:"pause"})},onContinue:()=>{Q(this,fe,Se).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),y(this,X).start()}},st=new WeakMap,ze=new WeakMap,ce=new WeakMap,qe=new WeakMap,X=new WeakMap,Mt=new WeakMap,Ye=new WeakMap,fe=new WeakSet,Se=function(e){const i=n=>{switch(e.type){case"failed":return{...n,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...Go(n.data,this.options),fetchMeta:e.meta??null};case"success":return L(this,ze,void 0),{...n,data:e.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return gi(s)&&s.revert&&y(this,ze)?{...y(this,ze),fetchStatus:"idle"}:{...n,error:s,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...e.state}}};this.state=i(this.state),ie.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),y(this,ce).notify({query:this,type:"updated",action:e})})},gr);function Go(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Cr(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Uo(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,i=e!==void 0,n=i?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var ge,yr,_o=(yr=class extends ai{constructor(e={}){super();V(this,ge);this.config=e,L(this,ge,new Map)}build(e,i,n){const s=i.queryKey,a=i.queryHash??Zi(s,i);let r=this.get(a);return r||(r=new Bo({client:e,queryKey:s,queryHash:a,options:e.defaultQueryOptions(i),state:n,defaultOptions:e.getQueryDefaults(s)}),this.add(r)),r}add(e){y(this,ge).has(e.queryHash)||(y(this,ge).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const i=y(this,ge).get(e.queryHash);i&&(e.destroy(),i===e&&y(this,ge).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){ie.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return y(this,ge).get(e)}getAll(){return[...y(this,ge).values()]}find(e){const i={exact:!0,...e};return this.getAll().find(n=>Wn(i,n))}findAll(e={}){const i=this.getAll();return Object.keys(e).length>0?i.filter(n=>Wn(e,n)):i}notify(e){ie.batch(()=>{this.listeners.forEach(i=>{i(e)})})}onFocus(){ie.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){ie.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},ge=new WeakMap,yr),ye,te,He,ve,Te,vr,Wo=(vr=class extends Nr{constructor(e){super();V(this,ve);V(this,ye);V(this,te);V(this,He);this.mutationId=e.mutationId,L(this,te,e.mutationCache),L(this,ye,[]),this.state=e.state||zo(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){y(this,ye).includes(e)||(y(this,ye).push(e),this.clearGcTimeout(),y(this,te).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){L(this,ye,y(this,ye).filter(i=>i!==e)),this.scheduleGc(),y(this,te).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){y(this,ye).length||(this.state.status==="pending"?this.scheduleGc():y(this,te).remove(this))}continue(){var e;return((e=y(this,He))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var a,r,l,c,u,d,h,f,m,x,p,b,P,C,k,E,T,O,F,D;const i=()=>{Q(this,ve,Te).call(this,{type:"continue"})};L(this,He,jr({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(M,U)=>{Q(this,ve,Te).call(this,{type:"failed",failureCount:M,error:U})},onPause:()=>{Q(this,ve,Te).call(this,{type:"pause"})},onContinue:i,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>y(this,te).canRun(this)}));const n=this.state.status==="pending",s=!y(this,He).canStart();try{if(n)i();else{Q(this,ve,Te).call(this,{type:"pending",variables:e,isPaused:s}),await((r=(a=y(this,te).config).onMutate)==null?void 0:r.call(a,e,this));const U=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,e));U!==this.state.context&&Q(this,ve,Te).call(this,{type:"pending",context:U,variables:e,isPaused:s})}const M=await y(this,He).start();return await((d=(u=y(this,te).config).onSuccess)==null?void 0:d.call(u,M,e,this.state.context,this)),await((f=(h=this.options).onSuccess)==null?void 0:f.call(h,M,e,this.state.context)),await((x=(m=y(this,te).config).onSettled)==null?void 0:x.call(m,M,null,this.state.variables,this.state.context,this)),await((b=(p=this.options).onSettled)==null?void 0:b.call(p,M,null,e,this.state.context)),Q(this,ve,Te).call(this,{type:"success",data:M}),M}catch(M){try{throw await((C=(P=y(this,te).config).onError)==null?void 0:C.call(P,M,e,this.state.context,this)),await((E=(k=this.options).onError)==null?void 0:E.call(k,M,e,this.state.context)),await((O=(T=y(this,te).config).onSettled)==null?void 0:O.call(T,void 0,M,this.state.variables,this.state.context,this)),await((D=(F=this.options).onSettled)==null?void 0:D.call(F,void 0,M,e,this.state.context)),M}finally{Q(this,ve,Te).call(this,{type:"error",error:M})}}finally{y(this,te).runNext(this)}}},ye=new WeakMap,te=new WeakMap,He=new WeakMap,ve=new WeakSet,Te=function(e){const i=n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=i(this.state),ie.batch(()=>{y(this,ye).forEach(n=>{n.onMutationUpdate(e)}),y(this,te).notify({mutation:this,type:"updated",action:e})})},vr);function zo(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Pe,me,Rt,xr,qo=(xr=class extends ai{constructor(e={}){super();V(this,Pe);V(this,me);V(this,Rt);this.config=e,L(this,Pe,new Set),L(this,me,new Map),L(this,Rt,0)}build(e,i,n){const s=new Wo({mutationCache:this,mutationId:++Bt(this,Rt)._,options:e.defaultMutationOptions(i),state:n});return this.add(s),s}add(e){y(this,Pe).add(e);const i=Gt(e);if(typeof i=="string"){const n=y(this,me).get(i);n?n.push(e):y(this,me).set(i,[e])}this.notify({type:"added",mutation:e})}remove(e){if(y(this,Pe).delete(e)){const i=Gt(e);if(typeof i=="string"){const n=y(this,me).get(i);if(n)if(n.length>1){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}else n[0]===e&&y(this,me).delete(i)}}this.notify({type:"removed",mutation:e})}canRun(e){const i=Gt(e);if(typeof i=="string"){const n=y(this,me).get(i),s=n==null?void 0:n.find(a=>a.state.status==="pending");return!s||s===e}else return!0}runNext(e){var n;const i=Gt(e);if(typeof i=="string"){const s=(n=y(this,me).get(i))==null?void 0:n.find(a=>a!==e&&a.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ie.batch(()=>{y(this,Pe).forEach(e=>{this.notify({type:"removed",mutation:e})}),y(this,Pe).clear(),y(this,me).clear()})}getAll(){return Array.from(y(this,Pe))}find(e){const i={exact:!0,...e};return this.getAll().find(n=>zn(i,n))}findAll(e={}){return this.getAll().filter(i=>zn(e,i))}notify(e){ie.batch(()=>{this.listeners.forEach(i=>{i(e)})})}resumePausedMutations(){const e=this.getAll().filter(i=>i.state.isPaused);return ie.batch(()=>Promise.all(e.map(i=>i.continue().catch(he))))}},Pe=new WeakMap,me=new WeakMap,Rt=new WeakMap,xr);function Gt(t){var e;return(e=t.options.scope)==null?void 0:e.id}function Hn(t){return{onFetch:(e,i)=>{var d,h,f,m,x;const n=e.options,s=(f=(h=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:h.fetchMore)==null?void 0:f.direction,a=((m=e.state.data)==null?void 0:m.pages)||[],r=((x=e.state.data)==null?void 0:x.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let p=!1;const b=k=>{Object.defineProperty(k,"signal",{enumerable:!0,get:()=>(e.signal.aborted?p=!0:e.signal.addEventListener("abort",()=>{p=!0}),e.signal)})},P=Ar(e.options,e.fetchOptions),C=async(k,E,T)=>{if(p)return Promise.reject();if(E==null&&k.pages.length)return Promise.resolve(k);const F=(()=>{const ue={client:e.client,queryKey:e.queryKey,pageParam:E,direction:T?"backward":"forward",meta:e.options.meta};return b(ue),ue})(),D=await P(F),{maxPages:M}=e.options,U=T?Mo:Io;return{pages:U(k.pages,D,M),pageParams:U(k.pageParams,E,M)}};if(s&&a.length){const k=s==="backward",E=k?Yo:Kn,T={pages:a,pageParams:r},O=E(n,T);l=await C(T,O,k)}else{const k=t??a.length;do{const E=c===0?r[0]??n.initialPageParam:Kn(n,l);if(c>0&&E==null)break;l=await C(l,E),c++}while(c<k)}return l};e.options.persister?e.fetchFn=()=>{var p,b;return(b=(p=e.options).persister)==null?void 0:b.call(p,u,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},i)}:e.fetchFn=u}}}function Kn(t,{pages:e,pageParams:i}){const n=e.length-1;return e.length>0?t.getNextPageParam(e[n],e,i[n],i):void 0}function Yo(t,{pages:e,pageParams:i}){var n;return e.length>0?(n=t.getPreviousPageParam)==null?void 0:n.call(t,e[0],e,i[0],i):void 0}var W,Ie,Me,rt,at,Re,ot,lt,br,Ho=(br=class{constructor(t={}){V(this,W);V(this,Ie);V(this,Me);V(this,rt);V(this,at);V(this,Re);V(this,ot);V(this,lt);L(this,W,t.queryCache||new _o),L(this,Ie,t.mutationCache||new qo),L(this,Me,t.defaultOptions||{}),L(this,rt,new Map),L(this,at,new Map),L(this,Re,0)}mount(){Bt(this,Re)._++,y(this,Re)===1&&(L(this,ot,kr.subscribe(async t=>{t&&(await this.resumePausedMutations(),y(this,W).onFocus())})),L(this,lt,Xt.subscribe(async t=>{t&&(await this.resumePausedMutations(),y(this,W).onOnline())})))}unmount(){var t,e;Bt(this,Re)._--,y(this,Re)===0&&((t=y(this,ot))==null||t.call(this),L(this,ot,void 0),(e=y(this,lt))==null||e.call(this),L(this,lt,void 0))}isFetching(t){return y(this,W).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return y(this,Ie).findAll({...t,status:"pending"}).length}getQueryData(t){var i;const e=this.defaultQueryOptions({queryKey:t});return(i=y(this,W).get(e.queryHash))==null?void 0:i.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),i=y(this,W).build(this,e),n=i.state.data;return n===void 0?this.fetchQuery(t):(t.revalidateIfStale&&i.isStaleByTime(Mi(e.staleTime,i))&&this.prefetchQuery(e),Promise.resolve(n))}getQueriesData(t){return y(this,W).findAll(t).map(({queryKey:e,state:i})=>{const n=i.data;return[e,n]})}setQueryData(t,e,i){const n=this.defaultQueryOptions({queryKey:t}),s=y(this,W).get(n.queryHash),a=s==null?void 0:s.state.data,r=ko(e,a);if(r!==void 0)return y(this,W).build(this,n).setData(r,{...i,manual:!0})}setQueriesData(t,e,i){return ie.batch(()=>y(this,W).findAll(t).map(({queryKey:n})=>[n,this.setQueryData(n,e,i)]))}getQueryState(t){var i;const e=this.defaultQueryOptions({queryKey:t});return(i=y(this,W).get(e.queryHash))==null?void 0:i.state}removeQueries(t){const e=y(this,W);ie.batch(()=>{e.findAll(t).forEach(i=>{e.remove(i)})})}resetQueries(t,e){const i=y(this,W);return ie.batch(()=>(i.findAll(t).forEach(n=>{n.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const i={revert:!0,...e},n=ie.batch(()=>y(this,W).findAll(t).map(s=>s.cancel(i)));return Promise.all(n).then(he).catch(he)}invalidateQueries(t,e={}){return ie.batch(()=>(y(this,W).findAll(t).forEach(i=>{i.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const i={...e,cancelRefetch:e.cancelRefetch??!0},n=ie.batch(()=>y(this,W).findAll(t).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let a=s.fetch(void 0,i);return i.throwOnError||(a=a.catch(he)),s.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(n).then(he)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const i=y(this,W).build(this,e);return i.isStaleByTime(Mi(e.staleTime,i))?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(he).catch(he)}fetchInfiniteQuery(t){return t.behavior=Hn(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(he).catch(he)}ensureInfiniteQueryData(t){return t.behavior=Hn(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Xt.isOnline()?y(this,Ie).resumePausedMutations():Promise.resolve()}getQueryCache(){return y(this,W)}getMutationCache(){return y(this,Ie)}getDefaultOptions(){return y(this,Me)}setDefaultOptions(t){L(this,Me,t)}setQueryDefaults(t,e){y(this,rt).set(kt(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...y(this,rt).values()],i={};return e.forEach(n=>{Ct(t,n.queryKey)&&Object.assign(i,n.defaultOptions)}),i}setMutationDefaults(t,e){y(this,at).set(kt(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...y(this,at).values()],i={};return e.forEach(n=>{Ct(t,n.mutationKey)&&Object.assign(i,n.defaultOptions)}),i}defaultQueryOptions(t){if(t._defaulted)return t;const e={...y(this,Me).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Zi(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===en&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...y(this,Me).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){y(this,W).clear(),y(this,Ie).clear()}},W=new WeakMap,Ie=new WeakMap,Me=new WeakMap,rt=new WeakMap,at=new WeakMap,Re=new WeakMap,ot=new WeakMap,lt=new WeakMap,br),Ko=w.createContext(void 0),$o=({client:t,children:e})=>(w.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),o.jsx(Ko.Provider,{value:t,children:e})),Er={},Ir={},Mr={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];if(typeof window<"u"){var l;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(l=window).gtag.apply(l,a)}},i=e;t.default=i})(Mr);var Rr={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var e=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function i(l){return l.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(c,u,d){return u>0&&u+c.length!==d.length&&c.search(e)>-1&&d.charAt(u-2)!==":"&&(d.charAt(u+c.length)!=="-"||d.charAt(u-1)==="-")&&d.charAt(u-1).search(/[^\s-]/)<0?c.toLowerCase():c.substr(1).search(/[A-Z]|\../)>-1?c:c.charAt(0).toUpperCase()+c.substr(1)})}function n(l){return typeof l=="string"&&l.indexOf("@")!==-1}var s="REDACTED (Potential Email Address)";function a(l){return n(l)?(console.warn("This arg looks like an email address, redacting."),s):l}function r(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,d=l||"";return c&&(d=i(l)),u&&(d=a(d)),d}})(Rr);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var e=r(Mr),i=r(Rr),n=["eventCategory","eventAction","eventLabel","eventValue","hitType"],s=["title","location"],a=["page","hitType"];function r(A){return A&&A.__esModule?A:{default:A}}function l(A,g){if(A==null)return{};var S=c(A,g),v,j;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(A);for(j=0;j<I.length;j++)v=I[j],!(g.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(A,v)&&(S[v]=A[v])}return S}function c(A,g){if(A==null)return{};var S={},v=Object.keys(A),j,I;for(I=0;I<v.length;I++)j=v[I],!(g.indexOf(j)>=0)&&(S[j]=A[j]);return S}function u(A){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},u(A)}function d(A){return m(A)||f(A)||C(A)||h()}function h(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}function m(A){if(Array.isArray(A))return k(A)}function x(A,g){var S=Object.keys(A);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(A);g&&(v=v.filter(function(j){return Object.getOwnPropertyDescriptor(A,j).enumerable})),S.push.apply(S,v)}return S}function p(A){for(var g=1;g<arguments.length;g++){var S=arguments[g]!=null?arguments[g]:{};g%2?x(Object(S),!0).forEach(function(v){M(A,v,S[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(S)):x(Object(S)).forEach(function(v){Object.defineProperty(A,v,Object.getOwnPropertyDescriptor(S,v))})}return A}function b(A,g){return T(A)||E(A,g)||C(A,g)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(A,g){if(A){if(typeof A=="string")return k(A,g);var S=Object.prototype.toString.call(A).slice(8,-1);if(S==="Object"&&A.constructor&&(S=A.constructor.name),S==="Map"||S==="Set")return Array.from(A);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return k(A,g)}}function k(A,g){(g==null||g>A.length)&&(g=A.length);for(var S=0,v=new Array(g);S<g;S++)v[S]=A[S];return v}function E(A,g){var S=A==null?null:typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(S!=null){var v,j,I,B,q=[],H=!0,K=!1;try{if(I=(S=S.call(A)).next,g!==0)for(;!(H=(v=I.call(S)).done)&&(q.push(v.value),q.length!==g);H=!0);}catch(ee){K=!0,j=ee}finally{try{if(!H&&S.return!=null&&(B=S.return(),Object(B)!==B))return}finally{if(K)throw j}}return q}}function T(A){if(Array.isArray(A))return A}function O(A,g){if(!(A instanceof g))throw new TypeError("Cannot call a class as a function")}function F(A,g){for(var S=0;S<g.length;S++){var v=g[S];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(A,U(v.key),v)}}function D(A,g,S){return g&&F(A.prototype,g),Object.defineProperty(A,"prototype",{writable:!1}),A}function M(A,g,S){return g=U(g),g in A?Object.defineProperty(A,g,{value:S,enumerable:!0,configurable:!0,writable:!0}):A[g]=S,A}function U(A){var g=ue(A,"string");return u(g)==="symbol"?g:String(g)}function ue(A,g){if(u(A)!=="object"||A===null)return A;var S=A[Symbol.toPrimitive];if(S!==void 0){var v=S.call(A,g);if(u(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(g==="string"?String:Number)(A)}var mt=function(){function A(){var g=this;O(this,A),M(this,"reset",function(){g.isInitialized=!1,g._testMode=!1,g._currentMeasurementId,g._hasLoadedGA=!1,g._isQueuing=!1,g._queueGtag=[]}),M(this,"_gtag",function(){for(var S=arguments.length,v=new Array(S),j=0;j<S;j++)v[j]=arguments[j];g._testMode||g._isQueuing?g._queueGtag.push(v):e.default.apply(void 0,v)}),M(this,"_loadGA",function(S,v){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!g._hasLoadedGA){var I=document.createElement("script");I.async=!0,I.src="".concat(j,"?id=").concat(S),v&&I.setAttribute("nonce",v),document.body.appendChild(I),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},g._hasLoadedGA=!0}}),M(this,"_toGtagOptions",function(S){if(S){var v={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},j=Object.entries(S).reduce(function(I,B){var q=b(B,2),H=q[0],K=q[1];return v[H]?I[v[H]]=K:I[H]=K,I},{});return j}}),M(this,"initialize",function(S){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!S)throw new Error("Require GA_MEASUREMENT_ID");var j=typeof S=="string"?[{trackingId:S}]:S;g._currentMeasurementId=j[0].trackingId;var I=v.gaOptions,B=v.gtagOptions,q=v.nonce,H=v.testMode,K=H===void 0?!1:H,ee=v.gtagUrl;if(g._testMode=K,K||g._loadGA(g._currentMeasurementId,q,ee),g.isInitialized||(g._gtag("js",new Date),j.forEach(function(Ft){var Bn=p(p(p({},g._toGtagOptions(p(p({},I),Ft.gaOptions))),B),Ft.gtagOptions);Object.keys(Bn).length?g._gtag("config",Ft.trackingId,Bn):g._gtag("config",Ft.trackingId)})),g.isInitialized=!0,!K){var Vn=d(g._queueGtag);for(g._queueGtag=[],g._isQueuing=!1;Vn.length;){var Fn=Vn.shift();g._gtag.apply(g,d(Fn)),Fn[0]==="get"&&(g._isQueuing=!0)}}}),M(this,"set",function(S){if(!S){console.warn("`fieldsObject` is required in .set()");return}if(u(S)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(S).length===0&&console.warn("empty `fieldsObject` given to .set()"),g._gaCommand("set",S)}),M(this,"_gaCommandSendEvent",function(S,v,j,I,B){g._gtag("event",v,p(p({event_category:S,event_label:j,value:I},B&&{non_interaction:B.nonInteraction}),g._toGtagOptions(B)))}),M(this,"_gaCommandSendEventParameters",function(){for(var S=arguments.length,v=new Array(S),j=0;j<S;j++)v[j]=arguments[j];if(typeof v[0]=="string")g._gaCommandSendEvent.apply(g,d(v.slice(1)));else{var I=v[0],B=I.eventCategory,q=I.eventAction,H=I.eventLabel,K=I.eventValue;I.hitType;var ee=l(I,n);g._gaCommandSendEvent(B,q,H,K,ee)}}),M(this,"_gaCommandSendTiming",function(S,v,j,I){g._gtag("event","timing_complete",{name:v,value:j,event_category:S,event_label:I})}),M(this,"_gaCommandSendPageview",function(S,v){if(v&&Object.keys(v).length){var j=g._toGtagOptions(v),I=j.title,B=j.location,q=l(j,s);g._gtag("event","page_view",p(p(p(p({},S&&{page_path:S}),I&&{page_title:I}),B&&{page_location:B}),q))}else S?g._gtag("event","page_view",{page_path:S}):g._gtag("event","page_view")}),M(this,"_gaCommandSendPageviewParameters",function(){for(var S=arguments.length,v=new Array(S),j=0;j<S;j++)v[j]=arguments[j];if(typeof v[0]=="string")g._gaCommandSendPageview.apply(g,d(v.slice(1)));else{var I=v[0],B=I.page;I.hitType;var q=l(I,a);g._gaCommandSendPageview(B,q)}}),M(this,"_gaCommandSend",function(){for(var S=arguments.length,v=new Array(S),j=0;j<S;j++)v[j]=arguments[j];var I=typeof v[0]=="string"?v[0]:v[0].hitType;switch(I){case"event":g._gaCommandSendEventParameters.apply(g,v);break;case"pageview":g._gaCommandSendPageviewParameters.apply(g,v);break;case"timing":g._gaCommandSendTiming.apply(g,d(v.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(I));break;default:console.warn("Send command doesn't exist: ".concat(I))}}),M(this,"_gaCommandSet",function(){for(var S=arguments.length,v=new Array(S),j=0;j<S;j++)v[j]=arguments[j];typeof v[0]=="string"&&(v[0]=M({},v[0],v[1])),g._gtag("set",g._toGtagOptions(v[0]))}),M(this,"_gaCommand",function(S){for(var v=arguments.length,j=new Array(v>1?v-1:0),I=1;I<v;I++)j[I-1]=arguments[I];switch(S){case"send":g._gaCommandSend.apply(g,j);break;case"set":g._gaCommandSet.apply(g,j);break;default:console.warn("Command doesn't exist: ".concat(S))}}),M(this,"ga",function(){for(var S=arguments.length,v=new Array(S),j=0;j<S;j++)v[j]=arguments[j];if(typeof v[0]=="string")g._gaCommand.apply(g,v);else{var I=v[0];g._gtag("get",g._currentMeasurementId,"client_id",function(B){g._isQueuing=!1;var q=g._queueGtag;for(I({get:function(ee){return ee==="clientId"?B:ee==="trackingId"?g._currentMeasurementId:ee==="apiVersion"?"1":void 0}});q.length;){var H=q.shift();g._gtag.apply(g,d(H))}}),g._isQueuing=!0}return g.ga}),M(this,"event",function(S,v){if(typeof S=="string")g._gtag("event",S,g._toGtagOptions(v));else{var j=S.action,I=S.category,B=S.label,q=S.value,H=S.nonInteraction,K=S.transport;if(!I||!j){console.warn("args.category AND args.action are required in event()");return}var ee={hitType:"event",eventCategory:(0,i.default)(I),eventAction:(0,i.default)(j)};B&&(ee.eventLabel=(0,i.default)(B)),typeof q<"u"&&(typeof q!="number"?console.warn("Expected `args.value` arg to be a Number."):ee.eventValue=q),typeof H<"u"&&(typeof H!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):ee.nonInteraction=H),typeof K<"u"&&(typeof K!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(K)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),ee.transport=K)),g._gaCommand("send",ee)}}),M(this,"send",function(S){g._gaCommand("send",S)}),this.reset()}return D(A,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),A}();t.GA4=mt;var mi=new mt;t.default=mi})(Ir);(function(t){function e(l){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},e(l)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ReactGAImplementation=void 0;var i=s(Ir);function n(l){if(typeof WeakMap!="function")return null;var c=new WeakMap,u=new WeakMap;return(n=function(h){return h?u:c})(l)}function s(l,c){if(l&&l.__esModule)return l;if(l===null||e(l)!=="object"&&typeof l!="function")return{default:l};var u=n(c);if(u&&u.has(l))return u.get(l);var d={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in l)if(f!=="default"&&Object.prototype.hasOwnProperty.call(l,f)){var m=h?Object.getOwnPropertyDescriptor(l,f):null;m&&(m.get||m.set)?Object.defineProperty(d,f,m):d[f]=l[f]}return d.default=l,u&&u.set(l,d),d}var a=i.GA4;t.ReactGAImplementation=a;var r=i.default;t.default=r})(Er);const yi=go(Er),Dr=w.createContext(void 0),Qo=()=>{const t=w.useContext(Dr);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Xo=({children:t})=>{const[e,i]=w.useState(()=>localStorage.getItem("theme")||"system"),[n,s]=w.useState(()=>e==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e),a=r=>{i(r),r==="system"?localStorage.removeItem("theme"):localStorage.setItem("theme",r)};return w.useEffect(()=>{const r=window.document.documentElement;if(e==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";s(l),r.classList.remove("light","dark"),r.classList.add(l)}else s(e),r.classList.remove("light","dark"),r.classList.add(e)},[e]),w.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)"),l=c=>{if(e==="system"){const u=c.matches?"dark":"light";s(u),window.document.documentElement.classList.remove("light","dark"),window.document.documentElement.classList.add(u)}};return r.addEventListener("change",l),()=>r.removeEventListener("change",l)},[e]),o.jsx(Dr.Provider,{value:{theme:e,resolvedTheme:n,setTheme:a},children:t})},Jo=()=>{const{theme:t,resolvedTheme:e,setTheme:i}=Qo(),[n,s]=w.useState(!1),a=w.useRef(null),r=[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"system",label:"System"}];return w.useEffect(()=>{const l=c=>{a.current&&!a.current.contains(c.target)&&s(!1)};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]),o.jsxs("div",{className:"relative",ref:a,children:[o.jsx("button",{onClick:()=>s(!n),className:"p-2 rounded-md hover:bg-accent transition-colors","aria-label":"Toggle theme",children:e==="light"?o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),n&&o.jsx("div",{className:"absolute right-0 mt-2 w-32 rounded-md bg-popover border shadow-lg",children:r.map(l=>o.jsx("button",{onClick:()=>{i(l.value),s(!1)},className:`w-full px-3 py-2 text-sm text-left hover:bg-accent transition-colors first:rounded-t-md last:rounded-b-md ${t===l.value?"bg-accent":""}`,children:l.label},l.value))})]})},Zo=()=>{const[t,e]=w.useState(!1);return o.jsxs("header",{className:"fixed top-0 left-0 right-0 z-40 glass-effect border-b",children:[o.jsx("div",{className:"max-width-container section-padding",children:o.jsxs("div",{className:"flex items-center justify-between h-16",children:[o.jsx("div",{className:"flex items-center",children:o.jsxs("a",{href:"/",className:"flex items-center space-x-3",children:[o.jsx("span",{className:"text-2xl",children:"🚀"}),o.jsx("span",{className:"text-xl font-semibold",children:"StartupGPT"})]})}),o.jsx("nav",{className:"hidden md:flex items-center space-x-6",children:[{href:"#features",label:"Features"},{href:"#how-it-works",label:"How It Works"},{href:"#pricing",label:"Pricing"},{href:"#testimonials",label:"Testimonials"}].map(i=>o.jsx("a",{href:i.href,className:"text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:i.label},i.href))}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(Jo,{}),o.jsx("button",{className:"md:hidden p-2 rounded-md hover:bg-accent",onClick:()=>e(!t),children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:t?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})]})]})}),t&&o.jsx("div",{className:"md:hidden border-t",children:o.jsx("nav",{className:"px-4 py-4 space-y-1",children:[{href:"#features",label:"Features"},{href:"#how-it-works",label:"How It Works"},{href:"#pricing",label:"Pricing"},{href:"#testimonials",label:"Testimonials"}].map(i=>o.jsx("a",{href:i.href,className:"block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors",onClick:()=>e(!1),children:i.label},i.href))})})]})},tn=w.createContext({});function nn(t){const e=w.useRef(null);return e.current===null&&(e.current=t()),e.current}const li=w.createContext(null),sn=w.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class el extends w.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function tl({children:t,isPresent:e}){const i=w.useId(),n=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=w.useContext(sn);return w.useInsertionEffect(()=>{const{width:r,height:l,top:c,left:u}=s.current;if(e||!n.current||!r||!l)return;n.current.dataset.motionPopId=i;const d=document.createElement("style");return a&&(d.nonce=a),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),o.jsx(el,{isPresent:e,childRef:n,sizeRef:s,children:w.cloneElement(t,{ref:n})})}const il=({children:t,initial:e,isPresent:i,onExitComplete:n,custom:s,presenceAffectsLayout:a,mode:r})=>{const l=nn(nl),c=w.useId(),u=w.useCallback(h=>{l.set(h,!0);for(const f of l.values())if(!f)return;n&&n()},[l,n]),d=w.useMemo(()=>({id:c,initial:e,isPresent:i,custom:s,onExitComplete:u,register:h=>(l.set(h,!1),()=>l.delete(h))}),a?[Math.random(),u]:[i,u]);return w.useMemo(()=>{l.forEach((h,f)=>l.set(f,!1))},[i]),w.useEffect(()=>{!i&&!l.size&&n&&n()},[i]),r==="popLayout"&&(t=o.jsx(tl,{isPresent:i,children:t})),o.jsx(li.Provider,{value:d,children:t})};function nl(){return new Map}function Or(t=!0){const e=w.useContext(li);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:n,register:s}=e,a=w.useId();w.useEffect(()=>{t&&s(a)},[t]);const r=w.useCallback(()=>t&&n&&n(a),[a,n,t]);return!i&&n?[!1,r]:[!0]}const Ut=t=>t.key||"";function $n(t){const e=[];return w.Children.forEach(t,i=>{w.isValidElement(i)&&e.push(i)}),e}const rn=typeof window<"u",Lr=rn?w.useLayoutEffect:w.useEffect,Vr=({children:t,custom:e,initial:i=!0,onExitComplete:n,presenceAffectsLayout:s=!0,mode:a="sync",propagate:r=!1})=>{const[l,c]=Or(r),u=w.useMemo(()=>$n(t),[t]),d=r&&!l?[]:u.map(Ut),h=w.useRef(!0),f=w.useRef(u),m=nn(()=>new Map),[x,p]=w.useState(u),[b,P]=w.useState(u);Lr(()=>{h.current=!1,f.current=u;for(let E=0;E<b.length;E++){const T=Ut(b[E]);d.includes(T)?m.delete(T):m.get(T)!==!0&&m.set(T,!1)}},[b,d.length,d.join("-")]);const C=[];if(u!==x){let E=[...u];for(let T=0;T<b.length;T++){const O=b[T],F=Ut(O);d.includes(F)||(E.splice(T,0,O),C.push(O))}a==="wait"&&C.length&&(E=C),P($n(E)),p(u);return}const{forceRender:k}=w.useContext(tn);return o.jsx(o.Fragment,{children:b.map(E=>{const T=Ut(E),O=r&&!l?!1:u===b||d.includes(T),F=()=>{if(m.has(T))m.set(T,!0);else return;let D=!0;m.forEach(M=>{M||(D=!1)}),D&&(k==null||k(),P(f.current),r&&(c==null||c()),n&&n())};return o.jsx(il,{isPresent:O,initial:!h.current||i?void 0:!1,custom:O?void 0:e,presenceAffectsLayout:s,mode:a,onExitComplete:O?void 0:F,children:E},T)})})},re=t=>t;let Fr=re;function an(t){let e;return()=>(e===void 0&&(e=t()),e)}const ct=(t,e,i)=>{const n=e-t;return n===0?1:(i-t)/n},Ae=t=>t*1e3,ke=t=>t/1e3,sl={useManualTiming:!1};function rl(t){let e=new Set,i=new Set,n=!1,s=!1;const a=new WeakSet;let r={delta:0,timestamp:0,isProcessing:!1};function l(u){a.has(u)&&(c.schedule(u),t()),u(r)}const c={schedule:(u,d=!1,h=!1)=>{const m=h&&n?e:i;return d&&a.add(u),m.has(u)||m.add(u),u},cancel:u=>{i.delete(u),a.delete(u)},process:u=>{if(r=u,n){s=!0;return}n=!0,[e,i]=[i,e],e.forEach(l),e.clear(),n=!1,s&&(s=!1,c.process(u))}};return c}const _t=["read","resolveKeyframes","update","preRender","render","postRender"],al=40;function Br(t,e){let i=!1,n=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=()=>i=!0,r=_t.reduce((P,C)=>(P[C]=rl(a),P),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:h,postRender:f}=r,m=()=>{const P=performance.now();i=!1,s.delta=n?1e3/60:Math.max(Math.min(P-s.timestamp,al),1),s.timestamp=P,s.isProcessing=!0,l.process(s),c.process(s),u.process(s),d.process(s),h.process(s),f.process(s),s.isProcessing=!1,i&&e&&(n=!1,t(m))},x=()=>{i=!0,n=!0,s.isProcessing||t(m)};return{schedule:_t.reduce((P,C)=>{const k=r[C];return P[C]=(E,T=!1,O=!1)=>(i||x(),k.schedule(E,T,O)),P},{}),cancel:P=>{for(let C=0;C<_t.length;C++)r[_t[C]].cancel(P)},state:s,steps:r}}const{schedule:G,cancel:De,state:$,steps:vi}=Br(typeof requestAnimationFrame<"u"?requestAnimationFrame:re,!0),Gr=w.createContext({strict:!1}),Qn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ut={};for(const t in Qn)ut[t]={isEnabled:e=>Qn[t].some(i=>!!e[i])};function ol(t){for(const e in t)ut[e]={...ut[e],...t[e]}}const ll=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Jt(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||ll.has(t)}let Ur=t=>!Jt(t);function cl(t){t&&(Ur=e=>e.startsWith("on")?!Jt(e):t(e))}try{cl(require("@emotion/is-prop-valid").default)}catch{}function ul(t,e,i){const n={};for(const s in t)s==="values"&&typeof t.values=="object"||(Ur(s)||i===!0&&Jt(s)||!e&&!Jt(s)||t.draggable&&s.startsWith("onDrag"))&&(n[s]=t[s]);return n}function dl(t){if(typeof Proxy>"u")return t;const e=new Map,i=(...n)=>t(...n);return new Proxy(i,{get:(n,s)=>s==="create"?t:(e.has(s)||e.set(s,t(s)),e.get(s))})}const ci=w.createContext({});function Tt(t){return typeof t=="string"||Array.isArray(t)}function ui(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const on=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ln=["initial",...on];function di(t){return ui(t.animate)||ln.some(e=>Tt(t[e]))}function _r(t){return!!(di(t)||t.variants)}function hl(t,e){if(di(t)){const{initial:i,animate:n}=t;return{initial:i===!1||Tt(i)?i:void 0,animate:Tt(n)?n:void 0}}return t.inherit!==!1?e:{}}function fl(t){const{initial:e,animate:i}=hl(t,w.useContext(ci));return w.useMemo(()=>({initial:e,animate:i}),[Xn(e),Xn(i)])}function Xn(t){return Array.isArray(t)?t.join(" "):t}const ml=Symbol.for("motionComponentSymbol");function Qe(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function pl(t,e,i){return w.useCallback(n=>{n&&t.onMount&&t.onMount(n),e&&(n?e.mount(n):e.unmount()),i&&(typeof i=="function"?i(n):Qe(i)&&(i.current=n))},[e])}const cn=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gl="framerAppearId",Wr="data-"+cn(gl),{schedule:un}=Br(queueMicrotask,!1),zr=w.createContext({});function yl(t,e,i,n,s){var a,r;const{visualElement:l}=w.useContext(ci),c=w.useContext(Gr),u=w.useContext(li),d=w.useContext(sn).reducedMotion,h=w.useRef(null);n=n||c.renderer,!h.current&&n&&(h.current=n(t,{visualState:e,parent:l,props:i,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const f=h.current,m=w.useContext(zr);f&&!f.projection&&s&&(f.type==="html"||f.type==="svg")&&vl(h.current,i,s,m);const x=w.useRef(!1);w.useInsertionEffect(()=>{f&&x.current&&f.update(i,u)});const p=i[Wr],b=w.useRef(!!p&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,p))&&((r=window.MotionHasOptimisedAnimation)===null||r===void 0?void 0:r.call(window,p)));return Lr(()=>{f&&(x.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),un.render(f.render),b.current&&f.animationState&&f.animationState.animateChanges())}),w.useEffect(()=>{f&&(!b.current&&f.animationState&&f.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)===null||P===void 0||P.call(window,p)}),b.current=!1))}),f}function vl(t,e,i,n){const{layoutId:s,layout:a,drag:r,dragConstraints:l,layoutScroll:c,layoutRoot:u}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:qr(t.parent)),t.projection.setOptions({layoutId:s,layout:a,alwaysMeasureLayout:!!r||l&&Qe(l),visualElement:t,animationType:typeof a=="string"?a:"both",initialPromotionConfig:n,layoutScroll:c,layoutRoot:u})}function qr(t){if(t)return t.options.allowProjection!==!1?t.projection:qr(t.parent)}function xl({preloadedFeatures:t,createVisualElement:e,useRender:i,useVisualState:n,Component:s}){var a,r;t&&ol(t);function l(u,d){let h;const f={...w.useContext(sn),...u,layoutId:bl(u)},{isStatic:m}=f,x=fl(u),p=n(u,m);if(!m&&rn){wl();const b=Sl(f);h=b.MeasureLayout,x.visualElement=yl(s,p,f,e,b.ProjectionNode)}return o.jsxs(ci.Provider,{value:x,children:[h&&x.visualElement?o.jsx(h,{visualElement:x.visualElement,...f}):null,i(s,u,pl(p,x.visualElement,d),p,m,x.visualElement)]})}l.displayName=`motion.${typeof s=="string"?s:`create(${(r=(a=s.displayName)!==null&&a!==void 0?a:s.name)!==null&&r!==void 0?r:""})`}`;const c=w.forwardRef(l);return c[ml]=s,c}function bl({layoutId:t}){const e=w.useContext(tn).id;return e&&t!==void 0?e+"-"+t:t}function wl(t,e){w.useContext(Gr).strict}function Sl(t){const{drag:e,layout:i}=ut;if(!e&&!i)return{};const n={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(t)||i!=null&&i.isEnabled(t)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}const Pl=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dn(t){return typeof t!="string"||t.includes("-")?!1:!!(Pl.indexOf(t)>-1||/[A-Z]/u.test(t))}function Jn(t){const e=[{},{}];return t==null||t.values.forEach((i,n)=>{e[0][n]=i.get(),e[1][n]=i.getVelocity()}),e}function hn(t,e,i,n){if(typeof e=="function"){const[s,a]=Jn(n);e=e(i!==void 0?i:t.custom,s,a)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[s,a]=Jn(n);e=e(i!==void 0?i:t.custom,s,a)}return e}const Di=t=>Array.isArray(t),Al=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),kl=t=>Di(t)?t[t.length-1]||0:t,Z=t=>!!(t&&t.getVelocity);function Kt(t){const e=Z(t)?t.get():t;return Al(e)?e.toValue():e}function Cl({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:i},n,s,a){const r={latestValues:Tl(n,s,a,t),renderState:e()};return i&&(r.onMount=l=>i({props:n,current:l,...r}),r.onUpdate=l=>i(l)),r}const Yr=t=>(e,i)=>{const n=w.useContext(ci),s=w.useContext(li),a=()=>Cl(t,e,n,s);return i?a():nn(a)};function Tl(t,e,i,n){const s={},a=n(t,{});for(const f in a)s[f]=Kt(a[f]);let{initial:r,animate:l}=t;const c=di(t),u=_r(t);e&&u&&!c&&t.inherit!==!1&&(r===void 0&&(r=e.initial),l===void 0&&(l=e.animate));let d=i?i.initial===!1:!1;d=d||r===!1;const h=d?l:r;if(h&&typeof h!="boolean"&&!ui(h)){const f=Array.isArray(h)?h:[h];for(let m=0;m<f.length;m++){const x=hn(t,f[m]);if(x){const{transitionEnd:p,transition:b,...P}=x;for(const C in P){let k=P[C];if(Array.isArray(k)){const E=d?k.length-1:0;k=k[E]}k!==null&&(s[C]=k)}for(const C in p)s[C]=p[C]}}}return s}const ht=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$e=new Set(ht),Hr=t=>e=>typeof e=="string"&&e.startsWith(t),Kr=Hr("--"),jl=Hr("var(--"),fn=t=>jl(t)?Nl.test(t.split("/*")[0].trim()):!1,Nl=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$r=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ce=(t,e,i)=>i>e?e:i<t?t:i,ft={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},jt={...ft,transform:t=>Ce(0,1,t)},Wt={...ft,default:1},Dt=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),je=Dt("deg"),xe=Dt("%"),R=Dt("px"),El=Dt("vh"),Il=Dt("vw"),Zn={...xe,parse:t=>xe.parse(t)/100,transform:t=>xe.transform(t*100)},Ml={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,radius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,backgroundPositionX:R,backgroundPositionY:R},Rl={rotate:je,rotateX:je,rotateY:je,rotateZ:je,scale:Wt,scaleX:Wt,scaleY:Wt,scaleZ:Wt,skew:je,skewX:je,skewY:je,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:jt,originX:Zn,originY:Zn,originZ:R},es={...ft,transform:Math.round},mn={...Ml,...Rl,zIndex:es,size:R,fillOpacity:jt,strokeOpacity:jt,numOctaves:es},Dl={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ol=ht.length;function Ll(t,e,i){let n="",s=!0;for(let a=0;a<Ol;a++){const r=ht[a],l=t[r];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(r.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||i){const u=$r(l,mn[r]);if(!c){s=!1;const d=Dl[r]||r;n+=`${d}(${u}) `}i&&(e[r]=u)}}return n=n.trim(),i?n=i(e,s?"":n):s&&(n="none"),n}function pn(t,e,i){const{style:n,vars:s,transformOrigin:a}=t;let r=!1,l=!1;for(const c in e){const u=e[c];if($e.has(c)){r=!0;continue}else if(Kr(c)){s[c]=u;continue}else{const d=$r(u,mn[c]);c.startsWith("origin")?(l=!0,a[c]=d):n[c]=d}}if(e.transform||(r||i?n.transform=Ll(e,t.transform,i):n.transform&&(n.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=a;n.transformOrigin=`${c} ${u} ${d}`}}const Vl={offset:"stroke-dashoffset",array:"stroke-dasharray"},Fl={offset:"strokeDashoffset",array:"strokeDasharray"};function Bl(t,e,i=1,n=0,s=!0){t.pathLength=1;const a=s?Vl:Fl;t[a.offset]=R.transform(-n);const r=R.transform(e),l=R.transform(i);t[a.array]=`${r} ${l}`}function ts(t,e,i){return typeof t=="string"?t:R.transform(e+i*t)}function Gl(t,e,i){const n=ts(e,t.x,t.width),s=ts(i,t.y,t.height);return`${n} ${s}`}function gn(t,{attrX:e,attrY:i,attrScale:n,originX:s,originY:a,pathLength:r,pathSpacing:l=1,pathOffset:c=0,...u},d,h){if(pn(t,u,h),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:m,dimensions:x}=t;f.transform&&(x&&(m.transform=f.transform),delete f.transform),x&&(s!==void 0||a!==void 0||m.transform)&&(m.transformOrigin=Gl(x,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(f.x=e),i!==void 0&&(f.y=i),n!==void 0&&(f.scale=n),r!==void 0&&Bl(f,r,l,c,!1)}const yn=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Qr=()=>({...yn(),attrs:{}}),vn=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Xr(t,{style:e,vars:i},n,s){Object.assign(t.style,e,s&&s.getProjectionStyles(n));for(const a in i)t.style.setProperty(a,i[a])}const Jr=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Zr(t,e,i,n){Xr(t,e,void 0,n);for(const s in e.attrs)t.setAttribute(Jr.has(s)?s:cn(s),e.attrs[s])}const Zt={};function Ul(t){Object.assign(Zt,t)}function ea(t,{layout:e,layoutId:i}){return $e.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!Zt[t]||t==="opacity")}function xn(t,e,i){var n;const{style:s}=t,a={};for(const r in s)(Z(s[r])||e.style&&Z(e.style[r])||ea(r,t)||((n=i==null?void 0:i.getValue(r))===null||n===void 0?void 0:n.liveStyle)!==void 0)&&(a[r]=s[r]);return a}function ta(t,e,i){const n=xn(t,e,i);for(const s in t)if(Z(t[s])||Z(e[s])){const a=ht.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[a]=t[s]}return n}function _l(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const is=["x","y","width","height","cx","cy","r"],Wl={useVisualState:Yr({scrapeMotionValuesFromProps:ta,createRenderState:Qr,onUpdate:({props:t,prevProps:e,current:i,renderState:n,latestValues:s})=>{if(!i)return;let a=!!t.drag;if(!a){for(const l in s)if($e.has(l)){a=!0;break}}if(!a)return;let r=!e;if(e)for(let l=0;l<is.length;l++){const c=is[l];t[c]!==e[c]&&(r=!0)}r&&G.read(()=>{_l(i,n),G.render(()=>{gn(n,s,vn(i.tagName),t.transformTemplate),Zr(i,n)})})}})},zl={useVisualState:Yr({scrapeMotionValuesFromProps:xn,createRenderState:yn})};function ia(t,e,i){for(const n in e)!Z(e[n])&&!ea(n,i)&&(t[n]=e[n])}function ql({transformTemplate:t},e){return w.useMemo(()=>{const i=yn();return pn(i,e,t),Object.assign({},i.vars,i.style)},[e])}function Yl(t,e){const i=t.style||{},n={};return ia(n,i,t),Object.assign(n,ql(t,e)),n}function Hl(t,e){const i={},n=Yl(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=n,i}function Kl(t,e,i,n){const s=w.useMemo(()=>{const a=Qr();return gn(a,e,vn(n),t.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(t.style){const a={};ia(a,t.style,t),s.style={...a,...s.style}}return s}function $l(t=!1){return(i,n,s,{latestValues:a},r)=>{const c=(dn(i)?Kl:Hl)(n,a,r,i),u=ul(n,typeof i=="string",t),d=i!==w.Fragment?{...u,...c,ref:s}:{},{children:h}=n,f=w.useMemo(()=>Z(h)?h.get():h,[h]);return w.createElement(i,{...d,children:f})}}function Ql(t,e){return function(n,{forwardMotionProps:s}={forwardMotionProps:!1}){const r={...dn(n)?Wl:zl,preloadedFeatures:t,useRender:$l(s),createVisualElement:e,Component:n};return xl(r)}}function na(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}function hi(t,e,i){const n=t.getProps();return hn(n,e,i!==void 0?i:n.custom,t)}const Xl=an(()=>window.ScrollTimeline!==void 0);class Jl{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,i){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=i}attachTimeline(e,i){const n=this.animations.map(s=>{if(Xl()&&s.attachTimeline)return s.attachTimeline(e);if(typeof i=="function")return i(s)});return()=>{n.forEach((s,a)=>{s&&s(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let i=0;i<this.animations.length;i++)e=Math.max(e,this.animations[i].duration);return e}runAll(e){this.animations.forEach(i=>i[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Zl extends Jl{then(e,i){return Promise.all(this.animations).then(e).catch(i)}}function bn(t,e){return t?t[e]||t.default||t:void 0}const Oi=2e4;function sa(t){let e=0;const i=50;let n=t.next(e);for(;!n.done&&e<Oi;)e+=i,n=t.next(e);return e>=Oi?1/0:e}function wn(t){return typeof t=="function"}function ns(t,e){t.timeline=e,t.onfinish=null}const Sn=t=>Array.isArray(t)&&typeof t[0]=="number",ec={linearEasing:void 0};function tc(t,e){const i=an(t);return()=>{var n;return(n=ec[e])!==null&&n!==void 0?n:i()}}const ei=tc(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ra=(t,e,i=10)=>{let n="";const s=Math.max(Math.round(e/i),2);for(let a=0;a<s;a++)n+=t(ct(0,s-1,a))+", ";return`linear(${n.substring(0,n.length-2)})`};function aa(t){return!!(typeof t=="function"&&ei()||!t||typeof t=="string"&&(t in Li||ei())||Sn(t)||Array.isArray(t)&&t.every(aa))}const vt=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,Li={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:vt([0,.65,.55,1]),circOut:vt([.55,0,1,.45]),backIn:vt([.31,.01,.66,-.59]),backOut:vt([.33,1.53,.69,.99])};function oa(t,e){if(t)return typeof t=="function"&&ei()?ra(t,e):Sn(t)?vt(t):Array.isArray(t)?t.map(i=>oa(i,e)||Li.easeOut):Li[t]}const de={x:!1,y:!1};function la(){return de.x||de.y}function ic(t,e,i){var n;if(t instanceof Element)return[t];if(typeof t=="string"){let s=document;const a=(n=void 0)!==null&&n!==void 0?n:s.querySelectorAll(t);return a?Array.from(a):[]}return Array.from(t)}function ca(t,e){const i=ic(t),n=new AbortController,s={passive:!0,...e,signal:n.signal};return[i,s,()=>n.abort()]}function ss(t){return e=>{e.pointerType==="touch"||la()||t(e)}}function nc(t,e,i={}){const[n,s,a]=ca(t,i),r=ss(l=>{const{target:c}=l,u=e(l);if(typeof u!="function"||!c)return;const d=ss(h=>{u(h),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,s)});return n.forEach(l=>{l.addEventListener("pointerenter",r,s)}),a}const ua=(t,e)=>e?t===e?!0:ua(t,e.parentElement):!1,Pn=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,sc=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rc(t){return sc.has(t.tagName)||t.tabIndex!==-1}const xt=new WeakSet;function rs(t){return e=>{e.key==="Enter"&&t(e)}}function xi(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ac=(t,e)=>{const i=t.currentTarget;if(!i)return;const n=rs(()=>{if(xt.has(i))return;xi(i,"down");const s=rs(()=>{xi(i,"up")}),a=()=>xi(i,"cancel");i.addEventListener("keyup",s,e),i.addEventListener("blur",a,e)});i.addEventListener("keydown",n,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),e)};function as(t){return Pn(t)&&!la()}function oc(t,e,i={}){const[n,s,a]=ca(t,i),r=l=>{const c=l.currentTarget;if(!as(l)||xt.has(c))return;xt.add(c);const u=e(l),d=(m,x)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),!(!as(m)||!xt.has(c))&&(xt.delete(c),typeof u=="function"&&u(m,{success:x}))},h=m=>{d(m,i.useGlobalTarget||ua(c,m.target))},f=m=>{d(m,!1)};window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",f,s)};return n.forEach(l=>{!rc(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(i.useGlobalTarget?window:l).addEventListener("pointerdown",r,s),l.addEventListener("focus",u=>ac(u,s),s)}),a}function lc(t){return t==="x"||t==="y"?de[t]?null:(de[t]=!0,()=>{de[t]=!1}):de.x||de.y?null:(de.x=de.y=!0,()=>{de.x=de.y=!1})}const da=new Set(["width","height","top","left","right","bottom",...ht]);let $t;function cc(){$t=void 0}const be={now:()=>($t===void 0&&be.set($.isProcessing||sl.useManualTiming?$.timestamp:performance.now()),$t),set:t=>{$t=t,queueMicrotask(cc)}};function An(t,e){t.indexOf(e)===-1&&t.push(e)}function kn(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}class Cn{constructor(){this.subscriptions=[]}add(e){return An(this.subscriptions,e),()=>kn(this.subscriptions,e)}notify(e,i,n){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,i,n);else for(let a=0;a<s;a++){const r=this.subscriptions[a];r&&r(e,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ha(t,e){return e?t*(1e3/e):0}const os=30,uc=t=>!isNaN(parseFloat(t));class dc{constructor(e,i={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(n,s=!0)=>{const a=be.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=be.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=uc(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new Cn);const n=this.events[e].add(i);return e==="change"?()=>{n(),G.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e,i=!0){!i||!this.passiveEffect?this.updateAndNotify(e,i):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,i,n){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>os)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,os);return ha(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Nt(t,e){return new dc(t,e)}function hc(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,Nt(i))}function fc(t,e){const i=hi(t,e);let{transitionEnd:n={},transition:s={},...a}=i||{};a={...a,...n};for(const r in a){const l=kl(a[r]);hc(t,r,l)}}function mc(t){return!!(Z(t)&&t.add)}function Vi(t,e){const i=t.getValue("willChange");if(mc(i))return i.add(e)}function fa(t){return t.props[Wr]}const ma=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,pc=1e-7,gc=12;function yc(t,e,i,n,s){let a,r,l=0;do r=e+(i-e)/2,a=ma(r,n,s)-t,a>0?i=r:e=r;while(Math.abs(a)>pc&&++l<gc);return r}function Ot(t,e,i,n){if(t===e&&i===n)return re;const s=a=>yc(a,0,1,t,i);return a=>a===0||a===1?a:ma(s(a),e,n)}const pa=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ga=t=>e=>1-t(1-e),ya=Ot(.33,1.53,.69,.99),Tn=ga(ya),va=pa(Tn),xa=t=>(t*=2)<1?.5*Tn(t):.5*(2-Math.pow(2,-10*(t-1))),jn=t=>1-Math.sin(Math.acos(t)),ba=ga(jn),wa=pa(jn),Sa=t=>/^0[^.\s]+$/u.test(t);function vc(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Sa(t):!0}const wt=t=>Math.round(t*1e5)/1e5,Nn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function xc(t){return t==null}const bc=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,En=(t,e)=>i=>!!(typeof i=="string"&&bc.test(i)&&i.startsWith(t)||e&&!xc(i)&&Object.prototype.hasOwnProperty.call(i,e)),Pa=(t,e,i)=>n=>{if(typeof n!="string")return n;const[s,a,r,l]=n.match(Nn);return{[t]:parseFloat(s),[e]:parseFloat(a),[i]:parseFloat(r),alpha:l!==void 0?parseFloat(l):1}},wc=t=>Ce(0,255,t),bi={...ft,transform:t=>Math.round(wc(t))},Ue={test:En("rgb","red"),parse:Pa("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:n=1})=>"rgba("+bi.transform(t)+", "+bi.transform(e)+", "+bi.transform(i)+", "+wt(jt.transform(n))+")"};function Sc(t){let e="",i="",n="",s="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),n=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),n=t.substring(3,4),s=t.substring(4,5),e+=e,i+=i,n+=n,s+=s),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:s?parseInt(s,16)/255:1}}const Fi={test:En("#"),parse:Sc,transform:Ue.transform},Xe={test:En("hsl","hue"),parse:Pa("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:n=1})=>"hsla("+Math.round(t)+", "+xe.transform(wt(e))+", "+xe.transform(wt(i))+", "+wt(jt.transform(n))+")"},J={test:t=>Ue.test(t)||Fi.test(t)||Xe.test(t),parse:t=>Ue.test(t)?Ue.parse(t):Xe.test(t)?Xe.parse(t):Fi.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ue.transform(t):Xe.transform(t)},Pc=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ac(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Nn))===null||e===void 0?void 0:e.length)||0)+(((i=t.match(Pc))===null||i===void 0?void 0:i.length)||0)>0}const Aa="number",ka="color",kc="var",Cc="var(",ls="${}",Tc=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Et(t){const e=t.toString(),i=[],n={color:[],number:[],var:[]},s=[];let a=0;const l=e.replace(Tc,c=>(J.test(c)?(n.color.push(a),s.push(ka),i.push(J.parse(c))):c.startsWith(Cc)?(n.var.push(a),s.push(kc),i.push(c)):(n.number.push(a),s.push(Aa),i.push(parseFloat(c))),++a,ls)).split(ls);return{values:i,split:l,indexes:n,types:s}}function Ca(t){return Et(t).values}function Ta(t){const{split:e,types:i}=Et(t),n=e.length;return s=>{let a="";for(let r=0;r<n;r++)if(a+=e[r],s[r]!==void 0){const l=i[r];l===Aa?a+=wt(s[r]):l===ka?a+=J.transform(s[r]):a+=s[r]}return a}}const jc=t=>typeof t=="number"?0:t;function Nc(t){const e=Ca(t);return Ta(t)(e.map(jc))}const Oe={test:Ac,parse:Ca,createTransformer:Ta,getAnimatableNone:Nc},Ec=new Set(["brightness","contrast","saturate","opacity"]);function Ic(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=i.match(Nn)||[];if(!n)return t;const s=i.replace(n,"");let a=Ec.has(e)?1:0;return n!==i&&(a*=100),e+"("+a+s+")"}const Mc=/\b([a-z-]*)\(.*?\)/gu,Bi={...Oe,getAnimatableNone:t=>{const e=t.match(Mc);return e?e.map(Ic).join(" "):t}},Rc={...mn,color:J,backgroundColor:J,outlineColor:J,fill:J,stroke:J,borderColor:J,borderTopColor:J,borderRightColor:J,borderBottomColor:J,borderLeftColor:J,filter:Bi,WebkitFilter:Bi},In=t=>Rc[t];function ja(t,e){let i=In(t);return i!==Bi&&(i=Oe),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const Dc=new Set(["auto","none","0"]);function Oc(t,e,i){let n=0,s;for(;n<t.length&&!s;){const a=t[n];typeof a=="string"&&!Dc.has(a)&&Et(a).values.length&&(s=t[n]),n++}if(s&&i)for(const a of e)t[a]=ja(i,s)}const cs=t=>t===ft||t===R,us=(t,e)=>parseFloat(t.split(", ")[e]),ds=(t,e)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const s=n.match(/^matrix3d\((.+)\)$/u);if(s)return us(s[1],e);{const a=n.match(/^matrix\((.+)\)$/u);return a?us(a[1],t):0}},Lc=new Set(["x","y","z"]),Vc=ht.filter(t=>!Lc.has(t));function Fc(t){const e=[];return Vc.forEach(i=>{const n=t.getValue(i);n!==void 0&&(e.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),e}const dt={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:ds(4,13),y:ds(5,14)};dt.translateX=dt.x;dt.translateY=dt.y;const Ke=new Set;let Gi=!1,Ui=!1;function Na(){if(Ui){const t=Array.from(Ke).filter(n=>n.needsMeasurement),e=new Set(t.map(n=>n.element)),i=new Map;e.forEach(n=>{const s=Fc(n);s.length&&(i.set(n,s),n.render())}),t.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();const s=i.get(n);s&&s.forEach(([a,r])=>{var l;(l=n.getValue(a))===null||l===void 0||l.set(r)})}),t.forEach(n=>n.measureEndState()),t.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Ui=!1,Gi=!1,Ke.forEach(t=>t.complete()),Ke.clear()}function Ea(){Ke.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ui=!0)})}function Bc(){Ea(),Na()}class Mn{constructor(e,i,n,s,a,r=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=n,this.motionValue=s,this.element=a,this.isAsync=r}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ke.add(this),Gi||(Gi=!0,G.read(Ea),G.resolveKeyframes(Na))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:n,motionValue:s}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const r=s==null?void 0:s.get(),l=e[e.length-1];if(r!==void 0)e[0]=r;else if(n&&i){const c=n.readValue(i,l);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=l),s&&r===void 0&&s.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ke.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ke.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ia=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Gc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Uc(t){const e=Gc.exec(t);if(!e)return[,];const[,i,n,s]=e;return[`--${i??n}`,s]}function Ma(t,e,i=1){const[n,s]=Uc(t);if(!n)return;const a=window.getComputedStyle(e).getPropertyValue(n);if(a){const r=a.trim();return Ia(r)?parseFloat(r):r}return fn(s)?Ma(s,e,i+1):s}const Ra=t=>e=>e.test(t),_c={test:t=>t==="auto",parse:t=>t},Da=[ft,R,xe,je,Il,El,_c],hs=t=>Da.find(Ra(t));class Oa extends Mn{constructor(e,i,n,s,a){super(e,i,n,s,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:n}=this;if(!i||!i.current)return;super.readKeyframes();for(let c=0;c<e.length;c++){let u=e[c];if(typeof u=="string"&&(u=u.trim(),fn(u))){const d=Ma(u,i.current);d!==void 0&&(e[c]=d),c===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!da.has(n)||e.length!==2)return;const[s,a]=e,r=hs(s),l=hs(a);if(r!==l)if(cs(r)&&cs(l))for(let c=0;c<e.length;c++){const u=e[c];typeof u=="string"&&(e[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,n=[];for(let s=0;s<e.length;s++)vc(e[s])&&n.push(s);n.length&&Oc(e,n,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=dt[n](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const s=i[i.length-1];s!==void 0&&e.getValue(n,s).jump(s,!1)}measureEndState(){var e;const{element:i,name:n,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const a=i.getValue(n);a&&a.jump(this.measuredOrigin,!1);const r=s.length-1,l=s[r];s[r]=dt[n](i.measureViewportBox(),window.getComputedStyle(i.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([c,u])=>{i.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const fs=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Oe.test(t)||t==="0")&&!t.startsWith("url("));function Wc(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function zc(t,e,i,n){const s=t[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const a=t[t.length-1],r=fs(s,e),l=fs(a,e);return!r||!l?!1:Wc(t)||(i==="spring"||wn(i))&&n}const qc=t=>t!==null;function fi(t,{repeat:e,repeatType:i="loop"},n){const s=t.filter(qc),a=e&&i!=="loop"&&e%2===1?0:s.length-1;return!a||n===void 0?s[a]:n}const Yc=40;class La{constructor({autoplay:e=!0,delay:i=0,type:n="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:r="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=be.now(),this.options={autoplay:e,delay:i,type:n,repeat:s,repeatDelay:a,repeatType:r,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Yc?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Bc(),this._resolved}onKeyframesResolved(e,i){this.resolvedAt=be.now(),this.hasAttemptedResolve=!0;const{name:n,type:s,velocity:a,delay:r,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!zc(e,n,s,a))if(r)this.options.duration=0;else{c&&c(fi(e,this.options,i)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(e,i);d!==!1&&(this._resolved={keyframes:e,finalKeyframe:i,...d},this.onPostResolved())}onPostResolved(){}then(e,i){return this.currentFinishedPromise.then(e,i)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const _=(t,e,i)=>t+(e-t)*i;function wi(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Hc({hue:t,saturation:e,lightness:i,alpha:n}){t/=360,e/=100,i/=100;let s=0,a=0,r=0;if(!e)s=a=r=i;else{const l=i<.5?i*(1+e):i+e-i*e,c=2*i-l;s=wi(c,l,t+1/3),a=wi(c,l,t),r=wi(c,l,t-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(r*255),alpha:n}}function ti(t,e){return i=>i>0?e:t}const Si=(t,e,i)=>{const n=t*t,s=i*(e*e-n)+n;return s<0?0:Math.sqrt(s)},Kc=[Fi,Ue,Xe],$c=t=>Kc.find(e=>e.test(t));function ms(t){const e=$c(t);if(!e)return!1;let i=e.parse(t);return e===Xe&&(i=Hc(i)),i}const ps=(t,e)=>{const i=ms(t),n=ms(e);if(!i||!n)return ti(t,e);const s={...i};return a=>(s.red=Si(i.red,n.red,a),s.green=Si(i.green,n.green,a),s.blue=Si(i.blue,n.blue,a),s.alpha=_(i.alpha,n.alpha,a),Ue.transform(s))},Qc=(t,e)=>i=>e(t(i)),Lt=(...t)=>t.reduce(Qc),_i=new Set(["none","hidden"]);function Xc(t,e){return _i.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function Jc(t,e){return i=>_(t,e,i)}function Rn(t){return typeof t=="number"?Jc:typeof t=="string"?fn(t)?ti:J.test(t)?ps:tu:Array.isArray(t)?Va:typeof t=="object"?J.test(t)?ps:Zc:ti}function Va(t,e){const i=[...t],n=i.length,s=t.map((a,r)=>Rn(a)(a,e[r]));return a=>{for(let r=0;r<n;r++)i[r]=s[r](a);return i}}function Zc(t,e){const i={...t,...e},n={};for(const s in i)t[s]!==void 0&&e[s]!==void 0&&(n[s]=Rn(t[s])(t[s],e[s]));return s=>{for(const a in n)i[a]=n[a](s);return i}}function eu(t,e){var i;const n=[],s={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const r=e.types[a],l=t.indexes[r][s[r]],c=(i=t.values[l])!==null&&i!==void 0?i:0;n[a]=c,s[r]++}return n}const tu=(t,e)=>{const i=Oe.createTransformer(e),n=Et(t),s=Et(e);return n.indexes.var.length===s.indexes.var.length&&n.indexes.color.length===s.indexes.color.length&&n.indexes.number.length>=s.indexes.number.length?_i.has(t)&&!s.values.length||_i.has(e)&&!n.values.length?Xc(t,e):Lt(Va(eu(n,s),s.values),i):ti(t,e)};function Fa(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?_(t,e,i):Rn(t)(t,e)}const iu=5;function Ba(t,e,i){const n=Math.max(e-iu,0);return ha(i-t(n),e-n)}const z={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Pi=.001;function nu({duration:t=z.duration,bounce:e=z.bounce,velocity:i=z.velocity,mass:n=z.mass}){let s,a,r=1-e;r=Ce(z.minDamping,z.maxDamping,r),t=Ce(z.minDuration,z.maxDuration,ke(t)),r<1?(s=u=>{const d=u*r,h=d*t,f=d-i,m=Wi(u,r),x=Math.exp(-h);return Pi-f/m*x},a=u=>{const h=u*r*t,f=h*i+i,m=Math.pow(r,2)*Math.pow(u,2)*t,x=Math.exp(-h),p=Wi(Math.pow(u,2),r);return(-s(u)+Pi>0?-1:1)*((f-m)*x)/p}):(s=u=>{const d=Math.exp(-u*t),h=(u-i)*t+1;return-Pi+d*h},a=u=>{const d=Math.exp(-u*t),h=(i-u)*(t*t);return d*h});const l=5/t,c=ru(s,a,l);if(t=Ae(t),isNaN(c))return{stiffness:z.stiffness,damping:z.damping,duration:t};{const u=Math.pow(c,2)*n;return{stiffness:u,damping:r*2*Math.sqrt(n*u),duration:t}}}const su=12;function ru(t,e,i){let n=i;for(let s=1;s<su;s++)n=n-t(n)/e(n);return n}function Wi(t,e){return t*Math.sqrt(1-e*e)}const au=["duration","bounce"],ou=["stiffness","damping","mass"];function gs(t,e){return e.some(i=>t[i]!==void 0)}function lu(t){let e={velocity:z.velocity,stiffness:z.stiffness,damping:z.damping,mass:z.mass,isResolvedFromDuration:!1,...t};if(!gs(t,ou)&&gs(t,au))if(t.visualDuration){const i=t.visualDuration,n=2*Math.PI/(i*1.2),s=n*n,a=2*Ce(.05,1,1-(t.bounce||0))*Math.sqrt(s);e={...e,mass:z.mass,stiffness:s,damping:a}}else{const i=nu(t);e={...e,...i,mass:z.mass},e.isResolvedFromDuration=!0}return e}function Ga(t=z.visualDuration,e=z.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:n,restDelta:s}=i;const a=i.keyframes[0],r=i.keyframes[i.keyframes.length-1],l={done:!1,value:a},{stiffness:c,damping:u,mass:d,duration:h,velocity:f,isResolvedFromDuration:m}=lu({...i,velocity:-ke(i.velocity||0)}),x=f||0,p=u/(2*Math.sqrt(c*d)),b=r-a,P=ke(Math.sqrt(c/d)),C=Math.abs(b)<5;n||(n=C?z.restSpeed.granular:z.restSpeed.default),s||(s=C?z.restDelta.granular:z.restDelta.default);let k;if(p<1){const T=Wi(P,p);k=O=>{const F=Math.exp(-p*P*O);return r-F*((x+p*P*b)/T*Math.sin(T*O)+b*Math.cos(T*O))}}else if(p===1)k=T=>r-Math.exp(-P*T)*(b+(x+P*b)*T);else{const T=P*Math.sqrt(p*p-1);k=O=>{const F=Math.exp(-p*P*O),D=Math.min(T*O,300);return r-F*((x+p*P*b)*Math.sinh(D)+T*b*Math.cosh(D))/T}}const E={calculatedDuration:m&&h||null,next:T=>{const O=k(T);if(m)l.done=T>=h;else{let F=0;p<1&&(F=T===0?Ae(x):Ba(k,T,O));const D=Math.abs(F)<=n,M=Math.abs(r-O)<=s;l.done=D&&M}return l.value=l.done?r:O,l},toString:()=>{const T=Math.min(sa(E),Oi),O=ra(F=>E.next(T*F).value,T,30);return T+"ms "+O}};return E}function ys({keyframes:t,velocity:e=0,power:i=.8,timeConstant:n=325,bounceDamping:s=10,bounceStiffness:a=500,modifyTarget:r,min:l,max:c,restDelta:u=.5,restSpeed:d}){const h=t[0],f={done:!1,value:h},m=D=>l!==void 0&&D<l||c!==void 0&&D>c,x=D=>l===void 0?c:c===void 0||Math.abs(l-D)<Math.abs(c-D)?l:c;let p=i*e;const b=h+p,P=r===void 0?b:r(b);P!==b&&(p=P-h);const C=D=>-p*Math.exp(-D/n),k=D=>P+C(D),E=D=>{const M=C(D),U=k(D);f.done=Math.abs(M)<=u,f.value=f.done?P:U};let T,O;const F=D=>{m(f.value)&&(T=D,O=Ga({keyframes:[f.value,x(f.value)],velocity:Ba(k,D,f.value),damping:s,stiffness:a,restDelta:u,restSpeed:d}))};return F(0),{calculatedDuration:null,next:D=>{let M=!1;return!O&&T===void 0&&(M=!0,E(D),F(D)),T!==void 0&&D>=T?O.next(D-T):(!M&&E(D),f)}}}const cu=Ot(.42,0,1,1),uu=Ot(0,0,.58,1),Ua=Ot(.42,0,.58,1),du=t=>Array.isArray(t)&&typeof t[0]!="number",hu={linear:re,easeIn:cu,easeInOut:Ua,easeOut:uu,circIn:jn,circInOut:wa,circOut:ba,backIn:Tn,backInOut:va,backOut:ya,anticipate:xa},vs=t=>{if(Sn(t)){Fr(t.length===4);const[e,i,n,s]=t;return Ot(e,i,n,s)}else if(typeof t=="string")return hu[t];return t};function fu(t,e,i){const n=[],s=i||Fa,a=t.length-1;for(let r=0;r<a;r++){let l=s(t[r],t[r+1]);if(e){const c=Array.isArray(e)?e[r]||re:e;l=Lt(c,l)}n.push(l)}return n}function mu(t,e,{clamp:i=!0,ease:n,mixer:s}={}){const a=t.length;if(Fr(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const r=t[0]===t[1];t[0]>t[a-1]&&(t=[...t].reverse(),e=[...e].reverse());const l=fu(e,n,s),c=l.length,u=d=>{if(r&&d<t[0])return e[0];let h=0;if(c>1)for(;h<t.length-2&&!(d<t[h+1]);h++);const f=ct(t[h],t[h+1],d);return l[h](f)};return i?d=>u(Ce(t[0],t[a-1],d)):u}function pu(t,e){const i=t[t.length-1];for(let n=1;n<=e;n++){const s=ct(0,e,n);t.push(_(i,1,s))}}function gu(t){const e=[0];return pu(e,t.length-1),e}function yu(t,e){return t.map(i=>i*e)}function vu(t,e){return t.map(()=>e||Ua).splice(0,t.length-1)}function ii({duration:t=300,keyframes:e,times:i,ease:n="easeInOut"}){const s=du(n)?n.map(vs):vs(n),a={done:!1,value:e[0]},r=yu(i&&i.length===e.length?i:gu(e),t),l=mu(r,e,{ease:Array.isArray(s)?s:vu(e,s)});return{calculatedDuration:t,next:c=>(a.value=l(c),a.done=c>=t,a)}}const xu=t=>{const e=({timestamp:i})=>t(i);return{start:()=>G.update(e,!0),stop:()=>De(e),now:()=>$.isProcessing?$.timestamp:be.now()}},bu={decay:ys,inertia:ys,tween:ii,keyframes:ii,spring:Ga},wu=t=>t/100;class Dn extends La{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:i,motionValue:n,element:s,keyframes:a}=this.options,r=(s==null?void 0:s.KeyframeResolver)||Mn,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new r(a,l,i,n,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:i="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:a,velocity:r=0}=this.options,l=wn(i)?i:bu[i]||ii;let c,u;l!==ii&&typeof e[0]!="number"&&(c=Lt(wu,Fa(e[0],e[1])),e=[0,100]);const d=l({...this.options,keyframes:e});a==="mirror"&&(u=l({...this.options,keyframes:[...e].reverse(),velocity:-r})),d.calculatedDuration===null&&(d.calculatedDuration=sa(d));const{calculatedDuration:h}=d,f=h+s,m=f*(n+1)-s;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:h,resolvedDuration:f,totalDuration:m}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,i=!1){const{resolved:n}=this;if(!n){const{keyframes:D}=this.options;return{done:!0,value:D[D.length-1]}}const{finalKeyframe:s,generator:a,mirroredGenerator:r,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:h}=n;if(this.startTime===null)return a.next(0);const{delay:f,repeat:m,repeatType:x,repeatDelay:p,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-d/this.speed,this.startTime)),i?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const P=this.currentTime-f*(this.speed>=0?1:-1),C=this.speed>=0?P<0:P>d;this.currentTime=Math.max(P,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let k=this.currentTime,E=a;if(m){const D=Math.min(this.currentTime,d)/h;let M=Math.floor(D),U=D%1;!U&&D>=1&&(U=1),U===1&&M--,M=Math.min(M,m+1),!!(M%2)&&(x==="reverse"?(U=1-U,p&&(U-=p/h)):x==="mirror"&&(E=r)),k=Ce(0,1,U)*h}const T=C?{done:!1,value:c[0]}:E.next(k);l&&(T.value=l(T.value));let{done:O}=T;!C&&u!==null&&(O=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&O);return F&&s!==void 0&&(T.value=fi(c,this.options,s)),b&&b(T.value),F&&this.finish(),T}get duration(){const{resolved:e}=this;return e?ke(e.calculatedDuration):0}get time(){return ke(this.currentTime)}set time(e){e=Ae(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=ke(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=xu,onPlay:i,startTime:n}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),i&&i();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=n??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Su=new Set(["opacity","clipPath","filter","transform"]);function Pu(t,e,i,{delay:n=0,duration:s=300,repeat:a=0,repeatType:r="loop",ease:l="easeInOut",times:c}={}){const u={[e]:i};c&&(u.offset=c);const d=oa(l,s);return Array.isArray(d)&&(u.easing=d),t.animate(u,{delay:n,duration:s,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:r==="reverse"?"alternate":"normal"})}const Au=an(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ni=10,ku=2e4;function Cu(t){return wn(t.type)||t.type==="spring"||!aa(t.ease)}function Tu(t,e){const i=new Dn({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let n={done:!1,value:t[0]};const s=[];let a=0;for(;!n.done&&a<ku;)n=i.sample(a),s.push(n.value),a+=ni;return{times:void 0,keyframes:s,duration:a-ni,ease:"linear"}}const _a={anticipate:xa,backInOut:va,circInOut:wa};function ju(t){return t in _a}class xs extends La{constructor(e){super(e);const{name:i,motionValue:n,element:s,keyframes:a}=this.options;this.resolver=new Oa(a,(r,l)=>this.onKeyframesResolved(r,l),i,n,s),this.resolver.scheduleResolve()}initPlayback(e,i){let{duration:n=300,times:s,ease:a,type:r,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof a=="string"&&ei()&&ju(a)&&(a=_a[a]),Cu(this.options)){const{onComplete:h,onUpdate:f,motionValue:m,element:x,...p}=this.options,b=Tu(e,p);e=b.keyframes,e.length===1&&(e[1]=e[0]),n=b.duration,s=b.times,a=b.ease,r="keyframes"}const d=Pu(l.owner.current,c,e,{...this.options,duration:n,times:s,ease:a});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(ns(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:h}=this.options;l.set(fi(e,this.options,i)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:n,times:s,type:r,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:i}=e;return ke(i)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:i}=e;return ke(i.currentTime||0)}set time(e){const{resolved:i}=this;if(!i)return;const{animation:n}=i;n.currentTime=Ae(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:i}=e;return i.playbackRate}set speed(e){const{resolved:i}=this;if(!i)return;const{animation:n}=i;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:i}=e;return i.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:i}=e;return i.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:i}=this;if(!i)return re;const{animation:n}=i;ns(n,e)}return re}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:i,keyframes:n,duration:s,type:a,ease:r,times:l}=e;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:h,element:f,...m}=this.options,x=new Dn({...m,keyframes:n,duration:s,type:a,ease:r,times:l,isGenerator:!0}),p=Ae(this.time);u.setWithVelocity(x.sample(p-ni).value,x.sample(p).value,ni)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:i,name:n,repeatDelay:s,repeatType:a,damping:r,type:l}=e;if(!i||!i.owner||!(i.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=i.owner.getProps();return Au()&&n&&Su.has(n)&&!c&&!u&&!s&&a!=="mirror"&&r!==0&&l!=="inertia"}}const Nu={type:"spring",stiffness:500,damping:25,restSpeed:10},Eu=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Iu={type:"keyframes",duration:.8},Mu={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ru=(t,{keyframes:e})=>e.length>2?Iu:$e.has(t)?t.startsWith("scale")?Eu(e[1]):Nu:Mu;function Du({when:t,delay:e,delayChildren:i,staggerChildren:n,staggerDirection:s,repeat:a,repeatType:r,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const On=(t,e,i,n={},s,a)=>r=>{const l=bn(n,t)||{},c=l.delay||n.delay||0;let{elapsed:u=0}=n;u=u-Ae(c);let d={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...l,delay:-u,onUpdate:f=>{e.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{r(),l.onComplete&&l.onComplete()},name:t,motionValue:e,element:a?void 0:s};Du(l)||(d={...d,...Ru(t,d)}),d.duration&&(d.duration=Ae(d.duration)),d.repeatDelay&&(d.repeatDelay=Ae(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(h=!0)),h&&!a&&e.get()!==void 0){const f=fi(d.keyframes,l);if(f!==void 0)return G.update(()=>{d.onUpdate(f),d.onComplete()}),new Zl([])}return!a&&xs.supports(d)?new xs(d):new Dn(d)};function Ou({protectedKeys:t,needsAnimating:e},i){const n=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,n}function Wa(t,e,{delay:i=0,transitionOverride:n,type:s}={}){var a;let{transition:r=t.getDefaultTransition(),transitionEnd:l,...c}=e;n&&(r=n);const u=[],d=s&&t.animationState&&t.animationState.getState()[s];for(const h in c){const f=t.getValue(h,(a=t.latestValues[h])!==null&&a!==void 0?a:null),m=c[h];if(m===void 0||d&&Ou(d,h))continue;const x={delay:i,...bn(r||{},h)};let p=!1;if(window.MotionHandoffAnimation){const P=fa(t);if(P){const C=window.MotionHandoffAnimation(P,h,G);C!==null&&(x.startTime=C,p=!0)}}Vi(t,h),f.start(On(h,f,m,t.shouldReduceMotion&&da.has(h)?{type:!1}:x,t,p));const b=f.animation;b&&u.push(b)}return l&&Promise.all(u).then(()=>{G.update(()=>{l&&fc(t,l)})}),u}function zi(t,e,i={}){var n;const s=hi(t,e,i.type==="exit"?(n=t.presenceContext)===null||n===void 0?void 0:n.custom:void 0);let{transition:a=t.getDefaultTransition()||{}}=s||{};i.transitionOverride&&(a=i.transitionOverride);const r=s?()=>Promise.all(Wa(t,s,i)):()=>Promise.resolve(),l=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=a;return Lu(t,e,d+u,h,f,i)}:()=>Promise.resolve(),{when:c}=a;if(c){const[u,d]=c==="beforeChildren"?[r,l]:[l,r];return u().then(()=>d())}else return Promise.all([r(),l(i.delay)])}function Lu(t,e,i=0,n=0,s=1,a){const r=[],l=(t.variantChildren.size-1)*n,c=s===1?(u=0)=>u*n:(u=0)=>l-u*n;return Array.from(t.variantChildren).sort(Vu).forEach((u,d)=>{u.notify("AnimationStart",e),r.push(zi(u,e,{...a,delay:i+c(d)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(r)}function Vu(t,e){return t.sortNodePosition(e)}function Fu(t,e,i={}){t.notify("AnimationStart",e);let n;if(Array.isArray(e)){const s=e.map(a=>zi(t,a,i));n=Promise.all(s)}else if(typeof e=="string")n=zi(t,e,i);else{const s=typeof e=="function"?hi(t,e,i.custom):e;n=Promise.all(Wa(t,s,i))}return n.then(()=>{t.notify("AnimationComplete",e)})}const Bu=ln.length;function za(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?za(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<Bu;i++){const n=ln[i],s=t.props[n];(Tt(s)||s===!1)&&(e[n]=s)}return e}const Gu=[...on].reverse(),Uu=on.length;function _u(t){return e=>Promise.all(e.map(({animation:i,options:n})=>Fu(t,i,n)))}function Wu(t){let e=_u(t),i=bs(),n=!0;const s=c=>(u,d)=>{var h;const f=hi(t,d,c==="exit"?(h=t.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(f){const{transition:m,transitionEnd:x,...p}=f;u={...u,...p,...x}}return u};function a(c){e=c(t)}function r(c){const{props:u}=t,d=za(t.parent)||{},h=[],f=new Set;let m={},x=1/0;for(let b=0;b<Uu;b++){const P=Gu[b],C=i[P],k=u[P]!==void 0?u[P]:d[P],E=Tt(k),T=P===c?C.isActive:null;T===!1&&(x=b);let O=k===d[P]&&k!==u[P]&&E;if(O&&n&&t.manuallyAnimateOnMount&&(O=!1),C.protectedKeys={...m},!C.isActive&&T===null||!k&&!C.prevProp||ui(k)||typeof k=="boolean")continue;const F=zu(C.prevProp,k);let D=F||P===c&&C.isActive&&!O&&E||b>x&&E,M=!1;const U=Array.isArray(k)?k:[k];let ue=U.reduce(s(P),{});T===!1&&(ue={});const{prevResolvedValues:mt={}}=C,mi={...mt,...ue},A=v=>{D=!0,f.has(v)&&(M=!0,f.delete(v)),C.needsAnimating[v]=!0;const j=t.getValue(v);j&&(j.liveStyle=!1)};for(const v in mi){const j=ue[v],I=mt[v];if(m.hasOwnProperty(v))continue;let B=!1;Di(j)&&Di(I)?B=!na(j,I):B=j!==I,B?j!=null?A(v):f.add(v):j!==void 0&&f.has(v)?A(v):C.protectedKeys[v]=!0}C.prevProp=k,C.prevResolvedValues=ue,C.isActive&&(m={...m,...ue}),n&&t.blockInitialAnimation&&(D=!1),D&&(!(O&&F)||M)&&h.push(...U.map(v=>({animation:v,options:{type:P}})))}if(f.size){const b={};f.forEach(P=>{const C=t.getBaseTarget(P),k=t.getValue(P);k&&(k.liveStyle=!0),b[P]=C??null}),h.push({animation:b})}let p=!!h.length;return n&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(p=!1),n=!1,p?e(h):Promise.resolve()}function l(c,u){var d;if(i[c].isActive===u)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(f=>{var m;return(m=f.animationState)===null||m===void 0?void 0:m.setActive(c,u)}),i[c].isActive=u;const h=r(c);for(const f in i)i[f].protectedKeys={};return h}return{animateChanges:r,setActive:l,setAnimateFunction:a,getState:()=>i,reset:()=>{i=bs(),n=!0}}}function zu(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!na(e,t):!1}function Fe(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bs(){return{animate:Fe(!0),whileInView:Fe(),whileHover:Fe(),whileTap:Fe(),whileDrag:Fe(),whileFocus:Fe(),exit:Fe()}}class Le{constructor(e){this.isMounted=!1,this.node=e}update(){}}class qu extends Le{constructor(e){super(e),e.animationState||(e.animationState=Wu(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ui(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Yu=0;class Hu extends Le{constructor(){super(...arguments),this.id=Yu++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const s=this.node.animationState.setActive("exit",!e);i&&!e&&s.then(()=>i(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Ku={animation:{Feature:qu},exit:{Feature:Hu}};function It(t,e,i,n={passive:!0}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i)}function Vt(t){return{point:{x:t.pageX,y:t.pageY}}}const $u=t=>e=>Pn(e)&&t(e,Vt(e));function St(t,e,i,n){return It(t,e,$u(i),n)}const ws=(t,e)=>Math.abs(t-e);function Qu(t,e){const i=ws(t.x,e.x),n=ws(t.y,e.y);return Math.sqrt(i**2+n**2)}class qa{constructor(e,i,{transformPagePoint:n,contextWindow:s,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=ki(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,m=Qu(h.offset,{x:0,y:0})>=3;if(!f&&!m)return;const{point:x}=h,{timestamp:p}=$;this.history.push({...x,timestamp:p});const{onStart:b,onMove:P}=this.handlers;f||(b&&b(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Ai(f,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:m,onSessionEnd:x,resumeAnimation:p}=this.handlers;if(this.dragSnapToOrigin&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=ki(h.type==="pointercancel"?this.lastMoveEventInfo:Ai(f,this.transformPagePoint),this.history);this.startEvent&&m&&m(h,b),x&&x(h,b)},!Pn(e))return;this.dragSnapToOrigin=a,this.handlers=i,this.transformPagePoint=n,this.contextWindow=s||window;const r=Vt(e),l=Ai(r,this.transformPagePoint),{point:c}=l,{timestamp:u}=$;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=i;d&&d(e,ki(l,this.history)),this.removeListeners=Lt(St(this.contextWindow,"pointermove",this.handlePointerMove),St(this.contextWindow,"pointerup",this.handlePointerUp),St(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),De(this.updatePoint)}}function Ai(t,e){return e?{point:e(t.point)}:t}function Ss(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ki({point:t},e){return{point:t,delta:Ss(t,Ya(e)),offset:Ss(t,Xu(e)),velocity:Ju(e,.1)}}function Xu(t){return t[0]}function Ya(t){return t[t.length-1]}function Ju(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,n=null;const s=Ya(t);for(;i>=0&&(n=t[i],!(s.timestamp-n.timestamp>Ae(e)));)i--;if(!n)return{x:0,y:0};const a=ke(s.timestamp-n.timestamp);if(a===0)return{x:0,y:0};const r={x:(s.x-n.x)/a,y:(s.y-n.y)/a};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}const Ha=1e-4,Zu=1-Ha,ed=1+Ha,Ka=.01,td=0-Ka,id=0+Ka;function ae(t){return t.max-t.min}function nd(t,e,i){return Math.abs(t-e)<=i}function Ps(t,e,i,n=.5){t.origin=n,t.originPoint=_(e.min,e.max,t.origin),t.scale=ae(i)/ae(e),t.translate=_(i.min,i.max,t.origin)-t.originPoint,(t.scale>=Zu&&t.scale<=ed||isNaN(t.scale))&&(t.scale=1),(t.translate>=td&&t.translate<=id||isNaN(t.translate))&&(t.translate=0)}function Pt(t,e,i,n){Ps(t.x,e.x,i.x,n?n.originX:void 0),Ps(t.y,e.y,i.y,n?n.originY:void 0)}function As(t,e,i){t.min=i.min+e.min,t.max=t.min+ae(e)}function sd(t,e,i){As(t.x,e.x,i.x),As(t.y,e.y,i.y)}function ks(t,e,i){t.min=e.min-i.min,t.max=t.min+ae(e)}function At(t,e,i){ks(t.x,e.x,i.x),ks(t.y,e.y,i.y)}function rd(t,{min:e,max:i},n){return e!==void 0&&t<e?t=n?_(e,t,n.min):Math.max(t,e):i!==void 0&&t>i&&(t=n?_(i,t,n.max):Math.min(t,i)),t}function Cs(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function ad(t,{top:e,left:i,bottom:n,right:s}){return{x:Cs(t.x,i,s),y:Cs(t.y,e,n)}}function Ts(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function od(t,e){return{x:Ts(t.x,e.x),y:Ts(t.y,e.y)}}function ld(t,e){let i=.5;const n=ae(t),s=ae(e);return s>n?i=ct(e.min,e.max-n,t.min):n>s&&(i=ct(t.min,t.max-s,e.min)),Ce(0,1,i)}function cd(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const qi=.35;function ud(t=qi){return t===!1?t=0:t===!0&&(t=qi),{x:js(t,"left","right"),y:js(t,"top","bottom")}}function js(t,e,i){return{min:Ns(t,e),max:Ns(t,i)}}function Ns(t,e){return typeof t=="number"?t:t[e]||0}const Es=()=>({translate:0,scale:1,origin:0,originPoint:0}),Je=()=>({x:Es(),y:Es()}),Is=()=>({min:0,max:0}),Y=()=>({x:Is(),y:Is()});function le(t){return[t("x"),t("y")]}function $a({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function dd({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function hd(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function Ci(t){return t===void 0||t===1}function Yi({scale:t,scaleX:e,scaleY:i}){return!Ci(t)||!Ci(e)||!Ci(i)}function Be(t){return Yi(t)||Qa(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Qa(t){return Ms(t.x)||Ms(t.y)}function Ms(t){return t&&t!=="0%"}function si(t,e,i){const n=t-i,s=e*n;return i+s}function Rs(t,e,i,n,s){return s!==void 0&&(t=si(t,s,n)),si(t,i,n)+e}function Hi(t,e=0,i=1,n,s){t.min=Rs(t.min,e,i,n,s),t.max=Rs(t.max,e,i,n,s)}function Xa(t,{x:e,y:i}){Hi(t.x,e.translate,e.scale,e.originPoint),Hi(t.y,i.translate,i.scale,i.originPoint)}const Ds=.999999999999,Os=1.0000000000001;function fd(t,e,i,n=!1){const s=i.length;if(!s)return;e.x=e.y=1;let a,r;for(let l=0;l<s;l++){a=i[l],r=a.projectionDelta;const{visualElement:c}=a.options;c&&c.props.style&&c.props.style.display==="contents"||(n&&a.options.layoutScroll&&a.scroll&&a!==a.root&&et(t,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,Xa(t,r)),n&&Be(a.latestValues)&&et(t,a.latestValues))}e.x<Os&&e.x>Ds&&(e.x=1),e.y<Os&&e.y>Ds&&(e.y=1)}function Ze(t,e){t.min=t.min+e,t.max=t.max+e}function Ls(t,e,i,n,s=.5){const a=_(t.min,t.max,s);Hi(t,e,i,a,n)}function et(t,e){Ls(t.x,e.x,e.scaleX,e.scale,e.originX),Ls(t.y,e.y,e.scaleY,e.scale,e.originY)}function Ja(t,e){return $a(hd(t.getBoundingClientRect(),e))}function md(t,e,i){const n=Ja(t,i),{scroll:s}=e;return s&&(Ze(n.x,s.offset.x),Ze(n.y,s.offset.y)),n}const Za=({current:t})=>t?t.ownerDocument.defaultView:null,pd=new WeakMap;class gd{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Y(),this.visualElement=e}start(e,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const s=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Vt(d).point)},a=(d,h)=>{const{drag:f,dragPropagation:m,onDragStart:x}=this.getProps();if(f&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=lc(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),le(b=>{let P=this.getAxisMotionValue(b).get()||0;if(xe.test(P)){const{projection:C}=this.visualElement;if(C&&C.layout){const k=C.layout.layoutBox[b];k&&(P=ae(k)*(parseFloat(P)/100))}}this.originPoint[b]=P}),x&&G.postRender(()=>x(d,h)),Vi(this.visualElement,"transform");const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},r=(d,h)=>{const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:x,onDrag:p}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:b}=h;if(m&&this.currentDirection===null){this.currentDirection=yd(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",h.point,b),this.updateAxis("y",h.point,b),this.visualElement.render(),p&&p(d,h)},l=(d,h)=>this.stop(d,h),c=()=>le(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new qa(e,{onSessionStart:s,onStart:a,onMove:r,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Za(this.visualElement)})}stop(e,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&G.postRender(()=>a(e,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,n){const{drag:s}=this.getProps();if(!n||!zt(e,s,this.currentDirection))return;const a=this.getAxisMotionValue(e);let r=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(r=rd(r,this.constraints[e],this.elastic[e])),a.set(r)}resolveConstraints(){var e;const{dragConstraints:i,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;i&&Qe(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=ad(s.layoutBox,i):this.constraints=!1,this.elastic=ud(n),a!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&le(r=>{this.constraints!==!1&&this.getAxisMotionValue(r)&&(this.constraints[r]=cd(s.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!Qe(e))return!1;const n=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const a=md(n,s.root,this.visualElement.getTransformPagePoint());let r=od(s.layout.layoutBox,a);if(i){const l=i(dd(r));this.hasMutatedConstraints=!!l,l&&(r=$a(l))}return r}startAnimation(e){const{drag:i,dragMomentum:n,dragElastic:s,dragTransition:a,dragSnapToOrigin:r,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=le(d=>{if(!zt(d,i,this.currentDirection))return;let h=c&&c[d]||{};r&&(h={min:0,max:0});const f=s?200:1e6,m=s?40:1e7,x={type:"inertia",velocity:n?e[d]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...a,...h};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(l)}startAxisValueAnimation(e,i){const n=this.getAxisMotionValue(e);return Vi(this.visualElement,e),n.start(On(e,n,0,i,this.visualElement,!1))}stopAnimation(){le(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){le(e=>{var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),s=n[i];return s||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){le(i=>{const{drag:n}=this.getProps();if(!zt(i,n,this.currentDirection))return;const{projection:s}=this.visualElement,a=this.getAxisMotionValue(i);if(s&&s.layout){const{min:r,max:l}=s.layout.layoutBox[i];a.set(e[i]-_(r,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!Qe(i)||!n||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};le(r=>{const l=this.getAxisMotionValue(r);if(l&&this.constraints!==!1){const c=l.get();s[r]=ld({min:c,max:c},this.constraints[r])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),le(r=>{if(!zt(r,e,null))return;const l=this.getAxisMotionValue(r),{min:c,max:u}=this.constraints[r];l.set(_(c,u,s[r]))})}addListeners(){if(!this.visualElement.current)return;pd.set(this.visualElement,this);const e=this.visualElement.current,i=St(e,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),n=()=>{const{dragConstraints:c}=this.getProps();Qe(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,a=s.addEventListener("measure",n);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),G.read(n);const r=It(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(le(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{r(),i(),a(),l&&l()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:s=!1,dragConstraints:a=!1,dragElastic:r=qi,dragMomentum:l=!0}=e;return{...e,drag:i,dragDirectionLock:n,dragPropagation:s,dragConstraints:a,dragElastic:r,dragMomentum:l}}}function zt(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function yd(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class vd extends Le{constructor(e){super(e),this.removeGroupControls=re,this.removeListeners=re,this.controls=new gd(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||re}unmount(){this.removeGroupControls(),this.removeListeners()}}const Vs=t=>(e,i)=>{t&&G.postRender(()=>t(e,i))};class xd extends Le{constructor(){super(...arguments),this.removePointerDownListener=re}onPointerDown(e){this.session=new qa(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Za(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:n,onPanEnd:s}=this.node.getProps();return{onSessionStart:Vs(e),onStart:Vs(i),onMove:n,onEnd:(a,r)=>{delete this.session,s&&G.postRender(()=>s(a,r))}}}mount(){this.removePointerDownListener=St(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Qt={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Fs(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const pt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(R.test(t))t=parseFloat(t);else return t;const i=Fs(t,e.target.x),n=Fs(t,e.target.y);return`${i}% ${n}%`}},bd={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,s=Oe.parse(t);if(s.length>5)return n;const a=Oe.createTransformer(t),r=typeof s[0]!="number"?1:0,l=i.x.scale*e.x,c=i.y.scale*e.y;s[0+r]/=l,s[1+r]/=c;const u=_(l,c,.5);return typeof s[2+r]=="number"&&(s[2+r]/=u),typeof s[3+r]=="number"&&(s[3+r]/=u),a(s)}};class wd extends w.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n,layoutId:s}=this.props,{projection:a}=e;Ul(Sd),a&&(i.group&&i.group.add(a),n&&n.register&&s&&n.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Qt.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:n,drag:s,isPresent:a}=this.props,r=n.projection;return r&&(r.isPresent=a,s||e.layoutDependency!==i||i===void 0?r.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?r.promote():r.relegate()||G.postRender(()=>{const l=r.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),un.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(s),n&&n.deregister&&n.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function eo(t){const[e,i]=Or(),n=w.useContext(tn);return o.jsx(wd,{...t,layoutGroup:n,switchLayoutGroup:w.useContext(zr),isPresent:e,safeToRemove:i})}const Sd={borderRadius:{...pt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:pt,borderTopRightRadius:pt,borderBottomLeftRadius:pt,borderBottomRightRadius:pt,boxShadow:bd};function Pd(t,e,i){const n=Z(t)?t:Nt(t);return n.start(On("",n,e,i)),n.animation}function Ad(t){return t instanceof SVGElement&&t.tagName!=="svg"}const kd=(t,e)=>t.depth-e.depth;class Cd{constructor(){this.children=[],this.isDirty=!1}add(e){An(this.children,e),this.isDirty=!0}remove(e){kn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(kd),this.isDirty=!1,this.children.forEach(e)}}function Td(t,e){const i=be.now(),n=({timestamp:s})=>{const a=s-i;a>=e&&(De(n),t(a-e))};return G.read(n,!0),()=>De(n)}const to=["TopLeft","TopRight","BottomLeft","BottomRight"],jd=to.length,Bs=t=>typeof t=="string"?parseFloat(t):t,Gs=t=>typeof t=="number"||R.test(t);function Nd(t,e,i,n,s,a){s?(t.opacity=_(0,i.opacity!==void 0?i.opacity:1,Ed(n)),t.opacityExit=_(e.opacity!==void 0?e.opacity:1,0,Id(n))):a&&(t.opacity=_(e.opacity!==void 0?e.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let r=0;r<jd;r++){const l=`border${to[r]}Radius`;let c=Us(e,l),u=Us(i,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Gs(c)===Gs(u)?(t[l]=Math.max(_(Bs(c),Bs(u),n),0),(xe.test(u)||xe.test(c))&&(t[l]+="%")):t[l]=u}(e.rotate||i.rotate)&&(t.rotate=_(e.rotate||0,i.rotate||0,n))}function Us(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Ed=io(0,.5,ba),Id=io(.5,.95,re);function io(t,e,i){return n=>n<t?0:n>e?1:i(ct(t,e,n))}function _s(t,e){t.min=e.min,t.max=e.max}function oe(t,e){_s(t.x,e.x),_s(t.y,e.y)}function Ws(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function zs(t,e,i,n,s){return t-=e,t=si(t,1/i,n),s!==void 0&&(t=si(t,1/s,n)),t}function Md(t,e=0,i=1,n=.5,s,a=t,r=t){if(xe.test(e)&&(e=parseFloat(e),e=_(r.min,r.max,e/100)-r.min),typeof e!="number")return;let l=_(a.min,a.max,n);t===a&&(l-=e),t.min=zs(t.min,e,i,l,s),t.max=zs(t.max,e,i,l,s)}function qs(t,e,[i,n,s],a,r){Md(t,e[i],e[n],e[s],e.scale,a,r)}const Rd=["x","scaleX","originX"],Dd=["y","scaleY","originY"];function Ys(t,e,i,n){qs(t.x,e,Rd,i?i.x:void 0,n?n.x:void 0),qs(t.y,e,Dd,i?i.y:void 0,n?n.y:void 0)}function Hs(t){return t.translate===0&&t.scale===1}function no(t){return Hs(t.x)&&Hs(t.y)}function Ks(t,e){return t.min===e.min&&t.max===e.max}function Od(t,e){return Ks(t.x,e.x)&&Ks(t.y,e.y)}function $s(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function so(t,e){return $s(t.x,e.x)&&$s(t.y,e.y)}function Qs(t){return ae(t.x)/ae(t.y)}function Xs(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Ld{constructor(){this.members=[]}add(e){An(this.members,e),e.scheduleRender()}remove(e){if(kn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(s=>e===s);if(i===0)return!1;let n;for(let s=i;s>=0;s--){const a=this.members[s];if(a.isPresent!==!1){n=a;break}}return n?(this.promote(n),!0):!1}promote(e,i){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,i&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:n}=e;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Vd(t,e,i){let n="";const s=t.x.translate/e.x,a=t.y.translate/e.y,r=(i==null?void 0:i.z)||0;if((s||a||r)&&(n=`translate3d(${s}px, ${a}px, ${r}px) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:u,rotate:d,rotateX:h,rotateY:f,skewX:m,skewY:x}=i;u&&(n=`perspective(${u}px) ${n}`),d&&(n+=`rotate(${d}deg) `),h&&(n+=`rotateX(${h}deg) `),f&&(n+=`rotateY(${f}deg) `),m&&(n+=`skewX(${m}deg) `),x&&(n+=`skewY(${x}deg) `)}const l=t.x.scale*e.x,c=t.y.scale*e.y;return(l!==1||c!==1)&&(n+=`scale(${l}, ${c})`),n||"none"}const Ge={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},bt=typeof window<"u"&&window.MotionDebug!==void 0,Ti=["","X","Y","Z"],Fd={visibility:"hidden"},Js=1e3;let Bd=0;function ji(t,e,i,n){const{latestValues:s}=e;s[t]&&(i[t]=s[t],e.setStaticValue(t,0),n&&(n[t]=0))}function ro(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=fa(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:s,layoutId:a}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",G,!(s||a))}const{parent:n}=t;n&&!n.hasCheckedOptimisedAppear&&ro(n)}function ao({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:s}){return class{constructor(r={},l=e==null?void 0:e()){this.id=Bd++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,bt&&(Ge.totalNodes=Ge.resolvedTargetDeltas=Ge.recalculatedProjection=0),this.nodes.forEach(_d),this.nodes.forEach(Hd),this.nodes.forEach(Kd),this.nodes.forEach(Wd),bt&&window.MotionDebug.record(Ge)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Cd)}addEventListener(r,l){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new Cn),this.eventHandlers.get(r).add(l)}notifyListeners(r,...l){const c=this.eventHandlers.get(r);c&&c.notify(...l)}hasListeners(r){return this.eventHandlers.has(r)}mount(r,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Ad(r),this.instance=r;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),t){let h;const f=()=>this.root.updateBlockedByResize=!1;t(r,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=Td(f,250),Qt.hasAnimatedSinceResize&&(Qt.hasAnimatedSinceResize=!1,this.nodes.forEach(er))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:m,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||d.getDefaultTransition()||Zd,{onLayoutAnimationStart:b,onLayoutAnimationComplete:P}=d.getProps(),C=!this.targetLayout||!so(this.targetLayout,x)||m,k=!f&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||k||f&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,k);const E={...bn(p,"layout"),onPlay:b,onComplete:P};(d.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E)}else f||er(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,De(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($d),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ro(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zs);return}this.isUpdating||this.nodes.forEach(qd),this.isUpdating=!1,this.nodes.forEach(Yd),this.nodes.forEach(Gd),this.nodes.forEach(Ud),this.clearAllSnapshots();const l=be.now();$.delta=Ce(0,1e3/60,l-$.timestamp),$.timestamp=l,$.isProcessing=!0,vi.update.process($),vi.preRender.process($),vi.render.process($),$.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,un.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(zd),this.sharedNodes.forEach(Qd)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Y(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(l=!1),l){const c=n(this.instance);this.scroll={animationId:this.root.animationId,phase:r,isRoot:c,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!s)return;const r=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!no(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;r&&(l||Be(this.latestValues)||d)&&(s(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return r&&(c=this.removeTransform(c)),eh(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var r;const{visualElement:l}=this.options;if(!l)return Y();const c=l.measureViewportBox();if(!(((r=this.scroll)===null||r===void 0?void 0:r.wasRoot)||this.path.some(th))){const{scroll:d}=this.root;d&&(Ze(c.x,d.offset.x),Ze(c.y,d.offset.y))}return c}removeElementScroll(r){var l;const c=Y();if(oe(c,r),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&oe(c,r),Ze(c.x,h.offset.x),Ze(c.y,h.offset.y))}return c}applyTransform(r,l=!1){const c=Y();oe(c,r);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&et(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Be(d.latestValues)&&et(c,d.latestValues)}return Be(this.latestValues)&&et(c,this.latestValues),c}removeTransform(r){const l=Y();oe(l,r);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!Be(u.latestValues))continue;Yi(u.latestValues)&&u.updateSnapshot();const d=Y(),h=u.measurePageBox();oe(d,h),Ys(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Be(this.latestValues)&&Ys(l,this.latestValues),l}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(r||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=$.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),At(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Y(),this.targetWithTransforms=Y()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),sd(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):oe(this.target,this.layout.layoutBox),Xa(this.target,this.targetDelta)):oe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),At(this.relativeTargetOrigin,this.target,m.target),oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}bt&&Ge.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Yi(this.parent.latestValues)||Qa(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var r;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((r=this.parent)===null||r===void 0)&&r.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===$.timestamp&&(u=!1),u)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;oe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,m=this.treeScale.y;fd(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=Y());const{target:x}=l;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ws(this.prevProjectionDelta.x,this.projectionDelta.x),Ws(this.prevProjectionDelta.y,this.projectionDelta.y)),Pt(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==m||!Xs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),bt&&Ge.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),r){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Je(),this.projectionDelta=Je(),this.projectionDeltaWithTransform=Je()}setAnimationOrigin(r,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},h=Je();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=Y(),m=c?c.source:void 0,x=this.layout?this.layout.source:void 0,p=m!==x,b=this.getStack(),P=!b||b.members.length<=1,C=!!(p&&!P&&this.options.crossfade===!0&&!this.path.some(Jd));this.animationProgress=0;let k;this.mixTargetDelta=E=>{const T=E/1e3;tr(h.x,r.x,T),tr(h.y,r.y,T),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(At(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Xd(this.relativeTarget,this.relativeTargetOrigin,f,T),k&&Od(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=Y()),oe(k,this.relativeTarget)),p&&(this.animationValues=d,Nd(d,u,this.latestValues,T,C,P)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(De(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{Qt.hasAnimatedSinceResize=!0,this.currentAnimation=Pd(0,Js,{...r,onUpdate:l=>{this.mixTargetDelta(l),r.onUpdate&&r.onUpdate(l)},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Js),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=r;if(!(!l||!c||!u)){if(this!==r&&this.layout&&u&&oo(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Y();const h=ae(this.layout.layoutBox.x);c.x.min=r.target.x.min,c.x.max=c.x.min+h;const f=ae(this.layout.layoutBox.y);c.y.min=r.target.y.min,c.y.max=c.y.min+f}oe(l,c),et(l,d),Pt(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(r,l){this.sharedNodes.has(r)||this.sharedNodes.set(r,new Ld),this.sharedNodes.get(r).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){var r;const{layoutId:l}=this.options;return l?((r=this.getStack())===null||r===void 0?void 0:r.lead)||this:this}getPrevLead(){var r;const{layoutId:l}=this.options;return l?(r=this.getStack())===null||r===void 0?void 0:r.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),r&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetSkewAndRotation(){const{visualElement:r}=this.options;if(!r)return;let l=!1;const{latestValues:c}=r;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&ji("z",r,u,this.animationValues);for(let d=0;d<Ti.length;d++)ji(`rotate${Ti[d]}`,r,u,this.animationValues),ji(`skew${Ti[d]}`,r,u,this.animationValues);r.render();for(const d in u)r.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);r.scheduleRender()}getProjectionStyles(r){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Fd;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Kt(r==null?void 0:r.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=Kt(r==null?void 0:r.pointerEvents)||""),this.hasProjected&&!Be(this.latestValues)&&(p.transform=d?d({},""):"none",this.hasProjected=!1),p}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),u.transform=Vd(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:m,y:x}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${x.origin*100}% 0`,h.animationValues?u.opacity=h===this?(c=(l=f.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const p in Zt){if(f[p]===void 0)continue;const{correct:b,applyTo:P}=Zt[p],C=u.transform==="none"?f[p]:b(f[p],h);if(P){const k=P.length;for(let E=0;E<k;E++)u[P[E]]=C}else u[p]=C}return this.options.layoutId&&(u.pointerEvents=h===this?Kt(r==null?void 0:r.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>{var l;return(l=r.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Zs),this.root.sharedNodes.clear()}}}function Gd(t){t.updateLayout()}function Ud(t){var e;const i=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=t.layout,{animationType:a}=t.options,r=i.source!==t.layout.source;a==="size"?le(h=>{const f=r?i.measuredBox[h]:i.layoutBox[h],m=ae(f);f.min=n[h].min,f.max=f.min+m}):oo(a,i.layoutBox,n)&&le(h=>{const f=r?i.measuredBox[h]:i.layoutBox[h],m=ae(n[h]);f.max=f.min+m,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+m)});const l=Je();Pt(l,n,i.layoutBox);const c=Je();r?Pt(c,t.applyTransform(s,!0),i.measuredBox):Pt(c,n,i.layoutBox);const u=!no(l);let d=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:m}=h;if(f&&m){const x=Y();At(x,i.layoutBox,f.layoutBox);const p=Y();At(p,n,m.layoutBox),so(x,p)||(d=!0),h.options.layoutRoot&&(t.relativeTarget=p,t.relativeTargetOrigin=x,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function _d(t){bt&&Ge.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Wd(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function zd(t){t.clearSnapshot()}function Zs(t){t.clearMeasurements()}function qd(t){t.isLayoutDirty=!1}function Yd(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function er(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Hd(t){t.resolveTargetDelta()}function Kd(t){t.calcProjection()}function $d(t){t.resetSkewAndRotation()}function Qd(t){t.removeLeadSnapshot()}function tr(t,e,i){t.translate=_(e.translate,0,i),t.scale=_(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function ir(t,e,i,n){t.min=_(e.min,i.min,n),t.max=_(e.max,i.max,n)}function Xd(t,e,i,n){ir(t.x,e.x,i.x,n),ir(t.y,e.y,i.y,n)}function Jd(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Zd={duration:.45,ease:[.4,0,.1,1]},nr=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),sr=nr("applewebkit/")&&!nr("chrome/")?Math.round:re;function rr(t){t.min=sr(t.min),t.max=sr(t.max)}function eh(t){rr(t.x),rr(t.y)}function oo(t,e,i){return t==="position"||t==="preserve-aspect"&&!nd(Qs(e),Qs(i),.2)}function th(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const ih=ao({attachResizeListener:(t,e)=>It(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ni={current:void 0},lo=ao({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ni.current){const t=new ih({});t.mount(window),t.setOptions({layoutScroll:!0}),Ni.current=t}return Ni.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),nh={pan:{Feature:xd},drag:{Feature:vd,ProjectionNode:lo,MeasureLayout:eo}};function ar(t,e,i){const{props:n}=t;t.animationState&&n.whileHover&&t.animationState.setActive("whileHover",i==="Start");const s="onHover"+i,a=n[s];a&&G.postRender(()=>a(e,Vt(e)))}class sh extends Le{mount(){const{current:e}=this.node;e&&(this.unmount=nc(e,i=>(ar(this.node,i,"Start"),n=>ar(this.node,n,"End"))))}unmount(){}}class rh extends Le{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Lt(It(this.node.current,"focus",()=>this.onFocus()),It(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function or(t,e,i){const{props:n}=t;t.animationState&&n.whileTap&&t.animationState.setActive("whileTap",i==="Start");const s="onTap"+(i==="End"?"":i),a=n[s];a&&G.postRender(()=>a(e,Vt(e)))}class ah extends Le{mount(){const{current:e}=this.node;e&&(this.unmount=oc(e,i=>(or(this.node,i,"Start"),(n,{success:s})=>or(this.node,n,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ki=new WeakMap,Ei=new WeakMap,oh=t=>{const e=Ki.get(t.target);e&&e(t)},lh=t=>{t.forEach(oh)};function ch({root:t,...e}){const i=t||document;Ei.has(i)||Ei.set(i,{});const n=Ei.get(i),s=JSON.stringify(e);return n[s]||(n[s]=new IntersectionObserver(lh,{root:t,...e})),n[s]}function uh(t,e,i){const n=ch(e);return Ki.set(t,i),n.observe(t),()=>{Ki.delete(t),n.unobserve(t)}}const dh={some:0,all:1};class hh extends Le{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:n,amount:s="some",once:a}=e,r={root:i?i.current:void 0,rootMargin:n,threshold:typeof s=="number"?s:dh[s]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=u?d:h;f&&f(c)};return uh(this.node.current,r,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(fh(e,i))&&this.startObserver()}unmount(){}}function fh({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const mh={inView:{Feature:hh},tap:{Feature:ah},focus:{Feature:rh},hover:{Feature:sh}},ph={layout:{ProjectionNode:lo,MeasureLayout:eo}},$i={current:null},co={current:!1};function gh(){if(co.current=!0,!!rn)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>$i.current=t.matches;t.addListener(e),e()}else $i.current=!1}const yh=[...Da,J,Oe],vh=t=>yh.find(Ra(t)),lr=new WeakMap;function xh(t,e,i){for(const n in e){const s=e[n],a=i[n];if(Z(s))t.addValue(n,s);else if(Z(a))t.addValue(n,Nt(s,{owner:t}));else if(a!==s)if(t.hasValue(n)){const r=t.getValue(n);r.liveStyle===!0?r.jump(s):r.hasAnimated||r.set(s)}else{const r=t.getStaticValue(n);t.addValue(n,Nt(r!==void 0?r:s,{owner:t}))}}for(const n in i)e[n]===void 0&&t.removeValue(n);return e}const cr=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bh{scrapeMotionValuesFromProps(e,i,n){return{}}constructor({parent:e,props:i,presenceContext:n,reducedMotionConfig:s,blockInitialAnimation:a,visualState:r},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=be.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,G.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=r;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=i.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=i,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=di(i),this.isVariantNode=_r(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(i,{},this);for(const m in f){const x=f[m];c[m]!==void 0&&Z(x)&&x.set(c[m],!1)}}mount(e){this.current=e,lr.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),co.current||gh(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$i.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){lr.delete(this.current),this.projection&&this.projection.unmount(),De(this.notifyUpdate),De(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const i=this.features[e];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=$e.has(e),s=i.on("change",l=>{this.latestValues[e]=l,this.props.onUpdate&&G.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),a=i.on("renderRequest",this.scheduleRender);let r;window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{s(),a(),r&&r(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ut){const i=ut[e];if(!i)continue;const{isEnabled:n,Feature:s}=i;if(!this.features[e]&&s&&n(this.props)&&(this.features[e]=new s(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Y()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<cr.length;n++){const s=cr[n];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a="on"+s,r=e[a];r&&(this.propEventSubscriptions[s]=this.on(s,r))}this.prevMotionValues=xh(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const n=this.values.get(e);i!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&i!==void 0&&(n=Nt(i===null?void 0:i,{owner:this}),this.addValue(e,n)),n}readValue(e,i){var n;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Ia(s)||Sa(s))?s=parseFloat(s):!vh(s)&&Oe.test(i)&&(s=ja(e,i)),this.setBaseTarget(e,Z(s)?s.get():s)),Z(s)?s.get():s}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var i;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const r=hn(this.props,n,(i=this.presenceContext)===null||i===void 0?void 0:i.custom);r&&(s=r[e])}if(n&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Z(a)?a:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new Cn),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}}class uo extends bh{constructor(){super(...arguments),this.KeyframeResolver=Oa}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:n}){delete i[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Z(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function wh(t){return window.getComputedStyle(t)}class Sh extends uo{constructor(){super(...arguments),this.type="html",this.renderInstance=Xr}readValueFromInstance(e,i){if($e.has(i)){const n=In(i);return n&&n.default||0}else{const n=wh(e),s=(Kr(i)?n.getPropertyValue(i):n[i])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:i}){return Ja(e,i)}build(e,i,n){pn(e,i,n.transformTemplate)}scrapeMotionValuesFromProps(e,i,n){return xn(e,i,n)}}class Ph extends uo{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Y}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if($e.has(i)){const n=In(i);return n&&n.default||0}return i=Jr.has(i)?i:cn(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,n){return ta(e,i,n)}build(e,i,n){gn(e,i,this.isSVGTag,n.transformTemplate)}renderInstance(e,i,n,s){Zr(e,i,n,s)}mount(e){this.isSVGTag=vn(e.tagName),super.mount(e)}}const Ah=(t,e)=>dn(t)?new Ph(e):new Sh(e,{allowProjection:t!==w.Fragment}),kh=Ql({...Ku,...mh,...nh,...ph},Ah),N=dl(kh),we=w.forwardRef(({className:t,variant:e="default",size:i="md",loading:n=!1,fullWidth:s=!1,children:a,disabled:r,...l},c)=>{const u="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",d={default:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90"},h={sm:"h-9 px-3 text-sm rounded-md",md:"h-10 px-4 py-2 rounded-md",lg:"h-11 px-8 rounded-md"};return o.jsx("button",{ref:c,className:Ji(u,d[e],h[i],s&&"w-full",t),disabled:r||n,...l,children:n?o.jsxs("div",{className:"flex items-center",children:[o.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Loading..."]}):a})});we.displayName="Button";const Ch=()=>{const[t,e]=w.useState(!1),[i,n]=w.useState(!1),[s,a]=w.useState({necessary:!0,analytics:!1,functional:!1});w.useEffect(()=>{const u=localStorage.getItem("cookieConsent");u?JSON.parse(u).analytics:e(!0)},[]);const r=()=>{const u={necessary:!0,analytics:!0,functional:!0,timestamp:new Date().toISOString()};localStorage.setItem("cookieConsent",JSON.stringify(u)),e(!1)},l=()=>{const u={...s,timestamp:new Date().toISOString()};localStorage.setItem("cookieConsent",JSON.stringify(u)),s.analytics,e(!1)},c=()=>{const u={necessary:!0,analytics:!1,functional:!1,timestamp:new Date().toISOString()};localStorage.setItem("cookieConsent",JSON.stringify(u)),e(!1)};return o.jsx(Vr,{children:t&&o.jsx(N.div,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{duration:.3},className:"fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl",children:o.jsx("div",{className:"max-w-7xl mx-auto p-4 sm:p-6",children:o.jsxs("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"🍪 Cookie Preferences"}),o.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:'We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. By clicking "Accept All", you consent to our use of cookies.'}),i&&o.jsxs(N.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.3},className:"mt-4 space-y-3",children:[o.jsxs("label",{className:"flex items-start gap-3",children:[o.jsx("input",{type:"checkbox",checked:s.necessary,disabled:!0,className:"mt-1 w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Necessary Cookies (Always Active)"}),o.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1",children:"Essential for the website to function properly."})]})]}),o.jsxs("label",{className:"flex items-start gap-3",children:[o.jsx("input",{type:"checkbox",checked:s.analytics,onChange:u=>a({...s,analytics:u.target.checked}),className:"mt-1 w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Analytics Cookies"}),o.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1",children:"Help us understand how visitors interact with our website (Google Analytics)."})]})]}),o.jsxs("label",{className:"flex items-start gap-3",children:[o.jsx("input",{type:"checkbox",checked:s.functional,onChange:u=>a({...s,functional:u.target.checked}),className:"mt-1 w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Functional Cookies"}),o.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1",children:"Enable personalized features and remember your preferences."})]})]})]}),o.jsx("button",{onClick:()=>n(!i),className:"text-sm text-primary-600 dark:text-primary-400 hover:underline mt-2",children:i?"Hide Details":"Show Details"})]}),o.jsxs("div",{className:"flex flex-wrap gap-2",children:[o.jsx(we,{variant:"ghost",size:"sm",onClick:c,children:"Reject All"}),i&&o.jsx(we,{variant:"secondary",size:"sm",onClick:l,children:"Accept Selected"}),o.jsx(we,{variant:"primary",size:"sm",onClick:r,children:"Accept All"})]})]})})})})},se=w.forwardRef(({className:t,variant:e="default",size:i="md",children:n,...s},a)=>{const r="inline-flex items-center font-medium rounded-md transition-colors",l={default:"bg-primary/10 text-primary border-transparent",secondary:"bg-secondary text-secondary-foreground border-transparent",outline:"border text-foreground",destructive:"bg-destructive/10 text-destructive border-transparent"},c={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-0.5 text-sm",lg:"px-3 py-1 text-base"};return o.jsx("span",{ref:a,className:Ji(r,l[e],c[i],t),...s,children:n})});se.displayName="Badge";var ho="https://js.stripe.com/v3",Th=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var jh=function(){for(var e=document.querySelectorAll('script[src^="'.concat(ho,'"]')),i=0;i<e.length;i++){var n=e[i];if(Th.test(n.src))return n}return null},ur=function(e){var i="",n=document.createElement("script");n.src="".concat(ho).concat(i);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(n),n},gt=null,qt=null,Yt=null,Nh=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},Eh=function(e,i){return function(){window.Stripe?e(window.Stripe):i(new Error("Stripe.js not available"))}},Ih=function(e){return gt!==null?gt:(gt=new Promise(function(i,n){if(typeof window>"u"||typeof document>"u"){i(null);return}if(window.Stripe){i(window.Stripe);return}try{var s=jh();if(!(s&&e)){if(!s)s=ur(e);else if(s&&Yt!==null&&qt!==null){var a;s.removeEventListener("load",Yt),s.removeEventListener("error",qt),(a=s.parentNode)===null||a===void 0||a.removeChild(s),s=ur(e)}}Yt=Eh(i,n),qt=Nh(n),s.addEventListener("load",Yt),s.addEventListener("error",qt)}catch(r){n(r);return}}),gt.catch(function(i){return gt=null,Promise.reject(i)}))},yt,Mh=function(){return yt||(yt=Ih(null).catch(function(e){return yt=null,Promise.reject(e)}),yt)};Promise.resolve().then(function(){return Mh()}).catch(function(t){console.warn(t)});const Rh={paymentLinks:{earlyBird:"#",regular:"#","single-startup":"#","startup-trio":"#","startup-empire":"#"},customerPortalUrl:"#"},Dh=t=>{t&&t!=="#"?window.open(t,"_blank"):console.error("Stripe payment link not configured")},Oh="http://localhost:8000/api",Qi=vo.create({baseURL:Oh,headers:{"Content-Type":"application/json"},timeout:1e4});Qi.interceptors.response.use(t=>t,t=>(t.response?console.error("API Error:",t.response.data):t.request?console.error("Network Error:",t.request):console.error("Error:",t.message),Promise.reject(t)));const dr={trackEvent:async(t,e)=>{await Qi.post("/analytics/event",{eventType:t,eventData:e,timestamp:new Date().toISOString()})},trackConversion:async(t,e)=>{await Qi.post("/analytics/conversion",{conversionType:t,value:e,timestamp:new Date().toISOString()})}};class Lh{constructor(){Un(this,"isInitialized",!1)}init(e){!this.isInitialized&&e&&(yi.initialize(e),this.isInitialized=!0)}trackPageView(e){this.isInitialized&&yi.send({hitType:"pageview",page:e})}trackEvent({category:e,action:i,label:n,value:s}){this.isInitialized&&yi.event({category:e,action:i,label:n,value:s}),dr.trackEvent(`${e}_${i}`,{label:n,value:s}).catch(console.error)}trackConversion(e,i){this.trackEvent({category:"Conversion",action:e,value:i}),dr.trackConversion(e,i).catch(console.error)}trackScrollDepth(e){this.trackEvent({category:"Engagement",action:"Scroll",label:`${e}%`,value:e})}trackTimeOnPage(e){this.trackEvent({category:"Engagement",action:"Time on Page",value:e})}trackCTAClick(e,i){this.trackEvent({category:"CTA",action:"Click",label:`${e} - ${i}`})}trackFormSubmission(e,i){this.trackEvent({category:"Form",action:i?"Submit Success":"Submit Error",label:e})}trackVideoPlay(e,i){this.trackEvent({category:"Video",action:"Play",label:e,value:i})}trackSocialShare(e,i){this.trackEvent({category:"Social",action:"Share",label:`${e} - ${i}`})}}const ne=new Lh,Vh={heroCtaClick:()=>ne.trackCTAClick("Get Early Access","Hero"),watchDemoClick:()=>ne.trackCTAClick("Watch Demo","Hero"),pricingCtaClick:()=>ne.trackCTAClick("Get Instant Access","Pricing"),finalCtaClick:()=>ne.trackCTAClick("Claim Early Access","Final CTA"),waitlistJoin:t=>ne.trackConversion("Waitlist Join",t),paymentInitiated:()=>ne.trackConversion("Payment Initiated"),paymentCompleted:t=>ne.trackConversion("Payment Completed",t),faqOpen:t=>ne.trackEvent({category:"FAQ",action:"Open",label:t}),trackEvent:(t,e,i,n)=>ne.trackEvent({category:t,action:e,label:i,value:n}),trackFormSubmission:(t,e)=>ne.trackFormSubmission(t,e)},Fh=()=>{w.useEffect(()=>{ne.trackPageView(window.location.pathname)},[]);const t=w.useCallback((a,r,l,c)=>{ne.trackEvent({category:a,action:r,label:l,value:c})},[]),e=w.useCallback(()=>{let a=0;const r=()=>{const l=document.documentElement.scrollHeight-window.innerHeight,c=Math.round(window.scrollY/l*100);c>a&&(a=c,(c===25||c===50||c===75||c===100)&&ne.trackScrollDepth(c))};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),i=w.useCallback(()=>{const a=Date.now();return()=>{const r=Math.round((Date.now()-a)/1e3);ne.trackTimeOnPage(r)}},[]),{trackEvent:n,...s}=Vh;return{trackEvent:t,trackScrollDepth:e,trackTimeOnPage:i,...s}},Ln=()=>{const[t,e]=w.useState(!1),[i,n]=w.useState(null),{paymentInitiated:s}=Fh(),a=w.useCallback(async(l="earlyBird")=>{e(!0),n(null);try{s();const c=Rh.paymentLinks[l];if(!c||c==="#")throw new Error("Payment link not configured. Please try again later.");Dh(c),e(!1)}catch(c){const u=c instanceof Error?c.message:"Failed to initiate payment";n(u),e(!1),console.error("Payment error:",c)}},[s]),r=w.useCallback(()=>{n(null)},[]);return{initiatePayment:a,isLoading:t,error:i,clearError:r}},Bh=()=>{const[t,e]=w.useState(47);Ln(),w.useEffect(()=>{const s=setInterval(()=>{e(a=>Math.max(a-Math.floor(Math.random()*3),10))},3e4);return()=>clearInterval(s)},[]);const i=()=>{const s=document.getElementById("pricing");s==null||s.scrollIntoView({behavior:"smooth"})},n=()=>{const s=document.getElementById("how-it-works");s==null||s.scrollIntoView({behavior:"smooth"})};return o.jsxs("section",{className:"relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24",children:[o.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[o.jsx(N.div,{className:"absolute -top-40 -right-40 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl",animate:{scale:[1,1.2,1],opacity:[.3,.5,.3]},transition:{duration:8,repeat:1/0}}),o.jsx(N.div,{className:"absolute -bottom-40 -left-40 w-96 h-96 bg-accent-300/20 dark:bg-accent-600/10 rounded-full blur-3xl",animate:{scale:[1.2,1,1.2],opacity:[.5,.3,.5]},transition:{duration:8,repeat:1/0}}),o.jsx(N.div,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nebula-300/10 dark:bg-nebula-600/5 rounded-full blur-3xl",animate:{rotate:[0,360]},transition:{duration:60,repeat:1/0,ease:"linear"}})]}),o.jsxs(N.div,{className:"relative max-width-container section-padding py-16 sm:py-24 z-10",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[o.jsxs("div",{className:"text-center space-responsive-md",children:[o.jsx(N.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1},children:o.jsxs(se,{variant:"default",size:"lg",className:"mb-6",children:[o.jsx("span",{className:"mr-2",children:"🚀"}),"Only ",t," early access spots left at 50% off"]})}),o.jsxs(N.h1,{className:"text-responsive-3xl font-display font-black mb-6 leading-tight",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:["Launch Your First Customer in"," ",o.jsx("span",{className:"text-gradient",children:"30 Days"}),o.jsx("br",{}),o.jsx("span",{className:"text-gradient",children:"With AI-Powered Startup Platform"})]}),o.jsx(N.p,{className:"text-responsive-lg text-foreground-muted mb-8 max-w-3xl mx-auto leading-relaxed",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:"90% of startups fail because they build products nobody wants. StartupGPT validates your idea and gets you to revenue in 30 days with AI agents working 24/7. Join 500+ founders who have already tested our system."}),o.jsxs(N.div,{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},children:[o.jsxs(we,{size:"lg",onClick:i,children:[o.jsx("span",{className:"mr-2",children:"🚀"}),"Claim Your 50% OFF Spot"]}),o.jsxs(we,{variant:"secondary",size:"lg",onClick:n,children:[o.jsxs("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]}),"Watch Demo"]})]}),o.jsxs(N.div,{className:"flex flex-wrap justify-center gap-4 sm:gap-6 text-responsive-sm text-foreground-muted",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5},children:[o.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border",children:[o.jsx("svg",{className:"w-4 h-4 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"First Customer in 30 Days or Money Back*"]}),o.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border",children:[o.jsx("svg",{className:"w-4 h-4 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"500+ Founders Already Joined"]}),o.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border",children:[o.jsx("svg",{className:"w-4 h-4 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"$7.5M+ Revenue Generated"]})]}),o.jsx(N.p,{className:"mt-3 text-xs text-foreground-muted italic",initial:{opacity:0},animate:{opacity:1},transition:{delay:.55},children:"*Fair use: we keep what you used for compute and marketing"}),o.jsxs(N.div,{className:"mt-12 p-6 rounded-2xl bg-card/50 backdrop-blur-lg border-2 border-primary-300 dark:border-primary-700 max-w-2xl mx-auto",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6},children:[o.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center",children:o.jsx("svg",{className:"w-6 h-6 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"font-bold text-sm",children:"Built by serial entrepreneurs"}),o.jsx("p",{className:"text-xs text-foreground-muted",children:"Combined 20+ years in SaaS"})]})]}),o.jsx("p",{className:"text-center text-sm text-foreground-muted",children:`"We've built 127 startups, created 6 successful SaaS businesses, and had 3 successful exits. Now we help you skip those painful lessons and go straight to what works."`})]})]}),o.jsxs(N.div,{className:"mt-16 relative",initial:{y:40,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6},children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"}),o.jsx("img",{src:"/images/hero-dashboard.svg",alt:"StartupGPT Dashboard showing AI agents validating startup ideas and generating revenue in 30 days",className:"rounded-xl shadow-2xl mx-auto",loading:"eager",width:"1200",height:"800"})]})]})]})};var Xi=new Map,Ht=new WeakMap,hr=0,Gh=void 0;function Uh(t){return t?(Ht.has(t)||(hr+=1,Ht.set(t,hr.toString())),Ht.get(t)):"0"}function _h(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?Uh(t.root):t[e]}`).toString()}function Wh(t){const e=_h(t);let i=Xi.get(e);if(!i){const n=new Map;let s;const a=new IntersectionObserver(r=>{r.forEach(l=>{var c;const u=l.isIntersecting&&s.some(d=>l.intersectionRatio>=d);t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(c=n.get(l.target))==null||c.forEach(d=>{d(u,l)})})},t);s=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:a,elements:n},Xi.set(e,i)}return i}function zh(t,e,i={},n=Gh){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const c=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:s,observer:a,elements:r}=Wh(i),l=r.get(t)||[];return r.has(t)||r.set(t,l),l.push(e),a.observe(t),function(){l.splice(l.indexOf(e),1),l.length===0&&(r.delete(t),a.unobserve(t)),r.size===0&&(a.disconnect(),Xi.delete(s))}}function Ve({threshold:t,delay:e,trackVisibility:i,rootMargin:n,root:s,triggerOnce:a,skip:r,initialInView:l,fallbackInView:c,onChange:u}={}){var d;const[h,f]=w.useState(null),m=w.useRef(u),[x,p]=w.useState({inView:!!l,entry:void 0});m.current=u,w.useEffect(()=>{if(r||!h)return;let k;return k=zh(h,(E,T)=>{p({inView:E,entry:T}),m.current&&m.current(E,T),T.isIntersecting&&a&&k&&(k(),k=void 0)},{root:s,rootMargin:n,threshold:t,trackVisibility:i,delay:e},c),()=>{k&&k()}},[Array.isArray(t)?t.toString():t,h,s,n,a,r,i,c,e]);const b=(d=x.entry)==null?void 0:d.target,P=w.useRef(void 0);!h&&b&&!a&&!r&&P.current!==b&&(P.current=b,p({inView:!!l,entry:void 0}));const C=[f,x.inView,x.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}const pe=w.forwardRef(({className:t,variant:e="default",padding:i="md",children:n,...s},a)=>{const r="rounded-lg transition-all duration-200",l={default:"bg-card text-card-foreground border",elevated:"bg-card text-card-foreground border shadow-lg",bordered:"bg-card text-card-foreground border-2",glass:"glass-effect"},c={none:"",sm:"p-4",md:"p-6",lg:"p-8"};return o.jsx("div",{ref:a,className:Ji(r,l[e],c[i],t),...s,children:n})});pe.displayName="Card";const qh=()=>{const[t,e]=Ve({triggerOnce:!0,threshold:.1}),i=[{emoji:"😰",problem:"Spending 6-12 months building",result:"Only to find nobody wants it",stat:"90% of startups fail this way"},{emoji:"💸",problem:"Burning through $50K+ in savings",result:"With zero revenue to show",stat:"Average founder loss: $75K"},{emoji:"🔄",problem:"Stuck in endless feature loops",result:"While competitors launch faster",stat:"67% never actually launch"},{emoji:"😵",problem:"Wearing 10 different hats daily",result:"Burning out before launch",stat:"72% of founders burn out"}],n=[{icon:"⚡",title:"Validate in 2-4 Hours",description:"AI agents research your market, analyze competitors, and validate demand instantly.",before:"6-12 months",after:"2-4 hours"},{icon:"🤖",title:"Hundreds of Specialized AI Agents",description:"Each agent is an expert in their domain, working 24/7 on your startup.",before:"You doing everything",after:"AI army handles it"},{icon:"💰",title:"Revenue in 30 Days",description:"From idea to paying customers in 30 days or your money back.",before:"Years to profitability",after:"30 days to revenue"}],s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},a={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return o.jsxs("section",{className:"py-24 gradient-nebula relative overflow-hidden",children:[o.jsx(N.div,{className:"absolute inset-0 opacity-30",animate:{backgroundPosition:["0% 0%","100% 100%"]},transition:{duration:20,repeat:1/0,repeatType:"reverse"},style:{backgroundImage:"radial-gradient(circle at 20% 50%, rgba(120, 50, 200, 0.3) 0%, transparent 50%)"}}),o.jsxs("div",{className:"max-width-container section-padding relative z-10",children:[o.jsxs(N.div,{ref:t,className:"text-center mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[o.jsxs(se,{variant:"default",size:"lg",className:"mb-4",children:[o.jsx("span",{className:"mr-2",children:"⚠️"}),"The Brutal Reality"]}),o.jsxs("h2",{className:"text-responsive-2xl font-display font-bold mb-4",children:[o.jsx("span",{className:"text-gradient",children:"90% of Startups Fail"})," Because",o.jsx("br",{}),"They Make These ",o.jsx("span",{className:"text-gradient",children:"Critical Mistakes"})]}),o.jsx("p",{className:"text-responsive-lg text-foreground-muted max-w-3xl mx-auto",children:"You're probably making at least 3 of these mistakes right now. Every day you wait costs you money, time, and opportunities."})]}),o.jsx(N.div,{className:"grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto",variants:s,initial:"hidden",animate:e?"visible":"hidden",children:i.map((r,l)=>o.jsx(N.div,{variants:a,children:o.jsx(pe,{variant:"bordered",className:"h-full hover:border-destructive transition-colors",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("span",{className:"text-5xl animate-pulse",children:r.emoji}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"font-bold text-lg mb-2",children:r.problem}),o.jsx("p",{className:"text-foreground-muted mb-2",children:r.result}),o.jsx(se,{variant:"destructive",size:"sm",children:r.stat})]})]})})},l))}),o.jsxs(N.div,{className:"text-center mb-12",initial:{opacity:0,scale:.95},animate:e?{opacity:1,scale:1}:{},transition:{delay:.3},children:[o.jsxs("h3",{className:"text-responsive-xl font-display font-bold mb-4",children:["Here's How ",o.jsx("span",{className:"text-gradient",children:"StartupGPT"})," Solves It"]}),o.jsx("p",{className:"text-responsive-base text-foreground-muted max-w-2xl mx-auto",children:"Our AI-powered system eliminates every single pain point, replacing months of struggle with hours of progress."})]}),o.jsx(N.div,{className:"grid md:grid-cols-3 gap-8 mb-12",variants:s,initial:"hidden",animate:e?"visible":"hidden",children:n.map((r,l)=>o.jsx(N.div,{variants:a,children:o.jsxs(pe,{variant:"elevated",className:"h-full text-center flex flex-col",children:[o.jsx("div",{className:"text-5xl mb-4 animate-float",children:r.icon}),o.jsx("h3",{className:"text-xl font-bold mb-3",children:r.title}),o.jsx("p",{className:"text-foreground-muted mb-4",children:r.description}),o.jsx("div",{className:"mt-auto pt-4",children:o.jsxs("div",{className:"flex flex-col items-center gap-2",children:[o.jsx("div",{className:"text-xs text-foreground-muted uppercase tracking-wider",children:"Before"}),o.jsx("div",{className:"px-4 py-2 rounded-full bg-destructive/10 text-destructive line-through text-sm",children:r.before}),o.jsx("div",{className:"text-2xl",children:"↓"}),o.jsx("div",{className:"text-xs text-foreground-muted uppercase tracking-wider",children:"After"}),o.jsx("div",{className:"px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm",children:r.after})]})})]})},l))}),o.jsxs(N.div,{className:"text-center mt-16 p-8 rounded-3xl bg-card border-2 border-primary-300 dark:border-primary-700 shadow-comic-lg",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.5},children:[o.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Ready to Stop Making These Mistakes?"}),o.jsx("p",{className:"text-foreground-muted mb-6 max-w-2xl mx-auto",children:"Join 500+ founders who have already discovered the better way. Limited spots available at 50% OFF presale pricing."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsxs(we,{variant:"default",size:"lg",onClick:()=>{var r;return(r=document.getElementById("pricing"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},children:[o.jsx("span",{className:"mr-2",children:"🚀"}),"See Pricing & Save 50%"]}),o.jsxs(we,{variant:"secondary",size:"lg",onClick:()=>{var r;return(r=document.getElementById("how-it-works"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},children:[o.jsx("span",{className:"mr-2",children:"📖"}),"Learn How It Works"]})]}),o.jsx("p",{className:"text-sm text-foreground-muted mt-4 italic",children:"* 30-day money back guarantee. No customers = full refund (minus compute & ad costs)"})]})]})]})},Yh=()=>{const[t,e]=Ve({triggerOnce:!0,threshold:.1}),i=[{id:"1",title:"AI Market Research Agent",description:"Analyzes market trends, competitor landscape, and identifies untapped opportunities in real-time.",icon:o.jsx("svg",{className:"w-8 h-8 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),benefit:"Save $50k on market research consultants"},{id:"2",title:"Business Model Validation Agent",description:"Tests multiple revenue models, pricing strategies, and unit economics to find what works.",icon:o.jsx("svg",{className:"w-8 h-8 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}),benefit:"Avoid 90% of startup failures"},{id:"3",title:"Customer Discovery Agent",description:"Conducts automated interviews, surveys, and analyzes feedback to understand your customers deeply.",icon:o.jsx("svg",{className:"w-8 h-8 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),benefit:"Talk to 1000+ customers in days"},{id:"4",title:"MVP Builder Agent",description:"Generates product roadmaps, wireframes, and technical specifications for rapid development.",icon:o.jsx("span",{className:"text-3xl",children:"🚀"}),benefit:"Launch MVP 10x faster"},{id:"5",title:"Growth Hacking Agent",description:"Creates and executes growth experiments, optimizes funnels, and scales what works.",icon:o.jsx("svg",{className:"w-8 h-8 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),benefit:"Grow 300% faster than competitors"},{id:"6",title:"Pitch Deck Agent",description:"Crafts compelling pitch decks, financial models, and investor materials that get funded.",icon:o.jsx("svg",{className:"w-8 h-8 text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),benefit:"Raise funding 5x easier"}],n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},s={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return o.jsx("section",{className:"py-24",id:"features",children:o.jsxs("div",{className:"max-width-container section-padding",children:[o.jsxs(N.div,{ref:t,className:"text-center mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[o.jsx(se,{variant:"primary",size:"lg",className:"mb-4",children:"AI-Powered Features"}),o.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"Specialized AI Agents Working 24/7 as Your Startup Team"}),o.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Each specialized AI agent replaces expensive consultants and accelerates your path to revenue"})]}),o.jsx(N.div,{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",variants:n,initial:"hidden",animate:e?"visible":"hidden",children:i.map(a=>o.jsx(N.div,{variants:s,children:o.jsx(pe,{variant:"bordered",className:"h-full hover:shadow-lg transition-shadow",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"flex-shrink-0",children:a.icon}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:a.title}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-3",children:a.description}),o.jsx(se,{variant:"secondary",size:"sm",children:a.benefit})]})]})})},a.id))}),o.jsxs(N.div,{className:"mt-16 text-center",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.8},children:[o.jsx("p",{className:"text-lg text-gray-600 mb-6",children:"All agents work seamlessly together, sharing insights and optimizing your path to success"}),o.jsxs("div",{className:"inline-flex items-center gap-2 text-primary-600 font-semibold",children:[o.jsx("span",{children:"See them in action"}),o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})]})})},Hh=()=>{const[t,e]=Ve({triggerOnce:!0,threshold:.1}),i=[{number:"01",title:"Ideation Phase",duration:"2-4 hours",icon:o.jsx("svg",{className:"w-10 h-10",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"})}),goal:"Validate your startup idea and understand your customer.",agents:["Market Research Agent","Customer Discovery Agent"],activities:["Define a clear problem worth solving","Identify your ideal customer segments","Analyze competitors and market dynamics"],deliverables:["Problem Statement Document (PDF)","Target Customer Personas (PDF)","Market Research Report (PDF)","Competitor Analysis Matrix (XLSX)"],outcome:"A validated startup idea backed by data and insights."},{number:"02",title:"Planning Phase",duration:"2-4 hours",icon:o.jsx("svg",{className:"w-10 h-10",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"})}),goal:"Design a viable business model and go-to-market strategy.",agents:["Business Model Validation Agent","Strategic Research Agent"],activities:["Structure your business model visually","Project your finances for the next 3 years","Identify potential risks and plan to mitigate them","Create a 12-month roadmap of milestones"],deliverables:["Business Model Canvas (PDF)","3-Year Financial Model (XLSX)","Risk Mitigation Plan (PDF)","Project Roadmap (PDF)"],outcome:"A complete, investment-ready business foundation."},{number:"03",title:"Build Phase",duration:"2-8 hours",icon:o.jsx("svg",{className:"w-10 h-10",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"})}),goal:"Launch your MVP fast.",agents:["MVP Builder Agent","Deployment Agent"],activities:["Prioritize core features","Generate UI/UX wireframes and MVP specs","Use no-code/low-code tools or code scaffolds","Get your first functional version live"],deliverables:["MVP Prototype","Feature Backlog (PDF or tool-based)","Product Feedback Logs","Hosted MVP on projectname.startupgpt.pro or custom domain"],outcome:"A working MVP ready for real-world testing."},{number:"04",title:"Content Phase",duration:"2-4 hours",icon:o.jsx("svg",{className:"w-10 h-10",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})}),goal:"Craft compelling branding, messaging, and positioning.",agents:["Growth Hacking Agent","Analytics Agent"],activities:["Develop your brand identity and voice","Create marketing copy and visuals","Set up your landing page and startup story","Build pitch decks and investor materials"],deliverables:["Brand Style Guide (PDF)","Copywriting Pack (Tagline, Hero Text, etc.)","Marketing Content Calendar","Pitch Deck (PPTX or PDF)"],outcome:"A cohesive brand and growth-ready presence."},{number:"05",title:"Launch Phase",duration:"1-2 hours",icon:o.jsx("span",{className:"text-5xl",children:"🚀"}),goal:"Acquire your first users and iterate fast.",agents:["Growth Hacking Agent","Customer Discovery Agent"],activities:["Deploy your landing page and app","Launch on Product Hunt, Reddit, X/Twitter, etc.","Set up email marketing and feedback loops","Run early-stage experiments to optimize onboarding"],deliverables:["Launch Campaign Tracker","Outreach Templates (Email, Social Media)","Onboarding Flow & Analytics","First User Feedback Reports"],outcome:"Your startup is live with early traction."},{number:"06",title:"Promotion Phase",duration:"Ongoing",icon:o.jsx("svg",{className:"w-10 h-10",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"})}),goal:"Scale sustainably and optimize for growth.",agents:["Growth Hacking Agent","Analytics & Insights Agent"],activities:["Analyze growth metrics and optimize funnels","Launch paid and organic campaigns","Test new channels and partnerships","Improve LTV, reduce churn, and iterate fast"],deliverables:["Growth Dashboard","A/B Test Results","Campaign ROI Reports","Scalable Growth Plan"],outcome:"A growing business with data-driven decision-making."}],n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},s={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return o.jsx("section",{className:"py-24",id:"how-it-works",children:o.jsxs("div",{className:"max-width-container section-padding",children:[o.jsxs(N.div,{ref:t,className:"text-center mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[o.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"Our 6-Phase Journey to Success"}),o.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Follow our proven roadmap from idea to thriving business. Each phase is powered by specialized AI agents working 24/7 for your success."})]}),o.jsx(N.div,{className:"space-y-8",variants:n,initial:"hidden",animate:e?"visible":"hidden",children:i.map((a,r)=>o.jsx(N.div,{variants:s,children:o.jsx(pe,{variant:"elevated",className:"overflow-hidden",children:o.jsxs("div",{className:"lg:flex",children:[o.jsxs("div",{className:"lg:w-1/3 bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[o.jsx("div",{className:"flex items-center justify-center",children:a.icon}),o.jsxs("div",{children:[o.jsx("div",{className:"text-3xl font-bold opacity-50",children:a.number}),o.jsx("h3",{className:"text-2xl font-bold",children:a.title})]})]}),o.jsx(se,{variant:"secondary",size:"sm",className:"mb-4",children:a.duration}),o.jsx("p",{className:"text-lg font-medium mb-4",children:a.goal}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("p",{className:"text-sm font-semibold uppercase tracking-wide opacity-80",children:"AI Agents:"}),a.agents.map((l,c)=>o.jsxs("p",{className:"text-sm flex items-center gap-2",children:[o.jsx("span",{className:"text-white/60",children:"•"})," ",l]},c))]})]}),o.jsxs("div",{className:"lg:w-2/3 p-8",children:[o.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"text-lg font-bold text-gray-900 dark:text-white mb-3",children:"Key Activities"}),o.jsx("ul",{className:"space-y-2",children:a.activities.map((l,c)=>o.jsxs("li",{className:"flex items-start gap-2 text-gray-600 dark:text-gray-400",children:[o.jsx("svg",{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),o.jsx("span",{className:"text-sm",children:l})]},c))})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-lg font-bold text-gray-900 dark:text-white mb-3",children:"Deliverables"}),o.jsx("ul",{className:"space-y-2",children:a.deliverables.map((l,c)=>o.jsxs("li",{className:"flex items-start gap-2 text-gray-600 dark:text-gray-400",children:[o.jsx("svg",{className:"w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),o.jsx("span",{className:"text-sm",children:l})]},c))})]})]}),o.jsx("div",{className:"mt-6 p-4 bg-muted rounded-lg",children:o.jsxs("p",{className:"text-sm font-medium",children:[o.jsx("strong",{children:"Outcome:"})," ",a.outcome]})})]})]})})},r))}),o.jsx(N.div,{className:"mt-16 text-center",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.6},children:o.jsxs("div",{className:"bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground",children:[o.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Ready to Start Your Journey?"}),o.jsx("p",{className:"text-lg opacity-90 mb-6 max-w-2xl mx-auto",children:"Join 500+ founders who have tested our platform during the alpha phase. Launch your startup with confidence using our proven AI-powered system."}),o.jsx("a",{href:"#pricing",className:"inline-flex bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors border",children:"Choose Your Package →"})]})})]})})},Kh=()=>{const[t,e]=Ve({triggerOnce:!0,threshold:.1}),[i,n]=w.useState({days:0,hours:0,minutes:0,seconds:0});w.useEffect(()=>{const l=()=>{const d=+new Date("2025-09-01T00:00:00")-+new Date;return d>0?{days:Math.floor(d/864e5),hours:Math.floor(d/36e5%24),minutes:Math.floor(d/1e3/60%60),seconds:Math.floor(d/1e3%60)}:{days:0,hours:0,minutes:0,seconds:0}};n(l());const c=setInterval(()=>{n(l())},1e3);return()=>clearInterval(c)},[]);const s=[{id:"single-startup",name:"Solopreneur",price:497,originalPrice:997,currency:"USD",interval:"one-time",stripePriceId:"https://buy.stripe.com/28E8wRcbf6GE9vf3p98EM00",popular:!1,limitedSpots:47,revenueShare:"25%",features:["1 Startup Launch","All AI Agents Included","Google Marketing Budget","Social Media Marketing Budget (X, Facebook, YouTube, TikTok)","Private Founder Community (Discord)","All Future Updates included*","Access on September 1, 2025","$10,000 Marketing Budget from VC Network","25% Revenue Share","Super Early Bird: 50% OFF (Reg. $997)"]},{id:"startup-trio",name:"Entrepreneur",price:1397,originalPrice:2991,currency:"USD",interval:"one-time",stripePriceId:"https://buy.stripe.com/fZucN7fnr0ig8rbcZJ8EM01",popular:!0,limitedSpots:25,savings:"Save $1,594 (53% OFF)",revenueShare:"20%",features:["3 Startup Launches","All AI Agents Included","Google Marketing Budget","Social Media Marketing Budget (X, Facebook, YouTube, TikTok)","Private Founder Community (Discord)","All Future Updates included*","Access on September 1, 2025","$10,000 Marketing Budget from VC Network","20% Revenue Share","Priority Support & Weekly Check-ins","Bonus: Personal AI Agent Training"]},{id:"startup-empire",name:"Multipreneur",price:3997,originalPrice:9970,currency:"USD",interval:"one-time",stripePriceId:"https://buy.stripe.com/dRmeVf6QVfdaePz4td8EM02",popular:!1,limitedSpots:10,savings:"Save $5,973 (60% OFF)",revenueShare:"15%",features:["10 Startup Launches","All AI Agents Included","Google Marketing Budget","Social Media Marketing Budget (X, Facebook, YouTube, TikTok)","Custom AI Agent Training","Private Founder Community (Discord)","All Future Updates included*","Access on September 1, 2025","$10,000 Marketing Budget from VC Network","15% Revenue Share","White-Glove Onboarding","Direct Founder Access"]}],{initiatePayment:a}=Ln(),r=l=>{l.stripePriceId.startsWith("https://")?window.open(l.stripePriceId,"_blank"):a(l.id)};return o.jsx("section",{className:"py-24 bg-white dark:bg-gray-900",id:"pricing",children:o.jsxs("div",{className:"max-width-container section-padding",children:[o.jsxs(N.div,{ref:t,className:"text-center mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[o.jsxs(se,{variant:"default",size:"lg",className:"mb-4",children:[o.jsx("span",{className:"mr-2",children:"⏰"}),"Super Early Bird Pricing Ends Soon"]}),o.jsxs("h2",{className:"text-responsive-2xl font-display font-bold mb-4",children:[o.jsx("span",{className:"text-gradient",children:"Lock In Your 50% Discount"}),o.jsx("br",{}),"Before Prices Double on Launch"]}),o.jsxs("p",{className:"text-responsive-lg text-foreground-muted max-w-2xl mx-auto mb-2",children:["Join 500+ founders who secured their spots during StartupGPT Alpha.",o.jsx("br",{}),"Prices increase as spots fill up."]}),o.jsxs("div",{className:"flex justify-center gap-4 text-sm",children:[o.jsx(se,{variant:"secondary",children:"✓ 30-Day Results Guarantee*"}),o.jsx(se,{variant:"default",children:"✓ No Hidden Fees"}),o.jsx(se,{variant:"secondary",children:"✓ Launch Sept 1"})]})]}),o.jsxs(N.div,{className:"mb-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 text-center",initial:{scale:.95,opacity:0},animate:e?{scale:1,opacity:1}:{},transition:{delay:.2},children:[o.jsx("p",{className:"text-lg font-semibold mb-2",children:"Early Bird Pricing Ends In:"}),o.jsx("div",{className:"flex justify-center gap-4",children:Object.entries(i).map(([l,c])=>o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:o.jsx("span",{className:"text-3xl font-bold",children:c.toString().padStart(2,"0")})}),o.jsx("p",{className:"text-sm mt-1 capitalize",children:l})]},l))})]}),o.jsxs(N.div,{className:"mb-12 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.25},children:[o.jsxs(pe,{variant:"glass",className:"text-center p-4",children:[o.jsx("p",{className:"text-3xl font-bold text-gradient mb-1",children:"500+"}),o.jsx("p",{className:"text-sm text-foreground-muted",children:"Founders Already Joined"})]}),o.jsxs(pe,{variant:"glass",className:"text-center p-4",children:[o.jsx("p",{className:"text-3xl font-bold text-gradient-cosmic mb-1",children:"$7.5M+"}),o.jsx("p",{className:"text-sm text-foreground-muted",children:"Revenue Generated"})]}),o.jsxs(pe,{variant:"glass",className:"text-center p-4",children:[o.jsx("p",{className:"text-3xl font-bold text-gradient mb-1",children:"4.9/5"}),o.jsx("p",{className:"text-sm text-foreground-muted",children:"Founder Rating"})]})]}),o.jsx("div",{className:"grid md:grid-cols-3 gap-6 max-w-6xl mx-auto",children:s.map((l,c)=>o.jsx(N.div,{initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.3+c*.1},children:o.jsxs(pe,{variant:"elevated",className:`relative overflow-hidden h-full flex flex-col ${l.popular?"ring-2 ring-primary-500":""}`,children:[l.popular&&o.jsx("div",{className:"absolute top-0 right-0 bg-accent-500 text-white px-4 py-1 rounded-bl-lg",children:o.jsx("span",{className:"text-sm font-semibold",children:"MOST POPULAR"})}),l.savings&&o.jsx("div",{className:"absolute top-0 left-0 bg-green-500 text-white px-4 py-1 rounded-br-lg",children:o.jsx("span",{className:"text-sm font-semibold",children:l.savings})}),o.jsxs("div",{className:"text-center mb-8 pt-8",children:[o.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:l.name}),o.jsxs("div",{className:"flex items-baseline justify-center gap-2 mb-1",children:[o.jsxs("span",{className:"text-4xl font-bold text-gray-900 dark:text-white",children:["$",l.price]}),l.originalPrice&&o.jsxs("span",{className:"text-xl text-gray-500 line-through",children:["$",l.originalPrice]})]}),o.jsxs("p",{className:"text-lg font-semibold text-primary dark:text-primary-400 mb-2",children:[l.revenueShare," Revenue Share"]}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"One-time payment + Revenue share"}),l.limitedSpots&&o.jsxs(se,{variant:"destructive",className:"mt-3",children:["Only ",l.limitedSpots," spots left at this price"]})]}),o.jsx("ul",{className:"space-y-3 mb-8 flex-grow",children:l.features.map((u,d)=>o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx("svg",{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),o.jsx("span",{className:"text-gray-700 dark:text-gray-300 text-sm",children:u})]},d))}),o.jsx(we,{size:"lg",fullWidth:!0,onClick:()=>r(l),className:`mb-4 ${l.popular?"bg-accent hover:bg-accent/90 text-accent-foreground":""}`,variant:l.popular?"default":"secondary",children:"Secure Your Spot"}),o.jsx("div",{className:"text-center space-y-2 text-xs text-gray-600 dark:text-gray-400",children:o.jsx("p",{children:"✓ Secure payment via Stripe"})})]})},l.id))}),o.jsxs(N.div,{className:"mt-16 text-center",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.5},children:[o.jsxs("div",{className:"bg-primary-50 dark:bg-gray-800 rounded-xl p-6 max-w-2xl mx-auto",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"What's Included in Your Marketing Budget"}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Each startup launch includes budget for Google Ads and social media campaigns (X, Facebook, YouTube, or TikTok) based on your product and target audience. Our AI agents optimize your ad spend for maximum ROI."}),o.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-3 italic",children:"* All future updates are included after we've built you a business with at least 50 paying customers and $500+ MRR"})]}),o.jsxs("div",{className:"inline-flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400 mt-8",children:[o.jsx("img",{src:"/images/stripe-badge.svg",alt:"Powered by Stripe",className:"h-8"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"SSL Secure Payment"]})]})]})]})})},$h=()=>{const[t,e]=Ve({triggerOnce:!0,threshold:.1}),i=[{icon:"🎁",title:"You Get",amount:"$2,500",description:"Additional marketing budget per startup after your first 100 customers"},{icon:"🎉",title:"Your Friend Gets",amount:"$2,500",description:"Additional marketing budget per startup after their first 100 customers"}],n=[{number:"1",title:"Purchase Your Bundle",description:"Secure your spot with any of our bundles"},{number:"2",title:"Get Your Unique Link",description:"Use the email address from your Stripe purchase to generate your referral link"},{number:"3",title:"Share With Friends",description:"Send your link to fellow entrepreneurs ready to launch"},{number:"4",title:"Both Win Big",description:"You and your friend each get $2,500 extra marketing budget per startup"}];return o.jsx("section",{className:"py-24 bg-gradient-to-br from-purple-50 to-primary-50 dark:from-gray-900 dark:to-gray-800",children:o.jsxs("div",{className:"max-width-container section-padding",children:[o.jsxs(N.div,{ref:t,className:"text-center mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[o.jsx(se,{variant:"success",size:"lg",className:"mb-4",children:"🚀 Exclusive Presale Offer"}),o.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"Refer Friends & Multiply Your Success"}),o.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Share the opportunity with fellow entrepreneurs and both get an additional $2,500 marketing budget per startup from our VC network"})]}),o.jsx(N.div,{className:"grid md:grid-cols-2 gap-8 mb-16",initial:{opacity:0,scale:.95},animate:e?{opacity:1,scale:1}:{},transition:{delay:.2},children:i.map((s,a)=>o.jsxs(pe,{variant:"elevated",className:"text-center p-8",children:[o.jsx("div",{className:"text-6xl mb-4",children:s.icon}),o.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:s.title}),o.jsx("div",{className:"text-5xl font-bold text-primary-600 dark:text-primary-400 mb-3",children:s.amount}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:s.description}),o.jsxs("div",{className:"mt-4 inline-flex items-center gap-2 text-sm text-green-600 dark:text-green-400",children:[o.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"From our Venture Capital network"]})]},a))}),o.jsxs(N.div,{className:"mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.4},children:[o.jsx("h3",{className:"text-2xl font-bold text-center text-gray-900 dark:text-white mb-8",children:"How It Works"}),o.jsx("div",{className:"grid md:grid-cols-4 gap-6",children:n.map((s,a)=>o.jsxs(N.div,{initial:{x:-20,opacity:0},animate:e?{x:0,opacity:1}:{},transition:{delay:.5+a*.1},className:"relative",children:[a<n.length-1&&o.jsx("div",{className:"hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 -z-10"}),o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4",children:s.number}),o.jsx("h4",{className:"font-bold text-gray-900 dark:text-white mb-2",children:s.title}),o.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:s.description})]})]},a))})]}),o.jsxs(N.div,{className:"bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.6},children:[o.jsxs("div",{className:"max-w-2xl mx-auto",children:[o.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-4",children:"Ready to Start Earning?"}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:"Enter the email address you used for your Stripe purchase to generate your unique referral link."}),o.jsxs("div",{className:"mb-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4",children:[o.jsx("input",{type:"email",id:"referralEmail",placeholder:"your-stripe-email@example.com",className:"flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"}),o.jsx("button",{id:"generateReferralBtn",className:"px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap",onClick:()=>{},children:"Generate Link"})]}),o.jsxs("div",{id:"referralLinkContainer",className:"hidden",children:[o.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Your unique referral link:"}),o.jsxs("div",{className:"flex gap-2 max-w-md mx-auto",children:[o.jsx("input",{type:"text",id:"referralLinkDisplay",readOnly:!0,className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-mono"}),o.jsx("button",{id:"copyReferralBtn",className:"px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm",children:"Copy"})]}),o.jsx("p",{id:"copySuccess",className:"text-sm text-green-600 dark:text-green-400 mt-2 hidden",children:"✓ Link copied to clipboard!"})]})]}),o.jsxs("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center",children:[o.jsx("svg",{className:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),o.jsx("span",{className:"text-sm",children:"Unlimited referrals • No expiration"})]})]}),o.jsx("script",{dangerouslySetInnerHTML:{__html:`
            document.addEventListener('DOMContentLoaded', function() {
              function generateReferralCode(email) {
                var hash = 0;
                for (var i = 0; i < email.length; i++) {
                  var char = email.charCodeAt(i);
                  hash = ((hash << 5) - hash) + char;
                  hash = hash & hash;
                }
                return 'SGP' + Math.abs(hash).toString(36).toUpperCase().substring(0, 8);
              }
              
              var generateBtn = document.getElementById('generateReferralBtn');
              var emailInput = document.getElementById('referralEmail');
              var linkContainer = document.getElementById('referralLinkContainer');
              var linkDisplay = document.getElementById('referralLinkDisplay');
              var copyBtn = document.getElementById('copyReferralBtn');
              var copySuccess = document.getElementById('copySuccess');
              
              if (generateBtn) {
                generateBtn.addEventListener('click', function(e) {
                  e.preventDefault();
                  var email = emailInput.value.trim();
                  if (!email || !email.includes('@')) {
                    alert('Please enter a valid email address');
                    return;
                  }
                  
                  var referralCode = generateReferralCode(email);
                  var referralLink = window.location.origin + '?ref=' + referralCode;
                  
                  linkDisplay.value = referralLink;
                  linkContainer.classList.remove('hidden');
                });
              }
              
              if (copyBtn) {
                copyBtn.addEventListener('click', function(e) {
                  e.preventDefault();
                  linkDisplay.select();
                  linkDisplay.setSelectionRange(0, 99999); // For mobile devices
                  
                  try {
                    document.execCommand('copy');
                    copySuccess.classList.remove('hidden');
                    setTimeout(function() {
                      copySuccess.classList.add('hidden');
                    }, 3000);
                  } catch (err) {
                    alert('Failed to copy link');
                  }
                });
              }
              
              if (emailInput) {
                emailInput.addEventListener('keypress', function(e) {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    generateBtn.click();
                  }
                });
              }
            });
          `}})]}),o.jsx(N.div,{className:"mt-8 text-center",initial:{opacity:0},animate:e?{opacity:1}:{},transition:{delay:.7},children:o.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 italic",children:"* Additional marketing budget is provided after reaching 100 paying customers for each startup launched"})})]})})},Qh=()=>{const[t,e]=Ve({triggerOnce:!0,threshold:.1}),i=[{id:"1",name:"Alessandro Palmieri",company:"TechFlow",role:"Founder & CEO",content:"The AI agents validated my SaaS idea in 48 hours. What would have taken months of research was done in days. Already have 50 paying customers!",rating:5,avatarUrl:"/images/avatar-1.jpg"},{id:"2",name:"Tomasz Kowalczyk",company:"DevTools Pro",role:"Founder",content:"After 2 months, I'm at $8k MRR and just quit my job to go full-time on my passion! The AI agents built everything while I was still working 9-5. Living the dream now!",rating:5,avatarUrl:"/images/avatar-2.jpg"},{id:"3",name:"Priya Mehta",company:"HealthTrack AI",role:"Founder",content:"From idea to $10k MRR in 30 days. The growth hacking agent created campaigns that actually worked. This is the future of startups.",rating:5,avatarUrl:"/images/avatar-3.jpg"},{id:"4",name:"Kenji Nakamura",company:"EduLearn",role:"CEO",content:"The pitch deck agent helped me raise $500k. Investors were impressed by the depth of market research and financial projections.",rating:5,avatarUrl:"/images/avatar-4.jpg"},{id:"5",name:"Isabella Ferreira",company:"FitnessPro",role:"Founder",content:"Saved me from building the wrong product. The validation showed my initial idea wouldn't work, but suggested a better alternative that's now thriving.",rating:5,avatarUrl:"/images/avatar-5.jpg"},{id:"6",name:"Viktor Andersson",company:"CodeCraft",role:"CTO & Co-founder",content:"The technical roadmap from the MVP agent was spot-on. We launched 3 months faster and under budget. Absolute game-changer.",rating:5,avatarUrl:"/images/avatar-6.jpg"}],n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},s={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return o.jsx("section",{className:"py-24 bg-gray-50 dark:bg-gray-800",id:"testimonials",children:o.jsxs("div",{className:"max-width-container section-padding",children:[o.jsxs(N.div,{ref:t,className:"text-center mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[o.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"Founders Love Our Platform"}),o.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Join 500+ entrepreneurs who've launched successful startups with our AI agents"}),o.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:"*These amazing founders used the alpha version of StartupGPT"}),o.jsxs("div",{className:"flex justify-center gap-8 mt-8",children:[o.jsxs("div",{className:"text-center",children:[o.jsx("p",{className:"text-4xl font-bold text-primary-600 dark:text-primary-400",children:"500+"}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Active Founders"})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("p",{className:"text-4xl font-bold text-primary-600 dark:text-primary-400",children:"$7.5M+"}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Revenue Generated"})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("p",{className:"text-4xl font-bold text-primary-600 dark:text-primary-400",children:"4.9/5"}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Average Rating"})]})]})]}),o.jsx(N.div,{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",variants:n,initial:"hidden",animate:e?"visible":"hidden",children:i.map(a=>o.jsx(N.div,{variants:s,children:o.jsxs(pe,{variant:"elevated",className:"h-full",children:[o.jsx("div",{className:"flex items-center gap-1 mb-4",children:[...Array(a.rating)].map((r,l)=>o.jsx("svg",{className:"w-5 h-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},l))}),o.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-6 italic",children:['"',a.content,'"']}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold",children:a.name.split(" ").map(r=>r[0]).join("")}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold text-gray-900 dark:text-white",children:a.name}),o.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[a.role,", ",a.company]})]})]})]})},a.id))})]})})},Xh=()=>{const[t,e]=Ve({triggerOnce:!0,threshold:.1}),[i,n]=w.useState([]),s=[{id:"1",question:"❓ What exactly is StartupGPT?",answer:"StartupGPT is your virtual co-founder — an AI-powered SaaS platform that helps you go from idea to paying customers in as little as one day to one weekend, instead of the usual 6–12 months. With 6 specialized AI agents and a structured 6-phase journey, we automate 80% of the startup grind.",category:"General"},{id:"2",question:"🚀 How long does it take to launch a startup?",answer:`With StartupGPT's 6 AI agents working 24/7, here's the timeline:
      
🧠 Ideation & Validation: 2–4 hours
🧾 Business Planning: 2–4 hours
🛠️ MVP Development: 2–8 hours
🧬 Content Creation: 2–4 hours
📣 Launch & Go-Live: 1–2 hours
📈 Growth & Optimization: Ongoing

Total: Weekend to 30 days. Most founders see their first customer within 7-14 days. Our AI agents work round-the-clock while you sleep, dramatically compressing the traditional 6-12 month timeline.`,category:"Process"},{id:"3",question:"💰 What do I get with each pricing tier?",answer:`🧍 Solopreneur ($497 - 50% OFF, Regular $997)
✅ 1 Startup Launch
🤖 All AI Agents Included (hundreds of specialized agents)
📈 Google Ads Marketing Budget
📲 Social Media Budget (X, Facebook, YouTube, TikTok)
💬 Private Founder Community (Discord)
🔁 All Future Updates Included*
📅 Early Access: September 1, 2025
🧠 $10,000 VC-backed Marketing Budget
💸 25% Revenue Share

👥 Entrepreneur ($1,397 - Save $1,594)
🚀 3 Startup Launches
💰 Save $1,594 vs buying 3 Solopreneur packages
💡 All features from Solopreneur
💸 20% Revenue Share
✨ Priority Support & Weekly Check-ins
🎯 Bonus: Personal AI Agent Training

🧠 Multipreneur ($3,997 - Save $5,973)
🔥 10 Startup Launches
🧠 Includes Custom AI Agent Training
💰 Save $5,973 vs buying 10 Solopreneur packages
💸 15% Revenue Share
🏆 White-Glove Onboarding
🤝 Direct Founder Access

* All future updates are included after we've helped you launch with 50+ paying customers and $500+ in Monthly Recurring Revenue (MRR).`,category:"Pricing"},{id:"4",question:`📦 What's the difference between a "Startup Launch" and a subscription?`,answer:"A Startup Launch includes a full guided journey through all 6 phases, resulting in a real MVP, branding, go-to-market strategy, and your first paying customers — all in record time. You're not subscribing to a static tool. You're starting a real business — with deliverables, marketing assets, and personalized AI execution.",category:"General"},{id:"5",question:"🧠 Do I need to know how to code or have prior business experience?",answer:`Nope. That's the whole point.

StartupGPT was built for:
🔰 First-time founders
🔄 Serial entrepreneurs scaling multiple ideas
🧑‍💼 Corporate professionals launching side hustles
🧓 Small business owners pivoting to digital

You don't need to be a developer, marketer, or finance expert. The agents are your team.`,category:"General"},{id:"6",question:"📆 When do I get access?",answer:"Everyone who purchases during presale will get early access on September 1st, 2025.",category:"Access"},{id:"7",question:"🎯 What does the $10,000 marketing budget include?",answer:`This is part of our VC-backed founder support.

We allocate a $10,000 marketing budget per startup from our partnered investor network — once your startup has:
✅ 100 verified users/customers
✅ Launched your MVP using StartupGPT
✅ Joined our internal founder community

The budget can be used for:
• Paid traffic (e.g., Google Ads, Meta, TikTok)
• Influencer outreach
• Content production
• PR campaigns`,category:"Marketing"},{id:"8",question:"💬 Is there a community or support system?",answer:`Absolutely! You'll gain access to our thriving private Discord community where founders connect, collaborate, and grow together. Our comprehensive support system includes:
• Weekly live AMAs and office hours with successful entrepreneurs
• Peer-to-peer feedback and accountability partnerships
• Regular AI coach check-ins to track your progress
• Early access to beta test cutting-edge AI features
• Direct support channels for technical and strategic questions
• Curated resources and proven playbooks from successful launches`,category:"Support"},{id:"9",question:"🧾 Are there deliverables I can download/share?",answer:`Yes. Each phase generates real, ready-to-use deliverables:
📄 PDFs: Problem statements, pitch decks, brand guides
📊 XLSX: Financial projections, competitor matrices
🧱 Web Assets: Landing pages, content, MVPs`,category:"Deliverables"},{id:"10",question:"💸 What's the refund policy?",answer:`We offer a "First Customer in 30 Days or Money Back" guarantee. If you don't get your first paying customer within 30 days of launching, we'll refund your purchase minus any costs incurred for compute resources and marketing spend (fair use policy). This guarantee applies after our September 1, 2025 launch. During presale, all sales are final but you lock in 50% OFF pricing.`,category:"Payment"},{id:"11",question:"🌟 How does the Referral Program work?",answer:`✨ Share the opportunity. Get rewarded.
For every entrepreneur you refer, both you and your friend receive an additional $2,500 in marketing budget — powered by our VC network (after 100 customers).

🔁 How It Works:
1. Buy any StartupGPT bundle
2. Use your Stripe email to get a unique referral link
3. Share your link with friends or your founder circle
4. After 100 customers, both unlock extra $2,500 per startup

Unlimited referrals. Unlimited growth.`,category:"Referral"},{id:"12",question:"🧠 How Does StartupGPT's Business Model Work?",answer:`StartupGPT isn't just an AI playground — it's a powerful done-for-you startup engine. 

⚙️ Your upfront payment goes directly toward:
🔍 Deep Research (Market, Customer, Competitors)
🤖 AI Agent Operations using GPU-heavy LLMs
💻 Software Prototyping and MVP Development
✍️ High-Converting Marketing Copywriting
🎨 UX Design and Visual Asset Generation
🚀 Product Deployment and Infrastructure Hosting
🔌 Access to variety of external AI API services (free during 6-phase execution)

This is real work, done by specialized AI agents trained for startup success — not just text predictions.`,category:"Business Model"},{id:"13",question:`📊 What's the "Fair Use" Model?`,answer:`Every idea is different. Some need more resources to reach revenue. That's why we use a Fair Use Compute Model.

Your startup may require 25 million tokens to get to market.
Another founder's may only need 20 million.

We don't penalize you — we support what your business actually needs.
No extra charges. No surprise token limits. Just launch.`,category:"Business Model"},{id:"14",question:"🏗️ Do you host and run my startup too?",answer:`You don't just get deliverables — you get a fully managed tech stack.

🌐 We host your application
🎨 We build your UX from:
  • Click on ad or organic search
  • to landing page
  • to product onboarding
  • to checkout
💳 We manage your Stripe integration and payment flow
🛡️ We handle legal compliance for SaaS businesses:
  • GDPR-compliant policies
  • Privacy Notices
  • Terms of Use/Service
  • Cookie Notices
  • Consent management

In short: You focus on the vision — we handle everything else.`,category:"Technical"},{id:"15",question:"💸 How do founder payouts work?",answer:`We built StartupGPT for founder freedom — including how and when you get paid. In your Founder Dashboard, you can select:

🪙 Payout Options:
✅ Split Revenue (Stripe) - Entrepreneur & Multipreneur bundles only
  • Customer pays → Our platform automatically takes revenue share
  • You instantly receive your portion via Stripe

📦 Scheduled Payouts (PayPal or Bank)
Choose between:
  • Weekly payouts
  • Monthly payouts
  • Custom revenue threshold (e.g., $500+)

All payouts are transparent, automated, and tracked in your dashboard. No hidden fees.`,category:"Payment"},{id:"16",question:"❓ What if I don't reach customers within 30 days?",answer:`Not every idea makes it to market — and that's okay. If you don't reach customers within 30 days, you have options:

1. 💰 Add More Marketing Budget: Manually add budget or let our AI agents help decide based on campaign data
2. 🔄 Pivot or Cancel: If the market isn't responding, we'll refund your unused upfront payment (minus consumed compute time and marketing spend)
3. 🚀 Keep Going: Continue enhancing the product with ongoing support

Our AI agents analyze your campaign data and provide data-driven recommendations on whether to invest more, pivot, or try a new idea.`,category:"Support"},{id:"17",question:"📚 What happens after launch?",answer:`After launch, you get access to our extensive StartupGPT Wiki with tutorials and explanations. Unlike other services that might just build an app or run a campaign, we offer an end-to-end experience regardless of your technical or business knowledge.

The Wiki includes:
• Advanced growth strategies
• Technical documentation
• Marketing playbooks
• Scaling guides
• Community best practices

Everyone can bring their idea to market — that's our promise.`,category:"Support"}],a=c=>{n(u=>u.includes(c)?u.filter(d=>d!==c):[...u,c])},r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return o.jsx("section",{className:"py-24 bg-white dark:bg-gray-900",id:"faq",children:o.jsxs("div",{className:"max-width-container section-padding",children:[o.jsxs(N.div,{ref:t,className:"text-center mb-16",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[o.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"📚 Frequently Asked Questions"}),o.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Everything you need to know about launching with StartupGPT"})]}),o.jsx(N.div,{className:"max-w-4xl mx-auto",variants:r,initial:"hidden",animate:e?"visible":"hidden",children:s.map(c=>o.jsx(N.div,{variants:l,className:"mb-4",children:o.jsxs("button",{onClick:()=>a(c.id),className:"w-full text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-6 transition-colors",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white pr-4",children:c.question}),o.jsx("svg",{className:`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${i.includes(c.id)?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),i.includes(c.id)&&o.jsx(N.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.3},className:"mt-4",children:o.jsx("div",{className:"text-gray-600 dark:text-gray-400 whitespace-pre-line",children:c.answer})})]})},c.id))}),o.jsxs(N.div,{className:"mt-16 text-center",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.6},children:[o.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mb-6",children:"Still have questions? We're here to help!"}),o.jsx("div",{className:"flex justify-center",children:o.jsxs("a",{href:"mailto:support@startupgpt.pro",className:"inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700",children:[o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Email Support"]})})]})]})})},Jh=()=>{const[t,e]=Ve({triggerOnce:!0,threshold:.1});Ln();const i=()=>{const n=document.getElementById("pricing");n==null||n.scrollIntoView({behavior:"smooth"})};return o.jsxs("section",{className:"py-24 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden",children:[o.jsx(N.div,{className:"absolute inset-0",animate:{backgroundPosition:["0% 0%","100% 100%"]},transition:{duration:20,repeat:1/0,repeatType:"reverse"},style:{backgroundImage:"radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)"}}),o.jsxs(N.div,{ref:t,className:"relative max-width-container section-padding text-center z-10",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{duration:.5},children:[o.jsx(N.div,{initial:{scale:.9,opacity:0},animate:e?{scale:1,opacity:1}:{},transition:{delay:.1},children:o.jsxs(se,{variant:"default",size:"lg",className:"mb-6 !bg-white/20 !text-white !border-white/30",children:[o.jsx("span",{className:"mr-2",children:"⏰"}),"Final Hours: 50% OFF Ends at Midnight"]})}),o.jsxs(N.h2,{className:"text-responsive-3xl font-display font-bold text-white mb-6",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.2},children:["Stop Dreaming. ",o.jsx("span",{className:"text-white/90",children:"Start Building."})]}),o.jsxs(N.p,{className:"text-responsive-lg text-white/90 mb-8 max-w-2xl mx-auto",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.3},children:["Last chance to join 500+ founders at 50% OFF.",o.jsx("br",{}),"Prices double tomorrow. No exceptions."]}),o.jsxs(N.div,{className:"mb-8",initial:{y:20,opacity:0},animate:e?{y:0,opacity:1}:{},transition:{delay:.4},children:[o.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 justify-center items-center text-white mb-8",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-3xl",children:"🚀"}),o.jsxs("div",{className:"text-left",children:[o.jsx("p",{className:"font-bold",children:"First 100 Customers"}),o.jsx("p",{className:"text-sm opacity-90",children:"Get exclusive bonuses"})]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-3xl",children:"💎"}),o.jsxs("div",{className:"text-left",children:[o.jsx("p",{className:"font-bold",children:"Marketing Budget Included"}),o.jsx("p",{className:"text-sm opacity-90",children:"Google Ads & Social Media"})]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-3xl",children:"👥"}),o.jsxs("div",{className:"text-left",children:[o.jsx("p",{className:"font-bold",children:"Private Community"}),o.jsx("p",{className:"text-sm opacity-90",children:"Network with founders"})]})]})]}),o.jsxs(we,{size:"lg",onClick:i,variant:"default",className:"px-12 text-lg animate-pulse",children:[o.jsx("span",{className:"mr-2",children:"🚀"}),"Claim Your 50% OFF Now →"]}),o.jsx("p",{className:"text-white/60 text-sm mt-4",children:"🔥 27 founders joined in the last 24 hours"})]}),o.jsxs(N.div,{className:"text-white/80 text-sm space-y-2",initial:{opacity:0},animate:e?{opacity:1}:{},transition:{delay:.5},children:[o.jsx("p",{children:"✅ First Customer in 30 Days or Money Back*"}),o.jsx("p",{children:"✅ Instant Access on September 1, 2025"}),o.jsx("p",{children:"✅ Regular Price: $997 (You Save $500)"}),o.jsx("p",{className:"text-white font-bold",children:"⚠️ Only 47 spots left at this price"})]}),o.jsx(N.div,{className:"mt-12 pt-8 border-t border-white/20",initial:{opacity:0},animate:e?{opacity:1}:{},transition:{delay:.6},children:o.jsx("p",{className:"text-white/60 text-sm",children:"🔒 Secure checkout powered by Stripe • Your data is safe with us"})})]})]})},Zh=({isOpen:t,onClose:e,title:i,children:n,scrollToId:s})=>(w.useEffect(()=>{const a=r=>{r.key==="Escape"&&t&&e()};return t&&(document.addEventListener("keydown",a),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",a),document.body.style.overflow="unset"}},[t,e]),w.useEffect(()=>{t&&s&&setTimeout(()=>{const a=document.getElementById(s);a&&a.scrollIntoView({behavior:"smooth",block:"start"})},100)},[t,s]),o.jsx(Vr,{children:t&&o.jsxs(o.Fragment,{children:[o.jsx(N.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 bg-black bg-opacity-50 z-50",onClick:e}),o.jsx(N.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.3},className:"fixed inset-0 z-50 overflow-y-auto",onClick:e,children:o.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:o.jsxs("div",{className:"w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all",onClick:a=>a.stopPropagation(),children:[o.jsx("h3",{className:"text-2xl font-bold leading-6 text-gray-900 dark:text-white mb-4",children:i}),o.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300","aria-label":"Close modal",children:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),o.jsx("div",{className:"mt-4 max-h-[70vh] overflow-y-auto pr-2",children:o.jsx("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:n})})]})})})]})})),ef=()=>{const[t,e]=w.useState(!1),[i,n]=w.useState("privacy"),[s,a]=w.useState(null),r=(u,d)=>{n(u),a(d||null),e(!0)},l=()=>{e(!1),a(null)},c={privacy:{title:"Privacy Policy",content:`
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
        
        <h3>4.1 Presale Pricing (50% OFF - Valid Until September 1, 2025)</h3>
        <p><strong>Limited Time Presale - Save 50% on All Plans:</strong></p>
        <ul>
          <li><strong>Solopreneur</strong>: $497 (Regular: $997) - 1 startup launch</li>
          <li><strong>Entrepreneur</strong>: $1,397 (Regular: $2,991) - 3 startup launches</li>
          <li><strong>Multipreneur</strong>: $3,997 (Regular: $9,970) - 10 startup launches + custom AI training</li>
        </ul>
        <p><em>Presale pricing ends September 1, 2025. Prices will double after presale period.</em></p>
        
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
        <p>The presale runs until September 1, 2025, offering 50% off all regular prices.</p>
        
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
          <li>Prices double after September 1, 2025</li>
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
        <p>Users who purchase during presale (before September 1, 2025) lock in their discounted price for life. This pricing will never increase for presale purchasers.</p>
        
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
        <p><strong>During the pre-sale period (before September 1, 2025), all sales are final and non-refundable.</strong></p>
        <p>By purchasing during the pre-sale, you acknowledge that:</p>
        <ul>
          <li>You are receiving a significant discount (50% off regular price)</li>
          <li>You understand the product is in active development</li>
          <li>No refunds will be issued during the pre-sale period</li>
        </ul>

        <h3>Post-Launch Refund Policy</h3>
        <p><strong>After the official launch (September 1, 2025), we offer a 7-day money-back guarantee.</strong></p>
        
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
      `}};return{isOpen:t,currentPage:i,scrollToSection:s,openLegalPage:r,closeLegalPage:l,legalContent:c}},tf=()=>{const t=new Date().getFullYear(),{isOpen:e,currentPage:i,scrollToSection:n,openLegalPage:s,closeLegalPage:a,legalContent:r}=ef(),l={product:[{name:"Features",href:"#features"},{name:"How It Works",href:"#how-it-works"},{name:"Pricing",href:"#pricing"},{name:"Testimonials",href:"#testimonials"}],company:[{name:"Blog",href:"/blog"},{name:"Contact",href:"mailto:support@startupgpt.pro"},{name:"FAQ",href:"#faq"},{name:"Success Stories",href:"#testimonials"}],legal:[{name:"Privacy Policy",href:"#",type:"privacy"},{name:"Terms of Service",href:"#",type:"terms"},{name:"Refund Policy",href:"#",type:"refund"},{name:"Cookie Policy",href:"#",type:"cookies"}],social:[{name:"Twitter",href:"https://twitter.com/startupgpt",icon:"𝕏"},{name:"LinkedIn",href:"https://linkedin.com/company/startupgpt",icon:"in"},{name:"YouTube",href:"https://youtube.com/@startupgpt",icon:"▶"},{name:"Discord",href:"https://discord.gg/startupgpt",icon:"💬"}]};return o.jsxs("footer",{className:"bg-gray-900 text-gray-300",children:[o.jsxs("div",{className:"max-width-container section-padding py-12",children:[o.jsxs("div",{className:"grid md:grid-cols-5 gap-8 mb-8",children:[o.jsxs("div",{className:"md:col-span-2",children:[o.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"StartupGPT"}),o.jsx("p",{className:"text-gray-400 mb-4",children:"Your AI-powered co-founder. Go from idea to paying customers in 30 days. Join 500+ founders who generated $7.5M+ revenue."}),o.jsx("div",{className:"flex gap-4",children:l.social.map(c=>o.jsx("a",{href:c.href,className:"w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors","aria-label":c.name,children:o.jsx("span",{className:"text-sm",children:c.icon})},c.name))})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold text-white mb-4",children:"Product"}),o.jsx("ul",{className:"space-y-2",children:l.product.map(c=>o.jsx("li",{children:o.jsx("a",{href:c.href,className:"hover:text-white transition-colors",children:c.name})},c.name))})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold text-white mb-4",children:"Company"}),o.jsx("ul",{className:"space-y-2",children:l.company.map(c=>o.jsx("li",{children:o.jsx("a",{href:c.href,className:"hover:text-white transition-colors",children:c.name})},c.name))})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold text-white mb-4",children:"Legal"}),o.jsx("ul",{className:"space-y-2",children:l.legal.map(c=>o.jsx("li",{children:o.jsx("button",{onClick:()=>{c.type==="refund"?s("terms","refund-section"):s(c.type)},className:"hover:text-white transition-colors text-left",children:c.name})},c.name))})]})]}),o.jsx("div",{className:"pt-8 border-t border-gray-800",children:o.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[o.jsxs("p",{className:"text-sm text-gray-400",children:["© ",t," StartupGPT. All rights reserved. Built with love ❤️ by multipreneurs to make your dreams come true"]}),o.jsxs("div",{className:"flex items-center gap-6 text-sm",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),o.jsx("span",{className:"text-gray-400",children:"SSL Secured"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("img",{src:"/images/stripe-badge-white.svg",alt:"Stripe",className:"h-4"}),o.jsx("span",{className:"text-gray-400",children:"Powered by Stripe"})]})]})]})})]}),o.jsx(Zh,{isOpen:e,onClose:a,title:r[i].title,scrollToId:n,children:o.jsx("div",{dangerouslySetInnerHTML:{__html:r[i].content}})})]})},nf=new Ho({defaultOptions:{queries:{staleTime:60*1e3,retry:1}}});function sf(){return w.useEffect(()=>{const t=localStorage.getItem("cookieConsent");t&&JSON.parse(t).analytics},[]),o.jsx(Xo,{children:o.jsx($o,{client:nf,children:o.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200",children:[o.jsx(Zo,{}),o.jsx(Bh,{}),o.jsx(qh,{}),o.jsx(Yh,{}),o.jsx(Hh,{}),o.jsx(Qh,{}),o.jsx(Kh,{}),o.jsx($h,{}),o.jsx(Xh,{}),o.jsx(Jh,{}),o.jsx(tf,{}),o.jsx(Ch,{})]})})})}Ii.createRoot(document.getElementById("root")).render(o.jsx(yo.StrictMode,{children:o.jsx(sf,{})}));
//# sourceMappingURL=index-BMtipNz8.js.map
