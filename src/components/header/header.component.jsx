import { FaBug, FaPlus } from "react-icons/fa";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-yellow-300 bg-slate-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link to="/" className="mr-5 hover:text-yellow-500">
            Home
          </Link>
          <Link to="/bugs" className="mr-5 hover:text-yellow-500">
            Bugs
          </Link>
          <Link to="/projects" className="mr-5 hover:text-yellow-500">
            Projects
          </Link>
        </nav>
        <Link
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <div className=" text-yellow-300 hover:text-yellow-400 border-2 border-yellow-300 hover:border-yellow-400 p-2 text-xl rounded-full">
            <FaBug />
          </div>
          <span className="ml-3 text-xl text-yellow-300 hover:text-yellow-400">
            Bug-Tracker
          </span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link
            to="/new"
            className="inline-flex items-center font-semibold text-slate-600 bg-yellow-300 hover:bg-yellow-400 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
          >
            <span className=" m-1">
              <FaPlus />
            </span>
            New Bug
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
