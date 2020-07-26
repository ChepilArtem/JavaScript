const filterNames = (arr, text) =>
arr.filter(item => item.length > 5 && item.includes(text) ? item : false);

const names = ['Jonh', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];

console.log(filterNames(names, 'ya'));
