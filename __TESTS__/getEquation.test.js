const getEquation = require("../complements/getEquation");

/* in this case, the previous module was controled to change the values */
/* this clean string convert  */

test('wrong string', () => {
    expect(getEquation(" -1")).toStrictEqual([]);
});

test('valid string', () => {
    expect(getEquation("2.2+4-1")).toStrictEqual([2.2, '+', 4, '+', -1]);
});