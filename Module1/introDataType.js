// Untuk penamaan file ada 3 macam jenis :

// camelCase -> digunakan untuk memberikan nama pada file/variable
// PascalCase -> digunakan untuk memberikan nama pada sebuah object Class
// snake_case -> digunakan apabila ada spasi di dalamnya

// -- Tipe data primitive

// 1. String -> karakter atau teks
let username = "John Doe";
let greeting = "Hello World";
let year = "2025";

// console.log(username)
// console.log(greeting)
// console.log(year)

// 2. Number -> angka biasa
let age = 26; // -> integer
let height = 5.9; // -> float
let negativeNumber = -10; // -> negative number

// console.log(age)
// console.log(height)
// console.log(negativeNumber)

// let varX = 10;
// let varY = 10
// console.log(varX + varY)

// 3. BigInt -> angka yang sangat besar
let bigNumber = 1234567890123456789012345678901234567890n
// console.log(bigNumber)

// 4. Boolean -> true atau false
let isVerified = false;
let hasDriveLicense = true;

// -- use case : menentukan kelulusan
let isGraduated = false;
// if (isGraduated) {
//     console.log("Sudah lulus")
// } else {
//     console.log("Belum lulus")
// }

// -- use case : menentukan besar/kecil suatu bilangan
let randomNumber = 20
// if (randomNumber <= 10) {
//     console.log("Kurang dari atau sama dengan 10")
// } else {
//     console.log("Lebih dari 10")
// }

// -- use case : menentukan tipe data tahun
let currentYearNumber = 2025
let currentYearStr = "2025"

// number == string -> pengecekan nilai tanpa tipe data
// if (currentYearNumber == currentYearStr) {
//     console.log('equals value')
// }

// number === string -> pengecekan nilai dengan tipe data
// if (currentYearNumber === currentYearStr) {
//     console.log('equals value')
// }

// 5. Null -> tidak ada nilai
let middleName = null;
// console.log(middleName);

// 6. Undefined -> tidak terdefinisi
let lastName;
// console.log(lastName);

// -- Non Primitive

// 1. Object 
let laptop = {
    typeName: "Macbook Air",
    color: "matte black",
    year: 2018,
    resolution: "13-inch",
    memory: {
        storage: "128 GB SSD",
        RAM: "8"
    }
}

// console.log(laptop.typeName)
// console.log(laptop.color)
// console.log(laptop.memory.storage)

// 2. Array

// [0, 1, 2, 3] -> di dalam array kita memainkan index untuk mengakses datanya
let fruitGroups = ['apple', 'orange', 'banana', 'kecubung']
let numberGroups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let mixedGroups = ['apple', 1, 'orange', 2, 'banana', 3]

let nameOfGroups = [['Budi', 'Agus handless'], ['Ucup', 'Agus eyeless']] // -> 2D array
let alphabetOfGroups = [['A', ['B', 'C', 'D']], ['E', ['F', 'G', 'H']], ['I']] // -> 3D array

// console.log(nameOfGroups[0][1])
// console.log(alphabetOfGroups[1][1][1])
// console.log(nameOfGroups.length)

// console.log(numberGroups[4]);
// console.log(mixedGroups[5])


// JSON : JavaScript Object Notation
let studentData = [
    {
        username: "Budi"
    },
    {
        username: "Agus"
    },
]

let productData = [
    {
        productName: "Kipas Angin portable",
        price: "IDR 30,000",
        image: ""
    }
]

// console.log(studentData[1].username)


// let message = "kalo aku chat kamu ada yang marah gak?"
let oddNumber = 5
oddNumber = "5"
// console.log(oddNumber)

// -- Method built in String
// length -> untuk menghitung panjang string/array
let message = "Hello, World"
// console.log(message.length)

// toLowerCase -> mengubah semua huruf dalam string menjadi huruf kecil
// console.log(message.toLowerCase())

// toUpperCase -> mengubah semua huruf dalam string menjadi huruf besar
// console.log(message.toUpperCase())

// includes -> menemukan kata tertentu dalam sebuah string
let phrase = "Javascript is awesome!"
// console.log(phrase.includes("script"))

let text = "Good Morning!"
// console.log(text.slice(0, 4))

// [G,o,o,d, ,M,o,r,n,i,n,g,!]

// -- Method built in Number
// let num = 12.34567
// console.log(num.toFixed(0)) // --> untuk membulatkan ke angka terdekat

// console.log('target angka : ', num.toString()) // --> konversi dari angka ke string
// console.log('tipe data : ', typeof num.toString())

let num = '12.34567'
// console.log(Number(num)) // --> konversi string ke number tanpa pembulatan
// console.log(parseInt(num)) // --> konversi string ke number dengan pembulatan

// -- Basic Operator
let numA = 5, numB = 10;

// console.log(numA + numB);
// console.log(numA - numB);
// console.log(numA * numB);
// console.log(numA / numB);
// console.log(numB % numA);

// -- Increment & Decrement

// increment
let counterIncrement = 0;
counterIncrement++; // menambah 1 angka didepan angka awal
// console.log(counterIncrement)

// increment dengan angka lain
// 1 + 3 = 4
counterIncrement += 3;
// console.log(counterIncrement)

// decrement
let counterDecrement = 3;
counterDecrement--; // mengurangi 1 angka didepan angka awal
// console.log(counterDecrement) 

// -- Postfix & Prefix

// Postfix Increment -> variabel digunakan/ditampilkan setelah ditambahkan
let numC = 5
// console.log(numC++) -> kenapa nilainya masih 5? karena sebelum dilakukan increment, udah keburu dicetak
// console.log(numC)

// Prefix Increment -> variabel ditambahkan dulu baru ditampilkan
let numD = 8;
// console.log(++numD); -> kenapa nilainya jadi 9? karena sesudah dilakukan increment, langsung dicetak
// console.log(numD)