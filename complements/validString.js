const isValid = string => {
    const operators = /[\+\-\*\/]/;
    if (typeof string !== 'string') {
        throw new Error("Given data is not a string");
    }

    if (!operators.test(string)) {
        return false;
    }

    string = string.replaceAll(" ", "");
    let i = isNaN(string[0]) ? 1 : 0;



    let valid = true;
    while (i < string.length) {
        if (isNaN(string[i])) {
            if (operators.test(string[i])) {
                if (isNaN(string[i - 1]) || isNaN(string[i + 1])) {
                    valid = false;
                    console.log(`Error : [${string[i - 1]} ${string[i]} ${string[i + 1]}]`);
                    break;
                }
            } else {
                valid = false;
                console.log(`Error : '${string[i]}' is an invalid character`);
                break;
            }
        }
        i++;
    }

    return valid;
}
module.exports = isValid;