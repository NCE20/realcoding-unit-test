import Calculator from "../js/calculator/Calculator";

describe("사칙연산 곱셈 테스트.", () => {
  test("3과 5를 곱하면 15이다.", () => {
    const calculator = new Calculator();
    expect(calculator.multiple(3,5)).toEqual(15);
  });
  test("3과 0를 곱하면 0이다.", () => {
    const calculator = new Calculator();
    expect(calculator.multiple(3,0)).toEqual(0);
  });
});