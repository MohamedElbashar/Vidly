/** @format */
const winston = require("winston");
// require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
  winston.handleExceptions(
    new winston.transports.File({ filename: "uncaughtException.log" })
  );

  process.on("unHandledRejection", (ex) => {
    throw ex;
  });
  // winston.configure({
  //   transports: [new winston.transports.File({ filename: "logfile.log" })],
  // });
  winston.add(winston.transports.File, { filename: "logfile.log" });
  // winston.add(winston.transports.mongoDB, { db: "mongodb://localhost/vidly" });
};
