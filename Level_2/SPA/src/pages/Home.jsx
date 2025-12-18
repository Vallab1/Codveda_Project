import React from 'react';
import Footer from '../pages/Footer';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            {/* Hero Section */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to Codveda Internship
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Learn real-world skills, work on industry-ready projects, and kickstart your tech career with Codveda.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition">
                        Get Started
                    </button>

                    <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition">
                        Explore Programs
                    </button>
                </div>
            </header>

            {/* About Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">About Codveda</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Codveda empowers students and fresh graduates with practical experience
                    through structured internships, mentorship, and hands-on projects.
                </p>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Codveda?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Hands-on Coding", icon: "💻" },
                            { title: "Industry Exposure", icon: "🏢" },
                            { title: "Expert Mentorship", icon: "🤝" },
                            { title: "Career Growth", icon: "🚀" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-gray-50 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">
                                    Learn through real-world tasks and guided mentorship.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="bg-blue-600 text-white py-16 text-center px-4">
                <h2 className="text-3xl font-bold mb-4">
                    Start Your Internship Journey Today
                </h2>
                <p className="max-w-2xl mx-auto mb-8 text-lg">
                    Join Codveda and transform your learning into real-world experience.
                </p>

                <a
                    href="https://www.codveda.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition">
                        Visit Codveda
                    </button>
                </a>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
