const people = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
};

const getAdults = obj => {
    let result = {};
    for (let prop in obj) {
      if (obj[prop] >= 18) {
        result[prop] = obj[prop];
      }
    }
    return result;
  };
  
  const result = getAdults(people);
  
  console.log(result);