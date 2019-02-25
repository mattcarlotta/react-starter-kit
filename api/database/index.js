import bluebird from "bluebird";
import mongoose from "mongoose";
import { DB } from "../../envs";

export default () => {
  mongoose.connect(DB, { useNewUrlParser: true }); // connect to our mongoDB database
  mongoose.Promise = bluebird; // bluebird for mongoose promises
  mongoose.connection.on(
    "connected",
    () => console.log(`\u001b[32mConnected to ${DB}\u001b[0m\n`) // console MongoDB connection established
  );
  mongoose.connection.on(
    "disconnected",
    () => console.log(`\n\u001b[36mDisconnected from ${DB}\u001b[0m`) // console MongoDB connection disconnected
  );

  mongoose.connection.on(
    "error",
    () => console.log(`\u001b[31mConnection error to ${DB}\u001b[0m\n`) // console MongoDB connection error
  );

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        `\u001b[35mConnection was manually terminated from ${DB}\u001b[0m` // console MongoDB manual disconnection
      );
      process.exit(0);
    });
  });
};
