import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageProducts from "../pages/Admin/ManageProducts";
import ManageOrders from "../pages/Admin/ManageOrders";
import Notifications from "../pages/Admin/Notifications";

const isAdmin = true; // Replace this with proper admin authentication logic

const AdminRoutes = () => {
  return isAdmin ? (
    <Routes>
      <Route path="/Admin/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/Admin/products" element={<ManageProducts />} />
      <Route path="/Admin/orders" element={<ManageOrders />} />
      <Route path="/Admin/notifications" element={<Notifications />} />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminRoutes;
