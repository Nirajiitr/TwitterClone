import React from "react";
import { IoSearch } from "react-icons/io5";
const HomeRight = () => {
  return (
    <div className="text-white vsm:hidden lg:block lg:w-[350px] ml-12 pr-10 ">
      <div className=" relative">
        <input
          type="text"
          placeholder="Serch"
          className=" placeholder: input w-full rounded-3xl p-3 mt-1 bg-gray-800 focus:outline-none"
        />
        <IoSearch className=" text-gray-200 absolute top-5 right-5" />
      </div>
      <div className="overflow-auto no-scrollbar h-full ">
        <div className=" pl-3 w-full border-[1px] border-slate-800 h-40 mt-5 rounded-xl">
          <h1 className="text-2xl font-bold my-1">Subscribe to Premium</h1>
          <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
          <button className="p-[5px] mt-3 rounded-2xl w-28 bg-blue-500">Subscribe</button>
        </div>
        <div className="w-full border-[1px] border-slate-800 h-[80%] mt-5 rounded-xl"></div>
        <div className="w-full border-[1px] border-slate-800 h-60 mb-5 mt-5 rounded-xl"></div>
      </div>
    </div>
  );
};

export default HomeRight;
