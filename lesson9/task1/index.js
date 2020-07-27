const people = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
};


const getAdults = userObj => Object.entries(userObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

console.log(getAdults(people));