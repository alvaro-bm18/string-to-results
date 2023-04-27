const add = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("One value given is not a number");
    }

    const result = a + b;
    if (result !== Math.floor(result)) {
        return Number(result.toFixed(2));
    }

    return result;
};

module.exports = add;