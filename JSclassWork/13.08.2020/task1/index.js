const createLogger = () => {
    const records = [];
    return {
        warn(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'warn'
            });
        },
        error(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'error'
            });
        },
        log(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'log'
            });
        },
        //input: string;
        //output: array;

        //algo: 
        //1. check if input -> filter;
        //2. return all reords;
        //3. sort;
        getRecords(type) {
            return (type ? records
            .filter(message => message.type === type) : records)
            .sort((mes1, mes2) => {
            mes1.dateTime - mes2.dateTime;
            })
            // if(type) {
            //     return records
            //     .filter(message => message.type === type)
            //     .sort((mes1, mes2) => {
            //         mes1.dateTime - mes2.dateTime;
            //     });
            // } else {
            //     return records
            //     .sort((mes1, mes2) => {
            //         mes1.dateTime - mes2.dateTime;
            //     });
            // }
            }
        };
    };

const logger1 = createLogger();
console.log(logger1);

logger1.warn('Hello');
console.log(res)
logger1.error('shit');
logger1.error('some error');
logger1.log('some log messege');

console.log(logger1.getRecords());
console.log(logger1.getRecords('error'));