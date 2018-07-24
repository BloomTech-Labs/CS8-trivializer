// const Game = require('../games/gameModel.js'); for use when we link games to rounds
const Round = require('./roundModel.js');
const router = require("express").Router();

router
    .get('/get', (req, res) => {

        Round
            .find({})
            .then(round => {
                res.status(200).json(round);
            })
            .catch(err => {
                res.status(500).json(err);
            });
        })

router
    .post('/create-round', (req, res) => {
        const settings = req.body;
    
        console.log("SETTINGS", req.body);
        const round = new Round(settings);
        console.log("NEW ROUND GETTING PASSED SETTINGS", round);
        round
        .save()       
        .then(inserted => {
            console.log("rnd", inserted)
                console.log ("req.body: Questions", req.body)
                inserted.questions = req.body
                res.status(201).json(inserted);
        })
        .catch(err => res.status(500).json(err));
})

module.exports = router