const add = require('../complements/add');

test('one parameter is not a number', () => {
    expect(() => { add('x', 2) }).toThrow(Error);
});

test('add 4 * 3', () => {
    expect(add(4, 3)).toBe(7);
});