import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "..";

const root = document.createElement("div");
root.id = "modal";

const mockOnClose = jest.fn();
describe("Modal", () => {
  beforeEach(() => {
    document.body.appendChild(root);
    render(
      <Modal onClose={mockOnClose}>
        <h1>Hello World</h1>
      </Modal>,
      root
    );
  });

  test("should render children", async () => {
    expect(await screen.findByText("Hello World")).toBeInTheDocument();
  });
  test("should trigger onClose when button close modal clicked", async () => {
    const button = screen.getByRole("button", { name: /close modal/i });
    fireEvent.click(button);
    expect(mockOnClose).toBeCalled();
    expect(await screen.findByText("Hello World")).toBeInTheDocument();
  });

  test("should  trigger onClose when backdrop is clicked", async () => {
    const button = screen.getByTestId("modal-overlay");
    fireEvent.click(button);
    expect(mockOnClose).toBeCalled();
  });
});
