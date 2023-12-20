"use_strict";

const users = {
    id: ["zzz11411"],
    password: ["harrycho0998"],
}

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    signup: (req, res) => {
        res.render("home/signup");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const password = req.body.password;
        console.log(id, password);

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인 실패",
        })
    },
};

module.exports = {
    output,
    process,
};