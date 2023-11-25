const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;