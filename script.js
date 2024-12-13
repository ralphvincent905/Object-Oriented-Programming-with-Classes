// Part 1: Setting Up Classes
class ProductProperties {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalValue() {
      return this.price * this.quantity;
    }
  
    toString() {
      return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
  }

// Part 2: Adding Inheritance
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }
  
    toString() {
      return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
  }


// Part 3: Static Methods and Properties
class ProductUtils {
    static applyDiscount(products, discount) {
      products.forEach(product => {
        product.price -= product.price * discount;
      });
    }
  }

ProductUtils.applyDiscount(store.inventory, 0.10);

// Part 4: Store Management
class Store {
    constructor() {
      this.inventory = [];
    }
  
    addProduct(product) {
      this.inventory.push(product);
    }
  
    getInventoryValue() {
      return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
  
    findProductByName(name) {
      return this.inventory.find(product => product.name === name) || null;
    }
  }