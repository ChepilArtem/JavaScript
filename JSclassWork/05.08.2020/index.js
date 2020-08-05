//input: number, number, number ... N;
//output: number;

//algo: 
//1. gather all arguments; +++
//2. multiplay


// function multiply(...args) {
//     //console.log(arguments);
//стрелочная функция работать не будет с arguments!
//     let res = 1;
//     args.forEach(el =>{
//         res = res * el;
//     });

//     // console.log(res);
//     return res;
// }
// const multiplyRes = multiply((10, 2, 1, 10, 7));
// console.log(multiplyRes);

// function multiply(...args) {
//     //console.log(args);

// }

//стрелочная функция работать не будет с arguments!

// function multiply(...args) {
//     //console.log(arguments);
//     console.log(args);

//     let res = 1;
//     const res = args.reduce((accumulator, currentValue) => {
//         //console.log("reduce callback is called")
//         console.log(res);
//         console.log(currentValue);

//         return res * currentValue;
//     });
//     console.log("reduce end");

//     return res;

// };
// const multiplyRes = multiply(10, 2, 1, 10, 7);
// console.log(multiplyRes);


function multiply(...args) {
    return args.reduce((res, currentValue) => res * currentValue);
  }
  
  const multiplyRes = multiply(10, 2, 1, 10, 7, -10);
  console.log(multiplyRes);