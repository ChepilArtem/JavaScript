const listElem = document.querySelector('.list');
const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];
const renderTasks = tasksList => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);
            return listItemElem;
        });
    listElem.append(...tasksElems);
};
renderTasks(tasks);

//how web works:
// get actual data;
// render;

//create algo
//1.add evenListener
//2.create task obj
//3.add to the task arr
//4.re render

const addTask = (event) => {
    const inputElem = document.querySelector('.task-input');

    const task = {
        text: inputElem.value,
        done: false
    }
    task.push(task);
    renderTasks(tasks);
}

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);

//сначала работа с данными а потом рисуем