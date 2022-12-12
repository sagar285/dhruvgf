import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo2.jpeg"

const Input = () => {
const [age, setage] = useState()
const [agecheck,setagecheck]=useState();
function ageheck(e){

if(e.target.value>=18 && e.target.value<65)
    setage(true)
}  
  return (
    <>
      <div className=" w-1/4  h-[100vw]   flex" >
        <img src={img} className=" w-[1/3] h-[10rem]   ml-[3rem]  "/>
        <input type="text" placeholder="enter your age"  
         className="bg-black justify-items-center ml-[15vw] rounded-[2rem] text-[2rem] mt-[10rem] h-[2rem] text-white    " onChange={ageheck} />
         
      
      { (age)?  
     <Link to="/inputafter" className=" h-[20px] text-white ml-[-15rem] mt-[13rem]  rounded-[2rem]  bg-black"><button className="w-[06rem]   text-[1.2rem] mt-[-1.2rem] " >Enter</button></Link>
    :<Link to ="/" className=" h-[20px] text-white ml-[-15rem] mt-[13rem]  rounded-[2rem] bg-black  "><button className="w-[06rem]  text-[1.2rem] mt-[-1.2rem]  ">Enter</button></Link>}
    </div>
    </>
  );
};

export default Input;
