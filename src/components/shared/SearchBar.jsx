const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <section className="flex flex-col w-full mr-5">
      <label className="block text-gray-600 mb-2">Search:</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="form-input w-full rounded-md border p-2 pl-10 focus:outline-none focus:border-blue-500 hover:border-blue-300"
        />
        <div className="absolute left-3 top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#d1d1d1"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
