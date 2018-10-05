//============================================================//
//* MONGO DB CONFIG */
//============================================================//
module.exports = app => {
  const bluebird = app.get("bluebird");
  const mongoose = app.get("mongoose");
  const db = app.get("database");
  // require('../models/user')(mongoose); // Mongo User Model
  // require('../models/post')(mongoose); // Mongo Post Model
  // require('../models/project')(mongoose); // Mongo Project Model
  // // require('../models/comment')(mongoose); // Mongo Comment Model

  mongoose.connect(
    db,
    { useNewUrlParser: true }
  ); // connect to our mongoDB database

  mongoose.Promise = bluebird; // bluebird for mongoose promises

  mongoose.connection.on("connected", () => console.log(`Connected to ${db}`));

  mongoose.connection.on("disconnected", () =>
    console.log(`Disconnected from ${db}`)
  );

  mongoose.connection.on("error", () => console.log("Connection Error"));

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(`Process disconnected from ${db}`);
      process.exit(0);
    });
  });
};
