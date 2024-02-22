const Product = require("../models/productsModels");
const getAllProducts = async (req, res) => {
  const { company, name, featured, select } = req.query;
  // Tackel the Query using req.quer

  const queryObject = {};
  let apiData = Product.find(queryObject);
  // Query For filtration
  if (company) {
    queryObject.company = company;
    console.log(queryObject.company);
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
    console.log(queryObject.name);
  }
  if (featured) {
    queryObject.featured = featured;
  }
  if (select) {
    let sortfix = select.replace(",", " ");
    apiData = apiData.select(sortfix);
  }
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 4;

  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);
  const myData = await apiData; // fetch all data from database using this,
  res.status(200).json({
    msg: myData,
    nbHits:myData.length
  });
};
const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).select("name company"); //yaha pe se filtration hoga , sort(name)=asecending order A-Z mein milega ,sort(-name)=descending Z-A mein milega
  res.status(200).json({
    msg: myData,
  });
};

module.exports = { getAllProducts, getAllProductsTesting };
