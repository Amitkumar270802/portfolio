import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const Card = (props) => {
  let pro = props.data;
  return (
    <div className="flex ">
      <div className="flex flex-col justify-center items-center ">
      <h1 className="xl:text-lg qs:text-sm  sm:text-md  md:text-xl  p-2 bg-[#e8c768] w-full text-black text-center font-bold">{pro.name}</h1>
        <div className="">
          <img src={pro.image} />
        </div>
        <div className="flex gap-x-3 p-4 justify-center items-center">
          <Link to={pro.liveLink} target="_black" className="hover:scale-105 w-fit flex justify-center items-center  gap-x-4 text-black p-3 text text-xs rounded-md font-semibold  bg-[#e8c768] hover:bg-[#f2f1f3] ">CheckOut
          <FiExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
