import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./Slices/MoviesSlice";

const Store = configureStore({
  reducer: {
    movies: MoviesSlice,
  },
});

export default Store;
