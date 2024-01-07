import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className=" relative bg-black mx-auto border border-white z-10 ">
      <div className="flex justify-around items-center fixed top-0 shadow-[100px_0px_1000px_-14px_#ffffff] bg-black h-[60px] w-[100vw] ">

        <Link
          to="home"
          spy={true}
          activeStyle={{ color: "#e8c768" }}
          smooth={true}
          duration={1000}
          onClick={() => window.location.reload(false)}
        >
          <div className="hidden lg:inline-block p-2 cursor-pointer text-white border border-[#21211f] rounded-md ">Amit</div>
        </Link>
        <div className="flex gap-x-3 md:gap-x-4 justify-center items-center text-white">
          <div className="nav-item cursor-pointer hover:text-[#e8c768] border-b border-[#21211f] rounded-md p-2">
            <Link
              to="home"
              spy={true}
              activeStyle={{ color: "#e8c768" }}
              smooth={true}
              offset={-120}
              duration={1000}
              onClick={closeMenu}
            >
              About
            </Link>
          </div>
          <div className="nav-item cursor-pointer hover:text-[#e8c768] border-b border-[#21211f] rounded-md p-2">
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
          <div className="nav-item cursor-pointer hover:text-[#e8c768] border-b border-[#21211f] rounded-md p-2">
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
          <div className="nav-item cursor-pointer hover:text-[#e8c768] border-b border-[#21211f] rounded-md p-2 ">
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
          <div className=" w-fit  nav-item cursor-pointer hover:text-[#e8c768] border-b border-[#21211f] rounded-md p-2">
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
  );
};
export default Navbar;
