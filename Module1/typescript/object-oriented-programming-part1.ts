// -- Interface Concept
// -> seperti membuat blue-print dari suatu objek

// case 1 : definisikan objek tabung
interface Cylinder {
    type: string;
    diameter: number;
    color: string;
    height: number;
    outline: string
}

let cylinder = {
    type: 'cylinder',
    diameter: 12,
    color: "brown",
    height: 20,
    outline: "black"
}

// case 2 : definisikan objek user untuk form register
interface User {
    name: string;
    email: string;
    age: number;
}

let user: User = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    age: 27
}


// -- Types Concept
// -> untuk membuat 'tipe data' baru yang didefinisikan seperti interface
// -> types bisa tunggal maupun berbentuk objek

// case 1 : definisikan variabel bernama username
type Username = string;
let username: Username = "john.doe"

// case 2 : definisikan objek bernama car
type Car = {
    brand: string;
    model: string;
    price: number;
}

let car: Car = {
    brand: "BMW",
    model: "X1",
    price: 450000000
}

// -- Property & Method
// -> berisi informasi yang terdapat di dalam suatu objek

// case 1 : mobile legends character
interface Hero {
    name: string;
    role: string;
    health: number;
    attackPower: number;
    attack: (target: Hero) => void;
    ultimate: (target: Hero) => void;
}

let alucard: Hero = {
    name: "Alucard",
    role: "Fighter",
    health: 3000,
    attackPower: 250,
    attack(target) {
        console.log(this.name, " menyerang ", target.name, " dengan power ", this.attackPower)
        target.health -= this.attackPower
    },
    ultimate(target) {
        let damage = this.attackPower * 2
        console.log(this.name, " menggunakan ultimate dan memberikan ", damage, " damage ke ", target.name)
        target.health -= damage;
    }
}

let layla: Hero = {
    name: "Layla",
    role: "Marksman",
    health: 2500,
    attackPower: 300,
    attack(target) {
        console.log(this.name, " menyerang ", target.name, " dengan power ", this.attackPower)
        target.health -= this.attackPower
    },
    ultimate(target) {
        let damage = this.attackPower * 2
        console.log(this.name, " menggunakan ultimate dan memberikan ", damage, " damage ke ", target.name)
        target.health -= damage;
    }
}

// -- cek info karakter
// console.log(layla.health) -> cek health layla
// console.log(alucard.role) -> cek role nya alucard

// -- simulasi serangan
// alucard.attack(layla)
// layla.ultimate(alucard)

// console.log(alucard)
// console.log(layla)

// -- Add & Delete Property
// -> property didalam object bisa ditambahkan maupun dihapuskan

// case 1 : mendefinisikan objek dari seorang employee

type DetailInfo = {
    address: string,
    hobbies: any[],
}

interface Employee {
    name: string,
    age: number,
    job?: string, // -> optional chaining, property tidak wajib diisi
    detail: DetailInfo
}

let employee: Employee = {
    name: "John Doe",
    age: 27,
    detail: {
        address: "Jl. Doktor Satrio",
        hobbies: ["mabar mobile legend"]
    }
}

// -- before add property
// console.log("before add property : ", employee)

// -- after add/edit property
// employee.job = "Web Developer"
// employee.name = "Agus"
// employee.detail.address = "Jl. Sudirman"
// employee.detail.hobbies = ["programming", "learning"]

// console.log("after add property : ", employee)

// -- delete property
// delete employee.job // -> menghilangkan property "job"
// console.log("after job deleted : ", employee)

// case 2 : mendefinisikan data student

type Modules = {
    exam: number,
    code_challenge: number
}

interface Student {
    name: string,
    program: string,
    info: {
        isRemedial: boolean,
        scores: Modules[],
    }
}

let student: Student = {
    name: 'Bob',
    program: 'JCWD',
    info: {
        isRemedial: false,
        scores: [
            {
                exam: 85,
                code_challenge: 70
            },
            {
                exam: 90,
                code_challenge: 70
            },
            {
                exam: 90,
                code_challenge: 70
            }
        ]
    }
}

// -- mengambil salah satu nilai code challenge
// console.log('total score of module 2 : ',student.info.scores[1].code_challenge)

// -- mengambil nilai rata-rata code challenge, kalau hasil rata-ratanya dibawah 80 berarti harus remidial
function checkScore() {
    let total = 0;
    let count = 0;

    // loop untuk menjumlahkan nilai code_challenge
    for (let i = 0; i < student.info.scores.length; i++) {
        total += student.info.scores[i].code_challenge // menambahkan nilai code challenge
        count += 1 // menghitung jumlah elemen
    }

    // menghitung rata-rata
    let average = total / count

    // menentukan apakah remidial atau tidak
    let notes;
    if (average < 80) {
        student.info.isRemedial = true
        notes = "Perlu mengikuti remidial"
    } else {
        notes = "Tidak perlu mengikuti remidial"
    }

    return {
        average: average,
        notes: notes
    }
}

// console.log(checkScore())

// -- Acccessing key
// -> object bisa diambil key/propertinya

let vehicle: Car = {
    brand: "Tesla",
    model: "Model S",
    price: 2000000000
}

// -- mengambil key dari model, price, dan brand

// cara 1 -> pakai method Object.keys
// console.log(Object.keys(vehicle))

// cara 2 -> pakai for in
// for (let key in vehicle) {
//     console.log(key)
// }

// -- Mutable vs Immutable
// mutable -> tipe data yang bisa dimodifikasi/diubah-ubah
// immutable -> sebaliknya

// ------ contoh mutable
let fruits = ["apple", "mango", "banana", "strawberry"]
// sebelum ditambahkan durian
// console.log("sebelum ditambahkan durian : ", fruits)
// setelah menambahkan durian (dari belakang elemen)
fruits.push("durian")
// console.log("setelah menambahkan durian (dari belakang elemen) : ", fruits)
// setelah menghapus durian (dari belakang elemen)
fruits.pop()
// console.log("setelah menghapus durian (dari belakang elemen) : ", fruits)

// setelah ditambahkan durian (dari depan elemen)
fruits.unshift("durian")
// console.log("setelah menambahkan durian (dari depan elemen) : ", fruits)

// setelah menghapus durian (dari depan elemen)
fruits.shift()
// console.log("setelah menghapus durian (dari depan elemen) : ", fruits)


// -------- contoh immutable
// -> variabel dibawah disebut immutable, karena tidak bisa dimodifikasi
let fullName = "John Doe" // --> "Bob"
// console.log(fullName)
fullName = "Bob"

// --- Destructuring Assignment
// -> cara lain untuk memanggil array/object

// -- destructure untuk object
let userInfo = {
    nickName: "Bob",
    age: 30
}
let { nickName, age } = userInfo
// console.log("nickname : ", nickName)
// console.log("age : ", age)

// -- destructure untuk array
let randomNumbers = [10, 20, 30]
let [first, second, third] = randomNumbers
// console.log("random numbers : ", first, second, third)

// --- Spread Operator
// case 1 : menggabungkan dua array yang berbeda (dengan spread operator)
let arr1 = [10, 9, 8, 7]
let arr2 = [1, 2, 3, 4, 5, 6]
// let mergedArray = [...arr1, ...arr2]
// console.log('result of merged array : ', mergedArray)

// dengan method concat
// console.log("result of merged array : ", arr1.concat(arr2))

// case 2 : cloning array
let devices = ["laptop", "smartphone", "headset", "mouse"]
let clonedDevices = [...devices]
// console.log("result of cloned devices : ", clonedDevices)

clonedDevices.push("smartwatch")
// console.log(devices)

let originalArray = [1, 2, 3, 4, 5];
let clonedArrayOne = [...originalArray]
let clonedArrayTwo = [...clonedArrayOne]
let clonedArrayThree = [...clonedArrayTwo]

clonedArrayOne.push(10)
// console.log(clonedArrayTwo)

// case 3 : cloning object
let smartphone = {
    type: "samsung",
    operatingSystem: "android"
}

let clonedSmartphone = { ...smartphone }
// console.log("result of cloned smartphone : ", clonedSmartphone)

// -- Object method built-in

// -- Object.assign
let source = { a: 1, b: 2, c: 3, d: 4 }
let target = { a: 3, b: 4, d: 5, f: 1 }
let returnedTarget = Object.assign(target, source)
// console.log("result of returned target : ", returnedTarget)

// -- Object.freeze
let laptop = {
    type: "macbook pro",
    year: 2019
}

// Object.freeze(laptop) // -> untuk mengunci object supaya tidak bisa ditambahkan/dihapus propertinya
laptop.year = 2020
// console.log("result after freezed : ", laptop) // -> akan muncul error ketika kita paksa untuk mengedit properti "year"

// -- Object.entries
let keyOfLaptop = Object.entries(laptop)
// console.log("key of laptop : ", keyOfLaptop)