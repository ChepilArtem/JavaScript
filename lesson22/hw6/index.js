function clicker(event) {
    const outText = event.target;
    console.log(outText.textContent);
};
const inText = document.querySelectorAll('.btn');

inText.forEach(function(btn) {
    btn.addEventListener('click', clicker);
});