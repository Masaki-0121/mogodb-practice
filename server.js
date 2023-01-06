// packageJsonのscript内のStartを初めにdevに変更する,nodeをnodemonに書き換える npm run dev
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");

app.use(foodRouter);
// Conecting Database
mongoose
  .connect(
    "mongodb+srv://Masa:1123928318Is@cluster0.wpmsrcu.mongodb.net/food?retryWrites=true&w=majority"
  )
  .then(() => console.log("successfully connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("サーバーが起動しました");
});
