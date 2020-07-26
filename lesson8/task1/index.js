const transformToObject = arr => {
    let obj = {};
    arr.forEach(elem => {
    obj[elem] = elem;
    });
    return obj;
}

const array = ['a', '17.1', 'John Doe'];
const newObj = transformToObject(array);

console.log(newObj);