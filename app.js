const express = require("express");
const bodyParder = require("body-parser");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const adminRoute = require("./router/admin.js");
// const shopRoute = require("./router/shop.js");
const { get404 } = require("./controllers/404.js");
const mongoConnect = require("./utils/database.js").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParder.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
// app.use("/", shopRoute);

app.use(get404);


mongoConnect(() => {
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
});
