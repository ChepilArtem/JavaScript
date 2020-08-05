export const getTitleElement = function () {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
}
export const getInputElement = function () {
    const inputElem = document.querySelector('input');
    console.dir(inputElem);
    return inputElem;
}
getTitleElement();
getInputElement();