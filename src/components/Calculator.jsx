import { useState } from "react";
import { sum, divide, multiply, substract } from "utils/math-functions";
const OPERATORS = ["+", "-", "x", "/"];

export function Calculator({ defaultA, defaultB, defaultOperator }) {
  const [inputValueA, setInputValueA] = useState(
    !defaultA || isNaN(defaultA) ? 0 : Number(defaultA)
  );

  const [inputValueB, setInputValueB] = useState(
    !defaultB || isNaN(defaultB) ? 0 : Number(defaultB)
  );

  const [operator, setOperator] = useState(
    OPERATORS.includes(defaultOperator) ? defaultOperator : "+"
  );

  function getResult() {
    switch (operator) {
      case "+":
        return sum(inputValueA, inputValueB);
      case "-":
        return substract(inputValueA, inputValueB);
      case "x":
        return multiply(inputValueA, inputValueB);
      case "/":
        return divide(inputValueA, inputValueB);
      default:
        return "No operator provided";
    }
  }

  const renderInputA = () => {
    return (
      <input
        value={inputValueA}
        type="number"
        onChange={(e) => setInputValueA(Number.parseFloat(e.target.value))}
      />
    );
  };

  const renderInputB = () => {
    return (
      <input
        value={inputValueB}
        type="number"
        onChange={(e) => setInputValueB(Number.parseFloat(e.target.value))}
      />
    );
  };

  const renderSelectBox = () => {
    return (
      <div>
        <select
          value={operator}
          className="form-select"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>
      </div>
    );
  };
  return (
    <>
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInputA()}
      {renderSelectBox()}
      {renderInputB()}
      <h2 style={{ marginTop: 20 }}>Result</h2>
      {getResult()}
    </>
  );
}
