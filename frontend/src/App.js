import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import AuthModal from "./Components/AuthModal";
//import { useState } from "react";


function App() {
  //const [signUpModal, setSignUpModal] = useState(false)
  
  return (
   <Routes>
    <Route path="/home" element={<Home />} /> 
    <Route path="/" element={<Auth />} /> 
    <Route path="/signup" element={<AuthModal showSignUpModal={true} />} /> 
   </Routes>
   
  );
}

export default App;
