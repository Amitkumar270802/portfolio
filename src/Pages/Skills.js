import React, { useState } from "react";
import { MdCode } from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";
import { SiPowerbi } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [show1, setShow1] = useState(1);
  const [show2, setShow2] = useState(0);
  const [show3, setShow3] = useState(0);
 
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(1);
  const [active3, setActive3] = useState(1);

  function expand1() {
    setShow1(!show1);
    setActive1(!active1);
  }

  function expand2() {
    setActive2(!active2);
    setShow2(!show2);
  }
  function expand3() {
    setActive3(!active3);
    setShow3(!show3);
  }
  return (
      <div
      className="skills bg-black h-fit  flex justify-center items-center "
      id="skills"
    >
      <div className=" mx-auto flex flex-col mb-20 mt-5" data-aos="fade-up">
        <div className="flex flex-col mb-16 justify-center items-center ">
          <h1 className="text-3xl font-semibold text-[#f2f1f3] ">Skills </h1>
          <h6 className="text-sm  font-semibold text-[#b8b5b5]">
            My Technical Skills
          </h6>
        </div>
        <div className=" flex qs:flex-col sm:flex-col lg:flex-row justify-center m-auto mb-[80px] " data-aos="fade-up">
          <div>
            <div className="text-[#e8c768] text-xl qs:text-md sm:qs:text-md flex flex-col flex-wrap min-w-[260px] p-2 m-4 ">
              <div className="flex justify-evenly items-center border border-[f2f1f3]">
                <div className="flex justify-center items-center gap-x-2">
                  <MdCode />
                  <span className="xl:text-xl lg:text-xl md:text-xl qs:text-sm sm:text-sm text-[#f2f1f3]">
                    Languages
                  </span>
                </div>
                <IoIosArrowDropdown
                  className={`${
                    active1 ? " text-white animate-pulse" : "rotate-180 "
                  }  hover:scale-110 cursor-pointer`}
                  onClick={expand1}
                />
              </div>
              <div className={`mt-4 ${show1 ? "block" : "hidden"}`}>
                {show1 && (
                  <div className=" border border-[#e8c768] rounded-lg">
                    <div className="flex flex-col p-4  gap-y-2 ">
                      <div className="flex justify-between items-center">
                        <span>
                          <TbBrandCpp />
                        </span>
                        <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                          CPP
                        </h1>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                      </div>
                    </div>

                    <div className="flex flex-col p-4 gap-y-2">
                      <div className="flex justify-between items-center">
                        <span>
                          <IoLogoJavascript />
                        </span>
                        <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                          Javascript
                        </h1>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                      </div>
                    </div>

                    <div className="flex flex-col p-4 gap-y-2">
                      <div className="flex justify-between items-center">
                        <span>
                          <FaHtml5 />
                        </span>
                        <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                          HTML
                        </h1>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                      </div>
                    </div>

                    <div className="flex flex-col p-4 gap-y-2">
                      <div className="flex justify-between items-center">
                        <span>
                          <PiFileSql />
                        </span>
                        <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                          SQL
                        </h1>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-[#e8c768] text-xl flex flex-col  min-w-[260px] p-2 m-4 ">
              <div className="flex justify-evenly items-center  border border-[f2f1f3] ">
                <div className="flex justify-center items-center mx-6 gap-x-2">
                  <BiCodeCurly />
                  <span className="xl:text-xl lg:text-xl md:text-xl qs:text-sm sm:text-sm text-[#f2f1f3]">
                    Libraries
                  </span>
                </div>
                <IoIosArrowDropdown
                  className={`${
                    active2 ? " text-white animate-pulse" : "rotate-180 "
                  } hover:scale-110 cursor-pointer `}
                  onClick={expand2}
                />
              </div>
              <div className={`mt-4 ${show2 ? "block" : "hidden"}`}>
                {show2 && (
                  <div className=" border border-[#e8c768] rounded-md">
                    <div className="flex flex-col p-4 gap-y-2">
                      <div className="flex justify-between items-center">
                        <span>
                          <FaReact />
                        </span>
                        <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                          React
                        </h1>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                      </div>
                    </div>

                    <div className="flex flex-col p-4 gap-y-2">
                      <div className="flex justify-between items-center">
                        <span>
                          <SiTailwindcss />
                        </span>
                        <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                          Tailwind CSS
                        </h1>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                      </div>
                    </div>

                    <div className="flex flex-col p-4 gap-y-2">
                      <div className="flex justify-between items-center">
                        <span>
                          <FaNodeJs />
                        </span>
                        <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                          Node.js
                        </h1>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                      </div>
                    </div>

                    <div className="flex flex-col p-4 gap-y-2">
                      <div className="flex justify-between items-center">
                        <span>
                          <SiMongodb />
                        </span>
                        <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                          MongoDB
                        </h1>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-[#e8c768] text-xl flex flex-col  min-w-[260px] p-2 m-4  ">
            <div className="flex justify-evenly items-center  border border-[f2f1f3]">
              <div className="flex justify-center items-center mx-6 gap-x-2">
                <FiTool />
                <span className="xl:text-xl lg:text-xl md:text-xl qs:text-sm sm:text-sm text-[#f2f1f3]">
                  Tools
                </span>
              </div>
              <IoIosArrowDropdown
                className={`${
                  active3 ? " text-white animate-pulse" : "rotate-180 "
                }  hover:scale-110 cursor-pointer  `}
                onClick={expand3}
              />
            </div>
            <div className={`mt-4 ${show3 ? "block" : "hidden"}`}>
              {show3 && (
                <div className=" border border-[#e8c768] rounded-md">
                  <div className="flex flex-col p-4 gap-y-2">
                    <div className="flex justify-between items-center">
                      <span>
                        <FaGitAlt />
                      </span>
                      <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                        Git
                      </h1>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 gap-y-2">
                    <div className="flex justify-between items-center">
                      <span>
                        <FaSquareGithub />
                      </span>
                      <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                        GitHub
                      </h1>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                    </div>
                  </div>

                  <div className="flex flex-col p-4 gap-y-2">
                    <div className="flex justify-between items-center">
                      <span>
                        <SiPowerbi />
                      </span>
                      <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                        Microsoft Power BI
                      </h1>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                    </div>
                  </div>

                  <div className="flex flex-col p-4 gap-y-2">
                    <div className="flex justify-between items-center">
                      <span>
                        <IoLogoVercel />
                      </span>
                      <h1 className="xl:text-lg lg:text-lg md:text-sm qs:text-sm sm:text-sm">
                        Vercel
                      </h1>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-[#f2f1f3] h-1 rounded-full w-3/5 "></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
