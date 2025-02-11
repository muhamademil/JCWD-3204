// ---- Array ----

// let randomFruits: string[] = ["banana", "apple", "orange", "pineapple", "blueberry"]
// let randomFruits: Array<string> = ["banana", "apple", "orange", "pineapple", "blueberry"]

// let generateRandomNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let generateRandomNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// -- array method built in --

// -- concat
let motorbike = ["Honda", "Yamaha", "Kawasaki", "Suzuki"]
let moreMotorbike = ["BMW", "Aprilia", "Royal Enfield"]
let mergedMotorbike = motorbike.concat(moreMotorbike) // -> untuk menggabungkan 2 array
// console.log("merged motorbike : ", mergedMotorbike)

// -- splice
let people: string[] | string = ["Budi", "Agus", "Tejo", "Tono"]
people.splice(1, 3, "John", "Bob")
// console.log("after spliced : ", people)

// -- reduce
let scores: number[] = [80, 70, 75, 90]
let sumScores = scores.reduce((accumulator, currentValue) => accumulator * currentValue, 0)

// step 1
// accumulator = 0
// currentValue = 0

// step 2
// accumulator = 70
// currentValue = 80

// step 3
// accumulator = 75
// currentValue = 150

// step 4
// accumulator = 90
// currentValue = 225

// step 5
// accumulator = 0
// currentValue = 315

// console.log("after reduced : ", sumScores)

// --- FOR OF ---
let snacks = ["chitato", "lays", "doritos", "pocky"]
// for (let snack of snacks) {
//     console.log(snack)
// }

// --- FOR IN ---
let animal = {
    name: "bob",
    type: "cat",
    age: 2
}

// for (let pet in animal) {
//     // console.log(pet) // -> hanya menghasilkan properti seperti name, type, age
//     // console.log(animal[pet as keyof typeof animal]) // -> hanya menghasilkan value seperti bob, cat, 2

//     console.log(pet, ":", animal[pet as keyof typeof animal])
// }

// --- FOR EACH ---

// case 1
// snacks.forEach((value) => value)
// console.log("gathering snack with for each:", snacks)

// case 2
// let finalScores = [60, 65, 70, 75]
// let finalResult = finalScores.forEach((value) => value * value)
// console.log('final scores : ', finalResult)

// --- MAP ---
// let randomNumber = [60, 65, 70, 75]
// let randomResult = randomNumber.map((value) => value * value)
// console.log('random number : ', randomResult)

// ----- FUNCTION ------

// cara 1 : pakai function biasa
// function sum(a: number, b: number) {
//     return a + b;
// }

// cara 2 : pakai arrow function
const sum = (a: number, b: number) => {
    return a + b
}

// a dan b -> sebagai parameter

// console.log(sum(10, 5)) // -> 10 dan 5 adalah argumen
// console.log(sum(7, 5)) // -> 7 dan 5 adalah argumen
// console.log(sum(4, 5)) // -> 4 dan 5 adalah argumen

// -- Rest Parameter
// case 1 -> multiply with rest parameter
function multiply(...numbers: number[]) {
    return numbers.reduce((acc, curr) => acc * curr, 1)
}

// console.log(multiply(1, 2, 3, 4, 5, 6))

// case 2 -> concatenate string
function concatenateStrings(separator: string, ...words: string[]) {
    return words.join(separator)
}

// console.log(concatenateStrings("-", "Hello", "World", "Typescript", "Is", "Funny"))

// -- Nested Function
// case 1 -> say hello
function outerFunc(name: string) {
    function innerFunc(greeting: string) {
        return greeting + "," + name
    }

    return innerFunc("Hello")
}

// console.log(outerFunc("Budi"))

// case 2 -> count average
function totalAverage(...arr: number[]) {
    let result = arr.reduce((acc, curr) => acc + curr, 0)
    function average(length: number) {
        return result / length
    }

    return average(arr.length)
}

console.log(totalAverage(1, 2, 3, 4, 5))