export class DivideZeroError extends Error {
    constructor() {
    super('0으로는 나눌 수 없지');
    this.name = 'Divide Zero Error';
    }
}
class Calculator {
    divide = (a, b) => {
    if (b === 0) {
        throw new DivideZeroError();
    }
    return a / b;
    }
}