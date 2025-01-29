import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";


const VRProducts = () => {
  return (
    <>
      <Header />
      <main className="container py-8 text-center bg-gray mt-16">
      <h2 className="text-3xl font-bold text-main mb-6 pt-16">Shop RANEM Solution Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 gap-8 mt-12 bg-white">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/200" // Placeholder image (replace with actual product images)
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-start">Product Name {index + 1}</h3>
                  <p className="mt-2 text-start">Description of the product goes here.</p>
                  <p className="text-high text-end">$20.00</p>
                  <NavLink to={"/login"}>
                  <button className="w-auto bg-high px-4 py-1 rounded-lg hover:bg-main hover:text-sub2">Add To Cart</button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
      </main>
      <Footer />
    </>
  );
};

export default VRProducts;
