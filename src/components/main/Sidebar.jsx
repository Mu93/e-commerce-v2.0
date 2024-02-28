import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

const links = [
  { path: "/", title: "Dashboard" },
  { path: "/products", title: "Products" },
  { path: "/categories", title: "Categories" },
];

const Sidebar = ({ isOpen }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`bg-gray-800 text-white h-full w-64 hidden ${
        isOpen ? "md:block" : "hidden"
      } fixed top-0 left-0`}
    >
      <Logo />

      {links.map((link, i) => (
        <div
          key={i}
          className={`mb-2 flex justify-center items-center flex-col cursor-pointer hover:bg-blue-400 ${
            pathname === link.path ? "bg-blue-400" : ""
          }`}
        >
          <Link className="w-full h-full text-center p-4" to={link.path}>
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
