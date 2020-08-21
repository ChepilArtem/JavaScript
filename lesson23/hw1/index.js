//Algo:
//step 1: create an array of objects with tasks, two of which must be "true";
//step 2: create a function (renderTasks) that will render a task;
//step 3: create a checkbox event;
//step 4: create an object with a new task and push it in an array;
//step 5: unfit tasks should be at the top of the list;

const tasks = [
    {text: 'Buy milk', id: '1', dateStart: new Date(), dateEnd: new Date(), done: false},
    {text: 'Pick up Tom from airport', id: '2', dateStart: new Date(), dateEnd: new Date(), done: false},
    {text: 'Visit party', done: false, id: '3', dateStart: new Date(), dateEnd: new Date(), done: false},
    {text: 'Visit doctor', id: '4', dateStart: new Date(), dateEnd: new Date(), done: true},
    {text: 'Buy meat', id: '5', dateStart: new Date(), dateEnd: new Date(), done: true},
];

const listElem = document.querySelector('.list');
const createBtn = document.querySelector('.create-task-btn');

const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList   
    .sort((a, b) => {
        if (a.done - b.done !== 0) {
            return a.done - b.done;
        }
        if (a.done === true) {
            return new Date(b.dateEnd) - new Date(a.dateEnd);
        }
        return new Date(b.dateStart) - new Date(a.dateStart);
        })
    .map((task) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('data-id', task.id);
        checkbox.checked = task.done;
        checkbox.classList.add('list__item-checkbox');
        if (task.done) {
            listItemElem.classList.add('list__item_done');
        };
        listItemElem.append(checkbox, task.text);
        return listItemElem;
    });
listElem.append(...tasksElems);
};
renderTasks(tasks);

function changeTask(event) {
    const complete = event.target.classList;
    if (!complete.contains('list__item-checkbox')) return;
    const task = tasks.find(task => task.id === event.target.dataset.id);
    task.done = event.target.checked;
    task.doneDate = new Date();
    renderTasks(tasks);
}
listElem.addEventListener('click', changeTask);


function createTask() {
    const input = document.querySelector('.task-input');
    const inputValue = input.value;
    if (!inputValue) return;
    tasks.push({text: inputValue, id: `${tasks.length + 1}`, date: new Date(), done: false,});
    input.value = '';
    renderTasks(tasks);
}
createBtn.addEventListener('click', createTask);











































//how web works:
// get actual data;
// render;

//create algo
//1.add evenListener
//2.create task obj
//3.add to the task arr
//4.re render

// const addTask = () => {
//     const inputElem = document.querySelector('.task-input');

//     const task = {
//         text: inputElem.value,
//         done: false
//     }
//     task.push(tasks);
//     renderTasks(tasks);
// }

// const createBtn = document.querySelector('.create-task-btn');
// createBtn.addEventListener('click', addTask);


//сначала работа с данными а потом рисуем

