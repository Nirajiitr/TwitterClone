import React from "react";
import { CiImageOn } from "react-icons/ci";
import { LuVideo } from "react-icons/lu";
import { MdOutlineGifBox } from "react-icons/md";
const PostShare = () => {
  return (
    <div className=" relative vsm:hidden ssm:block w-full h-32 border-b-[1px] border-slate-800 ">
      <div className=" flex gap-3">
          <img
            src="https://c.stocksy.com/a/84C200/z9/523040.jpg"
            className="w-10 h-10 m-2 rounded-full"
            alt="profile-icon"
          />
          <input type="text"  placeholder="What is happening?!" className="bg-black w-full focus:outline-none text-xl" />
        </div>
        <div className=" absolute left-16 bottom-2 flex gap-5">
          <CiImageOn size="20px" cursor="pointer" title="upload image" />
          <LuVideo  size="20px" cursor="pointer" title="upload video" />
          <MdOutlineGifBox  size="20px" cursor="pointer" title="upload gif" />
        </div>
        <button className="p-1 w-16 rounded-2xl absolute bottom-2 right-2 bg-blue-500">Post</button>
    </div>
  );
};

export default PostShare;
