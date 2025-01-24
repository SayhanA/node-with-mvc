const getDb = require("../utils/database").getDb;

class Products {
  constructor(title, description, imageUrl, price) {
    // (this.id = id),
      (this.title = title),
      (this.price = price),
      (this.imageUrl = imageUrl),
      (this.description = description);
  }
  save() {
    const db = getDb('new');
    return db.collection("products")
      .insertOne(this)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Products;
