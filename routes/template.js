// var json2csv = require("json2csv");
const json2csv = require("json2csv").parse;

exports.get = function(req, res) {
  var fields = ["car", "price", "color"];

  var json = [
    {
      car: "Audi",
      price: 40000,
      color: "blue"
    },
    {
      car: "BMW",
      price: 35000,
      color: "black"
    },
    {
      car: "Porsche",
      price: 60000,
      color: "green"
    }
  ];
  const csv = json2csv(json, fields);

  res.set("Content-Disposition", "attachment;filename=candidates.csv");
  res.set("Content-Type", "application/octet-stream");

  res.send(csv);
};
