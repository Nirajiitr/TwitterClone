import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";


function App() {
  return (
   <Routes>
    <Route path="/home" element={<Home />} /> 
    <Route path="/" element={<Auth />} /> 
   </Routes>
   
  );
}

export default App;
