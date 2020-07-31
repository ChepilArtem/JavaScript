import {getMinSquaredNumber} from './getMinSquaredNumber.js'

it ('should get null if arr === []', () => {
    const result = getMinSquaredNumber();
    expect(result).toEqual(null);
});

it ('should get null if arr === string', () => {
    const result = getMinSquaredNumber();
    expect(result).toEqual(null);
});

it ('should get min squared numbers', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});