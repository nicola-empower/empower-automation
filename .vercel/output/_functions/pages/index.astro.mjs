import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as renderScript, d as addAttribute } from '../chunks/astro/server_g6Z7ARXq.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_CjiSTGJW.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
/* empty css                                 */
import { a as $$Code, $ as $$CodePricing } from '../chunks/CodePricing_RWOJV5Ie.mjs';
export { renderers } from '../renderers.mjs';

function TypewriterText({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.05
      }
    }
  };
  const letter = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" }
  };
  return /* @__PURE__ */ jsxs(
    motion.h2,
    {
      ref,
      className: `font-mono ${className}`,
      variants: sentence,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      children: [
        text.split("").map((char, index) => /* @__PURE__ */ jsx(motion.span, { variants: letter, children: char }, char + "-" + index)),
        /* @__PURE__ */ jsx(
          motion.span,
          {
            animate: { opacity: [0, 1, 0] },
            transition: { repeat: Infinity, duration: 0.8 },
            className: "text-brand-magenta inline-block ml-1",
            children: "_"
          }
        )
      ]
    }
  );
}

const $$TerminalHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark" data-astro-cid-t2rycimi> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0 opacity-20" data-astro-cid-t2rycimi> <img src="/hero-background.png" alt="Cyber Industrial Background" class="w-full h-full object-cover" data-astro-cid-t2rycimi> <div class="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" data-astro-cid-t2rycimi></div> </div> <!-- Terminal Window --> <div class="relative z-10 w-full max-w-4xl mx-4" data-astro-cid-t2rycimi> <div class="bg-[#0d1117]/90 backdrop-blur-md border border-gray-700 rounded-lg shadow-2xl overflow-hidden" data-astro-cid-t2rycimi> <!-- Terminal Header --> <div class="bg-gray-800/50 px-4 py-2 flex items-center gap-2 border-b border-gray-700" data-astro-cid-t2rycimi> <div class="w-3 h-3 rounded-full bg-red-500" data-astro-cid-t2rycimi></div> <div class="w-3 h-3 rounded-full bg-yellow-500" data-astro-cid-t2rycimi></div> <div class="w-3 h-3 rounded-full bg-green-500" data-astro-cid-t2rycimi></div> <span class="ml-2 text-xs text-gray-400 font-mono" data-astro-cid-t2rycimi>empower-automation -- bash -- 80x24</span> </div> <!-- Terminal Content --> <div class="p-6 md:p-10 font-mono text-left" data-astro-cid-t2rycimi> <div class="mb-4 text-gray-400" data-astro-cid-t2rycimi> <span class="text-brand-gold" data-astro-cid-t2rycimi>user@empower</span>:<span class="text-blue-400" data-astro-cid-t2rycimi>~</span>$ ./system_scan.sh
</div> <div class="space-y-4" data-astro-cid-t2rycimi> <div class="text-green-400" data-astro-cid-t2rycimi>
> DETECTING INEFFICIENCIES...
</div> <div class="text-gray-300 pl-4" data-astro-cid-t2rycimi>
[!] Found: 15 hours of manual data entry/week<br data-astro-cid-t2rycimi>
[!] Found: High risk of human error<br data-astro-cid-t2rycimi>
[!] Found: Disconnected systems
</div> <div class="mt-6 text-gray-400" data-astro-cid-t2rycimi> <span class="text-brand-gold" data-astro-cid-t2rycimi>user@empower</span>:<span class="text-blue-400" data-astro-cid-t2rycimi>~</span>$ ./execute_solution.js
</div> ${renderComponent($$result, "TypewriterText", TypewriterText, { "client:visible": true, "text": "Stop Doing Repetitive Tasks Manually.", "className": "text-2xl md:text-4xl font-bold text-white mt-2 block", "delay": 1.5, "client:component-hydration": "visible", "client:component-path": "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/TypewriterText", "client:component-export": "default", "data-astro-cid-t2rycimi": true })} <div class="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-in" style="animation-delay: 4s; animation-fill-mode: forwards;" data-astro-cid-t2rycimi> <a href="#services" class="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition-colors" data-astro-cid-t2rycimi>
See What I Build
</a> <a href="/contact" class="border border-brand-orange text-brand-orange hover:bg-brand-orange/10 font-bold py-3 px-6 rounded transition-colors" data-astro-cid-t2rycimi>
Book Consultation
</a> </div> </div> </div> </div> </div> </section> `;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/TerminalHero.astro", void 0);

function DataPipeline() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-64 md:h-96 relative bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden flex items-center justify-center", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-10",
        style: { backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "20px 20px" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-8 md:gap-16 scale-75 md:scale-100", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: ["Gmail", "Sheets", "Forms"].map((app, i) => /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 text-xs text-gray-400 font-mono",
          animate: { y: [0, -5, 0] },
          transition: { duration: 2, delay: i * 0.5, repeat: Infinity },
          children: app
        },
        app
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("svg", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] -z-10 pointer-events-none", children: /* @__PURE__ */ jsx(
          motion.path,
          {
            d: "M 0 100 L 150 100 L 300 100",
            stroke: "#F26F21",
            strokeWidth: "2",
            fill: "none",
            strokeDasharray: "10 5",
            animate: { strokeDashoffset: [0, -100] },
            transition: { duration: 1, repeat: Infinity, ease: "linear" }
          }
        ) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "w-32 h-32 bg-brand-dark border-2 border-brand-orange rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(242,111,33,0.3)]",
            animate: { boxShadow: ["0 0 20px rgba(242,111,33,0.2)", "0 0 40px rgba(242,111,33,0.6)", "0 0 20px rgba(242,111,33,0.2)"] },
            transition: { duration: 2, repeat: Infinity },
            children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-brand-orange font-mono text-xl font-bold", children: "</>" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-gray-500 font-mono mt-1", children: "SCRIPT.GS" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "w-16 h-16 bg-brand-dark border border-brand-magenta rounded-lg flex items-center justify-center text-brand-magenta shadow-[0_0_15px_rgba(198,36,110,0.3)]",
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1.5 },
            children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M12 2v20" }),
              /* @__PURE__ */ jsx("path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "w-16 h-16 bg-brand-dark border border-green-500 rounded-lg flex items-center justify-center text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]",
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 1.5 },
            children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
              /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
            ] })
          }
        )
      ] })
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Automated Document Generation",
      icon: "file-text",
      desc: "Instantly create invoices, quotes, or reports from Google Sheet data.",
      code: `function generateInvoice(data) {
  const doc = DocumentApp.create('Invoice');
  doc.getBody().appendParagraph(data.client);
  return doc.getUrl();
}`
    },
    {
      title: "Smart Email & Calendar Actions",
      icon: "mail",
      desc: "Automatically create calendar events and send personalised follow-ups.",
      code: `function scheduleMeeting(email) {
  CalendarApp.createEvent('Consultation',
    new Date('2023-10-10'),
    new Date('2023-10-10')
  );
  GmailApp.sendEmail(email, 'Confirmed');
}`
    },
    {
      title: "Data & Workflow Management",
      icon: "database",
      desc: "Sync data between spreadsheets and manage your entire client onboarding.",
      code: `function syncData(source, target) {
  const data = source.getDataRange().getValues();
  target.getRange(1, 1, data.length, data[0].length)
    .setValues(data);
}`
    }
  ];
  const faqs = [
    { q: "With AI everywhere, why invest in custom Apps Script?", a: "AI is fantastic for creative tasks, but it's not designed for precise, reliable, rule-based work. A custom Apps Script is like building a bespoke engine\u2014it does exactly what you need, every single time, without fail." },
    { q: "Can't I just ask ChatGPT to write the code?", a: "AI can generate code snippets, but it doesn't understand your unique business context, security needs, or how to handle errors. I provide a robust, tested business solution, not just raw code." },
    { q: "Are custom scripts really better than Zapier?", a: "Zapier is great for simple tasks. But for complex workflows with unique logic, a custom script is more powerful, flexible, and often cheaper since there are no monthly subscription fees." },
    { q: "How secure is Google Apps Script?", a: "Extremely. All code runs within your own Google account, inheriting Google's world-class security. Your data never leaves your workspace." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Empower Automation | Google Workspace Specialist" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "TerminalHero", $$TerminalHero, {})} <!-- What is Apps Script? --> <section class="py-20 px-4 bg-brand-dark relative"> <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl md:text-4xl font-bold mb-6"> <span class="text-brand-orange">const</span> <span class="text-white">whatIsAppsScript</span> = <span class="text-brand-gold">"The Secret Engine"</span>;
</h2> <p class="text-gray-400 text-lg leading-relaxed mb-6">
Think of it as the secret engine inside your Google account. It’s a coding language that lets me connect your Google apps (Sheets, Docs, Gmail, Calendar) and make them do custom tasks for you automatically.
</p> <p class="text-gray-300 font-mono border-l-4 border-brand-magenta pl-4 italic">
"Instead of you manually copying data from a form to a spreadsheet, then to an invoice, then to an email – I write a script that does it all for you with one click."
</p> </div> <div> ${renderComponent($$result2, "DataPipeline", DataPipeline, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/DataPipeline", "client:component-export": "default" })} </div> </div> </section> <!-- About Me --> <section class="py-20 px-4 bg-[#0f1219] border-y border-gray-800"> <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"> <div class="order-2 md:order-1"> <div class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-orange rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div> <div class="relative aspect-square rounded-lg overflow-hidden border border-gray-800"> <img src="/portfolio.jpg" alt="Nicola - Founder of Empower Automation" class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"> </div> </div> </div> <div class="order-1 md:order-2"> <h2 class="text-3xl md:text-4xl font-bold mb-6"> <span class="text-brand-purple">const</span> <span class="text-white">founder</span> = <span class="text-brand-gold">"Nicola"</span>;
</h2> <p class="text-gray-400 text-lg leading-relaxed mb-6">
Hi, I'm Nicola. I'm not just a coder; I'm a business owner and a mum of three. I understand the chaos of running a business—the late nights, the endless admin, and the feeling that you're constantly juggling.
</p> <p class="text-gray-400 text-lg leading-relaxed mb-6">
I started Empower to help other business owners escape that grind. My mission isn't just to write code; it's to give you your time back. Whether that's dinner with your family, a weekend off, or just the headspace to focus on growing your business.
</p> <div class="flex gap-4"> <div class="bg-brand-dark border border-gray-800 px-4 py-2 rounded text-sm font-mono text-brand-orange"> <span class="text-gray-500">//</span> Efficiency
</div> <div class="bg-brand-dark border border-gray-800 px-4 py-2 rounded text-sm font-mono text-brand-orange"> <span class="text-gray-500">//</span> Freedom
</div> <div class="bg-brand-dark border border-gray-800 px-4 py-2 rounded text-sm font-mono text-brand-orange"> <span class="text-gray-500">//</span> Growth
</div> </div> </div> </div> </section> <!-- Services Grid --> <section id="services" class="py-20 px-4 bg-[#0f1219]"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl font-bold mb-4"> <span class="text-brand-purple">class</span> <span class="text-white">AutomationServices</span> <span class="text-brand-purple">extends</span> <span class="text-brand-gold">Solution</span> </h2> <p class="text-gray-400">Custom functions built for your specific needs.</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="bg-brand-dark border border-gray-800 rounded-lg p-6 hover:border-brand-orange transition-colors group"> <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors"> <i${addAttribute(service.icon, "data-lucide")} class="text-brand-orange"></i> </div> <h3 class="text-xl font-bold text-white mb-2">${service.title}</h3> <p class="text-gray-400 mb-4 text-sm">${service.desc}</p> <div class="bg-[#1e1e1e] rounded p-3 text-xs overflow-hidden"> ${renderComponent($$result2, "Code", $$Code, { "code": service.code, "lang": "javascript", "theme": "dracula" })} </div> </div>`)} </div> </div> </section> <!-- Pricing --> ${renderComponent($$result2, "CodePricing", $$CodePricing, {})} <!-- Testimonial --> <section class="py-20 px-4 bg-brand-dark border-y border-gray-800"> <div class="max-w-4xl mx-auto text-center"> <div class="inline-block p-2 rounded-full bg-brand-magenta/10 mb-6"> <i data-lucide="quote" class="text-brand-magenta w-8 h-8"></i> </div> <blockquote class="text-2xl md:text-3xl font-mono text-gray-200 leading-relaxed mb-8">
"The custom script Nicola built has been revolutionary. It saves us hours of manual data entry every single week and has completely eliminated human error."
</blockquote> <cite class="text-brand-orange not-italic font-bold tracking-wide uppercase">
- Satisfied Client, Scotland
</cite> </div> </section> <!-- FAQ --> <section id="faq" class="py-20 px-4 bg-[#0f1219]"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12"> <span class="text-brand-purple">function</span> <span class="text-white">resolveQueries</span>()
</h2> <div class="space-y-4"> ${faqs.map((faq, index) => renderTemplate`<details class="group bg-brand-dark border border-gray-800 rounded-lg overflow-hidden"> <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-200 hover:bg-gray-800/50 transition-colors"> <span>${faq.q}</span> <span class="transition group-open:rotate-180"> <i data-lucide="chevron-down"></i> </span> </summary> <div class="text-gray-400 p-5 pt-0 leading-relaxed"> ${faq.a} </div> </details>`)} </div> </div> </section> <!-- CTA --> <section class="py-24 px-4 text-center bg-gradient-to-b from-brand-dark to-[#1a1f2e]"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Execute?</h2> <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
Eliminate the repetitive tasks that are slowing you down. Let's build a solution that fits perfectly.
</p> <a href="/contact" class="inline-block bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(242,111,33,0.4)] hover:shadow-[0_0_30px_rgba(242,111,33,0.6)] transition-all transform hover:-translate-y-1">
Book Free Consultation
</a> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/index.astro", void 0);

const $$file = "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
