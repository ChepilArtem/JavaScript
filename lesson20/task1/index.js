export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createEmpty() {
        return new User('', null);
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(age) {
        this.age = age;

        if (age < 0) {
            return false;
        }

        if (age >= 25) {
            console.log(`New photo request was sent for ${this.name}`);
        }
        return age;
    }
};

console.log(User.createEmpty());


// export { User };