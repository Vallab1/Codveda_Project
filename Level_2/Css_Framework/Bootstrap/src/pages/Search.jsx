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
    const [total, setTotal] = useState(0);
    const [searched, setSearched] = useState(false);

    const fetchUsers = useCallback(
        debounce(async (query) => {
            if (!query) {
                setUsers([]);
                setSearched(false);
                setTotal(0);
                return;
            }

            setLoading(true);
            setError("");
            setSearched(true);

            try {
                const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
                setUsers(res.data.items);
                setTotal(res.data.total_count);
                if (res.data.items.length === 0) setError("No users found");
            } catch {
                setError("Unable to fetch data");
            } finally {
                setLoading(false);
            }
        }, 500),
        []
    );

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Search GitHub Users</h2>
            <SearchBar onSearch={fetchUsers} />
            {loading && <Loader />}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {total > 0 && <p className="text-center text-gray-600 dark:text-gray-300">{total} users found</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {users.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    );
};

export default Search;
