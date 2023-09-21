import React from "react";
import { Link } from "react-router-dom";
import boxes from "../Assets/boxes.png";
import sela from "../Assets/sela.png";
import supermarcher from "../Assets/supermarcher.png";
import pizza from "../Assets/pizza.png";

export default function (){
  
  return(
  <div className="bg-gray-100 h-screen w-screen font-[lato] ">
     <div class=" py-4 md:px-10 px-7">
        <Link to="/Home"><div className="font-bold text-[#EA2C2D] text-2xl cursor-pointer flex items-center font-[Lato]">
        <span className="text-2xl text-[#1E1E1E]   mr-1 pt-2">
        <ion-icon name="send-outline"></ion-icon>
        </span>
        RushSend
        </div></Link>
     </div>
     <img src={sela} className=" lg:mt-16 lg:ml-6 lg:w-[270px] hidden lg:block "/>
     <img src={supermarcher} className="lg:ml-[1290px] lg:-mt-[350px]  hidden lg:block"/>
      <div className="lg:w-[780px] lg:h-[290px] sm:w-[610px]  sm:h-[250px] w-[350px] h-[160px] bg-white flex justify-center items-center rounded-lg px-25 lg:-mt-60 sm:mt-40 mt-48  lg:ml-[350px] sm:ml-[50px] ml-[45px] ">
       <h3 className="text-[#E92526] opacity-50 font-bold text-center lg:text-2xl sm:text-2xl text-xl">Your order has been send ! <br/>
           please check your phone to get your order at time
       </h3>
      </div>
      <img src={boxes} className="lg:ml-[1100px] lg:-mt-[190px] hidden lg:block  "/>
      <img src={pizza} className=" lg:ml-32 lg:-mt-[210px] hidden lg:block"/>
      

  </div>
  )
}
