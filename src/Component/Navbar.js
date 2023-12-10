import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMenu = () => {
    setClick(false);
  };
  return (
    <div className="relative w-fit ">
      <div className=" fixed top-0 w-full flex justify-center  bg-black ">
        <div className=" flex w-7/12 mx-auto p-4 items-center md:justify-between  text-white bg-black z-10">
            <h1 className="lg:block hidden font-bold">Amit </h1>
          {/* <div className=" p-2"> */}
            <ul className="flex gap-x-4 w-fit justify-center items-center">
              <li className="nav-item cursor-pointer hover:text-[#e8c768]">
                <Link
                  to="home"
                  spy={true}
                  activeStyle={{color:"#e8c768"}}
                  smooth={true}
                  offset={-900}
                  duration={500}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item cursor-pointer hover:text-[#e8c768]">
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
              </li>
              <li className="nav-item cursor-pointer hover:text-[#e8c768]">
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
              </li>
              <li className="nav-item cursor-pointer hover:text-[#e8c768]">
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
              </li>
              <li className="w-fit nav-item cursor-pointer hover:text-[#e8c768]">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Navbar;
