import { useState } from "react";
import { wum, divide, multiply, substract } from "utils/math-functions";

export function Calculator() {
  const [inputValueA, setInputValueA] = useState(0);
  const [inputValueB, setInputValueB] = useState(0);
  const [operator, setOperator] = useState("+");

  // We need that when the input is empty, we want to display 0 in the calculation
  const valueA = inputValueA || 0;
  const valueB = inputValueB || 0;

  function getResult() {
    switch (operator) {
      case "+":
        return sum(valueA, valueB);
      case "-":
        return substract(valueA, valueB);
      case "x":
        return multiply(valueA, valueB);
      case "/":
        return divideSafely(valueA, valueB);
      default:
        return "No operator provided";
    }
  }
  function divideSafely(a_, b_) {
    try {
      return divide(a_, b_);
    } catch (err) {
      return err.message;
    }
  }
  const renderInputA = () => (
    <input
      type="number"
      value={inputValueA}
      onChange={(e) =>
        setInputValueA(e.target.value || Number.parseInt(e.target.value))
      }
    />
  );

  const renderInputB = () => (
    <input
      type="number"
      value={inputValueB}
      onChange={(e) =>
        setInputValueB(e.target.value || Number.parseInt(e.target.value))
      }
    />
  );

  const renderSelectBox = () => (
    <div>
      <select
        onChange={(e) => setOperator(e.target.value)}
        className="form-select"
        aria-label="Operator"
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
      </select>
    </div>
  );

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
