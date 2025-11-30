/**
 * @license lucide v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=([e,n,t])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(n).forEach(r=>{o.setAttribute(r,String(n[r]))}),t?.length&&t.forEach(r=>{const a=f(r);o.appendChild(a)}),o},p=(e,n={})=>{const o={...d,...n};return f(["svg",o,e])};/**
 * @license lucide v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>Array.from(e.attributes).reduce((n,t)=>(n[t.name]=t.value,n),{}),h=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",g=e=>e.flatMap(h).map(t=>t.trim()).filter(Boolean).filter((t,o,r)=>r.indexOf(t)===o).join(" "),y=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(n,t,o)=>t.toUpperCase()+o.toLowerCase()),u=(e,{nameAttr:n,icons:t,attrs:o})=>{const r=e.getAttribute(n);if(r==null)return;const a=y(r),c=t[a];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=w(e),l={...d,"data-lucide":r,...o,...s},i=g(["lucide",`lucide-${r}`,s,o]);i&&Object.assign(l,{class:i});const m=p(c,l);return e.parentNode?.replaceChild(m,e)};/**
 * @license lucide v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];/**
 * @license lucide v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=({icons:e={},nameAttr:n="data-lucide",attrs:t={},root:o=document,inTemplates:r}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof o>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(o.querySelectorAll(`[${n}]`)).forEach(c=>u(c,{nameAttr:n,icons:e,attrs:t})),r&&Array.from(o.querySelectorAll("template")).forEach(s=>v({icons:e,nameAttr:n,attrs:t,root:s.content,inTemplates:r})),n==="data-lucide"){const c=o.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(s=>u(s,{nameAttr:"icon-name",icons:e,attrs:t})))}};export{b as C,A as Q,v as c};
