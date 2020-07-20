let reverseArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let copy = arr.slice().reverse();
    return copy;
};