import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import UserBlogs from "../components/UserBlogs";

export default function UserProfile() {
  const [isShowOwnBlogs, setIsShowOwnBlogs] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto md:flex md:gap-5 ">
        <div className="md:w-5/12 lg:w-4/12">
          <Profile
            isShowOwnBlogs={isShowOwnBlogs}
            setIsShowOwnBlogs={setIsShowOwnBlogs}
          />
        </div>
        <div className="">
          <UserBlogs isShowOwnBlogs={isShowOwnBlogs} />
        </div>
      </div>
    </div>
  );
}
