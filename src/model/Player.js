const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  { strict: false }
);

mongoose.model("Player", PlayerSchema);