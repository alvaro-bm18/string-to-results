const valid = require('../complements/validString');

test('wrong string equation', () => {
    expect(valid('1-2%3')).toBe(false);
});

test('wrong string equation', () => {
    expect(valid('123')).toBe(false);
});

test('valid string', () => {
    expect(valid('-1-2+2*3/2')).toBe(true);
});