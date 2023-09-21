import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import register from "../Assets/register.png";


const Signup = () =>{
    const [firstName, setFirstName] =useState ("");
    const [lastName, setLastName] =useState ("");
    const [email, setEmail] =useState ("");
    const [ phone, setPhone] =useState ("");
    const [password, setPassword] =useState ("");
    const [confirmpassword, setConfirmPassword] =useState ("");
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(`${firstName} ${lastName}`, email, password, confirmPassword, phoneNumber); 
  };

  return(
     <div className="bg-gray-100 h-screen  w-full font-[lato]  ">
        <div class=" py-4 px-10 ">
        <Link to="/Home"><div className="font-bold text-[#EA2C2D] text-2xl cursor-pointer flex items-center font-[Lato]">
        <span className="text-2xl text-[#1E1E1E]   mr-1 pt-2">
        <ion-icon name="send-outline"></ion-icon>
        </span>
        RushSend
     </div></Link></div>
     <form onSubmit={handleSubmit} className="flex felx-row pt-8  ">
          <div className="basis-full md:basis-1/2 w-1/2 justify-Start ">
              <img src={register} className=" pl-32 pt-10 hidden lg:block" />
          </div>
          <div className="  lg:ml-16 ml-8 ">
             <div className="lg:ml-56 sm:ml-2 ml-[119px] lg:mt-10 sm:mt-6 mt-6">
             <h3  className=" font-bold text-3xl text-[#1E1E1E] ">Register</h3>
             </div>
             <div className="flex  flex-col lg:mt-11 sm:mt-11 mt-11 gap-6 w-[400px] lg:ml-24  ">
                 <div className=" flex flex-row gap-6 lg:ml-0 sm:-ml-32 ml-6">
                        <input
                       type="text"
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                       value={firstName}
                        className=" pt-0 pl-4 text-[#1E1E1E] opacity-50 lg:w-[170px] sm:w-[170px] w-[139px]  h-[54px]  rounded-lg px-10"
                       /> 
                       <input
                       type="text"
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                       value={lastName}
                        className=" pt-0 pl-4 text-[#1E1E1E] opacity-50  lg:w-[170px] sm:w-[170px] w-[139px] h-[54px] rounded-lg px-10 "
                       /> 
                  </div>
                      <input 
                       type="email"
                       placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}
                       className=" lg:ml-0 sm:-ml-32 ml-6 pt-0 pl-4 lg:w-[370px]  sm:w-[370px] w-[300px] h-[54px] rounded-lg px-10 text-[#1E1E1E] opacity-50 "
                      />
                      <input 
                       type="phone number"
                       placeholder="Phone Number"
                       onChange={(e) => setPhone(e.target.value)}
                       value={phone}
                       className=" lg:ml-0 sm:-ml-32 ml-6 pt-0 pl-4 lg:w-[370px]  sm:w-[370px] w-[300px] h-[54px] rounded-lg px-10 text-[#1E1E1E] opacity-50 "
                      />
                      <div className="flex flex-row ">
                      <input 
                       type={showPassword ? 'text' : 'password'}
                       placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}
                       className="lg:ml-0 sm:-ml-32 ml-6 pt-0 pl-4 lg:w-[370px]  sm:w-[370px] w-[300px] h-[54px] rounded-lg px-10 text-[#1E1E1E] opacity-50 "    
                      />
                       <div onClick={togglePasswordVisibility} className="text-xl text-[#1E1E1E] opacity-50 pt-4 -ml-[46px]">
                           {showPassword ? <ion-icon name="eye"></ion-icon> : <ion-icon name="eye-off"></ion-icon>  }
                       </div>
                      </div>
                      <div className="flex flex-row">
                      <input 
                       type={showConfirmPassword ? 'text' : 'password'}
                       placeholder="Confirm password"
                       onChange={(e) => setConfirmPassword(e.target.value)}
                       value={confirmpassword}
                       className="lg:ml-0 sm:-ml-32 ml-6 pt-0 pl-4 lg:w-[370px]  sm:w-[370px] w-[300px] h-[54px] rounded-lg px-10 text-[#1E1E1E] opacity-50 "
                      />
                       <div onClick={toggleConfirmPasswordVisibility} className="text-xl text-[#1E1E1E] opacity-50 pt-4 -ml-[46px]">
                           {showConfirmPassword ? <ion-icon name="eye"></ion-icon> : <ion-icon name="eye-off"></ion-icon>  }
                       </div>
                      </div>
                      <button className=" lg:ml-0 sm:-ml-32 ml-6 rounded-lg px-10 bg-gradient-to-r from-[#EA2C2D] to-[#EF8887] lg:w-[370px]  sm:w-[370px] w-[300px] h-[54px] text-white text-xl text-center ">Register </button>
             </div>
          </div>
     </form>
     </div> 
     
     )
}
export default Signup;