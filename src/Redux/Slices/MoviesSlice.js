import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (activeTab) => {
  const movieList = await axios.get(
    `https://api.themoviedb.org/3/movie/${activeTab}?api_key=a0bfa1c77530216db1c063c5dd662e22`
  );
  return movieList.data.results;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
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
      });
  },
});

export default moviesSlice.reducer;
