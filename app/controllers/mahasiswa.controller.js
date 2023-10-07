const db = require("../models");
const mahasiswa = db.mahasiswa;

exports.create = (req, res) => {
  mahasiswa
    .create(req.body)
    .then(() => res.send({ success: "create mahasiswa success" }));
};

exports.findAll = (req, res) => {
  res.send({ message: "findall success" });
};

exports.view = (req, res) => {
  res.send({ message: "view success" });
};

exports.update = (req, res) => {
  res.send({ message: "update success" });
};

exports.delete = (req, res) => {
  res.send({ message: "delete success" });
};
