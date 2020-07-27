const mergeObjectsV1 = (obj1, obj2) => {
    const result = Object.assign({}, obj1, obj2);
    return result;
};

const mergeObjectsV2 = (obj1, obj2) => {
    const result = Object.assign({}, obj2, obj1);
    return result;
};

const mergeObjectsV3 = (obj1, obj2) => {
    const result = {...obj1, ...obj2};
    return result;
};

const mergeObjectsV4 = (obj1, obj2) => {
    const result = {...obj2, ...obj1};
    return result;
};