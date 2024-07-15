import React from "react";
import logo from "../imgs/logo.svg";
import postLogo from "../imgs/postLogo.svg";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { LuSquareSlash } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
const HomeLeft = () => {
  return (
    <div className="text-white vsm:hidden ssm:block xl:w-[380px] xl:overflow-hidden ">
      <div className="flex ssm:flex-col  justify-center items-center p-2">
        <div className="w-[60%]  ml-5 relative">
          <RiTwitterXLine className="my-3 ml-3 size-9" />
          <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <MdHomeFilled className="size-7 " />
            <p className="text-xl vsm:hidden xl:block font-bold ">Home</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <IoSearch className="size-7 " />
            <p className="text-xl vsm:hidden xl:block ">Explore</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <IoIosNotificationsOutline className="size-7 " />
            <p className="text-xl vsm:hidden xl:block ">Notifications</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <FaRegEnvelope size="25px" />
            <p className="text-xl vsm:hidden xl:block ">Messages</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <LuSquareSlash className="size-7  " />
            <p className="text-xl vsm:hidden xl:block ">Grok</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer ssm:p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <IoBookmarkOutline className="size-7 vsm:hidden ssm:block " />
            <p className="text-xl vsm:hidden xl:block ">Bookmarks</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <BsPeople className="size-7 " />
            <p className="text-xl vsm:hidden xl:block ">Communities</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer ssm:p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <img
              src={logo}
              className=" size-7 vsm:hidden ssm:block"
              alt="logo"
            />
            <p className="text-xl vsm:hidden xl:block font-bold">Premium</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer ssm:p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <CgProfile className="size-7 vsm:hidden ssm:block " />
            <p className="text-xl vsm:hidden xl:block ">Profile</p>
          </div>
          <div className="flex rounded-3xl cursor-pointer ssm:p-3 hover:bg-slate-900 xl:gap-5 w-full items-start justify-start">
            <CiCircleMore className="size-7 vsm:hidden ssm:block " />
            <p className="text-xl vsm:hidden xl:block ">More</p>
          </div>
          <div className="flex vsm:hidden ssm:block vsm:rounded-full xl:rounded-3xl cursor-pointer p-3 w-10 xl:w-60 bg-[#1D9BF0]  justify-start">
            <button className="xl:block  vsm:hidden text-lg text-white font-bold text-center mx-[auto]">
              Post
            </button>

            <img src={postLogo} className="vsm:block xl:hidden" alt="logo" />
          </div>
          <div className="flex rounded-3xl cursor-pointer   p-3 absolute left-[-20px] bottom-[-90px] hover:bg-slate-900 xl:gap-5 w-64 items-start justify-start">
            <CgProfile className="size-12 vsm:hidden ssm:block  " />
            <p className="text-lg vsm:hidden xl:block self-center ">
              Niraj Kumar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
