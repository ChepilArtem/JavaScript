function increaseEvenEl(arr, delta) {

    if (!Array.isArray(arr)) {
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                console.log(arr[i] + delta);
                arr[i] = arr[i] + delta;
            }
            continue;
        }
    }
    return arr;
}