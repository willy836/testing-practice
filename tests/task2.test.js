const reverseStr = require('../functions/task2');

test('return reversed string', ()=> {
    expect(reverseStr('abcd')).toBe('dcba');
});