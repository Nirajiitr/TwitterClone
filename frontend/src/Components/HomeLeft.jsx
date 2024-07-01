import React from "react";
import logo from "../imgs/logo.svg";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { LuSquareSlash } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";

const HomeLeft = () => {
  return (
    <div className="text-white w-[380px] border-x-[1px] border-slate-800">
      <div className="flex flex-col  justify-center items-center">
      <div className="w-[50%] ml-5 ">
        <img src={logo} className="my-3 ml-3 size-9" alt="logo" />
      
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <MdHomeFilled size="30px" />
          <p className="text-xl font-bold ">Home</p>
          
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <IoSearch size="30px" />
          <p className="text-xl ">Explore</p>
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <IoIosNotificationsOutline size="30px" />
          <p className="text-xl ">Notifications</p>
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <FaRegEnvelope size="25px" />
          <p className="text-xl ">Messages</p>
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <LuSquareSlash size="30px" />
          <p className="text-xl ">Grok</p>
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <IoBookmarkOutline size="30px" />
          <p className="text-xl ">Bookmarks</p>
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <BsPeople size="30px" />
          <p className="text-xl ">Communities</p>
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <img src={logo} className=" size-7" alt="logo" />
          <p className="text-xl font-bold">Premium</p>
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <CgProfile size="30px" />
          <p className="text-xl ">Profile</p>
        </div>
        <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-full items-start justify-start">
          <CiCircleMore size="30px" />
          <p className="text-xl ">More</p>
        </div>
        
          <button className="text-lg text-white font-bold self-center rounded-3xl p-3 bg-[#1D9BF0] w-60 my-2 "> Post</button>
          <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 gap-5 w-64 items-start justify-start">
          <CgProfile size="50px" />
          <p className="text-lg self-center ">Niraj Kumar</p>
        </div>
         
        
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
