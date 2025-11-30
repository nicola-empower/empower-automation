import { c as createComponent, e as createAstro, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from './astro/server_g6Z7ARXq.mjs';
import 'piccolore';
import { bundledLanguages } from 'shiki/langs';
import { createShikiHighlighter } from '@astrojs/markdown-remark';

const cachedHighlighters = /* @__PURE__ */ new Map();
function getCachedHighlighter(opts) {
  const key = JSON.stringify(opts, Object.keys(opts).sort());
  if (cachedHighlighters.has(key)) {
    return cachedHighlighters.get(key);
  }
  const highlighter = createShikiHighlighter(opts);
  cachedHighlighters.set(key, highlighter);
  return highlighter;
}

const $$Astro$1 = createAstro();
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Code;
  const {
    code,
    lang = "plaintext",
    meta,
    theme = "github-dark",
    themes = {},
    defaultColor = "light",
    wrap = false,
    inline = false,
    transformers = [],
    ...rest
  } = Astro2.props;
  if (typeof lang === "object") {
    if (lang.id) {
      lang.name = lang.id;
    }
    if (lang.grammar) {
      Object.assign(lang, lang.grammar);
    }
  }
  const highlighter = await getCachedHighlighter({
    langs: [
      typeof lang === "string" ? Object.keys(bundledLanguages).includes(lang) ? lang : "plaintext" : lang
    ],
    theme,
    themes
  });
  const html = await highlighter.codeToHtml(code, typeof lang === "string" ? lang : lang.name, {
    defaultColor,
    wrap,
    inline,
    transformers,
    meta,
    attributes: rest
  });
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/node_modules/astro/components/Code.astro", void 0);

const $$Astro = createAstro();
const $$Debug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Debug;
  const key = Object.keys(Astro2.props)[0];
  const value = Astro2.props[key];
  return renderTemplate`${maybeRenderHead()}<div class="astro-debug"> <div class="astro-debug-header"> <h2 class="astro-debug-title"> <span class="astro-debug-label">Debug</span> <span class="astro-debug-name">"${key}"</span> </h2> </div> ${renderComponent($$result, "Code", $$Code, { "code": JSON.stringify(value, null, 2) })} </div> <style>
	.astro-debug {
		font-size: 14px;
		padding: 1rem 1.5rem;
		background: white;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}

	.astro-debug-header,
	pre.astro-code {
		margin: -1rem -1.5rem 1rem;
		padding: 0.25rem 0.75rem;
	}

	.astro-debug-header {
		background: #ff1639;
		border-radius: 4px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.astro-debug-title {
		font-size: 1em;
		color: white;
		margin: 0.5em 0;
	}

	.astro-debug-label {
		font-weight: bold;
		text-transform: uppercase;
		margin-right: 0.75em;
	}

	pre.astro-code {
		border: 1px solid #eee;
		padding: 1rem 0.75rem;
		border-radius: 4px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		font-size: 14px;
	}
</style>`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/node_modules/astro/components/Debug.astro", void 0);

const $$CodePricing = createComponent(($$result, $$props, $$slots) => {
  const starterPackage = `const starterPackage = {
  cost: 250,
  time: "1 week",
  includes: [
    "1-hour consultation",
    "Simple custom script",
    "Deployment & testing",
    "1 week support"
  ],
  perfectFor: "Single high-impact tasks"
};`;
  const businessPackage = `const businessWorkflow = {
  cost: 600,
  time: "2-3 weeks",
  includes: [
    "Workflow audit",
    "Multi-step automation",
    "2 API integrations",
    "Error handling",
    "1 month support"
  ],
  status: "MOST_POPULAR"
};`;
  const premiumPackage = `const premiumIntegration = {
  cost: "1500+",
  time: "Custom",
  includes: [
    "Comprehensive workshop",
    "Complex integrations",
    "Custom UI",
    "Quarterly reviews"
  ],
  type: "Mission Critical"
};`;
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="py-20 bg-brand-dark relative overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4"> <span class="text-brand-purple">function</span> <span class="text-brand-gold">getPricing</span>()
</h2> <p class="text-gray-400 max-w-2xl mx-auto font-mono text-sm md:text-base">
// Invest in an asset you own. No monthly subscription fees.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Starter --> <div class="bg-[#1e1e1e] rounded-lg border border-gray-700 overflow-hidden shadow-xl hover:border-brand-orange transition-colors duration-300 group"> <div class="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700"> <span class="text-xs text-gray-400 font-mono">starter.js</span> <div class="flex gap-1.5"> <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div> <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div> <div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div> </div> </div> <div class="p-4 overflow-x-auto"> ${renderComponent($$result, "Code", $$Code, { "code": starterPackage, "lang": "javascript", "theme": "dracula" })} </div> <div class="p-6 border-t border-gray-700 bg-[#252526]"> <a href="/contact" class="block w-full py-3 px-4 bg-transparent border border-brand-orange text-brand-orange text-center font-bold rounded hover:bg-brand-orange hover:text-white transition-all">
Initialize()
</a> </div> </div> <!-- Business --> <div class="bg-[#1e1e1e] rounded-lg border-2 border-brand-magenta overflow-hidden shadow-2xl transform md:-translate-y-4 relative"> <div class="absolute top-0 right-0 bg-brand-magenta text-white text-xs font-bold px-3 py-1 rounded-bl">
RECOMMENDED
</div> <div class="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700"> <span class="text-xs text-gray-400 font-mono">business.js</span> <div class="flex gap-1.5"> <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div> <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div> <div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div> </div> </div> <div class="p-4 overflow-x-auto"> ${renderComponent($$result, "Code", $$Code, { "code": businessPackage, "lang": "javascript", "theme": "dracula" })} </div> <div class="p-6 border-t border-gray-700 bg-[#252526]"> <a href="/contact" class="block w-full py-3 px-4 bg-brand-magenta text-white text-center font-bold rounded hover:bg-pink-600 transition-all shadow-lg hover:shadow-brand-magenta/50">
Initialize()
</a> </div> </div> <!-- Premium --> <div class="bg-[#1e1e1e] rounded-lg border border-gray-700 overflow-hidden shadow-xl hover:border-brand-purple transition-colors duration-300"> <div class="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700"> <span class="text-xs text-gray-400 font-mono">enterprise.js</span> <div class="flex gap-1.5"> <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div> <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div> <div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div> </div> </div> <div class="p-4 overflow-x-auto"> ${renderComponent($$result, "Code", $$Code, { "code": premiumPackage, "lang": "javascript", "theme": "dracula" })} </div> <div class="p-6 border-t border-gray-700 bg-[#252526]"> <a href="/contact" class="block w-full py-3 px-4 bg-transparent border border-brand-purple text-brand-purple text-center font-bold rounded hover:bg-brand-purple hover:text-white transition-all">
Initialize()
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/CodePricing.astro", void 0);

export { $$CodePricing as $, $$Code as a };
