import { c as createComponent, e as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_g6Z7ARXq.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_BL6uXL7t.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Footer_CjiSTGJW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("system-logs");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.data.title} | System Logs` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-32 pb-20 px-4"> <article class="max-w-3xl mx-auto"> <!-- Header --> <div class="mb-12 border-b border-gray-800 pb-8"> <div class="flex gap-2 mb-6"> <a href="/system-logs" class="text-gray-500 hover:text-brand-orange transition-colors font-mono text-sm">
&lt; cd ..
</a> </div> <h1 class="text-3xl md:text-5xl font-bold text-white mb-6 font-mono"> ${post.data.title} </h1> <div class="flex items-center gap-4 text-sm text-gray-400 font-mono"> <span class="bg-gray-900 px-3 py-1 rounded border border-gray-800"> ${post.data.pubDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </span> ${post.data.tags && renderTemplate`<div class="flex gap-2"> ${post.data.tags.map((tag) => renderTemplate`<span class="text-brand-gold">#${tag}</span>`)} </div>`} </div> </div> <!-- Content --> <div class="prose prose-invert prose-lg max-w-none prose-headings:font-mono prose-headings:text-white prose-a:text-brand-orange prose-code:text-brand-gold prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-gray-800"> ${renderComponent($$result2, "Content", Content, {})} </div> <!-- Footer Navigation --> <div class="mt-16 pt-8 border-t border-gray-800"> <a href="/system-logs" class="inline-flex items-center text-brand-orange hover:text-white transition-colors font-bold font-mono"> <span class="mr-2">&lt;</span> RETURN_TO_ROOT
</a> </div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/system-logs/[...slug].astro", void 0);

const $$file = "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/system-logs/[...slug].astro";
const $$url = "/system-logs/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
            __proto__: null,
            default: $$,
            file: $$file,
            getStaticPaths,
            url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
