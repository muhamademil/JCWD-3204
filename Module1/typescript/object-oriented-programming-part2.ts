// -- Class -> untuk membuat template sebuah objek

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
myFan.increaseSpeed()
console.log(" -------------------------------- ")
myFan.decreaseSpeed()