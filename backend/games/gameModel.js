const mongoose = require("mongoose");


const gameSchema = new mongoose.Schema({
  userId: { 
    type: String
  },
  name: {
    type: String,
    default: "New Game" ,
    maxlength: 36 //arbitrary
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  playedAt: { // come back to this
    type: Date,
    default: Date.now,
  },
  logo: {
    data: Buffer,
    contentType: String 
  },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User"
  // },
  // rounds: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Rounds" // should be an array of round ID's
  // }
});


module.exports = mongoose.model("Game", gameSchema);
