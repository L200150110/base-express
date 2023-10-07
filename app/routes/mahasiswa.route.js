module.exports = (app) => {
  const mahasiswa = require("../controllers/mahasiswa.controller.js");
  const r = require("express").Router();

  r.get("/find", mahasiswa.findAll);
  r.get("/view", mahasiswa.view);
  r.post("/new", mahasiswa.create);
  r.put("/edit", mahasiswa.update);
  r.delete("/delete", mahasiswa.delete);

  app.use("/mahasiswa", r);
  // localhost:8000/mahasiswa/
};
