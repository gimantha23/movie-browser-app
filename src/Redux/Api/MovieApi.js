import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (activeTab) => {
    const movieList = await axios.get(
      `https://api.themoviedb.org/3/movie/${activeTab}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    return movieList.data.results;
  }
);

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (searchQuery) => {
    const searchResultList = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${searchQuery}`
    );
    return searchResultList.data.results;
  }
);

export const getMovieById = createAsyncThunk(
  "movies/getMovieById",
  async (movieId) => {
    const movieDetail = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    return movieDetail.data;
  }
);
