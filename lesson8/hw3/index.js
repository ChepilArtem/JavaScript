const getKeys = obj => {
    let keysArr = Object.keys(obj);
    let newArr = keysArr.forEach(elem => {
        console.log(elem)
    });
    return newArr;
};

