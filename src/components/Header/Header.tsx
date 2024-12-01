import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa"; // Import React Icons
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="border-b border-gray-300">
      <header className="flex justify-between items-center py-6 px-8 transition-all ease-in-out relative">
        <h3 className="text-2xl font-bold m-0 text-black">
          <a href="index.html">Exclusive</a>
        </h3>
        <nav className="flex justify-center gap-8 text-lg font-semibold">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Contact</NavLink>
          <NavLink to={"/"}>About</NavLink>
          <NavLink to={"/register"}>Sign in</NavLink>
        </nav>
        <div className="flex items-center gap-8">
          <form className="flex items-center justify-between bg-gray-100 px-6 py-3 w-72 rounded-lg shadow-md">
            <input
              type="text"
              name="desktop-search"
              id="search-desktop"
              placeholder="What are you looking for?"
              className="bg-transparent border-none outline-none placeholder-gray-500 w-full text-lg"
            />
            <FaSearch className="text-gray-600 text-2xl" />
          </form>
          <div className="flex items-center gap-6">
            <a href="#" className="relative flex items-center">
              <FaHeart className="text-gray-600 text-2xl hover:text-red-500 transition-colors duration-200" />
              <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </p>
            </a>
            <a href="#" className="relative flex items-center">
              <FaShoppingCart className="text-gray-600 text-2xl hover:text-green-500 transition-colors duration-200" />
              <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </p>
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
