// getLocalStorageData

localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' })); // <- сохраняет и делает из обьекта строку!
localStorage.setItem('name', 'Tom');
localStorage.setItem('age', JSON.stringify(17));


export const getLocalStorageData = () => {
    return Object.entries(localStorage)     //Object.keys(localStorage)
     .reduce((acc, [key, value]) => {
         let newValue;
         try {
            newValue = JSON.parse(value);
         } catch(e) {
            newValue = value;
         }
         return {
             ...acc,
             [key]: newValue,
         }
     }, {});
    
}
 
console.log(getLocalStorageData());


// console.log(JSON.parse(localStorage.getItem('hobbies')));

//input: null
//output: obj
// const getLocalStorageData = () => {
//     for(let i = 0; i < localStorage.length; i++) {
//         localStorage.key(i)
//     }
// }

// const getLocalStorageData = () => {
//     for(let i of localStorage.length; i++) {
//         localStorage.key(i)
//     }
// }

