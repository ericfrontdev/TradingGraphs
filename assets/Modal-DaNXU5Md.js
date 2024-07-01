import{r as d,x as ie,R as O,j as N,W as G,as as te,at as ge,_ as x,h as ae,g as le,s as V,q as ce,t as de,y as q,z as ue,au as xe,Y as ne,av as ve}from"./index-CFdnnZ_z.js";function oe(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function Ee(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Re=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function ke(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function ye(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Pe(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||ye(e))}function Te(e){const t=[],o=[];return Array.from(e.querySelectorAll(Re)).forEach((n,s)=>{const r=ke(n);r===-1||!Pe(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Se(){return!0}function Ce(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Te,isEnabled:i=Se,open:c}=e,u=d.useRef(!1),g=d.useRef(null),h=d.useRef(null),b=d.useRef(null),k=d.useRef(null),v=d.useRef(!1),l=d.useRef(null),M=ie(t.ref,l),C=d.useRef(null);d.useEffect(()=>{!c||!l.current||(v.current=!o)},[o,c]),d.useEffect(()=>{if(!c||!l.current)return;const a=O(l.current);return l.current.contains(a.activeElement)||(l.current.hasAttribute("tabIndex")||l.current.setAttribute("tabIndex","-1"),v.current&&l.current.focus()),()=>{s||(b.current&&b.current.focus&&(u.current=!0,b.current.focus()),b.current=null)}},[c]),d.useEffect(()=>{if(!c||!l.current)return;const a=O(l.current),E=R=>{C.current=R,!(n||!i()||R.key!=="Tab")&&a.activeElement===l.current&&R.shiftKey&&(u.current=!0,h.current&&h.current.focus())},m=()=>{const R=l.current;if(R===null)return;if(!a.hasFocus()||!i()||u.current){u.current=!1;return}if(R.contains(a.activeElement)||n&&a.activeElement!==g.current&&a.activeElement!==h.current)return;if(a.activeElement!==k.current)k.current=null;else if(k.current!==null)return;if(!v.current)return;let P=[];if((a.activeElement===g.current||a.activeElement===h.current)&&(P=r(l.current)),P.length>0){var A,T;const D=!!((A=C.current)!=null&&A.shiftKey&&((T=C.current)==null?void 0:T.key)==="Tab"),B=P[0],w=P[P.length-1];typeof B!="string"&&typeof w!="string"&&(D?w.focus():B.focus())}else R.focus()};a.addEventListener("focusin",m),a.addEventListener("keydown",E,!0);const F=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&m()},50);return()=>{clearInterval(F),a.removeEventListener("focusin",m),a.removeEventListener("keydown",E,!0)}},[o,n,s,i,c,r]);const I=a=>{b.current===null&&(b.current=a.relatedTarget),v.current=!0,k.current=a.target;const E=t.props.onFocus;E&&E(a)},y=a=>{b.current===null&&(b.current=a.relatedTarget),v.current=!0};return N.jsxs(d.Fragment,{children:[N.jsx("div",{tabIndex:c?0:-1,onFocus:y,ref:g,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:M,onFocus:I}),N.jsx("div",{tabIndex:c?0:-1,onFocus:y,ref:h,"data-testid":"sentinelEnd"})]})}function Ie(e){const t=O(e);return t.body===e?G(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function _(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function re(e){return parseInt(G(e).getComputedStyle(e).paddingRight,10)||0}function Ne(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function se(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const c=r.indexOf(i)===-1,u=!Ne(i);c&&u&&_(i,s)})}function Y(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Me(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Ie(n)){const i=Ee(O(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${re(n)+i}px`;const c=O(n).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${re(u)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=O(n).body;else{const i=n.parentElement,c=G(n);r=(i==null?void 0:i.nodeName)==="HTML"&&c.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:c})=>{r?i.style.setProperty(c,r):i.style.removeProperty(c)})}}function we(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Fe{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&_(t.modalRef,!1);const s=we(o);se(o,t.mount,t.modalRef,s,!0);const r=Y(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=Y(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=Me(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=Y(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&_(t.modalRef,o),se(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&_(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ae(e){return typeof e=="function"?e():e}function Be(e){return e?e.props.hasOwnProperty("in"):!1}const Oe=new Fe;function De(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=Oe,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:c,children:u,onClose:g,open:h,rootRef:b}=e,k=d.useRef({}),v=d.useRef(null),l=d.useRef(null),M=ie(l,b),[C,I]=d.useState(!h),y=Be(u);let a=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(a=!1);const E=()=>O(v.current),m=()=>(k.current.modalRef=l.current,k.current.mount=v.current,k.current),F=()=>{s.mount(m(),{disableScrollLock:n}),l.current&&(l.current.scrollTop=0)},R=te(()=>{const p=Ae(t)||E().body;s.add(m(),p),l.current&&F()}),P=d.useCallback(()=>s.isTopModal(m()),[s]),A=te(p=>{v.current=p,p&&(h&&P()?F():l.current&&_(l.current,a))}),T=d.useCallback(()=>{s.remove(m(),a)},[a,s]);d.useEffect(()=>()=>{T()},[T]),d.useEffect(()=>{h?R():(!y||!r)&&T()},[h,T,y,r,R]);const D=p=>f=>{var S;(S=p.onKeyDown)==null||S.call(p,f),!(f.key!=="Escape"||f.which===229||!P())&&(o||(f.stopPropagation(),g&&g(f,"escapeKeyDown")))},B=p=>f=>{var S;(S=p.onClick)==null||S.call(p,f),f.target===f.currentTarget&&g&&g(f,"backdropClick")};return{getRootProps:(p={})=>{const f=ge(e);delete f.onTransitionEnter,delete f.onTransitionExited;const S=x({},f,p);return x({role:"presentation"},S,{onKeyDown:D(S),ref:M})},getBackdropProps:(p={})=>{const f=p;return x({"aria-hidden":!0},f,{onClick:B(f),open:h})},getTransitionProps:()=>{const p=()=>{I(!1),i&&i()},f=()=>{I(!0),c&&c(),r&&T()};return{onEnter:oe(p,u==null?void 0:u.props.onEnter),onExited:oe(f,u==null?void 0:u.props.onExited)}},rootRef:M,portalRef:A,isTopModal:P,exited:C,hasTransition:y}}function Le(e){return ae("MuiBackdrop",e)}le("MuiBackdrop",["root","invisible"]);const He=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],$e=e=>{const{classes:t,invisible:o}=e;return ue({root:["root",o&&"invisible"]},Le,t)},je=V("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>x({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),_e=d.forwardRef(function(t,o){var n,s,r;const i=ce({props:t,name:"MuiBackdrop"}),{children:c,className:u,component:g="div",components:h={},componentsProps:b={},invisible:k=!1,open:v,slotProps:l={},slots:M={},TransitionComponent:C=xe,transitionDuration:I}=i,y=de(i,He),a=x({},i,{component:g,invisible:k}),E=$e(a),m=(n=l.root)!=null?n:b.root;return N.jsx(C,x({in:v,timeout:I},y,{children:N.jsx(je,x({"aria-hidden":!0},m,{as:(s=(r=M.root)!=null?r:h.Root)!=null?s:g,className:q(E.root,u,m==null?void 0:m.className),ownerState:x({},a,m==null?void 0:m.ownerState),classes:E,ref:o,children:c}))}))}),Ue=_e;function Ke(e){return ae("MuiModal",e)}le("MuiModal",["root","hidden","backdrop"]);const We=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],ze=e=>{const{open:t,exited:o,classes:n}=e;return ue({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Ke,n)},Ye=V("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>x({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),qe=V(Ue,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Ge=d.forwardRef(function(t,o){var n,s,r,i,c,u;const g=ce({name:"MuiModal",props:t}),{BackdropComponent:h=qe,BackdropProps:b,className:k,closeAfterTransition:v=!1,children:l,container:M,component:C,components:I={},componentsProps:y={},disableAutoFocus:a=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:m=!1,disablePortal:F=!1,disableRestoreFocus:R=!1,disableScrollLock:P=!1,hideBackdrop:A=!1,keepMounted:T=!1,onBackdropClick:D,open:B,slotProps:w,slots:$}=g,X=de(g,We),p=x({},g,{closeAfterTransition:v,disableAutoFocus:a,disableEnforceFocus:E,disableEscapeKeyDown:m,disablePortal:F,disableRestoreFocus:R,disableScrollLock:P,hideBackdrop:A,keepMounted:T}),{getRootProps:f,getBackdropProps:S,getTransitionProps:fe,portalRef:pe,isTopModal:he,exited:J,hasTransition:Q}=De(x({},p,{rootRef:o})),j=x({},p,{exited:J}),L=ze(j),U={};if(l.props.tabIndex===void 0&&(U.tabIndex="-1"),Q){const{onEnter:H,onExited:K}=fe();U.onEnter=H,U.onExited=K}const Z=(n=(s=$==null?void 0:$.root)!=null?s:I.Root)!=null?n:Ye,ee=(r=(i=$==null?void 0:$.backdrop)!=null?i:I.Backdrop)!=null?r:h,W=(c=w==null?void 0:w.root)!=null?c:y.root,z=(u=w==null?void 0:w.backdrop)!=null?u:y.backdrop,be=ne({elementType:Z,externalSlotProps:W,externalForwardedProps:X,getSlotProps:f,additionalProps:{ref:o,as:C},ownerState:j,className:q(k,W==null?void 0:W.className,L==null?void 0:L.root,!j.open&&j.exited&&(L==null?void 0:L.hidden))}),me=ne({elementType:ee,externalSlotProps:z,additionalProps:b,getSlotProps:H=>S(x({},H,{onClick:K=>{D&&D(K),H!=null&&H.onClick&&H.onClick(K)}})),className:q(z==null?void 0:z.className,b==null?void 0:b.className,L==null?void 0:L.backdrop),ownerState:j});return!T&&!B&&(!Q||J)?null:N.jsx(ve,{ref:pe,container:M,disablePortal:F,children:N.jsxs(Z,x({},be,{children:[!A&&h?N.jsx(ee,x({},me)):null,N.jsx(Ce,{disableEnforceFocus:E,disableAutoFocus:a,disableRestoreFocus:R,isEnabled:he,open:B,children:d.cloneElement(l,U)})]}))})}),Xe=Ge;export{Xe as M,Ee as g};