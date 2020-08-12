export function getSection(num) {
    const searchEl = document.querySelector(`span[data-number='${num}']`)
    return searchEl.closest('.box').dataset.section;
}