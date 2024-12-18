import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "../components/PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Protected Routes */}
      <Route
        path="/admin/*"
        element={
          <PrivateRoute adminOnly>
            <AdminRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
