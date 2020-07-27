const num = [17.159];

const getTotalPrice = arr => {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return '$' + Math.floor(sum * 100) / 100;
}
console.log(getTotalPrice(num));