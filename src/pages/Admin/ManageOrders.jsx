const dummyOrders = [
  { id: 1, customer: "John Doe", product: "Avocado Oil 1L", status: "Pending" },
  { id: 2, customer: "Jane Smith", product: "Avocado Oil 500ml", status: "Shipped" },
];

const ManageOrders = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Orders</h1>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.customer}</td>
              <td className="border p-2">{order.product}</td>
              <td className="border p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
