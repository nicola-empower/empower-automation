import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SavingsTicker() {
    const [hours, setHours] = useState(1420);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Increment randomly to simulate live data
        const interval = setInterval(() => {
            setHours((prev) => prev + Math.floor(Math.random() * 3));
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#0a0c10] border-b border-gray-800 py-2 px-4 flex justify-center items-center">
            <div className="font-mono text-xs md:text-sm flex items-center gap-2">
                <span className="text-gray-500">SYSTEM_STATUS:</span>
                <span className="text-green-500 font-bold">ONLINE</span>
                <span className="text-gray-700 mx-2">|</span>
                <span className="text-gray-500">TOTAL_HOURS_SAVED:</span>
                <motion.span
                    key={hours}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className="text-brand-gold font-bold tabular-nums"
                >
                    {hours.toLocaleString()}
                </motion.span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-4 bg-brand-magenta inline-block ml-1 align-middle"
                />
            </div>
        </div>
    );
}
