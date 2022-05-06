import Calculator, { DivideZeroError } from "../js/calculator/Calculator";

describe('사칙연산 나눗셈 테스트', () => {
    test('0으로 나누면 에러가 발생한다.', () => {
        const calculator = new Calculator();
        expect(() => calculator.divide(9, 0)).toThrowError(DivideZeroError);
    })
});