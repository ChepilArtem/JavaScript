function getSpecialNumbers(m, n) {
    let mas = [];
    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            mas.push(i);
        }
    };
    return mas;
};