import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "./Home";

const mockStore = configureStore([]);

describe("Home Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      // Mock your Redux store state here if needed
    });
  });

  test("renders Home component correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Check if tabs are rendered
    expect(getByText("Now Playing")).toBeInTheDocument();
    expect(getByText("Popular")).toBeInTheDocument();
    expect(getByText("Top Rated")).toBeInTheDocument();
    expect(getByText("Upcoming")).toBeInTheDocument();

    // Check if search input is rendered
    expect(getByPlaceholderText("Search movies...")).toBeInTheDocument();
  });

  test("handles search input correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Simulate user typing in the search input
    fireEvent.change(getByPlaceholderText("Search movies..."), {
      target: { value: "Avengers" },
    });
  });
});
