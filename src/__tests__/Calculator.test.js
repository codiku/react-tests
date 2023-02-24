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

  it("calculates correctly when the user updates an input", async () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"x"} />);
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "3" } });
    expect(getResult()).toBe("30");
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "3" } });
    expect(getResult()).toBe("9");
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "-" },
    });
    expect(getResult()).toBe("0");
  });

  it("concidere an empty input as 0", () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"x"} />);

    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "" } });
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "" } });
    expect(getResult()).toBe("0");
  });

  it("displays an error when the operator is invalid", () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"x"} />);
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "Should diplay an error" },
    });
    expect(getResult()).toBe("No operator provided");
  });

  it("displays an error when we divide by 0 ", () => {
    render(<Calculator defaultA={0} defaultB={"0"} defaultOperator={"/"} />);
    expect(getResult()).toBe("You can't divide by 0");
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
