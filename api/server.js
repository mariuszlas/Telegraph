const express = require("express");
const cors = require("cors");
const router = require("./controllers/router.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

module.exports = app;