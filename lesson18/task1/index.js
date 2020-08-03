export const event = {
    guests: [
        { name: 'Jonh', age: 18, email: 'example@Server.com', },
        { name: 'Mark', age: 16, email: 'qweqwe@Server.com', },
        { name: 'Sara', age: 25, email: 'some@Server.com', },
    ],
    message: "Welcome to the party!",
    getInvitations() {
        return this.guests
        .filter(({ age }) => age >= 18)
        .map(({ name, email }) => ({
            email: `${email} `,
            message: `Dear ${name}! ${this.message}`,
            email
        }));
    }
}
console.log(event.getInvitations());

