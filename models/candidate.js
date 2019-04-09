var mongoose = require("mongoose");

var candidateSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    firstName: {
      type: String,
      required: true
    },
    lastName: String
  },
  biography: String,
  profilePicture: Buffer,
  created: {
    type: Date,
    default: Date.now
  }
});

var Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
