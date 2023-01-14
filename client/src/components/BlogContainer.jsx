import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import Blog from "./Blog";
import { axiosAuth } from "../api/Axios";
import { fetchError, fetchStart, fetchSuccess } from "../redux/BlogSlice";

export default function BlogContainer() {
  const { user } = useContext(AuthContext);

  // Desturing the blog state
  const { isLoading, isError, blogs } = useSelector((store) => store.blog);
  console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        // Start fetching
        dispatch(fetchStart());

        const res = await axiosAuth.get("/api/v1/blogs", {
          headers: {
            authorization: "Bearer " + user.accessToken,
          },
        });

        // fetch success
        dispatch(fetchSuccess(res.data));
      } catch (error) {
        // fetch error
        dispatch(fetchError());
        console.log(error);
      }
    };

    getAllBlogs();
  }, []);
  return (
    <div className="mx-auto mt-20 w-11/12 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogs.length !== 0
        ? blogs.map((post) => {
            return <Blog post={post} key={post._id} />;
          })
        : !isError && (
            <p className="mx-5 text-center font-semibold text-xl">
              No blogs found!
            </p>
          )}
      {isLoading && (
        <p className="mx-5 text-center font-semibold text-xl">Loading ...</p>
      )}
      {isError && (
        <p className="mx-5 text-center font-semibold text-xl text-red-700">
          Something went wrong!
        </p>
      )}
    </div>
  );
}

{
  /* <Blog
post={{
  title: "lslkdflsfs",
  content: "sdlkfjdlskfdlskjfdlsfjlsdjdlsfjsdlfjdlsk",
  author: "udit",
}}
/> */
}
