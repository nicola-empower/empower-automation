import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_g6Z7ARXq.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_CjiSTGJW.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms & Conditions | Empower Automation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-32 pb-20 px-4"> <div class="max-w-4xl mx-auto"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">Terms & Conditions</h1> <p class="text-gray-400 mb-12">Last Updated: November 2025</p> <div class="prose prose-invert max-w-none space-y-12 text-gray-300"> <section> <h2 class="text-2xl font-bold text-white mb-4">1. Overview</h2> <p>
These terms and conditions govern the use of services provided by Empower Automation ("we", "us", "our"). By engaging our services, you agree to these terms.
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">2. Services & Scope</h2> <p>
We provide custom automation solutions, Google Apps Script development, and workflow optimisation. The specific scope of work for each project will be detailed in a separate Proposal or Statement of Work.
</p> </section> <section class="bg-[#161b22] p-8 rounded-xl border border-brand-orange/30"> <h2 class="text-2xl font-bold text-white mb-4">3. Process & Payment Terms</h2> <p class="mb-4">
We operate on a transparent, milestone-based process to ensure clarity and security for both parties.
</p> <ol class="list-decimal list-inside space-y-4 ml-4"> <li> <strong class="text-white">Discovery Call:</strong> An initial consultation to understand your requirements and determine feasibility.
</li> <li> <strong class="text-white">Proposal & Fixed Price:</strong> We will provide a detailed proposal outlining the scope of work, deliverables, and a fixed project price.
</li> <li> <strong class="text-white">50% Deposit:</strong> Work commences only after a 50% non-refundable deposit has been received. This secures your slot in our development schedule.
</li> <li> <strong class="text-white">Build & Review:</strong> We develop the solution and provide a demonstration or test version for your review.
</li> <li> <strong class="text-white">Balance Payment:</strong> The remaining 50% balance is due upon completion and sign-off, prior to the final transfer of ownership or deployment to your live environment.
</li> </ol> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2> <p>
Upon full payment, you (the Client) will own the specific scripts and code created for your project. We reserve the right to reuse generic code snippets, libraries, or methodologies that do not contain your confidential data or proprietary business logic.
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">5. Liability</h2> <p>
While we rigorously test all automations, we cannot be held liable for any data loss, business interruption, or damages arising from the use of our scripts, particularly those caused by third-party API changes, Google platform updates, or user error.
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">6. Retainers & Support</h2> <p>
Ongoing support or "Peace of Mind" retainers are billed monthly in advance. Unused hours do not roll over. Retainers can be cancelled with 30 days' written notice.
</p> </section> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/terms.astro", void 0);

const $$file = "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Terms,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
