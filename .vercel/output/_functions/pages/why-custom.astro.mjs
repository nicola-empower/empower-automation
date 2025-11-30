import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_g6Z7ARXq.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_CjiSTGJW.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const questions = [
  {
    id: 1,
    text: "How reliant are you on third-party subscriptions to connect your core apps?",
    options: [
      { text: "Not at all. My systems are integrated.", score: "A" },
      { text: "Somewhat. I have a few Zaps or similar automations running.", score: "B" },
      { text: "Heavily. My entire business would stop if my subscriptions were cancelled.", score: "C" }
    ]
  },
  {
    id: 2,
    text: "If you were unavailable, could someone else understand and manage your automated workflows?",
    options: [
      { text: "Yes, they are fully documented and part of our internal systems.", score: "A" },
      { text: "Maybe, but it would take a lot of guesswork.", score: "B" },
      { text: "Absolutely not. It's a complex web that only I understand.", score: "C" }
    ]
  },
  {
    id: 3,
    text: "When a workflow breaks, how much time do you lose trying to fix it?",
    options: [
      { text: "Very little. Errors are logged and the system is easy to debug.", score: "A" },
      { text: "A frustrating amount. I often have to poke around in logs and reconnect apps.", score: "B" },
      { text: "Hours. It can derail my entire day or week.", score: "C" }
    ]
  },
  {
    id: 4,
    text: "Are you paying for features in your automation tools that you don't even use?",
    options: [
      { text: "No, my solution only includes what I need.", score: "A" },
      { text: "I think so, but it's hard to tell.", score: "B" },
      { text: "Definitely. I'm on a high-tier plan for just one or two key features.", score: "C" }
    ]
  },
  {
    id: 5,
    text: "Does your automation feel like a lasting business asset or a temporary rental?",
    options: [
      { text: "A permanent asset that adds value to my business.", score: "A" },
      { text: "A useful tool for now, but I worry about the long-term cost.", score: "B" },
      { text: "A temporary rental. It's a monthly expense, plain and simple.", score: "C" }
    ]
  }
];
function BusinessFitQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const calculateResult = () => {
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
    const maxScore = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    return maxScore;
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-brand-dark border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto shadow-2xl", children: !showResult ? /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-brand-gold font-mono text-sm", children: [
            "QUESTION ",
            currentQuestion + 1,
            "/",
            questions.length
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-32 h-2 bg-gray-800 rounded-full", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-full bg-brand-orange rounded-full transition-all duration-300",
              style: { width: `${(currentQuestion + 1) / questions.length * 100}%` }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-white mb-8", children: questions[currentQuestion].text }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: questions[currentQuestion].options.map((option, index) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleAnswer(option.score),
            className: "w-full text-left p-4 rounded-lg border border-gray-700 hover:border-brand-magenta hover:bg-brand-magenta/10 transition-all text-gray-300 hover:text-white group",
            children: [
              /* @__PURE__ */ jsx("span", { className: "inline-block w-6 h-6 rounded-full border border-gray-600 mr-3 text-center text-xs leading-5 text-gray-500 group-hover:border-brand-magenta group-hover:text-brand-magenta", children: String.fromCharCode(65 + index) }),
              option.text
            ]
          },
          index
        )) })
      ]
    },
    currentQuestion
  ) : /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-4xl", children: "📊" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Analysis Complete" }),
        calculateResult() === "A" && /* @__PURE__ */ jsxs("div", { className: "bg-green-900/20 border border-green-500/50 p-6 rounded-lg mb-8", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-green-400 mb-2", children: "You're Already Custom-Tailored!" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Your business is a shining example of efficiency. Your systems are robust, valuable assets. Keep up the fantastic work!" })
        ] }),
        calculateResult() === "B" && /* @__PURE__ */ jsxs("div", { className: "bg-yellow-900/20 border border-yellow-500/50 p-6 rounded-lg mb-8", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-yellow-400 mb-2", children: "Your Off-the-Rack Solution is Wearing Thin." }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Your business is running, but you're feeling the pinch of a solution that doesn't quite fit. You're losing time to frustrating workarounds and paying for things you don't need." })
        ] }),
        calculateResult() === "C" && /* @__PURE__ */ jsxs("div", { className: "bg-red-900/20 border border-red-500/50 p-6 rounded-lg mb-8", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-red-400 mb-2", children: "You're in an 'Off-the-Rack' Straitjacket." }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Your business is being actively held back by fragile, expensive, and complex systems. You are spending too much time and money on solutions that are creating more stress than they solve." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx("a", { href: "/contact", className: "bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition-colors", children: "Book Your Free Fitting Session" }),
          /* @__PURE__ */ jsx("button", { onClick: resetQuiz, className: "text-gray-400 hover:text-white underline", children: "Retake Quiz" })
        ] })
      ]
    }
  ) });
}

function HumanErrorScan() {
  const [inputs, setInputs] = useState({
    records: 50,
    // Items per week (Invoices, Leads)
    fields: 5,
    // Data points per item (Name, Date, Price, Email, ID)
    errorRate: 3
    // Standard human error rate (%)
  });
  const [stats, setStats] = useState({
    totalPoints: 0,
    errorCount: 0,
    integrity: 100
  });
  useEffect(() => {
    const weeklyPoints = inputs.records * inputs.fields;
    const annualPoints = weeklyPoints * 52;
    const annualErrors = Math.ceil(annualPoints * (inputs.errorRate / 100));
    let calculatedIntegrity = 100 - annualErrors / 50;
    if (calculatedIntegrity < 0) calculatedIntegrity = 0;
    setStats({
      totalPoints: annualPoints,
      errorCount: annualErrors,
      integrity: Math.round(calculatedIntegrity)
    });
  }, [inputs]);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
  };
  const getBarColor = () => {
    if (stats.integrity > 80) return "bg-green-500";
    if (stats.integrity > 40) return "bg-yellow-500";
    return "bg-red-500";
  };
  return /* @__PURE__ */ jsxs("div", { className: "font-mono text-sm max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 border-b border-slate-800 pb-4", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Activity, { className: "w-6 h-6 text-purple-500" }),
        "DATA_INTEGRITY_SCANNER_v1.0"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mt-2", children: "Calculate the statistical probability of data corruption in manual workflows." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-brand-dark border border-slate-800 p-6 rounded-xl shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-slate-400 mb-2", children: [
            /* @__PURE__ */ jsx("label", { children: "RECORDS_PER_WEEK" }),
            /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: inputs.records })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              name: "records",
              min: "10",
              max: "500",
              step: "10",
              value: inputs.records,
              onChange: handleChange,
              className: "w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-500 mt-1", children: "e.g. Invoices, New Clients, Orders" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-slate-400 mb-2", children: [
            /* @__PURE__ */ jsx("label", { children: "FIELDS_PER_RECORD" }),
            /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: inputs.fields })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              name: "fields",
              min: "1",
              max: "20",
              value: inputs.fields,
              onChange: handleChange,
              className: "w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-500 mt-1", children: "e.g. Name, Date, Address, Amount = 4 Fields" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-900/50 rounded border border-slate-800", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-slate-500 text-xs uppercase", children: "Human Factor Constant" }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "3%" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-600", children: "Based on standard industry data entry error rates (1-4%)." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark border border-slate-800 p-6 rounded-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-xs", children: "SYSTEM_INTEGRITY" }),
            /* @__PURE__ */ jsxs("span", { className: `text-xl font-bold ${getBarColor().replace("bg-", "text-")}`, children: [
              stats.integrity,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-4 bg-slate-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-full transition-all duration-500 ${getBarColor()}`,
              style: { width: `${stats.integrity}%` }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-black border border-slate-800 p-6 rounded-xl font-mono text-xs leading-relaxed shadow-2xl relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-b from-transparent to-purple-900/5 pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "> Initiating analysis sequence..." }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-500", children: [
              "> Processing ",
              stats.totalPoints.toLocaleString(),
              " annual data points..."
            ] }),
            /* @__PURE__ */ jsx("div", { className: "my-4 border-l-2 border-slate-700 pl-3 py-1", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-300", children: [
              /* @__PURE__ */ jsx("span", { className: "text-purple-500", children: "TOTAL_DATA_VOLUME:" }),
              " ",
              stats.totalPoints.toLocaleString(),
              " / yr"
            ] }) }),
            stats.errorCount > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-red-500 animate-pulse", children: "> WARNING: DATA CORRUPTION DETECTED" }),
              /* @__PURE__ */ jsxs("p", { className: "text-slate-300", children: [
                "> ESTIMATED FAILED RECORDS: ",
                /* @__PURE__ */ jsx("span", { className: "text-red-400 font-bold text-lg", children: stats.errorCount })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-slate-500 mt-2", children: [
                "> Impact Analysis: That is ",
                stats.errorCount,
                " wrong addresses, missed payments, or lost leads per year."
              ] })
            ] }) : /* @__PURE__ */ jsx("p", { className: "text-green-500", children: "> SYSTEM STABLE." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border border-green-900/30 bg-green-900/10 p-4 rounded-xl flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "w-8 h-8 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-green-400 font-bold", children: "Automated Error Rate" }),
              /* @__PURE__ */ jsx("p", { className: "text-white text-lg", children: "0.00%" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: "bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded font-bold transition-colors", children: "Fix This" })
        ] })
      ] })
    ] })
  ] });
}

const $$WhyCustom = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Why Custom Automation? | Empower Automation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-24 pb-20"> <!-- Hero Content --> <section class="px-4 max-w-4xl mx-auto text-center mb-20"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
Why Your Business Deserves More Than an <span class="text-brand-orange">'Off-the-Rack'</span> Solution
</h1> <p class="text-xl text-gray-400 leading-relaxed">
Let's be honest. The word "code" can feel intimidating. It sounds complex, expensive, and frankly, a bit scary. But let's forget about that word for a second and talk about something we all understand: <span class="text-brand-gold font-bold">getting a perfect fit.</span> </p> </section> <!-- The Comparison --> <section class="px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-24"> <!-- Off the Rack --> <div class="bg-[#1a1f2e] p-8 rounded-xl border border-gray-700"> <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-6"> <span class="text-3xl">👔</span> </div> <h2 class="text-2xl font-bold text-white mb-4">The 'Off-the-Rack' Compromise</h2> <p class="text-gray-400 mb-6">
Your first choice is to buy a solution 'off-the-rack.' This is the world of subscription software like Zapier. It's like buying a suit from a high-street department store.
</p> <ul class="space-y-3 text-gray-300"> <li class="flex items-start gap-3"> <span class="text-red-400 mt-1">✕</span> <span>It's designed to fit everyone, so it fits no one perfectly.</span> </li> <li class="flex items-start gap-3"> <span class="text-red-400 mt-1">✕</span> <span>It might be tight in the shoulders (struggling with complex workflows).</span> </li> <li class="flex items-start gap-3"> <span class="text-red-400 mt-1">✕</span> <span>You pay for "flashy buttons" and extra fabric you'll never use.</span> </li> <li class="flex items-start gap-3"> <span class="text-red-400 mt-1">✕</span> <span>It's a recurring monthly cost that never ends.</span> </li> </ul> </div> <!-- Custom Tailored --> <div class="bg-brand-dark p-8 rounded-xl border-2 border-brand-gold shadow-[0_0_30px_rgba(253,185,19,0.1)]"> <div class="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6"> <span class="text-3xl">🧵</span> </div> <h2 class="text-2xl font-bold text-white mb-4">The 'Custom-Tailored' Advantage</h2> <p class="text-gray-400 mb-6">
This is what we do with Google Apps Script. We're not 'writing scary code.' We are taking your business's exact measurements and building a solution that fits you like a glove.
</p> <ul class="space-y-3 text-gray-300"> <li class="flex items-start gap-3"> <span class="text-green-400 mt-1">✓</span> <span class="font-bold text-white">A Perfect Fit:</span> Every process is designed specifically for how you work. No waste, no compromise.
</li> <li class="flex items-start gap-3"> <span class="text-green-400 mt-1">✓</span> <span class="font-bold text-white">Built to Last:</span> Stitched directly into your Google Workspace. A permanent, resilient asset.
</li> <li class="flex items-start gap-3"> <span class="text-green-400 mt-1">✓</span> <span class="font-bold text-white">One-Time Investment:</span> You own it. No monthly subscription fees appearing on your bank statement.
</li> </ul> </div> </section> <!-- Human Error Scan Section --> <section class="px-4 max-w-5xl mx-auto mb-24"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-white mb-4">The Hidden Cost of "Manual"</h2> <p class="text-gray-400">
It's not just about time. It's about accuracy. See how small errors compound over a year.
</p> </div> ${renderComponent($$result2, "HumanErrorScan", HumanErrorScan, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/HumanErrorScan", "client:component-export": "default" })} </section> <!-- Quiz Section --> <section class="px-4 max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-white mb-4">The Automation Fitting Session</h2> <p class="text-gray-400">
Are your current systems a perfect fit, or are you making do with an off-the-rack solution?
<br>Answer five questions to get your <span class="text-brand-gold">Business Fit Score</span>.
</p> </div> ${renderComponent($$result2, "BusinessFitQuiz", BusinessFitQuiz, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/BusinessFitQuiz", "client:component-export": "default" })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/why-custom.astro", void 0);

const $$file = "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/why-custom.astro";
const $$url = "/why-custom";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$WhyCustom,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
