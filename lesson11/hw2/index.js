const countOccurrences = (str1, str2) => {
    if (str2 == '') {
        return null;
    }
    return str1.split(str2).length - 1;
};

console.log(countOccurrences('Hi, whats up', 'full'));