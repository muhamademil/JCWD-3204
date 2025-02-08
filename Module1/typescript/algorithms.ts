// Big O Notation
// -- time complexity -> mengukur seberapa cepat algoritma berjalan berdasarkan jumlah input
// -- space complexity -> mengukur jumlah memori yang digunakan oleh algoritma

// O(1) - Constant Time (Waktu Konstan)
// -> ini berarti waktu eksekusi tidak berubah meskipun jumlah datanya bertambah
function getFirstElement(arr: number[]): number {
    return arr[0]
}

// console.time('getFirstElement')
// console.log(getFirstElement([10, 20, 30, 40, 50, 60, 70, 80, 90]))
// console.timeEnd('getFirstElement')

// O(n) - Linear Time (Waktu Linear)
// -> ini berarti waktu eksekusi meningkat seiring bertambahnya jumlah data
// -> harus mencari data satu per satu
function findElement(source: number[], target: number): string | undefined {
    for (let i = 0; i < source.length; i++) {
        if (source[i] === target) {
            return "Found target ";
        }
    }
    return "Target Not Found"
}

// console.time('findElement')
// console.log(findElement(Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)), 70));
// console.timeEnd('findElement')

// case 1 -> menentukan total harga barang belanjaan
interface Grocery {
    name: string,
    price: number
}

const grocery = [
    { name: "Beras", price: 10000 },
    { name: "Gula", price: 12000 },
    { name: "Minyak", price: 15000 },
    { name: "Kopi", price: 8000 }
]

function calculateTotalGrocery(grocery: Grocery[]) {
    let total = 0;
    for (let i = 0; i < grocery.length; i++) {
        total += grocery[i].price
    }
    return total
}

// console.log(grocery[0].price) // -> O(1) karena kita tidak perlu waktu untuk menghitung semuanya
// console.log(calculateTotalGrocery(grocery)) // -> kompleksitas waktunya O(n) karena kita harus menjumlahkan semua harga satu per satu

// case 2 -> antrian pasien di klinik
class ClinicQueue {
    private lastNumber: number = 0;

    getNextQueueNumber(): number {
        this.lastNumber += 1;
        return this.lastNumber
    }
}

const clinic = new ClinicQueue()

// console.log(clinic.getNextQueueNumber())
// console.log(clinic.getNextQueueNumber())
// console.log(clinic.getNextQueueNumber())

// untuk antrian pasien semuanya O(1) karena selalu membutuhkan waktu yang konstan

// -- Brute Force
// -> algoritma yang digunakan untuk mencari keseluruhan data dan membandingkannya satu sama lain

// case 1 : mengetahui orang yang punya tinggi badan yang sama
interface Friends {
    name: string,
    height: number
}
function findMatchingHeights(people: Friends[]) {
    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people.length; j++) {
            if (people[i].height === people[j].height) {
                console.log(people[i].name, " dan ", people[j].name, " mempunyai tinggi yang sama")
            }
        }
    }
}

const friends: Friends[] = [
    { name: "Alice", height: 165 },
    { name: "Bob", height: 170 },
    { name: "Charlie", height: 165 },
    { name: "David", height: 180 }
]

// console.log(findMatchingHeights(friends)) // O(nˆ2) -> quadratic time,  menggunakan dua looping yang bersarang/nested

// --- solving check duplicate with extra memory (v1)
// function checkDuplicate(arr: number[]) {
//     const uniqueData = new Set()
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueData.has(arr[i])) {
//             return true
//         } else {
//             uniqueData.add(arr[i])
//         }
//     }
// }

// const arrNumber = [1, 2, 3, 1]
// console.time("checkDuplicate")
// console.log(checkDuplicate(arrNumber))
// console.timeEnd("checkDuplicate")

// --- solving check duplicate without extra memory (v2)
// function checkDuplicate(arr: number[]) {
//     arr.sort()
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return true
//         }
//     }
//     return false
// }

// const arrNumber = [1, 2, 3, 1]
// console.time("checkDuplicate")
// console.log(checkDuplicate(arrNumber))
// console.timeEnd("checkDuplicate")

// ----- SEARCHING ALGORITHM ------

// -- Binary Search 

// case -> mencari harga barang di gudang
function binarySearchPrices(prices: number[], target: number) {
    let left = 0
    let right = prices.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (prices[mid] === target) {
            return true
        }
        if (prices[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
}

// console.time("binarySearchPrices")
// const warehousePrices = [2000, 5000, 7000, 10000, 15000, 20000, 25000]
// console.log(binarySearchPrices(warehousePrices, 7000))
// console.timeEnd("binarySearchPrices")

// -- Linear Search

// case -> mencari nama teman dalam grup chat
function findFriendInChat(friends: string[], target: string): string {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i] === target) {
            return "Menemukan teman"
        }
    }
    return "Tidak ditemukan"
}

// console.time("findFriendInChat")
// const groupChat = ["Andreas", "Azmi", "Dewa", "Fajri", "Ariq"]
// console.log(findFriendInChat(groupChat, "Emil"))
// console.timeEnd("findFriendInChat")

// ----- SORTING ALGORITHM ------
// -- Bubble Sort

// case -> mengurutkan nilai dari student
function bubbleSort(arr: number[]) {
    let swapped;
    do {
        swapped = false; // asumsikan pada awalnya tidak ada elemen yang ditukar
        for (let i = 0; i < arr.length; i++) {
            // jika elemen saat ini lebih besar dari elemen berikutnya, maka tukar posisi
            if (arr[i] > arr[i + 1]) {
                // tukar elemen
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped); // iterasi ulang jika ada elemen yang ditukar
    return arr; // kembalikan array yang sudah terurut
}

let unsortedData1 = [5, 1, 4, 2, 8];
// console.log(bubbleSort(unsortedData1));