const SearchBar = ({ onSearch }) => {
    return (
        <div className="flex justify-center mt-6">
            <input
                type="text"
                placeholder="Search GitHub users..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full max-w-md px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
    );
};

export default SearchBar;
