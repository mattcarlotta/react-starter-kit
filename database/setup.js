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

  mongoose.connection.on("connected", () =>
    console.log(`\u001b[32mConnected to ${db}\u001b[0m\n`)
  );

  mongoose.connection.on("disconnected", () =>
    console.log(`\n\u001b[36mDisconnected from ${db}\u001b[0m`)
  );

  mongoose.connection.on("error", () =>
    console.log(`\u001b[31mConnection error to ${db}\u001b[0m\n`)
  );

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        `\u001b[35mConnection was manually terminated from ${db}\u001b[0m`
      );
      process.exit(0);
    });
  });
};
