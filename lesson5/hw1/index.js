let getSum = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        i % 2 === 0 ? sum += i : 0;
    }
    return sum;
};