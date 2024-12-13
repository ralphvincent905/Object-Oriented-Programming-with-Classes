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

  // Part 5: Testing the System
  const store = new Store();

  const product1 = new ProductProperties("MacBook", 2500, 5);
  const product2 = new ProductProperties("iPhone 16", 1500, 10);
  const perishable1 = new PerishableProductProperties("Milk", 3, 50, "2024-12-31");
  const perishable2 = new PerishableProductProperties("Eggs", 2.5, 100, "2024-12-25");
  const product3 = new ProductProperties("Airpods", 200, 20);

  store.addProduct(product1);
  store.addProduct(product2);
  store.addProduct(perishable1);
  store.addProduct(perishable2);
  store.addProduct(product3);

  console.log("Total Inventory Value (Before Discount):", `$${store.getInventoryValue().toFixed(2)}`);

  ProductUtils.applyDiscount(store.inventory, 0.15);