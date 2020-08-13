const elemDiv = document.querySelector(".rect_div");
const elemP = document.querySelector(".rect_p");
const elemSpan = document.querySelector(".rect_span");
const clear = document.querySelector(".clear-btn");
const attachHandlers = document.querySelector(".attach-handlers-btn");
const removeHandlers = document.querySelector(".remove-handlers-btn");


const logTarget = (text, color) => {
    const eventListEl = document.querySelector(".events-list");
    eventListEl.innerHTML += `<span style="color:${color}; margin-left: 8px">${text}</span>`;
}

const logGreyDiv = logTarget.bind(null, 'DIV', "grey");
const logGreyP = logTarget.bind(null, 'P', "grey");
const logGreySpan = logTarget.bind(null, 'SPAN', "grey");

const logGreenDiv = logTarget.bind(null, 'DIV', "green");
const logGreenP = logTarget.bind(null, 'P', "green");
const logGreenSpan = logTarget.bind(null, 'SPAN', "green");

const turnOn = () => {
    elemDiv.addEventListener('click', logGreyDiv, true);
    elemP.addEventListener('click', logGreyP, true);
    elemSpan.addEventListener('click', logGreySpan, true);

    elemSpan.addEventListener('click', logGreenSpan);
    elemP.addEventListener('click', logGreenP);
    elemDiv.addEventListener('click', logGreenDiv);
}

turnOn();
const attachTurnOn = turnOn;
attachHandlers.addEventListener('click', attachTurnOn);

const turnOff = () => {
    elemDiv.removeEventListener('click', logGreyDiv, true);
    elemP.removeEventListener('click', logGreyP, true);
    elemSpan.removeEventListener('click', logGreySpan, true);

    elemSpan.removeEventListener('click', logGreenSpan);
    elemP.removeEventListener('click', logGreenP);
    elemDiv.removeEventListener('click', logGreenDiv);
}
const removeTurnOff = turnOff;
removeHandlers.addEventListener('click', removeTurnOff);

const clearEventList = () => {
    document.querySelector(".events-list").innerHTML = "";
};
const pushClear = clearEventList;

clear.addEventListener('click', pushClear);