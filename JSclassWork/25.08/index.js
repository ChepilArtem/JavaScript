'use strict'

function printMessege(age, city) {
    console.log(this);
    console.log(`Hello ${this.name}, email ${this.email}, age: ${this.age}`);
}

let user = {
    name: "Alex",
    email: "gmail.com"
}

//1
//input: obj, arg1... argN
//output: func
// const printMessegeBinded = printMessege.bind(user);
// printMessegeBinded(100, 'Lviv');

// const printMessegeBinded1 = printMessege.bind(user, 100, 'Lviv');

//THE SAME^^^
// printMessege.bind(user, 100, 'Lviv')();


//input: obj, arg1... argN
//output: func
// const myBind = (func, context, ...args) => {
//     console.log('STEP 1');
//     return function() {
//         console.log('STEP 2');
//         return func.call(context, ...args);
//     }
// }
// const printMessegeBinded = myBind(printMessege, user, 200, 'Kiev');
// printMessegeBinded();

// const myBind1 = (func, context, ...args) => {
//     console.log('STEP 1');
//     return function(...targetArgs) {
//         console.log('STEP 2');
//         return func.call(context, ...args, ...targetArgs);
//     }
// }
// const printMessegeBinded1 = myBind1(printMessege, user);
// printMessegeBinded(200, 'Kiev');

// const printMessegeBinded2 = myBind1(printMessege, user, 200);
// printMessegeBinded('Kiev');

//Option2

//input: obj, arg1... argN
//output: func

const mySuperBind = (func, context, ...args) => {
    console.log('STEP1');

    return function() {
        console.log('STEP2');

        const copyContext = {...context};
        copyContext.tempFunction = func;
        console.log(context);
        copyContext.tempFunction(...args);
    }


}
const printMessegeBinded3 = mySuperBind(printMessege, user, 50, 'Dnipro');
console.log(user);
printMessegeBinded3();

