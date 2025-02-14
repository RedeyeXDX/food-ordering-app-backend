require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const restaurantRouter = require("./router/restaurantRouter");
const menuRouter = require("./router/menuRouter");

app.use(express.json());
app.use(cors());
app.use("/restaurant", restaurantRouter);
app.use("/menu", menuRouter);

console.log("Successfully connected to DB!");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
