import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Page Content */}
            <div className="flex flex-col items-center justify-center flex-grow p-4">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h1>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white p-6 rounded shadow-md"
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Message"
                            rows="5"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Footer Full Width */}
            <Footer />
        </div>
    );
};

export default Contact;
