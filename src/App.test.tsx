import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react test link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
