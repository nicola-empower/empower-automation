import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, SquareCheck, ArrowRight, Lock, CheckCircle, Loader2 } from 'lucide-react';

const ASSETS = {
    checklist: {
        icon: SquareCheck,
        color: 'text-green-500',
        borderColor: 'border-green-500',
        bg: 'bg-green-500/10',
        button: 'bg-green-600 hover:bg-green-500',
        label: 'CHECKLIST_PROTOCOL'
    },
    whitepaper: {
        icon: FileText,
        color: 'text-blue-500',
        borderColor: 'border-blue-500',
        bg: 'bg-blue-500/10',
        button: 'bg-blue-600 hover:bg-blue-500',
        label: 'INTELLIGENCE_REPORT'
    },
    assessment: {
        icon: Lock,
        color: 'text-brand-magenta',
        borderColor: 'border-brand-magenta',
        bg: 'bg-brand-magenta/10',
        button: 'bg-brand-magenta hover:bg-brand-magenta/80',
        label: 'ACCESS_ASSESSMENT'
    }
};

export default function LeadMagnet({ type = 'whitepaper', title, description, assetUrl = '#' }) {
    const theme = ASSETS[type] || ASSETS.whitepaper;
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('sending');

        try {
            // Reusing the Google Apps Script endpoint from ROI Calculator
            const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx5N5VINi4h1tZKV1o-MFbdmAP1kgpCYOZVbFvLec1v4Tp9_WRY53vVJjqBohpYAZNz/exec";

            await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: `LEAD_MAGNET_${type.toUpperCase()}`,
                    email: email,
                    data: {
                        resource: title,
                        assetUrl: new URL(assetUrl, window.location.origin).href,
                        timestamp: new Date().toISOString()
                    }
                })
            });

            // Simulate delay for effect if fetch is too fast (though likely not needed with no-cors)
            setTimeout(() => {
                setStatus('success');
            }, 1000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div className={`relative overflow-hidden rounded-xl border ${theme.borderColor}/30 bg-brand-dark p-1 shadow-2xl group`}>
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            <div className={`absolute -right-10 -top-10 w-40 h-40 ${theme.bg} blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>

            <div className="relative bg-[#0d1117]/90 backdrop-blur-xl rounded-lg p-6 md:p-8 h-full flex flex-col">

                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border ${theme.borderColor}/30 ${theme.bg} ${theme.color}`}>
                        <theme.icon className="w-3 h-3" />
                        {theme.label}
                    </div>
                    {status === 'success' && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="bg-green-500/20 text-green-500 p-1 rounded-full"
                        >
                            <CheckCircle className="w-4 h-4" />
                        </motion.div>
                    )}
                </div>

                {/* Content */}
                <div className="mb-8 grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Form / Success State */}
                <AnimatePresence mode='wait'>
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-center bg-green-900/10 border border-green-500/30 rounded-lg p-4"
                        >
                            <p className="text-green-400 font-bold mb-2">Access Granted</p>
                            <p className="text-xs text-gray-400 mb-4">We've sent the resource to {email}</p>

                            <a
                                href={assetUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-bold text-sm transition-all ${theme.button} w-full justify-center`}
                            >
                                <Download className="w-4 h-4" /> Download Now
                            </a>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-3"
                        >
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="enter_valid_email_address..."
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'sending'}
                                    className={`w-full bg-[#0a0c10] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-${theme.color.split('-')[1]}-500 transition-colors placeholder:text-gray-600 font-mono`}
                                />
                                {status === 'sending' && (
                                    <div className="absolute right-3 top-3">
                                        <Loader2 className={`w-5 h-5 animate-spin ${theme.color}`} />
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-bold transition-all transform active:scale-95 ${theme.button} ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
                            >
                                {status === 'sending' ? 'Processing...' : (
                                    <>
                                        Unlock Access <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            <p className="text-[10px] text-gray-600 text-center flex items-center justify-center gap-1">
                                <Lock className="w-3 h-3" /> Secure SSL Encryption. No Spam.
                            </p>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
