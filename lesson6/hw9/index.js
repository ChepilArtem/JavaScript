let sortAsc = array => {
    if (!Array.isArray(array)) {
        return null;
    }
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let min = array[j + 1];
                array[j + 1] = array[j];

                array[j] = min;
            }
        }
    }
    return array;
}

let sortDesc = array => {
    if (!Array.isArray(array)) {
        return null;
    }
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let min = array[j + 1];
                array[j + 1] = array[j];
                array[j] = min;
            }
        }
    }
    let mas = [];
    for (let i = array.length - 1; i >= 0; i--) {
        mas.push(array[i])
    }
    return mas;
}