export const createArrayOfFunctions = (num) => {
    let newArr = [];
    if (num === undefined ) return newArr;
    if (typeof(num) !== 'number') return null;
   
    for (let i = 0; i < num; i++) {
        newArr[i] = () => {
            return i;
        };
    }
    return newArr;
}