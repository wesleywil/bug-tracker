import { FaBug } from "react-icons/fa";

const Header = () => {
  return (
    <header className="text-yellow-300 bg-slate-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-yellow-500">First Link</a>
          <a className="mr-5 hover:text-yellow-500">Second Link</a>
          <a className="mr-5 hover:text-yellow-500">Third Link</a>
          <a className="hover:text-yellow-500">Fourth Link</a>
        </nav>
        <a
          href="#"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <div className=" text-yellow-300 hover:text-yellow-400 border-2 border-yellow-300 hover:border-yellow-400 p-2 text-xl rounded-full">
            <FaBug />
          </div>
          <span className="ml-3 text-xl text-yellow-300 hover:text-yellow-400">
            Bug-Tracker
          </span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center text-slate-600 bg-yellow-300 hover:bg-yellow-400 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
