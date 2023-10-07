const db = require("../models");
const mahasiswa = db.mahasiswa;

exports.create = (req, res) => {
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);

  mahasiswa
    .create(req.body)
    .then(() => res.send({ success: "create mahasiswa success" }))
    .catch((err) => res.status(500).send({ failed: err.message }));
};

exports.find = (req, res) => {
  mahasiswa
    .find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ failed: err.message }));
};

exports.view = (req, res) => {
  const id = req.params.id;

  mahasiswa
    .findById(id)
    .then((data) => {
      if (data) res.send(data);
      else res.status(404).send({ message: "data not found" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const { id } = req.body;

  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);

  mahasiswa
    .findByIdAndUpdate(id, req.body, {})
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "data not found" });
      } else res.send({ success: "update success" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  mahasiswa
    .findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "data not found" });
      } else res.send({ success: "delete success" });
    })
    .catch((err) => res.status(500).send(err.message));
};
