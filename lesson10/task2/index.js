const numberList = [50, '50', '50.1txt', Infinity, null, NaN, undefined];

const getParsedIntegers = arr => arr.map(elem => Number.parseInt(elem));

const getParsedIntegersV2 = arr => arr.map(elem => parseInt(elem));

const getParsedFloats = arr => arr.map(elem => Number.parseFloat(elem));

const getParsedFloatsV2 = arr => arr.map(elem => parseFloat(elem));