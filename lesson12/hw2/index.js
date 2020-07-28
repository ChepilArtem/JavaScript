const cleanTransactionsList = sum => {
    let res = sum.filter(elem => {
        console.log(Number(elem));
        if (Number(elem)) {
            return elem;
        }
    });
    return res.map(elem => "$" + (+elem).toFixed(2));
};

console.log(cleanTransactionsList(["1.9", "16.4", "17", " 1 dollar "]));