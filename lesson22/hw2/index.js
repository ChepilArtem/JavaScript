const eventsListElem = document.querySelector('.text-input');

const logTarget = () => {
    console.log(eventsListElem.value);
}
eventsListElem.addEventListener('change', logTarget);