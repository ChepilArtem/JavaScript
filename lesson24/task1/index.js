const daysOfTheWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const futureDay = new Date(date).setDate(day + days);
    return daysOfTheWeek[new Date(futureDay).getDay()];
};