import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Characters from "screens/Characters";
import { usePaginatedCharacters } from "services/character";

jest.mock("services/character", () => ({
  usePaginatedCharacters: jest.fn()
}));

describe("Characters", () => {
  beforeEach(() => {
    usePaginatedCharacters.mockImplementation(() => ({
      results: {},
      isError: false,
      isLoading: true,
      getNextPageProps: jest.fn(),
      getPrevPageProps: jest.fn()
    }));
    render(<Characters></Characters>);
  });

  test("usePaginatedCharacters should be called", () => {
    expect(usePaginatedCharacters).toHaveBeenCalled();
  });
  describe("loading", () => {
    test("should render a loader", () => {
      usePaginatedCharacters.mockImplementation(() => ({
        isLoading: true,
        getNextPageProps: jest.fn(),
        getPrevPageProps: jest.fn()
      }));
      const { getAllByTestId } = render(<Characters></Characters>);

      const loader = getAllByTestId("loader");

      expect(loader).toBeTruthy();
    });
  });
  describe("with an error", () => {
    test("should render error message", () => {
      usePaginatedCharacters.mockImplementation(() => ({
        isLoading: false,
        isError: true,
        getNextPageProps: jest.fn(),
        getPrevPageProps: jest.fn()
      }));
      render(<Characters></Characters>);
      expect(screen.getByText(/Something went wrong/i)).toBeTruthy();
    });
  });
  describe("with data", () => {
    beforeEach(() => {
      const onClick = jest.fn();
      usePaginatedCharacters.mockImplementation(() => ({
        isLoading: false,
        isError: false,
        results: [
          {
            id: 10,
            name: "Alan Rails",
            status: "Dead",
            species: "Human",
            type: "Superhuman (Ghost trains summoner)",
            gender: "Male",
            origin: {
              name: "unknown",
              url: ""
            },
            location: {
              name: "Worldender's lair",
              url: "https://rickandmortyapi.com/api/location/4"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
            episode: ["https://rickandmortyapi.com/api/episode/25"],
            url: "https://rickandmortyapi.com/api/character/10",
            created: "2017-11-04T20:19:09.017Z"
          }
        ],
        getNextPageProps: jest.fn(() => ({ onClick: onClick })),
        getPrevPageProps: jest.fn()
      }));
      render(<Characters></Characters>);
    });
    test("should render the characters", () => {
      expect(screen.getByText(/Alan Rails/i)).toBeTruthy();
    });
    test("should trigger onClick when next Button clicked", () => {
      const button = screen.getByRole("button", { name: /next/i });
      fireEvent.click(button);
      expect(usePaginatedCharacters().getNextPageProps().onClick).toBeCalled();
    });
  });
});
