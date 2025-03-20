import { render, screen } from "@testing-library/react";
import MyComponent from "../comopnent";

test("renders MyComponent", () => {
  render(<MyComponent />);
  expect(screen.getByText(/Hello, World!/i)).toBeDefined();
});
