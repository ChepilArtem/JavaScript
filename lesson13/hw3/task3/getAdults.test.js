import {getAdults} from './getAdults.js'

it ('should return more than 18 years', () => {
    const result = getAdults({
        'John Doe': 19,
        'Tom': 17,
        'Bob': 18,
    });
    expect(result).toEqual({'John Doe': 19, Bob: 18});
});