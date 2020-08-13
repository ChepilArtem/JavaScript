const elem = document.querySelector('.task-status');

const logTarget = () => {
    console.log(elem.checked);
}

elem.addEventListener('change', logTarget);