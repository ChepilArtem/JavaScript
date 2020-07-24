const flatArray = arr => arr
.reduse((acc, elem) => {
    return acc.concat(elem)}, []);
