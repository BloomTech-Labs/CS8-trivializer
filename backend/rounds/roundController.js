// const Game = require('../games/gameModel.js'); for use when we link games to rounds
const Round = require('./roundModel.js');
const router = require("express").Router();

router.post('/create-round', (req, res) => {
    const settings = req.body;
    console.log("ROUND", settings);
    const round = new Round(settings);
    round
        .save()
        .then(inserted => {
            res.status(201).json(inserted);
        })
        .catch(err => res.status(500).json(err));
})

module.exports = router