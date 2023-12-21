"use_strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE user_id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        })
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(user_id, user_name, user_password, user_phoneNumber, user_email) VALUES(?, ?, ?, ?, ?);";
            db.query(
                query,
                [
                    userInfo.user_id,
                    userInfo.user_name,
                    userInfo.user_password,
                    userInfo.user_phoneNumber,
                    userInfo.user_email
                ],
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        })
    }
}

module.exports = UserStorage;