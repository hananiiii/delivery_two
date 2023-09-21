import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";


import Home from "./pages/Home.jsx";
import Send from "./pages/Send.jsx";
import Order from "./pages/Order.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <div className="pages">
        <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Send"  element={<Send />}/>
        <Route path="/Order" element={<Order/>}/>
        <Route path="/Signup" element={<Signup />} />

       
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
