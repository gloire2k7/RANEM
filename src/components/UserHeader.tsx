import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const UserHeader = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-10 py-0 flex justify-between items-center">
        <NavLink to="/">
          <img src={Logo} alt="Avocado Oils" className="w-48" />
        </NavLink>

        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/UserHome"
              className={({ isActive }) =>
                `group relative flex items-center text-xl ${
                  isActive ? "text-high" : "text-gray-700 hover:text-high"
                }`
              }
            >
              <span>Home</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-high transition-all duration-300 group-hover:w-full"
              ></span>
            </NavLink>
          </li>
          <li className="relative group ">
  
    <span className="text-xl hover:text-high">Products</span>
    <span
      className="absolute bottom-0 left-0 w-0 h-1 bg-high transition-all duration-300 group-hover:w-full"
    ></span>
  {/* Dropdown Menu */}
  <ul className="absolute left-0 hidden bg-white shadow-md rounded-md group-hover:block z-10 mt-2 w-60">
    <li>
      <NavLink
        to="/PlantiaEssenceProducts"
        className="block px-4 py-2 hover:bg-silver text-cc"
      >
        Plantia Essence Products
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/RanemSolutionProducts"
        className="block px-4 py-2 hover:bg-silver text-cc"
      >
        Ranem Solution Products
      </NavLink>
    </li>
  </ul>
</li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `group relative flex items-center text-xl ${
                  isActive ? "text-high" : "text-slate-800 hover:text-high"
                }`
              }
            >
              <span>Cart</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-high transition-all duration-300 group-hover:w-full"
              ></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group relative flex items-center text-xl ${
                  isActive ? "text-high" : ""
                }`
              }
            >
              <button className="ml-4 text-red border-2 rounded px-2 py-1 hover:bg-red hover:text-sub2">
                LogOut
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserHeader;
