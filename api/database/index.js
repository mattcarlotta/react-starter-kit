module.exports = app => {
  const bluebird = app.get("bluebird");
  const mongoose = app.get("mongoose");
  const db = app.get("database");

  mongoose.connect(db, {
    useNewUrlParser: true, // avoids DeprecationWarning: current URL string parser is deprecated
    useCreateIndex: true, // avoids DeprecationWarning: collection.ensureIndex is deprecated.
    useFindAndModify: false // avoids DeprecationWarning: collection.findAndModify is deprecated.
  }); // connect to our mongodb database

  mongoose.Promise = bluebird; // bluebird for mongoose promises

  mongoose.connection.on(
    "connected",
    () => console.log(`\u001b[32mConnected to ${db}\u001b[0m\n`) // log mongodb connection established
  );

  mongoose.connection.on(
    "disconnected",
    () => console.log(`\n\u001b[36mDisconnected from ${db}\u001b[0m`) // log mongodb connection disconnected
  );

  mongoose.connection.on(
    "error",
    () => console.log(`\u001b[31mConnection error to ${db}\u001b[0m\n`) // log mongodb connection error
  );

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        `\u001b[35mConnection was manually terminated from ${db}\u001b[0m` // log mongodb manual disconnection
      );
      process.exit(0);
    });
  });
};
