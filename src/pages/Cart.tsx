import React, { useState } from "react";
import Header from "../components/UserHeader";
import Footer from "../components/Footer";

const Cart = () => {
  // Sample cart data (replace this with dynamic data from your backend or context)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Avocado Oil Bottle 500ml", price: 10, quantity: 2 },
    { id: 2, name: "Avocado Oil Bottle 1L", price: 18, quantity: 1 },
  ]);

  // Calculate the total cost
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle quantity change
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
    <Header />
    <main className="px-10 bg-gray mt-16">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mt-16">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-gray-600">Your cart is empty. Start shopping!</p>
      ) : (
        <>
          <div className="mt-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-12 text-center mx-2 border rounded"
                  />
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-4 text-red border-2 rounded px-2 py-1 hover:bg-red hover:text-sub2"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <p className="mt-2">
              <span className="font-semibold">Total:</span> ${totalCost.toFixed(
                2
              )}
            </p>
            <button className="mt-4 px-4 py-2 bg-high rounded hover:text-sub2 hover:bg-main">
              Order Now
            </button>
          </div>
        </>
      )}
    </div>
    </main>
    <Footer/>
    </>
  );
};

export default Cart;
