import React from "react";
import Blog from "./Blog";

export default function UserBlogs() {
  return (
    <div className="mt-5 flex flex-col gap-3">
      <div className="flex gap-3 font-bold">
        <p className="hover:underline hover:opacity-70 duration-100">
          Your Blogs
        </p>
        <p className="hover:underline hover:opacity-70 duration-100">
          Your Liked Blogs
        </p>
      </div>
      <hr />
      <div className="mb-5 flex flex-col gap-10">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}
