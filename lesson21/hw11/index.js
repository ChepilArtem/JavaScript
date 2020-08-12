export const squaredNumbers = () => {
    Array.from(document.querySelectorAll('.number'))
        .forEach(el => {
            el.dataset.squaredNumber = Math.pow(el.dataset.number, 2)
        });
}

squaredNumbers();