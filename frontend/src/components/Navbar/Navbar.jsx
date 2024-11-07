import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { CiSquarePlus } from "react-icons/ci";
import PropTypes from 'prop-types';

const Navbar = ({toggleColorMode, darkMode}) => {
  Navbar.propTypes = {
    toggleColorMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
  };
  
  return (
    <div className="max-w mx-auto px-4 py-4 bg-gradient-to-r from-cyan-400 to-blue-500">
      <div className="flex flex-col sm:flex-row items-center justify-between h-16 space-y-4 sm:space-y-0 ">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-800 to-blue-500">
          <Link to="/">Product Store 🛒</Link>
        </h1>

        <div className="flex items-center space-x-4">
          <Link to="/createpage">
            <button className="p-2 text-gray-600 dark:text-gray-200 hover:text-blue-500 rounded transition-all">
              <CiSquarePlus className="text-xl" />
            </button>
          </Link>

          <button onClick={toggleColorMode} className="p-2 text-gray-600 dark:text-gray-200 hover:text-blue-500 rounded transition-all">
            {darkMode ? <LuSun size={20} /> : <IoMoon size={20} />}
          </button>
        </div>
      </div>
    </div>

);

};


export default Navbar;
