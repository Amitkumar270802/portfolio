import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMenu = () => {
    setClick(false);
  };
  return (
    <div className="relative w-screen  flex justify-center items-center bg-black text-white ">
    <div className="flex justify-center bg-black w-full ">
      
      <div className="flex fixed top-0 bg-black  items-center sm:justify-center lg:justify-between qs:min-w-8/12 w-9/12 md:w-7/12  h-[50px] ">
        <div className="hidden lg:inline-block p-2">Amit</div>
        <div className="flex gap-x-3 md:gap-x-4 justify-center items-center ">
          <div className="nav-item cursor-pointer hover:text-[#e8c768] ">
            <Link
              to="home"
              spy={true}
              activeStyle={{ color: "#e8c768" }}
              smooth={true}
              offset={-900}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </div>
          <div className="nav-item cursor-pointer hover:text-[#e8c768] ">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </div>
          <div className="nav-item cursor-pointer hover:text-[#e8c768] ">
            <Link
              to="qualifications"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
              onClick={closeMenu}
            >
              Qualifications
            </Link>
          </div>
          <div className="nav-item cursor-pointer hover:text-[#e8c768] ">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </div>
          <div className=" w-fit  nav-item cursor-pointer hover:text-[#e8c768] ">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              <div>Contact</div>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
