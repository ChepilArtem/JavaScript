function clicker(event) {
    const outText = event.target;
    console.log(outText.dataset.pageNumber);
};

const inText = document.querySelectorAll('.pagination__page');

inText.forEach(function(btn) {
    btn.addEventListener('click', clicker);
})