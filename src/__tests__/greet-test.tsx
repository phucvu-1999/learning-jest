import { render, screen } from "@testing-library/react";
import Greet from "../Components/Greet/greet";

describe("Greet", () => {
  it("should render hello to the screen", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Another Greet", () => {
  it("should render name is Tien Phuc", () => {
    render(<Greet name="Tien Phuc" />);
    const textElement = screen.getByText(/Tien Phuc/i);
    expect(textElement).toBeInTheDocument();
  });
});
