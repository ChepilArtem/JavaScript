class Order {
    constructor(id, name, sessionId) {
        this._id = string;
        this._name = string;
        this._sessionId = string;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }
};

class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get users() {
        return this._users;
    }
    getUserNames() {
        return this._users.map(i => i._name);
    }
    getUserIds() {
        return this._users.map(i => i._id);
    }
    getUserNameById(i) {
        return this._users.find(a => a.id === i).name;
    }
}

const usersArr = new User(`${Math.random()}`, 'Art', '53459');

const getUsersData = new UserRepository(['Lol', 'Bobby', 'Tom']);
console.log(getUsersData);
console.log(getUsersData.getUserNames());
console.log(getUsersData.getUserIds());
console.log(getUsersData.getUserNameById());


