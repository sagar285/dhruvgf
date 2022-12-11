import React from 'react'
import Funct from "./component/Funct";
import Form from './component/Form'
import Afterinput from "./component/Afterinput"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
   <>
 <Router>
  <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/payment" element={<Funct/>}/>
    <Route path="/inputafter" element={<Afterinput/>}/>
  </Routes>
 </Router>

 </>
   
   
  )
}

export default App