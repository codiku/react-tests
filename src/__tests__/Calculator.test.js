import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "components/Calculator/Calculator";

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

  it("performs 0+0 by default' ", () => {
    render(<Calculator />);
    const { getValueA, getValueB, getResult } = getCalculator();
    expect(getValueA()).toBe("0");
    expect(getValueB()).toBe("0");
    expect(getResult()).toBe("0");
  });

  it("use correctly the default values' ", () => {
    render(<Calculator defaultA={12} defaultB={"10"} />);
    const { getValueA, getValueB, getResult } = getCalculator();
    expect(getValueA()).toBe("12");
    expect(getValueB()).toBe("10");
    expect(getResult()).toBe("22");
  });

  it("calculates correctly when user update an input' ", () => {
    render(<Calculator defaultA={12} defaultB={"10"} />);
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "3" } });
    const { getValueA, getValueB, getResult } = getCalculator();
    expect(getValueA()).toBe("3");
    expect(getValueB()).toBe("10");
    expect(getResult()).toBe("13");
  });

  it("calculates correctly when user changes the operator' ", () => {
    render(<Calculator defaultA={12} defaultB={"10"} />);
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "x" },
    });
    const { getValueA, getValueB, getResult, getOperator } = getCalculator();
    expect(getOperator()).toBe("x");
    expect(getValueA()).toBe("12");
    expect(getValueB()).toBe("10");
    expect(getResult()).toBe("120");

    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "invalid operator !" },
    });

    expect(getResult()).toBe("No operator provided");
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
