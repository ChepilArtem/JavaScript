const concatProps = obj => {
    let arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

const user = {
    name: 'John Doe',
    age: 17,
    interest: 'football',
};
const newArr = concatProps(user);

console.log(newArr);