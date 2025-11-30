import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_LrU0RvoR.mjs';
import { manifest } from './manifest_BPXT1od2.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/automation.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/products/automated-invoice.astro.mjs');
const _page5 = () => import('./pages/products/smarter-work-day.astro.mjs');
const _page6 = () => import('./pages/services.astro.mjs');
const _page7 = () => import('./pages/system-logs.astro.mjs');
const _page8 = () => import('./pages/system-logs/_---slug_.astro.mjs');
const _page9 = () => import('./pages/terms.astro.mjs');
const _page10 = () => import('./pages/why-custom.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/automation.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/products/automated-invoice.astro", _page4],
    ["src/pages/products/smarter-work-day.astro", _page5],
    ["src/pages/services.astro", _page6],
    ["src/pages/system-logs/index.astro", _page7],
    ["src/pages/system-logs/[...slug].astro", _page8],
    ["src/pages/terms.astro", _page9],
    ["src/pages/why-custom.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b067d96c-434d-4436-8fdc-a0491d2a8c98",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
