import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Brain, Database, CircleCheck, CircleX, Code, Server, ArrowRight } from 'lucide-react';

const questions = {
    start: {
        id: 'start',
        text: "Is the task repetitive?",
        subtext: "Do you or your team do this exact same sequence of steps more than once a week?",
        icon: GitBranch,
        yes: 'empathy',
        no: 'manual'
    },
    empathy: {
        id: 'empathy',
        text: "Does it require human empathy?",
        subtext: "Does the task require emotional intelligence, complex negotiation, or subjective judgment?",
        icon: Brain,
        yes: 'human',
        no: 'complexity'
    },
    complexity: {
        id: 'complexity',
        text: "Does the data structure change?",
        subtext: "Are the inputs (spreadsheets, emails, APIs) consistent, or do they change format frequently?",
        icon: Database,
        yes: 'api',
        no: 'script'
    }
};

const results = {
    manual: {
        title: "DO NOT AUTOMATE",
        desc: "If it's not repetitive, the time to build the automation will likely exceed the time saved. Stick to manual for now.",
        icon: CircleX,
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

export default function LogicGate() {
    const [currentNode, setCurrentNode] = useState('start');
    const [history, setHistory] = useState([]);



    const handleAnswer = (answer) => {
        const nextNode = questions[currentNode][answer];
        setHistory([...history, { from: currentNode, answer }]);
        setCurrentNode(nextNode);
    };

    const reset = () => {
        setCurrentNode('start');
        setHistory([]);
    };

    const isResult = !questions[currentNode];

    return (
        <div className="w-full max-w-4xl mx-auto bg-brand-dark rounded-xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col min-h-[600px]">

            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#161b22]">
                <div className="flex items-center gap-3">
                    <GitBranch className="text-brand-orange w-5 h-5" />
                    <span className="font-mono text-slate-300 font-bold">LOGIC_GATE_V1.0</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="grow relative flex items-center justify-center p-8">

                {/* Background Grid & Circuit Lines (Decorative) */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="circuit-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit-grid)" className="text-brand-orange" />
                    </svg>
                </div>

                <AnimatePresence mode="wait">
                    {!isResult ? (
                        <motion.div
                            key={currentNode}
                            initial={{ opacity: 0, scale: 0.95, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10 w-full max-w-xl"
                        >
                            <div className="mb-8 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#161b22] border border-slate-700 mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    {React.createElement(questions[currentNode].icon, { className: "w-10 h-10 text-brand-orange" })}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono tracking-tight">
                                    {questions[currentNode].text}
                                </h3>
                                <p className="text-slate-400 text-lg">
                                    {questions[currentNode].subtext}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <button
                                    onClick={() => handleAnswer('yes')}
                                    className="group relative overflow-hidden p-6 bg-[#161b22] border border-slate-700 rounded-xl hover:border-green-500 transition-all duration-300 text-left"
                                >
                                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="block text-xs font-mono text-slate-500 mb-2 group-hover:text-green-500">INPUT: TRUE</span>
                                    <span className="text-2xl font-bold text-white group-hover:text-green-400 flex items-center gap-2">
                                        YES <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </span>
                                </button>

                                <button
                                    onClick={() => handleAnswer('no')}
                                    className="group relative overflow-hidden p-6 bg-[#161b22] border border-slate-700 rounded-xl hover:border-red-500 transition-all duration-300 text-left"
                                >
                                    <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="block text-xs font-mono text-slate-500 mb-2 group-hover:text-red-500">INPUT: FALSE</span>
                                    <span className="text-2xl font-bold text-white group-hover:text-red-400 flex items-center gap-2">
                                        NO <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className={`relative z-10 w-full max-w-lg p-1 rounded-2xl bg-linear-to-b ${results[currentNode].borderColor.replace('border-', 'from-')} to-transparent`}
                        >
                            <div className={`bg-brand-dark rounded-xl p-8 text-center border ${results[currentNode].borderColor}`}>
                                <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${results[currentNode].bg} ${results[currentNode].color} ring-4 ring-opacity-20 ring-current`}>
                                    {React.createElement(results[currentNode].icon, { className: "w-12 h-12" })}
                                </div>

                                <div className="font-mono text-sm mb-2 opacity-70 uppercase tracking-widest">Analysis Complete</div>
                                <h3 className={`text-3xl md:text-4xl font-bold mb-6 font-mono ${results[currentNode].color}`}>
                                    {results[currentNode].title}
                                </h3>

                                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                    {results[currentNode].desc}
                                </p>

                                <div className="mb-8">
                                    {/* Dynamic CTA based on result */}
                                    {currentNode === 'manual' && (
                                        <a href="/why-custom" className="block w-full py-4 px-6 bg-[#161b22] hover:bg-[#1c2128] border border-gray-700 text-white rounded-lg font-bold text-center transition-all hover:scale-[1.02]">
                                            Why Manual Processes Fail →
                                        </a>
                                    )}
                                    {currentNode === 'human' && (
                                        <a href="https://empowervaservices.co.uk" target="_blank" rel="noopener noreferrer" className="block w-full py-4 px-6 bg-pink-900/40 hover:bg-pink-900/60 border border-pink-500/50 text-white rounded-lg font-bold text-center transition-all hover:scale-[1.02]">
                                            Explore VA Support Options →
                                        </a>
                                    )}
                                    {currentNode === 'api' && (
                                        <a href="/contact" className="block w-full py-4 px-6 bg-blue-900/40 hover:bg-blue-900/60 border border-blue-500/50 text-white rounded-lg font-bold text-center transition-all hover:scale-[1.02]">
                                            Discuss Custom Development →
                                        </a>
                                    )}
                                    {currentNode === 'script' && (
                                        <a href="/contact" className="block w-full py-4 px-6 bg-green-900/40 hover:bg-green-900/60 border border-green-500/50 text-white rounded-lg font-bold text-center transition-all hover:scale-[1.02]">
                                            Start Your Automation →
                                        </a>
                                    )}
                                </div>

                                <button
                                    onClick={reset}
                                    className="px-8 py-3 bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg font-mono text-sm transition-colors border border-slate-700 w-full"
                                >
                  // RESTART_SEQUENCE
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer / Breadcrumbs */}
            <div className="p-4 border-t border-slate-800 bg-[#161b22] flex justify-center">
                <div className="flex items-center gap-2 text-xs font-mono">
                    <span className={history.length === 0 && !isResult ? "text-brand-orange font-bold" : "text-slate-600"}>START</span>
                    <span className="text-slate-700">→</span>
                    <span className={history.length > 0 || isResult ? "text-brand-orange font-bold" : "text-slate-600"}>ANALYSIS</span>
                    <span className="text-slate-700">→</span>
                    <span className={isResult ? "text-brand-orange font-bold" : "text-slate-600"}>RESULT</span>
                </div>
            </div>
        </div>
    );
}
