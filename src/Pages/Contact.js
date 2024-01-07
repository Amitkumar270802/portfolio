import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { FaSquarePhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LuSend } from "react-icons/lu";

const Contact = () => {
   
  return (
    <div 
      className="contact bg-black h-fit flex justify-center items-center  "
      id="contact"
    >
      <div className="mb-20 pt-10" data-aos="fade-up">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-semibold text-[#f2f1f3] ">Contact Me</h1>
          <h6 className="text-sm  font-semibold text-[#b8b5b5]">
            Want to connect? My inbox is always open!
          </h6>
        </div>

        <div className="flex sm:flex-col md:flex-col lg:flex-row justify-center md:items-start xl:items-start mt-10  " data-aos="fade-up" >
          <div className="flex flex-col sm:p-4">
            <div className="flex gap-x-4 m-4 min-w-[250px]  ">
              <div className=" flex justify-center items-center text-3xl text-[#e8c768] ">
                <TfiEmail
                  onClick={() =>
                    (window.location = "mailto:amitkumar270802@gmail.com")
                  }
                  className="hover:scale-105 hover:text-white "
                />
              </div>
              <div className="flex flex-col text-left ">
                <h1 className=" qs:text-md  sm:text-md  md:text-md lg:text-lg xl:text-2xl text-[#f2f1f3]">
                  Email
                </h1>
                <h6 className="text-sm  text-[#b8b5b5] ">
                  amitkumar270802@gmail.com
                </h6>
              </div>
            </div>
            <div className="flex gap-4  m-4   min-w-[250px]">
              <div className=" flex justify-center items-center text-3xl text-[#e8c768]">
                <FaSquarePhone
                  onClick={() => window.open("tel:9693379300")}
                  className="hover:scale-105 hover:text-white "
                />
              </div>
              <div className="flex flex-col text-left ">
                <h1 className=" qs:text-md  sm:text-md  md:text-md lg:text-lg xl:text-2xl text-[#f2f1f3]">
                  Phone
                </h1>
                <h6 className="text-sm  text-[#b8b5b5] ">+91-9693379300</h6>
              </div>
            </div>

            <div className="flex gap-4 m-4   min-w-[250px] ">
              <div className=" flex justify-center items-center text-3xl text-[#e8c768]">
                <SlLocationPin
                  onClick={() =>
                    window.open(
                      "https://maps.google.com?q=" + 26.9196 + "," + 75.778885
                    )
                  }
                  className="hover:scale-105 hover:text-white "
                />
              </div>
              <div className="flex flex-col text-left ">
                <h1 className=" qs:text-md  sm:text-md  md:text-md lg:text-lg xl:text-2xl text-[#f2f1f3]">
                  Location
                </h1>
                <h6 className="text-sm  text-[#b8b5b5] ">Jaipur</h6>
              </div>
            </div>
          </div>

          {/* form  */}
          <div className="flex flex-col text-left gap-y-4 sm:p-10 " >
            <div className="flex qs:flex-col sm:flex-col md:flex-row xl:flex-row lg:flex-row gap-x-4">
              <div className="flex flex-col text-white bg-black border-2 border-[#e8c768]  rounded-lg p-3  ">
                <h1 className="text-sm gap-x-3">Name</h1>
                <input className="required  caret-[#e8c768] font-semibold  capitalize  border border-transparent bg-black outline-none"></input>
              </div>
              <div className="flex flex-col text-white bg-black border-2 border-[#e8c768]  rounded-lg p-3 ">
                <h1 className="text-sm gap-x-3">Email</h1>
                <input className="required  caret-[#e8c768] font-semibold  lowercase border border-transparent bg-black outline-none"></input>
              </div>
            </div>
            <div className="flex flex-col text-white bg-black border-2 border-[#e8c768]  rounded-lg p-3 ">
              <h1 className="text-sm gap-x-3">Subject</h1>
              <input className="required  caret-[#e8c768] font-semibold  capitalize border border-transparent bg-black outline-none"></input>
            </div>

            <div className=" flex flex-col text-white border-2 border-[#e8c768]  rounded-lg p-3 ">
              <h1 className="text-sm gap-x-3">Message</h1>
              <textarea className="required caret-[#e8c768] font-semibold  capitalize min-h-[150px] border border-transparent  bg-black outline-none"></textarea>
            </div>
            <button className="sm:text-[10px] hover:scale-105 flex justify-center items-center gap-x-2 w-fit bg-[#e8c768] p-3 text text-xs  rounded-md font-semibold hover:bg-[#f2f1f3] " >
              Send Message
              <LuSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
