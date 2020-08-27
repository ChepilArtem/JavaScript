'use strict'

function printMessage(age, city) {
    console.log(this);
    console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}
let user = {
    name: "Alex",
    email: "gmail.com",
}

//1. 
//input: obj, arg1... arg2...
//output: func
const printMessageBinded = printMessage.bind(user);
printMessageBinded(100, 'Lviv');

printMessage.bind(user, 100, 'Lviv')();

//input: obj, func, arg...
//output: func
const myBind = (func, context, ...args) => {

    //TODO

}

// myBind(printMessage, user, 200, 'Kiev')
