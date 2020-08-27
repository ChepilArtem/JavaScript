// scope example
let a = 5;
//let b = 10;

for(let i = 0; i < 2; i++) {
    console.log(i);
    a++;
    console.log(a);

    let b = 10;
    b++;
}
// граница видимости переменных


console.log(b);