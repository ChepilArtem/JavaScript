const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
};

const addPropertyV2 = (userData, userId) => {
    const result = Object.assign(userData, {id: userId});
    return result;
};

const addPropertyV3 = (userData, userId) => {
    const result = Object.assign({}, userData,  {id: userId});
    return result;
};

const addPropertyV4 = (userData, userId) => {
    const result = Object.assign({...userData}, {id: userId});
    return result;
};