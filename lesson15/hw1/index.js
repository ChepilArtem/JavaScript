export function createLogger() {
    let memory = [];

    function warn(str) {
        let warn = {
            dateTime: new Date(),
            massege: str,
            type: 'warn',
        }
        return memory.push(warn);
    }

    function error(str) {
        let error = {
            dateTime: new Date(),
            massege: str,
            type: 'error',
        }
        return memory.push(error);
    }

    function log(str) {
        let log = {
            dateTime: new Date(),
            massege: str,
            type: 'log',
        }
        return memory.push(log);
    }

    function getRecords(type) {
        if (!type) {
            return memory.sort((a, b) => b.dateTime - a.dateTime);
        }
        return memory.filter(elem => elem.type === type).sort((a, b) => b.dateTime - a.dateTime);
    }

    return {
        warn, error, log, getRecords,
    };
}