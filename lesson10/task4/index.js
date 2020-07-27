const num = [-777, 3, -1, 45, -20];

const getMaxAbsoluteNumber = arr => {
if (!Array.isArray(arr) || arr.length == 0) {
    return null;
}
const a = arr.map(num => Math.abs(num))
return Math.max(...a);
}
console.log(getMaxAbsoluteNumber(num))