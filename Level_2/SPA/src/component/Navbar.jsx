import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">

                <div className="flex items-center justify-between">

                    <h1 className="text-xl font-bold text-blue-600">
                        Codveda
                    </h1>

                    <div className="hidden md:flex flex-1 items-center justify-center gap-8">
                        <NavLink to="/" end className={({ isActive }) => isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) => isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }>
                            About
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) => isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }>
                            Contact
                        </NavLink>
                    </div>

                    {/* Desktop Login */}
                    <div className="hidden md:block">
                        <NavLink to="/login" className={({ isActive }) => isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }>
                            Login
                        </NavLink>
                    </div>

                    {/* Hamburger Button (Mobile) */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 text-center">
                        <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700"
                        }>
                            Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700"
                        }>
                            About
                        </NavLink>
                        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700"
                        }>
                            Contact
                        </NavLink>
                        <NavLink to="/login" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700"
                        }>
                            Login
                        </NavLink>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
