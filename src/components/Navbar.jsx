import React,{useState} from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {showSearch,setShowSearch ,getCartCount } = useContext(ShopContext)
  return (
    <div className="flex justify-between items-center py-5 font-medium ">
     <Link to="/"> <img  src={assets.logo} className="w-36" alt="logo" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/collection">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/about">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

      </ul>
      <div className="flex items-center gap-6 ">
        <img onClick={() => setShowSearch(!showSearch)}src={assets.search_icon} alt="search" className="w-5 cursor-pointer" />
        <div className="group relative">
          <Link to="/login">
            <img src={assets.profile_icon} alt="profile" className="w-5 cursor-pointer" /></Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p className="cursor-pointer hover:text-black">My Profile</p>
                    <p className="cursor-pointer hover:text-black">Orders</p>
                    <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
            </div>
        </div>
        <Link to="/cart" className="relative">
        <img src={assets.cart_icon} alt="cart" className="w-5 m-w-5" />
        <p className="absolute  right-[-5px] bottom-[-5px] text-center leading-4 
         bg-black aspect-square rounded-full text-[8px] text-white  w-4 ">{getCartCount()}</p>
        </Link>
        <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menu_icon} alt="menu" className="w-5 cursor-pointer sm:hidden" />
      </div>
      {/*  side menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${isMenuOpen ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                <img src={assets.dropdown_icon} alt="dropdown" className="h-4 rotate-180" />
                <p className="text-sm">Back</p>
            </div>
            <NavLink to="/" className=" py-2 pl-6 border " onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/collection" className=" py-2 pl-6 border " onClick={() => setIsMenuOpen(false)}>Collection</NavLink>
            <NavLink to="/about" className=" py-2 pl-6 border " onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" className=" py-2 pl-6 border " onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
