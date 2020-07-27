const customers = {
    "customer-id-1": {
        name: "William",
        age: 54
    },
    "customer-id-2": {
        name: "Tom",
        age: 17
    }
};

const getCustomersList = obj => Object.entries(obj)
    .map(elem => ({ id: elem[0], ...obj[elem[0]] }))
    .sort((a, b) => a.age - b.age);

console.log(getCustomersList(customers));
console.log(Object.values(customers));