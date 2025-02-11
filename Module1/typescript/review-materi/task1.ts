class MainProduct {
    public id: number;
    public name: string;
    public quantity: number;
    public price: number;

    constructor(
        id: number,
        name: string,
        price: number,
        quantity: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        if (price < 0 || quantity < 0) {
            console.log("price or quantity cannot be negative")
        }
    }
}


class Electronic extends MainProduct {
    constructor(id: number, name: string, price: number, quantity: number, warrantyPeriod: number) {
        super(id, name, price, quantity)
    }
}

class Clothing extends MainProduct {
    constructor(id: number, name: string, price: number, quantity: number, size: string, material: string) {
        super(id, name, price, quantity)
    }
}
class Grocery extends MainProduct {
    constructor(id: number, name: string, price: number, quantity: number, expirationDate: Date) {
        super(id, name, price, quantity)
    }
}

class WareHouse {
    private products: MainProduct[] = []

    addProduct(product: MainProduct): void {
        this.products.push(product)
    }

    getProduct(id: number): MainProduct | undefined {
        return this.products.find((value: any) => value.id === id)
    }

    updateProduct(id: number, quantity: number): void {
        const product = this.getProduct(id)
        if (product) {
            product.quantity = quantity
        }
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter((value: any) => value.id !== id)
    }

    listProduct(): MainProduct[] {
        return this.products
    }
}

const wareHouse = new WareHouse()
wareHouse.addProduct(new Electronic(1, "Laptop", 1500, 10, 20))
wareHouse.addProduct(new Clothing(2, "T-Shirt", 20, 50, "M", "Cotton"))

console.log(wareHouse.getProduct(1))
console.log(wareHouse.getProduct(2))

// --- List Product ---
console.log(" --- List Product ---")
console.log("retrieve all products : ", wareHouse.listProduct())
console.log(" --- Update Product ---")
wareHouse.updateProduct(2, 20)
console.log("retrieve all products after updated : ", wareHouse.listProduct())
console.log(" --- Remove Product --- ")
wareHouse.deleteProduct(2)
console.log("retrieve all products after deleted : ", wareHouse.listProduct())

console.log(" --- check product validation ---")
wareHouse.addProduct(new Clothing(3, "T-Shirt", 20, -10, "M", "Cotton"))