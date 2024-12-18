import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"
import Home from "../assets/home.png" 
import Prod from "../assets/products.png"
import Cart from "../assets/cart.gif"

const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-10 py-0 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Avocado Oils" className="w-48" />
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="flex items-center text-bottom text-gray-700 text-xl hover:text-high">
              <img src={Home} className="w-8 py-0 px-1"/>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center text-bottom text-slate-800 text-xl hover:text-high">
            <img src={Prod} className="w-8 py-0 px-1"/>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center text-bottom text-slate-800 text-xl hover:text-high">
            <img src={Cart} className="w-8 py-0 px-1"/>
              <span>Cart</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center text-bottom text-xl">
              <button className="w-full bg-main text-sub2 px-4 py-1 rounded-lg">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
