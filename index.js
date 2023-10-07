const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

const corsOptions = {
  origin: "*",
};

// register the cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// connect to database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
};
db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connect"))
  .catch((err) => {
    console.log(err);
    process.exit();
  });

// memanggil route mahasiswa
require("./app/routes/mahasiswa.route")(app);

const PORT = process.env.PORT || "8000";
app.listen(PORT, () => console.log(`start server on port ${PORT}`));
