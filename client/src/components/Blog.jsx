import React, { useContext } from "react";
import img from "../profile.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

export default function Blog({ post }) {
  const dateOfBlogCreated = new Date(post.createdAt);
  // console.log(dateOfBlogCreated);

  // Formatting date properly
  const month = dateOfBlogCreated.toLocaleString("default", { month: "short" });
  const day = dateOfBlogCreated.toLocaleString("default", { day: "2-digit" });
  const year = dateOfBlogCreated.toLocaleString("default", { year: "numeric" });
  // console.log(month, day, year);
  return (
    <Link to={`blogs/${post._id}`}>
      <div className="flex flex-col md:gap-2  items-center cursor-pointer shadow-lg  bg-gray-50 rounded-2xl p-2 hover:shadow-2xl duration-300">
        <div className="flex items-center justify-start w-full gap-3">
          <img
            src={post.authorProfilePicture}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <p>{post.author}</p>
          <span className="font-light text-slate-400">
            {month + " " + day + ", " + year}
          </span>
        </div>
        {/* content */}
        <div className="flex gap-3 w-full">
          <div className="flex flex-col gap-6 mt-5 w-8/12">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">
                {post.title.slice(0, 17) + "..."}
              </h2>
              <p className="hidden md:flex font-light">
                {post.content.slice(0, 37) + "..."}
              </p>
            </div>
          </div>
          {/* image */}
          <div>
            <img
              src={post.coverPicture}
              alt="blog_image"
              className="w-28 md:w-48 h-28 object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 justify-start items-center w-full">
          <div className="w-10/12 flex gap-1 flex-wrap">
            {post.catagories.map((cat) => {
              return (
                <span
                  className="bg-gray-200 font-light rounded-2xl p-2"
                  key={Math.random()}
                >
                  {cat}
                </span>
              );
            })}
          </div>
          <div className="cursor-pointer">
            {/* <FavoriteIcon className="text-red-600" /> */}
            <FavoriteBorderIcon className="text-red-600" fontSize="medium" />
          </div>
        </div>
      </div>
    </Link>
  );
}
