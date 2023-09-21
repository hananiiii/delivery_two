import React, { useState } from "react";
import Food from "../Assets/food delivery.png";
import Courier from "../Assets/courier delivery.png";
import Ecomerce from "../Assets/Ecomercedelivery.png";


export default function (){
    return(
         <div className="bg-gray-100 h-screen w-screen font-[lato] pt-4">
        <div className="  lg:mt-4  sm:-mt-11 -mt-6 sm:justify-center items-center">
            <h1 className="lg:text-[35px] lg:font-bold sm:text-[35px] sm:font-bold text-[30px] font-bold text-center text-[#1E1E1E] ">Our Services</h1>
            <p className=" lg:text-[19px] sm:text-[19px] text-[15px] font-light text-[#CFCDCB]  text-center">offering a wide range of services to cater to all your needs<br/> 
                  under one virtual roof
            </p>
        </div>
        <div className=" flex   gap-[160px]  items-center justify-center">
            <div className=" rounded-full  w-[340px] h-[340px]  lg:-mt-20 sm:mt-11 mt-11  border-2 border-dashed border-[#E92526] bg-transparent ">
                 <div className="bg-[#e2e2e2]   w-[290px] h-[290px] mt-[12px] ml-[4px]   rounded-full">
                    <span className="text-[#FECD0E]  transform -translate-x-1/2 -translate-y-1/2"><h3 className="  text-[22px] pt-12 pl-[78px] justify-center">Food Delivery</h3></span>
                    <p className="text-[15px] font-light text-[#1E1E1E] text-center pt-2 justify-center ">Partnering with restaurants and <br/>
                         eateries to provide food delivery<br/>
                        services to customers.</p>
                        <img src={Food} className="w-[350px]" />
                 </div>
            </div>
            <div className="rounded-full w-[340px] h-[340px] mt-[180px]  border-2 border-dashed border-[#FECD0E] bg-transparent hidden lg:block">
                  <div className="bg-[#e2e2e2]  w-[290px] h-[290px] -mt-0 ml-[22px] rounded-full">
                  <span className="text-[#E92526] text-opacity-100 transform -translate-x-1/2 -translate-y-1/2"><h3 className="  text-[22px] pt-12 pl-[72px] justify-center">Courier Delivery</h3></span>
                    <p className="text-[15px] font-light text-[#1E1E1E] text-center pt-2 justify-center ">Offering fast and reliable courier <br/>
                          services for urgent deliveries. 
                       </p>
                       <img src={Courier} className="w-[350px]" />
                  </div>
            </div>
            <div className="rounded-full w-[340px] h-[340px] -mt-20  border-2 border-dashed border-[#E92526] bg-transparent hidden lg:block">
            <div className="bg-[#e2e2e2]   w-[290px] h-[290px] mt-[12px] ml-[42px] rounded-full">
                    <span className="text-[#FECD0E] text-opacity-100 transform -translate-x-1/2 -translate-y-1/2"><h3 className="  text-[22px] pt-12 pl-[50px] justify-center">E-commerce Delivery</h3></span>
                    <p className="text-[15px] font-light text-[#1E1E1E] text-center pt-2 justify-center ">
                    Collaborating with online retailers <br/>
                    to handle the delivery of their products<br/>
                    to customers.
                        </p>
                    <img src={Ecomerce} className="w-[350px]" />
            </div>
            </div>
           
          
            
        </div>
       
        
        </div>
     )}