const express = require("express");
const app = express();
const foodModel = require("../models/Food");
//Getting Data

app.get("/foods", async (req, res) => {
  //return all the data in the database
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
