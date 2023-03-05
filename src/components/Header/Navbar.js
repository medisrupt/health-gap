import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import healthImage from "../../assets/Frame.svg"
import MenuCompany from "./MenuCompany";
import MenuProduct from "./MenuProduct";
import MenuResources from "./MenuResources";
import MenuLabs from "./MenuLabs";
import MobileCompany from "./MobileMenu/MobileCompany";
import MobileProduct from "./MobileMenu/MobileProduct";
import MobileResources from "./MobileMenu/MobileResources";
import MobileLabs from "./MobileMenu/MobileLabs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className="w-full h-[80px]  z-10  py-7 ">
      <div className=" flex px-5 md:px-20 justify-between items-center w-full h-full">
        <div className="  flex  text-xl md:text-3xl">
          <a href="/">
            <img className="md:w-[200px] md:h-[200px] w-[150px] h-[150px] " src={healthImage} alt="/" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          
    <div className="hidden md:block w-full ">

          <a href="#health" className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium">Company</a>
          <a href="#product" className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium">Product</a>

          <Link
          className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium"
          to='/labs'
          >
           
            Labs
            </Link>
          </div>
        
        </div>
      
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5 text-[#344054]" />
          ) : (
            <XIcon className="w-5 text-[#344054]" />
          )}
        </div>
      </div>
      <ul
        className={!nav ? "hidden" : "absolute z-10 my-8 bg-white w-full px-8"}
      >
        <div className="grid grid-cols-2 pt-4">
        <a href="#health" className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium">Company</a>
          <a href="#product" className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium">Product</a>
          {/* <Link to="" className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium">Resources</Link> */}
          <Link
          className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium"
          to='/labs'
          >
           
            Labs
            </Link>

          
        </div>
      
      </ul>
    </div>
  );
};

export default Navbar;
