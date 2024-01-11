import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [toggle, setToggle] = useState(0);

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className=" relative bg-black mx-auto border border-white z-10 ">
      <div className="sm:hidden flex justify-around items-center fixed top-0 shadow-[100px_0px_1000px_-14px_#ffffff] bg-black h-[60px] w-[100vw] ">
        <Link
          to="home"
          spy={true}
          activeStyle={{ color: "#e8c768" }}
          smooth={true}
          duration={1000}
          onClick={() => window.location.reload(false)}
        >
          <div className="inline-block p-2 cursor-pointer text-white border border-[#21211f] rounded-md ">
            Amit
          </div>
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

      <div className="hidden sm:inline-block  justify-around items-center fixed top-0 shadow-[100px_0px_1000px_-14px_#ffffff] bg-black h-[70px] w-[100vw] p-3">
        <div className="sm:block w-full ">
          <div className="relative">
            <div className="flex  justify-between items-center p-2  ">
              <Link
                to="home"
                spy={true}
                activeStyle={{ color: "#e8c768" }}
                smooth={true}
                duration={1000}
                onClick={() => window.location.reload(false)}
              >
                <div className="inline-block p-2 cursor-pointer text-white border border-[#21211f] rounded-md ">
                  Amit
                </div>
              </Link>

              {toggle ? (
                <div className="text-3xl text-white">
                  <FaRegWindowClose
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  />
                </div>
              ) : (
                <div className="text-3xl text-white">
                  <RxHamburgerMenu
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  />
                </div>
              )}
            </div>
            <div
              className={`${
                toggle ? "" : "hidden"
              } absolute w-full top-[58px] backdrop-blur-3xl h-screen flex flex-col items-center text-white gap-y-4`}
            >
              <div className="nav-item cursor-pointer hover:text-[#e8c768]  rounded-md p-2">
                <Link
                  to="home"
                  spy={true}
                  activeStyle={{ color: "#e8c768" }}
                  smooth={true}
                  offset={-120}
                  duration={1000}
                  onClick={() => setToggle(0)}
                >
                  About
                </Link>
              </div>
              <div className="nav-item cursor-pointer hover:text-[#e8c768]  rounded-md p-2">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setToggle(0)}
                >
                  Skills
                </Link>
              </div>
              <div className="nav-item cursor-pointer hover:text-[#e8c768]  rounded-md p-2">
                <Link
                  to="qualifications"
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={500}
                  onClick={() => setToggle(0)}
                >
                  Qualifications
                </Link>
              </div>
              <div className="nav-item cursor-pointer hover:text-[#e8c768]  rounded-md p-2 ">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  onClick={() => setToggle(0)}
                >
                  Projects
                </Link>
              </div>
              <div className=" w-fit  nav-item cursor-pointer hover:text-[#e8c768]  rounded-md p-2">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setToggle(0)}
                >
                  <div>Contact</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
