const buildObject = (keysList, valueList) => {
    
    let newArr = [];
    
    for (let i = 0; i < keysList.length; i++) {
        newArr.push([keysList[i], valueList[i]]);
    }

    let newObj = Object.fromEntries(newArr);
    return newObj;
};

const keys = ['name', 'born', 'age'];
const values = ['Art', 'Kiev', 28];

console.log(buildObject(keys, values));