import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, searchMovies } from "../Api/MovieApi";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    searchResultList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesList = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.searchResultList = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
