import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../assets/Frame 2.svg"


const Home = () => {
  return (
    <>
      <Header />
      <main className="container py-8 text-center mx-8">
        <section className="container px-10 py-0 flex justify-between items-center bg-gradient-to-r from-sub2 to-main">
          <div>
            <h1 className="text-4xl font-bold text-sub2">Welcome to Avocado Oil Store</h1>
            <p className="text-sub2 mt-4">Healthy oils straight from farm to table.</p>
          </div>
          <div>
            <img src={Image} />
          </div>
        
        </section>
        

        {/* Featured Products Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/200" // Placeholder image (replace with actual product images)
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Product Name {index + 1}</h3>
                  <p className="text-gray-600 mt-2">Description of the product goes here.</p>
                  <p className="text-green-600 font-semibold mt-2">$20.00</p>
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
