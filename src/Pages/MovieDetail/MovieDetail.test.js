import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { getMovieById } from "../../Redux/Api/MovieApi";

jest.mock("../../Redux/Api/MovieApi", () => ({
  getMovieById: jest.fn(),
}));

const mockStore = configureStore([]);

describe("MovieDetail Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      movies: {
        movieDetail: {
          id: 1,
          title: "Test Movie",
          vote_average: 8.5,
          vote_count: 100,
          release_date: "2022-01-01",
          genres: [{ id: 1, name: "Action" }],
          overview: "This is a test movie.",
          poster_path: "/test-poster.jpg",
        },
        loading: false,
      },
    });
    getMovieById.mockClear();
  });

  test("renders MovieDetail component correctly", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/movies/1"]}>
          <Route path="/movies/:movieId">
            <MovieDetail />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    // Wait for the component to finish loading
    await screen.findByText("Test Movie");

    // Check if essential elements are rendered
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("8.5")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("This is a test movie.")).toBeInTheDocument();
  });

  test("handles addToFavorites correctly", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/movies/1"]}>
          <Route path="/movies/:movieId">
            <MovieDetail />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    // Wait for the component to finish loading
    await screen.findByText("Test Movie");

    // Simulate clicking the "Add to Favorites" button
    fireEvent.click(screen.getByText("Add to Favorites"));

    // Check if the message is displayed
    expect(screen.getByText("Movie added to favorites!")).toBeInTheDocument();

    // Simulate clicking the "Add to Favorites" button again
    fireEvent.click(screen.getByText("Add to Favorites"));

    // Check if the message is updated
    expect(screen.getByText("Movie removed from favorites")).toBeInTheDocument();
  });
});
