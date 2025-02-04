// -- Perbedaan antara pakai constructor dan tanpa constructor

// class SmartWatch {
//     type: string = ""
//     price: number = 0

//     displayInfo(): void {
//         console.log(this.type, " adalah sebuah smartwatch, dengan harga ", this.price)
//     }
// }

// let smartWatch = new SmartWatch()
// smartWatch.type = "Apple Watch"
// smartWatch.price = 300
// smartWatch.displayInfo()

// class SmartWatch {
//     type: string;
//     price: number;

//     constructor(type: string, price: number) {
//         this.type = type;
//         this.price = price;
//     }

//     displayInfo(): void {
//         console.log(this.type, " adalah sebuah smartwatch, dengan harga ", this.price)
//     }
// }

// let smartWatch = new SmartWatch("Apple Watch", 300)