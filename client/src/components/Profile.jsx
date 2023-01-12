import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import profile from "../profile.jpg";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [inputData, setInputData] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });
  return (
    <div className="">
      <div className="flex gap-2 items-center mt-5">
        <img src={profile} alt="profile" className="w-20 rounded-full" />
        <h1 className="font-semibold text-4xl opacity-75">{user.name}</h1>
      </div>
      <div>
        <form className="flex flex-col gap-3 mt-3">
          <input
            type="text"
            value={inputData.name}
            className="rounded-md font-light"
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
          <input
            type="email"
            value={inputData.email}
            className="rounded-md font-light"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
          <input
            type="password"
            value={inputData.password}
            className="rounded-md font-light"
            onChange={(e) =>
              setInputData({ ...inputData, password: e.target.value })
            }
          />
          <button type="submit" className="p-2 bg-teal-400 rounded-md">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
