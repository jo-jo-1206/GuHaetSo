"use_strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;

        try {
            const { user_id, user_password } = await UserStorage.getUserInfo(client.user_id);
        
            if (user_id) {
                if (user_id === client.user_id && user_password === client.user_password) {
                    return { success: true, user_id: user_id };
                }
    
                return { success: false, msg: "비밀번호가 틀렸습니다."};
            }
    
            return { success: false, msg: "존재하지 않는 아이디입니다."};
        } catch(err) {
            return { sucess: false, msg: err };
        }

    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch(err) {
            return { success: false, msg: err };
        }
        
    }

    static async update(id, userInfo) {
        try {
            const response = await UserStorage.updateUser(id, userInfo);
            return response;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = User;