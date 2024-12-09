const product = [];

class Products {
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }

  save() {
    product.push({'name': this.name, 'description': this.description});
  }

  static fetchAll() {
    return product;
  }
}

module.exports = Products;
