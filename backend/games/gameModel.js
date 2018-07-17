const mongoose = require("mongoose");


const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 36 //arbitrary
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  playedAt: { // come back to this
    type: Date,
    default: Date.now,
    required: false
  },
  logo: {
    type: String, //maybe file type later
    required: false
    //some field to specify it's max width and height
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  rounds: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rounds"
  }
});


module.exports = mongoose.model("Game", gameSchema);
