import { useState } from 'react';
import { motion } from 'framer-motion';

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

export default function BusinessFitQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (score: string) => {
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
        }, {} as Record<string, number>);

        const maxScore = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        return maxScore;
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
    };

    return (
        <div className="bg-brand-dark border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto shadow-2xl">
            {!showResult ? (
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-brand-gold font-mono text-sm">QUESTION {currentQuestion + 1}/{questions.length}</span>
                        <div className="w-32 h-2 bg-gray-800 rounded-full">
                            <div
                                className="h-full bg-brand-orange rounded-full transition-all duration-300"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                        {questions[currentQuestion].text}
                    </h3>

                    <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option.score)}
                                className="w-full text-left p-4 rounded-lg border border-gray-700 hover:border-brand-magenta hover:bg-brand-magenta/10 transition-all text-gray-300 hover:text-white group"
                            >
                                <span className="inline-block w-6 h-6 rounded-full border border-gray-600 mr-3 text-center text-xs leading-5 text-gray-500 group-hover:border-brand-magenta group-hover:text-brand-magenta">
                                    {String.fromCharCode(65 + index)}
                                </span>
                                {option.text}
                            </button>
                        ))}
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">📊</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">Analysis Complete</h3>

                    {calculateResult() === 'A' && (
                        <div className="bg-green-900/20 border border-green-500/50 p-6 rounded-lg mb-8">
                            <h4 className="text-xl font-bold text-green-400 mb-2">You're Already Custom-Tailored!</h4>
                            <p className="text-gray-300">Your business is a shining example of efficiency. Your systems are robust, valuable assets. Keep up the fantastic work!</p>
                        </div>
                    )}

                    {calculateResult() === 'B' && (
                        <div className="bg-yellow-900/20 border border-yellow-500/50 p-6 rounded-lg mb-8">
                            <h4 className="text-xl font-bold text-yellow-400 mb-2">Your Off-the-Rack Solution is Wearing Thin.</h4>
                            <p className="text-gray-300">Your business is running, but you're feeling the pinch of a solution that doesn't quite fit. You're losing time to frustrating workarounds and paying for things you don't need.</p>
                        </div>
                    )}

                    {calculateResult() === 'C' && (
                        <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-lg mb-8">
                            <h4 className="text-xl font-bold text-red-400 mb-2">You're in an 'Off-the-Rack' Straitjacket.</h4>
                            <p className="text-gray-300">Your business is being actively held back by fragile, expensive, and complex systems. You are spending too much time and money on solutions that are creating more stress than they solve.</p>
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition-colors">
                            Book Your Free Fitting Session
                        </a>
                        <button onClick={resetQuiz} className="text-gray-400 hover:text-white underline">
                            Retake Quiz
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
