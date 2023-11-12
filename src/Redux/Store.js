import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./Slices/MoviesSlice";
import MovieDetailSlice from "./Slices/MovieDetailSlice";

const Store = configureStore({
  reducer: {
    movies: MoviesSlice,
    movieDetail: MovieDetailSlice
  },
});

export default Store;
