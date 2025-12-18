import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    TailwindCSS
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/search"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Search Users
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/search"
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Search Users
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
