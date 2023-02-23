import { render, screen } from "@testing-library/react";
import { Calculator } from "components/Calculator/Calculator";

describe("<Calculator/>", () => {
  it("has a string 'Calculator' somewhere displayed", () => {
    render(<Calculator />);
    const titleElement = screen.getByText("Calculator");
    expect(titleElement).toBeDefined();
  });
  it("has 'Calculator' has title", () => {
    render(<Calculator />);
    const title = screen.getByRole("heading", { level: 1 }).textContent;
    expect(title).toBe("Calculator");
  });
});
