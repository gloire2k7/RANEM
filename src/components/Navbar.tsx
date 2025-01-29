import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-green-500 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Avocado Oil Shop
      </Link>

      <ul className="flex items-center gap-6">
        <li className="relative group">
          <span
            className="cursor-pointer"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            Products
          </span>
          {isDropdownOpen && (
            <ul className="absolute left-0 bg-white text-black p-2 rounded-md shadow-md mt-2 space-y-2">
              <li>
                <Link to="/products/plantia-essence" className="block px-4 py-2">
                  Plantia Essence Products
                </Link>
              </li>
              <li>
                <Link to="/products/ranem-solution" className="block px-4 py-2">
                  Ranem Solution Products
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          {user ? (
            <div className="flex items-center gap-4">
              <span>Welcome, {user.role}</span>
              <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-white text-green-500 px-4 py-2 rounded">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
