"use_strict";

class UserStorage {
    static #users = {
        id: ["zzz11411"],
        password: ["harrycho0998"],
        name: ["조성우"],
        category: ["car-repair"],
        phoneNumber: ["01056794775"],
        email: ["zzz11411@naver.com"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {

        });
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.name.push(userInfo.name);
        users.category.push(userInfo.category);
        users.phoneNumber.push(userInfo.phoneNumber);
        users.email.push(userInfo.email);
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;