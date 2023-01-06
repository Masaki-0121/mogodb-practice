const express = require("express");
const app = express();
const foodModel = require("../models/Food");

app.use(express.json());

/* データの取得 */
app.get("/foods", async (req, res) => {
  //データベース内のすべてのデータを返す。
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* データの作成 */
app.post("/food", async (req, res) => {
  const food = new foodModel(req.body);

  try {
    await food.save();
    res.send(food);
  } catch (error) {
    res.status(500).send(error);
  }
});
/* データの部分修正 */
app.patch("/food/:id", async (req, res) => {
  try {
    await foodModel.findByIdAndUpdate(req.params.id, req.body);
    await foodModel.save;
  } catch (error) {
    res.status(500).send(error);
  }
});
/* データの消去 */
app.patch("/food/:id", async (req, res) => {
  try {
    await foodModel.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
