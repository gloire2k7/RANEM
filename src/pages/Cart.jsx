import { useState } from "react";
import { Link } from "react-router-dom";

const dummyCart = [
  { id: 1, name: "Avocado Oil 1L", price: 15, quantity: 1 },
  { id: 2, name: "Avocado Oil 500ml", price: 10, quantity: 2 },
];

const Cart = () => {
  const [cart, setCart] = useState(dummyCart);

  const updateQuantity = (id, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="w-full bg-white shadow rounded">
            <thead>
              <tr>
                <th className="border p-2">Product</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Total</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">${item.price}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 p-1 border rounded"
                    />
                  </td>
                  <td className="border p-2">${item.price * item.quantity}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
