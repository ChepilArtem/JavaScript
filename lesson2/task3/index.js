let goodNumber = 17;
let anotherNumber = goodNumber;
anotherNumber = 77;

console.log(goodNumber);
console.log(anotherNumber);

const customer = {
    name: 'John',
    age: '17'
};

const anotheCustomer = customer;

anotheCustomer.age = 20;

console.log(customer.age);
console.log(anotheCustomer.age);