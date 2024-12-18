import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-green-500 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Avocado Oil Shop
      </Link>
      <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
