import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function (){
    let Links=[
       {name:"Service",link:"/"} ,
       {name:"Why Us",link:"/"} ,
       {name:"Our Costumer",link:"/"} ,
       {name:"App",link:"/"} ,

    ];
    let [open,setOpen]=useState(false);
    return( 
       
   <div className=" w-full fixed   top-0 left-0 font-[Lato]">
    <div className=" md:flex bg-white   items-center justify-between  py-4 md:px-10 px-7">
     <Link to="/Home"><div className="font-bold text-[#EA2C2D] text-2xl cursor-pointer flex items-center font-[Lato]">
        <span className="text-2xl text-[#1E1E1E]   mr-1 pt-2">
        <ion-icon name="send-outline"></ion-icon>
        </span>
        RushSend
     </div></Link>
     <div onClick={() =>setOpen(!open)} className="text-3xl absolute text-[#1E1E1E] right-8 top-6 cursor-pointer md:hidden">
     <ion-icon name={open ? 'close' : 'menu' }></ion-icon>
     </div>
    
     <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static  bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto   md:pl-0 pl-9  transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'} `}> 
       {
        Links.map((Links)=>(
            <li key={Links.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a href={Links.link} className="text-[#1E1E1E] font-SemiBold hover:text-[#E92526] duration-500">{Links.name}</a>
            </li>
        ))
       }
        <Link to="/Signup"><button className="text-white  font-[Lato] w-[117px] h-[40px] py-2 px-6 md:ml-12 rounded  bg-gradient-to-r from-[#EA2C2D] to-[#EF8887]">Join Us</button></Link>   
     </ul>
     
   
   

    </div>
   </div>
   
   
    
    )}