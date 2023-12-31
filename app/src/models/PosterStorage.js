"use_strict";

const db = require("../config/db");

class PosterStorage {
    static getPosterInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM posters WHERE poster_id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        })
    }

    static async save(posterInfo) {
        return new Promise((resolve, reject) => {
            console.log(posterInfo);
            const query = "INSERT INTO posters(poster_id, user_id, poster_title, poster_content, poster_category) VALUES(?, ?, ?, ?, ?);";
            db.query(
                query,
                [
                    posterInfo.poster_id,
                    posterInfo.user_id,
                    posterInfo.poster_title,
                    posterInfo.poster_content,
                    posterInfo.poster_category
                ],
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        })
    }

    static getPostersByUserId(userId) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM posters WHERE user_id = ?;";
            db.query(query, [userId], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static deletePoster(posterId) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM posters WHERE poster_id = ?;";
            db.query(query, [posterId], (err, result) => {
                if (err) reject(err);
                resolve({ success: true });
            });
        });
    }
}

module.exports = PosterStorage;