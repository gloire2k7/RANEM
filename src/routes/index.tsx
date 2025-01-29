import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdminHome from "../pages/Admin/AdminHome";
import UserHome from "../pages/UserHome";
import PlantiaEssenceProducts from "../pages/PlantiaEssenceProducts";
import RanemSolutionProducts from "../pages/RanemSolutionProducts";
import Login from "../pages/Login";
import Signup from "../pages/signup";
import Cart from "../pages/Cart";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageOrders from "../pages/Admin/ManageOrders";
import ManageProducts from "../pages/Admin/ManageProducts";
import ManageFeedback from "../pages/Admin/Feedbacks";
import VRProducts from "../pages/vPProducts";
import VPProducts from "../pages/vPProducts";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AdminHome" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
      <Route path="/UserHome" element={<UserHome />} />
      <Route path="/PlantiaEssenceProducts" element={<PlantiaEssenceProducts />} />
      <Route path="/RanemSolutionProducts" element={<RanemSolutionProducts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />s
      <Route path="/cart" element={<Cart />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />}/>
      <Route path="/ManageOrders" element={<ManageOrders/>}/>
      <Route path="/ManageProducts" element={<ManageProducts/>}/>
      <Route path="/ManageFeedback" element={<ManageFeedback/>}/>
      <Route path="/VRProducts" element={<VRProducts/>}/>
      <Route path="/VPProducts" element={<VPProducts/>}/>
    </Routes>
  );
};

export default MainRoutes;
