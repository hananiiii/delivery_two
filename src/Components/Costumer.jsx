import React from "react";
import Profile from "../Assets/profile.png";
import Good from "../Assets/good.png";


export default function (){
    return(
        <div className="bg-gray-100 h-screen  w-full font-[lato] pt-2">
            <div className="lg:pt-0 sm:pt-[100px] pt-[100px] sm:justify-center items-center">
                <h1 className="lg:text-[35px] lg:font-bold sm:text-[35px] sm:font-bold text-[30px] font-black text-center text-[#1E1E1E] ">Our Costumer</h1>
                    <p className=" lg:text-[19px] sm:text-[19px] text-[15px] font-light text-[#CFCDCB]  text-center">
                    few glowing testimonials from our valued users, sharing their<br/>
                    positive experiences and satisfaction with our services  </p>
           </div>
           <div className="basis-full ">
               <div className="lg:mt-[110px] sm:mt-[100px] mt-[100px] lg:ml-[160px] sm:ml-[180px] ml-[60px]">
                <h3 className="lg:text-[35px] text-[25px] text-[#1E1E1E] font-bold ">What our costumers say <br/>
                  about us
                </h3>
                <p className=" lg:text-[20px] sm:text-[15px] text-[15px] text-[#CFCDCB] lg:ml-0 sm:ml-0  font-medium mt-4 ">
                I am impressed by the professionalism and friendliness<br/>
                of the delivery team.They went above and beyond to <br/>
                ensure a smooth and hassle-free experience.”
                </p>

               </div>
               <div className="flex flex-col gap-4 mt-8  lg:ml-[150px] sm:ml-[170px] ml-[60px] sm:justify-start">
                <div className="flex flex-row gap-6 ">
                      <div className="rounded-full w-[60px] h-[60px] ">
                        <img src={Profile} className="w-[60px] h-[60px] rounded-full"/>
                      </div>
                      <div>
                      <h4 className="text-[25px] text-[#1E1E1E] font-medium">Emma Smith</h4>
                      <p className="text-[#CFCDCB] 5 text-[15px] font-medium">Regular costumer</p>
                      </div>
                </div>
                     <div className="flex flex-row gap-2 lg:ml-[80px]  sm:ml-[70px] ml-[80px] ">
                        <span className="text-3xl text-[#FECD0E]  ">
                     <ion-icon name="star"></ion-icon> </span>
                     <span className="text-3xl text-[#FECD0E]  "><ion-icon name="star"></ion-icon></span>
                     <span className="text-3xl text-[#FECD0E]  "> <ion-icon name="star"></ion-icon></span>
                     <span className="text-3xl text-[#FECD0E]  "><ion-icon name="star"></ion-icon></span>
                     <span className="text-3xl text-[#FECD0E]  stroke-current bg-transparent "><ion-icon name="star"></ion-icon></span>
                    
                     </div>
                
               </div>
               <div className="w-1/2 h-full ">
                   <img src={Good} className="-mt-[430px] ml-[720px] hidden lg:block "/>
               </div>
            </div> 

        </div>


     )}