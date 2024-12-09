const product = [];

class Product {
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }

  save() {
    product.push(this);
  }

  fetchAll() {
    return product;
  }
}

module.exports = Product;
