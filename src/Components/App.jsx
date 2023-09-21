import React from "react";
import App from "../Assets/App.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function (){
    return(
        <div>
        <div className="bg-gray-100 h-screen  w-full font-[lato] pt-2">
            <div className="lg:pt-0 sm:pt-[100px] pt-[100px] sm:justify-center items-center">
                <h1 className="lg:text-[35px] lg:font-bold sm:text-[35px] sm:font-bold text-[30px] font-black text-center text-[#1E1E1E] ">Our Application</h1>
                    <p className=" lg:text-[19px] sm:text-[19px] text-[15px] font-light text-[#CFCDCB]  text-center">
                    Get closer to us and unlock a world of possibilities <br/>
                    by installing our application
                     </p>
           </div>
           <div className=" lg:mt-16 sm:mt-16 mt-10 lg:ml-[160px] sm:ml-[40px] ml-[100px]">
               <div>
                <img  src={App} className="lg:w-[400px] lg:h-[450px] sm:w-[300px] sm:h-[350px] w-[200pw] h-[250px]"/>
               </div>
               <div className="lg:-mt-[460px] sm:-mt-[360px] mt-7 lg:ml-[570px] sm:ml-[570px] flex flex-col  gap-4 ">
                  <h3 className="font-bold text-[#1E1E1E] lg:text-[30px] sm:text-[20px] text-[20px] lg:-ml-48 sm:-ml-[300px] -ml-[100px] sm:mt-[100px] text-center">Install our application</h3>
                  <p className="lg:text-[20px] sm:text-[15px] text-[#CFCDCB] font-medium  text-center lg:-ml-48 sm:-ml-[300px] hidden lg:block sm:block ">"Get closer to us and unlock a world of possibilities by<br/> installing our application. Discover more about our<br/> services, stay updated with the latest offerings, and<br/> experience the convenience at your fingertips."</p>
                  <div className="flex flex-row mt-6 lg:ml-10 sm:-ml-[280px] -ml-14 lg:gap-16 sm:gap-10 gap-8 cursor-pointer">
                    <div className="lg:w-[206px] sm:w-[150px] w-[150px] sm:h-[45px] lg:h-[50px] h-[45px] bg-[#1E1E1E] rounded-lg flex lg:flex-row sm:flex-col">
                    <span className="lg:text-2xl sm:text-xl text-xl text-white pl-4 pt-[10px]"><ion-icon name="logo-google-playstore"></ion-icon></span>
                     <h3 className="lg:text-[15px] sm:text-[10px] text-[10px] text-white font-medium lg:pl-2 sm:pl-[40px] pl-2 lg:pt-[35px] sm:-mt-[24px] mt-[15px]">Dawnload on PlayStore </h3>
                    </div>
                    <div className="lg:w-[206px] lg:h-[50px] sm:w-[150px] w-[150px] sm:h-[45px] h-[45px] bg-[#1E1E1E] rounded-lg flex flex-row cursor-pointer">
                    <span className="lg:text-2xl sm:text-xl text-xl text-white pl-4 pt-[10px]"><ion-icon name="logo-apple"></ion-icon></span>
                     <h3 className="lg:text-[15px] sm:text-[10px] text-[10px] text-white font-medium lg:pl-2 sm:pl-[4px] pl-2 lg:mt-[12px] sm:mt-[16px] mt-[15px]">Dawnload on AppStore </h3>
                    </div>
                  </div>
               </div>
           </div>
           
           </div>
            <div className=" sm:-pt-[55px] -mt-[50px] w-screen lg:h-[50px] sm:h-[50px] h-[50px] flex flex-row gap-16 justify-center bg-[#EF8887]  ">
               <div className=" flex flex-row gap-10 lg:pt-4 sm:pt-4 pt-4">
            <a href="https://www.facebook.com" className="text-white hover:text-gray-500">
                 <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-white hover:text-gray-500">
                 <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-gray-500">
                  <FaInstagram size={24} />
            </a>
           
         </div>
            </div>
            </div>
    )}