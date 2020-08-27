//output: array;
//input: object;

//algo:
//1. iterate keysList with reduce
//2. get key/value & add to res object


function buildObject(keysList, valueList) {

    keysList.reduce((accamulator, curValue) => {
        console.log(curValue);

        //todo finish solution
    });

};

const keys = ["name", "age"];
const values = ['denis', '100'];

buildObject(keys, values);

const buildObject = (keysList, valuesList) => {
    return keysList.reduce((acc,next,index) => {
        console.log(acc)
        console.log(next)
    }, {})
};