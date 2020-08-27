// example
function makeCounter() {
    let count = 0;
	return function() {
        return count++;
    };
}
// example
function makeCounterNew() {
    let count = 0;
    count++;
    return count;
}


const counter1Func = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counterNew = makeCounterNew();
console.log(counter2Func());
console.log(counter2Func());
console.log(counter2Func());
console.log(counter2Func());