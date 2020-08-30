import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';

export const onToggleTask = (e) => {
    const isCheckbox = e.target.classList.contains("list__item-checkbox");

    if (!isCheckbox) {
        return;
    }

    const tasksList = getItem("tasksList");
    const newTasksList = tasksList.map((task) => {
        if (task.id === event.target.dataset.id) {
            const done = event.target.checked;
            return {
                ...task,
                done,
                doneDate: done ? new Date().toISOString() : null,
            };
        }

        return task;
    });

    setItem("tasksList", newTasksList);

    renderTasks();
};