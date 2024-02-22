const mongoose = require("mongoose");
require("dotenv").config();
const connect = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
};
module.exports = connect;
