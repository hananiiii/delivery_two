import React, { useState } from "react";
import heropic from "../Assets/hero25.png";
import man from "../Assets/herodeliveryman.png"
import { Link } from "react-router-dom";

export default function (){
    return(

    <div className="bg-gray-100 w-screen h-full  font-[Lato] ">
       <div className="basis-full md:basis-1/2 pl-12 lg:pt-[200px] sm:pt-[180px] pt-[200px] ">
           <h3 className="font-[Lato] md:text-[40px] sm:text-[40px]  text-[25px] font-bold text-[#1E1E1E]  ">
               Indulge in ultimate convenience <br/>

               with our<span className="lg:text-[45px] sm:text-[45px] text-[30px] text-[#FECD0E] pl-2 ">delivery website </span>- <br/>
 
               the perfect solution for those <br/>

               seeking to <span className="text-[#EA2C2D] lg:text-[45px] sm:text-[45px] text-[30px]">save time</span> and <span className="text-[#EA2C2D] md:text-[45px] sm:text-[45px] text-[30px]">time</span><br/>
           </h3>
           <div className="flex flex-row lg:gap-9 sm:gap-9 gap-7 mt-12 items-center">
                <Link to="/Order"><button className="text-white md:text-xl  font-[Lato] lg:w-[187px] lg:h-[50px] sm:w-[187px] sm:h-[50px] w-[150px] h-[40px]  py-0 px-6 md:ml-0  rounded  bg-gradient-to-r from-[#EA2C2D] to-[#EF8887]">Order Now </button></Link>
                <a className="lg:text-xl sm:text-xl lg:mb-4 md:mb-4 mb-2 font-SemiBold text-[#EA2C2D] hover:text-[#EF8887] cursor-pointer underline  ">Learn more</a>
           </div>
           <div className="lg:mt-12 sm:mt-12 mt-8 lg:gap-14 sm:gap-14 gap-6 text-[#CFCDCB]  flex  flex-row items-center ">
              
                <h4 className=" lg:text-[25px] sm:text-[25px] text-[20px] underline">Call us:</h4>
               
               <div className="flex flex-row gap-2 mt-2 items-center ">
                   <span className="text-[#CFCDCB]  lg:text-2xl sm:text-2xl text-xl "> <ion-icon name="call" ></ion-icon></span>
                   <h4 className="lg:text-xl lg:font-SemiBold sm:text-xl sm:font-SemiBold mb-2">0758240063</h4>
               </div>
               <div className="flex flex-row gap-2 mt-2 items-center ">
                    <span className="text-[#CFCDCB]   lg:text-2xl sm:text-2xl text-xl"> <ion-icon name="call" ></ion-icon></span>
                    <h4 className="lg:text-xl lg:font-SemiBold sm:text-xl sm:font-SemiBold mb-2">0587962430</h4>
               </div>
               
           </div>
        </div> 
        <div>
        <div className=" -mt-[520px] ml-[720px] flex justify-end items-start h-screen">
           <img src={heropic} className="w-[400px] hidden md:block"/>   
        </div> 
        <img src={man} alt="man" className="w-[750px] basis-full  -mt-[750px] ml-[820px] hidden lg:block" /> 
        </div> 
    </div>
    )}