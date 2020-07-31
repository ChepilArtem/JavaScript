import {reverseArray} from './reverseArray.js'

it ('should get reverse array', () => {
    const result = reverseArray([1, 2, 3]);
    expect(result).toEqual([3, 2, 1]);
});

it ('should return "null" if array !Array', () => {
    const result = reverseArray();
    expect(result).toEqual(null);
});

