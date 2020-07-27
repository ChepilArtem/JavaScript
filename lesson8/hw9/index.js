const a = { a: 1, b: 2, c: 3 };
const b = ['a', 'c'];

const pickProps = (obj, arr) => {
    let result = {};
    for (let find of arr) {
        if (Object.keys(obj).includes(find)) {
            result[find] = obj[find];
        }
    }
    return result;
};

const result = pickProps(a, b);
console.log(result);