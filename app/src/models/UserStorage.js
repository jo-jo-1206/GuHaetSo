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
            const query = "INSERT INTO users(user_id, user_name, user_password, user_email) VALUES(?, ?, ?, ?);";
            db.query(
                query,
                [
                    userInfo.user_id,
                    userInfo.user_name,
                    userInfo.user_password,
                    userInfo.user_email
                ],
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        })
    }

    static updateUser(id, userInfo) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE users SET user_phone = ?, user_email = ?, user_carrer = ?, user_region = ? WHERE user_id = ?;"
            db.query(
                query,
                [
                    userInfo.user_phone,
                    userInfo.user_email,
                    userInfo.user_carrer,
                    userInfo.user_region,
                    id
                ],
                (err, result) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true, msg: "프로필이 업데이트되었습니다. "});
            });
        });
    }
}

module.exports = UserStorage;