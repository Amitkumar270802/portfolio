import React from "react";
import photo from "../Assets/Untitled design (1).png";
const AboutMe = () => {
  return (
    <div className="bg-black h-fit flex items-center justify-center " id="">
      <div className="w-8/12 p-10 b-10 flex ">
        <div className="flex flex-col justify-center items-center mb-16 ">
          <h1 className="text-3xl  font-semibold text-[#f2f1f3] ">
            About Me
          </h1>
          <h6 className="text-sm font-semibold text-[#b8b5b5]">
            My introduction
          </h6>
        </div>
        <div className="flex flex-row justify-around items-start qs:flex-col sm:flex-col-reverse md:item-center">
          <div className="p-4 ">
            <img src={photo} className="h-[280px] w-[300px] sm:hidden" />
          </div>
          <div className="w-1/3 sm:w-full flex flex-col justify-start p-4">
            <span className="text-[#afb4b9]  ">
              Hey there,👋 I'm Amit a 20-year-old CSE undergrad who is
              passionate about Software Development.
            </span>
            <button className="w-fit bg-[#e8c768] p-3 mt-2 text-sm rounded-md font-semibold hover:bg-[#f2f1f3]">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
