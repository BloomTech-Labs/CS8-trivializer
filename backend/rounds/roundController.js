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
        const { gameId } = req.body;
        const { roundName, numberOfQuestions, category, difficulty, type, questions } = req.body.round;
        
        const round = new Round({gameId, roundName, numberOfQuestions, category, difficulty, type, questions });

        round
        .save()       
        .then(inserted => {
                console.log ("INSERTED", inserted);
                inserted.questions = req.body
                res.status(201).json(inserted);
        })
        .catch(err => res.status(500).json(err));
})

module.exports = router