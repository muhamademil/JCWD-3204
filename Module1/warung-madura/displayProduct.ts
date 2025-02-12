import { getProduct } from "./modules/getProduct";
import { filterProduct } from "./modules/filterProduct";
function displayProduct() {
    console.log("Displaying all products ...")
    return getProduct()
}

console.log("filter by category : ", filterProduct("Makanan Instan"))
console.log(displayProduct())