const inElem = document.querySelector('.text-input');

const logTarget = (event) => {
    console.log(event.target.value);
}
inElem.addEventListener('change', logTarget);