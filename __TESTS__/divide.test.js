const divide = require('../complements/divide');

test('dividend or divisor is not number', () => {
    expect(() => { divide('x', 0) }).toThrow(Error);
});

test('divisor is a zero', () => {
    expect(() => { divide(12, 0) }).toThrow(Error);
});

test('divition of 12 between 3', () => {
    expect(divide(12, 3)).toBe(4);
});