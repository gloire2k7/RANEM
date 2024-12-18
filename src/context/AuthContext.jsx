import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create Context
const AuthContext = createContext();

// Custom Hook for Accessing Auth Context
export const useAuth = () => useContext(AuthContext);

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User State
  const navigate = useNavigate();

  // Dummy Admin Account
  const adminCredentials = { email: "admin@avocado.com", password: "admin123" };

  // Login Function
  const login = (email, password) => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setUser({ email, role: "admin" }); // Admin Login
      navigate("/admin/products");
    } else {
      setUser({ email, role: "user" }); // Regular User Login
      navigate("/");
    }
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  // Authentication State
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
