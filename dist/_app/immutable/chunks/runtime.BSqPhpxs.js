var Cn=Array.isArray,it=Array.from,at=Object.isFrozen,ft=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Mn=Object.getOwnPropertyDescriptors,_t=Object.prototype,pt=Array.prototype,bn=Object.getPrototypeOf,sn=Map.prototype,Pn=sn.set,qn=sn.get;function vt(n,t,e){Pn.call(n,t,e)}function dt(n,t){return qn.call(n,t)}function ht(n){return typeof n=="function"}const R=2,un=4,k=8,ln=16,y=32,$=64,A=128,F=256,E=512,m=1024,I=2048,N=4096,C=8192,Ln=16384,an=32768,Et=65536,J=Symbol("$state"),mt=Symbol("$state.frozen"),yt=Symbol("");function fn(n){return n===this.v}function Fn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function cn(n){return!Fn(n,this.v)}const wt=1,Tt=2,At=4,Ot=8,St=16,Rt=64,It=1,xt=2,Dt=4,gt=8,Nt=1,kt=2,Ct="[",Hn="]",Mt="",bt=`${Hn}!`,Pt={},Yn=Symbol(),qt=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Lt=["touchstart","touchmove","touchend"],Ft={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ht(n,t="exclude-on"){return n.endsWith("capture")?t=="exclude-on"?n!=="gotpointercapture"&&n!=="lostpointercapture":n!=="ongotpointercapture"&&n!=="onlostpointercapture":!1}function jn(n){throw new Error("effect_in_teardown")}function Un(){throw new Error("effect_in_unowned_derived")}function Bn(n){throw new Error("effect_orphan")}function Vn(){throw new Error("effect_update_depth_exceeded")}function Yt(){throw new Error("hydration_failed")}function jt(n){throw new Error("props_invalid_value")}function zn(){throw new Error("state_unsafe_mutation")}function _n(n){return{f:0,v:n,reactions:null,equals:fn,version:0}}function Ut(n){var e;const t=_n(n);return t.equals=cn,i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(t),t}function pn(n,t){var e=n.v!==Yn;return e&&c!==null&&z()&&c.f&R&&zn(),n.equals(t)||(n.v=t,n.version=Sn(),X(n,m,!0),z()&&e&&f!==null&&f.f&E&&!(f.f&y)&&(v!==null&&v.includes(n)?(h(f,m),U(f)):T===null?nt([n]):T.push(n))),t}function Bt(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function Kn(n){if(Cn(n))for(var t=0;t<n.length;t++){var e=n[t];e.isConnected&&e.remove()}else n.isConnected&&n.remove()}function vn(n){f===null&&c===null&&Bn(),c!==null&&c.f&A&&Un(),Z&&jn()}function nn(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function M(n,t,e){var r=(n&$)!==0,o={ctx:i,deps:null,dom:null,f:n|m,first:null,fn:t,last:null,next:null,parent:r?null:f,prev:null,teardown:null,transitions:null};if(e){var s=D;try{tn(!0),q(o),o.f|=Ln}finally{tn(s)}}else t!==null&&U(o);var _=e&&o.deps===null&&o.first===null&&o.dom===null&&o.teardown===null;return!_&&!r&&(f!==null&&nn(o,f),c!==null&&c.f&R&&nn(o,c)),o}function Vt(n){const t=M(k,null,!1);return h(t,E),t.teardown=n,t}function zt(n){vn();var t=f!==null&&(f.f&k)!==0&&i!==null&&!i.m;if(t){var e=i;(e.e??(e.e=[])).push(n)}else{var r=dn(n);return r}}function Kt(n){return vn(),Y(n)}function $t(n){const t=M($,n,!0);return()=>{G(t)}}function dn(n){return M(un,n,!1)}function Gt(n,t){var e=i,r={effect:null,ran:!1};e.l.r1.push(r),r.effect=Y(()=>{n(),!r.ran&&(r.ran=!0,pn(e.l.r2,!0),ot(t))})}function Zt(){var n=i;Y(()=>{if(Q(n.l.r2)){for(var t of n.l.r1){var e=t.effect;b(e)&&q(e),t.ran=!1}n.l.r2.v=!1}})}function Y(n){return M(k,n,!0)}function Wt(n){return Y(n)}function Qt(n,t=0){return M(k|ln|t,n,!0)}function Xt(n){return M(k|y,n,!0)}function hn(n){var t=n.teardown;if(t!==null){const e=Z,r=c;en(!0),rn(null);try{t.call(null)}finally{en(e),rn(r)}}}function G(n,t=!0){var e=n.dom;if(e!==null&&t&&Kn(e),W(n,t),j(n,0),h(n,C),n.transitions)for(const o of n.transitions)o.stop();hn(n);var r=n.parent;r!==null&&n.f&y&&r.first!==null&&En(n),n.next=n.prev=n.teardown=n.ctx=n.dom=n.deps=n.parent=n.fn=null}function En(n){var t=n.parent,e=n.prev,r=n.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),t!==null&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function Jt(n,t){var e=[];mn(n,e,!0),$n(e,()=>{G(n),t&&t()})}function $n(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var o of n)o.out(r)}else t()}function mn(n,t,e){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const _ of n.transitions)(_.is_global||e)&&t.push(_);for(var r=n.first;r!==null;){var o=r.next,s=(r.f&an)!==0||(r.f&y)!==0;mn(r,t,s?e:!1),r=o}}}function ne(n){yn(n,!0)}function yn(n,t){if(n.f&N){n.f^=N,b(n)&&q(n);for(var e=n.first;e!==null;){var r=e.next,o=(e.f&an)!==0||(e.f&y)!==0;yn(e,o?t:!1),e=r}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}const te=()=>{};function ee(n){return n()}function Gn(n){for(var t=0;t<n.length;t++)n[t]()}let H=!1,V=[];function wn(){H=!1;const n=V.slice();V=[],Gn(n)}function re(n){H||(H=!0,queueMicrotask(wn)),V.push(n)}function Zn(){H&&wn()}function Wn(n){let t=R|m;f===null&&(t|=A);const e={deps:null,deriveds:null,equals:fn,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(c!==null&&c.f&R){var r=c;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function oe(n){const t=Wn(n);return t.equals=cn,t}function Tn(n){W(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)Qn(t[e])}}function An(n){Tn(n);var t=Rn(n),e=(x||n.f&A)&&n.deps!==null?I:E;h(n,e),n.equals(t)||(n.v=t,n.version=Sn(),X(n,m,!1))}function Qn(n){Tn(n),j(n,0),h(n,C),n.first=n.last=n.deps=n.reactions=n.fn=null}function Xn(n){throw new Error("lifecycle_outside_component")}const On=0,Jn=1;let L=On,P=!1,D=!1,Z=!1;function tn(n){D=n}function en(n){Z=n}let S=[],g=0,c=null;function rn(n){c=n}let f=null,v=null,p=0,T=null;function nt(n){T=n}let tt=0,x=!1,i=null;function Sn(){return tt++}function z(){return i!==null&&i.l===null}function b(n){var O;var t=n.f,e=(t&m)!==0;if(e)return!0;var r=(t&A)!==0,o=(t&F)!==0;if(t&I){var s=n.deps;if(s!==null)for(var _=s.length,l,u=0;u<_;u++){var a=s[u];!e&&b(a)&&An(a);var d=a.version;if(r){if(d>n.version)return!0;!x&&!((O=a==null?void 0:a.reactions)!=null&&O.includes(n))&&(a.reactions??(a.reactions=[])).push(n)}else{if(n.f&m)return!0;o&&(d>n.version&&(e=!0),l=a.reactions,l===null?a.reactions=[n]:l.includes(n)||l.push(n))}}r||h(n,E),o&&(n.f^=F)}return e}function et(n,t,e){throw n}function Rn(n){const t=v,e=p,r=T,o=c,s=x;v=null,p=0,T=null,c=n.f&(y|$)?null:n,x=!D&&(n.f&A)!==0;try{let _=(0,n.fn)(),l=n.deps;if(v!==null){let u;if(l!==null){const a=l.length,d=p===0?v:l.slice(0,p).concat(v),w=d.length>16&&a-p>1?new Set(d):null;for(u=p;u<a;u++){const B=l[u];(w!==null?!w.has(B):!d.includes(B))&&In(n,B)}}if(l!==null&&p>0)for(l.length=p+v.length,u=0;u<v.length;u++)l[p+u]=v[u];else n.deps=l=v;if(!x)for(u=p;u<l.length;u++){const a=l[u],d=a.reactions;d===null?a.reactions=[n]:d[d.length-1]!==n&&!d.includes(n)&&d.push(n)}}else l!==null&&p<l.length&&(j(n,p),l.length=p);return _}finally{v=t,p=e,T=r,c=o,x=s}}function In(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const o=e.indexOf(n);o!==-1&&(r===0?t.reactions=null:(e[o]=e[r],e.pop()))}r===0&&t.f&R&&(h(t,I),t.f&(A|F)||(t.f^=F),j(t,0))}function j(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let o;for(o=t;o<e.length;o++){const s=e[o];(r===null||!r.includes(s))&&In(n,s)}}}function W(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,G(e,t),e=r}function q(n){var t=n.f;if(!(t&C)){h(n,E);var e=n.ctx,r=f,o=i;f=n,i=e;try{t&ln||W(n),hn(n);var s=Rn(n);n.teardown=typeof s=="function"?s:null}catch(_){et(_)}finally{f=r,i=o}}}function xn(){g>1e3&&(g=0,Vn()),g++}function Dn(n){var t=n.length;if(t!==0){xn();var e=D;D=!0;try{for(var r=0;r<t;r++){var o=n[r];if(o.first===null&&!(o.f&y))on([o]);else{var s=[];gn(o,s),on(s)}}}finally{D=e}}}function on(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&(C|N))&&b(r)&&(q(r),r.deps===null&&r.first===null&&r.dom===null&&(r.teardown===null?En(r):r.fn=null))}}function rt(){if(P=!1,g>1001)return;const n=S;S=[],Dn(n),P||(g=0)}function U(n){L===On&&(P||(P=!0,queueMicrotask(rt)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&y){if(!(e&E))return;h(t,I)}}S.push(t)}function gn(n,t){var e=n.first,r=[];n:for(;e!==null;){var o=e.f,s=(o&(C|N))===0,_=o&y,l=(o&E)!==0,u=e.first;if(s&&(!_||!l)){if(_&&h(e,E),o&k){if(!_&&b(e)&&(q(e),u=e.first),u!==null){e=u;continue}}else if(o&un)if(_||l){if(u!==null){e=u;continue}}else r.push(e)}var a=e.next;if(a===null){let w=e.parent;for(;w!==null;){if(n===w)break n;var d=w.next;if(d!==null){e=d;continue n}w=w.parent}}e=a}for(var O=0;O<r.length;O++)u=r[O],t.push(u),gn(u,t)}function Nn(n,t=!0){var e=L,r=S;try{xn();const s=[];L=Jn,S=s,P=!1,t&&Dn(r);var o=n==null?void 0:n();return Zn(),(S.length>0||s.length>0)&&Nn(),g=0,o}finally{L=e,S=r}}async function se(){await Promise.resolve(),Nn()}function Q(n){const t=n.f;if(t&C)return n.v;if(c!==null){const e=(c.f&A)!==0,r=c.deps;v===null&&r!==null&&r[p]===n&&!(e&&f!==null)?p++:(r===null||p===0||r[p-1]!==n)&&(v===null?v=[n]:v[v.length-1]!==n&&v.push(n)),T!==null&&f!==null&&f.f&E&&!(f.f&y)&&T.includes(n)&&(h(f,m),U(f))}return t&R&&b(n)&&An(n),n.v}function X(n,t,e){var r=n.reactions;if(r!==null)for(var o=z(),s=r.length,_=0;_<s;_++){var l=r[_],u=l.f;if(!(u&m||(!e||!o)&&l===f)){h(l,t);var a=(u&I)!==0,d=(u&A)!==0;(u&E||a&&d)&&(l.f&R?X(l,I,e):U(l))}}}function ot(n){const t=c;try{return c=null,n()}finally{c=t}}const st=~(m|I|E);function h(n,t){n.f=n.f&st|t}function ut(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function ue(n){return kn().get(n)}function le(n,t){return kn().set(n,t),t}function kn(n){return i===null&&Xn(),i.c??(i.c=new Map(lt(i)||void 0))}function lt(n){let t=n.p;for(;t!==null;){const e=t.c;if(e!==null)return e;t=t.p}return null}function ie(n,t=1){var e=+Q(n);return pn(n,e+t),e}function ae(n,t=!1,e){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},t||(i.l={s:null,u:null,r1:[],r2:_n(!1)})}function fe(n){const t=i;if(t!==null){const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)dn(r[e])}i=t.p,t.m=!0}return{}}function ce(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(J in n)K(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&J in e&&K(e)}}}function K(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let r in n)try{K(n[r],t)}catch{}const e=bn(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=Mn(e);for(let o in r){const s=r[o].get;if(s)try{s.call(n)}catch{}}}}}function _e(n){return ut(n)?Q(n):n}export{Ft as $,Wn as A,oe as B,gt as C,Ut as D,an as E,ht as F,Vt as G,bt as H,re as I,ft as J,Nn as K,Et as L,Ct as M,Pt as N,Yt as O,Dt as P,it as Q,$t as R,Lt as S,te as T,dn as U,Yn as V,G as W,yt as X,dt as Y,vt as Z,Ht as _,fe as a,bn as a0,qt as a1,Mn as a2,ue as a3,Hn as a4,Mt as a5,f as a6,Bt as a7,Nt as a8,kt as a9,at as aa,mt as ab,J as ac,_t as ad,pt as ae,Y as af,se as ag,Ot as ah,N as ai,wt as aj,Tt as ak,Rt as al,mn as am,$n as an,St as ao,At as ap,_e as aq,Gt as ar,Zt as as,le as at,zt as b,i as c,ot as d,ee as e,ce as f,Q as g,Qt as h,Cn as i,Xt as j,Jt as k,Xn as l,Kn as m,ne as n,ct as o,ae as p,jt as q,Gn as r,_n as s,Wt as t,Kt as u,cn as v,pn as w,ie as x,It as y,xt as z};