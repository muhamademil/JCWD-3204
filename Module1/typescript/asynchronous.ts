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

// searchDriver(5, getDriver)

// contoh 3 -> menyelesaikan pekerjaan rumah
interface HomeTask {
    task: string,
    callback: () => void
}

function doHomework(task: HomeTask) {
    console.log(`Mengerjakan tugas : ${task.task}`)
    setTimeout(() => {
        console.log(`Tugas ${task.task} selesai`)
        task.callback()
    }, 3000)
}

function nextTask() {
    console.log("Sekarang lanjut mengerjakan pekerjaan selanjutnya")
}

// doHomework({ task: "Mencuci baju", callback: nextTask })

// contoh 4 -> cek khodam
function checkKhodam(name: string, callback: (name: string, khodam: string) => void) {
    console.log(`Cek Khodam dari ${name} ...`)
    let probability = Math.floor(Math.random() * 4)
    setTimeout(() => {
        let khodam;
        switch (probability) {
            case 1:
                khodam = "Rawa Rontek"
                console.log(khodam)
                callback(name, khodam)
                break;
            case 2:
                khodam = "Macan Putih"
                console.log("Macan Putih")
                callback(name, khodam)
                break;
            case 3:
                khodam = "Siluman Kodok"
                console.log(khodam)
                callback(name, khodam)
                break;
            case 4:
                khodam = "Titisan Nyi Roro Kidul"
                console.log(khodam)
                callback(name, khodam)
                break;
            default:
                khodam = "Tidak ada khodam"
                console.log(khodam)
        }
    }, 3000)
}

function hasilCheckKhodam(name: string, khodam: string) {
    console.log(`${name} terdapat khodam ${khodam}`)
}

// checkKhodam("cavin", hasilCheckKhodam)

// --- Promise
// -> sebuah metode untuk menghasilkan kejadian dimana hasilnya success atau failed

// contoh 1 -> pembacaan khodam oleh dukun
function bacaKhodam(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log(`Prosesi pembacaan khodamnya dari ${name} ...`)
        setTimeout(() => {
            let khodam = ["Rawa Rontek", "Siluman Fufufafa", "Titisan Mulyono", "Bestie Agus"]
            let probability = Math.floor(Math.random() * khodam.length)
            if (probability >= 4) {
                resolve(`${name} mendapatkan khodam ${khodam[probability]}. Pembacaan khodam sukses!`)
            } else {
                reject("Pembacaan khodam gagal. Dukun terpental")
            }
        }, 5000)
    })
}

// bacaKhodam("Mursyid")
//     .then((response) => {
//         console.log("success response -> ", response)
//     })
//     .catch((error) => {
//         console.log("failed response -> ", error)
//     })

// contoh 2 -> simulasi server part 1
interface IProduct {
    id: number,
    title: string
}
function displayProduct(): Promise<{}> {

    let product: IProduct[] = [
        {
            id: 1,
            title: "Produk A"
        },
        {
            id: 2,
            title: "Produk B"
        },
        {
            id: 3,
            title: "Produk C"
        }
    ]

    return new Promise((resolve, reject) => {
        console.log("Navigate to display product ...")
        let connection = Math.floor(Math.random() * 10)
        setTimeout(() => {
            if (connection > 5) {
                resolve({
                    status: "success retrieve data",
                    data: product
                })
            } else {
                reject({
                    status: "error retrieve data",
                    message: "please check your network connection"
                })
            }
        }, 4000)
    })
}

// displayProduct()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// contoh 3 -> simulasi server part 2
interface Menu {
    id: number,
    title: string,
    image: string
}

class Resto {
    private id: number
    public title: string
    public rating: number
    public menu: Menu[] = []

    constructor(id: number, title: string, rating: number) {
        this.id = id
        this.title = title
        this.rating = rating
    }

    addMenu(menu: Menu) {
        this.menu.push(menu)
    }

    displayRestoInformation(): Promise<{}> {
        console.log("Open resto information ...")
        return new Promise((resolve, reject) => {
            let connection = Math.floor(Math.random() * 10)
            setTimeout(() => {
                if (connection > 5) {
                    resolve({
                        menu: this.menu
                    })
                } else {
                    reject({
                        status: "error",
                        message: "Cannot retrieve resto information. Please check your network connection again"
                    })
                }
            }, 4000)
        })
    }
}

let resto = new Resto(1, "Sederhana", 4.8)
let menu = [
    {
        id: 1,
        title: "Seblak Naga",
        image: "seblak-naga.jpg"
    },
    {
        id: 2,
        title: "Oseng Kadal",
        image: "oseng-kadal.jpg"
    },
    {
        id: 3,
        title: "Rica-rica Cicak",
        image: "rica-rica-cicak.jpg"
    },
    {
        id: 4,
        title: "Tumis Raja Jin",
        image: "tumis-raja-jin.jpg"
    }
]

for (let i = 0; i < menu.length; i++) {
    resto.addMenu({ id: menu[i]?.id, title: menu[i]?.title, image: menu[i]?.image })
}

// resto.displayRestoInformation()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Ended process ...")
//     })

// --- Asynchronous Await 
// -> sama dengan promise, tetapi cara menunggu success/failednya yang berbeda

// contoh 1 -> memanggang kue
function bakeCake(): Promise<{}> {
    return new Promise((resolve, reject) => {
        console.log("Sedang memanggang kue ...")
        setTimeout(() => {
            const isPerfect = Math.floor(Math.random() * 10)
            if (isPerfect >= 4) {
                resolve({
                    status: "success",
                    result: "kue matang dengan sempurna!"
                })
            } else {
                reject({
                    status: "failed",
                    result: "kue jadi gosong"
                })
            }
        }, 4000)
    })
}

async function serveCake() {
    console.log("Menerima pesanan kue ...")
    try {
        const result = await bakeCake()
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Proses selesai ...")
    }
}

// serveCake()

// contoh 2 -> simulasi order makanan via aplikasi online

class Restaurant {
    public restoName: string

    constructor(restoName: string) {
        this.restoName = restoName
    }

    placeOrder(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const orderSuccessful = Math.floor(Math.random() * 10)
                if (orderSuccessful >= 4) {
                    resolve(`Order place succesfully at ${this.restoName}`)
                } else {
                    reject('Failed to place order, please try again')
                }
            }, 6000)
        })
    }
}

class Customer extends Restaurant {
    public customerName: string

    constructor(restoName: string, customerName: string) {
        super(restoName)
        this.customerName = customerName
    }

    deliverOrder(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const deliverSuccessful = Math.floor(Math.random() * 10)
                if (deliverSuccessful >= 4) {
                    resolve(`Order delivered to ${this.customerName}`)
                } else {
                    reject('Failed to deliver order, please try again')
                }
            }, 6000)
        })
    }
}

async function processOrder() {
    const customerOrder = new Customer("Fore Coffee", "Fajri")
    try {
        // proses order makanan
        const orderResult = await customerOrder.placeOrder()
        console.log(orderResult)

        // proses makanan diantarkan
        const deliveryResult = await customerOrder.deliverOrder()
        console.log(deliveryResult)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Ended process ...")
    }
}

processOrder()