const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return weekDays[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(1992, 3, 4), 5);

console.log(result);
