class Calculator {
  plus = (a, b) => {
    return a + b;
  };

  minus = (a, b) => {
    return a - b;
  };
  multiple = (a, b) => {
    return a * b;
  };
  divide = (a, b) => {
    return a / b;
  }
  isNegative = (a) => {
    return a < 0;
  };
  getDate = () => {
    return new Date();
  };
  abs = (a) => {
    return Math.abs(a);
  };
  customCalculation = (callback, ...args) => {
    callback(...args);
  };
}

export default Calculator;
