function swap(arr) {
    const [first, ...mas] = arr;
    let arr2 = [...mas, first];
    return arr2;
};