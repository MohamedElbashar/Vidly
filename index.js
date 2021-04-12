/** @format */
const mongoose = require("mongoose");
const customers = require("./routes/customers");
const express = require("express");
const genres = require("./routes/genres");
const app = express();

mongoose
    .connect("mongodb://localhost/vidly")
    .then(() => console.log("connected to MongoDB..."))
    .catch((err) => console.log("can not connect to MongoDB....", err));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));