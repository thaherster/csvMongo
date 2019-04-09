var csv = require("fast-csv");
var mongoose = require("mongoose");
var Candidate = require("../models/candidate");

exports.post = function(req, res) {
  if (!req.files) return res.status(400).send("No files were uploaded.");

  var candidateFile = req.files.file;

  var candidates = [];

  csv
    .fromString(candidateFile.data.toString(), {
      headers: true,
      ignoreEmpty: true
    })
    .on("data", function(data) {
      data["_id"] = new mongoose.Types.ObjectId();

      candidates.push(data);
    })
    .on("end", function() {
      Candidate.create(candidates, function(err, documents) {
        if (err) throw err;
      });

      res.send(
        candidates.length + " candidates have been successfully uploaded."
      );
    });
};
