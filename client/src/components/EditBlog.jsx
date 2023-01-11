import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CloseIcon from "@mui/icons-material/Close";

export default function EditBlog() {
  return (
    <div className="mx-auto mt-10 w-10/12 flex flex-col md:w-7/12 lg:w-6/12">
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1672522688899-b1b6bd1e2042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
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
          <input type="file" id="file" name="file" className="hidden" />
          {/* <CloseIcon className="p-2 bg-red-600 rounded-lg" fontSize="large" /> */}
          <button className="p-2 bg-teal-400 hover:bg-teal-500 rounded-lg">
            Publish
          </button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Add Title"
        className="outline-0 font-bold text-xl mb-3 mt-3 border-none border-0 placeholder:font-light focus:outline-none"
      />

      <textarea
        cols="30"
        rows="10"
        placeholder="Tell your story"
        className="outline-none border-none border-0 placeholder:font-light focus:outline-0"
      ></textarea>
    </div>
  );
}
