import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (activeTab) => {
    try {
      const movieList = await axios.get(
        `https://api.themoviedb.org/3/movie/${activeTab}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      return movieList.data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (searchQuery) => {
    try {
      const searchResultList = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${searchQuery}`
      );
      return searchResultList.data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getMovieById = createAsyncThunk(
  "movies/getMovieById",
  async (movieId) => {
    try {
      const movieDetail = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      return movieDetail.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
