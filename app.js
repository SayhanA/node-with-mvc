const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use("/", (req, res, next) => {
  res.send("hello world");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
