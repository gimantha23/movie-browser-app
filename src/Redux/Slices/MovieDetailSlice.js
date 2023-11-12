import { createSlice } from "@reduxjs/toolkit";
import { getMovieById } from "../Api/MovieApi";

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    movieDetail: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.movieDetail = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieDetailSlice.reducer;
