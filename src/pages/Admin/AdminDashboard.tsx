import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./AdminHeader";

const AdminDashboard = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-10 mt-10 text-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NavLink
              to="/ManageProducts"
              className="block mt-4 text-cc"
            >
          <div className="bg-high shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Products</h2>
            <p className="text-4xl font-bold">120</p>
                        
          </div>
        </NavLink>

        <NavLink
              to="/ManageOrders"
              className="block mt-4 text-cc"
            >
          <div className="bg-high shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Orders</h2>
            <p className="text-4xl font-bold">85</p>
            
            
          </div>
        </NavLink>
        <NavLink
              to="/Feedbacks"
              className="block mt-4 text-cc"
            >
          <div className="bg-high shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Feedback</h2>
            <p className="text-4xl font-bold">45</p>
          </div>
        </NavLink>
        </div>

        {/* Notifications Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Recent Notifications
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center text-gray-700">
              <span>New order received from John Doe</span>
              <span className="text-sm text-gray-500">5 mins ago</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>Product "Avocado Oil - Premium" updated</span>
              <span className="text-sm text-gray-500">15 mins ago</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>New feedback submitted by Jane Smith</span>
              <span className="text-sm text-gray-500">30 mins ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
