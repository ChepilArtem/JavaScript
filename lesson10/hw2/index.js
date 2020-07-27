const getRandomNumbers = (length, end, start) => {
    if ((start < end) || (start - end < 1) && Math.ceil(start) === Math.ceil(end)) {
        return null;
    };
    let arr = [];
      
    for (let i = 0; i < length; i += 1) {
        arr[i] = Math.floor(Math.random() * (Math.floor(start) - Math.ceil(end) + 1)) + Math.ceil(end);
    };
    return arr;
};
console.log(getRandomNumbers(1, 9, 10));