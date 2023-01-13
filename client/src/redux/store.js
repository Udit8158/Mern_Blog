import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./BlogSlice";

// Redux store
const store = configureStore({
  reducer: { blog: BlogSlice },
});

export default store;
