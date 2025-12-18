import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    FileSpreadsheet,
    Globe,
    FileText,
    Calendar,
    Slack,
    ShoppingCart,
    CreditCard,
    ArrowRight,
    Zap,
    Code
} from 'lucide-react';

const NODES = {
    trigger: [
        { id: 'gmail', label: 'Gmail', icon: Mail, color: 'text-red-500', border: 'border-red-500/50' },
        { id: 'form', label: 'Web Form', icon: Globe, color: 'text-blue-400', border: 'border-blue-400/50' },
        { id: 'stripe', label: 'Stripe Payment', icon: CreditCard, color: 'text-indigo-400', border: 'border-indigo-400/50' },
        { id: 'schedule', label: 'Daily Schedule', icon: Calendar, color: 'text-orange-400', border: 'border-orange-400/50' }
    ],
    process: [
        { id: 'scrape', label: 'Scrape/Extract', icon: Zap, color: 'text-brand-gold', border: 'border-brand-gold/50' },
        { id: 'format', label: 'Format/Calculate', icon: FileSpreadsheet, color: 'text-green-500', border: 'border-green-500/50' },
        { id: 'gpt', label: 'AI Analyze', icon: Zap, color: 'text-brand-magenta', border: 'border-brand-magenta/50' }
    ],
    action: [
        { id: 'invoice', label: 'Create Invoice', icon: FileText, color: 'text-blue-500', border: 'border-blue-500/50' },
        { id: 'slack', label: 'Notify Team', icon: Slack, color: 'text-purple-400', border: 'border-purple-400/50' },
        { id: 'sheet', label: 'Update Sheet', icon: FileSpreadsheet, color: 'text-green-500', border: 'border-green-500/50' },
        { id: 'email', label: 'Send Email', icon: Mail, color: 'text-red-500', border: 'border-red-500/50' }
    ]
};

const CODE_SNIPPETS = {
    'gmail-scrape-sheet': `// Extract data from email and save to Sheets
function processEmail(message) {
  const body = message.getPlainBody();
  const data = extractData(body); // Custom regex
  
  const sheet = SpreadsheetApp.getActive().getSheetByName('Leads');
  sheet.appendRow([new Date(), data.name, data.value]);
}`,
    'form-gpt-email': `// AI Auto-Reply to Web Form
function handleFormSubmit(e) {
  const response = Gemini.generateText(\`Draft a reply to: \${e.message}\`);
  
  GmailApp.sendEmail(e.email, 'Re: Your Inquiry', response);
}`,
    'default': `// Select a trigger, process, and action 
// to see the generated automation code...

function automateBusiness() {
  console.log("Waiting for input...");
}`
};

export default function InteractivePipeline() {
    const [pipeline, setPipeline] = useState({
        trigger: null,
        process: null,
        action: null
    });

    const generateCode = () => {
        const key = `${pipeline.trigger?.id}-${pipeline.process?.id}-${pipeline.action?.id}`;
        // Simple heuristic for demo purposes - in reality would be more dynamic
        if (pipeline.trigger?.id === 'gmail' && pipeline.action?.id === 'sheet') return CODE_SNIPPETS['gmail-scrape-sheet'];
        if (pipeline.trigger?.id === 'form' && pipeline.process?.id === 'gpt') return CODE_SNIPPETS['form-gpt-email'];

        // Dynamic fallback generation
        if (pipeline.trigger && pipeline.action) {
            return `function auto${pipeline.trigger.label.replace(/\s/g, '')}To${pipeline.action.label.replace(/\s/g, '')}() {
  // 1. Trigger: ${pipeline.trigger.label}
  const source = ${pipeline.trigger.id}App.fetchNewItems();
  
  // 2. Process: ${pipeline.process ? pipeline.process.label : 'Direct Pass'}
  ${pipeline.process ? `const processed = processData(source);` : 'const processed = source;'}

  // 3. Action: ${pipeline.action.label}
  ${pipeline.action.id}App.create(processed);
}`;
        }
        return CODE_SNIPPETS['default'];
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* BUILDER INTERFACE */}
            <div className="bg-brand-dark/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">

                {/* 1. TRIGGER */}
                <div className="mb-8">
                    <h3 className="text-sm font-mono text-gray-400 mb-3 flex items-center gap-2">
                        <span className="bg-gray-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">1</span>
                        SELECT_TRIGGER
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {NODES.trigger.map(node => (
                            <button
                                key={node.id}
                                onClick={() => setPipeline(prev => ({ ...prev, trigger: node }))}
                                className={`flex items-center gap-2 p-3 rounded-lg border text-sm transition-all ${pipeline.trigger?.id === node.id
                                    ? `${node.border} bg-gray-800/80 ring-1 ring-offset-1 ring-offset-black ring-brand-gold`
                                    : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                                    }`}
                            >
                                <node.icon className={`w-4 h-4 ${node.color}`} />
                                <span className="text-gray-300">{node.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ARROW */}
                <div className="flex justify-center mb-8">
                    <ArrowRight className="text-gray-700" />
                </div>

                {/* 2. PROCESS */}
                <div className="mb-8">
                    <h3 className="text-sm font-mono text-gray-400 mb-3 flex items-center gap-2">
                        <span className="bg-gray-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">2</span>
                        SELECT_PROCESS
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {NODES.process.map(node => (
                            <button
                                key={node.id}
                                onClick={() => setPipeline(prev => ({ ...prev, process: node }))}
                                className={`flex items-center gap-2 p-3 rounded-lg border text-sm transition-all ${pipeline.process?.id === node.id
                                    ? `${node.border} bg-gray-800/80 ring-1 ring-offset-1 ring-offset-black ring-brand-gold`
                                    : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                                    }`}
                            >
                                <node.icon className={`w-4 h-4 ${node.color}`} />
                                <span className="text-gray-300">{node.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ARROW */}
                <div className="flex justify-center mb-8">
                    <ArrowRight className="text-gray-700" />
                </div>

                {/* 3. ACTION */}
                <div>
                    <h3 className="text-sm font-mono text-gray-400 mb-3 flex items-center gap-2">
                        <span className="bg-gray-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">3</span>
                        SELECT_ACTION
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {NODES.action.map(node => (
                            <button
                                key={node.id}
                                onClick={() => setPipeline(prev => ({ ...prev, action: node }))}
                                className={`flex items-center gap-2 p-3 rounded-lg border text-sm transition-all ${pipeline.action?.id === node.id
                                    ? `${node.border} bg-gray-800/80 ring-1 ring-offset-1 ring-offset-black ring-brand-gold`
                                    : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                                    }`}
                            >
                                <node.icon className={`w-4 h-4 ${node.color}`} />
                                <span className="text-gray-300">{node.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* CODE PREVIEW */}
            <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-brand-dark rounded-xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="bg-gray-800/50 px-4 py-2 flex items-center gap-2 border-b border-gray-700 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-xs text-gray-400 font-mono">solution.gs</span>
                    </div>

                    {/* Code Body */}
                    <div className="p-4 overflow-auto font-mono text-sm leading-relaxed text-gray-300 grow">
                        <pre>
                            <code className="language-javascript">
                                {generateCode()}
                            </code>
                        </pre>
                    </div>

                    {/* Status Bar */}
                    <div className="bg-gray-900 border-t border-gray-800 p-2 text-xs font-mono text-gray-500 flex justify-between">
                        <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            READY_TO_DEPLOY
                        </span>
                        <span>JavaScript V8</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
