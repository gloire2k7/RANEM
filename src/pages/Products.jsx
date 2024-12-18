import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  { id: 1, name: "Avocado Oil 1L", price: 15, image: "/assets/oil1.jpg" },
  { id: 2, name: "Avocado Oil 500ml", price: 10, image: "/assets/oil2.jpg" },
];

const Products = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Products;
