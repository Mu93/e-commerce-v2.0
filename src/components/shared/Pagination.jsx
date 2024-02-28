const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`inline-block mx-1 ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            } rounded-md px-3 py-1 cursor-pointer`}
          >
            <button
              onClick={() => onPageChange(number)}
              className="focus:outline-none"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
