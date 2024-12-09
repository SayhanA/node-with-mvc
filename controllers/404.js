const get404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "No Page Found" });
};

module.exports = { get404 };
