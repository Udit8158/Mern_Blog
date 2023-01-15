import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CloseIcon from "@mui/icons-material/Close";

import EditIcon from "@mui/icons-material/Edit";

export default function BlogDetails() {
  const { blogId } = useParams();
  const { blogs } = useSelector((store) => store.blog);

  // Local state
  const [isEditing, setIsEditing] = useState(false);

  // Find the current blog
  const blogPost = blogs.find((blog) => blog._id === blogId);

  if (!blogPost) {
    return (
      <p className="text-3xl opacity-90 font-bold text-center mt-10">
        No blog found!
      </p>
    );
  }

  const dateOfBlogCreated = new Date(blogPost.createdAt);
  // console.log(dateOfBlogCreated);

  // Formatting date properly
  const month = dateOfBlogCreated.toLocaleString("default", { month: "short" });
  const day = dateOfBlogCreated.toLocaleString("default", { day: "2-digit" });
  const year = dateOfBlogCreated.toLocaleString("default", { year: "numeric" });

  return (
    <>
      <Navbar />
      <div className="mx-auto w-11/12 mt-10 flex flex-col gap-5 md:9/12">
        <div className="flex items-center justify-start w-full gap-3">
          <img
            src={blogPost.authorProfilePicture}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <p>{blogPost.author}</p>
          <span className="font-light text-slate-400">
            {month + " " + day + ", " + year}
          </span>
        </div>
        <h1 className="text-5xl font-bold opacity-80">{blogPost.title}</h1>
        <div className="mt-10">
          <img
            src={blogPost.coverPicture}
            className=" mx-auto h-80 object-contain"
          />
        </div>
        <div className="px-28 flex justify-between">
          {!isEditing && (
            <EditIcon
              onClick={() => setIsEditing((prev) => !prev)}
              className="bg-blue-500 p-2 rounded-md"
              fontSize="large"
            />
          )}
          {isEditing && (
            <CloseIcon
              onClick={() => setIsEditing((prev) => !prev)}
              className="bg-red-600 p-2 rounded-md"
              fontSize="large"
            />
          )}
          <div>
            {isEditing && (
              <PhotoLibraryIcon
                className="bg-green-600 p-2 rounded-md"
                fontSize="large"
              />
            )}
            {isEditing && (
              <button className="p-2 bg-teal-600 rounded-md">Update</button>
            )}
          </div>
        </div>
        <div className="break-words text-xl mt-4">{blogPost.content}</div>
      </div>
    </>
  );
}
