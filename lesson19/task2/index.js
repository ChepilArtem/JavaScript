export function getOwnProps(obj) {
    // for (let prop in obj) {
    //     if (obj.hasOwnProperty(prop)) {
    //         return prop;
    //     }
    // }
    return Object.keys(obj).filter((i) => typeof obj[i] != 'function');
}