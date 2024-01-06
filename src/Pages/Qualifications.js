import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { TbBriefcaseFilled } from "react-icons/tb";

const Qualifications = () => {
  return (
   <div className="qualifications  bg-black h-fit flex justify-center items-center"  id="qualifications" >
      <div className=" flex flex-col mb-40 justify-center items-center" data-aos="fade-up">
        <div className="flex flex-col mb-20 justify-center items-center ">
          <h1 className="text-3xl font-semibold text-[#f2f1f3] ">
            Qualifications
          </h1>
          <h6 className="text-sm  font-semibold text-[#b8b5b5] text-center">
            My Educational Qualification & Work Experience
          </h6>
        </div>

        <div className="flex justify-center items-center sm:ml-16 mt-10 qs:flex-col sm:flex-col lg:flex-row md:gap-8 lg:ml-[200px]" data-aos="fade-up">
            {/* Education  */}
          <div className="relative min-h-[350px]  sm:max-w-[300px] lg:min-w-[400px] sm:mb-10 md:mb-0  qs:ml-20">

            <div className="absolute  flex  justify-center items-center gap-x-2  text-[#e8c768] top-[-42px] left-[-16px]">
              <div className="text-3xl">
                <IoBookSharp />
              </div>
              <h1 className="qs:text-md  sm:text-md  md:text-md lg:text-xl xl:text-xl ">Education</h1>
            </div>
            <ol className="border-s border-[#e8c768] ">
              <li className="relative mb-10 ms-6">
                <span className="absolute  w-2 h-2 bg-blue-100 rounded-full left-[-28px] top-[10px] dark:bg-[#e8c768]"></span>
                <h3 className="flex items-center mb-1  qs:text-md  sm:text-md  md:text-md lg:text-lg xl:text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Technology [CSE]
                </h3>
                <p className="mb-2 flex-wrap text-base qs:text-sm  sm:text-sm  md:text-md lg:text-md xl:text-md font-normal text-gray-500 dark:text-gray-400">
                  Poornima Institute Of Engineering And Technology
                </p>
                <time className="block  text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2020 — 2024
                </time>
              </li>
              <li className="relative mb-10 ms-6">
                <span className="absolute w-2 h-2 bg-blue-100 rounded-full left-[-28px] top-[10px] dark:bg-[#e8c768]"></span>
                <h3 className="flex items-center mb-1  qs:text-md  sm:text-md  md:text-md lg:text-lg xl:text-lg font-semibold text-gray-900 dark:text-white">
                  Senior Secondary School
                </h3>
                <p className="mb-2 text-base qs:text-sm  sm:text-sm  md:text-md lg:text-md xl:text-md font-normal text-gray-500 dark:text-gray-400">
                  Himalaya International School
                </p>
                <time className="block  text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2017-2019
                </time>
              </li>
              <li className="relative mb-10 ms-6">   
              <span className="absolute w-2 h-2 bg-blue-100 rounded-full left-[-28px] top-[10px] dark:bg-[#e8c768]"></span>
                <h3 className="flex items-center mb-1  qs:text-md  sm:text-md  md:text-md lg:text-lg xl:text-lg font-semibold text-gray-900 dark:text-white">
                  Secondary School
                </h3>
                <p className="mb-2 text-base qs:text-sm  sm:text-sm  md:text-md lg:text-md xl:text-md font-normal text-gray-500 dark:text-gray-400">
                  Jean Paul's High School
                </p>
                <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2016-2017
                </time>
              </li>
            </ol>
          </div>

          {/* work Experience */}
          <div className="relative min-h-[350px] sm:max-w-[300px] lg:min-w-[400px]  sm:ml-[-56px] md:ml-[-55px]  ">
            <div className="absolute flex justify-center items-center gap-x-2  text-[#e8c768] top-[-42px] left-[-16px]  ">
              <div className="text-3xl">
                <TbBriefcaseFilled />
              </div>
              <h1 className="qs:text-md  sm:text-md  md:text-md lg:text-xl xl:text-xl ">Work Experience</h1>
            </div>
            <ol className="border-s border-[#e8c768]  ">
              <li className="relative mb-10 ms-6">
                <span className="absolute  w-2 h-2 bg-blue-100 rounded-full left-[-28px] top-[10px] dark:bg-[#e8c768]"></span>
                <h3 className="flex items-center mb-1 qs:text-md  sm:text-md  md:text-md lg:text-lg xl:text-lg  font-semibold text-gray-900 dark:text-white">
                  Microsoft Power BI Intern
                </h3>
                <p className="mb-2 text-base qs:text-sm  sm:text-sm  md:text-md lg:text-md xl:text-md font-normal text-gray-500 dark:text-gray-400">
                  Celebal Technologies
                </p>
                <time className="block  text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May 2023 — July 2023
                </time>
              </li>
              <li className="relative mb-10 ms-6">
                <span className="absolute  w-2 h-2 bg-blue-100 rounded-full left-[-28px] top-[10px] dark:bg-[#e8c768]"></span>
                <h3 className="flex items-center mb-1 qs:text-md  sm:text-md  md:text-md lg:text-xl xl:text-xl  font-semibold text-gray-900 dark:text-white">
                  Frontend Development Intern
                </h3>
                <p className="mb-2 text-base qs:text-sm  sm:text-sm  md:text-md lg:text-md xl:text-md font-normal text-gray-500 dark:text-gray-400">
                  TechieNest Pvt Ltd
                </p>
                <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Sep 2022 -Oct 2022
                </time>
              </li>
              <li className="relative mb-10 ms-6">
                <span className="absolute w-2 h-2 bg-blue-100 rounded-full left-[-28px] top-[10px] dark:bg-[#e8c768]"></span>
                <h3 className="flex items-center mb-1 qs:text-md  sm:text-md  md:text-md lg:text-xl  font-semibold text-gray-900 dark:text-white">
                  Web Development Intern
                </h3>
                <p className="mb-2 text-base qs:text-sm  sm:text-sm  md:text-md lg:text-md xl:text-md font-normal text-gray-500 dark:text-gray-400">
                  Let's Grow More
                </p>
                <time className="block  text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2021-2021
                </time>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
