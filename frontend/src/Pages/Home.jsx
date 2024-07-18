import React from "react";
import HomeLeft from "../Components/HomeLeft";
import HomeCenter from "../Components/HomeCenter";
import HomeRight from "../Components/HomeRight";

const Home = () => {
  return (
    <>
      <div className="bg-black ssm:h-screen flex ssm:justify-center xl:justify-normal overflow-hidden">
        <HomeLeft />
        <HomeCenter />
        <HomeRight />
      </div>
      
      
    </>
  );
};

export default Home;
