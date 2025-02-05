
 export {
 }

class Product {
    private name: string;
    private price: number;

    constructor(name:string, price: number) {
        this.name = name
        this.price = price 
    }
    public getName(): string {
        return this.name;
    }
    public getPrice(): number {
        return this.price;
    }
    public getInfo(): void {
        console.log("Produk: ", this.name, "Harga: ", this.price)
    }
}

class FoodProduct extends Product {
    private expiryDate: string;
    
    constructor(name:string, price: number, expiryDate: string) {
        super(name, price)
        this.expiryDate = expiryDate
    }

    public getExpiryDate(): string {
        return this.expiryDate
    }
    public getInfo(): void {
        console.log("Produk: ", this.getName(), "Harga: ", this.getPrice(), "Kedaluwarsa: ", this.expiryDate)
    }

}

class ElectronicProduct extends Product {
    private warranty: number;
    
    constructor(name: string, price: number, warranty: number) {
        super(name, price);
        this.warranty = warranty ;
    }

    public getWarranty(): number {
        return this.warranty
    }

    public getInfo(): void {
        console.log("Produk: ", this.getName(), "Harga: ", this.getPrice(), "Garansi: ", this.warranty, "bulan")
        
    }
}

let foodProduct = new FoodProduct("Roti", 15000, "2025-01-01")
foodProduct.getInfo()

let electronicProduct = new ElectronicProduct("Laptop", 15000000, 24)
electronicProduct.getInfo()