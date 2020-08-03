export function sumOfSquares() {
    return [...arguments].reduce((acc, elem) => {
        return acc + elem * elem;
    })
};