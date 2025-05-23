import { Product } from "./models/01-Product";
import { DigitalProduct } from "./models/02-DigitalProduct";
import { PhysicalProduct } from "./models/03-Physical Product";

const sampleProduct = new Product(1, "Demo Product", 20, 50);
console.log(sampleProduct.getDetails());
console.log(sampleProduct.getStockValue());
console.log(sampleProduct.sell(10));

const sampleDigitalProduct = new DigitalProduct(
  1,
  "Demo Digital Product",
  20,
  50,
  100
);
console.log(sampleDigitalProduct.getDetails());
console.log(sampleDigitalProduct.getStockValue());
console.log(sampleDigitalProduct.getDownloadInfo());

const samplePhysicalProduct = new PhysicalProduct(
  1,
  "Demo Physical Product",
  22,
  50
);
console.log(samplePhysicalProduct.getStockValue());
