"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.get('/category', ctrl.output.category);
router.get('/detail', ctrl.output.detail);
router.get('/mypage', ctrl.output.mypage);

router.get('/userinfo/:id', ctrl.process.getUserInfo);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);
router.post('/updateUser/:id', ctrl.process.updateUserInfo);
router.post('/registerPost', ctrl.process.registerPoster);

module.exports = router;