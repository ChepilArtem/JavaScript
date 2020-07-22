let arr = [12, 28, 34, 10]

function checkSum(arr) {
    let sumOfElements = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        sumOfElements += arr[i];
    }
    if (sumOfElements > 100) {
        return true;
    }
    return false;
}
console.log(arr);