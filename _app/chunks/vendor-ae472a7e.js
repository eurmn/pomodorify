function K(){}function le(n,t){for(const e in t)n[e]=t[e];return n}function Nt(n){return n()}function et(){return Object.create(null)}function en(n){n.forEach(Nt)}function ce(n){return typeof n=="function"}function ue(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let rn;function cr(n,t){return rn||(rn=document.createElement("a")),rn.href=t,n===rn.href}function me(n){return Object.keys(n).length===0}function ur(n,t,e,a){if(n){const r=Pt(n,t,e,a);return n[0](r)}}function Pt(n,t,e,a){return n[1]&&a?le(e.ctx.slice(),n[1](a(t))):e.ctx}function mr(n,t,e,a){if(n[2]&&a){const r=n[2](a(e));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],i=Math.max(t.dirty.length,r.length);for(let s=0;s<i;s+=1)o[s]=t.dirty[s]|r[s];return o}return t.dirty|r}return t.dirty}function dr(n,t,e,a,r,o){if(r){const i=Pt(t,e,a,o);n.p(i,r)}}function vr(n){if(n.ctx.length>32){const t=[],e=n.ctx.length/32;for(let a=0;a<e;a++)t[a]=-1;return t}return-1}let bn=!1;function de(){bn=!0}function ve(){bn=!1}function ge(n,t,e,a){for(;n<t;){const r=n+(t-n>>1);e(r)<=a?n=r+1:t=r}return n}function pe(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const f=[];for(let l=0;l<t.length;l++){const m=t[l];m.claim_order!==void 0&&f.push(m)}t=f}const e=new Int32Array(t.length+1),a=new Int32Array(t.length);e[0]=-1;let r=0;for(let f=0;f<t.length;f++){const l=t[f].claim_order,m=(r>0&&t[e[r]].claim_order<=l?r+1:ge(1,r,v=>t[e[v]].claim_order,l))-1;a[f]=e[m]+1;const u=m+1;e[u]=f,r=Math.max(u,r)}const o=[],i=[];let s=t.length-1;for(let f=e[r]+1;f!=0;f=a[f-1]){for(o.push(t[f-1]);s>=f;s--)i.push(t[s]);s--}for(;s>=0;s--)i.push(t[s]);o.reverse(),i.sort((f,l)=>f.claim_order-l.claim_order);for(let f=0,l=0;f<i.length;f++){for(;l<o.length&&i[f].claim_order>=o[l].claim_order;)l++;const m=l<o.length?o[l]:null;n.insertBefore(i[f],m)}}function be(n,t){if(bn){for(pe(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function gr(n,t,e){bn&&!e?be(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function he(n){n.parentNode.removeChild(n)}function ye(n){return document.createElement(n)}function Yn(n){return document.createTextNode(n)}function pr(){return Yn(" ")}function br(){return Yn("")}function hr(n,t,e,a){return n.addEventListener(t,e,a),()=>n.removeEventListener(t,e,a)}function yr(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function ke(n){return Array.from(n.childNodes)}function xe(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function It(n,t,e,a,r=!1){xe(n);const o=(()=>{for(let i=n.claim_info.last_index;i<n.length;i++){const s=n[i];if(t(s)){const f=e(s);return f===void 0?n.splice(i,1):n[i]=f,r||(n.claim_info.last_index=i),s}}for(let i=n.claim_info.last_index-1;i>=0;i--){const s=n[i];if(t(s)){const f=e(s);return f===void 0?n.splice(i,1):n[i]=f,r?f===void 0&&n.claim_info.last_index--:n.claim_info.last_index=i,s}}return a()})();return o.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,o}function we(n,t,e,a){return It(n,r=>r.nodeName===t,r=>{const o=[];for(let i=0;i<r.attributes.length;i++){const s=r.attributes[i];e[s.name]||o.push(s.name)}o.forEach(i=>r.removeAttribute(i))},()=>a(t))}function kr(n,t,e){return we(n,t,e,ye)}function _e(n,t){return It(n,e=>e.nodeType===3,e=>{const a=""+t;if(e.data.startsWith(a)){if(e.data.length!==a.length)return e.splitText(a.length)}else e.data=a},()=>Yn(t),!0)}function xr(n){return _e(n," ")}function wr(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function _r(n,t){n.value=t==null?"":t}function Ar(n,t,e,a){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,a?"important":"")}let nn;function Q(n){nn=n}function Un(){if(!nn)throw new Error("Function called outside component initialization");return nn}function Er(n){Un().$$.on_mount.push(n)}function Cr(n){Un().$$.after_update.push(n)}function Sr(n,t){Un().$$.context.set(n,t)}const V=[],at=[],fn=[],rt=[],Tt=Promise.resolve();let On=!1;function Mt(){On||(On=!0,Tt.then(Lt))}function Or(){return Mt(),Tt}function Nn(n){fn.push(n)}const _n=new Set;let on=0;function Lt(){const n=nn;do{for(;on<V.length;){const t=V[on];on++,Q(t),Ae(t.$$)}for(Q(null),V.length=0,on=0;at.length;)at.pop()();for(let t=0;t<fn.length;t+=1){const e=fn[t];_n.has(e)||(_n.add(e),e())}fn.length=0}while(V.length);for(;rt.length;)rt.pop()();On=!1,_n.clear(),Q(n)}function Ae(n){if(n.fragment!==null){n.update(),en(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Nn)}}const ln=new Set;let z;function Nr(){z={r:0,c:[],p:z}}function Pr(){z.r||en(z.c),z=z.p}function Ee(n,t){n&&n.i&&(ln.delete(n),n.i(t))}function Ir(n,t,e,a){if(n&&n.o){if(ln.has(n))return;ln.add(n),z.c.push(()=>{ln.delete(n),a&&(e&&n.d(1),a())}),n.o(t)}}function Tr(n,t){const e={},a={},r={$$scope:1};let o=n.length;for(;o--;){const i=n[o],s=t[o];if(s){for(const f in i)f in s||(a[f]=1);for(const f in s)r[f]||(e[f]=s[f],r[f]=1);n[o]=s}else for(const f in i)r[f]=1}for(const i in a)i in e||(e[i]=void 0);return e}function Mr(n){return typeof n=="object"&&n!==null?n:{}}function Lr(n){n&&n.c()}function Rr(n,t){n&&n.l(t)}function Ce(n,t,e,a){const{fragment:r,on_mount:o,on_destroy:i,after_update:s}=n.$$;r&&r.m(t,e),a||Nn(()=>{const f=o.map(Nt).filter(ce);i?i.push(...f):en(f),n.$$.on_mount=[]}),s.forEach(Nn)}function Se(n,t){const e=n.$$;e.fragment!==null&&(en(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Oe(n,t){n.$$.dirty[0]===-1&&(V.push(n),Mt(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function zr(n,t,e,a,r,o,i,s=[-1]){const f=nn;Q(n);const l=n.$$={fragment:null,ctx:null,props:o,update:K,not_equal:r,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:et(),dirty:s,skip_bound:!1,root:t.target||f.$$.root};i&&i(l.root);let m=!1;if(l.ctx=e?e(n,t.props||{},(u,v,...g)=>{const b=g.length?g[0]:v;return l.ctx&&r(l.ctx[u],l.ctx[u]=b)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](b),m&&Oe(n,u)),v}):[],l.update(),m=!0,en(l.before_update),l.fragment=a?a(l.ctx):!1,t.target){if(t.hydrate){de();const u=ke(t.target);l.fragment&&l.fragment.l(u),u.forEach(he)}else l.fragment&&l.fragment.c();t.intro&&Ee(n.$$.fragment),Ce(n,t.target,t.anchor,t.customElement),ve(),Lt()}Q(f)}class Fr{$destroy(){Se(this,1),this.$destroy=K}$on(t,e){const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(e),()=>{const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}$set(t){this.$$set&&!me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function Dr(n,t=K){let e;const a=new Set;function r(s){if(ue(n,s)&&(n=s,e)){const f=!Y.length;for(const l of a)l[1](),Y.push(l,n);if(f){for(let l=0;l<Y.length;l+=2)Y[l][0](Y[l+1]);Y.length=0}}}function o(s){r(s(n))}function i(s,f=K){const l=[s,f];return a.add(l),a.size===1&&(e=t(r)||K),s(n),()=>{a.delete(l),a.size===0&&(e(),e=null)}}return{set:r,update:o,subscribe:i}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var $r={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]},Ne={prefix:"fas",iconName:"shuffle",icon:[512,512,[128256,"random"],"f074","M424.1 287c-15.13-15.12-40.1-4.426-40.1 16.97V352H336L153.6 108.8C147.6 100.8 138.1 96 128 96H32C14.31 96 0 110.3 0 128s14.31 32 32 32h80l182.4 243.2C300.4 411.3 309.9 416 320 416h63.97v47.94c0 21.39 25.86 32.12 40.99 17l79.1-79.98c9.387-9.387 9.387-24.59 0-33.97L424.1 287zM336 160h47.97v48.03c0 21.39 25.87 32.09 40.1 16.97l79.1-79.98c9.387-9.391 9.385-24.59-.0013-33.97l-79.1-79.98c-15.13-15.12-40.99-4.391-40.99 17V96H320c-10.06 0-19.56 4.75-25.59 12.81L254 162.7L293.1 216L336 160zM112 352H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c10.06 0 19.56-4.75 25.59-12.81l40.4-53.87L154 296L112 352z"]},jr=Ne;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function it(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,a)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?it(Object(e),!0).forEach(function(a){Te(n,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):it(Object(e)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}return n}function dn(n){return dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dn(n)}function Pe(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function ot(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function Ie(n,t,e){return t&&ot(n.prototype,t),e&&ot(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Te(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Hn(n,t){return Le(n)||ze(n,t)||Rt(n,t)||De()}function hn(n){return Me(n)||Re(n)||Rt(n)||Fe()}function Me(n){if(Array.isArray(n))return Pn(n)}function Le(n){if(Array.isArray(n))return n}function Re(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ze(n,t){var e=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(n);!(r=(i=e.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function Rt(n,t){if(!!n){if(typeof n=="string")return Pn(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Pn(n,t)}}function Pn(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function Fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var st=function(){},Wn={},zt={},Ft=null,Dt={mark:st,measure:st};try{typeof window!="undefined"&&(Wn=window),typeof document!="undefined"&&(zt=document),typeof MutationObserver!="undefined"&&(Ft=MutationObserver),typeof performance!="undefined"&&(Dt=performance)}catch{}var $e=Wn.navigator||{},ft=$e.userAgent,lt=ft===void 0?"":ft,L=Wn,p=zt,ct=Ft,sn=Dt;L.document;var P=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",$t=~lt.indexOf("MSIE")||~lt.indexOf("Trident/"),S="___FONT_AWESOME___",In=16,jt="fa",Yt="svg-inline--fa",D="data-fa-i2svg",Tn="data-fa-pseudo-element",je="data-fa-pseudo-element-pending",Bn="data-prefix",Gn="data-icon",ut="fontawesome-i2svg",Ye="async",Ue=["HTML","HEAD","STYLE","SCRIPT"],Ut=function(){try{return!0}catch{return!1}}(),Xn={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},vn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Ht={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},He={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},We=/fa[srltdbk\-\ ]/,Wt="fa-layers-text",Be=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ge={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Bt=[1,2,3,4,5,6,7,8,9,10],Xe=Bt.concat([11,12,13,14,15,16,17,18,19,20]),Ve=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],F={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qe=[].concat(hn(Object.keys(vn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",F.GROUP,F.SWAP_OPACITY,F.PRIMARY,F.SECONDARY]).concat(Bt.map(function(n){return"".concat(n,"x")})).concat(Xe.map(function(n){return"w-".concat(n)})),Gt=L.FontAwesomeConfig||{};function Ke(n){var t=p.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function Qe(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(p&&typeof p.querySelector=="function"){var Je=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Je.forEach(function(n){var t=Hn(n,2),e=t[0],a=t[1],r=Qe(Ke(e));r!=null&&(Gt[a]=r)})}var Ze={familyPrefix:jt,styleDefault:"solid",replacementClass:Yt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},J=c(c({},Ze),Gt);J.autoReplaceSvg||(J.observeMutations=!1);var d={};Object.keys(J).forEach(function(n){Object.defineProperty(d,n,{enumerable:!0,set:function(e){J[n]=e,cn.forEach(function(a){return a(d)})},get:function(){return J[n]}})});L.FontAwesomeConfig=d;var cn=[];function na(n){return cn.push(n),function(){cn.splice(cn.indexOf(n),1)}}var M=In,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ta(n){if(!(!n||!P)){var t=p.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=p.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return p.head.insertBefore(t,a),n}}var ea="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var n=12,t="";n-- >0;)t+=ea[Math.random()*62|0];return t}function B(n){for(var t=[],e=(n||[]).length>>>0;e--;)t[e]=n[e];return t}function Vn(n){return n.classList?B(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xt(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function aa(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(Xt(n[e]),'" ')},"").trim()}function yn(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e].trim(),";")},"")}function qn(n){return n.size!==C.size||n.x!==C.x||n.y!==C.y||n.rotate!==C.rotate||n.flipX||n.flipY}function ra(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function ia(n){var t=n.transform,e=n.width,a=e===void 0?In:e,r=n.height,o=r===void 0?In:r,i=n.startCentered,s=i===void 0?!1:i,f="";return s&&$t?f+="translate(".concat(t.x/M-a/2,"em, ").concat(t.y/M-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/M,"em), calc(-50% + ").concat(t.y/M,"em)) "):f+="translate(".concat(t.x/M,"em, ").concat(t.y/M,"em) "),f+="scale(".concat(t.size/M*(t.flipX?-1:1),", ").concat(t.size/M*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var oa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Vt(){var n=jt,t=Yt,e=d.familyPrefix,a=d.replacementClass,r=oa;if(e!==n||a!==t){var o=new RegExp("\\.".concat(n,"\\-"),"g"),i=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var mt=!1;function An(){d.autoAddCss&&!mt&&(ta(Vt()),mt=!0)}var sa={mixout:function(){return{dom:{css:Vt,insertCss:An}}},hooks:function(){return{beforeDOMElementCreation:function(){An()},beforeI2svg:function(){An()}}}},O=L||{};O[S]||(O[S]={});O[S].styles||(O[S].styles={});O[S].hooks||(O[S].hooks={});O[S].shims||(O[S].shims=[]);var E=O[S],qt=[],fa=function n(){p.removeEventListener("DOMContentLoaded",n),gn=1,qt.map(function(t){return t()})},gn=!1;P&&(gn=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),gn||p.addEventListener("DOMContentLoaded",fa));function la(n){!P||(gn?setTimeout(n,0):qt.push(n))}function an(n){var t=n.tag,e=n.attributes,a=e===void 0?{}:e,r=n.children,o=r===void 0?[]:r;return typeof n=="string"?Xt(n):"<".concat(t," ").concat(aa(a),">").concat(o.map(an).join(""),"</").concat(t,">")}function dt(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}var ca=function(t,e){return function(a,r,o,i){return t.call(e,a,r,o,i)}},En=function(t,e,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?ca(e,r):e,f,l,m;for(a===void 0?(f=1,m=t[o[0]]):(f=0,m=a);f<i;f++)l=o[f],m=s(m,t[l],l,t);return m};function ua(n){for(var t=[],e=0,a=n.length;e<a;){var r=n.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=n.charCodeAt(e++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),e--)}else t.push(r)}return t}function Mn(n){var t=ua(n);return t.length===1?t[0].toString(16):null}function ma(n,t){var e=n.length,a=n.charCodeAt(t),r;return a>=55296&&a<=56319&&e>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function vt(n){return Object.keys(n).reduce(function(t,e){var a=n[e],r=!!a.icon;return r?t[a.iconName]=a.icon:t[e]=a,t},{})}function Ln(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=vt(t);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(n,vt(t)):E.styles[n]=c(c({},E.styles[n]||{}),o),n==="fas"&&Ln("fa",t)}var Z=E.styles,da=E.shims,va=Object.values(Ht),Kn=null,Kt={},Qt={},Jt={},Zt={},ne={},ga=Object.keys(Xn);function pa(n){return~qe.indexOf(n)}function ba(n,t){var e=t.split("-"),a=e[0],r=e.slice(1).join("-");return a===n&&r!==""&&!pa(r)?r:null}var te=function(){var t=function(o){return En(Z,function(i,s,f){return i[f]=En(s,o,{}),i},{})};Kt=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Qt=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),ne=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in Z||d.autoFetchSvg,a=En(da,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Jt=a.names,Zt=a.unicodes,Kn=kn(d.styleDefault)};na(function(n){Kn=kn(n.styleDefault)});te();function Qn(n,t){return(Kt[n]||{})[t]}function ha(n,t){return(Qt[n]||{})[t]}function U(n,t){return(ne[n]||{})[t]}function ee(n){return Jt[n]||{prefix:null,iconName:null}}function ya(n){var t=Zt[n],e=Qn("fas",n);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function R(){return Kn}var Jn=function(){return{prefix:null,iconName:null,rest:[]}};function kn(n){var t=Xn[n],e=vn[n]||vn[t],a=n in E.styles?n:null;return e||a||null}function xn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.skipLookups,a=e===void 0?!1:e,r=null,o=n.reduce(function(i,s){var f=ba(d.familyPrefix,s);if(Z[s]?(s=va.includes(s)?He[s]:s,r=s,i.prefix=s):ga.indexOf(s)>-1?(r=s,i.prefix=kn(s)):f?i.iconName=f:s!==d.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var l=r==="fa"?ee(i.iconName):{},m=U(i.prefix,i.iconName);l.prefix&&(r=null),i.iconName=l.iconName||m||i.iconName,i.prefix=l.prefix||i.prefix,i.prefix==="far"&&!Z.far&&Z.fas&&!d.autoFetchSvg&&(i.prefix="fas")}return i},Jn());return(o.prefix==="fa"||r==="fa")&&(o.prefix=R()||"fas"),o}var ka=function(){function n(){Pe(this,n),this.definitions={}}return Ie(n,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),i[s]),Ln(s,i[s]);var f=Ht[s];f&&Ln(f,i[s]),te()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,l=i.icon,m=l[2];e[s]||(e[s]={}),m.length>0&&m.forEach(function(u){typeof u=="string"&&(e[s][u]=l)}),e[s][f]=l}),e}}]),n}(),gt=[],H={},W={},xa=Object.keys(W);function wa(n,t){var e=t.mixoutsTo;return gt=n,H={},Object.keys(W).forEach(function(a){xa.indexOf(a)===-1&&delete W[a]}),gt.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),dn(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){H[i]||(H[i]=[]),H[i].push(o[i])})}a.provides&&a.provides(W)}),e}function Rn(n,t){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=H[n]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function $(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];var r=H[n]||[];r.forEach(function(o){o.apply(null,e)})}function N(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return W[n]?W[n].apply(null,t):void 0}function zn(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,e=n.prefix||R();if(!!t)return t=U(e,t)||t,dt(ae.definitions,e,t)||dt(E.styles,e,t)}var ae=new ka,_a=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,$("noAuto")},Aa={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?($("beforeI2svg",t),N("pseudoElements2svg",t),N("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,la(function(){Ca({autoReplaceSvgRoot:e}),$("watch",t)})}},Ea={icon:function(t){if(t===null)return null;if(dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=kn(t[0]);return{prefix:a,iconName:U(a,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.familyPrefix,"-"))>-1||t.match(We))){var r=xn(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=R();return{prefix:o,iconName:U(o,t)||t}}}},w={noAuto:_a,config:d,dom:Aa,parse:Ea,library:ae,findIconDefinition:zn,toHtml:an},Ca=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,a=e===void 0?p:e;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&P&&d.autoReplaceSvg&&w.dom.i2svg({node:a})};function wn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return an(a)})}}),Object.defineProperty(n,"node",{get:function(){if(!!P){var a=p.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function Sa(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,o=n.styles,i=n.transform;if(qn(i)&&e.found&&!a.found){var s=e.width,f=e.height,l={x:s/f/2,y:.5};r.style=yn(c(c({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Oa(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,o=n.symbol,i=o===!0?"".concat(t,"-").concat(d.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Zn(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,o=n.iconName,i=n.transform,s=n.symbol,f=n.title,l=n.maskId,m=n.titleId,u=n.extra,v=n.watchable,g=v===void 0?!1:v,b=a.found?a:e,_=b.width,A=b.height,k=r==="fak",y=[d.replacementClass,o?"".concat(d.familyPrefix,"-").concat(o):""].filter(function(j){return u.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(u.classes).join(" "),h={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(A)})},I=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(_/A*16*.0625,"em")}:{};g&&(h.attributes[D]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(m||tn())},children:[f]}),delete h.attributes.title);var x=c(c({},h),{},{prefix:r,iconName:o,main:e,mask:a,maskId:l,transform:i,symbol:s,styles:c(c({},I),u.styles)}),T=a.found&&e.found?N("generateAbstractMask",x)||{children:[],attributes:{}}:N("generateAbstractIcon",x)||{children:[],attributes:{}},G=T.children,X=T.attributes;return x.children=G,x.attributes=X,s?Oa(x):Sa(x)}function pt(n){var t=n.content,e=n.width,a=n.height,r=n.transform,o=n.title,i=n.extra,s=n.watchable,f=s===void 0?!1:s,l=c(c(c({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(l[D]="");var m=c({},i.styles);qn(r)&&(m.transform=ia({transform:r,startCentered:!0,width:e,height:a}),m["-webkit-transform"]=m.transform);var u=yn(m);u.length>0&&(l.style=u);var v=[];return v.push({tag:"span",attributes:l,children:[t]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function Na(n){var t=n.content,e=n.title,a=n.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=yn(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var Cn=E.styles;function Fn(n){var t=n[0],e=n[1],a=n.slice(4),r=Hn(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(F.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(F.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(F.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:e,icon:i}}var Pa={found:!1,width:512,height:512};function Ia(n,t){!Ut&&!d.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function Dn(n,t){var e=t;return t==="fa"&&d.styleDefault!==null&&(t=R()),new Promise(function(a,r){if(N("missingIconAbstract"),e==="fa"){var o=ee(n)||{};n=o.iconName||n,t=o.prefix||t}if(n&&t&&Cn[t]&&Cn[t][n]){var i=Cn[t][n];return a(Fn(i))}Ia(n,t),a(c(c({},Pa),{},{icon:d.showMissingIcons&&n?N("missingIconAbstract")||{}:{}}))})}var bt=function(){},$n=d.measurePerformance&&sn&&sn.mark&&sn.measure?sn:{mark:bt,measure:bt},q='FA "6.1.1"',Ta=function(t){return $n.mark("".concat(q," ").concat(t," begins")),function(){return re(t)}},re=function(t){$n.mark("".concat(q," ").concat(t," ends")),$n.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))},nt={begin:Ta,end:re},un=function(){};function ht(n){var t=n.getAttribute?n.getAttribute(D):null;return typeof t=="string"}function Ma(n){var t=n.getAttribute?n.getAttribute(Bn):null,e=n.getAttribute?n.getAttribute(Gn):null;return t&&e}function La(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(d.replacementClass)}function Ra(){if(d.autoReplaceSvg===!0)return mn.replace;var n=mn[d.autoReplaceSvg];return n||mn.replace}function za(n){return p.createElementNS("http://www.w3.org/2000/svg",n)}function Fa(n){return p.createElement(n)}function ie(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.ceFn,a=e===void 0?n.tag==="svg"?za:Fa:e;if(typeof n=="string")return p.createTextNode(n);var r=a(n.tag);Object.keys(n.attributes||[]).forEach(function(i){r.setAttribute(i,n.attributes[i])});var o=n.children||[];return o.forEach(function(i){r.appendChild(ie(i,{ceFn:a}))}),r}function Da(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var mn={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(ie(r),e)}),e.getAttribute(D)===null&&d.keepOriginalSource){var a=p.createComment(Da(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(t){var e=t[0],a=t[1];if(~Vn(e).indexOf(d.replacementClass))return mn.replace(t);var r=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return an(s)}).join(`
`);e.setAttribute(D,""),e.innerHTML=i}};function yt(n){n()}function oe(n,t){var e=typeof t=="function"?t:un;if(n.length===0)e();else{var a=yt;d.mutateApproach===Ye&&(a=L.requestAnimationFrame||yt),a(function(){var r=Ra(),o=nt.begin("mutate");n.map(r),o(),e()})}}var tt=!1;function se(){tt=!0}function jn(){tt=!1}var pn=null;function kt(n){if(!!ct&&!!d.observeMutations){var t=n.treeCallback,e=t===void 0?un:t,a=n.nodeCallback,r=a===void 0?un:a,o=n.pseudoElementsCallback,i=o===void 0?un:o,s=n.observeMutationsRoot,f=s===void 0?p:s;pn=new ct(function(l){if(!tt){var m=R();B(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!ht(u.addedNodes[0])&&(d.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&ht(u.target)&&~Ve.indexOf(u.attributeName))if(u.attributeName==="class"&&Ma(u.target)){var v=xn(Vn(u.target)),g=v.prefix,b=v.iconName;u.target.setAttribute(Bn,g||m),b&&u.target.setAttribute(Gn,b)}else La(u.target)&&r(u.target)})}}),P&&pn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $a(){!pn||pn.disconnect()}function ja(n){var t=n.getAttribute("style"),e=[];return t&&(e=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function Ya(n){var t=n.getAttribute("data-prefix"),e=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"",r=xn(Vn(n));return r.prefix||(r.prefix=R()),t&&e&&(r.prefix=t,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=ha(r.prefix,n.innerText)||Qn(r.prefix,Mn(n.innerText))),r}function Ua(n){var t=B(n.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=n.getAttribute("title"),a=n.getAttribute("data-fa-title-id");return d.autoA11y&&(e?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ha(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ya(n),a=e.iconName,r=e.prefix,o=e.rest,i=Ua(n),s=Rn("parseNodeAttributes",{},n),f=t.styleParser?ja(n):[];return c({iconName:a,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var Wa=E.styles;function fe(n){var t=d.autoReplaceSvg==="nest"?xt(n,{styleParser:!1}):xt(n);return~t.extra.classes.indexOf(Wt)?N("generateLayersText",n,t):N("generateSvgReplacementMutation",n,t)}function wt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();var e=p.documentElement.classList,a=function(u){return e.add("".concat(ut,"-").concat(u))},r=function(u){return e.remove("".concat(ut,"-").concat(u))},o=d.autoFetchSvg?Object.keys(Xn):Object.keys(Wa),i=[".".concat(Wt,":not([").concat(D,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat(D,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=B(n.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=nt.begin("onTree"),l=s.reduce(function(m,u){try{var v=fe(u);v&&m.push(v)}catch(g){Ut||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,u){Promise.all(l).then(function(v){oe(v,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),f(),m()})}).catch(function(v){f(),u(v)})})}function Ba(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fe(n).then(function(e){e&&oe([e],t)})}function Ga(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:zn(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:zn(r||{})),n(a,c(c({},e),{},{mask:r}))}}var Xa=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?C:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,l=e.maskId,m=l===void 0?null:l,u=e.title,v=u===void 0?null:u,g=e.titleId,b=g===void 0?null:g,_=e.classes,A=_===void 0?[]:_,k=e.attributes,y=k===void 0?{}:k,h=e.styles,I=h===void 0?{}:h;if(!!t){var x=t.prefix,T=t.iconName,G=t.icon;return wn(c({type:"icon"},t),function(){return $("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(v?y["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(b||tn()):(y["aria-hidden"]="true",y.focusable="false")),Zn({icons:{main:Fn(G),mask:f?Fn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:T,transform:c(c({},C),r),symbol:i,title:v,maskId:m,titleId:b,extra:{attributes:y,styles:I,classes:A}})})}},Va={mixout:function(){return{icon:Ga(Xa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=wt,e.nodeCallback=Ba,e}}},provides:function(t){t.i2svg=function(e){var a=e.node,r=a===void 0?p:a,o=e.callback,i=o===void 0?function(){}:o;return wt(r,i)},t.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,m=a.mask,u=a.maskId,v=a.extra;return new Promise(function(g,b){Promise.all([Dn(r,s),m.iconName?Dn(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var A=Hn(_,2),k=A[0],y=A[1];g([e,Zn({icons:{main:k,mask:y},prefix:s,iconName:r,transform:f,symbol:l,maskId:u,title:o,titleId:i,extra:v,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=yn(s);f.length>0&&(r.style=f);var l;return qn(i)&&(l=N("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(l||o.icon),{children:a,attributes:r}}}},qa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return wn({type:"layer"},function(){$("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(hn(o)).join(" ")},children:i}]})}}}},Ka={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,l=f===void 0?{}:f,m=a.styles,u=m===void 0?{}:m;return wn({type:"counter",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:a}),Na({content:e.toString(),title:o,extra:{attributes:l,styles:u,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(hn(s))}})})}}}},Qa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?C:r,i=a.title,s=i===void 0?null:i,f=a.classes,l=f===void 0?[]:f,m=a.attributes,u=m===void 0?{}:m,v=a.styles,g=v===void 0?{}:v;return wn({type:"text",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:a}),pt({content:e,transform:c(c({},C),o),title:s,extra:{attributes:u,styles:g,classes:["".concat(d.familyPrefix,"-layers-text")].concat(hn(l))}})})}}},provides:function(t){t.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if($t){var l=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();s=m.width/l,f=m.height/l}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,pt({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Ja=new RegExp('"',"ug"),_t=[1105920,1112319];function Za(n){var t=n.replace(Ja,""),e=ma(t,0),a=e>=_t[0]&&e<=_t[1],r=t.length===2?t[0]===t[1]:!1;return{value:Mn(r?t[0]:t),isSecondary:a||r}}function At(n,t){var e="".concat(je).concat(t.replace(":","-"));return new Promise(function(a,r){if(n.getAttribute(e)!==null)return a();var o=B(n.children),i=o.filter(function(T){return T.getAttribute(Tn)===t})[0],s=L.getComputedStyle(n,t),f=s.getPropertyValue("font-family").match(Be),l=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(i&&!f)return n.removeChild(i),a();if(f&&m!=="none"&&m!==""){var u=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?vn[f[2].toLowerCase()]:Ge[l],g=Za(u),b=g.value,_=g.isSecondary,A=f[0].startsWith("FontAwesome"),k=Qn(v,b),y=k;if(A){var h=ya(b);h.iconName&&h.prefix&&(k=h.iconName,v=h.prefix)}if(k&&!_&&(!i||i.getAttribute(Bn)!==v||i.getAttribute(Gn)!==y)){n.setAttribute(e,y),i&&n.removeChild(i);var I=Ha(),x=I.extra;x.attributes[Tn]=t,Dn(k,v).then(function(T){var G=Zn(c(c({},I),{},{icons:{main:T,mask:Jn()},prefix:v,iconName:y,extra:x,watchable:!0})),X=p.createElement("svg");t==="::before"?n.insertBefore(X,n.firstChild):n.appendChild(X),X.outerHTML=G.map(function(j){return an(j)}).join(`
`),n.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function nr(n){return Promise.all([At(n,"::before"),At(n,"::after")])}function tr(n){return n.parentNode!==document.head&&!~Ue.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Tn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Et(n){if(!!P)return new Promise(function(t,e){var a=B(n.querySelectorAll("*")).filter(tr).map(nr),r=nt.begin("searchPseudoElements");se(),Promise.all(a).then(function(){r(),jn(),t()}).catch(function(){r(),jn(),e()})})}var er={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Et,e}}},provides:function(t){t.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?p:a;d.searchPseudoElements&&Et(r)}}},Ct=!1,ar={mixout:function(){return{dom:{unwatch:function(){se(),Ct=!0}}}},hooks:function(){return{bootstrap:function(){kt(Rn("mutationObserverCallbacks",{}))},noAuto:function(){$a()},watch:function(e){var a=e.observeMutationsRoot;Ct?jn():kt(Rn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},St=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},rr={mixout:function(){return{parse:{transform:function(e){return St(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=St(r)),e}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(l," ").concat(m)},v={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:u,path:v};return{tag:"g",attributes:c({},g.outer),children:[{tag:"g",attributes:c({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),g.path)}]}]}}}},Sn={x:0,y:0,width:"100%",height:"100%"};function Ot(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function ir(n){return n.tag==="g"?n.children:[n]}var or={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?xn(r.split(" ").map(function(i){return i.trim()})):Jn();return o.prefix||(o.prefix=R()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(t){t.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,l=o.width,m=o.icon,u=i.width,v=i.icon,g=ra({transform:f,containerWidth:u,iconWidth:l}),b={tag:"rect",attributes:c(c({},Sn),{},{fill:"white"})},_=m.children?{children:m.children.map(Ot)}:{},A={tag:"g",attributes:c({},g.inner),children:[Ot(c({tag:m.tag,attributes:c(c({},m.attributes),g.path)},_))]},k={tag:"g",attributes:c({},g.outer),children:[A]},y="mask-".concat(s||tn()),h="clip-".concat(s||tn()),I={tag:"mask",attributes:c(c({},Sn),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,k]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:ir(v)},I]};return a.push(x,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(y,")")},Sn)}),{children:a,attributes:r}}}},sr={provides:function(t){var e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=c(c({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},fr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},lr=[sa,Va,qa,Ka,Qa,er,ar,rr,or,sr,fr];wa(lr,{mixoutsTo:w});w.noAuto;w.config;var Yr=w.library,Ur=w.dom;w.parse;w.findIconDefinition;w.toHtml;w.icon;w.layer;w.text;w.counter;export{Mr as A,Se as B,le as C,Dr as D,Or as E,ur as F,dr as G,vr as H,mr as I,be as J,K,cr as L,_r as M,hr as N,en as O,Yr as P,jr as Q,$r as R,Fr as S,Ur as T,at as U,ke as a,yr as b,kr as c,he as d,ye as e,Ar as f,gr as g,_e as h,zr as i,wr as j,pr as k,br as l,xr as m,Nr as n,Ir as o,Pr as p,Ee as q,Sr as r,ue as s,Yn as t,Cr as u,Er as v,Lr as w,Rr as x,Ce as y,Tr as z};
