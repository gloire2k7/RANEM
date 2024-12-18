import { useState } from "react";

const dummyProducts = [
  { id: 1, name: "Avocado Oil 1L", price: 15 },
  { id: 2, name: "Avocado Oil 500ml", price: 10 },
];

const ManageProducts = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const addProduct = () => {
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { id: newId, ...newProduct }]);
    setNewProduct({ name: "", price: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Products</h1>

      {/* Add New Product */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Add New Product</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            className="border p-2 rounded w-1/2"
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="border p-2 rounded w-1/4"
          />
          <button
            onClick={addProduct}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Product List */}
      <h2 className="text-xl font-bold mb-2">Products List</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border p-2">{product.id}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
