const multiply = require('../complements/multiply');

test('one parameter is not a number', () => {
    expect(() => { multiply('x', 2) }).toThrow(Error);
});

test('one number is zero', () => {
    expect(multiply(4, 0)).toBe(0);
});

test('multiply 4 * 3', () => {
    expect(multiply(4, 3)).toBe(12);
});