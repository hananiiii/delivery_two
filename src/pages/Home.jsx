import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Whyus from "../Components/Whyus";
import Costumer from "../Components/Costumer";
import App from "../Components/App";

export default function () {
return(
          <>
          <Nav />
          <Hero/>
           <div className="bg-gray-100  "></div>
          < Services/>
           <Whyus/>
           <Costumer/>
           <App/>
           
          
            
            </>
)
}