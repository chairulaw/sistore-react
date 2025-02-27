import { Link } from "react-router-dom";
import { IoBag, IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/" },
    { label: "Contact", to: "/" },
  ];

  const iconItems = [
    { icon: IoBag, to: "/" },
    { icon: IoSearchOutline, to: "/" },
    { icon: FaUser, to: "/" },
  ];

  return (
    <header className="fixed flex w-full z-50 items-center justify-between bg-white p-5">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <h1 className="text-4xl font-semibold font-[Playfair_Display] text-[#153448] hover:text-[#DFDEDE] ease-in-out duration-300">SiStore</h1>
      </Link>

      {/* Desktop Nav Centered */}
      <div className="hidden md:flex gap-6 items-center text-black justify-center absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            to={item.to}
            className="font-semibold text-xl text-[#153448] hover:text-gray-500 ease-in-out duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Icons & Buttons */}
      <div className="hidden md:flex gap-6 items-center">
        {iconItems.map((item, index) => (
          <Link key={index} to={item.to} className="text-[#153448] hover:text-gray-500 ease-in-out duration-300">
            <item.icon size={24} />
          </Link>
        ))}
        <span className="text-gray-700 font-bold text-2xl">|</span>
        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="cursor-pointer font-bold border bg-[#153448] text-[#DFD0B8] px-4 py-2 rounded-2xl hover:bg-[#DFD0B8] hover:text-[#153448] ease-in-out duration-300">
            Login
          </button>
          <button className="cursor-pointer font-bold border border-[#153448] text-[#153448] px-4 py-2 rounded-2xl hover:bg-[#DFD0B8] hover:text-[#153448] ease-in-out duration-300">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex gap-6 items-center">
        {iconItems.map((item, index) => (
          <Link key={index} to={item.to} className="text-[#153448] hover:text-gray-500 ease-in-out duration-300">
            <item.icon size={24} />
          </Link>
        ))}
      </div>

    </header>
  );
};

export default Header;
