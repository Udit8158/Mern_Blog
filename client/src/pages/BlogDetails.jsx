import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { blogId } = useParams();
  const { blogs } = useSelector((store) => store.blog);

  // Find the current blog
  const blogPost = blogs.find((blog) => blog._id === blogId);

  if (!blogPost) {
    return (
      <p className="text-3xl opacity-90 font-bold text-center mt-10">
        No blog found!
      </p>
    );
  }

  return (
    <div className="mx-auto w-11/12 mt-10 flex flex-col gap-5 md:9/12">
      <h1 className="text-5xl font-bold opacity-80">{blogPost.title}</h1>
      <div className="mt-10">
        <img
          src={blogPost.coverPicture}
          className=" mx-auto h-80 object-contain"
        />
      </div>
      <p>{blogPost.content}</p>
    </div>
  );
}
