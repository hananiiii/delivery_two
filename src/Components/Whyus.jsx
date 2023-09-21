import React from "react";
import women from "../Assets/Whyus.png";


export default function (){
    return( 

        <div className="bg-gray-100 lg:h-screen h-full w-full font-[lato] pt-6">
            <div className="lg:mt-2 sm:-mt-[100px] -mt-[20px] sm:justify-center items-center">
                <h1 className="lg:text-[35px] lg:font-bold sm:text-[35px] sm:font-bold text-[30px] font-bold text-center text-[#1E1E1E] "> Why Us</h1>
                    <p className=" lg:text-[19px] sm:text-[19px] text-[15px] font-light text-[#CFCDCB] 5 text-center">o 
                    offering a wide range of services to cater to all your needs <br/>
                    under one virtual roof
                     </p>
           </div>
           <div className="mt-4 basis-full md:basis-[500px]">
             <img src={women} className="w-[426px] h-[517px] hidden lg:block " />
           </div>
           <div class="grid grid-cols-2 gap-4 lg:-mt-[440px] lg:ml-[620px] sm:ml-[220px] ml-[70px] basis-full  ">
                 <div class="col-span-2 lg:col-span-1">
                      <div class="flex flex-col h-full p-4 ">
                          <div className="flex flex-row gap-4">
                          <span className="text-[#E92526] text-3xl"><ion-icon name="home"></ion-icon></span> 
                            <h3 className="font-bold text-[22px] text-[#1E1E1E]">Home delivery</h3>
                           
                          </div>
                          <p className="text-[17px] font-medium text-[#CFCDCB]  mt-4">Effortlessly receive your desired products <br/>
                             at your doorstep with our reliable home<br/>
                            delivery service.</p>
                      </div>
                 </div>
                 <div class="col-span-2 lg:col-span-1  ">
                      <div class="flex flex-col h-full p-4 ">
                          <div className="flex flex-row gap-4">
                          <span className="text-[#E92526] text-3xl"><ion-icon name="cart"></ion-icon></span>
                            <h3 className="font-bold text-[22px] text-[#1E1E1E]">Easy to order</h3>
                          
                          </div>
                          <p className="text-[17px] font-medium text-[#CFCDCB]  mt-4">Ordering is a breeze with our user-friendly<br/>
                             interface, making it quick and easy to get <br/>
                            exactly what you need</p>
                      </div>
                 </div>
                 <div class="col-span-2 lg:col-span-1  mt-8">
                      <div class="flex flex-col h-full p-4 ">
                          <div className="flex flex-row gap-4">
                          <span className="text-[#E92526] text-3xl"><ion-icon name="time"></ion-icon></span>
                            <h3 className="font-bold text-[22px] text-[#1E1E1E]">24/4 Services</h3>
                          </div>
                          <p className="text-[17px] font-medium text-[#CFCDCB] mt-4">Experience the convenience of our 24/7 <br/>
                               fast service, ensuring prompt delivery<br/>
                                whenever you need it, day or night.</p>
                      </div>
                 </div>
                 <div class="col-span-2 lg:col-span-1 mt-8">
                      <div class="flex flex-col h-full p-4 ">
                          <div className="flex flex-row gap-4">
                            <span className="text-[#E92526] text-3xl"> <ion-icon name="heart" className="bg-[#E92526]"></ion-icon></span>
                            <h3 className="font-bold text-[22px] text-[#1E1E1E]">Best Quality</h3>
                          </div>
                          <p className="text-[17px] font-medium text-[#CFCDCB]  mt-4">Delivering excellence is our top priority,<br/>
                                 providing you with the best quality service<br/>
                                that exceeds your expectations every time.</p>
                      </div>
                 </div>

           </div>








        </div>
     )}