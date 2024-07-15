import React from "react";
import collage from "../imgs/collage.mp4";
import photo from "../imgs/ankitPhoto.jpg";
const Post = () => {
  return (
    <div className="w-full h-[450px]  border-b-[1px] border-slate-800">
      <div className="flex ">
        <div className="w-20 h-full">
          <img
            src="https://c.stocksy.com/a/84C200/z9/523040.jpg"
            className="w-12 h-12 m-2 rounded-full"
            alt="profile-icon"
          />
        </div>
        <div className="w-full h-full">
          <div className="flex w-full gap-5 mt-2 ">
            <p>Niraj Kumar</p>
            <p></p>
            <p>@niraj</p>
            <p>5h</p>
          </div>
          <p className="mt-3 h-20 overflow-auto">
            we are gathering profiles for our first batch of @rightfitso to
            share directly with recruiters. if you’re into engineering or design
            and looking for full-time/part-time/internship roles. i think we can
            help you out, so hit us up for an invite.
          </p>
          <div className="w-full h-72 mt-1 content-center ">
            {/* <video className=" object-cover h-64 w-full  m-2 rounded-xl" controls>
              <source src={collage} type="video/mp4"  />
             
              Your browser does not support the video tag.
            </video> */}
            <img
              src={photo}
              alt="post photo"
              className=" h-64 w-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
