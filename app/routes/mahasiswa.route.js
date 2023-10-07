module.exports = (app) => {
  const mahasiswa = require("../controllers/mahasiswa.controller.js");
  const r = require("express").Router();

  r.get("/find", mahasiswa.find);
  r.get("/view/:id", mahasiswa.view);
  r.post("/new", mahasiswa.create);
  r.put("/edit", mahasiswa.update);
  r.delete("/delete/:id", mahasiswa.delete);

  app.use("/mahasiswa", r);
  // localhost:8000/mahasiswa/
};
