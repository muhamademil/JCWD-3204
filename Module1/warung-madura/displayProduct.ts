import { ManageProduct } from "./modules/manageProduct"
import { APIPlaceholder } from "./modules/callingAPI"

// -- product management --
const manageProduct = new ManageProduct()
// console.log("display all products : ", manageProduct.getProduct())
// console.log("filter product by category : ", manageProduct.filterProduct("Kebutuhan Rumah Tangga"))
// console.log("search product : ", manageProduct.searchProduct("sabun"))
// console.log('get product by id : ',manageProduct.getProductById(2))

console.log('sort by termurah : ', manageProduct.sortingPrice("Termurah"))
console.log('sort by termahal : ', manageProduct.sortingPrice("Termahal"))

// -- dummy API calling --
// const api = new APIPlaceholder()
// console.log('result of placeholder : ',api.getPlaceholder())