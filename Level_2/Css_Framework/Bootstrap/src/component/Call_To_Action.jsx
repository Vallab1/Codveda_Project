import React from "react";
import { Link } from "react-router-dom";

const Call_To_Action = () => {
    return (
        <section className="bg-brandPrimary text-white py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="mb-6">Build responsive, accessible UI components with Tailwind CSS + React.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/search" className="bg-white text-brandPrimary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Start Searching</Link>
                    <Link to="/" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brandPrimary transition">Back Home</Link>
                </div>
            </div>
        </section>
    );
};

export default Call_To_Action;
