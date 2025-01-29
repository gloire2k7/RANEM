import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/UserHeader";

const PlantiaEssenceProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products"); // Adjust to match your backend endpoint
      setProducts(response.data.filter((product) => product.category === "Plantai Essence Products"));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Plantia Essence Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded shadow-md p-4 flex flex-col items-center"
            >
              <img src={product.image} alt={product.name} className="h-32 w-32 object-cover mb-2" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlantiaEssenceProducts;
