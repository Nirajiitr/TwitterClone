import React from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { LuSquareSlash } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import PostShare from "./PostShare";
import Posts from "./Posts";

const HomeCenter = () => {
  return (
    <div className="text-white h-screen sm:w-[600px] ssm:w-[450px] border-x-[1px] border-slate-800">
      <div className="w-full h-16 border-b-[1px] flex border-slate-800">
        <div className="hover:bg-gray-800 w-[50%] text-center pt-5">
          <Link to="/home">For you</Link>
        </div>
        <div className="hover:bg-gray-800 w-[50%] text-center pt-5 ">
          <Link to="/following">Following</Link>
        </div>
      </div>
      <div className="h-full no-scrollbar overflow-auto">
        <PostShare />
        <Posts />
      </div>
      <div className="vsm:block ssm:hidden w-screen ">
        <div className="flex  p-3 ">
          <CgProfile className="size-10 " />
          <RiTwitterXLine className="size-10 mx-[auto]" />
        </div>

        <div className=" bg-black flex fixed bottom-0 py-2 border-y-2 border-slate-700 justify-around w-full ">
          <MdHomeFilled className="size-8 " />

          <IoSearch className="size-8 " />

          <IoIosNotificationsOutline className="size-8 " />

          <FaRegEnvelope className="size-8" />

          <LuSquareSlash className="size-8  " />

          <BsPeople className="size-8 " />
        </div>
      </div>
    </div>
  );
};

export default HomeCenter;
