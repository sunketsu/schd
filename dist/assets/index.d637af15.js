const ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};ue();function O(){}function he(i,e){for(const a in e)i[a]=e[a];return i}function se(i){return i()}function oe(){return Object.create(null)}function F(i){i.forEach(se)}function le(i){return typeof i=="function"}function M(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function pe(i){return Object.keys(i).length===0}function ge(i,e,a,t){if(i){const o=de(i,e,a,t);return i[0](o)}}function de(i,e,a,t){return i[1]&&t?he(a.ctx.slice(),i[1](t(e))):a.ctx}function ve(i,e,a,t){if(i[2]&&t){const o=i[2](t(a));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],n=Math.max(e.dirty.length,o.length);for(let f=0;f<n;f+=1)s[f]=e.dirty[f]|o[f];return s}return e.dirty|o}return e.dirty}function xe(i,e,a,t,o,s){if(o){const n=de(e,a,t,s);i.p(n,o)}}function ke(i){if(i.ctx.length>32){const e=[],a=i.ctx.length/32;for(let t=0;t<a;t++)e[t]=-1;return e}return-1}function p(i,e){i.appendChild(e)}function w(i,e,a){i.insertBefore(e,a||null)}function k(i){i.parentNode.removeChild(i)}function x(i){return document.createElement(i)}function j(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function W(i){return document.createTextNode(i)}function C(){return W(" ")}function we(){return W("")}function ce(i,e,a,t){return i.addEventListener(e,a,t),()=>i.removeEventListener(e,a,t)}function l(i,e,a){a==null?i.removeAttribute(e):i.getAttribute(e)!==a&&i.setAttribute(e,a)}function ye(i){return Array.from(i.childNodes)}function ze(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function z(i,e,a){i.classList[a?"add":"remove"](e)}function _e(i,e,{bubbles:a=!1,cancelable:t=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(i,a,t,e),o}let A;function q(i){A=i}function fe(){if(!A)throw new Error("Function called outside component initialization");return A}function be(i){fe().$$.on_mount.push(i)}function je(){const i=fe();return(e,a,{cancelable:t=!1}={})=>{const o=i.$$.callbacks[e];if(o){const s=_e(e,a,{cancelable:t});return o.slice().forEach(n=>{n.call(i,s)}),!s.defaultPrevented}return!0}}const G=[],te=[],Y=[],ne=[],Ge=Promise.resolve();let U=!1;function Ce(){U||(U=!0,Ge.then(me))}function X(i){Y.push(i)}const T=new Set;let E=0;function me(){const i=A;do{for(;E<G.length;){const e=G[E];E++,q(e),qe(e.$$)}for(q(null),G.length=0,E=0;te.length;)te.pop()();for(let e=0;e<Y.length;e+=1){const a=Y[e];T.has(a)||(T.add(a),a())}Y.length=0}while(G.length);for(;ne.length;)ne.pop()();U=!1,T.clear(),q(i)}function qe(i){if(i.fragment!==null){i.update(),F(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(X)}}const B=new Set;let Oe;function S(i,e){i&&i.i&&(B.delete(i),i.i(e))}function H(i,e,a,t){if(i&&i.o){if(B.has(i))return;B.add(i),Oe.c.push(()=>{B.delete(i),t&&(a&&i.d(1),t())}),i.o(e)}}function P(i){i&&i.c()}function L(i,e,a,t){const{fragment:o,on_mount:s,on_destroy:n,after_update:f}=i.$$;o&&o.m(e,a),t||X(()=>{const m=s.map(se).filter(le);n?n.push(...m):F(m),i.$$.on_mount=[]}),f.forEach(X)}function N(i,e){const a=i.$$;a.fragment!==null&&(F(a.on_destroy),a.fragment&&a.fragment.d(e),a.on_destroy=a.fragment=null,a.ctx=[])}function Ae(i,e){i.$$.dirty[0]===-1&&(G.push(i),Ce(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function I(i,e,a,t,o,s,n,f=[-1]){const m=A;q(i);const d=i.$$={fragment:null,ctx:null,props:s,update:O,not_equal:o,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:oe(),dirty:f,skip_bound:!1,root:e.target||m.$$.root};n&&n(d.root);let b=!1;if(d.ctx=a?a(i,e.props||{},(r,c,...g)=>{const h=g.length?g[0]:c;return d.ctx&&o(d.ctx[r],d.ctx[r]=h)&&(!d.skip_bound&&d.bound[r]&&d.bound[r](h),b&&Ae(i,r)),c}):[],d.update(),b=!0,F(d.before_update),d.fragment=t?t(d.ctx):!1,e.target){if(e.hydrate){const r=ye(e.target);d.fragment&&d.fragment.l(r),r.forEach(k)}else d.fragment&&d.fragment.c();e.intro&&S(i.$$.fragment),L(i,e.target,e.anchor,e.customElement),me()}q(m)}class R{$destroy(){N(this,1),this.$destroy=O}$on(e,a){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(a),()=>{const o=t.indexOf(a);o!==-1&&t.splice(o,1)}}$set(e){this.$$set&&!pe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Se(i){let e,a,t,o,s,n,f,m;const d=i[7].default,b=ge(d,i,i[6],null);return{c(){e=x("aside"),a=x("div"),t=C(),o=x("div"),b&&b.c(),l(a,"class","overlay svelte-1c92i6o"),l(o,"class",s="panel "+i[1]+" svelte-1c92i6o"),z(o,"size",i[2]),l(e,"class","drawer svelte-1c92i6o"),l(e,"style",i[3]),z(e,"open",i[0])},m(r,c){w(r,e,c),p(e,a),p(e,t),p(e,o),b&&b.m(o,null),n=!0,f||(m=ce(a,"click",i[4]),f=!0)},p(r,[c]){b&&b.p&&(!n||c&64)&&xe(b,d,r,r[6],n?ve(d,r[6],c,null):ke(r[6]),null),(!n||c&2&&s!==(s="panel "+r[1]+" svelte-1c92i6o"))&&l(o,"class",s),c&6&&z(o,"size",r[2]),(!n||c&8)&&l(e,"style",r[3]),c&1&&z(e,"open",r[0])},i(r){n||(S(b,r),n=!0)},o(r){H(b,r),n=!1},d(r){r&&k(e),b&&b.d(r),f=!1,m()}}}function Ee(i,e,a){let t,{$$slots:o={},$$scope:s}=e,{open:n=!1}=e,{duration:f=.2}=e,{placement:m="left"}=e,{size:d=null}=e,b=!1;const r=je();function c(h){if(b){const y=document.querySelector("body");y.style.overflow=h?"hidden":"auto"}}function g(){r("clickAway")}return be(()=>{b=!0,c(n)}),i.$$set=h=>{"open"in h&&a(0,n=h.open),"duration"in h&&a(5,f=h.duration),"placement"in h&&a(1,m=h.placement),"size"in h&&a(2,d=h.size),"$$scope"in h&&a(6,s=h.$$scope)},i.$$.update=()=>{i.$$.dirty&36&&a(3,t=`--duration: ${f}s; --size: ${d};`),i.$$.dirty&1&&c(n)},[n,m,d,t,g,f,s,o]}class De extends R{constructor(e){super(),I(this,e,Ee,Se,M,{open:0,duration:5,placement:1,size:2})}}const D=parseFloat;function K(i,e=";"){let a;if(Array.isArray(i))a=i.filter(t=>t);else{a=[];for(const t in i)i[t]&&a.push(`${t}:${i[t]}`)}return a.join(e)}function Ye(i,e,a,t){let o,s;const n="1em";let f,m,d,b="-.125em";const r="visible";return t&&(d="center",s="1.25em"),a&&(o=a),e&&(e=="lg"?(m="1.33333em",f=".75em",b="-.225em"):e=="xs"?m=".75em":e=="sm"?m=".875em":m=e.replace("x","em")),K([K({float:o,width:s,height:n,"line-height":f,"font-size":m,"text-align":d,"vertical-align":b,"transform-origin":"center",overflow:r}),i])}function Be(i,e,a,t,o,s=1,n="",f=""){let m=1,d=1;return o&&(o=="horizontal"?m=-1:o=="vertical"?d=-1:m=d=-1),K([`translate(${D(e)*s}${n},${D(a)*s}${n})`,`scale(${m*D(i)},${d*D(i)})`,t&&`rotate(${t}${f})`]," ")}function re(i){let e,a,t,o,s,n,f;function m(r,c){return typeof r[10][4]=="string"?Le:He}let d=m(i),b=d(i);return{c(){e=j("svg"),a=j("g"),t=j("g"),b.c(),l(t,"transform",i[12]),l(a,"transform",o="translate("+i[10][0]/2+" "+i[10][1]/2+")"),l(a,"transform-origin",s=i[10][0]/4+" 0"),l(e,"id",i[1]),l(e,"class",n="svelte-fa "+i[0]+" svelte-1cj2gr0"),l(e,"style",i[11]),l(e,"viewBox",f="0 0 "+i[10][0]+" "+i[10][1]),l(e,"aria-hidden","true"),l(e,"role","img"),l(e,"xmlns","http://www.w3.org/2000/svg"),z(e,"pulse",i[4]),z(e,"spin",i[3])},m(r,c){w(r,e,c),p(e,a),p(a,t),b.m(t,null)},p(r,c){d===(d=m(r))&&b?b.p(r,c):(b.d(1),b=d(r),b&&(b.c(),b.m(t,null))),c&4096&&l(t,"transform",r[12]),c&1024&&o!==(o="translate("+r[10][0]/2+" "+r[10][1]/2+")")&&l(a,"transform",o),c&1024&&s!==(s=r[10][0]/4+" 0")&&l(a,"transform-origin",s),c&2&&l(e,"id",r[1]),c&1&&n!==(n="svelte-fa "+r[0]+" svelte-1cj2gr0")&&l(e,"class",n),c&2048&&l(e,"style",r[11]),c&1024&&f!==(f="0 0 "+r[10][0]+" "+r[10][1])&&l(e,"viewBox",f),c&17&&z(e,"pulse",r[4]),c&9&&z(e,"spin",r[3])},d(r){r&&k(e),b.d()}}}function He(i){let e,a,t,o,s,n,f,m,d,b;return{c(){e=j("path"),n=j("path"),l(e,"d",a=i[10][4][0]),l(e,"fill",t=i[6]||i[2]||"currentColor"),l(e,"fill-opacity",o=i[9]!=!1?i[7]:i[8]),l(e,"transform",s="translate("+i[10][0]/-2+" "+i[10][1]/-2+")"),l(n,"d",f=i[10][4][1]),l(n,"fill",m=i[5]||i[2]||"currentColor"),l(n,"fill-opacity",d=i[9]!=!1?i[8]:i[7]),l(n,"transform",b="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")},m(r,c){w(r,e,c),w(r,n,c)},p(r,c){c&1024&&a!==(a=r[10][4][0])&&l(e,"d",a),c&68&&t!==(t=r[6]||r[2]||"currentColor")&&l(e,"fill",t),c&896&&o!==(o=r[9]!=!1?r[7]:r[8])&&l(e,"fill-opacity",o),c&1024&&s!==(s="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")&&l(e,"transform",s),c&1024&&f!==(f=r[10][4][1])&&l(n,"d",f),c&36&&m!==(m=r[5]||r[2]||"currentColor")&&l(n,"fill",m),c&896&&d!==(d=r[9]!=!1?r[8]:r[7])&&l(n,"fill-opacity",d),c&1024&&b!==(b="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")&&l(n,"transform",b)},d(r){r&&k(e),r&&k(n)}}}function Le(i){let e,a,t,o;return{c(){e=j("path"),l(e,"d",a=i[10][4]),l(e,"fill",t=i[2]||i[5]||"currentColor"),l(e,"transform",o="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")},m(s,n){w(s,e,n)},p(s,n){n&1024&&a!==(a=s[10][4])&&l(e,"d",a),n&36&&t!==(t=s[2]||s[5]||"currentColor")&&l(e,"fill",t),n&1024&&o!==(o="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&l(e,"transform",o)},d(s){s&&k(e)}}}function Ne(i){let e,a=i[10][4]&&re(i);return{c(){a&&a.c(),e=we()},m(t,o){a&&a.m(t,o),w(t,e,o)},p(t,[o]){t[10][4]?a?a.p(t,o):(a=re(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:O,o:O,d(t){a&&a.d(t),t&&k(e)}}}function Fe(i,e,a){let{class:t=""}=e,{id:o=""}=e,{style:s=""}=e,{icon:n}=e,{size:f=""}=e,{color:m=""}=e,{fw:d=!1}=e,{pull:b=""}=e,{scale:r=1}=e,{translateX:c=0}=e,{translateY:g=0}=e,{rotate:h=""}=e,{flip:y=!1}=e,{spin:v=!1}=e,{pulse:_=!1}=e,{primaryColor:J=""}=e,{secondaryColor:Q=""}=e,{primaryOpacity:V=1}=e,{secondaryOpacity:Z=.4}=e,{swapOpacity:$=!1}=e,ee,ie,ae;return i.$$set=u=>{"class"in u&&a(0,t=u.class),"id"in u&&a(1,o=u.id),"style"in u&&a(13,s=u.style),"icon"in u&&a(14,n=u.icon),"size"in u&&a(15,f=u.size),"color"in u&&a(2,m=u.color),"fw"in u&&a(16,d=u.fw),"pull"in u&&a(17,b=u.pull),"scale"in u&&a(18,r=u.scale),"translateX"in u&&a(19,c=u.translateX),"translateY"in u&&a(20,g=u.translateY),"rotate"in u&&a(21,h=u.rotate),"flip"in u&&a(22,y=u.flip),"spin"in u&&a(3,v=u.spin),"pulse"in u&&a(4,_=u.pulse),"primaryColor"in u&&a(5,J=u.primaryColor),"secondaryColor"in u&&a(6,Q=u.secondaryColor),"primaryOpacity"in u&&a(7,V=u.primaryOpacity),"secondaryOpacity"in u&&a(8,Z=u.secondaryOpacity),"swapOpacity"in u&&a(9,$=u.swapOpacity)},i.$$.update=()=>{i.$$.dirty&16384&&a(10,ee=n&&n.icon||[0,0,"",[],""]),i.$$.dirty&237568&&a(11,ie=Ye(s,f,b,d)),i.$$.dirty&8126464&&a(12,ae=Be(r,c,g,h,y,512))},[t,o,m,v,_,J,Q,V,Z,$,ee,ie,ae,s,n,f,d,b,r,c,g,h,y]}class Me extends R{constructor(e){super(),I(this,e,Fe,Ne,M,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ie={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]};function Re(i){let e,a,t,o,s,n,f,m,d,b,r=i[2].format(i[1])+"",c,g,h,y;return n=new Me({props:{icon:Ie}}),{c(){e=x("div"),a=x("div"),a.textContent=`${new Date().toLocaleDateString("ru-RU")}`,t=C(),o=x("div"),s=x("div"),P(n.$$.fragment),f=C(),m=x("div"),m.textContent="\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0445 \u0433\u0440\u0443\u043F\u043F",d=C(),b=x("div"),c=W(r),l(a,"class","date svelte-v04vgo"),l(s,"class","kv-burger svelte-v04vgo"),l(m,"class","caption svelte-v04vgo"),l(o,"class","caption-wrapp svelte-v04vgo"),l(b,"class","time svelte-v04vgo"),l(e,"id","header"),l(e,"class","header svelte-v04vgo")},m(v,_){w(v,e,_),p(e,a),p(e,t),p(e,o),p(o,s),L(n,s,null),p(o,f),p(o,m),p(e,d),p(e,b),p(b,c),g=!0,h||(y=ce(s,"click",function(){le(i[0])&&i[0].apply(this,arguments)}),h=!0)},p(v,[_]){i=v,(!g||_&2)&&r!==(r=i[2].format(i[1])+"")&&ze(c,r)},i(v){g||(S(n.$$.fragment,v),g=!0)},o(v){H(n.$$.fragment,v),g=!1},d(v){v&&k(e),N(n),h=!1,y()}}}function Te(i,e,a){let{onBurgerClick:t}=e,o=new Date;be(()=>{let n=setInterval(()=>{a(1,o=new Date)},1e3);return()=>clearInterval(n)});const s=new Intl.DateTimeFormat("ru",{hour12:!1,hour:"numeric",minute:"2-digit",second:"2-digit"});return i.$$set=n=>{"onBurgerClick"in n&&a(0,t=n.onBurgerClick)},[t,o,s]}class Ue extends R{constructor(e){super(),I(this,e,Te,Re,M,{onBurgerClick:0})}}function Xe(i){let e;return{c(){e=x("div"),e.textContent="DRW"},m(a,t){w(a,e,t)},p:O,d(a){a&&k(e)}}}function Pe(i){let e,a,t,o,s;return a=new Ue({props:{onBurgerClick:i[1]}}),o=new De({props:{open:i[0],size:"null",$$slots:{default:[Xe]},$$scope:{ctx:i}}}),o.$on("clickAway",i[2]),{c(){e=x("main"),P(a.$$.fragment),t=C(),P(o.$$.fragment),l(e,"class","kv-container  svelte-1bohx5n")},m(n,f){w(n,e,f),L(a,e,null),p(e,t),L(o,e,null),s=!0},p(n,[f]){const m={};f&1&&(m.open=n[0]),f&8&&(m.$$scope={dirty:f,ctx:n}),o.$set(m)},i(n){s||(S(a.$$.fragment,n),S(o.$$.fragment,n),s=!0)},o(n){H(a.$$.fragment,n),H(o.$$.fragment,n),s=!1},d(n){n&&k(e),N(a),N(o)}}}function Ke(i,e,a){let t=!1;return[t,()=>{a(0,t=!t)},()=>a(0,t=!1)]}class We extends R{constructor(e){super(),I(this,e,Ke,Pe,M,{})}}new We({target:document.querySelector("section div"),props:{prp:"qwerty"}});
