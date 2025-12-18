import React from "react";

const SearchBar = ({ onSearch }) => (
    <div className="flex justify-center mb-6">
        <input
            type="text"
            className="w-3/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brandPrimary dark:bg-gray-800 dark:text-white"
            placeholder="Search GitHub users..."
            onChange={(e) => onSearch(e.target.value)}
        />
    </div>
);

export default SearchBar;
