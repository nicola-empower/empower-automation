import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export default function RoiCalculator() {
    // 1. STATE: The Inputs
    const [inputs, setInputs] = useState({
        frequency: 10,      // Times per week
        minutes: 15,        // Mins per task
        rate: 30,           // Hourly rate (£)
        saasCost: 0,        // Current Zapier/Make spend (£/mo)
        buildCost: 750      // Estimated Custom Build Cost (Hidden variable or slider)
    });

    const [results, setResults] = useState(null);

    // 2. THE MATH ENGINE
    useEffect(() => {
        // Annual Manual Cost
        const hoursPerWeek = (inputs.frequency * inputs.minutes) / 60;
        const weeklyCost = hoursPerWeek * inputs.rate;
        const annualManualCost = weeklyCost * 52;
        const monthlyManualCost = weeklyCost * 4.33;

        // Annual SaaS Cost
        const annualSaasCost = inputs.saasCost * 12;

        // Total Annual "Rental" Cost (Manual + SaaS)
        const totalAnnualDrain = annualManualCost + annualSaasCost;

        // Break Even Point (Months)
        // How long until the £750 custom script is cheaper than doing it manually?
        const totalMonthlyDrain = monthlyManualCost + Number(inputs.saasCost);
        const breakEvenMonths = totalMonthlyDrain > 0
            ? (inputs.buildCost / totalMonthlyDrain).toFixed(1)
            : 0;

        // 3-Year Savings (Asset Value)
        // (Manual Cost * 3) - (Build Cost)
        const threeYearSavings = (totalAnnualDrain * 3) - inputs.buildCost;

        setResults({
            annualDrain: Math.round(totalAnnualDrain),
            breakEven: breakEvenMonths,
            threeYearSavings: Math.round(threeYearSavings),
            hoursSaved: Math.round(hoursPerWeek * 52)
        });
    }, [inputs]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: Number(value) }));
    };

    // 3. LEAD MAGNET LOGIC
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const sendReport = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('sending');

        try {
            // Replace with your actual Web App URL
            const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx5N5VINi4h1tZKV1o-MFbdmAP1kgpCYOZVbFvLec1v4Tp9_WRY53vVJjqBohpYAZNz/exec";

            await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'ROI_CALCULATOR',
                    email: email,
                    data: {
                        inputs,
                        results,
                        timestamp: new Date().toISOString()
                    }
                })
            });

            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Error sending report:', error);
            setStatus('error');
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono text-sm">

            {/* LEFT: CONFIGURATION PANEL */}
            <div className="bg-brand-dark border border-slate-800 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-6 text-slate-400 border-b border-slate-800 pb-4">
                    <Calculator className="w-4 h-4 text-green-500" />
                    <span>CONFIG_PARAMETERS</span>
                </div>

                <div className="space-y-6">

                    {/* Input 1: Frequency */}
                    <div>
                        <label className="block text-slate-400 mb-2">TASK_FREQUENCY (Weekly)</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range" name="frequency" min="1" max="100"
                                value={inputs.frequency} onChange={handleChange}
                                className="w-full accent-green-500 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="bg-slate-800 text-white px-3 py-1 rounded border border-slate-700 w-16 text-center">
                                {inputs.frequency}
                            </span>
                        </div>
                    </div>

                    {/* Input 2: Duration */}
                    <div>
                        <label className="block text-slate-400 mb-2">TIME_PER_TASK (Minutes)</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range" name="minutes" min="1" max="120"
                                value={inputs.minutes} onChange={handleChange}
                                className="w-full accent-green-500 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="bg-slate-800 text-white px-3 py-1 rounded border border-slate-700 w-16 text-center">
                                {inputs.minutes}
                            </span>
                        </div>
                    </div>

                    {/* Input 3: Hourly Rate */}
                    <div>
                        <label className="block text-slate-400 mb-2">HOURLY_RATE (£)</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-slate-500">£</span>
                            <input
                                type="number" name="rate"
                                value={inputs.rate} onChange={handleChange}
                                className="w-full bg-slate-900 border border-slate-700 text-white rounded p-2 pl-8 focus:border-green-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Input 4: SaaS Cost */}
                    <div>
                        <label className="block text-slate-400 mb-2">CURRENT_SAAS_SPEND (Zapier/Make £/mo)</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-slate-500">£</span>
                            <input
                                type="number" name="saasCost"
                                value={inputs.saasCost} onChange={handleChange}
                                className="w-full bg-slate-900 border border-slate-700 text-white rounded p-2 pl-8 focus:border-green-500 outline-none"
                            />
                        </div>
                        <p className="text-[10px] text-slate-600 mt-1">If 0, we assume pure manual labor.</p>
                    </div>

                </div>
            </div>

            {/* RIGHT: TERMINAL OUTPUT */}
            <div className="flex flex-col gap-4">

                {/* Card 1: The Loss */}
                <div className="bg-brand-dark border border-red-900/30 rounded-xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertTriangle className="w-12 h-12 text-red-500" />
                    </div>
                    <h3 className="text-slate-500 mb-1">&gt; DETECTED_ANNUAL_DRAIN</h3>
                    <div className="text-4xl font-bold text-red-500 font-mono tracking-tighter">
                        -£{results?.annualDrain.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                        You are losing <span className="text-white">{results?.hoursSaved} hours</span> per year to this task.
                    </p>
                </div>

                {/* Card 2: The Break Even */}
                <div className="bg-brand-dark border border-blue-900/30 rounded-xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TrendingUp className="w-12 h-12 text-blue-500" />
                    </div>
                    <h3 className="text-slate-500 mb-1">&gt; ROI_TIMELINE</h3>
                    <div className="text-4xl font-bold text-blue-400 font-mono tracking-tighter">
                        {results?.breakEven} Months
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                        Time until a bespoke £{inputs.buildCost} automation pays for itself.
                    </p>
                </div>

                {/* Card 3: The 3-Year Wealth (The Pitch) */}
                <div className="bg-green-900/10 border border-green-500/30 rounded-xl p-6 relative overflow-hidden grow flex flex-col justify-between">
                    <div>
                        <h3 className="text-green-600 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" /> PROJECTED_ASSET_VALUE (3 Years)
                        </h3>
                        <div className="text-5xl font-bold text-white font-mono tracking-tighter mb-4">
                            £{results?.threeYearSavings.toLocaleString()}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <a href="/contact" className="inline-flex items-center justify-center w-full gap-2 bg-green-600 hover:bg-green-500 text-black px-6 py-3 rounded font-bold transition-colors">
                            Build This Asset <ArrowRight className="w-4 h-4" />
                        </a>

                        {/* Email Capture Form */}
                        <form onSubmit={sendReport} className="pt-4 border-t border-green-500/20">
                            {status === 'success' ? (
                                <div className="text-green-400 text-center text-xs bg-green-900/20 p-2 rounded border border-green-500/30">
                                    ✓ Report sent to your inbox!
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Email me this report..."
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-brand-dark border border-green-500/30 text-white text-xs rounded px-3 py-2 w-full focus:outline-none focus:border-green-500"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="bg-green-900/40 hover:bg-green-900/60 text-green-400 text-xs px-3 py-2 rounded border border-green-500/30 transition-colors whitespace-nowrap"
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Send'}
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
