const connectDB = require("./db/connectdb");
require("dotenv").config();
const Products = require("./models/productsModels");
const productJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Products.create(productJson);
    console.log("Json file aa rahi hai");
  } catch (error) {
    console.log(error);
  }
};

start();
