export class Product {
  private id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getDetails(): string {
    return `Product: ${this.name} Price: $${this.price} Quantity: ${this.quantity}`;
  }

  // getStockValue(): string {
  //   return `Stock Value: $${this.price * this.quantity}`;
  // }

  getStockValue() {
    return this.price * this.quantity;
  }

  sell(unit: number): string {
    if (unit > this.quantity) {
      return "Not enough stock";
    } else {
      this.quantity -= unit;
    }
    return `${this.name} Sold ${unit} units`;
  }
}
