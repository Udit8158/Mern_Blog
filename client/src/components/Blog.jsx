import React from "react";
import img from "../profile.jpg";

export default function Blog() {
  return (
    <div className="flex gap-2 items-center">
      {/* content */}
      <div className="flex flex-col gap-6 w-8/12">
        <div className="flex items-center gap-3">
          <img src={img} alt="profile" className="w-10 rounded-full" />
          <p>Joy Ebertz</p>
          <span className="font-light text-slate-400">Aug 25, 2022</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">
            Blog heading Lorem, ipsum dolor sit amet{" "}
          </h2>
          <p className="hidden md:flex font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            blanditiis distinctio quia quaerat ratione neque porro magni
          </p>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <span className="bg-gray-200 font-light rounded-2xl p-2">
            Catagory Blog
          </span>
          <span className="bg-gray-200 font-light rounded-2xl p-2">Test</span>
        </div>
      </div>
      {/* image */}
      <div>
        <img src={img} alt="blog_image" className="w-48" />
      </div>
    </div>
  );
}
