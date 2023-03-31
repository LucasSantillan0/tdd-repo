import React from "react";
import { render, screen } from "@testing-library/react";
import { First } from "./first";

describe("First component", () => {
  test("Should show a counter", () => {
    render(<First />);
    expect(screen.getByText(/Counter/i)).toBeVisible();
    expect(screen.getByText(/0/i)).toBeVisible();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});
