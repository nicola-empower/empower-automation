import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_g6Z7ARXq.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_CjiSTGJW.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-lg mx-auto bg-brand-dark border border-gray-700 rounded-lg p-8 shadow-2xl"> <div class="mb-6 border-b border-gray-700 pb-4"> <div class="flex gap-2 mb-2"> <div class="w-3 h-3 rounded-full bg-red-500"></div> <div class="w-3 h-3 rounded-full bg-yellow-500"></div> <div class="w-3 h-3 rounded-full bg-green-500"></div> </div> <p class="text-xs text-gray-500 font-mono">contact_form.exe</p> </div> <form action="https://formspree.io/f/mblkwkpp" method="POST" class="space-y-6"> <div> <label for="name" class="block mb-2 text-sm font-medium text-brand-gold font-mono">
&gt; input_name:
</label> <input type="text" name="name" id="name" required class="bg-[#0d1117] border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-brand-orange focus:border-brand-orange block w-full p-2.5 font-mono" placeholder="John Doe"> </div> <div> <label for="email" class="block mb-2 text-sm font-medium text-brand-gold font-mono">
&gt; input_email:
</label> <input type="email" name="email" id="email" required class="bg-[#0d1117] border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-brand-orange focus:border-brand-orange block w-full p-2.5 font-mono" placeholder="john@example.com"> </div> <div> <label for="message" class="block mb-2 text-sm font-medium text-brand-gold font-mono">
&gt; input_message:
</label> <textarea name="message" id="message" rows="4" required class="bg-[#0d1117] border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-brand-orange focus:border-brand-orange block w-full p-2.5 font-mono" placeholder="Describe your automation needs..."></textarea> </div> <button type="submit" class="w-full text-white bg-brand-orange hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors font-mono font-bold">
[ EXECUTE_SEND ]
</button> </form> </div>`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us | Empower Automation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden"> <!-- Background Grid --> <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px); background-size: 40px 40px;"></div> <div class="relative z-10 w-full max-w-4xl mx-auto text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-6"> <span class="text-brand-purple">function</span> <span class="text-white">initiateContact</span>()
</h1> <p class="text-xl text-gray-400 max-w-2xl mx-auto">
Ready to automate? Send us a signal. We'll analyze your request and respond with a solution.
</p> </div> <div class="relative z-10 w-full"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/contact.astro", void 0);

const $$file = "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
