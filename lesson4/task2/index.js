let a = 10;
let m = 10;
let n = 20;
let result = 1;

do {
    if(a % 2 === 1) {
        result *= a;
    }
    a++;
} while(a <= n);

console.log('Result: ' + result);
