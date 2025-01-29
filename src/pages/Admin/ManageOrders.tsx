import { useState } from "react";
import Header from "./AdminHeader";

// Interfaces
interface Product {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  customerName: string;
  products: Product[]; // List of products in the order
  totalPrice: number;
  status: "Pending" | "Processing" | "Completed";
}

// Dummy Orders
const dummyOrders: Order[] = [
  {
    id: 1,
    customerName: "John Doe",
    products: [
      { name: "Avocado Oil 1L", quantity: 2, price: 15 },
      { name: "Avocado Oil 500ml", quantity: 1, price: 10 },
    ],
    totalPrice: 40,
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    products: [{ name: "Avocado Oil 500ml", quantity: 3, price: 10 }],
    totalPrice: 30,
    status: "Processing",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    products: [{ name: "Avocado Oil 1L", quantity: 1, price: 15 }],
    totalPrice: 15,
    status: "Completed",
  },
];

const ManageOrders = () => {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);
  const [filterStatus, setFilterStatus] = useState<"All" | "Pending" | "Processing" | "Completed">("All");

  // Function to update order status
  const updateOrderStatus = (id: number, newStatus: Order["status"]) => {
    setOrders(orders.map(order => (order.id === id ? { ...order, status: newStatus } : order)));
  };

  // Function to delete an order
  const deleteOrder = (id: number) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // Filter orders based on the selected status
  const filteredOrders = filterStatus === "All" ? orders : orders.filter(order => order.status === filterStatus);

  return (
    <>
      <Header />
      <div className="p-6 mt-12">
        <h1 className="text-3xl font-bold mb-4 mt-12 text-center">Manage Orders</h1>

        {/* Filter Section */}
        <div className="mb-6">
          <label htmlFor="filter" className="text-lg font-bold mr-2">
            Filter by Status:
          </label>
          <select
            id="filter"
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value as "All" | "Pending" | "Processing" | "Completed")}
            className="border rounded p-2"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Orders Table */}
        <table className="w-full bg-white shadow rounded overflow-x-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Customer Name</th>
              <th className="p-2 text-left">Products</th>
              <th className="p-2 text-left">Total Price</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customerName}</td>
                <td className="p-2">
                  <ul>
                    {order.products.map((product, index) => (
                      <li key={index}>
                        {product.quantity}x {product.name} (${product.price.toFixed(2)} each)
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="p-2">${order.totalPrice.toFixed(2)}</td>
                <td className="p-2">
                  <select
                    value={order.status}
                    onChange={e => updateOrderStatus(order.id, e.target.value as Order["status"])}
                    className="border rounded p-1"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="ml-4 text-red border-2 rounded px-2 py-1 hover:bg-red hover:text-sub2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 p-4">
                  No orders found for the selected status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageOrders;
