function getSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return null;
    };
    for (let i of arr) {
        sum += i;
    }
    return sum;
}