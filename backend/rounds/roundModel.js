const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    numberOfQuestions: {
        type: Number,
        required: true
    },
    category: { // supplied by API
        type: String,
        required: true,
    },
    difficulty: { //supplied by API
        type:String,
        required: true,
    },
    choiceType: {
        type: String, //question, multiple choice or fill in the blank; api does not supply fill in the blank questions. only bools or choices.
        required: true,
    },
    questions: { //supplied by API
        type: Array,
        required: true
    },
    correctAnswer: { //supplied by API
        type: Array,
        required: true,
    },
    incorrectAnswers: { //supplied by API
        type: Array,
        required: true
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
    }
})

module.exports = mongoose.model('Round', roundSchema)