import React from "react";
import img from "../profile.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Blog({ post }) {
  return (
    <div className="flex flex-col md:gap-2  items-center cursor-pointer">
      <div className="flex items-center justify-start w-full gap-3">
        <img src={img} alt="profile" className="w-10 rounded-full" />
        <p>{post.author}</p>
        <span className="font-light text-slate-400">Aug 25, 2022</span>
      </div>
      {/* content */}
      <div className="flex gap-3 w-full">
        <div className="flex flex-col gap-6 mt-5 w-8/12">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p className="hidden md:flex font-light">{post.content}</p>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={img} alt="blog_image" className="w-28 md:w-48" />
        </div>
      </div>

      <div className="flex gap-2 justify-start items-center w-full">
        <div className="w-10/12 flex gap-1 flex-wrap">
          <span className="bg-gray-200 font-light rounded-2xl p-2">
            Catagory Blog
          </span>
          <span className="bg-gray-200 font-light rounded-2xl p-2">Test</span>
        </div>
        <div className="cursor-pointer">
          {/* <FavoriteIcon className="text-red-600" /> */}
          <FavoriteBorderIcon className="text-red-600" fontSize="medium" />
        </div>
      </div>
    </div>
  );
}
