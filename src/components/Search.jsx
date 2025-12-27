import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, Loader2 } from 'lucide-react';

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (isOpen && posts.length === 0) {
            setLoading(true);
            fetch('/search.json')
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Failed to load search index', err);
                    setLoading(false);
                });
        }
        if (isOpen) {
            setTimeout(() => searchInputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(lowerQuery) ||
            post.description.toLowerCase().includes(lowerQuery) ||
            post.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
        ).slice(0, 5); // Limit to 5 results

        setResults(filtered);
    }, [query, posts]);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Open search"
            >
                <SearchIcon className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="w-full max-w-2xl bg-brand-dark border border-gray-800 rounded-lg shadow-2xl overflow-hidden"
                        role="dialog"
                        aria-modal="true">
                        <div className="flex items-center p-4 border-b border-gray-800">
                            <SearchIcon className="w-5 h-5 text-gray-500 mr-3" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search system logs..."
                                className="flex-1 bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder-gray-500 font-mono"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-white ml-3"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {loading && (
                            <div className="p-4 text-center text-gray-500">
                                <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                                <span>Loading index...</span>
                            </div>
                        )}

                        {!loading && results.length > 0 && (
                            <ul className="divide-y divide-gray-800">
                                {results.map((post) => (
                                    <li key={post.slug}>
                                        <a
                                            href={`/system-logs/${post.slug}`}
                                            className="block p-4 hover:bg-white/5 transition-colors group"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <h3 className="text-brand-orange font-bold font-mono text-sm mb-1 group-hover:text-brand-gold transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-400 text-xs line-clamp-1">
                                                {post.description}
                                            </p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {!loading && query && results.length === 0 && (
                            <div className="p-4 text-center text-gray-500 font-mono text-sm">
                                No results found for "{query}"
                            </div>
                        )}

                        <div className="bg-black/30 p-2 text-right text-xs text-gray-600 font-mono border-t border-gray-800">
                            [ESC] to close
                        </div>
                    </div>

                    {/* Overlay click to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setIsOpen(false)}></div>
                </div>
            )}
        </>
    );
}
