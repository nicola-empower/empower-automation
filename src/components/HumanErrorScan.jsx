import React, { useState, useEffect } from 'react';
import { AlertTriangle, ShieldCheck, Activity, Terminal, Database } from 'lucide-react';

export default function HumanErrorScan() {
    // 1. STATE: The Inputs
    const [inputs, setInputs] = useState({
        records: 50,       // Items per week (Invoices, Leads)
        fields: 5,         // Data points per item (Name, Date, Price, Email, ID)
        errorRate: 3       // Standard human error rate (%)
    });

    const [stats, setStats] = useState({
        totalPoints: 0,
        errorCount: 0,
        integrity: 100
    });

    // 2. THE LOGIC ENGINE
    useEffect(() => {
        // Annual Calculation
        const weeklyPoints = inputs.records * inputs.fields;
        const annualPoints = weeklyPoints * 52;

        // The "Error" Math
        // We use Math.ceil because you can't make half an error
        const annualErrors = Math.ceil(annualPoints * (inputs.errorRate / 100));

        // "System Integrity" Score
        // Visual metric: How "corrupted" is the database?
        // We deduct integrity based on error volume, clamped at 0
        let calculatedIntegrity = 100 - (annualErrors / 50);
        if (calculatedIntegrity < 0) calculatedIntegrity = 0;

        setStats({
            totalPoints: annualPoints,
            errorCount: annualErrors,
            integrity: Math.round(calculatedIntegrity)
        });
    }, [inputs]);

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: Number(e.target.value) }));
    };

    // Helper for color coding results
    const getStatusColor = () => {
        if (stats.errorCount < 50) return "text-green-500";
        if (stats.errorCount < 200) return "text-yellow-500";
        return "text-red-500";
    };

    const getBarColor = () => {
        if (stats.integrity > 80) return "bg-green-500";
        if (stats.integrity > 40) return "bg-yellow-500";
        return "bg-red-500";
    };

    return (
        <div className="font-mono text-sm max-w-4xl mx-auto">

            {/* HEADER */}
            <div className="mb-8 border-b border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Activity className="w-6 h-6 text-purple-500" />
                    DATA_INTEGRITY_SCANNER_v1.0
                </h2>
                <p className="text-slate-400 mt-2">
                    Calculate the statistical probability of data corruption in manual workflows.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* LEFT: INPUTS */}
                <div className="bg-brand-dark border border-slate-800 p-6 rounded-xl shadow-lg">
                    <div className="space-y-8">

                        {/* Input 1: Volume */}
                        <div>
                            <div className="flex justify-between text-slate-400 mb-2">
                                <label>RECORDS_PER_WEEK</label>
                                <span className="text-purple-400">{inputs.records}</span>
                            </div>
                            <input
                                type="range" name="records" min="10" max="500" step="10"
                                value={inputs.records} onChange={handleChange}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                            />
                            <p className="text-[10px] text-slate-500 mt-1">e.g. Invoices, New Clients, Orders</p>
                        </div>

                        {/* Input 2: Complexity */}
                        <div>
                            <div className="flex justify-between text-slate-400 mb-2">
                                <label>FIELDS_PER_RECORD</label>
                                <span className="text-purple-400">{inputs.fields}</span>
                            </div>
                            <input
                                type="range" name="fields" min="1" max="20"
                                value={inputs.fields} onChange={handleChange}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                            />
                            <p className="text-[10px] text-slate-500 mt-1">e.g. Name, Date, Address, Amount = 4 Fields</p>
                        </div>

                        {/* Input 3: Error Rate (Hidden/Fixed or Advanced) */}
                        <div className="p-4 bg-slate-900/50 rounded border border-slate-800">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-slate-500 text-xs uppercase">Human Factor Constant</label>
                                <span className="text-slate-300">3%</span>
                            </div>
                            <p className="text-[10px] text-slate-600">
                                Based on standard industry data entry error rates (1-4%).
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT: TERMINAL OUTPUT */}
                <div className="space-y-6">

                    {/* Integrity Visualizer */}
                    <div className="bg-brand-dark border border-slate-800 p-6 rounded-xl">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-slate-400 text-xs">SYSTEM_INTEGRITY</span>
                            <span className={`text-xl font-bold ${getBarColor().replace('bg-', 'text-')}`}>
                                {stats.integrity}%
                            </span>
                        </div>
                        <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full transition-all duration-500 ${getBarColor()}`}
                                style={{ width: `${stats.integrity}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Terminal Log */}
                    <div className="bg-black border border-slate-800 p-6 rounded-xl font-mono text-xs leading-relaxed shadow-2xl relative overflow-hidden">
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-purple-900/5 pointer-events-none"></div>

                        <div className="space-y-2">
                            <p className="text-slate-500">&gt; Initiating analysis sequence...</p>
                            <p className="text-slate-500">&gt; Processing {stats.totalPoints.toLocaleString()} annual data points...</p>

                            <div className="my-4 border-l-2 border-slate-700 pl-3 py-1">
                                <p className="text-slate-300">
                                    <span className="text-purple-500">TOTAL_DATA_VOLUME:</span> {stats.totalPoints.toLocaleString()} / yr
                                </p>
                            </div>

                            {stats.errorCount > 0 ? (
                                <>
                                    <p className="text-red-500 animate-pulse">
                                        &gt; WARNING: DATA CORRUPTION DETECTED
                                    </p>
                                    <p className="text-slate-300">
                                        &gt; ESTIMATED FAILED RECORDS: <span className="text-red-400 font-bold text-lg">{stats.errorCount}</span>
                                    </p>
                                    <p className="text-slate-500 mt-2">
                                        &gt; Impact Analysis: That is {stats.errorCount} wrong addresses, missed payments, or lost leads per year.
                                    </p>
                                </>
                            ) : (
                                <p className="text-green-500">&gt; SYSTEM STABLE.</p>
                            )}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="border border-green-900/30 bg-green-900/10 p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-8 h-8 text-green-500" />
                            <div>
                                <p className="text-green-400 font-bold">Automated Error Rate</p>
                                <p className="text-white text-lg">0.00%</p>
                            </div>
                        </div>
                        <a href="/contact" className="bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded font-bold transition-colors">
                            Fix This
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
