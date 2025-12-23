import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroStats() {
    const [stats, setStats] = useState({ saved: 1420, experience: 2 });

    // ANCHOR DATE: Dec 21, 2024 (Saturday) - Base 1420
    const ANCHOR_DATE = new Date("2024-12-21T00:00:00");
    const BASE_HOURS = 1420;

    // EXPERIENCE START DATE: July 8, 2023
    const EXP_START_DATE = new Date("2023-07-08T00:00:00");

    useEffect(() => {
        const calculateStats = () => {
            const now = new Date();

            // --- Hours Saved Logic ---
            let totalHours = BASE_HOURS;
            let current = new Date(ANCHOR_DATE);

            while (current < now) {
                const day = current.getDay();
                const hour = current.getHours();
                const isWorkingHours = day >= 1 && day <= 5 && hour >= 10 && hour < 18;

                if (isWorkingHours) {
                    totalHours += 24;
                } else {
                    totalHours += 1;
                }
                current.setHours(current.getHours() + 1);
            }

            // --- Experience Logic ---
            // Calculate years difference
            let years = now.getFullYear() - EXP_START_DATE.getFullYear();
            const m = now.getMonth() - EXP_START_DATE.getMonth();
            // If current month is before July, or is July but before the 8th, subtract one year
            if (m < 0 || (m === 0 && now.getDate() < 8)) {
                years--;
            }

            return { saved: totalHours, experience: years };
        };

        // Set initial state
        setStats(calculateStats());

        // Live Ticker (Updating every minute)
        const interval = setInterval(() => {
            setStats(calculateStats());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-12 pt-8 border-t border-gray-800/50 w-full">
            {/* Stat 1: Experience */}
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white font-mono">{stats.experience} Years</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Experience</span>
                </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-800"></div>

            {/* Stat 2: Hours Saved */}
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <motion.span
                            key={stats.saved}
                            initial={{ opacity: 0.5, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl font-bold text-white font-mono tabular-nums"
                        >
                            {stats.saved.toLocaleString()}
                        </motion.span>
                        <span className="text-brand-gold text-xs font-bold">+</span>
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Total Hours Saved</span>
                </div>
            </div>

            {/* Optional visual graph line or extra detail could go here */}
        </div>
    );
}
