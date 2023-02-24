import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "components/Calculator/Calculator";
const { getValueA, getValueB, getResult, getOperator } = getCalculator();

describe("<Calculator/>", () => {
  it("has 'Calculator' displayed somewhere", () => {
    render(<Calculator />);
    const textElement = screen.getByText("Calculator");
    expect(textElement.textContent).toBe("Calculator");
  });

  it("has an h1 that contains 'Calculator' ", () => {
    render(<Calculator />);
    const titleEl = screen.getByRole("heading", { level: 1 });
    expect(titleEl.textContent).toBe("Calculator");
  });

  it("performs 0+0 by default", () => {
    render(<Calculator />);

    expect(getValueA()).toBe("0");
    expect(getValueB()).toBe("0");
    expect(getOperator()).toBe("+");
    expect(getResult()).toBe("0");
  });

  it("uses correctly the default values", () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"x"} />);
    expect(getValueA()).toBe("12");
    expect(getValueB()).toBe("10");
    expect(getOperator()).toBe("x");
    expect(getResult()).toBe("120");
  });
});

function getCalculator() {
  return {
    getValueA: () => screen.getByTestId("inputA").value,
    getValueB: () => screen.getByTestId("inputB").value,
    getOperator: () => screen.getByTestId("operator").value,
    getResult: () => screen.getByTestId("result").textContent,
  };
}
