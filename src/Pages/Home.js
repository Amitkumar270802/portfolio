import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { PiNavigationArrowBold } from "react-icons/pi";
import a from "../Assets/Untitled design (1).png";
import { Link as ScrollLink } from "react-scroll/modules";
import { Link as RouterLink } from "react-router-dom";


const Home = () => {
  return (
    <div 
      className="home bg-black h-fit flex justify-center items-center qs:mt-[-80px] md:mt-[-80px] "
      id="home"
    >
      <div className="w-7/12 flex flex-col" data-aos="fade-up">
        <div className="lg:pt-72 sm:pt-32 mb-12 flex justify-between items-center  sm:flex-col md:flex-row text-2xl gap-y-4 text-[#c5aa5b] ">
          <div className="flex flex-col text-left  justify-between ">
            <h1 className="my-2 qs:text-3xl  sm:text-3xl  md:text-3xl lg:text-5xl xl:text-5xl  font-semibold text-[#f2f1f3]">
              Hi, I'm <span className="text-[#c5aa5b]">Amit</span>
            </h1>
            <h1 className="my-2 qs:text-xl  sm:text-xl  md:text-xl lg:text-xl xl:text-xl  text-[#bcbab8] ">
              I am a Web Developer
            </h1>
            <h1 className="my-2 qs:text-md  sm:text-md  md:text-md lg:text-xl xl:text-xl text-[#bcbab8] text-sm">
              Building Software to solve real life <br /> problems
            </h1>
            <div className="flex gap-x-4 ">
              <ScrollLink
                to="contact"
                spy={true}
                activeStyle={{ color: "#e8c768" }}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <button className=" sm:text-[10px] hover:scale-105 flex gap-x-1 justify-center items-center w-fit bg-[#e8c768] p-3 text text-sm rounded-md font-semibold text-black hover:bg-[#f2f1f3]">
                  Contact Me{" "}
                  <PiNavigationArrowBold className="rotate-[130deg] sm:inline-block" />
                </button>
              </ScrollLink>

              <RouterLink
                to="https://drive.google.com/file/d/1-8WM3xJQeJaFhnE4C_v2rFCtSUdExI8Y/view?usp=sharing"
                target="_blank"
              >
                <button className="sm:text-[10px] hover:scale-105 w-fit flex justify-center items-center gap-x-4 bg-[#e8c768] p-3 text text-sm rounded-md font-semibold text-black hover:bg-[#f2f1f3]">
                  Resume{" "}
                  <MdOutlineDocumentScanner />
                </button>
              </RouterLink>
            </div>
            <div className="flex text-3xl mt-10 gap-x-3 ">
              <RouterLink
                to="https://www.instagram.com/keshri_amit_/?hl=en"
                target="_blank"
              >
                <FaInstagram className="hover:text-[#bcbab8] hover:scale-110" />
              </RouterLink>

              <RouterLink
                to="https://www.linkedin.com/in/amit-kumar-bb8922200/"
                target="_blank"
              >
                <CiLinkedin className="hover:text-[#bcbab8] hover:scale-110" />
              </RouterLink>
              <RouterLink
                to="https://github.com/Amitkumar270802/"
                target="_blank"
              >
                <VscGithub className="hover:text-[#bcbab8] hover:scale-110" />
              </RouterLink>
            </div>
          </div>
          <div className="" data-aos="zoom-in">
            <img
              src={a}
              className="lg:h-[300px] lg:w-[250px] h-[240px] w-[200px] flex justify-center items-start "
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center  mt-10 mb-16 ">
          <span className="text-[#afb4b9]  w-3/4">
            Hey there,👋 I'm Amit a 20-year-old CSE undergrad who is passionate
            about Software Development.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
