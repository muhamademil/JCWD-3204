// --- Class -> untuk membuat template sebuah objek

// contoh 1 : merepresentasikan buku di perpustakaan
class Book {
    title: string = "";
    author: string = "";
    pages: number = 0;

    read(): void {
        console.log("Reading ", this.title, " by ", this.author)
    }
}

let myBook = new Book()
myBook.title = "The Great Gatsby"
myBook.author = "F. Scott Fitzgerald"
myBook.pages = 180
// myBook.read()

// contoh 2 : merepresentasikan lampu 
class Lamp {
    isOn: boolean = false;
    turnOn(): void {
        this.isOn = true;
        console.log("Lamp is now ON")
    }
    turnOff(): void {
        this.isOn = false;
        console.log("Lamp is now OFF")
    }
}
let bedRoomLamp = new Lamp();
// bedRoomLamp.turnOn()

// contoh 3 : merepresentasikan kipas angin
class Fan {
    speed: number = 0;
    increaseSpeed(): void {
        this.speed++;
        console.log("Fan speed increased to ", this.speed)
    }
    decreaseSpeed(): void {
        this.speed--;
        console.log("Fan speed decreased to ", this.speed)
    }
}

let myFan = new Fan();
// myFan.increaseSpeed()
// console.log(" -------------------------------- ")
// myFan.decreaseSpeed()

// ------------- FUNCTION ---------------
// -- versi function biasa
function checkTemperature(temperature: number): string {
    if (temperature < 34) {
        return "Masuk angin"
    } else {
        return "Normal"
    }
}

// -- versi arrow function
// const checkTemperature = (temperature: number) => {
//     if (temperature < 34) {
//         return "Masuk angin"
//     } else {
//         return "Normal"
//     }
// }

// console.log(checkTemperature(35))

// --- Constructor

// contoh 1 : merepresentasikan kendaraan
class Vehicle {
    type: string;
    wheels: number;

    constructor(type: string, wheels: number) {
        this.type = type;
        this.wheels = wheels
    }

    drive(): void {
        console.log("Driving a ", this.type, " with ", this.wheels, " wheels.")
    }
}

let myCar = new Vehicle("Car", 4)
// myCar.drive()

// contoh 2 : merepresentasikan smartphone
class Smartphone {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo(): void {
        console.log("This is a ", this.brand, " ", this.model)
    }
}

let myPhone = new Smartphone("Apple", "iPhone")
// myPhone.displayInfo()

// --- Public & Private Properties --------------------------------
// public properties : property didalam class bisa diakses di luar class
// private properties : property didalam class tidak bisa diakses di luar class

// contoh 1 : akun bank dengan saldo yang tidak bisa diakses langsung
class BankAccount {
    public owner: string;
    private balance: number; // -> balance tidak bisa diakses langsung

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    public checkBalance(): void {
        console.log(this.owner, " has a balance ", this.balance)
    }
}

let account = new BankAccount("Bob", 15000000)
// account.checkBalance()

// contoh 2 : akun user dengan password yang diamankan
class UserAccount {
    public username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public checkPassword(): string {
        return "Password is protected"
    }
}

let userAccount = new UserAccount("agus_nohand", "12345")
// console.log(userAccount.checkPassword())

// --- Getter & Setter --
// set dan get adalah satu kesatuan, bukan function terpisah

// contoh 1 : merepresentasikan ac
class AirConditioner {
    private degree: number = 24

    set temperature(value: number) {
        if (value < 16 || value > 30) {
            console.log("Temperature must be between 16 and 30 degrees")
        } else {
            this.degree = value;
        }
    }
    get temperature() {
        return this.degree
    }
}

let airConditioner = new AirConditioner()
// console.log('before adjust : ',airConditioner.temperature)
// console.log('degrees adjustment process ...')
airConditioner.temperature = 18; // -> atur suhu ke 18 derajat
// console.log('after adjust : ',airConditioner.temperature)

// contoh 2 : merepresentasikan produk
class Product {
    private price: number = 0;

    set pricing(value: number) {
        if (value < 0) {
            console.log("Price cannot be negativve")
        } else {
            this.price = value
        }
    }

    get pricing() {
        return this.price
    }
}

let myProduct = new Product();
// console.log("before create price : ", myProduct.pricing)
myProduct.pricing = 100
// console.log("after create price : ", myProduct.pricing)

// --- Inheritance Concept

// contoh 1 : bird & animal
class Animal {
    move(): void {
        console.log("Moving ...")
    }
} // -> parent class

class Bird extends Animal {
    fly(): void {
        console.log("Flying ...")
    }
} // -> child class

let eagle = new Bird();
// eagle.move();
// eagle.fly();

// contoh 2 : spongebob squarepants characters
class SeaCreature {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    introduce(): void {
        console.log("Hi, my name is " + this.name + " and I am " + this.species);
    }
} // -> parent class

// kita buat karakter spongebob
class Spongebob extends SeaCreature {
    job: string;

    constructor(name: string, job: string) {
        super(name, "Sponge") // -> super untuk narik constructor dari parent class
        this.job = job;
    }

    cook(): void {
        console.log(this.name, "is cooking krabby patties with ", this.job, "at the Krusty Krab")
    }
} // -> child class untuk "Spongebob"

// kita buat karakter Patrick
class Patrick extends SeaCreature {
    favoriteActivity: string;

    constructor(name: string, favoriteActivity: string) {
        super(name, "Starfish")
        this.favoriteActivity = favoriteActivity;
    }

    relax(): void {
        console.log(this.name, " loves to ", this.favoriteActivity, " all day!")
    }
} // -> child class untuk "Patrick"


// kita panggil spongebob
let spongebob = new Spongebob("Spongebob", "Fry Cook")
// spongebob.introduce()
// spongebob.cook()

// console.log(" -------------------------------- ")

// kita panggil patrick
let patrick = new Patrick("Patrick", "sleep and eat")
// patrick.introduce()
// patrick.relax()

// -- inheritance raw concept
// class Parent {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     doingSomething(): void { }
// }

// class Child extends Parent {
//     constructor(name: string, age: number) {
//         super(name, age)
//     }
// }

// let child = new Child('bob', 21)
// child.doingSomething()

// --- encapsulation concept
// -> intinya kita tidak perlu tau ada property apa aja yang ada di dalam suatu class, tapi class tersebut bisa menghasilkan sesuatu

// contoh 1 : proses pembuatan kopi (kita tidak perlu tahu bagaimana proses kopi dibuat)
class CoffeMachine {
    private isGrinding: boolean = false

    private grindBeans(): void {
        this.isGrinding = true
        console.log("Grinding coffe beans ...")
    }
    private heatWater(): void {
        console.log("Heating water ...")
    }
    public makeCoffe(): void {
        this.grindBeans();
        this.heatWater();
        console.log("Coffe is ready!")
    }
}

let myCoffeMachine = new CoffeMachine()
myCoffeMachine.makeCoffe()