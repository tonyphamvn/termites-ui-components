import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "../components/Button";

describe("Running Test for Primary Button", () => {
  test("Check Button label", () => {
    render(<Button label="Button Primary" />);
    expect(screen.getByRole("button", { name: "Button Primary" })).toBeDefined();
  });
});
