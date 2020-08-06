//input: object, string;
//output: object;

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

function addPropertyV2(userData, userId) {
    //input: object ... ;
    //output: object;
    Object.assign(userData, {id: userId});
    return userData;
}

function addPropertyV3(userData, userId) {
    new Obj = {};
    const objToAdd = { id: userId};
    return Object.assign(newObj, userData, {id: userData});
}

function addPropertyV4(userData, userId) {
    const userDataCopy = {...userData};
    console.log(userDataCopy);
}

function addPropertyV5(userData, userId) {
    return {...userData, id: userId};
}


const obj = {
    name: "Artem",
    age: "35",
    city: "Kiev"
};

// console.log(addPropertyV1(obj, "222222"));
// // console.log(obj);

// console.log(addPropertyV2(obj, "333333"));
// // console.log(obj);

// console.log(addPropertyV3(obj, "44444"));
// // console.log(obj);

// console.log(addPropertyV4(obj, "55555"));
// // console.log(obj);

// console.log(addPropertyV5(obj, "66666"));
// // console.log(obj);
//////////////////////////////////////////////////////////////////////////////////////////////

//spread operator
// const arr = [1, "test", 10];
// console.log(...arr);


// function test(num, name, age) {

// }

// test(arr[0], arr[1], arr[2]);
// test(...arr);