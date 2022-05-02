import Calculator from "../js/calculator/Calculator";

describe('사칙연산 뺄셈 테스트', () => {
    test('3에서 1을 빼면 2이다.', () => {
        const calculator = new Calculator();
        expect(calculator.minus(3,1)).toEqual(2);
    })
});
