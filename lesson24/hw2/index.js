const tasks = [
    {text: 'Buy milk', id: '1', date: new Date(), done: false},
    {text: 'Pick up Tom from airport', id: '2', date: new Date(), done: false},
    {text: 'Visit party', id: '3', date: new Date(), done: false},
    {text: 'Visit doctor', id: '4', date: new Date(), done: false},
    {text: 'Buy meat', id: '5', date: new Date(), done: false},
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
            return new Date(b.date) - new Date(a.date);
        }
        return new Date(b.date) - new Date(a.date);
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
    renderTasks(tasks);
}
listElem.addEventListener('click', changeTask);


function createTask() {
    const input = document.querySelector('.task-input');
    const inputValue = input.value;
    if (!inputValue) return;
    tasks.push({
        text: inputValue,
        id: `${tasks.length + 1}`,
        date: new Date(), 
        done: false,});
    input.value = '';
    renderTasks(tasks);
}
createBtn.addEventListener('click', createTask);