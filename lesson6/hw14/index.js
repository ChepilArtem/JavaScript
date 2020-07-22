let myArray = [23, 27, 4, 27, 32, 4, 8, 54];

function uniqueCount(array) {
let uniq = [ ];
let a = 0;
    for (let i = 0; i < array.length; i++) {
        let j = 0;
        while (j < a && uniq[j] !== array[i]) j++;
        if (j == a) uniq[a++] = array[i];
    }
    return uniq.length;
}
console.log(uniqueCount(myArray));