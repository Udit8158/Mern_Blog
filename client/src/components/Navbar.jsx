import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import profile from "../profile.jpg";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sticky top-0 bg-gray-50 border-b-2 border-gray-200 w-full flex px-1 justify-between items-center py-2 cursor-pointer">
      <div className="flex gap-4 md:gap-2 items-center">
        <h1 className="font-bold logo text-2xl md:w-5/12">
          <NavLink to="/">MernBlog</NavLink>
        </h1>
        {window.location.pathname === "/" && (
          <input
            type="text"
            placeholder="Search for blog..."
            className="placeholder:text-sm outline-none bg-gray-100 rounded-md p-1 w-7/12 md:w-10/12"
          />
        )}
      </div>

      <div className="flex items-center gap-1">
        <div className=" flex flex-col gap-1 items-center justify-center md:flex-row md:gap-4 cursor-pointer">
          <li className="hover:underline duration-300">
            <NavLink to="/">BLOGS</NavLink>
          </li>
          <li className="hover:underline duration-75">
            <NavLink to="/create-blog">WRITE</NavLink>
          </li>
          <li
            onClick={logout}
            className="px-2 py-1 hover:border-red-700 hover:border-2 hover:bg-red-500 duration-100"
          >
            LOG OUT
          </li>
        </div>
        <div>
          <NavLink to="/user-profile">
            <img
              id="profile-image"
              src={profile}
              alt="profile"
              className="w-14 rounded-full"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
