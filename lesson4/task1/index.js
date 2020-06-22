let n = 100;
let sum = 0;

while(n > 0) {
    sum += n;
    n -= 100;
}

console.log("Result: ", + sum);