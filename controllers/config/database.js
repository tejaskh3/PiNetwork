const mongoose = require("mongoose");

exports.connectDatabase = (url) => {
  mongoose
    .connect(url)
    // .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .then((con) => console.log(`Database Connected: `))
    .catch((err) => console.log(err));
};
