import React from "react";
import { render, screen } from "@testing-library/react";
import { Second } from "./second";

describe("Second component", () => {
  test("Should show an image with a fetch button", () => {
    render(<Second />);
    expect(screen.getByAltText("image")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
