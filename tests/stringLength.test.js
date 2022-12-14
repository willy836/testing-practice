const stringLength = require('../functions/stringLength')

test('properly count char in string', ()=> {
    expect(stringLength('name')).toBe(4);
})