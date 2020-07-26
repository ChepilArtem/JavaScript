const sum = arr => !Array.isArray(arr) ? null : arr.reduce((acc, elem) => acc + elem);

const num = [8, 2, 3, 3, 5, -1]

console.log(sum(num));