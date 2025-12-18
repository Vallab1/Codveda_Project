import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-brandSecondary text-white py-20 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-6">
                    Build <span className="text-brandAccent">Responsive</span> UI
                </h1>
                <p className="text-lg mb-6">Create scalable and modern interfaces with React + Tailwind CSS.</p>
                <Link to="/search" className="bg-brandPrimary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Get Started
                </Link>
            </div>
        </section>
    );
};

export default Hero;
