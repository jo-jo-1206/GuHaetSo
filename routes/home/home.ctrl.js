"use_strict";

const home = (req, res) => {
    res.render("home/home");
};

const signup = (req, res) => {
    res.render("home/signup");
};

module.exports = {
    home,
    signup,
};