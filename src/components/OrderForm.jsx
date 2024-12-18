const OrderForm = () => {
    return (
      <form className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-bold">Place Your Order</h2>
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
        <textarea placeholder="Delivery Address" rows="3" className="w-full border p-2 rounded"></textarea>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Submit</button>
      </form>
    );
  };
  
  export default OrderForm;
  