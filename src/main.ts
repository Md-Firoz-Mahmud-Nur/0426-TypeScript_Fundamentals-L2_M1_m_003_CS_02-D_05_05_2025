import { Product } from "./models/01-Product";

const sampleProduct = new Product(1, "Demo Product", 20, 50);
console.log(sampleProduct.getDetails());
console.log(sampleProduct.getStockValue());
