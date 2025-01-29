import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const AdminHeader = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-10 py-0 flex justify-between items-center">
        <NavLink to="/">
          <img src={Logo} alt="Avocado Oils" className="w-48" />
        </NavLink>

        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/AdminHome"
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
          <li>
            <NavLink
              to="/AdminDashboard"
              className={({ isActive }) =>
                `group relative flex items-center text-xl ${
                  isActive ? "text-high" : "text-gray-700 hover:text-high"
                }`
              }
            >
              <span>Dashboard</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-high transition-all duration-300 group-hover:w-full"
              ></span>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/ManageProducts"
              className={({ isActive }) =>
                `group relative flex items-center text-xl ${
                  isActive ? "text-high" : "text-gray-700 hover:text-high"
                }`
              }
            >
              <span>Products</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-high transition-all duration-300 group-hover:w-full"
              ></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ManageOrders"
              className={({ isActive }) =>
                `group relative flex items-center text-xl ${
                  isActive ? "text-high" : "text-gray-700 hover:text-high"
                }`
              }
            >
              <span>Orders</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-high transition-all duration-300 group-hover:w-full"
              ></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ManageFeedback"
              className={({ isActive }) =>
                `group relative flex items-center text-xl ${
                  isActive ? "text-high" : "text-gray-700 hover:text-high"
                }`
              }
            >
              <span>Feedbacks</span>
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
                Logout
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminHeader;
