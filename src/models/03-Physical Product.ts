import { Purchasable } from "../interface/01-Polymorphism";
import { Product } from "./01-Product";

export class PhysicalProduct extends Product implements Purchasable {
  getStockValue(): number {
    return this.price;
  }
}
