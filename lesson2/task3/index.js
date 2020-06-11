let goodNumber = 17;
let anotherNumber = 77;

console.log(goodNumber);
console.log(anotherNumber);

let customer = {name: 'John', age: '17'};
let anotheCustomer = customer;
anotheCustomer = {
    age: '20'
};

console.log(customer.age);
console.log(anotheCustomer.age);