function divide(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("One value given is not a number");
    }

    if (b === 0) {
        throw new Error('Divisor is equal to zero');
    }

    const result = a / b;
    if (result !== Math.floor(result)) {
        return Number(result.toFixed(2));
    }

    return result;
};

module.exports = divide;