import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Footer from "./Footer";

const About = () => {
    const { theme, setTheme } = useContext(AppContext);

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-500
            ${theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-100"}`}>

            {/* Page Content */}
            <div className="flex flex-col items-center justify-center flex-grow p-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
                    About Codveda
                </h1>

                <p className="mb-6 text-center max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
                    Codveda is a leading technology and software solutions company that specializes in
                    delivering innovative digital services. From web and mobile development to cloud
                    solutions and IT consulting, Codveda focuses on helping businesses grow and achieve
                    their technology goals. They provide a learning-friendly environment for interns and
                    students to gain hands-on experience, work on real projects, and develop essential
                    skills for the IT industry.
                </p>

                <p className="mb-4 text-sm sm:text-base">
                    Current Theme: <span className="font-semibold">{theme}</span>
                </p>

                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 text-sm sm:text-base"
                >
                    Toggle Theme
                </button>
            </div>

            {/* Footer Full Width */}
            <Footer />
        </div>
    );
};

export default About;
