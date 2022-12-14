const Calculator = require('../functions/task3');

const calculate = new Calculator(10, 5);

describe('my calculator results', ()=> {
    test('addition', ()=> {
        expect(calculate.add()).toBe(15);
    });
    test('subtraction', ()=> {
        expect(calculate.subtract()).toBe(5);
    });
    test('multiplication', ()=> {
        expect(calculate.multiply()).toBe(50);
    });
    test('division', ()=> {
        expect(calculate.divide()).toBe(2);
    });
});