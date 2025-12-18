import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white">

            {/* HERO SECTION */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-24">
                <span className="mb-4 px-4 py-1 text-sm font-semibold text-blue-400 bg-blue-400/10 rounded-full">
                    Powered by GitHub REST API
                </span>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
                    Discover GitHub Developers <br className="hidden md:block" />
                    <span className="text-blue-500">In Real Time</span>
                </h1>

                <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl">
                    A modern platform to search, explore, and analyze GitHub user profiles
                    instantly with fast, debounced API queries.
                </p>

                <Link to="/search" className="mt-10 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-xl">
                    Get Started
                    <span className="text-2xl">🚀</span>
                </Link>
            </section>

            {/* FEATURES SECTION */}
            <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Live Search",
                        desc: "Search GitHub users instantly with debounced API calls for optimal performance.",
                        icon: "⚡",
                    },
                    {
                        title: "Detailed Profiles",
                        desc: "View repositories, followers, and activity using dynamic routing.",
                        icon: "👤",
                    },
                    {
                        title: "Responsive UI",
                        desc: "Fully responsive design that looks perfect on any device.",
                        icon: "📱",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </section>


            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to explore GitHub?
                </h2>
                <p className="text-blue-100 mb-8 text-lg">
                    Start searching developers and discover open-source talent today.
                </p>
                <Link
                    to="/search"
                    className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                    Start Searching Now
                </Link>
            </section>

            {/* FOOTER */}
            <footer className="text-center py-6 text-gray-400 text-sm">
                Built with ❤️ using React, Axios & Tailwind CSS
            </footer>
        </div>
    );
};

export default Home;
