"use strict";

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./src/routes/home/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
