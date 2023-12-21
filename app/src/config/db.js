const mysql = require("mysql");

const db = mysql.createConnection({
    host: "guheatso.c1c28ckoa0bh.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "12060218",
    database: "guhaetso"
});

db.connect();

module.exports = db;