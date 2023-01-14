import React, { useContext, useEffect, useRef, useState } from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CloseIcon from "@mui/icons-material/Close";
import { AuthContext, uploadFile } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchError, fetchStart, fetchSuccess } from "../redux/BlogSlice";
import { axiosAuth } from "../api/Axios";
import { useNavigate } from "react-router-dom";

export default function EditBlog() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((store) => store.blog);
  const dispatch = useDispatch();
  const [coverPicture, setCoverPicture] = useState(
    "https://images.unsplash.com/photo-1672522688899-b1b6bd1e2042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
  );

  const [inputData, setInputData] = useState({
    title: "",
    content: "",
    catagories: "",
  });

  const publishBlog = async () => {
    try {
      if (
        inputData.title.trim() === "" ||
        inputData.content.trim() === "" ||
        inputData.catagories.trim() === ""
      ) {
        return dispatch(fetchError());
      }
      dispatch(fetchStart());
      // Upload file
      const file = await fetch(coverPicture);
      const fileBlob = await file.blob();
      const url = await uploadFile("cover_picture", inputData.title, fileBlob);

      // Upload blog
      const res = await axiosAuth.post(
        "/api/v1/blogs",
        {
          title: inputData.title,
          content: inputData.content,
          coverPicture: url,
          catagories: inputData.catagories.trim().split(","),
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      console.log(res.data);
      navigate("/");
    } catch (error) {
      dispatch(fetchError());
    }
  };

  return (
    <div className="mx-auto mt-10 w-10/12 flex flex-col md:w-7/12 lg:w-6/12">
      <div className="w-full">
        <img
          src={coverPicture}
          alt="Blog Cover Image"
          className="w-full h-80 object-cover"
        />

        <div className="flex justify-between mt-2">
          <label htmlFor="file">
            <PhotoLibraryIcon
              className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600"
              fontSize="large"
            />
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="hidden"
            onChange={
              (e) => setCoverPicture(URL.createObjectURL(e.target.files[0])) // this is to display selected image
            }
          />
          {/* <CloseIcon className="p-2 bg-red-600 rounded-lg" fontSize="large" /> */}
          <button
            className="p-2 bg-teal-400 hover:bg-teal-500 rounded-lg"
            onClick={publishBlog}
          >
            {isLoading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>

      {isError && (
        <h1 className="text-center text-red-600 text-3xl font-bold">
          Something went wrong!
        </h1>
      )}
      <input
        type="text"
        placeholder="Add Title"
        className="outline-0 font-bold text-xl mb-3 mt-3 border-none border-0 placeholder:font-light focus:outline-none"
        onChange={(e) =>
          setInputData((curr) => {
            return { ...curr, title: e.target.value };
          })
        }
      />

      <textarea
        cols="30"
        rows="10"
        placeholder="Tell your story"
        className="outline-none border-none border-0 placeholder:font-light focus:outline-0"
        onChange={(e) =>
          setInputData((curr) => {
            return { ...curr, content: e.target.value };
          })
        }
      ></textarea>

      <input
        type="text"
        placeholder="Add tags of your blog seperated by comma "
        className="outline-none border-none border-0 placeholder:font-light focus:outline-0 mt-3 mb-5"
        onChange={(e) =>
          setInputData((curr) => {
            return { ...curr, catagories: e.target.value };
          })
        }
      />
    </div>
  );
}
