const elem = document.querySelector('.search__btn');

const logTarget = () => {
    const inElem = document.querySelector('.search__input');
    console.log(inElem.value);
}
elem.addEventListener('click', logTarget);