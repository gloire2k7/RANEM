import Phone from "../assets/phone.png"
import Tsapp from "../assets/whatsapp.png"
import Loc from "../assets/location.png"

const Footer = () => {
  return (
    <footer className="bg-main" >
      <div className="bg-main grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-16 text-sub2 py-6 mt-10 " >
      <div className="pt-16 pl-20">
        <p className="text-start font-bold text-xl px-10">Contact us</p>
        <ul>
          <li className="container px-10 py-3 flex justify-start">
            <img src={Loc} className="w-7 pr-2" />
            <span>Rwanda/ Kigali/ Remera</span>
          </li>
          <li className="container px-10 py-3 flex justify-start">
            <img src={Phone} className="w-7 pr-2" />
            <span>+250783464126</span>
          </li>
          <li className="container px-10 py-3 flex justify-start">
            <img src={Tsapp} className="w-7 pr-2" />
            <span>+250783464126</span>
          </li>
        </ul>
      </div>
      <div className="container text-center">
        <div className="mt-2">
          <h3 className="text-xl font-bold">FeedBack</h3>
          <form className="mt-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg mb-4 border border-gray-300 text-cc"
            />
            <textarea
              placeholder="Your feedback"
              className="w-full px-4 py-2 rounded-lg mb-4 border border-gray-300 text-cc"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-high text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
            >
              Submit
            </button>
          </form>  
        </div>
      </div>
      </div>
      <p className="mt-6 mb-0 pb-0 text-center">&copy; {new Date().getFullYear()} RANEM Solution Ldt. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
