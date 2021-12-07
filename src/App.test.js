import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App", () => {
  it("must display title", () => {
    render(<App />);
    const linkElement = screen.getByText(/App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
