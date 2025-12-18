import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Register
                </h2>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        Register
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
