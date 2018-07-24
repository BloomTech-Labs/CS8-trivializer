const mongoose = require('mongoose');

//round name, round category, number of questions

const roundSchema = new mongoose.Schema({
    roundName: {
        type: String,
        default: "Trivializer Round"
    },
    numberOfQuestions: {
        type: String,
    },
    category: { 
        type: String,
    },
    difficulty: {
        type: String,
    },
    type: {
        type: String,
    },
    questions: { //supplied by API
        type: Array,
        required: true
    },
    // game: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Game',
    // }
})

module.exports = mongoose.model('Round', roundSchema)