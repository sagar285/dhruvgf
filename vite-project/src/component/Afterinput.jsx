import {React,useState} from 'react'
import {useNavigate } from 'react-router-dom';

const Afterinput = () => {
  const history = useNavigate();
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
  const Postdata = async(e)=>{
    e.preventDefault();
    const {name,email,phone,timing}=form;
    const res =await fetch(`http://localhost:8080/register`,{
      method:"POST",
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
     
      console.log("succesfull registration");
      
         history("/payment")
   
    }
    }
  return (
    <div className='w-[100rem] h-[100vw] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed  '>
             <form className='bg-black w-[17rem] h-[20rem] ml-[29rem] mt-[8rem] rounded-[2rem]  '   >
    <input type="text" name='name' value={form.name} onChange={handleinputs} placeholder="enter your name" autoComplete='off'  className=' leading-7 mt-[1rem] ml-[2rem] rounded-[0.2rem] w-[13rem] p-2'/><br/>
    <input type="email" name='email' value={form.email} onChange={handleinputs} placeholder="enter your email"  className=' leading-7 mt-[0.6rem] ml-[2rem] rounded-[0.2rem] w-[13rem] p-2'/> <br/> 
    <input type="tel" name='phone' value={form.password} onChange={handleinputs} placeholder="enter your phone number"  className=' leading-7 mt-[0.6rem] ml-[2rem] rounded-[0.2rem] w-[13rem] p-2'/><br/>
<select name="timing" id="yoga" value={form.select} onChange={handleinputs} className=' leading-7 mt-[0.6rem] ml-[2rem] rounded-[0.2rem] font-semibold  border-6 p-2'>
<option value="">Choose your timing</option>
<option value={form.select}>6</option>
<option value={form.select}>7</option>
<option value={form.select}>8</option>
</select><br/>
<button type='submit' onClick={Postdata} className="leading-7 text-blue-800 bg-slate-900 w-[12rem] mt-[2rem] ml-[2rem] text-[1.4rem] tracking-[0.1rem] font-bold border-4 rounded-[1rem]">Submit</button>
    </form>
    </div>
  )
}

export default Afterinput