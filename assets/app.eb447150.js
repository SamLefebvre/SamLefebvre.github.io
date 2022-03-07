var qo=Object.defineProperty,Fo=Object.defineProperties;var Ho=Object.getOwnPropertyDescriptors;var Ua=Object.getOwnPropertySymbols;var Uo=Object.prototype.hasOwnProperty,Bo=Object.prototype.propertyIsEnumerable;var Ba=(e,t,n)=>t in e?qo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,it=(e,t)=>{for(var n in t||(t={}))Uo.call(t,n)&&Ba(e,n,t[n]);if(Ua)for(var n of Ua(t))Bo.call(t,n)&&Ba(e,n,t[n]);return e},Nn=(e,t)=>Fo(e,Ho(t));const Da={};function na(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Oo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",No=na(Oo);function Ji(e){return!!e||e===""}function jn(e){if(Z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=fe(r)?$o(r):jn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(fe(e))return e;if(Se(e))return e}}const Go=/;(?![^(]*\))/g,zo=/:(.+)/;function $o(e){const t={};return e.split(Go).forEach(n=>{if(n){const r=n.split(zo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function rn(e){let t="";if(fe(e))t=e;else if(Z(e))for(let n=0;n<e.length;n++){const r=rn(e[n]);r&&(t+=r+" ")}else if(Se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bn=e=>fe(e)?e:e==null?"":Z(e)||Se(e)&&(e.toString===es||!te(e.toString))?JSON.stringify(e,Zi,2):String(e),Zi=(e,t)=>t&&t.__v_isRef?Zi(e,t.value):Jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Qi(t)?{[`Set(${t.size})`]:[...t.values()]}:Se(t)&&!Z(t)&&!ts(t)?String(t):t,he={},Yt=[],Ze=()=>{},Vo=()=>!1,Wo=/^on[^a-z]/,Mn=e=>Wo.test(e),ra=e=>e.startsWith("onUpdate:"),Te=Object.assign,aa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ko=Object.prototype.hasOwnProperty,ie=(e,t)=>Ko.call(e,t),Z=Array.isArray,Jt=e=>hr(e)==="[object Map]",Qi=e=>hr(e)==="[object Set]",te=e=>typeof e=="function",fe=e=>typeof e=="string",ia=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",Xi=e=>Se(e)&&te(e.then)&&te(e.catch),es=Object.prototype.toString,hr=e=>es.call(e),Yo=e=>hr(e).slice(8,-1),ts=e=>hr(e)==="[object Object]",sa=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Jo=/-(\w)/g,at=fr(e=>e.replace(Jo,(t,n)=>n?n.toUpperCase():"")),Zo=/\B([A-Z])/g,Bt=fr(e=>e.replace(Zo,"-$1").toLowerCase()),mr=fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=fr(e=>e?`on${mr(e)}`:""),Pn=(e,t)=>!Object.is(e,t),xr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},er=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ns=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oa;const Qo=()=>Oa||(Oa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $e;class Xo{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&$e&&(this.parent=$e,this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active)try{return $e=this,t()}finally{$e=this.parent}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function el(e,t=$e){t&&t.active&&t.effects.push(e)}function tl(){return $e}function nl(e){$e&&$e.cleanups.push(e)}const oa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},rs=e=>(e.w&Ct)>0,as=e=>(e.n&Ct)>0,rl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ct},al=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];rs(a)&&!as(a)?a.delete(e):t[n++]=a,a.w&=~Ct,a.n&=~Ct}t.length=n}},Fr=new WeakMap;let gn=0,Ct=1;const Hr=30;let rt;const Dt=Symbol(""),Ur=Symbol("");class la{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,el(this,r)}run(){if(!this.active)return this.fn();let t=rt,n=_t;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=rt,rt=this,_t=!0,Ct=1<<++gn,gn<=Hr?rl(this):Na(this),this.fn()}finally{gn<=Hr&&al(this),Ct=1<<--gn,rt=this.parent,_t=n,this.parent=void 0}}stop(){this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _t=!0;const is=[];function an(){is.push(_t),_t=!1}function sn(){const e=is.pop();_t=e===void 0?!0:e}function Oe(e,t,n){if(_t&&rt){let r=Fr.get(e);r||Fr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=oa()),ss(a)}}function ss(e,t){let n=!1;gn<=Hr?as(e)||(e.n|=Ct,n=!rs(e)):n=!e.has(rt),n&&(e.add(rt),rt.deps.push(e))}function dt(e,t,n,r,a,i){const s=Fr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&Z(e))s.forEach((l,c)=>{(c==="length"||c>=r)&&o.push(l)});else switch(n!==void 0&&o.push(s.get(n)),t){case"add":Z(e)?sa(n)&&o.push(s.get("length")):(o.push(s.get(Dt)),Jt(e)&&o.push(s.get(Ur)));break;case"delete":Z(e)||(o.push(s.get(Dt)),Jt(e)&&o.push(s.get(Ur)));break;case"set":Jt(e)&&o.push(s.get(Dt));break}if(o.length===1)o[0]&&Br(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Br(oa(l))}}function Br(e,t){for(const n of Z(e)?e:[...e])(n!==rt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const il=na("__proto__,__v_isRef,__isVue"),os=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(ia)),sl=ca(),ol=ca(!1,!0),ll=ca(!0),Ga=cl();function cl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=oe(this);for(let i=0,s=this.length;i<s;i++)Oe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(oe)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){an();const r=oe(this)[t].apply(this,n);return sn(),r}}),e}function ca(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Cl:ps:t?ds:us).get(r))return r;const s=Z(r);if(!e&&s&&ie(Ga,a))return Reflect.get(Ga,a,i);const o=Reflect.get(r,a,i);return(ia(a)?os.has(a):il(a))||(e||Oe(r,"get",a),t)?o:Ee(o)?!s||!sa(a)?o.value:o:Se(o)?e?pa(o):on(o):o}}const ul=ls(),dl=ls(!0);function ls(e=!1){return function(n,r,a,i){let s=n[r];if(En(s)&&Ee(s)&&!Ee(a))return!1;if(!e&&!En(a)&&(hs(a)||(a=oe(a),s=oe(s)),!Z(n)&&Ee(s)&&!Ee(a)))return s.value=a,!0;const o=Z(n)&&sa(r)?Number(r)<n.length:ie(n,r),l=Reflect.set(n,r,a,i);return n===oe(i)&&(o?Pn(a,s)&&dt(n,"set",r,a):dt(n,"add",r,a)),l}}function pl(e,t){const n=ie(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&dt(e,"delete",t,void 0),r}function hl(e,t){const n=Reflect.has(e,t);return(!ia(t)||!os.has(t))&&Oe(e,"has",t),n}function fl(e){return Oe(e,"iterate",Z(e)?"length":Dt),Reflect.ownKeys(e)}const cs={get:sl,set:ul,deleteProperty:pl,has:hl,ownKeys:fl},ml={get:ll,set(e,t){return!0},deleteProperty(e,t){return!0}},gl=Te({},cs,{get:ol,set:dl}),ua=e=>e,gr=e=>Reflect.getPrototypeOf(e);function Gn(e,t,n=!1,r=!1){e=e.__v_raw;const a=oe(e),i=oe(t);t!==i&&!n&&Oe(a,"get",t),!n&&Oe(a,"get",i);const{has:s}=gr(a),o=r?ua:n?fa:Ln;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function zn(e,t=!1){const n=this.__v_raw,r=oe(n),a=oe(e);return e!==a&&!t&&Oe(r,"has",e),!t&&Oe(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function $n(e,t=!1){return e=e.__v_raw,!t&&Oe(oe(e),"iterate",Dt),Reflect.get(e,"size",e)}function za(e){e=oe(e);const t=oe(this);return gr(t).has.call(t,e)||(t.add(e),dt(t,"add",e,e)),this}function $a(e,t){t=oe(t);const n=oe(this),{has:r,get:a}=gr(n);let i=r.call(n,e);i||(e=oe(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Pn(t,s)&&dt(n,"set",e,t):dt(n,"add",e,t),this}function Va(e){const t=oe(this),{has:n,get:r}=gr(t);let a=n.call(t,e);a||(e=oe(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&dt(t,"delete",e,void 0),i}function Wa(){const e=oe(this),t=e.size!==0,n=e.clear();return t&&dt(e,"clear",void 0,void 0),n}function Vn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=oe(s),l=t?ua:e?fa:Ln;return!e&&Oe(o,"iterate",Dt),s.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function Wn(e,t,n){return function(...r){const a=this.__v_raw,i=oe(a),s=Jt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),u=n?ua:t?fa:Ln;return!t&&Oe(i,"iterate",l?Ur:Dt),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:o?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ft(e){return function(...t){return e==="delete"?!1:this}}function vl(){const e={get(i){return Gn(this,i)},get size(){return $n(this)},has:zn,add:za,set:$a,delete:Va,clear:Wa,forEach:Vn(!1,!1)},t={get(i){return Gn(this,i,!1,!0)},get size(){return $n(this)},has:zn,add:za,set:$a,delete:Va,clear:Wa,forEach:Vn(!1,!0)},n={get(i){return Gn(this,i,!0)},get size(){return $n(this,!0)},has(i){return zn.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:Vn(!0,!1)},r={get(i){return Gn(this,i,!0,!0)},get size(){return $n(this,!0)},has(i){return zn.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Wn(i,!1,!1),n[i]=Wn(i,!0,!1),t[i]=Wn(i,!1,!0),r[i]=Wn(i,!0,!0)}),[e,n,t,r]}const[bl,yl,wl,kl]=vl();function da(e,t){const n=t?e?kl:wl:e?yl:bl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(ie(n,a)&&a in r?n:r,a,i)}const _l={get:da(!1,!1)},xl={get:da(!1,!0)},Sl={get:da(!0,!1)},us=new WeakMap,ds=new WeakMap,ps=new WeakMap,Cl=new WeakMap;function Pl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function El(e){return e.__v_skip||!Object.isExtensible(e)?0:Pl(Yo(e))}function on(e){return En(e)?e:ha(e,!1,cs,_l,us)}function Ll(e){return ha(e,!1,gl,xl,ds)}function pa(e){return ha(e,!0,ml,Sl,ps)}function ha(e,t,n,r,a){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=El(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function Zt(e){return En(e)?Zt(e.__v_raw):!!(e&&e.__v_isReactive)}function En(e){return!!(e&&e.__v_isReadonly)}function hs(e){return!!(e&&e.__v_isShallow)}function fs(e){return Zt(e)||En(e)}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function ms(e){return er(e,"__v_skip",!0),e}const Ln=e=>Se(e)?on(e):e,fa=e=>Se(e)?pa(e):e;function gs(e){_t&&rt&&(e=oe(e),ss(e.dep||(e.dep=oa())))}function vs(e,t){e=oe(e),e.dep&&Br(e.dep)}function Ee(e){return!!(e&&e.__v_isRef===!0)}function je(e){return ys(e,!1)}function bs(e){return ys(e,!0)}function ys(e,t){return Ee(e)?e:new Tl(e,t)}class Tl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:oe(t),this._value=n?t:Ln(t)}get value(){return gs(this),this._value}set value(t){t=this.__v_isShallow?t:oe(t),Pn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ln(t),vs(this))}}function qt(e){return Ee(e)?e.value:e}const Rl={get:(e,t,n)=>qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Ee(a)&&!Ee(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ws(e){return Zt(e)?e:new Proxy(e,Rl)}function bf(e){const t=Z(e)?new Array(e.length):{};for(const n in e)t[n]=Il(e,n);return t}class Al{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Il(e,t,n){const r=e[t];return Ee(r)?r:new Al(e,t,n)}class jl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new la(t,()=>{this._dirty||(this._dirty=!0,vs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=oe(this);return gs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ml(e,t,n=!1){let r,a;const i=te(e);return i?(r=e,a=Ze):(r=e.get,a=e.set),new jl(r,a,i||!a,n)}Promise.resolve();function xt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Dn(i,t,n)}return a}function We(e,t,n,r){if(te(e)){const i=xt(e,t,n,r);return i&&Xi(i)&&i.catch(s=>{Dn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(We(e[i],t,n,r));return a}function Dn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){xt(l,null,10,[e,s,o]);return}}Dl(e,n,a,r)}function Dl(e,t,n,r=!0){console.error(e)}let tr=!1,Or=!1;const Ue=[];let ot=0;const wn=[];let vn=null,Vt=0;const kn=[];let bt=null,Wt=0;const ks=Promise.resolve();let ma=null,Nr=null;function ga(e){const t=ma||ks;return e?t.then(this?e.bind(this):e):t}function ql(e){let t=ot+1,n=Ue.length;for(;t<n;){const r=t+n>>>1;Tn(Ue[r])<e?t=r+1:n=r}return t}function va(e){(!Ue.length||!Ue.includes(e,tr&&e.allowRecurse?ot+1:ot))&&e!==Nr&&(e.id==null?Ue.push(e):Ue.splice(ql(e.id),0,e),_s())}function _s(){!tr&&!Or&&(Or=!0,ma=ks.then(Ss))}function Fl(e){const t=Ue.indexOf(e);t>ot&&Ue.splice(t,1)}function xs(e,t,n,r){Z(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),_s()}function Hl(e){xs(e,vn,wn,Vt)}function Ul(e){xs(e,bt,kn,Wt)}function ba(e,t=null){if(wn.length){for(Nr=t,vn=[...new Set(wn)],wn.length=0,Vt=0;Vt<vn.length;Vt++)vn[Vt]();vn=null,Vt=0,Nr=null,ba(e,t)}}function nr(e){if(kn.length){const t=[...new Set(kn)];if(kn.length=0,bt){bt.push(...t);return}for(bt=t,bt.sort((n,r)=>Tn(n)-Tn(r)),Wt=0;Wt<bt.length;Wt++)bt[Wt]();bt=null,Wt=0}}const Tn=e=>e.id==null?1/0:e.id;function Ss(e){Or=!1,tr=!0,ba(e),Ue.sort((n,r)=>Tn(n)-Tn(r));const t=Ze;try{for(ot=0;ot<Ue.length;ot++){const n=Ue[ot];n&&n.active!==!1&&xt(n,null,14)}}finally{ot=0,Ue.length=0,nr(),tr=!1,ma=null,(Ue.length||wn.length||kn.length)&&Ss(e)}}function Bl(e,t,...n){const r=e.vnode.props||he;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:h,trim:p}=r[u]||he;p?a=n.map(w=>w.trim()):h&&(a=n.map(ns))}let o,l=r[o=_r(t)]||r[o=_r(at(t))];!l&&i&&(l=r[o=_r(Bt(t))]),l&&We(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,We(c,e,6,a)}}function Cs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!te(e)){const l=c=>{const u=Cs(c,t,!0);u&&(o=!0,Te(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(r.set(e,null),null):(Z(i)?i.forEach(l=>s[l]=null):Te(s,i),r.set(e,s),s)}function ya(e,t){return!e||!Mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Bt(t))||ie(e,t))}let Be=null,Ps=null;function rr(e){const t=Be;return Be=e,Ps=e&&e.type.__scopeId||null,t}function Jn(e,t=Be,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ii(-1);const i=rr(t),s=e(...a);return rr(i),r._d&&ii(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:p,setupState:w,ctx:f,inheritAttrs:v}=e;let g,b;const _=rr(e);try{if(n.shapeFlag&4){const T=a||r;g=Je(u.call(T,T,h,i,w,p,f)),b=l}else{const T=t;g=Je(T.length>1?T(i,{attrs:l,slots:o,emit:c}):T(i,null)),b=t.props?l:Ol(l)}}catch(T){xn.length=0,Dn(T,e,1),g=ve(Ke)}let P=g;if(b&&v!==!1){const T=Object.keys(b),{shapeFlag:F}=P;T.length&&F&7&&(s&&T.some(ra)&&(b=Nl(b,s)),P=Qt(P,b))}return n.dirs&&(P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),g=P,rr(_),g}const Ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mn(n))&&((t||(t={}))[n]=e[n]);return t},Nl=(e,t)=>{const n={};for(const r in e)(!ra(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Gl(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ka(r,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(s[p]!==r[p]&&!ya(c,p))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ka(r,s,c):!0:!!s;return!1}function Ka(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ya(n,i))return!0}return!1}function zl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const $l=e=>e.__isSuspense;function Es(e,t){t&&t.pendingBranch?Z(e)?t.effects.push(...e):t.effects.push(e):Ul(e)}function St(e,t){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[e]=t}}function Le(e,t,n=!1){const r=Pe||Be;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&te(t)?t.call(r.proxy):t}}const Ya={};function ct(e,t,n){return Ls(e,t,n)}function Ls(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=he){const o=Pe;let l,c=!1,u=!1;if(Ee(e)?(l=()=>e.value,c=hs(e)):Zt(e)?(l=()=>e,r=!0):Z(e)?(u=!0,c=e.some(Zt),l=()=>e.map(b=>{if(Ee(b))return b.value;if(Zt(b))return Mt(b);if(te(b))return xt(b,o,2)})):te(e)?t?l=()=>xt(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),We(e,o,3,[p])}:l=Ze,t&&r){const b=l;l=()=>Mt(b())}let h,p=b=>{h=g.onStop=()=>{xt(b,o,4)}};if(en)return p=Ze,t?n&&We(t,o,3,[l(),u?[]:void 0,p]):l(),Ze;let w=u?[]:Ya;const f=()=>{if(!!g.active)if(t){const b=g.run();(r||c||(u?b.some((_,P)=>Pn(_,w[P])):Pn(b,w)))&&(h&&h(),We(t,o,3,[b,w===Ya?void 0:w,p]),w=b)}else g.run()};f.allowRecurse=!!t;let v;a==="sync"?v=f:a==="post"?v=()=>De(f,o&&o.suspense):v=()=>{!o||o.isMounted?Hl(f):f()};const g=new la(l,v);return t?n?f():w=g.run():a==="post"?De(g.run.bind(g),o&&o.suspense):g.run(),()=>{g.stop(),o&&o.scope&&aa(o.scope.effects,g)}}function Vl(e,t,n){const r=this.proxy,a=fe(e)?e.includes(".")?Ts(r,e):()=>r[e]:e.bind(r,r);let i;te(t)?i=t:(i=t.handler,n=t);const s=Pe;Xt(this);const o=Ls(a,i.bind(r),n);return s?Xt(s):Ut(),o}function Ts(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Mt(e,t){if(!Se(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))Mt(e.value,t);else if(Z(e))for(let n=0;n<e.length;n++)Mt(e[n],t);else if(Qi(e)||Jt(e))e.forEach(n=>{Mt(n,t)});else if(ts(e))for(const n in e)Mt(e[n],t);return e}function Wl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ht(()=>{e.isMounted=!0}),wa(()=>{e.isUnmounting=!0}),e}const Ge=[Function,Array],Kl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge},setup(e,{slots:t}){const n=Js(),r=Wl();let a;return()=>{const i=t.default&&Is(t.default(),!0);if(!i||!i.length)return;const s=oe(e),{mode:o}=s,l=i[0];if(r.isLeaving)return Cr(l);const c=Ja(l);if(!c)return Cr(l);const u=Gr(c,s,r,n);zr(c,u);const h=n.subTree,p=h&&Ja(h);let w=!1;const{getTransitionKey:f}=c.type;if(f){const v=f();a===void 0?a=v:v!==a&&(a=v,w=!0)}if(p&&p.type!==Ke&&(!It(c,p)||w)){const v=Gr(p,s,r,n);if(zr(p,v),o==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update()},Cr(l);o==="in-out"&&c.type!==Ke&&(v.delayLeave=(g,b,_)=>{const P=As(r,p);P[String(p.key)]=p,g._leaveCb=()=>{b(),g._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return l}}},Rs=Kl;function As(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Gr(e,t,n,r){const{appear:a,mode:i,persisted:s=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:w,onLeaveCancelled:f,onBeforeAppear:v,onAppear:g,onAfterAppear:b,onAppearCancelled:_}=t,P=String(e.key),T=As(n,e),F=(C,x)=>{C&&We(C,r,9,x)},H={mode:i,persisted:s,beforeEnter(C){let x=o;if(!n.isMounted)if(a)x=v||o;else return;C._leaveCb&&C._leaveCb(!0);const K=T[P];K&&It(e,K)&&K.el._leaveCb&&K.el._leaveCb(),F(x,[C])},enter(C){let x=l,K=c,z=u;if(!n.isMounted)if(a)x=g||l,K=b||c,z=_||u;else return;let Y=!1;const k=C._enterCb=D=>{Y||(Y=!0,D?F(z,[C]):F(K,[C]),H.delayedLeave&&H.delayedLeave(),C._enterCb=void 0)};x?(x(C,k),x.length<=1&&k()):k()},leave(C,x){const K=String(e.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return x();F(h,[C]);let z=!1;const Y=C._leaveCb=k=>{z||(z=!0,x(),k?F(f,[C]):F(w,[C]),C._leaveCb=void 0,T[K]===e&&delete T[K])};T[K]=e,p?(p(C,Y),p.length<=1&&Y()):Y()},clone(C){return Gr(C,t,n,r)}};return H}function Cr(e){if(qn(e))return e=Qt(e),e.children=null,e}function Ja(e){return qn(e)?e.children?e.children[0]:void 0:e}function zr(e,t){e.shapeFlag&6&&e.component?zr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Is(e,t=!1){let n=[],r=0;for(let a=0;a<e.length;a++){const i=e[a];i.type===Ie?(i.patchFlag&128&&r++,n=n.concat(Is(i.children,t))):(t||i.type!==Ke)&&n.push(i)}if(r>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function et(e){return te(e)?{setup:e,name:e.name}:e}const ar=e=>!!e.type.__asyncLoader;function se(e){te(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:a=200,timeout:i,suspensible:s=!0,onError:o}=e;let l=null,c,u=0;const h=()=>(u++,l=null,p()),p=()=>{let w;return l||(w=l=t().catch(f=>{if(f=f instanceof Error?f:new Error(String(f)),o)return new Promise((v,g)=>{o(f,()=>v(h()),()=>g(f),u+1)});throw f}).then(f=>w!==l&&l?l:(f&&(f.__esModule||f[Symbol.toStringTag]==="Module")&&(f=f.default),c=f,f)))};return et({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return c},setup(){const w=Pe;if(c)return()=>Pr(c,w);const f=_=>{l=null,Dn(_,w,13,!r)};if(s&&w.suspense||en)return p().then(_=>()=>Pr(_,w)).catch(_=>(f(_),()=>r?ve(r,{error:_}):null));const v=je(!1),g=je(),b=je(!!a);return a&&setTimeout(()=>{b.value=!1},a),i!=null&&setTimeout(()=>{if(!v.value&&!g.value){const _=new Error(`Async component timed out after ${i}ms.`);f(_),g.value=_}},i),p().then(()=>{v.value=!0,w.parent&&qn(w.parent.vnode)&&va(w.parent.update)}).catch(_=>{f(_),g.value=_}),()=>{if(v.value&&c)return Pr(c,w);if(g.value&&r)return ve(r,{error:g.value});if(n&&!b.value)return ve(n)}}})}function Pr(e,{vnode:{ref:t,props:n,children:r}}){const a=ve(e,n,r);return a.ref=t,a}const qn=e=>e.type.__isKeepAlive;function Yl(e,t){js(e,"a",t)}function Jl(e,t){js(e,"da",t)}function js(e,t,n=Pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(vr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)qn(a.parent.vnode)&&Zl(r,t,n,a),a=a.parent}}function Zl(e,t,n,r){const a=vr(t,e,r,!0);ka(()=>{aa(r[t],a)},n)}function vr(e,t,n=Pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;an(),Xt(n);const o=We(t,n,e,s);return Ut(),sn(),o});return r?a.unshift(i):a.push(i),i}}const pt=e=>(t,n=Pe)=>(!en||e==="sp")&&vr(e,t,n),Ql=pt("bm"),ht=pt("m"),Xl=pt("bu"),ec=pt("u"),wa=pt("bum"),ka=pt("um"),tc=pt("sp"),nc=pt("rtg"),rc=pt("rtc");function ac(e,t=Pe){vr("ec",e,t)}let $r=!0;function ic(e){const t=Ds(e),n=e.proxy,r=e.ctx;$r=!1,t.beforeCreate&&Za(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:w,updated:f,activated:v,deactivated:g,beforeDestroy:b,beforeUnmount:_,destroyed:P,unmounted:T,render:F,renderTracked:H,renderTriggered:C,errorCaptured:x,serverPrefetch:K,expose:z,inheritAttrs:Y,components:k,directives:D,filters:W}=t;if(c&&sc(c,r,null,e.appContext.config.unwrapInjectedRef),s)for(const ee in s){const re=s[ee];te(re)&&(r[ee]=re.bind(n))}if(a){const ee=a.call(n,n);Se(ee)&&(e.data=on(ee))}if($r=!0,i)for(const ee in i){const re=i[ee],Ce=te(re)?re.bind(n,n):te(re.get)?re.get.bind(n,n):Ze,Re=!te(re)&&te(re.set)?re.set.bind(n):Ze,Fe=ye({get:Ce,set:Re});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:Ne=>Fe.value=Ne})}if(o)for(const ee in o)Ms(o[ee],r,n,ee);if(l){const ee=te(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(re=>{St(re,ee[re])})}u&&Za(u,e,"c");function G(ee,re){Z(re)?re.forEach(Ce=>ee(Ce.bind(n))):re&&ee(re.bind(n))}if(G(Ql,h),G(ht,p),G(Xl,w),G(ec,f),G(Yl,v),G(Jl,g),G(ac,x),G(rc,H),G(nc,C),G(wa,_),G(ka,T),G(tc,K),Z(z))if(z.length){const ee=e.exposed||(e.exposed={});z.forEach(re=>{Object.defineProperty(ee,re,{get:()=>n[re],set:Ce=>n[re]=Ce})})}else e.exposed||(e.exposed={});F&&e.render===Ze&&(e.render=F),Y!=null&&(e.inheritAttrs=Y),k&&(e.components=k),D&&(e.directives=D)}function sc(e,t,n=Ze,r=!1){Z(e)&&(e=Vr(e));for(const a in e){const i=e[a];let s;Se(i)?"default"in i?s=Le(i.from||a,i.default,!0):s=Le(i.from||a):s=Le(i),Ee(s)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[a]=s}}function Za(e,t,n){We(Z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ms(e,t,n,r){const a=r.includes(".")?Ts(n,r):()=>n[r];if(fe(e)){const i=t[e];te(i)&&ct(a,i)}else if(te(e))ct(a,e.bind(n));else if(Se(e))if(Z(e))e.forEach(i=>Ms(i,t,n,r));else{const i=te(e.handler)?e.handler.bind(n):t[e.handler];te(i)&&ct(a,i,e)}}function Ds(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>ir(l,c,s,!0)),ir(l,t,s)),i.set(t,l),l}function ir(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&ir(e,i,n,!0),a&&a.forEach(s=>ir(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=oc[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const oc={data:Qa,props:Tt,emits:Tt,methods:Tt,computed:Tt,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Tt,directives:Tt,watch:cc,provide:Qa,inject:lc};function Qa(e,t){return t?e?function(){return Te(te(e)?e.call(this,this):e,te(t)?t.call(this,this):t)}:t:e}function lc(e,t){return Tt(Vr(e),Vr(t))}function Vr(e){if(Z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Tt(e,t){return e?Te(Te(Object.create(null),e),t):t}function cc(e,t){if(!e)return t;if(!t)return e;const n=Te(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function uc(e,t,n,r=!1){const a={},i={};er(i,br,1),e.propsDefaults=Object.create(null),qs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Ll(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function dc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=oe(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];const w=t[p];if(l)if(ie(i,p))w!==i[p]&&(i[p]=w,c=!0);else{const f=at(p);a[f]=Wr(l,o,f,w,e,!1)}else w!==i[p]&&(i[p]=w,c=!0)}}}else{qs(e,t,a,i)&&(c=!0);let u;for(const h in o)(!t||!ie(t,h)&&((u=Bt(h))===h||!ie(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(a[h]=Wr(l,o,h,void 0,e,!0)):delete a[h]);if(i!==o)for(const h in i)(!t||!ie(t,h)&&!0)&&(delete i[h],c=!0)}c&&dt(e,"set","$attrs")}function qs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(yn(l))continue;const c=t[l];let u;a&&ie(a,u=at(l))?!i||!i.includes(u)?n[u]=c:(o||(o={}))[u]=c:ya(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=oe(n),c=o||he;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Wr(a,l,h,c[h],e,!ie(c,h))}}return s}function Wr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=ie(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&te(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Xt(a),r=c[n]=l.call(null,t),Ut())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}function Fs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!te(e)){const u=h=>{l=!0;const[p,w]=Fs(h,t,!0);Te(s,p),w&&o.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return r.set(e,Yt),Yt;if(Z(i))for(let u=0;u<i.length;u++){const h=at(i[u]);Xa(h)&&(s[h]=he)}else if(i)for(const u in i){const h=at(u);if(Xa(h)){const p=i[u],w=s[h]=Z(p)||te(p)?{type:p}:p;if(w){const f=ni(Boolean,w.type),v=ni(String,w.type);w[0]=f>-1,w[1]=v<0||f<v,(f>-1||ie(w,"default"))&&o.push(h)}}}const c=[s,o];return r.set(e,c),c}function Xa(e){return e[0]!=="$"}function ei(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ti(e,t){return ei(e)===ei(t)}function ni(e,t){return Z(t)?t.findIndex(n=>ti(n,e)):te(t)&&ti(t,e)?0:-1}const Hs=e=>e[0]==="_"||e==="$stable",_a=e=>Z(e)?e.map(Je):[Je(e)],pc=(e,t,n)=>{const r=Jn((...a)=>_a(t(...a)),n);return r._c=!1,r},Us=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Hs(a))continue;const i=e[a];if(te(i))t[a]=pc(a,i,r);else if(i!=null){const s=_a(i);t[a]=()=>s}}},Bs=(e,t)=>{const n=_a(t);e.slots.default=()=>n},hc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=oe(t),er(t,"_",n)):Us(t,e.slots={})}else e.slots={},t&&Bs(e,t);er(e.slots,br,1)},fc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=he;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(Te(a,t),!n&&o===1&&delete a._):(i=!t.$stable,Us(t,a)),s=t}else t&&(Bs(e,t),s={default:1});if(i)for(const o in a)!Hs(o)&&!(o in s)&&delete a[o]};function ri(e,t){const n=Be;if(n===null)return e;const r=n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,l,c=he]=t[i];te(s)&&(s={mounted:s,updated:s}),s.deep&&Mt(o),a.push({dir:s,instance:r,value:o,oldValue:void 0,arg:l,modifiers:c})}return e}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(an(),We(l,n,8,[e.el,o,e,t]),sn())}}function Os(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mc=0;function gc(e,t){return function(r,a=null){a!=null&&!Se(a)&&(a=null);const i=Os(),s=new Set;let o=!1;const l=i.app={_uid:mc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Bc,get config(){return i.config},set config(c){},use(c,...u){return s.has(c)||(c&&te(c.install)?(s.add(c),c.install(l,...u)):te(c)&&(s.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!o){const p=ve(r,a);return p.appContext=i,u&&t?t(p,c):e(p,c,h),o=!0,l._container=c,c.__vue_app__=l,Sa(p.component)||p.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function sr(e,t,n,r,a=!1){if(Z(e)){e.forEach((p,w)=>sr(p,t&&(Z(t)?t[w]:t),n,r,a));return}if(ar(r)&&!a)return;const i=r.shapeFlag&4?Sa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,u=o.refs===he?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(fe(c)?(u[c]=null,ie(h,c)&&(h[c]=null)):Ee(c)&&(c.value=null)),te(l))xt(l,o,12,[s,u]);else{const p=fe(l),w=Ee(l);if(p||w){const f=()=>{if(e.f){const v=p?u[l]:l.value;a?Z(v)&&aa(v,i):Z(v)?v.includes(i)||v.push(i):p?u[l]=[i]:(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=s,ie(h,l)&&(h[l]=s)):Ee(l)&&(l.value=s,e.k&&(u[e.k]=s))};s?(f.id=-1,De(f,n)):f()}}}let mt=!1;const Kn=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Er=e=>e.nodeType===8;function vc(e){const{mt:t,p:n,o:{patchProp:r,nextSibling:a,parentNode:i,remove:s,insert:o,createComment:l}}=e,c=(g,b)=>{if(!b.hasChildNodes()){n(null,g,b),nr();return}mt=!1,u(b.firstChild,g,null,null,null),nr(),mt&&console.error("Hydration completed but contains mismatches.")},u=(g,b,_,P,T,F=!1)=>{const H=Er(g)&&g.data==="[",C=()=>f(g,b,_,P,T,H),{type:x,ref:K,shapeFlag:z}=b,Y=g.nodeType;b.el=g;let k=null;switch(x){case Rn:Y!==3?k=C():(g.data!==b.children&&(mt=!0,g.data=b.children),k=a(g));break;case Ke:Y!==8||H?k=C():k=a(g);break;case _n:if(Y!==1)k=C();else{k=g;const D=!b.children.length;for(let W=0;W<b.staticCount;W++)D&&(b.children+=k.outerHTML),W===b.staticCount-1&&(b.anchor=k),k=a(k);return k}break;case Ie:H?k=w(g,b,_,P,T,F):k=C();break;default:if(z&1)Y!==1||b.type.toLowerCase()!==g.tagName.toLowerCase()?k=C():k=h(g,b,_,P,T,F);else if(z&6){b.slotScopeIds=T;const D=i(g);if(t(b,D,null,_,P,Kn(D),F),k=H?v(g):a(g),ar(b)){let W;H?(W=ve(Ie),W.anchor=k?k.previousSibling:D.lastChild):W=g.nodeType===3?Fn(""):ve("div"),W.el=g,b.component.subTree=W}}else z&64?Y!==8?k=C():k=b.type.hydrate(g,b,_,P,T,F,e,p):z&128&&(k=b.type.hydrate(g,b,_,P,Kn(i(g)),T,F,e,u))}return K!=null&&sr(K,null,P,b),k},h=(g,b,_,P,T,F)=>{F=F||!!b.dynamicChildren;const{type:H,props:C,patchFlag:x,shapeFlag:K,dirs:z}=b,Y=H==="input"&&z||H==="option";if(Y||x!==-1){if(z&&nt(b,null,_,"created"),C)if(Y||!F||x&48)for(const D in C)(Y&&D.endsWith("value")||Mn(D)&&!yn(D))&&r(g,D,null,C[D],!1,void 0,_);else C.onClick&&r(g,"onClick",null,C.onClick,!1,void 0,_);let k;if((k=C&&C.onVnodeBeforeMount)&&ze(k,_,b),z&&nt(b,null,_,"beforeMount"),((k=C&&C.onVnodeMounted)||z)&&Es(()=>{k&&ze(k,_,b),z&&nt(b,null,_,"mounted")},P),K&16&&!(C&&(C.innerHTML||C.textContent))){let D=p(g.firstChild,b,g,_,P,T,F);for(;D;){mt=!0;const W=D;D=D.nextSibling,s(W)}}else K&8&&g.textContent!==b.children&&(mt=!0,g.textContent=b.children)}return g.nextSibling},p=(g,b,_,P,T,F,H)=>{H=H||!!b.dynamicChildren;const C=b.children,x=C.length;for(let K=0;K<x;K++){const z=H?C[K]:C[K]=Je(C[K]);if(g)g=u(g,z,P,T,F,H);else{if(z.type===Rn&&!z.children)continue;mt=!0,n(null,z,_,null,P,T,Kn(_),F)}}return g},w=(g,b,_,P,T,F)=>{const{slotScopeIds:H}=b;H&&(T=T?T.concat(H):H);const C=i(g),x=p(a(g),b,C,_,P,T,F);return x&&Er(x)&&x.data==="]"?a(b.anchor=x):(mt=!0,o(b.anchor=l("]"),C,x),x)},f=(g,b,_,P,T,F)=>{if(mt=!0,b.el=null,F){const x=v(g);for(;;){const K=a(g);if(K&&K!==x)s(K);else break}}const H=a(g),C=i(g);return s(g),n(null,b,C,H,_,P,Kn(C),T),H},v=g=>{let b=0;for(;g;)if(g=a(g),g&&Er(g)&&(g.data==="["&&b++,g.data==="]")){if(b===0)return a(g);b--}return g};return[c,u]}const De=Es;function bc(e){return yc(e,vc)}function yc(e,t){const n=Qo();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:w=Ze,cloneNode:f,insertStaticContent:v}=e,g=(d,m,y,L=null,E=null,A=null,q=!1,I=null,M=!!m.dynamicChildren)=>{if(d===m)return;d&&!It(d,m)&&(L=B(d),Me(d,E,A,!0),d=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:R,ref:$,shapeFlag:O}=m;switch(R){case Rn:b(d,m,y,L);break;case Ke:_(d,m,y,L);break;case _n:d==null&&P(m,y,L,q);break;case Ie:D(d,m,y,L,E,A,q,I,M);break;default:O&1?H(d,m,y,L,E,A,q,I,M):O&6?W(d,m,y,L,E,A,q,I,M):(O&64||O&128)&&R.process(d,m,y,L,E,A,q,I,M,ue)}$!=null&&E&&sr($,d&&d.ref,A,m||d,!m)},b=(d,m,y,L)=>{if(d==null)r(m.el=o(m.children),y,L);else{const E=m.el=d.el;m.children!==d.children&&c(E,m.children)}},_=(d,m,y,L)=>{d==null?r(m.el=l(m.children||""),y,L):m.el=d.el},P=(d,m,y,L)=>{[d.el,d.anchor]=v(d.children,m,y,L,d.el,d.anchor)},T=({el:d,anchor:m},y,L)=>{let E;for(;d&&d!==m;)E=p(d),r(d,y,L),d=E;r(m,y,L)},F=({el:d,anchor:m})=>{let y;for(;d&&d!==m;)y=p(d),a(d),d=y;a(m)},H=(d,m,y,L,E,A,q,I,M)=>{q=q||m.type==="svg",d==null?C(m,y,L,E,A,q,I,M):z(d,m,E,A,q,I,M)},C=(d,m,y,L,E,A,q,I)=>{let M,R;const{type:$,props:O,shapeFlag:V,transition:Q,patchFlag:ae,dirs:ge}=d;if(d.el&&f!==void 0&&ae===-1)M=d.el=f(d.el);else{if(M=d.el=s(d.type,A,O&&O.is,O),V&8?u(M,d.children):V&16&&K(d.children,M,null,L,E,A&&$!=="foreignObject",q,I),ge&&nt(d,null,L,"created"),O){for(const me in O)me!=="value"&&!yn(me)&&i(M,me,null,O[me],A,d.children,L,E,j);"value"in O&&i(M,"value",null,O.value),(R=O.onVnodeBeforeMount)&&ze(R,L,d)}x(M,d,d.scopeId,q,L)}ge&&nt(d,null,L,"beforeMount");const de=(!E||E&&!E.pendingBranch)&&Q&&!Q.persisted;de&&Q.beforeEnter(M),r(M,m,y),((R=O&&O.onVnodeMounted)||de||ge)&&De(()=>{R&&ze(R,L,d),de&&Q.enter(M),ge&&nt(d,null,L,"mounted")},E)},x=(d,m,y,L,E)=>{if(y&&w(d,y),L)for(let A=0;A<L.length;A++)w(d,L[A]);if(E){let A=E.subTree;if(m===A){const q=E.vnode;x(d,q,q.scopeId,q.slotScopeIds,E.parent)}}},K=(d,m,y,L,E,A,q,I,M=0)=>{for(let R=M;R<d.length;R++){const $=d[R]=I?yt(d[R]):Je(d[R]);g(null,$,m,y,L,E,A,q,I)}},z=(d,m,y,L,E,A,q)=>{const I=m.el=d.el;let{patchFlag:M,dynamicChildren:R,dirs:$}=m;M|=d.patchFlag&16;const O=d.props||he,V=m.props||he;let Q;y&&Pt(y,!1),(Q=V.onVnodeBeforeUpdate)&&ze(Q,y,m,d),$&&nt(m,d,y,"beforeUpdate"),y&&Pt(y,!0);const ae=E&&m.type!=="foreignObject";if(R?Y(d.dynamicChildren,R,I,y,L,ae,A):q||Ce(d,m,I,null,y,L,ae,A,!1),M>0){if(M&16)k(I,m,O,V,y,L,E);else if(M&2&&O.class!==V.class&&i(I,"class",null,V.class,E),M&4&&i(I,"style",O.style,V.style,E),M&8){const ge=m.dynamicProps;for(let de=0;de<ge.length;de++){const me=ge[de],Ye=O[me],Ot=V[me];(Ot!==Ye||me==="value")&&i(I,me,Ye,Ot,E,d.children,y,L,j)}}M&1&&d.children!==m.children&&u(I,m.children)}else!q&&R==null&&k(I,m,O,V,y,L,E);((Q=V.onVnodeUpdated)||$)&&De(()=>{Q&&ze(Q,y,m,d),$&&nt(m,d,y,"updated")},L)},Y=(d,m,y,L,E,A,q)=>{for(let I=0;I<m.length;I++){const M=d[I],R=m[I],$=M.el&&(M.type===Ie||!It(M,R)||M.shapeFlag&70)?h(M.el):y;g(M,R,$,null,L,E,A,q,!0)}},k=(d,m,y,L,E,A,q)=>{if(y!==L){for(const I in L){if(yn(I))continue;const M=L[I],R=y[I];M!==R&&I!=="value"&&i(d,I,R,M,q,m.children,E,A,j)}if(y!==he)for(const I in y)!yn(I)&&!(I in L)&&i(d,I,y[I],null,q,m.children,E,A,j);"value"in L&&i(d,"value",y.value,L.value)}},D=(d,m,y,L,E,A,q,I,M)=>{const R=m.el=d?d.el:o(""),$=m.anchor=d?d.anchor:o("");let{patchFlag:O,dynamicChildren:V,slotScopeIds:Q}=m;Q&&(I=I?I.concat(Q):Q),d==null?(r(R,y,L),r($,y,L),K(m.children,y,$,E,A,q,I,M)):O>0&&O&64&&V&&d.dynamicChildren?(Y(d.dynamicChildren,V,y,E,A,q,I),(m.key!=null||E&&m===E.subTree)&&Ns(d,m,!0)):Ce(d,m,y,$,E,A,q,I,M)},W=(d,m,y,L,E,A,q,I,M)=>{m.slotScopeIds=I,d==null?m.shapeFlag&512?E.ctx.activate(m,y,L,q,M):le(m,y,L,E,A,q,M):G(d,m,M)},le=(d,m,y,L,E,A,q)=>{const I=d.component=jc(d,L,E);if(qn(d)&&(I.ctx.renderer=ue),Mc(I),I.asyncDep){if(E&&E.registerDep(I,ee),!d.el){const M=I.subTree=ve(Ke);_(null,M,m,y)}return}ee(I,d,m,y,E,A,q)},G=(d,m,y)=>{const L=m.component=d.component;if(Gl(d,m,y))if(L.asyncDep&&!L.asyncResolved){re(L,m,y);return}else L.next=m,Fl(L.update),L.update();else m.component=d.component,m.el=d.el,L.vnode=m},ee=(d,m,y,L,E,A,q)=>{const I=()=>{if(d.isMounted){let{next:$,bu:O,u:V,parent:Q,vnode:ae}=d,ge=$,de;Pt(d,!1),$?($.el=ae.el,re(d,$,q)):$=ae,O&&xr(O),(de=$.props&&$.props.onVnodeBeforeUpdate)&&ze(de,Q,$,ae),Pt(d,!0);const me=Sr(d),Ye=d.subTree;d.subTree=me,g(Ye,me,h(Ye.el),B(Ye),d,E,A),$.el=me.el,ge===null&&zl(d,me.el),V&&De(V,E),(de=$.props&&$.props.onVnodeUpdated)&&De(()=>ze(de,Q,$,ae),E)}else{let $;const{el:O,props:V}=m,{bm:Q,m:ae,parent:ge}=d,de=ar(m);if(Pt(d,!1),Q&&xr(Q),!de&&($=V&&V.onVnodeBeforeMount)&&ze($,ge,m),Pt(d,!0),O&&X){const me=()=>{d.subTree=Sr(d),X(O,d.subTree,d,E,null)};de?m.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=Sr(d);g(null,me,y,L,d,E,A),m.el=me.el}if(ae&&De(ae,E),!de&&($=V&&V.onVnodeMounted)){const me=m;De(()=>ze($,ge,me),E)}m.shapeFlag&256&&d.a&&De(d.a,E),d.isMounted=!0,m=y=L=null}},M=d.effect=new la(I,()=>va(d.update),d.scope),R=d.update=M.run.bind(M);R.id=d.uid,Pt(d,!0),R()},re=(d,m,y)=>{m.component=d;const L=d.vnode.props;d.vnode=m,d.next=null,dc(d,m.props,L,y),fc(d,m.children,y),an(),ba(void 0,d.update),sn()},Ce=(d,m,y,L,E,A,q,I,M=!1)=>{const R=d&&d.children,$=d?d.shapeFlag:0,O=m.children,{patchFlag:V,shapeFlag:Q}=m;if(V>0){if(V&128){Fe(R,O,y,L,E,A,q,I,M);return}else if(V&256){Re(R,O,y,L,E,A,q,I,M);return}}Q&8?($&16&&j(R,E,A),O!==R&&u(y,O)):$&16?Q&16?Fe(R,O,y,L,E,A,q,I,M):j(R,E,A,!0):($&8&&u(y,""),Q&16&&K(O,y,L,E,A,q,I,M))},Re=(d,m,y,L,E,A,q,I,M)=>{d=d||Yt,m=m||Yt;const R=d.length,$=m.length,O=Math.min(R,$);let V;for(V=0;V<O;V++){const Q=m[V]=M?yt(m[V]):Je(m[V]);g(d[V],Q,y,null,E,A,q,I,M)}R>$?j(d,E,A,!0,!1,O):K(m,y,L,E,A,q,I,M,O)},Fe=(d,m,y,L,E,A,q,I,M)=>{let R=0;const $=m.length;let O=d.length-1,V=$-1;for(;R<=O&&R<=V;){const Q=d[R],ae=m[R]=M?yt(m[R]):Je(m[R]);if(It(Q,ae))g(Q,ae,y,null,E,A,q,I,M);else break;R++}for(;R<=O&&R<=V;){const Q=d[O],ae=m[V]=M?yt(m[V]):Je(m[V]);if(It(Q,ae))g(Q,ae,y,null,E,A,q,I,M);else break;O--,V--}if(R>O){if(R<=V){const Q=V+1,ae=Q<$?m[Q].el:L;for(;R<=V;)g(null,m[R]=M?yt(m[R]):Je(m[R]),y,ae,E,A,q,I,M),R++}}else if(R>V)for(;R<=O;)Me(d[R],E,A,!0),R++;else{const Q=R,ae=R,ge=new Map;for(R=ae;R<=V;R++){const He=m[R]=M?yt(m[R]):Je(m[R]);He.key!=null&&ge.set(He.key,R)}let de,me=0;const Ye=V-ae+1;let Ot=!1,qa=0;const dn=new Array(Ye);for(R=0;R<Ye;R++)dn[R]=0;for(R=Q;R<=O;R++){const He=d[R];if(me>=Ye){Me(He,E,A,!0);continue}let tt;if(He.key!=null)tt=ge.get(He.key);else for(de=ae;de<=V;de++)if(dn[de-ae]===0&&It(He,m[de])){tt=de;break}tt===void 0?Me(He,E,A,!0):(dn[tt-ae]=R+1,tt>=qa?qa=tt:Ot=!0,g(He,m[tt],y,null,E,A,q,I,M),me++)}const Fa=Ot?wc(dn):Yt;for(de=Fa.length-1,R=Ye-1;R>=0;R--){const He=ae+R,tt=m[He],Ha=He+1<$?m[He+1].el:L;dn[R]===0?g(null,tt,y,Ha,E,A,q,I,M):Ot&&(de<0||R!==Fa[de]?Ne(tt,y,Ha,2):de--)}}},Ne=(d,m,y,L,E=null)=>{const{el:A,type:q,transition:I,children:M,shapeFlag:R}=d;if(R&6){Ne(d.component.subTree,m,y,L);return}if(R&128){d.suspense.move(m,y,L);return}if(R&64){q.move(d,m,y,ue);return}if(q===Ie){r(A,m,y);for(let O=0;O<M.length;O++)Ne(M[O],m,y,L);r(d.anchor,m,y);return}if(q===_n){T(d,m,y);return}if(L!==2&&R&1&&I)if(L===0)I.beforeEnter(A),r(A,m,y),De(()=>I.enter(A),E);else{const{leave:O,delayLeave:V,afterLeave:Q}=I,ae=()=>r(A,m,y),ge=()=>{O(A,()=>{ae(),Q&&Q()})};V?V(A,ae,ge):ge()}else r(A,m,y)},Me=(d,m,y,L=!1,E=!1)=>{const{type:A,props:q,ref:I,children:M,dynamicChildren:R,shapeFlag:$,patchFlag:O,dirs:V}=d;if(I!=null&&sr(I,null,y,d,!0),$&256){m.ctx.deactivate(d);return}const Q=$&1&&V,ae=!ar(d);let ge;if(ae&&(ge=q&&q.onVnodeBeforeUnmount)&&ze(ge,m,d),$&6)U(d.component,y,L);else{if($&128){d.suspense.unmount(y,L);return}Q&&nt(d,null,m,"beforeUnmount"),$&64?d.type.remove(d,m,y,E,ue,L):R&&(A!==Ie||O>0&&O&64)?j(R,m,y,!1,!0):(A===Ie&&O&384||!E&&$&16)&&j(M,m,y),L&&un(d)}(ae&&(ge=q&&q.onVnodeUnmounted)||Q)&&De(()=>{ge&&ze(ge,m,d),Q&&nt(d,null,m,"unmounted")},y)},un=d=>{const{type:m,el:y,anchor:L,transition:E}=d;if(m===Ie){S(y,L);return}if(m===_n){F(d);return}const A=()=>{a(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:q,delayLeave:I}=E,M=()=>q(y,A);I?I(d.el,A,M):M()}else A()},S=(d,m)=>{let y;for(;d!==m;)y=p(d),a(d),d=y;a(m)},U=(d,m,y)=>{const{bum:L,scope:E,update:A,subTree:q,um:I}=d;L&&xr(L),E.stop(),A&&(A.active=!1,Me(q,d,m,y)),I&&De(I,m),De(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},j=(d,m,y,L=!1,E=!1,A=0)=>{for(let q=A;q<d.length;q++)Me(d[q],m,y,L,E)},B=d=>d.shapeFlag&6?B(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),ce=(d,m,y)=>{d==null?m._vnode&&Me(m._vnode,null,null,!0):g(m._vnode||null,d,m,null,null,null,y),nr(),m._vnode=d},ue={p:g,um:Me,m:Ne,r:un,mt:le,mc:K,pc:Ce,pbc:Y,n:B,o:e};let ne,X;return t&&([ne,X]=t(ue)),{render:ce,hydrate:ne,createApp:gc(ce,ne)}}function Pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ns(e,t,n=!1){const r=e.children,a=t.children;if(Z(r)&&Z(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=yt(a[i]),o.el=s.el),n||Ns(s,o))}}function wc(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const kc=e=>e.__isTeleport,Gs="components";function zs(e,t){return xc(Gs,e,!0,t)||e}const _c=Symbol();function xc(e,t,n=!0,r=!1){const a=Be||Pe;if(a){const i=a.type;if(e===Gs){const o=Hc(i);if(o&&(o===t||o===at(t)||o===mr(at(t))))return i}const s=ai(a[e]||i[e],t)||ai(a.appContext[e],t);return!s&&r?i:s}}function ai(e,t){return e&&(e[t]||e[at(t)]||e[mr(at(t))])}const Ie=Symbol(void 0),Rn=Symbol(void 0),Ke=Symbol(void 0),_n=Symbol(void 0),xn=[];let Ft=null;function ut(e=!1){xn.push(Ft=e?null:[])}function Sc(){xn.pop(),Ft=xn[xn.length-1]||null}let or=1;function ii(e){or+=e}function $s(e){return e.dynamicChildren=or>0?Ft||Yt:null,Sc(),or>0&&Ft&&Ft.push(e),e}function Ht(e,t,n,r,a,i){return $s(Ve(e,t,n,r,a,i,!0))}function Vs(e,t,n,r,a){return $s(ve(e,t,n,r,a,!0))}function lr(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const br="__vInternal",Ws=({key:e})=>e!=null?e:null,Zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?fe(e)||Ee(e)||te(e)?{i:Be,r:e,k:t,f:!!n}:e:null;function Ve(e,t=null,n=null,r=0,a=null,i=e===Ie?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ws(t),ref:t&&Zn(t),scopeId:Ps,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return o?(xa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),or>0&&!s&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const ve=Cc;function Cc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===_c)&&(e=Ke),lr(e)){const o=Qt(e,t,!0);return n&&xa(o,n),o}if(Uc(e)&&(e=e.__vccOpts),t){t=Pc(t);let{class:o,style:l}=t;o&&!fe(o)&&(t.class=rn(o)),Se(l)&&(fs(l)&&!Z(l)&&(l=Te({},l)),t.style=jn(l))}const s=fe(e)?1:$l(e)?128:kc(e)?64:Se(e)?4:te(e)?2:0;return Ve(e,t,n,r,a,s,i,!0)}function Pc(e){return e?fs(e)||br in e?Te({},e):e:null}function Qt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?Lc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Ws(o),ref:t&&t.ref?n&&a?Z(a)?a.concat(Zn(t)):[a,Zn(t)]:Zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),el:e.el,anchor:e.anchor}}function Fn(e=" ",t=0){return ve(Rn,null,e,t)}function Ec(e,t){const n=ve(_n,null,e);return n.staticCount=t,n}function yf(e="",t=!1){return t?(ut(),Vs(Ke,null,e)):ve(Ke,null,e)}function Je(e){return e==null||typeof e=="boolean"?ve(Ke):Z(e)?ve(Ie,null,e.slice()):typeof e=="object"?yt(e):ve(Rn,null,String(e))}function yt(e){return e.el===null||e.memo?e:Qt(e)}function xa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),xa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(br in t)?t._ctx=Be:a===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else te(t)?(t={default:t,_ctx:Be},n=32):(t=String(t),r&64?(n=16,t=[Fn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Lc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=rn([t.class,r.class]));else if(a==="style")t.style=jn([t.style,r.style]);else if(Mn(a)){const i=t[a],s=r[a];s&&i!==s&&!(Z(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function ze(e,t,n,r=null){We(e,t,7,[n,r])}function Tc(e,t,n,r){let a;const i=n&&n[r];if(Z(e)||fe(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(Se(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}function Ks(e,t,n={},r,a){if(Be.isCE)return ve("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),ut();const s=i&&Ys(i(n)),o=Vs(Ie,{key:n.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!a&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),i&&i._c&&(i._d=!0),o}function Ys(e){return e.some(t=>lr(t)?!(t.type===Ke||t.type===Ie&&!Ys(t.children)):!0)?e:null}const Kr=e=>e?Zs(e)?Sa(e)||e.proxy:Kr(e.parent):null,cr=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>Ds(e),$forceUpdate:e=>()=>va(e.update),$nextTick:e=>ga.bind(e.proxy),$watch:e=>Vl.bind(e)}),Rc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const w=s[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==he&&ie(r,t))return s[t]=1,r[t];if(a!==he&&ie(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&ie(c,t))return s[t]=3,i[t];if(n!==he&&ie(n,t))return s[t]=4,n[t];$r&&(s[t]=0)}}const u=cr[t];let h,p;if(u)return t==="$attrs"&&Oe(e,"get",t),u(e);if((h=o.__cssModules)&&(h=h[t]))return h;if(n!==he&&ie(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,ie(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==he&&ie(a,t)?(a[t]=n,!0):r!==he&&ie(r,t)?(r[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==he&&ie(e,s)||t!==he&&ie(t,s)||(o=i[0])&&ie(o,s)||ie(r,s)||ie(cr,s)||ie(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Ac=Os();let Ic=0;function jc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ac,i={uid:Ic++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fs(r,a),emitsOptions:Cs(r,a),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Bl.bind(null,i),e.ce&&e.ce(i),i}let Pe=null;const Js=()=>Pe||Be,Xt=e=>{Pe=e,e.scope.on()},Ut=()=>{Pe&&Pe.scope.off(),Pe=null};function Zs(e){return e.vnode.shapeFlag&4}let en=!1;function Mc(e,t=!1){en=t;const{props:n,children:r}=e.vnode,a=Zs(e);uc(e,n,a,t),hc(e,r);const i=a?Dc(e,t):void 0;return en=!1,i}function Dc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ms(new Proxy(e.ctx,Rc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Fc(e):null;Xt(e),an();const i=xt(r,e,0,[e.props,a]);if(sn(),Ut(),Xi(i)){if(i.then(Ut,Ut),t)return i.then(s=>{si(e,s,t)}).catch(s=>{Dn(s,e,0)});e.asyncDep=i}else si(e,i,t)}else Qs(e,t)}function si(e,t,n){te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=ws(t)),Qs(e,n)}let oi;function Qs(e,t,n){const r=e.type;if(!e.render){if(!t&&oi&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=Te(Te({isCustomElement:i,delimiters:o},s),l);r.render=oi(a,c)}}e.render=r.render||Ze}Xt(e),an(),ic(e),sn(),Ut()}function qc(e){return new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}})}function Fc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=qc(e))},slots:e.slots,emit:e.emit,expose:t}}function Sa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ws(ms(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in cr)return cr[n](e)}}))}function Hc(e){return te(e)&&e.displayName||e.name}function Uc(e){return te(e)&&"__vccOpts"in e}const ye=(e,t)=>Ml(e,t,en);function we(e,t,n){const r=arguments.length;return r===2?Se(t)&&!Z(t)?lr(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&lr(n)&&(n=[n]),ve(e,t,n))}const Bc="3.2.31",Oc="http://www.w3.org/2000/svg",jt=typeof document!="undefined"?document:null,li=jt&&jt.createElement("template"),Nc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?jt.createElementNS(Oc,e):jt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>jt.createTextNode(e),createComment:e=>jt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{li.innerHTML=r?`<svg>${e}</svg>`:e;const o=li.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function zc(e,t,n){const r=e.style,a=fe(n);if(n&&!a){for(const i in n)Yr(r,i,n[i]);if(t&&!fe(t))for(const i in t)n[i]==null&&Yr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ci=/\s*!important$/;function Yr(e,t,n){if(Z(n))n.forEach(r=>Yr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=$c(e,t);ci.test(n)?e.setProperty(Bt(r),n.replace(ci,""),"important"):e[r]=n}}const ui=["Webkit","Moz","ms"],Lr={};function $c(e,t){const n=Lr[t];if(n)return n;let r=at(t);if(r!=="filter"&&r in e)return Lr[t]=r;r=mr(r);for(let a=0;a<ui.length;a++){const i=ui[a]+r;if(i in e)return Lr[t]=i}return t}const di="http://www.w3.org/1999/xlink";function Vc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(di,t.slice(6,t.length)):e.setAttributeNS(di,t,n);else{const i=No(t);n==null||i&&!Ji(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Wc(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const o=n==null?"":n;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const o=typeof e[t];if(o==="boolean"){e[t]=Ji(n);return}else if(n==null&&o==="string"){e[t]="",e.removeAttribute(t);return}else if(o==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let ur=Date.now,Xs=!1;if(typeof window!="undefined"){ur()>document.createEvent("Event").timeStamp&&(ur=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Xs=!!(e&&Number(e[1])<=53)}let Jr=0;const Kc=Promise.resolve(),Yc=()=>{Jr=0},Jc=()=>Jr||(Kc.then(Yc),Jr=ur());function Zc(e,t,n,r){e.addEventListener(t,n,r)}function Qc(e,t,n,r){e.removeEventListener(t,n,r)}function Xc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=eu(t);if(r){const c=i[t]=tu(r,a);Zc(e,o,c,l)}else s&&(Qc(e,o,s,l),i[t]=void 0)}}const pi=/(?:Once|Passive|Capture)$/;function eu(e){let t;if(pi.test(e)){t={};let n;for(;n=e.match(pi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Bt(e.slice(2)),t]}function tu(e,t){const n=r=>{const a=r.timeStamp||ur();(Xs||a>=n.attached-1)&&We(nu(r,n.value),t,5,[r])};return n.value=e,n.attached=Jc(),n}function nu(e,t){if(Z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const hi=/^on[a-z]/,ru=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?Gc(e,r,a):t==="style"?zc(e,n,r):Mn(t)?ra(t)||Xc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):au(e,t,r,a))?Wc(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Vc(e,t,r,a))};function au(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&hi.test(t)&&te(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||hi.test(t)&&fe(n)?!1:t in e}const gt="transition",pn="animation",Ca=(e,{slots:t})=>we(Rs,iu(e),t);Ca.displayName="Transition";const eo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ca.props=Te({},Rs.props,eo);const Et=(e,t=[])=>{Z(e)?e.forEach(n=>n(...t)):e&&e(...t)},fi=e=>e?Z(e)?e.some(t=>t.length>1):e.length>1:!1;function iu(e){const t={};for(const k in e)k in eo||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=s,appearToClass:u=o,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,f=su(a),v=f&&f[0],g=f&&f[1],{onBeforeEnter:b,onEnter:_,onEnterCancelled:P,onLeave:T,onLeaveCancelled:F,onBeforeAppear:H=b,onAppear:C=_,onAppearCancelled:x=P}=t,K=(k,D,W)=>{Nt(k,D?u:o),Nt(k,D?c:s),W&&W()},z=(k,D)=>{Nt(k,w),Nt(k,p),D&&D()},Y=k=>(D,W)=>{const le=k?C:_,G=()=>K(D,k,W);Et(le,[D,G]),mi(()=>{Nt(D,k?l:i),vt(D,k?u:o),fi(le)||gi(D,r,v,G)})};return Te(t,{onBeforeEnter(k){Et(b,[k]),vt(k,i),vt(k,s)},onBeforeAppear(k){Et(H,[k]),vt(k,l),vt(k,c)},onEnter:Y(!1),onAppear:Y(!0),onLeave(k,D){const W=()=>z(k,D);vt(k,h),cu(),vt(k,p),mi(()=>{Nt(k,h),vt(k,w),fi(T)||gi(k,r,g,W)}),Et(T,[k,W])},onEnterCancelled(k){K(k,!1),Et(P,[k])},onAppearCancelled(k){K(k,!0),Et(x,[k])},onLeaveCancelled(k){z(k),Et(F,[k])}})}function su(e){if(e==null)return null;if(Se(e))return[Tr(e.enter),Tr(e.leave)];{const t=Tr(e);return[t,t]}}function Tr(e){return ns(e)}function vt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Nt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function mi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ou=0;function gi(e,t,n,r){const a=e._endId=++ou,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:o,propCount:l}=lu(e,t);if(!s)return r();const c=s+"end";let u=0;const h=()=>{e.removeEventListener(c,p),i()},p=w=>{w.target===e&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),e.addEventListener(c,p)}function lu(e,t){const n=window.getComputedStyle(e),r=f=>(n[f]||"").split(", "),a=r(gt+"Delay"),i=r(gt+"Duration"),s=vi(a,i),o=r(pn+"Delay"),l=r(pn+"Duration"),c=vi(o,l);let u=null,h=0,p=0;t===gt?s>0&&(u=gt,h=s,p=i.length):t===pn?c>0&&(u=pn,h=c,p=l.length):(h=Math.max(s,c),u=h>0?s>c?gt:pn:null,p=u?u===gt?i.length:l.length:0);const w=u===gt&&/\b(transform|all)(,|$)/.test(n[gt+"Property"]);return{type:u,timeout:h,propCount:p,hasTransform:w}}function vi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>bi(n)+bi(e[r])))}function bi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function cu(){return document.body.offsetHeight}const uu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wf=(e,t)=>n=>{if(!("key"in n))return;const r=Bt(n.key);if(t.some(a=>a===r||uu[a]===r))return e(n)},yi={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):hn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),hn(e,!0),r.enter(e)):r.leave(e,()=>{hn(e,!1)}):hn(e,t))},beforeUnmount(e,{value:t}){hn(e,t)}};function hn(e,t){e.style.display=t?e._vod:"none"}const du=Te({patchProp:ru},Nc);let Rr,wi=!1;function pu(){return Rr=wi?Rr:bc(du),wi=!0,Rr}const hu=(...e)=>{const t=pu().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=fu(r);if(a)return n(a,!0,a instanceof SVGElement)},t};function fu(e){return fe(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const to=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ln=e=>to?Symbol(e):"_vr_"+e,mu=ln("rvlm"),ki=ln("rvd"),yr=ln("r"),Pa=ln("rl"),Zr=ln("rvl"),Kt=typeof window!="undefined";function gu(e){return e.__esModule||to&&e[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Ar(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const Sn=()=>{},vu=/\/$/,bu=e=>e.replace(vu,"");function Ir(e,t,n="/"){let r,a={},i="",s="";const o=t.indexOf("?"),l=t.indexOf("#",o>-1?o:0);return o>-1&&(r=t.slice(0,o),i=t.slice(o+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),s=t.slice(l,t.length)),r=_u(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:a,hash:s}}function yu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _i(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function wu(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&tn(t.matched[r],n.matched[a])&&no(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function no(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ku(e[n],t[n]))return!1;return!0}function ku(e,t){return Array.isArray(e)?xi(e,t):Array.isArray(t)?xi(t,e):e===t}function xi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function _u(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,s;for(i=0;i<r.length;i++)if(s=r[i],!(a===1||s==="."))if(s==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var Cn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Cn||(Cn={}));function xu(e){if(!e)if(Kt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),bu(e)}const Su=/^[^#]+#/;function Cu(e,t){return e.replace(Su,"#")+t}function Pu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const wr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Eu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Pu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Si(e,t){return(history.state?history.state.position-t:-1)+e}const Qr=new Map;function Lu(e,t){Qr.set(e,t)}function Tu(e){const t=Qr.get(e);return Qr.delete(e),t}let Ru=()=>location.protocol+"//"+location.host;function ro(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let o=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(o);return l[0]!=="/"&&(l="/"+l),_i(l,"")}return _i(n,e)+r+a}function Au(e,t,n,r){let a=[],i=[],s=null;const o=({state:p})=>{const w=ro(e,location),f=n.value,v=t.value;let g=0;if(p){if(n.value=w,t.value=p,s&&s===f){s=null;return}g=v?p.position-v.position:0}else r(w);a.forEach(b=>{b(n.value,f,{delta:g,type:An.pop,direction:g?g>0?Cn.forward:Cn.back:Cn.unknown})})};function l(){s=n.value}function c(p){a.push(p);const w=()=>{const f=a.indexOf(p);f>-1&&a.splice(f,1)};return i.push(w),w}function u(){const{history:p}=window;!p.state||p.replaceState(pe({},p.state,{scroll:wr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Ci(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?wr():null}}function Iu(e){const{history:t,location:n}=window,r={value:ro(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:Ru()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),a.value=c}catch(w){console.error(w),n[u?"replace":"assign"](p)}}function s(l,c){const u=pe({},t.state,Ci(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,u,!0),r.value=l}function o(l,c){const u=pe({},a.value,t.state,{forward:l,scroll:wr()});i(u.current,u,!0);const h=pe({},Ci(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:a,push:o,replace:s}}function ju(e){e=xu(e);const t=Iu(e),n=Au(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const a=pe({location:"",base:e,go:r,createHref:Cu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Mu(e){return typeof e=="string"||e&&typeof e=="object"}function ao(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},io=ln("nf");var Pi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Pi||(Pi={}));function nn(e,t){return pe(new Error,{type:e,[io]:!0},t)}function Lt(e,t){return e instanceof Error&&io in e&&(t==null||!!(e.type&t))}const Ei="[^/]+?",Du={sensitive:!1,strict:!1,start:!0,end:!0},qu=/[.+*?^${}()[\]/\\]/g;function Fu(e,t){const n=pe({},Du,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let h=0;h<c.length;h++){const p=c[h];let w=40+(n.sensitive?.25:0);if(p.type===0)h||(a+="/"),a+=p.value.replace(qu,"\\$&"),w+=40;else if(p.type===1){const{value:f,repeatable:v,optional:g,regexp:b}=p;i.push({name:f,repeatable:v,optional:g});const _=b||Ei;if(_!==Ei){w+=10;try{new RegExp(`(${_})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${f}" (${_}): `+T.message)}}let P=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(P=g&&c.length<2?`(?:/${P})`:"/"+P),g&&(P+="?"),a+=P,w+=20,g&&(w+=-8),v&&(w+=-20),_===".*"&&(w+=-50)}u.push(w)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const s=new RegExp(a,n.sensitive?"":"i");function o(c){const u=c.match(s),h={};if(!u)return null;for(let p=1;p<u.length;p++){const w=u[p]||"",f=i[p-1];h[f.name]=w&&f.repeatable?w.split("/"):w}return h}function l(c){let u="",h=!1;for(const p of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const w of p)if(w.type===0)u+=w.value;else if(w.type===1){const{value:f,repeatable:v,optional:g}=w,b=f in c?c[f]:"";if(Array.isArray(b)&&!v)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(b)?b.join("/"):b;if(!_)if(g)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${f}"`);u+=_}}return u}return{re:s,score:r,keys:i,parse:o,stringify:l}}function Hu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Uu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Hu(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Bu={type:0,value:""},Ou=/[a-zA-Z0-9_]/;function Nu(e){if(!e)return[[]];if(e==="/")return[[Bu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${n})/"${c}": ${w}`)}let n=0,r=n;const a=[];let i;function s(){i&&a.push(i),i=[]}let o=0,l,c="",u="";function h(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),s()):l===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Ou.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),s(),a}function Gu(e,t,n){const r=Fu(Nu(e.path),n),a=pe(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function zu(e,t){const n=[],r=new Map;t=Ti({strict:!1,end:!0,sensitive:!1},t);function a(u){return r.get(u)}function i(u,h,p){const w=!p,f=Vu(u);f.aliasOf=p&&p.record;const v=Ti(t,u),g=[f];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of P)g.push(pe({},f,{components:p?p.record.components:f.components,path:T,aliasOf:p?p.record:f}))}let b,_;for(const P of g){const{path:T}=P;if(h&&T[0]!=="/"){const F=h.record.path,H=F[F.length-1]==="/"?"":"/";P.path=h.record.path+(T&&H+T)}if(b=Gu(P,h,v),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),w&&u.name&&!Li(b)&&s(u.name)),"children"in f){const F=f.children;for(let H=0;H<F.length;H++)i(F[H],b,p&&p.children[H])}p=p||b,l(b)}return _?()=>{s(_)}:Sn}function s(u){if(ao(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(s),h.alias.forEach(s))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function o(){return n}function l(u){let h=0;for(;h<n.length&&Uu(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!Li(u)&&r.set(u.record.name,u)}function c(u,h){let p,w={},f,v;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw nn(1,{location:u});v=p.record.name,w=pe($u(h.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),u.params),f=p.stringify(w)}else if("path"in u)f=u.path,p=n.find(_=>_.re.test(f)),p&&(w=p.parse(f),v=p.record.name);else{if(p=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!p)throw nn(1,{location:u,currentLocation:h});v=p.record.name,w=pe({},h.params,u.params),f=p.stringify(w)}const g=[];let b=p;for(;b;)g.unshift(b.record),b=b.parent;return{name:v,path:f,params:w,matched:g,meta:Ku(g)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:s,getRoutes:o,getRecordMatcher:a}}function $u(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Vu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Wu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Wu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Li(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ku(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function Ti(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const so=/#/g,Yu=/&/g,Ju=/\//g,Zu=/=/g,Qu=/\?/g,oo=/\+/g,Xu=/%5B/g,ed=/%5D/g,lo=/%5E/g,td=/%60/g,co=/%7B/g,nd=/%7C/g,uo=/%7D/g,rd=/%20/g;function Ea(e){return encodeURI(""+e).replace(nd,"|").replace(Xu,"[").replace(ed,"]")}function ad(e){return Ea(e).replace(co,"{").replace(uo,"}").replace(lo,"^")}function Xr(e){return Ea(e).replace(oo,"%2B").replace(rd,"+").replace(so,"%23").replace(Yu,"%26").replace(td,"`").replace(co,"{").replace(uo,"}").replace(lo,"^")}function id(e){return Xr(e).replace(Zu,"%3D")}function sd(e){return Ea(e).replace(so,"%23").replace(Qu,"%3F")}function od(e){return e==null?"":sd(e).replace(Ju,"%2F")}function dr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ld(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(oo," "),s=i.indexOf("="),o=dr(s<0?i:i.slice(0,s)),l=s<0?null:dr(i.slice(s+1));if(o in t){let c=t[o];Array.isArray(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function Ri(e){let t="";for(let n in e){const r=e[n];if(n=id(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Xr(i)):[r&&Xr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function cd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function fn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function wt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((s,o)=>{const l=h=>{h===!1?o(nn(4,{from:n,to:t})):h instanceof Error?o(h):Mu(h)?o(nn(2,{from:t,to:h})):(i&&r.enterCallbacks[a]===i&&typeof h=="function"&&i.push(h),s())},c=e.call(r&&r.instances[a],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(h=>o(h))})}function jr(e,t,n,r){const a=[];for(const i of e)for(const s in i.components){let o=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(ud(o)){const c=(o.__vccOpts||o)[t];c&&a.push(wt(c,n,r,i,s))}else{let l=o();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const u=gu(c)?c.default:c;i.components[s]=u;const p=(u.__vccOpts||u)[t];return p&&wt(p,n,r,i,s)()}))}}return a}function ud(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ai(e){const t=Le(yr),n=Le(Pa),r=ye(()=>t.resolve(qt(e.to))),a=ye(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(tn.bind(null,u));if(p>-1)return p;const w=Ii(l[c-2]);return c>1&&Ii(u)===w&&h[h.length-1].path!==w?h.findIndex(tn.bind(null,l[c-2])):p}),i=ye(()=>a.value>-1&&fd(n.params,r.value.params)),s=ye(()=>a.value>-1&&a.value===n.matched.length-1&&no(n.params,r.value.params));function o(l={}){return hd(l)?t[qt(e.replace)?"replace":"push"](qt(e.to)).catch(Sn):Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:i,isExactActive:s,navigate:o}}const dd=et({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ai,setup(e,{slots:t}){const n=on(Ai(e)),{options:r}=Le(yr),a=ye(()=>({[ji(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ji(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:we("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),pd=dd;function hd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function fd(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,s)=>i!==a[s]))return!1}return!0}function Ii(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ji=(e,t,n)=>e!=null?e:t!=null?t:n,md=et({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Le(Zr),a=ye(()=>e.route||r.value),i=Le(ki,0),s=ye(()=>a.value.matched[i]);St(ki,i+1),St(mu,s),St(Zr,a);const o=je();return ct(()=>[o.value,s.value,e.name],([l,c,u],[h,p,w])=>{c&&(c.instances[u]=l,p&&p!==c&&l&&l===h&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),l&&c&&(!p||!tn(c,p)||!h)&&(c.enterCallbacks[u]||[]).forEach(f=>f(l))},{flush:"post"}),()=>{const l=a.value,c=s.value,u=c&&c.components[e.name],h=e.name;if(!u)return Mi(n.default,{Component:u,route:l});const p=c.props[e.name],w=p?p===!0?l.params:typeof p=="function"?p(l):p:null,v=we(u,pe({},w,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(c.instances[h]=null)},ref:o}));return Mi(n.default,{Component:v,route:l})||v}}});function Mi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const po=md;function gd(e){const t=zu(e.routes,e),n=e.parseQuery||ld,r=e.stringifyQuery||Ri,a=e.history,i=fn(),s=fn(),o=fn(),l=bs(st);let c=st;Kt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ar.bind(null,S=>""+S),h=Ar.bind(null,od),p=Ar.bind(null,dr);function w(S,U){let j,B;return ao(S)?(j=t.getRecordMatcher(S),B=U):B=S,t.addRoute(B,j)}function f(S){const U=t.getRecordMatcher(S);U&&t.removeRoute(U)}function v(){return t.getRoutes().map(S=>S.record)}function g(S){return!!t.getRecordMatcher(S)}function b(S,U){if(U=pe({},U||l.value),typeof S=="string"){const X=Ir(n,S,U.path),d=t.resolve({path:X.path},U),m=a.createHref(X.fullPath);return pe(X,d,{params:p(d.params),hash:dr(X.hash),redirectedFrom:void 0,href:m})}let j;if("path"in S)j=pe({},S,{path:Ir(n,S.path,U.path).path});else{const X=pe({},S.params);for(const d in X)X[d]==null&&delete X[d];j=pe({},S,{params:h(S.params)}),U.params=h(U.params)}const B=t.resolve(j,U),ce=S.hash||"";B.params=u(p(B.params));const ue=yu(r,pe({},S,{hash:ad(ce),path:B.path})),ne=a.createHref(ue);return pe({fullPath:ue,hash:ce,query:r===Ri?cd(S.query):S.query||{}},B,{redirectedFrom:void 0,href:ne})}function _(S){return typeof S=="string"?Ir(n,S,l.value.path):pe({},S)}function P(S,U){if(c!==S)return nn(8,{from:U,to:S})}function T(S){return C(S)}function F(S){return T(pe(_(S),{replace:!0}))}function H(S){const U=S.matched[S.matched.length-1];if(U&&U.redirect){const{redirect:j}=U;let B=typeof j=="function"?j(S):j;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=_(B):{path:B},B.params={}),pe({query:S.query,hash:S.hash,params:S.params},B)}}function C(S,U){const j=c=b(S),B=l.value,ce=S.state,ue=S.force,ne=S.replace===!0,X=H(j);if(X)return C(pe(_(X),{state:ce,force:ue,replace:ne}),U||j);const d=j;d.redirectedFrom=U;let m;return!ue&&wu(r,B,j)&&(m=nn(16,{to:d,from:B}),Re(B,B,!0,!1)),(m?Promise.resolve(m):K(d,B)).catch(y=>Lt(y)?y:ee(y,d,B)).then(y=>{if(y){if(Lt(y,2))return C(pe(_(y.to),{state:ce,force:ue,replace:ne}),U||d)}else y=Y(d,B,!0,ne,ce);return z(d,B,y),y})}function x(S,U){const j=P(S,U);return j?Promise.reject(j):Promise.resolve()}function K(S,U){let j;const[B,ce,ue]=vd(S,U);j=jr(B.reverse(),"beforeRouteLeave",S,U);for(const X of B)X.leaveGuards.forEach(d=>{j.push(wt(d,S,U))});const ne=x.bind(null,S,U);return j.push(ne),Gt(j).then(()=>{j=[];for(const X of i.list())j.push(wt(X,S,U));return j.push(ne),Gt(j)}).then(()=>{j=jr(ce,"beforeRouteUpdate",S,U);for(const X of ce)X.updateGuards.forEach(d=>{j.push(wt(d,S,U))});return j.push(ne),Gt(j)}).then(()=>{j=[];for(const X of S.matched)if(X.beforeEnter&&!U.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const d of X.beforeEnter)j.push(wt(d,S,U));else j.push(wt(X.beforeEnter,S,U));return j.push(ne),Gt(j)}).then(()=>(S.matched.forEach(X=>X.enterCallbacks={}),j=jr(ue,"beforeRouteEnter",S,U),j.push(ne),Gt(j))).then(()=>{j=[];for(const X of s.list())j.push(wt(X,S,U));return j.push(ne),Gt(j)}).catch(X=>Lt(X,8)?X:Promise.reject(X))}function z(S,U,j){for(const B of o.list())B(S,U,j)}function Y(S,U,j,B,ce){const ue=P(S,U);if(ue)return ue;const ne=U===st,X=Kt?history.state:{};j&&(B||ne?a.replace(S.fullPath,pe({scroll:ne&&X&&X.scroll},ce)):a.push(S.fullPath,ce)),l.value=S,Re(S,U,j,ne),Ce()}let k;function D(){k=a.listen((S,U,j)=>{const B=b(S),ce=H(B);if(ce){C(pe(ce,{replace:!0}),B).catch(Sn);return}c=B;const ue=l.value;Kt&&Lu(Si(ue.fullPath,j.delta),wr()),K(B,ue).catch(ne=>Lt(ne,12)?ne:Lt(ne,2)?(C(ne.to,B).then(X=>{Lt(X,20)&&!j.delta&&j.type===An.pop&&a.go(-1,!1)}).catch(Sn),Promise.reject()):(j.delta&&a.go(-j.delta,!1),ee(ne,B,ue))).then(ne=>{ne=ne||Y(B,ue,!1),ne&&(j.delta?a.go(-j.delta,!1):j.type===An.pop&&Lt(ne,20)&&a.go(-1,!1)),z(B,ue,ne)}).catch(Sn)})}let W=fn(),le=fn(),G;function ee(S,U,j){Ce(S);const B=le.list();return B.length?B.forEach(ce=>ce(S,U,j)):console.error(S),Promise.reject(S)}function re(){return G&&l.value!==st?Promise.resolve():new Promise((S,U)=>{W.add([S,U])})}function Ce(S){G||(G=!0,D(),W.list().forEach(([U,j])=>S?j(S):U()),W.reset())}function Re(S,U,j,B){const{scrollBehavior:ce}=e;if(!Kt||!ce)return Promise.resolve();const ue=!j&&Tu(Si(S.fullPath,0))||(B||!j)&&history.state&&history.state.scroll||null;return ga().then(()=>ce(S,U,ue)).then(ne=>ne&&Eu(ne)).catch(ne=>ee(ne,S,U))}const Fe=S=>a.go(S);let Ne;const Me=new Set;return{currentRoute:l,addRoute:w,removeRoute:f,hasRoute:g,getRoutes:v,resolve:b,options:e,push:T,replace:F,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:s.add,afterEach:o.add,onError:le.add,isReady:re,install(S){const U=this;S.component("RouterLink",pd),S.component("RouterView",po),S.config.globalProperties.$router=U,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),Kt&&!Ne&&l.value===st&&(Ne=!0,T(a.location).catch(ce=>{}));const j={};for(const ce in st)j[ce]=ye(()=>l.value[ce]);S.provide(yr,U),S.provide(Pa,on(j)),S.provide(Zr,l);const B=S.unmount;Me.add(S),S.unmount=function(){Me.delete(S),Me.size<1&&(c=st,k&&k(),l.value=st,Ne=!1,G=!1),B()}}}}function Gt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function vd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const o=t.matched[s];o&&(e.matched.find(c=>tn(c,o))?r.push(o):n.push(o));const l=e.matched[s];l&&(t.matched.find(c=>tn(c,l))||a.push(l))}return[n,r,a]}function La(){return Le(yr)}function Ta(){return Le(Pa)}const bd=et({setup(e,t){const n=je(!1);return ht(()=>{n.value=!0}),()=>{var r,a;return n.value?(a=(r=t.slots).default)===null||a===void 0?void 0:a.call(r):null}}}),yd="modulepreload",Di={},wd="/",N=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${wd}${r}`,r in Di)return;Di[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":yd,a||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),a)return new Promise((o,l)=>{s.addEventListener("load",o),s.addEventListener("error",l)})})).then(()=>t())},ho={"v-6d34f632":se(()=>N(()=>import("./contact.html.f100d5fe.js"),[])),"v-450624d4":se(()=>N(()=>import("./interest.html.fc6e09be.js"),[])),"v-8daa1a0e":se(()=>N(()=>import("./index.html.99d5df29.js"),[])),"v-70fab1c5":se(()=>N(()=>import("./research.html.94ef46b5.js"),[])),"v-79e3c216":se(()=>N(()=>import("./markdownDemo.html.da2a5c87.js"),[])),"v-770aa52f":se(()=>N(()=>import("./radarChart.html.f2a74408.js"),[])),"v-e52c881c":se(()=>N(()=>import("./index.html.92e85ce8.js"),[])),"v-2a825517":se(()=>N(()=>import("./article.html.bfe6301e.js"),[])),"v-29650369":se(()=>N(()=>import("./article2.html.2af50511.js"),[])),"v-2b19dc08":se(()=>N(()=>import("./article3.html.390535d9.js"),[])),"v-145ac574":se(()=>N(()=>import("./index.html.f95170ee.js"),[])),"v-6c3ccbfc":se(()=>N(()=>import("./interest.html.080433f0.js"),[])),"v-446a1644":se(()=>N(()=>import("./portfolio.html.104c9b1f.js"),["assets/portfolio.html.104c9b1f.js","assets/gti745_fritzing_diagram.0ae89521.js"])),"v-2d0a870d":se(()=>N(()=>import("./index.html.19de9af6.js"),[])),"v-2557a30a":se(()=>N(()=>import("./blender.html.5e13586e.js"),[])),"v-2e4c18c0":se(()=>N(()=>import("./index.html.baff968b.js"),[])),"v-52103624":se(()=>N(()=>import("./unity.html.2d330271.js"),["assets/unity.html.2d330271.js","assets/gti745_fritzing_diagram.0ae89521.js"])),"v-7271bda5":se(()=>N(()=>import("./web.html.df5770c9.js"),[])),"v-76a3c89d":se(()=>N(()=>import("./labyrintheBlender.html.51ed5755.js"),[])),"v-6dc367c8":se(()=>N(()=>import("./index.html.6488d66e.js"),[])),"v-13671bfa":se(()=>N(()=>import("./template.html.f0722546.js"),[])),"v-4b85d886":se(()=>N(()=>import("./fracturationBlenderUnity.html.23902d0f.js"),[])),"v-73293c0a":se(()=>N(()=>import("./interfaceUnity.html.97ced025.js"),[])),"v-0efe29b3":se(()=>N(()=>import("./index.html.d28c0c61.js"),[])),"v-491093e4":se(()=>N(()=>import("./teachableMachine.html.d11b7696.js"),[])),"v-23ada1cc":se(()=>N(()=>import("./template.html.67866a98.js"),[])),"v-506407f4":se(()=>N(()=>import("./index.html.5dbdea4e.js"),[])),"v-439c2d52":se(()=>N(()=>import("./secure-access-with-ssh-keys.html.93a10a61.js"),[])),"v-3706649a":se(()=>N(()=>import("./404.html.a9cfaabd.js"),[]))},kd={"v-6d34f632":()=>N(()=>import("./contact.html.62aebd0e.js"),[]).then(({data:e})=>e),"v-450624d4":()=>N(()=>import("./interest.html.5d62e42a.js"),[]).then(({data:e})=>e),"v-8daa1a0e":()=>N(()=>import("./index.html.4a16e2e0.js"),[]).then(({data:e})=>e),"v-70fab1c5":()=>N(()=>import("./research.html.410bd27f.js"),[]).then(({data:e})=>e),"v-79e3c216":()=>N(()=>import("./markdownDemo.html.cf113ad0.js"),[]).then(({data:e})=>e),"v-770aa52f":()=>N(()=>import("./radarChart.html.1e68da39.js"),[]).then(({data:e})=>e),"v-e52c881c":()=>N(()=>import("./index.html.5277f7a9.js"),[]).then(({data:e})=>e),"v-2a825517":()=>N(()=>import("./article.html.212c39f8.js"),[]).then(({data:e})=>e),"v-29650369":()=>N(()=>import("./article2.html.bc87651f.js"),[]).then(({data:e})=>e),"v-2b19dc08":()=>N(()=>import("./article3.html.04856e6f.js"),[]).then(({data:e})=>e),"v-145ac574":()=>N(()=>import("./index.html.44ad2163.js"),[]).then(({data:e})=>e),"v-6c3ccbfc":()=>N(()=>import("./interest.html.3d491427.js"),[]).then(({data:e})=>e),"v-446a1644":()=>N(()=>import("./portfolio.html.bd496783.js"),[]).then(({data:e})=>e),"v-2d0a870d":()=>N(()=>import("./index.html.8047dbf5.js"),[]).then(({data:e})=>e),"v-2557a30a":()=>N(()=>import("./blender.html.418520fc.js"),[]).then(({data:e})=>e),"v-2e4c18c0":()=>N(()=>import("./index.html.9e0a917d.js"),[]).then(({data:e})=>e),"v-52103624":()=>N(()=>import("./unity.html.db1760d7.js"),[]).then(({data:e})=>e),"v-7271bda5":()=>N(()=>import("./web.html.a0b4af3a.js"),[]).then(({data:e})=>e),"v-76a3c89d":()=>N(()=>import("./labyrintheBlender.html.5e831d11.js"),[]).then(({data:e})=>e),"v-6dc367c8":()=>N(()=>import("./index.html.48f2a1c5.js"),[]).then(({data:e})=>e),"v-13671bfa":()=>N(()=>import("./template.html.a949cfd3.js"),[]).then(({data:e})=>e),"v-4b85d886":()=>N(()=>import("./fracturationBlenderUnity.html.fe95b1cf.js"),[]).then(({data:e})=>e),"v-73293c0a":()=>N(()=>import("./interfaceUnity.html.1268adfc.js"),[]).then(({data:e})=>e),"v-0efe29b3":()=>N(()=>import("./index.html.a508466b.js"),[]).then(({data:e})=>e),"v-491093e4":()=>N(()=>import("./teachableMachine.html.87090a15.js"),[]).then(({data:e})=>e),"v-23ada1cc":()=>N(()=>import("./template.html.a8232b97.js"),[]).then(({data:e})=>e),"v-506407f4":()=>N(()=>import("./index.html.650435d3.js"),[]).then(({data:e})=>e),"v-439c2d52":()=>N(()=>import("./secure-access-with-ssh-keys.html.1af4ebf0.js"),[]).then(({data:e})=>e),"v-3706649a":()=>N(()=>import("./404.html.bc4083c2.js"),[]).then(({data:e})=>e)},Ra=je(kd),_d=()=>Ra,fo=pa({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),lt=je(fo),Hn=()=>lt;Da.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=e=>{Ra.value[e.key]=()=>Promise.resolve(e),e.key===lt.value.key&&(lt.value=e)});const mo=Symbol(""),xd=()=>{const e=Le(mo);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},go=Symbol(""),Sd=()=>{const e=Le(go);if(!e)throw new Error("usePageHead() is called without provider.");return e},Cd=Symbol(""),vo=Symbol(""),Pd=()=>{const e=Le(vo);if(!e)throw new Error("usePageLang() is called without provider.");return e},Aa=Symbol(""),Ed=()=>{const e=Le(Aa);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Ld={base:"/",lang:"en-US",title:"",description:"",head:[["script",{src:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/js/all.min.js"}],["link",{rel:"icon",href:"/logo.png"}],["link",{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}]],locales:{"/":{lang:"fr-CA",title:"Samu\xEBl Lefebvre",description:"Curriculum vit\xE6, projets et autre !"},"/en/":{lang:"en-US",title:"Samu\xEBl Lefebvre",description:"Curriculum vit\xE6, projets and more !"}}},kt=je(Ld),Td=()=>kt;Da.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=e=>{kt.value=e});const bo=Symbol(""),kf=()=>{const e=Le(bo);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},Rd=Symbol(""),Ia=e=>{let t;e.pageKey?t=e.pageKey:t=Hn().value.key;const n=ho[t];return n?we(n):we("div","404 Not Found")};Ia.displayName="Content";Ia.props={pageKey:{type:String,required:!1}};const Ad={"404":se(()=>N(()=>import("./404.a933e89b.js"),[])),Layout:se(()=>N(()=>import("./Layout.a007f7f1.js"),[]))},Id=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),jd=e=>{const t=new Set,n=[];return e.forEach(r=>{const a=Id(r);t.has(a)||(t.add(a),n.push(r))}),n},Md=e=>/^(https?:)?\/\//.test(e),_f=e=>/^mailto:/.test(e),xf=e=>/^tel:/.test(e),yo=e=>Object.prototype.toString.call(e)==="[object Object]",Dd=e=>e.replace(/\/$/,""),qd=e=>e.replace(/^\//,""),wo=(e,t)=>{const n=Object.keys(e).sort((r,a)=>{const i=a.split("/").length-r.split("/").length;return i!==0?i:a.length-r.length});for(const r of n)if(t.startsWith(r))return r;return"/"},qi=et({name:"Vuepress",setup(){const e=Hn(),t=ye(()=>{let n;if(e.value.path){const r=e.value.frontmatter.layout;fe(r)?n=r:n="Layout"}else n="404";return Ad[n]||zs(n,!1)});return()=>we(t.value)}}),Un=e=>e,ja=e=>e,Fd=e=>Md(e)?e:`${Td().value.base}${qd(e)}`,Rt=on({resolvePageData:async e=>{const t=Ra.value[e],n=await(t==null?void 0:t());return n!=null?n:fo},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const r=fe(t.description)?t.description:n.description,a=[...Z(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:r}]];return jd(a)},resolvePageHeadTitle:(e,t)=>`${e.title?`${e.title} | `:""}${t.title}`,resolvePageLang:e=>e.lang||"en",resolveRouteLocale:(e,t)=>wo(e,t),resolveSiteLocaleData:(e,t)=>it(it({},e),e.locales[t])});const Hd=we("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[we("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),we("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Ud=et({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=Ed(),n=ye(()=>{var r;return(r=e.locales[t.value])!==null&&r!==void 0?r:{openInNewWindow:"open in new window"}});return()=>we("span",[Hd,we("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),Bd={"/":{openInNewWindow:"open in new window"},"/en/":{openInNewWindow:"open in new window"}};var Od=Un(({app:e})=>{e.component("ExternalLinkIcon",we(Ud,{locales:Bd}))});/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var At=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yn=function(t){return t.tagName==="IMG"},Nd=function(t){return NodeList.prototype.isPrototypeOf(t)},Qn=function(t){return t&&t.nodeType===1},Fi=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Hi=function(t){try{return Array.isArray(t)?t.filter(Yn):Nd(t)?[].slice.call(t).filter(Yn):Qn(t)?[t].filter(Yn):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(Yn):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Gd=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},zd=function(t){var n=t.getBoundingClientRect(),r=n.top,a=n.left,i=n.width,s=n.height,o=t.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return o.removeAttribute("id"),o.style.position="absolute",o.style.top=r+l+"px",o.style.left=a+c+"px",o.style.width=i+"px",o.style.height=s+"px",o.style.transform="",o},zt=function(t,n){var r=At({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,r);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),a},$d=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(k){function D(){}k(D,D)},a=function(k){var D=k.target;if(D===K){f();return}P.indexOf(D)!==-1&&v({target:D})},i=function(){if(!(F||!x.original)){var k=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(H-k)>C.scrollOffset&&setTimeout(f,150)}},s=function(k){var D=k.key||k.keyCode;(D==="Escape"||D==="Esc"||D===27)&&f()},o=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=k;if(k.background&&(K.style.background=k.background),k.container&&k.container instanceof Object&&(D.container=At({},C.container,k.container)),k.template){var W=Qn(k.template)?k.template:document.querySelector(k.template);D.template=W}return C=At({},C,D),P.forEach(function(le){le.dispatchEvent(zt("medium-zoom:update",{detail:{zoom:z}}))}),z},l=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(At({},C,k))},c=function(){for(var k=arguments.length,D=Array(k),W=0;W<k;W++)D[W]=arguments[W];var le=D.reduce(function(G,ee){return[].concat(G,Hi(ee))},[]);return le.filter(function(G){return P.indexOf(G)===-1}).forEach(function(G){P.push(G),G.classList.add("medium-zoom-image")}),T.forEach(function(G){var ee=G.type,re=G.listener,Ce=G.options;le.forEach(function(Re){Re.addEventListener(ee,re,Ce)})}),z},u=function(){for(var k=arguments.length,D=Array(k),W=0;W<k;W++)D[W]=arguments[W];x.zoomed&&f();var le=D.length>0?D.reduce(function(G,ee){return[].concat(G,Hi(ee))},[]):P;return le.forEach(function(G){G.classList.remove("medium-zoom-image"),G.dispatchEvent(zt("medium-zoom:detach",{detail:{zoom:z}}))}),P=P.filter(function(G){return le.indexOf(G)===-1}),z},h=function(k,D){var W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return P.forEach(function(le){le.addEventListener("medium-zoom:"+k,D,W)}),T.push({type:"medium-zoom:"+k,listener:D,options:W}),z},p=function(k,D){var W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return P.forEach(function(le){le.removeEventListener("medium-zoom:"+k,D,W)}),T=T.filter(function(le){return!(le.type==="medium-zoom:"+k&&le.listener.toString()===D.toString())}),z},w=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=k.target,W=function(){var G={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},ee=void 0,re=void 0;if(C.container)if(C.container instanceof Object)G=At({},G,C.container),ee=G.width-G.left-G.right-C.margin*2,re=G.height-G.top-G.bottom-C.margin*2;else{var Ce=Qn(C.container)?C.container:document.querySelector(C.container),Re=Ce.getBoundingClientRect(),Fe=Re.width,Ne=Re.height,Me=Re.left,un=Re.top;G=At({},G,{width:Fe,height:Ne,left:Me,top:un})}ee=ee||G.width-C.margin*2,re=re||G.height-C.margin*2;var S=x.zoomedHd||x.original,U=Fi(S)?ee:S.naturalWidth||ee,j=Fi(S)?re:S.naturalHeight||re,B=S.getBoundingClientRect(),ce=B.top,ue=B.left,ne=B.width,X=B.height,d=Math.min(U,ee)/ne,m=Math.min(j,re)/X,y=Math.min(d,m),L=(-ue+(ee-ne)/2+C.margin+G.left)/y,E=(-ce+(re-X)/2+C.margin+G.top)/y,A="scale("+y+") translate3d("+L+"px, "+E+"px, 0)";x.zoomed.style.transform=A,x.zoomedHd&&(x.zoomedHd.style.transform=A)};return new r(function(le){if(D&&P.indexOf(D)===-1){le(z);return}var G=function Fe(){F=!1,x.zoomed.removeEventListener("transitionend",Fe),x.original.dispatchEvent(zt("medium-zoom:opened",{detail:{zoom:z}})),le(z)};if(x.zoomed){le(z);return}if(D)x.original=D;else if(P.length>0){var ee=P;x.original=ee[0]}else{le(z);return}if(x.original.dispatchEvent(zt("medium-zoom:open",{detail:{zoom:z}})),H=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,F=!0,x.zoomed=zd(x.original),document.body.appendChild(K),C.template){var re=Qn(C.template)?C.template:document.querySelector(C.template);x.template=document.createElement("div"),x.template.appendChild(re.content.cloneNode(!0)),document.body.appendChild(x.template)}if(document.body.appendChild(x.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),x.original.classList.add("medium-zoom-image--hidden"),x.zoomed.classList.add("medium-zoom-image--opened"),x.zoomed.addEventListener("click",f),x.zoomed.addEventListener("transitionend",G),x.original.getAttribute("data-zoom-src")){x.zoomedHd=x.zoomed.cloneNode(),x.zoomedHd.removeAttribute("srcset"),x.zoomedHd.removeAttribute("sizes"),x.zoomedHd.src=x.zoomed.getAttribute("data-zoom-src"),x.zoomedHd.onerror=function(){clearInterval(Ce),console.warn("Unable to reach the zoom image target "+x.zoomedHd.src),x.zoomedHd=null,W()};var Ce=setInterval(function(){x.zoomedHd.complete&&(clearInterval(Ce),x.zoomedHd.classList.add("medium-zoom-image--opened"),x.zoomedHd.addEventListener("click",f),document.body.appendChild(x.zoomedHd),W())},10)}else if(x.original.hasAttribute("srcset")){x.zoomedHd=x.zoomed.cloneNode(),x.zoomedHd.removeAttribute("sizes"),x.zoomedHd.removeAttribute("loading");var Re=x.zoomedHd.addEventListener("load",function(){x.zoomedHd.removeEventListener("load",Re),x.zoomedHd.classList.add("medium-zoom-image--opened"),x.zoomedHd.addEventListener("click",f),document.body.appendChild(x.zoomedHd),W()})}else W()})},f=function(){return new r(function(k){if(F||!x.original){k(z);return}var D=function W(){x.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(x.zoomed),x.zoomedHd&&document.body.removeChild(x.zoomedHd),document.body.removeChild(K),x.zoomed.classList.remove("medium-zoom-image--opened"),x.template&&document.body.removeChild(x.template),F=!1,x.zoomed.removeEventListener("transitionend",W),x.original.dispatchEvent(zt("medium-zoom:closed",{detail:{zoom:z}})),x.original=null,x.zoomed=null,x.zoomedHd=null,x.template=null,k(z)};F=!0,document.body.classList.remove("medium-zoom--opened"),x.zoomed.style.transform="",x.zoomedHd&&(x.zoomedHd.style.transform=""),x.template&&(x.template.style.transition="opacity 150ms",x.template.style.opacity=0),x.original.dispatchEvent(zt("medium-zoom:close",{detail:{zoom:z}})),x.zoomed.addEventListener("transitionend",D)})},v=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=k.target;return x.original?f():w({target:D})},g=function(){return C},b=function(){return P},_=function(){return x.original},P=[],T=[],F=!1,H=0,C=n,x={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?C=t:(t||typeof t=="string")&&c(t),C=At({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},C);var K=Gd(C.background);document.addEventListener("click",a),document.addEventListener("keyup",s),document.addEventListener("scroll",i),window.addEventListener("resize",f);var z={open:w,close:f,toggle:v,update:o,clone:l,attach:c,detach:u,on:h,off:p,getOptions:g,getImages:b,getZoomedImage:_};return z};function Vd(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Wd=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Vd(Wd);var Kd=$d;const Yd=Symbol("mediumZoom");const Jd=".theme-default-content > img, .theme-default-content :not(a) > img",Zd={},Qd=300;var Xd=Un(({app:e,router:t})=>{const n=Kd(Zd);n.refresh=(r=Jd)=>{n.detach(),n.attach(r)},e.provide(Yd,n),t.afterEach(()=>{setTimeout(()=>n.refresh(),Qd)})});const ep={locales:{"/":{selectLanguageName:"Fran\xE7ais",selectLanguageText:"Langue"},"/en/":{selectLanguageName:"English",selectLanguageText:"Language"}},navbar:[{text:"Accueil",link:"/"},{text:"Portfolio",children:["/portfolio/unity.md","/portfolio/blender.md"]},{text:"Unity",link:"/portfolio/unity/"},{text:"Contact",link:"/contact.md"}],sidebar:[{link:"/",text:"Accueil"},{text:"Portfolio",link:"/portfolio",collapsible:!0,children:["/portfolio/unity.md","/portfolio/blender.md"]},{text:"Projets",link:"/projects",collapsible:!0,children:["/projects/labyrintheBlender.md"]},{text:"Tutoriels",link:"/tutorials",collapsible:!0,children:["/tutorials/interfaceUnity.md","/tutorials/fracturationBlenderUnity.md","/tutorials/teachableMachine.md"]},"/research.md","/Contact.md"],darkMode:!0,prefersTheme:"dark",updatePopup:!1,lastUpdatedText:"\u23F3\uFE0F",docsRepo:"SamLefebvre/SamLefebvre.github.io",docsDir:"docs",docsBranch:"production",editLink:!1,contributors:!1,logo:null,repo:null,selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",sidebarDepth:2,editLinkText:"Edit this page",lastUpdated:!0,contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window",toggleDarkMode:"toggle dark mode",toggleSidebar:"toggle sidebar"},ko=je(ep),tp=()=>ko;Da.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=e=>{ko.value=e});const _o=Symbol(""),np=()=>{const e=Le(_o);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},rp=(e,t)=>{var n;return it(it({},e),(n=e.locales)===null||n===void 0?void 0:n[t])};var ap=Un(({app:e})=>{const t=tp(),n=e._context.provides[Aa],r=ye(()=>rp(t.value,n.value));e.provide(_o,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})});const ip=et({props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(t,n)=>(ut(),Ht("span",{class:rn(["badge",e.type]),style:jn({verticalAlign:e.vertical})},[Ks(t.$slots,"default",{},()=>[Fn(bn(e.text),1)])],6))}});var sp=et({name:"CodeGroup",setup(e,{slots:t}){const n=je(-1),r=je([]),a=(o=n.value)=>{o<r.value.length-1?n.value=o+1:n.value=0,r.value[n.value].focus()},i=(o=n.value)=>{o>0?n.value=o-1:n.value=r.value.length-1,r.value[n.value].focus()},s=(o,l)=>{o.key===" "||o.key==="Enter"?(o.preventDefault(),n.value=l):o.key==="ArrowRight"?(o.preventDefault(),a(l)):o.key==="ArrowLeft"&&(o.preventDefault(),i(l))};return()=>{var o;const l=(((o=t.default)===null||o===void 0?void 0:o.call(t))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return l.length===0?null:(n.value<0||n.value>l.length-1?(n.value=l.findIndex(c=>c.props.active===""||c.props.active===!0),n.value===-1&&(n.value=0)):l.forEach((c,u)=>{c.props.active=u===n.value}),we("div",{class:"code-group"},[we("div",{class:"code-group__nav"},we("ul",{class:"code-group__ul"},l.map((c,u)=>{const h=u===n.value;return we("li",{class:"code-group__li"},we("button",{ref:p=>{p&&(r.value[u]=p)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":h},ariaPressed:h,ariaExpanded:h,onClick:()=>n.value=u,onKeydown:p=>s(p,u)},c.props.title))}))),l]))}}});const op=["aria-selected"],lp=et({name:"CodeGroupItem"}),cp=et(Nn(it({},lp),{props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(ut(),Ht("div",{class:rn(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[Ks(t.$slots,"default")],10,op))}}));function xo(e){return tl()?(nl(e),!0):!1}const Bn=typeof window!="undefined",up=e=>typeof e=="string",Mr=()=>{};function dp(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const pp=e=>e();var Ui=Object.getOwnPropertySymbols,hp=Object.prototype.hasOwnProperty,fp=Object.prototype.propertyIsEnumerable,mp=(e,t)=>{var n={};for(var r in e)hp.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Ui)for(var r of Ui(e))t.indexOf(r)<0&&fp.call(e,r)&&(n[r]=e[r]);return n};function gp(e,t,n={}){const r=n,{eventFilter:a=pp}=r,i=mp(r,["eventFilter"]);return ct(e,dp(a,t),i)}function vp(e,t=!0){Js()?ht(e):t?e():ga(e)}const pr=Bn?window:void 0;Bn&&window.document;Bn&&window.navigator;Bn&&window.location;function bp(...e){let t,n,r,a;if(up(e[0])?([n,r,a]=e,t=pr):[t,n,r,a]=e,!t)return Mr;let i=Mr;const s=ct(()=>qt(t),l=>{i(),!!l&&(l.addEventListener(n,r,a),i=()=>{l.removeEventListener(n,r,a),i=Mr})},{immediate:!0,flush:"post"}),o=()=>{s(),i()};return xo(o),o}function yp(e,t={}){const{window:n=pr}=t;let r;const a=je(!1),i=()=>{!n||(r||(r=n.matchMedia(e)),a.value=r.matches)};return vp(()=>{i(),!!r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i),xo(()=>{"removeEventListener"in i?r.removeEventListener("change",i):r.removeListener(i)}))}),a}const ea=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ta="__vueuse_ssr_handlers__";ea[ta]=ea[ta]||{};const wp=ea[ta];function kp(e,t){return wp[e]||t}function _p(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const xp={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function Sp(e,t,n,r={}){var a;const{flush:i="pre",deep:s=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,shallow:c,window:u=pr,eventFilter:h,onError:p=_=>{console.error(_)}}=r,w=qt(t),f=_p(w),v=(c?bs:je)(t),g=(a=r.serializer)!=null?a:xp[f];if(!n)try{n=kp("getDefaultStorage",()=>{var _;return(_=pr)==null?void 0:_.localStorage})()}catch(_){p(_)}function b(_){if(!(!n||_&&_.key!==e))try{const P=_?_.newValue:n.getItem(e);P==null?(v.value=w,l&&w!==null&&n.setItem(e,g.write(w))):typeof P!="string"?v.value=P:v.value=g.read(P)}catch(P){p(P)}}return b(),u&&o&&bp(u,"storage",_=>setTimeout(()=>b(_),0)),n&&gp(v,()=>{try{v.value==null?n.removeItem(e):n.setItem(e,g.write(v.value))}catch(_){p(_)}},{flush:i,deep:s,eventFilter:h}),v}function Cp(e){return yp("(prefers-color-scheme: dark)",e)}var Bi,Oi;Bn&&(window==null?void 0:window.navigator)&&((Bi=window==null?void 0:window.navigator)==null?void 0:Bi.platform)&&/iP(ad|hone|od)/.test((Oi=window==null?void 0:window.navigator)==null?void 0:Oi.platform);var Pp=Object.defineProperty,Ni=Object.getOwnPropertySymbols,Ep=Object.prototype.hasOwnProperty,Lp=Object.prototype.propertyIsEnumerable,Gi=(e,t,n)=>t in e?Pp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tp=(e,t)=>{for(var n in t||(t={}))Ep.call(t,n)&&Gi(e,n,t[n]);if(Ni)for(var n of Ni(t))Lp.call(t,n)&&Gi(e,n,t[n]);return e};const Rp={top:0,left:0,bottom:0,right:0,height:0,width:0};Tp({text:""},Rp);const So=Symbol(""),Sf=()=>{const e=Le(So);if(!e)throw new Error("useDarkMode() is called without provider.");return e},Ap=()=>{const e=Lo(),t=Cp(),n=Sp("vuepress-color-scheme","auto"),r=ye({get(){return e.value.darkMode?n.value==="auto"?t.value:n.value==="dark":!1},set(a){a===t.value?n.value="auto":n.value=a?"dark":"light"}});St(So,r),Ip(r)},Ip=e=>{const t=(n=e.value)=>{const r=window==null?void 0:window.document.querySelector("html");r==null||r.classList.toggle("dark",n)};ht(()=>{ct(e,t,{immediate:!0})}),ka(()=>t())},Co=(...e)=>{const n=La().resolve(...e),r=n.matched[n.matched.length-1];if(!(r==null?void 0:r.redirect))return n;const{redirect:a}=r,i=te(a)?a(n):a,s=fe(i)?{path:i}:i;return Co(it({hash:n.hash,query:n.query,params:n.params},s))},jp=e=>{const t=Co(e);return{text:t.meta.title||e,link:t.name==="404"?e:t.fullPath}};let Dr=null,mn=null;const Mp={wait:()=>Dr,pending:()=>{Dr=new Promise(e=>mn=e)},resolve:()=>{mn==null||mn(),Dr=null,mn=null}},Dp=()=>Mp,Po=Symbol("sidebarItems"),Cf=()=>{const e=Le(Po);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},qp=()=>{const e=Lo(),t=xd(),n=ye(()=>Fp(t.value,e.value));St(Po,n)},Fp=(e,t)=>{var n,r,a,i;const s=(r=(n=e.sidebar)!==null&&n!==void 0?n:t.sidebar)!==null&&r!==void 0?r:"auto",o=(i=(a=e.sidebarDepth)!==null&&a!==void 0?a:t.sidebarDepth)!==null&&i!==void 0?i:2;return e.home||s===!1?[]:s==="auto"?Up(o):Z(s)?Eo(s,o):yo(s)?Bp(s,o):[]},Hp=(e,t)=>({text:e.title,link:`#${e.slug}`,children:Ma(e.children,t)}),Ma=(e,t)=>t>0?e.map(n=>Hp(n,t-1)):[],Up=e=>{const t=Hn();return[{text:t.value.title,children:Ma(t.value.headers,e)}]},Eo=(e,t)=>{const n=Ta(),r=Hn(),a=i=>{var s;let o;if(fe(i)?o=jp(i):o=i,o.children)return Nn(it({},o),{children:o.children.map(l=>a(l))});if(o.link===n.path){const l=((s=r.value.headers[0])===null||s===void 0?void 0:s.level)===1?r.value.headers[0].children:r.value.headers;return Nn(it({},o),{children:Ma(l,t)})}return o};return e.map(i=>a(i))},Bp=(e,t)=>{var n;const r=Ta(),a=wo(e,r.path),i=(n=e[a])!==null&&n!==void 0?n:[];return Eo(i,t)},Lo=()=>np();var Op=Un(({app:e,router:t})=>{e.component("Badge",ip),e.component("CodeGroup",sp),e.component("CodeGroupItem",cp),e.component("NavbarSearch",()=>{const r=e.component("Docsearch")||e.component("SearchBox");return r?we(r):null});const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...r)=>(await Dp().wait(),n(...r))});var kr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const Np={name:"githubcorner"},Gp={class:"cornerGitHub"},zp=Ec('<a href="https://github.com/SamLefebvre/SamLefebvre.github.io" title="Fork me on GitHub!" class="github-corner" aria-label="View source on GitHub" data-v-35b6bf76><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513;color:#fff;position:absolute;top:50;border:0;right:0;" aria-hidden="true" data-v-35b6bf76><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" data-v-35b6bf76></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm" data-v-35b6bf76></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body" data-v-35b6bf76></path></svg></a>',1),$p=[zp];function Vp(e,t,n,r,a,i){return ut(),Ht("div",Gp,$p)}var Wp=kr(Np,[["render",Vp],["__scopeId","data-v-35b6bf76"]]),Kp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},To={exports:{}},Ro={exports:{}},qr=Object.prototype.hasOwnProperty,Yp=Object.prototype.toString;function zi(e){if(!e||Yp.call(e)!=="[object Object]"||e.nodeType||e.setInterval)return!1;var t=qr.call(e,"constructor"),n=qr.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!n)return!1;var r;for(r in e);return r===void 0||qr.call(e,r)}var Ao=function e(){var t,n,r,a,i,s,o=arguments[0]||{},l=1,c=arguments.length,u=!1;for(typeof o=="boolean"&&(u=o,o=arguments[1]||{},l=2),typeof o!="object"&&typeof o!="function"&&(o={});l<c;l++)if((t=arguments[l])!=null)for(n in t)r=o[n],a=t[n],o!==a&&(u&&a&&(zi(a)||(i=Array.isArray(a)))?(i?(i=!1,s=r&&Array.isArray(r)?r:[]):s=r&&zi(r)?r:{},o[n]=e(u,s,a)):a!==void 0&&(o[n]=a));return o};function Jp(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(r,a,i,s){return a+a+i+i+s+s});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function Zp(e){return"#"+["r","g","b"].map(function(t){return("0"+e[t].toString(16)).slice(-2)}).join("")}function Qp(e){var t=e.r,n=e.g,r=e.b;t/=255,n/=255,r/=255;var a=Math.max(t,n,r),i=Math.min(t,n,r),s,o,l=(a+i)/2;if(a===i)s=o=0;else{var c=a-i;switch(o=l>.5?c/(2-a-i):c/(a+i),a){case t:s=(n-r)/c+(n<r?6:0);break;case n:s=(r-t)/c+2;break;case r:s=(t-n)/c+4;break}s/=6}return{h:s,s:o,l}}function Xp(e){function t(u,h,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?u+(h-u)*6*p:p<1/2?h:p<2/3?u+(h-u)*(2/3-p)*6:u}var n=e.h,r=e.s,a=e.l,i,s,o;if(r===0)i=s=o=a;else{var l=a<.5?a*(1+r):a+r-a*r,c=2*a-l;i=t(c,l,n+1/3),s=t(c,l,n),o=t(c,l,n-1/3)}return{r:Math.round(i*255),g:Math.round(s*255),b:Math.round(o*255)}}var eh={hex2rgb:Jp,rgb2hex:Zp,rgb2hsl:Qp,hsl2rgb:Xp,rgb2rgbString:function(e){return"rgb("+[e.r,e.g,e.b].join(",")+")"}};function $i(){var e=1732584193,t=4023233417,n=2562383102,r=271733878,a=3285377520,i=new Uint32Array(80),s=0,o=24,l=0;function c(){for(var v=16;v<80;v++){var g=i[v-3]^i[v-8]^i[v-14]^i[v-16];i[v]=g<<1|g>>>31}var b=e,_=t,P=n,T=r,F=a,H,C;for(v=0;v<80;v++){v<20?(H=T^_&(P^T),C=1518500249):v<40?(H=_^P^T,C=1859775393):v<60?(H=_&P|T&(_|P),C=2400959708):(H=_^P^T,C=3395469782);var x=(b<<5|b>>>27)+H+F+C+(i[v]|0);F=T,T=P,P=_<<30|_>>>2,_=b,b=x}for(e=e+b|0,t=t+_|0,n=n+P|0,r=r+T|0,a=a+F|0,s=0,v=0;v<16;v++)i[v]=0}function u(v){i[s]|=(v&255)<<o,o?o-=8:(s++,o=24),s===16&&c()}function h(v){var g=v.length;l+=g*8;for(var b=0;b<g;b++)u(v.charCodeAt(b))}function p(v){if(typeof v=="string")return h(v);var g=v.length;l+=g*8;for(var b=0;b<g;b++)u(v[b])}function w(v){for(var g="",b=28;b>=0;b-=4)g+=(v>>b&15).toString(16);return g}function f(){u(128),(s>14||s===14&&o<24)&&c(),s=14,o=24,u(0),u(0),u(l>1099511627775?l/1099511627776:0),u(l>4294967295?l/4294967296:0);for(var v=24;v>=0;v-=8)u(l>>v);return w(e)+w(t)+w(n)+w(r)+w(a)}return{update:p,digest:f}}var th=function(t){if(t===void 0)return $i();var n=$i();return n.update(t),n.digest()},Io={exports:{}},In=Io.exports=function(e){return this instanceof In?(this.tagName=e,this.attributes=Object.create(null),this.children=[],this.lastChild=null,this):new In(e)};In.prototype.appendChild=function(e){return this.children.push(e),this.lastChild=e,this};In.prototype.setAttribute=function(e,t){return this.attributes[e]=t,this};In.prototype.toString=function(){var e=this;return["<",e.tagName,Object.keys(e.attributes).map(function(t){return[" ",t,'="',e.attributes[t],'"'].join("")}).join(""),">",e.children.map(function(t){return t.toString()}).join(""),"</",e.tagName,">"].join("")};var On=Ao,cn=Io.exports;function qe(){return this.width=100,this.height=100,this.svg=cn("svg"),this.context=[],this.setAttributes(this.svg,{xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height}),this}var nh=qe;qe.prototype.currentContext=function(){return this.context[this.context.length-1]||this.svg};qe.prototype.end=function(){return this.context.pop(),this};qe.prototype.currentNode=function(){var e=this.currentContext();return e.lastChild||e};qe.prototype.transform=function(e){return this.currentNode().setAttribute("transform",Object.keys(e).map(function(t){return t+"("+e[t].join(",")+")"}).join(" ")),this};qe.prototype.setAttributes=function(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})};qe.prototype.setWidth=function(e){this.svg.setAttribute("width",Math.floor(e))};qe.prototype.setHeight=function(e){this.svg.setAttribute("height",Math.floor(e))};qe.prototype.toString=function(){return this.svg.toString()};qe.prototype.rect=function(e,t,n,r,a){var i=this;if(Array.isArray(e))return e.forEach(function(o){i.rect.apply(i,o.concat(a))}),this;var s=cn("rect");return this.currentContext().appendChild(s),this.setAttributes(s,On({x:e,y:t,width:n,height:r},a)),this};qe.prototype.circle=function(e,t,n,r){var a=cn("circle");return this.currentContext().appendChild(a),this.setAttributes(a,On({cx:e,cy:t,r:n},r)),this};qe.prototype.path=function(e,t){var n=cn("path");return this.currentContext().appendChild(n),this.setAttributes(n,On({d:e},t)),this};qe.prototype.polyline=function(e,t){var n=this;if(Array.isArray(e))return e.forEach(function(a){n.polyline(a,t)}),this;var r=cn("polyline");return this.currentContext().appendChild(r),this.setAttributes(r,On({points:e},t)),this};qe.prototype.group=function(e){var t=cn("g");return this.currentContext().appendChild(t),this.context.push(t),this.setAttributes(t,On({},e)),this};var rh=Ao,$t=eh,ah=th,ih=nh,sh={baseColor:"#933c3c"},Vi=["octogons","overlappingCircles","plusSigns","xes","sineWaves","hexagons","overlappingRings","plaid","triangles","squares","concentricCircles","diamonds","tessellation","nestedSquares","mosaicSquares","chevrons"],oh="#222",lh="#ddd",Qe="#000",Xe=.02,ch=.02,uh=.15;function J(e,t,n){return parseInt(e.substr(t,n||1),16)}function ke(e,t,n,r,a){var i=parseFloat(e),s=n-t,o=a-r;return(i-t)*o/s+r}function _e(e){return e%2===0?lh:oh}function xe(e){return ke(e,0,15,ch,uh)}var be=Ro.exports=function(e,t){return this.opts=rh({},sh,t),this.hash=t.hash||ah(e),this.svg=new ih,this.generateBackground(),this.generatePattern(),this};be.prototype.toSvg=function(){return this.svg.toString()};be.prototype.toString=function(){return this.toSvg()};be.prototype.toBase64=function(){var e=this.toSvg(),t;return typeof window!="undefined"&&typeof window.btoa=="function"?t=window.btoa(e):t=new Buffer(e).toString("base64"),t};be.prototype.toDataUri=function(){return"data:image/svg+xml;base64,"+this.toBase64()};be.prototype.toDataUrl=function(){return'url("'+this.toDataUri()+'")'};be.prototype.generateBackground=function(){var e,t,n,r;this.opts.color?n=$t.hex2rgb(this.opts.color):(t=ke(J(this.hash,14,3),0,4095,0,359),r=J(this.hash,17),e=$t.rgb2hsl($t.hex2rgb(this.opts.baseColor)),e.h=(e.h*360-t+360)%360/360,r%2===0?e.s=Math.min(1,(e.s*100+r)/100):e.s=Math.max(0,(e.s*100-r)/100),n=$t.hsl2rgb(e)),this.color=$t.rgb2hex(n),this.svg.rect(0,0,"100%","100%",{fill:$t.rgb2rgbString(n)})};be.prototype.generatePattern=function(){var e=this.opts.generator;if(e){if(Vi.indexOf(e)<0)throw new Error("The generator "+e+" does not exist.")}else e=Vi[J(this.hash,20)];return this["geo"+e.slice(0,1).toUpperCase()+e.slice(1)]()};function dh(e){var t=e,n=t/2,r=Math.sin(60*Math.PI/180)*t;return[0,r,n,0,n+t,0,2*t,r,n+t,2*r,n,2*r,0,r].join(",")}be.prototype.geoHexagons=function(){var e=J(this.hash,0),t=ke(e,0,15,8,60),n=t*Math.sqrt(3),r=t*2,a=dh(t),i,s,o,l,c,u,h,p;for(this.svg.setWidth(r*3+t*3),this.svg.setHeight(n*6),o=0,p=0;p<6;p++)for(h=0;h<6;h++)u=J(this.hash,o),i=h%2===0?p*n:p*n+n/2,l=xe(u),s=_e(u),c={fill:s,"fill-opacity":l,stroke:Qe,"stroke-opacity":Xe},this.svg.polyline(a,c).transform({translate:[h*t*1.5-r/2,i-n/2]}),h===0&&this.svg.polyline(a,c).transform({translate:[6*t*1.5-r/2,i-n/2]}),p===0&&(i=h%2===0?6*n:6*n+n/2,this.svg.polyline(a,c).transform({translate:[h*t*1.5-r/2,i-n/2]})),h===0&&p===0&&this.svg.polyline(a,c).transform({translate:[6*t*1.5-r/2,5*n+n/2]}),o++};be.prototype.geoSineWaves=function(){var e=Math.floor(ke(J(this.hash,0),0,15,100,400)),t=Math.floor(ke(J(this.hash,1),0,15,30,100)),n=Math.floor(ke(J(this.hash,2),0,15,3,30)),r,a,i,s,o,l,c;for(this.svg.setWidth(e),this.svg.setHeight(n*36),a=0;a<36;a++)l=J(this.hash,a),i=xe(l),r=_e(l),c=e/4*.7,o={fill:"none",stroke:r,opacity:i,"stroke-width":""+n+"px"},s="M0 "+t+" C "+c+" 0, "+(e/2-c)+" 0, "+e/2+" "+t+" S "+(e-c)+" "+t*2+", "+e+" "+t+" S "+(e*1.5-c)+" 0, "+e*1.5+", "+t,this.svg.path(s,o).transform({translate:[-e/4,n*a-t*1.5]}),this.svg.path(s,o).transform({translate:[-e/4,n*a-t*1.5+n*36]})};function ph(e,t){var n=t*.66;return[[0,0,e/2,t-n,e/2,t,0,n,0,0],[e/2,t-n,e,0,e,n,e/2,t,e/2,t-n]].map(function(r){return r.join(",")})}be.prototype.geoChevrons=function(){var e=ke(J(this.hash,0),0,15,30,80),t=ke(J(this.hash,0),0,15,30,80),n=ph(e,t),r,a,i,s,o,l,c;for(this.svg.setWidth(e*6),this.svg.setHeight(t*6*.66),a=0,c=0;c<6;c++)for(l=0;l<6;l++)o=J(this.hash,a),i=xe(o),r=_e(o),s={stroke:Qe,"stroke-opacity":Xe,fill:r,"fill-opacity":i,"stroke-width":1},this.svg.group(s).transform({translate:[l*e,c*t*.66-t/2]}).polyline(n).end(),c===0&&this.svg.group(s).transform({translate:[l*e,6*t*.66-t/2]}).polyline(n).end(),a+=1};function jo(e){return[[e,0,e,e*3],[0,e,e*3,e]]}be.prototype.geoPlusSigns=function(){var e=ke(J(this.hash,0),0,15,10,25),t=e*3,n=jo(e),r,a,i,s,o,l,c,u;for(this.svg.setWidth(e*12),this.svg.setHeight(e*12),i=0,u=0;u<6;u++)for(c=0;c<6;c++)l=J(this.hash,i),s=xe(l),a=_e(l),r=u%2===0?0:1,o={fill:a,stroke:Qe,"stroke-opacity":Xe,"fill-opacity":s},this.svg.group(o).transform({translate:[c*t-c*e+r*e-e,u*t-u*e-t/2]}).rect(n).end(),c===0&&this.svg.group(o).transform({translate:[4*t-c*e+r*e-e,u*t-u*e-t/2]}).rect(n).end(),u===0&&this.svg.group(o).transform({translate:[c*t-c*e+r*e-e,4*t-u*e-t/2]}).rect(n).end(),c===0&&u===0&&this.svg.group(o).transform({translate:[4*t-c*e+r*e-e,4*t-u*e-t/2]}).rect(n).end(),i++};be.prototype.geoXes=function(){var e=ke(J(this.hash,0),0,15,10,25),t=jo(e),n=e*3*.943,r,a,i,s,o,l,c,u;for(this.svg.setWidth(n*3),this.svg.setHeight(n*3),i=0,u=0;u<6;u++)for(c=0;c<6;c++)l=J(this.hash,i),s=xe(l),r=c%2===0?u*n-n*.5:u*n-n*.5+n/4,a=_e(l),o={fill:a,opacity:s},this.svg.group(o).transform({translate:[c*n/2-n/2,r-u*n/2],rotate:[45,n/2,n/2]}).rect(t).end(),c===0&&this.svg.group(o).transform({translate:[6*n/2-n/2,r-u*n/2],rotate:[45,n/2,n/2]}).rect(t).end(),u===0&&(r=c%2===0?6*n-n/2:6*n-n/2+n/4,this.svg.group(o).transform({translate:[c*n/2-n/2,r-6*n/2],rotate:[45,n/2,n/2]}).rect(t).end()),u===5&&this.svg.group(o).transform({translate:[c*n/2-n/2,r-11*n/2],rotate:[45,n/2,n/2]}).rect(t).end(),c===0&&u===0&&this.svg.group(o).transform({translate:[6*n/2-n/2,r-6*n/2],rotate:[45,n/2,n/2]}).rect(t).end(),i++};be.prototype.geoOverlappingCircles=function(){var e=J(this.hash,0),t=ke(e,0,15,25,200),n=t/2,r,a,i,s,o,l,c;for(this.svg.setWidth(n*6),this.svg.setHeight(n*6),a=0,c=0;c<6;c++)for(l=0;l<6;l++)o=J(this.hash,a),i=xe(o),r=_e(o),s={fill:r,opacity:i},this.svg.circle(l*n,c*n,n,s),l===0&&this.svg.circle(6*n,c*n,n,s),c===0&&this.svg.circle(l*n,6*n,n,s),l===0&&c===0&&this.svg.circle(6*n,6*n,n,s),a++};function hh(e){var t=e,n=t*.33;return[n,0,t-n,0,t,n,t,t-n,t-n,t,n,t,0,t-n,0,n,n,0].join(",")}be.prototype.geoOctogons=function(){var e=ke(J(this.hash,0),0,15,10,60),t=hh(e),n,r,a,i,s,o;for(this.svg.setWidth(e*6),this.svg.setHeight(e*6),r=0,o=0;o<6;o++)for(s=0;s<6;s++)i=J(this.hash,r),a=xe(i),n=_e(i),this.svg.polyline(t,{fill:n,"fill-opacity":a,stroke:Qe,"stroke-opacity":Xe}).transform({translate:[s*e,o*e]}),r+=1};be.prototype.geoSquares=function(){var e=ke(J(this.hash,0),0,15,10,60),t,n,r,a,i,s;for(this.svg.setWidth(e*6),this.svg.setHeight(e*6),n=0,s=0;s<6;s++)for(i=0;i<6;i++)a=J(this.hash,n),r=xe(a),t=_e(a),this.svg.rect(i*e,s*e,e,e,{fill:t,"fill-opacity":r,stroke:Qe,"stroke-opacity":Xe}),n+=1};be.prototype.geoConcentricCircles=function(){var e=J(this.hash,0),t=ke(e,0,15,10,60),n=t/5,r,a,i,s,o,l;for(this.svg.setWidth((t+n)*6),this.svg.setHeight((t+n)*6),a=0,l=0;l<6;l++)for(o=0;o<6;o++)s=J(this.hash,a),i=xe(s),r=_e(s),this.svg.circle(o*t+o*n+(t+n)/2,l*t+l*n+(t+n)/2,t/2,{fill:"none",stroke:r,opacity:i,"stroke-width":n+"px"}),s=J(this.hash,39-a),i=xe(s),r=_e(s),this.svg.circle(o*t+o*n+(t+n)/2,l*t+l*n+(t+n)/2,t/4,{fill:r,"fill-opacity":i}),a+=1};be.prototype.geoOverlappingRings=function(){var e=J(this.hash,0),t=ke(e,0,15,10,60),n=t/4,r,a,i,s,o,l,c;for(this.svg.setWidth(t*6),this.svg.setHeight(t*6),a=0,c=0;c<6;c++)for(l=0;l<6;l++)o=J(this.hash,a),i=xe(o),r=_e(o),s={fill:"none",stroke:r,opacity:i,"stroke-width":n+"px"},this.svg.circle(l*t,c*t,t-n/2,s),l===0&&this.svg.circle(6*t,c*t,t-n/2,s),c===0&&this.svg.circle(l*t,6*t,t-n/2,s),l===0&&c===0&&this.svg.circle(6*t,6*t,t-n/2,s),a+=1};function fh(e,t){var n=e/2;return[n,0,e,t,0,t,n,0].join(",")}be.prototype.geoTriangles=function(){var e=J(this.hash,0),t=ke(e,0,15,15,80),n=t/2*Math.sqrt(3),r=fh(t,n),a,i,s,o,l,c,u,h;for(this.svg.setWidth(t*3),this.svg.setHeight(n*6),i=0,h=0;h<6;h++)for(u=0;u<6;u++)c=J(this.hash,i),s=xe(c),a=_e(c),l={fill:a,"fill-opacity":s,stroke:Qe,"stroke-opacity":Xe},h%2===0?o=u%2===0?180:0:o=u%2!==0?180:0,this.svg.polyline(r,l).transform({translate:[u*t*.5-t/2,n*h],rotate:[o,t/2,n/2]}),u===0&&this.svg.polyline(r,l).transform({translate:[6*t*.5-t/2,n*h],rotate:[o,t/2,n/2]}),i+=1};function mh(e,t){return[e/2,0,e,t/2,e/2,t,0,t/2].join(",")}be.prototype.geoDiamonds=function(){var e=ke(J(this.hash,0),0,15,10,50),t=ke(J(this.hash,1),0,15,10,50),n=mh(e,t),r,a,i,s,o,l,c,u;for(this.svg.setWidth(e*6),this.svg.setHeight(t*3),i=0,u=0;u<6;u++)for(c=0;c<6;c++)l=J(this.hash,i),s=xe(l),a=_e(l),o={fill:a,"fill-opacity":s,stroke:Qe,"stroke-opacity":Xe},r=u%2===0?0:e/2,this.svg.polyline(n,o).transform({translate:[c*e-e/2+r,t/2*u-t/2]}),c===0&&this.svg.polyline(n,o).transform({translate:[6*e-e/2+r,t/2*u-t/2]}),u===0&&this.svg.polyline(n,o).transform({translate:[c*e-e/2+r,t/2*6-t/2]}),c===0&&u===0&&this.svg.polyline(n,o).transform({translate:[6*e-e/2+r,t/2*6-t/2]}),i+=1};be.prototype.geoNestedSquares=function(){var e=ke(J(this.hash,0),0,15,4,12),t=e*7,n,r,a,i,s,o,l;for(this.svg.setWidth((t+e)*6+e*6),this.svg.setHeight((t+e)*6+e*6),r=0,l=0;l<6;l++)for(o=0;o<6;o++)s=J(this.hash,r),a=xe(s),n=_e(s),i={fill:"none",stroke:n,opacity:a,"stroke-width":e+"px"},this.svg.rect(o*t+o*e*2+e/2,l*t+l*e*2+e/2,t,t,i),s=J(this.hash,39-r),a=xe(s),n=_e(s),i={fill:"none",stroke:n,opacity:a,"stroke-width":e+"px"},this.svg.rect(o*t+o*e*2+e/2+e*2,l*t+l*e*2+e/2+e*2,e*3,e*3,i),r+=1};function Mo(e){return[0,0,e,e,0,e,0,0].join(",")}function Wi(e,t,n,r,a){var i=Mo(r),s=xe(a[0]),o=_e(a[0]),l={stroke:Qe,"stroke-opacity":Xe,"fill-opacity":s,fill:o};e.polyline(i,l).transform({translate:[t+r,n],scale:[-1,1]}),e.polyline(i,l).transform({translate:[t+r,n+r*2],scale:[1,-1]}),s=xe(a[1]),o=_e(a[1]),l={stroke:Qe,"stroke-opacity":Xe,"fill-opacity":s,fill:o},e.polyline(i,l).transform({translate:[t+r,n+r*2],scale:[-1,-1]}),e.polyline(i,l).transform({translate:[t+r,n],scale:[1,1]})}function Ki(e,t,n,r,a){var i=xe(a),s=_e(a),o=Mo(r),l={stroke:Qe,"stroke-opacity":Xe,"fill-opacity":i,fill:s};e.polyline(o,l).transform({translate:[t,n+r],scale:[1,-1]}),e.polyline(o,l).transform({translate:[t+r*2,n+r],scale:[-1,-1]}),e.polyline(o,l).transform({translate:[t,n+r],scale:[1,1]}),e.polyline(o,l).transform({translate:[t+r*2,n+r],scale:[-1,1]})}be.prototype.geoMosaicSquares=function(){var e=ke(J(this.hash,0),0,15,15,50),t,n,r;for(this.svg.setWidth(e*8),this.svg.setHeight(e*8),t=0,r=0;r<4;r++)for(n=0;n<4;n++)n%2===0?r%2===0?Ki(this.svg,n*e*2,r*e*2,e,J(this.hash,t)):Wi(this.svg,n*e*2,r*e*2,e,[J(this.hash,t),J(this.hash,t+1)]):r%2===0?Wi(this.svg,n*e*2,r*e*2,e,[J(this.hash,t),J(this.hash,t+1)]):Ki(this.svg,n*e*2,r*e*2,e,J(this.hash,t)),t+=1};be.prototype.geoPlaid=function(){var e=0,t=0,n,r,a,i,s,o,l;for(r=0;r<36;)i=J(this.hash,r),e+=i+5,l=J(this.hash,r+1),a=xe(l),n=_e(l),s=l+5,this.svg.rect(0,e,"100%",s,{opacity:a,fill:n}),e+=s,r+=2;for(r=0;r<36;)i=J(this.hash,r),t+=i+5,l=J(this.hash,r+1),a=xe(l),n=_e(l),o=l+5,this.svg.rect(t,0,o,"100%",{opacity:a,fill:n}),t+=o,r+=2;this.svg.setWidth(t),this.svg.setHeight(e)};function gh(e,t){var n=e/2;return[0,0,t,n,0,e,0,0].join(",")}be.prototype.geoTessellation=function(){var e=ke(J(this.hash,0),0,15,5,40),t=e*Math.sqrt(3),n=e*2,r=e/2*Math.sqrt(3),a=gh(e,r),i=e*3+r*2,s=t*2+e*2,o,l,c,u,h;for(this.svg.setWidth(i),this.svg.setHeight(s),l=0;l<20;l++)switch(h=J(this.hash,l),c=xe(h),o=_e(h),u={stroke:Qe,"stroke-opacity":Xe,fill:o,"fill-opacity":c,"stroke-width":1},l){case 0:this.svg.rect(-e/2,-e/2,e,e,u),this.svg.rect(i-e/2,-e/2,e,e,u),this.svg.rect(-e/2,s-e/2,e,e,u),this.svg.rect(i-e/2,s-e/2,e,e,u);break;case 1:this.svg.rect(n/2+r,t/2,e,e,u);break;case 2:this.svg.rect(-e/2,s/2-e/2,e,e,u),this.svg.rect(i-e/2,s/2-e/2,e,e,u);break;case 3:this.svg.rect(n/2+r,t*1.5+e,e,e,u);break;case 4:this.svg.polyline(a,u).transform({translate:[e/2,-e/2],rotate:[0,e/2,r/2]}),this.svg.polyline(a,u).transform({translate:[e/2,s- -e/2],rotate:[0,e/2,r/2],scale:[1,-1]});break;case 5:this.svg.polyline(a,u).transform({translate:[i-e/2,-e/2],rotate:[0,e/2,r/2],scale:[-1,1]}),this.svg.polyline(a,u).transform({translate:[i-e/2,s+e/2],rotate:[0,e/2,r/2],scale:[-1,-1]});break;case 6:this.svg.polyline(a,u).transform({translate:[i/2+e/2,t/2]});break;case 7:this.svg.polyline(a,u).transform({translate:[i-i/2-e/2,t/2],scale:[-1,1]});break;case 8:this.svg.polyline(a,u).transform({translate:[i/2+e/2,s-t/2],scale:[1,-1]});break;case 9:this.svg.polyline(a,u).transform({translate:[i-i/2-e/2,s-t/2],scale:[-1,-1]});break;case 10:this.svg.polyline(a,u).transform({translate:[e/2,s/2-e/2]});break;case 11:this.svg.polyline(a,u).transform({translate:[i-e/2,s/2-e/2],scale:[-1,1]});break;case 12:this.svg.rect(0,0,e,e,u).transform({translate:[e/2,e/2],rotate:[-30,0,0]});break;case 13:this.svg.rect(0,0,e,e,u).transform({scale:[-1,1],translate:[-i+e/2,e/2],rotate:[-30,0,0]});break;case 14:this.svg.rect(0,0,e,e,u).transform({translate:[e/2,s/2-e/2-e],rotate:[30,0,e]});break;case 15:this.svg.rect(0,0,e,e,u).transform({scale:[-1,1],translate:[-i+e/2,s/2-e/2-e],rotate:[30,0,e]});break;case 16:this.svg.rect(0,0,e,e,u).transform({scale:[1,-1],translate:[e/2,-s+s/2-e/2-e],rotate:[30,0,e]});break;case 17:this.svg.rect(0,0,e,e,u).transform({scale:[-1,-1],translate:[-i+e/2,-s+s/2-e/2-e],rotate:[30,0,e]});break;case 18:this.svg.rect(0,0,e,e,u).transform({scale:[1,-1],translate:[e/2,-s+e/2],rotate:[-30,0,0]});break;case 19:this.svg.rect(0,0,e,e,u).transform({scale:[-1,-1],translate:[-i+e/2,-s+e/2],rotate:[-30,0,0]});break}};(function(e){var t=Ro.exports;function n(a){return function(i,s){return typeof i=="object"&&(s=i,i=null),i==null&&(i=new Date().toString()),s||(s={}),a.call(this,i,s)}}var r=To.exports={generate:n(function(a,i){return new t(a,i)})};e&&(e.fn.geopattern=n(function(a,i){return this.each(function(){var s=e(this).attr("data-title-sha");s&&(i=e.extend({hash:s},i));var o=r.generate(a,i);e(this).css("background-image",o.toDataUrl())})}))})(typeof jQuery!="undefined"?jQuery:null);var vh=To.exports;const bh={name:"InfoCard",props:["title","logo"],data(){return{test:"ABC",isVisible:!1}},mounted:function(){this.isVisible=!0},computed:{backgroundImageGenerated(){var e=vh.generate(Math.random().toString());return{"background-image":e.toDataUrl()}}}},yh={class:"info-card-content"},wh={class:"info-card-logo-background"},kh={class:"info-card-logo shadow"},_h={class:"info-card-title"};function xh(e,t,n,r,a,i){return ri((ut(),Ht("div",{class:"info-card",style:jn(a.isVisible&&i.backgroundImageGenerated)},[Ve("div",yh,[ri(Ve("div",wh,[Ve("div",kh,[Ve("i",{class:rn([n.logo,"logoFA"])},null,2)])],512),[[yi,a.isVisible]]),Ve("div",_h,bn(n.title),1)])],4)),[[yi,a.isVisible]])}var Sh=kr(bh,[["render",xh],["__scopeId","data-v-36cf7630"]]);const Ch={};var Ph=[{data:{key:"v-6d34f632",path:"/contact.html",title:"Contact",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1646678075e3},filePathRelative:"contact.md"},key:"v-6d34f632",path:"/contact.html",title:"Contact",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],content:`# Contact\r
\r
[Facebook](https://www.facebook.com/sam.lefebvre.42)\r
\r
[LinkedIn](https://www.linkedin.com/in/samuellefebvre/)\r
\r
[Twitter](https://twitter.com/SamLefebvre)\r
\r
[GitHub](https://github.com/SamLefebvre/)`,contentRendered:`<h1 id="contact" tabindex="-1"><a class="header-anchor" href="#contact" aria-hidden="true">#</a> Contact</h1>
<p><a href="https://www.facebook.com/sam.lefebvre.42" target="_blank" rel="noopener noreferrer">Facebook<ExternalLinkIcon/></a></p>
<p><a href="https://www.linkedin.com/in/samuellefebvre/" target="_blank" rel="noopener noreferrer">LinkedIn<ExternalLinkIcon/></a></p>
<p><a href="https://twitter.com/SamLefebvre" target="_blank" rel="noopener noreferrer">Twitter<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/SamLefebvre/" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/contact.html",pathLocale:"/",permalink:null,routeMeta:{title:"Contact"},slug:"contact",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/contact.md",filePathRelative:"contact.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/contact.html.vue",componentFilePathRelative:"pages/contact.html.vue",componentFileChunkName:"v-6d34f632",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/contact.html.js",dataFilePathRelative:"pages/contact.html.js",dataFileChunkName:"v-6d34f632",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/contact.html",htmlFilePathRelative:"contact.html"},{data:{key:"v-450624d4",path:"/interest.html",title:"Int\xE9r\xEAts",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"Unity",slug:"unity",children:[]},{level:2,title:"Graphisme",slug:"graphisme",children:[]},{level:2,title:"Biotechnologie",slug:"biotechnologie",children:[]},{level:2,title:"Web",slug:"web",children:[]},{level:2,title:"Apprentissage Machine",slug:"apprentissage-machine",children:[]}],git:{updatedTime:157589519e4},filePathRelative:"interest.md"},key:"v-450624d4",path:"/interest.html",title:"Int\xE9r\xEAts",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"Unity",slug:"unity",children:[]},{level:2,title:"Graphisme",slug:"graphisme",children:[]},{level:2,title:"Biotechnologie",slug:"biotechnologie",children:[]},{level:2,title:"Web",slug:"web",children:[]},{level:2,title:"Apprentissage Machine",slug:"apprentissage-machine",children:[]}],content:`# Int\xE9r\xEAts\r
\r
## Unity\r
J'ai commenc\xE9 \xE0 travailler avec Unity il y a seulement quelques mois, j'adore.\r
\r
Ce n'est pas seulement le concept Unity == jeux vid\xE9o, mais plut\xF4t la possibilit\xE9 d'immersion qu'un moteur de jeu permet de donner \xE0 l'utilisateur.\r
\r
Voici quelques points dont j'aimerais explorer :\r
\r
- Visiter un lieu r\xE9el ou imaginaire sans se d\xE9placer\r
- Se familiariser avec des lieux hostiles avant une intervention\r
- G\xE9n\xE9ration proc\xE9durale de texture, de b\xE2timents, de terrains\r
\r
## Graphisme\r
Ayant commenc\xE9 avec de la photographie 35mm et du d\xE9veloppement des films dans une chambre noire, mon int\xE9r\xEAt pour la photo et l'imagerie a commenc\xE9 t\xF4t.\r
\r
De la photographie argentique \xE0 num\xE9rique, mon int\xE9r\xEAt s'est tourn\xE9 vers les diff\xE9rentes fa\xE7ons de produire des images de fa\xE7ons num\xE9riques.\r
\r
## Biotechnologie\r
\r
Selon Aristote, un humain aurait cinq sens : la vue, l'odorat, le go\xFBt, l'ou\xEFe et le toucher.\r
\r
Plusieurs autres sens ont depuis \xE9t\xE9 trouv\xE9s : Proprioception (connaissance de la position des membres du corps), thermoception (temp\xE9rature), nociception (douleur) etc.\r
\r
L'\xE9tude des sens est fascinant, lorsqu'on touche \xE0 un bouton, une multitude d'actions se font de fa\xE7on simultan\xE9e, envoie de signaux \xE9lectriques aux muscles, r\xE9ception tactile et interpr\xE9tation du signal de retour. Tout cela en quelques millisecondes.\r
\r
Il s'agit d'une action tr\xE8s banale, qui ne demande presque aucun effort pour la majorit\xE9 des gens, mais qu'arrive-t-il si les nerfs sont sectionn\xE9s ?\r
\r
La capture des diff\xE9rents signaux \xE9lectriques du corps soit du cerveau (\xE9lectroenc\xE9phalographie (EEG)) ou musculaire (\xE9lectromyographie (EMG)) peut se faire avec des appareils co\xFBtant de moins en moins cher.\r
\r
L'\xE9tude et la compr\xE9hension de ces signaux sont un domaine fascinant.\r
\r
## Web\r
D\xE9velopper un site internet en HTML avec Notepad ? Magnifique pour '92 :sweat_smile:\r
\r
Aujourd'hui, si l'on veut une page web qui ne soit pas broche \xE0 foin, une plus grande pr\xE9paration est requise.\r
\r
Front-end, back-end et BD demandent une expertise particuli\xE8re.\r
\r
React, Angular ou Vue.js ? .NET, Java ou Python ? \xC7a d\xE9pend.\r
\r
Ai-je besoin d'une base de donn\xE9es Oracle pour un site web avec des photos de chats ?\r
*Probablement pas.*\r
Ai-je besoin d'une base de donn\xE9es Oracle pour un site web **vendant des millions** de photos de chats par jour ?\r
*Probablement !*\r
\r
Chaque probl\xE8me demande une solution personnalis\xE9e.\r
\r
L'internet \xE9volue jour apr\xE8s jour, diff\xE9rentes technologies voient le jour et sont abandonn\xE9es.\r
\r
Il faut se garder \xE0 jour de fa\xE7on constante et avoir soif de nouvelles connaissances.\r
\r
## Apprentissage Machine\r
\r
Un mot tr\xE8s tendance en ce moment. Qu'est-ce que c'est en r\xE9alit\xE9 ? Des math\xE9matiques.\r
Apprendre \xE0 apprendre, ou comment expliquer \xE0 la machine de trouver elle-m\xEAme les param\xE8tres recherch\xE9s ?\r
\r
\`\`\`\r
SI conditions ALORS actions\r
\`\`\`\r
Il s'agit ici du principe de base de la programmation, mais que faire si les conditions sont impr\xE9cises ?\r
\r
Si les conditions peuvent changer \xE0 tout moment (prochaine action d'un joueur dans un jeu vid\xE9o) ?\r
Si l'interpr\xE9tation de [signaux \xE9lectriques](#biotechnologie) demande un champ d'expertise et des ann\xE9es d'\xE9tudes ?\r
\r
L'apprentissage machine !\r
\r
Il s'agit d'une discipline permettant \xE9norm\xE9ment de possibilit\xE9s.`,contentRendered:`<h1 id="interets" tabindex="-1"><a class="header-anchor" href="#interets" aria-hidden="true">#</a> Int\xE9r\xEAts</h1>
<h2 id="unity" tabindex="-1"><a class="header-anchor" href="#unity" aria-hidden="true">#</a> Unity</h2>
<p>J'ai commenc\xE9 \xE0 travailler avec Unity il y a seulement quelques mois, j'adore.</p>
<p>Ce n'est pas seulement le concept Unity == jeux vid\xE9o, mais plut\xF4t la possibilit\xE9 d'immersion qu'un moteur de jeu permet de donner \xE0 l'utilisateur.</p>
<p>Voici quelques points dont j'aimerais explorer :</p>
<ul>
<li>Visiter un lieu r\xE9el ou imaginaire sans se d\xE9placer</li>
<li>Se familiariser avec des lieux hostiles avant une intervention</li>
<li>G\xE9n\xE9ration proc\xE9durale de texture, de b\xE2timents, de terrains</li>
</ul>
<h2 id="graphisme" tabindex="-1"><a class="header-anchor" href="#graphisme" aria-hidden="true">#</a> Graphisme</h2>
<p>Ayant commenc\xE9 avec de la photographie 35mm et du d\xE9veloppement des films dans une chambre noire, mon int\xE9r\xEAt pour la photo et l'imagerie a commenc\xE9 t\xF4t.</p>
<p>De la photographie argentique \xE0 num\xE9rique, mon int\xE9r\xEAt s'est tourn\xE9 vers les diff\xE9rentes fa\xE7ons de produire des images de fa\xE7ons num\xE9riques.</p>
<h2 id="biotechnologie" tabindex="-1"><a class="header-anchor" href="#biotechnologie" aria-hidden="true">#</a> Biotechnologie</h2>
<p>Selon Aristote, un humain aurait cinq sens : la vue, l'odorat, le go\xFBt, l'ou\xEFe et le toucher.</p>
<p>Plusieurs autres sens ont depuis \xE9t\xE9 trouv\xE9s : Proprioception (connaissance de la position des membres du corps), thermoception (temp\xE9rature), nociception (douleur) etc.</p>
<p>L'\xE9tude des sens est fascinant, lorsqu'on touche \xE0 un bouton, une multitude d'actions se font de fa\xE7on simultan\xE9e, envoie de signaux \xE9lectriques aux muscles, r\xE9ception tactile et interpr\xE9tation du signal de retour. Tout cela en quelques millisecondes.</p>
<p>Il s'agit d'une action tr\xE8s banale, qui ne demande presque aucun effort pour la majorit\xE9 des gens, mais qu'arrive-t-il si les nerfs sont sectionn\xE9s ?</p>
<p>La capture des diff\xE9rents signaux \xE9lectriques du corps soit du cerveau (\xE9lectroenc\xE9phalographie (EEG)) ou musculaire (\xE9lectromyographie (EMG)) peut se faire avec des appareils co\xFBtant de moins en moins cher.</p>
<p>L'\xE9tude et la compr\xE9hension de ces signaux sont un domaine fascinant.</p>
<h2 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> Web</h2>
<p>D\xE9velopper un site internet en HTML avec Notepad ? Magnifique pour '92 \u{1F605}</p>
<p>Aujourd'hui, si l'on veut une page web qui ne soit pas broche \xE0 foin, une plus grande pr\xE9paration est requise.</p>
<p>Front-end, back-end et BD demandent une expertise particuli\xE8re.</p>
<p>React, Angular ou Vue.js ? .NET, Java ou Python ? \xC7a d\xE9pend.</p>
<p>Ai-je besoin d'une base de donn\xE9es Oracle pour un site web avec des photos de chats ?
<em>Probablement pas.</em>
Ai-je besoin d'une base de donn\xE9es Oracle pour un site web <strong>vendant des millions</strong> de photos de chats par jour ?
<em>Probablement !</em></p>
<p>Chaque probl\xE8me demande une solution personnalis\xE9e.</p>
<p>L'internet \xE9volue jour apr\xE8s jour, diff\xE9rentes technologies voient le jour et sont abandonn\xE9es.</p>
<p>Il faut se garder \xE0 jour de fa\xE7on constante et avoir soif de nouvelles connaissances.</p>
<h2 id="apprentissage-machine" tabindex="-1"><a class="header-anchor" href="#apprentissage-machine" aria-hidden="true">#</a> Apprentissage Machine</h2>
<p>Un mot tr\xE8s tendance en ce moment. Qu'est-ce que c'est en r\xE9alit\xE9 ? Des math\xE9matiques.
Apprendre \xE0 apprendre, ou comment expliquer \xE0 la machine de trouver elle-m\xEAme les param\xE8tres recherch\xE9s ?</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SI conditions ALORS actions
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Il s'agit ici du principe de base de la programmation, mais que faire si les conditions sont impr\xE9cises ?</p>
<p>Si les conditions peuvent changer \xE0 tout moment (prochaine action d'un joueur dans un jeu vid\xE9o) ?
Si l'interpr\xE9tation de <a href="#biotechnologie">signaux \xE9lectriques</a> demande un champ d'expertise et des ann\xE9es d'\xE9tudes ?</p>
<p>L'apprentissage machine !</p>
<p>Il s'agit d'une discipline permettant \xE9norm\xE9ment de possibilit\xE9s.</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/interest.html",pathLocale:"/",permalink:null,routeMeta:{title:"Int\xE9r\xEAts"},slug:"interest",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/interest.md",filePathRelative:"interest.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/interest.html.vue",componentFilePathRelative:"pages/interest.html.vue",componentFileChunkName:"v-450624d4",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/interest.html.js",dataFilePathRelative:"pages/interest.html.js",dataFileChunkName:"v-450624d4",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/interest.html",htmlFilePathRelative:"interest.html"},{data:{key:"v-8daa1a0e",path:"/",title:"",lang:"fr-CA",frontmatter:{title:null,subtitle:null,heroText:null,tagline:null,sidebar:!1,search:!1,next:!1,home:!0},excerpt:"",headers:[],git:{updatedTime:1645312652e3},filePathRelative:"README.md"},key:"v-8daa1a0e",path:"/",title:"",lang:"fr-CA",frontmatter:{title:null,subtitle:null,heroText:null,tagline:null,sidebar:!1,search:!1,next:!1,home:!0},excerpt:"",headers:[],content:`<githubcorner />\r
\r
<div class="flex-container">\r
  <div><RouterLink to="/portfolio/"><InfoCard title="Portfolio" logo="fa-solid fa-suitcase"/></RouterLink></div>\r
  <div><RouterLink to="/portfolio/unity" class="home-link"><InfoCard title="Unity" logo="fa-brands fa-unity"/></RouterLink></div>\r
\r
  <div><a href="https://www.youtube.com/channel/UC2AOsupmlTndL6QfAEKwrkA" target="_blank"><InfoCard title="YouTube" logo="fa-brands fa-youtube"/></a></div>\r
  \r
  <div><RouterLink to="/projects" class="home-link"><InfoCard title="Projets" logo="fa-solid fa-screwdriver-wrench"/></RouterLink></div>\r
\r
  <div><RouterLink to="/research.html" class="home-link"><InfoCard title="Recherche" logo="fa-solid fa-user-graduate"/></RouterLink></div>\r
  \r
  <div><RouterLink to="/tutorials" class="home-link"><InfoCard title="Tutoriels" logo="fa-solid fa-book-open"/></RouterLink></div>\r
\r
  <div><a href="https://github.com/SamLefebvre" target="_blank"><InfoCard title="GitHub" logo="fab fa-github"/></a></div>\r
\r
  <div><RouterLink to="/contact.html" class="home-link"><InfoCard title="Contact" logo="fa-solid fa-address-card"/></RouterLink></div>\r
  \r
  <div><a href="https://www.linkedin.com/in/samuellefebvre/" target="_blank"><InfoCard title="LinkedIn" logo="fa-brands fa-linkedin"/></a></div>\r
\r
</div>`,contentRendered:`<githubcorner />
<div class="flex-container">
  <div><RouterLink to="/portfolio/"><InfoCard title="Portfolio" logo="fa-solid fa-suitcase"/></RouterLink></div>
  <div><RouterLink to="/portfolio/unity" class="home-link"><InfoCard title="Unity" logo="fa-brands fa-unity"/></RouterLink></div>
  <div><a href="https://www.youtube.com/channel/UC2AOsupmlTndL6QfAEKwrkA" target="_blank"><InfoCard title="YouTube" logo="fa-brands fa-youtube"/></a></div>
  <div><RouterLink to="/projects" class="home-link"><InfoCard title="Projets" logo="fa-solid fa-screwdriver-wrench"/></RouterLink></div>
  <div><RouterLink to="/research.html" class="home-link"><InfoCard title="Recherche" logo="fa-solid fa-user-graduate"/></RouterLink></div>
  <div><RouterLink to="/tutorials" class="home-link"><InfoCard title="Tutoriels" logo="fa-solid fa-book-open"/></RouterLink></div>
  <div><a href="https://github.com/SamLefebvre" target="_blank"><InfoCard title="GitHub" logo="fab fa-github"/></a></div>
  <div><RouterLink to="/contact.html" class="home-link"><InfoCard title="Contact" logo="fa-solid fa-address-card"/></RouterLink></div>
  <div><a href="https://www.linkedin.com/in/samuellefebvre/" target="_blank"><InfoCard title="LinkedIn" logo="fa-brands fa-linkedin"/></a></div>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/",pathLocale:"/",permalink:null,routeMeta:{title:""},slug:"README",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/README.md",filePathRelative:"README.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/index.html.vue",componentFilePathRelative:"pages/index.html.vue",componentFileChunkName:"v-8daa1a0e",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/index.html.js",dataFilePathRelative:"pages/index.html.js",dataFileChunkName:"v-8daa1a0e",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/index.html",htmlFilePathRelative:"index.html"},{data:{key:"v-70fab1c5",path:"/research.html",title:"Recherche",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1646678075e3},filePathRelative:"research.md"},key:"v-70fab1c5",path:"/research.html",title:"Recherche",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],content:`# Recherche\r
\r
Ma recherche porte sur le domaine de la visualisation d'information en r\xE9alit\xE9 virtuelle, lors d'une manipulation \xE0 mains nues.\r
\r
Plus de d\xE9tails \xE0 venir.`,contentRendered:`<h1 id="recherche" tabindex="-1"><a class="header-anchor" href="#recherche" aria-hidden="true">#</a> Recherche</h1>
<p>Ma recherche porte sur le domaine de la visualisation d'information en r\xE9alit\xE9 virtuelle, lors d'une manipulation \xE0 mains nues.</p>
<p>Plus de d\xE9tails \xE0 venir.</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/research.html",pathLocale:"/",permalink:null,routeMeta:{title:"Recherche"},slug:"research",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/research.md",filePathRelative:"research.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/research.html.vue",componentFilePathRelative:"pages/research.html.vue",componentFileChunkName:"v-70fab1c5",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/research.html.js",dataFilePathRelative:"pages/research.html.js",dataFileChunkName:"v-70fab1c5",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/research.html",htmlFilePathRelative:"research.html"},{data:{key:"v-79e3c216",path:"/article/markdownDemo.html",title:"Markdown Demo",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"h2 Heading",slug:"h2-heading",children:[{level:3,title:"h3 Heading",slug:"h3-heading",children:[]}]},{level:2,title:"Horizontal Rules",slug:"horizontal-rules",children:[]},{level:2,title:"Typographic replacements",slug:"typographic-replacements",children:[]},{level:2,title:"Emphasis",slug:"emphasis",children:[]},{level:2,title:"Blockquotes",slug:"blockquotes",children:[]},{level:2,title:"Lists",slug:"lists",children:[]},{level:2,title:"Code",slug:"code",children:[]},{level:2,title:"Tables",slug:"tables",children:[]},{level:2,title:"Links",slug:"links",children:[]},{level:2,title:"Images",slug:"images",children:[]}],git:{updatedTime:1555550401e3},filePathRelative:"article/markdownDemo.md"},key:"v-79e3c216",path:"/article/markdownDemo.html",title:"Markdown Demo",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"h2 Heading",slug:"h2-heading",children:[{level:3,title:"h3 Heading",slug:"h3-heading",children:[]}]},{level:2,title:"Horizontal Rules",slug:"horizontal-rules",children:[]},{level:2,title:"Typographic replacements",slug:"typographic-replacements",children:[]},{level:2,title:"Emphasis",slug:"emphasis",children:[]},{level:2,title:"Blockquotes",slug:"blockquotes",children:[]},{level:2,title:"Lists",slug:"lists",children:[]},{level:2,title:"Code",slug:"code",children:[]},{level:2,title:"Tables",slug:"tables",children:[]},{level:2,title:"Links",slug:"links",children:[]},{level:2,title:"Images",slug:"images",children:[]}],content:`# Markdown Demo\r
\r
+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`\r
+ Sub-lists are made by indenting 2 spaces:\r
  - Marker character change forces new list start:\r
    * Ac tristique libero volutpat at\r
    + Facilisis in pretium nisl aliquet\r
    - Nulla volutpat aliquam velit\r
+ Very easy!\r
\r
\`\`\` js\r
var foo = function (bar) {\r
  return bar++;\r
};\r
\r
console.log(foo(5));\r
\`\`\`\r
\r
\r
# h1 Heading 8-)\r
## h2 Heading\r
### h3 Heading\r
#### h4 Heading\r
##### h5 Heading\r
###### h6 Heading\r
\r
\r
## Horizontal Rules\r
\r
___\r
\r
---\r
\r
***\r
\r
\r
## Typographic replacements\r
\r
Enable typographer option to see result.\r
\r
(c) (C) (r) (R) (tm) (TM) (p) (P) +-\r
\r
test.. test... test..... test?..... test!....\r
\r
!!!!!! ???? ,,  -- ---\r
\r
"Smartypants, double quotes" and 'single quotes'\r
\r
\r
## Emphasis\r
\r
**This is bold text**\r
\r
__This is bold text__\r
\r
*This is italic text*\r
\r
_This is italic text_\r
\r
~~Strikethrough~~\r
\r
\r
## Blockquotes\r
\r
\r
> Blockquotes can also be nested...\r
>> ...by using additional greater-than signs right next to each other...\r
> > > ...or with spaces between arrows.\r
\r
\r
## Lists\r
\r
Unordered\r
\r
+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`\r
+ Sub-lists are made by indenting 2 spaces:\r
  - Marker character change forces new list start:\r
    * Ac tristique libero volutpat at\r
    + Facilisis in pretium nisl aliquet\r
    - Nulla volutpat aliquam velit\r
+ Very easy!\r
\r
Ordered\r
\r
1. Lorem ipsum dolor sit amet\r
2. Consectetur adipiscing elit\r
3. Integer molestie lorem at massa\r
\r
\r
1. You can use sequential numbers...\r
1. ...or keep all the numbers as \`1.\`\r
\r
Start numbering with offset:\r
\r
57. foo\r
1. bar\r
\r
\r
## Code\r
\r
Inline \`code\`\r
\r
Indented code\r
\r
    // Some comments\r
    line 1 of code\r
    line 2 of code\r
    line 3 of code\r
\r
\r
Block code "fences"\r
\r
\`\`\`\r
Sample text here...\r
\`\`\`\r
\r
Syntax highlighting\r
\r
\`\`\` js\r
var foo = function (bar) {\r
  return bar++;\r
};\r
\r
console.log(foo(5));\r
\`\`\`\r
\r
## Tables\r
\r
| Option | Description |\r
| ------ | ----------- |\r
| data   | path to data files to supply the data that will be passed into templates. |\r
| engine | engine to be used for processing templates. Handlebars is the default. |\r
| ext    | extension to be used for dest files. |\r
\r
Right aligned columns\r
\r
| Option | Description |\r
| ------:| -----------:|\r
| data   | path to data files to supply the data that will be passed into templates. |\r
| engine | engine to be used for processing templates. Handlebars is the default. |\r
| ext    | extension to be used for dest files. |\r
\r
\r
## Links\r
\r
[link text](http://dev.nodeca.com)\r
\r
[link with title](http://nodeca.github.io/pica/demo/ "title text!")\r
\r
Autoconverted link https://github.com/nodeca/pica (enable linkify to see)\r
\r
\r
## Images\r
\r
![Minion](https://octodex.github.com/images/minion.png)\r
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\r
\r
Like links, Images also have a footnote style syntax\r
\r
![Alt text][id]\r
\r
With a reference later in the document defining the URL location:\r
\r
[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"`,contentRendered:`<h1 id="markdown-demo" tabindex="-1"><a class="header-anchor" href="#markdown-demo" aria-hidden="true">#</a> Markdown Demo</h1>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:
<ul>
<li>Marker character change forces new list start:
<ul>
<li>Ac tristique libero volutpat at</li>
</ul>
<ul>
<li>Facilisis in pretium nisl aliquet</li>
</ul>
<ul>
<li>Nulla volutpat aliquam velit</li>
</ul>
</li>
</ul>
</li>
<li>Very easy!</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="h1-heading" tabindex="-1"><a class="header-anchor" href="#h1-heading" aria-hidden="true">#</a> h1 Heading \u{1F60E}</h1>
<h2 id="h2-heading" tabindex="-1"><a class="header-anchor" href="#h2-heading" aria-hidden="true">#</a> h2 Heading</h2>
<h3 id="h3-heading" tabindex="-1"><a class="header-anchor" href="#h3-heading" aria-hidden="true">#</a> h3 Heading</h3>
<h4 id="h4-heading" tabindex="-1"><a class="header-anchor" href="#h4-heading" aria-hidden="true">#</a> h4 Heading</h4>
<h5 id="h5-heading" tabindex="-1"><a class="header-anchor" href="#h5-heading" aria-hidden="true">#</a> h5 Heading</h5>
<h6 id="h6-heading" tabindex="-1"><a class="header-anchor" href="#h6-heading" aria-hidden="true">#</a> h6 Heading</h6>
<h2 id="horizontal-rules" tabindex="-1"><a class="header-anchor" href="#horizontal-rules" aria-hidden="true">#</a> Horizontal Rules</h2>
<hr>
<hr>
<hr>
<h2 id="typographic-replacements" tabindex="-1"><a class="header-anchor" href="#typographic-replacements" aria-hidden="true">#</a> Typographic replacements</h2>
<p>Enable typographer option to see result.</p>
<p>(c) (C) (r) (R) (tm) (TM) (p) (P) +-</p>
<p>test.. test... test..... test?..... test!....</p>
<p>!!!!!! ???? ,,  -- ---</p>
<p>&quot;Smartypants, double quotes&quot; and 'single quotes'</p>
<h2 id="emphasis" tabindex="-1"><a class="header-anchor" href="#emphasis" aria-hidden="true">#</a> Emphasis</h2>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><em>This is italic text</em></p>
<p><s>Strikethrough</s></p>
<h2 id="blockquotes" tabindex="-1"><a class="header-anchor" href="#blockquotes" aria-hidden="true">#</a> Blockquotes</h2>
<blockquote>
<p>Blockquotes can also be nested...</p>
<blockquote>
<p>...by using additional greater-than signs right next to each other...</p>
<blockquote>
<p>...or with spaces between arrows.</p>
</blockquote>
</blockquote>
</blockquote>
<h2 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists</h2>
<p>Unordered</p>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:
<ul>
<li>Marker character change forces new list start:
<ul>
<li>Ac tristique libero volutpat at</li>
</ul>
<ul>
<li>Facilisis in pretium nisl aliquet</li>
</ul>
<ul>
<li>Nulla volutpat aliquam velit</li>
</ul>
</li>
</ul>
</li>
<li>Very easy!</li>
</ul>
<p>Ordered</p>
<ol>
<li>
<p>Lorem ipsum dolor sit amet</p>
</li>
<li>
<p>Consectetur adipiscing elit</p>
</li>
<li>
<p>Integer molestie lorem at massa</p>
</li>
<li>
<p>You can use sequential numbers...</p>
</li>
<li>
<p>...or keep all the numbers as <code>1.</code></p>
</li>
</ol>
<p>Start numbering with offset:</p>
<ol start="57">
<li>foo</li>
<li>bar</li>
</ol>
<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>
<p>Inline <code>code</code></p>
<p>Indented code</p>
<pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code
</code></pre>
<p>Block code &quot;fences&quot;</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Sample text here...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Syntax highlighting</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td>engine</td>
<td>engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td>ext</td>
<td>extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<p>Right aligned columns</p>
<table>
<thead>
<tr>
<th style="text-align:right">Option</th>
<th style="text-align:right">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">data</td>
<td style="text-align:right">path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td style="text-align:right">engine</td>
<td style="text-align:right">engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td style="text-align:right">ext</td>
<td style="text-align:right">extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h2>
<p><a href="http://dev.nodeca.com" target="_blank" rel="noopener noreferrer">link text<ExternalLinkIcon/></a></p>
<p><a href="http://nodeca.github.io/pica/demo/" title="title text!" target="_blank" rel="noopener noreferrer">link with title<ExternalLinkIcon/></a></p>
<p>Autoconverted link https://github.com/nodeca/pica (enable linkify to see)</p>
<h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2>
<p><img src="https://octodex.github.com/images/minion.png" alt="Minion">
<img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p>
<p>Like links, Images also have a footnote style syntax</p>
<p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p>
<p>With a reference later in the document defining the URL location:</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/article/markdownDemo.html",pathLocale:"/",permalink:null,routeMeta:{title:"Markdown Demo"},slug:"markdownDemo",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/article/markdownDemo.md",filePathRelative:"article/markdownDemo.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/article/markdownDemo.html.vue",componentFilePathRelative:"pages/article/markdownDemo.html.vue",componentFileChunkName:"v-79e3c216",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/article/markdownDemo.html.js",dataFilePathRelative:"pages/article/markdownDemo.html.js",dataFileChunkName:"v-79e3c216",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/article/markdownDemo.html",htmlFilePathRelative:"article/markdownDemo.html"},{data:{key:"v-770aa52f",path:"/article/radarChart.html",title:"Radar chart",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1594517878e3},filePathRelative:"article/radarChart.md"},key:"v-770aa52f",path:"/article/radarChart.html",title:"Radar chart",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],content:`# Radar chart\r
\r
Il existe plusieurs m\xE9thodes pour repr\xE9senter l'information, des chiffres, des tableaux, des diagrammes.\r
\r
Une forme de diagramme qui est souvent peu utilis\xE9 est le <abbr title="Aussi connu sous le nom \xABdiagramme en radar\xBB">diagramme de Kiviat</abbr>, qui repr\xE9sente sous la forme de pointe de tarte diff\xE9rentes informations.\r
\r
Dans cet article, je d\xE9crirai les m\xE9thodes pour r\xE9aliser un graphiques tels que celui-ci.\r
\r
![radar](./img/radarChart_final.png)\r
\r
\r
Le graphique est fait en utilisant la librairie [matplotlib](https://matplotlib.org/), qui permets la visualisation de graphiques \xE0 l'aide de Python.\r
\r
\r
\r
Pour les donn\xE9es, prennons ce tableau repr\xE9sentant la pr\xE9f\xE9rence de 9 fruits de 3 diff\xE9rentes personnes.\r
\r
|           	| Luci 	| Scott 	| Mark 	|\r
|-----------	|------:|-------:	|------:|\r
| Pomme     	| 4.5  	| 4.85  	| 2    	|\r
| Orange    	| 4.5  	| 3.4   	| 4.5  	|\r
| Banane    	| 1.8  	| 1.6   	| 2    	|\r
| Kiwi      	| 3.8  	| 4     	| 3    	|\r
| Mandarine 	| 4.8  	| 2.6   	| 2.5  	|\r
| Melon     	| 4    	| 3.8   	| 3    	|\r
| Poire     	| 1.7  	| 2.5   	| 4    	|\r
| Fraise    	| 2    	| 3.5   	| 3    	|\r
| Framboise 	| 4.9  	| 3.8   	| 5    	|\r
\r
Pour garder les donn\xE9es en m\xE9moire, l'un des formats recommand\xE9 est l'utilisation de dataframe, un \xE9l\xE9ment de la librairie [pandas](https://pandas.pydata.org/).\r
\r
\`\`\`python\r
import matplotlib.pyplot as plt\r
import pandas as pd\r
from math import pi\r
\r
# Mise en place des donn\xE9es\r
df = pd.DataFrame({\r
'groupe': ['Luci','Scott','Mark'],\r
'Pomme' : [4.5,4.85,2],\r
'Orange': [4.5,3.4,5],\r
'Banane': [1.8,1.6,2],\r
'Kiwi':   [3.8,4,3],\r
'Ananas': [4.8,2.6,2.5],\r
'Melon':  [4,3.8,3],\r
'Poire':  [1.7,2.5,4],\r
'Fraise': [2,3.5,3],\r
'Datte':  [4.9,3.8,5]\r
})\r
\`\`\`\r
\r
En effectuant un \`print(df)\`, nous avons le r\xE9sultat des donn\xE9es en m\xE9moire.\r
\r
\`\`\`\r
  groupe  Pomme  Orange  Banane  Kiwi  Ananas  Melon  Poire  Fraise  Datte\r
0   Luci   4.50     4.5     1.8   3.8     4.8    4.0    1.7     2.0    4.9\r
1  Scott   4.85     3.4     1.6   4.0     2.6    3.8    2.5     3.5    3.8\r
2   Mark   2.00     5.0     2.0   3.0     2.5    3.0    4.0     3.0    5.0\r
\`\`\`\r
\r
::: warning Section en progression\r
Article en cours d'\xE9criture.\r
:::`,contentRendered:`<h1 id="radar-chart" tabindex="-1"><a class="header-anchor" href="#radar-chart" aria-hidden="true">#</a> Radar chart</h1>
<p>Il existe plusieurs m\xE9thodes pour repr\xE9senter l'information, des chiffres, des tableaux, des diagrammes.</p>
<p>Une forme de diagramme qui est souvent peu utilis\xE9 est le <abbr title="Aussi connu sous le nom \xABdiagramme en radar\xBB">diagramme de Kiviat</abbr>, qui repr\xE9sente sous la forme de pointe de tarte diff\xE9rentes informations.</p>
<p>Dans cet article, je d\xE9crirai les m\xE9thodes pour r\xE9aliser un graphiques tels que celui-ci.</p>
<p><img src="@source/article/img/radarChart_final.png" alt="radar"></p>
<p>Le graphique est fait en utilisant la librairie <a href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer">matplotlib<ExternalLinkIcon/></a>, qui permets la visualisation de graphiques \xE0 l'aide de Python.</p>
<p>Pour les donn\xE9es, prennons ce tableau repr\xE9sentant la pr\xE9f\xE9rence de 9 fruits de 3 diff\xE9rentes personnes.</p>
<table>
<thead>
<tr>
<th></th>
<th style="text-align:right">Luci</th>
<th style="text-align:right">Scott</th>
<th style="text-align:right">Mark</th>
</tr>
</thead>
<tbody>
<tr>
<td>Pomme</td>
<td style="text-align:right">4.5</td>
<td style="text-align:right">4.85</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>Orange</td>
<td style="text-align:right">4.5</td>
<td style="text-align:right">3.4</td>
<td style="text-align:right">4.5</td>
</tr>
<tr>
<td>Banane</td>
<td style="text-align:right">1.8</td>
<td style="text-align:right">1.6</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>Kiwi</td>
<td style="text-align:right">3.8</td>
<td style="text-align:right">4</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>Mandarine</td>
<td style="text-align:right">4.8</td>
<td style="text-align:right">2.6</td>
<td style="text-align:right">2.5</td>
</tr>
<tr>
<td>Melon</td>
<td style="text-align:right">4</td>
<td style="text-align:right">3.8</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>Poire</td>
<td style="text-align:right">1.7</td>
<td style="text-align:right">2.5</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td>Fraise</td>
<td style="text-align:right">2</td>
<td style="text-align:right">3.5</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>Framboise</td>
<td style="text-align:right">4.9</td>
<td style="text-align:right">3.8</td>
<td style="text-align:right">5</td>
</tr>
</tbody>
</table>
<p>Pour garder les donn\xE9es en m\xE9moire, l'un des formats recommand\xE9 est l'utilisation de dataframe, un \xE9l\xE9ment de la librairie <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">pandas<ExternalLinkIcon/></a>.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> math <span class="token keyword">import</span> pi

<span class="token comment"># Mise en place des donn\xE9es</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token string">'groupe'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'Luci'</span><span class="token punctuation">,</span><span class="token string">'Scott'</span><span class="token punctuation">,</span><span class="token string">'Mark'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Pomme'</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4.5</span><span class="token punctuation">,</span><span class="token number">4.85</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Orange'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4.5</span><span class="token punctuation">,</span><span class="token number">3.4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Banane'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1.8</span><span class="token punctuation">,</span><span class="token number">1.6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Kiwi'</span><span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token number">3.8</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Ananas'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4.8</span><span class="token punctuation">,</span><span class="token number">2.6</span><span class="token punctuation">,</span><span class="token number">2.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Melon'</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3.8</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Poire'</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token number">1.7</span><span class="token punctuation">,</span><span class="token number">2.5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Fraise'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3.5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'Datte'</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token number">4.9</span><span class="token punctuation">,</span><span class="token number">3.8</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>En effectuant un <code>print(df)</code>, nous avons le r\xE9sultat des donn\xE9es en m\xE9moire.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  groupe  Pomme  Orange  Banane  Kiwi  Ananas  Melon  Poire  Fraise  Datte
0   Luci   4.50     4.5     1.8   3.8     4.8    4.0    1.7     2.0    4.9
1  Scott   4.85     3.4     1.6   4.0     2.6    3.8    2.5     3.5    3.8
2   Mark   2.00     5.0     2.0   3.0     2.5    3.0    4.0     3.0    5.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">Section en progression</p>
<p>Article en cours d'\xE9criture.</p>
</div>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/article/radarChart.html",pathLocale:"/",permalink:null,routeMeta:{title:"Radar chart"},slug:"radarChart",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/article/radarChart.md",filePathRelative:"article/radarChart.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/article/radarChart.html.vue",componentFilePathRelative:"pages/article/radarChart.html.vue",componentFileChunkName:"v-770aa52f",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/article/radarChart.html.js",dataFilePathRelative:"pages/article/radarChart.html.js",dataFileChunkName:"v-770aa52f",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/article/radarChart.html",htmlFilePathRelative:"article/radarChart.html"},{data:{key:"v-e52c881c",path:"/article/",title:"Article",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1555550401e3},filePathRelative:"article/README.md"},key:"v-e52c881c",path:"/article/",title:"Article",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],content:`\r
# Article\r
\r
<i class="far fa-file-alt fa-4x"></i>`,contentRendered:`<h1 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> Article</h1>
<p><i class="far fa-file-alt fa-4x"></i></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/article/",pathLocale:"/",permalink:null,routeMeta:{title:"Article"},slug:"README",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/article/README.md",filePathRelative:"article/README.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/article/index.html.vue",componentFilePathRelative:"pages/article/index.html.vue",componentFileChunkName:"v-e52c881c",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/article/index.html.js",dataFilePathRelative:"pages/article/index.html.js",dataFileChunkName:"v-e52c881c",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/article/index.html",htmlFilePathRelative:"article/index.html"},{data:{key:"v-2a825517",path:"/blog/article.html",title:"My first article",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"My first article",description:"Article datant du 2022-02-15 Duis imperdiet, nulla nec tincidunt auctor, libero nisl auctor lectus, imperdiet molestie diam purus ut augue. Cras faucibus eros quis dolor accumsan fermentum. Fusce id venenatis enim. Maecenas eget pulvinar neque. Etiam euismod, dui nec molestie dapibus, urna felis tristique velit,",author:"Sam",type:"blog",creationDate:"Janvier 2020",date:"2022-02-15T00:00:00.000Z",posterImage:"a.png"},excerpt:`<h1 id="article-1" tabindex="-1"><a class="header-anchor" href="#article-1" aria-hidden="true">#</a> Article 1</h1>
<p><strong>mon</strong> <em>premier</em> <s>article</s></p>
<p>Lorem ipsum dolor sit amet,</p>
`,headers:[],git:{updatedTime:1645312652e3},filePathRelative:"blog/article.md"},key:"v-2a825517",path:"/blog/article.html",title:"My first article",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"My first article",description:"Article datant du 2022-02-15 Duis imperdiet, nulla nec tincidunt auctor, libero nisl auctor lectus, imperdiet molestie diam purus ut augue. Cras faucibus eros quis dolor accumsan fermentum. Fusce id venenatis enim. Maecenas eget pulvinar neque. Etiam euismod, dui nec molestie dapibus, urna felis tristique velit,",author:"Sam",type:"blog",creationDate:"Janvier 2020",date:"2022-02-15T00:00:00.000Z",posterImage:"a.png"},excerpt:`<h1 id="article-1" tabindex="-1"><a class="header-anchor" href="#article-1" aria-hidden="true">#</a> Article 1</h1>
<p><strong>mon</strong> <em>premier</em> <s>article</s></p>
<p>Lorem ipsum dolor sit amet,</p>
`,headers:[],content:`# Article 1\r
\r
**mon** *premier* ~~article~~\r
\r
Lorem ipsum dolor sit amet, \r
<!-- more --> \r
consectetur adipiscing elit. *adipiscing* **elit** id turpis eu felis lobortis auctor luctus et risus. Etiam nec turpis posuere, viverra neque sed, ullamcorper augue.<!-- more --> Curabitur ut ligula vel nisi porttitor ullamcorper sed sed elit. Nam tristique nibh at porttitor ullamcorper. Sed euismod id odio quis imperdiet. Suspendisse maximus condimentum leo laoreet rhoncus. Donec condimentum dignissim justo, id venenatis ante mattis sit amet. Suspendisse lacinia, nisl nec pretium faucibus, quam purus ultrices enim, a sollicitudin dui justo quis orci. Curabitur elementum ligula ac laoreet convallis. Praesent dignissim ultricies magna, et congue metus elementum a.\r
\r
Duis imperdiet, nulla nec tincidunt auctor, libero nisl auctor lectus, imperdiet molestie diam purus ut augue. Cras faucibus eros quis dolor accumsan fermentum. Fusce id venenatis enim. Maecenas eget pulvinar neque. Etiam euismod, dui nec molestie dapibus, urna felis tristique velit, ac commodo sapien ante eget enim. Aenean at ante magna. Vivamus quis eros velit. Fusce tristique, arcu nec facilisis fermentum, purus ante tempus nisl, eget consectetur leo quam ut mi. Maecenas consequat elit quis sodales fermentum. Nullam sit amet augue id enim fringilla consectetur. In bibendum velit tellus.\r
\r
Mettre more pour excerpt\r
\r
{{ $page }}\r
\r
<div id="app">\r
  <template v-for="item in 15">\r
    <span>{{ item }}</span>\r
    <button>Count</button>\r
  </template>\r
</div>`,contentRendered:`<h1 id="article-1" tabindex="-1"><a class="header-anchor" href="#article-1" aria-hidden="true">#</a> Article 1</h1>
<p><strong>mon</strong> <em>premier</em> <s>article</s></p>
<p>Lorem ipsum dolor sit amet,</p>
<!-- more --> 
<p>consectetur adipiscing elit. <em>adipiscing</em> <strong>elit</strong> id turpis eu felis lobortis auctor luctus et risus. Etiam nec turpis posuere, viverra neque sed, ullamcorper augue.<!-- more --> Curabitur ut ligula vel nisi porttitor ullamcorper sed sed elit. Nam tristique nibh at porttitor ullamcorper. Sed euismod id odio quis imperdiet. Suspendisse maximus condimentum leo laoreet rhoncus. Donec condimentum dignissim justo, id venenatis ante mattis sit amet. Suspendisse lacinia, nisl nec pretium faucibus, quam purus ultrices enim, a sollicitudin dui justo quis orci. Curabitur elementum ligula ac laoreet convallis. Praesent dignissim ultricies magna, et congue metus elementum a.</p>
<p>Duis imperdiet, nulla nec tincidunt auctor, libero nisl auctor lectus, imperdiet molestie diam purus ut augue. Cras faucibus eros quis dolor accumsan fermentum. Fusce id venenatis enim. Maecenas eget pulvinar neque. Etiam euismod, dui nec molestie dapibus, urna felis tristique velit, ac commodo sapien ante eget enim. Aenean at ante magna. Vivamus quis eros velit. Fusce tristique, arcu nec facilisis fermentum, purus ante tempus nisl, eget consectetur leo quam ut mi. Maecenas consequat elit quis sodales fermentum. Nullam sit amet augue id enim fringilla consectetur. In bibendum velit tellus.</p>
<p>Mettre more pour excerpt</p>
<p>{{ $page }}</p>
<div id="app">
  <template v-for="item in 15">
    <span>{{ item }}</span>
    <button>Count</button>
  </template>
</div>`,date:"2022-02-15",deps:[],hoistedTags:[],links:[],pathInferred:"/blog/article.html",pathLocale:"/",permalink:null,routeMeta:{title:"My first article"},slug:"article",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/blog/article.md",filePathRelative:"blog/article.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/blog/article.html.vue",componentFilePathRelative:"pages/blog/article.html.vue",componentFileChunkName:"v-2a825517",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/blog/article.html.js",dataFilePathRelative:"pages/blog/article.html.js",dataFileChunkName:"v-2a825517",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/blog/article.html",htmlFilePathRelative:"blog/article.html"},{data:{key:"v-29650369",path:"/blog/article2.html",title:"My 2 article",lang:"en-US",frontmatter:{lang:"en-US",title:"My 2 article",description:"Basic intro to vuepress 2022-02-16",author:"Sam",type:"blog",date:"2022-02-16T00:00:00.000Z"},excerpt:`<p>mon 2 e article</p>
`,headers:[],git:{updatedTime:1645312652e3},filePathRelative:"blog/article2.md"},key:"v-29650369",path:"/blog/article2.html",title:"My 2 article",lang:"en-US",frontmatter:{lang:"en-US",title:"My 2 article",description:"Basic intro to vuepress 2022-02-16",author:"Sam",type:"blog",date:"2022-02-16T00:00:00.000Z"},excerpt:`<p>mon 2 e article</p>
`,headers:[],content:`\r
\r
\r
mon 2 e article\r
\r
<!-- more -->`,contentRendered:`<p>mon 2 e article</p>
<!-- more -->`,date:"2022-02-16",deps:[],hoistedTags:[],links:[],pathInferred:"/blog/article2.html",pathLocale:"/",permalink:null,routeMeta:{title:"My 2 article"},slug:"article2",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/blog/article2.md",filePathRelative:"blog/article2.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/blog/article2.html.vue",componentFilePathRelative:"pages/blog/article2.html.vue",componentFileChunkName:"v-29650369",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/blog/article2.html.js",dataFilePathRelative:"pages/blog/article2.html.js",dataFileChunkName:"v-29650369",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/blog/article2.html",htmlFilePathRelative:"blog/article2.html"},{data:{key:"v-2b19dc08",path:"/blog/article3.html",title:"My 3 article",lang:"fr-CA",frontmatter:{title:"My 3 article",description:"Basic intro to vuepress 2022-02-17",author:"Sam",type:"blog",date:"2022-02-17T00:00:00.000Z"},excerpt:"",headers:[],git:{updatedTime:1645312652e3},filePathRelative:"blog/article3.md"},key:"v-2b19dc08",path:"/blog/article3.html",title:"My 3 article",lang:"fr-CA",frontmatter:{title:"My 3 article",description:"Basic intro to vuepress 2022-02-17",author:"Sam",type:"blog",date:"2022-02-17T00:00:00.000Z"},excerpt:"",headers:[],content:`\r
\r
\r
mon 3 article a`,contentRendered:`<p>mon 3 article a</p>
`,date:"2022-02-17",deps:[],hoistedTags:[],links:[],pathInferred:"/blog/article3.html",pathLocale:"/",permalink:null,routeMeta:{title:"My 3 article"},slug:"article3",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/blog/article3.md",filePathRelative:"blog/article3.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/blog/article3.html.vue",componentFilePathRelative:"pages/blog/article3.html.vue",componentFileChunkName:"v-2b19dc08",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/blog/article3.html.js",dataFilePathRelative:"pages/blog/article3.html.js",dataFileChunkName:"v-2b19dc08",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/blog/article3.html",htmlFilePathRelative:"blog/article3.html"},{data:{key:"v-145ac574",path:"/blog/",title:"Blog listing",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Blog listing",description:"Basic intro to vuepress",author:"Sam"},excerpt:"",headers:[],git:{updatedTime:1645312652e3},filePathRelative:"blog/Readme.md"},key:"v-145ac574",path:"/blog/",title:"Blog listing",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Blog listing",description:"Basic intro to vuepress",author:"Sam"},excerpt:"",headers:[],content:`\r
# Blog\r
\r
Trois diff\xE9rents articles\r
\r
<posts />\r
\r
<!-- https://github.com/vuepress/vuepress-next/issues/505 -->\r
\r
<!-- {{ $page }} -->\r
\r
<!-- https://blog.logrocket.com/how-create-portfolio-blog-using-vuepress-markdown/ -->`,contentRendered:`<h1 id="blog" tabindex="-1"><a class="header-anchor" href="#blog" aria-hidden="true">#</a> Blog</h1>
<p>Trois diff\xE9rents articles</p>
<posts />
<!-- https://github.com/vuepress/vuepress-next/issues/505 -->
<!-- {{ $page }} -->
<!-- https://blog.logrocket.com/how-create-portfolio-blog-using-vuepress-markdown/ -->`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blog/",pathLocale:"/",permalink:null,routeMeta:{title:"Blog listing"},slug:"Readme",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/blog/Readme.md",filePathRelative:"blog/Readme.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/blog/index.html.vue",componentFilePathRelative:"pages/blog/index.html.vue",componentFileChunkName:"v-145ac574",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/blog/index.html.js",dataFilePathRelative:"pages/blog/index.html.js",dataFileChunkName:"v-145ac574",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/blog/index.html",htmlFilePathRelative:"blog/index.html"},{data:{key:"v-6c3ccbfc",path:"/en/interest.html",title:"Interests",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Unity",slug:"unity",children:[]},{level:2,title:"Graphic design",slug:"graphic-design",children:[]},{level:2,title:"Biotechnology",slug:"biotechnology",children:[]},{level:2,title:"Web",slug:"web",children:[]},{level:2,title:"Machine Learning",slug:"machine-learning",children:[]}],git:{updatedTime:1567047538e3},filePathRelative:"en/interest.md"},key:"v-6c3ccbfc",path:"/en/interest.html",title:"Interests",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Unity",slug:"unity",children:[]},{level:2,title:"Graphic design",slug:"graphic-design",children:[]},{level:2,title:"Biotechnology",slug:"biotechnology",children:[]},{level:2,title:"Web",slug:"web",children:[]},{level:2,title:"Machine Learning",slug:"machine-learning",children:[]}],content:`# Interests\r
\r
## Unity\r
I started working with Unity only a few months ago, I love it.\r
\r
This is not just the concept of Unity == video games, but rather the possibility of immersion that a game engine can give to the user.\r
\r
Here are some things I would like to explore:\r
\r
- Visit a real or imaginary place without moving\r
- Become familiar with hostile places before an intervention\r
- Procedural generation of texture, buildings, terrains\r
\r
## Graphic design\r
Having started with 35mm photography and film development in a dark room, my interest in photography and imaging started early.\r
\r
From silver to digital photography, my interest has turned to different ways of producing images in digital ways.\r
\r
## Biotechnology\r
\r
According to Aristotle, a human would have five senses: sight, smell, taste, hearing and touch.\r
\r
Several other meanings have since been found: Proprioception (knowledge of the position of the members of the body), thermoception (temperature), nociception (pain) etc.\r
\r
The study of the senses is fascinating, when you touch a button, a multitude of actions are done simultaneously, sends electrical signals to the muscles, touch reception and interpretation of the return signal. All this in a few milliseconds.\r
\r
This is a very trivial action, which requires almost no effort for the majority of people, but what happens if the nerves are severed?\r
\r
The capture of the various electrical signals of the body, either of the brain (electroencephalography (EEG)) or of the muscle (electromyography (EMG)) can be done with devices costing less and less.\r
\r
The study and understanding of these signals is a fascinating area.\r
\r
## Web\r
Develop a website in HTML with Notepad? Beautiful for '92 :sweat_smile:\r
\r
Today, if you want a web page that is not haystack, more preparation is required.\r
Front-end, back-end and DBs all require special expertise.\r
React, Angular or Vue.js? .NET, Java or Python? It depends.\r
\r
Do I need an Oracle database for a website with photos of cats?\r
*Probably not.*\r
Do I need an Oracle database for a website **selling millions** of cat photos per day?\r
*Probably !*\r
\r
Each problem requires a personalized solution.\r
The internet is changing day by day, different technologies are emerging and are abandoned.\r
You have to be constantly updated and thirsty for new knowledge.\r
\r
## Machine Learning\r
\r
A very trendy word right now. What is it really? Mathematics\r
Learning to learn, or how to explain to the machine itself to find the desired parameters?\r
\r
\`\`\`\r
IF conditions THEN actions\r
\`\`\`\r
This is the basic principle of programming, but what if the conditions are imprecise?\r
\r
If conditions can change at any time (next action of a player in a video game)?\r
If the interpretation of [electrical signals] (# biotechnology) requires a field of expertise and years of study?\r
\r
Machine learning!\r
\r
This is a discipline that allows a lot of possibilities.`,contentRendered:`<h1 id="interests" tabindex="-1"><a class="header-anchor" href="#interests" aria-hidden="true">#</a> Interests</h1>
<h2 id="unity" tabindex="-1"><a class="header-anchor" href="#unity" aria-hidden="true">#</a> Unity</h2>
<p>I started working with Unity only a few months ago, I love it.</p>
<p>This is not just the concept of Unity == video games, but rather the possibility of immersion that a game engine can give to the user.</p>
<p>Here are some things I would like to explore:</p>
<ul>
<li>Visit a real or imaginary place without moving</li>
<li>Become familiar with hostile places before an intervention</li>
<li>Procedural generation of texture, buildings, terrains</li>
</ul>
<h2 id="graphic-design" tabindex="-1"><a class="header-anchor" href="#graphic-design" aria-hidden="true">#</a> Graphic design</h2>
<p>Having started with 35mm photography and film development in a dark room, my interest in photography and imaging started early.</p>
<p>From silver to digital photography, my interest has turned to different ways of producing images in digital ways.</p>
<h2 id="biotechnology" tabindex="-1"><a class="header-anchor" href="#biotechnology" aria-hidden="true">#</a> Biotechnology</h2>
<p>According to Aristotle, a human would have five senses: sight, smell, taste, hearing and touch.</p>
<p>Several other meanings have since been found: Proprioception (knowledge of the position of the members of the body), thermoception (temperature), nociception (pain) etc.</p>
<p>The study of the senses is fascinating, when you touch a button, a multitude of actions are done simultaneously, sends electrical signals to the muscles, touch reception and interpretation of the return signal. All this in a few milliseconds.</p>
<p>This is a very trivial action, which requires almost no effort for the majority of people, but what happens if the nerves are severed?</p>
<p>The capture of the various electrical signals of the body, either of the brain (electroencephalography (EEG)) or of the muscle (electromyography (EMG)) can be done with devices costing less and less.</p>
<p>The study and understanding of these signals is a fascinating area.</p>
<h2 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> Web</h2>
<p>Develop a website in HTML with Notepad? Beautiful for '92 \u{1F605}</p>
<p>Today, if you want a web page that is not haystack, more preparation is required.
Front-end, back-end and DBs all require special expertise.
React, Angular or Vue.js? .NET, Java or Python? It depends.</p>
<p>Do I need an Oracle database for a website with photos of cats?
<em>Probably not.</em>
Do I need an Oracle database for a website <strong>selling millions</strong> of cat photos per day?
<em>Probably !</em></p>
<p>Each problem requires a personalized solution.
The internet is changing day by day, different technologies are emerging and are abandoned.
You have to be constantly updated and thirsty for new knowledge.</p>
<h2 id="machine-learning" tabindex="-1"><a class="header-anchor" href="#machine-learning" aria-hidden="true">#</a> Machine Learning</h2>
<p>A very trendy word right now. What is it really? Mathematics
Learning to learn, or how to explain to the machine itself to find the desired parameters?</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>IF conditions THEN actions
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This is the basic principle of programming, but what if the conditions are imprecise?</p>
<p>If conditions can change at any time (next action of a player in a video game)?
If the interpretation of [electrical signals] (# biotechnology) requires a field of expertise and years of study?</p>
<p>Machine learning!</p>
<p>This is a discipline that allows a lot of possibilities.</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/interest.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Interests"},slug:"interest",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/en/interest.md",filePathRelative:"en/interest.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/interest.html.vue",componentFilePathRelative:"pages/en/interest.html.vue",componentFileChunkName:"v-6c3ccbfc",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/interest.html.js",dataFilePathRelative:"pages/en/interest.html.js",dataFileChunkName:"v-6c3ccbfc",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/en/interest.html",htmlFilePathRelative:"en/interest.html"},{data:{key:"v-446a1644",path:"/en/portfolio.html",title:"Portfolio",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Unity",slug:"unity",children:[{level:3,title:"Weekend at the chalet",slug:"weekend-at-the-chalet",children:[]},{level:3,title:"Inverted maze",slug:"inverted-maze",children:[]},{level:3,title:"Roll in the 80s",slug:"roll-in-the-80s",children:[]},{level:3,title:"Music generator",slug:"music-generator",children:[]}]},{level:2,title:"Web site",slug:"web-site",children:[{level:3,title:"Expensify",slug:"expensify",children:[]},{level:3,title:"Synaps\xC9TS",slug:"synapsets",children:[]}]}],git:{updatedTime:162205196e4},filePathRelative:"en/portfolio.md"},key:"v-446a1644",path:"/en/portfolio.html",title:"Portfolio",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Unity",slug:"unity",children:[{level:3,title:"Weekend at the chalet",slug:"weekend-at-the-chalet",children:[]},{level:3,title:"Inverted maze",slug:"inverted-maze",children:[]},{level:3,title:"Roll in the 80s",slug:"roll-in-the-80s",children:[]},{level:3,title:"Music generator",slug:"music-generator",children:[]}]},{level:2,title:"Web site",slug:"web-site",children:[{level:3,title:"Expensify",slug:"expensify",children:[]},{level:3,title:"Synaps\xC9TS",slug:"synapsets",children:[]}]}],content:`# Portfolio\r
\r
## Unity\r
\r
### Weekend at the chalet\r
> \`Unity 2019.1.14f1\`\r
\r
>*What will be an ideal weekend ?*\r
Be quiet at the chalet, a small campfire, listen to nature and doze off at a sunset.\r
\r
Completely made with free assets, sound recorded myself and cleaned with Audacity.\r
\r
![chalet](./../img/cabin/old_Cabin_woods.jpg)\r
\r
**Video**\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/1sNtYfWZV08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
### Inverted maze\r
\r
> \`Unity 2019.1.14f1\` \`Bosca Ceoil\` \`AI\` \`NavMesh\` - August 2019\r
\r
Build using the Unity [NavMesh](https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html) and music made with [Bosca Ceoil](https://boscaceoil.net/).\r
\r
::: warning In development\r
An update with the link on the Google Play Store is coming soon.\r
:::\r
\r
![aiMaze](./../img/aiMaze/image_aiMaze.jpg)\r
\r
**Video with sound**\r
<video width="100%" height="100%" controls :src="$withBase('/img/aiMaze/video_aiMaze.webm')" type="video/mp4"></video>\r
\r
### Roll in the 80s\r
Unity 2019.1.13f1 - August 2019\r
\r
A rolling ball, how to make the concept more interesting?\r
\r
<div class="glow">Synthwave !</div>\r
\r
- Using perspectives simulating an endless progress\r
- The ball interacts with the ground and tries to find the best way to advance\r
- Arches giving a sense of progress\r
- [Online version](https://lefebvre.dev/demo_unity_80s_WebGL/index.html) ((the ground is different due to an incompatibility with the shader in WebGL)\r
- Code available on [GitHub](https://github.com/SamLefebvre/retro-80s-wireframe)\r
\r
![synthwave](./../img/synthwave.jpg)\r
\r
### Music generator\r
Unity 2019.1.1f1 - August 2019\r
\r
As part of my course *GTI745 - Interfaces utilisateurs avanc\xE9es* at \xC9TS, the last labo was to make a game to create music. A wonderful team work in just a few weeks.\r
\r
** Main interface **: Musical sequencer with a console for adjusting the sound.\r
![gti745_unity_sound_matrix](./../img/gti745/gti745_unity_sound_matrix.jpg)\r
\r
**Video on Youtube**\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/embed/UJGDZKN5E0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
- Using [Leap Motion](https://www.leapmotion.com/), to control the elements of the matrix in real time with our hands for a more immersive control.\r
\r
**A (small) world to explore**: The player has to walk in a 3d world to pick up different musical elements.\r
![gti745_unity_open_world](./../img/gti745/gti745_unity_open_world.jpg)\r
\r
- Package [Terrain Tools](https://docs.unity3d.com/Packages/com.unity.terrain-tools@latest)\r
- [Terrain Tools Sample Asset Pack](https://assetstore.unity.com/packages/2d/textures-materials/terrain-tools-sample-asset-pack-145808)\r
\r
**Haptic device (vibration)**: Allows a small sensation to the user when "touching" an object, specifically when the *Leap Motion* comes into contact with an element of the matrix.\r
![gti745_schema_circuitPlaygroundExpress](./../img/gti745/gti745_schema_circuitPlaygroundExpress.jpg)\r
- Controlled vibrotactile motor with python on embedded system\r
  - [Vibrating Mini Motor Disc](https://www.adafruit.com/product/1201)\r
  - [Adafruit DRV2605L Haptic Motor Controller](https://www.adafruit.com/product/2305)\r
  - [Circuit Playground Express](https://www.adafruit.com/product/3333)\r
\r
**Diagram of the electrical circuit**\r
![gti745_fritzing_diagram](./../img/gti745/gti745_fritzing_diagram.png)\r
- Drawn using [Fritzing](https://fritzing.org/home/)\r
\r
\r
\r
\r
## Web site\r
\r
### [Expensify](https://cryptic-woodland-49105.herokuapp.com)\r
\r
> \`React\`\r
\r
Made in the Udemy React couse [The Complete React Developer Course](https://www.udemy.com/react-2nd-edition).\r
\r
- React 16.8.6\r
- Login with Firebase\r
- Test with [Enzyme](https://airbnb.io/enzyme/)\r
\r
![expensify_login](./../img/expensify_login.jpg)\r
![expensify_dashboard](./../img/expensify_dashboard.jpg)\r
\r
\r
### [Synaps\xC9TS](https://synapsets.etsmtl.ca)\r
\r
> \`Vuepress\` \`GitHub Page\`\r
\r
Synaps\xC9TS is a new science-based student club of the \xC9cole de Technologie Sup\xE9rieure and specialized in brain-machine interface (ICM / BCI). Bringing together all areas of expertise of the university, this group of students focuses its activities around the analysis and processing of cerebral signals and in the development of technologies in this area.\r
\r
[![Synaps\xC9TS Website](./../img/web_synapsets.jpg)](https://synapsets.etsmtl.ca)\r
`,contentRendered:`<h1 id="portfolio" tabindex="-1"><a class="header-anchor" href="#portfolio" aria-hidden="true">#</a> Portfolio</h1>
<h2 id="unity" tabindex="-1"><a class="header-anchor" href="#unity" aria-hidden="true">#</a> Unity</h2>
<h3 id="weekend-at-the-chalet" tabindex="-1"><a class="header-anchor" href="#weekend-at-the-chalet" aria-hidden="true">#</a> Weekend at the chalet</h3>
<blockquote>
<p><code>Unity 2019.1.14f1</code></p>
</blockquote>
<blockquote>
<p><em>What will be an ideal weekend ?</em>
Be quiet at the chalet, a small campfire, listen to nature and doze off at a sunset.</p>
</blockquote>
<p>Completely made with free assets, sound recorded myself and cleaned with Audacity.</p>
<p><img src="@source/img/cabin/old_Cabin_woods.jpg" alt="chalet"></p>
<p><strong>Video</strong></p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/1sNtYfWZV08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h3 id="inverted-maze" tabindex="-1"><a class="header-anchor" href="#inverted-maze" aria-hidden="true">#</a> Inverted maze</h3>
<blockquote>
<p><code>Unity 2019.1.14f1</code> <code>Bosca Ceoil</code> <code>AI</code> <code>NavMesh</code> - August 2019</p>
</blockquote>
<p>Build using the Unity <a href="https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html" target="_blank" rel="noopener noreferrer">NavMesh<ExternalLinkIcon/></a> and music made with <a href="https://boscaceoil.net/" target="_blank" rel="noopener noreferrer">Bosca Ceoil<ExternalLinkIcon/></a>.</p>
<div class="custom-container warning"><p class="custom-container-title">In development</p>
<p>An update with the link on the Google Play Store is coming soon.</p>
</div>
<p><img src="@source/img/aiMaze/image_aiMaze.jpg" alt="aiMaze"></p>
<p><strong>Video with sound</strong>
<video width="100%" height="100%" controls :src="$withBase('/img/aiMaze/video_aiMaze.webm')" type="video/mp4"></video></p>
<h3 id="roll-in-the-80s" tabindex="-1"><a class="header-anchor" href="#roll-in-the-80s" aria-hidden="true">#</a> Roll in the 80s</h3>
<p>Unity 2019.1.13f1 - August 2019</p>
<p>A rolling ball, how to make the concept more interesting?</p>
<div class="glow">Synthwave !</div>
<ul>
<li>Using perspectives simulating an endless progress</li>
<li>The ball interacts with the ground and tries to find the best way to advance</li>
<li>Arches giving a sense of progress</li>
<li><a href="https://lefebvre.dev/demo_unity_80s_WebGL/index.html" target="_blank" rel="noopener noreferrer">Online version<ExternalLinkIcon/></a> ((the ground is different due to an incompatibility with the shader in WebGL)</li>
<li>Code available on <a href="https://github.com/SamLefebvre/retro-80s-wireframe" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></li>
</ul>
<p><img src="@source/img/synthwave.jpg" alt="synthwave"></p>
<h3 id="music-generator" tabindex="-1"><a class="header-anchor" href="#music-generator" aria-hidden="true">#</a> Music generator</h3>
<p>Unity 2019.1.1f1 - August 2019</p>
<p>As part of my course <em>GTI745 - Interfaces utilisateurs avanc\xE9es</em> at \xC9TS, the last labo was to make a game to create music. A wonderful team work in just a few weeks.</p>
<p>** Main interface **: Musical sequencer with a console for adjusting the sound.
<img src="@source/img/gti745/gti745_unity_sound_matrix.jpg" alt="gti745_unity_sound_matrix"></p>
<p><strong>Video on Youtube</strong></p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/embed/UJGDZKN5E0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<ul>
<li>Using <a href="https://www.leapmotion.com/" target="_blank" rel="noopener noreferrer">Leap Motion<ExternalLinkIcon/></a>, to control the elements of the matrix in real time with our hands for a more immersive control.</li>
</ul>
<p><strong>A (small) world to explore</strong>: The player has to walk in a 3d world to pick up different musical elements.
<img src="@source/img/gti745/gti745_unity_open_world.jpg" alt="gti745_unity_open_world"></p>
<ul>
<li>Package <a href="https://docs.unity3d.com/Packages/com.unity.terrain-tools@latest" target="_blank" rel="noopener noreferrer">Terrain Tools<ExternalLinkIcon/></a></li>
<li><a href="https://assetstore.unity.com/packages/2d/textures-materials/terrain-tools-sample-asset-pack-145808" target="_blank" rel="noopener noreferrer">Terrain Tools Sample Asset Pack<ExternalLinkIcon/></a></li>
</ul>
<p><strong>Haptic device (vibration)</strong>: Allows a small sensation to the user when &quot;touching&quot; an object, specifically when the <em>Leap Motion</em> comes into contact with an element of the matrix.
<img src="@source/img/gti745/gti745_schema_circuitPlaygroundExpress.jpg" alt="gti745_schema_circuitPlaygroundExpress"></p>
<ul>
<li>Controlled vibrotactile motor with python on embedded system
<ul>
<li><a href="https://www.adafruit.com/product/1201" target="_blank" rel="noopener noreferrer">Vibrating Mini Motor Disc<ExternalLinkIcon/></a></li>
<li><a href="https://www.adafruit.com/product/2305" target="_blank" rel="noopener noreferrer">Adafruit DRV2605L Haptic Motor Controller<ExternalLinkIcon/></a></li>
<li><a href="https://www.adafruit.com/product/3333" target="_blank" rel="noopener noreferrer">Circuit Playground Express<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<p><strong>Diagram of the electrical circuit</strong>
<img src="@source/img/gti745/gti745_fritzing_diagram.png" alt="gti745_fritzing_diagram"></p>
<ul>
<li>Drawn using <a href="https://fritzing.org/home/" target="_blank" rel="noopener noreferrer">Fritzing<ExternalLinkIcon/></a></li>
</ul>
<h2 id="web-site" tabindex="-1"><a class="header-anchor" href="#web-site" aria-hidden="true">#</a> Web site</h2>
<h3 id="expensify" tabindex="-1"><a class="header-anchor" href="#expensify" aria-hidden="true">#</a> <a href="https://cryptic-woodland-49105.herokuapp.com" target="_blank" rel="noopener noreferrer">Expensify<ExternalLinkIcon/></a></h3>
<blockquote>
<p><code>React</code></p>
</blockquote>
<p>Made in the Udemy React couse <a href="https://www.udemy.com/react-2nd-edition" target="_blank" rel="noopener noreferrer">The Complete React Developer Course<ExternalLinkIcon/></a>.</p>
<ul>
<li>React 16.8.6</li>
<li>Login with Firebase</li>
<li>Test with <a href="https://airbnb.io/enzyme/" target="_blank" rel="noopener noreferrer">Enzyme<ExternalLinkIcon/></a></li>
</ul>
<p><img src="@source/img/expensify_login.jpg" alt="expensify_login">
<img src="@source/img/expensify_dashboard.jpg" alt="expensify_dashboard"></p>
<h3 id="synapsets" tabindex="-1"><a class="header-anchor" href="#synapsets" aria-hidden="true">#</a> <a href="https://synapsets.etsmtl.ca" target="_blank" rel="noopener noreferrer">Synaps\xC9TS<ExternalLinkIcon/></a></h3>
<blockquote>
<p><code>Vuepress</code> <code>GitHub Page</code></p>
</blockquote>
<p>Synaps\xC9TS is a new science-based student club of the \xC9cole de Technologie Sup\xE9rieure and specialized in brain-machine interface (ICM / BCI). Bringing together all areas of expertise of the university, this group of students focuses its activities around the analysis and processing of cerebral signals and in the development of technologies in this area.</p>
<p><a href="https://synapsets.etsmtl.ca" target="_blank" rel="noopener noreferrer"><img src="@source/img/web_synapsets.jpg" alt="Synaps\xC9TS Website"><ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/portfolio.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Portfolio"},slug:"portfolio",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/en/portfolio.md",filePathRelative:"en/portfolio.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/portfolio.html.vue",componentFilePathRelative:"pages/en/portfolio.html.vue",componentFileChunkName:"v-446a1644",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/portfolio.html.js",dataFilePathRelative:"pages/en/portfolio.html.js",dataFileChunkName:"v-446a1644",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/en/portfolio.html",htmlFilePathRelative:"en/portfolio.html"},{data:{key:"v-2d0a870d",path:"/en/",title:"Home",lang:"en-US",frontmatter:{title:"Home",sidebar:!1,search:!1,next:!1},excerpt:"",headers:[],git:{updatedTime:1606246714e3},filePathRelative:"en/README.md"},key:"v-2d0a870d",path:"/en/",title:"Home",lang:"en-US",frontmatter:{title:"Home",sidebar:!1,search:!1,next:!1},excerpt:"",headers:[],content:`<githubcorner />\r
\r
<div class="flex-container">\r
  <div><router-link to="/en/portfolio/" class="home-link"><InfoCard title="Portfolio" logo="far fa-file-code fa-7x"/></router-link></div>\r
  <div><a href="https://github.com/SamLefebvre" target="_blank"><InfoCard title="GitHub" logo="fab fa-github fa-7x"/></a></div>\r
  <div><router-link to="/en/interest/" class="home-link"><InfoCard title="Interests" logo="fas fa-fire-alt fa-7x"/></router-link></div>\r
  <div><a :href="$withBase('/cv_en.pdf')" target="_blank"><InfoCard title="CV" logo="far fa-file-pdf fa-7x" /></a></div>\r
</div>\r
\r
`,contentRendered:`<githubcorner />
<div class="flex-container">
  <div><router-link to="/en/portfolio/" class="home-link"><InfoCard title="Portfolio" logo="far fa-file-code fa-7x"/></router-link></div>
  <div><a href="https://github.com/SamLefebvre" target="_blank"><InfoCard title="GitHub" logo="fab fa-github fa-7x"/></a></div>
  <div><router-link to="/en/interest/" class="home-link"><InfoCard title="Interests" logo="fas fa-fire-alt fa-7x"/></router-link></div>
  <div><a :href="$withBase('/cv_en.pdf')" target="_blank"><InfoCard title="CV" logo="far fa-file-pdf fa-7x" /></a></div>
</div>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/",pathLocale:"/en/",permalink:null,routeMeta:{title:"Home"},slug:"README",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/en/README.md",filePathRelative:"en/README.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/index.html.vue",componentFilePathRelative:"pages/en/index.html.vue",componentFileChunkName:"v-2d0a870d",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/index.html.js",dataFilePathRelative:"pages/en/index.html.js",dataFileChunkName:"v-2d0a870d",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/en/index.html",htmlFilePathRelative:"en/index.html"},{data:{key:"v-2557a30a",path:"/portfolio/blender.html",title:"Blender",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"Griffintown",slug:"griffintown",children:[]},{level:2,title:"Ville n\xE9on",slug:"ville-neon",children:[]},{level:2,title:"Suivi",slug:"suivi",children:[]},{level:2,title:"Arr\xEAt du temps",slug:"arret-du-temps",children:[]},{level:2,title:"Marche",slug:"marche",children:[]},{level:2,title:"Vagues m\xE9talliques",slug:"vagues-metalliques",children:[]},{level:2,title:"Drapeau",slug:"drapeau",children:[]},{level:2,title:"Oh non",slug:"oh-non",children:[]},{level:2,title:"Dans le n\xE9ant",slug:"dans-le-neant",children:[]},{level:2,title:"Beigne",slug:"beigne",children:[{level:3,title:"Beigne et caf\xE9",slug:"beigne-et-cafe",children:[]},{level:3,title:"Beigne et physique",slug:"beigne-et-physique",children:[]}]},{level:2,title:"Animation d'une voiture",slug:"animation-d-une-voiture",children:[]},{level:2,title:"Table de Pique-nique",slug:"table-de-pique-nique",children:[]}],git:{updatedTime:1645312652e3},filePathRelative:"portfolio/blender.md"},key:"v-2557a30a",path:"/portfolio/blender.html",title:"Blender",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"Griffintown",slug:"griffintown",children:[]},{level:2,title:"Ville n\xE9on",slug:"ville-neon",children:[]},{level:2,title:"Suivi",slug:"suivi",children:[]},{level:2,title:"Arr\xEAt du temps",slug:"arret-du-temps",children:[]},{level:2,title:"Marche",slug:"marche",children:[]},{level:2,title:"Vagues m\xE9talliques",slug:"vagues-metalliques",children:[]},{level:2,title:"Drapeau",slug:"drapeau",children:[]},{level:2,title:"Oh non",slug:"oh-non",children:[]},{level:2,title:"Dans le n\xE9ant",slug:"dans-le-neant",children:[]},{level:2,title:"Beigne",slug:"beigne",children:[{level:3,title:"Beigne et caf\xE9",slug:"beigne-et-cafe",children:[]},{level:3,title:"Beigne et physique",slug:"beigne-et-physique",children:[]}]},{level:2,title:"Animation d'une voiture",slug:"animation-d-une-voiture",children:[]},{level:2,title:"Table de Pique-nique",slug:"table-de-pique-nique",children:[]}],content:`# Blender\r
\r
## Griffintown\r
> \`Blender 2.83.1\` \`4k\` - 13 juillet juin 2020\r
\r
En r\xE9utilisant la sc\xE8ne cr\xE9\xE9e lors de la [Ville N\xE9on](#ville-neon), j'ai appliqu\xE9 une texture sur le terrain, une texture de [briques](https://texturehaven.com/tex/?c=bricks&t=random_bricks_thick) et un shader pour la cr\xE9ation de fen\xEAtres. HDRI de [HDRIHaven](https://hdrihaven.com/hdri/?h=the_sky_is_on_fire).\r
\r
![griffintown](../assets/img/blender/griffintown/montreal.webp)\r
\r
## Ville n\xE9on\r
> \`Blender 2.83.1\` \`4k\` \`60fps\` - 10 juillet juin 2020\r
\r
L'extension [Blender GIS](https://github.com/domlysz/BlenderGIS), permet d'importer des terrains en 3D. Avec la m\xEAme extension, il est possible d'obtenir un mod\xE8le des b\xE2timents.\r
\r
<!-- <div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/YxuYwCPVAFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div> -->\r
\r
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YxuYwCPVAFw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
\r
## Suivi\r
> \`Blender 2.83.1\` \`RTMG\` \`4k\` \`60fps\` - 4 juillet juin 2020\r
\r
Ajout de code en Python pour obtenir le positionnement de l'objet dans la sc\xE8ne pour ensuite le faire afficher \xE0 l'\xE9cran en simulant des coordonn\xE9es GPS.\r
Quatri\xE8me projet bas\xE9 sur le cours [Real Time Motion Graphics](https://blendermarket.com/products/rtmg) de [Midge "Mantissa" Sinnaeve](https://mantissa.xyz/).\r
\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/wxQXmuWxT7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
## Arr\xEAt du temps\r
> \`Blender 2.83.1\` - 2 juillet juin 2020\r
En utilisant l'extension [Cell Fracture](https://docs.blender.org/manual/en/2.83/addons/object/cell_fracture.html), j'ai exp\xE9riment\xE9 pour cr\xE9er un effet d'arr\xEAt de temps permettant de repositionner la cam\xE9ra.\r
\r
<video controls width="500"><source :src="$withBase('/videos/glass_breaking.webm')" type="video/webm">\r
    Sorry, your browser doesn't support embedded videos.\r
</video>\r
## Marche\r
> \`Blender 2.83.1\` \`RTMG\` \`4k\` \`60fps\` - 30 juin 2020\r
\r
Mod\xE8le cr\xE9\xE9 utilisant l'addon de cr\xE9ation de personnages [MB-LAB](https://mb-lab-community.github.io/MB-Lab.github.io/).\r
Troisi\xE8me projet bas\xE9 sur le cours [Real Time Motion Graphics](https://blendermarket.com/products/rtmg) de [Midge "Mantissa" Sinnaeve](https://mantissa.xyz/).\r
\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/or8DTeMgZYA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
\r
## Vagues m\xE9talliques\r
> \`Blender 2.83.1\` \`RTMG\` \`4k\` \`60fps\` - 25 juin 2020\r
\r
Deuxi\xE8me projet bas\xE9 sur le cours [Real Time Motion Graphics](https://blendermarket.com/products/rtmg) de [Midge "Mantissa" Sinnaeve](https://mantissa.xyz/).\r
Quelques modifications ont \xE9t\xE9 apport\xE9s pour avoir une animation en boucle.\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/v-YtyXE1mYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
## Drapeau\r
> \`Blender 2.83.1\` - 24 juin 2020\r
\r
Pour f\xEAter [F\xEAte nationale du Qu\xE9bec](https://fr.wikipedia.org/wiki/F%C3%AAte_nationale_du_Qu%C3%A9bec), j'ai anim\xE9 un drapeau.\r
Temps de cr\xE9ation : 30 min.\r
Temps de rendu : 45 min.\r
\r
<video controls width="500"><source :src="$withBase('/videos/drapeau_quebec.webm')" type="video/webm">\r
    Sorry, your browser doesn't support embedded videos.\r
</video>\r
\r
\r
## Oh non\r
> \`Blender 2.83.1\` \`Simulation de v\xEAtements\`- 24 juin 2020\r
\r
Des cr\xE9ations cauchemardesques ? Oui.\r
Inspir\xE9 de Ian Hubert, [Make Nightmare Men in Blender - Lazy Tutorials](https://www.youtube.com/watch?v=bgfJIZEDY44)\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/SZ8DcUSDpNY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
## Dans le n\xE9ant\r
> \`Blender 2.83.1\` \`Animation\` \`Perfect Loop\` \`RTMG\` - 20 juin 2020\r
\r
Animation de style perfect loop (il n'y a pas de coupure apparente) en me basant sur les notions du cours [Real Time Motion Graphics](https://blendermarket.com/products/rtmg) de [Midge "Mantissa" Sinnaeve](https://mantissa.xyz/)\r
\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/uThf61oX4xI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
## Beigne\r
\r
Beigne cr\xE9\xE9 en suivant [Blender Beginner Tutorial Series](https://www.youtube.com/playlist?list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U) sur Youtube de [Blender Guru](https://www.youtube.com/user/AndrewPPrice).\r
\r
### Beigne et caf\xE9\r
> \`Blender 2.83\` - 11 juin 2020\r
\r
![donut](../assets/img/blender/donut/donut.jpg)\r
\r
### Beigne et physique\r
> \`Blender 2.83\` \`Physique\` - 8 juin 2020\r
\r
Je me demandais comment faire afficher des paillettes de sucre sans qu'il n'y ait de conflits de positionnement. Ce petit vid\xE9o montre une solution en cr\xE9ant un g\xE9n\xE9rateur de particules dont chacune a un Rigid Body. Le principe est int\xE9ressant et fonctionnel, cependant avec un temps de calcul de 4 heures, j'ai d\xE9cid\xE9 de ne pas garder le principe.\r
\r
<video controls width="500"><source :src="$withBase('/videos/donut_sprinkles.webm')" type="video/webm">\r
    Sorry, your browser doesn't support embedded videos.\r
</video>\r
\r
\r
## Animation d'une voiture\r
> \`Blender 2.82a\` - 7 juin 2020\r
\r
Le r\xE9sultat apr\xE8s avoir suivi le cours [Blender 2.8 Launch Pad](https://academy.cgboost.com/p/blender-2-8-launch-pad).\r
Temps de cr\xE9ation : >100 heures. (Je ne connaissais pas Blender avant)\r
Temps de rendu : ~4 heures.\r
\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/vCCTq3kAiBY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
## Table de Pique-nique\r
> \`Blender 2.83\` \`Camera Tracking\` - 6 juin 2020\r
\r
Suivi d'image et remplacement par un objet virtuel\r
Temps de cr\xE9ation : >5 heures.\r
Temps de rendu : ~2 heures.\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/BEgiooGMagw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>`,contentRendered:`<h1 id="blender" tabindex="-1"><a class="header-anchor" href="#blender" aria-hidden="true">#</a> Blender</h1>
<h2 id="griffintown" tabindex="-1"><a class="header-anchor" href="#griffintown" aria-hidden="true">#</a> Griffintown</h2>
<blockquote>
<p><code>Blender 2.83.1</code> <code>4k</code> - 13 juillet juin 2020</p>
</blockquote>
<p>En r\xE9utilisant la sc\xE8ne cr\xE9\xE9e lors de la <a href="#ville-neon">Ville N\xE9on</a>, j'ai appliqu\xE9 une texture sur le terrain, une texture de <a href="https://texturehaven.com/tex/?c=bricks&amp;t=random_bricks_thick" target="_blank" rel="noopener noreferrer">briques<ExternalLinkIcon/></a> et un shader pour la cr\xE9ation de fen\xEAtres. HDRI de <a href="https://hdrihaven.com/hdri/?h=the_sky_is_on_fire" target="_blank" rel="noopener noreferrer">HDRIHaven<ExternalLinkIcon/></a>.</p>
<p><img src="@source/assets/img/blender/griffintown/montreal.webp" alt="griffintown"></p>
<h2 id="ville-neon" tabindex="-1"><a class="header-anchor" href="#ville-neon" aria-hidden="true">#</a> Ville n\xE9on</h2>
<blockquote>
<p><code>Blender 2.83.1</code> <code>4k</code> <code>60fps</code> - 10 juillet juin 2020</p>
</blockquote>
<p>L'extension <a href="https://github.com/domlysz/BlenderGIS" target="_blank" rel="noopener noreferrer">Blender GIS<ExternalLinkIcon/></a>, permet d'importer des terrains en 3D. Avec la m\xEAme extension, il est possible d'obtenir un mod\xE8le des b\xE2timents.</p>
<!-- <div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/YxuYwCPVAFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> -->
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YxuYwCPVAFw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h2 id="suivi" tabindex="-1"><a class="header-anchor" href="#suivi" aria-hidden="true">#</a> Suivi</h2>
<blockquote>
<p><code>Blender 2.83.1</code> <code>RTMG</code> <code>4k</code> <code>60fps</code> - 4 juillet juin 2020</p>
</blockquote>
<p>Ajout de code en Python pour obtenir le positionnement de l'objet dans la sc\xE8ne pour ensuite le faire afficher \xE0 l'\xE9cran en simulant des coordonn\xE9es GPS.
Quatri\xE8me projet bas\xE9 sur le cours <a href="https://blendermarket.com/products/rtmg" target="_blank" rel="noopener noreferrer">Real Time Motion Graphics<ExternalLinkIcon/></a> de <a href="https://mantissa.xyz/" target="_blank" rel="noopener noreferrer">Midge &quot;Mantissa&quot; Sinnaeve<ExternalLinkIcon/></a>.</p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/wxQXmuWxT7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="arret-du-temps" tabindex="-1"><a class="header-anchor" href="#arret-du-temps" aria-hidden="true">#</a> Arr\xEAt du temps</h2>
<blockquote>
<p><code>Blender 2.83.1</code> - 2 juillet juin 2020
En utilisant l'extension <a href="https://docs.blender.org/manual/en/2.83/addons/object/cell_fracture.html" target="_blank" rel="noopener noreferrer">Cell Fracture<ExternalLinkIcon/></a>, j'ai exp\xE9riment\xE9 pour cr\xE9er un effet d'arr\xEAt de temps permettant de repositionner la cam\xE9ra.</p>
</blockquote>
<p><video controls width="500"><source :src="$withBase('/videos/glass_breaking.webm')" type="video/webm">
Sorry, your browser doesn't support embedded videos.
</video></p>
<h2 id="marche" tabindex="-1"><a class="header-anchor" href="#marche" aria-hidden="true">#</a> Marche</h2>
<blockquote>
<p><code>Blender 2.83.1</code> <code>RTMG</code> <code>4k</code> <code>60fps</code> - 30 juin 2020</p>
</blockquote>
<p>Mod\xE8le cr\xE9\xE9 utilisant l'addon de cr\xE9ation de personnages <a href="https://mb-lab-community.github.io/MB-Lab.github.io/" target="_blank" rel="noopener noreferrer">MB-LAB<ExternalLinkIcon/></a>.
Troisi\xE8me projet bas\xE9 sur le cours <a href="https://blendermarket.com/products/rtmg" target="_blank" rel="noopener noreferrer">Real Time Motion Graphics<ExternalLinkIcon/></a> de <a href="https://mantissa.xyz/" target="_blank" rel="noopener noreferrer">Midge &quot;Mantissa&quot; Sinnaeve<ExternalLinkIcon/></a>.</p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/or8DTeMgZYA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="vagues-metalliques" tabindex="-1"><a class="header-anchor" href="#vagues-metalliques" aria-hidden="true">#</a> Vagues m\xE9talliques</h2>
<blockquote>
<p><code>Blender 2.83.1</code> <code>RTMG</code> <code>4k</code> <code>60fps</code> - 25 juin 2020</p>
</blockquote>
<p>Deuxi\xE8me projet bas\xE9 sur le cours <a href="https://blendermarket.com/products/rtmg" target="_blank" rel="noopener noreferrer">Real Time Motion Graphics<ExternalLinkIcon/></a> de <a href="https://mantissa.xyz/" target="_blank" rel="noopener noreferrer">Midge &quot;Mantissa&quot; Sinnaeve<ExternalLinkIcon/></a>.
Quelques modifications ont \xE9t\xE9 apport\xE9s pour avoir une animation en boucle.</p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/v-YtyXE1mYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="drapeau" tabindex="-1"><a class="header-anchor" href="#drapeau" aria-hidden="true">#</a> Drapeau</h2>
<blockquote>
<p><code>Blender 2.83.1</code> - 24 juin 2020</p>
</blockquote>
<p>Pour f\xEAter <a href="https://fr.wikipedia.org/wiki/F%C3%AAte_nationale_du_Qu%C3%A9bec" target="_blank" rel="noopener noreferrer">F\xEAte nationale du Qu\xE9bec<ExternalLinkIcon/></a>, j'ai anim\xE9 un drapeau.
Temps de cr\xE9ation : 30 min.
Temps de rendu : 45 min.</p>
<p><video controls width="500"><source :src="$withBase('/videos/drapeau_quebec.webm')" type="video/webm">
Sorry, your browser doesn't support embedded videos.
</video></p>
<h2 id="oh-non" tabindex="-1"><a class="header-anchor" href="#oh-non" aria-hidden="true">#</a> Oh non</h2>
<blockquote>
<p><code>Blender 2.83.1</code> <code>Simulation de v\xEAtements</code>- 24 juin 2020</p>
</blockquote>
<p>Des cr\xE9ations cauchemardesques ? Oui.
Inspir\xE9 de Ian Hubert, <a href="https://www.youtube.com/watch?v=bgfJIZEDY44" target="_blank" rel="noopener noreferrer">Make Nightmare Men in Blender - Lazy Tutorials<ExternalLinkIcon/></a></p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/SZ8DcUSDpNY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="dans-le-neant" tabindex="-1"><a class="header-anchor" href="#dans-le-neant" aria-hidden="true">#</a> Dans le n\xE9ant</h2>
<blockquote>
<p><code>Blender 2.83.1</code> <code>Animation</code> <code>Perfect Loop</code> <code>RTMG</code> - 20 juin 2020</p>
</blockquote>
<p>Animation de style perfect loop (il n'y a pas de coupure apparente) en me basant sur les notions du cours <a href="https://blendermarket.com/products/rtmg" target="_blank" rel="noopener noreferrer">Real Time Motion Graphics<ExternalLinkIcon/></a> de <a href="https://mantissa.xyz/" target="_blank" rel="noopener noreferrer">Midge &quot;Mantissa&quot; Sinnaeve<ExternalLinkIcon/></a></p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/uThf61oX4xI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="beigne" tabindex="-1"><a class="header-anchor" href="#beigne" aria-hidden="true">#</a> Beigne</h2>
<p>Beigne cr\xE9\xE9 en suivant <a href="https://www.youtube.com/playlist?list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U" target="_blank" rel="noopener noreferrer">Blender Beginner Tutorial Series<ExternalLinkIcon/></a> sur Youtube de <a href="https://www.youtube.com/user/AndrewPPrice" target="_blank" rel="noopener noreferrer">Blender Guru<ExternalLinkIcon/></a>.</p>
<h3 id="beigne-et-cafe" tabindex="-1"><a class="header-anchor" href="#beigne-et-cafe" aria-hidden="true">#</a> Beigne et caf\xE9</h3>
<blockquote>
<p><code>Blender 2.83</code> - 11 juin 2020</p>
</blockquote>
<p><img src="@source/assets/img/blender/donut/donut.jpg" alt="donut"></p>
<h3 id="beigne-et-physique" tabindex="-1"><a class="header-anchor" href="#beigne-et-physique" aria-hidden="true">#</a> Beigne et physique</h3>
<blockquote>
<p><code>Blender 2.83</code> <code>Physique</code> - 8 juin 2020</p>
</blockquote>
<p>Je me demandais comment faire afficher des paillettes de sucre sans qu'il n'y ait de conflits de positionnement. Ce petit vid\xE9o montre une solution en cr\xE9ant un g\xE9n\xE9rateur de particules dont chacune a un Rigid Body. Le principe est int\xE9ressant et fonctionnel, cependant avec un temps de calcul de 4 heures, j'ai d\xE9cid\xE9 de ne pas garder le principe.</p>
<p><video controls width="500"><source :src="$withBase('/videos/donut_sprinkles.webm')" type="video/webm">
Sorry, your browser doesn't support embedded videos.
</video></p>
<h2 id="animation-d-une-voiture" tabindex="-1"><a class="header-anchor" href="#animation-d-une-voiture" aria-hidden="true">#</a> Animation d'une voiture</h2>
<blockquote>
<p><code>Blender 2.82a</code> - 7 juin 2020</p>
</blockquote>
<p>Le r\xE9sultat apr\xE8s avoir suivi le cours <a href="https://academy.cgboost.com/p/blender-2-8-launch-pad" target="_blank" rel="noopener noreferrer">Blender 2.8 Launch Pad<ExternalLinkIcon/></a>.
Temps de cr\xE9ation : &gt;100 heures. (Je ne connaissais pas Blender avant)
Temps de rendu : ~4 heures.</p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/vCCTq3kAiBY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="table-de-pique-nique" tabindex="-1"><a class="header-anchor" href="#table-de-pique-nique" aria-hidden="true">#</a> Table de Pique-nique</h2>
<blockquote>
<p><code>Blender 2.83</code> <code>Camera Tracking</code> - 6 juin 2020</p>
</blockquote>
<p>Suivi d'image et remplacement par un objet virtuel
Temps de cr\xE9ation : &gt;5 heures.
Temps de rendu : ~2 heures.</p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/BEgiooGMagw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/portfolio/blender.html",pathLocale:"/",permalink:null,routeMeta:{title:"Blender"},slug:"blender",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/portfolio/blender.md",filePathRelative:"portfolio/blender.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/portfolio/blender.html.vue",componentFilePathRelative:"pages/portfolio/blender.html.vue",componentFileChunkName:"v-2557a30a",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/portfolio/blender.html.js",dataFilePathRelative:"pages/portfolio/blender.html.js",dataFileChunkName:"v-2557a30a",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/portfolio/blender.html",htmlFilePathRelative:"portfolio/blender.html"},{data:{key:"v-2e4c18c0",path:"/portfolio/",title:"Portfolio",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1645312652e3},filePathRelative:"portfolio/README.md"},key:"v-2e4c18c0",path:"/portfolio/",title:"Portfolio",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],content:`# Portfolio\r
\r
Projets utilisant [Blender](/portfolio/blender.md)\r
\r
<RouterLink to="/portfolio/blender.html"><i class="fas fa-cubes fa-7x orange svgBorder" aria-hidden="true"></i></RouterLink>\r
\r
\r
Projets utilisant [Unity](/portfolio/unity.md).\r
\r
<RouterLink to="/portfolio/unity.html"><i class="fab fa-unity fa-7x black" aria-hidden="true"></i></RouterLink>\r
\r
\r
\r
`,contentRendered:`<h1 id="portfolio" tabindex="-1"><a class="header-anchor" href="#portfolio" aria-hidden="true">#</a> Portfolio</h1>
<p>Projets utilisant <RouterLink to="/portfolio/blender.html">Blender</RouterLink></p>
<RouterLink to="/portfolio/blender.html"><i class="fas fa-cubes fa-7x orange svgBorder" aria-hidden="true"></i></RouterLink>
<p>Projets utilisant <RouterLink to="/portfolio/unity.html">Unity</RouterLink>.</p>
<RouterLink to="/portfolio/unity.html"><i class="fab fa-unity fa-7x black" aria-hidden="true"></i></RouterLink>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"/portfolio/blender.md",relative:"portfolio/blender.md",absolute:"/portfolio/blender.md"},{raw:"/portfolio/unity.md",relative:"portfolio/unity.md",absolute:"/portfolio/unity.md"}],pathInferred:"/portfolio/",pathLocale:"/",permalink:null,routeMeta:{title:"Portfolio"},slug:"README",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/portfolio/README.md",filePathRelative:"portfolio/README.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/portfolio/index.html.vue",componentFilePathRelative:"pages/portfolio/index.html.vue",componentFileChunkName:"v-2e4c18c0",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/portfolio/index.html.js",dataFilePathRelative:"pages/portfolio/index.html.js",dataFileChunkName:"v-2e4c18c0",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/portfolio/index.html",htmlFilePathRelative:"portfolio/index.html"},{data:{key:"v-52103624",path:"/portfolio/unity.html",title:"Unity",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"Jouer avec son coeur",slug:"jouer-avec-son-coeur",children:[]},{level:2,title:"Course en lowPoly",slug:"course-en-lowpoly",children:[]},{level:2,title:"Une marche en for\xEAt",slug:"une-marche-en-foret",children:[]},{level:2,title:"Une fin de semaine au chalet",slug:"une-fin-de-semaine-au-chalet",children:[]},{level:2,title:"Labyrinthe invers\xE9",slug:"labyrinthe-inverse",children:[]},{level:2,title:"Rouler en mode r\xE9tro",slug:"rouler-en-mode-retro",children:[]},{level:2,title:"Interface musicale",slug:"interface-musicale",children:[]}],git:{updatedTime:1645312652e3},filePathRelative:"portfolio/unity.md"},key:"v-52103624",path:"/portfolio/unity.html",title:"Unity",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"Jouer avec son coeur",slug:"jouer-avec-son-coeur",children:[]},{level:2,title:"Course en lowPoly",slug:"course-en-lowpoly",children:[]},{level:2,title:"Une marche en for\xEAt",slug:"une-marche-en-foret",children:[]},{level:2,title:"Une fin de semaine au chalet",slug:"une-fin-de-semaine-au-chalet",children:[]},{level:2,title:"Labyrinthe invers\xE9",slug:"labyrinthe-inverse",children:[]},{level:2,title:"Rouler en mode r\xE9tro",slug:"rouler-en-mode-retro",children:[]},{level:2,title:"Interface musicale",slug:"interface-musicale",children:[]}],content:`# Unity\r
\r
## Jouer avec son coeur\r
> \`Unity 2019.2.17f1\` \`IHM\` - Janvier 2020\r
\r
Lors de la journ\xE9e [portes ouvertes de l'\xC9TS](https://portesouvertes.etsmtl.ca/), voici un des projets pr\xE9sent\xE9 par le club Synaps\xC9TS.\r
\r
Comment rendre la biotechnologie, l'analyses des donn\xE9es, la visualisation des donn\xE9es, le fun et accessible \xE0 tous ? Dans un jeu bien entendu ! :space_invader:\r
\r
Le battement du coeur est d\xE9tect\xE9 avec un petit appareil. \xC0 chaque battement, le fusil gagne une recharge suppl\xE9mentaire. Donc, plus le coeur bat vite, plus facilement la personne peut survivre aux ennemis. :heart:\r
\r
::: tip Fonctionnement\r
\r
Avec un <abbr title="Un photopl\xE9thysmogramme">capteur de pulsation</abbr> plac\xE9 sur le doigt, une lumi\xE8re et un capteur d\xE9tecte les modifications du flux sanguin en continu. Ce faisant, lors d'un battement, une modification du voltage est per\xE7u par le capteur, un battement est alors d\xE9tect\xE9.\r
\r
<details>\r
  <summary>Image montrant plus en d\xE9tail le fonctionnement</summary>\r
<a href="https://learn.adafruit.com/assets/69599"><img :src="$withBase('/img/synapsETS/light_pulse_detect.png')" alt="foo">Anne Barela </a>\r
</details>\r
:::\r
\r
\r
![car](../img/synapsets_hb_pirate_scifi/heartbeat_pirate_scifi_red_cube.png)\r
![ennemies](../img/synapsets_hb_pirate_scifi/heartbeat_pirate_scifi_ennemies.png)\r
![explosion](../img/synapsets_hb_pirate_scifi/heartbeat_pirate_scifi_explosion.png)\r
![demo](../img/synapsets_hb_pirate_scifi/heartbeat_pirate_scifi_demo.jpg)\r
\r
## Course en lowPoly\r
\r
> \`Unity 2019.2.17f1\` \`Cinemachine\` \`Wheel Collider\` \`Post Processing\` - Janvier 2020\r
\r
En pr\xE9paration pour le [Global Game Jam](https://globalgamejam.org/) notre \xE9quipe s'est rassembl\xE9e quelques heures pour s'amuser avec les assets de la compagnie [Synty Studios](https://syntystore.com/) pour en apprendre l'int\xE9gration avec Unity.\r
\r
Le d\xE9placement de la voiture s'est fait avec le syst\xE8me de physique [Wheel Collider](https://docs.unity3d.com/Manual/class-WheelCollider.html).\r
\r
Un d\xE9mo web est [disponible en ligne](https://ekines.com/hyperracing/). Il est \xE0 noter que le d\xE9placement est \xE0 am\xE9liorer.\r
\r
![car](../img/hyperRacing/hyperRacing_car.png)\r
![car](../img/hyperRacing/hyperRacing_Arena.jpg)\r
\r
## Une marche en for\xEAt\r
> \`Unity 2019.2.3f1\` \`Cinemachine\` \`Timeline\` \`Post Processing\` \`Terrain Tools\` - Novembre 2019\r
\r
> Durant le mois de novembre, la th\xE9matique du mensuelle pour le club \xE9tudiant [Conjure](https://conjure.etsmtl.ca/) de l'\xC9TS a \xE9t\xE9 *la force de la nature*.\r
\r
Est-ce que je fais un jeu simple ? Non ce n'est pas mon genre.\r
Est-ce que je fais une animation qui est rendue en <abbr title="En temps r\xE9el souple">temps r\xE9el</abbr> avec Unity o\xF9 je suis le metteur en sc\xE8ne, \xE9crivain, codeur, animateur et en charge du rendu final ? Oui, \xE7a l'air int\xE9ressant ! <abbr title="Dans quoi je me suis embarqu\xE9 encore ?">:sweat_smile:</abbr>.\r
Apr\xE8s plusieurs it\xE9rations et d'heures d'apprentissage des diff\xE9rents outils, le r\xE9sultat est tr\xE8s proche de la vision d'origine.\r
\r
![portal](../img/animForest/lastdruid_shadow_sun_in_tree.jpg)\r
\r
Un d\xE9fi non pr\xE9vu a \xE9t\xE9 le suivant : Comment raconter l'histoire ?\r
Apr\xE8s quelques essais, la version sous-titr\xE9e a \xE9t\xE9 gard\xE9.\r
\r
:writing_hand: Un remerciement sp\xE9cial \xE0 [Diego Saavedra](https://www.facebook.com/diegosaavedrarenaud) pour son aide \xE0 l'\xE9criture de l'histoire.\r
\r
**Vid\xE9o**\r
\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/cQqn5H3E-uw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
## Une fin de semaine au chalet\r
> \`Unity 2019.1.14f1\` \`Animation\`  - Ao\xFBt 2019\r
\r
>*\xC0 quoi ressemblerait une fin de semaine id\xE9ale ?*\r
\xCAtre tranquille au chalet, un petit feu de camp, \xE9couter la nature et s'assoupir lors d'un coucher de soleil.\r
\r
Compl\xE8tement r\xE9alis\xE9 avec des assets gratuit, son d'ambiance enregistr\xE9 moi-m\xEAme et nettoy\xE9 avec Audacity.\r
\r
![chalet](../img/cabin/old_Cabin_woods.jpg)\r
\r
**Vid\xE9o**\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/1sNtYfWZV08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
## Labyrinthe invers\xE9\r
\r
> \`Unity 2019.1.14f1\` \`Bosca Ceoil\` \`AI\` \`NavMesh\` - Ao\xFBt 2019\r
\r
Mouvement avec le [NavMesh](https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html) d'Unity et cr\xE9ation d'une ambiance sonore avec [Bosca Ceoil](https://boscaceoil.net/).\r
\r
![aiMaze](../img/aiMaze/image_aiMaze.jpg)\r
\r
**Vid\xE9o avec la bande sonore**\r
\r
<video controls width="500"><source :src="$withBase('/videos/aiMaze.webm')" type="video/webm">\r
    Sorry, your browser doesn't support embedded videos.\r
</video>\r
\r
## Rouler en mode r\xE9tro\r
Unity 2019.1.13f1 - ao\xFBt 2019\r
\r
Une bille qui roule, comment rendre le concept plus int\xE9ressant ?\r
\r
<div class="glow">Synthwave !</div>\r
\r
- Utilisation de perspectives simulant un avancement sans fin\r
- La bille interagit avec le sol et essaie de trouver le meilleur chemin pour avancer\r
- Arches donnant une sensation d'avancement\r
- [Version en ligne](https://lefebvre.dev/demo_unity_80s_WebGL/index.html) (le sol est diff\xE9rent d\xFB \xE0 une incompatibilit\xE9 avec le shader en WebGL)\r
- Code disponible sur [GitHub](https://github.com/SamLefebvre/retro-80s-wireframe)\r
\r
![synthwave](../img/synthwave.jpg)\r
\r
## Interface musicale\r
Unity 2019.1.1f1 - ao\xFBt 2019\r
\r
Dans le cadre de mon cours *GTI745 - Interfaces utilisateurs avanc\xE9es* \xE0 l'\xC9TS, le dernier laboratoire a \xE9t\xE9 de faire un jeu permettant de cr\xE9er de la musique. Un magnifique travail d'\xE9quipe en seulement quelques semaines.\r
\r
**Interface principale** : S\xE9quenceur musical avec une console permettant d'ajuster le son.\r
\r
![sound matrix](../img/gti745/gti745_unity_sound_matrix.jpg)\r
\r
**D\xE9mo sur Youtube**\r
<div style="position:relative;padding-top:56.25%;">\r
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/UJGDZKN5E0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
- Utilisation de [Leap Motion](https://www.leapmotion.com/), permettant de contr\xF4ler les \xE9l\xE9ments de la matrice en temps r\xE9el avec nos mains pour un contr\xF4le plus immersif.\r
\r
**Un (petit) monde \xE0 explorer** : Le joueur doit se promener dans un monde 3d pour ramasser diff\xE9rents \xE9l\xE9ments musicaux.\r
![gti745_unity_open_world](../img/gti745/gti745_unity_open_world.jpg)\r
\r
- Package [Terrain Tools](https://docs.unity3d.com/Packages/com.unity.terrain-tools@latest)\r
- [Terrain Tools Sample Asset Pack](https://assetstore.unity.com/packages/2d/textures-materials/terrain-tools-sample-asset-pack-145808)\r
\r
**Dispositif haptique (vibration)** : Permets de donner une petite sensation \xE0 l'utilisateur lorsqu'il "touche" \xE0 un objet, plus pr\xE9cis\xE9ment lorsque la *Leap Motion* rentre en contact avec un \xE9l\xE9ment de la matrice.\r
![gti745_schema_circuitPlaygroundExpress](../img/gti745/gti745_schema_circuitPlaygroundExpress.jpg)\r
- Moteur vibrotactile contr\xF4l\xE9 avec python sur syst\xE8me embarqu\xE9\r
  - [Vibrating Mini Motor Disc](https://www.adafruit.com/product/1201)\r
  - [Adafruit DRV2605L Haptic Motor Controller](https://www.adafruit.com/product/2305)\r
  - [Circuit Playground Express](https://www.adafruit.com/product/3333)\r
\r
**Diagramme du circuit \xE9lectrique**\r
![gti745_fritzing_diagram](../img/gti745/gti745_fritzing_diagram.png)\r
- Dessin\xE9 \xE0 l'aide de [Fritzing](https://fritzing.org/home/)\r
\r
`,contentRendered:`<h1 id="unity" tabindex="-1"><a class="header-anchor" href="#unity" aria-hidden="true">#</a> Unity</h1>
<h2 id="jouer-avec-son-coeur" tabindex="-1"><a class="header-anchor" href="#jouer-avec-son-coeur" aria-hidden="true">#</a> Jouer avec son coeur</h2>
<blockquote>
<p><code>Unity 2019.2.17f1</code> <code>IHM</code> - Janvier 2020</p>
</blockquote>
<p>Lors de la journ\xE9e <a href="https://portesouvertes.etsmtl.ca/" target="_blank" rel="noopener noreferrer">portes ouvertes de l'\xC9TS<ExternalLinkIcon/></a>, voici un des projets pr\xE9sent\xE9 par le club Synaps\xC9TS.</p>
<p>Comment rendre la biotechnologie, l'analyses des donn\xE9es, la visualisation des donn\xE9es, le fun et accessible \xE0 tous ? Dans un jeu bien entendu ! \u{1F47E}</p>
<p>Le battement du coeur est d\xE9tect\xE9 avec un petit appareil. \xC0 chaque battement, le fusil gagne une recharge suppl\xE9mentaire. Donc, plus le coeur bat vite, plus facilement la personne peut survivre aux ennemis. \u2764\uFE0F</p>
<div class="custom-container tip"><p class="custom-container-title">Fonctionnement</p>
<p>Avec un <abbr title="Un photopl\xE9thysmogramme">capteur de pulsation</abbr> plac\xE9 sur le doigt, une lumi\xE8re et un capteur d\xE9tecte les modifications du flux sanguin en continu. Ce faisant, lors d'un battement, une modification du voltage est per\xE7u par le capteur, un battement est alors d\xE9tect\xE9.</p>
<details>
  <summary>Image montrant plus en d\xE9tail le fonctionnement</summary>
<a href="https://learn.adafruit.com/assets/69599"><img :src="$withBase('/img/synapsETS/light_pulse_detect.png')" alt="foo">Anne Barela </a>
</details>
</div>
<p><img src="@source/img/synapsets_hb_pirate_scifi/heartbeat_pirate_scifi_red_cube.png" alt="car">
<img src="@source/img/synapsets_hb_pirate_scifi/heartbeat_pirate_scifi_ennemies.png" alt="ennemies">
<img src="@source/img/synapsets_hb_pirate_scifi/heartbeat_pirate_scifi_explosion.png" alt="explosion">
<img src="@source/img/synapsets_hb_pirate_scifi/heartbeat_pirate_scifi_demo.jpg" alt="demo"></p>
<h2 id="course-en-lowpoly" tabindex="-1"><a class="header-anchor" href="#course-en-lowpoly" aria-hidden="true">#</a> Course en lowPoly</h2>
<blockquote>
<p><code>Unity 2019.2.17f1</code> <code>Cinemachine</code> <code>Wheel Collider</code> <code>Post Processing</code> - Janvier 2020</p>
</blockquote>
<p>En pr\xE9paration pour le <a href="https://globalgamejam.org/" target="_blank" rel="noopener noreferrer">Global Game Jam<ExternalLinkIcon/></a> notre \xE9quipe s'est rassembl\xE9e quelques heures pour s'amuser avec les assets de la compagnie <a href="https://syntystore.com/" target="_blank" rel="noopener noreferrer">Synty Studios<ExternalLinkIcon/></a> pour en apprendre l'int\xE9gration avec Unity.</p>
<p>Le d\xE9placement de la voiture s'est fait avec le syst\xE8me de physique <a href="https://docs.unity3d.com/Manual/class-WheelCollider.html" target="_blank" rel="noopener noreferrer">Wheel Collider<ExternalLinkIcon/></a>.</p>
<p>Un d\xE9mo web est <a href="https://ekines.com/hyperracing/" target="_blank" rel="noopener noreferrer">disponible en ligne<ExternalLinkIcon/></a>. Il est \xE0 noter que le d\xE9placement est \xE0 am\xE9liorer.</p>
<p><img src="@source/img/hyperRacing/hyperRacing_car.png" alt="car">
<img src="@source/img/hyperRacing/hyperRacing_Arena.jpg" alt="car"></p>
<h2 id="une-marche-en-foret" tabindex="-1"><a class="header-anchor" href="#une-marche-en-foret" aria-hidden="true">#</a> Une marche en for\xEAt</h2>
<blockquote>
<p><code>Unity 2019.2.3f1</code> <code>Cinemachine</code> <code>Timeline</code> <code>Post Processing</code> <code>Terrain Tools</code> - Novembre 2019</p>
</blockquote>
<blockquote>
<p>Durant le mois de novembre, la th\xE9matique du mensuelle pour le club \xE9tudiant <a href="https://conjure.etsmtl.ca/" target="_blank" rel="noopener noreferrer">Conjure<ExternalLinkIcon/></a> de l'\xC9TS a \xE9t\xE9 <em>la force de la nature</em>.</p>
</blockquote>
<p>Est-ce que je fais un jeu simple ? Non ce n'est pas mon genre.
Est-ce que je fais une animation qui est rendue en <abbr title="En temps r\xE9el souple">temps r\xE9el</abbr> avec Unity o\xF9 je suis le metteur en sc\xE8ne, \xE9crivain, codeur, animateur et en charge du rendu final ? Oui, \xE7a l'air int\xE9ressant ! <abbr title="Dans quoi je me suis embarqu\xE9 encore ?">\u{1F605}</abbr>.
Apr\xE8s plusieurs it\xE9rations et d'heures d'apprentissage des diff\xE9rents outils, le r\xE9sultat est tr\xE8s proche de la vision d'origine.</p>
<p><img src="@source/img/animForest/lastdruid_shadow_sun_in_tree.jpg" alt="portal"></p>
<p>Un d\xE9fi non pr\xE9vu a \xE9t\xE9 le suivant : Comment raconter l'histoire ?
Apr\xE8s quelques essais, la version sous-titr\xE9e a \xE9t\xE9 gard\xE9.</p>
<p>\u270D\uFE0F Un remerciement sp\xE9cial \xE0 <a href="https://www.facebook.com/diegosaavedrarenaud" target="_blank" rel="noopener noreferrer">Diego Saavedra<ExternalLinkIcon/></a> pour son aide \xE0 l'\xE9criture de l'histoire.</p>
<p><strong>Vid\xE9o</strong></p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/cQqn5H3E-uw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="une-fin-de-semaine-au-chalet" tabindex="-1"><a class="header-anchor" href="#une-fin-de-semaine-au-chalet" aria-hidden="true">#</a> Une fin de semaine au chalet</h2>
<blockquote>
<p><code>Unity 2019.1.14f1</code> <code>Animation</code>  - Ao\xFBt 2019</p>
</blockquote>
<blockquote>
<p><em>\xC0 quoi ressemblerait une fin de semaine id\xE9ale ?</em>
\xCAtre tranquille au chalet, un petit feu de camp, \xE9couter la nature et s'assoupir lors d'un coucher de soleil.</p>
</blockquote>
<p>Compl\xE8tement r\xE9alis\xE9 avec des assets gratuit, son d'ambiance enregistr\xE9 moi-m\xEAme et nettoy\xE9 avec Audacity.</p>
<p><img src="@source/img/cabin/old_Cabin_woods.jpg" alt="chalet"></p>
<p><strong>Vid\xE9o</strong></p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/1sNtYfWZV08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="labyrinthe-inverse" tabindex="-1"><a class="header-anchor" href="#labyrinthe-inverse" aria-hidden="true">#</a> Labyrinthe invers\xE9</h2>
<blockquote>
<p><code>Unity 2019.1.14f1</code> <code>Bosca Ceoil</code> <code>AI</code> <code>NavMesh</code> - Ao\xFBt 2019</p>
</blockquote>
<p>Mouvement avec le <a href="https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html" target="_blank" rel="noopener noreferrer">NavMesh<ExternalLinkIcon/></a> d'Unity et cr\xE9ation d'une ambiance sonore avec <a href="https://boscaceoil.net/" target="_blank" rel="noopener noreferrer">Bosca Ceoil<ExternalLinkIcon/></a>.</p>
<p><img src="@source/img/aiMaze/image_aiMaze.jpg" alt="aiMaze"></p>
<p><strong>Vid\xE9o avec la bande sonore</strong></p>
<p><video controls width="500"><source :src="$withBase('/videos/aiMaze.webm')" type="video/webm">
Sorry, your browser doesn't support embedded videos.
</video></p>
<h2 id="rouler-en-mode-retro" tabindex="-1"><a class="header-anchor" href="#rouler-en-mode-retro" aria-hidden="true">#</a> Rouler en mode r\xE9tro</h2>
<p>Unity 2019.1.13f1 - ao\xFBt 2019</p>
<p>Une bille qui roule, comment rendre le concept plus int\xE9ressant ?</p>
<div class="glow">Synthwave !</div>
<ul>
<li>Utilisation de perspectives simulant un avancement sans fin</li>
<li>La bille interagit avec le sol et essaie de trouver le meilleur chemin pour avancer</li>
<li>Arches donnant une sensation d'avancement</li>
<li><a href="https://lefebvre.dev/demo_unity_80s_WebGL/index.html" target="_blank" rel="noopener noreferrer">Version en ligne<ExternalLinkIcon/></a> (le sol est diff\xE9rent d\xFB \xE0 une incompatibilit\xE9 avec le shader en WebGL)</li>
<li>Code disponible sur <a href="https://github.com/SamLefebvre/retro-80s-wireframe" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></li>
</ul>
<p><img src="@source/img/synthwave.jpg" alt="synthwave"></p>
<h2 id="interface-musicale" tabindex="-1"><a class="header-anchor" href="#interface-musicale" aria-hidden="true">#</a> Interface musicale</h2>
<p>Unity 2019.1.1f1 - ao\xFBt 2019</p>
<p>Dans le cadre de mon cours <em>GTI745 - Interfaces utilisateurs avanc\xE9es</em> \xE0 l'\xC9TS, le dernier laboratoire a \xE9t\xE9 de faire un jeu permettant de cr\xE9er de la musique. Un magnifique travail d'\xE9quipe en seulement quelques semaines.</p>
<p><strong>Interface principale</strong> : S\xE9quenceur musical avec une console permettant d'ajuster le son.</p>
<p><img src="@source/img/gti745/gti745_unity_sound_matrix.jpg" alt="sound matrix"></p>
<p><strong>D\xE9mo sur Youtube</strong></p>
<div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/UJGDZKN5E0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<ul>
<li>Utilisation de <a href="https://www.leapmotion.com/" target="_blank" rel="noopener noreferrer">Leap Motion<ExternalLinkIcon/></a>, permettant de contr\xF4ler les \xE9l\xE9ments de la matrice en temps r\xE9el avec nos mains pour un contr\xF4le plus immersif.</li>
</ul>
<p><strong>Un (petit) monde \xE0 explorer</strong> : Le joueur doit se promener dans un monde 3d pour ramasser diff\xE9rents \xE9l\xE9ments musicaux.
<img src="@source/img/gti745/gti745_unity_open_world.jpg" alt="gti745_unity_open_world"></p>
<ul>
<li>Package <a href="https://docs.unity3d.com/Packages/com.unity.terrain-tools@latest" target="_blank" rel="noopener noreferrer">Terrain Tools<ExternalLinkIcon/></a></li>
<li><a href="https://assetstore.unity.com/packages/2d/textures-materials/terrain-tools-sample-asset-pack-145808" target="_blank" rel="noopener noreferrer">Terrain Tools Sample Asset Pack<ExternalLinkIcon/></a></li>
</ul>
<p><strong>Dispositif haptique (vibration)</strong> : Permets de donner une petite sensation \xE0 l'utilisateur lorsqu'il &quot;touche&quot; \xE0 un objet, plus pr\xE9cis\xE9ment lorsque la <em>Leap Motion</em> rentre en contact avec un \xE9l\xE9ment de la matrice.
<img src="@source/img/gti745/gti745_schema_circuitPlaygroundExpress.jpg" alt="gti745_schema_circuitPlaygroundExpress"></p>
<ul>
<li>Moteur vibrotactile contr\xF4l\xE9 avec python sur syst\xE8me embarqu\xE9
<ul>
<li><a href="https://www.adafruit.com/product/1201" target="_blank" rel="noopener noreferrer">Vibrating Mini Motor Disc<ExternalLinkIcon/></a></li>
<li><a href="https://www.adafruit.com/product/2305" target="_blank" rel="noopener noreferrer">Adafruit DRV2605L Haptic Motor Controller<ExternalLinkIcon/></a></li>
<li><a href="https://www.adafruit.com/product/3333" target="_blank" rel="noopener noreferrer">Circuit Playground Express<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<p><strong>Diagramme du circuit \xE9lectrique</strong>
<img src="@source/img/gti745/gti745_fritzing_diagram.png" alt="gti745_fritzing_diagram"></p>
<ul>
<li>Dessin\xE9 \xE0 l'aide de <a href="https://fritzing.org/home/" target="_blank" rel="noopener noreferrer">Fritzing<ExternalLinkIcon/></a></li>
</ul>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/portfolio/unity.html",pathLocale:"/",permalink:null,routeMeta:{title:"Unity"},slug:"unity",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/portfolio/unity.md",filePathRelative:"portfolio/unity.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/portfolio/unity.html.vue",componentFilePathRelative:"pages/portfolio/unity.html.vue",componentFileChunkName:"v-52103624",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/portfolio/unity.html.js",dataFilePathRelative:"pages/portfolio/unity.html.js",dataFileChunkName:"v-52103624",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/portfolio/unity.html",htmlFilePathRelative:"portfolio/unity.html"},{data:{key:"v-7271bda5",path:"/portfolio/web.html",title:"Web",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"Expensify",slug:"expensify",children:[]},{level:2,title:"Synaps\xC9TS",slug:"synapsets",children:[]}],git:{updatedTime:1594768133e3},filePathRelative:"portfolio/web.md"},key:"v-7271bda5",path:"/portfolio/web.html",title:"Web",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[{level:2,title:"Expensify",slug:"expensify",children:[]},{level:2,title:"Synaps\xC9TS",slug:"synapsets",children:[]}],content:`# Web\r
\r
## [Expensify](https://cryptic-woodland-49105.herokuapp.com)\r
\r
> \`React\`\r
\r
Fait en suivant le cours [The Complete React Developer Course](https://www.udemy.com/react-2nd-edition) de React sur Udemy.\r
\r
- React 16.8.6\r
- Login avec Firebase\r
- Test automatis\xE9 avec [Enzyme](https://airbnb.io/enzyme/)\r
\r
![expensify_login](~@assets/img/expensify_login.jpg =800x)\r
![expensify_dashboard](~@assets/img/expensify_dashboard.jpg =800x)\r
\r
\r
## [Synaps\xC9TS](https://synapsets.etsmtl.ca)\r
\r
> \`Vuepress\` \`GitHub Page\`\r
\r
Synaps\xC9TS est un nouveau club \xE9tudiant \xE0 vocation scientifique de l'\xC9cole de technologie sup\xE9rieure et sp\xE9cialis\xE9 en Interface Cerveau-Machine (ICM / BCI). Rassemblant tous les domaines d'expertise de l'universit\xE9, ce groupe d'\xE9tudiants concentre ses activit\xE9s autour de l'analyse et du traitement de signaux c\xE9r\xE9braux ainsi que dans le d\xE9veloppement de technologies dans ce domaine.\r
\r
[![Synaps\xC9TS Website](~@assets/img/web_synapsets.jpg =800x)](https://synapsets.etsmtl.ca)`,contentRendered:`<h1 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> Web</h1>
<h2 id="expensify" tabindex="-1"><a class="header-anchor" href="#expensify" aria-hidden="true">#</a> <a href="https://cryptic-woodland-49105.herokuapp.com" target="_blank" rel="noopener noreferrer">Expensify<ExternalLinkIcon/></a></h2>
<blockquote>
<p><code>React</code></p>
</blockquote>
<p>Fait en suivant le cours <a href="https://www.udemy.com/react-2nd-edition" target="_blank" rel="noopener noreferrer">The Complete React Developer Course<ExternalLinkIcon/></a> de React sur Udemy.</p>
<ul>
<li>React 16.8.6</li>
<li>Login avec Firebase</li>
<li>Test automatis\xE9 avec <a href="https://airbnb.io/enzyme/" target="_blank" rel="noopener noreferrer">Enzyme<ExternalLinkIcon/></a></li>
</ul>
<p>![expensify_login](~@assets/img/expensify_login.jpg =800x)
![expensify_dashboard](~@assets/img/expensify_dashboard.jpg =800x)</p>
<h2 id="synapsets" tabindex="-1"><a class="header-anchor" href="#synapsets" aria-hidden="true">#</a> <a href="https://synapsets.etsmtl.ca" target="_blank" rel="noopener noreferrer">Synaps\xC9TS<ExternalLinkIcon/></a></h2>
<blockquote>
<p><code>Vuepress</code> <code>GitHub Page</code></p>
</blockquote>
<p>Synaps\xC9TS est un nouveau club \xE9tudiant \xE0 vocation scientifique de l'\xC9cole de technologie sup\xE9rieure et sp\xE9cialis\xE9 en Interface Cerveau-Machine (ICM / BCI). Rassemblant tous les domaines d'expertise de l'universit\xE9, ce groupe d'\xE9tudiants concentre ses activit\xE9s autour de l'analyse et du traitement de signaux c\xE9r\xE9braux ainsi que dans le d\xE9veloppement de technologies dans ce domaine.</p>
<p><a href="https://synapsets.etsmtl.ca" target="_blank" rel="noopener noreferrer">![Synaps\xC9TS Website](~@assets/img/web_synapsets.jpg =800x)<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/portfolio/web.html",pathLocale:"/",permalink:null,routeMeta:{title:"Web"},slug:"web",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/portfolio/web.md",filePathRelative:"portfolio/web.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/portfolio/web.html.vue",componentFilePathRelative:"pages/portfolio/web.html.vue",componentFileChunkName:"v-7271bda5",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/portfolio/web.html.js",dataFilePathRelative:"pages/portfolio/web.html.js",dataFileChunkName:"v-7271bda5",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/portfolio/web.html",htmlFilePathRelative:"portfolio/web.html"},{data:{key:"v-76a3c89d",path:"/projects/labyrintheBlender.html",title:"Labyrinthe dynamique avec Blender",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Labyrinthe dynamique avec Blender",description:"Dans ce projet Blender, le but a \xE9t\xE9 de produire de fa\xE7on dynamique un labyrinthe en se basant sur une image. Les zones noirs et blanc de l'image sont extraites pour produire une carte de hauteur, et c'est par ces emplacements que les cubes sont plac\xE9s. Les cubes sont ensuite align\xE9s vers le milieu pour produire un effet de cercle.",author:"Sam",type:"project",creationDate:"F\xE9vrier 2022",date:"2022-02-20T00:00:00.000Z",posterImage:"geometryNodeMaze.png"},excerpt:"",headers:[],git:{updatedTime:164538338e4},filePathRelative:"projects/labyrintheBlender.md"},key:"v-76a3c89d",path:"/projects/labyrintheBlender.html",title:"Labyrinthe dynamique avec Blender",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Labyrinthe dynamique avec Blender",description:"Dans ce projet Blender, le but a \xE9t\xE9 de produire de fa\xE7on dynamique un labyrinthe en se basant sur une image. Les zones noirs et blanc de l'image sont extraites pour produire une carte de hauteur, et c'est par ces emplacements que les cubes sont plac\xE9s. Les cubes sont ensuite align\xE9s vers le milieu pour produire un effet de cercle.",author:"Sam",type:"project",creationDate:"F\xE9vrier 2022",date:"2022-02-20T00:00:00.000Z",posterImage:"geometryNodeMaze.png"},excerpt:"",headers:[],content:`\r
# Labyrinthe dynamique avec Blender\r
\r
\`Geometry Node\`, \`Blender\`, \`G\xE9n\xE9ration Procedurale\`\r
\r
Dans ce projet Blender, le but a \xE9t\xE9 de produire de fa\xE7on dynamique un labyrinthe en se basant sur une image utilisant le Geometry Node de Blender. \r
Les zones noirs et blanc de l'image sont extraites pour produire une carte de hauteur, et c'est par ces emplacements que les cubes sont plac\xE9s.\r
Les cubes sont ensuite align\xE9s vers le milieu pour produire un effet de cercle.\r
\r
![blender](./Blender_GeometryNode_Maze.png)\r
\r
Partie Geometry Node\r
![blender](./Blender_GeometryNode_MazeFromPicture.png)\r
`,contentRendered:`<h1 id="labyrinthe-dynamique-avec-blender" tabindex="-1"><a class="header-anchor" href="#labyrinthe-dynamique-avec-blender" aria-hidden="true">#</a> Labyrinthe dynamique avec Blender</h1>
<p><code>Geometry Node</code>, <code>Blender</code>, <code>G\xE9n\xE9ration Procedurale</code></p>
<p>Dans ce projet Blender, le but a \xE9t\xE9 de produire de fa\xE7on dynamique un labyrinthe en se basant sur une image utilisant le Geometry Node de Blender.
Les zones noirs et blanc de l'image sont extraites pour produire une carte de hauteur, et c'est par ces emplacements que les cubes sont plac\xE9s.
Les cubes sont ensuite align\xE9s vers le milieu pour produire un effet de cercle.</p>
<p><img src="@source/projects/Blender_GeometryNode_Maze.png" alt="blender"></p>
<p>Partie Geometry Node
<img src="@source/projects/Blender_GeometryNode_MazeFromPicture.png" alt="blender"></p>
`,date:"2022-02-20",deps:[],hoistedTags:[],links:[],pathInferred:"/projects/labyrintheBlender.html",pathLocale:"/",permalink:null,routeMeta:{title:"Labyrinthe dynamique avec Blender"},slug:"labyrintheBlender",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/projects/labyrintheBlender.md",filePathRelative:"projects/labyrintheBlender.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/projects/labyrintheBlender.html.vue",componentFilePathRelative:"pages/projects/labyrintheBlender.html.vue",componentFileChunkName:"v-76a3c89d",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/projects/labyrintheBlender.html.js",dataFilePathRelative:"pages/projects/labyrintheBlender.html.js",dataFileChunkName:"v-76a3c89d",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/projects/labyrintheBlender.html",htmlFilePathRelative:"projects/labyrintheBlender.html"},{data:{key:"v-6dc367c8",path:"/projects/",title:"Projets",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:164538338e4},filePathRelative:"projects/readme.md"},key:"v-6dc367c8",path:"/projects/",title:"Projets",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],content:`# Projets\r
\r
Mes diff\xE9rents projets, r\xE9alis\xE9 \xE0 l'aide d'Unity, Blender ou de tout autre medium.\r
\r
<Posts articleType="project" />`,contentRendered:`<h1 id="projets" tabindex="-1"><a class="header-anchor" href="#projets" aria-hidden="true">#</a> Projets</h1>
<p>Mes diff\xE9rents projets, r\xE9alis\xE9 \xE0 l'aide d'Unity, Blender ou de tout autre medium.</p>
<Posts articleType="project" />`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/projects/",pathLocale:"/",permalink:null,routeMeta:{title:"Projets"},slug:"readme",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/projects/readme.md",filePathRelative:"projects/readme.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/projects/index.html.vue",componentFilePathRelative:"pages/projects/index.html.vue",componentFileChunkName:"v-6dc367c8",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/projects/index.html.js",dataFilePathRelative:"pages/projects/index.html.js",dataFileChunkName:"v-6dc367c8",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/projects/index.html",htmlFilePathRelative:"projects/index.html"},{data:{key:"v-13671bfa",path:"/projects/template.html",title:"Template projet",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Template projet",description:"Remplir la description",author:"Sam",type:"Xproject",creationDate:"Janvier 2022",date:"2022-02-01T00:00:00.000Z",posterImage:null},excerpt:"",headers:[],git:{updatedTime:164538338e4},filePathRelative:"projects/template.md"},key:"v-13671bfa",path:"/projects/template.html",title:"Template projet",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Template projet",description:"Remplir la description",author:"Sam",type:"Xproject",creationDate:"Janvier 2022",date:"2022-02-01T00:00:00.000Z",posterImage:null},excerpt:"",headers:[],content:`\r
# Template projet\r
...`,contentRendered:`<h1 id="template-projet" tabindex="-1"><a class="header-anchor" href="#template-projet" aria-hidden="true">#</a> Template projet</h1>
<p>...</p>
`,date:"2022-02-01",deps:[],hoistedTags:[],links:[],pathInferred:"/projects/template.html",pathLocale:"/",permalink:null,routeMeta:{title:"Template projet"},slug:"template",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/projects/template.md",filePathRelative:"projects/template.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/projects/template.html.vue",componentFilePathRelative:"pages/projects/template.html.vue",componentFileChunkName:"v-13671bfa",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/projects/template.html.js",dataFilePathRelative:"pages/projects/template.html.js",dataFileChunkName:"v-13671bfa",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/projects/template.html",htmlFilePathRelative:"projects/template.html"},{data:{key:"v-4b85d886",path:"/tutorials/fracturationBlenderUnity.html",title:"Fracturation objets et simulation",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Fracturation objets et simulation",description:"Fracturation d'objet avec Blender et simulation de physique avec Unity.",author:"Sam",type:"tutorial",creationDate:"Janvier 2022",date:"2022-02-05T00:00:00.000Z",posterImage:"fracturation.jpg"},excerpt:"",headers:[],git:{updatedTime:1646678075e3},filePathRelative:"tutorials/fracturationBlenderUnity.md"},key:"v-4b85d886",path:"/tutorials/fracturationBlenderUnity.html",title:"Fracturation objets et simulation",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Fracturation objets et simulation",description:"Fracturation d'objet avec Blender et simulation de physique avec Unity.",author:"Sam",type:"tutorial",creationDate:"Janvier 2022",date:"2022-02-05T00:00:00.000Z",posterImage:"fracturation.jpg"},excerpt:"",headers:[],content:`\r
# Fracturation objets et simulation\r
\r
Dans ce tutoriel, j'explique comment fracturer un objet \xE0 l'aide de Blender, pour ensuite simuler la physique dans Unity.\r
\r
\r
Aper\xE7u de l'effet\r
\r
<video preload="metadata" controls loop="true" width="500" :poster="$withBase('/images/fracturation_video_poster.jpg')"><source :src="$withBase('/videos/fracturation.mp4')" type="video/mp4">\r
    Votre navigateur ne prend pas en charge les vid\xE9os HTML5.\r
</video>\r
\r
Tutoriel expliquant comment reproduire l'effet.\r
\r
<div class="youtubeVideo">\r
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UncceWPflvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
Mod\xE8le 3d : [Winged Victory of Samothrace](https://www.myminifactory.com/object/3d-print-winged-victory-of-samothrace-2073) \r
`,contentRendered:`<h1 id="fracturation-objets-et-simulation" tabindex="-1"><a class="header-anchor" href="#fracturation-objets-et-simulation" aria-hidden="true">#</a> Fracturation objets et simulation</h1>
<p>Dans ce tutoriel, j'explique comment fracturer un objet \xE0 l'aide de Blender, pour ensuite simuler la physique dans Unity.</p>
<p>Aper\xE7u de l'effet</p>
<p><video preload="metadata" controls loop="true" width="500" :poster="$withBase('/images/fracturation_video_poster.jpg')"><source :src="$withBase('/videos/fracturation.mp4')" type="video/mp4">
Votre navigateur ne prend pas en charge les vid\xE9os HTML5.
</video></p>
<p>Tutoriel expliquant comment reproduire l'effet.</p>
<div class="youtubeVideo">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UncceWPflvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p>Mod\xE8le 3d : <a href="https://www.myminifactory.com/object/3d-print-winged-victory-of-samothrace-2073" target="_blank" rel="noopener noreferrer">Winged Victory of Samothrace<ExternalLinkIcon/></a></p>
`,date:"2022-02-05",deps:[],hoistedTags:[],links:[],pathInferred:"/tutorials/fracturationBlenderUnity.html",pathLocale:"/",permalink:null,routeMeta:{title:"Fracturation objets et simulation"},slug:"fracturationBlenderUnity",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/tutorials/fracturationBlenderUnity.md",filePathRelative:"tutorials/fracturationBlenderUnity.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/fracturationBlenderUnity.html.vue",componentFilePathRelative:"pages/tutorials/fracturationBlenderUnity.html.vue",componentFileChunkName:"v-4b85d886",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/fracturationBlenderUnity.html.js",dataFilePathRelative:"pages/tutorials/fracturationBlenderUnity.html.js",dataFileChunkName:"v-4b85d886",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/tutorials/fracturationBlenderUnity.html",htmlFilePathRelative:"tutorials/fracturationBlenderUnity.html"},{data:{key:"v-73293c0a",path:"/tutorials/interfaceUnity.html",title:"Exploration de l'interface d'Unity",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Exploration de l'interface d'Unity",description:"Dans ce tutoriel, l'interface d'Unity est montr\xE9e en d\xE9tail. En commen\xE7ant par les contr\xF4les de bases, soit la cam\xE9ra, les d\xE9placement d'objets avec la souris. En passant par une utilisation interm\xE9diateur de l'\xE9diteur (possibilit\xE9 d'utilisation de math\xE9matique dans les propri\xE9t\xE9s). Jusqu'\xE0 un contr\xF4le du positionnement des objets (rotation par la s\xE9lection des sommets, sans l'utilisation d'objets parents).",author:"Sam",type:"tutorial",creationDate:"Janvier 2022",date:"2022-02-13T00:00:00.000Z",posterImage:"interfaceUnity.jpg"},excerpt:"",headers:[{level:2,title:"Raccourcis clavier",slug:"raccourcis-clavier",children:[]},{level:2,title:"Nombre irrationnel",slug:"nombre-irrationnel",children:[]}],git:{updatedTime:1646678075e3},filePathRelative:"tutorials/interfaceUnity.md"},key:"v-73293c0a",path:"/tutorials/interfaceUnity.html",title:"Exploration de l'interface d'Unity",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Exploration de l'interface d'Unity",description:"Dans ce tutoriel, l'interface d'Unity est montr\xE9e en d\xE9tail. En commen\xE7ant par les contr\xF4les de bases, soit la cam\xE9ra, les d\xE9placement d'objets avec la souris. En passant par une utilisation interm\xE9diateur de l'\xE9diteur (possibilit\xE9 d'utilisation de math\xE9matique dans les propri\xE9t\xE9s). Jusqu'\xE0 un contr\xF4le du positionnement des objets (rotation par la s\xE9lection des sommets, sans l'utilisation d'objets parents).",author:"Sam",type:"tutorial",creationDate:"Janvier 2022",date:"2022-02-13T00:00:00.000Z",posterImage:"interfaceUnity.jpg"},excerpt:"",headers:[{level:2,title:"Raccourcis clavier",slug:"raccourcis-clavier",children:[]},{level:2,title:"Nombre irrationnel",slug:"nombre-irrationnel",children:[]}],content:`\r
# Exploration de l'interface d'Unity\r
\r
<EnableMathJax/>\r
\r
Dans ce tutoriel, l'interface d'Unity est montr\xE9e pour en profiter \xE0 son plein potentiel. Il s'agit de mieux comprendre comment fonctionne l'\xE9diteur.\r
Lorsqu'on utiliser un logiciel pour la premi\xE8re fois, il est souvent d\xE9concertant d'en conna\xEEtre les possibilit\xE9s, lorsque plusieurs des fonctionnalit\xE9s ne sont pas explicitent.\r
<div class="youtubeVideo">\r
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z7tyLZp1D_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>\r
\r
Lorsqu'on d\xE9bute dans un logiciel complexe, il est parfois difficile de s'imaginer les diff\xE9rentes possibilit\xE9s si l'on ne l'a jamais vu auparavant. Alors c'est dans cette id\xE9e que ce tutoriel a \xE9t\xE9 cr\xE9\xE9. De donner bri\xE8vement un aper\xE7u des possibilit\xE9s.\r
\r
Le tutoriel montre diff\xE9rents mouvements de base, en passant par une manipulation interm\xE9diaire et termine par des man\u0153uvres plus avanc\xE9es.\r
\r
## Raccourcis clavier\r
\r
Quelques raccourcis pratiques :\r
\r
- <kbd>F</kbd> Place la cam\xE9ra pour faire le **f**ocus sur l'objet s\xE9lectionn\xE9. Le curseur doit \xEAtre dans la fen\xEAtre Game pour que ce raccourci fonctionne.\r
- <kbd>Shift</kbd>+<kbd>H</kbd> N'affiche temporairement que les objets s\xE9lectionn\xE9s.\r
- Lors de la modification d'une propri\xE9t\xE9 (exemple la position en X), il est possible d'utiliser certaines op\xE9rations math\xE9matiques.\r
    - Parenth\xE8ses, \`(1+1)*2\` => \`4\`.\r
    - Exposants, \`4^2\` => \`16\`.\r
    - Multiplications, \`4*0.5\` => \`2\`.\r
    - Divisions, \`4/2\` => \`2\`.\r
    - Additions, \`1+1\` => \`2\`.\r
    - Soustractions, \`3-1\` => \`2\`.\r
    - Modulos, \`5%2\` => \`1\`.\r
    - Notation scientifique,  \`4.87e+03\` => \`4870\`.\r
\r
## Nombre irrationnel\r
Pour entrer un nombre irrationnel, par exemple le cercle trigonom\xE9trique, il est possible de le rentrer directement au lieu de rentrer une approximation.\r
\r
$$\r
\\textrm{P} \\left( \\frac{\\pi}{6}\\right) \\Rightarrow  \\left(\\cos{\\left( \\frac{\\pi}{6}\\right)} , \\sin{\\left( \\frac{\\pi}{6}\\right)}\\right) \\equiv \\left( \\frac{\\sqrt{3}}{2}, \\frac{1}{2} \\right)\\approx \\left( 0.866,0.5 \\right)  \r
$$\r
\r
Dans cet exemple \\\\( \\cos\\left(\\frac{\\pi}{6}\\right) \\\\) est \xE9quivalent \xE0 \\\\( \\left(\\frac{\\sqrt{3}}{2}\\right) \\\\), qui peux s'approximer par  0.8660254037844386467637231707529361834714026269051903140279034897...\r
\r
Ce qui est relativement long \xE0 \xE9crire. Pour ce faire, il est possible d'\xE9crire directement le nombre irrationnel de cette fa\xE7on : <code>(3^0.5)/2</code>.`,contentRendered:`<h1 id="exploration-de-l-interface-d-unity" tabindex="-1"><a class="header-anchor" href="#exploration-de-l-interface-d-unity" aria-hidden="true">#</a> Exploration de l'interface d'Unity</h1>
<EnableMathJax/>
<p>Dans ce tutoriel, l'interface d'Unity est montr\xE9e pour en profiter \xE0 son plein potentiel. Il s'agit de mieux comprendre comment fonctionne l'\xE9diteur.
Lorsqu'on utiliser un logiciel pour la premi\xE8re fois, il est souvent d\xE9concertant d'en conna\xEEtre les possibilit\xE9s, lorsque plusieurs des fonctionnalit\xE9s ne sont pas explicitent.</p>
<div class="youtubeVideo">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z7tyLZp1D_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p>Lorsqu'on d\xE9bute dans un logiciel complexe, il est parfois difficile de s'imaginer les diff\xE9rentes possibilit\xE9s si l'on ne l'a jamais vu auparavant. Alors c'est dans cette id\xE9e que ce tutoriel a \xE9t\xE9 cr\xE9\xE9. De donner bri\xE8vement un aper\xE7u des possibilit\xE9s.</p>
<p>Le tutoriel montre diff\xE9rents mouvements de base, en passant par une manipulation interm\xE9diaire et termine par des man\u0153uvres plus avanc\xE9es.</p>
<h2 id="raccourcis-clavier" tabindex="-1"><a class="header-anchor" href="#raccourcis-clavier" aria-hidden="true">#</a> Raccourcis clavier</h2>
<p>Quelques raccourcis pratiques :</p>
<ul>
<li><kbd>F</kbd> Place la cam\xE9ra pour faire le <strong>f</strong>ocus sur l'objet s\xE9lectionn\xE9. Le curseur doit \xEAtre dans la fen\xEAtre Game pour que ce raccourci fonctionne.</li>
<li><kbd>Shift</kbd>+<kbd>H</kbd> N'affiche temporairement que les objets s\xE9lectionn\xE9s.</li>
<li>Lors de la modification d'une propri\xE9t\xE9 (exemple la position en X), il est possible d'utiliser certaines op\xE9rations math\xE9matiques.
<ul>
<li>Parenth\xE8ses, <code>(1+1)*2</code> =&gt; <code>4</code>.</li>
<li>Exposants, <code>4^2</code> =&gt; <code>16</code>.</li>
<li>Multiplications, <code>4*0.5</code> =&gt; <code>2</code>.</li>
<li>Divisions, <code>4/2</code> =&gt; <code>2</code>.</li>
<li>Additions, <code>1+1</code> =&gt; <code>2</code>.</li>
<li>Soustractions, <code>3-1</code> =&gt; <code>2</code>.</li>
<li>Modulos, <code>5%2</code> =&gt; <code>1</code>.</li>
<li>Notation scientifique,  <code>4.87e+03</code> =&gt; <code>4870</code>.</li>
</ul>
</li>
</ul>
<h2 id="nombre-irrationnel" tabindex="-1"><a class="header-anchor" href="#nombre-irrationnel" aria-hidden="true">#</a> Nombre irrationnel</h2>
<p>Pour entrer un nombre irrationnel, par exemple le cercle trigonom\xE9trique, il est possible de le rentrer directement au lieu de rentrer une approximation.</p>
<p>$$
\\textrm{P} \\left( \\frac{\\pi}{6}\\right) \\Rightarrow  \\left(\\cos{\\left( \\frac{\\pi}{6}\\right)} , \\sin{\\left( \\frac{\\pi}{6}\\right)}\\right) \\equiv \\left( \\frac{\\sqrt{3}}{2}, \\frac{1}{2} \\right)\\approx \\left( 0.866,0.5 \\right)<br>
$$</p>
<p>Dans cet exemple \\( \\cos\\left(\\frac{\\pi}{6}\\right) \\) est \xE9quivalent \xE0 \\( \\left(\\frac{\\sqrt{3}}{2}\\right) \\), qui peux s'approximer par  0.8660254037844386467637231707529361834714026269051903140279034897...</p>
<p>Ce qui est relativement long \xE0 \xE9crire. Pour ce faire, il est possible d'\xE9crire directement le nombre irrationnel de cette fa\xE7on : <code>(3^0.5)/2</code>.</p>
`,date:"2022-02-13",deps:[],hoistedTags:[],links:[],pathInferred:"/tutorials/interfaceUnity.html",pathLocale:"/",permalink:null,routeMeta:{title:"Exploration de l'interface d'Unity"},slug:"interfaceUnity",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/tutorials/interfaceUnity.md",filePathRelative:"tutorials/interfaceUnity.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/interfaceUnity.html.vue",componentFilePathRelative:"pages/tutorials/interfaceUnity.html.vue",componentFileChunkName:"v-73293c0a",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/interfaceUnity.html.js",dataFilePathRelative:"pages/tutorials/interfaceUnity.html.js",dataFileChunkName:"v-73293c0a",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/tutorials/interfaceUnity.html",htmlFilePathRelative:"tutorials/interfaceUnity.html"},{data:{key:"v-0efe29b3",path:"/tutorials/",title:"Tutoriels",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:164538338e4},filePathRelative:"tutorials/readme.md"},key:"v-0efe29b3",path:"/tutorials/",title:"Tutoriels",lang:"fr-CA",frontmatter:{},excerpt:"",headers:[],content:`# Tutoriels\r
\r
> \xABSi vous voulez ma\xEEtriser une mati\xE8re, enseignez-l\xE0.\xBB - Richard Feynman\r
\r
L'une des meilleurs techniques pour s'assurer de bien ma\xEEtriser une mati\xE8re est de l'enseigner. Quelqu'un ma\xEEtrisant r\xE9ellement sa mati\xE8re pourra l'enseigner \xE0 tout les niveaux d'\xE9ducation. Si un chercheur en physique quantique n'arrive pas \xE0 expliquer sa recherche \xE0 un enfant, c'est qu'il ne la ma\xEEtrise pas. \r
\r
C'est en gardant \xE0 l'esprit cette citation que ces diff\xE9rents tutoriel ont \xE9t\xE9 r\xE9alis\xE9.\r
\r
Bonne lecture / \xE9coute !\r
\r
<Posts articleType="tutorial" />`,contentRendered:`<h1 id="tutoriels" tabindex="-1"><a class="header-anchor" href="#tutoriels" aria-hidden="true">#</a> Tutoriels</h1>
<blockquote>
<p>\xABSi vous voulez ma\xEEtriser une mati\xE8re, enseignez-l\xE0.\xBB - Richard Feynman</p>
</blockquote>
<p>L'une des meilleurs techniques pour s'assurer de bien ma\xEEtriser une mati\xE8re est de l'enseigner. Quelqu'un ma\xEEtrisant r\xE9ellement sa mati\xE8re pourra l'enseigner \xE0 tout les niveaux d'\xE9ducation. Si un chercheur en physique quantique n'arrive pas \xE0 expliquer sa recherche \xE0 un enfant, c'est qu'il ne la ma\xEEtrise pas.</p>
<p>C'est en gardant \xE0 l'esprit cette citation que ces diff\xE9rents tutoriel ont \xE9t\xE9 r\xE9alis\xE9.</p>
<p>Bonne lecture / \xE9coute !</p>
<Posts articleType="tutorial" />`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/tutorials/",pathLocale:"/",permalink:null,routeMeta:{title:"Tutoriels"},slug:"readme",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/tutorials/readme.md",filePathRelative:"tutorials/readme.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/index.html.vue",componentFilePathRelative:"pages/tutorials/index.html.vue",componentFileChunkName:"v-0efe29b3",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/index.html.js",dataFilePathRelative:"pages/tutorials/index.html.js",dataFileChunkName:"v-0efe29b3",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/tutorials/index.html",htmlFilePathRelative:"tutorials/index.html"},{data:{key:"v-491093e4",path:"/tutorials/teachableMachine.html",title:"Apprentissage machine simplifi\xE9",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Apprentissage machine simplifi\xE9",description:"Tutoriel montrant comment cr\xE9er un syst\xE8me de reconnaissance d'images et l'utiliser dans Unity, en moins de 25 minutes.",author:"Sam",type:"tutorial",creationDate:"F\xE9vrier 2021",date:"2021-02-22T00:00:00.000Z",posterImage:null},excerpt:"",headers:[],git:{updatedTime:1646678075e3},filePathRelative:"tutorials/teachableMachine.md"},key:"v-491093e4",path:"/tutorials/teachableMachine.html",title:"Apprentissage machine simplifi\xE9",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Apprentissage machine simplifi\xE9",description:"Tutoriel montrant comment cr\xE9er un syst\xE8me de reconnaissance d'images et l'utiliser dans Unity, en moins de 25 minutes.",author:"Sam",type:"tutorial",creationDate:"F\xE9vrier 2021",date:"2021-02-22T00:00:00.000Z",posterImage:null},excerpt:"",headers:[],content:`\r
# Teachable Machine\r
\r
[Teachable Machine](https://teachablemachine.withgoogle.com/), est un outil de Google permettant la reconnaissance d'images, de sons et de posture \xE0 m\xEAme le navigateur, le tout en quelques minutes.\r
\r
\r
Cet outil est pratique pour effectuer des prototypes rapide, sans avoir \xE0 passer des heures \xE0 coder et \xE0 entra\xEEner un syst\xE8me d'apprentissage automatique d'images.\r
\r
La question que je me suis demand\xE9 : \xABComment utiliser cet outil dans Unity ?\xBB. N'ayant pas trouv\xE9 de solution \xE0 ce cas atypique, j'ai trouv\xE9 qu'en reliant \xE0 l'aide du protocole WebSocket le navigateur internet et Unity, il est possible de transmettre les informations de Teachable Machine \xE0 Unity.\r
\r
Bonne \xE9coute !\r
\r
<div class="youtubeVideo">\r
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NxIpr2yn21M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\r
</div>`,contentRendered:`<h1 id="teachable-machine" tabindex="-1"><a class="header-anchor" href="#teachable-machine" aria-hidden="true">#</a> Teachable Machine</h1>
<p><a href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener noreferrer">Teachable Machine<ExternalLinkIcon/></a>, est un outil de Google permettant la reconnaissance d'images, de sons et de posture \xE0 m\xEAme le navigateur, le tout en quelques minutes.</p>
<p>Cet outil est pratique pour effectuer des prototypes rapide, sans avoir \xE0 passer des heures \xE0 coder et \xE0 entra\xEEner un syst\xE8me d'apprentissage automatique d'images.</p>
<p>La question que je me suis demand\xE9 : \xABComment utiliser cet outil dans Unity ?\xBB. N'ayant pas trouv\xE9 de solution \xE0 ce cas atypique, j'ai trouv\xE9 qu'en reliant \xE0 l'aide du protocole WebSocket le navigateur internet et Unity, il est possible de transmettre les informations de Teachable Machine \xE0 Unity.</p>
<p>Bonne \xE9coute !</p>
<div class="youtubeVideo">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NxIpr2yn21M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`,date:"2021-02-22",deps:[],hoistedTags:[],links:[],pathInferred:"/tutorials/teachableMachine.html",pathLocale:"/",permalink:null,routeMeta:{title:"Apprentissage machine simplifi\xE9"},slug:"teachableMachine",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/tutorials/teachableMachine.md",filePathRelative:"tutorials/teachableMachine.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/teachableMachine.html.vue",componentFilePathRelative:"pages/tutorials/teachableMachine.html.vue",componentFileChunkName:"v-491093e4",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/teachableMachine.html.js",dataFilePathRelative:"pages/tutorials/teachableMachine.html.js",dataFileChunkName:"v-491093e4",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/tutorials/teachableMachine.html",htmlFilePathRelative:"tutorials/teachableMachine.html"},{data:{key:"v-23ada1cc",path:"/tutorials/template.html",title:"Template tutoriel",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Template tutoriel",description:"Remplir la description",author:"Sam",type:"Xtutorial",creationDate:"Janvier 2022",date:"2022-02-10T00:00:00.000Z",posterImage:null},excerpt:"",headers:[],git:{updatedTime:164538338e4},filePathRelative:"tutorials/template.md"},key:"v-23ada1cc",path:"/tutorials/template.html",title:"Template tutoriel",lang:"fr-CA",frontmatter:{lang:"fr-CA",title:"Template tutoriel",description:"Remplir la description",author:"Sam",type:"Xtutorial",creationDate:"Janvier 2022",date:"2022-02-10T00:00:00.000Z",posterImage:null},excerpt:"",headers:[],content:`\r
# Template tutoriel\r
\r
...`,contentRendered:`<h1 id="template-tutoriel" tabindex="-1"><a class="header-anchor" href="#template-tutoriel" aria-hidden="true">#</a> Template tutoriel</h1>
<p>...</p>
`,date:"2022-02-10",deps:[],hoistedTags:[],links:[],pathInferred:"/tutorials/template.html",pathLocale:"/",permalink:null,routeMeta:{title:"Template tutoriel"},slug:"template",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/tutorials/template.md",filePathRelative:"tutorials/template.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/template.html.vue",componentFilePathRelative:"pages/tutorials/template.html.vue",componentFileChunkName:"v-23ada1cc",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/tutorials/template.html.js",dataFilePathRelative:"pages/tutorials/template.html.js",dataFileChunkName:"v-23ada1cc",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/tutorials/template.html",htmlFilePathRelative:"tutorials/template.html"},{data:{key:"v-506407f4",path:"/en/article/",title:"Article",lang:"en-US",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1555707075e3},filePathRelative:"en/article/README.md"},key:"v-506407f4",path:"/en/article/",title:"Article",lang:"en-US",frontmatter:{},excerpt:"",headers:[],content:`\r
# Article\r
\r
<i class="fas fa-file-alt fa-4x"></i>`,contentRendered:`<h1 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> Article</h1>
<p><i class="fas fa-file-alt fa-4x"></i></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/article/",pathLocale:"/en/",permalink:null,routeMeta:{title:"Article"},slug:"README",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/en/article/README.md",filePathRelative:"en/article/README.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/article/index.html.vue",componentFilePathRelative:"pages/en/article/index.html.vue",componentFileChunkName:"v-506407f4",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/article/index.html.js",dataFilePathRelative:"pages/en/article/index.html.js",dataFileChunkName:"v-506407f4",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/en/article/index.html",htmlFilePathRelative:"en/article/index.html"},{data:{key:"v-439c2d52",path:"/en/article/secure-access-with-ssh-keys.html",title:"Implement SSH Keys",lang:"en-US",frontmatter:{title:"Implement SSH Keys"},excerpt:"",headers:[{level:2,title:"Install a terminal",slug:"install-a-terminal",children:[]},{level:2,title:"Check for existing SSH keys",slug:"check-for-existing-ssh-keys",children:[]},{level:2,title:"Generate new SSH keys",slug:"generate-new-ssh-keys",children:[]},{level:2,title:"Copy your public key to your device",slug:"copy-your-public-key-to-your-device",children:[]},{level:2,title:"Disable password authentication",slug:"disable-password-authentication",children:[]}],git:{updatedTime:1555870246e3},filePathRelative:"en/article/secure-access-with-ssh-keys.md"},key:"v-439c2d52",path:"/en/article/secure-access-with-ssh-keys.html",title:"Implement SSH Keys",lang:"en-US",frontmatter:{title:"Implement SSH Keys"},excerpt:"",headers:[{level:2,title:"Install a terminal",slug:"install-a-terminal",children:[]},{level:2,title:"Check for existing SSH keys",slug:"check-for-existing-ssh-keys",children:[]},{level:2,title:"Generate new SSH keys",slug:"generate-new-ssh-keys",children:[]},{level:2,title:"Copy your public key to your device",slug:"copy-your-public-key-to-your-device",children:[]},{level:2,title:"Disable password authentication",slug:"disable-password-authentication",children:[]}],content:`\r
# How to implement SSH Keys in Ubuntu\r
\r
SSH keys provide an easy, passwordless and secure way of logging into your server.\r
\r
The following tutorial has been tested on *Ubuntu 18.04.2 LTS (GNU/Linux 4.9.140-tegra aarch64)*.\r
\r
## Install a terminal\r
\r
\r
The following applications are recommended:\r
\r
- Linux\r
  - The terminal can be open with <kbd>CTRL</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>\r
- Windows\r
  - [PuTTY](https://chocolatey.org/packages/putty.install) PuTTY is a free implementation of Telnet and SSH for Windows and Unix platforms.\r
  - [Git BASH](https://chocolatey.org/packages/git) Git for Windows provides a BASH emulation used to run Git from the command line.\r
- Android\r
  - [JuiceSSH](https://play.google.com/store/apps/details?id=com.sonelli.juicessh) Free SSH client for Android.\r
\r
\r
## Check for existing SSH keys\r
\r
First, check whether there are already keys on the computer you are using:\r
\r
\`\`\` bash\r
ls ~/.ssh\r
\`\`\`\r
\r
If you see files named \`id_rsa.pub\` or \`id_dsa.pub\` you have keys set up already, so you can [skip :fast_forward:](#copy-your-public-key-to-your-device) the generating keys step.\r
\r
## Generate new SSH keys\r
\r
To generate new SSH keys enter the following command:\r
\`\`\` bash\r
ssh-keygen\r
\`\`\`\r
\r
Leave the field empty for no passphrase.\r
Now look inside your .ssh directory:\r
\r
\`\`\` bash\r
ls ~/.ssh\r
\`\`\`\r
\r
and you should see the files \`id_rsa\` and \`id_rsa.pub\`:\r
\r
\`\`\` bash\r
authorized_keys  id_rsa  id_rsa.pub  known_hosts\r
\`\`\`\r
\r
The \`id_rsa\` file is your private key.\r
\r
::: warning Privacy warning\r
Keep this on your computer. Do not share it!\r
:::\r
\r
The \`id_rsa.pub\` file is your public key. This is what you share with machines you want to connect to. When the machine you try to connect to matches your public and private key, it will allow you to connect.\r
\r
## Copy your public key to your device\r
\r
Copy the file manually over SSH:\r
\r
\`\`\` bash\r
cat ~/.ssh/id_rsa.pub | ssh <USER>@<IP-ADDRESS> "cat >> ~/.ssh/authorized_keys"\r
\`\`\`\r
\r
or paste it from the clipboard. Replace *<ID_RSA.PUB>* by your key.\r
\`\`\` bash\r
echo "<ID_RSA.PUB>" >> ~/.ssh/authorized_keys\r
\`\`\`\r
\r
::: danger Do not overwrite your existing keys!\r
**>** overwrite the file\r
**>>** append to the file\r
:::\r
\r
Now try ssh \`<USER>@<IP-ADDRESS>\` and you should connect without a password prompt.\r
\r
\r
## Disable password authentication\r
\r
Force the usage for the SSH Keys in WAN and keep the password access in LAN.\r
\r
Edit the file \`/etc/ssh/sshd_config\`\r
\r
\`\`\` bash\r
sudo vim /etc/ssh/sshd_config\r
\`\`\`\r
\r
Press <kbd>a</kbd> to edit in vim. Apply the fellow changes:\r
\r
\`\`\` bash\r
PasswordAuthentication no\r
ChallengeResponseAuthentication no\r
\r
Match Address 192.168.0.0/16\r
    PasswordAuthentication yes\r
\`\`\`\r
\r
Save and close the file.\r
\r
>Press <kbd>ESC</kbd> and type \`:wq\`\r
\r
Reload the ssh server:\r
\`\`\` bash\r
sudo systemctl reload ssh\r
\`\`\`\r
\r
::: tip\r
There are two [motd](https://en.wikipedia.org/wiki/Motd_(Unix) "message of the day"), when connecting with the ssh keys.\r
If you know how to fix this, please let me know.\r
:::\r
\r
Done! :tada:`,contentRendered:`<h1 id="how-to-implement-ssh-keys-in-ubuntu" tabindex="-1"><a class="header-anchor" href="#how-to-implement-ssh-keys-in-ubuntu" aria-hidden="true">#</a> How to implement SSH Keys in Ubuntu</h1>
<p>SSH keys provide an easy, passwordless and secure way of logging into your server.</p>
<p>The following tutorial has been tested on <em>Ubuntu 18.04.2 LTS (GNU/Linux 4.9.140-tegra aarch64)</em>.</p>
<h2 id="install-a-terminal" tabindex="-1"><a class="header-anchor" href="#install-a-terminal" aria-hidden="true">#</a> Install a terminal</h2>
<p>The following applications are recommended:</p>
<ul>
<li>Linux
<ul>
<li>The terminal can be open with <kbd>CTRL</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd></li>
</ul>
</li>
<li>Windows
<ul>
<li><a href="https://chocolatey.org/packages/putty.install" target="_blank" rel="noopener noreferrer">PuTTY<ExternalLinkIcon/></a> PuTTY is a free implementation of Telnet and SSH for Windows and Unix platforms.</li>
<li><a href="https://chocolatey.org/packages/git" target="_blank" rel="noopener noreferrer">Git BASH<ExternalLinkIcon/></a> Git for Windows provides a BASH emulation used to run Git from the command line.</li>
</ul>
</li>
<li>Android
<ul>
<li><a href="https://play.google.com/store/apps/details?id=com.sonelli.juicessh" target="_blank" rel="noopener noreferrer">JuiceSSH<ExternalLinkIcon/></a> Free SSH client for Android.</li>
</ul>
</li>
</ul>
<h2 id="check-for-existing-ssh-keys" tabindex="-1"><a class="header-anchor" href="#check-for-existing-ssh-keys" aria-hidden="true">#</a> Check for existing SSH keys</h2>
<p>First, check whether there are already keys on the computer you are using:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ls</span> ~/.ssh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If you see files named <code>id_rsa.pub</code> or <code>id_dsa.pub</code> you have keys set up already, so you can <a href="#copy-your-public-key-to-your-device">skip \u23E9</a> the generating keys step.</p>
<h2 id="generate-new-ssh-keys" tabindex="-1"><a class="header-anchor" href="#generate-new-ssh-keys" aria-hidden="true">#</a> Generate new SSH keys</h2>
<p>To generate new SSH keys enter the following command:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Leave the field empty for no passphrase.
Now look inside your .ssh directory:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ls</span> ~/.ssh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>and you should see the files <code>id_rsa</code> and <code>id_rsa.pub</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>authorized_keys  id_rsa  id_rsa.pub  known_hosts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The <code>id_rsa</code> file is your private key.</p>
<div class="custom-container warning"><p class="custom-container-title">Privacy warning</p>
<p>Keep this on your computer. Do not share it!</p>
</div>
<p>The <code>id_rsa.pub</code> file is your public key. This is what you share with machines you want to connect to. When the machine you try to connect to matches your public and private key, it will allow you to connect.</p>
<h2 id="copy-your-public-key-to-your-device" tabindex="-1"><a class="header-anchor" href="#copy-your-public-key-to-your-device" aria-hidden="true">#</a> Copy your public key to your device</h2>
<p>Copy the file manually over SSH:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub <span class="token operator">|</span> <span class="token function">ssh</span> <span class="token operator">&lt;</span><span class="token environment constant">USER</span><span class="token operator">></span>@<span class="token operator">&lt;</span>IP-ADDRESS<span class="token operator">></span> <span class="token string">"cat >> ~/.ssh/authorized_keys"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>or paste it from the clipboard. Replace <em>&lt;ID_RSA.PUB&gt;</em> by your key.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"&lt;ID_RSA.PUB>"</span> <span class="token operator">>></span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container danger"><p class="custom-container-title">Do not overwrite your existing keys!</p>
<p><strong>&gt;</strong> overwrite the file
<strong>&gt;&gt;</strong> append to the file</p>
</div>
<p>Now try ssh <code>&lt;USER&gt;@&lt;IP-ADDRESS&gt;</code> and you should connect without a password prompt.</p>
<h2 id="disable-password-authentication" tabindex="-1"><a class="header-anchor" href="#disable-password-authentication" aria-hidden="true">#</a> Disable password authentication</h2>
<p>Force the usage for the SSH Keys in WAN and keep the password access in LAN.</p>
<p>Edit the file <code>/etc/ssh/sshd_config</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Press <kbd>a</kbd> to edit in vim. Apply the fellow changes:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PasswordAuthentication no
ChallengeResponseAuthentication no

Match Address <span class="token number">192.168</span>.0.0/16
    PasswordAuthentication <span class="token function">yes</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Save and close the file.</p>
<blockquote>
<p>Press <kbd>ESC</kbd> and type <code>:wq</code></p>
</blockquote>
<p>Reload the ssh server:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl reload <span class="token function">ssh</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>There are two <a href="https://en.wikipedia.org/wiki/Motd_(Unix)" title="message of the day" target="_blank" rel="noopener noreferrer">motd<ExternalLinkIcon/></a>, when connecting with the ssh keys.
If you know how to fix this, please let me know.</p>
</div>
<p>Done! \u{1F389}</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/article/secure-access-with-ssh-keys.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Implement SSH Keys"},slug:"secure-access-with-ssh-keys",filePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/en/article/secure-access-with-ssh-keys.md",filePathRelative:"en/article/secure-access-with-ssh-keys.md",componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/article/secure-access-with-ssh-keys.html.vue",componentFilePathRelative:"pages/en/article/secure-access-with-ssh-keys.html.vue",componentFileChunkName:"v-439c2d52",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/en/article/secure-access-with-ssh-keys.html.js",dataFilePathRelative:"pages/en/article/secure-access-with-ssh-keys.html.js",dataFileChunkName:"v-439c2d52",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/en/article/secure-access-with-ssh-keys.html",htmlFilePathRelative:"en/article/secure-access-with-ssh-keys.html"},{data:{key:"v-3706649a",path:"/404.html",title:"",lang:"fr-CA",frontmatter:{layout:"404"},excerpt:"",headers:[],git:{},filePathRelative:null},key:"v-3706649a",path:"/404.html",title:"",lang:"fr-CA",frontmatter:{layout:"404"},excerpt:"",headers:[],content:"",contentRendered:"",date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:null,pathLocale:"/",permalink:null,routeMeta:{title:""},slug:"",filePath:null,filePathRelative:null,componentFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/404.html.vue",componentFilePathRelative:"pages/404.html.vue",componentFileChunkName:"v-3706649a",dataFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/.temp/pages/404.html.js",dataFilePathRelative:"pages/404.html.js",dataFileChunkName:"v-3706649a",htmlFilePath:"C:/Users/Sam/Documents/GitHub/SamLefebvre.github.io/docs/.vuepress/dist/404.html",htmlFilePathRelative:"404.html"}];const Eh={name:"Posts",props:["articleType"],data(){return{pages:[],excerpts:[]}},mounted(){Ph.forEach(e=>{e.frontmatter.type===this.articleType&&this.pages.push(e)}),this.pages.sort((e,t)=>e.frontmatter.date<t.frontmatter.date?1:-1)},methods:{imgUrlAlt(e){e.target.src="/images/hero.png"},filterRemove(e){var t=document.createElement("div");t.innerHTML=e;var n="</h1>",r=t.innerHTML,a=r.indexOf(n);a>0&&(r=r.slice(a+n.length,r.length),r=r.trim());var i="...",s=200;return r=r.length>s?r.slice(0,s)+i:r,r}}},Lh={class:"post-container"},Th=["href"],Rh=["src"],Ah={class:"page-detail"},Ih={class:"page-description"},jh={class:"page-excerpt"},Mh=Fn("Plus de d\xE9tails");function Dh(e,t,n,r,a,i){const s=zs("RouterLink");return ut(),Ht("div",Lh,[(ut(!0),Ht(Ie,null,Tc(a.pages,o=>(ut(),Ht("div",{key:o.path,class:"post-card"},[ve(s,{class:"article-image",to:o.path},{default:Jn(()=>[Ve("a",{href:o.path},[Ve("img",{src:e.$withBase("/images/"+o.frontmatter.posterImage),onError:t[0]||(t[0]=(...l)=>i.imgUrlAlt&&i.imgUrlAlt(...l)),alt:"image"},null,40,Rh)],8,Th)]),_:2},1032,["to"]),Ve("div",Ah,[ve(s,{class:"article-imag",to:o.path},{default:Jn(()=>[Fn(bn(o.title),1)]),_:2},1032,["to"]),Ve("div",Ih,bn(i.filterRemove(o.frontmatter.description)),1),Ve("div",jh,bn(o.frontmatter.creationDate||"2020-2022"),1),ve(s,{class:"page-excerpt",to:o.path},{default:Jn(()=>[Mh]),_:2},1032,["to"])])]))),128))])}var qh=kr(Eh,[["render",Dh],["__scopeId","data-v-5270fec9"]]);const Fh={name:"MathJax",mounted(){if(!document.getElementById("polyfill-script")){let e="https://polyfill.io/v3/polyfill.min.js?features=es6",t=document.createElement("script");t.setAttribute("src",e),t.setAttribute("type","text/javascript"),t.setAttribute("id","polyfill-script"),document.head.appendChild(t)}if(!document.getElementById("MathJax-script")){let e="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",t=document.createElement("script");t.setAttribute("src",e),t.setAttribute("type","text/javascript"),t.setAttribute("id","MathJax-script"),document.head.appendChild(t),window.MathJax={tex2jax:{inlineMath:[["\\(","\\)"]],processEscapes:!0}}}},beforeDestroy(){let e=document.getElementById("MathJax-script"),t=document.getElementById("polyfill-script");e&&e.remove(),t&&t.remove()}};function Hh(e,t,n,r,a,i){return null}var Uh=kr(Fh,[["render",Hh]]),Bh=Un(({app:e,router:t,siteData:n})=>{e.component("githubcorner",Wp),e.component("InfoCard",Sh),e.component("MediumZoom",Ch),e.component("Posts",qh),e.component("EnableMathJax",Uh)});const Oh=[Od,Xd,ap,Op,Bh];function Do(e,t,n){var r,a,i;t===void 0&&(t=50),n===void 0&&(n={});var s=(r=n.isImmediate)!=null&&r,o=(a=n.callback)!=null&&a,l=n.maxWait,c=Date.now(),u=[];function h(){if(l!==void 0){var w=Date.now()-c;if(w+t>=l)return l-w}return t}var p=function(){var w=[].slice.call(arguments),f=this;return new Promise(function(v,g){var b=s&&i===void 0;if(i!==void 0&&clearTimeout(i),i=setTimeout(function(){if(i=void 0,c=Date.now(),!s){var P=e.apply(f,w);o&&o(P),u.forEach(function(T){return(0,T.resolve)(P)}),u=[]}},h()),b){var _=e.apply(f,w);return o&&o(_),v(_)}u.push({resolve:v,reject:g})})};return p.cancel=function(w){i!==void 0&&clearTimeout(i),u.forEach(function(f){return(0,f.reject)(w)}),u=[]},p}const Yi=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Nh=()=>window.scrollTo({top:0,behavior:"smooth"});const Gh=et({name:"BackToTop",setup(){const e=je(0),t=ye(()=>e.value>300),n=Do(()=>{e.value=Yi()},100);ht(()=>{e.value=Yi(),window.addEventListener("scroll",()=>n())});const r=we("div",{class:"back-to-top",onClick:Nh});return()=>we(Ca,{name:"back-to-top"},{default:()=>t.value?r:null})}}),zh=[Gh],$h=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{const a=La(),i=Hn(),o=Do(()=>{var l,c,u,h;const p=Array.from(document.querySelectorAll(e)),f=Array.from(document.querySelectorAll(t)).filter(P=>p.some(T=>T.hash===P.hash)),v=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),g=window.innerHeight+v,b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),_=Math.abs(b-g)<r;for(let P=0;P<f.length;P++){const T=f[P],F=f[P+1],H=P===0&&v===0,C=v>=((c=(l=T.parentElement)===null||l===void 0?void 0:l.offsetTop)!==null&&c!==void 0?c:0)-r,x=!F||v<((h=(u=F.parentElement)===null||u===void 0?void 0:u.offsetTop)!==null&&h!==void 0?h:0)-r;if(!(H||C&&x))continue;const z=decodeURIComponent(a.currentRoute.value.hash),Y=decodeURIComponent(T.hash);if(z===Y)return;if(_){for(let k=P+1;k<f.length;k++)if(z===decodeURIComponent(f[k].hash))return}Vh(a,{hash:Y,force:!0});return}},n);ht(()=>{o(),window.addEventListener("scroll",o)}),wa(()=>{window.removeEventListener("scroll",o)}),ct(()=>i.value.path,o)},Vh=async(e,...t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace(...t).finally(()=>e.options.scrollBehavior=n)},Wh="a.sidebar-item",Kh=".header-anchor",Yh=300,Jh=5;var Zh=ja(()=>{$h({headerLinkSelector:Wh,headerAnchorSelector:Kh,delay:Yh,offset:Jh})}),Xn={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,r){e.exports=r()})(Kp,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(f){var v,g;for(v in f)g=f[v],g!==void 0&&f.hasOwnProperty(v)&&(r[v]=g);return this},n.status=null,n.set=function(f){var v=n.isStarted();f=a(f,r.minimum,1),n.status=f===1?null:f;var g=n.render(!v),b=g.querySelector(r.barSelector),_=r.speed,P=r.easing;return g.offsetWidth,o(function(T){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),l(b,s(f,_,P)),f===1?(l(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){l(g,{transition:"all "+_+"ms linear",opacity:0}),setTimeout(function(){n.remove(),T()},_)},_)):setTimeout(T,_)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var f=function(){setTimeout(function(){!n.status||(n.trickle(),f())},r.trickleSpeed)};return r.trickle&&f(),this},n.done=function(f){return!f&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(f){var v=n.status;return v?(typeof f!="number"&&(f=(1-v)*a(Math.random()*v,.1,.95)),v=a(v+f,0,.994),n.set(v)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var f=0,v=0;n.promise=function(g){return!g||g.state()==="resolved"?this:(v===0&&n.start(),f++,v++,g.always(function(){v--,v===0?(f=0,n.done()):n.set((f-v)/f)}),this)}}(),n.render=function(f){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var v=document.createElement("div");v.id="nprogress",v.innerHTML=r.template;var g=v.querySelector(r.barSelector),b=f?"-100":i(n.status||0),_=document.querySelector(r.parent),P;return l(g,{transition:"all 0 linear",transform:"translate3d("+b+"%,0,0)"}),r.showSpinner||(P=v.querySelector(r.spinnerSelector),P&&w(P)),_!=document.body&&u(_,"nprogress-custom-parent"),_.appendChild(v),v},n.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(r.parent),"nprogress-custom-parent");var f=document.getElementById("nprogress");f&&w(f)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var f=document.body.style,v="WebkitTransform"in f?"Webkit":"MozTransform"in f?"Moz":"msTransform"in f?"ms":"OTransform"in f?"O":"";return v+"Perspective"in f?"translate3d":v+"Transform"in f?"translate":"margin"};function a(f,v,g){return f<v?v:f>g?g:f}function i(f){return(-1+f)*100}function s(f,v,g){var b;return r.positionUsing==="translate3d"?b={transform:"translate3d("+i(f)+"%,0,0)"}:r.positionUsing==="translate"?b={transform:"translate("+i(f)+"%,0)"}:b={"margin-left":i(f)+"%"},b.transition="all "+v+"ms "+g,b}var o=function(){var f=[];function v(){var g=f.shift();g&&g(v)}return function(g){f.push(g),f.length==1&&v()}}(),l=function(){var f=["Webkit","O","Moz","ms"],v={};function g(T){return T.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(F,H){return H.toUpperCase()})}function b(T){var F=document.body.style;if(T in F)return T;for(var H=f.length,C=T.charAt(0).toUpperCase()+T.slice(1),x;H--;)if(x=f[H]+C,x in F)return x;return T}function _(T){return T=g(T),v[T]||(v[T]=b(T))}function P(T,F,H){F=_(F),T.style[F]=H}return function(T,F){var H=arguments,C,x;if(H.length==2)for(C in F)x=F[C],x!==void 0&&F.hasOwnProperty(C)&&P(T,C,x);else P(T,H[1],H[2])}}();function c(f,v){var g=typeof f=="string"?f:p(f);return g.indexOf(" "+v+" ")>=0}function u(f,v){var g=p(f),b=g+v;c(g,v)||(f.className=b.substring(1))}function h(f,v){var g=p(f),b;!c(f,v)||(b=g.replace(" "+v+" "," "),f.className=b.substring(1,b.length-1))}function p(f){return(" "+(f.className||"")+" ").replace(/\s+/gi," ")}function w(f){f&&f.parentNode&&f.parentNode.removeChild(f)}return n})})(Xn);const Qh=()=>{ht(()=>{const e=La(),t=new Set;t.add(e.currentRoute.value.path),Xn.exports.configure({showSpinner:!1}),e.beforeEach(n=>{t.has(n.path)||Xn.exports.start()}),e.afterEach(n=>{t.add(n.path),Xn.exports.done()})})};var Xh=ja(()=>{Qh()}),ef=ja(()=>{Ap(),qp()});const tf=Symbol("posts"),nf=async()=>{const e=_d();return await Promise.all(Object.keys(e.value).map(n=>e.value[n]()))},rf=()=>{const e=nf();St(tf,e)},af=[Zh,Xh,ef,rf],sf=[["v-6d34f632","/contact.html",{title:"Contact"},["/contact","/contact.md"]],["v-450624d4","/interest.html",{title:"Int\xE9r\xEAts"},["/interest","/interest.md"]],["v-8daa1a0e","/",{title:""},["/index.html","/README.md"]],["v-70fab1c5","/research.html",{title:"Recherche"},["/research","/research.md"]],["v-79e3c216","/article/markdownDemo.html",{title:"Markdown Demo"},["/article/markdownDemo","/article/markdownDemo.md"]],["v-770aa52f","/article/radarChart.html",{title:"Radar chart"},["/article/radarChart","/article/radarChart.md"]],["v-e52c881c","/article/",{title:"Article"},["/article/index.html","/article/README.md"]],["v-2a825517","/blog/article.html",{title:"My first article"},["/blog/article","/blog/article.md"]],["v-29650369","/blog/article2.html",{title:"My 2 article"},["/blog/article2","/blog/article2.md"]],["v-2b19dc08","/blog/article3.html",{title:"My 3 article"},["/blog/article3","/blog/article3.md"]],["v-145ac574","/blog/",{title:"Blog listing"},["/blog/index.html","/blog/Readme.md"]],["v-6c3ccbfc","/en/interest.html",{title:"Interests"},["/en/interest","/en/interest.md"]],["v-446a1644","/en/portfolio.html",{title:"Portfolio"},["/en/portfolio","/en/portfolio.md"]],["v-2d0a870d","/en/",{title:"Home"},["/en/index.html","/en/README.md"]],["v-2557a30a","/portfolio/blender.html",{title:"Blender"},["/portfolio/blender","/portfolio/blender.md"]],["v-2e4c18c0","/portfolio/",{title:"Portfolio"},["/portfolio/index.html","/portfolio/README.md"]],["v-52103624","/portfolio/unity.html",{title:"Unity"},["/portfolio/unity","/portfolio/unity.md"]],["v-7271bda5","/portfolio/web.html",{title:"Web"},["/portfolio/web","/portfolio/web.md"]],["v-76a3c89d","/projects/labyrintheBlender.html",{title:"Labyrinthe dynamique avec Blender"},["/projects/labyrintheBlender","/projects/labyrintheBlender.md"]],["v-6dc367c8","/projects/",{title:"Projets"},["/projects/index.html","/projects/readme.md"]],["v-13671bfa","/projects/template.html",{title:"Template projet"},["/projects/template","/projects/template.md"]],["v-4b85d886","/tutorials/fracturationBlenderUnity.html",{title:"Fracturation objets et simulation"},["/tutorials/fracturationBlenderUnity","/tutorials/fracturationBlenderUnity.md"]],["v-73293c0a","/tutorials/interfaceUnity.html",{title:"Exploration de l'interface d'Unity"},["/tutorials/interfaceUnity","/tutorials/interfaceUnity.md"]],["v-0efe29b3","/tutorials/",{title:"Tutoriels"},["/tutorials/index.html","/tutorials/readme.md"]],["v-491093e4","/tutorials/teachableMachine.html",{title:"Apprentissage machine simplifi\xE9"},["/tutorials/teachableMachine","/tutorials/teachableMachine.md"]],["v-23ada1cc","/tutorials/template.html",{title:"Template tutoriel"},["/tutorials/template","/tutorials/template.md"]],["v-506407f4","/en/article/",{title:"Article"},["/en/article/index.html","/en/article/README.md"]],["v-439c2d52","/en/article/secure-access-with-ssh-keys.html",{title:"Implement SSH Keys"},["/en/article/secure-access-with-ssh-keys","/en/article/secure-access-with-ssh-keys.md"]],["v-3706649a","/404.html",{title:""},["/404"]]],of=sf.reduce((e,[t,n,r,a])=>(e.push({name:t,path:n,component:qi,meta:r},...a.map(i=>({path:i,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:qi}]),lf=ju,cf=()=>{const e=gd({history:lf(Dd(kt.value.base)),routes:of,scrollBehavior:(t,n,r)=>r||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var r;(t.path!==n.path||n===st)&&([lt.value]=await Promise.all([Rt.resolvePageData(t.name),(r=ho[t.name])===null||r===void 0?void 0:r.__asyncLoader()]))}),e},uf=e=>{e.component("ClientOnly",bd),e.component("Content",Ia)},df=(e,t)=>{const n=ye(()=>Rt.resolveRouteLocale(kt.value.locales,t.currentRoute.value.path)),r=ye(()=>Rt.resolveSiteLocaleData(kt.value,n.value)),a=ye(()=>Rt.resolvePageFrontmatter(lt.value)),i=ye(()=>Rt.resolvePageHeadTitle(lt.value,r.value)),s=ye(()=>Rt.resolvePageHead(i.value,a.value,r.value)),o=ye(()=>Rt.resolvePageLang(lt.value));return e.provide(Aa,n),e.provide(bo,r),e.provide(mo,a),e.provide(Cd,i),e.provide(go,s),e.provide(vo,o),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>a.value},$head:{get:()=>s.value},$headTitle:{get:()=>i.value},$lang:{get:()=>o.value},$page:{get:()=>lt.value},$routeLocale:{get:()=>n.value},$site:{get:()=>kt.value},$siteLocale:{get:()=>r.value},$withBase:{get:()=>Fd}}),{pageData:lt,pageFrontmatter:a,pageHead:s,pageHeadTitle:i,pageLang:o,routeLocale:n,siteData:kt,siteLocaleData:r}},pf=()=>{const e=Ta(),t=Sd(),n=Pd(),r=je([]),a=()=>{t.value.forEach(s=>{const o=hf(s);o&&r.value.push(o)})},i=()=>{document.documentElement.lang=n.value,r.value.forEach(s=>{s.parentNode===document.head&&document.head.removeChild(s)}),r.value.splice(0,r.value.length),t.value.forEach(s=>{const o=ff(s);o!==null&&(document.head.appendChild(o),r.value.push(o))})};St(Rd,i),ht(()=>{a(),i(),ct(()=>e.path,()=>i())})},hf=([e,t,n=""])=>{const r=Object.entries(t).map(([o,l])=>fe(l)?`[${o}="${l}"]`:l===!0?`[${o}]`:"").join(""),a=`head > ${e}${r}`;return Array.from(document.querySelectorAll(a)).find(o=>o.innerText===n)||null},ff=([e,t,n])=>{if(!fe(e))return null;const r=document.createElement(e);return yo(t)&&Object.entries(t).forEach(([a,i])=>{fe(i)?r.setAttribute(a,i):i===!0&&r.setAttribute(a,"")}),fe(n)&&r.appendChild(document.createTextNode(n)),r},mf=hu,gf=async()=>{const e=mf({name:"VuepressApp",setup(){pf();for(const n of af)n();return()=>[we(po),...zh.map(n=>we(n))]}}),t=cf();uf(e),df(e,t);for(const n of Oh)await n({app:e,router:t,siteData:kt});return e.use(t),{app:e,router:t}};gf().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{Td as A,kf as B,Sf as C,rn as D,we as E,Ie as F,Fd as G,bd as H,je as I,ct as J,ri as K,yi as L,qd as M,Dd as N,La as O,fe as P,jp as Q,ht as R,jn as S,Ca as T,Hn as U,Cf as V,yo as W,wf as X,ka as Y,Dp as Z,kr as _,Ve as a,ve as b,Ht as c,gf as createVueApp,Fn as d,Ec as e,Tc as f,et as g,Lo as h,qt as i,xd as j,ye as k,Z as l,yf as m,Ta as n,ut as o,bf as p,Vs as q,zs as r,Lc as s,bn as t,Ed as u,Ks as v,Jn as w,Md as x,_f as y,xf as z};
