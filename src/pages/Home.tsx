import Header from "../components/Header";
import Footer from "../components/vFooter";
import BG from "../assets/bha.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container py-8 text-center bg-gray mt-16">
        {/* Welcome Section */}
        <div
          className="container px-10 py-16 flex flex-col lg:flex-row justify-between items-center"
          style={{
            background: "linear-gradient(to bottom,rgb(19, 65, 100), #000913)", // Vertical gradient
          }}
        >
          {/* Text Content */}
          <div className="lg:w-1/2 text-start">
            <h1 className="text-4xl font-bold text-sub2">RANEM</h1>
            <p className="text-sub2 py-2">
              Turning nature's gifts into sustainable solutions
            </p>
            <h1 className="text-4xl font-bold text-sub2 mt-6">
              Welcome to the home of food solutions
            </h1>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={BG}
              alt="Background"
              className="w-full max-w-lg object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Top Products Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-main mb-6">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 gap-8 bg-white">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src="https://via.placeholder.com/200" // Placeholder image (replace with actual product images)
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-start">
                    Product Name {index + 1}
                  </h3>
                  <p className="mt-2 text-start">
                    Description of the product goes here.
                  </p>
                  <p className="text-high text-end">$20.00</p>
                  <NavLink to={"/login"}>
                  <button className="w-auto bg-high px-4 py-1 rounded-lg hover:bg-main hover:text-sub2">
                    Add To Cart
                  </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
