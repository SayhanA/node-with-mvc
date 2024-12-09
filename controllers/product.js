const getProduct = (req, res, next) => {
  res.send("<h3>Admin page</h3>");
};

const postProduct = (req, res, next) => {
  res.redirect("/shop");
};

const getProductList = (req, res, next) => {
  res.send("<h3>This is shop page</h3>");
};

module.exports = { getProduct, postProduct, getProductList };
