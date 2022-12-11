import {React,useState} from 'react'
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"


const Funct = () => {

const [form,setform]=useState({
  name:"",email:"",phone:"",timing:""
})
let name,value;

function handleinputs(e){
  console.log(e);
  name=e.target.name
  value=e.target.value
  setform({...form, [name]:value});
}

const [product , setproduct] =useState({
  name:"React from fb",
  price:10,
  prodcutby:"facebook"
})


const Postdata = async(e)=>{
e.preventDefault();
const {name,email,phone,timing}=form;
const res =await fetch(`http://localhost:8080/register`,{
  method:POST,
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,email,phone,timing
  })
});

const data= await res.json();
if(data.status === 422 || !data){
     alert("invalid registeration");
     console.log("invalid registration");
}
else{
  alert("succesfull registration");
  console.log("succesfull registration");
}
}


const makepayment = (token)=>{
  const body ={
       token,
       product
  }
  const headers ={
    "Content-Type":"application/json"
  }

  return fetch(`http://localhost:8080/payment`,{
    method:"POST",
    headers,
    body:JSON.stringify(body)
  }).then(response =>{
    console.log("response",response);
    const {status} =response;
    console.log("STATUS",status);
    if(status===200){
      alert(" Congrats your payment will be Succesfull ");
    }
    else{
      alert(" Enter right detail or check internet conectivity ");
    }
  }).catch(error => console.log(error));

}

  return (
 

<form   onSubmit={Postdata}>
    <input type="text" name='name' value={form.name} onChange={handleinputs} placeholder="enter your name" autoComplete='off'/>
    <input type="email" name='email' value={form.email} onChange={handleinputs} placeholder="enter your email" autoComplete='off'/>  
    <input type="tel" name='phone' value={form.password} onChange={handleinputs} placeholder="enter your password" autoComplete='off'/>
<select name="timing" id="yoga" value={form.select} onChange={handleinputs}>
<option value="volvo">Choose your timing</option>
<option value="saab">6-7</option>
<option value="opel">7-8</option>
<option value="audi">8-9</option>
</select>



      <StripeCheckout 
      stripeKey='pk_test_51LQDmPSJatPmI7e7Xr3j0tHYPmhZqi7Uy24T5Op28XUx1tpvjzdC5mKWy4eRDksHFkDoi97XoJOjZWaQ6CrQwjw300pCvIecD0'
      token={makepayment}
      name={product.name}
      amount={product.price*100}
      >
       <button type='button' >Submit</button>

      </StripeCheckout>
     
    </form>
  )
}

export default Funct