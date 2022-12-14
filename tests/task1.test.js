const strLength = require('../functions/task1');

test('check if length of a string is between 1 and 10 chars', ()=> {
    expect(strLength('terminal')).toBe(8)
});