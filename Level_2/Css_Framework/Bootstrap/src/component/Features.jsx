import React from "react";

const features = [
    { title: "Pre-built Components", desc: "Use Tailwind components to build UI fast." },
    { title: "Custom Theme", desc: "Colors, fonts, and spacing according to brand." },
    { title: "Responsive Design", desc: "Optimized for mobile, tablet, desktop." },
    { title: "Dark Mode", desc: "Toggle light/dark mode easily." },
];

const Features = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transform transition">
                        <h3 className="font-bold text-brandPrimary dark:text-brandAccent text-xl mb-2">{f.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
