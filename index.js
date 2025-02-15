require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const restaurantRouter = require("./router/restaurantRouter");
const menuRouter = require("./router/menuRouter");
const cartsRouter = require("./router/cartsRouter");
const authRouter = require("./router/authRouter");

app.use(express.json());
app.use(cors());
app.use("/restaurant", restaurantRouter);
app.use("/menu", menuRouter);
app.use("carts", cartsRouter);
app.use("/auth", authRouter);

console.log("Successfully connected to DB!");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
