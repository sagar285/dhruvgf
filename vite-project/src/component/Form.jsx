import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Form = () => {
const [age, setage] = useState()
const [agecheck,setagecheck]=useState();
function ageheck(e){

if(e.target.value>=18 && e.target.value<65)
    setage(true)
}  
  return (
    <>
      <div className="wrapper" >
        <input type="text" placeholder="enter your age"  min="18" max="65"
         className="bg-blue-900 justify-items-center" onChange={ageheck} />
      </div>
      { (age)?  
     <Link to="/payment"><button >Enter</button></Link>
    :<Link to ="/inputafter"><button>Enter</button></Link>}
    </>
  );
};

export default Form;
