// -- Contoh Synchronous --
// -> menghasilkan output yang sequence (berurutan)
// console.log("Memulai proses ...")
// let result = 5 + 3;
// console.log("Hasil Penjumlahan : ", result)
// console.log("Proses selesai!")

// -- Contoh Asynchronous --

// contoh 1
// console.log("Memulai proses ...")

// // setTimeout -> untuk menunda proses
// setTimeout(() => {
//     let result = 5 + 3
//     console.log("-- akan dieksekusi setelah 2 detik --")
//     console.log("Hasil Penjumlahan : ", result)
// }, 2000) // -> 2000 milisecond atau sama dengan 2 detik

// console.log("Proses selesai!")

// contoh 2
// console.log("mana duluan yang dieksekusi?")

// setTimeout(() => {
//     console.log('function A')
// }, 1500)

// setTimeout(() => {
//     console.log('function B')
// }, 11000)

// setTimeout(() => {
//     console.log('function C')
// }, 1000)

// setTimeout(() => {
//     console.log('function D')
// }, 4000)

// contoh 3
// console.log("Permainan undian ...")

// setTimeout(() => {
//     let probability = Math.floor(Math.random() * 4)
//     if (probability >= 3) {
//         console.log("Menang Undian")
//     } else {
//         console.log("Coba lagi besok")
//     }

//     console.log("Undian selesai!")
// }, 60 * 60 * 1000) 

// --- Callback function ---
// -> callback adalah kondisi ketika suatu function memanggil function lainnya

// contoh 1 -> membunyikan alarm
function setAlarm(time: number, callback: () => void) {
    console.log("Alarm disetel untuk ", time, " detik kedepan")
    setTimeout(() => {
        callback()
    }, time * 1000)
}

function ringAlarm() {
    console.log("Alarm berbunyi! waktunya bangun!")
}

// setAlarm(6, ringAlarm)

// contoh 2 -> mencari driver di gojek
function searchDriver(time: number, callback: () => void) {
    console.log("Mencari driver ... ")
    setTimeout(() => {
        const driver = ["Bambang", "Mulyono", "Fufufafa", "Agus"]
        const probability = Math.floor(Math.random() * driver.length)
        if (probability >= 0) {
            console.log("Menemukan bapak : ", driver[probability])
            callback()
        }
    }, time * 1000)
}

function getDriver(): void {
    console.log("Berhasil mendapatkan driver ... ")
}

searchDriver(5, getDriver)

