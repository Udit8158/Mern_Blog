import React from "react";
import profile from "../profile.jpg";

export default function Profile() {
  return (
    <div className="">
      <div className="flex gap-2 items-center mt-5">
        <img src={profile} alt="profile" className="w-20 rounded-full" />
        <h1 className="font-semibold text-4xl opacity-75">Udit</h1>
      </div>
      <div>
        <form className="flex flex-col gap-3 mt-3">
          <input type="text" value="Udit" className="rounded-md font-light" />
          <input
            type="email"
            value="udit@udit.com"
            className="rounded-md font-light"
          />
          <input
            type="password"
            value="123456"
            className="rounded-md font-light"
          />
          <button type="submit" className="p-2 bg-teal-400 rounded-md">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
