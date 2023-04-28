const getEquation = require("./complements/getEquation");
const validString = require("./complements/validString");

const add = require("./complements/add");
const divide = require("./complements/divide");
const multiply = require("./complements/multiply");

const string = process.argv[2];

if (!validString(string)) {
    console.log(`The argument ${string}  is not a valid argument`);
    return;
}

const equationTerms = getEquation(string);

do {
    let index = null;
    let res = null;

    if (equationTerms.includes('*')) {
        index = equationTerms.indexOf('*');
        res = multiply(equationTerms[index - 1], equationTerms[index + 1]);
    } else {
        if (equationTerms.includes('/')) {
            index = equationTerms.indexOf('/');
            res = divide(equationTerms[index - 1], equationTerms[index + 1]);
        }
        else {
            if (equationTerms.includes('+')) {
                index = equationTerms.indexOf('+');
                res = add(equationTerms[index - 1], equationTerms[index + 1]);
            }
        }
    }

    if (index !== null && res !== null) {
        equationTerms[index - 1] = res;
        equationTerms.splice(index, 2);
    }
}
while (equationTerms.length !== 1);

console.log(`the result of ${string} is ${equationTerms[0]}`);