const getEquation = string => {
    const operators = /[\+\-\*\/]/;
    if(typeof string !== 'string'){
        return [];
    }
    //clean spaces
    string = string.replaceAll(" ", "");

    if(string.length < 3){
        return [];
    }

    const equationTerms = [""]; // here store the terms

    let i = 0;

    // check if the first number is negative or has a positive simbol
    if (isNaN(string[0])) {
        i = 1;
        if (string[0] === '-') {
            equationTerms[0] = "-";
        }
    }

    // here divide code into numbers and operators to easy manipulate
    while (i < string.length) {
        const char = string[i];
        if (operators.test(char)) {
            equationTerms.push(char);
            equationTerms.push("");
        }
        else {
            const last = equationTerms.length - 1;
            equationTerms[last] = String(equationTerms[last]).concat(String(char));
        }
        i++;
    }
    // convert to numbers
    for (let k = 0; k < equationTerms.length; k++) {
        if (!isNaN(equationTerms[k])) {
            equationTerms[k] = Number(equationTerms[k]);
        } else {
            if (equationTerms[k] === '-') {
                equationTerms[k] = '+';
                equationTerms[k + 1] = Number(equationTerms[k + 1]) * -1;
            }
        }
    }

    return equationTerms;
};

module.exports = getEquation;