import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import AuthModal from "./Components/AuthModal";



function App() {
  
  
  return (
   <Routes>
    <Route path="/home" element={<Home />} /> 
    <Route path="/" element={<Auth />} /> 
    <Route path="/signup" element={<AuthModal showSignUpModal={true} />} /> 
   </Routes>
   
  );
}

export default App;
