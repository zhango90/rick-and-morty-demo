import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonGroup from "..";
import Button from "components/UI/Button";

test("should render children when provided", async () => {
  render(
    <ButtonGroup>
      <Button>prev</Button>
      <Button>next</Button>
    </ButtonGroup>
  );
  expect(await screen.findByText("next")).toBeInTheDocument();
  expect(await screen.findByText("prev")).toBeInTheDocument();
});
test("should not render children when provided", async () => {
  render(<ButtonGroup></ButtonGroup>);
  expect(screen.queryByText("prev")).not.toBeInTheDocument();
});
