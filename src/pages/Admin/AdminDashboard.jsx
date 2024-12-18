import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/admin/products" className="bg-green-500 text-white p-4 rounded-lg text-center shadow hover:bg-green-600">
          Manage Products
        </Link>
        <Link to="/admin/orders" className="bg-blue-500 text-white p-4 rounded-lg text-center shadow hover:bg-blue-600">
          Manage Orders
        </Link>
        <Link to="/admin/notifications" className="bg-yellow-500 text-white p-4 rounded-lg text-center shadow hover:bg-yellow-600">
          Notifications
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
