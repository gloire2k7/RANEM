import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const role = localStorage.getItem("role");
      
      switch (role) {
        case "admin":
          navigate("/AdminHome")
          break;
        case "user":
          navigate("/UserHome");
          break;
        default:
          break;
      }
    } catch (error) {
      alert("User not found!"); // Display alert for invalid credentials
      console.error("Error during login:", error);
      if(Error().message.includes("Login failed. Please try again.")){
        navigate("/login");
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-main text-white py-3 rounded hover:bg-green-600"
        >
          Login
        </button>

        <div className="text-end mt-4">
          <Link to="/forgotPassword" className="text-sm text-sub underline">
            Forgot Password?
          </Link>
        </div>

        <div className="text-end mt-2">
          <span className="text-sm text-gray-700">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-sub underline">
              Sign Up
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
