import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    console.log(formData);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
