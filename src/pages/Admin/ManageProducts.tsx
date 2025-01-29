import { useState, useEffect } from "react";
import Header from "./AdminHeader";
import api from "../../utils/api.js"; // Axios instance

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", image: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  // Add a product
  const addProduct = async () => {
    try {
      const response = await api.post("/products", { ...newProduct, createdBy: "admin" });
      setProducts([...products, response.data]);
      setNewProduct({ name: "", price: "", category: "", image: "" });
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  // Save edited product
  const saveProduct = async () => {
    try {
      const response = await api.put(`/products/${editingProduct._id}`, editingProduct);
      setProducts(
        products.map((product) => (product._id === editingProduct._id ? response.data : product))
      );
      setEditingProduct(null);
    } catch (error) {
      console.error("Failed to save product:", error);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <>
      <Header />
      <div className="p-6 mt-12">
        <h1 className="text-3xl font-bold mb-4 text-center mt-10">Manage Products</h1>

        {/* Add/Edit Product */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">
            {editingProduct ? "Edit Product" : "Add New Product"}
          </h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Product Name"
              name="name"
              value={editingProduct ? editingProduct.name : newProduct.name}
              onChange={handleInputChange}
              className="border p-2 rounded w-1/4"
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={editingProduct ? editingProduct.price : newProduct.price}
              onChange={handleInputChange}
              className="border p-2 rounded w-1/4"
            />
            <select name="category" 
            value={editingProduct ? editingProduct.category : newProduct.category}
            onChange={handleInputChange}
            className="border p-2 rounded w-1/4">
              <option value="Select category"></option>
              <option value="PLantia Essence Products">PLantia Essence Products</option>
              <option value="Ranem Solution Products">Ranem Solution Products</option>
            </select>
            {editingProduct ? (
              <button
                onClick={saveProduct}
                className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={addProduct}
                className="bg-green text-white px-4 py-2 rounded hover:bg-dgreen"
              >
                Add Product
              </button>
            )}
          </div>
        </div>

        {/* Product List */}
        <h2 className="text-xl font-bold mb-2">Products List</h2>
        <table className="w-full bg-white shadow rounded overflow-x-auto">
          <thead className="bg-gray">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="p-2">{product._id}</td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">${product.price.toFixed(2)}</td>
                <td className="p-2">{product.category}</td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => editProduct(product)}
                    className="text-blue border-2 rounded px-4 py-1 hover:bg-blue hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="text-red border-2 rounded px-4 py-1 hover:bg-red hover:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProducts;
