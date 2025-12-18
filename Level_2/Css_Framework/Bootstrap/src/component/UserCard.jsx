import React, { useState } from "react";
import axios from "axios";

const UserCard = ({ user }) => {
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchRepos = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await axios.get(
                `https://api.github.com/users/${user.login}`
            );
            setRepos(res.data.public_repos);
        } catch {
            setError("Failed to load repositories");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center">
            <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 mx-auto rounded-full mb-3"
            />

            <h3 className="font-bold text-lg mb-2">{user.login}</h3>

            <button
                onClick={fetchRepos}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
                View Profile
            </button>

            {loading && <p className="text-sm mt-2">Loading...</p>}

            {repos !== null && !loading && (
                <p className="mt-2 text-green-600 font-semibold">
                    Repositories: {repos}
                </p>
            )}

            {error && (
                <p className="mt-2 text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
};

export default UserCard;
