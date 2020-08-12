export function getSection(num) {
    const someEl = document.querySelector(`span[data-number='${num}']`)
    return someEl.closest('.box').dataset.section;
}