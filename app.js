const express = require("express");
require("dotenv").config();
const app = express();
const products_Routes = require("./routes/productsRoutes");
const Db = require("./db/connectdb");
const { connect } = require("mongoose");
app.get("/", (req, res) => {
  res.send("Hi from the HomePage");
});
// Middelware to use Routes

app.use("/api/products", products_Routes);
app.use("/api/products", products_Routes);

const start = async () => {
  try {
    await connect(process.env.MONGO_URI)
    app.listen(3000, () => {
      console.log("Server is started");
    });
  } catch (error) {
    console.log(error);
  }
};

start()
