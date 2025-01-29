import { createContext, useContext } from "react";
import axios from "axios";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const signup = async (email, password) => {
    try {
      console.log("Signup called with:", email, password);
      const response = await axios.post("http://localhost:5000/api/users/signup", {
        email,
        password,
      });
      console.log("Signup response:", response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error.response?.data?.message || error.message);
      throw new Error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert("Login successful!");
      console.log("Login response:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role); // Save role
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ signup, login}}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;