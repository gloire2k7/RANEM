const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <button className="bg-green-600 text-white mt-2 px-4 py-2 rounded-md hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
