import { add, divide, multiply, substract } from "utils/math-functions";

describe("Maths functions", () => {
  it("adds correctly 2 values", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(0, -1)).toBe(-1);
    expect(add(-1, -1)).toBe(-2);
    expect(add(-1.5, 0.5)).toBe(-1);
  });
  it("substracts 2 values", () => {
    expect(substract(2, 3)).toBe(-1);
    expect(substract(0, 0)).toBe(0);
    expect(substract(0, -1)).toBe(1);
    expect(substract(-1, -1)).toBe(0);
    expect(substract(-1.5, 0.5)).toBe(-2);
  });
  it("multiplies correctly 2 values", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(1.7, 3)).toBe(5.1);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(0, -1) === 0).toBe(true);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(-1.5, 0.5)).toBe(-0.75);
  });
  it("divide correctly 2 values", () => {
    expect(divide(2, 3)).toBe(0.67);
    expect(divide(0, -1) === 0).toBe(true);
    expect(divide(-1, -1)).toBe(1);
    expect(divide(-1.5, 0.5)).toBe(-3);
    expect(() => divide(2, 0)).toThrowError("You can't divide by 0");
  });
});
