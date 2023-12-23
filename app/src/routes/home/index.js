"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 홈페이지 렌더링
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.get('/category', ctrl.output.category);
router.get('/detail', ctrl.output.detail);
router.get('/mypage', ctrl.output.mypage);

// get API
router.get('/userinfo/:id', ctrl.process.getUserInfo);
router.get('/getPostersByUserId/:userId', ctrl.process.getPostersByUserId);

// post API
router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);
router.post('/updateUser/:id', ctrl.process.updateUserInfo);
router.post('/registerPost', ctrl.process.registerPoster);

// delete API
router.delete('/deletePoster/:posterId', ctrl.process.deletePoster);

module.exports = router;