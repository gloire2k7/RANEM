import Phone from "../assets/phone.png"
import Tsapp from "../assets/whatsapp.png"
import Email from "../assets/email.png"
import Loc from "../assets/location.png"

const Footer = () => {
  return (
    <footer className="bg-[#042640] text-white py-6 mt-10 container px-10 py-0 flex justify-between items-center">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Avocado Oils. All rights reserved.</p>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <form className="mt-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg mb-4 border border-gray-300"
            />
            <textarea
              placeholder="Your feedback"
              className="w-full px-4 py-2 rounded-lg mb-4 border border-gray-300"
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
      <div>
        <p>Contact us</p>
        <ul>
          <li>
            <img src={Loc} />
            <span>Rwanda/ Kigali/ Remera</span>
          </li>
          <li>
            <img src={Phone} />
            <span>+250783464126</span>
          </li>
          <li>
            <img src={Tsapp} />
            <span>12783464126</span>
          </li>
          <li>
            <img src={Email} />
            <span>ranem123@gmail.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
