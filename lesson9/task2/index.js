const people = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
};

const copyObj = obj => Object.assign({}, obj);

console.log(copyObj(people));