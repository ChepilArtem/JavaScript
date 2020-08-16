export const getDiff = (startDate, endDate) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
     
    const difference = Math.abs(endDate - startDate);

    const daysDiff = Math.floor(difference / day);

    const hoursDiff = Math.floor((difference % day) / hour);

    const minutesDiff = Math.floor((difference % hour) / minute);

    const secondsDiff = Math.floor((difference % minute) / second);

    return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
};
