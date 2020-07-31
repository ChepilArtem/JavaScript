import {calc} from './calculator.js'

it ('should get sum === "+"', () => {
    const result = calc('a + b');
    expect(result).toEqual(result);
});

it ('should get sum === "-"', () => {
    const result = calc('a - b');
    expect(result).toEqual(result);
});

it ('should get sum === "*"', () => {
    const result = calc('a * b');
    expect(result).toEqual(result);
});

it ('should get sum === "/"', () => {
    const result = calc('a / b');
    expect(result).toEqual(result);
});

it ('should get null if expression !== string', () => {
    const result = calc();
    expect(result).toEqual(null);
});