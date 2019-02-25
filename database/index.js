// import bluebird from "bluebird";
// import mongoose from "mongoose";
const bluebird = require("bluebird");
const mongoose = require("mongoose");
// import { DB } from "../envs";

const db = "mongodb://127.0.0.1/boilerplate-ssr-dev-db";

mongoose.connect(db, { useNewUrlParser: true }); // connect to our mongoDB database
mongoose.Promise = bluebird; // bluebird for mongoose promises
// mongoose.connection.on(
//   "connected",
//   () => console.log(`\u001b[32mConnected to ${db}\u001b[0m\n`) // console MongoDB connection established
// );
// mongoose.connection.on(
//   "disconnected",
//   () => console.log(`\n\u001b[36mDisconnected from ${db}\u001b[0m`) // console MongoDB connection disconnected
// );
//
// mongoose.connection.on(
//   "error",
//   () => console.log(`\u001b[31mConnection error to ${db}\u001b[0m\n`) // console MongoDB connection error
// );
//
// process.on("SIGINT", () => {
//   mongoose.connection.close(() => {
//     console.log(
//       `\u001b[35mConnection was manually terminated from ${db}\u001b[0m` // console MongoDB manual disconnection
//     );
//     process.exit(0);
//   });
// });
