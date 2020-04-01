const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    nickname:{  type: String},
    team:{  type: String},
    role:{  type: String},
    kills:{  type: Number},
    assist: {  type: Number},
    deaths: {  type: Number},
    totalGames: {  type: Number},
    totalWins:{  type: Number}

  },
  { strict: false }
);

mongoose.model("Player", PlayerSchema);