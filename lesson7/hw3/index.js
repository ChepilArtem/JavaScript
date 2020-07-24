function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.find(i => i % 2 == 0)
        .map(each => each + delta);
}