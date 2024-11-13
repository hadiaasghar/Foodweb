import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
  return (
    <>
      <div className="py-4  ">
        <div className="container flex justify-between items-center">
            {/* logo section */}
            <div>
                <p className="text-lg font-semibold">FOOD<span className="text-red-500">EAT</span></p>
                </div>
              {/* menu section */}
              <div className="py-2 flex ml-auto mr-4 gap-6">
                <ul className=" hidden sm:flex gap-8 ">
                    <li className="hover:border-b-2 border-primary uppercase">Home</li>
                    <li className="hover:border-b-2 border-primary uppercase">Menu</li>
                    <li className="hover:border-b-2 border-primary uppercase">About</li>
                </ul>
              </div>
              {/* login section */}
              <div className="flex items-center gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" alt="" className="w-12 rounded-full"/>
                <MdOutlineKeyboardArrowDown className=""/>
              </div>


        </div>

      </div>

    </>
  );
};

export default Navbar;
