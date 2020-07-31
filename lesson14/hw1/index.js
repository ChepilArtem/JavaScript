let start = 0;

export function add(num) {
    start += num;
};

export function decrease(num) {
    start -= num;
};

export function reset(num) {
    start = 0;
};

export function getMemo(num) {
    return start;
};