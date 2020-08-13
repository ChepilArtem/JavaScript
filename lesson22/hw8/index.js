const elem = document.querySelector('.task-status');

const logTarget = (event) => {
    console.log(event.target.checked);
}
elem.addEventListener('change', logTarget);