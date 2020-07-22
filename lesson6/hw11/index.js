function getSubArray(arr, num) {
    let a = [ ];
    for (let i = 0; i <= num - 1; i++) {
        a.push(arr[i]);
    }
    return a;
}