const product = [];

class Product {
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }

  save() {
    product.push(this);
  }

  static fetchAllProduct() {
    return product;
  }
}

module.exports = Product;
