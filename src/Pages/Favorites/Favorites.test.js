import React from "react";
import { render, screen } from "@testing-library/react";
import Favorites from "./Favorites";

describe("Favorites Component", () => {
  test("renders Favorites component correctly with no favorite movies", () => {
    render(<Favorites />);

    // Check if the heading is rendered
    expect(screen.getByText("Favorites")).toBeInTheDocument();

    // Check if no favorite movies message is rendered
    expect(screen.getByText("No favorite movies found.")).toBeInTheDocument();
  });

  test("renders Favorites component correctly with favorite movies", () => {
    // Mock localStorage.getItem to return an array of favorite movies
    jest.spyOn(localStorage, "getItem").mockReturnValueOnce(
      JSON.stringify([
        { id: 1, title: "Movie 1" },
        { id: 2, title: "Movie 2" },
      ])
    );

    render(<Favorites />);

    // Check if the heading is rendered
    expect(screen.getByText("Favorites")).toBeInTheDocument();

    // Check if the favorite movies are rendered
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });
});
