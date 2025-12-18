// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; 2025 Codveda. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a
                        href="https://www.linkedin.com/company/codveda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 text-sm"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.facebook.com/codveda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 text-sm"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/codveda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 text-sm"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
