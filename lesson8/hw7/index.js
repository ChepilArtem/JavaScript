const compareObjects = (obj1, obj2) => {
    let compareObj1 = Object.keys(obj1);
    let compareObj2 = Object.keys(obj2);

    if (compareObj1.length !== compareObj2.length) {
        return false;
    };

    let a = true;

    for (let key of compareObj1) {
        if (obj1[key] !== obj2[key]) {
            console.log(compareObj2);
            return false;
        }
        
    }
    return a;
};