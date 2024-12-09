const get404 = (req, res, next) => {
  res.status(404).send("<h3> No Page Found </h3>");
};

module.exports = { get404 };
