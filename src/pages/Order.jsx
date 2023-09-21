import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Now from "../Assets/now.png"

const Order = () =>{
    
    const [Adress, setAdress] =useState ("");
    const [email, setEmail] =useState ("");
    const [ phone, setPhone] =useState ("");
    const [ message, setMessage] =useState ("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup( email, phone,Adress,message); 
      };
    
  
    return(
        <div className="bg-gray-100 h-screen w-screen font-[lato] ">
              <div class=" py-4 md:px-10 px-7">
                     <Link to="/Home">
                        <div className="font-bold text-[#EA2C2D] text-2xl cursor-pointer flex items-center font-[Lato]">
                          <span className="text-2xl text-[#1E1E1E]   mr-1 pt-2">
                             <ion-icon name="send-outline"></ion-icon>
                         </span>
                             RushSend
                       </div>
                    </Link>
              </div>
              <form onSubmit={handleSubmit} className="flex felx-row   ">
              <div className="flex flex-row -mt-8">
                   <div className="lg:mt-24 sm:mt-24 mt-20 lg:ml-[300px] sm:ml-[400px] ml-[160px]">
                      <h3 className="font-bold text-[#1E1E1E] text-3xl lg:-ml-2 sm:-ml-[121px] -ml-2">Order Now</h3>
                      <div className="flex flex-col gap-6 mt-11 lg:-ml-[115px] sm:-ml-[105px] -ml-[70px] ">
                        
                            <input 
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className=" border hover:border-[#EA2C2D] lg:ml-0 sm:-ml-32 -ml-4 pt-0 pl-4 lg:w-[370px] sm:w-[370px] w-[300px] h-[54px] rounded-lg px-10 text-[#1E1E1E] opacity-50 "
                            />
                            <input 
                            type="Adress"
                            placeholder="Adress"
                            onChange={(e) => setAdress(e.target.value)}
                            value={Adress}
                            className="border hover:border-[#EA2C2D] lg:ml-0 sm:-ml-32 -ml-4 -pt-16 pl-4 lg:w-[370px] sm:w-[370px] w-[300px] h-[54px] rounded-lg px-10 text-[#1E1E1E] opacity-50 "
                            />
                            <input 
                            type="phone number"
                            placeholder="Phone Number"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            className="border hover:border-[#EA2C2D] lg:ml-0 sm:-ml-32 -ml-4 pt-0 pl-4 lg:w-[370px] sm:w-[370px] w-[300px] h-[54px] rounded-lg px-10 text-[#1E1E1E] opacity-50 "
                            />
                            <input 
                            type="text"
                            placeholder="Enter your order here"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className="border hover:border-[#EA2C2D] text-top lg:ml-0 sm:-ml-32 -ml-4  text-top -pt-32 pl-4 lg:w-[370px] sm:w-[370px] w-[300px] h-[154px] rounded-lg px-10 text-[#1E1E1E] opacity-50 "
                            />
                             <Link to="/Send"><button className=" lg:ml-0 sm:-ml-32 -ml-4 rounded-lg px-10 bg-gradient-to-r from-[#EA2C2D] to-[#EF8887] lg:w-[370px]  sm:w-[370px] w-[300px] h-[54px] text-white text-xl text-center ">Send </button></Link>

                        
                      </div>
                   </div>
                  
              </div>
              <img src={Now} className="ml-64 mt-8 hidden lg:block" />
              </form>
     </div>
    
    )}
    export default Order;