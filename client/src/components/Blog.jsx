import React from "react";
import img from "../profile.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Blog() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex items-center justify-start w-full gap-3">
        <img src={img} alt="profile" className="w-10 rounded-full" />
        <p>Joy Ebertz</p>
        <span className="font-light text-slate-400">Aug 25, 2022</span>
      </div>
      {/* content */}
      <div className="flex gap-3 items-center">
        <div className="flex flex-col gap-6 w-8/12">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">
              Blog heading Lorem, ipsum dolor sit amet{" "}
            </h2>
            <p className="hidden md:flex font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              blanditiis distinctio quia quaerat ratione neque porro magni
            </p>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={img} alt="blog_image" className="w-48" />
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
