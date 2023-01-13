import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.blogs = action.payload;
    },
    fetchError: (state) => {
      (state.isError = true), (state.isLoading = false);
    },
  },
});

export default blogSlice.reducer;
export const { fetchStart, fetchSuccess, fetchError } = blogSlice.actions;
