"use_strict";

const PosterStorage = require('./PosterStorage');

class Poster {
    constructor(body) {
        this.body = body;
    }

    async register() {
        const client = this.body;
        try {
            const response = await PosterStorage.save(client);
            return response;
        } catch(err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = Poster;