const capitalizeStr = require('../functions/task4');

test('capitalize string', ()=> {
    expect(capitalizeStr('wilson')).toBe('Wilson');
})