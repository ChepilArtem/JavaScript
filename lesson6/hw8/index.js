function checker(arr) {
let sum = 0;
let max = arr[0];
let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }

    sum = min + max;
    if (sum > 1000) {
        return true;
    } else {
        return false;
    }
}
