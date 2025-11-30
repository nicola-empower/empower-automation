import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_g6Z7ARXq.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_CjiSTGJW.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ArrowRight, X, CheckCircle2, Calculator, AlertTriangle, TrendingUp, CheckCircle, GitBranch, Database, Brain, Code, Server, XCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { $ as $$CodePricing } from '../chunks/CodePricing_RWOJV5Ie.mjs';
export { renderers } from '../renderers.mjs';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#9ca3af",
        // gray-400
        font: {
          family: "monospace"
        }
      }
    },
    title: {
      display: false
    },
    tooltip: {
      backgroundColor: "#1f2937",
      // gray-800
      titleColor: "#f3f4f6",
      // gray-100
      bodyColor: "#d1d5db",
      // gray-300
      borderColor: "#374151",
      // gray-700
      borderWidth: 1,
      titleFont: { family: "monospace" },
      bodyFont: { family: "monospace" },
      callbacks: {
        label: (context) => `${context.dataset.label}: £${context.parsed.y}`
      }
    }
  },
  scales: {
    y: {
      ticks: { color: "#6b7280", font: { family: "monospace" } },
      // gray-500
      grid: { color: "#374151" }
      // gray-700
    },
    x: {
      ticks: { color: "#9ca3af", font: { family: "monospace" } },
      // gray-400
      grid: { display: false }
    }
  }
};
const labels = ["Year 1 Cumulative Cost", "Year 2 Cumulative Cost"];
const data = {
  labels,
  datasets: [
    {
      label: "Custom Script (One-time Build)",
      data: [600, 600],
      backgroundColor: "rgba(34, 197, 94, 0.8)",
      // green-500
      borderColor: "rgba(34, 197, 94, 1)",
      borderWidth: 1
    },
    {
      label: "Subscription Tool (e.g., Zapier)",
      data: [480, 960],
      backgroundColor: "rgba(239, 68, 68, 0.8)",
      // red-500
      borderColor: "rgba(239, 68, 68, 1)",
      borderWidth: 1
    }
  ]
};
function AutomationChart() {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-[300px] md:h-[400px] bg-[#0f1219] p-4 rounded-lg border border-gray-800", children: /* @__PURE__ */ jsx(Bar, { options, data }) });
}

const automationExamples = [
  { title: "Lead Capture to Follow-Up", category: "internal", steps: ["Web Form Submission", "Data Added to Google Sheet", "New Lead Tagged in CRM", "Personalized Follow-up Email Sent", "Lead Status Updated"], benefit: "Saves hours of manual data entry each week and prevents costly errors that lose valuable leads, ensuring rapid and consistent communication." },
  { title: "Project Task Management", category: "internal", steps: ["Task Created in Google Sheet", "Calendar Event Scheduled", "Automated Email Reminders Sent", "Status Synced with Project Dashboard"], benefit: "Keeps your team perfectly aligned with instant updates to a central dashboard and eliminates the risk of missed deadlines." },
  { title: "Employee Onboarding", category: "internal", steps: ["New Hire Form Submitted", "Personalized Onboarding Checklist Created", "Induction Meetings Scheduled", "Welcome Email with Resources Sent", "Training Progress Tracked"], benefit: "Ensures a flawless, consistent, and professional onboarding experience for every new hire, freeing up significant HR time." },
  { title: "Event Registration & Feedback", category: "internal", steps: ["Participant Registers via Form", "Confirmation Email & Invite Sent", "Calendar Event Created", "Post-Event Feedback Form Emailed", "Results Summarized in Sheet"], benefit: "Automates the entire event lifecycle from registration to feedback analysis, providing a seamless experience for attendees and organisers." },
  { title: "Content Publishing Workflow", category: "internal", steps: ["Content Ideas Collected in Sheet", "Writing Deadlines Scheduled in Calendar", "Drafts Stored & Linked in Drive", "Automated Review Reminders Sent", "Final Status Updated on Tracker"], benefit: "Streamlines content creation from ideation to publication, ensuring deadlines are met and all stakeholders are kept in the loop." },
  { title: "Invoice & Payment Tracking", category: "internal", steps: ["Invoice Details Entered in Sheet", "Professional Invoice Generated in Docs", "PDF Invoice Emailed to Client", "Payment Status Updated via API", "Automated Late Payment Reminders Sent"], benefit: "Dramatically speeds up cash flow with prompt, professional invoicing and consistent follow-ups, while significantly reducing billing errors." },
  { title: "Customer Support Ticketing", category: "internal", steps: ["Support Request Submitted via Form", "Ticket Created & Assigned in Sheet", "Automated Notification Sent to Team", "Status Updates Emailed to Customer", "Closure Triggers Feedback Request"], benefit: "Creates a robust and simple customer support ticketing system directly within Google Workspace, eliminating the need for extra software costs." },
  { title: "Team Leave Management", category: "internal", steps: ["Leave Request Submitted via Form", "Approval Tracked in Sheet", "Shared Team Calendar Updated", "Confirmation Email Sent", "Leave Balances Updated Automatically"], benefit: "Simplifies and streamlines the entire leave request and approval process, ensuring accurate tracking and complete team visibility." },
  { title: "HubSpot Lead Enrichment", category: "external", steps: ["New Lead Added in HubSpot", "Script Pulls Company Data from LinkedIn API", "Lead Record Updated in HubSpot", "Automated Follow-up Sent via Gmail", "Interaction Logged in Google Sheet"], benefit: "Automatically enriches new lead data in real-time, enabling highly personalized and timely sales outreach that converts." },
  { title: "Shopify Order Fulfillment", category: "external", steps: ["New Shopify Order Placed", "Order Info Pulled into Google Sheet", "Shipping Label Generated via Shippo API", "Tracking Info Emailed to Customer", "Order Status Updated in Shopify"], benefit: "Creates a completely hands-free and error-proof fulfillment process, from order placement to shipping notification, delighting customers." },
  { title: "Stripe Payment Reconciliation", category: "external", steps: ["Payment Received via Stripe", "Transaction Pulled into Sheet", "Invoice Status Updated in Xero/QuickBooks", "Confirmation Sent to Customer", "Monthly Revenue Report Generated"], benefit: "Keeps your accounting software perfectly in sync with your payment processor, saving countless hours of manual reconciliation." },
  { title: "Trello Project Update Digest", category: "external", steps: ["Team Updates Trello Cards", "Script Fetches Recent Changes", "Updates Summarized in Google Doc", "Weekly Digest Emailed to Stakeholders"], benefit: "Keeps all stakeholders informed with automated weekly summaries, eliminating the need for manual report creation and meetings." },
  { title: "Asana Task Sync", category: "external", steps: ["New Task Created in Asana", "Details Captured in Central Sheet", "Due Dates Scheduled in Google Calendar", "Status Synced Back from Asana", "Completion Triggers Notification"], benefit: "Seamlessly integrates your project management tool with your calendar and central reporting sheets for unparalleled oversight." },
  { title: "Mailchimp Newsletter Reporting", category: "external", steps: ["Campaign Sent from Mailchimp", "Script Retrieves Open/Click Data via API", "Analytics Dashboard in Sheets Updated", "Marketing Team Notified of Performance"], benefit: "Automates campaign performance tracking and delivers key insights directly to your team, enabling faster, data-driven decisions." },
  { title: "Zendesk Ticket Escalation", category: "external", steps: ["New Zendesk Ticket Received", "Ticket Details Logged to Sheet", 'If "Urgent", Triggers Slack Message', "Escalation Status Tracked", "Follow-up Survey Sent to Customer"], benefit: "Ensures that urgent customer support tickets are actioned immediately via real-time Slack notifications, protecting customer satisfaction." },
  { title: "WooCommerce Stock Reorder", category: "external", steps: ["Low Stock Detected via WooCommerce API", "Automated Restock Order Sent via Gmail", "Purchase Order Saved in Drive", "Confirmation Received and Logged"], benefit: "Prevents costly stockouts by automating the entire reordering process based on real-time inventory levels in your e-commerce store." },
  { title: "DocuSign Integration", category: "external", steps: ["Contract Ready in Google Drive", "Script Sends Document via DocuSign API", "Signature Status Fetched Hourly", "Signed PDF Archived in Drive", "Status Updated in Tracking Sheet"], benefit: "Streamlines your entire contract workflow from sending to secure archiving, reducing turnaround time and manual follow-ups." },
  { title: "Typeform Feedback Hub", category: "external", steps: ["Customer Fills Out Typeform Survey", "Results Imported to Google Sheet", "Negative Ratings Automatically Flagged", "Alert Sent to Support (Slack/Teams)", "Summary Dashboard Auto-Generated"], benefit: "Turns customer feedback into instant, actionable insights by automatically flagging critical responses for immediate attention." },
  { title: "Facebook Lead Ads Integration", category: "external", steps: ["New Lead from Facebook Ad Form", "Data Fetched by Apps Script", "Stored in Sheet & Updated in CRM", "Automated Thank-You Message Sent"], benefit: "Instantly captures and nurtures new leads from your social media campaigns, ensuring no opportunity is ever missed." },
  { title: "Twitter Brand Monitoring", category: "external", steps: ["Script Monitors Twitter for Keywords", "Mentions Logged in Sheet", "Negative Sentiment Flagged for Review", "Alerts Sent to Team", "Weekly Engagement Report Generated"], benefit: "Automates your social listening to protect your brand reputation, track engagement, and gather valuable customer insights." }
];
function AutomationExamples() {
  const [filter, setFilter] = useState("all");
  const [selectedExample, setSelectedExample] = useState(null);
  const filteredExamples = filter === "all" ? automationExamples : automationExamples.filter((ex) => ex.category === filter);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFilter("all"),
          className: `px-6 py-2 rounded-full text-sm font-mono transition-all ${filter === "all" ? "bg-brand-orange text-white shadow-[0_0_15px_rgba(242,111,33,0.4)]" : "bg-brand-dark border border-gray-700 text-gray-400 hover:border-brand-orange hover:text-white"}`,
          children: "All Examples"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFilter("internal"),
          className: `px-6 py-2 rounded-full text-sm font-mono transition-all ${filter === "internal" ? "bg-brand-orange text-white shadow-[0_0_15px_rgba(242,111,33,0.4)]" : "bg-brand-dark border border-gray-700 text-gray-400 hover:border-brand-orange hover:text-white"}`,
          children: "Internal Workflows"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFilter("external"),
          className: `px-6 py-2 rounded-full text-sm font-mono transition-all ${filter === "external" ? "bg-brand-orange text-white shadow-[0_0_15px_rgba(242,111,33,0.4)]" : "bg-brand-dark border border-gray-700 text-gray-400 hover:border-brand-orange hover:text-white"}`,
          children: "External API Integrations"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredExamples.map((example, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setSelectedExample(example),
        className: "bg-brand-dark border border-gray-800 rounded-lg p-6 hover:border-brand-orange transition-all cursor-pointer group flex flex-col h-full",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: `text-xs font-mono px-3 py-1 rounded-full ${example.category === "internal" ? "bg-blue-900/30 text-blue-400 border border-blue-800" : "bg-purple-900/30 text-purple-400 border border-purple-800"}`, children: example.category === "internal" ? "Internal Workflow" : "External API" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors", children: example.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-sm mb-6 grow", children: [
            example.benefit.substring(0, 100),
            "..."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center text-brand-orange text-sm font-bold mt-auto", children: [
            "See Workflow ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
          ] })
        ]
      },
      index
    )) }),
    selectedExample && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm", onClick: () => setSelectedExample(null), children: /* @__PURE__ */ jsxs("div", { className: "bg-[#0f1219] border border-gray-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-[#0f1219]/95 backdrop-blur border-b border-gray-800 p-6 flex justify-between items-center z-10", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: selectedExample.title }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSelectedExample(null), className: "text-gray-400 hover:text-white transition-colors", children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-6 relative pl-4 border-l border-gray-800 ml-4", children: selectedExample.steps.map((step, idx) => /* @__PURE__ */ jsxs("div", { className: "relative pl-8", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -left-[2.35rem] top-0 w-8 h-8 rounded-full bg-brand-dark border border-brand-orange text-brand-orange flex items-center justify-center font-mono text-sm font-bold", children: idx + 1 }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-200 text-lg", children: step })
        ] }, idx)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg", children: [
          /* @__PURE__ */ jsxs("h4", { className: "text-green-400 font-bold mb-2 flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 mr-2" }),
            " The Business Impact"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-green-100/80", children: selectedExample.benefit })
        ] })
      ] })
    ] }) })
  ] });
}

function RoiCalculator() {
  const [inputs, setInputs] = useState({
    frequency: 10,
    // Times per week
    minutes: 15,
    // Mins per task
    rate: 30,
    // Hourly rate (£)
    saasCost: 0,
    // Current Zapier/Make spend (£/mo)
    buildCost: 750
    // Estimated Custom Build Cost (Hidden variable or slider)
  });
  const [results, setResults] = useState(null);
  useEffect(() => {
    const hoursPerWeek = inputs.frequency * inputs.minutes / 60;
    const weeklyCost = hoursPerWeek * inputs.rate;
    const annualManualCost = weeklyCost * 52;
    const monthlyManualCost = weeklyCost * 4.33;
    const annualSaasCost = inputs.saasCost * 12;
    const totalAnnualDrain = annualManualCost + annualSaasCost;
    const totalMonthlyDrain = monthlyManualCost + Number(inputs.saasCost);
    const breakEvenMonths = totalMonthlyDrain > 0 ? (inputs.buildCost / totalMonthlyDrain).toFixed(1) : 0;
    const threeYearSavings = totalAnnualDrain * 3 - inputs.buildCost;
    setResults({
      annualDrain: Math.round(totalAnnualDrain),
      breakEven: breakEvenMonths,
      threeYearSavings: Math.round(threeYearSavings),
      hoursSaved: Math.round(hoursPerWeek * 52)
    });
  }, [inputs]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const sendReport = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const WEB_APP_URL = "https://script.google.com/macros/s/INSERT_YOUR_WEB_APP_URL_HERE/exec";
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        // Important for Google Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "ROI_CALCULATOR",
          email,
          data: {
            inputs,
            results,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        })
      });
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error sending report:", error);
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono text-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark border border-slate-800 rounded-xl p-6 shadow-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-6 text-slate-400 border-b border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsx(Calculator, { className: "w-4 h-4 text-green-500" }),
        /* @__PURE__ */ jsx("span", { children: "CONFIG_PARAMETERS" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-slate-400 mb-2", children: "TASK_FREQUENCY (Weekly)" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "range",
                name: "frequency",
                min: "1",
                max: "100",
                value: inputs.frequency,
                onChange: handleChange,
                className: "w-full accent-green-500 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "bg-slate-800 text-white px-3 py-1 rounded border border-slate-700 w-16 text-center", children: inputs.frequency })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-slate-400 mb-2", children: "TIME_PER_TASK (Minutes)" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "range",
                name: "minutes",
                min: "1",
                max: "120",
                value: inputs.minutes,
                onChange: handleChange,
                className: "w-full accent-green-500 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "bg-slate-800 text-white px-3 py-1 rounded border border-slate-700 w-16 text-center", children: inputs.minutes })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-slate-400 mb-2", children: "HOURLY_RATE (£)" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-2.5 text-slate-500", children: "£" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                name: "rate",
                value: inputs.rate,
                onChange: handleChange,
                className: "w-full bg-slate-900 border border-slate-700 text-white rounded p-2 pl-8 focus:border-green-500 outline-none"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-slate-400 mb-2", children: "CURRENT_SAAS_SPEND (Zapier/Make £/mo)" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-2.5 text-slate-500", children: "£" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                name: "saasCost",
                value: inputs.saasCost,
                onChange: handleChange,
                className: "w-full bg-slate-900 border border-slate-700 text-white rounded p-2 pl-8 focus:border-green-500 outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-600 mt-1", children: "If 0, we assume pure manual labor." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark border border-red-900/30 rounded-xl p-6 relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-12 h-12 text-red-500" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-slate-500 mb-1", children: "> DETECTED_ANNUAL_DRAIN" }),
        /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-red-500 font-mono tracking-tighter", children: [
          "-£",
          results?.annualDrain.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mt-2", children: [
          "You are losing ",
          /* @__PURE__ */ jsxs("span", { className: "text-white", children: [
            results?.hoursSaved,
            " hours"
          ] }),
          " per year to this task."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark border border-blue-900/30 rounded-xl p-6 relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-12 h-12 text-blue-500" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-slate-500 mb-1", children: "> ROI_TIMELINE" }),
        /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-blue-400 font-mono tracking-tighter", children: [
          results?.breakEven,
          " Months"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mt-2", children: [
          "Time until a bespoke £",
          inputs.buildCost,
          " automation pays for itself."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-green-900/10 border border-green-500/30 rounded-xl p-6 relative overflow-hidden grow flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-green-600 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
            " PROJECTED_ASSET_VALUE (3 Years)"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-5xl font-bold text-white font-mono tracking-tighter mb-4", children: [
            "£",
            results?.threeYearSavings.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "/contact", className: "inline-flex items-center justify-center w-full gap-2 bg-green-600 hover:bg-green-500 text-black px-6 py-3 rounded font-bold transition-colors", children: [
            "Build This Asset ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsx("form", { onSubmit: sendReport, className: "pt-4 border-t border-green-500/20", children: status === "success" ? /* @__PURE__ */ jsx("div", { className: "text-green-400 text-center text-xs bg-green-900/20 p-2 rounded border border-green-500/30", children: "✓ Report sent to your inbox!" }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Email me this report...",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "bg-brand-dark border border-green-500/30 text-white text-xs rounded px-3 py-2 w-full focus:outline-none focus:border-green-500"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: status === "sending",
                className: "bg-green-900/40 hover:bg-green-900/60 text-green-400 text-xs px-3 py-2 rounded border border-green-500/30 transition-colors whitespace-nowrap",
                children: status === "sending" ? "Sending..." : "Send"
              }
            )
          ] }) })
        ] })
      ] })
    ] })
  ] });
}

const questions = {
  start: {
    id: "start",
    text: "Is the task repetitive?",
    subtext: "Do you or your team do this exact same sequence of steps more than once a week?",
    icon: GitBranch,
    yes: "empathy",
    no: "manual"
  },
  empathy: {
    id: "empathy",
    text: "Does it require human empathy?",
    subtext: "Does the task require emotional intelligence, complex negotiation, or subjective judgment?",
    icon: Brain,
    yes: "human",
    no: "complexity"
  },
  complexity: {
    id: "complexity",
    text: "Does the data structure change?",
    subtext: "Are the inputs (spreadsheets, emails, APIs) consistent, or do they change format frequently?",
    icon: Database,
    yes: "api",
    no: "script"
  }
};
const results = {
  manual: {
    title: "DO NOT AUTOMATE",
    desc: "If it's not repetitive, the time to build the automation will likely exceed the time saved. Stick to manual for now.",
    icon: XCircle,
    color: "text-gray-400",
    borderColor: "border-gray-600",
    bg: "bg-gray-900"
  },
  human: {
    title: "KEEP HUMAN",
    desc: "Empathy and complex judgment are hard to code. Use automation to support the human (e.g., gathering data), not replace them.",
    icon: Brain,
    color: "text-pink-500",
    borderColor: "border-pink-500",
    bg: "bg-pink-950/30"
  },
  api: {
    title: "REQUIRES CUSTOM API",
    desc: "Frequent changes require a robust, maintained API integration rather than a simple script. This is a complex build.",
    icon: Server,
    color: "text-blue-500",
    borderColor: "border-blue-500",
    bg: "bg-blue-950/30"
  },
  script: {
    title: "PERFECT CANDIDATE",
    desc: "Stable, repetitive, and logical. This is the sweet spot for a custom Google Apps Script. Let's build it.",
    icon: Code,
    color: "text-green-500",
    borderColor: "border-green-500",
    bg: "bg-green-950/30"
  }
};
function LogicGate() {
  const [currentNode, setCurrentNode] = useState("start");
  const [history, setHistory] = useState([]);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const sendReport = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const WEB_APP_URL = "https://script.google.com/macros/s/INSERT_YOUR_WEB_APP_URL_HERE/exec";
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "LOGIC_GATE",
          email,
          data: {
            result: results[currentNode],
            path: history,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        })
      });
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error sending report:", error);
      setStatus("error");
    }
  };
  const handleAnswer = (answer) => {
    const nextNode = questions[currentNode][answer];
    setHistory([...history, { from: currentNode, answer }]);
    setCurrentNode(nextNode);
  };
  const reset = () => {
    setCurrentNode("start");
    setHistory([]);
  };
  const isResult = !questions[currentNode];
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-4xl mx-auto bg-brand-dark rounded-xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col min-h-[600px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-slate-800 flex items-center justify-between bg-[#161b22]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(GitBranch, { className: "text-brand-orange w-5 h-5" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-slate-300 font-bold", children: "LOGIC_GATE_V1.0" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grow relative flex items-center justify-center p-8", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5 pointer-events-none", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", children: [
        /* @__PURE__ */ jsx("pattern", { id: "circuit-grid", width: "50", height: "50", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 50 0 L 0 0 0 50", fill: "none", stroke: "currentColor", strokeWidth: "1" }) }),
        /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#circuit-grid)", className: "text-brand-orange" })
      ] }) }),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: !isResult ? /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95, x: 50 },
          animate: { opacity: 1, scale: 1, x: 0 },
          exit: { opacity: 0, scale: 0.95, x: -50 },
          transition: { duration: 0.3 },
          className: "relative z-10 w-full max-w-xl",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#161b22] border border-slate-700 mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]", children: React.createElement(questions[currentNode].icon, { className: "w-10 h-10 text-brand-orange" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold text-white mb-4 font-mono tracking-tight", children: questions[currentNode].text }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-lg", children: questions[currentNode].subtext })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => handleAnswer("yes"),
                  className: "group relative overflow-hidden p-6 bg-[#161b22] border border-slate-700 rounded-xl hover:border-green-500 transition-all duration-300 text-left",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" }),
                    /* @__PURE__ */ jsx("span", { className: "block text-xs font-mono text-slate-500 mb-2 group-hover:text-green-500", children: "INPUT: TRUE" }),
                    /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-white group-hover:text-green-400 flex items-center gap-2", children: [
                      "YES ",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => handleAnswer("no"),
                  className: "group relative overflow-hidden p-6 bg-[#161b22] border border-slate-700 rounded-xl hover:border-red-500 transition-all duration-300 text-left",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" }),
                    /* @__PURE__ */ jsx("span", { className: "block text-xs font-mono text-slate-500 mb-2 group-hover:text-red-500", children: "INPUT: FALSE" }),
                    /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-white group-hover:text-red-400 flex items-center gap-2", children: [
                      "NO ",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" })
                    ] })
                  ]
                }
              )
            ] })
          ]
        },
        currentNode
      ) : /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { type: "spring", bounce: 0.5 },
          className: `relative z-10 w-full max-w-lg p-1 rounded-2xl bg-linear-to-b ${results[currentNode].borderColor.replace("border-", "from-")} to-transparent`,
          children: /* @__PURE__ */ jsxs("div", { className: `bg-brand-dark rounded-xl p-8 text-center border ${results[currentNode].borderColor}`, children: [
            /* @__PURE__ */ jsx("div", { className: `w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${results[currentNode].bg} ${results[currentNode].color} ring-4 ring-opacity-20 ring-current`, children: React.createElement(results[currentNode].icon, { className: "w-12 h-12" }) }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-sm mb-2 opacity-70 uppercase tracking-widest", children: "Analysis Complete" }),
            /* @__PURE__ */ jsx("h3", { className: `text-3xl md:text-4xl font-bold mb-6 font-mono ${results[currentNode].color}`, children: results[currentNode].title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-lg mb-10 leading-relaxed", children: results[currentNode].desc }),
            /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("form", { onSubmit: sendReport, className: "flex flex-col gap-2", children: status === "success" ? /* @__PURE__ */ jsx("div", { className: "text-green-400 text-center text-sm bg-green-900/20 p-3 rounded border border-green-500/30", children: "✓ Result sent to your inbox!" }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Email me this result...",
                  required: true,
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "bg-brand-dark border border-slate-600 text-white text-sm rounded px-4 py-3 w-full focus:outline-none focus:border-brand-orange"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: status === "sending",
                  className: "bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded font-bold transition-colors border border-slate-600 whitespace-nowrap",
                  children: status === "sending" ? "..." : "Send"
                }
              )
            ] }) }) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: reset,
                className: "px-8 py-3 bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg font-mono text-sm transition-colors border border-slate-700 w-full",
                children: "// RESTART_SEQUENCE"
              }
            )
          ] })
        },
        "result"
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-slate-800 bg-[#161b22] flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-mono", children: [
      /* @__PURE__ */ jsx("span", { className: history.length === 0 && !isResult ? "text-brand-orange font-bold" : "text-slate-600", children: "START" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-700", children: "→" }),
      /* @__PURE__ */ jsx("span", { className: history.length > 0 || isResult ? "text-brand-orange font-bold" : "text-slate-600", children: "ANALYSIS" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-700", children: "→" }),
      /* @__PURE__ */ jsx("span", { className: isResult ? "text-brand-orange font-bold" : "text-slate-600", children: "RESULT" })
    ] }) })
  ] });
}

const $$Automation = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    { q: "What exactly is Google Apps Script automation?", a: "Google Apps Script is a cloud-based scripting language that allows me to build custom workflows and automations within Google Workspace apps like Sheets, Gmail, and Calendar. It helps businesses save time by automating repetitive manual tasks." },
    { q: "Do I need to be tech-savvy to use your automation solutions?", a: "Not at all! I design every automation to be user-friendly and easy to maintain. I provide clear instructions, training, and ongoing support so you and your team can benefit without needing coding skills." },
    { q: "Which apps and platforms can you connect?", a: "I work with Google Workspace apps plus popular tools like HubSpot, Mailchimp, Shopify, Stripe, Trello, Slack, Salesforce, WooCommerce, and many others that offer APIs for integration." },
    { q: "How long does it take to set up an automation?", a: "Setup time varies based on complexity - simple automations can be ready in a few days, while more complex workflows may take a few weeks. I always provide an estimated timeline during our discovery call." },
    { q: "Will automation replace my current software or staff?", a: "Automation is designed to complement your existing tools and team, not replace them. It frees up your people to focus on high-value work by handling tedious, repetitive tasks automatically." },
    { q: "Is my data safe?", a: "Yes. Google Apps Script runs securely within Google\u2019s environment. I follow best practices to ensure your data is protected, private, and compliant with regulations like GDPR." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Empower Automation | Custom Google Apps Script Solutions" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="bg-[#0f1219] text-gray-300 font-sans selection:bg-brand-orange selection:text-white"> <!-- Hero Section --> <section class="relative pt-32 pb-20 px-4 overflow-hidden"> <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-dark via-[#0f1219] to-[#0f1219] opacity-80"></div> <div class="max-w-7xl mx-auto text-center relative z-10"> <div class="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange font-mono text-sm">
console.log("Stop Wasting Hours");
</div> <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
Stop Wasting Hours on <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">Busywork</span>.
</h1> <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
We build <strong class="text-brand-gold">custom, code-based automations</strong> that connect your apps and eliminate repetitive tasks for good. Reclaim your time and focus on what truly matters.
</p> <div class="flex flex-col sm:flex-row justify-center gap-4"> <a href="#examples" class="bg-brand-orange text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(242,111,33,0.3)] hover:shadow-[0_0_30px_rgba(242,111,33,0.5)]">
Explore Solutions
</a> <a href="#pricing" class="bg-transparent border border-gray-600 text-white font-bold py-4 px-8 rounded-lg hover:border-brand-gold hover:text-brand-gold transition-all">
View Packages
</a> </div> </div> </section> <!-- ROI Calculator Section --> <section class="py-20 px-4 bg-[#13161c] border-y border-gray-800"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">The Automation ROI Terminal</h2> <p class="text-gray-400 max-w-3xl mx-auto">
Calculate exactly how much your manual processes are costing you, and see when a custom solution pays for itself.
</p> </div> ${renderComponent($$result2, "RoiCalculator", RoiCalculator, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/RoiCalculator", "client:component-export": "default" })} </div> </section> <!-- Logic Gate Section --> <section class="py-20 px-4 bg-[#0f1219]"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Should You Automate This?</h2> <p class="text-gray-400 max-w-3xl mx-auto">
Not every task is a good candidate for automation. Run your process through our Logic Gate to find out.
</p> </div> ${renderComponent($$result2, "LogicGate", LogicGate, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/LogicGate", "client:component-export": "default" })} </div> </section> <!-- Solution / Chart Section --> <section class="py-20 px-4 bg-[#13161c] border-y border-gray-800"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Invest in an Asset, Not a Rental</h2> <p class="text-gray-400 max-w-3xl mx-auto">
Unlike subscription tools that lock you into recurring fees, a custom script is a permanent asset you own. It's more powerful, infinitely more flexible, and significantly more cost-effective over time.
</p> </div> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="bg-[#13161c] p-6 rounded-xl border border-gray-800 shadow-2xl"> <h3 class="text-xl font-mono text-gray-400 mb-6 text-center">// Cost Analysis: 24 Months</h3> ${renderComponent($$result2, "AutomationChart", AutomationChart, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/AutomationChart", "client:component-export": "default" })} </div> <div> <div class="space-y-8"> <div class="flex gap-4"> <div class="w-12 h-12 rounded-lg bg-green-900/20 flex items-center justify-center border border-green-900 text-green-500 shrink-0"> <i data-lucide="check-circle-2"></i> </div> <div> <h3 class="text-xl font-bold text-white mb-2">One-Time Investment</h3> <p class="text-gray-400">Pay once for the code. No monthly "per-task" or "per-user" fees that creep up as you grow.</p> </div> </div> <div class="flex gap-4"> <div class="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center border border-brand-orange/30 text-brand-orange shrink-0"> <i data-lucide="lock"></i> </div> <div> <h3 class="text-xl font-bold text-white mb-2">You Own the Code</h3> <p class="text-gray-400">The script lives in your Google account. You have full control and ownership, forever.</p> </div> </div> <div class="bg-yellow-900/20 border border-yellow-700/50 p-6 rounded-lg mt-8"> <h4 class="text-yellow-500 font-bold mb-2 flex items-center"> <i data-lucide="alert-triangle" class="w-5 h-5 mr-2"></i> Important Policy
</h4> <p class="text-yellow-200/70 text-sm">
Google Apps Script is native to Google, so a Google Workspace or Gmail account is essential. We prioritise security and GDPR compliance in every custom build.
</p> </div> </div> </div> </div> </div> </section> <!-- Why Us --> <section class="py-20 px-4"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">An Automation Partner</h2> <p class="text-gray-400">We don't just write code; we build lasting solutions.</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${[
    { icon: "settings", title: "Custom Solutions", desc: "Meticulously tailored to fit your unique business workflows." },
    { icon: "pound-sterling", title: "Transparent Pricing", desc: "Clear, upfront pricing. No hidden costs or recurring fees." },
    { icon: "link", title: "Deep Integration", desc: "Built directly within Google Workspace for seamless connections." },
    { icon: "handshake", title: "Ongoing Partnership", desc: "We are here to provide updates and support as you grow." }
  ].map((item) => renderTemplate`<div class="bg-[#13161c] p-8 rounded-lg border border-gray-800 hover:border-brand-gold transition-colors text-center group"> <div class="w-14 h-14 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors"> <i${addAttribute(item.icon, "data-lucide")} class="text-brand-gold w-6 h-6"></i> </div> <h3 class="text-lg font-bold text-white mb-3">${item.title}</h3> <p class="text-gray-400 text-sm">${item.desc}</p> </div>`)} </div> </div> </section> <!-- Examples Grid --> <section id="examples" class="py-20 px-4 bg-[#13161c] border-y border-gray-800"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Explore the Possibilities</h2> <p class="text-gray-400 max-w-2xl mx-auto">
From streamlining internal admin to integrating your entire software stack.
</p> </div> ${renderComponent($$result2, "AutomationExamples", AutomationExamples, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/components/AutomationExamples", "client:component-export": "default" })} </div> </section> <!-- Testimonials --> <section class="py-20 px-4 bg-[#0f1219]"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2> <p class="text-gray-400">We're proud to help businesses reclaim their time.</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="bg-[#13161c] p-8 rounded-xl border border-gray-800 shadow-lg relative"> <i data-lucide="quote" class="text-brand-orange/20 w-10 h-10 absolute top-6 left-6"></i> <p class="text-gray-300 italic relative z-10 pt-8 mb-6">"The automation for our lead management has been a game-changer. It saved us at least 10 hours a week and we no longer worry about leads falling through the cracks."</p> <div class="font-bold text-brand-gold">- Marketing Director, Tech Startup</div> </div> <div class="bg-[#13161c] p-8 rounded-xl border border-gray-800 shadow-lg relative"> <i data-lucide="quote" class="text-brand-orange/20 w-10 h-10 absolute top-6 left-6"></i> <p class="text-gray-300 italic relative z-10 pt-8 mb-6">"We needed a custom invoicing system that worked with our existing Google Sheets. Empower Automation built a solution that was more efficient and far more cost-effective than any subscription software."</p> <div class="font-bold text-brand-gold">- Founder, Creative Agency</div> </div> <div class="bg-[#13161c] p-8 rounded-xl border border-gray-800 shadow-lg relative"> <i data-lucide="quote" class="text-brand-orange/20 w-10 h-10 absolute top-6 left-6"></i> <p class="text-gray-300 italic relative z-10 pt-8 mb-6">"The onboarding automation has streamlined our entire HR process. New hires get a consistent, professional experience from day one, and our team is free to focus on people, not paperwork."</p> <div class="font-bold text-brand-gold">- Operations Manager, SMB</div> </div> </div> </div> </section> <!-- Pricing --> ${renderComponent($$result2, "CodePricing", $$CodePricing, {})} <!-- Peace of Mind Retainer --> <section class="py-10 px-4 bg-brand-dark pb-20"> <div class="max-w-7xl mx-auto"> <div class="bg-[#1e1e1e] rounded-lg border border-brand-gold/30 p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_20px_rgba(253,185,19,0.1)]"> <div> <h3 class="text-2xl font-bold text-white mb-2 flex items-center gap-3"> <span class="text-brand-gold">Peace of Mind</span> Retainer
</h3> <p class="text-gray-400 mb-4">Don't let tech headaches slow you down. We keep your automations running flawlessly.</p> <ul class="flex flex-wrap gap-4 text-sm text-gray-300"> <li class="flex items-center gap-2">${renderComponent($$result2, "CheckCircle", CheckCircle, { "class": "w-4 h-4 text-brand-gold" })} Proactive Monitoring</li> <li class="flex items-center gap-2">${renderComponent($$result2, "CheckCircle", CheckCircle, { "class": "w-4 h-4 text-brand-gold" })} Priority Bug Fixes</li> <li class="flex items-center gap-2">${renderComponent($$result2, "CheckCircle", CheckCircle, { "class": "w-4 h-4 text-brand-gold" })} Minor Tweaks Included</li> </ul> </div> <div class="text-center md:text-right shrink-0"> <p class="text-3xl font-bold text-white">From £150<span class="text-lg text-gray-500 font-normal">/mo</span></p> <a href="/contact" class="inline-block mt-4 text-brand-gold hover:text-white font-semibold transition-colors border border-brand-gold/30 hover:border-brand-gold px-6 py-2 rounded-lg">
Secure Your Support
</a> </div> </div> </div> </section> <!-- FAQ --> <section id="faq" class="py-20 px-4 bg-[#13161c]"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl font-bold text-center text-white mb-12"> <span class="text-brand-purple">function</span> <span class="text-white">resolveQueries</span>()
</h2> <div class="space-y-4"> ${faqs.map((faq) => renderTemplate`<details class="group bg-[#0f1219] border border-gray-800 rounded-lg overflow-hidden"> <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-200 hover:bg-gray-800/50 transition-colors"> <span>${faq.q}</span> <span class="transition group-open:rotate-180"> <i data-lucide="chevron-down"></i> </span> </summary> <div class="text-gray-400 p-5 pt-0 leading-relaxed border-t border-gray-800/50 mt-2"> ${faq.a} </div> </details>`)} </div> </div> </section> <!-- CTA --> <section class="py-24 px-4 text-center bg-gradient-to-b from-brand-dark to-[#0f1219]"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Reclaim Your Time?</h2> <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
Let’s have a no-obligation chat about your biggest bottlenecks.
</p> <a href="/contact" class="inline-block bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(242,111,33,0.4)] hover:shadow-[0_0_30px_rgba(242,111,33,0.6)] transition-all transform hover:-translate-y-1">
Book Free Discovery Call
</a> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/automation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/automation.astro", void 0);

const $$file = "C:/Users/nicol/OneDrive/Desktop/the websites/automation specialist/empower-automation/src/pages/automation.astro";
const $$url = "/automation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Automation,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
