import { motion } from "framer-motion";

export default function DataPipeline() {
    return (
        <div className="w-full h-64 md:h-96 relative bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden flex items-center justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="relative z-10 flex items-center gap-8 md:gap-16 scale-75 md:scale-100">

                {/* Left: Messy Inputs */}
                <div className="flex flex-col gap-4">
                    {["Gmail", "Sheets", "Forms"].map((app, i) => (
                        <motion.div
                            key={app}
                            className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 text-xs text-gray-400 font-mono"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                        >
                            {app}
                        </motion.div>
                    ))}
                </div>

                {/* Middle: The Processor (Code) */}
                <div className="relative">
                    {/* Connecting Lines */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] -z-10 pointer-events-none">
                        <motion.path
                            d="M 0 100 L 150 100 L 300 100"
                            stroke="#F26F21"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="10 5"
                            animate={{ strokeDashoffset: [0, -100] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>

                    <motion.div
                        className="w-32 h-32 bg-brand-dark border-2 border-brand-orange rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(242,111,33,0.3)]"
                        animate={{ boxShadow: ["0 0 20px rgba(242,111,33,0.2)", "0 0 40px rgba(242,111,33,0.6)", "0 0 20px rgba(242,111,33,0.2)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="text-center">
                            <div className="text-brand-orange font-mono text-xl font-bold">&lt;/&gt;</div>
                            <div className="text-[10px] text-gray-500 font-mono mt-1">SCRIPT.GS</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Structured Output */}
                <div className="flex flex-col gap-4">
                    <motion.div
                        className="w-16 h-16 bg-brand-dark border border-brand-magenta rounded-lg flex items-center justify-center text-brand-magenta shadow-[0_0_15px_rgba(198,36,110,0.3)]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </motion.div>
                    <motion.div
                        className="w-16 h-16 bg-brand-dark border border-green-500 rounded-lg flex items-center justify-center text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 1.5 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
