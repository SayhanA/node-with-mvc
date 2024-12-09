const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoute = require("./router/admin.js");
const shopRoute = require("./router/shop.js");
const { get404 } = require("./contorllers/404.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoute);
app.use("/shop", shopRoute);

app.use(get404);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
