let squareArray = (array) => {
    if (!Array.isArray(array)) 
    return null;
    let another = [...array]
    return another.map(i => { 
        return i * i 
    });
};