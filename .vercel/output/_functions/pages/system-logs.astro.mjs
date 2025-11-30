import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_g6Z7ARXq.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_CjiSTGJW.mjs';
import { g as getCollection } from '../chunks/_astro_content_BL6uXL7t.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("system-logs")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "System Logs | Empower Automation" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-32 pb-20 px-4 min-h-screen"> <div class="max-w-4xl mx-auto"> <div class="mb-12 border-b border-gray-800 pb-8"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4"> <span class="text-brand-purple">var</span> <span class="text-white">systemLogs</span> = <span class="text-brand-gold">[]</span>;
</h1> <p class="text-gray-400 font-mono">
// Insights, updates, and technical breakdowns of automation systems.
</p> </div> <div class="space-y-6"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/system-logs/${post.slug}/`, "href")} class="block group"> <div class="bg-brand-dark border border-gray-800 rounded-lg p-6 hover:border-brand-orange transition-all duration-300 group-hover:transform group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(242,111,33,0.1)]"> <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4"> <h2 class="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors font-mono"> ${post.data.title} </h2> <span class="text-sm text-gray-500 font-mono bg-gray-900 px-3 py-1 rounded border border-gray-800"> ${post.data.pubDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </span> </div> <p class="text-gray-400 mb-4 line-clamp-2"> ${post.data.description} </p> <div class="flex items-center text-brand-gold text-sm font-mono font-bold"> <span class="mr-2">&gt;</span> READ_LOG()
</div> </div> </a>`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/system-logs/index.astro", void 0);

const $$file = "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/system-logs/index.astro";
const $$url = "/system-logs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
