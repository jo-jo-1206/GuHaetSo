"use_strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const Poster = require("../../models/Poster");
const PosterStorage = require("../../models/PosterStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
    category: (req, res) => {
        res.render("home/category");
    },
    detail: (req, res) => {
        res.render("home/detail");
    },
    mypage: (req, res) => {
        res.render("home/mypage");
    },
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body)
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body)
        const response = await user.register();
        return res.json(response);
    },
    getUserInfo: async (req, res) => {
        const userId = req.params.id;
        console.log("userId", userId);
        try {
            const userInfo = await UserStorage.getUserInfo(userId);
            console.log("userInfo", userInfo);
            if (userInfo) {
                res.json({ success: true, userInfo });
            } else {
                res.json({ success: false, msg: "사용자 정보를 찾을 수 없습니다."});
            }
        } catch (err) {
            res.json({ success: false, msg: err.message });
        }
    },
    updateUserInfo: async(req, res) => {
        const userId = req.params.id;
        const userInfo = req.body;
        try {
            const response = await User.update(userId, userInfo);
            res.json(response);
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    },
    registerPoster: async (req, res) => {
        const poster = new Poster(req.body);
        const response = await poster.register();
        return res.json(response);
    },
    getPostersByUserId: async (req, res) => {
        const userId = req.params.userId;
        try {
            const userPosts = await PosterStorage.getPostersByUserId(userId);
            res.json({ success: true, userPosts });
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    },
    deletePoster: async (req, res) => {
        const posterId = req.params.posterId;
        try {
            const result = await PosterStorage.deletePoster(posterId);
            res.json(result);
        } catch (err) {
            res.status(500).json({ sucess: false, msg: err.message });
        }
    }
};

module.exports = {
    output,
    process,
};