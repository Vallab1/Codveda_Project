import React, { useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import SearchBar from "../component/SearchBar";
import UserCard from "../component/UserCard";
import Loader from "../component/Loader";

const Search = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searched, setSearched] = useState(false);

    const fetchUsers = useCallback(
        debounce(async (query) => {
            if (!query) {
                setUsers([]);
                setSearched(false);
                return;
            }

            setLoading(true);
            setError("");
            setSearched(true);

            try {
                const res = await axios.get(
                    `https://api.github.com/search/users?q=${query}`
                );

                if (res.data.items.length === 0) {
                    setError("No users found");
                    setUsers([]);
                } else {
                    setUsers(res.data.items);
                }
            } catch {
                setError("Unable to fetch data. Please try again.");
            } finally {
                setLoading(false);
            }
        }, 500),
        []
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white p-6">
            {/* HEADER */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                    Search GitHub Users
                </h2>
                <p className="text-gray-400">
                    Type a username to discover GitHub profiles instantly
                </p>
            </div>

            {/* SEARCH BAR */}
            <SearchBar onSearch={fetchUsers} />

            {/* STATUS */}
            {loading && <Loader />}

            {error && (
                <div className="mt-6 max-w-md mx-auto bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center text-red-400">
                    {error}
                </div>
            )}

            {!loading && searched && users.length > 0 && (
                <p className="text-center text-gray-400 mt-6">
                    Showing <span className="font-semibold">{users.length}</span> results
                </p>
            )}

            {/* RESULTS */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>

            {!loading && searched && users.length === 0 && !error && (
                <p className="text-center text-gray-500 mt-10">
                    Start typing to search GitHub users 🔍
                </p>
            )}
        </div>
    );
};

export default Search;
