// Conditional Looping

// -- if statement
// let x = 10
// if (x > 5) {
//     console.log("x lebih besar dari 10")
// }

// let age = 18
// if (age >= 18) {
//     console.log("Anda sudah bisa membuat SIM")
// }

// let score = "90"
// if (score === 90) {
//     console.log("Nilai sempurna")
// }

// -- nested if statement
// let age = 40;
// if (age >= 18) {
//     if (age < 30) {
//         console.log("Anda masuk kategori dewasa muda")
//     }
// }

// let balance = 75
// if (balance > 50) {
//     console.log("Saldo masih dihitung")
//     if (balance < 200) {
//         console.log("Saldo lebih dari cukup untuk transaksi kecil")
//         if (balance > 80) {
//             console.log("Saldo cukup untuk transaksi kecil")
//         }
//     }
// }

// -- if else statement
// let x = 12;
// if (x > 10) {
//     console.log("x lebih besar dari 10")
// } else {
//     console.log("x lebih kecil dari 10")
// }

// let password = "admin12345"
// if (password === "admin12345") {
//     console.log("Login berhasil")
// } else {
//     console.log("Login gagal. Silahkan cek kembali password anda")
// }

// -- else if statement
// let score = 75;
// if (score >= 90) {
//     console.log("Nilai A")
// } else if (score > 75) {
//     console.log("Nilai B")
// } else {
//     console.log("Nilai C")
// }

// let balance = 75
// if (balance > 50) {
//     console.log("Saldo masih dihitung")
// } else if (balance < 200) {
//     console.log("Saldo lebih dari cukup untuk transaksi kecil")
// } else if (balance > 80) {
//     console.log("Saldo cukup untuk transaksi kecil")
// } else {
//     console.log("Saldo tidak diketahui")
// }

// -- difference between nested if & if-else
// -- nested if case
// let age = 10
// if (age < 18) {
//     console.log("Anda anak-anak")
//     if (age < 60) {
//         console.log("Anda dewasa")
//         if (age > 60) {
//             console.log("Anda lansia")
//         }
//     }
// }

// -- else if case
// let age = 10
// if (age < 18) {
//     console.log("Anda anak-anak")
// } else if (age < 60) {
//     console.log("Anda dewasa")
// } else if (age > 60) {
//     console.log("Anda lansia")
// } else {
//     console.log("Tidak diketahui")
// }

// -- switch case statement -> untuk yang nilainya fixed
// case 1 : squid game
let signal = "yellow light"
// switch (signal) {
//     case "green light":
//         console.log("lari")
//         break;
//     case "red light":
//         console.log("berhenti")
//         break;
//     case "yellow light":
//         console.log("bersiap-siap")
//         break;
//     default:
//         console.log("dor")
//         break;
// }

// case 2 :
// let userRole = 'admin'
// let isLoggedIn = true
// switch (userRole) {
//     case "admin":
//         if (isLoggedIn) {
//             console.log("Selamat datang, Admin! Anda memiliki akses penuh di Agus Shop")
//         } else {
//             console.log("Silakan login dulu untuk mengakses admin dashboard")
//         }
//         break;
//     case "user":
//         if (isLoggedIn) {
//             console.log("Selamat datang, selamat berbelanja di Agus Shop")
//         } else {
//             console.log("Silakan login dulu untuk mengakses Agus Shop")
//         }
//         break;
//     default:
//         console.log('Kamu siapaaaaaaa?')
// }

// -- gerbang logika
// && -> AND
// || -> OR

// Notes : gerbang AND selalu didahulukan ketimbang OR

// -- AND logic
// true & true = true
// false & true = false
// true & false = false
// false & false = false

// -- OR logic
// true & true = true
// false & true = true
// true & false = true
// false & false = false

let statementOne = 10 >= 11;
let statementTwo = 4 < 30;
let statementThree = 5 === "5"
let statementFour = 10 != "5"

// case 1
// if (statementOne && statementTwo) {
//     console.log('verified')
// }

// case 2
// if (statementFour && statementOne) {
//     console.log("verified")
// }

// case 3
// if (statementTwo || statementFour && statementOne) {
//     console.log("verified")
// }

// case 4
// if (statementOne || statementThree && statementTwo && statementFour) {
//     console.log("verified")
// } 

// -- chaining conditions 1
// let age = 25;
// if (age >= 18 && age <= 30) {
//     console.log("Anda dewasa muda")
// }

// -- chaining conditions 2
// let isLoggedIn = true;
// let isAdmin = false;
// if (isLoggedIn && isAdmin) {
//     console.log("Selamat datang Admin!")
// }

// -- ternary operator statement
// case 1
// let age = 18
// let canDrive = age >= 18 ? 'Anda sudah bisa membuat SIM' : 'Anda belum bisa membuat SIM'

// kalo ditranslate ke if else biasa :
// if (age >= 18) {
//     console.log("Anda sudah bisa membuat SIM")
// } else {
//     console.log("Anda belum bisa membuat SIM")
// }

// console.log(canDrive)

// case 2
// let temperature = 27
// let checkTemperature = temperature == 34 ? "normal" : temperature < 34 ? "dingin" : "panas"

// notes -> ternary operator harus selalu ditutup else statement (:)

// kalo ditranslate ke if else biasa:
// if (temperature == 34) {
//     console.log("normal")
// } else if (temperature < 34) {
//     console.log('dingin')
// } else {
//     console.log('panas')
// }

// console.log(checkTemperature)

// USE CASE : Undian berhadiah
// kita punya 5 jenis kategori hadiah : smartphone, laptop, smartwatch, voucher belanja, headset

// let undian = Math.floor(Math.random() * 10) + 1
// console.log("Nomor undian Anda : ", undian)

// let hadiah;

// switch (undian) {
//     case 1:
//         hadiah = "smartphone"
//         break;
//     case 2:
//         hadiah = "laptop"
//         break;
//     case 3:
//         hadiah = "smartwatch"
//         break;
//     case 4:
//         hadiah = "voucher belanja"
//         break;
//     case 5:
//         hadiah = "headset"
//         break;
//     default:
//         hadiah = null
// }

// `` -> backtik untuk string
// ${} -> template literal, untuk menyisipkan nilai variabel ke dalam string
// let hasil = hadiah ? `Selamat, anda mendapatkan ${hadiah}` : "Anda kurang beruntung"
// console.log(hasil)

// if(hadiah){
//     console.log(`Selamat anda mendapatkan ${hadiah}`)
// } else {
//     console.log("Anda kurang beruntung")
// }

// -- looping statement
// -> untuk melakukan sebuah perulangan

// case : cetak hello world sebanyak 10x
// for (let i = 0; i < 10; i++) {
//     console.log("Hello World")
// }

// case : cetak angka sebanyak 10x
// for (let i = 1; i < 10; i++) {
//     console.log(i)
// }

// case : cek isi array
// let fruits = ['apple', 'banana', 'orange']
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// case : hitung angka negative
// for(let i = -1; i >= -10; i--){
//     console.log(i)
// }

// case : menampilkan bilangan genap dari range 1 hingga 10
// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0) { // -> kalau diganti 1 menjadi bilangan ganjil, kalau diganti 0 menjadi bilangan genap
//         console.log(i)
//     }
// }

// -- nested for statement
// case : menghitung perulangan angka didalam perulangan
// for (let i = 0; i < 5; i++) {
//     console.log(i)
//     for (let j = 0; j < 3; j++) {
//         console.log(' ---- ', j)
//     }
// }

// case : membuat pohon natal
// let rows = 6

// for (let i = 1; i <= rows; i++) {
//     let stars = ""
//     for (let j = 1; j <= i; j++) {
//         stars += "*"
//     }
//     console.log(stars)
// }

// -- while statement
// case 1 : mengisi bensin
// let fuelLevel = 0;
// let tankCapacity = 50;

// while (fuelLevel < tankCapacity) {
//     console.log("Mengisi bensin ... Level saat ini : ", fuelLevel)
//     fuelLevel += 10; // menambah bensin 10 liter
// }
// console.log("Tangki sudah penuh")

// case 2 : menghitung tabungan hingga mencapai target
// use case -> kita setor sebesar 5000 setiap minggunya
// let target = 50000
// let savings = 0
// let week = 1

// while (savings < target) {

//     console.log(`Minggu ${week} : menabung Rp5000`)
//     savings += 5000;
//     week++
// }

// console.log(`Total tabungan terkumpul : Rp${savings}`)


// -- do while statement
// case 1 : mencicipin makanan di restoran
// let liked = false; // apakah makanan cocok atau tidak
// let attempts = 0;

// do {
//     attempts++;
//     console.log(`Mencicipi makanan ke-${attempts}`)
//     liked = Math.random() > 0.7; // 30% kemungkinan suka
// } while (!liked)

// console.log(`Makanan cocok ditemukan setelah ${attempts} kali mencoba`)

// case 2 : menghitung lemparan koin
let coin; // menyimpan hasil lemparan koin
let outcomes = ["Kepala", "Buntut"]; // kemungkinan hasil yang ditemukan
let attempts = 0; // menentukan sudah berapa kali melempar
let wasFind = false

// -- cara pertama
// do {
//     coin = outcomes[Math.floor(Math.random() * outcomes.length)]
//     attempts++;
//     console.log(`Percobaan ke-${attempts} : menampilkan koin ${coin}`)
// } while (coin !== "Kepala")

// console.log(`Membutuhkan ${attempts} kali percobaan`)

// -- cara ariq
// do {
//     numbers = Math.random() * 10;
//     numbers = Math.floor(numbers)
//     if (numbers < 5) {
//       side = outcomes[0];
//       wasFind = false;
//     } else {
//       side = outcomes[1];
//       wasFind = true
//     }
//     attempts++;
//     console.log("percobaan ke -", attempts, "menampilkan :", side);
//   } while (wasFind);
//   console.log("sisi kepala sudah muncul setelah", attempts, " kali percobaan");

// -- cara emil (belum fixed)
// do{
//     attempts++
//     console.log(`Lemparan koin ke ${attempts}`)
//     coin = Math.random() > 0.5
//     
// }while(coin)

// console.log(`sisi kepala muncul setelah ${attempts} kali mencoba`)