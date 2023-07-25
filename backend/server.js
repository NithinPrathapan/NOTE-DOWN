const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todoRoute");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json()); // To parse JSON data

const PORT = process.env.PORT || 5000;

app.use(routes);

// !mongoose connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

//?sever connectoin

app.listen(PORT, () => {
  console.log("listening to PORT", PORT);
});
