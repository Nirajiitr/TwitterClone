import React from "react";
import AuthLeft from "../Components/AuthLeft";
import AuthRight from "../Components/AuthRight";

const Auth = () => {
  return (
    <>
      <div className="flex gap-2 bg-black text-white justify-center h-screen overflow-auto">
       
        <AuthLeft />
        <AuthRight />
      </div>
      
    </>
  );
};

export default Auth;
