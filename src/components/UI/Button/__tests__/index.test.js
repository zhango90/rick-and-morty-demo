import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "..";

test("should render children when provided", async () => {
  render(<Button>Hello</Button>);
  expect(await screen.findByText("Hello")).toBeInTheDocument();
});
test("should not render children when provided", async () => {
  render(<Button></Button>);
  expect(screen.queryByText("Hello")).not.toBeInTheDocument();
});
