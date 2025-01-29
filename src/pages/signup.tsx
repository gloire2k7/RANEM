import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted"); // Debug log
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await signup(email, password);
      navigate("/UserHome"); // Navigate to home or desired route after signup
    } catch (error) {
      console.error("Error during signup:", error);

      // Check if the error indicates a user already exists
      if (error.message.includes("User already exists")) {
        alert("User already exists! Please try logging in.");
      } else {
        alert("User already exists! Please try logging in.");
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-main text-white py-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-sub underline">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
