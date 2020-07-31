export function createLogger() {
    let memory = [];

    function warn(str) {
        memory.push({
            dateTime: new Date(),
            massege: str,
            type: 'warn',
        });
    };

    function error(str) {
        memory.push({
            dateTime: new Date(),
            massege: str,
            type: 'error',
        });
    };

    function log(str) {
        memory.push({
            dateTime: new Date(),
            massege: str,
            type: 'log',
        });
    };

    function getRecords(type) {
        console.log(type)
        if (type !== undefined) {
            let result = memory.filter(elem => elem.type === type);
            return result;
        } else {
            return memory.sort((a, b) => b.dateTime - a.dateTime);
        }; 
    };

    return {
        warn, error, log, getRecords,
    };
}