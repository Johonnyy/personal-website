function k(){}const M=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function A(t,n,e,o,r){t.__svelte_meta={loc:{file:n,line:e,column:o,char:r}}}function E(t){return t()}function B(){return Object.create(null)}function j(t){t.forEach(E)}function D(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function P(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function S(t){return Object.keys(t).length===0}function U(t,n){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${n}' is not a store with a 'subscribe' method`)}function v(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(v(n,e))}function H(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function I(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const i=[],d=Math.max(n.dirty.length,r.length);for(let u=0;u<d;u+=1)i[u]=n.dirty[u]|r[u];return i}return n.dirty|r}return n.dirty}function J(t,n,e,o,r,i){if(r){const d=m(n,e,o,i);t.p(d,r)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let f;function h(t){f=t}function _(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){_().$$.on_mount.push(t)}function N(t){_().$$.after_update.push(t)}function Q(t){_().$$.on_destroy.push(t)}function R(t,n){return _().$$.context.set(t,n),n}const a=[],g=[];let s=[];const y=[],x=Promise.resolve();let b=!1;function q(){b||(b=!0,x.then(z))}function T(){return q(),x}function O(t){s.push(t)}const p=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,h(n),C(n.$$)}}catch(n){throw a.length=0,c=0,n}for(h(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];p.has(e)||(p.add(e),e())}s.length=0}while(a.length);for(;y.length;)y.pop()();b=!1,p.clear(),h(t)}function C(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function V(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{V as A,a as B,q as C,N as a,R as b,g as c,A as d,H as e,I as f,K as g,G as h,M as i,Q as j,O as k,P as l,D as m,k as n,L as o,B as p,z as q,j as r,F as s,T as t,J as u,U as v,f as w,h as x,S as y,E as z};
