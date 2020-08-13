const elem = document.querySelector('.single-use-btn');

function myClicker() {
    console.log('clicked')
    elem.removeEventListener('click', myClicker, false);
};
elem.addEventListener('click', myClicker);