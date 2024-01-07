import React, { useState } from "react";
import Card from "../Component/Card";
import { PiCaretCircleDoubleLeft } from "react-icons/pi";
import { PiCaretCircleDoubleRightLight } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = (props) => {
  let pro = props.data;
  const [index, setIndex] = useState(0);

  function left() {
    if (index - 1 < 0) setIndex(pro.length - 1);
    else setIndex(index - 1);
  }
  function right() {
    if (index + 1 >= pro.length) setIndex(0);
    else setIndex(index + 1);
  }
  return (
    <div className="project bg-black h-fit flex justify-center items-center  w-full text-white overflow-hidden "  id="project" >
      <div className="mb-20" data-aos="fade-up">
        <div className="flex flex-col mb-20 justify-center items-center">
          <h1 className="text-3xl  font-semibold text-[#f2f1f3] ">Projects</h1>
          <h6 className="text-sm  font-semibold text-[#b8b5b5]">  Most recent work</h6>
        </div>
        <div className="flex mx-auto justify-center items-center w-6/12 ">
          <div><button className=" hover:scale-105 xl:text-4xl text-2xl text-[#e8c768] hover:text-white " onClick={left}> 
          <PiCaretCircleDoubleLeft />
          </button></div>
          <div className="p-4 m-2 flex justify-center items-center xl:h-[300px] qs:w-[600px] sm:w-[720px] md:w-[950px] lg:w-[1100px] xl:w-[1200px] " data-aos="fade-up"><Card data={pro[index]} /></div>
          <div> <button className=" hover:scale-105 xl:text-4xl  text-2xl text-[#e8c768] hover:text-white " onClick={right}>
          <PiCaretCircleDoubleRightLight /></button></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
