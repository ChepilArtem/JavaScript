export const createCalculator = () => {
    let start = 0;

    function add(num) {
        return start += num;
    };

    function decrease(num) {
        start -= num;
    };

    function reset(num) {
        start = 0;
    };

    function getMemo(num) {
        return start;
    };

    return {
        add, decrease, reset, getMemo,
    }
};