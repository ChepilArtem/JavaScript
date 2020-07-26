const arrAverage = (arr) => !Array.isArray(arr) ? null : arr.reduce((accumulator, currentValue) =>
accumulator + currentValue) / arr.length;

const arr = [2, 5, 6, 3];
console.log(arrAverage(arr));