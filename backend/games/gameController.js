const express = require("express");
const router = require("express").Router();
const Game = require('./gameModel.js');
const User = require('../users/userModel.js'); //make sure we use this 

router.post('/create-game', (req, res) => {
    const settings = req.body;
    const game = new Game(settings);
    game
        .save()
        .then(inserted => {
            res.status(201).json(inserted);
        })
        .catch(err => res.status(500).json(err));
})

module.exports = router