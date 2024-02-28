import { Link } from "react-router-dom";

const Header = ({ user, onToggleSidebar }) => {
  return (
    <div
      className="bg-gray-900 text-white h-16 flex items-center justify-between p-4 "
      style={{ height: "70px !important" }}
    >
      <button
        onClick={onToggleSidebar}
        className="text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
      <div>Welcome, {user.name}</div>
      <div>
        <Link to={"/auth"}>Login</Link>
      </div>
    </div>
  );
};

export default Header;
